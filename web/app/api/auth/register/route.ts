import type { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { eq } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { createApiToken, apiError, readJson, isBadRequestError } from "@/lib/api-auth";

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const body = await readJson<{ email?: string; password?: string }>(request);
    const email = ((body.email as string) ?? "").trim().toLowerCase();
    const password = (body.password as string) ?? "";

    if (!email || !password) return apiError("Email and password are required");
    if (password.length < 8) return apiError("Password must be at least 8 characters");

    const existing = await db
      .select({ id: schema.users.id })
      .from(schema.users)
      .where(eq(schema.users.email, email))
      .limit(1);
    if (existing.length > 0) return apiError("An account with that email already exists");

    const passwordHash = await bcrypt.hash(password, 12);
    const id = nanoid();
    try {
      await db.insert(schema.users).values({ id, email, passwordHash, createdAt: Date.now() });
    } catch (err) {
      // Concurrent registration that lost the UNIQUE(email) race — surface the
      // friendly 400 rather than a raw 500 with the DB error string.
      if (String(err).includes("UNIQUE")) {
        return apiError("An account with that email already exists");
      }
      throw err;
    }

    const token = await createApiToken(id, email);
    return Response.json({ ok: true, token, user: { id, email } });
  } catch (err) {
    if (isBadRequestError(err)) return apiError(err.message, 400);
    return apiError("Server error", 500);
  }
}
