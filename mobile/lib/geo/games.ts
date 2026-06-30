import type { Feature, FeatureCollection } from "geojson";
import type { Lang } from "@/lib/lang";
import type { GeoCity } from "./italy-cities";
import { ITALY_CITIES } from "./italy-cities";
import { FRANCE_CITIES } from "./france-cities";
import { SPAIN_CITIES } from "./spain-cities";
import { BRAZIL_CITIES } from "./brazil-cities";
import { UK_CITIES } from "./uk-cities";
import { GERMANY_CITIES } from "./germany-cities";
import { EGYPT_CITIES } from "./egypt-cities";
import { JAPAN_CITIES } from "./japan-cities";
import { CHINA_CITIES } from "./china-cities";

export type GeoData = Feature | FeatureCollection;

/**
 * A geography game. Two kinds:
 *  - "cities":    a single country outline + a set of city markers to find.
 *  - "countries": a collection of countries; click the prompted one.
 * The (large) GeoJSON is loaded lazily via `load()` so it never bloats the
 * landing page or a sibling game's route — only the played game's data ships.
 */
export type GeoGame = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  kind: "cities" | "countries";
  region: "country" | "continent";
  count: number;
  cities?: GeoCity[];
  /** Optional geoMercator rotation [lambda, phi]. Needed for Asia so Russia,
   *  which straddles the antimeridian, renders contiguously instead of wrapping. */
  rotate?: [number, number];
  load: () => Promise<GeoData>;
};

const asFeature = (m: { default: unknown }) => m.default as unknown as Feature;
const asCollection = (m: { default: unknown }) => m.default as unknown as FeatureCollection;

export const GEO_GAMES: GeoGame[] = [
  // ── Continents (find the country) ──
  {
    id: "europe-countries",
    title: "Countries of Europe",
    subtitle: "Find the country on the map",
    emoji: "🇪🇺",
    kind: "countries",
    region: "continent",
    count: 44,
    load: () => import("./data/europe.geo.json").then(asCollection),
  },
  {
    id: "asia-countries",
    title: "Countries of Asia",
    subtitle: "Find the country on the map",
    emoji: "🌏",
    kind: "countries",
    region: "continent",
    count: 48,
    rotate: [-100, 0], // center on ~100°E so Russia doesn't wrap the antimeridian
    load: () => import("./data/asia.geo.json").then(asCollection),
  },
  {
    id: "africa-countries",
    title: "Countries of Africa",
    subtitle: "Find the country on the map",
    emoji: "🌍",
    kind: "countries",
    region: "continent",
    count: 50,
    load: () => import("./data/africa.geo.json").then(asCollection),
  },
  {
    id: "south-america-countries",
    title: "Countries of South America",
    subtitle: "Find the country on the map",
    emoji: "🌎",
    kind: "countries",
    region: "continent",
    count: 12,
    load: () => import("./data/south-america.geo.json").then(asCollection),
  },
  // ── Cities (find the city) ──
  {
    id: "italy-cities",
    title: "Italian cities",
    subtitle: "Find the city on the map",
    emoji: "🇮🇹",
    kind: "cities",
    region: "country",
    count: ITALY_CITIES.length,
    cities: ITALY_CITIES,
    load: () => import("./data/italy.geo.json").then(asFeature),
  },
  {
    id: "france-cities",
    title: "French cities",
    subtitle: "Find the city on the map",
    emoji: "🇫🇷",
    kind: "cities",
    region: "country",
    count: FRANCE_CITIES.length,
    cities: FRANCE_CITIES,
    load: () => import("./data/france.geo.json").then(asFeature),
  },
  {
    id: "spain-cities",
    title: "Spanish cities",
    subtitle: "Find the city on the map",
    emoji: "🇪🇸",
    kind: "cities",
    region: "country",
    count: SPAIN_CITIES.length,
    cities: SPAIN_CITIES,
    load: () => import("./data/spain.geo.json").then(asFeature),
  },
  {
    id: "uk-cities",
    title: "British cities",
    subtitle: "Find the city on the map",
    emoji: "🇬🇧",
    kind: "cities",
    region: "country",
    count: UK_CITIES.length,
    cities: UK_CITIES,
    load: () => import("./data/uk.geo.json").then(asFeature),
  },
  {
    id: "germany-cities",
    title: "German cities",
    subtitle: "Find the city on the map",
    emoji: "🇩🇪",
    kind: "cities",
    region: "country",
    count: GERMANY_CITIES.length,
    cities: GERMANY_CITIES,
    load: () => import("./data/germany.geo.json").then(asFeature),
  },
  {
    id: "brazil-cities",
    title: "Brazilian cities",
    subtitle: "Find the city on the map",
    emoji: "🇧🇷",
    kind: "cities",
    region: "country",
    count: BRAZIL_CITIES.length,
    cities: BRAZIL_CITIES,
    load: () => import("./data/brazil.geo.json").then(asFeature),
  },
  {
    id: "egypt-cities",
    title: "Egyptian cities",
    subtitle: "Find the city on the map",
    emoji: "🇪🇬",
    kind: "cities",
    region: "country",
    count: EGYPT_CITIES.length,
    cities: EGYPT_CITIES,
    load: () => import("./data/egypt.geo.json").then(asFeature),
  },
  {
    id: "japan-cities",
    title: "Japanese cities",
    subtitle: "Find the city on the map",
    emoji: "🇯🇵",
    kind: "cities",
    region: "country",
    count: JAPAN_CITIES.length,
    cities: JAPAN_CITIES,
    load: () => import("./data/japan.geo.json").then(asFeature),
  },
  {
    id: "china-cities",
    title: "Chinese cities",
    subtitle: "Find the city on the map",
    emoji: "🇨🇳",
    kind: "cities",
    region: "country",
    count: CHINA_CITIES.length,
    cities: CHINA_CITIES,
    load: () => import("./data/china.geo.json").then(asFeature),
  },
];

export function findGame(id: string): GeoGame | undefined {
  return GEO_GAMES.find((g) => g.id === id);
}

/** The two geography games surfaced on each language's home screen: the country
 *  whose language this is, plus that country's continent. */
export const GEO_GAMES_BY_LANG: Record<Lang, [string, string]> = {
  italian: ["italy-cities", "europe-countries"],
  french: ["france-cities", "europe-countries"],
  spanish: ["spain-cities", "europe-countries"],
  portuguese: ["brazil-cities", "south-america-countries"],
  english: ["uk-cities", "europe-countries"],
  german: ["germany-cities", "europe-countries"],
  arabic: ["egypt-cities", "africa-countries"],
  japanese: ["japan-cities", "asia-countries"],
  chinese: ["china-cities", "asia-countries"],
};
