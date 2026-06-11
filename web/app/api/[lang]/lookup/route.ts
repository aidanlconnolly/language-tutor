import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { and } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { getApiUserId, apiError, isAuthError } from "@/lib/api-auth";
import { isValidLang } from "@/lib/lang";
import { lookupWord as claudeLookup } from "@/lib/anthropic";
import type { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<Response> {
  try {
    const { lang: langParam } = await params;
    if (!isValidLang(langParam)) return apiError("Unknown language", 404);
    const userId = await getApiUserId(request);
    const { surface: rawSurface, sentence: rawSentence } = await request.json();
    const surface = ((rawSurface as string) ?? "").normalize("NFC");
    const sentence = ((rawSentence as string) ?? "").normalize("NFC");
    if (!surface || !sentence) return apiError("Missing surface or sentence");

    const all = await db.select().from(schema.words).where(eq(schema.words.language, langParam));
    const surfaceMatch = all.find(
      (w) => w.lemma === surface || (w.surfaceSeen ?? []).includes(surface),
    );
    if (surfaceMatch) {
      const isSaved = await wordIsSaved(surfaceMatch.id, userId);
      return Response.json({ ok: true, word: surfaceMatch, cached: true, isSaved });
    }

    const lookup = await claudeLookup({ surface, sentence, lang: langParam });
    const lemma = lookup.lemma.normalize("NFC");
    const existing = all.find((w) => w.lemma === lemma);
    if (existing) {
      const seen = existing.surfaceSeen ?? [];
      if (!seen.includes(surface)) {
        await db.update(schema.words).set({ surfaceSeen: [...seen, surface] }).where(eq(schema.words.id, existing.id));
        existing.surfaceSeen = [...seen, surface];
      }
      const isSaved = await wordIsSaved(existing.id, userId);
      return Response.json({ ok: true, word: existing, cached: true, isSaved });
    }

    const id = nanoid();
    const surfaceSeen = surface.toLowerCase() === lemma.toLowerCase() ? [] : [surface];
    const newWord = {
      id, language: langParam, lemma, surfaceSeen,
      pos: lookup.pos, gender: lookup.gender ?? null,
      translation: lookup.translation, definition: lookup.definition,
      conjugation: lookup.conjugation ?? null, examples: lookup.examples,
      grammarNotes: lookup.grammar_notes ?? null, lookedUpAt: Date.now(),
    };
    await db.insert(schema.words).values(newWord);
    return Response.json({ ok: true, word: newWord, cached: false, isSaved: false });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}

async function wordIsSaved(wordId: string, userId: string): Promise<boolean> {
  const rows = await db.select({ id: schema.cards.id }).from(schema.cards)
    .where(and(eq(schema.cards.wordId, wordId), eq(schema.cards.userId, userId))).limit(1);
  return rows.length > 0;
}
