import type { Unit } from "../../types";

export const UNIT_CONDITIONAL: Unit = {
  slug: "conditional",
  stage: 8,
  order: 33,
  icon: "🎩",
  title: "Conditional",
  tagline: "Me gustaría, podría, debería — polite requests.",
  lessons: [
    {
      slug: "conditional-intro",
      title: "The conditional tense",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The conditional — polite and hypothetical",
          body: [
            "The conditional tense expresses 'would'. It's used for polite requests (<em>¿Podría ayudarme?</em> = Could you help me?), hypothetical situations (<em>En tu lugar, iría</em> = In your place, I would go), and reported speech.",
            "Like the future tense, the conditional adds endings to the full infinitive. The endings are the same as the imperfecto of -er/-ir verbs (-ía/-ías/-ía/-íamos/-íais/-ían), and irregular stems are the same as the future.",
          ],
          keyPoint: "Conditional = infinitive + -ía/-ías/-ía/-íamos/-íais/-ían. Same irregular stems as futuro.",
        },
        {
          type: "conjugation",
          heading: "hablar — conditional",
          verb: "hablar",
          meaning: "to speak",
          tenses: [{ name: "Condicional", forms: [
            { person: "yo", form: "hablaría" },
            { person: "tú", form: "hablarías" },
            { person: "él/ella/usted", form: "hablaría" },
            { person: "nosotros", form: "hablaríamos" },
            { person: "vosotros", form: "hablaríais" },
            { person: "ellos/ustedes", form: "hablarían" },
          ] }],
        },
        {
          type: "vocab",
          heading: "Key irregular conditionals",
          items: [
            { l1: "poder → podría", en: "could / would be able to" },
            { l1: "tener → tendría", en: "would have" },
            { l1: "querer → querría", en: "would want" },
            { l1: "hacer → haría", en: "would do / make" },
            { l1: "venir → vendría", en: "would come" },
            { l1: "decir → diría", en: "would say" },
            { l1: "saber → sabría", en: "would know" },
            { l1: "deber → debería", en: "should / ought to" },
          ],
        },
        {
          type: "vocab",
          heading: "Conditional in use",
          items: [
            { l1: "Me gustaría un café.", en: "I'd like a coffee." },
            { l1: "¿Podría hablar más despacio?", en: "Could you speak more slowly?" },
            { l1: "Debería llamarla.", en: "I should call her." },
            { l1: "En tu lugar, iría.", en: "In your place, I would go." },
            { l1: "¿Te gustaría venir?", en: "Would you like to come?" },
            { l1: "Con más dinero, viajaría más.", en: "With more money, I'd travel more." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Conditional check",
          questions: [
            {
              q: "'Me gustaría' is the conditional of…",
              options: ["gustar (to like/please)", "estar (to be)", "ir (to go)", "tener (to have)"],
              correct: 0,
              fb: "Gustar → gustaría. Me gustaría = I would like. The most polite way to express a desire.",
            },
            {
              q: "'Debería estudiar más' means…",
              options: ["I want to study more", "I should study more", "I will study more", "I used to study more"],
              correct: 1,
              fb: "Deber → debería = should/ought to. Debería estudiar más = I should study more.",
            },
            {
              q: "The conditional has the same irregular stems as…",
              options: ["The imperfecto", "The subjunctive", "The futuro simple", "The perfecto"],
              correct: 2,
              fb: "Same stems as futuro: tendr-, vendr-, podr-, quer-, har-, dir-, sabr-, saldr-.",
            },
          ],
        },
      ],
    },
    {
      slug: "conditional-hypothetical",
      title: "Hypothetical situations",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "Si + imperfecto + condicional",
          body: [
            "Hypothetical ('if') sentences pair the imperfecto subjunctive with the conditional: <em>Si tuviera más dinero, viajaría</em> (If I had more money, I would travel). The 'if' clause uses the imperfecto subjunctive; the result uses the conditional.",
            "This is B2-level grammar, but you'll hear it constantly. Knowing the conditional half is enough to start.",
          ],
          keyPoint: "Si tuviera… = If I had… (imperfecto subjunctive) + conditional result.",
        },
        {
          type: "vocab",
          heading: "Hypothetical phrases in context",
          items: [
            { l1: "Si pudiera, viviría en España.", en: "If I could, I'd live in Spain." },
            { l1: "Si tuviera tiempo, estudiaría más.", en: "If I had time, I'd study more." },
            { l1: "¿Qué harías en mi lugar?", en: "What would you do in my place?" },
            { l1: "Yo que tú, no iría.", en: "If I were you, I wouldn't go." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Hypothetical check",
          questions: [
            {
              q: "'Yo que tú, no iría' means…",
              options: ["You should go", "If I were you, I wouldn't go", "I don't want to go", "You shouldn't have gone"],
              correct: 1,
              fb: "Yo que tú = if I were you. A very natural way to give advice in Spanish.",
            },
            {
              q: "In a hypothetical sentence, 'si' introduces…",
              options: ["The result (conditional)", "The condition (what needs to be true)", "A question", "A command"],
              correct: 1,
              fb: "Si = if. Si tuviera dinero (condition) → viajaría (result/conditional).",
            },
          ],
        },
      ],
    },
    {
      slug: "conditional-advice",
      title: "Giving advice and making wishes",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "Giving advice with conditional",
          items: [
            { l1: "Yo en tu lugar…", en: "If I were you…" },
            { l1: "Yo que tú, iría al médico.", en: "If I were you, I'd go to the doctor." },
            { l1: "Te recomendaría que…", en: "I would recommend that you…" },
            { l1: "Lo haría de otra manera.", en: "I would do it differently." },
            { l1: "Si fuera tú, no lo haría.", en: "If I were you, I wouldn't do it." },
            { l1: "¿Qué harías en mi lugar?", en: "What would you do in my position?" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking for and giving advice",
          lines: [
            { speaker: "Pablo", l1: "Tengo un problema con mi jefe. ¿Qué harías tú?", en: "I have a problem with my boss. What would you do?" },
            { speaker: "Sara", l1: "Yo que tú, hablaría directamente con él.", en: "If I were you, I'd speak to him directly." },
            { speaker: "Pablo", l1: "¿Y si no funcionara?", en: "And if that didn't work?" },
            { speaker: "Sara", l1: "Entonces hablaría con recursos humanos.", en: "Then I'd speak to human resources." },
            { speaker: "Pablo", l1: "Tienes razón. Lo intentaré mañana.", en: "You're right. I'll try tomorrow." },
          ],
        },
        {
          type: "translate",
          heading: "Give advice in Spanish",
          direction: "en-to-l1",
          prompt: "If I were you, I would look for another job.",
          reference: "Yo en tu lugar, buscaría otro trabajo.",
          hint: "Yo en tu lugar + conditional (buscar → buscaría)",
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "The yo form of hablar (conditional) is…", options: ["hablaré", "hablaría", "hablara", "hablo"], correct: 1 },
      { q: "The conditional of 'poder' (yo) is…", options: ["puedo", "podré", "podría", "pudiera"], correct: 2 },
      { q: "'Me gustaría' means…", options: ["I like", "I liked", "I would like", "I will like"], correct: 2 },
      { q: "'Debería' means…", options: ["I will", "I would", "I should", "I must"], correct: 2 },
      { q: "Conditional endings are added to…", options: ["The stem", "The infinitive", "The past participle", "The subjunctive"], correct: 1 },
      { q: "The conditional shares irregular stems with…", options: ["The imperfecto", "The futuro", "The indefinido", "The subjunctive"], correct: 1 },
      { q: "'¿Te gustaría venir?' means…", options: ["Did you like coming?", "Would you like to come?", "Do you like coming?", "You should come"], correct: 1 },
      { q: "'En tu lugar, iría' means…", options: ["In your place, I would go", "You went in my place", "I went instead of you", "In your town, I would go"], correct: 0 },
      { q: "The conditional of 'hacer' (yo) is…", options: ["haré", "hacería", "haría", "hiciría"], correct: 2 },
      { q: "'Yo que tú, no iría' means…", options: ["I wouldn't go", "If I were you, I wouldn't go", "You shouldn't have gone", "I don't want to go"], correct: 1 },
    ],
  },
};
