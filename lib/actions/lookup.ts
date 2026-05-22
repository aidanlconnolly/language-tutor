"use server";

import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { db, schema } from "@/lib/db/client";
import { lookupItalianWord } from "@/lib/anthropic";
import type { Word } from "@/lib/db/schema";

export type LookupResult =
  | { ok: true; word: Word; cached: boolean; isSaved: boolean }
  | { ok: false; error: string };

/**
 * Look up an Italian word. Cache-first: hits Claude only on a lemma miss.
 *
 * Strategy:
 *  1. Ask Claude what the lemma is (always; we can't lemmatize "vado" → "andare"
 *     reliably on our own).
 *  2. Check the words table by lemma.
 *  3. If miss: insert; if hit: append the surface form to surfaceSeen if new.
 *
 * Future optimization (NOT in v1): keep a small client-side surface→lemma map
 * so we skip the Claude call entirely for forms we've already resolved. For
 * now Haiku is cheap enough that one call per *tap* is acceptable on miss-only
 * lemmas; subsequent taps of the same lemma hit the cache instantly.
 *
 * Even simpler shortcut we DO take: if the surface itself exists in any
 * `surface_seen` row, return that row immediately — zero Claude calls.
 */
export async function lookupWord(args: {
  surface: string;
  sentence: string;
}): Promise<LookupResult> {
  const surface = args.surface.normalize("NFC");
  const sentence = args.sentence.normalize("NFC");

  try {
    // Shortcut: have we seen this exact surface form before?
    const all = await db.select().from(schema.words);
    const surfaceMatch = all.find(
      (w) =>
        w.lemma === surface ||
        (w.surfaceSeen ?? []).includes(surface),
    );
    if (surfaceMatch) {
      const isSaved = await wordIsSaved(surfaceMatch.id);
      return { ok: true, word: surfaceMatch, cached: true, isSaved };
    }

    // Cache miss → ask Claude
    const lookup = await lookupItalianWord({ surface, sentence });
    const lemma = lookup.lemma.normalize("NFC");

    // Race-safe: another tap may have just inserted this lemma. Try-insert
    // then fall back to read on unique-conflict.
    const existing = all.find((w) => w.lemma === lemma);
    if (existing) {
      // Append the new surface form if we haven't seen it
      const seen = existing.surfaceSeen ?? [];
      if (!seen.includes(surface)) {
        await db
          .update(schema.words)
          .set({ surfaceSeen: [...seen, surface] })
          .where(eq(schema.words.id, existing.id));
        existing.surfaceSeen = [...seen, surface];
      }
      const isSaved = await wordIsSaved(existing.id);
      return { ok: true, word: existing, cached: true, isSaved };
    }

    const id = nanoid();
    const surfaceSeen =
      surface.toLowerCase() === lemma.toLowerCase() ? [] : [surface];
    const newWord: typeof schema.words.$inferInsert = {
      id,
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
      word: { ...newWord, gender: newWord.gender ?? null, conjugation: newWord.conjugation ?? null, grammarNotes: newWord.grammarNotes ?? null, surfaceSeen: newWord.surfaceSeen ?? [] } as Word,
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

async function wordIsSaved(wordId: string): Promise<boolean> {
  const rows = await db
    .select({ id: schema.cards.id })
    .from(schema.cards)
    .where(eq(schema.cards.wordId, wordId))
    .limit(1);
  return rows.length > 0;
}

/**
 * Returns the set of word IDs that have a card. Used by the Reader to render
 * "already saved" styling on TappableWord.
 */
export async function getSavedWordIds(): Promise<Set<string>> {
  const rows = await db
    .select({ wordId: schema.cards.wordId })
    .from(schema.cards);
  return new Set(rows.map((r) => r.wordId));
}
