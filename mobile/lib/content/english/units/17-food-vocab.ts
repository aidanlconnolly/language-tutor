import type { Unit } from "../../types";

export const UNIT_FOOD_VOCAB: Unit = {
  slug: "food-vocab",
  stage: 4,
  order: 17,
  icon: "🍳",
  title: "Food vocab deep dive",
  tagline: "Meats, veg, fish, cooking verbs, and the full English breakfast.",
  badge: "tourist",
  lessons: [
    {
      slug: "food-vocab-ingredients",
      title: "Meats, fish, veg & fruit",
      summary: "The core ingredient vocabulary for shopping and ordering.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Naming what's on your plate",
          body: [
            "To read a menu or shop in a British supermarket, you need names for the basics: <strong>meats</strong>, <strong>fish</strong>, <strong>vegetables</strong> ('veg') and <strong>fruit</strong>.",
            "A few British words differ from American ones: <strong>aubergine</strong> (US 'eggplant'), <strong>courgette</strong> (US 'zucchini'), <strong>coriander</strong> (the leaf; US 'cilantro'), and <strong>prawns</strong> (US 'shrimp').",
            "Most fruit and veg are <em>uncountable</em> or come in packs, so you'll hear 'some carrots', 'a bag of apples', 'a punnet of strawberries'.",
          ],
          keyPoint:
            "'Veg' = vegetables. British words: aubergine, courgette, coriander, prawns. Use 'some' for uncountable food.",
        },
        {
          type: "vocab",
          heading: "Meat & fish",
          items: [
            { l1: "beef", en: "meat from a cow" },
            { l1: "pork", en: "meat from a pig" },
            { l1: "chicken", en: "meat from a chicken" },
            { l1: "lamb", en: "meat from a young sheep" },
            { l1: "bacon", en: "salted/smoked meat from a pig, eaten at breakfast" },
            { l1: "sausage", en: "minced seasoned meat in a skin", note: "Informally 'banger'." },
            { l1: "fish", en: "fish (the food)" },
            { l1: "cod", en: "a white fish, classic in fish and chips" },
            { l1: "salmon", en: "a pink, oily fish" },
            { l1: "prawns", en: "small shellfish (US 'shrimp')" },
            { l1: "tuna", en: "tinned or fresh tuna fish" },
          ],
        },
        {
          type: "vocab",
          heading: "Vegetables & fruit",
          items: [
            { l1: "potato / potatoes", en: "potatoes" },
            { l1: "carrot", en: "an orange root vegetable" },
            { l1: "peas", en: "small green vegetables" },
            { l1: "onion", en: "a strong-flavoured bulb vegetable" },
            { l1: "aubergine", en: "a purple vegetable (US 'eggplant')" },
            { l1: "courgette", en: "a green marrow (US 'zucchini')" },
            { l1: "mushroom", en: "an edible fungus" },
            { l1: "apple", en: "an apple" },
            { l1: "banana", en: "a banana" },
            { l1: "strawberry", en: "a small red fruit", note: "Sold in a 'punnet'." },
            { l1: "orange", en: "a citrus fruit" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Name the food",
          intro: "Choose the British word.",
          items: [
            {
              template: "Fish and chips is usually made with ___.",
              answer: "cod",
              en: "Cod is the classic fish used.",
              options: ["cod", "tuna", "salmon", "prawns"],
            },
            {
              template: "In Britain, an 'eggplant' is called an ___.",
              answer: "aubergine",
              en: "British English for eggplant.",
              options: ["aubergine", "onion", "apple", "avocado"],
            },
            {
              template: "Small shellfish in Britain are called ___.",
              answer: "prawns",
              en: "British English for shrimp.",
              options: ["prawns", "peas", "cod", "crabs"],
            },
            {
              template: "Bacon and ___ come from a pig.",
              answer: "pork",
              en: "Both come from a pig.",
              options: ["pork", "beef", "lamb", "chicken"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Spot the ingredient",
          questions: [
            {
              q: "Which of these is a fish?",
              options: ["lamb", "salmon", "courgette", "onion"],
              correct: 1,
            },
            {
              q: "'Beef' comes from…",
              options: ["a pig", "a sheep", "a cow", "a chicken"],
              correct: 2,
            },
            {
              q: "A 'courgette' is the British word for…",
              options: ["zucchini", "eggplant", "pumpkin", "cucumber"],
              correct: 0,
            },
          ],
        },
      ],
    },
    {
      slug: "food-vocab-cooking-tastes",
      title: "Cooking verbs & tastes",
      summary: "Fry, roast, boil, grill — and how things taste.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "How food is cooked — and how it tastes",
          body: [
            "Menus describe food with <strong>cooking verbs</strong>: a dish might be <em>fried</em>, <em>roasted</em>, <em>boiled</em>, <em>grilled</em> or <em>baked</em>. Knowing these helps you picture what you'll get.",
            "To describe how something <strong>tastes</strong>, you'll use adjectives like <em>sweet</em>, <em>salty</em>, <em>sour</em>, <em>spicy</em> and <em>savoury</em> (the opposite of sweet).",
            "And for <strong>texture</strong>: <em>crispy</em>, <em>crunchy</em>, <em>soft</em>, <em>tender</em> (easy to cut/chew) or <em>tough</em> (hard to chew).",
          ],
          keyPoint:
            "Cooking verbs: fry, roast, boil, grill, bake. Tastes: sweet, salty, sour, spicy, savoury. Textures: crispy, tender, tough.",
        },
        {
          type: "vocab",
          heading: "Cooking verbs",
          items: [
            { l1: "to fry", en: "to cook in hot oil", note: "Past/adjective: 'fried'." },
            { l1: "to roast", en: "to cook in an oven with fat", note: "A 'roast' is a roasted meal." },
            { l1: "to boil", en: "to cook in bubbling water" },
            { l1: "to grill", en: "to cook under or over direct heat" },
            { l1: "to bake", en: "to cook in an oven (bread, cakes)" },
            { l1: "to steam", en: "to cook over boiling water's vapour" },
            { l1: "to stir-fry", en: "to fry quickly while stirring" },
            { l1: "to toast", en: "to brown bread with heat" },
          ],
        },
        {
          type: "vocab",
          heading: "Tastes & textures",
          items: [
            { l1: "sweet", en: "like sugar" },
            { l1: "salty", en: "containing a lot of salt" },
            { l1: "sour", en: "sharp and acidic, like lemon" },
            { l1: "bitter", en: "sharp like strong coffee" },
            { l1: "spicy / hot", en: "burning with chilli", note: "'Hot' can mean spicy or warm." },
            { l1: "savoury", en: "salty/meaty, the opposite of sweet" },
            { l1: "crispy", en: "firm and crunchy on the outside" },
            { l1: "tender", en: "soft and easy to chew (meat)" },
            { l1: "tough", en: "hard to chew" },
            { l1: "bland", en: "lacking flavour" },
          ],
        },
        {
          type: "fillBlank",
          heading: "How is it cooked?",
          intro: "Pick the right verb or adjective.",
          items: [
            {
              template: "We ___ the potatoes in the oven for an hour.",
              answer: "roast",
              en: "Cook the potatoes in the oven.",
              options: ["roast", "boil", "fry", "steam"],
            },
            {
              template: "The chips are nice and ___ on the outside.",
              answer: "crispy",
              en: "Firm and crunchy outside.",
              options: ["crispy", "sour", "bland", "salty"],
            },
            {
              template: "This curry is very ___ — full of chilli.",
              answer: "spicy",
              en: "Full of chilli heat.",
              options: ["spicy", "sweet", "tender", "bitter"],
            },
            {
              template: "You ___ an egg in a pan with a little oil.",
              answer: "fry",
              en: "Cook an egg in hot oil.",
              options: ["fry", "roast", "bake", "boil"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tell a friend the chicken was grilled and really tender.",
          reference: "The chicken was grilled and really tender.",
          hint: "Use the past 'was' + 'grilled', then describe it as 'tender'.",
        },
      ],
    },
    {
      slug: "food-vocab-breakfast-meals",
      title: "Full English & meals of the day",
      summary: "The fry-up and what Brits eat when.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The full English breakfast",
          body: [
            "The <strong>full English breakfast</strong> (a 'fry-up') is a famous cooked breakfast: <em>fried eggs, bacon, sausages, baked beans, grilled tomatoes, mushrooms, toast</em> and often a hash brown. It's a weekend treat more than a daily meal.",
            "The meals of the day are <strong>breakfast</strong> (morning), <strong>lunch</strong> (midday) and <strong>dinner</strong> (evening). In some regions the evening meal is called <strong>tea</strong>, and a light midday meal can be 'dinner' — it varies!",
            "A small bite between meals is a <strong>snack</strong>, and a sweet treat is <strong>pudding</strong> or <strong>dessert</strong> (Brits often say 'pudding' for any dessert).",
          ],
          keyPoint:
            "Full English = a big cooked breakfast (fry-up). Meals: breakfast, lunch, dinner (sometimes 'tea'). 'Pudding' = dessert.",
        },
        {
          type: "vocab",
          heading: "Breakfast & meals",
          items: [
            { l1: "a full English / a fry-up", en: "a big cooked breakfast" },
            { l1: "fried egg", en: "an egg fried in a pan" },
            { l1: "baked beans", en: "tinned beans in tomato sauce" },
            { l1: "hash brown", en: "a fried potato patty" },
            { l1: "toast", en: "browned bread" },
            { l1: "breakfast", en: "the morning meal" },
            { l1: "lunch", en: "the midday meal" },
            { l1: "dinner", en: "the evening meal", note: "Sometimes called 'tea'." },
            { l1: "a snack", en: "a small bite between meals" },
            { l1: "pudding / dessert", en: "the sweet course after a meal" },
            { l1: "a brunch", en: "a late breakfast/early lunch combined" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering a fry-up",
          setup: "Saturday morning at a café. You fancy a cooked breakfast.",
          lines: [
            { speaker: "Server", l1: "Morning! What can I get you?", en: "Good morning! What would you like?" },
            { speaker: "You", l1: "A full English, please. Can I swap the mushrooms for extra beans?", en: "A cooked breakfast, please. Can I have extra beans instead of mushrooms?" },
            { speaker: "Server", l1: "Course. How do you want your eggs?", en: "Of course. How would you like your eggs cooked?" },
            { speaker: "You", l1: "Fried, please. And a tea.", en: "Fried, please. And a cup of tea." },
            { speaker: "Server", l1: "Toast — white or brown?", en: "Would you like white or brown toast?" },
            { speaker: "You", l1: "Brown, thanks.", en: "Brown bread, thank you." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in order.",
          items: [
            { tokens: ["I'll", "have", "the", "full", "English", ",", "please", "."], en: "I'll have the full English, please." },
            { tokens: ["How", "do", "you", "want", "your", "eggs", "?"], en: "How do you want your eggs?" },
            { tokens: ["What's", "for", "dinner", "tonight", "?"], en: "What's for dinner tonight?" },
            { tokens: ["Can", "I", "have", "toast", "with", "that", "?"], en: "Can I have toast with that?" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "A 'full English' is…",
              options: [
                "a large cooked breakfast",
                "an evening meal",
                "a dessert",
                "a kind of tea",
              ],
              correct: 0,
            },
            {
              q: "In Britain, 'pudding' often means…",
              options: ["a starter", "any dessert", "a main course", "a drink"],
              correct: 1,
            },
            {
              q: "Which is part of a classic fry-up?",
              options: ["sushi", "baked beans", "a salad", "pasta"],
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
        q: "'Beef' comes from…",
        options: ["a pig", "a cow", "a chicken", "a sheep"],
        correct: 1,
      },
      {
        q: "The British word for 'shrimp' is…",
        options: ["prawns", "cod", "peas", "crabs"],
        correct: 0,
      },
      {
        q: "An 'aubergine' is the British word for…",
        options: ["zucchini", "eggplant", "pumpkin", "cucumber"],
        correct: 1,
      },
      {
        q: "To 'roast' food means to cook it…",
        options: ["in bubbling water", "in an oven with fat", "in hot oil in a pan", "over steam"],
        correct: 1,
      },
      {
        q: "If meat is 'tender', it is…",
        options: ["hard to chew", "soft and easy to chew", "very salty", "burnt"],
        correct: 1,
      },
      {
        q: "'Savoury' means…",
        options: ["very sweet", "salty/meaty, the opposite of sweet", "sour", "spicy"],
        correct: 1,
      },
      {
        q: "A 'full English' is…",
        options: ["a dessert", "a big cooked breakfast", "a type of tea", "a salad"],
        correct: 1,
      },
      {
        q: "Which is part of a fry-up?",
        options: ["baked beans", "sushi", "pasta", "rice"],
        correct: 0,
      },
      {
        q: "In British English, 'pudding' often means…",
        options: ["a starter", "any dessert", "the main course", "a side dish"],
        correct: 1,
      },
      {
        q: "To 'boil' food, you cook it…",
        options: ["in an oven", "in hot oil", "in bubbling water", "under a grill"],
        correct: 2,
      },
    ],
  },
};
