import type { DailyRead } from "../../types";
import { READ_NARITA } from "./01-narita";
import { READ_YADO } from "./02-yado";
import { READ_KISSATEN } from "./03-kissaten";
import { READ_RAMEN } from "./04-ramen";
import { READ_SENSOJI } from "./05-sensoji";
import { READ_SHIBUYA } from "./06-shibuya";
import { READ_KOEN } from "./07-koen";
import { READ_IZAKAYA } from "./08-izakaya";

/**
 * Daily reads, ordered by difficulty. The first reads are intentionally very
 * easy (short sentences, hiragana-forward, common vocab) so absolute beginners
 * can start on day 1. Each subsequent read steps up gradually.
 */
export const DAILY_READS: DailyRead[] = [
  READ_NARITA,    // difficulty 4
  READ_YADO,      // 4.5
  READ_KISSATEN,  // 5
  READ_RAMEN,     // 5.5
  READ_SENSOJI,   // 6
  READ_SHIBUYA,   // 6.5
  READ_KOEN,      // 7
  READ_IZAKAYA,   // 7.5
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
