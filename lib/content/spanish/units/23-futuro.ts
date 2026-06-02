import type { Unit } from "../../types";

export const UNIT_FUTURO: Unit = {
  slug: "futuro",
  stage: 5,
  order: 23,
  icon: "⏩",
  title: "Futuro simple",
  tagline: "Mañana comeré — and the ir+a+infinitivo alternative.",
  lessons: [
    {
      slug: "futuro-simple",
      title: "The future tense",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two ways to talk about the future",
          body: [
            "Spanish has a future tense (futuro simple), but in everyday conversation the near future is usually expressed with <em>ir + a + infinitive</em> — just like 'going to' in English. The futuro simple is kept for more formal contexts, predictions, and uncertainty.",
            "Good news: the futuro simple is the same endings for all verbs, added to the full infinitive (not a stem). Very regular.",
          ],
          keyPoint: "Everyday future: ir + a + infinitive. Formal/predictions: futuro simple (-é/-ás/-á/-emos/-éis/-án added to infinitive).",
        },
        {
          type: "conjugation",
          heading: "hablar — futuro simple",
          verb: "hablar",
          meaning: "to speak",
          tenses: [{ name: "Futuro simple", forms: [
            { person: "yo", form: "hablaré" },
            { person: "tú", form: "hablarás" },
            { person: "él/ella/usted", form: "hablará" },
            { person: "nosotros", form: "hablaremos" },
            { person: "vosotros", form: "hablaréis" },
            { person: "ellos/ustedes", form: "hablarán" },
          ] }],
        },
        {
          type: "vocab",
          heading: "Irregular future stems",
          intro: "These verbs drop or change their infinitive before adding the future endings.",
          items: [
            { l1: "poder → podr-", en: "to be able to → podré, podrás…" },
            { l1: "tener → tendr-", en: "to have → tendré, tendrás…" },
            { l1: "venir → vendr-", en: "to come → vendré, vendrás…" },
            { l1: "querer → querr-", en: "to want → querré, querrás…" },
            { l1: "saber → sabr-", en: "to know → sabré, sabrás…" },
            { l1: "hacer → har-", en: "to do/make → haré, harás…" },
            { l1: "decir → dir-", en: "to say → diré, dirás…" },
            { l1: "salir → saldr-", en: "to go out → saldré, saldrás…" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Future check",
          questions: [
            {
              q: "The everyday way to say 'I'm going to eat' is…",
              options: ["Comeré", "Voy a comer", "Estoy comiendo", "Comería"],
              correct: 1,
              fb: "Ir + a + infinitive = going to. Voy a comer = I'm going to eat / I'm going to eat.",
            },
            {
              q: "The future form of 'tener' (yo) is…",
              options: ["teneré", "tendré", "tendrá", "tenré"],
              correct: 1,
              fb: "Tener has an irregular stem: tendr-. Yo form: tendré.",
            },
            {
              q: "'Mañana hablaré con mi jefe' means…",
              options: ["Yesterday I spoke with my boss", "Tomorrow I will speak with my boss", "I'm speaking with my boss tomorrow", "I spoke with my boss"],
              correct: 1,
              fb: "Mañana = tomorrow. Hablaré = I will speak (futuro simple).",
            },
          ],
        },
      ],
    },
    {
      slug: "futuro-ir-a",
      title: "Ir + a + infinitive",
      estMinutes: 6,
      pages: [
        {
          type: "vocab",
          heading: "Near future with ir + a",
          items: [
            { l1: "Voy a comer paella hoy.", en: "I'm going to eat paella today." },
            { l1: "¿Vas a venir mañana?", en: "Are you going to come tomorrow?" },
            { l1: "Va a llover.", en: "It's going to rain." },
            { l1: "Vamos a visitar el Prado.", en: "We're going to visit the Prado." },
            { l1: "¿Qué vas a hacer este fin de semana?", en: "What are you going to do this weekend?" },
          ],
        },
        {
          type: "translate",
          heading: "Future translation practice",
          direction: "en-to-l1",
          prompt: "Tomorrow I will call you.",
          reference: "Mañana te llamaré.",
          hint: "llamar → llamaré",
        },
        {
          type: "translate",
          heading: "Future translation practice",
          direction: "en-to-l1",
          prompt: "It's going to be hot.",
          reference: "Va a hacer calor.",
          hint: "va + a + hacer calor",
        },
        {
          type: "multipleChoice",
          heading: "Future choices",
          questions: [
            {
              q: "Which sounds more natural in conversation for near future?",
              options: ["Comeré mañana", "Voy a comer mañana", "Both are equally common", "Neither"],
              correct: 1,
              fb: "For near future in conversation, ir + a is more natural. Futuro simple sounds more formal or distant.",
            },
            {
              q: "'¿Va a llover?' means…",
              options: ["Is it raining?", "Is it going to rain?", "Will it rain? (distant future)", "Both B and C (same meaning)"],
              correct: 3,
              fb: "Both B and C are correct — ir + a and futuro simple both express future. Va a llover = it's going to rain.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "The yo form of hablar (futuro) is…", options: ["hablaré", "hablaría", "hablé", "hablo"], correct: 0 },
      { q: "The irregular future stem of 'tener' is…", options: ["tener-", "ten-", "tendr-", "tener-á"], correct: 2 },
      { q: "The yo form of hacer (futuro) is…", options: ["haré", "haceré", "hacaré", "hacero"], correct: 0 },
      { q: "'Voy a comer' means…", options: ["I want to eat", "I'm going to eat", "I used to eat", "I was eating"], correct: 1 },
      { q: "'Va a llover' means…", options: ["It's raining", "It rained", "It's going to rain", "It used to rain"], correct: 2 },
      { q: "Futuro simple uses the same endings for…", options: ["Only -ar verbs", "Only regular verbs", "All verbs (with irregular stems for some)", "Only -er verbs"], correct: 2 },
      { q: "The irregular future stem of 'venir' is…", options: ["ven-", "vendr-", "venir-", "venér-"], correct: 1 },
      { q: "'¿Qué vas a hacer?' means…", options: ["What did you do?", "What are you going to do?", "What are you doing now?", "What do you usually do?"], correct: 1 },
      { q: "Futuro simple endings are added to…", options: ["The stem (like present tense)", "The infinitive (full form)", "The past participle", "The yo-form"], correct: 1 },
      { q: "'Mañana vendré' means…", options: ["Yesterday I came", "Tomorrow I will come", "I'm coming tomorrow (same meaning as B)", "Both B and C"], correct: 3 },
    ],
  },
};
