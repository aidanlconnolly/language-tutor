import { getApiUserId, apiError, isAuthError, readJson, isBadRequestError } from "@/lib/api-auth";
import { isValidLang } from "@/lib/lang";
import { gradeTranslation } from "@/lib/anthropic";
import type { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<Response> {
  try {
    const { lang: langParam } = await params;
    if (!isValidLang(langParam)) return apiError("Unknown language", 404);
    await getApiUserId(request);
    const { direction, prompt, reference, learner } = await readJson(request);
    if (!direction || !prompt || !reference || !learner?.trim()) return apiError("Missing fields");

    const grade = await gradeTranslation({
      direction, lang: langParam,
      prompt: (prompt as string).normalize("NFC"),
      reference: (reference as string).normalize("NFC"),
      learner: (learner as string).trim().normalize("NFC"),
    });
    return Response.json({ ok: true, grade });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    if (isBadRequestError(err)) return apiError(err.message, 400);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
