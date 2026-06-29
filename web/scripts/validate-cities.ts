// Sanity-checks every city coordinate against its country polygon.
// Run from web/:  node --experimental-strip-types scripts/validate-cities.ts
// geoContains can false-negative for coastal cities on the simplified 50m
// coastline, so near-misses are warnings; gross errors (wrong hemisphere,
// swapped lat/lng) land far outside and are what this is really catching.
import { geoContains } from "d3-geo";
import { createRequire } from "node:module";
import type { Feature } from "geojson";
import { ITALY_CITIES } from "../lib/geo/italy-cities.ts";
import { FRANCE_CITIES } from "../lib/geo/france-cities.ts";
import { SPAIN_CITIES } from "../lib/geo/spain-cities.ts";
import { BRAZIL_CITIES } from "../lib/geo/brazil-cities.ts";
import { UK_CITIES } from "../lib/geo/uk-cities.ts";
import { GERMANY_CITIES } from "../lib/geo/germany-cities.ts";
import { EGYPT_CITIES } from "../lib/geo/egypt-cities.ts";
import { JAPAN_CITIES } from "../lib/geo/japan-cities.ts";
import { CHINA_CITIES } from "../lib/geo/china-cities.ts";

const require = createRequire(import.meta.url);
const SETS: Record<string, { cities: typeof ITALY_CITIES; file: string }> = {
  italy: { cities: ITALY_CITIES, file: "italy" },
  france: { cities: FRANCE_CITIES, file: "france" },
  spain: { cities: SPAIN_CITIES, file: "spain" },
  brazil: { cities: BRAZIL_CITIES, file: "brazil" },
  uk: { cities: UK_CITIES, file: "uk" },
  germany: { cities: GERMANY_CITIES, file: "germany" },
  egypt: { cities: EGYPT_CITIES, file: "egypt" },
  japan: { cities: JAPAN_CITIES, file: "japan" },
  china: { cities: CHINA_CITIES, file: "china" },
};

let problems = 0;
for (const [key, { cities, file }] of Object.entries(SETS)) {
  const geo = require(`../lib/geo/data/${file}.geo.json`) as Feature;
  const outside = cities.filter((c) => !geoContains(geo, c.coordinates));
  if (outside.length) {
    console.log(`${key}: ${outside.length}/${cities.length} outside polygon → ${outside.map((c) => c.name).join(", ")}`);
    problems += outside.length;
  } else {
    console.log(`${key}: all ${cities.length} inside ✓`);
  }
}
console.log(problems === 0 ? "ALL GOOD" : `${problems} to eyeball (coastal/island near-misses are OK)`);
