import { and, desc, eq } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { getApiUserId, apiError, isAuthError } from "@/lib/api-auth";
import { isValidLang } from "@/lib/lang";
import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<Response> {
  try {
    const { lang: langParam } = await params;
    if (!isValidLang(langParam)) return apiError("Unknown language", 404);
    const userId = await getApiUserId(request);

    const [lessons, checkpoints, reads, streaks] = await Promise.all([
      db.select().from(schema.lessonProgress)
        .where(and(eq(schema.lessonProgress.userId, userId), eq(schema.lessonProgress.language, langParam))),
      db.select().from(schema.checkpointAttempts)
        .where(and(eq(schema.checkpointAttempts.userId, userId), eq(schema.checkpointAttempts.language, langParam)))
        .orderBy(desc(schema.checkpointAttempts.takenAt)),
      db.select().from(schema.readProgress)
        .where(and(eq(schema.readProgress.userId, userId), eq(schema.readProgress.language, langParam))),
      db.select().from(schema.streaks)
        .where(and(eq(schema.streaks.userId, userId), eq(schema.streaks.language, langParam))),
    ]);

    const checkpointMap = new Map<string, { bestScore: number; passed: boolean; lastTakenAt: number }>();
    for (const r of checkpoints) {
      const cur = checkpointMap.get(r.unitSlug);
      if (!cur) {
        checkpointMap.set(r.unitSlug, { bestScore: r.score, passed: r.passed, lastTakenAt: r.takenAt });
      } else {
        checkpointMap.set(r.unitSlug, {
          bestScore: Math.max(cur.bestScore, r.score),
          passed: cur.passed || r.passed,
          lastTakenAt: Math.max(cur.lastTakenAt, r.takenAt),
        });
      }
    }

    return Response.json({
      ok: true,
      lessons: lessons.map((r) => ({ lessonSlug: r.lessonSlug, unitSlug: r.unitSlug, completedAt: r.completedAt, score: r.score })),
      checkpoints: Array.from(checkpointMap.entries()).map(([unitSlug, v]) => ({ unitSlug, ...v })),
      reads: reads.map((r) => ({ readSlug: r.readSlug, completedAt: r.completedAt, comprehensionScore: r.comprehensionScore })),
      streaks: streaks.map((r) => ({ kind: r.kind, current: r.current, longest: r.longest, lastDay: r.lastDay })),
    });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
