import type { DailyRead } from "../../types";
import { READ_AL_MATAR } from "./01-al-matar";
import { READ_AL_FUNDUQ } from "./02-al-funduq";
import { READ_AL_AHWA } from "./03-al-ahwa";
import { READ_AL_MATAAM } from "./04-al-mataam";
import { READ_AL_AHRAM } from "./05-al-ahram";
import { READ_AL_SOUQ } from "./06-al-souq";
import { READ_AN_NIL } from "./07-an-nil";
import { READ_AL_ASHA } from "./08-al-asha";

/**
 * Daily reads, ordered by difficulty. The first reads are intentionally very
 * easy (short nominal sentences, common vocab, harakat shown) so absolute
 * beginners can start on day 1. Each subsequent read steps up gradually.
 */
export const DAILY_READS: DailyRead[] = [
  READ_AL_MATAR,    // difficulty 4
  READ_AL_FUNDUQ,   // 4.5
  READ_AL_AHWA,     // 5
  READ_AL_MATAAM,   // 5.5
  READ_AL_AHRAM,    // 6
  READ_AL_SOUQ,     // 6.5
  READ_AN_NIL,      // 7
  READ_AL_ASHA,     // 7.5
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
