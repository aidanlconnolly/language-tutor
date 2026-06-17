import type { DailyRead } from "../../types";
import { READ_CHEGADA } from "./01-chegada";
import { READ_MANHA_NO_RIO } from "./02-manha-no-rio";
import { READ_METRO_SP } from "./03-metro-sp";
import { READ_CRISTO_REDENTOR } from "./04-cristo-redentor";
import { READ_NO_BOTECO } from "./05-boteco";
import { READ_NA_FEIRA } from "./06-feira";
import { READ_VIAGEM_SALVADOR } from "./07-viagem-salvador";
import { READ_CARNAVAL } from "./08-carnaval";

export const DAILY_READS: DailyRead[] = [
  READ_CHEGADA,
  READ_MANHA_NO_RIO,
  READ_METRO_SP,
  READ_CRISTO_REDENTOR,
  READ_NO_BOTECO,
  READ_NA_FEIRA,
  READ_VIAGEM_SALVADOR,
  READ_CARNAVAL,
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
