import type { Unit } from "../../types";

export const UNIT_IDIOMS: Unit = {
  slug: "idioms",
  stage: 7,
  order: 29,
  icon: "🐃",
  title: "Idioms & expressions",
  tagline: "Venga, tío, ¡ostras!, mola, ¿qué tal?",
  badge: "culture",
  lessons: [
    {
      slug: "idioms-spain",
      title: "Spanish slang and colloquial expressions",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Sound like a local",
          body: [
            "Spanish textbook language sounds correct but robotic. Real Spaniards use a rich set of filler words, exclamations, and idioms. Learning a handful of these will immediately make you sound more natural — and they make conversations far more fun.",
            "Most of these are Spain-specific. Latin American Spanish has its own equivalents.",
          ],
        },
        {
          type: "vocab",
          heading: "Everyday Spanish expressions",
          items: [
            { l1: "¡Venga!", en: "Come on! / OK then! / Let's go! / Great!", note: "Most versatile Spanish word — tone changes meaning" },
            { l1: "tío / tía", en: "mate / dude (lit. uncle / aunt)", note: "Informal address between friends" },
            { l1: "mola", en: "it's cool / awesome", note: "From molar = to appeal to, to be cool" },
            { l1: "¡Ostras! / ¡Anda!", en: "Wow! / No way! / Gosh!", note: "Polite exclamations" },
            { l1: "la movida", en: "the scene / the action / what's happening", note: "¿Cuál es la movida? = What's the situation?" },
            { l1: "guay", en: "cool / great", note: "Spain-specific slang" },
            { l1: "flipar", en: "to be amazed / to freak out", note: "¡Me ha flipado! = It blew my mind!" },
            { l1: "mogollón de", en: "loads of / heaps of", note: "Hay mogollón de gente = There are loads of people" },
          ],
        },
        {
          type: "vocab",
          heading: "Common filler words and phrases",
          items: [
            { l1: "o sea", en: "I mean / that is to say", note: "Very common filler" },
            { l1: "bueno", en: "well / OK / right then", note: "Used to think or change subject" },
            { l1: "es que", en: "the thing is / it's just that", note: "Introduces an explanation/excuse" },
            { l1: "a ver", en: "let's see / come on then", note: "A ver, explícame = right, explain to me" },
            { l1: "qué rollo", en: "what a bore / what a drag", note: "" },
            { l1: "qué guay", en: "how cool!", note: "" },
            { l1: "¿en serio?", en: "seriously? / really?", note: "" },
            { l1: "mola mazo", en: "it's mega cool", note: "mazo = loads/mega (slang intensifier)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Idioms check",
          questions: [
            {
              q: "'¡Venga!' can mean…",
              options: ["Only 'come on'", "Only 'let's go'", "Many things — OK, come on, great, bye — tone-dependent", "Only agreement"],
              correct: 2,
              fb: "Venga is uniquely versatile. Context and intonation determine meaning completely.",
            },
            {
              q: "'Es que' is used to…",
              options: ["Ask a question", "Introduce an explanation or excuse", "Express surprise", "Change the subject"],
              correct: 1,
              fb: "Es que = 'the thing is...' / 'it's just that...' Used before explanations or soft excuses.",
            },
          ],
        },
      ],
    },
    {
      slug: "idioms-proverbs",
      title: "Spanish sayings",
      estMinutes: 6,
      pages: [
        {
          type: "vocab",
          heading: "Common Spanish sayings",
          items: [
            { l1: "No hay mal que por bien no venga.", en: "Every cloud has a silver lining. (lit. No bad thing that doesn't bring good)" },
            { l1: "A quien madruga, Dios le ayuda.", en: "The early bird catches the worm. (lit. God helps those who rise early)" },
            { l1: "Más vale tarde que nunca.", en: "Better late than never." },
            { l1: "En boca cerrada no entran moscas.", en: "Silence is golden. (lit. No flies enter a closed mouth)" },
            { l1: "El que la sigue, la consigue.", en: "Practice makes perfect / Persistence pays. (lit. Who follows it, gets it)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Sayings check",
          questions: [
            {
              q: "'Más vale tarde que nunca' means…",
              options: ["Better early than late", "Better late than never", "Late is fine", "Never mind"],
              correct: 1,
              fb: "Más vale = it's better. Tarde = late. Nunca = never. Better late than never.",
            },
            {
              q: "What does 'tío' mean in casual speech?",
              options: ["Uncle (only)", "Mate/dude", "A strange man", "A waiter"],
              correct: 1,
              fb: "Tío (m) / tía (f) = mate / dude in informal Spanish. ¡Tío, qué guay! = Mate, how cool!",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Venga' can mean…", options: ["Only goodbye", "Only come on", "Multiple things — OK, come on, great, etc.", "Only let's go"], correct: 2 },
      { q: "'Mola' means…", options: ["boring", "expensive", "cool / awesome", "a friend"], correct: 2 },
      { q: "'Tío/tía' in casual speech means…", options: ["Uncle/aunt (only)", "Mate/dude", "An old person", "A teacher"], correct: 1 },
      { q: "'Es que' is used to…", options: ["Ask a question", "Introduce an explanation", "Express surprise", "End a conversation"], correct: 1 },
      { q: "'¡Anda!' expresses…", options: ["Go! (command)", "Walk!", "Surprise/disbelief", "Agreement"], correct: 2 },
      { q: "'Mogollón de gente' means…", options: ["Some people", "No people", "Loads of people", "Too many people"], correct: 2 },
      { q: "'Más vale tarde que nunca' means…", options: ["Better early than late", "Better late than never", "Timing matters", "Never be late"], correct: 1 },
      { q: "'Qué rollo' expresses…", options: ["How cool!", "What a bore/drag!", "How strange!", "What's happening!"], correct: 1 },
      { q: "'A ver' means…", options: ["I see", "Let's see / come on then", "To see", "See you"], correct: 1 },
      { q: "'¿En serio?' means…", options: ["Are you serious?", "In a series", "Very seriously", "Really? / Seriously?"], correct: 3 },
    ],
  },
};
