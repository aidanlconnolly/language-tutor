import type { Unit } from "../../types";
import { UNIT_HIRAGANA } from "./01-hiragana";
import { UNIT_KATAKANA } from "./02-katakana";
import { UNIT_GREETINGS } from "./03-greetings";
import { UNIT_NUMBERS_TIME } from "./04-numbers-time";
import { UNIT_DESU_PARTICLES } from "./05-desu-particles";
import { UNIT_ABOUT_ME } from "./06-about-me";
import { UNIT_QUESTIONS } from "./07-questions";
import { UNIT_THIS_THAT } from "./08-this-that";
import { UNIT_ADJECTIVES } from "./09-adjectives";
import { UNIT_TRANSIT } from "./10-transit";
import { UNIT_DIRECTIONS } from "./11-directions";
import { UNIT_HOTEL } from "./12-hotel";
import { UNIT_HELP } from "./13-help";
import { UNIT_LANDMARKS } from "./14-landmarks";
import { UNIT_CAFE } from "./15-cafe";
import { UNIT_RESTAURANT } from "./16-restaurant";
import { UNIT_FOOD_VOCAB } from "./17-food-vocab";
import { UNIT_DIET_DRINKS } from "./18-diet-drinks";
import { UNIT_JAPANESE_FOOD } from "./19-japanese-food";
import { UNIT_MASU_PRESENT } from "./20-masu-present";
import { UNIT_MASU_PAST } from "./21-masu-past";
import { UNIT_TE_FORM } from "./22-te-form";
import { UNIT_WANT_CAN } from "./23-want-can";
import { UNIT_NARRATE_TRIP } from "./24-narrate-trip";
import { UNIT_SHOPPING } from "./25-shopping";
import { UNIT_COUNTERS } from "./26-counters";
import { UNIT_POLITE_REQUESTS } from "./27-polite-requests";
import { UNIT_PLAIN_FORM } from "./28-plain-form";
import { UNIT_EXPRESSIONS } from "./29-expressions";
import { UNIT_SMALLTALK } from "./30-smalltalk";
import { UNIT_CULTURE_CUSTOMS } from "./31-culture-customs";
import { UNIT_COMPARATIVES } from "./32-comparatives";
import { UNIT_TE_GRAMMAR } from "./33-te-grammar";
import { UNIT_PLAIN_CLAUSES } from "./34-plain-clauses";
import { UNIT_OPINIONS } from "./35-opinions";

/**
 * All authored units, in stage+order sequence.
 * Remaining stages' unit previews live in `lib/content/japanese/stages.ts` as UNIT_OUTLINE.
 */
export const UNITS: Unit[] = [
  UNIT_HIRAGANA,
  UNIT_KATAKANA,
  UNIT_GREETINGS,
  UNIT_NUMBERS_TIME,
  UNIT_DESU_PARTICLES,
  UNIT_ABOUT_ME,
  UNIT_QUESTIONS,
  UNIT_THIS_THAT,
  UNIT_ADJECTIVES,
  UNIT_TRANSIT,
  UNIT_DIRECTIONS,
  UNIT_HOTEL,
  UNIT_HELP,
  UNIT_LANDMARKS,
  UNIT_CAFE,
  UNIT_RESTAURANT,
  UNIT_FOOD_VOCAB,
  UNIT_DIET_DRINKS,
  UNIT_JAPANESE_FOOD,
  UNIT_MASU_PRESENT,
  UNIT_MASU_PAST,
  UNIT_TE_FORM,
  UNIT_WANT_CAN,
  UNIT_NARRATE_TRIP,
  UNIT_SHOPPING,
  UNIT_COUNTERS,
  UNIT_POLITE_REQUESTS,
  UNIT_PLAIN_FORM,
  UNIT_EXPRESSIONS,
  UNIT_SMALLTALK,
  UNIT_CULTURE_CUSTOMS,
  UNIT_COMPARATIVES,
  UNIT_TE_GRAMMAR,
  UNIT_PLAIN_CLAUSES,
  UNIT_OPINIONS,
];

export const UNITS_BY_SLUG: Record<string, Unit> = Object.fromEntries(
  UNITS.map((u) => [u.slug, u]),
);

export function findUnit(slug: string): Unit | undefined {
  return UNITS_BY_SLUG[slug];
}

export function findLesson(
  unitSlug: string,
  lessonSlug: string,
): { unit: Unit; lessonIndex: number } | undefined {
  const unit = UNITS_BY_SLUG[unitSlug];
  if (!unit) return undefined;
  const lessonIndex = unit.lessons.findIndex((l) => l.slug === lessonSlug);
  if (lessonIndex < 0) return undefined;
  return { unit, lessonIndex };
}

/** Reverse lookup: which unit owns a given lesson slug? */
export function findUnitByLessonSlug(lessonSlug: string): Unit | undefined {
  return UNITS.find((u) => u.lessons.some((l) => l.slug === lessonSlug));
}
