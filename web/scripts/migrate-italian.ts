/**
 * One-time migration: copy all Italian tutor data into the language-tutor DB.
 *
 * Run with:
 *   set -a && source .env.local && set +a
 *   set -a && source .env.migrate && set +a   # or set OLD_* vars inline
 *   PATH=/opt/homebrew/bin:$PATH npx tsx scripts/migrate-italian.ts
 *
 * Env vars required:
 *   TURSO_DATABASE_URL / TURSO_AUTH_TOKEN  → new language-tutor DB (from .env.local)
 *   OLD_TURSO_DATABASE_URL / OLD_TURSO_AUTH_TOKEN  → old italian-tutor DB
 */

import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as newSchema from "../lib/db/schema";

async function main() {
  const newUrl = process.env.TURSO_DATABASE_URL;
  const newToken = process.env.TURSO_AUTH_TOKEN;
  const oldUrl = process.env.OLD_TURSO_DATABASE_URL;
  const oldToken = process.env.OLD_TURSO_AUTH_TOKEN;

  if (!newUrl || !oldUrl) {
    console.error("Missing TURSO_DATABASE_URL or OLD_TURSO_DATABASE_URL");
    process.exit(1);
  }

  const oldClient = createClient({ url: oldUrl, authToken: oldToken });
  const newClient = createClient({ url: newUrl, authToken: newToken });
  const newDb = drizzle(newClient, { schema: newSchema });

  console.log("Migrating Italian tutor data...\n");

  // ── Users ──
  const { rows: users } = await oldClient.execute("SELECT * FROM users");
  console.log(`Users: ${users.length}`);
  for (const u of users) {
    await newDb.insert(newSchema.users).values({
      id: u.id as string,
      email: u.email as string,
      passwordHash: u.password_hash as string,
      createdAt: u.created_at as number,
    }).onConflictDoNothing();
  }

  // ── Words ──
  const { rows: words } = await oldClient.execute("SELECT * FROM words");
  console.log(`Words: ${words.length}`);
  for (const w of words) {
    const examples = JSON.parse(w.examples as string ?? "[]") as Array<{ it: string; en: string }>;
    const l1Examples = examples.map((e) => ({ l1: e.it, en: e.en }));
    await newDb.insert(newSchema.words).values({
      id: w.id as string,
      language: "italian",
      lemma: w.lemma as string,
      surfaceSeen: JSON.parse(w.surface_seen as string ?? "[]") as string[],
      pos: w.pos as string,
      gender: (w.gender as string | null) ?? null,
      translation: w.translation as string,
      definition: w.definition as string,
      conjugation: w.conjugation ? (JSON.parse(w.conjugation as string) as Record<string, Record<string, string>>) : null,
      examples: l1Examples,
      grammarNotes: (w.grammar_notes as string | null) ?? null,
      lookedUpAt: w.looked_up_at as number,
    }).onConflictDoNothing();
  }

  // ── Cards ──
  const { rows: cards } = await oldClient.execute("SELECT * FROM cards");
  console.log(`Cards: ${cards.length}`);
  for (const c of cards) {
    await newDb.insert(newSchema.cards).values({
      id: c.id as string,
      userId: (c.user_id as string) ?? "__legacy__",
      language: "italian",
      wordId: c.word_id as string,
      sourceSentence: c.source_sentence as string,
      sourceSurface: c.source_surface as string,
      sourceTextId: (c.source_text_id as string | null) ?? null,
      fsrsDue: c.fsrs_due as number,
      fsrsState: JSON.parse(c.fsrs_state as string) as newSchema.FsrsCardState,
      createdAt: c.created_at as number,
    }).onConflictDoNothing();
  }

  // ── Reviews ──
  const { rows: reviews } = await oldClient.execute("SELECT * FROM reviews");
  console.log(`Reviews: ${reviews.length}`);
  for (const r of reviews) {
    await newDb.insert(newSchema.reviews).values({
      id: r.id as string,
      cardId: r.card_id as string,
      rating: r.rating as number,
      reviewedAt: r.reviewed_at as number,
      prevState: JSON.parse(r.prev_state as string) as newSchema.FsrsCardState,
      newState: JSON.parse(r.new_state as string) as newSchema.FsrsCardState,
    }).onConflictDoNothing();
  }

  // ── Lesson progress ──
  const { rows: lp } = await oldClient.execute("SELECT * FROM lesson_progress");
  console.log(`Lesson progress: ${lp.length}`);
  for (const r of lp) {
    await newDb.insert(newSchema.lessonProgress).values({
      id: r.id as string,
      userId: (r.user_id as string) ?? "__legacy__",
      language: "italian",
      lessonSlug: r.lesson_slug as string,
      unitSlug: r.unit_slug as string,
      completedAt: r.completed_at as number,
      score: (r.score as number) ?? 100,
    }).onConflictDoNothing();
  }

  // ── Checkpoint attempts ──
  const { rows: ca } = await oldClient.execute("SELECT * FROM checkpoint_attempts");
  console.log(`Checkpoint attempts: ${ca.length}`);
  for (const r of ca) {
    await newDb.insert(newSchema.checkpointAttempts).values({
      id: r.id as string,
      userId: (r.user_id as string) ?? "__legacy__",
      language: "italian",
      unitSlug: r.unit_slug as string,
      score: r.score as number,
      passed: (r.passed as number) === 1,
      takenAt: r.taken_at as number,
    }).onConflictDoNothing();
  }

  // ── Read progress ──
  const { rows: rp } = await oldClient.execute("SELECT * FROM read_progress");
  console.log(`Read progress: ${rp.length}`);
  for (const r of rp) {
    await newDb.insert(newSchema.readProgress).values({
      id: r.id as string,
      userId: (r.user_id as string) ?? "__legacy__",
      language: "italian",
      readSlug: r.read_slug as string,
      completedAt: r.completed_at as number,
      comprehensionScore: (r.comprehension_score as number) ?? 0,
    }).onConflictDoNothing();
  }

  // ── Streaks ──
  const { rows: streaks } = await oldClient.execute("SELECT * FROM streaks");
  console.log(`Streaks: ${streaks.length}`);
  for (const r of streaks) {
    await newDb.insert(newSchema.streaks).values({
      userId: (r.user_id as string) ?? "__legacy__",
      language: "italian",
      kind: r.kind as string,
      current: (r.current as number) ?? 0,
      longest: (r.longest as number) ?? 0,
      lastDay: (r.last_day as string | null) ?? null,
    }).onConflictDoNothing();
  }

  console.log("\nMigration complete!");
  await oldClient.close();
  await newClient.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
