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
      estMinutes: 9,
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
      ],
    },
    {
      slug: "articles-indefinite-plural",
      title: "Indefinite articles and plurals",
      estMinutes: 7,
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
      ],
    },
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
