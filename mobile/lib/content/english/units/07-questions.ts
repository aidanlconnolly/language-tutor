import type { Unit } from "../../types";

export const UNIT_QUESTIONS: Unit = {
  slug: "questions",
  stage: 2,
  order: 7,
  icon: "❓",
  title: "Asking questions",
  tagline: "Who, what, where, when, why, how — and do/does word order.",
  badge: "core",
  lessons: [
    {
      slug: "questions-question-words",
      title: "The question words",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The wh- words",
          body: [
            "Most English questions start with a <strong>wh-</strong> word: <strong>who</strong> (people), <strong>what</strong> (things), <strong>where</strong> (places), <strong>when</strong> (time), <strong>why</strong> (reason), and <strong>how</strong> (manner).",
            "Two more are built from <em>how</em>: <strong>how much</strong> (for things you can't count — money, water, time) and <strong>how many</strong> (for things you can count — people, tickets, days).",
            "Word order is usually: <strong>question word + verb + subject</strong>. <em>Where do you live? What is your name? When does it open?</em>",
          ],
          keyPoint:
            "How much + uncountable (money, time). How many + countable (people, tickets).",
        },
        {
          type: "vocab",
          heading: "Question words at a glance",
          items: [
            { l1: "who?", en: "asks about a person", note: "Who is that? — a person." },
            { l1: "what?", en: "asks about a thing or action", note: "What is this? What do you do?" },
            { l1: "where?", en: "asks about a place", note: "Where do you live?" },
            { l1: "when?", en: "asks about time", note: "When does the shop open?" },
            { l1: "why?", en: "asks about a reason", note: "Answer often starts with 'because'." },
            { l1: "how?", en: "asks about manner or condition", note: "How are you? How does it work?" },
            { l1: "how much?", en: "asks about an uncountable amount", note: "How much is it? (price)" },
            { l1: "how many?", en: "asks about a countable number", note: "How many tickets?" },
            { l1: "how old?", en: "asks about age", note: "How old are you?" },
            { l1: "how long?", en: "asks about duration", note: "How long is the journey?" },
          ],
        },
        {
          type: "tip",
          heading: "Much vs many",
          body: "Use <strong>how much</strong> with things you measure but don't count: <em>how much money, how much time, how much milk</em>. Use <strong>how many</strong> with things you can count one-by-one: <em>how many people, how many days, how many tickets</em>.",
          example: { l1: "How much is the ticket? How many tickets do you need?", en: "price = much; number = many." },
        },
        {
          type: "multipleChoice",
          heading: "Which question word fits?",
          questions: [
            {
              q: "___ do you live?",
              qL1: "I live in Camden.",
              options: ["What", "Where", "When", "Who"],
              correct: 1,
              fb: "A place → where.",
            },
            {
              q: "___ is that woman?",
              qL1: "That's my manager.",
              options: ["What", "Where", "Who", "Why"],
              correct: 2,
              fb: "A person → who.",
            },
            {
              q: "___ does the museum open?",
              qL1: "At ten o'clock.",
              options: ["When", "Who", "How much", "What"],
              correct: 0,
              fb: "Time → when.",
            },
            {
              q: "___ tickets do you need?",
              qL1: "Three, please.",
              options: ["How much", "How many", "How long", "What"],
              correct: 1,
              fb: "Tickets are countable → how many.",
            },
            {
              q: "___ is the coffee?",
              qL1: "It's two pounds fifty.",
              options: ["How many", "How old", "How much", "Where"],
              correct: 2,
              fb: "Price (uncountable) → how much.",
            },
          ],
        },
      ],
    },
    {
      slug: "questions-do-does",
      title: "Yes/no questions with do and does",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Do and does turn a statement into a question",
          body: [
            "For most verbs, English makes a yes/no question by putting <strong>do</strong> or <strong>does</strong> at the front: <em>You like tea → Do you like tea?</em>",
            "Use <strong>does</strong> with he, she and it; use <strong>do</strong> with I, you, we and they. Important: after <em>does</em>, the main verb loses its -s — <em>She works → Does she work?</em> (not <em>does she works</em>).",
            "The verb <strong>be</strong> is different — it needs no do/does. You just swap the order: <em>You are tired → Are you tired? She is English → Is she English?</em>",
          ],
          keyPoint:
            "Do/does + subject + base verb. With 'be', just invert: Are you…? Is she…?",
        },
        {
          type: "conjugation",
          heading: "Short answers",
          verb: "do / does",
          meaning: "answering yes/no questions",
          intro: "We rarely answer with just 'yes' — we add a short answer with do/does or be.",
          tenses: [
            {
              name: "With do / does",
              forms: [
                { person: "Do you like London?", form: "Yes, I do. / No, I don't.", en: "do for I/you/we/they" },
                { person: "Does she work here?", form: "Yes, she does. / No, she doesn't.", en: "does for he/she/it" },
                { person: "Do they speak English?", form: "Yes, they do. / No, they don't.", en: "" },
              ],
            },
            {
              name: "With be",
              forms: [
                { person: "Are you ready?", form: "Yes, I am. / No, I'm not.", en: "no do/does with 'be'" },
                { person: "Is he Italian?", form: "Yes, he is. / No, he isn't.", en: "" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "A quick chat on the Tube",
          setup: "Two commuters strike up a conversation.",
          lines: [
            { speaker: "Sam", l1: "Do you work near here?", en: "" },
            { speaker: "Lena", l1: "Yes, I do. I work in an office in the City. Do you?", en: "'the City' = London's financial district." },
            { speaker: "Sam", l1: "No, I don't. I'm a student. Does this train go to King's Cross?", en: "" },
            { speaker: "Lena", l1: "Yes, it does — three more stops.", en: "" },
            { speaker: "Sam", l1: "Great, thanks!", en: "" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Do or does?",
          intro: "Choose the correct form for the subject.",
          items: [
            {
              template: "___ you speak French?",
              answer: "Do",
              en: "'you' → do",
              options: ["Do", "Does", "Are", "Is"],
            },
            {
              template: "___ she live in London?",
              answer: "Does",
              en: "'she' → does",
              options: ["Do", "Does", "Is", "Are"],
            },
            {
              template: "Does he ___ here?",
              answer: "work",
              en: "after 'does', the verb has no -s",
              options: ["works", "work", "working", "worked"],
            },
            {
              template: "___ they have a reservation?",
              answer: "Do",
              en: "'they' → do",
              options: ["Does", "Do", "Is", "Are"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the question",
          items: [
            { tokens: ["Do", "you", "like", "tea", "?"], en: "Do you like tea?" },
            { tokens: ["Does", "she", "work", "here", "?"], en: "Does she work here?" },
            { tokens: ["Are", "you", "from", "London", "?"], en: "Are you from London?" },
            { tokens: ["Does", "the", "shop", "open", "today", "?"], en: "Does the shop open today?" },
          ],
        },
      ],
    },
    {
      slug: "questions-interview",
      title: "Putting it together: interviewing someone",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Mixing wh- and do/does",
          body: [
            "Real questions often combine a wh- word with do/does: <strong>wh- word + do/does + subject + base verb</strong>. <em>Where do you work? What does she study? How many languages do you speak?</em>",
            "When you meet someone new, you can interview them with a small set of reliable questions. Listen for the answer and follow up — that's how a conversation grows.",
            "Polite softeners help: starting with <em>Can I ask…?</em> or <em>Do you mind if I ask…?</em> makes a question feel friendlier.",
          ],
        },
        {
          type: "vocab",
          heading: "Get-to-know-you questions",
          items: [
            { l1: "Where are you from?", en: "asks about country/city of origin" },
            { l1: "What do you do?", en: "asks about a job" },
            { l1: "Where do you live?", en: "asks about current home" },
            { l1: "How long have you been here?", en: "asks about time in a place" },
            { l1: "Do you have any brothers or sisters?", en: "asks about siblings" },
            { l1: "What do you do in your free time?", en: "asks about hobbies" },
            { l1: "Why are you in London?", en: "asks the reason for the visit" },
            { l1: "How do you find it?", en: "asks for an opinion of a place/thing", note: "'How do you find London?' = what do you think of it?" },
          ],
        },
        {
          type: "dialogue",
          heading: "Getting to know a new colleague",
          setup: "It's a new starter's first day at a London office.",
          lines: [
            { speaker: "You", l1: "Welcome! Where are you from?", en: "" },
            { speaker: "Mateo", l1: "Thanks! I'm from Madrid. I moved here last month.", en: "" },
            { speaker: "You", l1: "Nice. What did you do in Madrid?", en: "" },
            { speaker: "Mateo", l1: "I worked as a designer. How long have you been with the company?", en: "" },
            { speaker: "You", l1: "About two years. How are you finding London so far?", en: "'finding' = experiencing/judging." },
            { speaker: "Mateo", l1: "Expensive! But I love it. Do you know any good cafés nearby?", en: "" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Fix the word order",
          questions: [
            {
              q: "Which is correct?",
              options: ["Where you live?", "Where do you live?", "Where lives you?", "Where you do live?"],
              correct: 1,
              fb: "Wh- word + do + subject + base verb.",
            },
            {
              q: "Which is correct?",
              options: ["What does she studies?", "What she does study?", "What does she study?", "What study she does?"],
              correct: 2,
              fb: "After 'does', the verb is the base form: study, not studies.",
            },
            {
              q: "Which is correct?",
              options: ["How many languages do you speak?", "How much languages do you speak?", "How many languages you speak?", "How many do you speak languages?"],
              correct: 0,
              fb: "Languages are countable → how many.",
            },
            {
              q: "Which question uses 'be' correctly?",
              options: ["Where do you are from?", "Where are you from?", "Where you are from?", "Where does you from?"],
              correct: 1,
              fb: "'Be' needs no do/does — just invert.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Ask someone where they work and how long they have lived in London.",
          reference: "Where do you work? How long have you lived in London?",
          hint: "Use 'do you' for the first question; the second uses 'have you lived'.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Choose the correct question:",
              options: ["What do you do?", "What you do?", "What does you do?", "What do you does?"],
              correct: 0,
            },
            {
              q: "Complete: 'Where ___ she live?'",
              options: ["do", "does", "is", "are"],
              correct: 1,
            },
            {
              q: "Which uses 'be' (no do/does)?",
              options: ["Are you Spanish?", "Do you are Spanish?", "Does you Spanish?", "You are Spanish do?"],
              correct: 0,
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
        q: "Which word asks about a place?",
        options: ["Who", "What", "Where", "When"],
        correct: 2,
      },
      {
        q: "Choose: '___ money do you have?'",
        options: ["How many", "How much", "How long", "How old"],
        correct: 1,
      },
      {
        q: "Choose: '___ tickets do you need?'",
        options: ["How much", "How many", "How long", "What"],
        correct: 1,
      },
      {
        q: "Complete: '___ she live in London?'",
        options: ["Do", "Does", "Is", "Are"],
        correct: 1,
      },
      {
        q: "Which is correct?",
        options: ["Does he works here?", "Does he work here?", "Do he work here?", "He does work here?"],
        correct: 1,
      },
      {
        q: "Short answer to 'Do you like tea?' (yes):",
        options: ["Yes, I like.", "Yes, I do.", "Yes, I am.", "Yes, I does."],
        correct: 1,
      },
      {
        q: "Which question uses 'be' correctly?",
        options: ["Are you ready?", "Do you are ready?", "Does you ready?", "You are ready do?"],
        correct: 0,
      },
      {
        q: "Choose the correct word order:",
        options: ["Where you work?", "Where do you work?", "Where work you?", "Where you do work?"],
        correct: 1,
      },
      {
        q: "Which word asks about a reason?",
        options: ["How", "Why", "When", "Who"],
        correct: 1,
      },
      {
        q: "Complete: 'What ___ you do?' (your job)",
        options: ["does", "do", "is", "are"],
        correct: 1,
      },
    ],
  },
};
