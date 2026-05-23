import type { DailyRead } from "../types";
import { READ_FIUMICINO } from "./01-fiumicino";
import { READ_MONTI_HOTEL } from "./02-monti-hotel";
import { READ_BAR_MORNING } from "./03-bar-morning";
import { READ_TRASTEVERE_LUNCH } from "./04-trastevere-lunch";
import { READ_PANTHEON } from "./05-pantheon";
import { READ_MERCATO } from "./06-mercato";
import { READ_VATICANO } from "./07-vaticano";
import { READ_APERITIVO } from "./08-aperitivo";

/**
 * Daily reads, ordered by difficulty. The first reads are intentionally very
 * easy (present tense, short sentences, common vocab) so absolute beginners
 * can start on day 1. Each subsequent read steps up gradually — by ~read #25
 * the level matches what an A2/B1 reader can handle.
 */
export const DAILY_READS: DailyRead[] = [
  READ_FIUMICINO,        // difficulty 4
  READ_MONTI_HOTEL,      // 4.5
  READ_BAR_MORNING,      // 5
  READ_TRASTEVERE_LUNCH, // 5.5
  READ_PANTHEON,         // 6
  READ_MERCATO,          // 6.5
  READ_VATICANO,         // 7
  READ_APERITIVO,        // 7.5
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
