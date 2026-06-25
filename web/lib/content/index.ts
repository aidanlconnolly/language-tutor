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

// English (British-primary; London-themed)
import { UNITS as ENGLISH_UNITS, findUnit as findEnglishUnit, findLesson as findEnglishLesson, findUnitByLessonSlug as findEnglishUnitByLessonSlug } from "./english/units/index";
import { DAILY_READS as ENGLISH_READS, findRead as findEnglishRead, pickTodaysRead as pickEnglishRead } from "./english/reads/index";
import { STAGES as ENGLISH_STAGES, UNIT_OUTLINE as ENGLISH_UNIT_OUTLINE } from "./english/stages";

// German (Berlin-themed)
import { UNITS as GERMAN_UNITS, findUnit as findGermanUnit, findLesson as findGermanLesson, findUnitByLessonSlug as findGermanUnitByLessonSlug } from "./german/units/index";
import { DAILY_READS as GERMAN_READS, findRead as findGermanRead, pickTodaysRead as pickGermanRead } from "./german/reads/index";
import { STAGES as GERMAN_STAGES, UNIT_OUTLINE as GERMAN_UNIT_OUTLINE } from "./german/stages";

// Arabic (Modern Standard Arabic, Cairo-themed, right-to-left)
import { UNITS as ARABIC_UNITS, findUnit as findArabicUnit, findLesson as findArabicLesson, findUnitByLessonSlug as findArabicUnitByLessonSlug } from "./arabic/units/index";
import { DAILY_READS as ARABIC_READS, findRead as findArabicRead, pickTodaysRead as pickArabicRead } from "./arabic/reads/index";
import { STAGES as ARABIC_STAGES, UNIT_OUTLINE as ARABIC_UNIT_OUTLINE } from "./arabic/stages";

export type { Unit, DailyRead, Stage, UnitPreview };

export function getUnits(lang: Lang): Unit[] {
  if (lang === "arabic") return ARABIC_UNITS;
  if (lang === "german") return GERMAN_UNITS;
  if (lang === "english") return ENGLISH_UNITS;
  if (lang === "portuguese") return PORTUGUESE_UNITS;
  if (lang === "spanish") return SPANISH_UNITS;
  return lang === "french" ? FRENCH_UNITS : ITALIAN_UNITS;
}

export function getReads(lang: Lang): DailyRead[] {
  if (lang === "arabic") return ARABIC_READS;
  if (lang === "german") return GERMAN_READS;
  if (lang === "english") return ENGLISH_READS;
  if (lang === "portuguese") return PORTUGUESE_READS;
  if (lang === "spanish") return SPANISH_READS;
  return lang === "french" ? FRENCH_READS : ITALIAN_READS;
}

export function getStages(lang: Lang): Stage[] {
  if (lang === "arabic") return ARABIC_STAGES;
  if (lang === "german") return GERMAN_STAGES;
  if (lang === "english") return ENGLISH_STAGES;
  if (lang === "portuguese") return PORTUGUESE_STAGES;
  if (lang === "spanish") return SPANISH_STAGES;
  return lang === "french" ? FRENCH_STAGES : ITALIAN_STAGES;
}

export function getUnitOutline(lang: Lang): UnitPreview[] {
  if (lang === "arabic") return ARABIC_UNIT_OUTLINE;
  if (lang === "german") return GERMAN_UNIT_OUTLINE;
  if (lang === "english") return ENGLISH_UNIT_OUTLINE;
  if (lang === "portuguese") return PORTUGUESE_UNIT_OUTLINE;
  if (lang === "spanish") return SPANISH_UNIT_OUTLINE;
  return lang === "french" ? FRENCH_UNIT_OUTLINE : ITALIAN_UNIT_OUTLINE;
}

export function findUnit(lang: Lang, slug: string): Unit | undefined {
  if (lang === "arabic") return findArabicUnit(slug);
  if (lang === "german") return findGermanUnit(slug);
  if (lang === "english") return findEnglishUnit(slug);
  if (lang === "portuguese") return findPortugueseUnit(slug);
  if (lang === "spanish") return findSpanishUnit(slug);
  return lang === "french" ? findFrenchUnit(slug) : findItalianUnit(slug);
}

export function findLesson(
  lang: Lang,
  unitSlug: string,
  lessonSlug: string,
): { unit: Unit; lessonIndex: number } | undefined {
  if (lang === "arabic") return findArabicLesson(unitSlug, lessonSlug);
  if (lang === "german") return findGermanLesson(unitSlug, lessonSlug);
  if (lang === "english") return findEnglishLesson(unitSlug, lessonSlug);
  if (lang === "portuguese") return findPortugueseLesson(unitSlug, lessonSlug);
  if (lang === "spanish") return findSpanishLesson(unitSlug, lessonSlug);
  return lang === "french"
    ? findFrenchLesson(unitSlug, lessonSlug)
    : findItalianLesson(unitSlug, lessonSlug);
}

export function findUnitByLessonSlug(lang: Lang, lessonSlug: string): Unit | undefined {
  if (lang === "arabic") return findArabicUnitByLessonSlug(lessonSlug);
  if (lang === "german") return findGermanUnitByLessonSlug(lessonSlug);
  if (lang === "english") return findEnglishUnitByLessonSlug(lessonSlug);
  if (lang === "portuguese") return findPortugueseUnitByLessonSlug(lessonSlug);
  if (lang === "spanish") return findSpanishUnitByLessonSlug(lessonSlug);
  return lang === "french"
    ? findFrenchUnitByLessonSlug(lessonSlug)
    : findItalianUnitByLessonSlug(lessonSlug);
}

export function findRead(lang: Lang, slug: string): DailyRead | undefined {
  if (lang === "arabic") return findArabicRead(slug);
  if (lang === "german") return findGermanRead(slug);
  if (lang === "english") return findEnglishRead(slug);
  if (lang === "portuguese") return findPortugueseRead(slug);
  if (lang === "spanish") return findSpanishRead(slug);
  return lang === "french" ? findFrenchRead(slug) : findItalianRead(slug);
}

export function pickTodaysRead(lang: Lang, completedCount: number): DailyRead {
  if (lang === "arabic") return pickArabicRead(completedCount);
  if (lang === "german") return pickGermanRead(completedCount);
  if (lang === "english") return pickEnglishRead(completedCount);
  if (lang === "portuguese") return pickPortugueseRead(completedCount);
  if (lang === "spanish") return pickSpanishRead(completedCount);
  return lang === "french" ? pickFrenchRead(completedCount) : pickItalianRead(completedCount);
}
