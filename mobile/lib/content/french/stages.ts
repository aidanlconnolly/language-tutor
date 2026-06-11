import type { Stage } from "../types";

export const STAGES: Stage[] = [
  { number: 1, title: "Foundations", blurb: "Sounds, greetings, numbers, articles, the first verbs." },
  { number: 2, title: "First conversations", blurb: "Talk about yourself, ask questions, glue ideas together." },
  { number: 3, title: "Around Paris", blurb: "Transit, directions, hotels, help — survival French." },
  { number: 4, title: "Eating & drinking", blurb: "Cafés, brasseries, ordering, paying, Parisian specialties." },
  { number: 5, title: "Past & future", blurb: "Tell stories — passé composé, imparfait, futur simple." },
  { number: 6, title: "Shopping & daily life", blurb: "Markets, money, formal vous, polite complaints." },
  { number: 7, title: "Cultural fluency", blurb: "Idioms, gestures, art, fashion, small talk." },
  { number: 8, title: "Real conversations (B1)", blurb: "Conditional, subjunctive, opinions and debate." },
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
  { slug: "pronunciation", stage: 1, order: 1, icon: "🔤", title: "Pronunciation & sounds", tagline: "Nasal vowels, silent letters, r, u/eu/ou — the French sound system." },
  { slug: "salutations", stage: 1, order: 2, icon: "👋", title: "Greetings & politeness", tagline: "Bonjour, bonsoir, salut — and when to use which." },
  { slug: "nombres-temps", stage: 1, order: 3, icon: "🔢", title: "Numbers, days & time", tagline: "0–1000, les jours, les mois, quelle heure est-il?" },
  { slug: "articles", stage: 1, order: 4, icon: "📚", title: "Nouns, gender & articles", tagline: "le/la/l'/les, un/une/des, du/de la/de l' — and plurals." },
  { slug: "etre-avoir", stage: 1, order: 5, icon: "🧱", title: "Être, avoir & present tense", tagline: "The two pillars, plus -er/-ir/-re regulars." },

  // Stage 2 — First conversations
  { slug: "a-propos-de-moi", stage: 2, order: 6, icon: "🪪", title: "About me", tagline: "Nationalités, professions, famille, possessifs." },
  { slug: "questions", stage: 2, order: 7, icon: "❓", title: "Asking questions", tagline: "Qui, quoi, où, quand, pourquoi, comment, est-ce que." },
  { slug: "aimer-vouloir", stage: 2, order: 8, icon: "❤️", title: "Likes & wants", tagline: "J'aime, je voudrais, préférer, savoir vs connaître." },
  { slug: "connecteurs", stage: 2, order: 9, icon: "🔗", title: "Connecting words", tagline: "Et, mais, parce que, puis, donc, quand même." },

  // Stage 3 — Around Paris
  { slug: "transport", stage: 3, order: 10, icon: "🚇", title: "Getting around", tagline: "Métro, bus, RER, tickets, composter, correspondance." },
  { slug: "directions", stage: 3, order: 11, icon: "🧭", title: "Asking for directions", tagline: "Droite, gauche, tout droit — excusez-moi, où se trouve…" },
  { slug: "hotel", stage: 3, order: 12, icon: "🏨", title: "Airport & hotel", tagline: "Check-in, réservation, chambre, réclamations." },
  { slug: "urgences", stage: 3, order: 13, icon: "🆘", title: "Emergencies & help", tagline: "Pharmacie, urgences, au secours, pouvez-vous m'aider?" },
  { slug: "monuments", stage: 3, order: 14, icon: "🗼", title: "Parisian landmarks", tagline: "Tour Eiffel, Louvre, Marais, Montmartre, histoire." },

  // Stage 4 — Eating & drinking
  { slug: "cafe", stage: 4, order: 15, icon: "☕", title: "At the café", tagline: "Culture du café, comptoir vs terrasse, un café serré." },
  { slug: "restaurant", stage: 4, order: 16, icon: "🍽️", title: "At the restaurant", tagline: "Entrée → dessert, commander, l'addition, pourboire." },
  { slug: "nourriture", stage: 4, order: 17, icon: "🥖", title: "Food vocab deep dive", tagline: "Fromages, vins, légumes, viandes, verbes de cuisine." },
  { slug: "regime-vin", stage: 4, order: 18, icon: "🍷", title: "Wine & dietary needs", tagline: "Vin de la maison, végétarien, je suis allergique à…" },
  { slug: "specialites", stage: 4, order: 19, icon: "🥐", title: "French & regional", tagline: "Croissant, baguette, escargot, crêpes, steak-frites." },

  // Stage 5 — Past & future
  { slug: "passe-avoir", stage: 5, order: 20, icon: "⏪", title: "Passé composé (avoir)", tagline: "Hier j'ai mangé… — the workhorse past tense." },
  { slug: "passe-etre", stage: 5, order: 21, icon: "🏃", title: "Passé composé (être)", tagline: "Je suis allé/e — motion verbs, agreement." },
  { slug: "imparfait", stage: 5, order: 22, icon: "🌅", title: "Imparfait", tagline: "Quand j'étais à Paris… — habitual past." },
  { slug: "futur", stage: 5, order: 23, icon: "⏩", title: "Futur simple", tagline: "Demain je verrai — and futur antérieur." },
  { slug: "raconter", stage: 5, order: 24, icon: "📖", title: "Narrating a trip", tagline: "Combine tenses to tell your Paris story." },

  // Stage 6 — Shopping & daily life
  { slug: "shopping", stage: 6, order: 25, icon: "🛍️", title: "Money & shopping", tagline: "Combien ça coûte, réduction, payer par carte?" },
  { slug: "marche", stage: 6, order: 26, icon: "🥕", title: "Market / supermarché", tagline: "Grammes, kilos, j'en prends deux, au marché." },
  { slug: "vous-formel", stage: 6, order: 27, icon: "🤝", title: "Formal (vous) deep dive", tagline: "Je vous en prie, s'il vous plaît, l'impératif poli." },
  { slug: "reclamations", stage: 6, order: 28, icon: "📣", title: "Complaints & returns", tagline: "Je voudrais un remboursement — escalation polie." },

  // Stage 7 — Cultural fluency
  { slug: "expressions", stage: 7, order: 29, icon: "💬", title: "Idioms & gestures", tagline: "Tant pis, c'est la vie, avoir le cafard, faire la bise." },
  { slug: "art-culture", stage: 7, order: 30, icon: "🖼️", title: "Art & culture", tagline: "Musée, exposition, cinéma, grève — c'est magnifique." },
  { slug: "mode-style", stage: 7, order: 31, icon: "👗", title: "Fashion & style", tagline: "La mode, les soldes, les grandes marques, chic." },
  { slug: "bavardage", stage: 7, order: 32, icon: "🌤️", title: "Small talk", tagline: "Météo, sport, ah bon!, les bises — prendre congé." },

  // Stage 8 — Real conversations
  { slug: "conditionnel", stage: 8, order: 33, icon: "🎩", title: "Conditionnel", tagline: "Je voudrais, je pourrais, je devrais — demandes polies." },
  { slug: "subjonctif", stage: 8, order: 34, icon: "🤔", title: "Subjonctif intro", tagline: "Je veux que, il faut que — verbes courants." },
  { slug: "opinions", stage: 8, order: 35, icon: "🗣️", title: "Opinions & debate", tagline: "Selon moi, je suis d'accord, cependant, débattre." },
];

export const TOTAL_UNITS = UNIT_OUTLINE.length;
