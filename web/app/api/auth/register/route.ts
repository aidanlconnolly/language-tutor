import type { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { eq } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { createApiToken, apiError } from "@/lib/api-auth";

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const body = await request.json();
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
    await db.insert(schema.users).values({ id, email, passwordHash, createdAt: Date.now() });

    const token = await createApiToken(id, email);
    return Response.json({ ok: true, token, user: { id, email } });
  } catch (err) {
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
