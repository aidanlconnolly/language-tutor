import { nanoid } from "nanoid";
import { sql } from "drizzle-orm";
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
    // Atomic upsert — first-ever double-fire would otherwise race on the UNIQUE index.
    await db
      .insert(schema.lessonProgress)
      .values({ id: nanoid(), userId, language: langParam, lessonSlug, unitSlug, completedAt: now, score })
      .onConflictDoUpdate({
        target: [schema.lessonProgress.userId, schema.lessonProgress.lessonSlug, schema.lessonProgress.language],
        set: { completedAt: now, score: sql`max(${schema.lessonProgress.score}, ${score})` },
      });
    await touchStreak("lesson", userId, langParam);
    return Response.json({ ok: true });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
