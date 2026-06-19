import type { Unit } from "../../types";
import { UNIT_ALPHABET } from "./01-alphabet";
import { UNIT_GREETINGS } from "./02-greetings";
import { UNIT_NUMBERS_TIME } from "./03-numbers-time";
import { UNIT_ARTICLES } from "./04-articles";
import { UNIT_TO_BE_HAVE } from "./05-to-be-have";
import { UNIT_ABOUT_ME } from "./06-about-me";
import { UNIT_QUESTIONS } from "./07-questions";
import { UNIT_LIKES_WANTS } from "./08-likes-wants";
import { UNIT_CONNECTORS } from "./09-connectors";
import { UNIT_TRANSIT } from "./10-transit";
import { UNIT_DIRECTIONS } from "./11-directions";
import { UNIT_HOTEL } from "./12-hotel";
import { UNIT_HELP } from "./13-help";
import { UNIT_LANDMARKS } from "./14-landmarks";
import { UNIT_CAFE } from "./15-cafe";
import { UNIT_PUB } from "./16-pub";
import { UNIT_FOOD_VOCAB } from "./17-food-vocab";
import { UNIT_DIET_DRINKS } from "./18-diet-drinks";
import { UNIT_BRITISH_FOOD } from "./19-british-food";
import { UNIT_PAST_SIMPLE } from "./20-past-simple";
import { UNIT_PAST_IRREGULAR } from "./21-past-irregular";
import { UNIT_PAST_CONTINUOUS } from "./22-past-continuous";
import { UNIT_FUTURE } from "./23-future";
import { UNIT_NARRATE_TRIP } from "./24-narrate-trip";
import { UNIT_SHOPPING } from "./25-shopping";
import { UNIT_MARKET } from "./26-market";
import { UNIT_POLITE_REQUESTS } from "./27-polite-requests";
import { UNIT_COMPLAINTS } from "./28-complaints";
import { UNIT_IDIOMS } from "./29-idioms";
import { UNIT_WEATHER_SMALLTALK } from "./30-weather-smalltalk";
import { UNIT_CULTURE_ARTS } from "./31-culture-arts";
import { UNIT_PHONE_EMAIL } from "./32-phone-email";
import { UNIT_CONDITIONALS } from "./33-conditionals";
import { UNIT_PRESENT_PERFECT } from "./34-present-perfect";
import { UNIT_OPINIONS } from "./35-opinions";

/**
 * All authored units, in stage+order sequence.
 * Remaining stages' unit previews live in `lib/content/english/stages.ts` as UNIT_OUTLINE.
 */
export const UNITS: Unit[] = [
  UNIT_ALPHABET,
  UNIT_GREETINGS,
  UNIT_NUMBERS_TIME,
  UNIT_ARTICLES,
  UNIT_TO_BE_HAVE,
  UNIT_ABOUT_ME,
  UNIT_QUESTIONS,
  UNIT_LIKES_WANTS,
  UNIT_CONNECTORS,
  UNIT_TRANSIT,
  UNIT_DIRECTIONS,
  UNIT_HOTEL,
  UNIT_HELP,
  UNIT_LANDMARKS,
  UNIT_CAFE,
  UNIT_PUB,
  UNIT_FOOD_VOCAB,
  UNIT_DIET_DRINKS,
  UNIT_BRITISH_FOOD,
  UNIT_PAST_SIMPLE,
  UNIT_PAST_IRREGULAR,
  UNIT_PAST_CONTINUOUS,
  UNIT_FUTURE,
  UNIT_NARRATE_TRIP,
  UNIT_SHOPPING,
  UNIT_MARKET,
  UNIT_POLITE_REQUESTS,
  UNIT_COMPLAINTS,
  UNIT_IDIOMS,
  UNIT_WEATHER_SMALLTALK,
  UNIT_CULTURE_ARTS,
  UNIT_PHONE_EMAIL,
  UNIT_CONDITIONALS,
  UNIT_PRESENT_PERFECT,
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
