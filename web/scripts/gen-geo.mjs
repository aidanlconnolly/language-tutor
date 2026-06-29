// Generates the GeoJSON data files for the Geography games from world-atlas.
// Run from web/:  node scripts/gen-geo.mjs
// Single countries -> a Feature; continents -> a FeatureCollection.
import { feature } from "topojson-client";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, "..", "lib", "geo", "data");

const topo50 = require("world-atlas/countries-50m.json");
const fc50 = feature(topo50, topo50.objects.countries);
const map50 = new Map(fc50.features.map((f) => [f.properties.name, f]));

// Single-country outlines (the "find the city" games) — detailed 50m.
const COUNTRIES = {
  france: "France",
  spain: "Spain",
  brazil: "Brazil",
  uk: "United Kingdom",
  germany: "Germany",
  egypt: "Egypt",
  japan: "Japan",
  china: "China",
};

// Continents (the "find the country" games) — light 110m to keep bundle small.
const CONTINENTS = {
  "south-america": [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana",
    "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela",
  ],
  africa: [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon",
    "Central African Rep.", "Chad", "Congo", "Côte d'Ivoire", "Dem. Rep. Congo",
    "Djibouti", "Egypt", "Eq. Guinea", "Eritrea", "eSwatini", "Ethiopia", "Gabon",
    "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia",
    "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Morocco", "Mozambique",
    "Namibia", "Niger", "Nigeria", "Rwanda", "Senegal", "Sierra Leone", "Somalia",
    "South Africa", "S. Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda",
    "W. Sahara", "Zambia", "Zimbabwe",
  ],
  asia: [
    "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan",
    "Brunei", "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia",
    "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait",
    "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Mongolia", "Myanmar", "Nepal",
    "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar",
    "Saudi Arabia", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan",
    "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates",
    "Uzbekistan", "Vietnam", "Yemen",
  ],
};

for (const [key, name] of Object.entries(COUNTRIES)) {
  const f = map50.get(name);
  if (!f) throw new Error(`Country not found in 50m: ${name}`);
  const out = { type: "Feature", properties: { name }, geometry: f.geometry };
  writeFileSync(join(OUT, `${key}.geo.json`), JSON.stringify(out));
  console.log(`${key}.geo.json  (${name})`);
}

for (const [key, names] of Object.entries(CONTINENTS)) {
  const feats = names.map((n) => {
    const f = map50.get(n);
    if (!f) {
      console.warn(`  ! skipping (not in 50m): ${n}`);
      return null;
    }
    return { type: "Feature", properties: { name: n }, geometry: f.geometry };
  }).filter(Boolean);
  const out = { type: "FeatureCollection", features: feats };
  writeFileSync(join(OUT, `${key}.geo.json`), JSON.stringify(out));
  console.log(`${key}.geo.json  (${feats.length} countries)`);
}

console.log("done");
