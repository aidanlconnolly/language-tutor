import type { Stage } from "../types";

export const STAGES: Stage[] = [
  { number: 1, title: "Foundations", blurb: "Hiragana, katakana, greetings, numbers, です." },
  { number: 2, title: "First conversations", blurb: "Talk about yourself, ask questions, adjectives." },
  { number: 3, title: "Around Tokyo", blurb: "Trains, directions, hotels, help — survival Japanese." },
  { number: 4, title: "Eating & drinking", blurb: "Cafés, konbini, ramen, sushi etiquette." },
  { number: 5, title: "Verbs", blurb: "ます-form, the past, the て-form, wanting & ability." },
  { number: 6, title: "Daily life", blurb: "Shopping, counters, polite requests, plain form." },
  { number: 7, title: "Cultural fluency", blurb: "Aizuchi, small talk, customs, comparison." },
  { number: 8, title: "Real conversations (B1)", blurb: "て-form grammar, plain clauses, opinions." },
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
  { slug: "hiragana", stage: 1, order: 1, icon: "🅰️", title: "Hiragana", tagline: "The 46 hiragana, dakuten, and the small-ya combos." },
  { slug: "katakana", stage: 1, order: 2, icon: "🔡", title: "Katakana", tagline: "Katakana for loanwords — コーヒー, ホテル, タクシー." },
  { slug: "greetings", stage: 1, order: 3, icon: "👋", title: "Greetings & bowing", tagline: "Konnichiwa, ohayō, arigatō, sumimasen — and the bow." },
  { slug: "numbers-time", stage: 1, order: 4, icon: "🔢", title: "Numbers, time & counters", tagline: "1–10000, telling time, days, and counting intro." },
  { slug: "desu-particles", stage: 1, order: 5, icon: "🧱", title: "です & basic particles", tagline: "X は Y です, the particles は・の, and か questions." },

  // Stage 2 — First conversations
  { slug: "about-me", stage: 2, order: 6, icon: "🪪", title: "About me", tagline: "Nationality, job, family, watashi & anata." },
  { slug: "questions", stage: 2, order: 7, icon: "❓", title: "Asking questions", tagline: "なに・だれ・どこ・いつ・どう・いくら + か." },
  { slug: "this-that", stage: 2, order: 8, icon: "🎯", title: "これ/それ/あれ & particles", tagline: "kore/sore/are, kono/sono, and を・に・へ." },
  { slug: "adjectives", stage: 2, order: 9, icon: "🌈", title: "Adjectives (い & な)", tagline: "い-adjectives and な-adjectives, positive & negative." },

  // Stage 3 — Around Tokyo
  { slug: "transit", stage: 3, order: 10, icon: "🚆", title: "Tokyo trains", tagline: "JR, the metro, the Suica card, …まで." },
  { slug: "directions", stage: 3, order: 11, icon: "🧭", title: "Asking for directions", tagline: "migi/hidari/massugu — …は どこ ですか." },
  { slug: "hotel", stage: 3, order: 12, icon: "🏨", title: "Airport & hotel", tagline: "Check-in, passport, room vocab, problems." },
  { slug: "help", stage: 3, order: 13, icon: "🆘", title: "Help & emergencies", tagline: "The pharmacy, the kōban, tasukete!" },
  { slug: "landmarks", stage: 3, order: 14, icon: "🏯", title: "Tokyo landmarks", tagline: "Sensō-ji, Shibuya, the Skytree, Meiji shrine." },

  // Stage 4 — Eating & drinking
  { slug: "cafe", stage: 4, order: 15, icon: "☕", title: "Café & konbini", tagline: "Coffee, the konbini, …を ください." },
  { slug: "restaurant", stage: 4, order: 16, icon: "🍜", title: "At the restaurant", tagline: "Ramen, …を おねがいします, お会計." },
  { slug: "food-vocab", stage: 4, order: 17, icon: "🍱", title: "Food vocab deep dive", tagline: "Sushi, meats, vegetables, the meals of the day." },
  { slug: "diet-drinks", stage: 4, order: 18, icon: "🍵", title: "Drinks & dietary needs", tagline: "Tea, sake, …は 食べられません, allergies." },
  { slug: "japanese-food", stage: 4, order: 19, icon: "🍣", title: "Japanese classics", tagline: "Sushi etiquette, izakaya, ramen — and no tipping." },

  // Stage 5 — Verbs
  { slug: "masu-present", stage: 5, order: 20, icon: "🟢", title: "Verbs: the ます-form", tagline: "Polite present/future — 行きます, 食べます." },
  { slug: "masu-past", stage: 5, order: 21, icon: "⏪", title: "Verbs: the past", tagline: "…ました / …ませんでした for the polite past." },
  { slug: "te-form", stage: 5, order: 22, icon: "🔗", title: "The て-form", tagline: "…て ください and the …て います continuous." },
  { slug: "want-can", stage: 5, order: 23, icon: "✨", title: "Wanting & ability", tagline: "…たい, ほしい, and …ことが できる." },
  { slug: "narrate-trip", stage: 5, order: 24, icon: "📖", title: "Narrating a trip", tagline: "Combine your tenses to tell your travel story." },

  // Stage 6 — Daily life
  { slug: "shopping", stage: 6, order: 25, icon: "🛍️", title: "Money & shopping", tagline: "いくら ですか, sizes, paying, IC cards." },
  { slug: "counters", stage: 6, order: 26, icon: "🧮", title: "Counters & quantities", tagline: "…つ, 本, 枚, 個, 人 — counting things the Japanese way." },
  { slug: "polite-requests", stage: 6, order: 27, icon: "🤝", title: "Polite requests & keigo", tagline: "…て いただけますか, おねがいします, a keigo intro." },
  { slug: "plain-form", stage: 6, order: 28, icon: "💬", title: "Plain (casual) form", tagline: "The dictionary/plain form vs the polite ます-form." },

  // Stage 7 — Cultural fluency
  { slug: "expressions", stage: 7, order: 29, icon: "🎌", title: "Aizuchi & expressions", tagline: "そうですね, aizuchi, よろしく, お疲れさま." },
  { slug: "smalltalk", stage: 7, order: 30, icon: "🌸", title: "Small talk & weather", tagline: "The weather, the seasons, and graceful exits." },
  { slug: "culture-customs", stage: 7, order: 31, icon: "⛩️", title: "Customs & etiquette", tagline: "Shoes, the onsen, gift-giving, shrine etiquette." },
  { slug: "comparatives", stage: 7, order: 32, icon: "✍️", title: "Comparing & describing", tagline: "…の ほうが, …より, and adjective adverbs." },

  // Stage 8 — Real conversations (B1)
  { slug: "te-grammar", stage: 8, order: 33, icon: "🎩", title: "て-form grammar", tagline: "…ても いい, …なければ, …た ことが ある." },
  { slug: "plain-clauses", stage: 8, order: 34, icon: "🤔", title: "Plain-form clauses", tagline: "…と 思う, …から, …とき, and casual speech." },
  { slug: "opinions", stage: 8, order: 35, icon: "🗣️", title: "Opinions & discussion", tagline: "…と 思います, agreeing & disagreeing, …かもしれません." },
];

export const TOTAL_UNITS = UNIT_OUTLINE.length;
