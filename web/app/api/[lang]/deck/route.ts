import { and, desc, eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { db, schema } from "@/lib/db/client";
import { getApiUserId, apiError, isAuthError } from "@/lib/api-auth";
import { isValidLang } from "@/lib/lang";
import { freshCardState } from "@/lib/srs";
import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<Response> {
  try {
    const { lang: langParam } = await params;
    if (!isValidLang(langParam)) return apiError("Unknown language", 404);
    const userId = await getApiUserId(request);

    const rows = await db
      .select()
      .from(schema.cards)
      .innerJoin(schema.words, eq(schema.cards.wordId, schema.words.id))
      .where(and(eq(schema.cards.userId, userId), eq(schema.cards.language, langParam)))
      .orderBy(desc(schema.cards.createdAt));

    const surfaces: string[] = [];
    for (const r of rows) {
      surfaces.push(r.words.lemma);
      for (const s of r.words.surfaceSeen ?? []) surfaces.push(s);
    }

    return Response.json({
      ok: true,
      cards: rows.map((r) => ({ card: r.cards, word: r.words })),
      savedSurfaces: [...new Set(surfaces)],
    });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<Response> {
  try {
    const { lang: langParam } = await params;
    if (!isValidLang(langParam)) return apiError("Unknown language", 404);
    const userId = await getApiUserId(request);
    const { wordId, sourceSurface, sourceSentence, sourceTextId } = await request.json();
    if (!wordId || !sourceSurface || !sourceSentence) return apiError("Missing fields");

    const existing = await db
      .select({ id: schema.cards.id })
      .from(schema.cards)
      .where(and(eq(schema.cards.userId, userId), eq(schema.cards.wordId, wordId)))
      .limit(1);
    if (existing.length > 0) return Response.json({ ok: true, cardId: existing[0].id, created: false });

    const now = Date.now();
    const fresh = freshCardState(new Date(now));
    const id = nanoid();
    await db.insert(schema.cards).values({
      id, userId, language: langParam, wordId,
      sourceSentence: (sourceSentence as string).normalize("NFC"),
      sourceSurface: (sourceSurface as string).normalize("NFC"),
      sourceTextId: sourceTextId ?? null,
      fsrsDue: Date.parse(fresh.due),
      fsrsState: fresh,
      createdAt: now,
    });
    return Response.json({ ok: true, cardId: id, created: true });
  } catch (err) {
    if (isAuthError(err)) return apiError("Unauthorized", 401);
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
