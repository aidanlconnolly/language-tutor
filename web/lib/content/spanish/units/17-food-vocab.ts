import type { Unit } from "../../types";

export const UNIT_FOOD_VOCAB: Unit = {
  slug: "food-vocab",
  stage: 4,
  order: 17,
  icon: "🥬",
  title: "Food vocab deep dive",
  tagline: "Verduras, carnes, pescados, formas de cocinar.",
  lessons: [
    {
      slug: "food-vocab-ingredients",
      title: "Ingredients and food groups",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "Vegetables and fruit",
          items: [
            { l1: "la lechuga", en: "lettuce" },
            { l1: "el tomate", en: "tomato" },
            { l1: "la cebolla", en: "onion" },
            { l1: "el ajo", en: "garlic" },
            { l1: "el pimiento", en: "pepper (bell pepper)" },
            { l1: "la patata", en: "potato", note: "papa in Latin America" },
            { l1: "la zanahoria", en: "carrot" },
            { l1: "la naranja", en: "orange" },
            { l1: "la manzana", en: "apple" },
            { l1: "el plátano", en: "banana", note: "banano in parts of Latin America" },
          ],
        },
        {
          type: "vocab",
          heading: "Meat, fish and dairy",
          items: [
            { l1: "la carne de ternera", en: "beef" },
            { l1: "el cerdo / el pollo", en: "pork / chicken" },
            { l1: "el cordero", en: "lamb" },
            { l1: "el jamón", en: "cured ham" },
            { l1: "el chorizo", en: "chorizo sausage" },
            { l1: "el salmón", en: "salmon" },
            { l1: "el bacalao", en: "cod (often salted)" },
            { l1: "el marisco", en: "seafood/shellfish" },
            { l1: "el queso", en: "cheese" },
            { l1: "el huevo", en: "egg" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Food vocab check",
          questions: [
            {
              q: "'La patata' is called '___ ' in Latin America.",
              options: ["La papaya", "La papa", "La patata also", "La potato"],
              correct: 1,
              fb: "In Latin America, la papa is the standard word for potato.",
            },
            {
              q: "'El marisco' means…",
              options: ["Fish in general", "Seafood/shellfish", "The sea", "Smoked fish"],
              correct: 1,
              fb: "El marisco = seafood/shellfish — gambas, mejillones, langosta etc.",
            },
          ],
        },
      ],
    },
    {
      slug: "food-vocab-cooking",
      title: "Cooking methods",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "How food is prepared",
          items: [
            { l1: "a la plancha", en: "grilled (on a flat griddle)" },
            { l1: "al horno", en: "baked/oven-roasted" },
            { l1: "frito/a", en: "fried" },
            { l1: "hervido/a", en: "boiled" },
            { l1: "a la brasa", en: "chargrilled" },
            { l1: "crudo/a", en: "raw" },
            { l1: "en salsa", en: "in sauce" },
            { l1: "poco hecho / muy hecho", en: "rare / well done (steak)" },
            { l1: "al punto", en: "medium (steak)" },
            { l1: "picante", en: "spicy" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Cooking methods",
          questions: [
            {
              q: "If you want your steak medium, you ask for…",
              options: ["bien hecho", "poco hecho", "al punto", "a la plancha"],
              correct: 2,
              fb: "Al punto = medium. Poco hecho = rare. Muy/bien hecho = well done.",
            },
            {
              q: "'A la plancha' means…",
              options: ["Fried in oil", "Grilled on a flat griddle", "Baked in oven", "Chargrilled on open fire"],
              correct: 1,
              fb: "A la plancha = cooked on a flat metal griddle — one of the healthiest cooking methods.",
            },
          ],
        },
      ],
    },
    {
      slug: "food-vocab-shopping",
      title: "Food shopping phrases",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "At the deli and cheese counter",
          items: [
            { l1: "¿De qué es este queso?", en: "What is this cheese made from?" },
            { l1: "de leche de vaca / oveja / cabra", en: "from cow's / sheep's / goat's milk" },
            { l1: "curado / semicurado / fresco", en: "mature / semi-cured / fresh" },
            { l1: "¿Tiene más picante?", en: "Do you have something spicier?" },
            { l1: "¿Puede cortarlo en lonchas?", en: "Can you slice it?" },
            { l1: "sin sal", en: "without salt / unsalted" },
          ],
        },
        {
          type: "vocab",
          heading: "Describing dishes",
          items: [
            { l1: "asado/a", en: "roasted" },
            { l1: "estofado/a", en: "stewed" },
            { l1: "rehogado/a", en: "sautéed" },
            { l1: "empanado/a", en: "breaded" },
            { l1: "a la romana", en: "in batter (fried)" },
            { l1: "en adobo", en: "marinated" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Food preparation check",
          questions: [
            {
              q: "'Asado' means…",
              options: ["fried", "boiled", "roasted", "raw"],
              correct: 2,
              fb: "Asado = roasted. Un pollo asado = a roast chicken.",
            },
            {
              q: "'A la romana' means…",
              options: ["Roman-style salad", "In batter (fried)", "With tomato sauce", "Grilled Roman-style"],
              correct: 1,
              fb: "A la romana = coated in batter and fried. Calamares a la romana = battered squid rings.",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'El tomate' means…", options: ["the tomato", "the pepper", "the onion", "the garlic"], correct: 0 },
      { q: "'El ajo' means…", options: ["oil", "garlic", "onion", "vinegar"], correct: 1 },
      { q: "'Al horno' means…", options: ["grilled", "fried", "baked/oven-roasted", "boiled"], correct: 2 },
      { q: "'A la plancha' is…", options: ["Deep fried", "Grilled on flat griddle", "Baked", "Chargrilled"], correct: 1 },
      { q: "Steak 'al punto' is…", options: ["Rare", "Well done", "Medium", "Very rare"], correct: 2 },
      { q: "'El bacalao' is…", options: ["Salmon", "Tuna", "Cod", "Sea bass"], correct: 2 },
      { q: "'El marisco' includes…", options: ["All fish", "Shellfish and seafood", "Only shrimp", "Smoked fish"], correct: 1 },
      { q: "'Frito/a' means…", options: ["grilled", "baked", "fried", "boiled"], correct: 2 },
      { q: "'Poco hecho' for steak means…", options: ["Well done", "Medium", "Rare", "Overcooked"], correct: 2 },
      { q: "In Latin America, potato is…", options: ["la patata", "la papa", "la patate", "el patato"], correct: 1 },
    ],
  },
};
