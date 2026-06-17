import type { Unit } from "../../types";
import { UNIT_PRONUNCIATION } from "./01-pronunciation";
import { UNIT_GREETINGS } from "./02-greetings";
import { UNIT_NUMBERS_TIME } from "./03-numbers-time";
import { UNIT_ARTICLES } from "./04-articles";
import { UNIT_SER_ESTAR } from "./05-ser-estar";
import { UNIT_ABOUT_ME } from "./06-about-me";
import { UNIT_QUESTIONS } from "./07-questions";
import { UNIT_LIKES_WANTS } from "./08-likes-wants";
import { UNIT_CONNECTORS } from "./09-connectors";
import { UNIT_TRANSIT } from "./10-transit";
import { UNIT_DIRECTIONS } from "./11-directions";
import { UNIT_HOTEL } from "./12-hotel";
import { UNIT_HELP } from "./13-help";
import { UNIT_LANDMARKS } from "./14-landmarks";
import { UNIT_BAR } from "./15-bar";
import { UNIT_RESTAURANT } from "./16-restaurant";
import { UNIT_FOOD_VOCAB } from "./17-food-vocab";
import { UNIT_DRINKS_DIETARY } from "./18-drinks-dietary";
import { UNIT_BRAZILIAN_FOOD } from "./19-brazilian-food";
import { UNIT_PRETERITO_PERFEITO } from "./20-preterito-perfeito";
import { UNIT_PRETERITO_IMPERFEITO } from "./21-preterito-imperfeito";
import { UNIT_PRETERITO_COMPOSTO } from "./22-preterito-composto";
import { UNIT_FUTURO } from "./23-futuro";
import { UNIT_NARRATE_TRIP } from "./24-narrate-trip";
import { UNIT_SHOPPING } from "./25-shopping";
import { UNIT_MARKET } from "./26-market";
import { UNIT_FORMAL_REGISTER } from "./27-formal-register";
import { UNIT_COMPLAINTS } from "./28-complaints";
import { UNIT_IDIOMS } from "./29-idioms";
import { UNIT_MUSIC_CULTURE } from "./30-music-culture";
import { UNIT_MUSEUMS } from "./31-museums";
import { UNIT_SMALL_TALK } from "./32-small-talk";
import { UNIT_CONDITIONAL } from "./33-conditional";
import { UNIT_SUBJUNCTIVE } from "./34-subjunctive";
import { UNIT_OPINIONS } from "./35-opinions";

export const UNITS: Unit[] = [
  UNIT_PRONUNCIATION,
  UNIT_GREETINGS,
  UNIT_NUMBERS_TIME,
  UNIT_ARTICLES,
  UNIT_SER_ESTAR,
  UNIT_ABOUT_ME,
  UNIT_QUESTIONS,
  UNIT_LIKES_WANTS,
  UNIT_CONNECTORS,
  UNIT_TRANSIT,
  UNIT_DIRECTIONS,
  UNIT_HOTEL,
  UNIT_HELP,
  UNIT_LANDMARKS,
  UNIT_BAR,
  UNIT_RESTAURANT,
  UNIT_FOOD_VOCAB,
  UNIT_DRINKS_DIETARY,
  UNIT_BRAZILIAN_FOOD,
  UNIT_PRETERITO_PERFEITO,
  UNIT_PRETERITO_IMPERFEITO,
  UNIT_PRETERITO_COMPOSTO,
  UNIT_FUTURO,
  UNIT_NARRATE_TRIP,
  UNIT_SHOPPING,
  UNIT_MARKET,
  UNIT_FORMAL_REGISTER,
  UNIT_COMPLAINTS,
  UNIT_IDIOMS,
  UNIT_MUSIC_CULTURE,
  UNIT_MUSEUMS,
  UNIT_SMALL_TALK,
  UNIT_CONDITIONAL,
  UNIT_SUBJUNCTIVE,
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

export function findUnitByLessonSlug(lessonSlug: string): Unit | undefined {
  return UNITS.find((u) => u.lessons.some((l) => l.slug === lessonSlug));
}
