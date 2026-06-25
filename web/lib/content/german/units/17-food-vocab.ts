import type { Unit } from "../../types";

export const UNIT_FOOD_VOCAB: Unit = {
  slug: "food-vocab",
  stage: 4,
  order: 17,
  icon: "🥨",
  title: "Food vocab deep dive",
  tagline: "Fleisch, Gemüse, Brot, cooking verbs, the meals of the day.",
  badge: "tourist",
  lessons: [
    {
      slug: "food-vocab-ingredients",
      title: "Fleisch, Fisch, Gemüse & Obst",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The building blocks of a menu",
          body: [
            "Knowing your ingredients lets you read any menu and shop at the market. German groups food into <strong>Fleisch</strong> (meat), <strong>Fisch</strong> (fish), <strong>Gemüse</strong> (vegetables) and <strong>Obst</strong> (fruit).",
            "Every noun has a gender, so learn each one <strong>with its article</strong>: <em>der Apfel</em>, <em>die Kartoffel</em>, <em>das Ei</em>. There's no shortcut — but food words come up constantly, so they stick fast.",
            "Note that <strong>Gemüse</strong> and <strong>Obst</strong> are usually uncountable in German — you say <em>viel Gemüse</em> (lots of vegetables), not \"vegetables\" plural.",
          ],
          tip: {
            label: "Learn the article",
            body: "A noun's gender governs <em>der/die/das</em>, adjective endings, and pronouns. Memorizing <strong>der Apfel</strong> as one chunk now saves you grief later. The <em>note</em> field on each word gives you the gender and plural.",
          },
        },
        {
          type: "vocab",
          heading: "Meat & fish",
          items: [
            { l1: "das Fleisch", en: "meat", note: "das; uncountable" },
            { l1: "das Schweinefleisch", en: "pork", note: "das; Schwein = pig" },
            { l1: "das Rindfleisch", en: "beef", note: "das; Rind = cattle" },
            { l1: "das Hähnchen", en: "chicken (the dish)", note: "das; das Huhn = the hen" },
            { l1: "die Wurst", en: "sausage", note: "die; plural die Würste" },
            { l1: "der Schinken", en: "ham", note: "der" },
            { l1: "der Fisch", en: "fish", note: "der; plural die Fische" },
            { l1: "der Lachs", en: "salmon", note: "der" },
            { l1: "die Garnele", en: "prawn / shrimp", note: "die, plural die Garnelen" },
          ],
        },
        {
          type: "vocab",
          heading: "Vegetables & fruit",
          items: [
            { l1: "das Gemüse", en: "vegetables", note: "das; uncountable" },
            { l1: "die Kartoffel", en: "potato", note: "die, plural die Kartoffeln" },
            { l1: "die Tomate", en: "tomato", note: "die, plural die Tomaten" },
            { l1: "die Zwiebel", en: "onion", note: "die, plural die Zwiebeln" },
            { l1: "die Karotte", en: "carrot", note: "die; also die Möhre" },
            { l1: "der Salat", en: "lettuce / salad", note: "der" },
            { l1: "das Obst", en: "fruit", note: "das; uncountable" },
            { l1: "der Apfel", en: "apple", note: "der, plural die Äpfel" },
            { l1: "die Banane", en: "banana", note: "die, plural die Bananen" },
            { l1: "das Ei", en: "egg", note: "das, plural die Eier" },
            { l1: "der Käse", en: "cheese", note: "der" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the right article",
          items: [
            {
              template: "___ Apfel ist rot.",
              answer: "Der",
              en: "The apple is red.",
              options: ["Der", "Die", "Das", "Den"],
            },
            {
              template: "___ Kartoffel ist groß.",
              answer: "Die",
              en: "The potato is big.",
              options: ["Der", "Die", "Das", "Dem"],
            },
            {
              template: "___ Ei ist frisch.",
              answer: "Das",
              en: "The egg is fresh.",
              options: ["Der", "Die", "Das", "Den"],
            },
            {
              template: "Ich esse viel ___.",
              answer: "Gemüse",
              en: "I eat a lot of vegetables.",
              options: ["Gemüse", "Apfel", "Tomate", "Wurst"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like fish with vegetables.",
          reference: "Ich hätte gern Fisch mit Gemüse.",
          hint: "Fisch is masculine but no article is needed here; Gemüse is uncountable.",
        },
      ],
    },
    {
      slug: "food-vocab-cooking",
      title: "Cooking verbs & tastes",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "How food is prepared",
          body: [
            "Menus describe <em>how</em> a dish is cooked. The big four verbs: <strong>braten</strong> (to fry/roast), <strong>kochen</strong> (to boil/cook), <strong>backen</strong> (to bake), and <strong>grillen</strong> (to grill).",
            "You'll see their past participles on menus: <em>gebraten</em> (fried/roasted), <em>gekocht</em> (boiled), <em>gebacken</em> (baked), <em>gegrillt</em> (grilled). E.g. <strong>gebratene Kartoffeln</strong> = fried potatoes.",
            "Tastes: <strong>süß</strong> (sweet), <strong>salzig</strong> (salty), <strong>sauer</strong> (sour), <strong>scharf</strong> (spicy/hot), <strong>bitter</strong> (bitter). And <strong>lecker</strong> = tasty/delicious — the word you say after a good meal.",
          ],
          keyPoint:
            "braten = fry/roast, kochen = boil/cook, backen = bake, grillen = grill. lecker = delicious.",
        },
        {
          type: "conjugation",
          heading: "kochen — to cook (present tense)",
          verb: "kochen",
          meaning: "to cook / to boil",
          intro: "A regular German verb. Most cooking verbs follow this pattern.",
          tenses: [
            {
              name: "Präsens (present)",
              forms: [
                { person: "ich", form: "koche", en: "I cook" },
                { person: "du", form: "kochst", en: "you cook (informal)" },
                { person: "er/sie/es", form: "kocht", en: "he/she/it cooks" },
                { person: "wir", form: "kochen", en: "we cook" },
                { person: "ihr", form: "kocht", en: "you all cook" },
                { person: "sie/Sie", form: "kochen", en: "they / you (formal) cook" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Cooking & tastes",
          items: [
            { l1: "braten", en: "to fry / roast", note: "past participle: gebraten" },
            { l1: "kochen", en: "to cook / boil", note: "past participle: gekocht" },
            { l1: "backen", en: "to bake", note: "past participle: gebacken" },
            { l1: "grillen", en: "to grill", note: "past participle: gegrillt" },
            { l1: "süß", en: "sweet", note: "adjective" },
            { l1: "salzig", en: "salty", note: "adjective" },
            { l1: "sauer", en: "sour", note: "adjective" },
            { l1: "scharf", en: "spicy / hot", note: "adjective" },
            { l1: "bitter", en: "bitter", note: "adjective" },
            { l1: "lecker", en: "tasty / delicious", note: "Das ist lecker! = That's delicious!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Cooked how?",
          items: [
            {
              template: "Ich esse gern ___ Kartoffeln.",
              answer: "gebratene",
              en: "I like to eat fried potatoes.",
              options: ["gebratene", "gekochte", "gebackene", "gegrillte"],
            },
            {
              template: "Die Suppe ist sehr ___.",
              answer: "scharf",
              en: "The soup is very spicy.",
              options: ["süß", "scharf", "kalt", "blau"],
            },
            {
              template: "Das Brot wird im Ofen ___.",
              answer: "gebacken",
              en: "The bread is baked in the oven.",
              options: ["gebraten", "gekocht", "gebacken", "gegrillt"],
            },
            {
              template: "Das Essen war richtig ___!",
              answer: "lecker",
              en: "The food was really delicious!",
              options: ["sauer", "bitter", "lecker", "salzig"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The fish is grilled and very tasty.",
          reference: "Der Fisch ist gegrillt und sehr lecker.",
          hint: "Fisch is masculine (der); 'grilled' = gegrillt.",
        },
      ],
    },
    {
      slug: "food-vocab-meals",
      title: "Meals of the day & German bread",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Frühstück, Mittagessen, Abendessen",
          body: [
            "The three meals: <strong>das Frühstück</strong> (breakfast), <strong>das Mittagessen</strong> (lunch — traditionally the main hot meal), and <strong>das Abendessen</strong> (dinner).",
            "Dinner is often called <strong>Abendbrot</strong> — literally \"evening bread\" — because it's traditionally a cold spread of bread, cheese, and cold cuts (<em>Aufschnitt</em>) rather than a cooked meal.",
            "Germany takes <strong>bread</strong> seriously: hundreds of varieties, from dark dense <em>Roggenbrot</em> (rye) to <em>Vollkornbrot</em> (wholegrain) and <em>Pumpernickel</em>. German bread culture is even on UNESCO's intangible-heritage list.",
          ],
          tip: {
            label: "Abendbrot",
            body: "Don't be surprised if a German family's <em>Abendessen</em> is bread, cheese, sausage, and pickles — no cooking. That's <strong>Abendbrot</strong>, and it's completely normal and beloved.",
          },
        },
        {
          type: "vocab",
          heading: "Meals & bread",
          items: [
            { l1: "das Frühstück", en: "breakfast", note: "das; frühstücken = to have breakfast" },
            { l1: "das Mittagessen", en: "lunch", note: "das; traditionally the main meal" },
            { l1: "das Abendessen", en: "dinner", note: "das" },
            { l1: "das Abendbrot", en: "(cold) evening meal of bread", note: "das" },
            { l1: "der Aufschnitt", en: "cold cuts / sliced meats & cheese", note: "der" },
            { l1: "das Brot", en: "bread", note: "das, plural die Brote" },
            { l1: "das Vollkornbrot", en: "wholegrain bread", note: "das" },
            { l1: "das Roggenbrot", en: "rye bread", note: "das" },
            { l1: "die Marmelade", en: "jam", note: "die" },
            { l1: "die Butter", en: "butter", note: "die" },
            { l1: "das Müsli", en: "muesli", note: "das" },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about meals",
          setup: "A German colleague asks about your morning.",
          lines: [
            { speaker: "Kollege", l1: "Was isst du zum Frühstück?", en: "What do you eat for breakfast?" },
            { speaker: "Du", l1: "Meistens ein Brötchen mit Marmelade und einen Kaffee.", en: "Usually a roll with jam and a coffee." },
            { speaker: "Kollege", l1: "Und das Mittagessen?", en: "And lunch?" },
            { speaker: "Du", l1: "Mittags esse ich warm, oft Suppe oder Salat.", en: "At midday I eat something hot, often soup or salad." },
            { speaker: "Kollege", l1: "Wir essen abends meistens Abendbrot — Brot mit Käse und Aufschnitt.", en: "In the evening we usually have Abendbrot — bread with cheese and cold cuts." },
            { speaker: "Du", l1: "Das klingt lecker!", en: "That sounds tasty!" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["Zum", "Frühstück", "esse", "ich", "ein", "Brötchen"], en: "For breakfast I eat a roll." },
            { tokens: ["Das", "Mittagessen", "ist", "die", "Hauptmahlzeit"], en: "Lunch is the main meal." },
            { tokens: ["Abends", "gibt", "es", "Brot", "mit", "Käse"], en: "In the evening there's bread with cheese." },
            { tokens: ["Deutsches", "Brot", "ist", "sehr", "vielfältig"], en: "German bread is very diverse." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "For breakfast I eat bread with butter and jam.",
          reference: "Zum Frühstück esse ich Brot mit Butter und Marmelade.",
          hint: "After the time phrase 'Zum Frühstück', the verb comes second: esse ich.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Das Frühstück' is…",
              options: ["lunch", "breakfast", "dinner", "a snack"],
              correct: 1,
            },
            {
              q: "'Abendbrot' refers to…",
              options: [
                "a hot three-course dinner",
                "a cold evening meal of bread, cheese, and cold cuts",
                "afternoon coffee and cake",
                "a packed lunch",
              ],
              correct: 1,
            },
            {
              q: "Traditionally, the main hot meal of the German day is…",
              options: ["Frühstück", "Mittagessen", "Abendessen", "Abendbrot"],
              correct: 1,
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
        q: "'das Fleisch' means…",
        options: ["fish", "meat", "vegetable", "fruit"],
        correct: 1,
      },
      {
        q: "The correct article for 'Apfel' (apple) is…",
        options: ["die", "das", "der", "den"],
        correct: 2,
      },
      {
        q: "'das Gemüse' means…",
        options: ["fruit", "meat", "vegetables", "bread"],
        correct: 2,
      },
      {
        q: "'backen' means to…",
        options: ["fry", "boil", "bake", "grill"],
        correct: 2,
      },
      {
        q: "Which word means 'spicy / hot'?",
        options: ["süß", "scharf", "sauer", "bitter"],
        correct: 1,
      },
      {
        q: "'lecker' means…",
        options: ["salty", "delicious", "raw", "cold"],
        correct: 1,
      },
      {
        q: "'das Frühstück' is the German word for…",
        options: ["dinner", "breakfast", "lunch", "dessert"],
        correct: 1,
      },
      {
        q: "'Abendbrot' is traditionally…",
        options: [
          "a hot cooked dinner",
          "a cold meal of bread, cheese, and cold cuts",
          "breakfast cereal",
          "afternoon cake",
        ],
        correct: 1,
      },
      {
        q: "Which is rye bread?",
        options: ["Vollkornbrot", "Roggenbrot", "Brötchen", "Müsli"],
        correct: 1,
      },
      {
        q: "Translate: 'The fish is grilled.'",
        options: [
          "Der Fisch ist gekocht.",
          "Der Fisch ist gegrillt.",
          "Das Fleisch ist gebacken.",
          "Der Fisch ist gebraten.",
        ],
        correct: 1,
      },
    ],
  },
};
