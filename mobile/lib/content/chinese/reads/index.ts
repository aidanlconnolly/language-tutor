import type { DailyRead } from "../../types";
import { READ_JICHANG } from "./01-jichang";
import { READ_BINGUAN } from "./02-binguan";
import { READ_CHAGUAN } from "./03-chaguan";
import { READ_FANGUAN } from "./04-fanguan";
import { READ_CHANGCHENG } from "./05-changcheng";
import { READ_SHICHANG } from "./06-shichang";
import { READ_GONGYUAN } from "./07-gongyuan";
import { READ_WANCAN } from "./08-wancan";

/**
 * Daily reads, ordered by difficulty. The first reads are intentionally very
 * easy (short sentences, common characters, pinyin-supported) so absolute
 * beginners can start on day 1. Each subsequent read steps up gradually.
 */
export const DAILY_READS: DailyRead[] = [
  READ_JICHANG,     // difficulty 4
  READ_BINGUAN,     // 4.5
  READ_CHAGUAN,     // 5
  READ_FANGUAN,     // 5.5
  READ_CHANGCHENG,  // 6
  READ_SHICHANG,    // 6.5
  READ_GONGYUAN,    // 7
  READ_WANCAN,      // 7.5
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
