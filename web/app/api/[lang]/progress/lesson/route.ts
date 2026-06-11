import { and, eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { db, schema } from "@/lib/db/client";
import { getApiUserId, apiError, isAuthError } from "@/lib/api-auth";
import { touchStreak } from "@/lib/db/helpers";
import { isValidLang } from "@/lib/lang";
import type { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<Response> {
  try {
    const { lang: langParam } = await params;
    if (!isValidLang(langParam)) return apiError("Unknown language", 404);
    const userId = await getApiUserId(request);
    const { unitSlug, lessonSlug, score } = await request.json();
    if (!unitSlug || !lessonSlug || typeof score !== "number") return apiError("Missing fields");

    const now = Date.now();
    const existing = await db
      .select()
      .from(schema.lessonProgress)
      .where(and(
        eq(schema.lessonProgress.userId, userId),
        eq(schema.lessonProgress.lessonSlug, lessonSlug),
        eq(schema.lessonProgress.language, langParam),
      ))
      .limit(1);

    if (existing.length > 0) {
      await db.update(schema.lessonProgress)
        .set({ score: Math.max(existing[0].score, score), completedAt: now })
        .where(and(
          eq(schema.lessonProgress.userId, userId),
          eq(schema.lessonProgress.lessonSlug, lessonSlug),
          eq(schema.lessonProgress.language, langParam),
        ));
    } else {
      await db.insert(schema.lessonProgress).values({
        id: nanoid(), userId, language: langParam, lessonSlug, unitSlug, completedAt: now, score,
      });
    }
    await touchStreak("lesson", userId, langParam);
    return Response.json({ ok: true });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
