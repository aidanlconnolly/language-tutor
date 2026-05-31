"use server";

import { desc, eq, and } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { requireAuth } from "@/lib/auth";
import type { Card, Word } from "@/lib/db/schema";

export type DeckRow = { card: Card; word: Word };

/**
 * All surface forms (lemmas + surfaceSeen) that correspond to a saved card
 * for the current user. The Reader uses this to render "already saved" styling
 * on tappable words without needing to look each one up first.
 */
export async function getSavedSurfaces(): Promise<string[]> {
  const userId = await requireAuth();
  const rows = await db
    .select({
      lemma: schema.words.lemma,
      surfaceSeen: schema.words.surfaceSeen,
    })
    .from(schema.cards)
    .innerJoin(schema.words, eq(schema.cards.wordId, schema.words.id))
    .where(eq(schema.cards.userId, userId));
  const set = new Set<string>();
  for (const r of rows) {
    set.add(r.lemma);
    for (const s of r.surfaceSeen ?? []) set.add(s);
  }
  return Array.from(set);
}

export async function getAllCards(): Promise<DeckRow[]> {
  const userId = await requireAuth();
  const rows = await db
    .select()
    .from(schema.cards)
    .innerJoin(schema.words, eq(schema.cards.wordId, schema.words.id))
    .where(eq(schema.cards.userId, userId))
    .orderBy(desc(schema.cards.createdAt));
  return rows.map((r) => ({ card: r.cards, word: r.words }));
}

export async function deleteCard(
  cardId: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const userId = await requireAuth();
    // Only delete if the card belongs to this user
    await db
      .delete(schema.cards)
      .where(
        and(eq(schema.cards.id, cardId), eq(schema.cards.userId, userId)),
      );
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
