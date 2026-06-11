import type { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";
import { createApiToken, apiError } from "@/lib/api-auth";

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const body = await request.json();
    const email = ((body.email as string) ?? "").trim().toLowerCase();
    const password = (body.password as string) ?? "";

    if (!email || !password) return apiError("Email and password are required");

    const rows = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.email, email))
      .limit(1);
    if (rows.length === 0) return apiError("Invalid email or password", 401);

    const user = rows[0];
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return apiError("Invalid email or password", 401);

    const token = await createApiToken(user.id, user.email);
    return Response.json({ ok: true, token, user: { id: user.id, email: user.email } });
  } catch (err) {
    return apiError(err instanceof Error ? err.message : "Server error", 500);
  }
}
