import type { Stage } from "../types";

export const STAGES: Stage[] = [
  { number: 1, title: "Foundations", blurb: "Sounds, greetings, numbers, articles, ser & estar." },
  { number: 2, title: "First conversations", blurb: "Describe yourself, ask questions, express likes and connect ideas." },
  { number: 3, title: "Around Madrid", blurb: "Transit, directions, hotels, emergencies — survival Spanish." },
  { number: 4, title: "Eating & drinking", blurb: "Tapas bars, restaurants, ordering, paying, Spanish specialties." },
  { number: 5, title: "Past & future", blurb: "Tell stories — pretérito perfecto, indefinido, imperfecto, futuro." },
  { number: 6, title: "Shopping & daily life", blurb: "Markets, money, formal usted, polite complaints." },
  { number: 7, title: "Cultural fluency", blurb: "Idioms, flamenco, art, religion, small talk." },
  { number: 8, title: "Real conversations (B1)", blurb: "Conditional, subjunctive, opinions and debate." },
];

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
  { slug: "pronunciation", stage: 1, order: 1, icon: "🔤", title: "Pronunciation & sounds", tagline: "Vowels, ñ, rr, ll/y, accent marks — read anything on sight." },
  { slug: "greetings", stage: 1, order: 2, icon: "👋", title: "Greetings & politeness", tagline: "Hola, buenos días, ¿cómo estás? — and when to use tú vs usted." },
  { slug: "numbers-time", stage: 1, order: 3, icon: "🔢", title: "Numbers, days & time", tagline: "0–1000, días de la semana, telling time, prices." },
  { slug: "articles", stage: 1, order: 4, icon: "📚", title: "Nouns, gender & articles", tagline: "el, la, los, las, un, una — and noun plurals." },
  { slug: "ser-estar", stage: 1, order: 5, icon: "🧱", title: "Ser, estar & present tense", tagline: "The two 'to be' verbs plus -ar/-er/-ir regular verbs." },

  // Stage 2 — First conversations
  { slug: "about-me", stage: 2, order: 6, icon: "🪪", title: "About me", tagline: "Nationalities, professions, family, possessives." },
  { slug: "questions", stage: 2, order: 7, icon: "❓", title: "Asking questions", tagline: "¿Quién, qué, dónde, cuándo, por qué, cómo, cuánto?" },
  { slug: "likes-wants", stage: 2, order: 8, icon: "❤️", title: "Likes & wants", tagline: "Me gusta, quisiera, prefiero — the gustar pattern." },
  { slug: "connectors", stage: 2, order: 9, icon: "🔗", title: "Connecting words", tagline: "Y, pero, porque, entonces, también, sin embargo." },

  // Stage 3 — Around Madrid
  { slug: "transit", stage: 3, order: 10, icon: "🚇", title: "Getting around", tagline: "Metro, autobús, Cercanías, billetes, validar." },
  { slug: "directions", stage: 3, order: 11, icon: "🧭", title: "Asking for directions", tagline: "Derecha, izquierda, recto — perdona, ¿dónde está…?" },
  { slug: "hotel", stage: 3, order: 12, icon: "🏨", title: "Airport & hotel", tagline: "Check-in, reservas, vocab de habitación, reclamaciones." },
  { slug: "help", stage: 3, order: 13, icon: "🆘", title: "Emergencies & help", tagline: "Farmacia, urgencias, ¿puede ayudarme?" },
  { slug: "landmarks", stage: 3, order: 14, icon: "🏛️", title: "Spanish landmarks", tagline: "El Prado, el Retiro, la Sagrada Família, history talk." },

  // Stage 4 — Eating & drinking
  { slug: "bar", stage: 4, order: 15, icon: "☕", title: "At the bar", tagline: "Café con leche, vermut, tapas gratis, pagar al salir." },
  { slug: "restaurant", stage: 4, order: 16, icon: "🍽️", title: "At the restaurant", tagline: "Carta, menú del día, pedir, la cuenta." },
  { slug: "food-vocab", stage: 4, order: 17, icon: "🥬", title: "Food vocab deep dive", tagline: "Verduras, carnes, pescados, formas de cocinar." },
  { slug: "diet-wine", stage: 4, order: 18, icon: "🍷", title: "Wine & dietary needs", tagline: "Rioja, cava, soy vegetariano/a, tengo alergia a…" },
  { slug: "spanish-food", stage: 4, order: 19, icon: "🥘", title: "Spanish & regional food", tagline: "Jamón, paella, pintxos, tortilla, propinas." },

  // Stage 5 — Past & future
  { slug: "preterito-perfecto", stage: 5, order: 20, icon: "⏪", title: "Pretérito perfecto", tagline: "He comido, has ido — recent past with haber." },
  { slug: "preterito-indefinido", stage: 5, order: 21, icon: "📅", title: "Pretérito indefinido", tagline: "Comí, fui, estuve — completed past actions." },
  { slug: "imperfecto", stage: 5, order: 22, icon: "🌅", title: "Imperfecto", tagline: "Cuando era niño… — habitual and descriptive past." },
  { slug: "futuro", stage: 5, order: 23, icon: "⏩", title: "Futuro simple", tagline: "Mañana comeré — and the ir+a+infinitivo alternative." },
  { slug: "narrate-trip", stage: 5, order: 24, icon: "📖", title: "Narrating a trip", tagline: "Combine tenses to tell your travel story." },

  // Stage 6 — Shopping & daily life
  { slug: "shopping", stage: 6, order: 25, icon: "🛍️", title: "Money & shopping", tagline: "¿Cuánto cuesta? descuento, ¿puedo pagar con tarjeta?" },
  { slug: "market", stage: 6, order: 26, icon: "🥕", title: "Market / mercado", tagline: "Kilos, gramos, me pone un kilo de…" },
  { slug: "formal-usted", stage: 6, order: 27, icon: "🤝", title: "Formal (usted) deep dive", tagline: "Disculpe, ¿podría…? — polite imperative and usted forms." },
  { slug: "complaints", stage: 6, order: 28, icon: "📣", title: "Complaints & returns", tagline: "Quisiera una devolución — polite escalation." },

  // Stage 7 — Cultural fluency
  { slug: "idioms", stage: 7, order: 29, icon: "🐃", title: "Idioms & expressions", tagline: "Venga, tío, ¡ostras!, mola, ¿qué tal?" },
  { slug: "flamenco-culture", stage: 7, order: 30, icon: "💃", title: "Flamenco & culture", tagline: "Tablao, duende, siesta, fiestas, fútbol." },
  { slug: "museums", stage: 7, order: 31, icon: "🖼️", title: "Museums & art talk", tagline: "Cuadro, exposición, entrada reducida, Goya, Dalí." },
  { slug: "small-talk", stage: 7, order: 32, icon: "💬", title: "Small talk", tagline: "El tiempo, el fútbol, ¡qué calor! — graceful exits." },

  // Stage 8 — Real conversations
  { slug: "conditional", stage: 8, order: 33, icon: "🎩", title: "Conditional", tagline: "Me gustaría, podría, debería — polite requests." },
  { slug: "subjunctive", stage: 8, order: 34, icon: "🤔", title: "Subjunctive intro", tagline: "Espero que, quiero que — common trigger verbs." },
  { slug: "opinions", stage: 8, order: 35, icon: "🗣️", title: "Opinions & debate", tagline: "En mi opinión, estoy de acuerdo, sin embargo…" },
];

export const TOTAL_UNITS = UNIT_OUTLINE.length;
