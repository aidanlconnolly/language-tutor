"use server";

import { and, eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { db, schema } from "@/lib/db/client";
import { lookupWord as claudeLookup } from "@/lib/anthropic";
import { requireAuth, getSession } from "@/lib/auth";
import type { Word } from "@/lib/db/schema";
import type { Lang } from "@/lib/lang";

export type LookupResult =
  | { ok: true; word: Word; cached: boolean; isSaved: boolean }
  | { ok: false; error: string };

/**
 * Look up a word in the specified language. Cache-first: hits Claude only on a lemma miss.
 * The `words` table is scoped by language — one entry per (language, lemma) pair.
 * Only the `cards` table (which records whether *this user* saved the word) is per-user.
 */
export async function lookupWord(args: {
  surface: string;
  sentence: string;
  lang: Lang;
}): Promise<LookupResult> {
  const { lang } = args;
  const surface = args.surface.normalize("NFC");
  const sentence = args.sentence.normalize("NFC");

  try {
    const userId = await requireAuth();

    // Shortcut: have we seen this exact surface form before (in this language's dict)?
    const all = await db.select().from(schema.words).where(eq(schema.words.language, lang));
    const surfaceMatch = all.find(
      (w) =>
        w.lemma === surface ||
        (w.surfaceSeen ?? []).includes(surface),
    );
    if (surfaceMatch) {
      const isSaved = await wordIsSaved(surfaceMatch.id, userId);
      return { ok: true, word: surfaceMatch, cached: true, isSaved };
    }

    // Cache miss → ask Claude
    const lookup = await claudeLookup({ surface, sentence, lang });
    const lemma = lookup.lemma.normalize("NFC");

    const existing = all.find((w) => w.lemma === lemma);
    if (existing) {
      const seen = existing.surfaceSeen ?? [];
      if (!seen.includes(surface)) {
        await db
          .update(schema.words)
          .set({ surfaceSeen: [...seen, surface] })
          .where(eq(schema.words.id, existing.id));
        existing.surfaceSeen = [...seen, surface];
      }
      const isSaved = await wordIsSaved(existing.id, userId);
      return { ok: true, word: existing, cached: true, isSaved };
    }

    const id = nanoid();
    const surfaceSeen =
      surface.toLowerCase() === lemma.toLowerCase() ? [] : [surface];
    const newWord: typeof schema.words.$inferInsert = {
      id,
      language: lang,
      lemma,
      surfaceSeen,
      pos: lookup.pos,
      gender: lookup.gender ?? null,
      translation: lookup.translation,
      definition: lookup.definition,
      conjugation: lookup.conjugation ?? null,
      examples: lookup.examples,
      grammarNotes: lookup.grammar_notes ?? null,
      lookedUpAt: Date.now(),
    };
    await db.insert(schema.words).values(newWord);
    return {
      ok: true,
      word: {
        ...newWord,
        gender: newWord.gender ?? null,
        conjugation: newWord.conjugation ?? null,
        grammarNotes: newWord.grammarNotes ?? null,
        surfaceSeen: newWord.surfaceSeen ?? [],
      } as Word,
      cached: false,
      isSaved: false,
    };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

async function wordIsSaved(wordId: string, userId: string): Promise<boolean> {
  const rows = await db
    .select({ id: schema.cards.id })
    .from(schema.cards)
    .where(and(eq(schema.cards.wordId, wordId), eq(schema.cards.userId, userId)))
    .limit(1);
  return rows.length > 0;
}

/**
 * Returns the set of word IDs that have a card for the current user in the given language.
 * Used by the Reader to render "already saved" styling on TappableWord.
 */
export async function getSavedWordIds(lang: Lang): Promise<Set<string>> {
  const session = await getSession();
  if (!session) return new Set();
  const rows = await db
    .select({ wordId: schema.cards.wordId })
    .from(schema.cards)
    .where(and(eq(schema.cards.userId, session.userId), eq(schema.cards.language, lang)));
  return new Set(rows.map((r) => r.wordId));
}
