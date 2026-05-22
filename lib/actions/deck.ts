"use server";

import { desc, eq } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import type { Card, Word } from "@/lib/db/schema";

export type DeckRow = { card: Card; word: Word };

/**
 * All surface forms (lemmas + surfaceSeen) that correspond to a saved card.
 * The Reader uses this to render "already saved" styling on tappable words
 * without needing to look each one up first.
 */
export async function getSavedSurfaces(): Promise<string[]> {
  const rows = await db
    .select({
      lemma: schema.words.lemma,
      surfaceSeen: schema.words.surfaceSeen,
    })
    .from(schema.cards)
    .innerJoin(schema.words, eq(schema.cards.wordId, schema.words.id));
  const set = new Set<string>();
  for (const r of rows) {
    set.add(r.lemma);
    for (const s of r.surfaceSeen ?? []) set.add(s);
  }
  return Array.from(set);
}

export async function getAllCards(): Promise<DeckRow[]> {
  const rows = await db
    .select()
    .from(schema.cards)
    .innerJoin(schema.words, eq(schema.cards.wordId, schema.words.id))
    .orderBy(desc(schema.cards.createdAt));
  return rows.map((r) => ({ card: r.cards, word: r.words }));
}

export async function deleteCard(cardId: string): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    await db.delete(schema.cards).where(eq(schema.cards.id, cardId));
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
