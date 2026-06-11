import type { Unit } from "../../types";

export const UNIT_MARKET: Unit = {
  slug: "market",
  stage: 6,
  order: 26,
  icon: "🥕",
  title: "Market / mercado",
  tagline: "Kilos, gramos, me pone un kilo de…",
  lessons: [
    {
      slug: "market-vocab",
      title: "At the market",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Spain's covered markets",
          body: [
            "Spain has a rich tradition of covered food markets — <em>mercados municipales</em>. Madrid's Mercado de San Miguel and Mercado de La Paz, Barcelona's Boqueria — these are living food culture hubs, not just shops.",
            "At a stall you typically ask the vendor to give you what you want: <em>Me pone…</em> (literally 'put me' — give me…). Quantities are in kilograms and grams.",
          ],
        },
        {
          type: "vocab",
          heading: "Weights and quantities",
          items: [
            { l1: "un kilo de", en: "a kilogram of" },
            { l1: "medio kilo de", en: "half a kilogram of" },
            { l1: "cien gramos de", en: "one hundred grams of" },
            { l1: "un cuarto de kilo", en: "a quarter of a kilogram (250g)" },
            { l1: "una docena de", en: "a dozen" },
            { l1: "un manojo de", en: "a bunch of" },
            { l1: "una lata de", en: "a tin/can of" },
            { l1: "una botella de", en: "a bottle of" },
          ],
        },
        {
          type: "vocab",
          heading: "Market phrases",
          items: [
            { l1: "Me pone un kilo de tomates.", en: "Give me a kilo of tomatoes." },
            { l1: "¿A cómo está el jamón?", en: "How much is the ham (per unit)?" },
            { l1: "¿Qué tiene hoy?", en: "What do you have today? (What's fresh?)" },
            { l1: "¿Está maduro?", en: "Is it ripe?" },
            { l1: "Póngame medio kilo de queso manchego.", en: "Give me half a kilo of manchego cheese." },
            { l1: "¿Algo más?", en: "Anything else?" },
            { l1: "Es todo, gracias.", en: "That's all, thanks." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Market check",
          questions: [
            {
              q: "'Me pone un kilo de naranjas' is asking for…",
              options: ["Half a kilo of oranges", "A kilo of oranges", "One orange", "A bunch of oranges"],
              correct: 1,
              fb: "Me pone = give me. Un kilo de naranjas = a kilo of oranges.",
            },
            {
              q: "'¿A cómo está?' at a market means…",
              options: ["How is it?", "How much is it (per unit)?", "Is it fresh?", "Where does it come from?"],
              correct: 1,
              fb: "¿A cómo está? = how much is it (what's the current price)? Very common in markets.",
            },
          ],
        },
      ],
    },
    {
      slug: "market-negotiating",
      title: "Choosing and leaving",
      estMinutes: 6,
      pages: [
        {
          type: "vocab",
          heading: "Commenting on produce",
          items: [
            { l1: "Están muy frescos.", en: "They're very fresh." },
            { l1: "Este está demasiado verde.", en: "This one is too unripe." },
            { l1: "¿Me puede poner uno más grande?", en: "Can you give me a bigger one?" },
            { l1: "¿Son de temporada?", en: "Are they in season?" },
            { l1: "¿Son locales / de aquí?", en: "Are they local / from here?" },
            { l1: "Me quedo con este.", en: "I'll take this one." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Final check",
          questions: [
            {
              q: "'¿Son de temporada?' means…",
              options: ["Are they expensive?", "Are they in season?", "Are they local?", "Are they fresh today?"],
              correct: 1,
              fb: "De temporada = in season. Seasonal produce is much valued in Spanish cooking.",
            },
            {
              q: "'Me quedo con este' means…",
              options: ["I'll leave this one", "I'll take this one", "This is mine", "I'll come back for this"],
              correct: 1,
              fb: "Quedarse con = to keep/take. Me quedo con este = I'll take/keep this one.",
            },
          ],
        },
      ],
    },
    {
      slug: "market-full-visit",
      title: "A full market visit",
      estMinutes: 7,
      pages: [
        {
          type: "dialogue",
          heading: "At the fruit and vegetable stall",
          lines: [
            { speaker: "You", l1: "Buenos días. ¿Están maduras estas fresas?", en: "Good morning. Are these strawberries ripe?" },
            { speaker: "Vendor", l1: "Sí, llegaron esta mañana. Son de Huelva.", en: "Yes, they arrived this morning. They're from Huelva." },
            { speaker: "You", l1: "Me pone medio kilo, por favor.", en: "Give me half a kilo, please." },
            { speaker: "Vendor", l1: "¿Algo más?", en: "Anything else?" },
            { speaker: "You", l1: "Sí, un kilo de tomates y una lechuga.", en: "Yes, a kilo of tomatoes and a lettuce." },
            { speaker: "Vendor", l1: "Son cuatro euros con veinte en total.", en: "That's four euros twenty in total." },
          ],
        },
        {
          type: "vocab",
          heading: "Market numbers and transactions",
          items: [
            { l1: "Son cuatro euros con veinte.", en: "That's €4.20." },
            { l1: "Llegaron esta mañana.", en: "They arrived this morning. (very fresh)" },
            { l1: "Son de Huelva / de la zona.", en: "They're from Huelva / from around here." },
            { l1: "¿Los tienen más pequeños?", en: "Do you have smaller ones?" },
            { l1: "¿A cómo el kilo?", en: "How much per kilo?" },
            { l1: "Llévese estos, que están mejor.", en: "Take these, they're better." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Market conversation",
          questions: [
            {
              q: "'Son de Huelva' at a market stall means…",
              options: ["They cost from Huelva", "They come from Huelva (origin)", "They're on sale from Huelva", "They're Huelva brand"],
              correct: 1,
              fb: "Ser de = to be from. Origin is a selling point at Spanish markets.",
            },
            {
              q: "'¿A cómo el kilo?' means…",
              options: ["How many kilos?", "How heavy is it?", "How much per kilo?", "Can I have a kilo?"],
              correct: 2,
              fb: "¿A cómo? = at what price? ¿A cómo el kilo? = how much per kilo?",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Me pone…' at a market means…", options: ["Put it there", "Give me…", "I want…", "I'll take…"], correct: 1 },
      { q: "'Medio kilo' is…", options: ["100g", "250g", "500g", "750g"], correct: 2 },
      { q: "'Un cuarto de kilo' is…", options: ["100g", "250g", "500g", "750g"], correct: 1 },
      { q: "'¿A cómo está?' means…", options: ["How is it?", "What's the price?", "Is it ripe?", "Where is it from?"], correct: 1 },
      { q: "'¿Está maduro?' means…", options: ["Is it fresh?", "Is it ripe?", "Is it local?", "Is it organic?"], correct: 1 },
      { q: "'Una docena de huevos' is…", options: ["A box of eggs", "A dozen eggs", "Half a dozen eggs", "Six eggs"], correct: 1 },
      { q: "'¿Son de temporada?' means…", options: ["Are they fresh?", "Are they in season?", "Are they local?", "Are they frozen?"], correct: 1 },
      { q: "'Es todo, gracias' at a stall means…", options: ["Thanks, this is good", "That's all, thanks", "Everything is good", "Thank you very much"], correct: 1 },
      { q: "'Me quedo con este' means…", options: ["I'll leave this", "I'll take this one", "This is too much", "I'll come back"], correct: 1 },
      { q: "'¿Algo más?' means…", options: ["Something else?", "Is that all?", "How much more?", "Any other size?"], correct: 0 },
    ],
  },
};
