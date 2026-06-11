import type { DailyRead } from "../../types";
import { READ_CDG } from "./01-cdg";
import { READ_MATIN_PARIS } from "./02-matin-paris";
import { READ_METRO } from "./03-metro";
import { READ_RESTAURANT } from "./04-restaurant";
import { READ_LOUVRE } from "./05-louvre";
import { READ_SHOPPING } from "./06-shopping";
import { READ_MONTMARTRE } from "./07-montmartre";
import { READ_SOIREE } from "./08-soiree";

/**
 * Daily reads, ordered by difficulty. The first reads are intentionally very
 * easy (present tense, short sentences, common vocab) so absolute beginners
 * can start on day 1. Each subsequent read steps up gradually — by ~read #25
 * the level matches what an A2/B1 reader can handle.
 */
export const DAILY_READS: DailyRead[] = [
  READ_CDG,          // difficulty 4
  READ_MATIN_PARIS,  // 4.5
  READ_METRO,        // 5
  READ_RESTAURANT,   // 6
  READ_LOUVRE,       // 6.5
  READ_SHOPPING,     // 7
  READ_MONTMARTRE,   // 8
  READ_SOIREE,       // 9
];

export const READS_BY_SLUG: Record<string, DailyRead> = Object.fromEntries(
  DAILY_READS.map((r) => [r.slug, r]),
);

export function findRead(slug: string): DailyRead | undefined {
  return READS_BY_SLUG[slug];
}

/**
 * Pick today's read based on the current "lesson streak day". If the user has
 * completed N reads, today's is read (N+1) — or wraps if past the catalog end.
 */
export function pickTodaysRead(completedCount: number): DailyRead {
  const i = completedCount % DAILY_READS.length;
  return DAILY_READS[i];
}
