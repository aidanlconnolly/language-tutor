import type { Stage } from "../types";

export const STAGES: Stage[] = [
  { number: 1, title: "Foundations", blurb: "Sounds, greetings, numbers, articles, ser & estar." },
  { number: 2, title: "First conversations", blurb: "Describe yourself, ask questions, express likes and connect ideas." },
  { number: 3, title: "Getting around", blurb: "Transit, directions, hotels, emergencies — survival Portuguese." },
  { number: 4, title: "Eating & drinking", blurb: "Botecos, restaurants, ordering, paying, Brazilian & Portuguese food." },
  { number: 5, title: "Past & future", blurb: "Tell stories — pretérito perfeito, imperfeito, compound past, future." },
  { number: 6, title: "Shopping & daily life", blurb: "Markets, money, formal register, polite complaints." },
  { number: 7, title: "Cultural fluency", blurb: "Idioms, samba & fado, art, small talk." },
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

// Brazilian-primary course (pt-BR audio); European Portuguese taught in tips/notes.
export const UNIT_OUTLINE: UnitPreview[] = [
  // Stage 1 — Foundations
  { slug: "pronunciation", stage: 1, order: 1, icon: "🔤", title: "Pronunciation & sounds", tagline: "Nasal ã/õ, lh/nh, ç, open vs closed vowels — plus the BR/PT accent split." },
  { slug: "greetings", stage: 1, order: 2, icon: "👋", title: "Greetings & politeness", tagline: "Oi, olá, bom dia, tudo bem? — and tu vs você, BR vs PT." },
  { slug: "numbers-time", stage: 1, order: 3, icon: "🔢", title: "Numbers, days & time", tagline: "0–1000, que horas são?, dias da semana, datas." },
  { slug: "articles", stage: 1, order: 4, icon: "📚", title: "Nouns, gender & articles", tagline: "o, a, os, as, um, uma — and contractions (do, da, no, na)." },
  { slug: "ser-estar", stage: 1, order: 5, icon: "🧱", title: "Ser, estar & present tense", tagline: "The two 'to be' verbs + ter; -ar/-er/-ir regular verbs." },

  // Stage 2 — First conversations
  { slug: "about-me", stage: 2, order: 6, icon: "🪪", title: "About me", tagline: "Nationalities, professions, family, possessives." },
  { slug: "questions", stage: 2, order: 7, icon: "❓", title: "Asking questions", tagline: "Quem, o que, onde, quando, por que, como, quanto?" },
  { slug: "likes-wants", stage: 2, order: 8, icon: "❤️", title: "Likes & wants", tagline: "Eu gosto de, eu queria, prefiro — the gostar de pattern." },
  { slug: "connectors", stage: 2, order: 9, icon: "🔗", title: "Connecting words", tagline: "E, mas, porque, então, também, no entanto." },

  // Stage 3 — Getting around
  { slug: "transit", stage: 3, order: 10, icon: "🚇", title: "Getting around", tagline: "Metrô, ônibus, trem, bilhete — and ônibus (BR) vs autocarro (PT)." },
  { slug: "directions", stage: 3, order: 11, icon: "🧭", title: "Asking for directions", tagline: "Direita, esquerda, em frente — com licença, onde fica…?" },
  { slug: "hotel", stage: 3, order: 12, icon: "🏨", title: "Airport & hotel", tagline: "Check-in, reserva, quarto, café da manhã." },
  { slug: "help", stage: 3, order: 13, icon: "🆘", title: "Emergencies & help", tagline: "Farmácia, pronto-socorro, pode me ajudar?" },
  { slug: "landmarks", stage: 3, order: 14, icon: "🏛️", title: "Landmarks & sightseeing", tagline: "Cristo Redentor, Pão de Açúcar, Belém, Torre de Belém." },

  // Stage 4 — Eating & drinking
  { slug: "bar", stage: 4, order: 15, icon: "☕", title: "At the bar / boteco", tagline: "Cafezinho, chope, caipirinha, salgadinhos, a conta." },
  { slug: "restaurant", stage: 4, order: 16, icon: "🍽️", title: "At the restaurant", tagline: "Cardápio, prato do dia, pedir, a conta." },
  { slug: "food-vocab", stage: 4, order: 17, icon: "🥬", title: "Food vocab deep dive", tagline: "Legumes, carnes, peixes, formas de preparo." },
  { slug: "drinks-dietary", stage: 4, order: 18, icon: "🍷", title: "Drinks & dietary needs", tagline: "Caipirinha, chope, vinho do Porto, sou vegetariano/a." },
  { slug: "brazilian-food", stage: 4, order: 19, icon: "🥘", title: "Brazilian & Portuguese food", tagline: "Feijoada, pão de queijo, pastel, bacalhau, gorjeta." },

  // Stage 5 — Past & future
  { slug: "preterito-perfeito", stage: 5, order: 20, icon: "📅", title: "Pretérito perfeito", tagline: "Comi, fui, fiz — completed past actions." },
  { slug: "preterito-imperfeito", stage: 5, order: 21, icon: "🌅", title: "Pretérito imperfeito", tagline: "Quando eu era criança… — habitual and descriptive past." },
  { slug: "preterito-composto", stage: 5, order: 22, icon: "⏪", title: "Compound past (tenho feito)", tagline: "Recent / ongoing past — and the notable BR/PT usage difference." },
  { slug: "futuro", stage: 5, order: 23, icon: "⏩", title: "Futuro", tagline: "Farei amanhã — and the vou fazer alternative." },
  { slug: "narrate-trip", stage: 5, order: 24, icon: "📖", title: "Narrating a trip", tagline: "Combine tenses to tell your travel story." },

  // Stage 6 — Shopping & daily life
  { slug: "shopping", stage: 6, order: 25, icon: "🛍️", title: "Money & shopping", tagline: "Quanto custa? desconto, posso pagar com cartão?" },
  { slug: "market", stage: 6, order: 26, icon: "🥕", title: "Market / feira", tagline: "Quilos, gramas, me vê um quilo de…" },
  { slug: "formal-register", stage: 6, order: 27, icon: "🤝", title: "Formal register", tagline: "O senhor / a senhora, você vs tu — politeness." },
  { slug: "complaints", stage: 6, order: 28, icon: "📣", title: "Complaints & returns", tagline: "Queria fazer uma reclamação — polite escalation." },

  // Stage 7 — Cultural fluency
  { slug: "idioms", stage: 7, order: 29, icon: "🗯️", title: "Idioms & slang", tagline: "Nossa!, valeu, beleza, legal — and PT: fixe, giro, pá." },
  { slug: "music-culture", stage: 7, order: 30, icon: "🎶", title: "Music & culture", tagline: "Samba, bossa nova, Carnaval, fado, futebol." },
  { slug: "museums", stage: 7, order: 31, icon: "🖼️", title: "Museums & art talk", tagline: "Quadro, exposição, meia-entrada, Niemeyer, Portinari." },
  { slug: "small-talk", stage: 7, order: 32, icon: "💬", title: "Small talk", tagline: "O tempo, o futebol, que calor! — graceful exits." },

  // Stage 8 — Real conversations
  { slug: "conditional", stage: 8, order: 33, icon: "🎩", title: "Conditional (futuro do pretérito)", tagline: "Eu gostaria, poderia, deveria — polite requests." },
  { slug: "subjunctive", stage: 8, order: 34, icon: "🤔", title: "Subjunctive / conjuntivo", tagline: "Espero que, quero que — common triggers (BR vs PT names)." },
  { slug: "opinions", stage: 8, order: 35, icon: "🗣️", title: "Opinions & debate", tagline: "Na minha opinião, concordo, no entanto…" },
];

export const TOTAL_UNITS = UNIT_OUTLINE.length;
