import type { Unit } from "../../types";

export const UNIT_DIET_WINE: Unit = {
  slug: "diet-wine",
  stage: 4,
  order: 18,
  icon: "🍷",
  title: "Wine & dietary needs",
  tagline: "Rioja, cava, soy vegetariano/a, tengo alergia a…",
  lessons: [
    {
      slug: "diet-wine-dietary",
      title: "Dietary needs",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "Dietary restrictions",
          items: [
            { l1: "Soy vegetariano/a.", en: "I'm vegetarian." },
            { l1: "Soy vegano/a.", en: "I'm vegan." },
            { l1: "Soy celíaco/a.", en: "I'm coeliac (gluten intolerant)." },
            { l1: "Tengo alergia a los frutos secos.", en: "I'm allergic to nuts." },
            { l1: "Tengo intolerancia a la lactosa.", en: "I'm lactose intolerant." },
            { l1: "¿Tiene gluten?", en: "Does it contain gluten?" },
            { l1: "¿Lleva carne / pescado?", en: "Does it contain meat / fish?" },
            { l1: "¿Puede hacerlo sin…?", en: "Can you make it without…?" },
          ],
        },
        {
          type: "tip",
          heading: "Vegetarian in Spain — it's improving",
          body: "Spain is not the easiest country for vegetarians historically, but this is changing fast, especially in cities. Always ask <em>¿Lleva carne o pescado?</em> as some dishes use meat stock even if they seem vegetarian. Caldo de verduras (vegetable broth) is your safe friend.",
          example: { l1: "¿Este plato lleva carne? Soy vegetariana.", en: "Does this dish contain meat? I'm vegetarian." },
        },
        {
          type: "multipleChoice",
          heading: "Dietary check",
          questions: [
            {
              q: "How does a woman say 'I'm vegetarian'?",
              options: ["Soy vegetariano", "Soy vegetariana", "Estoy vegetariana", "Como vegetariana"],
              correct: 1,
              fb: "Vegetariana (feminine), vegetariano (masculine). Soy vegetariana.",
            },
            {
              q: "'¿Lleva carne?' means…",
              options: ["Do you serve meat?", "Does it contain meat?", "Is there a meat option?", "I'd like meat"],
              correct: 1,
              fb: "Llevar = to contain/carry. ¿Lleva carne? = Does it contain meat?",
            },
          ],
        },
      ],
    },
    {
      slug: "diet-wine-spanish-wine",
      title: "Spanish wines and drinks",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "Spanish wines and aperitifs",
          items: [
            { l1: "la Rioja", en: "Spain's most famous red wine region" },
            { l1: "el Albariño", en: "crisp white wine from Galicia" },
            { l1: "el Ribera del Duero", en: "powerful reds from Castilla" },
            { l1: "el cava", en: "Spanish sparkling wine (from Catalonia)" },
            { l1: "el jerez / el sherry", en: "fortified wine from Jerez" },
            { l1: "la sangría", en: "red wine punch with fruit — tourist staple" },
            { l1: "la horchata", en: "tiger nut milk drink (Valencia)" },
            { l1: "el sidra", en: "cider (especially in Asturias)" },
          ],
        },
        {
          type: "vocab",
          heading: "Ordering wine",
          items: [
            { l1: "Una copa de vino tinto, por favor.", en: "A glass of red wine, please." },
            { l1: "¿Qué vino recomienda de la zona?", en: "What local wine do you recommend?" },
            { l1: "La botella de la casa.", en: "The house bottle." },
            { l1: "Un vino de la tierra.", en: "A local wine." },
            { l1: "¿Tiene vino por copas?", en: "Do you serve wine by the glass?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Wine and drinks",
          questions: [
            {
              q: "Cava is…",
              options: ["A Spanish fortified wine", "A Spanish sparkling wine", "A red wine from Rioja", "A cocktail"],
              correct: 1,
              fb: "Cava is Spain's sparkling wine, produced mainly in Catalonia. Made by the same method as Champagne.",
            },
            {
              q: "How do you ask for a local wine recommendation?",
              options: ["¿Qué vino tiene?", "¿Qué vino recomienda de la zona?", "¿Cuál es el mejor?", "Quiero el vino"],
              correct: 1,
              fb: "De la zona = from this area/region. A key phrase for wine tourism.",
            },
          ],
        },
      ],
    },
    {
      slug: "diet-wine-conversation",
      title: "Talking about wine and diet in context",
      estMinutes: 7,
      pages: [
        {
          type: "dialogue",
          heading: "Ordering wine at a restaurant",
          lines: [
            { speaker: "Waiter", l1: "¿Desean algo de beber?", en: "Would you like something to drink?" },
            { speaker: "Guest", l1: "¿Qué vino tinto recomienda de la zona?", en: "What red wine from the area do you recommend?" },
            { speaker: "Waiter", l1: "El Ribera del Duero que tenemos está muy bien.", en: "The Ribera del Duero we have is very good." },
            { speaker: "Guest", l1: "Perfecto. Una botella, por favor. Y para mi amiga, ¿tienen algo sin alcohol?", en: "Perfect. A bottle, please. And for my friend, do you have anything non-alcoholic?" },
            { speaker: "Waiter", l1: "Sí, tenemos agua, refrescos y zumos.", en: "Yes, we have water, soft drinks and juices." },
          ],
        },
        {
          type: "vocab",
          heading: "Dietary conversation starters",
          items: [
            { l1: "¿Esto lleva lácteos?", en: "Does this contain dairy?" },
            { l1: "¿Es apto para celíacos?", en: "Is it suitable for coeliacs?" },
            { l1: "sin gluten", en: "gluten-free" },
            { l1: "sin lactosa", en: "lactose-free" },
            { l1: "¿Tiene opciones veganas?", en: "Do you have vegan options?" },
            { l1: "¿Puede hacerlo sin mantequilla?", en: "Can you make it without butter?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Dietary needs check",
          questions: [
            {
              q: "'¿Es apto para celíacos?' means…",
              options: ["Is it vegetarian?", "Is it suitable for coeliacs?", "Does it contain gluten?", "Is it vegan?"],
              correct: 1,
              fb: "Apto = suitable. Celíaco = coeliac. ¿Es apto para celíacos? = suitable for coeliacs?",
            },
            {
              q: "How do you ask if something is vegan?",
              options: ["¿Es vegano?", "¿Tiene opciones veganas?", "¿Lleva carne o pescado?", "All of the above can work"],
              correct: 3,
              fb: "All three work. ¿Es vegano? (is it vegan?), ¿Tiene opciones veganas? (do you have vegan options?), ¿Lleva carne o pescado? (does it contain meat or fish?) are all useful.",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "How does a man say 'I'm vegan'?", options: ["Soy vegana", "Soy vegano", "Estoy vegano", "Como vegano"], correct: 1 },
      { q: "'¿Lleva gluten?' means…", options: ["Is this gluten-free?", "Does it contain gluten?", "Do you have gluten-free options?", "I can't eat gluten"], correct: 1 },
      { q: "Rioja is famous for…", options: ["White wine", "Sparkling wine", "Red wine", "Rosé wine"], correct: 2 },
      { q: "Cava comes from…", options: ["Rioja", "Galicia", "Catalonia", "Asturias"], correct: 2 },
      { q: "'¿Puede hacerlo sin…?' means…", options: ["Can you make it with…?", "Can you make it without…?", "Does it have…?", "I don't want…"], correct: 1 },
      { q: "Albariño is…", options: ["A sparkling wine", "A red wine", "A crisp white wine from Galicia", "A fortified wine"], correct: 2 },
      { q: "Horchata is made from…", options: ["Rice", "Tiger nuts", "Almonds", "Coconut"], correct: 1 },
      { q: "Jerez/Sherry is a…", options: ["Red wine", "Sparkling wine", "Fortified wine", "Rosé wine"], correct: 2 },
      { q: "'Soy celíaco/a' means…", options: ["I'm vegetarian", "I'm lactose intolerant", "I'm coeliac/gluten intolerant", "I'm vegan"], correct: 2 },
      { q: "Una copa de vino is…", options: ["A bottle of wine", "A glass of wine", "A jug of wine", "A box of wine"], correct: 1 },
    ],
  },
};
