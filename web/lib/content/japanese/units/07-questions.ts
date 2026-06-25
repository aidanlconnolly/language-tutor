import type { Unit } from "../../types";

export const UNIT_QUESTIONS: Unit = {
  slug: "questions",
  stage: 2,
  order: 7,
  icon: "❓",
  title: "Asking questions",
  tagline: "なに・だれ・どこ・いつ・どう・いくら + か.",
  badge: "core",
  lessons: [
    {
      slug: "questions-what-who-where",
      title: "なに / だれ / どこ",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Question words go where the answer goes",
          body: [
            "Japanese question words sit in the same slot the answer would occupy — you don't move them to the front like English. <em>これは なんですか</em> = \"What is this?\" The か at the end still marks the question.",
            "<strong>なに / なん</strong> = what. It's read <em>なん</em> before です and certain sounds: <em>なんですか</em>.",
            "<strong>だれ</strong> = who, <strong>どこ</strong> = where. Answer them by simply replacing the question word with the real information.",
          ],
          keyPoint:
            "Question words stay in place; か still ends the sentence. なに/なん=what, だれ=who, どこ=where.",
        },
        {
          type: "vocab",
          heading: "First question words",
          items: [
            { l1: "なに / なん", en: "what", note: "nani / nan — なん before です: なんですか" },
            { l1: "だれ", en: "who", note: "dare" },
            { l1: "どこ", en: "where", note: "doko" },
            { l1: "これ", en: "this (thing)", note: "kore" },
            { l1: "えき", en: "station", note: "eki (えき)" },
            { l1: "トイレ", en: "toilet / restroom", note: "toire (katakana)" },
            { l1: "あのひと", en: "that person", note: "ano hito (あのひと)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Lost in Tokyo Station",
          setup: "You stop a passer-by for directions.",
          lines: [
            { speaker: "You", l1: "すみません、トイレは どこですか。", en: "Excuse me, where is the restroom?" },
            { speaker: "Local", l1: "トイレは あそこです。", en: "The restroom is over there." },
            { speaker: "You", l1: "あのひとは だれですか。", en: "Who is that person?" },
            { speaker: "Local", l1: "えきの ひとです。", en: "It's a station staff member." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the question word",
          intro: "Pick what / who / where.",
          items: [
            {
              template: "これは ___ ですか。",
              answer: "なん",
              en: "What is this?",
              options: ["なん", "だれ", "どこ", "いつ"],
            },
            {
              template: "えきは ___ ですか。",
              answer: "どこ",
              en: "Where is the station?",
              options: ["なん", "だれ", "どこ", "どう"],
            },
            {
              template: "あのひとは ___ ですか。",
              answer: "だれ",
              en: "Who is that person?",
              options: ["どこ", "だれ", "なん", "いくら"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Where is the station?",
          reference: "えきは どこですか。",
          hint: "eki wa doko desu ka — どこ stays in the answer's slot.",
        },
      ],
    },
    {
      slug: "questions-when-how-why",
      title: "いつ / どう / どうして",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Asking when, how, and why",
          body: [
            "<strong>いつ</strong> = when, <strong>どう</strong> = how (\"how is it?\"), <strong>どうして</strong> (or なんで) = why.",
            "<em>どう</em> is great for opinions: <em>とうきょうは どうですか</em> = \"How is Tokyo?\" / \"What do you think of Tokyo?\"",
            "Answers to <em>どうして</em> usually end with <strong>〜から</strong> = \"because…\": <em>たかいからです</em> = \"because it's expensive.\"",
          ],
          keyPoint: "いつ=when, どう=how/what about, どうして=why (answer with 〜から = because).",
        },
        {
          type: "vocab",
          heading: "When / how / why words",
          items: [
            { l1: "いつ", en: "when", note: "itsu" },
            { l1: "どう", en: "how / what about", note: "dō" },
            { l1: "どうして", en: "why", note: "dōshite" },
            { l1: "なんで", en: "why (casual)", note: "nande" },
            { l1: "〜から", en: "because", note: "-kara, ends a reason: たかいからです" },
            { l1: "やすみ", en: "day off / holiday", note: "yasumi (やすみ)" },
            { l1: "きょう", en: "today", note: "kyō (きょう)" },
            { l1: "たかい", en: "expensive / high", note: "takai (たかい)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Making plans",
          setup: "Talking about a trip with a coworker.",
          lines: [
            { speaker: "Aoi", l1: "やすみは いつですか。", en: "When is your day off?" },
            { speaker: "You", l1: "きょうです。", en: "It's today." },
            { speaker: "Aoi", l1: "とうきょうは どうですか。", en: "What do you think of Tokyo?" },
            { speaker: "You", l1: "おもしろいです。でも、たかいです。", en: "It's interesting. But it's expensive." },
            { speaker: "Aoi", l1: "どうして たかいですか。", en: "Why is it expensive?" },
            { speaker: "You", l1: "とうきょうだからです。", en: "Because it's Tokyo." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the question",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["やすみは", "いつ", "ですか"], en: "When is your day off?" },
            { tokens: ["とうきょうは", "どう", "ですか"], en: "How is Tokyo?" },
            { tokens: ["どうして", "たかい", "ですか"], en: "Why is it expensive?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "When is your day off?",
          reference: "やすみは いつですか。",
          hint: "yasumi wa itsu desu ka — いつ for 'when.'",
        },
      ],
    },
    {
      slug: "questions-how-much-which",
      title: "いくら / どれ & putting it together",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "How much, and which one",
          body: [
            "<strong>いくら</strong> = how much (price). The single most useful shopping word in Japan: <em>これは いくらですか</em> = \"How much is this?\"",
            "<strong>どれ</strong> = which one (of three or more). Use <em>どちら</em> when choosing between two, or for a polite \"which.\"",
            "Prices use <strong>えん</strong> (yen): <em>500えん</em> = 500 yen. You'll often hear them said quickly at registers, so the question いくら is your friend.",
          ],
          keyPoint: "いくら=how much (price), どれ=which one. これは いくらですか is your shopping lifeline.",
        },
        {
          type: "vocab",
          heading: "Shopping & choosing words",
          items: [
            { l1: "いくら", en: "how much (price)", note: "ikura" },
            { l1: "どれ", en: "which one", note: "dore — of 3 or more" },
            { l1: "えん", en: "yen", note: "en — Japan's currency" },
            { l1: "これ", en: "this one", note: "kore" },
            { l1: "おちゃ", en: "(green) tea", note: "ocha (おちゃ)" },
            { l1: "ぜんぶで", en: "in total / altogether", note: "zenbu de (ぜんぶで)" },
            { l1: "ください", en: "please give me", note: "kudasai" },
          ],
        },
        {
          type: "dialogue",
          heading: "At a convenience store in Shinjuku",
          setup: "Buying tea at a Tokyo konbini.",
          lines: [
            { speaker: "You", l1: "すみません、これは いくらですか。", en: "Excuse me, how much is this?" },
            { speaker: "Clerk", l1: "150えんです。", en: "It's 150 yen." },
            { speaker: "You", l1: "じゃ、おちゃを ください。", en: "Then, the tea please." },
            { speaker: "Clerk", l1: "ぜんぶで 150えんです。", en: "That's 150 yen in total." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Match the question word",
          questions: [
            {
              q: "You want to know the price. You ask…",
              options: ["どこですか", "いくらですか", "だれですか", "いつですか"],
              correct: 1,
              fb: "いくら asks 'how much.'",
            },
            {
              q: "Choosing among several teas, 'which one?' is…",
              options: ["どこ", "どれ", "だれ", "どう"],
              correct: 1,
              fb: "どれ = which one (of three or more).",
            },
            {
              q: "Which question word means 'why'?",
              options: ["いつ", "どこ", "どうして", "いくら"],
              correct: 2,
              fb: "どうして = why; answers often end with 〜から (because).",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "How much is this?",
          reference: "これは いくらですか。",
          hint: "kore wa ikura desu ka — your shopping lifeline.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Translate: 'What is this?'",
              options: [
                "これは なんですか。",
                "これは どこですか。",
                "これは だれですか。",
                "これは いつですか。",
              ],
              correct: 0,
            },
            {
              q: "Which means 'how much (price)'?",
              options: ["どう", "どれ", "いくら", "いつ"],
              correct: 2,
            },
            {
              q: "Answers to どうして often end with…",
              options: ["〜か", "〜から", "〜じん", "〜さん"],
              correct: 1,
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
        q: "Translate: 'What is this?'",
        options: [
          "これは なんですか。",
          "これは どこですか。",
          "これは だれですか。",
          "なんは これですか。",
        ],
        correct: 0,
      },
      {
        q: "Which means 'who'?",
        options: ["どこ", "だれ", "なに", "いつ"],
        correct: 1,
      },
      {
        q: "Translate: 'Where is the restroom?'",
        options: [
          "トイレは どこですか。",
          "トイレは なんですか。",
          "トイレは だれですか。",
          "どこは トイレですか。",
        ],
        correct: 0,
      },
      {
        q: "Which means 'when'?",
        options: ["どう", "いつ", "いくら", "どこ"],
        correct: 1,
      },
      {
        q: "'とうきょうは どうですか' asks…",
        options: [
          "Where is Tokyo?",
          "How is Tokyo / what do you think of Tokyo?",
          "How much is Tokyo?",
          "Who is in Tokyo?",
        ],
        correct: 1,
      },
      {
        q: "Which means 'why'?",
        options: ["どうして", "どこ", "どれ", "いくら"],
        correct: 0,
      },
      {
        q: "Reasons answering どうして usually end with…",
        options: ["〜か", "〜から", "〜です only", "〜じん"],
        correct: 1,
      },
      {
        q: "Translate: 'How much is this?'",
        options: [
          "これは いくらですか。",
          "これは なんですか。",
          "これは どれですか。",
          "いくらは これですか。",
        ],
        correct: 0,
      },
      {
        q: "Which means 'which one' (of several)?",
        options: ["どこ", "どれ", "だれ", "どう"],
        correct: 1,
      },
      {
        q: "Where does a Japanese question word sit in the sentence?",
        options: [
          "always at the very front",
          "in the same slot the answer would go",
          "always right after は",
          "after か",
        ],
        correct: 1,
      },
    ],
  },
};
