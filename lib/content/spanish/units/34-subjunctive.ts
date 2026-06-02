import type { Unit } from "../../types";

export const UNIT_SUBJUNCTIVE: Unit = {
  slug: "subjunctive",
  stage: 8,
  order: 34,
  icon: "🤔",
  title: "Subjunctive intro",
  tagline: "Espero que, quiero que — common trigger verbs.",
  lessons: [
    {
      slug: "subjunctive-intro",
      title: "What the subjunctive is",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The subjunctive — expressing wishes and doubts",
          body: [
            "The subjunctive is a mood (not a tense) that expresses subjectivity: wishes, doubts, emotions, and hypotheticals. It sounds intimidating but the most common uses are formulaic — learn the triggers and the rest follows.",
            "The present subjunctive is formed by taking the yo present tense form, dropping the -o, and adding opposite vowel endings: -ar verbs get -e endings; -er/-ir verbs get -a endings.",
          ],
          keyPoint: "-ar subjunctive: -e/-es/-e/-emos/-éis/-en · -er/-ir subjunctive: -a/-as/-a/-amos/-áis/-an",
        },
        {
          type: "tip",
          heading: "The 'WEIRDO' triggers",
          body: "The subjunctive is triggered after verbs of: <strong>W</strong>ishes (querer que, desear que), <strong>E</strong>motions (alegrarse de que, tener miedo de que), <strong>I</strong>mpersonal expressions (es importante que), <strong>R</strong>ecommendations (recomendar que), <strong>D</strong>oubt (dudar que), <strong>O</strong>jalá. Plus: after 'que' with subject change.",
          example: { l1: "Quiero que vengas. / Espero que estés bien.", en: "I want you to come. / I hope you're well." },
        },
        {
          type: "vocab",
          heading: "Common subjunctive triggers",
          items: [
            { l1: "Quiero que…", en: "I want… (that)", note: "Subject change required" },
            { l1: "Espero que…", en: "I hope that…" },
            { l1: "Es importante que…", en: "It's important that…" },
            { l1: "Me alegra que…", en: "I'm glad that…" },
            { l1: "Ojalá…", en: "I hope… / If only… (+ subjunctive always)" },
            { l1: "Recomienda que…", en: "He/she recommends that…" },
            { l1: "Dudo que…", en: "I doubt that…" },
            { l1: "No creo que…", en: "I don't think that… (doubt triggers subjunctive)" },
          ],
        },
        {
          type: "vocab",
          heading: "Subjunctive in sentences",
          items: [
            { l1: "Espero que vengas.", en: "I hope you come." },
            { l1: "Quiero que seas feliz.", en: "I want you to be happy." },
            { l1: "Es importante que comas bien.", en: "It's important that you eat well." },
            { l1: "Ojalá haga buen tiempo.", en: "I hope the weather's good." },
            { l1: "No creo que sea verdad.", en: "I don't think it's true." },
            { l1: "Me alegra que estés aquí.", en: "I'm glad you're here." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Subjunctive check",
          questions: [
            {
              q: "'Espero que' triggers the subjunctive because it expresses…",
              options: ["A completed action", "A wish/hope (uncertain outcome)", "A fact", "A command"],
              correct: 1,
              fb: "Espero que = I hope that. Hope implies uncertainty → subjunctive.",
            },
            {
              q: "After 'Ojalá', you always use…",
              options: ["Indicative (normal present)", "Infinitive", "Subjunctive", "Future"],
              correct: 2,
              fb: "Ojalá always takes the subjunctive. Ojalá haga buen tiempo = I hope the weather is good.",
            },
            {
              q: "Why does 'No creo que sea verdad' use subjunctive?",
              options: ["'No creo' expresses doubt", "'Que' always triggers subjunctive", "Sea is irregular present", "It's a question"],
              correct: 0,
              fb: "No creer = to doubt/not think. Doubt triggers subjunctive.",
            },
          ],
        },
      ],
    },
    {
      slug: "subjunctive-forms",
      title: "Subjunctive forms",
      estMinutes: 7,
      pages: [
        {
          type: "conjugation",
          heading: "hablar — present subjunctive",
          verb: "hablar",
          meaning: "to speak",
          tenses: [{ name: "Subjuntivo presente", forms: [
            { person: "yo", form: "hable" },
            { person: "tú", form: "hables" },
            { person: "él/ella/usted", form: "hable" },
            { person: "nosotros", form: "hablemos" },
            { person: "vosotros", form: "habléis" },
            { person: "ellos/ustedes", form: "hablen" },
          ] }],
        },
        {
          type: "vocab",
          heading: "Key irregular subjunctives",
          items: [
            { l1: "ser → sea, seas, sea, seamos, seáis, sean", en: "to be (ser)" },
            { l1: "estar → esté, estés, esté, estemos, estéis, estén", en: "to be (estar)" },
            { l1: "ir → vaya, vayas, vaya, vayamos, vayáis, vayan", en: "to go" },
            { l1: "tener → tenga, tengas, tenga…", en: "to have" },
            { l1: "venir → venga, vengas, venga…", en: "to come" },
            { l1: "hacer → haga, hagas, haga…", en: "to do/make" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Subjunctive forms",
          questions: [
            {
              q: "'Espero que vengas' — 'vengas' is the subjunctive of…",
              options: ["venir (to come)", "ver (to see)", "vencer (to overcome)", "volar (to fly)"],
              correct: 0,
              fb: "Venir → venga (yo subj.) → vengas (tú subj.). Espero que vengas = I hope you come.",
            },
            {
              q: "'Ojalá haga buen tiempo' — 'haga' is the subjunctive of…",
              options: ["haber", "hablar", "hacer", "hallar"],
              correct: 2,
              fb: "Hacer → haga (present subjunctive). Ojalá haga calor = I hope it's warm.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "The subjunctive is triggered by expressions of…", options: ["Facts and certainties", "Wishes, doubts, emotions", "Past events", "Future certainties"], correct: 1 },
      { q: "'Ojalá' always takes…", options: ["Indicative", "Infinitive", "Conditional", "Subjunctive"], correct: 3 },
      { q: "The subjunctive of hablar (yo) is…", options: ["hablo", "hable", "hablaré", "hablaría"], correct: 1 },
      { q: "The subjunctive of ser (yo) is…", options: ["soy", "era", "sea", "sería"], correct: 2 },
      { q: "The subjunctive of ir (yo) is…", options: ["iba", "vaya", "iría", "voy"], correct: 1 },
      { q: "'No creo que…' takes the subjunctive because…", options: ["Que always takes subjunctive", "No creer expresses doubt", "Creer is irregular", "It's a question"], correct: 1 },
      { q: "'Espero que estés bien' — estés is subjunctive of…", options: ["ser", "estar", "tener", "ir"], correct: 1 },
      { q: "-ar verbs in the subjunctive use which vowel?", options: ["-a endings", "-e endings", "-o endings", "-i endings"], correct: 1 },
      { q: "The subjunctive of venir (yo) is…", options: ["vine", "vengo", "venga", "vendría"], correct: 2 },
      { q: "'Es importante que comas bien' — comas is subjunctive of…", options: ["cocer", "comer", "comprar", "conocer"], correct: 1 },
    ],
  },
};
