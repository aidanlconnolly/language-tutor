import type { Unit } from "../../types";

export const UNIT_EXPRESSIONS: Unit = {
  slug: "expressions",
  stage: 7,
  order: 29,
  icon: "💬",
  title: "Idioms & gestures",
  tagline: "Tant pis, c'est la vie, avoir le cafard, faire la bise.",
  lessons: [
    {
      slug: "expressions-main",
      title: "French idioms & cultural gestures",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Idioms make you sound natural",
          body: [
            "French is rich with idiomatic expressions. Using a few well-placed ones — <em>c'est la vie, tant pis, ça marche</em> — instantly makes your French feel more authentic.",
            "Many French idioms don't translate literally. <em>Avoir le cafard</em> (to have the cockroach) means 'to feel down/blue'. <em>Poser un lapin</em> (to put down a rabbit) means 'to stand someone up'. <em>Coûter les yeux de la tête</em> (to cost the eyes of the head) means 'to cost a fortune'.",
            "Gestures matter too: <strong>la bise</strong> (cheek kisses) is the standard greeting between friends — usually two kisses in Paris, but the number varies by region. A handshake is the norm in professional settings.",
          ],
        },
        {
          type: "vocab",
          heading: "Everyday expressions",
          items: [
            { l1: "Ça marche!", en: "That works! / OK!", note: "very common agreement" },
            { l1: "C'est la vie.", en: "That's life.", note: "resigned acceptance" },
            { l1: "Tant pis.", en: "Too bad / Never mind.", note: "shrugging off a setback" },
            { l1: "Tant mieux.", en: "So much the better.", note: "the positive counterpart" },
            { l1: "N'importe quoi!", en: "Nonsense! / Whatever!" },
            { l1: "Bof.", en: "Meh. (indifference)", note: "very French shrug-word" },
            { l1: "Ça y est!", en: "That's it! / Done!" },
            { l1: "Au pire", en: "At worst / worst case" },
            { l1: "Du coup", en: "So / as a result", note: "ubiquitous filler in spoken French" },
          ],
        },
        {
          type: "vocab",
          heading: "Colorful idioms",
          items: [
            { l1: "avoir le cafard", en: "to feel down / blue", note: "lit. 'to have the cockroach'" },
            { l1: "poser un lapin (à quelqu'un)", en: "to stand someone up", note: "lit. 'to put down a rabbit'" },
            { l1: "coûter les yeux de la tête", en: "to cost a fortune", note: "lit. 'cost the eyes of the head'" },
            { l1: "avoir un coup de foudre", en: "to fall in love at first sight", note: "lit. 'a strike of lightning'" },
            { l1: "faire la grasse matinée", en: "to sleep in / have a lie-in", note: "lit. 'do the fat morning'" },
            { l1: "mettre son grain de sel", en: "to put in one's two cents", note: "lit. 'add one's grain of salt'" },
            { l1: "faire la bise", en: "to greet with cheek kisses" },
            { l1: "ras-le-bol", en: "fed up / had enough", note: "j'en ai ras-le-bol = I'm fed up" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Idiom check",
          questions: [
            {
              q: "'Avoir le cafard' means…",
              options: ["To have a cockroach problem", "To feel down/blue", "To be afraid", "To be hungry"],
              correct: 1,
              fb: "Idiomatically, 'avoir le cafard' = to feel down/depressed. Nothing to do with actual cockroaches.",
            },
            {
              q: "'Poser un lapin à quelqu'un' means…",
              options: ["To give someone a rabbit", "To stand someone up", "To trick someone", "To meet someone"],
              correct: 1,
              fb: "'Poser un lapin' = to stand someone up (fail to show for a date/meeting).",
            },
            {
              q: "'Ça marche!' in conversation means…",
              options: ["It's walking", "OK! / That works!", "Let's go for a walk", "It's broken"],
              correct: 1,
              fb: "'Ça marche' literally is 'it walks', but idiomatically it means 'OK / sounds good / that works'.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "l1-to-en",
          prompt: "Tant pis, c'est la vie. Du coup, on fait quoi maintenant?",
          reference: "Too bad, that's life. So, what do we do now?",
        },
      ],
    },
    {
      slug: "expressions-animaux-nourriture",
      title: "Food & animal idioms",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "French idioms love food and animals",
          body: [
            "A surprising number of French expressions involve food or animals. They sound bizarre word-for-word, but they're everyday speech. <em>Avoir la pêche</em> (to have the peach) = to feel great. <em>Tomber dans les pommes</em> (to fall in the apples) = to faint.",
            "Animal idioms are just as common: <em>avoir une faim de loup</em> (a wolf's hunger) = to be ravenous. <em>Il fait un froid de canard</em> (a duck's cold) = it's freezing. <em>Quand les poules auront des dents</em> (when hens have teeth) = when pigs fly.",
            "Drop one of these correctly and a French speaker will grin — it signals you've gone beyond the textbook.",
          ],
          keyPoint: "avoir la pêche = feel great. tomber dans les pommes = faint. une faim de loup = ravenous. un froid de canard = freezing.",
        },
        {
          type: "vocab",
          heading: "Food & animal idioms",
          items: [
            { l1: "avoir la pêche / la frite", en: "to feel great, full of energy" },
            { l1: "tomber dans les pommes", en: "to faint", note: "lit. fall in the apples" },
            { l1: "raconter des salades", en: "to tell tall tales / lies" },
            { l1: "ce ne sont pas tes oignons", en: "it's none of your business", note: "lit. not your onions" },
            { l1: "avoir une faim de loup", en: "to be ravenous" },
            { l1: "il fait un froid de canard", en: "it's freezing cold" },
            { l1: "quand les poules auront des dents", en: "when pigs fly", note: "lit. when hens have teeth" },
            { l1: "poser un lapin", en: "to stand someone up" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Idiom check",
          questions: [
            {
              q: "'J'ai la pêche aujourd'hui!' means…",
              options: ["I have a peach", "I feel great today", "I'm hungry", "I'm cold"],
              correct: 1,
              fb: "'Avoir la pêche' = to feel great / be full of energy.",
            },
            {
              q: "'Ce ne sont pas tes oignons' means…",
              options: ["These aren't your onions (literally)", "It's none of your business", "You forgot the onions", "I don't like onions"],
              correct: 1,
              fb: "A friendly-blunt way to say 'mind your own business'.",
            },
            {
              q: "'Il fait un froid de canard' describes…",
              options: ["a mild day", "freezing cold weather", "a rainy day", "a duck pond"],
              correct: 1,
              fb: "'Un froid de canard' = bitterly cold.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "l1-to-en",
          prompt: "J'ai une faim de loup! Et il fait un froid de canard dehors.",
          reference: "I'm ravenous! And it's freezing cold outside.",
        },
      ],
    },
    {
      slug: "expressions-familier",
      title: "Slang & casual speech",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Le langage familier — what people actually say",
          body: [
            "Casual spoken French (<em>le langage familier</em>) swaps in a whole layer of vocabulary you won't find in formal lessons. Recognizing it is essential for understanding friends, films, and social media — even if you keep your own speech neutral with strangers.",
            "Some everyday swaps: <em>un truc</em> (a thing/thingy) for <em>une chose</em>, <em>bouffer</em> for <em>manger</em> (to eat), <em>le boulot</em> for <em>le travail</em> (work), <em>un mec</em> / <em>une meuf</em> for a guy / a girl.",
            "Reactions: <em>c'est top / c'est génial</em> (it's great), <em>c'est nul</em> (it's rubbish), <em>ça craint</em> (that sucks), <em>kiffer</em> (to love/enjoy). A quick warning: keep these for friends — they're too casual for shopkeepers or officials.",
          ],
          tip: {
            label: "Register awareness",
            body: "Familiar words signal closeness. Using 'bouffer' with a waiter or 'un mec' to describe your boss to HR would land wrong. Understand it everywhere; speak it only where it fits.",
          },
        },
        {
          type: "vocab",
          heading: "Common familiar words",
          items: [
            { l1: "un truc / un machin", en: "a thing / thingy / whatsit" },
            { l1: "bouffer", en: "to eat (casual)", note: "neutral: manger" },
            { l1: "le boulot", en: "work / job (casual)", note: "neutral: le travail" },
            { l1: "un mec / une meuf", en: "a guy / a girl (casual)" },
            { l1: "un pote", en: "a buddy / mate", note: "neutral: un ami" },
            { l1: "c'est top / c'est génial", en: "it's great" },
            { l1: "c'est nul", en: "it's rubbish / lame" },
            { l1: "ça craint", en: "that sucks / that's sketchy" },
            { l1: "kiffer", en: "to love / really enjoy", note: "je kiffe ce film" },
            { l1: "ouais", en: "yeah", note: "casual 'oui'" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Register check",
          questions: [
            {
              q: "'Le boulot' is the casual word for…",
              options: ["food", "work / job", "a friend", "money"],
              correct: 1,
              fb: "'Le boulot' = work (familiar). Neutral: le travail.",
            },
            {
              q: "You're talking to a shopkeeper. Which word should you avoid?",
              options: ["manger", "bonjour", "bouffer", "merci"],
              correct: 2,
              fb: "'Bouffer' is too casual for a stranger; use 'manger'.",
            },
            {
              q: "'Je kiffe ce resto' means…",
              options: ["I dislike this restaurant", "I really love this restaurant", "I cook at this restaurant", "I work at this restaurant"],
              correct: 1,
              fb: "'Kiffer' = to love/enjoy (familiar). 'Resto' is casual for restaurant.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "l1-to-en",
          prompt: "C'est top, ce resto! On va bouffer un truc avec les potes?",
          reference: "This restaurant is great! Shall we go grab a bite with the mates?",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'C'est la vie' expresses…", options: ["Excitement", "Resigned acceptance ('that's life')", "Anger", "A question"], correct: 1 },
      { q: "'Faire la bise' is…", options: ["To cook", "To greet with cheek kisses", "To say goodbye formally", "To shake hands"], correct: 1 },
      { q: "'Coûter les yeux de la tête' means…", options: ["To be painful", "To cost a fortune", "To be confusing", "To look closely"], correct: 1 },
      { q: "'Du coup' is used as…", options: ["a greeting", "a filler meaning 'so / as a result'", "an insult", "a number"], correct: 1 },
      { q: "'Tant mieux' means…", options: ["Too bad", "So much the better", "Never mind", "Maybe"], correct: 1 },
      { q: "'Un coup de foudre' is…", options: ["A thunderstorm warning", "Love at first sight", "A sudden illness", "A loud noise"], correct: 1 },
    ],
  },
};
