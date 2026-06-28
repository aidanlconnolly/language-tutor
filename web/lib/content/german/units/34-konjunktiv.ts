import type { Unit } from "../../types";

export const UNIT_KONJUNKTIV: Unit = {
  slug: "konjunktiv",
  stage: 8,
  order: 34,
  icon: "🤔",
  title: "Konjunktiv II",
  tagline: "würde, hätte, wäre, könnte — hypotheticals and politeness.",
  badge: "advanced",
  lessons: [
    {
      slug: "konjunktiv-wuerde",
      title: "würde + infinitive: the easy hypothetical",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "How Germans say 'would'",
          body: [
            "The <strong>Konjunktiv II</strong> is German's mood for things that are <em>unreal, hypothetical, or polite</em> — the equivalent of English 'would'. The good news: for almost every verb you can build it with a single helper.",
            "Take <strong>würde</strong> (the Konjunktiv form of werden) and add the plain <strong>infinitive</strong> at the end: <em>Ich <strong>würde</strong> gern nach Berlin <strong>fahren</strong>.</em> = I would like to travel to Berlin.",
            "This is the same verb-bracket you already know from the future and modals: the conjugated piece (würde) sits in second position, the infinitive waits at the end.",
          ],
          keyPoint:
            "würde + infinitive = 'would (do)'. ich würde, du würdest, er/sie würde, wir würden, ihr würdet, sie würden. The infinitive goes to the END.",
        },
        {
          type: "conjugation",
          heading: "würde — the all-purpose 'would'",
          verb: "würde",
          meaning: "would (Konjunktiv II of werden)",
          intro: "Conjugate würde, then bolt any infinitive onto the end.",
          tenses: [
            {
              name: "würde (conjugated)",
              forms: [
                { person: "ich", form: "würde", en: "I would" },
                { person: "du", form: "würdest", en: "you would" },
                { person: "er / sie / es", form: "würde", en: "he / she / it would" },
                { person: "wir", form: "würden", en: "we would" },
                { person: "ihr", form: "würdet", en: "you all would" },
                { person: "sie / Sie", form: "würden", en: "they / you (formal) would" },
              ],
            },
            {
              name: "würde + infinitive in a sentence",
              forms: [
                { person: "Ich würde gern kommen.", form: "würde … kommen", en: "I would like to come." },
                { person: "Würdest du mir helfen?", form: "würdest … helfen", en: "Would you help me?" },
                { person: "Das würde ich nie machen.", form: "würde … machen", en: "I would never do that." },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "würde softens almost anything",
          body: "Compare the blunt present tense with the gentle Konjunktiv. <em>Machst du das?</em> = Do that (rather direct). <em>Würdest du das machen?</em> = Would you do that? — much more polite. As a learner, when in doubt, reach for <strong>würde + infinitive</strong>; it works for nearly every verb and instantly sounds more refined.",
          example: { l1: "Würden Sie bitte das Fenster schließen?", en: "Would you please close the window?" },
        },
        {
          type: "fillBlank",
          heading: "Conjugate würde",
          intro: "Put würde in the right form. The infinitive stays at the end.",
          items: [
            {
              template: "Ich ___ gern ein Eis essen.",
              answer: "würde",
              en: "I would like to eat an ice cream.",
              options: ["würde", "würdest", "würden", "wird"],
            },
            {
              template: "___ du mir kurz helfen?",
              answer: "Würdest",
              en: "Would you help me for a moment?",
              options: ["Würde", "Würdest", "Würden", "Wird"],
            },
            {
              template: "Wir ___ lieber zu Hause bleiben.",
              answer: "würden",
              en: "We would rather stay home.",
              options: ["würde", "würdest", "würden", "wirst"],
            },
            {
              template: "___ Sie bitte hier unterschreiben?",
              answer: "Würden",
              en: "Would you please sign here?",
              options: ["Würde", "Würdest", "Würden", "Wird"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the would-sentence",
          intro: "würde in second position, infinitive at the end.",
          items: [
            { tokens: ["Ich", "würde", "gern", "nach", "Berlin", "fahren"], en: "I would like to travel to Berlin." },
            { tokens: ["Würdest", "du", "mir", "einen", "Kaffee", "machen"], en: "Would you make me a coffee?" },
            { tokens: ["Das", "würde", "ich", "nie", "sagen"], en: "I would never say that." },
            { tokens: ["Wir", "würden", "uns", "sehr", "freuen"], en: "We would be very happy." },
          ],
        },
      ],
    },
    {
      slug: "konjunktiv-haette-waere-koennte",
      title: "hätte, wäre, könnte, müsste: the irregulars",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The verbs that don't use würde",
          body: [
            "A handful of very common verbs sound clumsy with würde, so German uses a dedicated Konjunktiv II form instead. You'll use these constantly:",
            "<strong>hätte</strong> = would have (from haben) · <strong>wäre</strong> = would be (from sein) · <strong>könnte</strong> = could (from können) · <strong>müsste</strong> = would have to (from müssen) · <strong>sollte</strong> = should (from sollen) · <strong>möchte</strong> = would like (from mögen).",
            "Notice the pattern: most are the past-tense stem plus an <strong>umlaut</strong> and the Konjunktiv endings (hatte → hätte, war → wäre, konnte → könnte, musste → müsste).",
          ],
          keyPoint:
            "Don't say 'würde haben/sein/können'. Use hätte (would have), wäre (would be), könnte (could), müsste (would have to), sollte (should).",
        },
        {
          type: "conjugation",
          heading: "hätte and wäre",
          verb: "hätte / wäre",
          meaning: "would have / would be",
          intro: "The two workhorses. Endings: -e, -est, -e, -en, -et, -en.",
          tenses: [
            {
              name: "hätte (haben → would have)",
              forms: [
                { person: "ich", form: "hätte", en: "I would have" },
                { person: "du", form: "hättest", en: "you would have" },
                { person: "er / sie / es", form: "hätte", en: "he / she / it would have" },
                { person: "wir", form: "hätten", en: "we would have" },
                { person: "ihr", form: "hättet", en: "you all would have" },
                { person: "sie / Sie", form: "hätten", en: "they / you (formal) would have" },
              ],
            },
            {
              name: "wäre (sein → would be)",
              forms: [
                { person: "ich", form: "wäre", en: "I would be" },
                { person: "du", form: "wärst", en: "you would be" },
                { person: "er / sie / es", form: "wäre", en: "he / she / it would be" },
                { person: "wir", form: "wären", en: "we would be" },
                { person: "ihr", form: "wärt", en: "you all would be" },
                { person: "sie / Sie", form: "wären", en: "they / you (formal) would be" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "könnte and müsste",
          verb: "könnte / müsste",
          meaning: "could / would have to",
          intro: "The modal verbs in Konjunktiv II — note the umlaut on the past stem.",
          tenses: [
            {
              name: "könnte (können → could)",
              forms: [
                { person: "ich", form: "könnte", en: "I could" },
                { person: "du", form: "könntest", en: "you could" },
                { person: "er / sie / es", form: "könnte", en: "he / she / it could" },
                { person: "wir", form: "könnten", en: "we could" },
                { person: "sie / Sie", form: "könnten", en: "they / you (formal) could" },
              ],
            },
            {
              name: "müsste / sollte (would have to / should)",
              forms: [
                { person: "ich müsste", form: "müsste", en: "I would have to" },
                { person: "du müsstest", form: "müsstest", en: "you would have to" },
                { person: "ich sollte", form: "sollte", en: "I should" },
                { person: "du solltest", form: "solltest", en: "you should" },
                { person: "wir sollten", form: "sollten", en: "we should" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Daydreaming about the weekend",
          setup: "Sara and Kemal imagine a free Saturday in Berlin.",
          lines: [
            { speaker: "Sara", l1: "Wenn ich frei hätte, wäre ich jetzt am Wannsee.", en: "If I had time off, I'd be at the Wannsee right now." },
            { speaker: "Kemal", l1: "Das wäre schön. Wir könnten ein Boot mieten.", en: "That would be nice. We could rent a boat." },
            { speaker: "Sara", l1: "Ich müsste nur vorher die Arbeit fertig machen.", en: "I'd just have to finish the work beforehand." },
            { speaker: "Kemal", l1: "Du solltest dir wirklich mal eine Pause gönnen.", en: "You should really treat yourself to a break sometime." },
            { speaker: "Sara", l1: "Stimmt. Hätte ich mehr Zeit, würde ich öfter rausfahren.", en: "True. If I had more time, I'd get out of town more often." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "würde or a special form?",
          intro: "Pick the natural Konjunktiv. Avoid würde with haben, sein, and the modals.",
          questions: [
            {
              q: "'I would have more time' =",
              options: ["Ich würde mehr Zeit haben", "Ich hätte mehr Zeit", "Ich habe mehr Zeit", "Ich würde Zeit"],
              correct: 1,
              fb: "Use hätte, not würde + haben.",
            },
            {
              q: "'That would be great' =",
              options: ["Das würde super sein", "Das wäre super", "Das ist super", "Das wäret super"],
              correct: 1,
              fb: "Use wäre, not würde + sein.",
            },
            {
              q: "'Could you help me?' =",
              options: ["Würdest du können helfen?", "Könntest du mir helfen?", "Kannst du können?", "Könnte du helfen?"],
              correct: 1,
              fb: "könntest — the Konjunktiv of können.",
            },
            {
              q: "'I would buy a bike' (regular verb) =",
              options: ["Ich kaufte ein Rad", "Ich hätte ein Rad", "Ich würde ein Rad kaufen", "Ich wäre ein Rad"],
              correct: 2,
              fb: "Regular verbs take würde + infinitive.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the irregular form",
          intro: "hätte, wäre, könnte, müsste or sollte?",
          items: [
            {
              template: "Ich ___ jetzt gern einen Kaffee. (haben)",
              answer: "hätte",
              en: "I would like a coffee right now.",
              options: ["hätte", "wäre", "könnte", "würde"],
            },
            {
              template: "Das ___ wirklich toll. (sein)",
              answer: "wäre",
              en: "That would be really great.",
              options: ["hätte", "wäre", "müsste", "sollte"],
            },
            {
              template: "___ du mir bitte die Tür öffnen? (können)",
              answer: "Könntest",
              en: "Could you please open the door for me?",
              options: ["Hättest", "Wärst", "Könntest", "Müsstest"],
            },
            {
              template: "Du ___ mehr schlafen, du siehst müde aus. (sollen)",
              answer: "solltest",
              en: "You should sleep more, you look tired.",
              options: ["könntest", "solltest", "hättest", "wärst"],
            },
            {
              template: "Wir ___ eigentlich schon längst los. (müssen)",
              answer: "müssten",
              en: "We actually should have left long ago.",
              options: ["hätten", "wären", "müssten", "würden"],
            },
          ],
        },
      ],
    },
    {
      slug: "konjunktiv-wishes-requests",
      title: "Wishes & polite requests",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Putting the Konjunktiv to work",
          body: [
            "Now the payoff. Three real-world jobs the Konjunktiv II does every day:",
            "<strong>Polite ordering:</strong> <em>Ich hätte gern…</em> = I'd like… (the standard way to order in a café or shop — softer than 'Ich will').",
            "<strong>Hypothetical 'if':</strong> <em>Wenn ich reich wäre, würde ich…</em> = If I were rich, I would… Both halves go Konjunktiv, and the wenn-clause sends its verb to the end.",
            "<strong>Giving advice:</strong> <em>An deiner Stelle würde ich…</em> = If I were you (literally 'in your place'), I would… A perfectly natural, gentle way to suggest something.",
          ],
          keyPoint:
            "Ich hätte gern… (ordering) · Wenn ich … wäre, würde ich… (hypothetical) · An deiner Stelle würde ich… (advice). Polite, B1, everywhere.",
        },
        {
          type: "vocab",
          heading: "Ready-made polite phrases",
          intro: "Memorize these as fixed chunks.",
          items: [
            { l1: "Ich hätte gern…", en: "I'd like… (ordering)", note: "The polite default in shops and cafés." },
            { l1: "Ich möchte gern…", en: "I'd like… (also polite)", note: "möchte = Konjunktiv of mögen." },
            { l1: "Könnten Sie mir bitte…?", en: "Could you please…? (formal)" },
            { l1: "Würden Sie bitte…?", en: "Would you please…?" },
            { l1: "Wäre es möglich, …?", en: "Would it be possible to…?" },
            { l1: "An deiner Stelle würde ich…", en: "If I were you, I would…" },
            { l1: "Ich an deiner Stelle…", en: "Me in your place…", note: "Shorter, very common spoken form." },
            { l1: "Wenn ich du wäre, …", en: "If I were you, …" },
            { l1: "Du solltest…", en: "You should…", note: "Friendly advice." },
            { l1: "Es wäre besser, wenn…", en: "It would be better if…" },
            { l1: "Hätten Sie vielleicht…?", en: "Would you happen to have…?" },
            { l1: "Ich würde sagen, …", en: "I'd say… (softening an opinion)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering and advising",
          setup: "At a Berlin café; then a quick word of advice.",
          lines: [
            { speaker: "Kellner", l1: "Was darf es sein?", en: "What can I get you?" },
            { speaker: "You", l1: "Ich hätte gern einen Cappuccino und ein Stück Kuchen, bitte.", en: "I'd like a cappuccino and a piece of cake, please." },
            { speaker: "Kellner", l1: "Gern. Hätten Sie sonst noch einen Wunsch?", en: "Sure. Would you like anything else?" },
            { speaker: "You", l1: "Nein, danke. Könnten Sie mir vielleicht die Rechnung gleich bringen?", en: "No, thanks. Could you maybe bring me the bill right away?" },
            { speaker: "Freund", l1: "Ich weiß nicht, ob ich das Praktikum annehmen soll.", en: "I don't know whether I should accept the internship." },
            { speaker: "You", l1: "An deiner Stelle würde ich es machen. Es wäre eine gute Chance.", en: "If I were you, I'd do it. It would be a good opportunity." },
          ],
        },
        {
          type: "tip",
          heading: "'Ich hätte gern' beats 'Ich will'",
          body: "In a shop or café, <em>Ich will einen Kaffee</em> sounds borderline rude — like a child demanding something. The polite adult version is <strong>Ich hätte gern einen Kaffee</strong> or <strong>Ich möchte gern…</strong>. Same goes for requests: prefer <em>Könnten Sie…?</em> over <em>Können Sie…?</em> The Konjunktiv is the politeness layer.",
          example: { l1: "Ich hätte gern die Speisekarte, bitte.", en: "I'd like the menu, please." },
        },
        {
          type: "orderWords",
          heading: "Build the hypothetical",
          intro: "Watch the verb-final wenn-clause and the verb-comma-verb flip.",
          items: [
            { tokens: ["Wenn", "ich", "reich", "wäre", ",", "würde", "ich", "reisen"], en: "If I were rich, I would travel." },
            { tokens: ["An", "deiner", "Stelle", "würde", "ich", "ihn", "fragen"], en: "If I were you, I would ask him." },
            { tokens: ["Ich", "hätte", "gern", "ein", "Glas", "Wasser"], en: "I'd like a glass of water." },
            { tokens: ["Es", "wäre", "besser", ",", "wenn", "du", "früher", "kämst"], en: "It would be better if you came earlier." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "If I were you, I would stay home, because it would be better.",
          reference: "An deiner Stelle würde ich zu Hause bleiben, weil es besser wäre.",
          hint: "Start with 'An deiner Stelle würde ich…', then a weil-clause sending 'wäre' to the end.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "The polite way to order a coffee:",
              options: [
                "Ich will einen Kaffee.",
                "Ich hätte gern einen Kaffee.",
                "Gib mir einen Kaffee.",
                "Ich habe einen Kaffee.",
              ],
              correct: 1,
            },
            {
              q: "'If I were rich, I would travel' =",
              options: [
                "Wenn ich reich bin, reise ich.",
                "Wenn ich reich wäre, würde ich reisen.",
                "Wenn ich reich werde, würde ich reisen.",
                "Wenn ich wäre reich, ich würde reisen.",
              ],
              correct: 1,
            },
            {
              q: "'If I were you, I would…' =",
              options: [
                "In deinem Platz würde ich…",
                "An deiner Stelle würde ich…",
                "Wie du würde ich…",
                "Für dich würde ich…",
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
        q: "How do you build the Konjunktiv II for most regular verbs?",
        options: [
          "past tense + umlaut",
          "würde + infinitive",
          "haben + participle",
          "werden + infinitive",
        ],
        correct: 1,
      },
      {
        q: "Where does the infinitive go after 'würde'?",
        options: ["at the front", "in second position", "at the end", "right after würde"],
        correct: 2,
      },
      {
        q: "'I would have' (from haben) =",
        options: ["ich würde haben", "ich hätte", "ich habe", "ich hatte"],
        correct: 1,
      },
      {
        q: "'That would be great' =",
        options: ["Das würde super sein", "Das wäre super", "Das ist super", "Das war super"],
        correct: 1,
      },
      {
        q: "'Could you help me?' (formal) =",
        options: ["Können Sie helfen?", "Könnten Sie mir helfen?", "Würden Sie können?", "Konnten Sie helfen?"],
        correct: 1,
      },
      {
        q: "The polite way to order: 'I'd like a tea' =",
        options: ["Ich will einen Tee", "Ich hätte gern einen Tee", "Ich habe einen Tee", "Gib mir einen Tee"],
        correct: 1,
      },
      {
        q: "Which is the Konjunktiv form of 'müssen'?",
        options: ["musste", "müsste", "muss", "müssen"],
        correct: 1,
      },
      {
        q: "'If I were you, I would ask' =",
        options: [
          "An deiner Stelle würde ich fragen.",
          "In deinem Ort würde ich fragen.",
          "Wenn ich du würde, frage ich.",
          "Bei dir würde ich fragen.",
        ],
        correct: 0,
      },
      {
        q: "Complete: 'Wenn ich Zeit ___, würde ich kommen.'",
        options: ["habe", "hätte", "hatte", "haben"],
        correct: 1,
      },
      {
        q: "Which verb should NOT take 'würde'?",
        options: ["kaufen", "spielen", "sein", "arbeiten"],
        correct: 2,
      },
    ],
  },
};
