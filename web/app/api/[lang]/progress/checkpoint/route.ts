import { nanoid } from "nanoid";
import { db, schema } from "@/lib/db/client";
import { getApiUserId, apiError, isAuthError, readJson, isBadRequestError } from "@/lib/api-auth";
import { isValidLang } from "@/lib/lang";
import { findUnit } from "@/lib/content";
import type { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<Response> {
  try {
    const { lang: langParam } = await params;
    if (!isValidLang(langParam)) return apiError("Unknown language", 404);
    const userId = await getApiUserId(request);
    const { unitSlug, score } = await readJson(request);
    if (!unitSlug || typeof score !== "number") return apiError("Missing fields");

    const unit = findUnit(langParam, unitSlug);
    if (!unit) return apiError("Unknown unit", 404);
    const passed = score >= unit.checkpoint.passingPct;

    await db.insert(schema.checkpointAttempts).values({
      id: nanoid(), userId, language: langParam, unitSlug, score, passed, takenAt: Date.now(),
    });
    return Response.json({ ok: true, passed });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    if (isBadRequestError(err)) return apiError(err.message, 400);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
