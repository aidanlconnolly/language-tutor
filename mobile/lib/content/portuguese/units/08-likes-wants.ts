import type { Unit } from "../../types";

export const UNIT_LIKES_WANTS: Unit = {
  slug: "likes-wants",
  stage: 2,
  order: 8,
  icon: "❤️",
  title: "Likes & wants",
  tagline: "Eu gosto de, eu queria, prefiro — the gostar de pattern.",
  badge: "core",
  lessons: [
    {
      slug: "likes-gostar-de",
      title: "Gostar DE — the verb that needs 'de'",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Portuguese doesn't say 'I like X' — it says 'I like OF X'",
          body: [
            "To say you like something, Portuguese uses <strong>gostar de</strong>. The <em>de</em> is not optional — it's baked into the verb. <em>Eu gosto de café.</em> = \"I like coffee.\" Literally: \"I like of coffee.\"",
            "This is the single most common mistake English speakers make: they drop the <em>de</em> and say <em>✕ eu gosto café</em>. Always glue <strong>gostar + de</strong> together in your head.",
            "It works the same with verbs: to say you like <em>doing</em> something, keep the verb in the infinitive — <em>Eu gosto de viajar.</em> (\"I like to travel.\") <em>Eu gosto de cozinhar.</em> (\"I like to cook.\")",
          ],
          keyPoint: "gostar is ALWAYS followed by de: eu gosto DE café, eu gosto DE viajar.",
        },
        {
          type: "conjugation",
          heading: "Gostar (de) — present tense",
          verb: "gostar de",
          meaning: "to like (lit. to like of)",
          intro: "A regular -ar verb. The de comes right after the conjugated form.",
          tenses: [
            {
              name: "Present",
              forms: [
                { person: "eu", form: "gosto de", en: "I like" },
                { person: "você / ele / ela", form: "gosta de", en: "you / he / she like(s)" },
                { person: "nós", form: "gostamos de", en: "we like" },
                { person: "a gente", form: "gosta de", en: "we like (everyday BR 'we')" },
                { person: "vocês / eles / elas", form: "gostam de", en: "you all / they like" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "de + o/a contracts — gosto do, gosto da",
          body: "When <em>de</em> meets a definite article it contracts: <em>de + o = do</em>, <em>de + a = da</em>, <em>de + os = dos</em>, <em>de + as = das</em>. So \"I like the wine\" is <em>Eu gosto do vinho</em>, and \"I like the beaches\" is <em>Eu gosto das praias</em>. With a general noun (no article) you just use <em>de</em>: <em>Eu gosto de música.</em>",
          example: { l1: "Eu gosto do Brasil e da comida brasileira.", en: "I like Brazil and Brazilian food." },
        },
        {
          type: "vocab",
          heading: "Things to like (and how strongly)",
          intro: "A scale from love to hate. Note that adorar and detestar take a direct object (no de!), but gostar always needs de.",
          items: [
            { l1: "amar", en: "to love", note: "Strong — for people, passions: Eu amo o Brasil." },
            { l1: "adorar", en: "to adore / love", note: "No 'de'! Eu adoro praia. Very common in BR." },
            { l1: "gostar de", en: "to like", note: "The everyday verb — needs de" },
            { l1: "não gostar de", en: "to not like", note: "Eu não gosto de chuva." },
            { l1: "detestar", en: "to hate / detest", note: "No 'de'! Eu detesto trânsito." },
            { l1: "odiar", en: "to hate", note: "No 'de'! Strong: Eu odeio acordar cedo." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Where's the 'de'?",
          questions: [
            {
              q: "'I like coffee.' =",
              options: ["Eu gosto café.", "Eu gosto de café.", "Eu gosta de café.", "Eu gosto do café muito."],
              correct: 1,
              fb: "gostar always needs de. With a general noun (no article): de café.",
            },
            {
              q: "'I like to travel.' =",
              options: ["Eu gosto viajar.", "Eu gosto de viajar.", "Eu gosto a viajar.", "Eu gosta de viajar."],
              correct: 1,
              fb: "Liking to do something: gostar de + infinitive → gosto de viajar.",
            },
            {
              q: "'I like the wine.' (specific wine) =",
              options: ["Eu gosto de o vinho.", "Eu gosto vinho.", "Eu gosto do vinho.", "Eu gosto da vinho."],
              correct: 2,
              fb: "de + o = do. The article o (the) makes it specific → gosto do vinho.",
            },
            {
              q: "'We like the beaches.' =",
              options: ["Nós gostamos das praias.", "Nós gostamos praias.", "Nós gosta de praias.", "Nós gostamos de as praias."],
              correct: 0,
              fb: "de + as = das. Plural feminine → das praias.",
            },
            {
              q: "Which verb does NOT take 'de'?",
              options: ["gostar", "gostar de", "adorar", "all need de"],
              correct: 2,
              fb: "adorar takes a direct object: Eu adoro praia (no de). Only gostar forces de.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I like Brazilian music but I don't like the cold.",
          reference: "Eu gosto de música brasileira mas não gosto do frio.",
          hint: "música (general) → de música. o frio (specific) → de + o = do frio. Don't forget the de twice.",
        },
      ],
    },
    {
      slug: "likes-quero-queria",
      title: "Quero, queria, gostaria — wanting things",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Quero = I want · queria = I'd like (softer)",
          body: [
            "<em>Quero</em> is the direct \"I want\" (from <em>querer</em>). It's fine, but on its own it can sound a bit blunt when ordering or asking for something.",
            "The polite everyday softener in Brazil is <strong>eu queria</strong> — literally an imperfect (\"I was wanting\"), but used as a gentle \"I'd like\". <em>Eu queria um café, por favor.</em> sounds warm and natural at a counter.",
            "<strong>Eu gostaria de</strong> is the most formal \"I would like\" (conditional of gostar) — and yes, it keeps the <em>de</em>: <em>Eu gostaria de reservar uma mesa.</em>",
          ],
          keyPoint: "quero = I want · eu queria = I'd like (polite, everyday BR) · eu gostaria de = I would like (formal, +de).",
        },
        {
          type: "conjugation",
          heading: "Querer — to want (irregular)",
          verb: "querer",
          meaning: "to want",
          tenses: [
            {
              name: "Present",
              forms: [
                { person: "eu", form: "quero", en: "I want" },
                { person: "você / ele / ela", form: "quer", en: "you / he / she want(s)" },
                { person: "nós", form: "queremos", en: "we want" },
                { person: "vocês / eles / elas", form: "querem", en: "you all / they want" },
              ],
            },
            {
              name: "Polite 'I'd like' (used as a softener)",
              forms: [
                { person: "eu", form: "queria", en: "I'd like" },
                { person: "você", form: "queria", en: "you'd like" },
                { person: "(gostar)", form: "gostaria de", en: "I/you would like (more formal, +de)" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "BR 'eu queria' vs the universal 'gostaria'",
          body: "In Brazil, <em>eu queria</em> is the go-to polite want at cafés, shops and ticket counters — soft, friendly, everyday. In Portugal you'll hear it too, but <em>queria</em> there leans even more on the request sense, and the very polite <em>queria</em> / <em>gostaria</em> overlap. Both countries use <strong>eu gostaria de</strong> for the most formal register (emails, formal requests). When in doubt anywhere, <em>gostaria de</em> is never wrong.",
          example: { l1: "BR: Eu queria a conta. · Formal: Eu gostaria de pagar a conta.", en: "I'd like the bill. / I would like to pay the bill." },
        },
        {
          type: "vocab",
          heading: "Wanting and wishing",
          items: [
            { l1: "Eu quero", en: "I want", note: "Direct" },
            { l1: "Eu queria", en: "I'd like", note: "Polite everyday softener (BR)" },
            { l1: "Eu gostaria de", en: "I would like to", note: "Formal — keeps de" },
            { l1: "Eu prefiro", en: "I prefer", note: "From preferir" },
            { l1: "Eu tenho vontade de", en: "I feel like / I'm in the mood for", note: "Lit. 'I have the will of' — needs de" },
            { l1: "Você quer...?", en: "Do you want...?", note: "Offering / asking" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering at a café in Rio",
          setup: "You step up to the counter for a snack.",
          lines: [
            { speaker: "Atendente", l1: "Oi! O que você vai querer?", en: "Hi! What would you like to have?" },
            { speaker: "Você", l1: "Eu queria um café e um pão de queijo, por favor.", en: "I'd like a coffee and a pão de queijo, please." },
            { speaker: "Atendente", l1: "Você quer o café com leite?", en: "Do you want the coffee with milk?" },
            { speaker: "Você", l1: "Não, prefiro puro. E queria também um suco de laranja.", en: "No, I prefer it black. And I'd also like an orange juice." },
            { speaker: "Atendente", l1: "Saindo! Mais alguma coisa?", en: "Coming right up! Anything else?" },
            { speaker: "Você", l1: "Só isso, obrigado.", en: "That's all, thank you." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the polite request",
          intro: "Tap the words into the right order.",
          items: [
            { tokens: ["Eu", "queria", "uma", "mesa", "para", "dois"], en: "I'd like a table for two." },
            { tokens: ["Eu", "gostaria", "de", "reservar", "um", "quarto"], en: "I would like to book a room." },
            { tokens: ["Você", "quer", "mais", "alguma", "coisa", "?"], en: "Do you want anything else?" },
            { tokens: ["Eu", "prefiro", "vinho", "tinto"], en: "I prefer red wine." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the right form",
          items: [
            {
              template: "___ um cafezinho, por favor. (polite, everyday)",
              answer: "Eu queria",
              en: "I'd like a little coffee, please.",
              options: ["Eu quero", "Eu queria", "Eu gosto", "Eu prefiro"],
            },
            {
              template: "Eu gostaria ___ falar com o gerente.",
              answer: "de",
              en: "I would like to speak with the manager.",
              options: ["de", "a", "com", "que"],
            },
            {
              template: "Vocês ___ sobremesa? (querer)",
              answer: "querem",
              en: "Do you all want dessert?",
              options: ["quer", "querem", "queremos", "quero"],
            },
            {
              template: "Estou com fome — tenho vontade ___ pizza.",
              answer: "de",
              en: "I'm hungry — I feel like pizza.",
              options: ["de", "a", "para", "com"],
            },
          ],
        },
      ],
    },
    {
      slug: "likes-prefiro-vontade",
      title: "Prefiro & tenho vontade de — preferences and cravings",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying you prefer one thing to another",
          body: [
            "<strong>Preferir</strong> (\"to prefer\") is mostly regular, but watch the stem: <em>eu prefiro</em> uses an <em>-i-</em>, while <em>nós preferimos</em> keeps the <em>-e-</em>. To compare, use <em>a</em>: <em>Prefiro chá a café.</em> (\"I prefer tea to coffee.\")",
            "To express a craving or a passing wish, Brazilians love <strong>estar com vontade de</strong> or <strong>ter vontade de</strong> — literally \"to be/have with the will of\". <em>Estou com vontade de tomar um açaí.</em> = \"I feel like having an açaí.\" The <em>de</em> is obligatory here too.",
            "Stack these with what you learned: gostar de, querer, preferir, ter vontade de — now you can talk about everything you like, want, and crave.",
          ],
          keyPoint: "prefiro X a Y = I prefer X to Y · estar/ter com vontade de = to feel like (craving), always +de.",
        },
        {
          type: "conjugation",
          heading: "Preferir — to prefer",
          verb: "preferir",
          meaning: "to prefer",
          intro: "Note the eu form changes the e to i: prefiro (not prefero).",
          tenses: [
            {
              name: "Present",
              forms: [
                { person: "eu", form: "prefiro", en: "I prefer (e → i)" },
                { person: "você / ele / ela", form: "prefere", en: "you / he / she prefer(s)" },
                { person: "nós", form: "preferimos", en: "we prefer" },
                { person: "vocês / eles / elas", form: "preferem", en: "you all / they prefer" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "BR 'estar com vontade' vs PT 'estar com vontade / apetecer'",
          body: "Brazilians say <em>estou com vontade de</em> (\"I feel like\") for cravings. In Portugal that works too, but you'll also hear the lovely verb <em>apetecer</em> — <em>Apetece-me um café</em> (\"I fancy a coffee\", literally \"a coffee appeals to me\"), which Brazilians almost never use. If you stick with <em>estar com vontade de</em>, you'll be understood perfectly in both countries.",
          example: { l1: "BR: Estou com vontade de praia. · PT: Apetece-me ir à praia.", en: "I feel like going to the beach." },
        },
        {
          type: "vocab",
          heading: "Comparing and craving",
          items: [
            { l1: "Prefiro X a Y", en: "I prefer X to Y", note: "Use a (not 'que' or 'do que' here)" },
            { l1: "Estou com vontade de", en: "I feel like / I'm in the mood to", note: "Craving right now (BR)" },
            { l1: "Tenho vontade de", en: "I feel like", note: "Slightly more general wish" },
            { l1: "Não estou a fim de", en: "I'm not in the mood for", note: "Casual BR slang" },
            { l1: "Que tal...?", en: "How about...?", note: "Suggesting something" },
            { l1: "Sei lá", en: "I dunno / whatever", note: "Casual BR filler when undecided" },
          ],
        },
        {
          type: "dialogue",
          heading: "Deciding what to do tonight",
          lines: [
            { speaker: "Bruno", l1: "Você está com vontade de sair hoje?", en: "Do you feel like going out today?" },
            { speaker: "Carla", l1: "Mais ou menos. Prefiro ficar em casa, na verdade.", en: "Sort of. I prefer to stay home, actually." },
            { speaker: "Bruno", l1: "Que tal um cinema? Eu adoro filme de terror.", en: "How about a movie? I love horror films." },
            { speaker: "Carla", l1: "Eca, eu detesto terror. Prefiro comédia a terror.", en: "Ugh, I hate horror. I prefer comedy to horror." },
            { speaker: "Bruno", l1: "Tá bom, então quero ver uma comédia. Combinado.", en: "Okay, then I want to watch a comedy. Deal." },
          ],
        },
        {
          type: "pronounce",
          heading: "Say it aloud",
          items: [
            { l1: "Eu gosto de", en: "I like", tip: "eh-oo GOSS-too jee (the 'de' softens to 'jee' in BR)" },
            { l1: "Eu queria", en: "I'd like", tip: "eh-oo keh-REE-ah" },
            { l1: "Eu gostaria de", en: "I would like", tip: "eh-oo goss-tah-REE-ah jee" },
            { l1: "Prefiro", en: "I prefer", tip: "preh-FEE-roo" },
            { l1: "Estou com vontade de", en: "I feel like", tip: "esh-TOH kõ võ-TAH-jee jee" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Preferences check",
          questions: [
            {
              q: "Conjugate preferir for 'eu':",
              options: ["prefero", "prefiro", "prefere", "prefirmos"],
              correct: 1,
              fb: "The eu form changes e → i: prefiro.",
            },
            {
              q: "'I prefer tea to coffee.' =",
              options: ["Prefiro chá que café.", "Prefiro chá a café.", "Prefiro chá de café.", "Prefiro chá do café."],
              correct: 1,
              fb: "Compare with a: prefiro X a Y.",
            },
            {
              q: "'I feel like having an açaí.' =",
              options: [
                "Estou com vontade um açaí.",
                "Estou com vontade de tomar um açaí.",
                "Estou vontade de açaí.",
                "Tenho vontade um açaí.",
              ],
              correct: 1,
              fb: "vontade always needs de: estou com vontade DE (tomar) um açaí.",
            },
            {
              q: "Conjugate preferir for 'nós':",
              options: ["prefirimos", "preferemos", "preferimos", "prefiramos"],
              correct: 2,
              fb: "nós keeps the e: preferimos.",
            },
            {
              q: "Which is the casual BR way to say 'I'm not in the mood'?",
              options: ["Não estou a fim de", "Não gostaria de", "Não prefiro", "Não tenho querer"],
              correct: 0,
              fb: "Não estou a fim de = casual Brazilian 'not in the mood for'.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I prefer the beach to the city, and today I feel like swimming.",
          reference: "Eu prefiro a praia à cidade, e hoje estou com vontade de nadar.",
          hint: "prefiro X a Y (a + a praia = à). 'Feel like swimming' = estou com vontade de nadar (keep the de + infinitive).",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'I like coffee.' =",
        options: ["Eu gosto café.", "Eu gosto de café.", "Eu gosta de café.", "Eu gosto a café."],
        correct: 1,
      },
      {
        q: "'I like to travel.' =",
        options: ["Eu gosto viajar.", "Eu gosto de viajar.", "Eu gosto a viajar.", "Eu gosta de viajar."],
        correct: 1,
      },
      {
        q: "'I like the wine.' (de + o) =",
        options: ["Eu gosto de o vinho.", "Eu gosto do vinho.", "Eu gosto da vinho.", "Eu gosto vinho."],
        correct: 1,
      },
      {
        q: "Polite, everyday 'I'd like a coffee' in Brazil =",
        options: ["Eu quero um café.", "Eu queria um café.", "Eu gosto um café.", "Eu prefiro um café."],
        correct: 1,
      },
      {
        q: "The most formal 'I would like to...' keeps which word?",
        options: ["a", "de", "que", "com"],
        correct: 1,
      },
      {
        q: "Conjugate querer for 'vocês':",
        options: ["quer", "querem", "queremos", "quero"],
        correct: 1,
      },
      {
        q: "Conjugate preferir for 'eu':",
        options: ["prefero", "prefiro", "prefere", "preferimos"],
        correct: 1,
      },
      {
        q: "'I prefer tea to coffee' =",
        options: ["Prefiro chá que café.", "Prefiro chá a café.", "Prefiro chá do café.", "Prefiro chá de café."],
        correct: 1,
      },
      {
        q: "'I feel like having an açaí' =",
        options: [
          "Estou com vontade um açaí.",
          "Estou com vontade de tomar um açaí.",
          "Tenho vontade um açaí.",
          "Estou vontade de açaí.",
        ],
        correct: 1,
      },
      {
        q: "Which verb does NOT take 'de'?",
        options: ["gostar", "ter vontade", "adorar", "estar com vontade"],
        correct: 2,
      },
    ],
  },
};
