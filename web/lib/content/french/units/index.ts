import type { Unit } from "../../types";
import { UNIT_PRONUNCIATION } from "./01-pronunciation";
import { UNIT_SALUTATIONS } from "./02-salutations";
import { UNIT_NOMBRES_TEMPS } from "./03-nombres-temps";
import { UNIT_ARTICLES } from "./04-articles";
import { UNIT_ETRE_AVOIR } from "./05-etre-avoir";
import { UNIT_A_PROPOS_DE_MOI } from "./06-a-propos-de-moi";
import { UNIT_QUESTIONS } from "./07-questions";
import { UNIT_AIMER_VOULOIR } from "./08-aimer-vouloir";
import { UNIT_CONNECTEURS } from "./09-connecteurs";
import { UNIT_TRANSPORT } from "./10-transport";
import { UNIT_DIRECTIONS } from "./11-directions";
import { UNIT_HOTEL } from "./12-hotel";
import { UNIT_URGENCES } from "./13-urgences";
import { UNIT_MONUMENTS } from "./14-monuments";
import { UNIT_CAFE } from "./15-cafe";
import { UNIT_RESTAURANT } from "./16-restaurant";
import { UNIT_NOURRITURE } from "./17-nourriture";
import { UNIT_REGIME_VIN } from "./18-regime-vin";
import { UNIT_SPECIALITES } from "./19-specialites";
import { UNIT_PASSE_AVOIR } from "./20-passe-avoir";
import { UNIT_PASSE_ETRE } from "./21-passe-etre";
import { UNIT_IMPARFAIT } from "./22-imparfait";
import { UNIT_FUTUR } from "./23-futur";
import { UNIT_RACONTER } from "./24-raconter";
import { UNIT_SHOPPING } from "./25-shopping";
import { UNIT_MARCHE } from "./26-marche";
import { UNIT_VOUS_FORMEL } from "./27-vous-formel";
import { UNIT_RECLAMATIONS } from "./28-reclamations";
import { UNIT_EXPRESSIONS } from "./29-expressions";
import { UNIT_ART_CULTURE } from "./30-art-culture";
import { UNIT_MODE_STYLE } from "./31-mode-style";
import { UNIT_BAVARDAGE } from "./32-bavardage";
import { UNIT_CONDITIONNEL } from "./33-conditionnel";
import { UNIT_SUBJONCTIF } from "./34-subjonctif";
import { UNIT_OPINIONS } from "./35-opinions";

/**
 * All authored units, in stage+order sequence.
 * Remaining stages' unit previews live in `lib/content/stages.ts` as UNIT_OUTLINE.
 */
export const UNITS: Unit[] = [
  UNIT_PRONUNCIATION,
  UNIT_SALUTATIONS,
  UNIT_NOMBRES_TEMPS,
  UNIT_ARTICLES,
  UNIT_ETRE_AVOIR,
  UNIT_A_PROPOS_DE_MOI,
  UNIT_QUESTIONS,
  UNIT_AIMER_VOULOIR,
  UNIT_CONNECTEURS,
  UNIT_TRANSPORT,
  UNIT_DIRECTIONS,
  UNIT_HOTEL,
  UNIT_URGENCES,
  UNIT_MONUMENTS,
  UNIT_CAFE,
  UNIT_RESTAURANT,
  UNIT_NOURRITURE,
  UNIT_REGIME_VIN,
  UNIT_SPECIALITES,
  UNIT_PASSE_AVOIR,
  UNIT_PASSE_ETRE,
  UNIT_IMPARFAIT,
  UNIT_FUTUR,
  UNIT_RACONTER,
  UNIT_SHOPPING,
  UNIT_MARCHE,
  UNIT_VOUS_FORMEL,
  UNIT_RECLAMATIONS,
  UNIT_EXPRESSIONS,
  UNIT_ART_CULTURE,
  UNIT_MODE_STYLE,
  UNIT_BAVARDAGE,
  UNIT_CONDITIONNEL,
  UNIT_SUBJONCTIF,
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
