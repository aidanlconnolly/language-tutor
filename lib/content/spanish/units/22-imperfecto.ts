import type { Unit } from "../../types";

export const UNIT_IMPERFECTO: Unit = {
  slug: "imperfecto",
  stage: 5,
  order: 22,
  icon: "🌅",
  title: "Imperfecto",
  tagline: "Cuando era niño… — habitual and descriptive past.",
  lessons: [
    {
      slug: "imperfecto-intro",
      title: "The imperfecto — ongoing and habitual past",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The imperfecto — painting the past",
          body: [
            "While the indefinido stamps past events as completed, the imperfecto paints an ongoing situation, a habitual action, or a background description. Think of it as the 'used to' or 'was/were -ing' tense.",
            "Key uses: habitual actions in the past (<em>De niño comía mucho</em> = As a child I used to eat a lot), background descriptions (<em>Hacía frío</em> = It was cold), and ongoing actions interrupted by another event.",
          ],
          keyPoint: "-ar: -aba/-abas/-aba/-ábamos/-abais/-aban · -er/-ir: -ía/-ías/-ía/-íamos/-íais/-ían",
        },
        {
          type: "conjugation",
          heading: "hablar — imperfecto",
          verb: "hablar",
          meaning: "to speak",
          tenses: [{ name: "Imperfecto", forms: [
            { person: "yo", form: "hablaba" },
            { person: "tú", form: "hablabas" },
            { person: "él/ella/usted", form: "hablaba" },
            { person: "nosotros", form: "hablábamos" },
            { person: "vosotros", form: "hablabais" },
            { person: "ellos/ustedes", form: "hablaban" },
          ] }],
        },
        {
          type: "conjugation",
          heading: "comer — imperfecto",
          verb: "comer",
          meaning: "to eat",
          tenses: [{ name: "Imperfecto", forms: [
            { person: "yo", form: "comía" },
            { person: "tú", form: "comías" },
            { person: "él/ella/usted", form: "comía" },
            { person: "nosotros", form: "comíamos" },
            { person: "vosotros", form: "comíais" },
            { person: "ellos/ustedes", form: "comían" },
          ] }],
        },
        {
          type: "vocab",
          heading: "Only 3 irregular imperfectos",
          items: [
            { l1: "ser → era, eras, era, éramos, erais, eran", en: "to be (identity)" },
            { l1: "ir → iba, ibas, iba, íbamos, ibais, iban", en: "to go" },
            { l1: "ver → veía, veías, veía, veíamos, veíais, veían", en: "to see" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Imperfecto check",
          questions: [
            {
              q: "'Cuando era niño, vivía en Madrid' means…",
              options: ["When I was a child, I lived (habitually) in Madrid", "When I was a child, I went to Madrid once", "When I will be a child", "Living in Madrid as a child was temporary"],
              correct: 0,
              fb: "Era (imperfecto of ser) + vivía (imperfecto of vivir) = habitual past situation.",
            },
            {
              q: "The imperfecto is used for…",
              options: ["Completed actions at a specific time", "Habitual actions in the past / background descriptions", "Future plans", "Commands"],
              correct: 1,
              fb: "Indefinido = completed actions. Imperfecto = habitual/descriptive past.",
            },
          ],
        },
      ],
    },
    {
      slug: "imperfecto-contrast",
      title: "Imperfecto vs indefinido",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Together in the same story",
          body: [
            "The two past tenses often appear together in narratives: the imperfecto sets the scene and background while the indefinido provides the foreground events.",
            "<em>Hacía mucho calor cuando llegué a Sevilla.</em> = It was very hot (background, imperfecto) when I arrived in Seville (event, indefinido).",
          ],
          keyPoint: "Imperfecto = background/scene. Indefinido = events/plot.",
        },
        {
          type: "vocab",
          heading: "Contrast in action",
          items: [
            { l1: "Leía cuando sonó el teléfono.", en: "I was reading when the phone rang." },
            { l1: "Todos los días iba al mercado.", en: "Every day I used to go to the market." },
            { l1: "Ayer fui al mercado.", en: "Yesterday I went to the market (once)." },
            { l1: "Era joven y vivía en Madrid.", en: "I was young and lived in Madrid. (description)" },
            { l1: "De pequeño comía mucha tortilla.", en: "As a child I used to eat lots of tortilla." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which tense?",
          questions: [
            {
              q: "'I was reading when he arrived' — 'was reading' uses…",
              options: ["indefinido", "imperfecto", "perfecto", "presente"],
              correct: 1,
              fb: "The ongoing background action (reading) uses imperfecto. The arrival is indefinido.",
            },
            {
              q: "'Every summer we went to the beach' — 'went' uses…",
              options: ["indefinido", "imperfecto", "perfecto", "presente"],
              correct: 1,
              fb: "Habitual repeated action = imperfecto. Todos los veranos íbamos a la playa.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "The yo form of hablar (imperfecto) is…", options: ["hablé", "hablo", "hablaba", "hablara"], correct: 2 },
      { q: "The yo form of comer (imperfecto) is…", options: ["comí", "como", "comía", "coma"], correct: 2 },
      { q: "There are only ___ irregular verbs in the imperfecto.", options: ["2", "3", "5", "10"], correct: 1 },
      { q: "The imperfecto of ser (yo) is…", options: ["fue", "soy", "era", "sea"], correct: 2 },
      { q: "The imperfecto of ir (yo) is…", options: ["fui", "voy", "iba", "fuera"], correct: 2 },
      { q: "Imperfecto is used for…", options: ["Single completed events", "Habitual or descriptive past", "Future plans", "Commands"], correct: 1 },
      { q: "'Leía cuando llegó' — 'leía' is…", options: ["Indefinido (finished action)", "Imperfecto (background action)", "Perfecto (recent action)", "Presente"], correct: 1 },
      { q: "Which time marker suggests imperfecto?", options: ["ayer", "el lunes pasado", "de niño (as a child)", "hace dos años"], correct: 2 },
      { q: "'Todos los días comía paella' means…", options: ["One day I ate paella", "I will eat paella every day", "Every day I used to eat paella", "I have eaten paella today"], correct: 2 },
      { q: "Imperfecto -er/-ir endings start with…", options: ["-aba", "-ía", "-ó", "-ería"], correct: 1 },
    ],
  },
};
