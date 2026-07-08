import type { Unit } from "../../types";

export const UNIT_CONNECTORS: Unit = {
  slug: "connectors",
  stage: 2,
  order: 9,
  icon: "🔗",
  title: "Connecting words",
  tagline: "E, mas, porque, então, também, no entanto.",
  badge: "core",
  lessons: [
    {
      slug: "connectors-basics",
      title: "The everyday glue: e, mas, ou, também",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Six words that double your fluency overnight",
          body: [
            "<strong>E</strong> = and. <strong>Mas</strong> = but. <strong>Ou</strong> = or. <strong>Também</strong> = also/too. <strong>Nem… nem…</strong> = neither… nor… <strong>Ou… ou…</strong> = either… or…",
            "These tiny words are what turn a list of fragments into a real sentence. <em>Gosto de café e de chá, mas prefiro café.</em> = I like coffee and tea, but I prefer coffee.",
            "<strong>Também</strong> usually comes <em>after</em> the verb or at the end: <em>Eu também gosto.</em> = I like it too. <em>Falo inglês e também um pouco de português.</em> = I speak English and also a little Portuguese.",
            "Watch the spelling: <em>também</em> keeps the accent on the final <em>é</em> (it's stressed there), and <em>porque</em> (because) has no accent, while <em>por que</em> (why, in questions) is two words.",
          ],
          keyPoint:
            "e (and), mas (but), ou (or), também (also/too). 'Nem… nem…' = neither… nor…",
        },
        {
          type: "vocab",
          heading: "The starter pack",
          items: [
            { l1: "e", en: "and" },
            { l1: "mas", en: "but" },
            { l1: "ou", en: "or" },
            { l1: "também", en: "also / too", note: "Note the accent on the final é" },
            { l1: "nem", en: "nor / not even", note: "Used in negatives" },
            { l1: "nem… nem…", en: "neither… nor…" },
            { l1: "ou… ou…", en: "either… or…" },
            { l1: "não só… mas também…", en: "not only… but also…" },
          ],
        },
        {
          type: "tip",
          heading: "'Me too' vs 'me neither'",
          body: "Positive: <em>Eu também!</em> = Me too. Negative: <em>Eu também não.</em> = Me neither. If a friend says <em>Não gosto de café</em> ('I don't like coffee'), you reply <strong>Eu também não</strong> — never just <em>eu também</em>, which would mean the opposite.",
          example: { l1: "— Estou cansado. — Eu também.", en: "— I'm tired. — Me too." },
        },
        {
          type: "fillBlank",
          heading: "Pick the connector",
          items: [
            {
              template: "Gosto de pizza ___ de massa.",
              answer: "e",
              en: "I like pizza and pasta.",
              options: ["e", "mas", "ou", "também"],
            },
            {
              template: "Quero um café, ___ sem açúcar.",
              answer: "mas",
              en: "I'd like a coffee, but without sugar.",
              options: ["e", "mas", "ou", "também"],
            },
            {
              template: "Você prefere café ___ chá?",
              answer: "ou",
              en: "Do you prefer coffee or tea?",
              options: ["e", "mas", "ou", "também"],
            },
            {
              template: "O Marco fala francês e ___ alemão.",
              answer: "também",
              en: "Marco speaks French and also German.",
              options: ["e", "mas", "ou", "também"],
            },
            {
              template: "Não como carne ___ peixe.",
              answer: "nem",
              en: "I don't eat meat or fish.",
              options: ["e", "ou", "nem", "mas"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Glue the fragments",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["Sou", "americano", ",", "mas", "moro", "no", "Brasil"], en: "I'm American, but I live in Brazil." },
            { tokens: ["Falo", "inglês", "e", "um", "pouco", "de", "português"], en: "I speak English and a little Portuguese." },
            { tokens: ["Quero", "um", "chá", "ou", "um", "suco"], en: "I'd like a tea or a juice." },
            { tokens: ["A", "minha", "irmã", "também", "trabalha", "aqui"], alts: [["A", "minha", "irmã", "trabalha", "aqui", "também"]], en: "My sister also works here." },
          ],
        },
      ],
    },
    {
      slug: "connectors-cause-result",
      title: "Cause and result: porque, por isso, então, como",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Why → because → so",
          body: [
            "<strong>Porque</strong> = because (one word, no accent). It answers <em>por que…?</em> = why…? (two words in a question). <em>Por que você estuda português? Porque vou ao Brasil.</em> = Why do you study Portuguese? Because I'm going to Brazil.",
            "<strong>Por isso</strong> = that's why / so. <em>Estou cansado, por isso vou para casa.</em> = I'm tired, so I'm going home.",
            "<strong>Então</strong> = so / then. It's a multitool — a result word and a discourse marker. Brazilians say it constantly: <em>Então, o que vamos fazer hoje à noite?</em> = So, what are we doing tonight?",
            "<strong>Como</strong> at the start of a clause = since / as. <em>Como está chovendo, ficamos em casa.</em> = Since it's raining, we're staying home.",
          ],
          keyPoint:
            "porque (because) · por isso (that's why / so) · então (so / then / well) · como (since, at clause start).",
        },
        {
          type: "vocab",
          heading: "Cause-and-result connectors",
          items: [
            { l1: "porque", en: "because", note: "One word; 'por que' (two words) = why, in questions" },
            { l1: "por isso", en: "that's why / so / therefore" },
            { l1: "então", en: "so / then / well", note: "Very common, also a filler word" },
            { l1: "como", en: "since / as", note: "Starts a clause: Como chove…" },
            { l1: "já que", en: "since / given that" },
            { l1: "portanto", en: "therefore (a bit formal)" },
            { l1: "assim", en: "so / thus / this way" },
          ],
        },
        {
          type: "tip",
          heading: "Então and tipo — the Brazilian fillers",
          body: "Brazilians open sentences with <em>então</em> to buy thinking time or start a story, like English 'so…' or 'well…'. They also pepper speech with <em>tipo</em> ('like'), <em>aí</em> / <em>daí</em> ('and then'), and <em>sabe?</em> ('you know?'). <em>Então, aí eu cheguei, tipo, super atrasado, sabe?</em> In Portugal you'll hear <em>pois</em> (yeah/right) and <em>pronto</em> ('okay, that's it') filling the same role.",
        },
        {
          type: "multipleChoice",
          heading: "Cause or result?",
          questions: [
            {
              q: "Não vou trabalhar ___ estou doente.",
              options: ["porque", "então", "mas", "também"],
              correct: 0,
              fb: "Because → porque (one word).",
            },
            {
              q: "Está chovendo, ___ vou levar o guarda-chuva.",
              options: ["porque", "também", "por isso", "mas"],
              correct: 2,
              fb: "That's why / so → por isso.",
            },
            {
              q: "___ está chovendo, ficamos em casa.",
              options: ["Porque", "Então", "Como", "Também"],
              correct: 2,
              fb: "Clause-starting 'since' → como (or já que).",
            },
            {
              q: "___, o que vamos fazer hoje à noite?",
              options: ["Porque", "Então", "Como", "Nem"],
              correct: 1,
              fb: "Casual 'so / well' opener → então.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm not going to work today because I'm sick, so I'm staying home.",
          reference: "Hoje não vou trabalhar porque estou doente, então fico em casa.",
          hint: "Two connectors: 'because' = porque, 'so' = então (or por isso).",
        },
      ],
    },
    {
      slug: "connectors-sequence-contrast",
      title: "Sequencing and contrast: depois, antes, então, no entanto",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Sequencing — first, then, after",
          body: [
            "<strong>Primeiro</strong> = first. <strong>Depois</strong> = then / after. <strong>Antes</strong> = before. <strong>Por fim / No final</strong> = finally / in the end.",
            "<em>Primeiro vou à padaria, depois vou ao trabalho, e no final volto para casa.</em> = First I go to the bakery, then I go to work, and in the end I go home.",
            "<strong>No entanto / Porém / Contudo</strong> = however. These are stronger, more written cousins of <em>mas</em>. <em>Gosto da cidade; no entanto, é muito cara.</em> = I like the city; however, it's very expensive.",
            "<strong>Por exemplo</strong> = for example. <strong>Ou seja</strong> = in other words / that is. <strong>Enquanto</strong> = while / meanwhile. These help you expand and clarify an idea.",
          ],
          keyPoint:
            "primeiro → depois → no final. no entanto / porém / contudo (however). por exemplo, ou seja, enquanto.",
        },
        {
          type: "vocab",
          heading: "Sequence & contrast",
          items: [
            { l1: "primeiro", en: "first" },
            { l1: "depois", en: "then / after / afterward" },
            { l1: "antes", en: "before" },
            { l1: "por fim / no final", en: "finally / in the end" },
            { l1: "enquanto", en: "while / meanwhile" },
            { l1: "no entanto", en: "however / nevertheless" },
            { l1: "porém", en: "however / but (stronger than mas)" },
            { l1: "contudo", en: "however / yet (more formal)" },
            { l1: "por exemplo", en: "for example" },
            { l1: "ou seja", en: "in other words / that is" },
            { l1: "quando", en: "when" },
          ],
        },
        {
          type: "tip",
          heading: "Porém and no entanto — the elegant 'but'",
          body: "In speech, <em>mas</em> covers almost every 'but'. But to sound polished — especially in writing — reach for <em>porém</em>, <em>no entanto</em>, or <em>contudo</em>. <em>O hotel era barato; porém, ficava muito longe do centro.</em> = The hotel was cheap; however, it was very far from the centre. They usually sit at the start of the second clause, set off by a comma.",
          example: { l1: "Gosto do Rio, no entanto, é muito caro.", en: "I like Rio, however, it's very expensive." },
        },
        {
          type: "dialogue",
          heading: "A day in the life",
          setup: "Ana describes her morning.",
          lines: [
            { speaker: "Ana", l1: "Então, primeiro eu acordo às sete, depois tomo café da manhã.", en: "So, first I wake up at seven, then I have breakfast." },
            { speaker: "Marco", l1: "O que você come?", en: "What do you eat?" },
            { speaker: "Ana", l1: "Normalmente um pão. Mas hoje eu estava com fome, então comi um ovo também.", en: "Usually some bread. But today I was hungry, so I had an egg too." },
            { speaker: "Marco", l1: "E depois?", en: "And after?" },
            { speaker: "Ana", l1: "Depois vou trabalhar de metrô. Enquanto isso, leio as notícias no celular.", en: "After that I go to work by metro. Meanwhile, I read the news on my phone." },
            { speaker: "Marco", l1: "Eu, no entanto, vou a pé — moro perto.", en: "I, however, go on foot — I live nearby." },
            { speaker: "Ana", l1: "Que sorte! Por fim, chego no escritório às nove.", en: "Lucky you! In the end, I get to the office at nine." },
          ],
        },
        {
          type: "orderWords",
          heading: "Sequence the day",
          items: [
            { tokens: ["Primeiro", "estudo", ",", "depois", "saio", "com", "os", "amigos"], en: "First I study, then I go out with friends." },
            { tokens: ["Gosto", "do", "Rio", ",", "porém", "é", "muito", "caótico"], en: "I like Rio, but it's very chaotic." },
            { tokens: ["O", "Marco", "prefere", "a", "praia", ";", "eu", "prefiro", "a", "montanha"], en: "Marco prefers the beach; I prefer the mountains." },
            { tokens: ["No", "final", ",", "decidimos", "ficar", "em", "casa"], en: "In the end, we decided to stay home." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill the connector",
          items: [
            {
              template: "Gosto de café, ___ não tomo depois das onze.",
              answer: "mas",
              en: "I like coffee, but I don't drink it after eleven.",
              options: ["mas", "como", "depois", "também"],
            },
            {
              template: "Vou à academia ___ do trabalho.",
              answer: "antes",
              en: "I go to the gym before work.",
              options: ["depois", "antes", "enquanto", "porém"],
            },
            {
              template: "Ele ama futebol; ___, eu prefiro tênis.",
              answer: "no entanto",
              en: "He loves soccer; however, I prefer tennis.",
              options: ["porque", "no entanto", "depois", "também"],
            },
            {
              template: "Estou cansado, ___ vou dormir cedo.",
              answer: "então",
              en: "I'm tired, so I'm going to bed early.",
              options: ["porque", "então", "mas", "antes"],
            },
            {
              template: "___, aonde a gente vai hoje à noite?",
              answer: "Então",
              en: "So, where are we going tonight?",
              options: ["Porque", "Então", "Nem", "Depois"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "First we have coffee, then we visit the museum, and finally we go to lunch.",
          reference: "Primeiro tomamos um café, depois visitamos o museu, e por fim vamos almoçar.",
          hint: "Three sequencers: primeiro, depois, por fim (or no final).",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Which word means 'because' (one word, no accent)?",
        options: ["então", "porque", "por isso", "como"],
        correct: 1,
      },
      {
        q: "'I'm tired, so I'm going home.' =",
        options: [
          "Estou cansado, porque vou para casa.",
          "Estou cansado, então vou para casa.",
          "Estou cansado, mas vou para casa.",
          "Estou cansado, também vou para casa.",
        ],
        correct: 1,
      },
      {
        q: "'Me too!' (positive) =",
        options: ["Eu também não!", "Eu também!", "Nem eu!", "Você também!"],
        correct: 1,
      },
      {
        q: "'Me neither' (in response to a negative) =",
        options: ["Eu também.", "Eu também não.", "Nem você.", "Também sim."],
        correct: 1,
      },
      {
        q: "Which means 'however' (a polished 'but')?",
        options: ["por isso", "no entanto", "enquanto", "também"],
        correct: 1,
      },
      {
        q: "'First I work, then I rest.' =",
        options: [
          "Depois trabalho, primeiro descanso.",
          "Primeiro trabalho, depois descanso.",
          "Então trabalho, antes descanso.",
          "Trabalho por fim, descanso antes.",
        ],
        correct: 1,
      },
      {
        q: "Brazilians say ___ at the start of sentences to mean 'so / well…'",
        options: ["porque", "como", "então", "por fim"],
        correct: 2,
      },
      {
        q: "'I don't eat meat or fish' =",
        options: [
          "Não como carne e peixe.",
          "Não como carne ou peixe.",
          "Não como nem carne nem peixe.",
          "Não como também carne peixe.",
        ],
        correct: 2,
      },
      {
        q: "Which is a clause-starting 'since / as'?",
        options: ["como", "porque", "também", "nem"],
        correct: 0,
      },
      {
        q: "Translate: 'Since it's raining, we're staying home.'",
        options: [
          "Porque está chovendo, ficamos em casa.",
          "Como está chovendo, ficamos em casa.",
          "Então está chovendo, ficamos em casa.",
          "Também está chovendo, ficamos em casa.",
        ],
        correct: 1,
      },
    ],
  },
};
