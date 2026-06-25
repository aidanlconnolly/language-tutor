import type { Unit } from "../../types";

export const UNIT_THIS_THAT: Unit = {
  slug: "this-that",
  stage: 2,
  order: 8,
  icon: "🎯",
  title: "これ/それ/あれ & particles",
  tagline: "kore/sore/are, kono/sono, and を・に・へ.",
  badge: "core",
  lessons: [
    {
      slug: "this-that-kore-sore-are",
      title: "これ / それ / あれ + この / その / あの",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Three distances: ko / so / a",
          body: [
            "Japanese splits \"this/that\" by distance. <strong>これ</strong> = this (near me), <strong>それ</strong> = that (near you), <strong>あれ</strong> = that over there (far from both of us).",
            "These three stand alone as nouns: <em>これは ほんです</em> = \"This is a book.\"",
            "To put one <em>in front of</em> a noun, use the <strong>この / その / あの</strong> set instead: <em>この ほん</em> = \"this book,\" <em>あの ひと</em> = \"that person over there.\" They can't stand alone — they always attach to a noun.",
          ],
          keyPoint:
            "これ/それ/あれ stand alone. この/その/あの attach to a noun: この ほん = this book.",
        },
        {
          type: "vocab",
          heading: "The ko-so-a sets",
          items: [
            { l1: "これ", en: "this one (near me)", note: "kore" },
            { l1: "それ", en: "that one (near you)", note: "sore" },
            { l1: "あれ", en: "that one (over there)", note: "are" },
            { l1: "この", en: "this … (+ noun)", note: "kono + noun: この ほん" },
            { l1: "その", en: "that … (+ noun)", note: "sono + noun" },
            { l1: "あの", en: "that … over there (+ noun)", note: "ano + noun" },
            { l1: "ほん", en: "book", note: "hon (ほん)" },
            { l1: "かばん", en: "bag", note: "kaban (かばん)" },
          ],
        },
        {
          type: "dialogue",
          heading: "At a market stall in Ueno",
          setup: "Pointing at goods on a busy stall.",
          lines: [
            { speaker: "You", l1: "これは なんですか。", en: "What is this (near me)?" },
            { speaker: "Seller", l1: "それは かばんです。", en: "That (near you) is a bag." },
            { speaker: "You", l1: "あの ほんは いくらですか。", en: "How much is that book over there?" },
            { speaker: "Seller", l1: "あの ほんは 800えんです。", en: "That book is 800 yen." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Stand-alone or attached?",
          intro: "Pick これ/それ/あれ vs この/その/あの.",
          items: [
            {
              template: "___ は ほんです。",
              answer: "これ",
              en: "This is a book.",
              options: ["これ", "この", "その", "あの"],
            },
            {
              template: "___ ほんは たかいです。",
              answer: "この",
              en: "This book is expensive.",
              options: ["これ", "この", "あれ", "それ"],
            },
            {
              template: "___ は かばんです。",
              answer: "それ",
              en: "That (near you) is a bag.",
              options: ["その", "それ", "この", "あの"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This book is expensive.",
          reference: "この ほんは たかいです。",
          hint: "kono hon wa takai desu — この attaches to the noun.",
        },
      ],
    },
    {
      slug: "this-that-wo-object",
      title: "The object particle を",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "を marks the direct object",
          body: [
            "The particle <strong>を</strong> marks the thing the verb acts on — the direct object. It's written with a special character but read <strong>o</strong> (like お).",
            "Word order is <em>(topic は) object を verb</em>. <em>すしを たべます</em> = \"(I) eat sushi.\" The verb still comes last.",
            "<strong>〜ます</strong> is the polite present/future verb ending you'll use constantly: <em>たべます</em> (eat), <em>のみます</em> (drink), <em>みます</em> (watch/see).",
          ],
          keyPoint: "を marks the object (read 'o'). Order: object を verb. 〜ます = polite verb ending.",
        },
        {
          type: "vocab",
          heading: "Objects & 〜ます verbs",
          items: [
            { l1: "を", en: "object particle", note: "read 'o', marks the direct object" },
            { l1: "たべます", en: "eat", note: "tabemasu (たべます)" },
            { l1: "のみます", en: "drink", note: "nomimasu (のみます)" },
            { l1: "みます", en: "watch / see", note: "mimasu (みます)" },
            { l1: "すし", en: "sushi", note: "sushi (すし)" },
            { l1: "コーヒー", en: "coffee", note: "kōhī (katakana)" },
            { l1: "テレビ", en: "TV", note: "terebi (katakana)" },
            { l1: "みず", en: "water", note: "mizu (みず)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering at an izakaya",
          setup: "Dinner at a small Tokyo izakaya.",
          lines: [
            { speaker: "Staff", l1: "なにを のみますか。", en: "What will you drink?" },
            { speaker: "You", l1: "みずを のみます。", en: "I'll drink water." },
            { speaker: "Staff", l1: "なにを たべますか。", en: "What will you eat?" },
            { speaker: "You", l1: "すしを たべます。", en: "I'll eat sushi." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order (verb last).",
          items: [
            { tokens: ["すしを", "たべます"], en: "I eat sushi." },
            { tokens: ["コーヒーを", "のみます"], en: "I drink coffee." },
            { tokens: ["わたしは", "テレビを", "みます"], en: "I watch TV." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I eat sushi.",
          reference: "すしを たべます。",
          hint: "sushi o tabemasu — object を then verb; を is read 'o.'",
        },
      ],
    },
    {
      slug: "this-that-ni-he-location",
      title: "に・へ destination & location に",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Going places: に / へ and being places: に",
          body: [
            "For a destination — where you go — use <strong>に</strong> or <strong>へ</strong> with a movement verb: <em>とうきょうに いきます</em> / <em>とうきょうへ いきます</em> = \"(I) go to Tokyo.\" They're interchangeable here; <em>へ</em> as a particle is read <strong>e</strong>.",
            "<strong>に</strong> also marks a <em>location of existence</em> with <strong>います</strong> (for people/animals) and <strong>あります</strong> (for things): <em>えきに います</em> = \"(I) am at the station.\"",
            "And に marks a <em>point in time</em>: <em>3じに いきます</em> = \"(I) go at 3 o'clock.\"",
          ],
          keyPoint:
            "Destination: place に/へ + いきます (へ read 'e'). Location: place に + います/あります.",
        },
        {
          type: "vocab",
          heading: "Movement & location words",
          items: [
            { l1: "に", en: "to / at / in (particle)", note: "ni — destination, location, time" },
            { l1: "へ", en: "to / toward (particle)", note: "read 'e' as a particle" },
            { l1: "いきます", en: "go", note: "ikimasu (いきます)" },
            { l1: "きます", en: "come", note: "kimasu (きます)" },
            { l1: "かえります", en: "return / go home", note: "kaerimasu (かえります)" },
            { l1: "います", en: "is / exists (people, animals)", note: "imasu" },
            { l1: "あります", en: "is / exists (things)", note: "arimasu" },
            { l1: "うち", en: "home / house", note: "uchi (うち)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Where are you headed?",
          setup: "Catching up with a friend on the Yamanote line.",
          lines: [
            { speaker: "Aoi", l1: "どこへ いきますか。", en: "Where are you going?" },
            { speaker: "You", l1: "とうきょうえきに いきます。", en: "I'm going to Tokyo Station." },
            { speaker: "Aoi", l1: "あおいさんは どこに いますか。", en: "(asking back) Where is Aoi now?" },
            { speaker: "You", l1: "うちに かえります。", en: "I'm going home." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which particle?",
          questions: [
            {
              q: "'I go to Tokyo' — which fits the blank: とうきょう ___ いきます?",
              options: ["を", "に", "の", "か"],
              correct: 1,
              fb: "に (or へ) marks the destination with movement verbs.",
            },
            {
              q: "The particle へ, used for direction, is read…",
              options: ["he", "be", "e", "pe"],
              correct: 2,
              fb: "As a particle へ is read 'e.'",
            },
            {
              q: "Which verb expresses a person 'being / existing' somewhere?",
              options: ["あります", "います", "いきます", "たべます"],
              correct: 1,
              fb: "います is for people and animals; あります is for things.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I go to Tokyo.",
          reference: "とうきょうに いきます。",
          hint: "Tōkyō ni ikimasu — に (or へ, read 'e') marks the destination.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which attaches to a noun: 'this book'?",
              options: ["これ ほん", "この ほん", "それ ほん", "ほん これ"],
              correct: 1,
            },
            {
              q: "The object particle を is read…",
              options: ["wo", "o", "no", "ho"],
              correct: 1,
            },
            {
              q: "Translate: 'I go to Tokyo.'",
              options: [
                "とうきょうを いきます。",
                "とうきょうに いきます。",
                "とうきょうの いきます。",
                "とうきょうは いきますか。",
              ],
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
        q: "Which means 'this one (near me)' standing alone?",
        options: ["この", "これ", "それ", "あの"],
        correct: 1,
      },
      {
        q: "'that … over there' attached to a noun is…",
        options: ["あれ", "あの", "その", "これ"],
        correct: 1,
      },
      {
        q: "Translate: 'This book is expensive.'",
        options: [
          "これ ほんは たかいです。",
          "この ほんは たかいです。",
          "ほんは この たかいです。",
          "この ほんは たかいか。",
        ],
        correct: 1,
      },
      {
        q: "The object particle を is read…",
        options: ["wo", "o", "ho", "no"],
        correct: 1,
      },
      {
        q: "Translate: 'I drink coffee.'",
        options: [
          "コーヒーを のみます。",
          "コーヒーに のみます。",
          "コーヒーは のみますか。",
          "のみます コーヒーを。",
        ],
        correct: 0,
      },
      {
        q: "In a basic Japanese sentence, the verb comes…",
        options: ["first", "right after は", "last", "after か"],
        correct: 2,
      },
      {
        q: "Which marks a destination with a movement verb?",
        options: ["を", "に / へ", "の", "か"],
        correct: 1,
      },
      {
        q: "The particle へ (direction) is read…",
        options: ["he", "e", "be", "pe"],
        correct: 1,
      },
      {
        q: "Which verb means a thing 'exists' somewhere?",
        options: ["います", "あります", "いきます", "のみます"],
        correct: 1,
      },
      {
        q: "Translate: 'I'll eat sushi.'",
        options: [
          "すしを たべます。",
          "すしに たべます。",
          "すしは たべますか。",
          "たべます すしを。",
        ],
        correct: 0,
      },
    ],
  },
};
