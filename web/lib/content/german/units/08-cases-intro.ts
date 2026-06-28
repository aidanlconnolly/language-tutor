import type { Unit } from "../../types";

export const UNIT_CASES_INTRO: Unit = {
  slug: "cases-intro",
  stage: 2,
  order: 8,
  icon: "🎯",
  title: "The accusative case",
  tagline: "Why der becomes den — the direct-object case.",
  badge: "core",
  lessons: [
    {
      slug: "cases-intro-what-is-a-case",
      title: "What a case is: nominative vs accusative",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "German marks the job of each noun",
          body: [
            "A <strong>case</strong> is German's way of showing what role a noun plays in a sentence. The <strong>subject</strong> (the doer) is in the <em>nominative</em>; the <strong>direct object</strong> (the thing acted on) is in the <em>accusative</em>.",
            "Here's the surprise: usually only the article changes, and only for <strong>masculine</strong> nouns. <em>der</em> becomes <strong>den</strong>, and <em>ein</em> becomes <strong>einen</strong>. Feminine, neuter, and plural articles stay the same.",
            "Compare: <em>Der Mann sieht den Hund</em> = \"The man sees the dog.\" Swap them and the meaning flips: <em>Der Hund sieht den Mann</em> = \"The dog sees the man.\" The endings, not the word order, tell you who does what.",
          ],
          keyPoint:
            "Accusative = direct object. Only masculine changes: der→den, ein→einen. Fem/neut/plural unchanged.",
        },
        {
          type: "conjugation",
          heading: "The article in nominative vs accusative",
          verb: "der / die / das",
          meaning: "the (definite) and a/an (indefinite)",
          intro: "Read down each column — only the masculine row changes.",
          tenses: [
            {
              name: "Definite article (the)",
              forms: [
                { person: "masculine", form: "der → den", en: "der Mann → den Mann" },
                { person: "feminine", form: "die → die", en: "die Frau → die Frau (no change)" },
                { person: "neuter", form: "das → das", en: "das Kind → das Kind (no change)" },
                { person: "plural", form: "die → die", en: "die Leute → die Leute (no change)" },
              ],
            },
            {
              name: "Indefinite article (a/an)",
              forms: [
                { person: "masculine", form: "ein → einen", en: "ein Hund → einen Hund" },
                { person: "feminine", form: "eine → eine", en: "eine Katze → eine Katze (no change)" },
                { person: "neuter", form: "ein → ein", en: "ein Auto → ein Auto (no change)" },
                { person: "plural", form: "(keine) → (keine)", en: "keine Hunde → keine Hunde" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Only the masculine changes — really",
          body: "This is the single best piece of news in German grammar. In the accusative, <strong>feminine, neuter, and plural articles do not change at all</strong>. You only have to remember <em>der→den</em> and <em>ein→einen</em>. Master that and you've handled most of the accusative.",
          example: { l1: "Ich sehe den Mann, die Frau und das Kind.", en: "I see the man, the woman, and the child." },
        },
        {
          type: "fillBlank",
          heading: "Nominative or accusative?",
          items: [
            {
              template: "___ Mann liest. (the, subject)",
              answer: "Der",
              en: "The man is reading.",
              options: ["Der", "Den", "Die", "Das"],
            },
            {
              template: "Ich sehe ___ Mann. (the, object)",
              answer: "den",
              en: "I see the man.",
              options: ["der", "den", "die", "das"],
            },
            {
              template: "Ich sehe ___ Frau. (the, object)",
              answer: "die",
              en: "I see the woman.",
              options: ["der", "den", "die", "das"],
            },
            {
              template: "Ich habe ___ Hund. (a, object)",
              answer: "einen",
              en: "I have a dog.",
              options: ["ein", "eine", "einen", "der"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The woman sees the man.",
          reference: "Die Frau sieht den Mann.",
          hint: "Frau is the subject (nominative, die). Mann is the object (accusative, den).",
        },
      ],
    },
    {
      slug: "cases-intro-accusative-verbs",
      title: "Accusative with everyday verbs",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Most verbs take an accusative object",
          body: [
            "Verbs of having, eating, buying, and seeing all take a direct object in the <strong>accusative</strong>: <em>haben</em>, <em>essen</em>, <em>kaufen</em>, <em>sehen</em>, <em>trinken</em>, <em>brauchen</em>.",
            "So whenever a masculine noun is the thing being had/eaten/bought/seen, its article shifts: <em>Ich kaufe <strong>den</strong> Apfel</em>, <em>Ich esse <strong>einen</strong> Apfel</em>.",
            "The negative <strong>kein</strong> and the possessives (<em>mein</em>, <em>dein</em>…) take the exact same endings as <em>ein</em>. So in the accusative masculine they become <strong>keinen</strong>, <strong>meinen</strong>, <strong>deinen</strong>.",
          ],
          keyPoint:
            "haben/essen/kaufen/sehen + accusative. kein and mein follow ein: keinen Hund, meinen Bruder.",
        },
        {
          type: "vocab",
          heading: "Accusative-taking verbs + objects",
          items: [
            { l1: "haben", en: "to have", note: "Ich habe einen Bruder." },
            { l1: "essen", en: "to eat", note: "irregular: ich esse, du isst, er isst" },
            { l1: "kaufen", en: "to buy", note: "regular: Ich kaufe den Käse." },
            { l1: "sehen", en: "to see", note: "irregular: ich sehe, du siehst, er sieht" },
            { l1: "trinken", en: "to drink" },
            { l1: "der Apfel", en: "the apple", note: "masculine → einen Apfel" },
            { l1: "der Kaffee", en: "the coffee", note: "masculine → einen Kaffee" },
            { l1: "das Brot", en: "the bread", note: "neuter → ein Brot (no change)" },
            { l1: "die Milch", en: "the milk", note: "feminine → die Milch (no change)" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the Berlin Wochenmarkt",
          setup: "Shopping at a Saturday farmers' market.",
          lines: [
            { speaker: "Verkäufer", l1: "Was möchten Sie?", en: "What would you like?" },
            { speaker: "You", l1: "Ich nehme einen Apfel und ein Brot.", en: "I'll take an apple and a bread." },
            { speaker: "Verkäufer", l1: "Möchten Sie auch Käse?", en: "Would you like cheese too?" },
            { speaker: "You", l1: "Nein danke, ich brauche keinen Käse.", en: "No thanks, I don't need any cheese." },
            { speaker: "Verkäufer", l1: "Gut. Das macht drei Euro.", en: "Good. That's three euros." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Put the object in the accusative",
          items: [
            {
              template: "Ich kaufe ___ Apfel. (an)",
              answer: "einen",
              en: "I'm buying an apple.",
              options: ["ein", "eine", "einen", "der"],
            },
            {
              template: "Ich habe ___ Bruder. (no)",
              answer: "keinen",
              en: "I have no brother.",
              options: ["kein", "keine", "keinen", "nicht"],
            },
            {
              template: "Sie isst ___ Brot. (a)",
              answer: "ein",
              en: "She is eating a bread.",
              options: ["ein", "eine", "einen", "den"],
            },
            {
              template: "Ich sehe ___ Bruder. (my)",
              answer: "meinen",
              en: "I see my brother.",
              options: ["mein", "meine", "meinen", "meiner"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm buying an apple, but I don't need any coffee.",
          reference: "Ich kaufe einen Apfel, aber ich brauche keinen Kaffee.",
          hint: "Apfel and Kaffee are both masculine → einen / keinen in the accusative.",
        },
      ],
    },
    {
      slug: "cases-intro-prepositions",
      title: "Accusative prepositions",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Five prepositions always take the accusative",
          body: [
            "Some prepositions force the accusative case on whatever noun follows them — no matter the noun's role in the sentence. The five core ones are <strong>für, ohne, durch, gegen, um</strong>.",
            "A common memory hook is <strong>FUDGO</strong>: <em>für</em> (for), <em>um</em> (around/at), <em>durch</em> (through), <em>gegen</em> (against), <em>ohne</em> (without).",
            "So a masculine noun after any of these takes <em>den/einen</em>: <em>für den Mann</em>, <em>ohne einen Plan</em>, <em>durch den Park</em>, <em>gegen den Wind</em>, <em>um den Tisch</em>.",
          ],
          keyPoint:
            "für, ohne, durch, gegen, um always trigger the accusative — even feminine/neuter nouns keep their accusative forms.",
        },
        {
          type: "vocab",
          heading: "The accusative prepositions",
          items: [
            { l1: "für", en: "for", note: "für den Freund — for the friend" },
            { l1: "ohne", en: "without", note: "ohne einen Plan — without a plan" },
            { l1: "durch", en: "through", note: "durch den Park — through the park" },
            { l1: "gegen", en: "against / around (time)", note: "gegen den Wind — against the wind" },
            { l1: "um", en: "around / at (clock time)", note: "um den Tisch — around the table; um acht Uhr" },
            { l1: "der Park", en: "the park", note: "masculine → durch den Park" },
            { l1: "der Plan", en: "the plan", note: "masculine → ohne einen Plan" },
            { l1: "der Freund", en: "the friend", note: "masculine → für den Freund" },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning a walk",
          setup: "Two friends decide where to stroll.",
          lines: [
            { speaker: "Lars", l1: "Gehen wir durch den Park?", en: "Shall we walk through the park?" },
            { speaker: "You", l1: "Gern. Ich habe ein Geschenk für meinen Bruder.", en: "Gladly. I have a gift for my brother." },
            { speaker: "Lars", l1: "Schön! Gehen wir ohne den Hund?", en: "Nice! Shall we go without the dog?" },
            { speaker: "You", l1: "Nein, der Hund kommt mit. Um zwei Uhr?", en: "No, the dog comes along. At two o'clock?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Accusative after the preposition",
          items: [
            {
              template: "Das Geschenk ist für ___ Bruder. (my)",
              answer: "meinen",
              en: "The gift is for my brother.",
              options: ["mein", "meine", "meinen", "meiner"],
            },
            {
              template: "Wir gehen durch ___ Park. (the)",
              answer: "den",
              en: "We walk through the park.",
              options: ["der", "den", "dem", "die"],
            },
            {
              template: "Ich komme ohne ___ Plan. (a)",
              answer: "einen",
              en: "I'm coming without a plan.",
              options: ["ein", "eine", "einen", "der"],
            },
            {
              template: "Wir sitzen um ___ Tisch. (the)",
              answer: "den",
              en: "We sit around the table.",
              options: ["der", "den", "dem", "das"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The gift is for my brother.",
          reference: "Das Geschenk ist für meinen Bruder.",
          hint: "für always takes the accusative; Bruder is masculine → meinen.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which preposition always takes the accusative?",
              options: ["mit", "für", "von", "bei"],
              correct: 1,
            },
            {
              q: "Complete: 'durch ___ Park' (the)",
              options: ["der", "den", "dem", "des"],
              correct: 1,
            },
            {
              q: "After 'ohne', a masculine noun like 'Plan' takes…",
              options: ["ein", "einem", "einen", "eines"],
              correct: 2,
            },
            {
              q: "Translate: 'for my brother'",
              options: ["für mein Bruder", "für meinen Bruder", "für meiner Bruder", "für meinem Bruder"],
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
        q: "The accusative case marks the…",
        options: ["subject", "direct object", "verb", "location"],
        correct: 1,
      },
      {
        q: "In the accusative, 'der' becomes…",
        options: ["dem", "den", "des", "die"],
        correct: 1,
      },
      {
        q: "In the accusative, 'ein' (masculine) becomes…",
        options: ["einem", "eines", "einen", "eine"],
        correct: 2,
      },
      {
        q: "Which articles change in the accusative?",
        options: ["all of them", "only feminine", "only masculine", "only plural"],
        correct: 2,
      },
      {
        q: "Translate: 'I see the man.'",
        options: ["Ich sehe der Mann.", "Ich sehe den Mann.", "Ich sehe dem Mann.", "Ich sehe die Mann."],
        correct: 1,
      },
      {
        q: "Complete: 'Ich habe ___ Hund.' (a dog)",
        options: ["ein", "eine", "einen", "der"],
        correct: 2,
      },
      {
        q: "'no brother' in the accusative is…",
        options: ["kein Bruder", "keine Bruder", "keinen Bruder", "keinem Bruder"],
        correct: 2,
      },
      {
        q: "Which is an accusative preposition?",
        options: ["mit", "durch", "bei", "von"],
        correct: 1,
      },
      {
        q: "Complete: 'Das ist für ___ Freund.' (my)",
        options: ["mein", "meine", "meinen", "meiner"],
        correct: 2,
      },
      {
        q: "Translate: 'The dog sees the woman.'",
        options: [
          "Den Hund sieht die Frau.",
          "Der Hund sieht die Frau.",
          "Der Hund sieht der Frau.",
          "Den Hund sieht der Frau.",
        ],
        correct: 1,
      },
    ],
  },
};
