import type { Unit } from "../../types";

export const UNIT_NARRATE_TRIP: Unit = {
  slug: "narrate-trip",
  stage: 5,
  order: 24,
  icon: "📖",
  title: "Narrating a trip",
  tagline: "Combine tenses to tell your travel story.",
  lessons: [
    {
      slug: "narrate-trip-story",
      title: "Telling your travel story",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Weaving tenses together",
          body: [
            "Real stories use multiple tenses at once. The background is imperfecto; the events are indefinido; recent things can use perfecto; plans ahead are futuro or ir + a.",
            "The key is deciding: is this a completed event (indefinido), an ongoing situation/habit (imperfecto), or a recent action with present relevance (perfecto)?",
          ],
          keyPoint: "Event (indefinido) → Background (imperfecto) → Recent (perfecto) → Plans (ir+a/futuro).",
        },
        {
          type: "vocab",
          heading: "Sample travel narrative",
          items: [
            { l1: "El verano pasado fui a España.", en: "Last summer I went to Spain. (indefinido — event)" },
            { l1: "Hacía mucho calor, pero era precioso.", en: "It was very hot, but it was beautiful. (imperfecto — background)" },
            { l1: "Visité el Prado y comí tapas todos los días.", en: "I visited the Prado and ate tapas every day. (indefinido — events; imperfecto for habit)" },
            { l1: "Este año ya he vuelto dos veces.", en: "This year I've already been back twice. (perfecto — recent, tied to now)" },
            { l1: "El año que viene voy a quedarme un mes.", en: "Next year I'm going to stay a month. (ir + a — future plan)" },
          ],
        },
        {
          type: "vocab",
          heading: "Useful storytelling phrases",
          items: [
            { l1: "Al principio…", en: "At first…" },
            { l1: "Después / Luego…", en: "Afterwards / Then…" },
            { l1: "De repente…", en: "Suddenly…" },
            { l1: "Al final…", en: "In the end…" },
            { l1: "Lo mejor fue…", en: "The best part was…" },
            { l1: "Lo más difícil fue…", en: "The hardest part was…" },
            { l1: "Me sorprendió que…", en: "It surprised me that…" },
            { l1: "Ojalá volver.", en: "I hope to go back." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Narrative tenses",
          questions: [
            {
              q: "In a story, the background is told in…",
              options: ["indefinido", "imperfecto", "perfecto", "futuro"],
              correct: 1,
              fb: "Imperfecto paints the background: the weather, the setting, habits, ongoing states.",
            },
            {
              q: "'De repente' signals…",
              options: ["A habit or routine", "A background description", "A sudden event (usually indefinido)", "A future plan"],
              correct: 2,
              fb: "De repente (suddenly) signals a plot event — use indefinido. De repente entró un hombre.",
            },
          ],
        },
      ],
    },
    {
      slug: "narrate-trip-practice",
      title: "Writing a trip narrative",
      estMinutes: 7,
      pages: [
        {
          type: "translate",
          heading: "Translate this narrative sentence",
          direction: "en-to-l1",
          prompt: "When I arrived, it was raining.",
          reference: "Cuando llegué, llovía.",
          hint: "llegué (indefinido) + llovía (imperfecto)",
        },
        {
          type: "translate",
          heading: "Translate this narrative sentence",
          direction: "en-to-l1",
          prompt: "Suddenly the lights went out.",
          reference: "De repente se apagaron las luces.",
          hint: "indefinido for event",
        },
        {
          type: "multipleChoice",
          heading: "Story check",
          questions: [
            {
              q: "'Lo mejor fue la comida' means…",
              options: ["The food was the best (past)", "The best thing was the food", "Better food", "The food is better now"],
              correct: 1,
              fb: "Lo mejor fue = the best thing was. A great phrase for describing trip highlights.",
            },
            {
              q: "'Ojalá volver' expresses…",
              options: ["A plan to return", "A wish/hope to return", "A decision to return", "A command to return"],
              correct: 1,
              fb: "Ojalá = I hope / I wish. Expresses a desire without certainty.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Background descriptions in a story use…", options: ["indefinido", "imperfecto", "perfecto", "futuro"], correct: 1 },
      { q: "Single completed story events use…", options: ["imperfecto", "perfecto", "indefinido", "presente"], correct: 2 },
      { q: "'De repente' usually signals which tense?", options: ["imperfecto", "indefinido", "futuro", "perfecto"], correct: 1 },
      { q: "'Al principio' means…", options: ["At the end", "In the middle", "At first", "Suddenly"], correct: 2 },
      { q: "'Lo mejor fue…' means…", options: ["The better is…", "The best thing was…", "It is the best", "The food was good"], correct: 1 },
      { q: "'Ojalá' expresses…", options: ["Certainty", "A command", "A wish/hope", "A past habit"], correct: 2 },
      { q: "'Hacía mucho calor' — what tense is hacía?", options: ["indefinido", "presente", "imperfecto", "futuro"], correct: 2 },
      { q: "'Llegué a Madrid' — what tense is llegué?", options: ["imperfecto", "indefinido", "perfecto", "presente"], correct: 1 },
      { q: "Recent past with present relevance uses…", options: ["indefinido", "imperfecto", "perfecto", "futuro"], correct: 2 },
      { q: "'Después' connects…", options: ["Cause and effect", "Sequence of events", "Background and foreground", "Present and future"], correct: 1 },
    ],
  },
};
