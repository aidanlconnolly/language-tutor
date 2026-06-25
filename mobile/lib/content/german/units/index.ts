import type { Unit } from "../../types";
import { UNIT_ALPHABET } from "./01-alphabet";
import { UNIT_GREETINGS } from "./02-greetings";
import { UNIT_NUMBERS_TIME } from "./03-numbers-time";
import { UNIT_ARTICLES_GENDER } from "./04-articles-gender";
import { UNIT_SEIN_HABEN } from "./05-sein-haben";
import { UNIT_ABOUT_ME } from "./06-about-me";
import { UNIT_QUESTIONS } from "./07-questions";
import { UNIT_CASES_INTRO } from "./08-cases-intro";
import { UNIT_CONNECTORS } from "./09-connectors";
import { UNIT_TRANSIT } from "./10-transit";
import { UNIT_DIRECTIONS } from "./11-directions";
import { UNIT_HOTEL } from "./12-hotel";
import { UNIT_HELP } from "./13-help";
import { UNIT_LANDMARKS } from "./14-landmarks";
import { UNIT_CAFE } from "./15-cafe";
import { UNIT_RESTAURANT } from "./16-restaurant";
import { UNIT_FOOD_VOCAB } from "./17-food-vocab";
import { UNIT_DIET_DRINKS } from "./18-diet-drinks";
import { UNIT_GERMAN_FOOD } from "./19-german-food";
import { UNIT_PERFEKT } from "./20-perfekt";
import { UNIT_PERFEKT_SEIN } from "./21-perfekt-sein";
import { UNIT_PRAETERITUM } from "./22-praeteritum";
import { UNIT_FUTURE_MODALS } from "./23-future-modals";
import { UNIT_NARRATE_TRIP } from "./24-narrate-trip";
import { UNIT_SHOPPING } from "./25-shopping";
import { UNIT_DATIVE_CASE } from "./26-dative-case";
import { UNIT_FORMAL_REQUESTS } from "./27-formal-requests";
import { UNIT_COMPLAINTS } from "./28-complaints";
import { UNIT_IDIOMS } from "./29-idioms";
import { UNIT_SMALLTALK_WEATHER } from "./30-smalltalk-weather";
import { UNIT_CULTURE_ARTS } from "./31-culture-arts";
import { UNIT_ADJECTIVE_ENDINGS } from "./32-adjective-endings";
import { UNIT_SUBORDINATE_CLAUSES } from "./33-subordinate-clauses";
import { UNIT_KONJUNKTIV } from "./34-konjunktiv";
import { UNIT_OPINIONS } from "./35-opinions";

/**
 * All authored units, in stage+order sequence.
 * Remaining stages' unit previews live in `lib/content/german/stages.ts` as UNIT_OUTLINE.
 */
export const UNITS: Unit[] = [
  UNIT_ALPHABET,
  UNIT_GREETINGS,
  UNIT_NUMBERS_TIME,
  UNIT_ARTICLES_GENDER,
  UNIT_SEIN_HABEN,
  UNIT_ABOUT_ME,
  UNIT_QUESTIONS,
  UNIT_CASES_INTRO,
  UNIT_CONNECTORS,
  UNIT_TRANSIT,
  UNIT_DIRECTIONS,
  UNIT_HOTEL,
  UNIT_HELP,
  UNIT_LANDMARKS,
  UNIT_CAFE,
  UNIT_RESTAURANT,
  UNIT_FOOD_VOCAB,
  UNIT_DIET_DRINKS,
  UNIT_GERMAN_FOOD,
  UNIT_PERFEKT,
  UNIT_PERFEKT_SEIN,
  UNIT_PRAETERITUM,
  UNIT_FUTURE_MODALS,
  UNIT_NARRATE_TRIP,
  UNIT_SHOPPING,
  UNIT_DATIVE_CASE,
  UNIT_FORMAL_REQUESTS,
  UNIT_COMPLAINTS,
  UNIT_IDIOMS,
  UNIT_SMALLTALK_WEATHER,
  UNIT_CULTURE_ARTS,
  UNIT_ADJECTIVE_ENDINGS,
  UNIT_SUBORDINATE_CLAUSES,
  UNIT_KONJUNKTIV,
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
