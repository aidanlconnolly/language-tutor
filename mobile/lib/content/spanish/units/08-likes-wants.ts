import type { Unit } from "../../types";

export const UNIT_LIKES_WANTS: Unit = {
  slug: "likes-wants",
  stage: 2,
  order: 8,
  icon: "❤️",
  title: "Likes & wants",
  tagline: "Me gusta, quisiera, prefiero — the gustar pattern.",
  lessons: [
    {
      slug: "likes-wants-gustar",
      title: "The gustar pattern",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "'Gustar' works backwards from English",
          body: [
            "In English we say 'I like coffee'. In Spanish the structure flips: <em>Me gusta el café</em> — literally 'coffee pleases me'. The subject is the thing liked; the person is an indirect object.",
            "This means the verb agrees with the THING liked, not the person: <em>Me gusta el café</em> (singular noun) but <em>Me gustan los libros</em> (plural noun).",
          ],
          tip: {
            label: "Indirect object pronouns with gustar",
            body: "me (me), te (you inf.), le (him/her/you formal), nos (us), os (you all inf.), les (them/you all). These go BEFORE the verb.",
          },
        },
        {
          type: "vocab",
          heading: "Likes and dislikes",
          items: [
            { l1: "Me gusta el fútbol.", en: "I like football. (singular)", note: "gusta agrees with fútbol" },
            { l1: "Me gustan las tapas.", en: "I like tapas. (plural)", note: "gustan agrees with tapas" },
            { l1: "¿Te gusta el vino?", en: "Do you like wine?" },
            { l1: "No me gusta nada.", en: "I don't like it at all." },
            { l1: "Le encanta Madrid.", en: "He/she loves Madrid.", note: "encantar = to love (same pattern)" },
            { l1: "Nos gusta mucho.", en: "We like it a lot." },
            { l1: "Me gustan mucho los libros.", en: "I really like books." },
            { l1: "No le gustan las verduras.", en: "He/she doesn't like vegetables." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Gustar check",
          questions: [
            {
              q: "How do you say 'I like the books'?",
              options: ["Me gusta los libros", "Me gustan los libros", "Me gusto los libros", "Te gustan los libros"],
              correct: 1,
              fb: "Libros is plural → gustan (plural). Me gustan los libros.",
            },
            {
              q: "'Te gusta' means…",
              options: ["I like it", "You like it (informal)", "He likes it", "They like it"],
              correct: 1,
              fb: "Te = you (informal). Te gusta = you like it.",
            },
            {
              q: "How do you say 'She loves Madrid'?",
              options: ["Le gusta Madrid", "Le encanta Madrid", "Ella ama Madrid (also correct)", "Both B and C"],
              correct: 3,
              fb: "Le encanta = she loves (with gustar-pattern). Ella ama = she loves (direct verb). Both work — encantar is more natural for things.",
            },
          ],
        },
      ],
    },
    {
      slug: "likes-wants-querer",
      title: "Wanting, needing, preferring",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Expressing what you want",
          body: [
            "<em>Querer</em> (to want) and <em>necesitar</em> (to need) are direct verbs — they work like English. <em>Quiero un café</em> = I want a coffee. These don't follow the gustar pattern.",
            "<em>Quisiera</em> is the conditional of querer — softer and more polite. Use it when ordering or making requests: <em>Quisiera una mesa para dos</em> (I'd like a table for two).",
          ],
          keyPoint: "quiero = I want (direct) · quisiera = I would like (polite) · prefiero = I prefer",
        },
        {
          type: "conjugation",
          heading: "querer — to want (stem-changing e→ie)",
          verb: "querer",
          meaning: "to want",
          tenses: [{ name: "Presente", forms: [
            { person: "yo", form: "quiero" },
            { person: "tú", form: "quieres" },
            { person: "él/ella/usted", form: "quiere" },
            { person: "nosotros", form: "queremos" },
            { person: "vosotros", form: "queréis" },
            { person: "ellos/ustedes", form: "quieren" },
          ] }],
        },
        {
          type: "vocab",
          heading: "Wants, needs and preferences",
          items: [
            { l1: "Quiero un café con leche.", en: "I want a coffee with milk." },
            { l1: "Quisiera la cuenta, por favor.", en: "I'd like the bill, please." },
            { l1: "Necesito un médico.", en: "I need a doctor." },
            { l1: "Prefiero el tren.", en: "I prefer the train." },
            { l1: "¿Qué quieres hacer?", en: "What do you want to do?" },
            { l1: "Quiero comer algo.", en: "I want to eat something." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Wants and preferences",
          questions: [
            {
              q: "The polite way to order at a restaurant is…",
              options: ["Quiero…", "Quisiera…", "Necesito…", "Me gusta…"],
              correct: 1,
              fb: "Quisiera (conditional) is softer and more polite than quiero. Use it when ordering.",
            },
            {
              q: "What is 'I want to eat'?",
              options: ["Me gusta comer", "Quiero comer", "Necesito comer", "Prefiero comer"],
              correct: 1,
              fb: "Quiero + infinitive = I want to + verb. Quiero comer.",
            },
          ],
        },
      ],
    },
    {
      slug: "likes-wants-extended",
      title: "Expressing preferences in conversation",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "More ways to express preferences",
          items: [
            { l1: "Me apetece…", en: "I feel like… / I fancy…", note: "Common in Spain for immediate desires" },
            { l1: "Tengo ganas de…", en: "I feel like… / I want to…" },
            { l1: "No me apetece nada.", en: "I don't feel like it at all." },
            { l1: "Me da igual.", en: "I don't mind / It's all the same to me." },
            { l1: "Me da lo mismo.", en: "It's all the same to me." },
            { l1: "Depende.", en: "It depends." },
            { l1: "No sé si…", en: "I'm not sure if…" },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning an evening",
          lines: [
            { speaker: "Javi", l1: "¿Te apetece salir esta noche?", en: "Do you feel like going out tonight?" },
            { speaker: "Ana", l1: "No sé… estoy un poco cansada. ¿Adónde quieres ir?", en: "I don't know… I'm a bit tired. Where do you want to go?" },
            { speaker: "Javi", l1: "Tengo ganas de ir a ese nuevo bar de tapas.", en: "I feel like going to that new tapas bar." },
            { speaker: "Ana", l1: "Me da igual, pero no quiero llegar tarde.", en: "I don't mind, but I don't want to get home late." },
            { speaker: "Javi", l1: "Perfecto. Quedamos a las ocho.", en: "Perfect. We'll meet at eight." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Preferences check",
          questions: [
            {
              q: "'Me apetece' is particularly common in…",
              options: ["Latin America", "Spain", "Formal contexts", "Writing only"],
              correct: 1,
              fb: "Me apetece (I feel like) is very common in Spain for expressing immediate desires or appetites.",
            },
            {
              q: "'Me da igual' means…",
              options: ["I like it", "I don't care / It's the same to me", "I don't like it", "It's equal"],
              correct: 1,
              fb: "Me da igual = I don't mind / it's all the same. Used when you have no preference.",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Me gustan las tapas' uses 'gustan' because…", options: ["Me is plural", "Tapas is plural", "Gustar is irregular", "It's a special rule"], correct: 1 },
      { q: "How do you say 'Do you like wine?' (informal)?", options: ["¿Me gusta el vino?", "¿Te gusta el vino?", "¿Le gusta el vino?", "¿Nos gusta el vino?"], correct: 1 },
      { q: "The polite form of 'quiero' is…", options: ["quiera", "quisiera", "quisieras", "quiero por favor"], correct: 1 },
      { q: "'Le encanta Madrid' means…", options: ["I love Madrid", "He/she loves Madrid", "They love Madrid", "We love Madrid"], correct: 1 },
      { q: "The yo form of 'querer' is…", options: ["quero", "quiero", "quieres", "quere"], correct: 1 },
      { q: "'Me gusta + infinitive' means…", options: ["I need to…", "I prefer to…", "I like to…", "I want to…"], correct: 2 },
      { q: "To say 'I need' you use…", options: ["quiero", "quisiera", "necesito", "me falta"], correct: 2 },
      { q: "'No me gusta nada' means…", options: ["I don't like anything", "I like nothing specifically", "I don't like it at all", "Nothing pleases me (same meaning as A/C)"], correct: 3 },
      { q: "Which verb pattern is gustar similar to?", options: ["hablar", "encantar (same pattern)", "ser", "tener"], correct: 1 },
      { q: "'Prefiero el tren' means…", options: ["I want the train", "I prefer the train", "I need the train", "I like the train"], correct: 1 },
    ],
  },
};
