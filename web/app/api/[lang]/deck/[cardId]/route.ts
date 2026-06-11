import { and, eq } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { getApiUserId, apiError, isAuthError } from "@/lib/api-auth";
import { isValidLang } from "@/lib/lang";
import type { NextRequest } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string; cardId: string }> },
): Promise<Response> {
  try {
    const { lang: langParam, cardId } = await params;
    if (!isValidLang(langParam)) return apiError("Unknown language", 404);
    const userId = await getApiUserId(request);
    await db.delete(schema.cards)
      .where(and(eq(schema.cards.id, cardId), eq(schema.cards.userId, userId)));
    return Response.json({ ok: true });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
