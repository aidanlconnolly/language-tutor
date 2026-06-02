"use server";

import { and, asc, eq, lte } from "drizzle-orm";
import { nanoid } from "nanoid";
import { db, schema } from "@/lib/db/client";
import { requireAuth } from "@/lib/auth";
import type { Card, Word } from "@/lib/db/schema";
import {
  applyRating,
  previewIntervals,
  ratingFromInt,
  type Rating1to4,
} from "@/lib/srs";
import type { Lang } from "@/lib/lang";

export type ReviewRow = {
  card: Card;
  word: Word;
  intervals: Record<Rating1to4, string>;
};

/**
 * Cards due now (fsrs_due <= now) for the current user in the given language.
 * Includes joined word + predicted intervals for each of the 4 ratings.
 */
export async function getDueCards(lang: Lang, limit = 50): Promise<ReviewRow[]> {
  const userId = await requireAuth();
  const now = Date.now();
  const rows = await db
    .select()
    .from(schema.cards)
    .innerJoin(schema.words, eq(schema.cards.wordId, schema.words.id))
    .where(
      and(
        eq(schema.cards.userId, userId),
        eq(schema.cards.language, lang),
        lte(schema.cards.fsrsDue, now),
      ),
    )
    .orderBy(asc(schema.cards.fsrsDue))
    .limit(limit);

  const nowDate = new Date(now);
  return rows.map((r) => ({
    card: r.cards,
    word: r.words,
    intervals: previewIntervals(r.cards.fsrsState, nowDate),
  }));
}

export type RateResult =
  | { ok: true; nextDueMs: number }
  | { ok: false; error: string };

export async function rateCard(args: {
  cardId: string;
  rating: number;
}): Promise<RateResult> {
  const rating = ratingFromInt(args.rating);
  if (!rating) return { ok: false, error: `Invalid rating ${args.rating}` };

  try {
    const userId = await requireAuth();

    const rows = await db
      .select()
      .from(schema.cards)
      .where(eq(schema.cards.id, args.cardId))
      .limit(1);
    if (rows.length === 0) {
      return { ok: false, error: "Card not found" };
    }
    const card = rows[0];
    // Safety: ensure this card belongs to the current user
    if (card.userId !== userId) {
      return { ok: false, error: "Card not found" };
    }

    const now = new Date();
    const { state, dueMs } = applyRating(card.fsrsState, rating, now);

    await db
      .update(schema.cards)
      .set({ fsrsState: state, fsrsDue: dueMs })
      .where(eq(schema.cards.id, card.id));

    await db.insert(schema.reviews).values({
      id: nanoid(),
      cardId: card.id,
      rating,
      reviewedAt: now.getTime(),
      prevState: card.fsrsState,
      newState: state,
    });

    return { ok: true, nextDueMs: dueMs };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

/** Counts for the home dashboard (scoped to current user + language). */
export async function getDailyStats(lang: Lang): Promise<{
  dueNow: number;
  reviewedToday: number;
  deckSize: number;
  retention7d: number | null;
}> {
  const userId = await requireAuth();
  const now = Date.now();
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const startMs = startOfDay.getTime();
  const sevenDaysAgo = now - 7 * 86_400_000;

  const allCards = await db
    .select()
    .from(schema.cards)
    .where(and(eq(schema.cards.userId, userId), eq(schema.cards.language, lang)));
  const dueNow = allCards.filter((c) => c.fsrsDue <= now).length;

  // Reviews are linked to cards; filter via join
  const recentReviews = await db
    .select({
      rating: schema.reviews.rating,
      reviewedAt: schema.reviews.reviewedAt,
    })
    .from(schema.reviews)
    .innerJoin(schema.cards, eq(schema.reviews.cardId, schema.cards.id))
    .where(and(eq(schema.cards.userId, userId), eq(schema.cards.language, lang)));

  const reviewedToday = recentReviews.filter((r) => r.reviewedAt >= startMs).length;
  const last7 = recentReviews.filter((r) => r.reviewedAt >= sevenDaysAgo);
  const retention7d =
    last7.length === 0
      ? null
      : last7.filter((r) => r.rating >= 2).length / last7.length;

  return {
    dueNow,
    reviewedToday,
    deckSize: allCards.length,
    retention7d,
  };
}

/**
 * Convenience: serve everything the /review page needs in one round trip.
 */
export async function fetchInitialReviewBatch(lang: Lang): Promise<ReviewRow[]> {
  return getDueCards(lang, 50);
}
