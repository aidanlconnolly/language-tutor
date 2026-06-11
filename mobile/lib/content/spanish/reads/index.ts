import type { DailyRead } from "../../types";
import { READ_BARAJAS_ARRIVAL } from "./01-barajas-arrival";
import { READ_MANANA_MADRID } from "./02-manana-madrid";
import { READ_METRO_SOL } from "./03-metro-sol";
import { READ_EL_PRADO } from "./04-el-prado";
import { READ_TAPAS_BAR } from "./05-tapas-bar";
import { READ_EL_RASTRO } from "./06-el-rastro";
import { READ_AVE_SEVILLA } from "./07-ave-sevilla";
import { READ_TABLAO } from "./08-tablao";

export const DAILY_READS: DailyRead[] = [
  READ_BARAJAS_ARRIVAL,
  READ_MANANA_MADRID,
  READ_METRO_SOL,
  READ_EL_PRADO,
  READ_TAPAS_BAR,
  READ_EL_RASTRO,
  READ_AVE_SEVILLA,
  READ_TABLAO,
];

export const READS_BY_SLUG: Record<string, DailyRead> = Object.fromEntries(
  DAILY_READS.map((r) => [r.slug, r]),
);

export function findRead(slug: string): DailyRead | undefined {
  return READS_BY_SLUG[slug];
}

export function pickTodaysRead(completedCount: number): DailyRead {
  return DAILY_READS[completedCount % DAILY_READS.length];
}
