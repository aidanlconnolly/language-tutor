import type { Unit } from "../../types";

export const UNIT_ARTICLES: Unit = {
  slug: "articles",
  stage: 1,
  order: 4,
  icon: "📚",
  title: "Nouns, gender & articles",
  tagline: "el, la, los, las, un, una — and noun plurals.",
  badge: "core",
  lessons: [
    {
      slug: "articles-gender",
      title: "Noun gender and definite articles",
      estMinutes: 11,
      pages: [
        {
          type: "intro",
          heading: "Every noun is masculine or feminine",
          body: [
            "In Spanish, every noun has a gender — masculine or feminine. This isn't about biology; it's a grammatical property. Most nouns ending in <strong>-o</strong> are masculine, most ending in <strong>-a</strong> are feminine. But there are exceptions.",
            "The definite article ('the') must match the noun's gender and number: <strong>el</strong> (masc. singular), <strong>la</strong> (fem. singular), <strong>los</strong> (masc. plural), <strong>las</strong> (fem. plural).",
          ],
          tip: {
            label: "Learn the article with the noun",
            body: "When you learn a new noun, always learn it with its article: el libro (not just libro). This locks in the gender automatically.",
          },
        },
        {
          type: "conjugation",
          heading: "The four definite articles",
          verb: "el / la / los / las",
          meaning: "the (all four forms)",
          intro: "Spanish has just four words for 'the' — far simpler than the noun-gender rules behind them. Pick the form that matches gender and number.",
          tenses: [
            {
              name: "Masculine",
              forms: [
                { person: "singular", form: "el libro", en: "the book" },
                { person: "plural", form: "los libros", en: "the books" },
              ],
            },
            {
              name: "Feminine",
              forms: [
                { person: "singular", form: "la mesa", en: "the table" },
                { person: "plural", form: "las mesas", en: "the tables" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Masculine and feminine nouns",
          items: [
            { l1: "el libro", en: "the book", note: "masc. — ends in -o" },
            { l1: "el coche", en: "the car", note: "masc. — many exceptions don't end in -o" },
            { l1: "el hombre", en: "the man", note: "masc." },
            { l1: "la mesa", en: "the table", note: "fem. — ends in -a" },
            { l1: "la ciudad", en: "the city", note: "fem. — nouns in -dad/-tad are fem." },
            { l1: "la mano", en: "the hand", note: "fem. — exception: ends in -o but is feminine!" },
            { l1: "el día", en: "the day", note: "masc. — exception: ends in -a but is masculine!" },
            { l1: "el problema", en: "the problem", note: "masc. — Greek-origin words in -ma are masc." },
          ],
        },
        {
          type: "tip",
          heading: "El before feminine nouns starting with stressed 'a'",
          body: "For pronunciation ease, use <em>el</em> (not <em>la</em>) before feminine nouns starting with a stressed <em>a</em> or <em>ha</em>. The noun is still feminine — adjectives still use feminine forms.",
          example: { l1: "el agua fría", en: "the cold water (agua is feminine — el for sound, but fría is feminine)" },
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "Which article goes with 'libro' (book)?",
              options: ["la", "el", "los", "las"],
              correct: 1,
              fb: "El libro — libro ends in -o, masculine, singular.",
            },
            {
              q: "Why is 'la mano' an exception?",
              options: ["Mano ends in -o but is feminine", "Mano is plural", "Mano is a verb", "La is masculine here"],
              correct: 0,
              fb: "Mano ends in -o but is feminine — a famous exception. La mano.",
            },
            {
              q: "What article do you use with 'ciudades' (cities)?",
              options: ["el", "la", "los", "las"],
              correct: 3,
              fb: "Ciudad is feminine, ciudades is plural → las ciudades.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the right 'the'",
          intro: "Match the article to the noun's gender and number.",
          items: [
            {
              template: "___ libro está en la mesa.",
              answer: "El",
              en: "The book is on the table.",
              options: ["El", "La", "Los", "Las"],
            },
            {
              template: "___ mano me duele.",
              answer: "La",
              en: "My hand hurts. (mano is feminine!)",
              options: ["El", "La", "Los", "Las"],
            },
            {
              template: "___ problema es difícil.",
              answer: "El",
              en: "The problem is difficult. (problema is masculine!)",
              options: ["El", "La", "Los", "Las"],
            },
            {
              template: "___ ciudades son bonitas.",
              answer: "Las",
              en: "The cities are pretty.",
              options: ["El", "La", "Los", "Las"],
            },
            {
              template: "___ días pasan rápido.",
              answer: "Los",
              en: "The days go by fast. (día is masculine!)",
              options: ["El", "La", "Los", "Las"],
            },
          ],
        },
      ],
    },
    {
      slug: "articles-indefinite-plural",
      title: "Indefinite articles and plurals",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Un/una and making plurals",
          body: [
            "Indefinite articles ('a/an') also match gender: <strong>un</strong> (masculine), <strong>una</strong> (feminine). Plural 'some' is <strong>unos/unas</strong>.",
            "Making plurals: add <strong>-s</strong> if the noun ends in a vowel; add <strong>-es</strong> if it ends in a consonant. Nouns ending in -z change the z to c before -es.",
          ],
          keyPoint: "un/una = a/an · unos/unas = some · +s after vowel, +es after consonant",
        },
        {
          type: "vocab",
          heading: "Indefinite articles and plurals",
          items: [
            { l1: "un libro / unos libros", en: "a book / some books" },
            { l1: "una mesa / unas mesas", en: "a table / some tables" },
            { l1: "un hotel / unos hoteles", en: "a hotel / some hotels", note: "+es after consonant" },
            { l1: "una ciudad / unas ciudades", en: "a city / some cities", note: "+es after consonant" },
            { l1: "un lápiz / unos lápices", en: "a pencil / some pencils", note: "z→c before -es" },
            { l1: "una voz / unas voces", en: "a voice / some voices", note: "z→c before -es" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Articles and plurals",
          questions: [
            {
              q: "What is the plural of 'un hotel'?",
              options: ["unos hotels", "unos hoteles", "unas hoteles", "los hoteles"],
              correct: 1,
              fb: "Hotel ends in a consonant → add -es. Unos hoteles.",
            },
            {
              q: "Which sentence is correct?",
              options: ["la problema", "el problema", "lo problema", "un problema (fem.)"],
              correct: 1,
              fb: "Problema is a Greek-origin -ma noun — masculine despite ending in -a. El problema.",
            },
            {
              q: "How do you say 'some books'?",
              options: ["un libros", "unos libro", "unos libros", "unas libros"],
              correct: 2,
              fb: "Libro is masculine → unos libros.",
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Drag the words into a natural Spanish order.",
          items: [
            { tokens: ["Quiero", "un", "café", "y", "una", "tostada"], en: "I want a coffee and a piece of toast." },
            { tokens: ["Hay", "unos", "libros", "en", "la", "mesa"], en: "There are some books on the table." },
            { tokens: ["Las", "ciudades", "grandes", "son", "caras"], en: "Big cities are expensive." },
          ],
        },
        {
          type: "translate",
          heading: "Say it in Spanish",
          direction: "en-to-l1",
          prompt: "a book and a table",
          reference: "un libro y una mesa",
          hint: "libro is masculine, mesa is feminine.",
        },
        {
          type: "translate",
          heading: "Say it in Spanish",
          direction: "en-to-l1",
          prompt: "some pencils",
          reference: "unos lápices",
          hint: "lápiz → lápices (z becomes c before -es).",
        },
      ],
    },
    {
      slug: "articles-practice",
      title: "Articles in real sentences",
      estMinutes: 9,
      pages: [
        {
          type: "vocab",
          heading: "Adjective agreement with nouns",
          intro: "Adjectives must match the gender and number of the noun they describe.",
          items: [
            { l1: "el libro rojo", en: "the red book (masc. sing.)" },
            { l1: "la mesa roja", en: "the red table (fem. sing.)" },
            { l1: "los libros rojos", en: "the red books (masc. pl.)" },
            { l1: "las mesas rojas", en: "the red tables (fem. pl.)" },
            { l1: "un café solo", en: "a black coffee (masc.)" },
            { l1: "una ciudad bonita", en: "a pretty city (fem.)" },
          ],
        },
        {
          type: "tip",
          heading: "Omitting the article",
          body: "Spanish omits the article in a few key situations: after <strong>ser</strong> for professions (<em>Soy médico</em>), with some quantities, and in certain fixed expressions. But in general, Spanish uses articles more consistently than English.",
          example: { l1: "Soy profesora. / Tengo coche.", en: "I'm a teacher. / I have a car. (no article)" },
        },
        {
          type: "multipleChoice",
          heading: "Article and adjective agreement",
          questions: [
            {
              q: "How do you say 'the pretty cities'?",
              options: ["los ciudades bonitos", "las ciudades bonitas", "las ciudades bonitos", "unos ciudades bonitas"],
              correct: 1,
              fb: "Ciudad is feminine → las, bonitas (feminine plural adjective).",
            },
            {
              q: "Which is correct: 'I'm a doctor'?",
              options: ["Soy un médico", "Soy médico", "Estoy médico", "Soy el médico"],
              correct: 1,
              fb: "No article after ser for professions: Soy médico.",
            },
          ],
        },
        {
          type: "dialogue",
          heading: "At the café",
          setup: "Notice how articles change with gender and number throughout.",
          lines: [
            { speaker: "Camarero", l1: "Buenos días. ¿Qué desea?", en: "Good morning. What would you like?" },
            { speaker: "Ana", l1: "Un café con leche y una tostada, por favor.", en: "A coffee with milk and a piece of toast, please." },
            { speaker: "Camarero", l1: "¿Y para el señor?", en: "And for the gentleman?" },
            { speaker: "Pablo", l1: "Para mí, los churros y un zumo de naranja.", en: "For me, the churros and an orange juice." },
            { speaker: "Camarero", l1: "Muy bien. La cuenta está en la mesa.", en: "Very good. The bill is on the table." },
          ],
        },
        {
          type: "translate",
          heading: "Say it in Spanish",
          direction: "en-to-l1",
          prompt: "The red book is on the table.",
          reference: "El libro rojo está en la mesa.",
          hint: "rojo agrees with libro (masc. sing.).",
        },
        {
          type: "translate",
          heading: "Say it in Spanish",
          direction: "en-to-l1",
          prompt: "I want a coffee, please.",
          reference: "Quiero un café, por favor.",
          hint: "café is masculine → un.",
        },
        {
          type: "translate",
          heading: "Read it in English",
          direction: "l1-to-en",
          prompt: "Las ciudades bonitas son caras.",
          reference: "The pretty cities are expensive.",
          hint: "las + feminine plural noun and adjective.",
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Which article goes with 'mesa' (table)?", options: ["el", "la", "los", "un"], correct: 1 },
      { q: "Which article goes with 'libros' (books, plural)?", options: ["el", "la", "los", "las"], correct: 2 },
      { q: "'La mano' is unusual because…", options: ["mano is masculine", "mano ends in -o but is feminine", "la is masculine", "mano is a verb"], correct: 1 },
      { q: "What is the plural of 'ciudad'?", options: ["ciudads", "ciudades", "ciudes", "ciudas"], correct: 1 },
      { q: "Which article goes with 'problema'?", options: ["la", "el", "los", "lo"], correct: 1 },
      { q: "'Unos' is the plural of…", options: ["la", "un", "el", "uno"], correct: 1 },
      { q: "The plural of 'lápiz' is…", options: ["lápizs", "lápizes", "lápices", "lápicez"], correct: 2 },
      { q: "Most nouns ending in -o are…", options: ["Feminine", "Masculine", "Neuter", "Plural"], correct: 1 },
      { q: "Why do we say 'el agua' even though agua is feminine?", options: ["agua is masculine", "For pronunciation ease before stressed a-", "El can be feminine too", "Grammar exception with no reason"], correct: 1 },
      { q: "What goes before 'hotel' (singular, 'a hotel')?", options: ["una", "un", "el", "unos"], correct: 1 },
    ],
  },
};
