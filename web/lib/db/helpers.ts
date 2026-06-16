import { eq, inArray, sql } from "drizzle-orm";
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
  // Atomic upsert: same-day → unchanged, consecutive day → +1, gap → reset to 1.
  const nextCurrent = sql`case
    when ${schema.streaks.lastDay} = ${today} then ${schema.streaks.current}
    when ${schema.streaks.lastDay} = ${yest} then ${schema.streaks.current} + 1
    else 1 end`;
  await db
    .insert(schema.streaks)
    .values({ userId, language: lang, kind, current: 1, longest: 1, lastDay: today })
    .onConflictDoUpdate({
      target: [schema.streaks.userId, schema.streaks.language, schema.streaks.kind],
      set: {
        current: nextCurrent,
        longest: sql`max(${schema.streaks.longest}, ${nextCurrent})`,
        lastDay: today,
      },
    });
}

/**
 * Permanently delete a user and ALL of their data, across every language.
 * Children are deleted before parents so this is correct even when SQLite
 * foreign-key enforcement (PRAGMA foreign_keys) is off. The global `words`
 * and `texts` caches are intentionally left untouched — they are shared.
 *
 * Backs both the mobile `DELETE /api/account` route and the web
 * `deleteAccountAction`, satisfying App Store Guideline 5.1.1(v).
 */
export async function deleteUserData(userId: string): Promise<void> {
  // reviews reference cards; remove them first via the user's card ids
  const userCards = await db
    .select({ id: schema.cards.id })
    .from(schema.cards)
    .where(eq(schema.cards.userId, userId));
  const cardIds = userCards.map((c) => c.id);
  if (cardIds.length > 0) {
    await db.delete(schema.reviews).where(inArray(schema.reviews.cardId, cardIds));
  }

  await db.delete(schema.cards).where(eq(schema.cards.userId, userId));
  await db.delete(schema.lessonProgress).where(eq(schema.lessonProgress.userId, userId));
  await db.delete(schema.checkpointAttempts).where(eq(schema.checkpointAttempts.userId, userId));
  await db.delete(schema.readProgress).where(eq(schema.readProgress.userId, userId));
  await db.delete(schema.streaks).where(eq(schema.streaks.userId, userId));
  await db.delete(schema.users).where(eq(schema.users.id, userId));
}
