import type { Stage } from "../types";

export const STAGES: Stage[] = [
  { number: 1, title: "Foundations", blurb: "Sounds, greetings, numbers, articles, the first verbs." },
  { number: 2, title: "First conversations", blurb: "Talk about yourself, ask questions, glue ideas together." },
  { number: 3, title: "Around London", blurb: "The Tube, directions, hotels, help — survival English." },
  { number: 4, title: "Eating & drinking", blurb: "Cafés, pubs, ordering, paying, British classics." },
  { number: 5, title: "Past & future", blurb: "Tell stories — past simple, continuous, will & going to." },
  { number: 6, title: "Shopping & daily life", blurb: "Markets, money, polite requests, complaints." },
  { number: 7, title: "Cultural fluency", blurb: "Idioms, weather talk, the arts, phone & email." },
  { number: 8, title: "Real conversations (B1)", blurb: "Conditionals, present perfect, opinions and debate." },
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
  { slug: "alphabet", stage: 1, order: 1, icon: "🔤", title: "Alphabet & sounds", tagline: "Letter names, the schwa, silent letters, th, hard/soft c & g." },
  { slug: "greetings", stage: 1, order: 2, icon: "👋", title: "Greetings & politeness", tagline: "Hi, hello, good morning — please, thanks, sorry, and 'you alright?'" },
  { slug: "numbers-time", stage: 1, order: 3, icon: "🔢", title: "Numbers, days & time", tagline: "0–1000, dates, telling the time, prices in pounds." },
  { slug: "articles", stage: 1, order: 4, icon: "📚", title: "A, an, the & plurals", tagline: "a vs an, the, regular & irregular plurals, this/that." },
  { slug: "to-be-have", stage: 1, order: 5, icon: "🧱", title: "To be, to have & present simple", tagline: "am/is/are, have/has, and the everyday present tense." },

  // Stage 2 — First conversations
  { slug: "about-me", stage: 2, order: 6, icon: "🪪", title: "About me", tagline: "Nationalities, jobs, family, my/your and the possessive 's." },
  { slug: "questions", stage: 2, order: 7, icon: "❓", title: "Asking questions", tagline: "Who, what, where, when, why, how — and do/does word order." },
  { slug: "likes-wants", stage: 2, order: 8, icon: "❤️", title: "Likes & wants", tagline: "like/love/hate + -ing, 'I'd like', want, prefer." },
  { slug: "connectors", stage: 2, order: 9, icon: "🔗", title: "Connecting words", tagline: "and, but, because, so, then, also — building longer sentences." },

  // Stage 3 — Around London
  { slug: "transit", stage: 3, order: 10, icon: "🚇", title: "Getting around", tagline: "The Tube, buses, the Oyster card, 'mind the gap', train tickets." },
  { slug: "directions", stage: 3, order: 11, icon: "🧭", title: "Asking for directions", tagline: "Left, right, straight on — 'excuse me, where's…?'" },
  { slug: "hotel", stage: 3, order: 12, icon: "🏨", title: "Airport & hotel", tagline: "Heathrow, check-in, booking a room, room vocab, problems." },
  { slug: "help", stage: 3, order: 13, icon: "🆘", title: "Emergencies & help", tagline: "The chemist, A&E, 999 — 'can you help me, please?'" },
  { slug: "landmarks", stage: 3, order: 14, icon: "🏛️", title: "London landmarks", tagline: "Big Ben, the Eye, the Thames — talking about what you've seen." },

  // Stage 4 — Eating & drinking
  { slug: "cafe", stage: 4, order: 15, icon: "☕", title: "At the café", tagline: "Tea or coffee, 'eat in or takeaway', and how to queue." },
  { slug: "pub", stage: 4, order: 16, icon: "🍺", title: "At the pub", tagline: "Ordering at the bar, rounds, pub grub, 'what'll you have?'" },
  { slug: "food-vocab", stage: 4, order: 17, icon: "🍳", title: "Food vocab deep dive", tagline: "Meats, veg, fish, cooking verbs, and the full English breakfast." },
  { slug: "diet-drinks", stage: 4, order: 18, icon: "🥗", title: "Drinks & dietary needs", tagline: "'I'm vegetarian', 'I'm allergic to…', ordering a round of drinks." },
  { slug: "british-food", stage: 4, order: 19, icon: "🍟", title: "British & regional", tagline: "Fish & chips, the Sunday roast, the curry house, tipping." },

  // Stage 5 — Past & future
  { slug: "past-simple", stage: 5, order: 20, icon: "⏪", title: "Past simple (regular)", tagline: "'Yesterday I worked' — -ed endings, spelling and sounds." },
  { slug: "past-irregular", stage: 5, order: 21, icon: "🏃", title: "Past simple (irregular)", tagline: "went, saw, had, did — negatives & questions with 'did'." },
  { slug: "past-continuous", stage: 5, order: 22, icon: "🌅", title: "Past continuous", tagline: "'I was walking when…' — setting the scene in a story." },
  { slug: "future", stage: 5, order: 23, icon: "⏩", title: "Future: will & going to", tagline: "Predictions, plans and decisions made on the spot." },
  { slug: "narrate-trip", stage: 5, order: 24, icon: "📖", title: "Narrating a trip", tagline: "Combine your tenses to tell the story of your travels." },

  // Stage 6 — Shopping & daily life
  { slug: "shopping", stage: 6, order: 25, icon: "🛍️", title: "Money & shopping", tagline: "'How much is it?', contactless, sizes, 'can I try it on?'" },
  { slug: "market", stage: 6, order: 26, icon: "🥕", title: "Market & supermarket", tagline: "Borough Market, 'a pound of…', 'two for one'." },
  { slug: "polite-requests", stage: 6, order: 27, icon: "🤝", title: "Polite requests (could/would)", tagline: "'Could you…', 'would you mind…', and indirect questions." },
  { slug: "complaints", stage: 6, order: 28, icon: "📣", title: "Complaints & returns", tagline: "'I'd like a refund', 'it doesn't work' — polite escalation." },

  // Stage 7 — Cultural fluency
  { slug: "idioms", stage: 7, order: 29, icon: "🐺", title: "Idioms & phrasal verbs", tagline: "'Raining cats and dogs', 'cheers', and get up / get on / get by." },
  { slug: "weather-smalltalk", stage: 7, order: 30, icon: "🌦️", title: "Weather & small talk", tagline: "The great British weather, 'lovely day', and graceful exits." },
  { slug: "culture-arts", stage: 7, order: 31, icon: "🖼️", title: "Museums & the arts", tagline: "The British Museum, the West End, 'have you seen…?'" },
  { slug: "phone-email", stage: 7, order: 32, icon: "💬", title: "Phone & email", tagline: "'Can I take a message?', formal vs informal email, texting." },

  // Stage 8 — Real conversations (B1)
  { slug: "conditionals", stage: 8, order: 33, icon: "🎩", title: "Conditionals (if)", tagline: "Zero, first and second conditionals — 'if I were you…'" },
  { slug: "present-perfect", stage: 8, order: 34, icon: "🤔", title: "Present perfect", tagline: "'I've been to…', for/since, ever/never, just/already/yet." },
  { slug: "opinions", stage: 8, order: 35, icon: "🗣️", title: "Opinions & debate", tagline: "'In my opinion', 'I agree/disagree', 'on the other hand'." },
];

export const TOTAL_UNITS = UNIT_OUTLINE.length;
