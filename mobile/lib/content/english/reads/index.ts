import type { DailyRead } from "../../types";
import { READ_HEATHROW } from "./01-heathrow";
import { READ_THE_FLAT } from "./02-the-flat";
import { READ_CAFE_MORNING } from "./03-cafe-morning";
import { READ_PUB_LUNCH } from "./04-pub-lunch";
import { READ_THE_MUSEUM } from "./05-the-museum";
import { READ_THE_MARKET } from "./06-the-market";
import { READ_THE_THAMES } from "./07-the-thames";
import { READ_PUB_EVENING } from "./08-pub-evening";

/**
 * Daily reads, ordered by difficulty. The first reads are intentionally very
 * easy (present tense, short sentences, common vocab) so absolute beginners
 * can start on day 1. Each subsequent read steps up gradually — by ~read #25
 * the level matches what an A2/B1 reader can handle.
 */
export const DAILY_READS: DailyRead[] = [
  READ_HEATHROW,      // difficulty 4
  READ_THE_FLAT,      // 4.5
  READ_CAFE_MORNING,  // 5
  READ_PUB_LUNCH,     // 5.5
  READ_THE_MUSEUM,    // 6
  READ_THE_MARKET,    // 6.5
  READ_THE_THAMES,    // 7
  READ_PUB_EVENING,   // 7.5
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
