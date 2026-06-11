import type { Unit } from "../../types";

export const UNIT_FUTUR: Unit = {
  slug: "futur",
  stage: 5,
  order: 23,
  icon: "⏩",
  title: "Futur simple",
  tagline: "Demain je verrai — and futur antérieur.",
  lessons: [
    {
      slug: "futur-main",
      title: "The futur simple",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two ways to talk about the future",
          body: [
            "<strong>Futur proche</strong> (near future): aller + infinitive. <em>Je vais manger.</em> Use this for imminent actions and plans.",
            "<strong>Futur simple</strong>: infinitive + endings (-ai, -as, -a, -ons, -ez, -ont). Use this for more distant future, predictions, and conditional after 'si' clauses.",
            "The endings are the same for all verbs — just add them to the infinitive (drop the final -e for -re verbs first). Many common verbs have irregular stems.",
          ],
          keyPoint: "Futur proche = aller + infinitive. Futur simple = infinitive + -ai/-as/-a/-ons/-ez/-ont. Many irregular stems.",
        },
        {
          type: "conjugation",
          heading: "Parler — futur simple",
          verb: "parler",
          meaning: "to speak (futur simple)",
          tenses: [
            {
              name: "futur simple",
              forms: [
                { person: "je", form: "parlerai", en: "I will speak" },
                { person: "tu", form: "parleras", en: "you will speak" },
                { person: "il/elle", form: "parlera", en: "he/she will speak" },
                { person: "nous", form: "parlerons", en: "we will speak" },
                { person: "vous", form: "parlerez", en: "you will speak" },
                { person: "ils/elles", form: "parleront", en: "they will speak" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Irregular futur stems",
          intro: "These high-frequency verbs have irregular stems — memorize them.",
          items: [
            { l1: "être → ser-", en: "to be: je serai", note: "je serai, tu seras…" },
            { l1: "avoir → aur-", en: "to have: j'aurai" },
            { l1: "aller → ir-", en: "to go: j'irai" },
            { l1: "faire → fer-", en: "to do: je ferai" },
            { l1: "venir → viendr-", en: "to come: je viendrai" },
            { l1: "pouvoir → pourr-", en: "can: je pourrai" },
            { l1: "vouloir → voudr-", en: "to want: je voudrai" },
            { l1: "devoir → devr-", en: "must: je devrai" },
            { l1: "savoir → saur-", en: "to know: je saurai" },
            { l1: "voir → verr-", en: "to see: je verrai" },
          ],
        },
        {
          type: "tip",
          heading: "Si clauses with futur simple",
          body: "In 'if…then' sentences, the 'if' clause uses the present tense and the main clause uses the futur simple: <em>Si tu viens, je serai content.</em> Never use the futur after 'si' in these conditional sentences.",
          example: { l1: "Si tu as le temps, tu visiteras le Louvre.", en: "If you have time, you'll visit the Louvre." },
        },
        {
          type: "fillBlank",
          heading: "Futur simple practice",
          items: [
            { template: "Demain, nous ___ (aller) à Versailles.", answer: "irons", en: "Tomorrow we will go to Versailles." },
            { template: "Il ___ (faire) beau ce week-end.", answer: "fera", en: "The weather will be nice this weekend." },
            { template: "Si tu es fatigué, tu ___ (dormir) tôt.", answer: "dormiras", en: "If you're tired, you'll sleep early." },
            { template: "Je ___ (voir) mes amis samedi.", answer: "verrai", en: "I will see my friends on Saturday." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "Next week I will be in Paris. I'll visit the Eiffel Tower.",
          reference: "La semaine prochaine je serai à Paris. Je visiterai la Tour Eiffel.",
          hint: "la semaine prochaine = next week; visiterai = will visit",
        },
      ],
    },
    {
      slug: "futur-quand",
      title: "Quand, dès que & sequencing the future",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "A trap: French uses the future after 'quand'",
          body: [
            "This is one of the biggest differences from English. After <em>quand</em> (when), <em>dès que</em> / <em>aussitôt que</em> (as soon as), and <em>lorsque</em> (when), if the action is in the future, French uses the <strong>futur simple</strong> — where English uses the present.",
            "English: 'When I <em>have</em> time, I'll call you.' French: <em>Quand j'<strong>aurai</strong> le temps, je t'appellerai.</em> Both clauses are in the future in French.",
            "It feels strange at first because the 'quand' clause sounds like a condition. But the rule is simple: future meaning after quand/dès que → futur simple.",
          ],
          keyPoint: "After quand / dès que / lorsque with future meaning, use futur simple in BOTH clauses (unlike English).",
        },
        {
          type: "vocab",
          heading: "Future time markers",
          items: [
            { l1: "quand", en: "when", note: "+ futur for future actions" },
            { l1: "dès que / aussitôt que", en: "as soon as", note: "+ futur" },
            { l1: "lorsque", en: "when (more formal)" },
            { l1: "bientôt", en: "soon" },
            { l1: "dans une heure / dans deux jours", en: "in an hour / in two days" },
            { l1: "la semaine prochaine", en: "next week" },
            { l1: "l'année prochaine", en: "next year" },
            { l1: "un jour", en: "one day, someday" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Futur after quand / dès que",
          items: [
            { template: "Quand j'___ (avoir) le temps, je viendrai. (will have)", answer: "aurai", en: "When I have time, I'll come." },
            { template: "Dès que tu ___ (arriver), appelle-moi. (arrive)", answer: "arriveras", en: "As soon as you arrive, call me." },
            { template: "Quand nous ___ (être) à Paris, nous visiterons le Louvre.", answer: "serons", en: "When we are in Paris, we'll visit the Louvre." },
            { template: "Je te dirai dès que je ___ (savoir). (know)", answer: "saurai", en: "I'll tell you as soon as I know." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quand + futur check",
          questions: [
            {
              q: "'When I'm older, I'll travel.' →",
              options: ["Quand je suis plus vieux, je voyagerai.", "Quand je serai plus vieux, je voyagerai.", "Quand je serai plus vieux, je voyage.", "Quand j'ai été plus vieux, je voyagerai."],
              correct: 1,
              fb: "Future meaning after 'quand' → futur in both clauses: serai … voyagerai.",
            },
            {
              q: "After 'dès que' referring to the future, French uses…",
              options: ["the present", "the futur simple", "the imparfait", "the passé composé"],
              correct: 1,
              fb: "dès que / quand / lorsque + future meaning → futur simple, unlike English.",
            },
            {
              q: "'Dans deux jours' means…",
              options: ["two days ago", "in two days (from now)", "every two days", "for two days"],
              correct: 1,
              fb: "'Dans + duration' points forward: in two days.",
            },
          ],
        },
      ],
    },
    {
      slug: "futur-projets",
      title: "Making plans & arranging to meet",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Inviting and arranging",
          body: [
            "To suggest plans, French has friendly openers: <em>Ça te dit de…?</em> (Do you fancy…?), <em>On pourrait…</em> (We could…), <em>Tu es libre…?</em> (Are you free…?).",
            "To leave things open: <em>On verra</em> (we'll see), <em>Je te dirai</em> (I'll let you know), <em>Je te tiens au courant</em> (I'll keep you posted).",
            "These mix the futur simple, the futur proche, and the present naturally — just like real conversation.",
          ],
          keyPoint: "Suggest: Ça te dit de…? / On pourrait… / Tu es libre…? Keep open: on verra / je te dirai.",
        },
        {
          type: "vocab",
          heading: "Plans & invitations",
          items: [
            { l1: "Ça te dit de…?", en: "Do you fancy…? / How about…?" },
            { l1: "On pourrait…", en: "We could…" },
            { l1: "Tu es libre samedi?", en: "Are you free Saturday?" },
            { l1: "On se voit quand?", en: "When shall we meet?" },
            { l1: "Je te dirai.", en: "I'll let you know." },
            { l1: "On verra.", en: "We'll see." },
            { l1: "Ça marche / Ça me va.", en: "That works / That's fine by me." },
            { l1: "On se retrouve devant…", en: "Let's meet in front of…" },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning the weekend",
          lines: [
            { speaker: "Julien", l1: "Ça te dit de visiter Versailles samedi?", en: "Do you fancy visiting Versailles on Saturday?" },
            { speaker: "You", l1: "Bonne idée! On pourrait partir le matin.", en: "Good idea! We could leave in the morning." },
            { speaker: "Julien", l1: "Parfait. On se retrouve devant la gare à neuf heures?", en: "Perfect. Shall we meet in front of the station at nine?" },
            { speaker: "You", l1: "Ça marche. Je prendrai les billets.", en: "That works. I'll get the tickets." },
            { speaker: "Julien", l1: "Super. Je te tiens au courant pour la météo!", en: "Great. I'll keep you posted about the weather!" },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "Are you free tomorrow? We could meet in front of the museum at two.",
          reference: "Tu es libre demain? On pourrait se retrouver devant le musée à deux heures.",
          hint: "free = libre; we could = on pourrait; meet up = se retrouver",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Futur proche uses…", options: ["aller + infinitive", "être + past participle", "avoir + infinitive", "infinitive + endings"], correct: 0 },
      { q: "Irregular futur stem of 'être' is…", options: ["êtr-", "ét-", "ser-", "est-"], correct: 2 },
      { q: "In 'Si tu viens, je serai content', why is 'serai' in futur simple?", options: ["It's random", "Main clause after si takes futur", "Si requires futur", "Serai is always used after si"], correct: 1 },
      { q: "'J'irai' means…", options: ["I go", "I went", "I will go", "I used to go"], correct: 2 },
      { q: "Futur simple of 'voir' for 'je' is…", options: ["je voirai", "je verrai", "je vois", "j'ai vu"], correct: 1 },
      { q: "'Futur proche' is best for…", options: ["Distant future predictions", "Imminent plans and near future", "Conditions", "Habitual future"], correct: 1 },
    ],
  },
};
