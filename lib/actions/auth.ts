"use server";

import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { db, schema } from "@/lib/db/client";
import { createSession, deleteSession } from "@/lib/auth";

export type AuthState = { error: string } | null;

export async function registerAction(
  _prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = ((formData.get("email") as string) ?? "").trim().toLowerCase();
  const password = (formData.get("password") as string) ?? "";

  if (!email || !password) return { error: "Email and password are required" };
  if (password.length < 8)
    return { error: "Password must be at least 8 characters" };

  const existing = await db
    .select({ id: schema.users.id })
    .from(schema.users)
    .where(eq(schema.users.email, email))
    .limit(1);
  if (existing.length > 0)
    return { error: "An account with that email already exists" };

  const passwordHash = await bcrypt.hash(password, 12);
  const id = nanoid();
  await db
    .insert(schema.users)
    .values({ id, email, passwordHash, createdAt: Date.now() });
  await createSession({ userId: id, email });
  redirect("/");
}

export async function loginAction(
  _prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = ((formData.get("email") as string) ?? "").trim().toLowerCase();
  const password = (formData.get("password") as string) ?? "";

  if (!email || !password) return { error: "Email and password are required" };

  const rows = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email))
    .limit(1);
  if (rows.length === 0) return { error: "Invalid email or password" };

  const user = rows[0];
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return { error: "Invalid email or password" };

  await createSession({ userId: user.id, email: user.email });
  redirect("/");
}

export async function logoutAction(): Promise<void> {
  await deleteSession();
  redirect("/login");
}
