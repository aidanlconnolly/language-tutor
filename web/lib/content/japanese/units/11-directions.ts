import type { Unit } from "../../types";

export const UNIT_DIRECTIONS: Unit = {
  slug: "directions",
  stage: 3,
  order: 11,
  icon: "🧭",
  title: "Asking for directions",
  tagline: "migi/hidari/massugu — …は どこ ですか.",
  badge: "tourist",
  lessons: [
    {
      slug: "directions-words",
      title: "Right, left, straight, next to",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The four words that get you anywhere",
          body: [
            "Tokyo's back streets twist, so you only really need four direction words: <strong>みぎ (right)</strong>, <strong>ひだり (left)</strong>, <strong>まっすぐ (straight ahead)</strong>, and <strong>となり (next to)</strong>.",
            "To say 'turn right', combine the direction with <em>に まがって ください</em> = 'please turn'. <em>みぎ に まがって ください</em> = 'turn right, please'.",
            "<strong>となり</strong> tells you what something is beside: <em>こうばん の となり</em> = 'next to the police box'.",
          ],
          keyPoint: "みぎ = right, ひだり = left, まっすぐ = straight, となり = next to. 'Turn X' = X に まがって ください.",
        },
        {
          type: "vocab",
          heading: "Direction vocabulary",
          items: [
            { l1: "みぎ", en: "right", note: "migi (右)." },
            { l1: "ひだり", en: "left", note: "hidari (左)." },
            { l1: "まっすぐ", en: "straight ahead", note: "massugu (真っ直ぐ)." },
            { l1: "となり", en: "next to / beside", note: "tonari (隣). X no tonari = 'next to X'." },
            { l1: "まがって ください", en: "please turn", note: "magatte kudasai (曲がってください)." },
            { l1: "まえ", en: "in front of", note: "mae (前). X no mae = 'in front of X'." },
            { l1: "うしろ", en: "behind", note: "ushiro (後ろ)." },
            { l1: "かど", en: "corner", note: "kado (角). Tsugi no kado = 'the next corner'." },
          ],
        },
        {
          type: "pronounce",
          heading: "Say the directions",
          intro: "Tap to hear each one and repeat.",
          items: [
            { l1: "みぎ", en: "right", tip: "mi-gi, two short even beats." },
            { l1: "ひだり", en: "left", tip: "hi-da-ri, three light syllables." },
            { l1: "まっすぐ", en: "straight ahead", tip: "The small っ in maっsugu is a held pause: ma-(t)-su-gu." },
            { l1: "となり", en: "next to", tip: "to-na-ri, flat and even." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "Which word means 'left'?",
              options: ["みぎ", "ひだり", "まっすぐ", "となり"],
              correct: 1,
            },
            {
              q: "'Go straight ahead' uses…",
              options: ["となり", "かど", "まっすぐ", "うしろ"],
              correct: 2,
            },
            {
              q: "こうばん の となり means…",
              options: ["in front of the police box", "behind the police box", "next to the police box", "across from the police box"],
              correct: 2,
            },
            {
              q: "'Please turn right' =",
              options: ["みぎ に まがって ください", "ひだり に まがって ください", "まっすぐ ください", "みぎ は どこ ですか"],
              correct: 0,
            },
          ],
        },
      ],
    },
    {
      slug: "directions-asking",
      title: "…は どこ ですか + すみません",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The one question pattern you need",
          body: [
            "To ask where anything is, use <strong>「…は どこ ですか」</strong> = '(Place) — where is it?'. <em>えき は どこ ですか</em> = 'Where is the station?'",
            "Always open with <strong>すみません (sumimasen)</strong> = 'excuse me' to get someone's attention politely. It also doubles as a light 'sorry / thank you'.",
            "If you do not catch the answer, say <em>もう いちど おねがいします</em> = 'one more time, please'.",
          ],
          keyPoint: "すみません、…は どこ ですか = 'Excuse me, where is …?' — your universal direction-asking line.",
        },
        {
          type: "vocab",
          heading: "Asking-where vocabulary",
          items: [
            { l1: "すみません", en: "excuse me / sorry", note: "sumimasen. Opens almost any request." },
            { l1: "どこ", en: "where", note: "doko. X wa doko desu ka = 'Where is X?'" },
            { l1: "…は どこ ですか", en: "where is …?", note: "wa doko desu ka. The core question." },
            { l1: "トイレ", en: "toilet / restroom", note: "toire. From English 'toilet'." },
            { l1: "ちかく", en: "nearby / vicinity", note: "chikaku (近く). Kono chikaku = 'around here'." },
            { l1: "おねがいします", en: "please (request)", note: "onegai shimasu. Polite 'I ask of you'." },
            { l1: "もう いちど", en: "one more time", note: "mō ichido (もう一度)." },
            { l1: "ありがとうございます", en: "thank you (polite)", note: "arigatō gozaimasu." },
          ],
        },
        {
          type: "dialogue",
          heading: "Where is the station?",
          setup: "You stop a passer-by near a busy intersection.",
          lines: [
            { speaker: "You", l1: "すみません、えき は どこ ですか。", en: "Excuse me, where is the station? (Sumimasen, eki wa doko desu ka.)" },
            { speaker: "Local", l1: "えき は あそこ です。まっすぐ いって ください。", en: "The station is over there. Go straight. (Eki wa asoko desu. Massugu itte kudasai.)" },
            { speaker: "You", l1: "トイレ は ちかく に ありますか。", en: "Is there a toilet nearby? (Toire wa chikaku ni arimasu ka.)" },
            { speaker: "Local", l1: "はい、コンビニ の となり です。", en: "Yes, it's next to the convenience store. (Hai, konbini no tonari desu.)" },
            { speaker: "You", l1: "もう いちど おねがいします。", en: "One more time, please. (Mō ichido onegai shimasu.)" },
            { speaker: "Local", l1: "コンビニ の となり です。", en: "It's next to the convenience store. (Konbini no tonari desu.)" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the question",
          items: [
            {
              template: "すみません、えき は ___ ですか。",
              answer: "どこ",
              en: "Excuse me, where is the station?",
              options: ["どこ", "いくら", "なに", "だれ"],
            },
            {
              template: "トイレ は どこ ___ か。",
              answer: "ですか",
              en: "Where is the toilet?",
              options: ["ですか", "ください", "ます", "から"],
            },
            {
              template: "___、しぶや は どこ ですか。",
              answer: "すみません",
              en: "Excuse me, where is Shibuya?",
              options: ["すみません", "ありがとう", "おねがい", "はい"],
            },
            {
              template: "もう いちど ___。",
              answer: "おねがいします",
              en: "One more time, please.",
              options: ["おねがいします", "どこ ですか", "ありがとう", "すみません"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, where is the toilet?",
          reference: "すみません、トイレ は どこ ですか。",
          hint: "Open with すみません, then 'トイレ + は + どこ ですか'.",
        },
      ],
    },
    {
      slug: "directions-answers",
      title: "Understanding the answer + landmarks",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Decode the reply with landmarks",
          body: [
            "Answers in Tokyo lean on landmarks rather than street names. Listen for <strong>コンビニ (convenience store)</strong>, <strong>こうばん (police box)</strong>, and <strong>しんごう (traffic light)</strong>.",
            "A typical reply: <em>つぎ の しんごう を みぎ に まがって ください</em> = 'turn right at the next traffic light'. The particle <em>を</em> marks the place you turn at.",
            "Distance words help too: <strong>すぐ (right away / very close)</strong> and <strong>とおい (far)</strong>. <em>すぐ そこ です</em> = 'it's right there'.",
          ],
          keyPoint: "Listen for landmarks: コンビニ, こうばん, しんごう. つぎ の しんごう を みぎ に = 'right at the next light'.",
        },
        {
          type: "vocab",
          heading: "Landmark vocabulary",
          items: [
            { l1: "コンビニ", en: "convenience store", note: "konbini. 7-Eleven, Lawson, FamilyMart." },
            { l1: "こうばん", en: "police box", note: "kōban (交番). A small neighbourhood police post — great for directions." },
            { l1: "しんごう", en: "traffic light", note: "shingō (信号)." },
            { l1: "こうさてん", en: "intersection", note: "kōsaten (交差点)." },
            { l1: "ぎんこう", en: "bank", note: "ginkō (銀行)." },
            { l1: "すぐ", en: "right away / very close", note: "sugu. Sugu soko = 'right there'." },
            { l1: "とおい", en: "far", note: "tōi (遠い)." },
            { l1: "ちかい", en: "close / near", note: "chikai (近い)." },
          ],
        },
        {
          type: "dialogue",
          heading: "Following a landmark answer",
          setup: "You asked the way and the local explains using landmarks.",
          lines: [
            { speaker: "Local", l1: "つぎ の しんごう を みぎ に まがって ください。", en: "Turn right at the next traffic light. (Tsugi no shingō o migi ni magatte kudasai.)" },
            { speaker: "You", l1: "とおい ですか。", en: "Is it far? (Tōi desu ka.)" },
            { speaker: "Local", l1: "いいえ、ちかい です。すぐ そこ です。", en: "No, it's close. It's right there. (Iie, chikai desu. Sugu soko desu.)" },
            { speaker: "Local", l1: "こうばん の となり です。", en: "It's next to the police box. (Kōban no tonari desu.)" },
            { speaker: "You", l1: "わかりました。ありがとうございます。", en: "Got it. Thank you very much. (Wakarimashita. Arigatō gozaimasu.)" },
          ],
        },
        {
          type: "listen",
          heading: "What did they tell you?",
          intro: "Listen, then pick the closest meaning.",
          items: [
            { l1: "みぎ に まがって ください。", en: "Please turn right.", options: ["Please turn right", "Please turn left", "Go straight", "Stop here"], correct: 0 },
            { l1: "まっすぐ いって ください。", en: "Please go straight.", options: ["Turn right", "Turn left", "Please go straight", "Come back"], correct: 2 },
            { l1: "こうばん の となり です。", en: "It's next to the police box.", options: ["In front of the bank", "Next to the police box", "Behind the station", "Far from here"], correct: 1 },
            { l1: "すぐ そこ です。", en: "It's right there.", options: ["It's very far", "It's right there", "It's closed", "Turn at the light"], correct: 1 },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the directions",
          items: [
            { tokens: ["つぎ", "の", "しんごう", "を", "みぎ", "に", "まがって", "ください"], en: "Turn right at the next traffic light." },
            { tokens: ["コンビニ", "の", "となり", "です"], en: "It's next to the convenience store." },
            { tokens: ["まっすぐ", "いって", "ください"], en: "Please go straight." },
            { tokens: ["こうばん", "は", "ちかい", "ですか"], en: "Is the police box near?" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "こうばん is a…",
              options: ["convenience store", "police box", "bank", "traffic light"],
              correct: 1,
            },
            {
              q: "'Turn right at the next traffic light' =",
              options: [
                "つぎ の しんごう を みぎ に まがって ください",
                "つぎ の しんごう を ひだり に まがって ください",
                "まっすぐ いって ください",
                "しんごう は どこ ですか",
              ],
              correct: 0,
            },
            {
              q: "すぐ そこ です means…",
              options: ["it's very far", "it's right there", "it's closed", "turn left"],
              correct: 1,
            },
            {
              q: "Which word means 'far'?",
              options: ["ちかい", "となり", "とおい", "すぐ"],
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
        q: "Which word means 'right'?",
        options: ["ひだり", "みぎ", "まっすぐ", "となり"],
        correct: 1,
      },
      {
        q: "まっすぐ means…",
        options: ["next to", "straight ahead", "behind", "corner"],
        correct: 1,
      },
      {
        q: "The universal way to ask where something is:",
        options: [
          "…は いくら ですか",
          "…は どこ ですか",
          "…に いきますか",
          "…は だれ ですか",
        ],
        correct: 1,
      },
      {
        q: "You open the question politely with…",
        options: ["ありがとう", "すみません", "はい", "おねがい"],
        correct: 1,
      },
      {
        q: "となり means…",
        options: ["in front of", "behind", "next to", "far"],
        correct: 2,
      },
      {
        q: "こうばん is useful for directions because it's a…",
        options: ["bank", "police box", "train line", "restroom"],
        correct: 1,
      },
      {
        q: "'Please turn left' =",
        options: [
          "みぎ に まがって ください",
          "ひだり に まがって ください",
          "まっすぐ いって ください",
          "ひだり は どこ ですか",
        ],
        correct: 1,
      },
      {
        q: "しんごう means…",
        options: ["intersection", "corner", "traffic light", "bank"],
        correct: 2,
      },
      {
        q: "If something is とおい, it is…",
        options: ["close", "far", "next to you", "straight ahead"],
        correct: 1,
      },
      {
        q: "Translate: 'Excuse me, where is the station?'",
        options: [
          "すみません、えき は どこ ですか。",
          "すみません、えき まで いくらですか。",
          "すみません、えき に いきますか。",
          "ありがとう、えき は どこ ですか。",
        ],
        correct: 0,
      },
    ],
  },
};
