import type { Unit } from "../../types";

export const UNIT_CONNECTORS: Unit = {
  slug: "connectors",
  stage: 2,
  order: 9,
  icon: "🔗",
  title: "Connecting words",
  tagline: "und, aber, oder, denn, and weil (verb to the end).",
  badge: "core",
  lessons: [
    {
      slug: "connectors-coordinating",
      title: "und, aber, oder, denn, sondern",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The easy connectors leave word order alone",
          body: [
            "Five conjunctions simply glue two normal sentences together without touching the word order: <strong>und</strong> (and), <strong>aber</strong> (but), <strong>oder</strong> (or), <strong>denn</strong> (because/for), <strong>sondern</strong> (but rather).",
            "These are called <em>coordinating</em> conjunctions. After them, the verb stays in its normal second position: <em>Ich komme aus Berlin, <strong>aber</strong> ich wohne in Hamburg.</em>",
            "<strong>sondern</strong> is special — it means \"but rather\" and only follows a negative: <em>Das ist nicht Wein, <strong>sondern</strong> Saft.</em> (\"That's not wine, but rather juice.\")",
          ],
          keyPoint:
            "und, aber, oder, denn, sondern do NOT change word order — the verb stays in second position.",
        },
        {
          type: "vocab",
          heading: "Coordinating conjunctions",
          items: [
            { l1: "und", en: "and", note: "Ich lese und ich schreibe." },
            { l1: "aber", en: "but", note: "Ich bin müde, aber ich komme." },
            { l1: "oder", en: "or", note: "Tee oder Kaffee?" },
            { l1: "denn", en: "because / for", note: "Ich bleibe zu Hause, denn ich bin krank." },
            { l1: "sondern", en: "but rather", note: "follows a negative: nicht X, sondern Y" },
          ],
        },
        {
          type: "dialogue",
          heading: "Making plans",
          setup: "Deciding on the evening.",
          lines: [
            { speaker: "Mia", l1: "Gehen wir ins Kino oder bleiben wir zu Hause?", en: "Shall we go to the cinema or stay home?" },
            { speaker: "You", l1: "Ich bin müde, aber ich komme gern mit.", en: "I'm tired, but I'd gladly come along." },
            { speaker: "Mia", l1: "Super, denn der Film ist toll.", en: "Great, because the film is fantastic." },
            { speaker: "You", l1: "Das ist kein Drama, sondern eine Komödie, oder?", en: "It's not a drama, but rather a comedy, right?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the connector",
          items: [
            {
              template: "Ich trinke Tee ___ Kaffee.",
              answer: "oder",
              en: "I drink tea or coffee.",
              options: ["und", "aber", "oder", "denn"],
            },
            {
              template: "Ich bin müde, ___ ich komme.",
              answer: "aber",
              en: "I'm tired, but I'm coming.",
              options: ["und", "aber", "oder", "sondern"],
            },
            {
              template: "Ich bleibe hier, ___ es regnet.",
              answer: "denn",
              en: "I'm staying here, because it's raining.",
              options: ["und", "oder", "denn", "sondern"],
            },
            {
              template: "Das ist nicht Wein, ___ Saft.",
              answer: "sondern",
              en: "That's not wine, but rather juice.",
              options: ["aber", "oder", "denn", "sondern"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm tired, but I'm coming because the film is great.",
          reference: "Ich bin müde, aber ich komme, denn der Film ist toll.",
          hint: "aber and denn keep normal word order — the verb stays in second position.",
        },
      ],
    },
    {
      slug: "connectors-weil-dass",
      title: "weil & dass send the verb to the end",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Subordinating conjunctions kick the verb to the end",
          body: [
            "A second group of conjunctions — <strong>weil</strong> (because), <strong>dass</strong> (that), <strong>wenn</strong> (if/when) — does something dramatic: it sends the conjugated verb to the very <em>end</em> of its clause.",
            "Compare the two \"because\" words. With <strong>denn</strong>: <em>Ich bleibe zu Hause, <strong>denn</strong> ich <u>bin</u> krank.</em> With <strong>weil</strong>: <em>Ich bleibe zu Hause, <strong>weil</strong> ich krank <u>bin</u>.</em> Same meaning, but <em>weil</em> parks the verb at the end.",
            "After <strong>dass</strong>, the same thing happens: <em>Ich weiß, dass du Deutsch <u>sprichst</u>.</em> (\"I know that you speak German.\")",
          ],
          keyPoint:
            "weil, dass, wenn = subordinating → conjugated verb goes to the END of the clause. denn does not.",
        },
        {
          type: "tip",
          heading: "denn vs weil — same meaning, different order",
          body: "<strong>denn</strong> and <strong>weil</strong> both mean \"because.\" The difference is purely grammatical: <em>denn</em> leaves word order normal, while <em>weil</em> sends the verb to the end. If you forget which is which, remember the rhyme: <em>weil</em> = verb at the tail.",
          example: { l1: "…, denn ich bin müde. / …, weil ich müde bin.", en: "…, because I'm tired. (both)" },
        },
        {
          type: "conjugation",
          heading: "Where does the verb go?",
          verb: "denn vs weil / dass",
          meaning: "main-clause vs subordinate-clause word order",
          intro: "Watch the position of the conjugated verb (in brackets).",
          tenses: [
            {
              name: "Main clause & denn (verb 2nd)",
              forms: [
                { person: "Ich bleibe zu Hause.", form: "[bleibe = 2nd]", en: "I'm staying home." },
                { person: "…, denn ich bin krank.", form: "[bin = 2nd]", en: "…, because I'm sick." },
              ],
            },
            {
              name: "weil / dass (verb LAST)",
              forms: [
                { person: "…, weil ich krank bin.", form: "[bin = last]", en: "…, because I'm sick." },
                { person: "…, dass du Deutsch sprichst.", form: "[sprichst = last]", en: "…, that you speak German." },
                { person: "…, wenn du Zeit hast.", form: "[hast = last]", en: "…, if you have time." },
              ],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the weil/dass clause (verb last!)",
          intro: "Remember: the conjugated verb goes to the end.",
          items: [
            { tokens: ["weil", "ich", "müde", "bin"], en: "because I'm tired" },
            { tokens: ["weil", "ich", "in", "Berlin", "wohne"], en: "because I live in Berlin" },
            { tokens: ["dass", "du", "Deutsch", "sprichst"], en: "that you speak German" },
            { tokens: ["wenn", "du", "Zeit", "hast"], en: "if you have time" },
          ],
        },
        {
          type: "fillBlank",
          heading: "denn or weil — and where's the verb?",
          items: [
            {
              template: "Ich lerne Deutsch, ___ ich in Berlin wohne.",
              answer: "weil",
              en: "I'm learning German because I live in Berlin.",
              options: ["denn", "weil", "aber", "und"],
            },
            {
              template: "Ich komme nicht, weil ich krank ___.",
              answer: "bin",
              en: "I'm not coming because I'm sick.",
              options: ["bin", "ist", "sein", "bist"],
            },
            {
              template: "Ich glaube, dass er aus München ___.",
              answer: "kommt",
              en: "I think that he comes from Munich.",
              options: ["kommt", "kommen", "kommst", "komme"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm learning German because I live in Berlin.",
          reference: "Ich lerne Deutsch, weil ich in Berlin wohne.",
          hint: "weil sends the verb to the end: …weil ich in Berlin wohne.",
        },
      ],
    },
    {
      slug: "connectors-sequencing",
      title: "Sequencing: zuerst, dann, danach, schließlich",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Telling a story in order",
          body: [
            "To narrate steps in sequence, German uses <strong>zuerst</strong> (first), <strong>dann</strong> (then), <strong>danach</strong> (after that), and <strong>schließlich</strong> (finally).",
            "Here's a twist: when one of these adverbs starts the sentence, the verb still has to come second — so the subject jumps <em>behind</em> the verb. <em>Zuerst <strong>trinke ich</strong> Kaffee</em>, not <em>Zuerst ich trinke</em>.",
            "This rule (the verb glued to second position) is the heart of German word order: anything can come first, but the conjugated verb is always in slot two.",
          ],
          keyPoint:
            "Start with zuerst/dann/danach → verb still second, so subject and verb swap: Dann gehe ich…",
        },
        {
          type: "vocab",
          heading: "Sequencing words",
          items: [
            { l1: "zuerst", en: "first / at first" },
            { l1: "dann", en: "then" },
            { l1: "danach", en: "after that / afterward" },
            { l1: "später", en: "later" },
            { l1: "schließlich", en: "finally / in the end" },
            { l1: "am Ende", en: "at the end" },
          ],
        },
        {
          type: "dialogue",
          heading: "A morning routine in Berlin",
          setup: "Describing how your day starts.",
          lines: [
            { speaker: "You", l1: "Zuerst trinke ich einen Kaffee.", en: "First I drink a coffee." },
            { speaker: "You", l1: "Dann nehme ich die U-Bahn zur Arbeit.", en: "Then I take the subway to work." },
            { speaker: "You", l1: "Danach esse ich ein Brötchen.", en: "After that I eat a roll." },
            { speaker: "You", l1: "Schließlich beginne ich um neun Uhr.", en: "Finally I start at nine o'clock." },
          ],
        },
        {
          type: "orderWords",
          heading: "Verb second, even after 'dann'",
          intro: "When the adverb is first, the verb comes next — then the subject.",
          items: [
            { tokens: ["Zuerst", "trinke", "ich", "Kaffee"], en: "First I drink coffee." },
            { tokens: ["Dann", "gehe", "ich", "zur", "Arbeit"], en: "Then I go to work." },
            { tokens: ["Danach", "esse", "ich", "ein", "Brötchen"], en: "After that I eat a roll." },
            { tokens: ["Schließlich", "komme", "ich", "nach", "Hause"], en: "Finally I come home." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Order the sequence words",
          items: [
            {
              template: "___ trinke ich Kaffee. (first)",
              answer: "Zuerst",
              en: "First I drink coffee.",
              options: ["Zuerst", "Dann", "Danach", "Schließlich"],
            },
            {
              template: "Dann ___ ich zur Arbeit. (go)",
              answer: "gehe",
              en: "Then I go to work.",
              options: ["gehe", "ich gehe", "gehen", "geht"],
            },
            {
              template: "___ komme ich nach Hause. (finally)",
              answer: "Schließlich",
              en: "Finally I come home.",
              options: ["Zuerst", "Dann", "Danach", "Schließlich"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "First I drink a coffee, then I go to work.",
          reference: "Zuerst trinke ich einen Kaffee, dann gehe ich zur Arbeit.",
          hint: "After zuerst and dann the verb comes second, so subject and verb swap.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which means 'finally / in the end'?",
              options: ["zuerst", "dann", "danach", "schließlich"],
              correct: 3,
            },
            {
              q: "Complete: 'Dann ___ ich zur Arbeit.'",
              options: ["ich gehe", "gehe", "gehen", "geht"],
              correct: 1,
            },
            {
              q: "When 'Zuerst' starts the sentence, the verb goes…",
              options: ["last", "second (before the subject)", "first", "anywhere"],
              correct: 1,
            },
            {
              q: "Translate: 'Then I eat a roll.'",
              options: [
                "Dann ich esse ein Brötchen.",
                "Dann esse ich ein Brötchen.",
                "Dann ich ein Brötchen esse.",
                "Esse dann ich ein Brötchen.",
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
        q: "Which conjunction does NOT change word order?",
        options: ["weil", "dass", "aber", "wenn"],
        correct: 2,
      },
      {
        q: "'sondern' is used…",
        options: ["after any clause", "only after a negative", "to ask questions", "to start stories"],
        correct: 1,
      },
      {
        q: "Which word sends the verb to the end of the clause?",
        options: ["denn", "und", "weil", "oder"],
        correct: 2,
      },
      {
        q: "Complete: 'Ich bleibe hier, weil ich müde ___.'",
        options: ["bin", "ist", "bist", "sein"],
        correct: 0,
      },
      {
        q: "'denn' and 'weil' both mean 'because'. The difference is…",
        options: ["meaning", "word order (weil = verb last)", "formality", "nothing"],
        correct: 1,
      },
      {
        q: "Translate: 'I'm staying home because I'm sick.' (with weil)",
        options: [
          "Ich bleibe zu Hause, weil ich bin krank.",
          "Ich bleibe zu Hause, weil ich krank bin.",
          "Ich bleibe zu Hause, denn ich krank bin.",
          "Ich bleibe zu Hause, weil krank ich bin.",
        ],
        correct: 1,
      },
      {
        q: "After 'dass', the conjugated verb goes…",
        options: ["second", "first", "to the end", "before dass"],
        correct: 2,
      },
      {
        q: "Which means 'after that'?",
        options: ["zuerst", "dann", "danach", "schließlich"],
        correct: 2,
      },
      {
        q: "Complete: 'Zuerst ___ ich Kaffee.'",
        options: ["ich trinke", "trinke", "trinken", "trinkt"],
        correct: 1,
      },
      {
        q: "Translate: 'tea or coffee?'",
        options: ["Tee und Kaffee?", "Tee aber Kaffee?", "Tee oder Kaffee?", "Tee denn Kaffee?"],
        correct: 2,
      },
    ],
  },
};
