"use server";

import { and, eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { db, schema } from "@/lib/db/client";
import { freshCardState } from "@/lib/srs";
import { requireAuth } from "@/lib/auth";

export type SaveResult =
  | { ok: true; cardId: string; created: boolean }
  | { ok: false; error: string };

/**
 * Save (or no-op) a card for the given word, scoped to the current user.
 *
 * Lemma-only semantics: the `cards` table has a composite UNIQUE constraint
 * on (user_id, word_id), so re-saving an already-saved lemma is a no-op that
 * keeps the *original* source sentence. This matches CLAUDE.md's lemma-saving rule.
 */
export async function saveCardForWord(args: {
  wordId: string;
  sourceSurface: string;
  sourceSentence: string;
  sourceTextId?: string;
}): Promise<SaveResult> {
  try {
    const userId = await requireAuth();

    const existing = await db
      .select({ id: schema.cards.id })
      .from(schema.cards)
      .where(
        and(
          eq(schema.cards.userId, userId),
          eq(schema.cards.wordId, args.wordId),
        ),
      )
      .limit(1);

    if (existing.length > 0) {
      return { ok: true, cardId: existing[0].id, created: false };
    }

    const now = Date.now();
    const fresh = freshCardState(new Date(now));
    const id = nanoid();
    await db.insert(schema.cards).values({
      id,
      userId,
      wordId: args.wordId,
      sourceSentence: args.sourceSentence.normalize("NFC"),
      sourceSurface: args.sourceSurface.normalize("NFC"),
      sourceTextId: args.sourceTextId ?? null,
      fsrsDue: Date.parse(fresh.due),
      fsrsState: fresh,
      createdAt: now,
    });

    return { ok: true, cardId: id, created: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
