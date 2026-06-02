import type { Unit } from "../../types";

export const UNIT_QUESTIONS: Unit = {
  slug: "questions",
  stage: 2,
  order: 7,
  icon: "❓",
  title: "Asking questions",
  tagline: "¿Quién, qué, dónde, cuándo, por qué, cómo, cuánto?",
  lessons: [
    {
      slug: "questions-words",
      title: "Question words",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Question words always carry accents",
          body: [
            "Spanish question words all carry a written accent: <strong>¿qué?</strong>, <strong>¿quién?</strong>, <strong>¿dónde?</strong>, <strong>¿cuándo?</strong>, <strong>¿cómo?</strong>, <strong>¿cuánto?</strong>, <strong>¿por qué?</strong>. The accent distinguishes them from the same words used in statements.",
            "Spanish questions also start with an upside-down question mark ¿ — it signals to the reader that a question is coming.",
          ],
          tip: {
            label: "¿Por qué? vs porque",
            body: "¿Por qué? (two words, accent) = why? Porque (one word, no accent) = because. The question form splits into two words; the answer is one.",
          },
        },
        {
          type: "vocab",
          heading: "The eight question words",
          items: [
            { l1: "¿Qué?", en: "What?" },
            { l1: "¿Quién? / ¿Quiénes?", en: "Who? (sing/pl)" },
            { l1: "¿Dónde?", en: "Where?" },
            { l1: "¿Adónde?", en: "Where to? (direction)", note: "With movement verbs" },
            { l1: "¿Cuándo?", en: "When?" },
            { l1: "¿Cómo?", en: "How?" },
            { l1: "¿Cuánto/a?", en: "How much?", note: "Agrees in gender with noun" },
            { l1: "¿Cuántos/as?", en: "How many?" },
            { l1: "¿Por qué?", en: "Why?" },
            { l1: "¿Cuál? / ¿Cuáles?", en: "Which? / Which ones?" },
          ],
        },
        {
          type: "vocab",
          heading: "Questions in context",
          items: [
            { l1: "¿Qué quieres?", en: "What do you want?" },
            { l1: "¿Quién es?", en: "Who is it?" },
            { l1: "¿Dónde está el baño?", en: "Where is the bathroom?" },
            { l1: "¿Cuándo abre?", en: "When does it open?" },
            { l1: "¿Cómo se dice?", en: "How do you say (it)?" },
            { l1: "¿Cuánto cuesta?", en: "How much does it cost?" },
            { l1: "¿Por qué estudias español?", en: "Why are you studying Spanish?" },
            { l1: "¿Cuál es tu nombre?", en: "What is your name? (lit. which is your name)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which question word?",
          questions: [
            {
              q: "To ask 'how much does it cost?' you use…",
              options: ["¿Cómo cuesta?", "¿Cuánto cuesta?", "¿Qué cuesta?", "¿Cuál cuesta?"],
              correct: 1,
              fb: "¿Cuánto? = how much. ¿Cuánto cuesta? is the standard way to ask a price.",
            },
            {
              q: "To ask 'why?' you use…",
              options: ["porque", "¿por qué?", "¿para qué?", "¿cómo?"],
              correct: 1,
              fb: "¿Por qué? (two words, accent) = why? Porque (one word) = because.",
            },
            {
              q: "'¿Cómo se dice?' means…",
              options: ["How does she say it?", "How do you say it?", "What does she say?", "Why does she say it?"],
              correct: 1,
              fb: "Se dice = it is said / you say (impersonal). ¿Cómo se dice? = How do you say it?",
            },
          ],
        },
      ],
    },
    {
      slug: "questions-forming",
      title: "Forming questions",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "Questions in Spanish are simpler than English",
          body: [
            "Spanish doesn't use 'do/does' to form questions. To turn a statement into a yes/no question, simply raise your intonation (in speech) or add ¿…? markers (in writing). Word order can invert subject and verb, but doesn't have to.",
            "<em>Hablas español.</em> = You speak Spanish. → <em>¿Hablas español?</em> = Do you speak Spanish? (same words, different intonation/punctuation).",
          ],
          keyPoint: "No 'do/does' needed. Just intonation or ¿? markers.",
        },
        {
          type: "vocab",
          heading: "Yes/no questions",
          items: [
            { l1: "¿Hablas inglés?", en: "Do you speak English?" },
            { l1: "¿Tienes hermanos?", en: "Do you have siblings?" },
            { l1: "¿Hay una farmacia cerca?", en: "Is there a pharmacy nearby?" },
            { l1: "¿Es caro?", en: "Is it expensive?" },
            { l1: "¿Puedes repetir?", en: "Can you repeat (that)?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate into Spanish",
          direction: "en-to-l1",
          prompt: "Where is the hotel?",
          reference: "¿Dónde está el hotel?",
          hint: "dónde + estar + el hotel",
        },
        {
          type: "translate",
          heading: "Translate into Spanish",
          direction: "en-to-l1",
          prompt: "Do you speak Spanish?",
          reference: "¿Hablas español?",
          hint: "hablar + español",
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "How do you turn '¿Cuál es tu nombre?' into a statement?",
              options: ["¿Tu nombre cuál es?", "Tu nombre es…", "No change", "Add 'do' before cuál"],
              correct: 1,
              fb: "Tu nombre es Ana. = Your name is Ana. Just remove the question marks and adjust intonation.",
            },
            {
              q: "Which is correct for 'Do you have a map?'",
              options: ["¿Tenes un mapa?", "¿Tienes un mapa?", "¿Haces un mapa?", "¿Haber un mapa?"],
              correct: 1,
              fb: "Tener (to have), tú form: tienes. ¿Tienes un mapa?",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'¿Dónde?' means…", options: ["when", "where", "who", "how"], correct: 1 },
      { q: "'¿Cuándo?' means…", options: ["how much", "where", "when", "why"], correct: 2 },
      { q: "To ask 'why?' you say…", options: ["porque", "¿por qué?", "¿para qué?", "¿cómo?"], correct: 1 },
      { q: "Because (the answer to why) is…", options: ["¿por qué?", "para que", "porque", "que"], correct: 2 },
      { q: "'¿Cuánto cuesta?' means…", options: ["How is it?", "What is it?", "How much does it cost?", "When does it open?"], correct: 2 },
      { q: "'¿Cuál?' is used instead of '¿qué?' when…", options: ["Asking where", "Choosing from a set of options", "Asking about time", "Asking about people"], correct: 1 },
      { q: "How do you ask 'Do you have siblings?' in Spanish?", options: ["¿Haces hermanos?", "¿Tienes hermanos?", "¿Eres hermanos?", "¿Estás hermanos?"], correct: 1 },
      { q: "Spanish questions require 'do/does'…", options: ["Always", "Only with -er verbs", "Never", "Only in writing"], correct: 2 },
      { q: "'¿Cómo se dice?' means…", options: ["How does he say?", "How do you say it?", "When do you say it?", "Why do you say it?"], correct: 1 },
      { q: "Question words in Spanish always have…", options: ["Capital letters", "A written accent", "Double consonants", "A final -o"], correct: 1 },
    ],
  },
};
