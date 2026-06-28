import type { Unit } from "../../types";

export const UNIT_KATAKANA: Unit = {
  slug: "katakana",
  stage: 1,
  order: 2,
  icon: "🔡",
  title: "Katakana",
  tagline: "Katakana for loanwords — コーヒー, ホテル, タクシー.",
  badge: "core",
  lessons: [
    {
      slug: "katakana-basics",
      title: "Katakana basics — and when it's used",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The second script — same sounds, sharper shapes",
          body: [
            "Katakana represents the <strong>exact same syllables</strong> as hiragana — ア is 'a', カ is 'ka', サ is 'sa'. Same a-i-u-e-o order, same rows. Only the shapes differ: katakana is angular and blocky where hiragana is curvy.",
            "So why have two? Katakana is the script for things that come from <strong>outside Japanese</strong>: foreign loanwords (コーヒー coffee, ホテル hotel), foreign names (トム = Tom), brand names, and sometimes emphasis — like italics in English.",
            "For a traveler in Tokyo this is gold. Menus, signs, and conventions are full of katakana versions of English words you already know. Learn to read it and half the menu decodes itself.",
          ],
          tip: {
            label: "Why it helps tourists",
            body: "Loanwords are 'English wearing a kimono'. Once you can sound out katakana, コーヒー reads as <em>kōhī</em> (coffee) and ビール as <em>bīru</em> (beer). You're reading words you already know.",
          },
        },
        {
          type: "pronounce",
          heading: "Vowels and the k / s rows",
          intro: "Compare each to the hiragana you already learned.",
          items: [
            { l1: "ア", en: "a", tip: "rōmaji: a — katakana, like hiragana あ" },
            { l1: "イ", en: "i", tip: "rōmaji: i" },
            { l1: "ウ", en: "u", tip: "rōmaji: u" },
            { l1: "エ", en: "e", tip: "rōmaji: e" },
            { l1: "オ", en: "o", tip: "rōmaji: o" },
            { l1: "カ", en: "ka", tip: "rōmaji: ka" },
            { l1: "キ", en: "ki", tip: "rōmaji: ki" },
            { l1: "ク", en: "ku", tip: "rōmaji: ku" },
            { l1: "ケ", en: "ke", tip: "rōmaji: ke" },
            { l1: "コ", en: "ko", tip: "rōmaji: ko" },
            { l1: "サ", en: "sa", tip: "rōmaji: sa" },
            { l1: "シ", en: "shi", tip: "rōmaji: shi — careful: looks like ツ (tsu)" },
            { l1: "ス", en: "su", tip: "rōmaji: su" },
            { l1: "セ", en: "se", tip: "rōmaji: se" },
            { l1: "ソ", en: "so", tip: "rōmaji: so — careful: looks like ン (n)" },
          ],
        },
        {
          type: "pronounce",
          heading: "More rows you'll meet on signs",
          items: [
            { l1: "タ", en: "ta", tip: "rōmaji: ta" },
            { l1: "テ", en: "te", tip: "rōmaji: te" },
            { l1: "ト", en: "to", tip: "rōmaji: to" },
            { l1: "ナ", en: "na", tip: "rōmaji: na" },
            { l1: "ニ", en: "ni", tip: "rōmaji: ni" },
            { l1: "ハ", en: "ha", tip: "rōmaji: ha" },
            { l1: "ヒ", en: "hi", tip: "rōmaji: hi" },
            { l1: "ホ", en: "ho", tip: "rōmaji: ho" },
            { l1: "マ", en: "ma", tip: "rōmaji: ma" },
            { l1: "ル", en: "ru", tip: "rōmaji: ru" },
            { l1: "レ", en: "re", tip: "rōmaji: re" },
            { l1: "ン", en: "n", tip: "rōmaji: n — careful: looks like ソ (so)" },
          ],
        },
        {
          type: "tip",
          heading: "The four look-alikes",
          body: "Two pairs trip up every beginner. <strong>シ (shi)</strong> vs <strong>ツ (tsu)</strong>: シ's strokes come in low and flat, ツ's come down from the top. <strong>ソ (so)</strong> vs <strong>ン (n)</strong>: ソ's stroke drops from the top, ン's sweeps up from the bottom. Slow down on these.",
          example: { l1: "シ vs ツ / ソ vs ン", en: "shi vs tsu / so vs n — the angle of the short stroke decides" },
        },
        {
          type: "multipleChoice",
          heading: "Read the katakana",
          questions: [
            {
              q: "Which katakana is 'ka'?",
              options: ["カ", "ケ", "ク", "コ"],
              correct: 0,
              fb: "カ = ka, the same first sound as hiragana か.",
            },
            {
              q: "When is katakana used instead of hiragana?",
              options: [
                "For native Japanese grammar words",
                "For foreign loanwords, foreign names, and emphasis",
                "Only for numbers",
                "Only in handwriting",
              ],
              correct: 1,
              fb: "Katakana flags borrowed words, foreign names, brands, and emphasis.",
            },
            {
              q: "Which pair is famously hard to tell apart?",
              options: ["ア and オ", "シ and ツ", "カ and ナ", "ホ and ト"],
              correct: 1,
              fb: "シ (shi) and ツ (tsu) differ only in stroke direction.",
            },
          ],
        },
      ],
    },
    {
      slug: "katakana-long-vowel-small-tsu",
      title: "The long vowel ー and small ッ",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Two marks that shape loanwords",
          body: [
            "Katakana has its own way of stretching and stopping sounds. The <strong>long-vowel mark ー</strong> (a single dash, horizontal in horizontal text) doubles the length of the vowel before it. コーヒー is <em>kō-hī</em> — that ー after コ holds the 'o' longer.",
            "The <strong>small ッ</strong> (a miniature ツ) marks a brief pause — a doubled consonant. ベッド is <em>beddo</em> (bed): the small ッ stops the sound before the ド. You hold your breath for one beat.",
            "These two marks are everywhere in loanwords because they're how Japanese fits English rhythm into Japanese syllables.",
          ],
          keyPoint:
            "ー lengthens the previous vowel (コーヒー = kōhī). Small ッ adds a one-beat pause / doubled consonant (ベッド = beddo).",
        },
        {
          type: "pronounce",
          heading: "Hear the long vowel ー",
          items: [
            { l1: "コーヒー", en: "coffee", tip: "rōmaji: kōhī — ー lengthens both the ko and the hi" },
            { l1: "ケーキ", en: "cake", tip: "rōmaji: kēki" },
            { l1: "カード", en: "card", tip: "rōmaji: kādo" },
            { l1: "メニュー", en: "menu", tip: "rōmaji: menyū" },
            { l1: "タクシー", en: "taxi", tip: "rōmaji: takushī" },
          ],
        },
        {
          type: "pronounce",
          heading: "Hear the small ッ pause",
          items: [
            { l1: "ベッド", en: "bed", tip: "rōmaji: beddo — small ッ doubles the d" },
            { l1: "コップ", en: "cup / glass", tip: "rōmaji: koppu" },
            { l1: "サッカー", en: "soccer", tip: "rōmaji: sakkā — both small ッ and long ー" },
            { l1: "チケット", en: "ticket", tip: "rōmaji: chiketto" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Add the missing mark",
          intro: "Pick the mark that makes the loanword sound right.",
          items: [
            {
              template: "コ___ヒー (coffee)",
              answer: "ー",
              en: "kōhī — lengthen the 'ko'",
              options: ["ー", "ッ", "ン", "ツ"],
            },
            {
              template: "ベ___ド (bed)",
              answer: "ッ",
              en: "beddo — pause before the 'do'",
              options: ["ッ", "ー", "ツ", "ン"],
            },
            {
              template: "タクシ___ (taxi)",
              answer: "ー",
              en: "takushī — lengthen the final 'shi'",
              options: ["ー", "ッ", "イ", "ン"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "What does the mark do?",
          questions: [
            {
              q: "What does ー do in コーヒー?",
              options: [
                "Adds an 'r' sound",
                "Lengthens the vowel before it",
                "Marks a pause",
                "Voices the consonant",
              ],
              correct: 1,
              fb: "ー doubles the length of the preceding vowel: ko → kō.",
            },
            {
              q: "What does the small ッ in ベッド signal?",
              options: [
                "A long vowel",
                "A one-beat pause / doubled consonant",
                "A foreign name",
                "Emphasis",
              ],
              correct: 1,
              fb: "Small ッ is a brief stop, doubling the next consonant: beddo.",
            },
            {
              q: "How many beats long is コーヒー roughly?",
              options: ["2", "4", "1", "6"],
              correct: 1,
              fb: "ko-(ō)-hi-(ī) → four beats, because each ー adds a beat.",
            },
          ],
        },
      ],
    },
    {
      slug: "katakana-real-loanwords",
      title: "Reading real loanwords",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Decode the Tokyo menu",
          body: [
            "You now have everything you need to read the katakana you'll actually see in a Tokyo café, convenience store, or station. Loanwords follow patterns: English sounds get padded with vowels (milk → ミルク miruku) and the long ー and small ッ shape the rhythm.",
            "Read each word out loud, then notice the English hiding inside. Once your eye catches the pattern, signs everywhere become readable.",
          ],
          tip: {
            label: "The vowel-padding trick",
            body: "Japanese syllables almost always end in a vowel, so English words get extra vowels: 'beer' → <em>bīru</em>, 'restaurant' → <em>resutoran</em>. Hear the original word through the padding.",
          },
        },
        {
          type: "vocab",
          heading: "Café and restaurant katakana",
          intro: "Read the l1 aloud, then check the rōmaji in the note.",
          items: [
            { l1: "コーヒー", en: "coffee", note: "rōmaji: kōhī; katakana loanword" },
            { l1: "ビール", en: "beer", note: "rōmaji: bīru; katakana loanword" },
            { l1: "レストラン", en: "restaurant", note: "rōmaji: resutoran; katakana loanword" },
            { l1: "タクシー", en: "taxi", note: "rōmaji: takushī; katakana loanword" },
            { l1: "ホテル", en: "hotel", note: "rōmaji: hoteru; katakana loanword" },
            { l1: "メニュー", en: "menu", note: "rōmaji: menyū; uses small ュ (yōon)" },
            { l1: "ジュース", en: "juice", note: "rōmaji: jūsu; katakana loanword" },
            { l1: "パン", en: "bread", note: "rōmaji: pan; from Portuguese 'pão', written in katakana" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering at a Tokyo café",
          setup: "You read the katakana on the menu and order in simple Japanese.",
          lines: [
            { speaker: "Staff", l1: "いらっしゃいませ。", en: "Welcome." },
            { speaker: "You", l1: "コーヒー を ください。", en: "A coffee, please." },
            { speaker: "Staff", l1: "アイス と ホット、どちら ですか。", en: "Iced or hot, which would you like?" },
            { speaker: "You", l1: "ホット を おねがいします。", en: "Hot, please." },
            { speaker: "Staff", l1: "かしこまりました。", en: "Certainly." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the order",
          intro: "Arrange the words into a polite request.",
          items: [
            { tokens: ["ビール", "を", "ください"], en: "A beer, please." },
            { tokens: ["コーヒー", "を", "おねがいします"], en: "A coffee, please." },
            { tokens: ["メニュー", "を", "ください"], en: "The menu, please." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "A coffee, please.",
          reference: "コーヒー を ください。",
          hint: "Object marker を + ください ('please give'). rōmaji: kōhī o kudasai",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "What does ビール mean?",
              qL1: "ビール",
              options: ["bill", "beer", "veal", "ball"],
              correct: 1,
            },
            {
              q: "Read レストラン.",
              qL1: "レストラン",
              options: ["restaurant", "register", "lesson", "restroom"],
              correct: 0,
            },
            {
              q: "Translate: 'A coffee, please.'",
              options: [
                "コーヒー を ください。",
                "ビール を ください。",
                "コーヒー です か。",
                "ホテル を ください。",
              ],
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
        q: "Katakana represents…",
        options: [
          "different sounds from hiragana",
          "the same sounds as hiragana, in angular shapes",
          "only numbers",
          "only kanji readings",
        ],
        correct: 1,
      },
      {
        q: "Katakana is mainly used for…",
        options: [
          "native grammar words",
          "foreign loanwords, foreign names, and emphasis",
          "verb endings",
          "polite speech only",
        ],
        correct: 1,
      },
      {
        q: "Which two katakana are famously easy to confuse?",
        options: ["ア and オ", "シ and ツ", "ホ and ト", "カ and サ"],
        correct: 1,
      },
      {
        q: "What does the mark ー do?",
        options: [
          "marks a pause",
          "lengthens the vowel before it",
          "adds an 'r'",
          "voices the consonant",
        ],
        correct: 1,
      },
      {
        q: "What does a small ッ signal?",
        options: [
          "a long vowel",
          "a one-beat pause / doubled consonant",
          "a question",
          "emphasis",
        ],
        correct: 1,
      },
      {
        q: "Read コーヒー.",
        qL1: "コーヒー",
        options: ["coffee", "copy", "corner", "cocoa"],
        correct: 0,
      },
      {
        q: "Read ホテル.",
        qL1: "ホテル",
        options: ["hostel", "hotel", "hotter", "bottle"],
        correct: 1,
      },
      {
        q: "Read タクシー.",
        qL1: "タクシー",
        options: ["taxi", "tax", "tactic", "tacky"],
        correct: 0,
      },
      {
        q: "Why does English 'beer' become ビール (bīru)?",
        options: [
          "It's a spelling error",
          "Japanese pads syllables with vowels and lengthens with ー",
          "It's actually a native word",
          "Katakana removes vowels",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'A coffee, please.'",
        options: [
          "コーヒー を ください。",
          "ホテル を ください。",
          "ビール です か。",
          "タクシー を ください。",
        ],
        correct: 0,
      },
    ],
  },
};
