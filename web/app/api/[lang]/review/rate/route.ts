import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { db, schema } from "@/lib/db/client";
import { getApiUserId, apiError, isAuthError, readJson, isBadRequestError } from "@/lib/api-auth";
import { isValidLang } from "@/lib/lang";
import { applyRating, ratingFromInt } from "@/lib/srs";
import type { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<Response> {
  try {
    const { lang: langParam } = await params;
    if (!isValidLang(langParam)) return apiError("Unknown language", 404);
    const userId = await getApiUserId(request);
    const { cardId, rating: ratingNum } = await readJson(request);
    const rating = ratingFromInt(ratingNum);
    if (!rating) return apiError(`Invalid rating ${ratingNum}`);

    const rows = await db.select().from(schema.cards).where(eq(schema.cards.id, cardId)).limit(1);
    if (rows.length === 0) return apiError("Card not found", 404);
    const card = rows[0];
    if (card.userId !== userId) return apiError("Card not found", 404);

    const now = new Date();
    const { state, dueMs } = applyRating(card.fsrsState, rating, now);
    await db.update(schema.cards).set({ fsrsState: state, fsrsDue: dueMs }).where(eq(schema.cards.id, card.id));
    await db.insert(schema.reviews).values({
      id: nanoid(), cardId: card.id, rating: ratingNum, reviewedAt: now.getTime(),
      prevState: card.fsrsState, newState: state,
    });
    return Response.json({ ok: true, nextDueMs: dueMs });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    if (isBadRequestError(err)) return apiError(err.message, 400);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
