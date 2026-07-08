import type { Unit } from "../../types";

export const UNIT_CONNECTORS: Unit = {
  slug: "connectors",
  stage: 2,
  order: 9,
  icon: "🔗",
  title: "Connecting words",
  tagline: "E, ma, però, perché, poi, quindi — the tiny words that turn fragments into real sentences.",
  badge: "core",
  lessons: [
    {
      slug: "connectors-basics",
      title: "The everyday glue: e, ma, o, anche",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Six words that double your fluency overnight",
          body: [
            "<strong>E</strong> = and. <strong>Ma</strong> = but. <strong>O</strong> = or. <strong>Anche</strong> = also/too. <strong>Né… né…</strong> = neither… nor… <strong>O… o…</strong> = either… or…",
            "<em>E</em> becomes <em>ed</em> when the next word starts with the same vowel: <em>ed io, ed Elena</em>. Same with <em>o → od</em>. (You'll hear both — neither is wrong, but the elided form sounds smoother.)",
            "<strong>Anche</strong> placement matters: usually goes <em>before</em> the word it modifies. <em>Anche io</em> = me too. <em>Anche Marco mangia.</em> = Marco eats too. Not <em>Marco anche mangia</em>.",
          ],
          keyPoint:
            "e (and), ma (but), o (or), anche (also). 'E' → 'ed' before a word starting with the same vowel.",
        },
        {
          type: "vocab",
          heading: "The starter pack",
          items: [
            { l1: "e / ed", en: "and (use 'ed' before a vowel match)" },
            { l1: "ma", en: "but" },
            { l1: "o", en: "or" },
            { l1: "anche", en: "also / too" },
            { l1: "neanche / nemmeno", en: "not even / either (in negatives)" },
            { l1: "né… né…", en: "neither… nor…" },
            { l1: "o… o…", en: "either… or…" },
            { l1: "non solo… ma anche…", en: "not only… but also…" },
          ],
        },
        {
          type: "tip",
          heading: "'Me too' vs 'me neither'",
          body: "Positive: <em>Anch'io!</em> (note the elision: anche + io → anch'io). Negative: <em>Neanch'io.</em> or <em>Nemmeno io.</em> If your friend says \"Non mi piace il caffè,\" you reply <strong>Neanche a me</strong>, not anch'io.",
          example: { l1: "— Sono stanco. — Anch'io.", en: "— I'm tired. — Me too." },
        },
        {
          type: "fillBlank",
          heading: "Pick the connector",
          items: [
            {
              template: "Mi piace la pizza ___ la pasta.",
              answer: "e",
              en: "I like pizza and pasta.",
              options: ["e", "ma", "o", "anche"],
            },
            {
              template: "Vorrei un caffè, ___ senza zucchero.",
              answer: "ma",
              en: "I'd like a coffee, but without sugar.",
              options: ["e", "ma", "o", "anche"],
            },
            {
              template: "Preferisci il caffè ___ il tè?",
              answer: "o",
              en: "Do you prefer coffee or tea?",
              options: ["e", "ma", "o", "anche"],
            },
            {
              template: "Marco parla francese e ___ tedesco.",
              answer: "anche",
              en: "Marco speaks French and also German.",
              options: ["e", "ma", "o", "anche"],
            },
            {
              template: "Non mangio carne ___ pesce.",
              answer: "né",
              en: "I don't eat meat or fish.",
              options: ["e", "o", "né", "ma"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Glue the fragments",
          items: [
            { tokens: ["Sono", "americano", ",", "ma", "abito", "in", "Italia"], en: "I'm American, but I live in Italy." },
            { tokens: ["Parlo", "inglese", "e", "un", "po'", "di", "italiano"], en: "I speak English and a little Italian." },
            { tokens: ["Vorrei", "un", "tè", "o", "una", "tisana"], en: "I'd like a tea or an herbal tea." },
            { tokens: ["Anche", "mia", "sorella", "lavora", "qui"], en: "My sister also works here." },
          ],
        },
      ],
    },
    {
      slug: "connectors-cause-result",
      title: "Cause and result: perché, perciò, quindi, allora",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Why → because → so",
          body: [
            "<strong>Perché</strong> covers BOTH \"why\" and \"because\" — same word. <em>Perché studi italiano? Perché vado a Roma.</em> Why → because.",
            "<strong>Perciò / Quindi</strong> = so / therefore. <em>Sono stanco, quindi vado a casa.</em> = I'm tired, so I'm going home.",
            "<strong>Allora</strong> is a multitool: \"so\" in the conclusive sense, \"then\" (in time), and a discourse marker (\"so… anyway…\"). Italians say it constantly: <em>Allora, cosa facciamo stasera?</em>",
            "<strong>Siccome / Dato che</strong> = since / given that. Use them at the START of a clause: <em>Siccome piove, restiamo a casa.</em> = Since it's raining, we're staying home.",
          ],
          keyPoint:
            "Perché (why / because) · perciò / quindi (so) · allora (so / then / well) · siccome (since).",
        },
        {
          type: "vocab",
          heading: "Cause-and-result connectors",
          items: [
            { l1: "perché", en: "why / because" },
            { l1: "perciò", en: "therefore / so (a little formal)" },
            { l1: "quindi", en: "so / therefore (very common, neutral)" },
            { l1: "allora", en: "so / then / well (multi-purpose discourse word)" },
            { l1: "siccome", en: "since / because (starts a clause)" },
            { l1: "dato che", en: "given that / since" },
            { l1: "così", en: "so / in this way (Sono così stanco. — I'm so tired.)" },
          ],
        },
        {
          type: "tip",
          heading: "Allora — the Italian 'umm so…'",
          body: "Italians use <em>allora</em> at the start of sentences to buy thinking time, to signal a transition, or to begin a story. It's like English \"so…\" or \"well…\". <em>Allora, cosa hai fatto ieri?</em> = So, what did you do yesterday? Drop it in casually and you'll sound much more natural.",
        },
        {
          type: "multipleChoice",
          heading: "Cause or result?",
          questions: [
            {
              q: "Non vado al lavoro ___ sono malato.",
              options: ["perché", "quindi", "ma", "anche"],
              correct: 0,
              fb: "Because → perché.",
            },
            {
              q: "Piove, ___ porto l'ombrello.",
              options: ["perché", "anche", "quindi", "ma"],
              correct: 2,
              fb: "Therefore → quindi (or perciò).",
            },
            {
              q: "___ piove, restiamo a casa.",
              options: ["Perché", "Quindi", "Siccome", "Anche"],
              correct: 2,
              fb: "Sentence-starting 'since' → siccome.",
            },
            {
              q: "___ , cosa facciamo stasera?",
              options: ["Perché", "Allora", "Siccome", "Né"],
              correct: 1,
              fb: "Casual 'so / well' opener → allora.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I don't go to work today because I'm sick, so I'm staying home.",
          reference: "Oggi non vado al lavoro perché sono malato, quindi resto a casa.",
          hint: "Two connectors: 'because' = perché, 'so' = quindi.",
        },
      ],
    },
    {
      slug: "connectors-sequence-contrast",
      title: "Sequencing and contrast: poi, prima, dopo, però, invece",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Sequencing — first, then, after",
          body: [
            "<strong>Prima</strong> = before / first. <strong>Poi</strong> = then. <strong>Dopo</strong> = after / afterward. <strong>Infine / Alla fine</strong> = finally / in the end.",
            "<em>Prima vado al bar, poi vado al lavoro, dopo torno a casa.</em> = First I go to the café, then I go to work, after that I go home.",
            "<strong>Però</strong> = but / however — almost interchangeable with <em>ma</em>, slightly more emphatic. Often used at the end of a sentence too: <em>Mi piace, però è caro.</em> = I like it, but it's expensive.",
            "<strong>Invece</strong> = instead / on the other hand. <em>Marco va al cinema; io invece resto a casa.</em>",
          ],
          keyPoint:
            "Prima → poi → dopo → infine. Però (= ma, emphatic). Invece (instead / on the other hand).",
        },
        {
          type: "vocab",
          heading: "Sequence & contrast",
          items: [
            { l1: "prima", en: "before / first" },
            { l1: "poi", en: "then / next" },
            { l1: "dopo", en: "after / afterward" },
            { l1: "infine / alla fine", en: "finally / in the end" },
            { l1: "intanto", en: "meanwhile / in the meantime" },
            { l1: "però", en: "but / however (stronger than ma)" },
            { l1: "invece", en: "instead / on the other hand" },
            { l1: "tuttavia", en: "however / yet (more formal)" },
            { l1: "comunque", en: "anyway / in any case" },
          ],
        },
        {
          type: "tip",
          heading: "Invece — the favorite contrast word",
          body: "<em>Invece</em> is used constantly to draw contrasts between people or options. <em>Mio fratello ama il calcio. Io invece preferisco la pallacanestro.</em> = My brother loves soccer. I, on the other hand, prefer basketball. It often goes after the subject for stress.",
        },
        {
          type: "dialogue",
          heading: "A day in the life",
          setup: "Anna describes her morning.",
          lines: [
            { speaker: "Anna", l1: "Allora, prima mi sveglio alle sette, poi faccio colazione.", en: "So, first I wake up at seven, then I have breakfast." },
            { speaker: "Marco", l1: "Cosa mangi?", en: "What do you eat?" },
            { speaker: "Anna", l1: "Di solito un cornetto. Però oggi avevo fame, quindi anche un'omelette.", en: "Usually a cornetto. But today I was hungry, so also an omelette." },
            { speaker: "Marco", l1: "E dopo?", en: "And after?" },
            { speaker: "Anna", l1: "Dopo vado al lavoro in metro. Intanto leggo le notizie sul telefono.", en: "After that I go to work by metro. Meanwhile I read the news on my phone." },
            { speaker: "Marco", l1: "Io invece vado a piedi — abito vicino.", en: "I, on the other hand, go on foot — I live nearby." },
            { speaker: "Anna", l1: "Beato te! Alla fine arrivo in ufficio alle nove.", en: "Lucky you! In the end I get to the office at nine." },
          ],
        },
        {
          type: "orderWords",
          heading: "Sequence the day",
          items: [
            { tokens: ["Prima", "studio", ",", "poi", "esco", "con", "gli", "amici"], en: "First I study, then I go out with friends." },
            { tokens: ["Mi", "piace", "Roma", ",", "però", "è", "molto", "caotica"], en: "I like Rome, but it's very chaotic." },
            { tokens: ["Marco", "preferisce", "il", "mare", ";", "io", "invece", "preferisco", "la", "montagna"], alts: [["Marco", "preferisce", "il", "mare", ";", "invece", "io", "preferisco", "la", "montagna"]], en: "Marco prefers the sea; I, on the other hand, prefer the mountains." },
            { tokens: ["Alla", "fine", "abbiamo", "deciso", "di", "restare", "a", "casa"], en: "In the end we decided to stay home." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill the connector",
          items: [
            {
              template: "Mi piace il caffè, ___ non bevo cappuccino dopo le 11.",
              answer: "però",
              en: "I like coffee, but I don't drink cappuccino after 11.",
              options: ["però", "siccome", "poi", "anche"],
            },
            {
              template: "Vado in palestra ___ a lavoro.",
              answer: "prima di",
              en: "I go to the gym before work.",
              options: ["dopo di", "prima di", "invece di", "anche di"],
            },
            {
              template: "Lui ama il calcio; io ___ amo il tennis.",
              answer: "invece",
              en: "He loves soccer; I, on the other hand, love tennis.",
              options: ["però", "invece", "poi", "anche"],
            },
            {
              template: "Sono stanco, ___ vado a letto presto.",
              answer: "quindi",
              en: "I'm tired, so I'm going to bed early.",
              options: ["perché", "quindi", "ma", "però"],
            },
            {
              template: "___ , dove andiamo stasera?",
              answer: "Allora",
              en: "So, where are we going tonight?",
              options: ["Perché", "Allora", "Né", "Poi"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "First we have coffee, then we visit the museum, and finally we go to lunch.",
          reference: "Prima prendiamo un caffè, poi visitiamo il museo, e infine andiamo a pranzo.",
          hint: "Three sequencers: prima, poi, infine.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Which is the same word for 'why' and 'because'?",
        options: ["quindi", "perché", "perciò", "siccome"],
        correct: 1,
      },
      {
        q: "'I'm tired, so I'm going home.' =",
        options: [
          "Sono stanco, perché vado a casa.",
          "Sono stanco, quindi vado a casa.",
          "Sono stanco, ma vado a casa.",
          "Sono stanco, anche vado a casa.",
        ],
        correct: 1,
      },
      {
        q: "'Me too!' (positive) =",
        options: ["Anche a me!", "Anch'io!", "Neanch'io!", "Anche tu!"],
        correct: 1,
      },
      {
        q: "'Me neither' (in response to a negative) =",
        options: ["Anch'io.", "Anche a me.", "Neanch'io.", "Né io."],
        correct: 2,
      },
      {
        q: "Which means 'instead / on the other hand'?",
        options: ["però", "invece", "comunque", "anche"],
        correct: 1,
      },
      {
        q: "'First I work, then I rest.' =",
        options: [
          "Dopo lavoro, prima riposo.",
          "Prima lavoro, poi riposo.",
          "Poi lavoro, prima riposo.",
          "Lavoro infine, riposo prima.",
        ],
        correct: 1,
      },
      {
        q: "Italians say ___ at the start of sentences to mean 'so / well…'",
        options: ["perché", "siccome", "allora", "infine"],
        correct: 2,
      },
      {
        q: "'I don't eat meat or fish' =",
        options: [
          "Non mangio carne e pesce.",
          "Non mangio carne o pesce.",
          "Non mangio né carne né pesce.",
          "Non mangio anche carne pesce.",
        ],
        correct: 2,
      },
      {
        q: "'But' (slightly stronger than ma) =",
        options: ["però", "perché", "anche", "siccome"],
        correct: 0,
      },
      {
        q: "Translate: 'Since it's raining, we're staying home.'",
        options: [
          "Perché piove, restiamo a casa.",
          "Siccome piove, restiamo a casa.",
          "Quindi piove, restiamo a casa.",
          "Anche piove, restiamo a casa.",
        ],
        correct: 1,
      },
    ],
  },
};
