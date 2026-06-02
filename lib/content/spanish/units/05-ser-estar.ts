import type { Unit } from "../../types";

export const UNIT_SER_ESTAR: Unit = {
  slug: "ser-estar",
  stage: 1,
  order: 5,
  icon: "🧱",
  title: "Ser, estar & present tense",
  tagline: "The two 'to be' verbs plus -ar/-er/-ir regular verbs.",
  badge: "core",
  lessons: [
    {
      slug: "ser-estar-difference",
      title: "Ser vs estar — which 'to be'?",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Spanish has two verbs for 'to be'",
          body: [
            "This is the most important distinction in Spanish grammar. <strong>Ser</strong> is for permanent or defining characteristics: identity, origin, profession, time, material. <strong>Estar</strong> is for temporary states, locations, and conditions.",
            "The rough guide: if you can say it's a core part of what something IS, use ser. If it's a state that can change, use estar.",
          ],
          tip: {
            label: "DOCTOR vs PLACE mnemonic",
            body: "Ser: Description, Occupation, Characteristic, Time, Origin, Relationship. Estar: Position, Location, Action, Condition, Emotion.",
          },
        },
        {
          type: "conjugation",
          heading: "Ser — present tense",
          verb: "ser",
          meaning: "to be (identity/origin)",
          tenses: [{ name: "Presente", forms: [
            { person: "yo", form: "soy" },
            { person: "tú", form: "eres" },
            { person: "él/ella/usted", form: "es" },
            { person: "nosotros", form: "somos" },
            { person: "vosotros", form: "sois" },
            { person: "ellos/ustedes", form: "son" },
          ] }],
        },
        {
          type: "conjugation",
          heading: "Estar — present tense",
          verb: "estar",
          meaning: "to be (location/state)",
          tenses: [{ name: "Presente", forms: [
            { person: "yo", form: "estoy" },
            { person: "tú", form: "estás" },
            { person: "él/ella/usted", form: "está" },
            { person: "nosotros", form: "estamos" },
            { person: "vosotros", form: "estáis" },
            { person: "ellos/ustedes", form: "están" },
          ] }],
        },
        {
          type: "vocab",
          heading: "Ser or estar?",
          items: [
            { l1: "Soy español.", en: "I'm Spanish. (ser — origin/identity)", note: "ser" },
            { l1: "Soy médico.", en: "I'm a doctor. (ser — profession)", note: "ser" },
            { l1: "Son las tres.", en: "It's three o'clock. (ser — time)", note: "ser" },
            { l1: "Estoy en Madrid.", en: "I'm in Madrid. (estar — location)", note: "estar" },
            { l1: "Estás cansado.", en: "You're tired. (estar — temporary state)", note: "estar" },
            { l1: "Está enfermo.", en: "He's ill. (estar — condition)", note: "estar" },
            { l1: "El café está frío.", en: "The coffee is cold. (estar — current state)", note: "estar" },
            { l1: "La nieve es blanca.", en: "Snow is white. (ser — inherent quality)", note: "ser" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Ser or estar?",
          questions: [
            {
              q: "'She is a teacher' uses…",
              options: ["está", "es", "son", "estás"],
              correct: 1,
              fb: "Profession → ser. Ella es profesora.",
            },
            {
              q: "'The coffee is cold right now' uses…",
              options: ["es", "está", "son", "estoy"],
              correct: 1,
              fb: "Temporary current state → estar. El café está frío.",
            },
            {
              q: "'I'm in Madrid' uses…",
              options: ["soy", "es", "estoy", "somos"],
              correct: 2,
              fb: "Location → estar. Estoy en Madrid.",
            },
          ],
        },
      ],
    },
    {
      slug: "ser-estar-regular-verbs",
      title: "Regular -ar, -er, -ir verbs",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Three verb families",
          body: [
            "Spanish infinitives end in <strong>-ar</strong>, <strong>-er</strong>, or <strong>-ir</strong>. Regular verbs in each family follow predictable patterns. Drop the infinitive ending and add the appropriate suffix for each person.",
            "The vast majority of Spanish verbs are -ar verbs. Learn this pattern well — most new verbs you encounter will follow it.",
          ],
          keyPoint: "-ar: -o/-as/-a/-amos/-áis/-an · -er: -o/-es/-e/-emos/-éis/-en · -ir: -o/-es/-e/-imos/-ís/-en",
        },
        {
          type: "conjugation",
          heading: "hablar (to speak) — regular -ar",
          verb: "hablar",
          meaning: "to speak",
          tenses: [{ name: "Presente", forms: [
            { person: "yo", form: "hablo" },
            { person: "tú", form: "hablas" },
            { person: "él/ella/usted", form: "habla" },
            { person: "nosotros", form: "hablamos" },
            { person: "vosotros", form: "habláis" },
            { person: "ellos/ustedes", form: "hablan" },
          ] }],
        },
        {
          type: "conjugation",
          heading: "comer (to eat) — regular -er",
          verb: "comer",
          meaning: "to eat",
          tenses: [{ name: "Presente", forms: [
            { person: "yo", form: "como" },
            { person: "tú", form: "comes" },
            { person: "él/ella/usted", form: "come" },
            { person: "nosotros", form: "comemos" },
            { person: "vosotros", form: "coméis" },
            { person: "ellos/ustedes", form: "comen" },
          ] }],
        },
        {
          type: "vocab",
          heading: "Common verbs in context",
          items: [
            { l1: "Hablo español.", en: "I speak Spanish." },
            { l1: "¿Hablas inglés?", en: "Do you speak English?" },
            { l1: "Comemos a las dos.", en: "We eat at two." },
            { l1: "Vivo en Madrid.", en: "I live in Madrid. (vivir, -ir verb)" },
            { l1: "¿Dónde trabajas?", en: "Where do you work? (trabajar, -ar)" },
            { l1: "Necesito un taxi.", en: "I need a taxi. (necesitar, -ar)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Conjugation check",
          questions: [
            {
              q: "What is the 'yo' form of 'hablar'?",
              options: ["hablas", "hablo", "habla", "hablamos"],
              correct: 1,
              fb: "Regular -ar: yo form drops -ar and adds -o. hablo.",
            },
            {
              q: "What is 'they eat'?",
              options: ["comemos", "comes", "comen", "come"],
              correct: 2,
              fb: "Ellos/ellas comen — third person plural -er: -en.",
            },
            {
              q: "What is 'we live' from 'vivir'?",
              options: ["vivimos", "vivemos", "viváis", "viven"],
              correct: 0,
              fb: "-ir verbs: nosotros form is -imos. vivimos.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'I'm from Spain' uses…", options: ["estoy", "soy", "es", "estás"], correct: 1 },
      { q: "'He's tired' uses…", options: ["es", "son", "está", "estoy"], correct: 2 },
      { q: "'It's three o'clock' uses…", options: ["están", "estoy", "son", "somos"], correct: 2 },
      { q: "The yo form of 'comer' is…", options: ["comes", "come", "como", "comemos"], correct: 2 },
      { q: "The nosotros form of 'hablar' is…", options: ["hablan", "habláis", "hablamos", "hablamos"], correct: 2 },
      { q: "'The library is on the corner' uses…", options: ["ser", "estar", "Either", "Neither"], correct: 1 },
      { q: "Profession/identity uses which verb?", options: ["estar", "ser", "tener", "haber"], correct: 1 },
      { q: "What is 'you (tú) speak'?", options: ["hablo", "habla", "hablas", "habláis"], correct: 2 },
      { q: "The ellos form of 'vivir' is…", options: ["vivimos", "vivís", "viven", "vive"], correct: 2 },
      { q: "'Snow is white' (permanent quality) uses…", options: ["está", "es", "son", "estás"], correct: 1 },
    ],
  },
};
