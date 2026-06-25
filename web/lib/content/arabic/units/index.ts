import type { Unit } from "../../types";
import { UNIT_ALPHABET } from "./01-alphabet";
import { UNIT_GREETINGS } from "./02-greetings";
import { UNIT_NUMBERS_TIME } from "./03-numbers-time";
import { UNIT_ARTICLE_GENDER } from "./04-article-gender";
import { UNIT_PRONOUNS_NOMINAL } from "./05-pronouns-nominal";
import { UNIT_ABOUT_ME } from "./06-about-me";
import { UNIT_QUESTIONS } from "./07-questions";
import { UNIT_POSSESSIVES } from "./08-possessives";
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
import { UNIT_EGYPTIAN_FOOD } from "./19-egyptian-food";
import { UNIT_PAST_TENSE } from "./20-past-tense";
import { UNIT_PAST_PRONOUNS } from "./21-past-pronouns";
import { UNIT_PRESENT_TENSE } from "./22-present-tense";
import { UNIT_FUTURE } from "./23-future";
import { UNIT_NARRATE_TRIP } from "./24-narrate-trip";
import { UNIT_SHOPPING } from "./25-shopping";
import { UNIT_MARKET } from "./26-market";
import { UNIT_POLITE_REQUESTS } from "./27-polite-requests";
import { UNIT_COMPLAINTS } from "./28-complaints";
import { UNIT_EXPRESSIONS } from "./29-expressions";
import { UNIT_SMALLTALK } from "./30-smalltalk";
import { UNIT_CULTURE_RELIGION } from "./31-culture-religion";
import { UNIT_COMPARATIVES } from "./32-comparatives";
import { UNIT_VERB_FORMS } from "./33-verb-forms";
import { UNIT_DUAL_PLURAL } from "./34-dual-plural";
import { UNIT_OPINIONS } from "./35-opinions";

/**
 * All authored units, in stage+order sequence.
 * Remaining stages' unit previews live in `lib/content/arabic/stages.ts` as UNIT_OUTLINE.
 */
export const UNITS: Unit[] = [
  UNIT_ALPHABET,
  UNIT_GREETINGS,
  UNIT_NUMBERS_TIME,
  UNIT_ARTICLE_GENDER,
  UNIT_PRONOUNS_NOMINAL,
  UNIT_ABOUT_ME,
  UNIT_QUESTIONS,
  UNIT_POSSESSIVES,
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
  UNIT_EGYPTIAN_FOOD,
  UNIT_PAST_TENSE,
  UNIT_PAST_PRONOUNS,
  UNIT_PRESENT_TENSE,
  UNIT_FUTURE,
  UNIT_NARRATE_TRIP,
  UNIT_SHOPPING,
  UNIT_MARKET,
  UNIT_POLITE_REQUESTS,
  UNIT_COMPLAINTS,
  UNIT_EXPRESSIONS,
  UNIT_SMALLTALK,
  UNIT_CULTURE_RELIGION,
  UNIT_COMPARATIVES,
  UNIT_VERB_FORMS,
  UNIT_DUAL_PLURAL,
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
