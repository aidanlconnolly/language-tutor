import type { Unit } from "../../types";

export const UNIT_QUESTIONS: Unit = {
  slug: "questions",
  stage: 2,
  order: 7,
  icon: "❓",
  title: "Asking questions",
  tagline: "Wer, was, wo, wann, warum, wie — and verb-first questions.",
  badge: "core",
  lessons: [
    {
      slug: "questions-w-words",
      title: "The W-words",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "German question words start with W",
          body: [
            "Almost every German question word begins with <strong>W</strong> — easy to spot, easy to remember: <em>wer, was, wo, wann, warum, wie</em>.",
            "Word order is simple: question word first, then the verb, then the subject. <em>Wo wohnst du?</em> = \"Where do you live?\" The verb is always in second position.",
            "Two confusables: <strong>wer</strong> = \"who\" (not \"where\"!) and <strong>wo</strong> = \"where.\" English speakers mix these up constantly because they look swapped.",
          ],
          keyPoint:
            "W-word + verb + subject. wer = who, wo = where. The verb stays in second position.",
        },
        {
          type: "vocab",
          heading: "The question words",
          items: [
            { l1: "wer", en: "who", note: "Wer ist das? — Who is that?" },
            { l1: "was", en: "what", note: "Was machst du? — What are you doing?" },
            { l1: "wo", en: "where", note: "Wo wohnst du? — Where do you live?" },
            { l1: "wann", en: "when", note: "Wann kommst du? — When are you coming?" },
            { l1: "warum", en: "why", note: "Warum lernst du Deutsch? — Why are you learning German?" },
            { l1: "wie", en: "how", note: "Wie heißt du? — What's your name? (lit. how are you called)" },
            { l1: "wie viel", en: "how much", note: "Wie viel kostet das? — How much does that cost?" },
            { l1: "wie viele", en: "how many", note: "Wie viele Geschwister hast du? — How many siblings do you have?" },
          ],
        },
        {
          type: "dialogue",
          heading: "Twenty questions",
          setup: "A curious new acquaintance asks you everything.",
          lines: [
            { speaker: "Nina", l1: "Wie heißt du?", en: "What's your name?" },
            { speaker: "You", l1: "Ich heiße Alex.", en: "My name is Alex." },
            { speaker: "Nina", l1: "Wo wohnst du?", en: "Where do you live?" },
            { speaker: "You", l1: "Ich wohne in Berlin.", en: "I live in Berlin." },
            { speaker: "Nina", l1: "Warum lernst du Deutsch?", en: "Why are you learning German?" },
            { speaker: "You", l1: "Weil ich hier arbeite.", en: "Because I work here." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the W-word",
          items: [
            {
              template: "___ heißt du?",
              answer: "Wie",
              en: "What's your name? (how are you called)",
              options: ["Wer", "Wie", "Wo", "Was"],
            },
            {
              template: "___ ist das?",
              answer: "Wer",
              en: "Who is that?",
              options: ["Wer", "Wo", "Wie", "Wann"],
            },
            {
              template: "___ wohnst du?",
              answer: "Wo",
              en: "Where do you live?",
              options: ["Wer", "Wo", "Was", "Warum"],
            },
            {
              template: "___ viel kostet das?",
              answer: "Wie",
              en: "How much does that cost?",
              options: ["Was", "Wie", "Wo", "Wann"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Where do you live and what do you do?",
          reference: "Wo wohnst du und was machst du?",
          hint: "W-word, then verb, then subject. 'and' = und.",
        },
      ],
    },
    {
      slug: "questions-yes-no",
      title: "Yes/no questions & short answers",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Just put the verb first",
          body: [
            "To make a yes/no question, German doesn't need a helper word like English \"do.\" You simply move the verb to the front: <em>Du wohnst hier</em> → <em>Wohnst du hier?</em> (\"Do you live here?\").",
            "This is called <strong>verb-first</strong> word order, and it's the whole trick: the conjugated verb starts the sentence, the subject follows right after.",
            "Answer with <strong>Ja</strong> (yes), <strong>Nein</strong> (no), or <strong>Doch</strong> — a special \"yes\" that contradicts a negative question: <em>Kommst du nicht? — Doch!</em> (\"Aren't you coming? — Yes I am!\").",
          ],
          keyPoint:
            "Yes/no question = verb first, subject second. Doch = 'yes' that overturns a negative question.",
        },
        {
          type: "tip",
          heading: "The magic of Doch",
          body: "English has no clean equivalent of <strong>Doch</strong>. When someone asks a question expecting \"no\" — <em>Hast du kein Geld?</em> (\"Don't you have any money?\") — answering <em>Ja</em> is ambiguous. <em>Doch</em> means \"yes, contrary to what you assume.\" <em>Doch, ich habe Geld!</em>",
          example: { l1: "Bist du nicht müde? — Doch, sehr!", en: "Aren't you tired? — Yes, very!" },
        },
        {
          type: "dialogue",
          heading: "Quick yes/no exchange",
          setup: "Sorting out plans for the evening.",
          lines: [
            { speaker: "Max", l1: "Kommst du heute Abend?", en: "Are you coming tonight?" },
            { speaker: "You", l1: "Ja, gern. Hast du Hunger?", en: "Yes, gladly. Are you hungry?" },
            { speaker: "Max", l1: "Nein, aber ich habe Durst.", en: "No, but I'm thirsty." },
            { speaker: "You", l1: "Magst du kein Bier?", en: "Don't you like beer?" },
            { speaker: "Max", l1: "Doch, natürlich!", en: "Yes I do, of course!" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the question",
          intro: "Put the verb first.",
          items: [
            { tokens: ["Wohnst", "du", "in", "Berlin"], en: "Do you live in Berlin?" },
            { tokens: ["Hast", "du", "Zeit"], en: "Do you have time?" },
            { tokens: ["Kommen", "Sie", "aus", "Deutschland"], en: "Do you come from Germany? (formal)" },
            { tokens: ["Sprichst", "du", "Englisch"], en: "Do you speak English?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Answer correctly",
          items: [
            {
              template: "Kommst du mit? — ___, gern!",
              answer: "Ja",
              en: "Are you coming along? — Yes, gladly!",
              options: ["Ja", "Nein", "Doch", "Bitte"],
            },
            {
              template: "Hast du keine Zeit? — ___, ich habe Zeit!",
              answer: "Doch",
              en: "Don't you have time? — Yes, I do have time!",
              options: ["Ja", "Nein", "Doch", "Nicht"],
            },
            {
              template: "___ du Deutsch? (Do you speak)",
              answer: "Sprichst",
              en: "Do you speak German?",
              options: ["Sprichst", "Du sprichst", "Sprechen", "Spricht"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Do you have time today?",
          reference: "Hast du heute Zeit?",
          hint: "Verb first: Hast du… Then add the rest.",
        },
      ],
    },
    {
      slug: "questions-woher-wohin",
      title: "Putting it together: woher & wohin",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Where from, where to",
          body: [
            "German splits the English \"where\" into three. <strong>Wo</strong> = where (at rest): <em>Wo bist du?</em> <strong>Woher</strong> = where from: <em>Woher kommst du?</em> <strong>Wohin</strong> = where to: <em>Wohin gehst du?</em>",
            "<em>Woher</em> pairs with <strong>aus</strong> (\"out of\"): <em>Ich komme aus Berlin.</em> <em>Wohin</em> pairs with <strong>nach</strong> (for cities/countries) or <strong>zu</strong> (for people/places): <em>Ich gehe nach Hause.</em>",
            "You'll often hear the <em>-her</em> and <em>-hin</em> split off to the end in casual speech: <em>Wo kommst du her?</em> means exactly the same as <em>Woher kommst du?</em>",
          ],
          keyPoint:
            "wo = where (static), woher = where from (+ aus), wohin = where to (+ nach/zu).",
        },
        {
          type: "vocab",
          heading: "Direction words",
          items: [
            { l1: "wo", en: "where (location)", note: "Wo bist du? — Where are you?" },
            { l1: "woher", en: "where from", note: "Woher kommst du? — Where are you from?" },
            { l1: "wohin", en: "where to", note: "Wohin gehst du? — Where are you going?" },
            { l1: "aus", en: "out of / from", note: "pairs with woher: aus Berlin" },
            { l1: "nach", en: "to (city/country)", note: "nach Berlin, nach Deutschland" },
            { l1: "zu", en: "to (a person/place)", note: "zu meiner Mutter, zum Arzt" },
            { l1: "nach Hause", en: "(to) home", note: "destination: Ich gehe nach Hause." },
            { l1: "zu Hause", en: "at home", note: "location: Ich bin zu Hause." },
          ],
        },
        {
          type: "dialogue",
          heading: "Coming and going",
          setup: "Bumping into a friend on the street.",
          lines: [
            { speaker: "Eva", l1: "Hallo! Woher kommst du gerade?", en: "Hi! Where are you coming from right now?" },
            { speaker: "You", l1: "Ich komme aus dem Büro. Und wohin gehst du?", en: "I'm coming from the office. And where are you going?" },
            { speaker: "Eva", l1: "Ich gehe nach Hause. Und du?", en: "I'm going home. And you?" },
            { speaker: "You", l1: "Ich gehe zum Supermarkt.", en: "I'm going to the supermarket." },
          ],
        },
        {
          type: "fillBlank",
          heading: "wo, woher, or wohin?",
          items: [
            {
              template: "___ kommst du? — Aus Italien.",
              answer: "Woher",
              en: "Where are you from? — From Italy.",
              options: ["Wo", "Woher", "Wohin", "Wer"],
            },
            {
              template: "___ gehst du? — Nach Hause.",
              answer: "Wohin",
              en: "Where are you going? — Home.",
              options: ["Wo", "Woher", "Wohin", "Wann"],
            },
            {
              template: "___ bist du? — Ich bin zu Hause.",
              answer: "Wo",
              en: "Where are you? — I'm at home.",
              options: ["Wo", "Woher", "Wohin", "Wer"],
            },
            {
              template: "Ich fahre ___ Berlin.",
              answer: "nach",
              en: "I'm traveling to Berlin.",
              options: ["aus", "nach", "zu", "in"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Where are you from and where are you going?",
          reference: "Woher kommst du und wohin gehst du?",
          hint: "woher for origin, wohin for destination. Verb in second position.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which means 'where from'?",
              options: ["wo", "woher", "wohin", "wer"],
              correct: 1,
            },
            {
              q: "'Wohin gehst du?' asks about your…",
              options: ["origin", "current location", "destination", "name"],
              correct: 2,
            },
            {
              q: "Complete: 'Ich gehe ___ Hause.' (going home)",
              options: ["zu", "nach", "aus", "in"],
              correct: 1,
            },
            {
              q: "Translate: 'Where are you?' (location)",
              options: ["Woher bist du?", "Wohin bist du?", "Wo bist du?", "Wer bist du?"],
              correct: 2,
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Which German question word means 'who'?",
        options: ["wo", "wer", "was", "wie"],
        correct: 1,
      },
      {
        q: "'Wo wohnst du?' asks…",
        options: ["who you are", "where you live", "why you live", "when you live"],
        correct: 1,
      },
      {
        q: "How do you ask someone's name in German?",
        options: ["Was heißt du?", "Wer heißt du?", "Wie heißt du?", "Wo heißt du?"],
        correct: 2,
      },
      {
        q: "In a question, the verb goes in which position?",
        options: ["first (always)", "second (after the W-word)", "last", "anywhere"],
        correct: 1,
      },
      {
        q: "Make a yes/no question: 'Du hast Zeit' →",
        options: ["Du hast Zeit?", "Hast du Zeit?", "Zeit hast du?", "Hast Zeit du?"],
        correct: 1,
      },
      {
        q: "Which answer contradicts a negative question?",
        options: ["Ja", "Nein", "Doch", "Bitte"],
        correct: 2,
      },
      {
        q: "'Woher kommst du?' asks about your…",
        options: ["destination", "origin", "current location", "job"],
        correct: 1,
      },
      {
        q: "Which word means 'where to'?",
        options: ["wo", "woher", "wohin", "warum"],
        correct: 2,
      },
      {
        q: "Complete: 'Ich komme ___ Deutschland.' (origin)",
        options: ["nach", "aus", "zu", "in"],
        correct: 1,
      },
      {
        q: "Translate: 'Do you speak German?' (informal)",
        options: ["Du sprichst Deutsch?", "Sprichst du Deutsch?", "Sprechen du Deutsch?", "Spricht du Deutsch?"],
        correct: 1,
      },
    ],
  },
};
