import type { Unit } from "../../types";

export const UNIT_FORMAL_REQUESTS: Unit = {
  slug: "formal-requests",
  stage: 6,
  order: 27,
  icon: "🤝",
  title: "Polite requests",
  tagline: "Könnten Sie…, Würden Sie… — Konjunktiv II for politeness.",
  badge: "core",
  lessons: [
    {
      slug: "formal-requests-koennten",
      title: "können → könnten & Ich hätte gern",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Softening with Konjunktiv II",
          body: [
            "German politeness leans on the <strong>Konjunktiv II</strong> (the conditional/subjunctive). Just like English shifts \"can you\" → \"<em>could</em> you\", German shifts <em>können</em> → <strong>könnten</strong> and <em>haben</em> → <strong>hätte</strong>.",
            "<strong>Können Sie …?</strong> (Can you …?) is fine but direct. <strong>Könnten Sie …?</strong> (Could you …?) is noticeably warmer and is the default in shops, offices, and with strangers.",
            "For ordering or asking for things, drop <em>Ich will</em> (\"I want\" — sounds blunt). Use <strong>Ich hätte gern …</strong> = \"I would like …\" (literally \"I would gladly have\"). In a café: <em>Ich hätte gern einen Kaffee.</em>",
            "<strong>Ich möchte …</strong> (\"I would like\") is the other everyday polite form — it's itself a Konjunktiv II of <em>mögen</em>.",
          ],
          keyPoint:
            "können → könnten, haben → hätte. 'Könnten Sie …?' = Could you …? · 'Ich hätte gern …' / 'Ich möchte …' = I'd like …",
        },
        {
          type: "conjugation",
          heading: "können and haben in Konjunktiv II",
          verb: "können / haben",
          meaning: "the polite 'could' and 'would have'",
          intro: "These are the two workhorses of polite German.",
          tenses: [
            {
              name: "können → könnte",
              forms: [
                { person: "ich", form: "könnte", en: "I could" },
                { person: "du", form: "könntest", en: "you could" },
                { person: "er/sie/es", form: "könnte", en: "he/she could" },
                { person: "Sie", form: "könnten", en: "you (formal) could" },
              ],
            },
            {
              name: "haben → hätte",
              forms: [
                { person: "ich", form: "hätte", en: "I would have" },
                { person: "du", form: "hättest", en: "you would have" },
                { person: "Ich hätte gern …", form: "hätte gern", en: "I would like …" },
                { person: "Sie", form: "hätten", en: "you (formal) would have" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Polite request phrases",
          items: [
            { l1: "Können Sie …?", en: "Can you …? (direct)" },
            { l1: "Könnten Sie …?", en: "Could you …? (polite)" },
            { l1: "Ich hätte gern …", en: "I would like … (ordering)" },
            { l1: "Ich möchte …", en: "I would like …" },
            { l1: "Ich hätte eine Frage.", en: "I have a question. (lit. would have)" },
            { l1: "Könnten Sie mir helfen?", en: "Could you help me?" },
            { l1: "Könnten Sie das bitte wiederholen?", en: "Could you repeat that, please?" },
            { l1: "Einen Moment, bitte.", en: "One moment, please." },
            { l1: "bitte", en: "please" },
            { l1: "gern", en: "gladly / with pleasure" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering politely at a café",
          setup: "You order breakfast and ask for the bill.",
          lines: [
            { speaker: "Kellner", l1: "Guten Tag, was darf ich Ihnen bringen?", en: "Hello, what can I bring you?" },
            { speaker: "You", l1: "Ich hätte gern einen Cappuccino und ein Croissant, bitte.", en: "I'd like a cappuccino and a croissant, please." },
            { speaker: "Kellner", l1: "Sehr gern. Sonst noch etwas?", en: "Gladly. Anything else?" },
            { speaker: "You", l1: "Könnten Sie mir auch ein Glas Wasser bringen?", en: "Could you also bring me a glass of water?" },
            { speaker: "Kellner", l1: "Natürlich. Kommt sofort.", en: "Of course. Coming right up." },
            { speaker: "You", l1: "Und könnten wir später bitte zahlen?", en: "And could we pay later, please?" },
            { speaker: "Kellner", l1: "Selbstverständlich. Sagen Sie einfach Bescheid.", en: "Absolutely. Just let me know." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Make it polite",
          intro: "Use the Konjunktiv II form.",
          items: [
            {
              template: "___ Sie mir bitte helfen? (polite 'could')",
              answer: "Könnten",
              en: "Could you help me, please?",
              options: ["Können", "Könnten", "Kannst", "Konntet"],
            },
            {
              template: "Ich ___ gern einen Kaffee. (would like)",
              answer: "hätte",
              en: "I'd like a coffee.",
              options: ["habe", "hätte", "hatte", "hätten"],
            },
            {
              template: "___ Sie das bitte wiederholen?",
              answer: "Könnten",
              en: "Could you repeat that, please?",
              options: ["Können", "Könnten", "Konnten", "Kannst"],
            },
            {
              template: "Ich ___ eine Frage.",
              answer: "hätte",
              en: "I have a question. (polite)",
              options: ["habe", "hätte", "hat", "hätten"],
            },
          ],
        },
      ],
    },
    {
      slug: "formal-requests-wuerden",
      title: "Würden Sie…? & Wären Sie so nett",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Würden + infinitive: the all-purpose polite request",
          body: [
            "<strong>würde</strong> is the Konjunktiv II of <em>werden</em>, and <strong>Würden Sie …?</strong> + an infinitive at the end is the most flexible polite request: \"Would you …?\"",
            "<em>Würden Sie mir bitte die Tür aufhalten?</em> = Would you please hold the door for me? The main verb (<em>aufhalten</em>) goes to the very end.",
            "Extra-courteous: <strong>Wären Sie so nett, …?</strong> = \"Would you be so kind as to …?\" (<em>wären</em> is the Konjunktiv II of <em>sein</em>). It's followed by a <em>zu</em>-infinitive: <em>Wären Sie so nett, mir zu helfen?</em>",
            "These forms are perfect for asking favours of strangers — on the train, at a counter, in an office.",
          ],
          keyPoint:
            "Würden Sie + infinitive (at end) = Would you …? · Wären Sie so nett, … zu + infinitive = Would you be so kind as to …?",
        },
        {
          type: "conjugation",
          heading: "werden → würde and sein → wäre",
          verb: "werden / sein",
          meaning: "the Konjunktiv II behind 'würde' and 'wäre'",
          intro: "Two more polite building blocks.",
          tenses: [
            {
              name: "werden → würde",
              forms: [
                { person: "ich", form: "würde", en: "I would" },
                { person: "du", form: "würdest", en: "you would" },
                { person: "er/sie/es", form: "würde", en: "he/she would" },
                { person: "Sie", form: "würden", en: "you (formal) would" },
              ],
            },
            {
              name: "sein → wäre",
              forms: [
                { person: "ich", form: "wäre", en: "I would be" },
                { person: "du", form: "wärst", en: "you would be" },
                { person: "Sie", form: "wären", en: "you (formal) would be" },
                { person: "Wären Sie so nett?", form: "wären", en: "Would you be so kind?" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Würden / Wären phrases",
          items: [
            { l1: "Würden Sie …?", en: "Would you …?" },
            { l1: "Würden Sie mir bitte helfen?", en: "Would you please help me?" },
            { l1: "Würden Sie bitte kurz warten?", en: "Would you please wait a moment?" },
            { l1: "Wären Sie so nett, …?", en: "Would you be so kind as to …?" },
            { l1: "Wären Sie so nett, mir zu helfen?", en: "Would you be so kind as to help me?" },
            { l1: "die Tür aufhalten", en: "to hold the door open" },
            { l1: "Platz machen", en: "to make room / move over" },
            { l1: "etwas reichen", en: "to pass something" },
            { l1: "Vielen Dank für Ihre Hilfe.", en: "Many thanks for your help." },
            { l1: "Das wäre sehr nett.", en: "That would be very kind." },
          ],
        },
        {
          type: "dialogue",
          heading: "A favour on the S-Bahn",
          setup: "The train is crowded and you need to get to the door.",
          lines: [
            { speaker: "You", l1: "Entschuldigung, würden Sie mich bitte vorbeilassen?", en: "Excuse me, would you let me through, please?" },
            { speaker: "Fahrgast", l1: "Natürlich, einen Moment.", en: "Of course, one moment." },
            { speaker: "You", l1: "Wären Sie so nett, meinen Koffer kurz zu halten?", en: "Would you be so kind as to hold my suitcase for a second?" },
            { speaker: "Fahrgast", l1: "Klar, geben Sie ihn mir.", en: "Sure, hand it to me." },
            { speaker: "You", l1: "Vielen Dank, das ist sehr nett von Ihnen.", en: "Many thanks, that's very kind of you." },
            { speaker: "Fahrgast", l1: "Gern geschehen.", en: "You're welcome." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the polite request",
          intro: "The main verb goes to the end with Würden Sie.",
          items: [
            { tokens: ["Würden", "Sie", "mir", "bitte", "helfen"], en: "Would you please help me?" },
            { tokens: ["Würden", "Sie", "bitte", "kurz", "warten"], en: "Would you please wait a moment?" },
            { tokens: ["Wären", "Sie", "so", "nett,", "mir", "zu", "helfen"], en: "Would you be so kind as to help me?" },
            { tokens: ["Würden", "Sie", "mir", "das", "Salz", "reichen"], en: "Would you pass me the salt?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Would you please help me? Would you be so kind as to hold the door?",
          reference: "Würden Sie mir bitte helfen? Wären Sie so nett, die Tür aufzuhalten?",
          hint: "helfen takes dative (mir). After 'so nett,' use a zu-infinitive: aufzuhalten.",
        },
      ],
    },
    {
      slug: "formal-requests-indirect",
      title: "Softening & indirect questions",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Indirect questions push the verb to the end",
          body: [
            "A direct question like <em>Wo ist der Bahnhof?</em> is fine, but wrapping it makes it gentler: <strong>Könnten Sie mir sagen, wo der Bahnhof ist?</strong> = \"Could you tell me where the station is?\"",
            "The catch: in the embedded (indirect) clause the conjugated verb jumps to the <strong>very end</strong>. <em>…, wo der Bahnhof <strong>ist</strong>?</em> — not <em>wo ist der Bahnhof</em>.",
            "Use a question word to introduce the clause: <em>wo</em> (where), <em>wann</em> (when), <em>wie</em> (how), <em>warum</em> (why), <em>was</em> (what). For yes/no questions use <strong>ob</strong> (whether): <em>Wissen Sie, ob der Laden offen ist?</em> = \"Do you know whether the shop is open?\"",
            "Softening openers stack nicely: <em>Entschuldigung, könnten Sie mir vielleicht sagen, …?</em> — <em>vielleicht</em> (\"perhaps\") makes it even gentler.",
          ],
          keyPoint:
            "Indirect question: 'Könnten Sie mir sagen, WO … VERB?' The verb goes to the end. Use ob for yes/no questions.",
        },
        {
          type: "tip",
          heading: "Verb-to-the-end, every time",
          body: "Compare the two: direct <em>Wann kommt der Bus?</em> vs indirect <em>Wissen Sie, wann der Bus <strong>kommt</strong>?</em>. As soon as you subordinate the question (after <em>sagen, wissen, fragen</em>), the verb slides to the end of that clause. This is the single most common slip — drill it.",
          example: { l1: "Könnten Sie mir sagen, wie spät es ist?", en: "Could you tell me what time it is?" },
        },
        {
          type: "vocab",
          heading: "Indirect-question toolkit",
          items: [
            { l1: "Könnten Sie mir sagen, …?", en: "Could you tell me …?" },
            { l1: "Wissen Sie, …?", en: "Do you know …?" },
            { l1: "Darf ich fragen, …?", en: "May I ask …?" },
            { l1: "…, wo … ist", en: "…, where … is" },
            { l1: "…, wann … kommt / öffnet", en: "…, when … comes / opens" },
            { l1: "…, wie … funktioniert", en: "…, how … works" },
            { l1: "…, ob …", en: "…, whether …" },
            { l1: "vielleicht", en: "perhaps (softener)" },
            { l1: "Wie spät ist es?", en: "What time is it?" },
            { l1: "Wo ist die nächste Haltestelle?", en: "Where is the nearest stop?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Send the verb to the end",
          intro: "Complete the indirect question; the verb comes last.",
          items: [
            {
              template: "Könnten Sie mir sagen, wo der Bahnhof ___?",
              answer: "ist",
              en: "Could you tell me where the station is?",
              options: ["ist", "sein", "ist es", "wäre ist"],
            },
            {
              template: "Wissen Sie, wann der Zug ___?",
              answer: "kommt",
              en: "Do you know when the train comes?",
              options: ["kommt", "kommen", "kommt er", "ist"],
            },
            {
              template: "Könnten Sie mir sagen, ___ der Laden offen ist?",
              answer: "ob",
              en: "Could you tell me whether the shop is open?",
              options: ["ob", "dass", "wo", "wenn"],
            },
            {
              template: "Darf ich fragen, wie das ___?",
              answer: "funktioniert",
              en: "May I ask how this works?",
              options: ["funktioniert", "funktionieren", "ist", "macht"],
            },
            {
              template: "Wissen Sie, wie spät es ___?",
              answer: "ist",
              en: "Do you know what time it is?",
              options: ["ist", "sein", "hat", "wird"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Direct or indirect?",
          questions: [
            {
              q: "Which is the correct indirect question?",
              options: [
                "Könnten Sie mir sagen, wo ist der Bahnhof?",
                "Könnten Sie mir sagen, wo der Bahnhof ist?",
                "Könnten Sie mir sagen, der Bahnhof wo ist?",
                "Könnten Sie sagen mir, wo der Bahnhof ist?",
              ],
              correct: 1,
            },
            {
              q: "For a yes/no indirect question you introduce the clause with…",
              options: ["wo", "ob", "dass", "wenn"],
              correct: 1,
            },
            {
              q: "In an indirect question, the conjugated verb goes…",
              options: ["right after the question word", "to the end of the clause", "first", "after the subject only"],
              correct: 1,
            },
            {
              q: "'vielleicht' added to a request makes it…",
              options: ["more direct", "more formal only", "gentler / softer", "a command"],
              correct: 2,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Could you tell me where the nearest stop is and when the bus comes?",
          reference: "Könnten Sie mir sagen, wo die nächste Haltestelle ist und wann der Bus kommt?",
          hint: "Both indirect clauses send the verb to the end: … ist … kommt.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Pick the correct indirect question:",
              options: [
                "Wissen Sie, wann kommt der Bus?",
                "Wissen Sie, wann der Bus kommt?",
                "Wissen Sie, der Bus wann kommt?",
                "Wissen Sie, kommt wann der Bus?",
              ],
              correct: 1,
            },
            {
              q: "'Whether' in a German indirect question is…",
              options: ["wenn", "ob", "dass", "wo"],
              correct: 1,
            },
            {
              q: "In an indirect clause, the verb goes to the…",
              options: ["beginning", "middle", "end", "second position"],
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
        q: "The polite (Konjunktiv II) form of 'Können Sie?' is…",
        options: ["Konnten Sie?", "Könnten Sie?", "Können Sie?", "Kannst Sie?"],
        correct: 1,
      },
      {
        q: "'I would like a coffee' (ordering) =",
        options: [
          "Ich will einen Kaffee.",
          "Ich habe einen Kaffee.",
          "Ich hätte gern einen Kaffee.",
          "Ich kann einen Kaffee.",
        ],
        correct: 2,
      },
      {
        q: "'würde' is the Konjunktiv II of…",
        options: ["wollen", "werden", "wissen", "wären"],
        correct: 1,
      },
      {
        q: "In 'Würden Sie mir bitte helfen?', the verb 'helfen' is…",
        options: ["at the front", "at the end", "second", "missing"],
        correct: 1,
      },
      {
        q: "'Wären Sie so nett, …?' means…",
        options: [
          "Are you nice?",
          "Would you be so kind as to …?",
          "Were you kind?",
          "Can you be nice?",
        ],
        correct: 1,
      },
      {
        q: "After 'Wären Sie so nett,' you use a…",
        options: ["plain infinitive", "zu-infinitive", "past participle", "question word"],
        correct: 1,
      },
      {
        q: "Which is the correct indirect question?",
        options: [
          "Könnten Sie mir sagen, wo ist der Bahnhof?",
          "Könnten Sie mir sagen, wo der Bahnhof ist?",
          "Könnten Sie mir sagen, der Bahnhof wo ist?",
          "Könnten Sie mir, wo der Bahnhof ist, sagen nicht?",
        ],
        correct: 1,
      },
      {
        q: "For a yes/no indirect question you use…",
        options: ["wo", "ob", "wann", "wie"],
        correct: 1,
      },
      {
        q: "In an indirect question the conjugated verb goes to the…",
        options: ["front", "second slot", "end of the clause", "middle"],
        correct: 2,
      },
      {
        q: "Translate: 'Could you tell me where the station is?'",
        options: [
          "Könnten Sie mir sagen, wo der Bahnhof ist?",
          "Können Sie sagen, wo ist der Bahnhof?",
          "Würden Sie, der Bahnhof wo ist?",
          "Könnten Sie wo der Bahnhof sagen?",
        ],
        correct: 0,
      },
    ],
  },
};
