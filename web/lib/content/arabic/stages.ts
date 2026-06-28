import type { Stage } from "../types";

export const STAGES: Stage[] = [
  { number: 1, title: "Foundations", blurb: "The script, greetings, numbers, al-, and nominal sentences." },
  { number: 2, title: "First conversations", blurb: "Talk about yourself, ask questions, show possession." },
  { number: 3, title: "Around Cairo", blurb: "Taxis, directions, hotels, help — survival Arabic." },
  { number: 4, title: "Eating & drinking", blurb: "Ahwas, restaurants, ordering, Egyptian classics." },
  { number: 5, title: "Past & future", blurb: "Tell stories — past, present and future verbs." },
  { number: 6, title: "Daily life", blurb: "Markets, bargaining, polite requests, problems." },
  { number: 7, title: "Cultural fluency", blurb: "Everyday expressions, small talk, customs, comparison." },
  { number: 8, title: "Real conversations (B1)", blurb: "Verb forms, the dual & plurals, opinions." },
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
  { slug: "alphabet", stage: 1, order: 1, icon: "🔤", title: "The Arabic alphabet", tagline: "28 letters, connecting forms, right-to-left, sun & moon letters." },
  { slug: "greetings", stage: 1, order: 2, icon: "👋", title: "Greetings & courtesy", tagline: "As-salāmu ʿalaykum, ṣabāḥ al-khayr, shukran, ʿafwan." },
  { slug: "numbers-time", stage: 1, order: 3, icon: "🔢", title: "Numbers & time", tagline: "Arabic-Indic numerals ٠–١٠٠٠, the clock, days of the week." },
  { slug: "article-gender", stage: 1, order: 4, icon: "📚", title: "al-, gender & nouns", tagline: "The article al-, sun/moon assimilation, the tāʾ marbūṭa." },
  { slug: "pronouns-nominal", stage: 1, order: 5, icon: "🧱", title: "Pronouns & nominal sentences", tagline: "anā/anta/anti — sentences with no verb 'to be'." },

  // Stage 2 — First conversations
  { slug: "about-me", stage: 2, order: 6, icon: "🪪", title: "About me", tagline: "Nationalities, jobs, family, and nisba adjectives." },
  { slug: "questions", stage: 2, order: 7, icon: "❓", title: "Asking questions", tagline: "man, mā, mādhā, ayna, matā, kayfa, kam, limādhā." },
  { slug: "possessives", stage: 2, order: 8, icon: "🎯", title: "Possession (iḍāfa)", tagline: "Attached pronouns (-ī/-ka/-ki) and the construct chain." },
  { slug: "connectors", stage: 2, order: 9, icon: "🔗", title: "Connecting words", tagline: "wa, fa, lākin, li-anna, thumma." },

  // Stage 3 — Around Cairo
  { slug: "transit", stage: 3, order: 10, icon: "🚕", title: "Getting around Cairo", tagline: "Taxis, the metro, the microbus — bikam?" },
  { slug: "directions", stage: 3, order: 11, icon: "🧭", title: "Asking for directions", tagline: "yamīn, yasār, ʿalā ṭūl — ayna…?" },
  { slug: "hotel", stage: 3, order: 12, icon: "🏨", title: "Airport & hotel", tagline: "Check-in, the jawāz safar, booking a room." },
  { slug: "help", stage: 3, order: 13, icon: "🆘", title: "Help & emergencies", tagline: "The ṣaydaliyya, musāʿada!, finding a doctor." },
  { slug: "landmarks", stage: 3, order: 14, icon: "🏛️", title: "Cairo landmarks", tagline: "Al-Ahrām, the Nile, Khan el-Khalili, Islamic Cairo." },

  // Stage 4 — Eating & drinking
  { slug: "cafe", stage: 4, order: 15, icon: "☕", title: "At the ahwa (café)", tagline: "Shāy, ʿahwa, min faḍlak — the traditional coffeehouse." },
  { slug: "restaurant", stage: 4, order: 16, icon: "🍽️", title: "At the restaurant", tagline: "Ordering, al-ḥisāb, anā ʿāyiz/ʿāyza." },
  { slug: "food-vocab", stage: 4, order: 17, icon: "🍲", title: "Food vocab deep dive", tagline: "Meats, vegetables, bread (ʿaysh), spices." },
  { slug: "diet-drinks", stage: 4, order: 18, icon: "🧃", title: "Drinks & dietary needs", tagline: "ʿaṣīr, shāy, anā nabātī, halal, allergies." },
  { slug: "egyptian-food", stage: 4, order: 19, icon: "🍛", title: "Egyptian classics", tagline: "Koshari, fūl, taʿmiya, maḥshī, and baksheesh." },

  // Stage 5 — Past & future
  { slug: "past-tense", stage: 5, order: 20, icon: "⏪", title: "The past tense", tagline: "The perfect verb (faʿala) and the three-letter root." },
  { slug: "past-pronouns", stage: 5, order: 21, icon: "🏃", title: "Past with pronouns", tagline: "Full past conjugation (-tu/-ta/-ti) with common verbs." },
  { slug: "present-tense", stage: 5, order: 22, icon: "🌅", title: "The present tense", tagline: "The imperfect (yafʿalu) — prefixes and suffixes." },
  { slug: "future", stage: 5, order: 23, icon: "⏩", title: "The future", tagline: "sa- / sawfa + the present, talking about plans." },
  { slug: "narrate-trip", stage: 5, order: 24, icon: "📖", title: "Narrating a trip", tagline: "Combine the tenses to tell your travel story." },

  // Stage 6 — Daily life
  { slug: "shopping", stage: 6, order: 25, icon: "🛍️", title: "Money & shopping", tagline: "bikam?, bargaining, prices and change." },
  { slug: "market", stage: 6, order: 26, icon: "🥕", title: "At the souq", tagline: "Khan el-Khalili, a kilo of…, ghālī! vs rakhīṣ." },
  { slug: "polite-requests", stage: 6, order: 27, icon: "🤝", title: "Polite requests", tagline: "mumkin…?, law samaḥt, min faḍlak." },
  { slug: "complaints", stage: 6, order: 28, icon: "📣", title: "Complaints & problems", tagline: "fīh mushkila, mish shaghghāl, getting it sorted." },

  // Stage 7 — Cultural fluency
  { slug: "expressions", stage: 7, order: 29, icon: "🌙", title: "Everyday expressions", tagline: "in shāʾ Allāh, al-ḥamdu lillāh, mā shāʾ Allāh, yaʿnī." },
  { slug: "smalltalk", stage: 7, order: 30, icon: "🍵", title: "Small talk & courtesy", tagline: "Hospitality, the weather, izzayyak, graceful goodbyes." },
  { slug: "culture-religion", stage: 7, order: 31, icon: "🕌", title: "Culture & customs", tagline: "Everyday etiquette, Ramadan basics, showing respect." },
  { slug: "comparatives", stage: 7, order: 32, icon: "✍️", title: "Describing & comparing", tagline: "Adjective agreement, colours, the comparative (afʿal)." },

  // Stage 8 — Real conversations (B1)
  { slug: "verb-forms", stage: 8, order: 33, icon: "🎩", title: "Verb forms (awareness)", tagline: "Recognising Forms II–X and common derived verbs." },
  { slug: "dual-plural", stage: 8, order: 34, icon: "🤔", title: "The dual & broken plurals", tagline: "The dual (-ān/-ayn) and sound vs broken plurals." },
  { slug: "opinions", stage: 8, order: 35, icon: "🗣️", title: "Opinions & discussion", tagline: "fī raʾyī, agreeing & disagreeing, expressing a view." },
];

export const TOTAL_UNITS = UNIT_OUTLINE.length;
