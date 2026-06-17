import type { Unit, DailyRead, Stage, UnitPreview } from "./types";
import type { Lang } from "@/lib/lang";

// Italian
import { UNITS as ITALIAN_UNITS, findUnit as findItalianUnit, findLesson as findItalianLesson, findUnitByLessonSlug as findItalianUnitByLessonSlug } from "./italian/units/index";
import { DAILY_READS as ITALIAN_READS, findRead as findItalianRead, pickTodaysRead as pickItalianRead } from "./italian/reads/index";
import { STAGES as ITALIAN_STAGES, UNIT_OUTLINE as ITALIAN_UNIT_OUTLINE } from "./italian/stages";

// French
import { UNITS as FRENCH_UNITS, findUnit as findFrenchUnit, findLesson as findFrenchLesson, findUnitByLessonSlug as findFrenchUnitByLessonSlug } from "./french/units/index";
import { DAILY_READS as FRENCH_READS, findRead as findFrenchRead, pickTodaysRead as pickFrenchRead } from "./french/reads/index";
import { STAGES as FRENCH_STAGES, UNIT_OUTLINE as FRENCH_UNIT_OUTLINE } from "./french/stages";

// Spanish
import { UNITS as SPANISH_UNITS, findUnit as findSpanishUnit, findLesson as findSpanishLesson, findUnitByLessonSlug as findSpanishUnitByLessonSlug } from "./spanish/units/index";
import { DAILY_READS as SPANISH_READS, findRead as findSpanishRead, pickTodaysRead as pickSpanishRead } from "./spanish/reads/index";
import { STAGES as SPANISH_STAGES, UNIT_OUTLINE as SPANISH_UNIT_OUTLINE } from "./spanish/stages";

// Portuguese (Brazilian-primary; European taught in notes)
import { UNITS as PORTUGUESE_UNITS, findUnit as findPortugueseUnit, findLesson as findPortugueseLesson, findUnitByLessonSlug as findPortugueseUnitByLessonSlug } from "./portuguese/units/index";
import { DAILY_READS as PORTUGUESE_READS, findRead as findPortugueseRead, pickTodaysRead as pickPortugueseRead } from "./portuguese/reads/index";
import { STAGES as PORTUGUESE_STAGES, UNIT_OUTLINE as PORTUGUESE_UNIT_OUTLINE } from "./portuguese/stages";

export type { Unit, DailyRead, Stage, UnitPreview };

export function getUnits(lang: Lang): Unit[] {
  if (lang === "portuguese") return PORTUGUESE_UNITS;
  if (lang === "spanish") return SPANISH_UNITS;
  return lang === "french" ? FRENCH_UNITS : ITALIAN_UNITS;
}

export function getReads(lang: Lang): DailyRead[] {
  if (lang === "portuguese") return PORTUGUESE_READS;
  if (lang === "spanish") return SPANISH_READS;
  return lang === "french" ? FRENCH_READS : ITALIAN_READS;
}

export function getStages(lang: Lang): Stage[] {
  if (lang === "portuguese") return PORTUGUESE_STAGES;
  if (lang === "spanish") return SPANISH_STAGES;
  return lang === "french" ? FRENCH_STAGES : ITALIAN_STAGES;
}

export function getUnitOutline(lang: Lang): UnitPreview[] {
  if (lang === "portuguese") return PORTUGUESE_UNIT_OUTLINE;
  if (lang === "spanish") return SPANISH_UNIT_OUTLINE;
  return lang === "french" ? FRENCH_UNIT_OUTLINE : ITALIAN_UNIT_OUTLINE;
}

export function findUnit(lang: Lang, slug: string): Unit | undefined {
  if (lang === "portuguese") return findPortugueseUnit(slug);
  if (lang === "spanish") return findSpanishUnit(slug);
  return lang === "french" ? findFrenchUnit(slug) : findItalianUnit(slug);
}

export function findLesson(
  lang: Lang,
  unitSlug: string,
  lessonSlug: string,
): { unit: Unit; lessonIndex: number } | undefined {
  if (lang === "portuguese") return findPortugueseLesson(unitSlug, lessonSlug);
  if (lang === "spanish") return findSpanishLesson(unitSlug, lessonSlug);
  return lang === "french"
    ? findFrenchLesson(unitSlug, lessonSlug)
    : findItalianLesson(unitSlug, lessonSlug);
}

export function findUnitByLessonSlug(lang: Lang, lessonSlug: string): Unit | undefined {
  if (lang === "portuguese") return findPortugueseUnitByLessonSlug(lessonSlug);
  if (lang === "spanish") return findSpanishUnitByLessonSlug(lessonSlug);
  return lang === "french"
    ? findFrenchUnitByLessonSlug(lessonSlug)
    : findItalianUnitByLessonSlug(lessonSlug);
}

export function findRead(lang: Lang, slug: string): DailyRead | undefined {
  if (lang === "portuguese") return findPortugueseRead(slug);
  if (lang === "spanish") return findSpanishRead(slug);
  return lang === "french" ? findFrenchRead(slug) : findItalianRead(slug);
}

export function pickTodaysRead(lang: Lang, completedCount: number): DailyRead {
  if (lang === "portuguese") return pickPortugueseRead(completedCount);
  if (lang === "spanish") return pickSpanishRead(completedCount);
  return lang === "french" ? pickFrenchRead(completedCount) : pickItalianRead(completedCount);
}
