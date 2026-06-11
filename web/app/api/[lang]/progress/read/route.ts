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
    const { readSlug, comprehensionScore } = await request.json();
    if (!readSlug || typeof comprehensionScore !== "number") return apiError("Missing fields");

    const existing = await db
      .select()
      .from(schema.readProgress)
      .where(and(
        eq(schema.readProgress.userId, userId),
        eq(schema.readProgress.readSlug, readSlug),
        eq(schema.readProgress.language, langParam),
      ))
      .limit(1);

    if (existing.length > 0) {
      await db.update(schema.readProgress)
        .set({ completedAt: Date.now(), comprehensionScore: Math.max(existing[0].comprehensionScore, comprehensionScore) })
        .where(and(
          eq(schema.readProgress.userId, userId),
          eq(schema.readProgress.readSlug, readSlug),
          eq(schema.readProgress.language, langParam),
        ));
    } else {
      await db.insert(schema.readProgress).values({
        id: nanoid(), userId, language: langParam, readSlug, completedAt: Date.now(), comprehensionScore,
      });
    }
    await touchStreak("read", userId, langParam);
    return Response.json({ ok: true });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
