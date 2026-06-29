import type { Feature, FeatureCollection } from "geojson";
import { ITALY_CITIES, type GeoCity } from "./italy-cities";
import italyGeo from "./data/italy.geo.json";
import europeGeo from "./data/europe.geo.json";

/**
 * A geography game. Two kinds:
 *  - "cities":    a single country outline + a set of city markers to find.
 *  - "countries": a collection of countries; click the prompted one.
 */
export type GeoGame =
  | {
      id: string;
      title: string;
      subtitle: string;
      emoji: string;
      kind: "cities";
      geo: Feature;
      cities: GeoCity[];
      /** SVG viewBox [width, height], chosen to roughly match the region's aspect. */
      viewBox: [number, number];
    }
  | {
      id: string;
      title: string;
      subtitle: string;
      emoji: string;
      kind: "countries";
      geo: FeatureCollection;
      viewBox: [number, number];
    };

export const GEO_GAMES: GeoGame[] = [
  {
    id: "italy-cities",
    title: "Italian cities",
    subtitle: "Find the city on the map",
    emoji: "🇮🇹",
    kind: "cities",
    geo: italyGeo as unknown as Feature,
    cities: ITALY_CITIES,
    viewBox: [620, 800],
  },
  {
    id: "europe-countries",
    title: "Countries of Europe",
    subtitle: "Find the country on the map",
    emoji: "🗺️",
    kind: "countries",
    geo: europeGeo as unknown as FeatureCollection,
    viewBox: [1000, 780],
  },
];

export function findGame(id: string): GeoGame | undefined {
  return GEO_GAMES.find((g) => g.id === id);
}
