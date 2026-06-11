import type { Unit } from "../../types";

export const UNIT_SUBJONCTIF: Unit = {
  slug: "subjonctif",
  stage: 8,
  order: 34,
  icon: "🤔",
  title: "Subjonctif intro",
  tagline: "Je veux que, il faut que — verbes courants.",
  lessons: [
    {
      slug: "subjonctif-main",
      title: "The subjunctive mood — first steps",
      estMinutes: 11,
      pages: [
        {
          type: "intro",
          heading: "The subjunctive: emotion, necessity, doubt, desire",
          body: [
            "The <strong>subjonctif</strong> appears after expressions of necessity, emotion, doubt, will, and desire — usually triggered by <em>que</em>. It's not a tense but a mood; the action is viewed as subjective, hypothetical, or desired rather than factual.",
            "Common triggers: <em>il faut que</em> (it's necessary that), <em>je veux que</em> (I want that), <em>je suis content que</em> (I'm happy that), <em>il est important que</em> (it's important that), <em>bien que</em> (although), <em>pour que</em> (so that).",
            "Formation for regular verbs: take the <em>ils</em> form of the present, drop -<em>ent</em>, add subjunctive endings <strong>-e, -es, -e, -ions, -iez, -ent</strong>. The je/tu/il/ils forms often sound like the present, but nous/vous resemble the imparfait.",
          ],
          keyPoint: "Subjonctif after que + necessity/emotion/desire/doubt. Endings: -e, -es, -e, -ions, -iez, -ent.",
        },
        {
          type: "conjugation",
          heading: "Parler & irregulars — subjonctif présent",
          verb: "parler / être / avoir / faire / aller",
          meaning: "subjunctive forms",
          tenses: [
            {
              name: "subjonctif — parler (regular)",
              forms: [
                { person: "que je", form: "parle", en: "that I speak" },
                { person: "que tu", form: "parles", en: "that you speak" },
                { person: "qu'il/elle", form: "parle", en: "that he/she speaks" },
                { person: "que nous", form: "parlions", en: "that we speak" },
                { person: "que vous", form: "parliez", en: "that you speak" },
                { person: "qu'ils/elles", form: "parlent", en: "that they speak" },
              ],
            },
            {
              name: "key irregulars (je form)",
              forms: [
                { person: "être", form: "que je sois", en: "that I be" },
                { person: "avoir", form: "que j'aie", en: "that I have" },
                { person: "faire", form: "que je fasse", en: "that I do" },
                { person: "aller", form: "que j'aille", en: "that I go" },
                { person: "pouvoir", form: "que je puisse", en: "that I can" },
                { person: "savoir", form: "que je sache", en: "that I know" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Il faut que — the most common trigger",
          body: "<em>Il faut que</em> (it's necessary that / one must) is the gateway to the subjunctive for most learners. <em>Il faut que je parte</em> (I must leave). <em>Il faut que tu sois à l'heure</em> (You must be on time). You'll hear this constantly.",
          example: { l1: "Il faut que tu fasses tes devoirs avant de sortir.", en: "You have to do your homework before going out." },
        },
        {
          type: "fillBlank",
          heading: "Subjunctive practice",
          items: [
            { template: "Il faut que je ___ (partir) maintenant.", answer: "parte", en: "I have to leave now." },
            { template: "Je veux que tu ___ (être) heureux.", answer: "sois", en: "I want you to be happy." },
            { template: "Il est important que nous ___ (faire) attention.", answer: "fassions", en: "It's important that we pay attention." },
            { template: "Je suis content que vous ___ (venir).", answer: "veniez", en: "I'm happy that you're coming." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I have to leave. It's important that you are on time.",
          reference: "Il faut que je parte. Il est important que tu sois à l'heure.",
          hint: "que je parte = subjunctive of partir; que tu sois = subjunctive of être",
        },
      ],
    },
    {
      slug: "subjonctif-emotion-doute",
      title: "More triggers: emotion & doubt",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Beyond 'il faut que'",
          body: [
            "Necessity isn't the only trigger. The subjunctive also follows expressions of <strong>emotion</strong> (<em>je suis content que</em>, <em>j'ai peur que</em>, <em>c'est dommage que</em>), <strong>desire/will</strong> (<em>je veux que</em>, <em>j'aimerais que</em>), and <strong>doubt</strong> (<em>je doute que</em>, <em>je ne crois pas que</em>).",
            "Certain conjunctions always take the subjunctive too: <em>bien que</em> / <em>quoique</em> (although), <em>avant que</em> (before), <em>pour que</em> / <em>afin que</em> (so that), <em>à condition que</em> (provided that).",
            "The trigger sits in the first clause; the subjunctive verb follows <em>que</em> in the second. <em>Je suis content que tu sois là</em> (I'm glad you're here).",
          ],
          keyPoint: "Triggers: emotion (content/peur que), will (veux que), doubt (doute que). Conjunctions: bien que, avant que, pour que.",
        },
        {
          type: "vocab",
          heading: "Subjunctive triggers",
          items: [
            { l1: "je suis content(e) que", en: "I'm glad that" },
            { l1: "j'ai peur que", en: "I'm afraid that" },
            { l1: "c'est dommage que", en: "it's a shame that" },
            { l1: "j'aimerais que", en: "I'd like (someone) to" },
            { l1: "je doute que", en: "I doubt that" },
            { l1: "je ne crois pas que", en: "I don't think that" },
            { l1: "bien que / quoique", en: "although" },
            { l1: "avant que", en: "before" },
            { l1: "pour que / afin que", en: "so that" },
            { l1: "à condition que", en: "provided that" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Subjunctive after triggers",
          items: [
            { template: "Je suis content que tu ___ (être) là.", answer: "sois", en: "I'm glad you're here." },
            { template: "Bien qu'il ___ (faire) froid, on sort.", answer: "fasse", en: "Although it's cold, we're going out." },
            { template: "J'ai peur qu'il ___ (avoir) un problème.", answer: "ait", en: "I'm afraid he has a problem." },
            { template: "Je t'explique pour que tu ___ (comprendre).", answer: "comprennes", en: "I'm explaining so that you understand." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Trigger check",
          questions: [
            {
              q: "Which expression takes the subjunctive?",
              options: ["Je pense que…", "Je suis sûr que…", "Bien que…", "Il est vrai que…"],
              correct: 2,
              fb: "'Bien que' (although) always triggers the subjunctive. Certainty (je pense/je suis sûr) takes the indicative.",
            },
            {
              q: "'J'ai peur qu'il soit en retard' uses the subjunctive because…",
              options: ["it's a question", "'avoir peur que' expresses emotion (a trigger)", "soit is irregular", "it's future"],
              correct: 1,
              fb: "Emotion (fear) triggers the subjunctive after 'que'.",
            },
            {
              q: "'Avant que tu partes' — 'partes' is subjunctive because…",
              options: ["avant que always takes the subjunctive", "partir is irregular", "it's negative", "it's past"],
              correct: 0,
              fb: "'Avant que' is one of the conjunctions that always take the subjunctive.",
            },
          ],
        },
      ],
    },
    {
      slug: "subjonctif-vs-infinitif",
      title: "Subjunctive vs infinitive",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Same subject? Use the infinitive instead",
          body: [
            "Here's the rule that saves you a lot of subjunctive: you only use it when the two clauses have <strong>different subjects</strong>. If the subject is the same, French drops the <em>que</em> and uses an <strong>infinitive</strong>.",
            "Compare: <em>Je veux <strong>partir</strong></em> (I want to leave — same subject, infinitive) vs <em>Je veux <strong>que tu partes</strong></em> (I want you to leave — different subjects, subjunctive).",
            "Same with necessity: <em>Il faut <strong>partir</strong></em> (one must leave / it's necessary to leave — general) vs <em>Il faut <strong>que je parte</strong></em> (I must leave — specified subject).",
          ],
          keyPoint: "Same subject → infinitive (Je veux partir). Different subjects → que + subjunctive (Je veux que tu partes).",
        },
        {
          type: "vocab",
          heading: "Infinitive vs subjunctive pairs",
          items: [
            { l1: "Je veux partir.", en: "I want to leave. (same subject)" },
            { l1: "Je veux que tu partes.", en: "I want you to leave. (different)" },
            { l1: "Il faut manger.", en: "One must eat. (general)" },
            { l1: "Il faut que je mange.", en: "I must eat. (specified subject)" },
            { l1: "Je suis content de venir.", en: "I'm glad to come. (same subject, de + infinitive)" },
            { l1: "Je suis content que tu viennes.", en: "I'm glad you're coming. (different)" },
            { l1: "avant de partir", en: "before leaving (same subject)" },
            { l1: "avant que tu partes", en: "before you leave (different)" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Infinitive or subjunctive?",
          items: [
            { template: "Je veux ___ (partir) tôt. (I leave)", answer: "partir", en: "I want to leave early." },
            { template: "Je veux que tu ___ (partir) tôt. (you leave)", answer: "partes", en: "I want you to leave early." },
            { template: "Il faut ___ (faire) attention. (general)", answer: "faire", en: "One must be careful." },
            { template: "Il faut que nous ___ (faire) attention. (we)", answer: "fassions", en: "We must be careful." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I want to leave, but I want you to stay.",
          reference: "Je veux partir, mais je veux que tu restes.",
          hint: "same subject → infinitive (partir); different subject → subjunctive (que tu restes)",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "The subjunctive is triggered by expressions of…", options: ["fact and certainty", "necessity, emotion, doubt, desire", "the past", "the future only"], correct: 1 },
      { q: "'Il faut que' is followed by…", options: ["the indicative", "the subjunctive", "the infinitive", "the conditional"], correct: 1 },
      { q: "The subjunctive of 'être' for 'je' is…", options: ["que je suis", "que je sois", "que je serai", "que j'étais"], correct: 1 },
      { q: "Regular subjunctive endings are…", options: ["-e, -es, -e, -ions, -iez, -ent", "-ai, -as, -a, -ons, -ez, -ont", "-s, -s, -t, -ons, -ez, -ent", "-ais, -ais, -ait, -ions, -iez, -aient"], correct: 0 },
      { q: "'Je veux que tu viennes' uses the subjunctive because…", options: ["it's in the future", "'vouloir que' expresses desire (a trigger)", "it's a question", "venir is irregular"], correct: 1 },
      { q: "The subjunctive of 'avoir' for 'je' is…", options: ["que j'ai", "que j'aie", "que j'avais", "que j'aurai"], correct: 1 },
    ],
  },
};
