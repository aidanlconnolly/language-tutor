import type { Unit } from "../types";

export const UNIT_CONGIUNTIVO: Unit = {
  slug: "congiuntivo",
  stage: 8,
  order: 34,
  icon: "🤔",
  title: "Subjunctive intro",
  tagline: "Credo che, penso che, spero che — the subjunctive without the panic.",
  badge: "advanced",
  lessons: [
    {
      slug: "congiuntivo-why",
      title: "Why subjunctive exists (and why it's not that scary)",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "It's the mood of uncertainty",
          body: [
            "The subjunctive (<em>congiuntivo</em>) is what Italian uses when you're talking about things that are NOT factual — opinions, doubts, hopes, desires, fears, hypotheticals.",
            "English has barely-there subjunctive (\"I wish I <strong>were</strong> there\"). Italian uses it constantly.",
            "<strong>The good news:</strong> 80% of subjunctive triggers are predictable. Memorize a few patterns and you can deploy it.",
            "<strong>The 90% rule:</strong> if your sentence has the word <em>che</em> after a verb of opinion/doubt/hope/feeling, you probably need subjunctive.",
            "<em>Penso che sia vero.</em> (subjunctive) vs <em>So che è vero.</em> (indicative — fact).",
          ],
          keyPoint:
            "Subjunctive = NOT factual (opinion, doubt, hope, feeling). Triggered by 'che' after verbs of opinion/doubt/hope. So che → fact. Penso che → opinion (subjunctive).",
        },
        {
          type: "vocab",
          heading: "Triggers — verbs that demand subjunctive",
          intro: "Mostly verbs of opinion, doubt, desire, emotion. After these + 'che', subjunctive follows.",
          items: [
            { it: "penso che…", en: "I think that…" },
            { it: "credo che…", en: "I believe that…" },
            { it: "spero che…", en: "I hope that…" },
            { it: "voglio che…", en: "I want that…" },
            { it: "preferisco che…", en: "I prefer that…" },
            { it: "ho paura che…", en: "I'm afraid that…" },
            { it: "mi sembra che…", en: "it seems to me that…" },
            { it: "è importante che…", en: "it's important that…" },
            { it: "bisogna che…", en: "it's necessary that…" },
            { it: "è meglio che…", en: "it's better that…" },
            { it: "non sono sicuro che…", en: "I'm not sure that…" },
            { it: "benché / sebbene / nonostante", en: "although / despite" },
            { it: "prima che / a meno che / purché", en: "before / unless / provided that" },
          ],
        },
        {
          type: "tip",
          heading: "Compare: indicative vs subjunctive",
          body: "<em>So che Marco è italiano.</em> = I know Marco is Italian. → Fact → indicative (è).<br><em>Penso che Marco sia italiano.</em> = I think Marco is Italian. → Opinion → subjunctive (sia).<br><br>The verb 'sa che' (knows that) takes indicative; 'pensa che / crede che' take subjunctive. Italian is keeping track of whether you're stating a fact or an opinion.",
        },
        {
          type: "multipleChoice",
          heading: "Indicative or subjunctive?",
          questions: [
            {
              q: "'So che Anna è qui.' uses…",
              options: [
                "indicative — it's a fact",
                "subjunctive — uncertainty",
                "future tense",
                "conditional",
              ],
              correct: 0,
            },
            {
              q: "'Penso che Anna ___ qui.' (essere)",
              options: ["è", "sia", "era", "sarà"],
              correct: 1,
              fb: "Penso che → subjunctive → sia.",
            },
            {
              q: "'Spero che tu ___ presto.' (arrivare)",
              options: ["arrivi", "arrivò", "arriverai", "arrivasti"],
              correct: 0,
              fb: "Spero che → subjunctive present → arrivi.",
            },
            {
              q: "Which is a subjunctive trigger?",
              options: ["so che", "vedo che", "voglio che", "dico che"],
              correct: 2,
              fb: "Voglio che (I want that) triggers subjunctive; the others are factual.",
            },
          ],
        },
      ],
    },
    {
      slug: "congiuntivo-formation",
      title: "How to form the present subjunctive",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The endings are simple — io / tu / lui share a form",
          body: [
            "<strong>-are verbs</strong> → -i, -i, -i, -iamo, -iate, -ino",
            "<strong>-ere verbs</strong> → -a, -a, -a, -iamo, -iate, -ano",
            "<strong>-ire verbs</strong> → -a, -a, -a, -iamo, -iate, -ano (same as -ere)",
            "Notice: <strong>io, tu, and lui/lei share the same form</strong>. Italians often add the subject pronoun (io, tu, lui) for clarity: <em>spero che tu venga</em>.",
            "<em>parlare → parli, parli, parli, parliamo, parliate, parlino</em>",
            "<em>credere → creda, creda, creda, crediamo, crediate, credano</em>",
            "<em>dormire → dorma, dorma, dorma, dormiamo, dormiate, dormano</em>",
          ],
          keyPoint:
            "-are → -i / -iamo / -iate / -ino. -ere & -ire → -a / -iamo / -iate / -ano. io = tu = lui form, so add pronoun for clarity.",
        },
        {
          type: "conjugation",
          heading: "Three families in present subjunctive",
          verb: "parlare / credere / dormire",
          meaning: "present subjunctive",
          tenses: [
            {
              name: "Side-by-side",
              forms: [
                { person: "(che) io", form: "parli / creda / dorma", en: "I speak / believe / sleep" },
                { person: "(che) tu", form: "parli / creda / dorma", en: "you" },
                { person: "(che) lui/lei", form: "parli / creda / dorma", en: "he/she" },
                { person: "(che) noi", form: "parliamo / crediamo / dormiamo", en: "we (same as present indicative!)" },
                { person: "(che) voi", form: "parliate / crediate / dormiate", en: "you all" },
                { person: "(che) loro", form: "parlino / credano / dormano", en: "they" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "The irregular essentials",
          verb: "essere / avere / andare / fare / dare / sapere / volere",
          meaning: "irregular present subjunctive",
          intro: "Memorize these — they show up constantly with 'penso/spero/credo che'.",
          tenses: [
            {
              name: "Subjunctive (io = tu = lui form)",
              forms: [
                { person: "essere", form: "sia (sia, sia, siamo, siate, siano)", en: "I/you/he be" },
                { person: "avere", form: "abbia (abbiamo, abbiate, abbiano)", en: "I/you/he have" },
                { person: "andare", form: "vada (andiamo, andiate, vadano)", en: "I/you/he go" },
                { person: "fare", form: "faccia (facciamo, facciate, facciano)", en: "I/you/he do" },
                { person: "dare", form: "dia (diamo, diate, diano)", en: "I/you/he give" },
                { person: "sapere", form: "sappia (sappiamo, sappiate, sappiano)", en: "I/you/he know" },
                { person: "volere", form: "voglia (vogliamo, vogliate, vogliano)", en: "I/you/he want" },
                { person: "potere", form: "possa (possiamo, possiate, possano)", en: "I/you/he can" },
                { person: "dovere", form: "debba (dobbiamo, dobbiate, debbano)", en: "I/you/he must" },
                { person: "venire", form: "venga (veniamo, veniate, vengano)", en: "I/you/he come" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Subjunctive practice",
          items: [
            {
              template: "Penso che lui ___ in ritardo. (essere)",
              answer: "sia",
              en: "I think he's late.",
              options: ["è", "sia", "fosse", "era"],
            },
            {
              template: "Spero che tu ___ bene. (stare)",
              answer: "stia",
              en: "I hope you're well.",
              options: ["stai", "stia", "starai", "stavi"],
            },
            {
              template: "È meglio che voi ___ subito. (partire)",
              answer: "partiate",
              en: "It's better that you all leave right away.",
              options: ["partite", "partiate", "partirete", "partirebbero"],
            },
            {
              template: "Credo che loro ___ italiani. (essere)",
              answer: "siano",
              en: "I believe they're Italian.",
              options: ["sono", "siano", "fossero", "erano"],
            },
            {
              template: "Bisogna che (lei) ___ il documento. (avere)",
              answer: "abbia",
              en: "It's necessary that she has the document.",
              options: ["ha", "abbia", "avrà", "avesse"],
            },
            {
              template: "Voglio che tu ___ a casa. (andare)",
              answer: "vada",
              en: "I want you to go home.",
              options: ["vai", "vada", "andrai", "andasti"],
            },
            {
              template: "Mi sembra che ___ bel tempo domani. (fare)",
              answer: "faccia",
              en: "It seems like it'll be nice weather tomorrow.",
              options: ["fa", "faccia", "farà", "facesse"],
            },
          ],
        },
      ],
    },
    {
      slug: "congiuntivo-when-skip",
      title: "When to skip it (don't overuse)",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Italians often skip subjunctive — and that's normal",
          body: [
            "In spoken everyday Italian, the subjunctive is often replaced by the indicative, especially with 'penso che'. <em>«Penso che è vero»</em> is technically wrong but you'll hear it constantly.",
            "Where you SHOULD use subjunctive:",
            "• Written Italian, especially formal contexts",
            "• Speaking to educated Italians who'll appreciate it",
            "• Whenever you want to sound polished",
            "Where you can skip it (and Italians will too):",
            "• Casual conversation with friends",
            "• Phrases where the subjunctive form is identical to the indicative anyway",
            "<strong>Bottom line:</strong> learn it, use it in writing and formal speech, don't sweat it in chat.",
          ],
          keyPoint:
            "Subjunctive matters in writing and formal speech. Casual chat often skips it. Don't beat yourself up; even native Italians cut corners.",
        },
        {
          type: "vocab",
          heading: "Cases where subjunctive is REQUIRED",
          items: [
            { it: "spero che + subj.", en: "I hope that…" },
            { it: "è importante / necessario che + subj.", en: "it's important / necessary that…" },
            { it: "bisogna che + subj.", en: "it's necessary that…" },
            { it: "voglio che + subj.", en: "I want that…" },
            { it: "preferisco che + subj.", en: "I prefer that…" },
            { it: "benché / sebbene / nonostante + subj.", en: "although / despite the fact that…" },
            { it: "prima che + subj.", en: "before…" },
            { it: "a meno che (non) + subj.", en: "unless…" },
            { it: "purché + subj.", en: "provided that…" },
            { it: "chiunque / qualunque + subj.", en: "whoever / whatever…" },
          ],
        },
        {
          type: "dialogue",
          heading: "Subjunctive in chat",
          setup: "Two friends.",
          lines: [
            { speaker: "Anna", it: "Pensi che Marco venga stasera?", en: "Do you think Marco's coming tonight?" },
            { speaker: "You", it: "Spero di sì. Mi ha detto che voleva, ma non è sicuro.", en: "I hope so. He told me he wanted to, but it's not certain." },
            { speaker: "Anna", it: "È strano che non ci abbia detto niente fino ad ora.", en: "It's strange he hasn't told us anything until now." },
            { speaker: "You", it: "Magari sta lavorando ancora. È possibile che debba fare gli straordinari.", en: "Maybe he's still working. It's possible he has to do overtime." },
            { speaker: "Anna", it: "Vabbè, lo aspettiamo. Voglio che assaggi questo vino — è incredibile.", en: "Whatever, we'll wait. I want him to taste this wine — it's incredible." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the right subjunctive",
          items: [
            {
              template: "Spero che voi ___ bene. (stare)",
              answer: "stiate",
              en: "I hope you all are well.",
              options: ["state", "stiate", "starete", "stavate"],
            },
            {
              template: "Benché ___ stanco, esce. (essere — lui)",
              answer: "sia",
              en: "Although he's tired, he's going out.",
              options: ["è", "sia", "era", "fosse"],
            },
            {
              template: "Prima che (tu) ___ , chiamami. (partire)",
              answer: "parta",
              en: "Before you leave, call me.",
              options: ["parti", "parta", "partirai", "partisti"],
            },
            {
              template: "Non penso che ___ vero. (essere)",
              answer: "sia",
              en: "I don't think it's true.",
              options: ["è", "sia", "fosse", "era"],
            },
            {
              template: "Voglio che voi ___ subito. (andare)",
              answer: "andiate",
              en: "I want you all to go right away.",
              options: ["andate", "andiate", "andrete", "andate"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "I think he's right. It's important that we listen to him.",
          reference: "Penso che (lui) abbia ragione. È importante che lo ascoltiamo.",
          hint: "'Penso che + subjunctive' → abbia. 'È importante che + subjunctive' → ascoltiamo (same as present here).",
        },
        {
          type: "tip",
          heading: "Imperfect subjunctive — coming soon",
          body: "There's also <em>congiuntivo imperfetto</em> for hypotheticals in the past: <em>«Se fossi ricco…»</em> = If I were rich… The forms (fossi, avessi, andassi, parlassi) are common in 'if'-clauses and reported speech. Save this for later — for now, present subjunctive is plenty.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "The subjunctive is the mood of…",
        options: [
          "factual statements",
          "uncertainty / opinion / desire / emotion",
          "past actions",
          "future predictions",
        ],
        correct: 1,
      },
      {
        q: "Which triggers the subjunctive?",
        options: ["so che", "vedo che", "penso che", "dico che"],
        correct: 2,
      },
      {
        q: "Present subjunctive of 'essere' (io) =",
        options: ["sono", "sia", "fossi", "ero"],
        correct: 1,
      },
      {
        q: "Present subjunctive of 'avere' (io) =",
        options: ["ho", "abbia", "avessi", "avevo"],
        correct: 1,
      },
      {
        q: "Subjunctive of 'parlare' for -are verbs (io/tu/lui all share) =",
        options: ["parla", "parlo", "parli", "parlasse"],
        correct: 2,
      },
      {
        q: "Why do Italians often add the subject pronoun with subjunctive?",
        options: [
          "for emphasis only",
          "because io / tu / lui share the same verb form, so the pronoun disambiguates",
          "because subjunctive needs a pronoun by law",
          "they don't",
        ],
        correct: 1,
      },
      {
        q: "'Spero che tu ___ bene.' (stare)",
        options: ["stai", "stia", "starai", "starebbe"],
        correct: 1,
      },
      {
        q: "'Penso che ___ vero.' (essere)",
        options: ["è", "sia", "fosse", "sarà"],
        correct: 1,
      },
      {
        q: "Subjunctive after 'so che' (I know that) =",
        options: ["always required", "never required (so che = fact = indicative)", "optional", "depends on time"],
        correct: 1,
      },
      {
        q: "Translate: 'I want you to go home.'",
        options: [
          "Voglio che tu vai a casa.",
          "Voglio che tu vada a casa.",
          "Voglio tu andare a casa.",
          "Voglio che andrai a casa.",
        ],
        correct: 1,
      },
    ],
  },
};
