import type { Unit } from "../../types";

export const UNIT_GREETINGS: Unit = {
  slug: "greetings",
  stage: 1,
  order: 3,
  icon: "👋",
  title: "Greetings & bowing",
  tagline: "Konnichiwa, ohayō, arigatō, sumimasen — and the bow.",
  badge: "tourist",
  lessons: [
    {
      slug: "greetings-time-of-day",
      title: "Hello and goodbye by time of day",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Japanese greetings change with the clock",
          body: [
            "Like Italian, Japanese has time-based greetings. In the morning you say <strong>おはようございます</strong> (ohayō gozaimasu). Midday and afternoon it's <strong>こんにちは</strong> (konnichiwa). In the evening, <strong>こんばんは</strong> (konbanwa).",
            "Two of these end in は written but read <em>wa</em> — こんにち<strong>は</strong> and こんばん<strong>は</strong> — a leftover from は being the old topic particle. You sound them out as 'wa', not 'ha'.",
            "The morning greeting has a casual short form, <strong>おはよう</strong> (ohayō), used with friends and family. Drop the ございます and it stays warm but informal.",
          ],
          tip: {
            label: "Politeness lives in ございます",
            body: "Adding <em>ございます</em> makes a greeting more polite. <em>おはよう</em> to a friend, <em>おはようございます</em> to a shopkeeper, boss, or stranger. When unsure, use the longer form.",
          },
        },
        {
          type: "vocab",
          heading: "Core greetings",
          items: [
            { l1: "おはようございます", en: "good morning (polite)", note: "rōmaji: ohayō gozaimasu; casual: おはよう ohayō" },
            { l1: "こんにちは", en: "hello / good afternoon", note: "rōmaji: konnichiwa; final は read 'wa'" },
            { l1: "こんばんは", en: "good evening", note: "rōmaji: konbanwa; final は read 'wa'" },
            { l1: "さようなら", en: "goodbye", note: "rōmaji: sayōnara; a fairly final goodbye" },
            { l1: "またね", en: "see you (casual)", note: "rōmaji: mata ne; literally 'again, ne'" },
            { l1: "おやすみなさい", en: "good night", note: "rōmaji: oyasumi nasai; said before sleeping" },
          ],
        },
        {
          type: "dialogue",
          heading: "Morning at a Tokyo hotel",
          setup: "You pass the front desk on your way out at 8 am.",
          lines: [
            { speaker: "Staff", l1: "おはようございます。", en: "Good morning." },
            { speaker: "You", l1: "おはようございます。", en: "Good morning." },
            { speaker: "Staff", l1: "いってらっしゃい。", en: "Have a good day / off you go." },
            { speaker: "You", l1: "いってきます。", en: "I'm off (and will be back)." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the right greeting",
          questions: [
            {
              q: "It's 8 am and you greet the hotel clerk. What do you say?",
              options: ["こんばんは", "おはようございます", "おやすみなさい", "さようなら"],
              correct: 1,
              fb: "おはようございます is the polite morning greeting.",
            },
            {
              q: "How is the は at the end of こんにちは pronounced?",
              options: ["ha", "wa", "pa", "ba"],
              correct: 1,
              fb: "It's the old topic particle, read 'wa': konnichi-wa.",
            },
            {
              q: "Which greeting is said right before going to sleep?",
              options: ["こんばんは", "おやすみなさい", "こんにちは", "またね"],
              correct: 1,
              fb: "おやすみなさい (oyasumi nasai) = good night, before bed.",
            },
          ],
        },
      ],
    },
    {
      slug: "greetings-thanks-sorry",
      title: "Thank you, excuse me, you're welcome",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The three words that smooth every interaction",
          body: [
            "<strong>ありがとうございます</strong> (arigatō gozaimasu) is the polite 'thank you'. With friends, the short <strong>ありがとう</strong> (arigatō) is fine.",
            "<strong>すみません</strong> (sumimasen) is the Swiss Army knife. It means 'excuse me' (to get attention), 'sorry' (light apology), and even 'thank you' (for trouble someone took on your behalf). You'll use it constantly.",
            "When someone thanks you, reply <strong>どういたしまして</strong> (dō itashimashite, 'you're welcome') — or, very commonly, just a small bow and <em>いいえ</em> (iie, 'not at all').",
          ],
          keyPoint:
            "すみません = excuse me / sorry / thanks-for-the-trouble. ございます makes ありがとう polite. どういたしまして = you're welcome.",
        },
        {
          type: "vocab",
          heading: "Thanks and apologies",
          items: [
            { l1: "ありがとうございます", en: "thank you (polite)", note: "rōmaji: arigatō gozaimasu; casual: ありがとう" },
            { l1: "すみません", en: "excuse me / sorry / thanks", note: "rōmaji: sumimasen; multi-use" },
            { l1: "ごめんなさい", en: "I'm sorry (apology)", note: "rōmaji: gomen nasai; casual: ごめん" },
            { l1: "どういたしまして", en: "you're welcome", note: "rōmaji: dō itashimashite" },
            { l1: "いいえ", en: "no / not at all", note: "rōmaji: iie; a humble reply to thanks" },
            { l1: "だいじょうぶ", en: "it's fine / no problem", note: "rōmaji: daijōbu; also 'are you OK?'" },
          ],
        },
        {
          type: "dialogue",
          heading: "Dropped wallet on the train",
          setup: "A stranger taps your shoulder — you dropped your wallet.",
          lines: [
            { speaker: "Stranger", l1: "すみません、これ。", en: "Excuse me, this (is yours)." },
            { speaker: "You", l1: "あ、ありがとうございます！", en: "Oh, thank you so much!" },
            { speaker: "Stranger", l1: "いいえ。", en: "Not at all." },
            { speaker: "You", l1: "たすかりました。", en: "You really helped me out." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the right phrase",
          intro: "Fill in what fits the situation.",
          items: [
            {
              template: "(stepping past someone) ___",
              answer: "すみません",
              en: "Excuse me.",
              options: ["すみません", "おやすみなさい", "さようなら", "こんばんは"],
            },
            {
              template: "(someone thanks you) ___",
              answer: "どういたしまして",
              en: "You're welcome.",
              options: ["どういたしまして", "ありがとう", "ごめんなさい", "こんにちは"],
            },
            {
              template: "(thanking a clerk politely) ___",
              answer: "ありがとうございます",
              en: "Thank you.",
              options: ["ありがとうございます", "すみません", "いいえ", "またね"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me. Thank you very much.",
          reference: "すみません。ありがとうございます。",
          hint: "すみません to get attention, then the polite thank-you. rōmaji: sumimasen, arigatō gozaimasu",
        },
      ],
    },
    {
      slug: "greetings-introductions-bow",
      title: "Introductions and the bow",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Meeting someone — and the ojigi",
          body: [
            "When you meet someone for the first time, you open with <strong>はじめまして</strong> (hajimemashite, 'nice to meet you' / 'for the first time'). You give your name with <strong>…です</strong> ('I am…'), and close with <strong>よろしくおねがいします</strong> (yoroshiku onegaishimasu) — a set phrase roughly meaning 'please treat me well / I look forward to it'.",
            "Instead of a handshake, Japanese greetings come with a <strong>bow</strong> (お辞儀, ojigi). A small nod of the head works for casual hellos and thanks; a deeper bow from the waist shows more respect or stronger apology.",
            "You don't need to bow perfectly as a visitor — a sincere small bow is warmly received. Keep your back straight and bow from the hips, not the neck.",
          ],
          tip: {
            label: "Bow depth, roughly",
            body: "About 15° (a nod) for casual greetings, ~30° for thanks or meeting someone, ~45° for a deep apology or great respect. As a tourist, the 15–30° range covers almost everything.",
          },
        },
        {
          type: "vocab",
          heading: "Introduction phrases",
          items: [
            { l1: "はじめまして", en: "nice to meet you", note: "rōmaji: hajimemashite; lit. 'for the first time'" },
            { l1: "…です", en: "I am … / it is …", note: "rōmaji: … desu; e.g. トム です = 'I'm Tom'" },
            { l1: "よろしくおねがいします", en: "pleased to meet you / please treat me well", note: "rōmaji: yoroshiku onegaishimasu" },
            { l1: "おなまえは？", en: "what's your name?", note: "rōmaji: onamae wa?; lit. 'as for your name?'" },
            { l1: "おじぎ", en: "bow (the gesture)", note: "rōmaji: ojigi; written お辞儀 in kanji" },
            { l1: "アメリカ人", en: "American (person)", note: "rōmaji: amerika-jin; 人 (jin) = person" },
          ],
        },
        {
          type: "dialogue",
          heading: "First meeting, with bows",
          setup: "You're introduced to a colleague's friend. Each line ends with a small bow.",
          lines: [
            { speaker: "You", l1: "はじめまして。トム です。", en: "Nice to meet you. I'm Tom." },
            { speaker: "Yuki", l1: "はじめまして。ゆき です。", en: "Nice to meet you. I'm Yuki." },
            { speaker: "You", l1: "よろしくおねがいします。", en: "Pleased to meet you." },
            { speaker: "Yuki", l1: "こちらこそ、よろしくおねがいします。", en: "Likewise, pleased to meet you." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the introduction",
          intro: "Arrange the words to introduce yourself.",
          items: [
            { tokens: ["はじめまして", "トム", "です"], en: "Nice to meet you. I'm Tom." },
            { tokens: ["よろしく", "おねがいします"], en: "Pleased to meet you." },
            { tokens: ["わたし", "は", "アメリカ人", "です"], en: "I'm American." },
          ],
        },
        {
          type: "pronounce",
          heading: "Say the set phrases smoothly",
          intro: "These run together as chunks — practice the rhythm.",
          items: [
            { l1: "はじめまして", en: "nice to meet you", tip: "rōmaji: ha-ji-me-ma-shi-te" },
            { l1: "よろしくおねがいします", en: "pleased to meet you", tip: "rōmaji: yo-ro-shi-ku o-ne-gai-shi-ma-su" },
            { l1: "こちらこそ", en: "likewise / the pleasure is mine", tip: "rōmaji: kochira koso" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which phrase means 'nice to meet you'?",
              options: ["はじめまして", "さようなら", "おやすみなさい", "いただきます"],
              correct: 0,
            },
            {
              q: "How do you say 'I'm Tom'?",
              options: ["トム です", "トム は？", "トム ください", "トム ありがとう"],
              correct: 0,
            },
            {
              q: "As a tourist, a sincere small bow is…",
              options: [
                "an insult",
                "warmly received",
                "only for funerals",
                "required to be exactly 45°",
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
        q: "What do you say at 8 am to the hotel clerk?",
        options: ["こんばんは", "おはようございます", "さようなら", "おやすみなさい"],
        correct: 1,
      },
      {
        q: "こんにちは is used…",
        options: ["early morning", "midday / afternoon", "late at night", "only when leaving"],
        correct: 1,
      },
      {
        q: "The final は in こんばんは is read…",
        options: ["ha", "wa", "ba", "pa"],
        correct: 1,
      },
      {
        q: "Which word means 'excuse me / sorry / thanks for the trouble'?",
        options: ["ありがとう", "すみません", "さようなら", "はじめまして"],
        correct: 1,
      },
      {
        q: "Someone thanks you. A natural reply is…",
        options: ["どういたしまして", "おはよう", "ごめんなさい", "こんばんは"],
        correct: 0,
      },
      {
        q: "What does adding ございます to ありがとう do?",
        options: [
          "makes it casual",
          "makes it more polite",
          "turns it into a question",
          "changes its meaning to sorry",
        ],
        correct: 1,
      },
      {
        q: "Which phrase means 'nice to meet you'?",
        options: ["よろしくおねがいします", "はじめまして", "いってきます", "おやすみなさい"],
        correct: 1,
      },
      {
        q: "How do you say 'I'm Tom'?",
        options: ["トム です", "トム を ください", "トム は？", "トム すみません"],
        correct: 0,
      },
      {
        q: "Instead of a handshake, a Japanese greeting comes with…",
        options: ["a high five", "a bow (ojigi)", "a wave", "a kiss on the cheek"],
        correct: 1,
      },
      {
        q: "Translate: 'Excuse me. Thank you very much.'",
        options: [
          "すみません。ありがとうございます。",
          "こんにちは。さようなら。",
          "おはよう。おやすみ。",
          "はじめまして。です。",
        ],
        correct: 0,
      },
    ],
  },
};
