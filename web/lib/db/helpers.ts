import { and, eq } from "drizzle-orm";
import { db, schema } from "@/lib/db/client";

function localDay(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function priorDay(day: string): string {
  const [y, m, d] = day.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() - 1);
  return localDay(date);
}

export async function touchStreak(kind: "lesson" | "read", userId: string, lang: string): Promise<void> {
  const today = localDay();
  const yest = priorDay(today);
  const rows = await db
    .select()
    .from(schema.streaks)
    .where(and(eq(schema.streaks.userId, userId), eq(schema.streaks.language, lang), eq(schema.streaks.kind, kind)))
    .limit(1);
  if (rows.length === 0) {
    await db.insert(schema.streaks).values({ userId, language: lang, kind, current: 1, longest: 1, lastDay: today });
    return;
  }
  const r = rows[0];
  if (r.lastDay === today) return;
  const newCurrent = r.lastDay === yest ? r.current + 1 : 1;
  await db.update(schema.streaks)
    .set({ current: newCurrent, longest: Math.max(r.longest, newCurrent), lastDay: today })
    .where(and(eq(schema.streaks.userId, userId), eq(schema.streaks.language, lang), eq(schema.streaks.kind, kind)));
}
