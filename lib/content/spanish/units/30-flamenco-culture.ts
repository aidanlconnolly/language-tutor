import type { Unit } from "../../types";

export const UNIT_FLAMENCO_CULTURE: Unit = {
  slug: "flamenco-culture",
  stage: 7,
  order: 30,
  icon: "💃",
  title: "Flamenco & culture",
  tagline: "Tablao, duende, siesta, fiestas, fútbol.",
  badge: "culture",
  lessons: [
    {
      slug: "flamenco-culture-flamenco",
      title: "Flamenco — Spain's deepest art",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "What is flamenco?",
          body: [
            "Flamenco is an art form from Andalusia — southern Spain — with roots in Moorish, Gypsy (Romani), and Spanish folk traditions. It has three elements: <em>el cante</em> (singing), <em>el toque</em> (guitar playing), and <em>el baile</em> (dancing).",
            "The concept of <em>duende</em> — a kind of dark, mysterious artistic intensity — is central to flamenco. When a performance has duende, something transcendent happens. It's untranslatable but unmistakable.",
          ],
          tip: {
            label: "Where to see real flamenco",
            body: "A tablao flamenco is a venue that stages regular performances. Seville (La Carbonería), Granada (Sacromonte cave shows), Jerez, and Madrid all have authentic venues. Avoid tourist shows — seek out the real thing.",
          },
        },
        {
          type: "vocab",
          heading: "Flamenco vocabulary",
          items: [
            { l1: "el flamenco", en: "flamenco (music, dance, and song art form)" },
            { l1: "el tablao", en: "a flamenco venue / the performance stage" },
            { l1: "el duende", en: "the ineffable spirit of flamenco — dark intensity" },
            { l1: "el cante jondo", en: "deep song — the most intense, serious flamenco singing" },
            { l1: "el zapateado", en: "footwork in flamenco dance" },
            { l1: "el cantaor / la cantaora", en: "flamenco singer (m/f)" },
            { l1: "el bailaor / la bailaora", en: "flamenco dancer (m/f)" },
            { l1: "¡Olé!", en: "Bravo! (shout of encouragement during performance)" },
          ],
        },
        {
          type: "vocab",
          heading: "Spanish culture and daily life",
          items: [
            { l1: "la siesta", en: "the midday rest (roughly 2–5pm)" },
            { l1: "la feria", en: "local festival — rides, music, flamenco" },
            { l1: "la Semana Santa", en: "Holy Week — the most intense procession tradition" },
            { l1: "el fútbol", en: "football — Spain's national passion (Real Madrid, Barça)" },
            { l1: "la corrida de toros", en: "bullfighting — traditional but controversial" },
            { l1: "la Nochevieja", en: "New Year's Eve — 12 grapes at midnight tradition" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Culture check",
          questions: [
            {
              q: "The three elements of flamenco are…",
              options: ["Dance, drums, guitar", "Singing, guitar, dance", "Dance, singing, clapping only", "Guitar, violin, singing"],
              correct: 1,
              fb: "El cante (singing), el toque (guitar), el baile (dance).",
            },
            {
              q: "'Duende' in flamenco refers to…",
              options: ["A type of flamenco step", "An instrument", "The ineffable spirit of intense artistic expression", "A flamenco venue"],
              correct: 2,
              fb: "Duende = untranslatable dark spirit of flamenco. When a performance has it, everyone feels it.",
            },
          ],
        },
      ],
    },
    {
      slug: "flamenco-culture-traditions",
      title: "Spanish traditions",
      estMinutes: 6,
      pages: [
        {
          type: "vocab",
          heading: "Talking about Spanish culture",
          items: [
            { l1: "¿Has visto algún espectáculo de flamenco?", en: "Have you seen a flamenco show?" },
            { l1: "Es una tradición muy arraigada.", en: "It's a deeply rooted tradition." },
            { l1: "La Semana Santa es impresionante en Sevilla.", en: "Holy Week is impressive in Seville." },
            { l1: "¿Eres del Madrid o del Barça?", en: "Are you a Madrid or Barça fan?" },
            { l1: "El fútbol es una religión aquí.", en: "Football is a religion here." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Traditions check",
          questions: [
            {
              q: "La Nochevieja tradition at midnight involves…",
              options: ["Fireworks and champagne only", "Eating 12 grapes (one per bell)", "Flamenco dancing", "Paella for everyone"],
              correct: 1,
              fb: "Las 12 uvas = 12 grapes eaten at midnight on New Year's Eve, one per bell toll. A uniquely Spanish tradition.",
            },
            {
              q: "A tablao is…",
              options: ["A bar that serves tapas", "A flamenco performance venue", "A type of flamenco step", "A traditional board game"],
              correct: 1,
              fb: "A tablao flamenco is a venue that stages regular flamenco shows.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Flamenco's three elements are…", options: ["guitar, drums, dance", "singing, guitar, dance", "dance, singing, clapping", "guitar, violin, dance"], correct: 1 },
      { q: "'El duende' refers to…", options: ["A flamenco dancer", "A musical instrument", "The spirit/intensity of flamenco", "A flamenco venue"], correct: 2 },
      { q: "A tablao is…", options: ["A tapas board", "A flamenco venue", "A type of guitar", "A flamenco step"], correct: 1 },
      { q: "Flamenco originated in…", options: ["Madrid", "Catalonia", "Galicia", "Andalusia"], correct: 3 },
      { q: "'La siesta' refers to…", options: ["Late dinner", "The midday rest", "Morning coffee", "Sunday lunch"], correct: 1 },
      { q: "La Nochevieja's midnight tradition involves eating…", options: ["12 tapas", "12 grapes", "12 olives", "12 churros"], correct: 1 },
      { q: "'El cantaor' is a flamenco…", options: ["dancer", "guitarist", "singer", "venue"], correct: 2 },
      { q: "La Semana Santa is most spectacular in…", options: ["Madrid", "Barcelona", "Seville", "Bilbao"], correct: 2 },
      { q: "'¡Olé!' is shouted during flamenco to…", options: ["Stop the performance", "Encourage the performers", "Ask for silence", "Signal the end"], correct: 1 },
      { q: "Cante jondo means…", options: ["Deep song — the most serious flamenco", "Light entertainment flamenco", "Flamenco guitar technique", "A flamenco dance style"], correct: 0 },
    ],
  },
};
