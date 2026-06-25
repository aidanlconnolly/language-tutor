import type { Unit } from "../../types";

export const UNIT_DESU_PARTICLES: Unit = {
  slug: "desu-particles",
  stage: 1,
  order: 5,
  icon: "🧱",
  title: "です & basic particles",
  tagline: "X は Y です, the particles は・の, and か questions.",
  badge: "core",
  lessons: [
    {
      slug: "desu-particles-x-wa-y-desu",
      title: "X は Y です — A is B",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The most useful sentence in Japanese",
          body: [
            "Japanese sentences end with the verb. The basic frame is <strong>X は Y です</strong> — \"X is Y.\" です (desu) is a polite \"to be\" that sits at the very end.",
            "は here is the <strong>topic particle</strong>. It marks what the sentence is about. Important: when は works as a particle it is read <strong>wa</strong>, not <em>ha</em>. So わたしは is read \"watashi wa.\"",
            "Japanese has no \"a\" or \"the,\" and you usually drop the subject when it's obvious. <em>がくせいです</em> on its own already means \"(I) am a student.\"",
          ],
          keyPoint:
            "X は Y です = \"X is Y.\" は as a particle is read wa. です makes it polite.",
        },
        {
          type: "vocab",
          heading: "Words to build first sentences",
          items: [
            { l1: "わたし", en: "I / me", note: "watashi" },
            { l1: "がくせい", en: "student", note: "gakusei (がくせい)" },
            { l1: "せんせい", en: "teacher", note: "sensei (せんせい)" },
            { l1: "にほんじん", en: "Japanese person", note: "nihonjin (にほんじん)" },
            { l1: "とうきょう", en: "Tokyo", note: "Tōkyō (とうきょう)" },
            { l1: "です", en: "is / am / are (polite)", note: "desu — the final pronounced 'su' is nearly silent: 'des'" },
            { l1: "は", en: "topic particle", note: "read 'wa' when used as a particle" },
            { l1: "はい", en: "yes", note: "hai" },
          ],
        },
        {
          type: "dialogue",
          heading: "Introducing yourself in Shibuya",
          setup: "You meet a classmate at a language exchange café.",
          lines: [
            { speaker: "You", l1: "わたしは がくせいです。", en: "I'm a student." },
            { speaker: "Yuki", l1: "わたしは せんせいです。", en: "I'm a teacher." },
            { speaker: "You", l1: "とうきょうは おおきいです。", en: "Tokyo is big." },
            { speaker: "Yuki", l1: "はい、おおきいです。", en: "Yes, it's big." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Add the topic particle",
          intro: "Fill the blank with the right particle or word.",
          items: [
            {
              template: "わたし ___ がくせいです。",
              answer: "は",
              en: "I'm a student.",
              options: ["は", "の", "か", "です"],
            },
            {
              template: "とうきょうは おおきい ___ 。",
              answer: "です",
              en: "Tokyo is big.",
              options: ["は", "です", "の", "か"],
            },
            {
              template: "やまださんは せんせい ___ 。",
              answer: "です",
              en: "Mr. Yamada is a teacher.",
              options: ["か", "は", "です", "の"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I am a student.",
          reference: "わたしは がくせいです。",
          hint: "watashi wa gakusei desu — topic は (read wa), then noun, then です.",
        },
      ],
    },
    {
      slug: "desu-particles-no-linking",
      title: "The linking particle の",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "の connects two nouns",
          body: [
            "The particle <strong>の</strong> (no) links nouns, most often to show possession or belonging: <em>A の B</em> = \"B of A\" / \"A's B.\"",
            "<em>わたしの なまえ</em> = \"my name\" (literally \"I's name\"). <em>にほんの くるま</em> = \"a Japanese car\" (\"Japan's car\").",
            "Notice the order is the reverse of English: the owner comes <strong>first</strong>, then の, then the thing owned.",
          ],
          keyPoint: "A の B = \"A's B\" / \"B of A.\" Owner first, then の, then the noun.",
        },
        {
          type: "vocab",
          heading: "Nouns for the の pattern",
          items: [
            { l1: "なまえ", en: "name", note: "namae (なまえ)" },
            { l1: "の", en: "linking / possessive particle", note: "no — A の B = A's B" },
            { l1: "くるま", en: "car", note: "kuruma (くるま)" },
            { l1: "かいしゃ", en: "company", note: "kaisha (かいしゃ)" },
            { l1: "ともだち", en: "friend", note: "tomodachi (ともだち)" },
            { l1: "にほん", en: "Japan", note: "Nihon (にほん)" },
            { l1: "ほん", en: "book", note: "hon (ほん)" },
            { l1: "これ", en: "this (thing)", note: "kore" },
          ],
        },
        {
          type: "dialogue",
          heading: "Whose book is this?",
          setup: "A book is left on the table at a Tokyo café.",
          lines: [
            { speaker: "Staff", l1: "これは あなたの ほんですか。", en: "Is this your book?" },
            { speaker: "You", l1: "はい、わたしの ほんです。", en: "Yes, it's my book." },
            { speaker: "Staff", l1: "おなまえは？", en: "Your name?" },
            { speaker: "You", l1: "わたしの なまえは ケンです。", en: "My name is Ken." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["わたしの", "なまえは", "ケン", "です"], en: "My name is Ken." },
            { tokens: ["これは", "にほんの", "くるま", "です"], en: "This is a Japanese car." },
            { tokens: ["やまださんは", "かいしゃの", "せんせい", "です"], en: "Mr. Yamada is the company's teacher." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "My name is Ken.",
          reference: "わたしの なまえは ケンです。",
          hint: "watashi no namae wa Ken desu — owner わたし + の + なまえ.",
        },
      ],
    },
    {
      slug: "desu-particles-questions-negatives",
      title: "か questions & では ありません",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Turn any statement into a question with か",
          body: [
            "To ask a yes/no question, just add <strong>か</strong> (ka) to the end of a です sentence. No change in word order, no need for a rising voice in writing. <em>がくせいですか</em> = \"Are (you) a student?\"",
            "Answer with <strong>はい</strong> (yes) or <strong>いいえ</strong> (no).",
            "To say \"is not,\" replace です with <strong>では ありません</strong> (more formal) or <strong>じゃ ありません</strong> (casual). Here too, は in では is read <em>wa</em>.",
          ],
          keyPoint:
            "Statement + か = question. Negative of です is では ありません (じゃ ありません).",
        },
        {
          type: "vocab",
          heading: "Question & answer words",
          items: [
            { l1: "か", en: "question particle", note: "ka — added to the sentence end" },
            { l1: "いいえ", en: "no", note: "iie" },
            { l1: "では ありません", en: "is not (polite)", note: "dewa arimasen — は read 'wa'" },
            { l1: "じゃ ありません", en: "is not (casual)", note: "ja arimasen" },
            { l1: "かいしゃいん", en: "company employee", note: "kaishain (かいしゃいん)" },
            { l1: "あなた", en: "you", note: "anata — often dropped; use a name + さん instead" },
            { l1: "そうです", en: "that's right", note: "sō desu" },
          ],
        },
        {
          type: "dialogue",
          heading: "Are you a student?",
          setup: "At a meetup in Shinjuku, someone asks about your job.",
          lines: [
            { speaker: "Aoi", l1: "ケンさんは がくせいですか。", en: "Ken, are you a student?" },
            { speaker: "You", l1: "いいえ、がくせいじゃ ありません。", en: "No, I'm not a student." },
            { speaker: "You", l1: "わたしは かいしゃいんです。", en: "I'm a company employee." },
            { speaker: "Aoi", l1: "そうですか。", en: "Oh, is that so?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Question or negative?",
          questions: [
            {
              q: "How do you turn 'がくせいです' into a question?",
              options: ["Add の at the end", "Add か at the end", "Add は at the start", "Remove です"],
              correct: 1,
              fb: "Adding か makes it 'がくせいですか' — Are (you) a student?",
            },
            {
              q: "Which means 'I am not a teacher'?",
              options: [
                "わたしは せんせいです。",
                "わたしは せんせいですか。",
                "わたしは せんせいじゃ ありません。",
                "わたしの せんせいです。",
              ],
              correct: 2,
              fb: "じゃ ありません is the negative of です.",
            },
            {
              q: "In では ありません, how is は read?",
              options: ["ha", "wa", "ba", "pa"],
              correct: 1,
              fb: "As a particle は is always read 'wa.'",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Are you a teacher?",
          reference: "あなたは せんせいですか。",
          hint: "anata wa sensei desu ka — add か for the question.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "How is the particle は read?",
              options: ["ha", "wa", "ga", "na"],
              correct: 1,
            },
            {
              q: "Translate: 'My name is Yuki.'",
              options: [
                "わたしは なまえの ユキです。",
                "わたしの なまえは ユキです。",
                "なまえは わたしの ユキです。",
                "ユキは わたしの なまえか。",
              ],
              correct: 1,
            },
            {
              q: "What's the negative of です?",
              options: ["ですか", "でした", "じゃ ありません", "ません"],
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
        q: "Translate: 'I am a student.'",
        options: [
          "わたしは がくせいです。",
          "わたしの がくせいです。",
          "がくせいは わたしです。",
          "わたしは がくせいか。",
        ],
        correct: 0,
      },
      {
        q: "The particle は, when used to mark the topic, is read…",
        options: ["ha", "wa", "ba", "pa"],
        correct: 1,
      },
      {
        q: "What does です do in a sentence?",
        options: [
          "asks a question",
          "marks the topic",
          "acts as a polite 'is / am / are'",
          "links two nouns",
        ],
        correct: 2,
      },
      {
        q: "Translate: 'my book'",
        options: ["ほんの わたし", "わたしの ほん", "わたしは ほん", "ほんは わたし"],
        correct: 1,
      },
      {
        q: "A の B means…",
        options: ["B of A / A's B", "A or B", "A and B", "A is B"],
        correct: 0,
      },
      {
        q: "How do you make 'がくせいです' a yes/no question?",
        options: ["がくせいの", "がくせいか / がくせいですか", "がくせいは", "がくせいじゃ"],
        correct: 1,
      },
      {
        q: "Which means 'No'?",
        options: ["はい", "いいえ", "そうです", "です"],
        correct: 1,
      },
      {
        q: "Translate: 'I am not a teacher.'",
        options: [
          "わたしは せんせいです。",
          "わたしは せんせいですか。",
          "わたしは せんせいじゃ ありません。",
          "わたしの せんせいです。",
        ],
        correct: 2,
      },
      {
        q: "In the word order A の B, which comes first?",
        options: ["the thing owned", "the owner", "です", "か"],
        correct: 1,
      },
      {
        q: "Translate: 'Is Mr. Yamada a teacher?'",
        options: [
          "やまださんは せんせいです。",
          "やまださんの せんせいです。",
          "やまださんは せんせいですか。",
          "せんせいは やまださんか。",
        ],
        correct: 2,
      },
    ],
  },
};
