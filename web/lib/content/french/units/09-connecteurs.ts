import type { Unit } from "../../types";

export const UNIT_CONNECTEURS: Unit = {
  slug: "connecteurs",
  stage: 2,
  order: 9,
  icon: "🔗",
  title: "Connecting words",
  tagline: "Et, mais, parce que, puis, donc, quand même.",
  lessons: [
    {
      slug: "connecteurs-main",
      title: "Linking ideas together",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Connectors make you sound fluent",
          body: [
            "Short sentences work, but connectors string them into natural speech. Even with limited vocabulary, linking words with <em>mais, donc, parce que</em> makes you sound far more natural.",
            "French connectors fall into groups: <strong>addition</strong> (et, aussi, de plus), <strong>contrast</strong> (mais, cependant, pourtant, quand même), <strong>cause</strong> (parce que, car, puisque), <strong>consequence</strong> (donc, alors, c'est pourquoi), and <strong>sequence</strong> (d'abord, puis, ensuite, enfin).",
          ],
        },
        {
          type: "vocab",
          heading: "Essential connectors",
          items: [
            { l1: "et", en: "and" },
            { l1: "mais", en: "but", note: "Et alors? / Mais non!" },
            { l1: "parce que / car", en: "because", note: "parce que (spoken); car (formal/written)" },
            { l1: "donc / alors", en: "so / therefore", note: "donc is slightly more formal" },
            { l1: "pourtant / quand même", en: "however / even so / all the same", note: "quand même is very versatile" },
            { l1: "d'abord", en: "first of all" },
            { l1: "puis / ensuite", en: "then / next", note: "puis is slightly more literary" },
            { l1: "enfin", en: "finally / at last", note: "also used as 'well…' filler" },
            { l1: "aussi", en: "also / too", note: "at end of clause: moi aussi (me too)" },
            { l1: "par contre", en: "on the other hand", note: "more French than 'cependant' in speech" },
          ],
        },
        {
          type: "orderWords",
          heading: "Link the sentences",
          intro: "Put the connecting word in the right place.",
          items: [
            { tokens: ["J'aime", "Paris,", "mais", "je", "préfère", "Lyon."], en: "I love Paris, but I prefer Lyon." },
            { tokens: ["Je", "suis", "fatigué", "parce", "que", "j'ai", "travaillé", "toute", "la", "nuit."], en: "I'm tired because I worked all night." },
            { tokens: ["D'abord,", "on", "prend", "le", "métro,", "puis", "on", "marche."], en: "First, we take the metro, then we walk." },
            { tokens: ["Il", "fait", "froid,", "donc", "je", "prends", "mon", "manteau."], en: "It's cold, so I'm taking my coat." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete with a connector",
          items: [
            { template: "Il pleut, ___ je reste à la maison. (so)", answer: "donc", en: "It's raining, so I stay home.", options: ["mais", "donc", "parce que", "puis"] },
            { template: "Je voudrais un café, ___ un croissant. (and)", answer: "et", en: "I'd like a coffee, and a croissant.", options: ["et", "mais", "donc", "car"] },
            { template: "C'est cher, ___ c'est très bon. (but)", answer: "mais", en: "It's expensive, but it's very good.", options: ["et", "mais", "parce que", "alors"] },
            { template: "___ je cherche mon passeport, ___ je pars. (first... then)", answer: "D'abord", en: "First I look for my passport, then I leave.", options: ["D'abord", "Enfin", "Donc", "Car"] },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I like French but I find it difficult. However, I practice every day.",
          reference: "J'aime le français mais je le trouve difficile. Quand même, je pratique tous les jours.",
          hint: "quand même = however/all the same; tous les jours = every day",
        },
      ],
    },
    {
      slug: "connecteurs-cause-consequence",
      title: "Cause, consequence & contrast",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Saying why — and choosing the right 'because'",
          body: [
            "French distinguishes the kind of cause. <strong>Parce que</strong> answers a 'why' directly. <strong>Car</strong> is the same but more formal/written. <strong>Puisque</strong> means 'since/given that' — a cause both speakers already know.",
            "For cause expressed with a noun (not a clause), French splits by good vs bad: <strong>à cause de</strong> = because of (negative/neutral), <strong>grâce à</strong> = thanks to (positive). <em>Je suis en retard à cause du métro</em> vs <em>J'ai réussi grâce à toi</em>.",
            "For consequence, spoken French loves <strong>du coup</strong> (so / as a result) alongside <em>donc</em> and <em>alors</em>. For contrast beyond <em>mais</em>: <strong>pourtant</strong> / <strong>cependant</strong> (however) and <strong>malgré</strong> (despite + noun).",
          ],
          keyPoint: "parce que/car/puisque + clause. à cause de (bad) vs grâce à (good) + noun. du coup = so (spoken).",
        },
        {
          type: "vocab",
          heading: "Cause, consequence & contrast",
          items: [
            { l1: "parce que", en: "because", note: "most common; + full clause" },
            { l1: "car", en: "because / for", note: "more formal/written" },
            { l1: "puisque", en: "since, given that", note: "cause already known to both" },
            { l1: "à cause de", en: "because of (negative)", note: "+ noun: à cause de la pluie" },
            { l1: "grâce à", en: "thanks to (positive)", note: "+ noun: grâce à mes amis" },
            { l1: "du coup", en: "so, as a result", note: "very common in speech" },
            { l1: "pourtant / cependant", en: "however, yet", note: "cependant is more formal" },
            { l1: "malgré", en: "despite, in spite of", note: "+ noun: malgré la pluie" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the connector",
          items: [
            { template: "Le train est annulé ___ la grève. (because of)", answer: "à cause de", en: "The train is cancelled because of the strike.", options: ["grâce à", "à cause de", "parce que", "malgré"] },
            { template: "J'ai trouvé l'hôtel ___ ton plan. (thanks to)", answer: "grâce à", en: "I found the hotel thanks to your map.", options: ["à cause de", "grâce à", "puisque", "pourtant"] },
            { template: "Il pleut, ___ on reste à l'hôtel. (so)", answer: "du coup", en: "It's raining, so we're staying at the hotel.", options: ["malgré", "du coup", "car", "pourtant"] },
            { template: "___ il fait froid, je sors. (despite the cold... I go out)", answer: "Malgré", en: "Despite the cold, I'm going out.", options: ["Parce que", "Malgré", "Grâce à", "Puisque"] },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Cause & contrast check",
          questions: [
            {
              q: "Which means 'thanks to' (positive cause)?",
              options: ["à cause de", "grâce à", "malgré", "pourtant"],
              correct: 1,
              fb: "'grâce à' = thanks to (positive). 'à cause de' is for negative/neutral causes.",
            },
            {
              q: "'Du coup' is closest to…",
              options: ["however", "so / as a result", "despite", "because"],
              correct: 1,
              fb: "'Du coup' = so/as a result — extremely common in spoken French.",
            },
            {
              q: "'Malgré' is followed by…",
              options: ["a full clause", "a noun (despite + noun)", "an infinitive", "nothing"],
              correct: 1,
              fb: "'Malgré' takes a noun: malgré la pluie. For a clause you'd use 'bien que' + subjunctive.",
            },
          ],
        },
      ],
    },
    {
      slug: "connecteurs-temps",
      title: "Time words & sequencing a story",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Putting events in order",
          body: [
            "To narrate — even simply — you need time markers. Some position events relative to each other (<em>avant</em>, <em>après</em>, <em>pendant</em>), others anchor them on a timeline (<em>hier</em>, <em>aujourd'hui</em>, <em>demain</em>, <em>maintenant</em>).",
            "Two that confuse English speakers: <strong>depuis</strong> = 'since / for' an ongoing situation (<em>J'habite ici depuis 2020</em> — and I still do), and <strong>il y a</strong> = 'ago' (<em>il y a deux ans</em> — two years ago).",
            "<em>Avant de</em> and <em>après</em> change shape with verbs: <em>avant de partir</em> (before leaving, + infinitive), <em>après être parti</em> (after having left). For now, learn <em>avant de</em> + infinitive.",
          ],
          keyPoint: "depuis = since/for (still ongoing). il y a + duration = ago. avant de + infinitive = before doing.",
        },
        {
          type: "vocab",
          heading: "Time expressions",
          items: [
            { l1: "d'abord, ensuite, enfin", en: "first, then, finally" },
            { l1: "avant / après", en: "before / after" },
            { l1: "avant de partir", en: "before leaving", note: "avant de + infinitive" },
            { l1: "pendant", en: "during, for (a period)", note: "pendant les vacances" },
            { l1: "depuis", en: "since / for (still true)", note: "depuis deux ans" },
            { l1: "il y a (deux jours)", en: "(two days) ago" },
            { l1: "déjà / pas encore", en: "already / not yet" },
            { l1: "ne … plus", en: "no longer, not anymore", note: "wraps the verb" },
            { l1: "tout de suite / bientôt", en: "right away / soon" },
          ],
        },
        {
          type: "orderWords",
          heading: "Sequence the sentence",
          items: [
            { tokens: ["D'abord", "je", "prends", "un", "café,", "ensuite", "je", "pars."], en: "First I have a coffee, then I leave." },
            { tokens: ["J'habite", "à", "Paris", "depuis", "trois", "ans."], en: "I've lived in Paris for three years." },
            { tokens: ["Je", "suis", "arrivé", "il", "y", "a", "deux", "jours."], en: "I arrived two days ago." },
            { tokens: ["Lave-toi", "les", "mains", "avant", "de", "manger."], en: "Wash your hands before eating." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I've been learning French for two months. I arrived in Paris three weeks ago.",
          reference: "J'apprends le français depuis deux mois. Je suis arrivé à Paris il y a trois semaines.",
          hint: "ongoing 'for' = depuis; 'ago' = il y a + duration",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Quand même' is closest to…", options: ["because", "therefore", "all the same / even so", "first of all"], correct: 2 },
      { q: "'D'abord… puis… enfin' describes…", options: ["Contrast", "A sequence of events", "Cause and effect", "Addition"], correct: 1 },
      { q: "'Parce que' and 'car' both mean…", options: ["so", "but", "because", "and"], correct: 2 },
      { q: "'Par contre' is closest to…", options: ["on the other hand", "on the contrary", "both a and b", "because of that"], correct: 2 },
      { q: "'Donc' most closely translates as…", options: ["but", "so / therefore", "because", "then"], correct: 1 },
      { q: "'Aussi' at the end of a clause means…", options: ["also / too", "moreover", "therefore", "so"], correct: 0 },
    ],
  },
};
