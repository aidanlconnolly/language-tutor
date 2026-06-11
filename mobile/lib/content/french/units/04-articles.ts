import type { Unit } from "../../types";

export const UNIT_ARTICLES: Unit = {
  slug: "articles",
  stage: 1,
  order: 4,
  icon: "📚",
  title: "Nouns, gender & articles",
  tagline: "le/la/l'/les, un/une/des, du/de la/de l' — and plurals.",
  badge: "core",
  lessons: [
    {
      slug: "articles-definite",
      title: "Definite articles: le, la, l', les",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Every French noun has a gender",
          body: [
            "Every French noun is either masculine (<em>masculin</em>) or feminine (<em>féminin</em>). There's no neuter. The article changes with the gender: <em>le</em> for masculine, <em>la</em> for feminine.",
            "Unfortunately, there's no foolproof rule — you must learn the gender with each word. Some patterns help: nouns ending in <strong>-tion, -sion, -ure, -ette, -ance</strong> are usually feminine. Nouns ending in <strong>-ment, -isme, -age</strong> are usually masculine.",
            "Before a vowel or silent h, both <em>le</em> and <em>la</em> contract to <strong>l'</strong> — this is called elision. In the plural, all genders use <em>les</em>.",
          ],
          keyPoint: "le (m), la (f), l' (before vowel/h), les (plural). Learn gender with each word.",
        },
        {
          type: "vocab",
          heading: "Definite articles in context",
          items: [
            { l1: "le café", en: "the café / the coffee", note: "masculine" },
            { l1: "la table", en: "the table", note: "feminine" },
            { l1: "le livre", en: "the book", note: "masculine" },
            { l1: "la rue", en: "the street", note: "feminine" },
            { l1: "l'ami (m)", en: "the friend (male)", note: "elision before vowel" },
            { l1: "l'amie (f)", en: "the friend (female)", note: "same elision, gender marked elsewhere" },
            { l1: "les enfants", en: "the children", note: "plural — liaison: LAY-zon-FON" },
            { l1: "l'hôtel", en: "the hotel", note: "h is silent — elision applies" },
          ],
        },
        {
          type: "tip",
          heading: "Gender patterns worth knowing",
          body: "Nouns ending in <strong>-tion, -sion, -ure, -ance, -ence, -ette</strong> are nearly always feminine: <em>la nation, la culture, la chance, la baguette</em>. Nouns ending in <strong>-ment, -isme, -age, -eau</strong> are usually masculine: <em>le gouvernement, le tourisme, le voyage, le chapeau</em>.",
          example: { l1: "la tradition vs le monument", en: "tradition (f) vs monument (m)" },
        },
        {
          type: "vocab",
          heading: "Plurals",
          intro: "Most nouns add -s (silent). Some have irregular plurals.",
          items: [
            { l1: "le chat → les chats", en: "the cat → the cats", note: "-s added, both silent" },
            { l1: "l'animal → les animaux", en: "the animal → the animals", note: "-al → -aux" },
            { l1: "le journal → les journaux", en: "the newspaper → the newspapers", note: "-al → -aux" },
            { l1: "le nez → les nez", en: "the nose → the noses", note: "-z: no change" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Article check",
          questions: [
            {
              q: "Which article goes with 'maison' (house, feminine)?",
              options: ["le", "la", "l'", "les"],
              correct: 1,
              fb: "Maison is feminine, so: la maison.",
            },
            {
              q: "How do you say 'the friends' (plural)?",
              options: ["le amis", "la amis", "les amis", "l'amis"],
              correct: 2,
              fb: "Plural always uses 'les'. les amis (liaison: LAY-zah-MEE).",
            },
            {
              q: "Nouns ending in '-tion' are almost always…",
              options: ["masculine", "feminine", "neuter", "depends on context"],
              correct: 1,
              fb: "Nearly all -tion words are feminine: la nation, la situation, la tradition.",
            },
          ],
        },
      ],
    },
    {
      slug: "articles-indefinite-partitive",
      title: "Indefinite & partitive articles",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Un/une for countable, du/de la for uncountable",
          body: [
            "When talking about a specific thing, use the definite article (<em>le, la, les</em>). When talking about an unspecified thing, use the indefinite article: <em>un</em> (m), <em>une</em> (f), <em>des</em> (plural).",
            "For uncountable quantities — food, drink, abstract concepts — French uses the <strong>partitive article</strong>: <em>du</em> (= de + le), <em>de la</em>, <em>de l'</em>. This translates as 'some' or no article in English.",
            "After a negation, all articles collapse to <em>de/d'</em>: <em>Je n'ai pas de pain</em> (I don't have any bread).",
          ],
          keyPoint: "Specific = le/la/les. A/an = un/une/des. Some (uncountable) = du/de la/de l'. After negation = de.",
        },
        {
          type: "vocab",
          heading: "Articles compared",
          items: [
            { l1: "un café", en: "a coffee (one cup)", note: "indefinite singular (m)" },
            { l1: "une baguette", en: "a baguette", note: "indefinite singular (f)" },
            { l1: "des croissants", en: "(some) croissants", note: "indefinite plural" },
            { l1: "du pain", en: "some bread", note: "partitive (m) — de + le = du" },
            { l1: "de la soupe", en: "some soup", note: "partitive (f)" },
            { l1: "de l'eau", en: "some water", note: "partitive before vowel" },
            { l1: "Je n'ai pas de sucre.", en: "I don't have any sugar.", note: "negation → de" },
            { l1: "Il n'y a pas d'œufs.", en: "There are no eggs.", note: "de + vowel = d'" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the right article",
          items: [
            { template: "Je bois ___ eau. (some water)", answer: "de l'", en: "I drink some water.", options: ["du", "de la", "de l'", "des"] },
            { template: "Il mange ___ croissant. (a croissant)", answer: "un", en: "He eats a croissant.", options: ["un", "une", "du", "de la"] },
            { template: "Elle n'a pas ___ voiture. (no car)", answer: "de", en: "She has no car.", options: ["une", "la", "de", "du"] },
            { template: "Nous avons ___ amis. (some friends)", answer: "des", en: "We have friends.", options: ["les", "des", "de", "du"] },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I'd like a coffee and some water, please.",
          reference: "Je voudrais un café et de l'eau, s'il vous plaît.",
          hint: "coffee = café (m) → un café; water = eau (f, vowel) → de l'eau",
        },
      ],
    },
    {
      slug: "articles-adjectifs",
      title: "Adjectives: agreement & position",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Adjectives agree, and most come after the noun",
          body: [
            "French adjectives change to match the gender and number of the noun they describe. The basic pattern: add <strong>-e</strong> for feminine, <strong>-s</strong> for plural, <strong>-es</strong> for both: <em>un chat noir, une robe noire, des chats noirs, des robes noires</em>.",
            "If the adjective already ends in <em>-e</em> (like <em>rouge</em>, <em>jeune</em>), the feminine form doesn't change. Some have irregular feminines: <em>beau → belle</em>, <em>vieux → vieille</em>, <em>blanc → blanche</em>, <em>bon → bonne</em>.",
            "Crucially, most French adjectives go <strong>after</strong> the noun, the opposite of English: <em>une voiture rouge</em> (a red car), <em>un vin français</em> (a French wine). A small, common set goes before.",
          ],
          keyPoint: "Agreement: +e (fem), +s (plural), +es (both). Most adjectives follow the noun.",
        },
        {
          type: "vocab",
          heading: "Common adjectives (m / f)",
          items: [
            { l1: "grand / grande", en: "big, tall" },
            { l1: "petit / petite", en: "small, short" },
            { l1: "bon / bonne", en: "good", note: "doubles the n" },
            { l1: "beau / belle", en: "beautiful, handsome", note: "irregular feminine" },
            { l1: "nouveau / nouvelle", en: "new", note: "irregular feminine" },
            { l1: "vieux / vieille", en: "old", note: "irregular feminine" },
            { l1: "blanc / blanche", en: "white", note: "irregular feminine" },
            { l1: "cher / chère", en: "expensive; dear" },
            { l1: "français / française", en: "French" },
            { l1: "rouge / rouge", en: "red", note: "already ends in -e: no change" },
          ],
        },
        {
          type: "tip",
          heading: "BAGS — the adjectives that come first",
          body: "A handful of frequent adjectives go <strong>before</strong> the noun. Remember them as <strong>BAGS</strong>: <em>Beauty</em> (beau, joli), <em>Age</em> (jeune, vieux, nouveau), <em>Goodness</em> (bon, mauvais), <em>Size</em> (grand, petit, gros). Everything else — colour, nationality, shape, most descriptions — comes after.",
          example: { l1: "une jolie petite maison blanche", en: "a pretty little white house (BAGS first, colour after)" },
        },
        {
          type: "fillBlank",
          heading: "Make the adjective agree",
          items: [
            { template: "une voiture ___ (rouge)", answer: "rouge", en: "a red car" },
            { template: "une ___ maison (grand)", answer: "grande", en: "a big house" },
            { template: "des fleurs ___ (blanc)", answer: "blanches", en: "white flowers" },
            { template: "une ___ amie (bon)", answer: "bonne", en: "a good (female) friend" },
          ],
        },
        {
          type: "orderWords",
          heading: "Place the adjective",
          intro: "Build the phrase — decide whether the adjective goes before or after the noun.",
          items: [
            { tokens: ["un", "vin", "rouge"], en: "a red wine" },
            { tokens: ["une", "belle", "vue"], en: "a beautiful view" },
            { tokens: ["un", "petit", "café"], en: "a small coffee" },
            { tokens: ["une", "voiture", "française"], en: "a French car" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Adjective check",
          questions: [
            {
              q: "How do you say 'a red car' (voiture is feminine)?",
              options: ["une rouge voiture", "une voiture rouge", "un voiture rouge", "une voiture rouges"],
              correct: 1,
              fb: "Colour follows the noun; 'rouge' already ends in -e so no change: une voiture rouge.",
            },
            {
              q: "Which adjective goes BEFORE the noun?",
              options: ["français", "rouge", "petit", "intéressant"],
              correct: 2,
              fb: "'petit' is a BAGS adjective (Size) — it precedes: un petit chien. The others follow.",
            },
            {
              q: "The feminine of 'beau' is…",
              options: ["beaue", "belle", "beaune", "bela"],
              correct: 1,
              fb: "beau → belle (irregular). Also nouveau → nouvelle, vieux → vieille.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Which article goes with 'livre' (book, masculine)?",
        options: ["la", "le", "les", "un"],
        correct: 1,
      },
      {
        q: "After a negation, articles become…",
        options: ["les", "de/d'", "une", "du"],
        correct: 1,
      },
      {
        q: "The article for uncountable things (some bread) is…",
        options: ["un/une", "les", "du/de la/de l'", "des"],
        correct: 2,
      },
      {
        q: "Why do we say 'l'ami' and not 'le ami'?",
        options: ["ami is feminine", "Elision: le/la → l' before a vowel", "ami is irregular", "All friend words use l'"],
        correct: 1,
      },
      {
        q: "'Les animaux' is the plural of…",
        options: ["les animales", "les animals", "l'animal", "le animale"],
        correct: 2,
      },
      {
        q: "How do you say 'a table' (table is feminine)?",
        options: ["le table", "un table", "une table", "la table"],
        correct: 2,
      },
      {
        q: "'Du pain' uses 'du' because…",
        options: ["pain is plural", "'du' = de+le for uncountable masculine nouns", "pain is feminine", "It's an exception"],
        correct: 1,
      },
      {
        q: "Nouns ending in '-tion' are usually…",
        options: ["masculine", "feminine", "neutral", "always plural"],
        correct: 1,
      },
    ],
  },
};
