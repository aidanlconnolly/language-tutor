import type { Unit } from "../../types";

export const UNIT_PRETERITO_INDEFINIDO: Unit = {
  slug: "preterito-indefinido",
  stage: 5,
  order: 21,
  icon: "📅",
  title: "Pretérito indefinido",
  tagline: "Comí, fui, estuve — completed past actions.",
  lessons: [
    {
      slug: "preterito-indefinido-regular",
      title: "Regular indefinido",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The simple past — completed actions",
          body: [
            "The pretérito indefinido expresses completed actions at a specific point in the past: 'I ate', 'she went', 'we visited'. Unlike the perfecto (which implies a link to now), the indefinido sees the action as fully finished.",
            "In Latin America this is the main past tense. In Spain it's used for more distant events (yesterday, last year) while the perfecto handles recent events.",
          ],
          keyPoint: "-ar: -é/-aste/-ó/-amos/-asteis/-aron · -er/-ir: -í/-iste/-ió/-imos/-isteis/-ieron",
        },
        {
          type: "conjugation",
          heading: "hablar — pretérito indefinido",
          verb: "hablar",
          meaning: "to speak",
          tenses: [{ name: "Pretérito indefinido", forms: [
            { person: "yo", form: "hablé" },
            { person: "tú", form: "hablaste" },
            { person: "él/ella/usted", form: "habló" },
            { person: "nosotros", form: "hablamos" },
            { person: "vosotros", form: "hablasteis" },
            { person: "ellos/ustedes", form: "hablaron" },
          ] }],
        },
        {
          type: "conjugation",
          heading: "comer — pretérito indefinido",
          verb: "comer",
          meaning: "to eat",
          tenses: [{ name: "Pretérito indefinido", forms: [
            { person: "yo", form: "comí" },
            { person: "tú", form: "comiste" },
            { person: "él/ella/usted", form: "comió" },
            { person: "nosotros", form: "comimos" },
            { person: "vosotros", form: "comisteis" },
            { person: "ellos/ustedes", form: "comieron" },
          ] }],
        },
        {
          type: "vocab",
          heading: "Irregular indefinido — the essential three",
          items: [
            { l1: "ser/ir → fui, fuiste, fue, fuimos, fuisteis, fueron", en: "to be / to go (same forms!)" },
            { l1: "tener → tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron", en: "to have" },
            { l1: "estar → estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron", en: "to be (location/state)" },
            { l1: "hacer → hice, hiciste, hizo, hicimos, hicisteis, hicieron", en: "to do / to make" },
            { l1: "venir → vine, viniste, vino, vinimos, vinisteis, vinieron", en: "to come" },
            { l1: "poder → pude, pudiste, pudo, pudimos, pudisteis, pudieron", en: "to be able to" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Indefinido check",
          questions: [
            {
              q: "'Ayer comí en un restaurante' means…",
              options: ["Yesterday I'm eating at a restaurant", "Yesterday I ate at a restaurant", "I used to eat at a restaurant", "I have eaten at a restaurant"],
              correct: 1,
              fb: "Ayer = yesterday. Comí = I ate (indefinido). Ayer comí = yesterday I ate.",
            },
            {
              q: "Ser and ir share the same indefinido forms. 'Fue' can mean…",
              options: ["He was OR he went", "He was (only)", "He went (only)", "He has been"],
              correct: 0,
              fb: "Fue can mean 'he was' or 'he went' — context clarifies meaning.",
            },
            {
              q: "What is 'we did' (hacer)?",
              options: ["hicemos", "hicimos", "haciamos", "hacemos"],
              correct: 1,
              fb: "Hacer, nosotros indefinido: hicimos. Note: hizo (3rd sing.) has a z not a c.",
            },
          ],
        },
      ],
    },
    {
      slug: "preterito-indefinido-time",
      title: "Time expressions with indefinido",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "Time markers for the indefinido",
          items: [
            { l1: "ayer", en: "yesterday" },
            { l1: "anteayer", en: "the day before yesterday" },
            { l1: "la semana pasada", en: "last week" },
            { l1: "el año pasado", en: "last year" },
            { l1: "el lunes pasado", en: "last Monday" },
            { l1: "en 2020", en: "in 2020" },
            { l1: "hace dos días", en: "two days ago" },
            { l1: "hace un año", en: "a year ago" },
          ],
        },
        {
          type: "vocab",
          heading: "Indefinido in context",
          items: [
            { l1: "El año pasado fui a Barcelona.", en: "Last year I went to Barcelona." },
            { l1: "Ayer no pude dormir.", en: "Yesterday I couldn't sleep." },
            { l1: "¿Dónde estuviste el fin de semana?", en: "Where were you at the weekend?" },
            { l1: "Hace dos años viví en Madrid.", en: "Two years ago I lived in Madrid." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Time expressions",
          questions: [
            {
              q: "'Hace dos años' means…",
              options: ["In two years", "Two years ago", "For two years", "Two years from now"],
              correct: 1,
              fb: "Hace + time + que/verb = ago. Hace dos años fui a España = two years ago I went to Spain.",
            },
            {
              q: "'El año pasado' means…",
              options: ["Next year", "This year", "Last year", "Every year"],
              correct: 2,
              fb: "Pasado = past. El año pasado = last year.",
            },
          ],
        },
      ],
    },
    {
      slug: "preterito-indefinido-narrative",
      title: "Telling a story in the past",
      estMinutes: 7,
      pages: [
        {
          type: "dialogue",
          heading: "What did you do last weekend?",
          lines: [
            { speaker: "Lucía", l1: "¿Qué hiciste el fin de semana?", en: "What did you do at the weekend?" },
            { speaker: "Carlos", l1: "Fui a Segovia con unos amigos.", en: "I went to Segovia with some friends." },
            { speaker: "Lucía", l1: "¿Y qué visitasteis?", en: "And what did you visit?" },
            { speaker: "Carlos", l1: "El acueducto romano, claro. También comimos cochinillo.", en: "The Roman aqueduct, of course. We also ate suckling pig." },
            { speaker: "Lucía", l1: "¡Qué envidia! ¿Cuándo volvisteis?", en: "How jealous! When did you come back?" },
            { speaker: "Carlos", l1: "El domingo por la noche. Llegué a casa agotado.", en: "Sunday night. I arrived home exhausted." },
          ],
        },
        {
          type: "vocab",
          heading: "Useful time expressions with indefinido",
          items: [
            { l1: "el fin de semana pasado", en: "last weekend" },
            { l1: "el verano pasado", en: "last summer" },
            { l1: "de pequeño / cuando era niño/a", en: "as a child" },
            { l1: "en aquella época", en: "in those days / at that time" },
            { l1: "al día siguiente", en: "the next day" },
            { l1: "de repente", en: "suddenly" },
          ],
        },
        {
          type: "translate",
          heading: "Translate this past tense sentence",
          direction: "en-to-l1",
          prompt: "Last year I went to Barcelona and ate paella.",
          reference: "El año pasado fui a Barcelona y comí paella.",
          hint: "fui (ir) + comí (comer) — both indefinido",
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "The yo form of hablar (indefinido) is…", options: ["hablé", "hablo", "habló", "hablaba"], correct: 0 },
      { q: "The yo form of comer (indefinido) is…", options: ["comé", "como", "comí", "comía"], correct: 2 },
      { q: "'Fue' can mean…", options: ["was OR went", "was only", "went only", "has been"], correct: 0 },
      { q: "The yo form of hacer (indefinido) is…", options: ["hacé", "hice", "hizo", "hacía"], correct: 1 },
      { q: "'Ayer' means…", options: ["today", "tomorrow", "yesterday", "last week"], correct: 2 },
      { q: "'Hace dos días' means…", options: ["For two days", "In two days", "Two days ago", "Two days later"], correct: 2 },
      { q: "'La semana pasada' means…", options: ["next week", "this week", "every week", "last week"], correct: 3 },
      { q: "'Ellos hablaron' means…", options: ["They were speaking", "They speak", "They spoke", "They will speak"], correct: 2 },
      { q: "'Estuve en Madrid' means…", options: ["I am in Madrid", "I was in Madrid", "I will be in Madrid", "I have been in Madrid"], correct: 1 },
      { q: "Regular -ar indefinido: 3rd person plural ends in…", options: ["-ó", "-aron", "-eron", "-aron o -eron"], correct: 1 },
    ],
  },
};
