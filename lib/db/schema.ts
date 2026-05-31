import {
  sqliteTable,
  text,
  integer,
  index,
  uniqueIndex,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

/* ─────────── Users ─────────── */

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: integer("created_at").notNull(),
});

/* ─────────── Shared word dictionary (no userId — global cache) ─────────── */

export const words = sqliteTable(
  "words",
  {
    id: text("id").primaryKey(),
    lemma: text("lemma").notNull().unique(),
    surfaceSeen: text("surface_seen", { mode: "json" })
      .$type<string[]>()
      .notNull()
      .default([]),
    pos: text("pos").notNull(),
    gender: text("gender"),
    translation: text("translation").notNull(),
    definition: text("definition").notNull(),
    conjugation: text("conjugation", { mode: "json" }).$type<
      Record<string, Record<string, string>>
    >(),
    examples: text("examples", { mode: "json" })
      .$type<Array<{ it: string; en: string }>>()
      .notNull()
      .default([]),
    grammarNotes: text("grammar_notes"),
    lookedUpAt: integer("looked_up_at").notNull(),
  },
  (t) => [index("words_lemma_idx").on(t.lemma)],
);

export const texts = sqliteTable("texts", {
  id: text("id").primaryKey(),
  title: text("title"),
  content: text("content").notNull(),
  createdAt: integer("created_at").notNull(),
});

/* ─────────── Per-user tables ─────────── */

export const cards = sqliteTable(
  "cards",
  {
    id: text("id").primaryKey(),
    // userId: defaults to '__legacy__' so existing rows survive drizzle-kit push
    userId: text("user_id").notNull().default("__legacy__"),
    wordId: text("word_id")
      .notNull()
      .references(() => words.id, { onDelete: "cascade" }),
    sourceSentence: text("source_sentence").notNull(),
    sourceSurface: text("source_surface").notNull(),
    sourceTextId: text("source_text_id").references(() => texts.id, {
      onDelete: "set null",
    }),
    fsrsDue: integer("fsrs_due").notNull(),
    fsrsState: text("fsrs_state", { mode: "json" })
      .$type<FsrsCardState>()
      .notNull(),
    createdAt: integer("created_at").notNull(),
  },
  (t) => [
    // Composite unique: one card per word per user
    uniqueIndex("cards_user_word_idx").on(t.userId, t.wordId),
    index("cards_fsrs_due_idx").on(t.fsrsDue),
  ],
);

export const reviews = sqliteTable("reviews", {
  id: text("id").primaryKey(),
  cardId: text("card_id")
    .notNull()
    .references(() => cards.id, { onDelete: "cascade" }),
  rating: integer("rating").notNull(),
  reviewedAt: integer("reviewed_at").notNull(),
  prevState: text("prev_state", { mode: "json" })
    .$type<FsrsCardState>()
    .notNull(),
  newState: text("new_state", { mode: "json" })
    .$type<FsrsCardState>()
    .notNull(),
});

export const lessonProgress = sqliteTable(
  "lesson_progress",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().default("__legacy__"),
    lessonSlug: text("lesson_slug").notNull(),
    unitSlug: text("unit_slug").notNull(),
    completedAt: integer("completed_at").notNull(),
    score: integer("score").notNull().default(100),
  },
  (t) => [
    uniqueIndex("lesson_progress_user_lesson_idx").on(t.userId, t.lessonSlug),
    index("lesson_progress_unit_idx").on(t.unitSlug),
  ],
);

export const checkpointAttempts = sqliteTable(
  "checkpoint_attempts",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().default("__legacy__"),
    unitSlug: text("unit_slug").notNull(),
    score: integer("score").notNull(),
    passed: integer("passed", { mode: "boolean" }).notNull(),
    takenAt: integer("taken_at").notNull(),
  },
  (t) => [index("checkpoint_attempts_unit_idx").on(t.unitSlug)],
);

export const readProgress = sqliteTable(
  "read_progress",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().default("__legacy__"),
    readSlug: text("read_slug").notNull(),
    completedAt: integer("completed_at").notNull(),
    comprehensionScore: integer("comprehension_score").notNull().default(0),
  },
  (t) => [
    uniqueIndex("read_progress_user_read_idx").on(t.userId, t.readSlug),
  ],
);

export const streaks = sqliteTable(
  "streaks",
  {
    userId: text("user_id").notNull().default("__legacy__"),
    kind: text("kind").notNull(),
    current: integer("current").notNull().default(0),
    longest: integer("longest").notNull().default(0),
    lastDay: text("last_day"),
  },
  (t) => [primaryKey({ columns: [t.userId, t.kind] })],
);

/* ─────────── Relations ─────────── */

export const usersRelations = relations(users, ({ many }) => ({
  cards: many(cards),
  lessonProgress: many(lessonProgress),
  checkpointAttempts: many(checkpointAttempts),
  readProgress: many(readProgress),
}));

export const wordsRelations = relations(words, ({ many }) => ({
  cards: many(cards),
}));

export const cardsRelations = relations(cards, ({ one, many }) => ({
  word: one(words, { fields: [cards.wordId], references: [words.id] }),
  sourceText: one(texts, {
    fields: [cards.sourceTextId],
    references: [texts.id],
  }),
  reviews: many(reviews),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  card: one(cards, { fields: [reviews.cardId], references: [cards.id] }),
}));

export const textsRelations = relations(texts, ({ many }) => ({
  cards: many(cards),
}));

/* ─────────── Types ─────────── */

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type LessonProgress = typeof lessonProgress.$inferSelect;
export type CheckpointAttempt = typeof checkpointAttempts.$inferSelect;
export type ReadProgress = typeof readProgress.$inferSelect;
export type Streak = typeof streaks.$inferSelect;

export type Word = typeof words.$inferSelect;
export type NewWord = typeof words.$inferInsert;
export type Card = typeof cards.$inferSelect;
export type NewCard = typeof cards.$inferInsert;
export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;
export type Text = typeof texts.$inferSelect;
export type NewText = typeof texts.$inferInsert;

export type FsrsCardState = {
  due: string;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  reps: number;
  lapses: number;
  state: number;
  last_review?: string;
};
