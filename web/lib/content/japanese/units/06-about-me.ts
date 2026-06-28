import type { Unit } from "../../types";

export const UNIT_ABOUT_ME: Unit = {
  slug: "about-me",
  stage: 2,
  order: 6,
  icon: "🪪",
  title: "About me",
  tagline: "Nationality, job, family, watashi & anata.",
  badge: "tourist",
  lessons: [
    {
      slug: "about-me-nationalities",
      title: "Nationalities & 〜じん",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Country + じん = nationality",
          body: [
            "To say someone's nationality, take the country name and add <strong>〜じん</strong> (jin), literally \"person.\" <em>アメリカ</em> (America) → <em>アメリカじん</em> (American person).",
            "Country and many foreign words are written in <strong>katakana</strong> — the angular script for loanwords: アメリカ, イギリス, フランス.",
            "Then it slots straight into the frame you know: <em>わたしは アメリカじんです</em> = \"I'm American.\"",
          ],
          keyPoint: "Country + じん = nationality. わたしは [country]じんです.",
        },
        {
          type: "vocab",
          heading: "Countries & nationalities",
          items: [
            { l1: "アメリカ", en: "America", note: "Amerika (katakana)" },
            { l1: "アメリカじん", en: "American (person)", note: "Amerika-jin" },
            { l1: "イギリス", en: "the UK / Britain", note: "Igirisu" },
            { l1: "イギリスじん", en: "British (person)", note: "Igirisu-jin" },
            { l1: "にほん", en: "Japan", note: "Nihon (にほん)" },
            { l1: "にほんじん", en: "Japanese (person)", note: "Nihon-jin (にほんじん)" },
            { l1: "ちゅうごく", en: "China", note: "Chūgoku (ちゅうごく)" },
            { l1: "ちゅうごくじん", en: "Chinese (person)", note: "Chūgoku-jin" },
            { l1: "〜じん", en: "person of (nationality)", note: "-jin, suffix" },
          ],
        },
        {
          type: "dialogue",
          heading: "Where are you from?",
          setup: "Chatting with a host at a Tokyo guesthouse.",
          lines: [
            { speaker: "Host", l1: "ケンさんは アメリカじんですか。", en: "Ken, are you American?" },
            { speaker: "You", l1: "はい、アメリカじんです。", en: "Yes, I'm American." },
            { speaker: "Host", l1: "ともだちも アメリカじんですか。", en: "Is your friend American too?" },
            { speaker: "You", l1: "いいえ、ともだちは イギリスじんです。", en: "No, my friend is British." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Make the nationality",
          intro: "Add じん or pick the right word.",
          items: [
            {
              template: "わたしは アメリカ ___ です。",
              answer: "じん",
              en: "I'm American.",
              options: ["じん", "の", "は", "か"],
            },
            {
              template: "やまださんは にほん ___ です。",
              answer: "じん",
              en: "Mr. Yamada is Japanese.",
              options: ["の", "じん", "です", "か"],
            },
            {
              template: "あなたは イギリスじん ___ 。",
              answer: "ですか",
              en: "Are you British?",
              options: ["です", "ですか", "じん", "の"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I am American.",
          reference: "わたしは アメリカじんです。",
          hint: "watashi wa Amerika-jin desu — country in katakana + じん.",
        },
      ],
    },
    {
      slug: "about-me-jobs",
      title: "Jobs & introductions",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying what you do",
          body: [
            "Job sentences use the same X は Y です frame: <em>わたしは エンジニアです</em> = \"I'm an engineer.\"",
            "When you formally introduce yourself, Japanese has a set ritual. You open with <strong>はじめまして</strong> (\"nice to meet you\" / \"how do you do\"), state your name and details, and close with <strong>どうぞ よろしく おねがいします</strong> (roughly \"please be kind to me\").",
            "Notice you don't say <em>あなた</em> much — use the person's name + <strong>さん</strong> instead. Never add さん to your own name.",
          ],
          keyPoint:
            "Self-intro: はじめまして → name & job です → どうぞ よろしく おねがいします.",
        },
        {
          type: "vocab",
          heading: "Jobs & intro phrases",
          items: [
            { l1: "エンジニア", en: "engineer", note: "enjinia (katakana)" },
            { l1: "いしゃ", en: "doctor", note: "isha (いしゃ)" },
            { l1: "かいしゃいん", en: "company employee", note: "kaishain (かいしゃいん)" },
            { l1: "がくせい", en: "student", note: "gakusei (がくせい)" },
            { l1: "しごと", en: "job / work", note: "shigoto (しごと)" },
            { l1: "はじめまして", en: "nice to meet you", note: "hajimemashite" },
            { l1: "どうぞ よろしく おねがいします", en: "pleased to meet you (set phrase)", note: "dōzo yoroshiku onegaishimasu" },
            { l1: "〜さん", en: "Mr./Ms. (after a name)", note: "-san; never use for yourself" },
          ],
        },
        {
          type: "dialogue",
          heading: "A proper introduction",
          setup: "First day at a Tokyo co-working space.",
          lines: [
            { speaker: "You", l1: "はじめまして。ケンです。", en: "Nice to meet you. I'm Ken." },
            { speaker: "You", l1: "わたしは エンジニアです。", en: "I'm an engineer." },
            { speaker: "You", l1: "どうぞ よろしく おねがいします。", en: "Pleased to meet you." },
            { speaker: "Aoi", l1: "あおいです。いしゃです。よろしく おねがいします。", en: "I'm Aoi. I'm a doctor. Nice to meet you." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the introduction",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["わたしは", "エンジニア", "です"], en: "I'm an engineer." },
            { tokens: ["あおいさんは", "いしゃ", "です", "か"], en: "Is Aoi a doctor?" },
            { tokens: ["どうぞ", "よろしく", "おねがいします"], en: "Pleased to meet you." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Nice to meet you. I'm an engineer.",
          reference: "はじめまして。わたしは エンジニアです。",
          hint: "hajimemashite — then watashi wa enjinia desu.",
        },
      ],
    },
    {
      slug: "about-me-family",
      title: "Family (かぞく) & people words",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Talking about family",
          body: [
            "Japanese has two sets of family words: humble ones for <em>your own</em> family and polite ones for <em>someone else's</em>. For now we focus on the everyday humble set used when talking about your own family.",
            "<strong>かぞく</strong> = family. <em>ちち</em> = (my) father, <em>はは</em> = (my) mother. When asking about someone else's parent, you'd politely say <em>おとうさん</em> / <em>おかあさん</em>.",
            "Remember to use names + <strong>さん</strong> for other people, drop <em>あなた</em> when you can, and never attach さん to yourself.",
          ],
          keyPoint:
            "Your own family = humble words (ちち, はは). Someone else's = polite (おとうさん, おかあさん).",
        },
        {
          type: "vocab",
          heading: "Family terms",
          items: [
            { l1: "かぞく", en: "family", note: "kazoku (かぞく)" },
            { l1: "ちち", en: "(my) father", note: "chichi (ちち) — humble, own father" },
            { l1: "はは", en: "(my) mother", note: "haha (はは) — humble, own mother" },
            { l1: "おとうさん", en: "(someone's) father", note: "otōsan — polite" },
            { l1: "おかあさん", en: "(someone's) mother", note: "okāsan — polite" },
            { l1: "あに", en: "(my) older brother", note: "ani (あに)" },
            { l1: "あね", en: "(my) older sister", note: "ane (あね)" },
            { l1: "わたし", en: "I / me", note: "watashi" },
            { l1: "あなた", en: "you", note: "anata — often dropped; prefer name + さん" },
          ],
        },
        {
          type: "dialogue",
          heading: "Is this your family?",
          setup: "Showing a photo at a tea house in Asakusa.",
          lines: [
            { speaker: "Aoi", l1: "ケンさんの かぞくですか。", en: "Is this your family, Ken?" },
            { speaker: "You", l1: "はい。これは ちちと ははです。", en: "Yes. This is my father and mother." },
            { speaker: "Aoi", l1: "おとうさんは せんせいですか。", en: "Is your father a teacher?" },
            { speaker: "You", l1: "いいえ、ちちは いしゃです。", en: "No, my father is a doctor." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Whose family word?",
          questions: [
            {
              q: "Which word do you use for YOUR OWN mother?",
              options: ["おかあさん", "はは", "おとうさん", "あね"],
              correct: 1,
              fb: "はは (haha) is the humble word for your own mother.",
            },
            {
              q: "Asking about someone else's father, you say…",
              options: ["ちち", "あに", "おとうさん", "かぞく"],
              correct: 2,
              fb: "おとうさん (otōsan) is the polite word for another person's father.",
            },
            {
              q: "You should never add さん to…",
              options: ["a friend's name", "your own name", "a teacher's name", "Mr. Yamada"],
              correct: 1,
              fb: "Never attach さん to your own name — it's self-honorific.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "My father is a doctor.",
          reference: "ちちは いしゃです。",
          hint: "chichi wa isha desu — use ちち for your own father.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which means 'American (person)'?",
              options: ["アメリカ", "アメリカじん", "にほんじん", "アメリカの"],
              correct: 1,
            },
            {
              q: "Translate: 'My father is a doctor.'",
              options: [
                "ちちは いしゃです。",
                "おとうさんは いしゃです。",
                "はは いしゃです。",
                "ちちの いしゃです。",
              ],
              correct: 0,
            },
            {
              q: "How do you start a formal self-introduction?",
              options: ["どうぞ", "はじめまして", "さようなら", "そうです"],
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
        q: "How do you form a nationality?",
        options: ["country + さん", "country + じん", "country + の", "country + です"],
        correct: 1,
      },
      {
        q: "Translate: 'I'm Japanese.'",
        options: [
          "わたしは にほんです。",
          "わたしは にほんじんです。",
          "わたしの にほんじんです。",
          "にほんじんは わたしか。",
        ],
        correct: 1,
      },
      {
        q: "Which script are country names like アメリカ written in?",
        options: ["hiragana", "katakana", "rōmaji", "kanji only"],
        correct: 1,
      },
      {
        q: "Translate: 'I'm an engineer.'",
        options: [
          "わたしは エンジニアです。",
          "わたしの エンジニアです。",
          "エンジニアは わたしか。",
          "わたしは エンジニアじん。",
        ],
        correct: 0,
      },
      {
        q: "What does はじめまして mean?",
        options: ["goodbye", "thank you", "nice to meet you", "you're welcome"],
        correct: 2,
      },
      {
        q: "Which closes a self-introduction?",
        options: [
          "そうです",
          "どうぞ よろしく おねがいします",
          "いいえ",
          "ですか",
        ],
        correct: 1,
      },
      {
        q: "Which word is for YOUR OWN mother?",
        options: ["おかあさん", "はは", "あね", "かぞく"],
        correct: 1,
      },
      {
        q: "When asking about someone else's father, use…",
        options: ["ちち", "おとうさん", "あに", "かぞく"],
        correct: 1,
      },
      {
        q: "You should never add さん to…",
        options: ["a friend's name", "your boss's name", "your own name", "a stranger's name"],
        correct: 2,
      },
      {
        q: "Translate: 'Is your friend American?'",
        options: [
          "ともだちは アメリカじんですか。",
          "ともだちの アメリカじんです。",
          "アメリカじんは ともだちか。",
          "ともだちは アメリカじんです。",
        ],
        correct: 0,
      },
    ],
  },
};
