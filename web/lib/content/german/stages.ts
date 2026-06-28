import type { Stage } from "../types";

export const STAGES: Stage[] = [
  { number: 1, title: "Foundations", blurb: "Sounds, greetings, numbers, genders, the first verbs." },
  { number: 2, title: "First conversations", blurb: "Talk about yourself, ask questions, meet the accusative." },
  { number: 3, title: "Around Berlin", blurb: "U-Bahn, directions, hotels, help — survival German." },
  { number: 4, title: "Eating & drinking", blurb: "Cafés, restaurants, beer halls, Currywurst, paying." },
  { number: 5, title: "Past & future", blurb: "Tell stories — Perfekt, Präteritum, werden, modals." },
  { number: 6, title: "Daily life", blurb: "Shopping, the dative case, polite requests, complaints." },
  { number: 7, title: "Cultural fluency", blurb: "Particles, small talk, the arts, adjective endings." },
  { number: 8, title: "Real conversations (B1)", blurb: "Subordinate clauses, Konjunktiv II, opinions." },
];

/** Full 35-unit outline (for the locked previews in the roadmap). */
export type UnitPreview = {
  slug: string;
  stage: number;
  order: number;
  icon: string;
  title: string;
  tagline: string;
};

export const UNIT_OUTLINE: UnitPreview[] = [
  // Stage 1 — Foundations
  { slug: "alphabet", stage: 1, order: 1, icon: "🔤", title: "Alphabet & sounds", tagline: "ä ö ü ß, ch & sch, w=v, z=ts, ei vs ie, the German r." },
  { slug: "greetings", stage: 1, order: 2, icon: "👋", title: "Greetings & du/Sie", tagline: "Hallo, Guten Tag, Tschüss — and formal Sie vs informal du." },
  { slug: "numbers-time", stage: 1, order: 3, icon: "🔢", title: "Numbers, days & time", tagline: "0–1000 (and the einundzwanzig flip), dates, Uhrzeit, prices." },
  { slug: "articles-gender", stage: 1, order: 4, icon: "📚", title: "Gender, articles & plurals", tagline: "der/die/das, ein/eine — the three genders and plurals." },
  { slug: "sein-haben", stage: 1, order: 5, icon: "🧱", title: "Sein, haben & present tense", tagline: "The two pillars, plus regular -en verb endings." },

  // Stage 2 — First conversations
  { slug: "about-me", stage: 2, order: 6, icon: "🪪", title: "About me", tagline: "Nationalities, jobs, family, mein/dein possessives." },
  { slug: "questions", stage: 2, order: 7, icon: "❓", title: "Asking questions", tagline: "Wer, was, wo, wann, warum, wie — and verb-first questions." },
  { slug: "cases-intro", stage: 2, order: 8, icon: "🎯", title: "The accusative case", tagline: "Why der becomes den — the direct-object case." },
  { slug: "connectors", stage: 2, order: 9, icon: "🔗", title: "Connecting words", tagline: "und, aber, oder, denn, and weil (verb to the end)." },

  // Stage 3 — Around Berlin
  { slug: "transit", stage: 3, order: 10, icon: "🚇", title: "Getting around Berlin", tagline: "U-Bahn, S-Bahn, the BVG ticket, entwerten, Welche Linie?" },
  { slug: "directions", stage: 3, order: 11, icon: "🧭", title: "Asking for directions", tagline: "Links, rechts, geradeaus — Wie komme ich zu…?" },
  { slug: "hotel", stage: 3, order: 12, icon: "🏨", title: "Airport & hotel", tagline: "Check-in, ein Zimmer reservieren, der Reisepass." },
  { slug: "help", stage: 3, order: 13, icon: "🆘", title: "Emergencies & help", tagline: "Apotheke, Notaufnahme, 112 — Können Sie mir helfen?" },
  { slug: "landmarks", stage: 3, order: 14, icon: "🏛️", title: "Berlin landmarks", tagline: "Brandenburger Tor, Reichstag, the Mauer, Museumsinsel." },

  // Stage 4 — Eating & drinking
  { slug: "cafe", stage: 4, order: 15, icon: "☕", title: "Café & bakery", tagline: "Kaffee und Kuchen, the Bäckerei, zum Mitnehmen." },
  { slug: "restaurant", stage: 4, order: 16, icon: "🍽️", title: "At the restaurant", tagline: "Bestellen, Ich hätte gern, die Rechnung, getrennt oder zusammen." },
  { slug: "food-vocab", stage: 4, order: 17, icon: "🥨", title: "Food vocab deep dive", tagline: "Fleisch, Gemüse, Brot, cooking verbs, the meals of the day." },
  { slug: "diet-drinks", stage: 4, order: 18, icon: "🍺", title: "Drinks & dietary needs", tagline: "Ich bin Vegetarier, allergisch gegen…, Bier & Wein, die Kneipe." },
  { slug: "german-food", stage: 4, order: 19, icon: "🌭", title: "German & regional", tagline: "Currywurst, Schnitzel, Brezn, the Berlin Döner, Trinkgeld." },

  // Stage 5 — Past & future
  { slug: "perfekt", stage: 5, order: 20, icon: "⏪", title: "Perfekt (haben)", tagline: "Ich habe gegessen — the everyday spoken past." },
  { slug: "perfekt-sein", stage: 5, order: 21, icon: "🏃", title: "Perfekt (sein)", tagline: "Ich bin gegangen — motion & change-of-state verbs." },
  { slug: "praeteritum", stage: 5, order: 22, icon: "🌅", title: "Präteritum", tagline: "war, hatte — the written and narrative past." },
  { slug: "future-modals", stage: 5, order: 23, icon: "⏩", title: "Future & modal verbs", tagline: "werden for the future, plus können/müssen/wollen/dürfen." },
  { slug: "narrate-trip", stage: 5, order: 24, icon: "📖", title: "Narrating a trip", tagline: "Combine tenses and separable verbs to tell your story." },

  // Stage 6 — Daily life
  { slug: "shopping", stage: 6, order: 25, icon: "🛍️", title: "Money & shopping", tagline: "Was kostet das?, EC-Karte, sizes, Kann ich das anprobieren?" },
  { slug: "dative-case", stage: 6, order: 26, icon: "🎁", title: "The dative case", tagline: "dem/der/den — dative verbs and mit/bei/nach prepositions." },
  { slug: "formal-requests", stage: 6, order: 27, icon: "🤝", title: "Polite requests", tagline: "Könnten Sie…, Würden Sie… — Konjunktiv II for politeness." },
  { slug: "complaints", stage: 6, order: 28, icon: "📣", title: "Complaints & returns", tagline: "Umtauschen, das funktioniert nicht, getting a refund." },

  // Stage 7 — Cultural fluency
  { slug: "idioms", stage: 7, order: 29, icon: "🦊", title: "Idioms & particles", tagline: "Flavouring particles doch/mal/ja/halt and common Redewendungen." },
  { slug: "smalltalk-weather", stage: 7, order: 30, icon: "🌦️", title: "Small talk & weather", tagline: "Das Wetter, Schönes Wochenende!, and graceful exits." },
  { slug: "culture-arts", stage: 7, order: 31, icon: "🖼️", title: "Museums & the arts", tagline: "Museumsinsel, das Theater, Hast du … gesehen?" },
  { slug: "adjective-endings", stage: 7, order: 32, icon: "✍️", title: "Adjective endings", tagline: "The der/die/das adjective declension tables, demystified." },

  // Stage 8 — Real conversations (B1)
  { slug: "subordinate-clauses", stage: 8, order: 33, icon: "🎩", title: "Subordinate clauses", tagline: "weil, dass, wenn, obwohl — and verb-final word order." },
  { slug: "konjunktiv", stage: 8, order: 34, icon: "🤔", title: "Konjunktiv II", tagline: "würde, hätte, wäre, könnte — hypotheticals and politeness." },
  { slug: "opinions", stage: 8, order: 35, icon: "🗣️", title: "Opinions & debate", tagline: "Meiner Meinung nach, agreeing & disagreeing, einerseits…andererseits." },
];

export const TOTAL_UNITS = UNIT_OUTLINE.length;
