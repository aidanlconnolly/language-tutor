import { nanoid } from "nanoid";
import { sql } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { getApiUserId, apiError, isAuthError, readJson, isBadRequestError } from "@/lib/api-auth";
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
    const { readSlug, comprehensionScore } = await readJson(request);
    if (!readSlug || typeof comprehensionScore !== "number") return apiError("Missing fields");

    const now = Date.now();
    await db
      .insert(schema.readProgress)
      .values({ id: nanoid(), userId, language: langParam, readSlug, completedAt: now, comprehensionScore })
      .onConflictDoUpdate({
        target: [schema.readProgress.userId, schema.readProgress.readSlug, schema.readProgress.language],
        set: { completedAt: now, comprehensionScore: sql`max(${schema.readProgress.comprehensionScore}, ${comprehensionScore})` },
      });
    await touchStreak("read", userId, langParam);
    return Response.json({ ok: true });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    if (isBadRequestError(err)) return apiError(err.message, 400);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
