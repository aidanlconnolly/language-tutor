import type { Unit } from "../../types";

export const UNIT_SEIN_HABEN: Unit = {
  slug: "sein-haben",
  stage: 1,
  order: 5,
  icon: "🧱",
  title: "Sein, haben & present tense",
  tagline: "The two pillars, plus regular -en verb endings.",
  badge: "core",
  lessons: [
    {
      slug: "sein-haben-sein",
      title: "Sein — the verb 'to be'",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Sein holds up the language",
          body: [
            "<strong>Sein</strong> means <em>to be</em>. It's the single most important verb in German, and like its English cousin it's wildly irregular — you simply memorize it.",
            "Unlike Italian or Spanish, German almost always keeps the subject pronoun: you say <em>ich bin</em>, not just <em>bin</em>. The pronoun and the verb travel together.",
            "German has three words for <em>you</em>: <strong>du</strong> (one person, informal), <strong>ihr</strong> (several people, informal), and <strong>Sie</strong> (formal, always capitalized, singular or plural).",
          ],
          keyPoint:
            "Sein = to be. Learn it cold: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.",
        },
        {
          type: "conjugation",
          heading: "Sein — to be",
          verb: "sein",
          meaning: "to be",
          tenses: [
            {
              name: "Präsens (present)",
              forms: [
                { person: "ich", form: "bin", en: "I am" },
                { person: "du", form: "bist", en: "you are (one person, informal)" },
                { person: "er/sie/es", form: "ist", en: "he/she/it is" },
                { person: "wir", form: "sind", en: "we are" },
                { person: "ihr", form: "seid", en: "you are (several, informal)" },
                { person: "sie/Sie", form: "sind", en: "they are / you are (formal)" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "sie, sie, and Sie",
          body: "Three look-alikes share the word <strong>sie</strong>. Lowercase <em>sie</em> + <em>ist</em> = <strong>she</strong>. Lowercase <em>sie</em> + <em>sind</em> = <strong>they</strong>. Capitalized <em>Sie</em> + <em>sind</em> = formal <strong>you</strong>. The verb and the capital letter tell them apart.",
          example: { l1: "Sie ist Berlinerin. Sie sind aus Hamburg.", en: "She is from Berlin. They are from Hamburg." },
        },
        {
          type: "dialogue",
          heading: "Meeting at a Berlin café",
          setup: "Two travelers strike up a conversation in a café in Kreuzberg.",
          lines: [
            { speaker: "Lena", l1: "Hallo! Bist du auch Tourist?", en: "Hi! Are you a tourist too?" },
            { speaker: "You", l1: "Ja, ich bin aus Kanada. Und du?", en: "Yes, I'm from Canada. And you?" },
            { speaker: "Lena", l1: "Ich bin aus München. Berlin ist toll, oder?", en: "I'm from Munich. Berlin is great, isn't it?" },
            { speaker: "You", l1: "Ja, die Stadt ist wirklich schön.", en: "Yes, the city is really beautiful." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Conjugate sein",
          items: [
            {
              template: "Ich ___ aus Berlin.",
              answer: "bin",
              en: "I am from Berlin.",
              options: ["bin", "bist", "ist", "sind"],
            },
            {
              template: "Du ___ sehr nett.",
              answer: "bist",
              en: "You are very nice.",
              options: ["bin", "bist", "ist", "seid"],
            },
            {
              template: "Wir ___ Studenten.",
              answer: "sind",
              en: "We are students.",
              options: ["bin", "ist", "sind", "seid"],
            },
            {
              template: "Ihr ___ aus Hamburg.",
              answer: "seid",
              en: "You all are from Hamburg.",
              options: ["sind", "seid", "ist", "bist"],
            },
            {
              template: "Das ___ mein Freund.",
              answer: "ist",
              en: "That is my friend.",
              options: ["bin", "bist", "ist", "sind"],
            },
          ],
        },
      ],
    },
    {
      slug: "sein-haben-haben",
      title: "Haben — and saying 'no' with kein",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Haben = to have",
          body: [
            "<strong>Haben</strong> means <em>to have</em>. It's irregular too, but only in the <em>du</em> and <em>er/sie/es</em> forms (the <em>b</em> drops out): <em>du hast</em>, <em>er hat</em>.",
            "German uses <em>haben</em> in many places English uses <em>be</em>: <em>Ich habe Hunger</em> = \"I'm hungry,\" <em>Ich habe Durst</em> = \"I'm thirsty.\" Age, though, uses <em>sein</em>: <em>Ich bin 30 Jahre alt</em>.",
            "To say you <em>don't</em> have something, use <strong>kein</strong> — the negative article. It replaces <em>ein</em>: <em>Ich habe ein Auto</em> → <em>Ich habe kein Auto</em>.",
          ],
          keyPoint:
            "kein negates nouns (kein Auto = no car). nicht negates everything else (Ich komme nicht = I'm not coming).",
        },
        {
          type: "conjugation",
          heading: "Haben — to have",
          verb: "haben",
          meaning: "to have",
          intro: "Watch the b disappear in the du and er/sie/es forms.",
          tenses: [
            {
              name: "Präsens (present)",
              forms: [
                { person: "ich", form: "habe", en: "I have" },
                { person: "du", form: "hast", en: "you have" },
                { person: "er/sie/es", form: "hat", en: "he/she/it has" },
                { person: "wir", form: "haben", en: "we have" },
                { person: "ihr", form: "habt", en: "you all have" },
                { person: "sie/Sie", form: "haben", en: "they have / you have (formal)" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "kein changes with gender",
          body: "<strong>kein</strong> takes the same endings as <em>ein</em>. Masculine: <em>kein Hund</em> (no dog). Neuter: <em>kein Auto</em> (no car). Feminine: <em>keine Katze</em> (no cat). Plural — where <em>ein</em> can't go — uses <strong>keine</strong>: <em>keine Freunde</em> (no friends).",
          example: { l1: "Ich habe keine Zeit und kein Geld.", en: "I have no time and no money." },
        },
        {
          type: "vocab",
          heading: "Things you might have (or not)",
          items: [
            { l1: "das Auto", en: "the car", note: "neuter; plural die Autos" },
            { l1: "die Zeit", en: "the time", note: "feminine; usually no plural" },
            { l1: "das Geld", en: "the money", note: "neuter; usually no plural" },
            { l1: "der Hund", en: "the dog", note: "masculine; plural die Hunde" },
            { l1: "die Katze", en: "the cat", note: "feminine; plural die Katzen" },
            { l1: "der Hunger", en: "the hunger", note: "Ich habe Hunger = I'm hungry" },
            { l1: "der Durst", en: "the thirst", note: "Ich habe Durst = I'm thirsty" },
            { l1: "die Idee", en: "the idea", note: "feminine; plural die Ideen" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Haben or kein?",
          items: [
            {
              template: "Du ___ einen Hund.",
              answer: "hast",
              en: "You have a dog.",
              options: ["habe", "hast", "hat", "habt"],
            },
            {
              template: "Sie (she) ___ Hunger.",
              answer: "hat",
              en: "She is hungry.",
              options: ["habe", "hast", "hat", "haben"],
            },
            {
              template: "Ich habe ___ Zeit.",
              answer: "keine",
              en: "I have no time.",
              options: ["kein", "keine", "keinen", "nicht"],
            },
            {
              template: "Wir haben ___ Auto.",
              answer: "kein",
              en: "We have no car.",
              options: ["kein", "keine", "keinen", "nicht"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I have a dog, but I have no cat.",
          reference: "Ich habe einen Hund, aber ich habe keine Katze.",
          hint: "Hund is masculine in the accusative → einen. Katze is feminine → keine.",
        },
      ],
    },
    {
      slug: "sein-haben-present-verbs",
      title: "Regular present-tense verbs (-en)",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Most German verbs follow one pattern",
          body: [
            "A German infinitive ends in <strong>-en</strong>: <em>wohnen</em> (to live/reside), <em>kommen</em> (to come), <em>machen</em> (to make/do). Drop the <em>-en</em> to get the stem, then add personal endings.",
            "The endings are: <strong>-e</strong> (ich), <strong>-st</strong> (du), <strong>-t</strong> (er/sie/es), <strong>-en</strong> (wir), <strong>-t</strong> (ihr), <strong>-en</strong> (sie/Sie).",
            "Example: <em>wohnen</em> → ich wohn<strong>e</strong>, du wohn<strong>st</strong>, er wohn<strong>t</strong>, wir wohn<strong>en</strong>, ihr wohn<strong>t</strong>, sie wohn<strong>en</strong>.",
          ],
          keyPoint:
            "Endings: -e, -st, -t, -en, -t, -en. The wir form and the infinitive look identical.",
        },
        {
          type: "conjugation",
          heading: "Wohnen — to live (reside)",
          verb: "wohnen",
          meaning: "to live / reside",
          tenses: [
            {
              name: "Präsens (present)",
              forms: [
                { person: "ich", form: "wohne", en: "I live" },
                { person: "du", form: "wohnst", en: "you live" },
                { person: "er/sie/es", form: "wohnt", en: "he/she/it lives" },
                { person: "wir", form: "wohnen", en: "we live" },
                { person: "ihr", form: "wohnt", en: "you all live" },
                { person: "sie/Sie", form: "wohnen", en: "they live / you live (formal)" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "Compare three regular verbs",
          verb: "wohnen / kommen / machen",
          meaning: "live / come / do",
          intro: "Same endings every time — only the stem changes.",
          tenses: [
            {
              name: "Side-by-side present",
              forms: [
                { person: "ich", form: "wohne / komme / mache", en: "I…" },
                { person: "du", form: "wohnst / kommst / machst", en: "you…" },
                { person: "er/sie/es", form: "wohnt / kommt / macht", en: "he/she/it…" },
                { person: "wir", form: "wohnen / kommen / machen", en: "we…" },
                { person: "ihr", form: "wohnt / kommt / macht", en: "you all…" },
                { person: "sie/Sie", form: "wohnen / kommen / machen", en: "they / you (formal)…" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Useful regular verbs",
          items: [
            { l1: "wohnen", en: "to live / reside", note: "Ich wohne in Berlin." },
            { l1: "kommen", en: "to come", note: "Ich komme aus den USA." },
            { l1: "machen", en: "to make / do" },
            { l1: "spielen", en: "to play" },
            { l1: "lernen", en: "to learn / study" },
            { l1: "kaufen", en: "to buy" },
            { l1: "hören", en: "to hear / listen" },
            { l1: "brauchen", en: "to need" },
            { l1: "sagen", en: "to say" },
            { l1: "lieben", en: "to love" },
          ],
        },
        {
          type: "tip",
          heading: "Sie is the polite default with strangers",
          body: "When you address a stranger, a shopkeeper, or anyone older or in authority, use <strong>Sie</strong> — the verb takes the same form as <em>wir/sie(they)</em>: <em>Wohnen Sie hier?</em> Switch to <strong>du</strong> only with friends, family, kids, and peers. Germans are stricter about this than English speakers expect.",
          example: { l1: "Woher kommen Sie? — Ich komme aus Italien.", en: "Where are you from? (formal) — I'm from Italy." },
        },
        {
          type: "fillBlank",
          heading: "Add the right ending",
          items: [
            {
              template: "Ich ___ in Berlin. (wohnen)",
              answer: "wohne",
              en: "I live in Berlin.",
              options: ["wohne", "wohnst", "wohnt", "wohnen"],
            },
            {
              template: "Du ___ aus Spanien. (kommen)",
              answer: "kommst",
              en: "You come from Spain.",
              options: ["komme", "kommst", "kommt", "kommen"],
            },
            {
              template: "Was ___ ihr heute? (machen)",
              answer: "macht",
              en: "What are you all doing today?",
              options: ["mache", "machst", "macht", "machen"],
            },
            {
              template: "Wir ___ Deutsch. (lernen)",
              answer: "lernen",
              en: "We are learning German.",
              options: ["lerne", "lernst", "lernt", "lernen"],
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "What is the du form of 'kommen'?",
              options: ["komme", "kommst", "kommt", "kommen"],
              correct: 1,
            },
            {
              q: "The verb ending for 'er/sie/es' on a regular verb is…",
              options: ["-e", "-st", "-t", "-en"],
              correct: 2,
            },
            {
              q: "Translate: 'We live in Berlin.'",
              options: [
                "Ich wohne in Berlin.",
                "Wir wohnt in Berlin.",
                "Wir wohnen in Berlin.",
                "Wir wohnst in Berlin.",
              ],
              correct: 2,
            },
            {
              q: "Which form do you use with the formal 'Sie'?",
              options: ["kommt", "kommst", "kommen", "komme"],
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
        q: "Conjugate 'sein' for 'ich':",
        options: ["bin", "bist", "ist", "sind"],
        correct: 0,
      },
      {
        q: "Conjugate 'sein' for 'wir':",
        options: ["bin", "seid", "sind", "ist"],
        correct: 2,
      },
      {
        q: "Conjugate 'haben' for 'du':",
        options: ["habe", "hast", "hat", "habt"],
        correct: 1,
      },
      {
        q: "Conjugate 'haben' for 'er':",
        options: ["habe", "hast", "hat", "haben"],
        correct: 2,
      },
      {
        q: "Translate: 'I'm hungry.'",
        options: ["Ich bin Hunger.", "Ich habe Hunger.", "Ich bin hungrig Hunger.", "Ich habe hungrig."],
        correct: 1,
      },
      {
        q: "Which word negates a noun (e.g. 'no car')?",
        options: ["nicht", "nein", "kein", "nie"],
        correct: 2,
      },
      {
        q: "Complete: 'Ich habe ___ Zeit.' (I have no time)",
        options: ["kein", "keine", "keinen", "nicht"],
        correct: 1,
      },
      {
        q: "The regular present-tense ending for 'du' is…",
        options: ["-e", "-st", "-t", "-en"],
        correct: 1,
      },
      {
        q: "Translate: 'You come from Munich.' (informal, one person)",
        options: [
          "Du kommen aus München.",
          "Du kommt aus München.",
          "Du kommst aus München.",
          "Du komme aus München.",
        ],
        correct: 2,
      },
      {
        q: "Which form is correct with formal 'Sie'? 'Wo ___ Sie?' (live)",
        options: ["wohnst", "wohnt", "wohne", "wohnen"],
        correct: 3,
      },
    ],
  },
};
