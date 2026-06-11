"use server";

import { and, desc, eq, gte } from "drizzle-orm";
import { nanoid } from "nanoid";
import { db, schema } from "@/lib/db/client";
import { findUnit, getUnits } from "@/lib/content";
import { requireAuth } from "@/lib/auth";
import type { Lang } from "@/lib/lang";

/* ─────────── Lesson progress ─────────── */

export type LessonStatus = {
  lessonSlug: string;
  unitSlug: string;
  completedAt: number;
  score: number;
};

export async function getAllLessonProgress(lang: Lang): Promise<LessonStatus[]> {
  const userId = await requireAuth();
  const rows = await db
    .select()
    .from(schema.lessonProgress)
    .where(and(eq(schema.lessonProgress.userId, userId), eq(schema.lessonProgress.language, lang)));
  return rows.map((r) => ({
    lessonSlug: r.lessonSlug,
    unitSlug: r.unitSlug,
    completedAt: r.completedAt,
    score: r.score,
  }));
}

export async function markLessonDone(args: {
  unitSlug: string;
  lessonSlug: string;
  score: number;
  lang: Lang;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const userId = await requireAuth();
    const now = Date.now();
    const existing = await db
      .select()
      .from(schema.lessonProgress)
      .where(
        and(
          eq(schema.lessonProgress.userId, userId),
          eq(schema.lessonProgress.lessonSlug, args.lessonSlug),
          eq(schema.lessonProgress.language, args.lang),
        ),
      )
      .limit(1);
    if (existing.length > 0) {
      await db
        .update(schema.lessonProgress)
        .set({ score: Math.max(existing[0].score, args.score), completedAt: now })
        .where(
          and(
            eq(schema.lessonProgress.userId, userId),
            eq(schema.lessonProgress.lessonSlug, args.lessonSlug),
            eq(schema.lessonProgress.language, args.lang),
          ),
        );
    } else {
      await db.insert(schema.lessonProgress).values({
        id: nanoid(),
        userId,
        language: args.lang,
        lessonSlug: args.lessonSlug,
        unitSlug: args.unitSlug,
        completedAt: now,
        score: args.score,
      });
    }
    await touchStreak("lesson", userId, args.lang);
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/* ─────────── Checkpoint attempts ─────────── */

export type CheckpointStatus = {
  unitSlug: string;
  bestScore: number;
  passed: boolean;
  lastTakenAt: number | null;
};

export async function getAllCheckpointStatus(lang: Lang): Promise<CheckpointStatus[]> {
  const userId = await requireAuth();
  const rows = await db
    .select()
    .from(schema.checkpointAttempts)
    .where(and(eq(schema.checkpointAttempts.userId, userId), eq(schema.checkpointAttempts.language, lang)))
    .orderBy(desc(schema.checkpointAttempts.takenAt));
  const byUnit = new Map<string, CheckpointStatus>();
  for (const r of rows) {
    const cur = byUnit.get(r.unitSlug);
    if (!cur) {
      byUnit.set(r.unitSlug, {
        unitSlug: r.unitSlug,
        bestScore: r.score,
        passed: r.passed,
        lastTakenAt: r.takenAt,
      });
    } else {
      byUnit.set(r.unitSlug, {
        unitSlug: r.unitSlug,
        bestScore: Math.max(cur.bestScore, r.score),
        passed: cur.passed || r.passed,
        lastTakenAt: Math.max(cur.lastTakenAt ?? 0, r.takenAt),
      });
    }
  }
  return Array.from(byUnit.values());
}

export async function recordCheckpoint(args: {
  unitSlug: string;
  score: number;
  lang: Lang;
}): Promise<{ ok: true; passed: boolean } | { ok: false; error: string }> {
  try {
    const userId = await requireAuth();
    const unit = findUnit(args.lang, args.unitSlug);
    if (!unit) return { ok: false, error: "Unknown unit" };
    const passed = args.score >= unit.checkpoint.passingPct;
    await db.insert(schema.checkpointAttempts).values({
      id: nanoid(),
      userId,
      language: args.lang,
      unitSlug: args.unitSlug,
      score: args.score,
      passed,
      takenAt: Date.now(),
    });
    return { ok: true, passed };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/* ─────────── Read progress ─────────── */

export async function getAllReadProgress(lang: Lang): Promise<
  { readSlug: string; completedAt: number; comprehensionScore: number }[]
> {
  const userId = await requireAuth();
  const rows = await db
    .select()
    .from(schema.readProgress)
    .where(and(eq(schema.readProgress.userId, userId), eq(schema.readProgress.language, lang)));
  return rows.map((r) => ({
    readSlug: r.readSlug,
    completedAt: r.completedAt,
    comprehensionScore: r.comprehensionScore,
  }));
}

export async function markReadDone(args: {
  readSlug: string;
  comprehensionScore: number;
  lang: Lang;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const userId = await requireAuth();
    const existing = await db
      .select()
      .from(schema.readProgress)
      .where(
        and(
          eq(schema.readProgress.userId, userId),
          eq(schema.readProgress.readSlug, args.readSlug),
          eq(schema.readProgress.language, args.lang),
        ),
      )
      .limit(1);
    if (existing.length > 0) {
      await db
        .update(schema.readProgress)
        .set({
          completedAt: Date.now(),
          comprehensionScore: Math.max(
            existing[0].comprehensionScore,
            args.comprehensionScore,
          ),
        })
        .where(
          and(
            eq(schema.readProgress.userId, userId),
            eq(schema.readProgress.readSlug, args.readSlug),
            eq(schema.readProgress.language, args.lang),
          ),
        );
    } else {
      await db.insert(schema.readProgress).values({
        id: nanoid(),
        userId,
        language: args.lang,
        readSlug: args.readSlug,
        completedAt: Date.now(),
        comprehensionScore: args.comprehensionScore,
      });
    }
    await touchStreak("read", userId, args.lang);
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/* ─────────── Streaks ─────────── */

function localDay(d: Date = new Date()): string {
  const yr = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  return `${yr}-${mo}-${da}`;
}

function priorDay(day: string): string {
  const [y, m, d] = day.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() - 1);
  return localDay(date);
}

export type StreakInfo = {
  kind: "lesson" | "read";
  current: number;
  longest: number;
  lastDay: string | null;
};

export async function getStreak(kind: "lesson" | "read", lang: Lang): Promise<StreakInfo> {
  const userId = await requireAuth();
  const rows = await db
    .select()
    .from(schema.streaks)
    .where(
      and(
        eq(schema.streaks.userId, userId),
        eq(schema.streaks.language, lang),
        eq(schema.streaks.kind, kind),
      ),
    )
    .limit(1);
  if (rows.length === 0) {
    return { kind, current: 0, longest: 0, lastDay: null };
  }
  const r = rows[0];
  const today = localDay();
  const yest = priorDay(today);
  const live = r.lastDay === today || r.lastDay === yest;
  return {
    kind,
    current: live ? r.current : 0,
    longest: r.longest,
    lastDay: r.lastDay,
  };
}

async function touchStreak(kind: "lesson" | "read", userId: string, lang: Lang): Promise<void> {
  const today = localDay();
  const yest = priorDay(today);
  const rows = await db
    .select()
    .from(schema.streaks)
    .where(
      and(
        eq(schema.streaks.userId, userId),
        eq(schema.streaks.language, lang),
        eq(schema.streaks.kind, kind),
      ),
    )
    .limit(1);
  if (rows.length === 0) {
    await db.insert(schema.streaks).values({
      userId,
      language: lang,
      kind,
      current: 1,
      longest: 1,
      lastDay: today,
    });
    return;
  }
  const r = rows[0];
  if (r.lastDay === today) return;
  const newCurrent = r.lastDay === yest ? r.current + 1 : 1;
  const newLongest = Math.max(r.longest, newCurrent);
  await db
    .update(schema.streaks)
    .set({ current: newCurrent, longest: newLongest, lastDay: today })
    .where(
      and(
        eq(schema.streaks.userId, userId),
        eq(schema.streaks.language, lang),
        eq(schema.streaks.kind, kind),
      ),
    );
}

/* ─────────── Aggregated dashboard ─────────── */

export type RoadmapSummary = {
  unitSlugsCompleted: Set<string>;
  lessonsCompleted: Set<string>;
  totalLessons: number;
  totalAuthoredLessons: number;
  lessonStreak: number;
  readStreak: number;
  readsCompleted: Set<string>;
};

export async function getRoadmapSummary(lang: Lang): Promise<RoadmapSummary> {
  const [lessons, checkpoints, reads, lessonStreak, readStreak] =
    await Promise.all([
      getAllLessonProgress(lang),
      getAllCheckpointStatus(lang),
      getAllReadProgress(lang),
      getStreak("lesson", lang),
      getStreak("read", lang),
    ]);
  const unitSlugsCompleted = new Set(
    checkpoints.filter((c) => c.passed).map((c) => c.unitSlug),
  );
  const lessonsCompleted = new Set(lessons.map((l) => l.lessonSlug));
  const readsCompleted = new Set(reads.map((r) => r.readSlug));
  const units = getUnits(lang);
  return {
    unitSlugsCompleted,
    lessonsCompleted,
    totalLessons: lessonsCompleted.size,
    totalAuthoredLessons: units.reduce((s, u) => s + u.lessons.length, 0),
    lessonStreak: lessonStreak.current,
    readStreak: readStreak.current,
    readsCompleted,
  };
}

/** Recent checkpoint attempts list (for showing past scores). */
export async function getRecentCheckpointAttempts(unitSlug: string, lang: Lang, limit = 5) {
  const userId = await requireAuth();
  return db
    .select()
    .from(schema.checkpointAttempts)
    .where(
      and(
        eq(schema.checkpointAttempts.userId, userId),
        eq(schema.checkpointAttempts.language, lang),
        eq(schema.checkpointAttempts.unitSlug, unitSlug),
        gte(schema.checkpointAttempts.takenAt, 0),
      ),
    )
    .orderBy(desc(schema.checkpointAttempts.takenAt))
    .limit(limit);
}
