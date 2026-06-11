import type { Unit } from "../../types";

export const UNIT_CONDITIONNEL: Unit = {
  slug: "conditionnel",
  stage: 8,
  order: 33,
  icon: "🎩",
  title: "Conditionnel",
  tagline: "Je voudrais, je pourrais, je devrais — demandes polies.",
  lessons: [
    {
      slug: "conditionnel-main",
      title: "The conditional mood",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The 'would' mood",
          body: [
            "The <strong>conditionnel</strong> expresses what <em>would</em> happen: <em>Je voudrais</em> (I would like), <em>Je pourrais</em> (I could), <em>Je devrais</em> (I should). It's essential for politeness and hypotheticals.",
            "Formation is easy: take the <strong>futur stem</strong> (the same irregular stems you learned for the futur) and add the <strong>imparfait endings</strong> (-ais, -ais, -ait, -ions, -iez, -aient).",
            "So: futur = je voudrai (I will want); conditionnel = je voudrais (I would like/want). The only spelling difference is the ending, but the meaning shifts completely.",
          ],
          keyPoint: "Conditionnel = futur stem + imparfait endings. je voudrais, tu voudrais, il voudrait…",
        },
        {
          type: "conjugation",
          heading: "Vouloir, pouvoir, devoir — conditionnel",
          verb: "vouloir / pouvoir / devoir",
          meaning: "to want / can / must (conditional)",
          tenses: [
            {
              name: "conditionnel — the three polite verbs",
              forms: [
                { person: "je voudrais", form: "I would like", en: "polite request" },
                { person: "je pourrais", form: "I could / I would be able to", en: "polite ability" },
                { person: "je devrais", form: "I should / I ought to", en: "soft obligation" },
                { person: "tu voudrais", form: "you would like", en: "" },
                { person: "il/elle voudrait", form: "he/she would like", en: "" },
                { person: "nous voudrions", form: "we would like", en: "" },
                { person: "vous voudriez", form: "you would like", en: "" },
                { person: "ils/elles voudraient", form: "they would like", en: "" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Si clauses with the conditional",
          body: "For hypothetical 'if…then' statements, the structure is: <strong>si + imparfait, conditionnel</strong>. <em>Si j'avais le temps, je visiterais le musée</em> (If I had time, I would visit the museum). Note: the 'si' clause uses imparfait, the result clause uses conditionnel.",
          example: { l1: "Si j'étais riche, j'achèterais un appartement à Paris.", en: "If I were rich, I would buy an apartment in Paris." },
        },
        {
          type: "fillBlank",
          heading: "Conditional practice",
          items: [
            { template: "___ (vouloir, je) un café, s'il vous plaît.", answer: "Je voudrais", en: "I would like a coffee, please." },
            { template: "Tu ___ (pouvoir) m'aider?", answer: "pourrais", en: "Could you help me?" },
            { template: "Vous ___ (devoir) vous reposer.", answer: "devriez", en: "You should rest." },
            { template: "Si j'avais de l'argent, je ___ (voyager) en France.", answer: "voyagerais", en: "If I had money, I would travel to France." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I would like to visit Paris. Could you recommend a hotel?",
          reference: "Je voudrais visiter Paris. Pourriez-vous me recommander un hôtel?",
          hint: "je voudrais = I would like; pourriez-vous = could you (polite)",
        },
      ],
    },
    {
      slug: "conditionnel-hypotheses",
      title: "Dreams, advice & hypotheticals",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Imagining 'what if'",
          body: [
            "The conditional shines when you imagine things that aren't real (yet). The pattern is fixed: <strong>si + imparfait, conditionnel</strong>. <em>Si je gagnais au loto, je ferais le tour du monde</em> (If I won the lottery, I'd travel the world).",
            "To ask someone to imagine: <em>Qu'est-ce que tu ferais si…?</em> (What would you do if…?). This unlocks endless conversation practice.",
            "To give advice, French has a neat formula: <em>À ta place, je…</em> (If I were you, I'd…) + conditional. <em>À ta place, je prendrais le train</em>. Also <em>Tu devrais…</em> (You should…).",
          ],
          keyPoint: "si + imparfait, conditionnel. Advice: À ta place, je… / Tu devrais… Ask: Qu'est-ce que tu ferais si…?",
        },
        {
          type: "vocab",
          heading: "Hypothetical & advice phrases",
          items: [
            { l1: "Si j'avais le temps, je…", en: "If I had time, I'd…" },
            { l1: "Si j'étais toi, je…", en: "If I were you, I'd…" },
            { l1: "À ta place, je…", en: "If I were in your place, I'd…" },
            { l1: "Qu'est-ce que tu ferais si…?", en: "What would you do if…?" },
            { l1: "Tu devrais…", en: "You should…" },
            { l1: "Tu pourrais…", en: "You could…" },
            { l1: "Ce serait bien.", en: "That would be nice." },
            { l1: "J'aimerais beaucoup.", en: "I would really like to." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the hypothetical",
          items: [
            { template: "Si j'___ (avoir) plus d'argent, je voyagerais.", answer: "avais", en: "If I had more money, I would travel." },
            { template: "Si je gagnais au loto, j'___ (acheter) une maison.", answer: "achèterais", en: "If I won the lottery, I'd buy a house." },
            { template: "À ta place, je ___ (prendre) un taxi.", answer: "prendrais", en: "If I were you, I'd take a taxi." },
            { template: "Tu ___ (devoir) te reposer un peu.", answer: "devrais", en: "You should rest a little." },
          ],
        },
        {
          type: "dialogue",
          heading: "Giving advice",
          lines: [
            { speaker: "Ami", l1: "Je suis épuisé, mais j'ai encore beaucoup de travail.", en: "I'm exhausted, but I still have a lot of work." },
            { speaker: "You", l1: "À ta place, je ferais une pause. Tu devrais te reposer.", en: "If I were you, I'd take a break. You should rest." },
            { speaker: "Ami", l1: "Tu as raison. Et qu'est-ce que tu ferais ce week-end?", en: "You're right. And what would you do this weekend?" },
            { speaker: "You", l1: "Si j'avais le temps, j'irais à la campagne.", en: "If I had time, I'd go to the countryside." },
            { speaker: "Ami", l1: "Ce serait bien, ça.", en: "That would be nice." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "If I were you, I'd rest. What would you do if you had more time?",
          reference: "À ta place, je me reposerais. Qu'est-ce que tu ferais si tu avais plus de temps?",
          hint: "À ta place + conditional; 'if you had' = si tu avais (imparfait)",
        },
      ],
    },
    {
      slug: "conditionnel-suggestions",
      title: "Suggestions & softening",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The conditional makes everything gentler",
          body: [
            "Beyond <em>vouloir/pouvoir/devoir</em>, several conditional forms are everyday social glue: <em>j'aimerais</em> (I'd like), <em>je préférerais</em> (I'd prefer), <em>ça serait</em> / <em>ce serait</em> (it would be), <em>il faudrait</em> (we'd need to / it would be necessary).",
            "To suggest doing something together: <em>On pourrait…</em> (We could…) and <em>Ce serait bien de…</em> (It would be nice to…) + infinitive.",
            "Compared with the blunt present, the conditional turns demands into invitations: <em>Tu peux fermer la fenêtre</em> (You can shut the window) vs <em>Tu pourrais fermer la fenêtre?</em> (Could you shut the window?).",
          ],
          keyPoint: "Soften with: j'aimerais, je préférerais, ce serait, il faudrait. Suggest: On pourrait… / Ce serait bien de…",
        },
        {
          type: "vocab",
          heading: "Suggestion & softening phrases",
          items: [
            { l1: "J'aimerais…", en: "I would like…" },
            { l1: "Je préférerais…", en: "I would prefer…" },
            { l1: "Ce serait + adjective", en: "It would be… (ce serait sympa)" },
            { l1: "Il faudrait…", en: "We'd need to… / It would be good to…" },
            { l1: "On pourrait…", en: "We could…" },
            { l1: "Ce serait bien de…", en: "It would be nice to…" },
            { l1: "Tu pourrais…?", en: "Could you…?" },
            { l1: "Ça t'embêterait de…?", en: "Would you mind…?" },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning gently",
          lines: [
            { speaker: "You", l1: "J'aimerais sortir ce soir. On pourrait aller au cinéma?", en: "I'd like to go out tonight. We could go to the cinema?" },
            { speaker: "Léa", l1: "Bonne idée! Mais je préférerais un film en VO.", en: "Good idea! But I'd prefer a film in the original language." },
            { speaker: "You", l1: "Ce serait parfait. Il faudrait réserver, non?", en: "That'd be perfect. We'd need to book, right?" },
            { speaker: "Léa", l1: "Oui. Tu pourrais t'en occuper?", en: "Yes. Could you take care of it?" },
            { speaker: "You", l1: "Bien sûr, pas de problème.", en: "Of course, no problem." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Softening check",
          questions: [
            {
              q: "Which is the gentlest way to ask someone to help?",
              options: ["Aide-moi.", "Tu m'aides.", "Tu pourrais m'aider?", "Aide!"],
              correct: 2,
              fb: "The conditional 'Tu pourrais…?' softens the request into a polite invitation.",
            },
            {
              q: "'On pourrait aller au musée' means…",
              options: ["We went to the museum", "We could go to the museum", "We must go to the museum", "We're going to the museum"],
              correct: 1,
              fb: "'On pourrait' = we could — a soft suggestion.",
            },
            {
              q: "'Il faudrait réserver' means…",
              options: ["We had to book", "We'd need to book / it would be good to book", "We will book", "Don't book"],
              correct: 1,
              fb: "'Il faudrait' is the conditional of 'il faut' — a soft 'we'd need to'.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "The conditionnel is formed from…", options: ["infinitive + present endings", "futur stem + imparfait endings", "imparfait stem + futur endings", "passé composé"], correct: 1 },
      { q: "'Je voudrais' means…", options: ["I want", "I would like", "I wanted", "I will want"], correct: 1 },
      { q: "'Je devrais' means…", options: ["I must", "I should / ought to", "I could", "I would like"], correct: 1 },
      { q: "In 'Si j'avais le temps, je visiterais…', the si-clause uses…", options: ["conditionnel", "futur", "imparfait", "présent"], correct: 2 },
      { q: "'Pourriez-vous m'aider?' is…", options: ["a command", "a polite conditional request", "a past statement", "a future plan"], correct: 1 },
      { q: "'Nous voudrions' is the … form of vouloir (conditional).", options: ["je", "tu", "nous", "ils"], correct: 2 },
    ],
  },
};
