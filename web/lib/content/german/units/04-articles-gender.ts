import type { Unit } from "../../types";

export const UNIT_ARTICLES_GENDER: Unit = {
  slug: "articles-gender",
  stage: 1,
  order: 4,
  icon: "📚",
  title: "Gender, articles & plurals",
  tagline: "der/die/das, ein/eine — the three genders and plurals.",
  badge: "core",
  lessons: [
    {
      slug: "articles-gender-der-die-das",
      title: "Three genders & der/die/das",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Every German noun has a gender",
          body: [
            "German nouns are <strong>masculine</strong>, <strong>feminine</strong>, or <strong>neuter</strong>, and the word for 'the' changes to match: <strong>der</strong> (masculine), <strong>die</strong> (feminine), <strong>das</strong> (neuter). This is the <em>nominative</em> — the form for the subject of a sentence.",
            "Gender is mostly <em>grammatical</em>, not logical: <em>das Mädchen</em> ('the girl') is neuter, and <em>der Löffel</em> ('the spoon') is masculine. Because you can't always reason it out, the golden rule is to <strong>learn every noun together with its article</strong> — not <em>Tisch</em> but <em>der Tisch</em>.",
            "Two more anchors for now: all German nouns are <strong>capitalised</strong>, always. And in the plural, all three genders share one article — <strong>die</strong> — which you'll meet in lesson 3.",
          ],
          keyPoint: "Learn the article WITH the noun: der Tisch, die Lampe, das Buch.",
        },
        {
          type: "vocab",
          heading: "Common nouns by gender",
          intro: "Notice the article each time — that IS the gender.",
          items: [
            { l1: "der Tisch", en: "the table", note: "der Tisch, -e (m.)" },
            { l1: "der Stuhl", en: "the chair", note: "der Stuhl, ⸚e (m.) — umlaut plural: Stühle" },
            { l1: "der Mann", en: "the man", note: "der Mann, ⸚er (m.) — Männer" },
            { l1: "die Lampe", en: "the lamp", note: "die Lampe, -n (f.)" },
            { l1: "die Frau", en: "the woman", note: "die Frau, -en (f.)" },
            { l1: "die Tür", en: "the door", note: "die Tür, -en (f.)" },
            { l1: "das Buch", en: "the book", note: "das Buch, ⸚er (n.) — Bücher" },
            { l1: "das Fenster", en: "the window", note: "das Fenster, - (n.) — no change in plural" },
            { l1: "das Mädchen", en: "the girl", note: "das Mädchen (n.) — -chen is always neuter" },
          ],
        },
        {
          type: "conjugation",
          heading: "The definite article (nominative)",
          verb: "der / die / das",
          meaning: "the",
          intro: "One word, three genders, plus a shared plural.",
          tenses: [
            {
              name: "'the' by gender (nominative)",
              forms: [
                { person: "masculine", form: "der", en: "der Mann (the man)" },
                { person: "feminine", form: "die", en: "die Frau (the woman)" },
                { person: "neuter", form: "das", en: "das Kind (the child)" },
                { person: "plural (all genders)", form: "die", en: "die Kinder (the children)" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which article?",
          questions: [
            {
              q: "Which article goes with 'Buch' (book)?",
              options: ["der", "die", "das", "den"],
              correct: 2,
              fb: "das Buch — neuter.",
            },
            {
              q: "Which article goes with 'Frau' (woman)?",
              options: ["der", "die", "das", "dem"],
              correct: 1,
              fb: "die Frau — feminine.",
            },
            {
              q: "'das Mädchen' is neuter even though it means 'the girl'. Why?",
              options: [
                "It's a mistake",
                "The -chen ending makes any noun neuter",
                "All people are neuter",
                "It's actually feminine",
              ],
              correct: 1,
              fb: "Nouns ending in -chen (and -lein) are always neuter, regardless of meaning.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The man, the woman, and the book.",
          reference: "Der Mann, die Frau und das Buch.",
          hint: "der (m.), die (f.), das (n.). All nouns capitalised.",
        },
      ],
    },
    {
      slug: "articles-gender-ein-eine-kein",
      title: "ein / eine and the negative kein",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "'a/an' and 'no/not a'",
          body: [
            "The indefinite article ('a/an') mirrors the gender: <strong>ein</strong> for masculine and neuter, <strong>eine</strong> for feminine. So <em>ein Tisch</em> (a table), <em>ein Buch</em> (a book), <em>eine Lampe</em> (a lamp).",
            "To say 'no' / 'not a/any', add a <strong>k-</strong>: <strong>kein</strong> (m./n.) and <strong>keine</strong> (f.). It's the standard way to negate a noun. <em>Ich habe kein Geld</em> = 'I have no money.' <em>Das ist keine Lampe</em> = 'That's not a lamp.'",
            "Unlike English, <strong>kein</strong> has a plural form too — <strong>keine</strong> for all genders: <em>Ich habe keine Bücher</em> = 'I have no books.' (There is no plural of <em>ein</em>, just as English has no plural 'a'.)",
          ],
          keyPoint: "ein (m./n.), eine (f.). Negate with kein/keine — and keine in the plural.",
        },
        {
          type: "conjugation",
          heading: "ein / eine / kein at a glance",
          verb: "ein / kein",
          meaning: "a / no",
          intro: "Same endings for the positive (ein-) and negative (kein-).",
          tenses: [
            {
              name: "'a/an' (nominative)",
              forms: [
                { person: "masculine", form: "ein", en: "ein Tisch (a table)" },
                { person: "feminine", form: "eine", en: "eine Lampe (a lamp)" },
                { person: "neuter", form: "ein", en: "ein Buch (a book)" },
                { person: "plural", form: "— (no plural)", en: "Tische (tables)" },
              ],
            },
            {
              name: "'no / not a' (nominative)",
              forms: [
                { person: "masculine", form: "kein", en: "kein Tisch (no table)" },
                { person: "feminine", form: "keine", en: "keine Lampe (no lamp)" },
                { person: "neuter", form: "kein", en: "kein Buch (no book)" },
                { person: "plural", form: "keine", en: "keine Bücher (no books)" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "ein or eine?",
          intro: "Match the indefinite article to the noun's gender.",
          items: [
            { template: "Das ist ___ Tisch.", answer: "ein", en: "That is a table.", options: ["ein", "eine"] },
            { template: "Das ist ___ Lampe.", answer: "eine", en: "That is a lamp.", options: ["ein", "eine"] },
            { template: "Ich habe ___ Buch.", answer: "ein", en: "I have a book.", options: ["ein", "eine"] },
            { template: "Hier ist ___ Tür.", answer: "eine", en: "Here is a door.", options: ["ein", "eine"] },
          ],
        },
        {
          type: "fillBlank",
          heading: "Negate it with kein/keine",
          intro: "Choose kein or keine to negate the noun.",
          items: [
            { template: "Ich habe ___ Geld.", answer: "kein", en: "I have no money.", options: ["kein", "keine"] },
            { template: "Das ist ___ Lampe.", answer: "keine", en: "That's not a lamp.", options: ["kein", "keine"] },
            { template: "Wir haben ___ Bücher.", answer: "keine", en: "We have no books.", options: ["kein", "keine"] },
            { template: "Er hat ___ Auto.", answer: "kein", en: "He has no car.", options: ["kein", "keine"] },
          ],
        },
        {
          type: "dialogue",
          heading: "At the flea market on Mauerpark",
          setup: "You're browsing a Sunday flea market stall in Berlin.",
          lines: [
            { speaker: "Du", l1: "Haben Sie eine Lampe?", en: "Do you have a lamp?" },
            { speaker: "Händler", l1: "Nein, ich habe keine Lampe. Aber ich habe einen Tisch.", en: "No, I have no lamp. But I have a table." },
            { speaker: "Du", l1: "Und ein Buch?", en: "And a book?" },
            { speaker: "Händler", l1: "Bücher? Nein, hier gibt es keine Bücher.", en: "Books? No, there are no books here." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I have a book, but I have no lamp.",
          reference: "Ich habe ein Buch, aber ich habe keine Lampe.",
          hint: "ein Buch (n.), keine Lampe (f., negated).",
        },
      ],
    },
    {
      slug: "articles-gender-plurals",
      title: "Plural patterns & gender hints",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Five ways to make a plural",
          body: [
            "German plurals don't just add '-s'. There are five main patterns, and which one a noun takes is part of what you memorise with the word. The big five:",
            "<strong>-e</strong> (often with an umlaut): <em>der Tisch → die Tische</em>, <em>der Stuhl → die Stühle</em>. <strong>-(e)n</strong>: <em>die Lampe → die Lampen</em>, <em>die Frau → die Frauen</em>. <strong>-er</strong> (usually with umlaut): <em>das Buch → die Bücher</em>, <em>der Mann → die Männer</em>.",
            "<strong>-s</strong> (mostly foreign/borrowed words): <em>das Auto → die Autos</em>, <em>das Hotel → die Hotels</em>. And <strong>no change</strong> (often for words in -er, -en, -el): <em>das Fenster → die Fenster</em>.",
            "The one constant: <strong>every plural takes the article <em>die</em></strong>, whatever the noun's singular gender. <em>der Mann</em> but <em>die Männer</em>; <em>das Buch</em> but <em>die Bücher</em>.",
          ],
          keyPoint: "Every plural uses 'die'. Learn the plural form with the noun — it's not predictable.",
        },
        {
          type: "tip",
          heading: "Guessing a noun's gender (heuristics, not laws)",
          body: "You can't be sure, but the odds help. <strong>Feminine</strong>: most nouns in <em>-e</em> (die Lampe, die Blume), and all in <em>-ung, -heit, -keit, -schaft, -ion</em> (die Zeitung, die Freiheit). <strong>Masculine</strong>: most in <em>-er</em> for people/tools (der Lehrer), days, months and seasons (der Montag). <strong>Neuter</strong>: all diminutives in <em>-chen / -lein</em> (das Mädchen), and most in <em>-um</em> (das Museum). Treat these as bets, not rules — and still learn the article each time.",
          example: { l1: "die Zeitung, die Freiheit, das Mädchen, der Montag", en: "the newspaper, the freedom, the girl, the Monday" },
        },
        {
          type: "vocab",
          heading: "Singular → plural",
          intro: "See each plural pattern in action. The note shows the pattern.",
          items: [
            { l1: "der Tisch → die Tische", en: "table → tables", note: "-e plural" },
            { l1: "der Stuhl → die Stühle", en: "chair → chairs", note: "-e plural + umlaut" },
            { l1: "die Lampe → die Lampen", en: "lamp → lamps", note: "-n plural" },
            { l1: "die Frau → die Frauen", en: "woman → women", note: "-en plural" },
            { l1: "das Buch → die Bücher", en: "book → books", note: "-er plural + umlaut" },
            { l1: "der Mann → die Männer", en: "man → men", note: "-er plural + umlaut" },
            { l1: "das Auto → die Autos", en: "car → cars", note: "-s plural (foreign word)" },
            { l1: "das Fenster → die Fenster", en: "window → windows", note: "no change" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Give the plural",
          intro: "Type the plural form (with its article, die).",
          items: [
            { template: "der Tisch → ___", answer: "die Tische", en: "the tables" },
            { template: "die Lampe → ___", answer: "die Lampen", en: "the lamps" },
            { template: "das Buch → ___", answer: "die Bücher", en: "the books" },
            { template: "das Auto → ___", answer: "die Autos", en: "the cars" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["Die", "Bücher", "sind", "hier"], en: "The books are here." },
            { tokens: ["Wir", "haben", "zwei", "Stühle"], en: "We have two chairs." },
            { tokens: ["Die", "Fenster", "sind", "offen"], en: "The windows are open." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Plural & gender check",
          questions: [
            {
              q: "What's the plural of 'das Buch'?",
              options: ["die Buchen", "die Büchers", "die Bücher", "die Buchs"],
              correct: 2,
              fb: "das Buch → die Bücher (-er plural with umlaut).",
            },
            {
              q: "Which article do ALL plurals use in the nominative?",
              options: ["der", "die", "das", "den"],
              correct: 1,
              fb: "Every plural takes die, regardless of singular gender.",
            },
            {
              q: "A noun ending in -ung (e.g. Zeitung) is most likely…",
              options: ["masculine", "feminine", "neuter", "always plural"],
              correct: 1,
              fb: "Nouns in -ung, -heit, -keit, -ion are feminine: die Zeitung.",
            },
            {
              q: "Which noun is most likely to take an '-s' plural?",
              options: ["der Stuhl", "das Auto", "die Frau", "der Mann"],
              correct: 1,
              fb: "The -s plural is for mostly foreign/borrowed words: das Auto → die Autos.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The books and the chairs are here.",
          reference: "Die Bücher und die Stühle sind hier.",
          hint: "Both are plural → die. Buch → Bücher, Stuhl → Stühle.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "The plural of 'der Mann' is…",
              options: ["die Manns", "die Männer", "die Mannen", "die Männe"],
              correct: 1,
            },
            {
              q: "All German plurals take which article (nominative)?",
              options: ["der", "das", "die", "ein"],
              correct: 2,
            },
            {
              q: "Nouns ending in -chen (like Mädchen) are always…",
              options: ["masculine", "feminine", "neuter", "plural"],
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
        q: "Which article is feminine in the nominative?",
        options: ["der", "die", "das", "den"],
        correct: 1,
      },
      {
        q: "Which article goes with 'Buch' (book)?",
        options: ["der", "die", "das", "dem"],
        correct: 2,
      },
      {
        q: "'a lamp' (die Lampe is feminine) is…",
        options: ["ein Lampe", "eine Lampe", "einen Lampe", "das Lampe"],
        correct: 1,
      },
      {
        q: "'a table' (der Tisch is masculine) is…",
        options: ["eine Tisch", "ein Tisch", "einen Tisch", "die Tisch"],
        correct: 1,
      },
      {
        q: "How do you say 'I have no money' (das Geld)?",
        options: ["Ich habe keine Geld.", "Ich habe kein Geld.", "Ich habe nicht Geld.", "Ich habe ein Geld."],
        correct: 1,
      },
      {
        q: "Which article do ALL plurals use in the nominative?",
        options: ["der", "die", "das", "ein"],
        correct: 1,
      },
      {
        q: "The plural of 'das Buch' is…",
        options: ["die Buchs", "die Bücher", "die Buchen", "die Büchers"],
        correct: 1,
      },
      {
        q: "The plural of 'die Lampe' is…",
        options: ["die Lampes", "die Lampen", "die Lämpe", "die Lamper"],
        correct: 1,
      },
      {
        q: "A noun ending in -chen (like Mädchen) is always…",
        options: ["masculine", "feminine", "neuter", "plural"],
        correct: 2,
      },
      {
        q: "Nouns ending in -ung, -heit, -keit are usually…",
        options: ["masculine", "feminine", "neuter", "no rule"],
        correct: 1,
      },
    ],
  },
};
