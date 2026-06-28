import type { DailyRead } from "../../types";
import { READ_ANKUNFT } from "./01-ankunft";
import { READ_DIE_WOHNUNG } from "./02-die-wohnung";
import { READ_CAFE_MORGEN } from "./03-cafe-morgen";
import { READ_RESTAURANT_MITTAG } from "./04-restaurant-mittag";
import { READ_MUSEUMSINSEL } from "./05-museumsinsel";
import { READ_DER_MARKT } from "./06-der-markt";
import { READ_DIE_SPREE } from "./07-die-spree";
import { READ_DIE_KNEIPE } from "./08-die-kneipe";

/**
 * Daily reads, ordered by difficulty. The first reads are intentionally very
 * easy (present tense, short sentences, common vocab) so absolute beginners
 * can start on day 1. Each subsequent read steps up gradually — by ~read #25
 * the level matches what an A2/B1 reader can handle.
 */
export const DAILY_READS: DailyRead[] = [
  READ_ANKUNFT,            // difficulty 4
  READ_DIE_WOHNUNG,        // 4.5
  READ_CAFE_MORGEN,        // 5
  READ_RESTAURANT_MITTAG,  // 5.5
  READ_MUSEUMSINSEL,       // 6
  READ_DER_MARKT,          // 6.5
  READ_DIE_SPREE,          // 7
  READ_DIE_KNEIPE,         // 7.5
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
