import { and, asc, eq, lte } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { getApiUserId, apiError, isAuthError } from "@/lib/api-auth";
import { isValidLang } from "@/lib/lang";
import { previewIntervals } from "@/lib/srs";
import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<Response> {
  try {
    const { lang: langParam } = await params;
    if (!isValidLang(langParam)) return apiError("Unknown language", 404);
    const userId = await getApiUserId(request);
    const now = Date.now();

    const dueRows = await db
      .select()
      .from(schema.cards)
      .innerJoin(schema.words, eq(schema.cards.wordId, schema.words.id))
      .where(and(
        eq(schema.cards.userId, userId),
        eq(schema.cards.language, langParam),
        lte(schema.cards.fsrsDue, now),
      ))
      .orderBy(asc(schema.cards.fsrsDue))
      .limit(50);

    const nowDate = new Date(now);
    const cards = dueRows.map((r) => ({
      card: r.cards,
      word: r.words,
      intervals: previewIntervals(r.cards.fsrsState, nowDate),
    }));

    // Daily stats
    const allCards = await db
      .select()
      .from(schema.cards)
      .where(and(eq(schema.cards.userId, userId), eq(schema.cards.language, langParam)));
    const dueNow = allCards.filter((c) => c.fsrsDue <= now).length;

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const recentReviews = await db
      .select({ rating: schema.reviews.rating, reviewedAt: schema.reviews.reviewedAt })
      .from(schema.reviews)
      .innerJoin(schema.cards, eq(schema.reviews.cardId, schema.cards.id))
      .where(and(eq(schema.cards.userId, userId), eq(schema.cards.language, langParam)));

    const reviewedToday = recentReviews.filter((r) => r.reviewedAt >= startOfDay.getTime()).length;
    const last7 = recentReviews.filter((r) => r.reviewedAt >= now - 7 * 86_400_000);
    const retention7d = last7.length === 0
      ? null
      : last7.filter((r) => r.rating >= 2).length / last7.length;

    return Response.json({
      ok: true,
      cards,
      stats: { dueNow, reviewedToday, deckSize: allCards.length, retention7d },
    });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
