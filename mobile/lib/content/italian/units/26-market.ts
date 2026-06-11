import type { Unit } from "../../types";

export const UNIT_MARKET: Unit = {
  slug: "market",
  stage: 6,
  order: 26,
  icon: "🥕",
  title: "Market & supermercato",
  tagline: "Un etto di prosciutto, mezzo chilo di pomodori — buying food by weight, like a local.",
  badge: "tourist",
  lessons: [
    {
      slug: "market-weights",
      title: "Weights and quantities",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Italians measure food differently than Americans",
          body: [
            "Forget pounds. Italy uses the metric system, and at the market or deli you'll mostly hear three units:",
            "<strong>L'etto</strong> (= 100 grams). Used for cured meats, cheeses, small portions. <em>Un etto di prosciutto</em> = 100g of prosciutto.",
            "<strong>Il chilo</strong> (= 1 kg = ~2.2 lb). Used for fruit, veg, larger amounts. <em>Mezzo chilo di pomodori</em> = 500g of tomatoes.",
            "<strong>Il litro</strong> (= 1 L). Used for liquids. <em>Mezzo litro di latte</em>.",
            "Fractions: <em>mezzo</em> (half), <em>un quarto</em> (a quarter), <em>tre quarti</em> (three quarters).",
          ],
          keyPoint:
            "1 etto = 100g (deli portion). 1 chilo = 1kg (fruit/veg). Mezzo = half. Un quarto = a quarter.",
        },
        {
          type: "vocab",
          heading: "Weight & quantity",
          items: [
            { l1: "un etto", en: "100 grams" },
            { l1: "due etti / mezzo chilo", en: "200g / 500g (same when at ~500)" },
            { l1: "un chilo / mezzo chilo / un quarto di chilo", en: "1kg / 500g / 250g" },
            { l1: "un litro / mezzo litro", en: "1L / 500ml" },
            { l1: "una bottiglia", en: "a bottle" },
            { l1: "un sacchetto", en: "a (paper/plastic) bag" },
            { l1: "una busta", en: "a bag (plastic)" },
            { l1: "una confezione", en: "a package" },
            { l1: "una fetta / due fette", en: "a slice / two slices" },
            { l1: "un pezzo", en: "a piece" },
            { l1: "una manciata", en: "a handful" },
            { l1: "qualche", en: "some / a few" },
            { l1: "abbastanza", en: "enough" },
          ],
        },
        {
          type: "tip",
          heading: "How a deli order sounds",
          body: "Italians order by weight and the deli operator slices accordingly. <em>«Mi dia un etto e mezzo di prosciutto crudo, ma tagliato sottile.»</em> = Give me 150 grams of prosciutto, but sliced thin. <em>Sottile / spesso</em> = thin / thick. Lots of Italians ask for <em>«un assaggio»</em> = a taste, and the deli will let you try a thin slice before committing.",
        },
        {
          type: "multipleChoice",
          heading: "Weight check",
          questions: [
            {
              q: "'1 etto' equals…",
              options: ["10 grams", "100 grams", "1 kilogram", "1 pound"],
              correct: 1,
            },
            {
              q: "'500g' is most commonly said as…",
              options: ["cinque etti", "mezzo chilo", "Both work", "duecentocinquanta grammi"],
              correct: 2,
            },
            {
              q: "'A handful of basil' =",
              options: [
                "un etto di basilico",
                "un sacchetto di basilico",
                "una manciata di basilico",
                "un pezzo di basilico",
              ],
              correct: 2,
            },
            {
              q: "'Sliced thin' (cured meat) =",
              options: ["tagliato grosso", "tagliato sottile", "tagliato spesso", "tagliato a pezzi"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "market-buying-food",
      title: "Buying at the market",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The 'don't touch the fruit' rule",
          body: [
            "At an Italian outdoor market (Campo de' Fiori, Testaccio, Trionfale), you do NOT pick up the fruit yourself. The vendor will pick for you — they pride themselves on choosing the best.",
            "Point and say what you want: <em>«Mi dà mezzo chilo di pomodori, per favore. Per stasera.»</em> The \"per stasera\" tells them you want them ripe NOW. <em>«Per domani»</em> = a bit less ripe.",
            "Supermarkets (<em>supermercato</em>) work normally: grab fruit, weigh it yourself on the scale (<em>la bilancia</em>) — find the picture of your item on the screen, push the button, sticker comes out.",
          ],
          keyPoint:
            "Outdoor market: vendor picks for you, tell them when you'll eat it. Supermarket: weigh + sticker yourself.",
        },
        {
          type: "vocab",
          heading: "Market & supermarket terms",
          items: [
            { l1: "il mercato", en: "the (outdoor) market" },
            { l1: "il supermercato", en: "the supermarket" },
            { l1: "il banco / il banchetto", en: "the stall" },
            { l1: "il fruttivendolo", en: "the produce seller" },
            { l1: "il macellaio", en: "the butcher" },
            { l1: "la pescheria / il pescivendolo", en: "the fish shop / fish seller" },
            { l1: "la salumeria", en: "the deli (cured meats)" },
            { l1: "il fornaio / la panetteria", en: "the baker / bakery" },
            { l1: "la frutta", en: "fruit" },
            { l1: "la verdura", en: "vegetables" },
            { l1: "fresco / fresca", en: "fresh" },
            { l1: "maturo", en: "ripe" },
            { l1: "biologico / bio", en: "organic" },
            { l1: "di stagione", en: "in season" },
            { l1: "locale / del posto", en: "local" },
            { l1: "il carrello", en: "the shopping cart" },
            { l1: "il cestino", en: "the basket" },
          ],
        },
        {
          type: "dialogue",
          heading: "At Campo de' Fiori",
          setup: "You're at the produce stall.",
          lines: [
            { speaker: "You", l1: "Buongiorno. Vorrei mezzo chilo di pomodori, per favore.", en: "Hello. I'd like half a kilo of tomatoes, please." },
            { speaker: "Fruttivendolo", l1: "Per oggi o per qualche giorno?", en: "For today or for a few days?" },
            { speaker: "You", l1: "Per stasera — faccio una caprese.", en: "For tonight — I'm making a caprese." },
            { speaker: "Fruttivendolo", l1: "Allora questi qui sono pronti, perfetti per la caprese. Anche del basilico?", en: "Then these here are ready, perfect for caprese. Some basil too?" },
            { speaker: "You", l1: "Sì, un mazzetto. E un etto di mozzarella di bufala, se ne avete.", en: "Yes, a small bunch. And 100g of buffalo mozzarella, if you have it." },
            { speaker: "Fruttivendolo", l1: "La bufala la vendiamo al banco del formaggio, qui accanto. Per il resto, tre euro e venti.", en: "We sell the bufala at the cheese stall, right next door. For the rest, three twenty." },
            { speaker: "You", l1: "Ecco a Lei. Buona giornata!", en: "Here you go. Have a good day!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Market-stall fill",
          items: [
            {
              template: "Vorrei un ___ di prosciutto crudo, tagliato sottile.",
              answer: "etto",
              en: "I'd like 100g of prosciutto, sliced thin.",
              options: ["chilo", "litro", "etto", "pezzo"],
            },
            {
              template: "Mezzo ___ di mele, per favore.",
              answer: "chilo",
              en: "Half a kilo of apples, please.",
              options: ["litro", "chilo", "etto", "sacchetto"],
            },
            {
              template: "Le pesche sono ___ di stagione?",
              answer: "fresche",
              en: "Are the peaches fresh / in season?",
              options: ["fresche", "fresco", "freschi", "fresca"],
            },
            {
              template: "I pomodori sono per ___ . Voglio quelli più maturi.",
              answer: "stasera",
              en: "The tomatoes are for tonight. I want the ripest.",
              options: ["domani", "stasera", "lunedì", "settimana"],
            },
            {
              template: "Un ___ di basilico, grazie.",
              answer: "mazzetto",
              en: "A small bunch of basil, thanks.",
              options: ["mazzetto", "etto", "litro", "chilo"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like 200 grams of cheese and a kilo of strawberries.",
          reference: "Vorrei due etti di formaggio e un chilo di fragole.",
          hint: "200g = due etti. Fragole = strawberries.",
        },
      ],
    },
    {
      slug: "market-ne-and-pronouns",
      title: "Pronoun shortcut — 'ne' for quantities",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Ne = 'of it / of them'",
          body: [
            "<strong>Ne</strong> is a tiny but powerful pronoun. It replaces \"<em>of (something already mentioned)</em>.\"",
            "<em>«Quanti pomodori vuole?» «Ne prendo due.»</em> = How many tomatoes do you want? I'll take two (of them).",
            "<em>«Vuole del vino?» «No grazie, ne ho già a casa.»</em> = Do you want some wine? No thanks, I have some at home already.",
            "<em>Ne</em> always comes <strong>before</strong> the verb (or attaches to an infinitive). It's used CONSTANTLY at markets and shops.",
          ],
          keyPoint:
            "Ne = of it / of them. Goes before the verb. 'Ne prendo due' = I'll take two (of them). Use it constantly.",
        },
        {
          type: "vocab",
          heading: "Common 'ne' patterns",
          items: [
            { l1: "Ne voglio uno.", en: "I want one (of them)." },
            { l1: "Ne prendo due.", en: "I'll take two." },
            { l1: "Ne ho.", en: "I have some." },
            { l1: "Non ne ho.", en: "I don't have any." },
            { l1: "Ne abbiamo bisogno.", en: "We need some / it." },
            { l1: "Quanti ne vuole?", en: "How many do you want?" },
            { l1: "Non ne so niente.", en: "I don't know anything about it." },
            { l1: "Cosa ne pensi?", en: "What do you think (of it)?" },
          ],
        },
        {
          type: "tip",
          heading: "Ne + past tense → participle agrees",
          body: "When 'ne' refers to a number or quantity in the past, the participle agrees with that thing. <em>«Quante mele hai comprato?» «Ne ho comprate cinque.»</em> = How many apples did you buy? I bought five (of them). The <em>-e</em> on 'comprate' agrees with feminine plural 'mele'. Don't sweat this in conversation; just notice it when Italians say it.",
        },
        {
          type: "fillBlank",
          heading: "Use ne",
          items: [
            {
              template: "Vuole delle olive? — Sì, ___ prendo un etto.",
              answer: "ne",
              en: "Do you want olives? Yes, I'll take 100g (of them).",
              options: ["ne", "le", "li", "lo"],
            },
            {
              template: "Quanti pomodori? — ___ voglio tre.",
              answer: "Ne",
              en: "How many tomatoes? I want three (of them).",
              options: ["Li", "Ne", "Le", "Loro"],
            },
            {
              template: "Hai del pane? — No, non ___ ho.",
              answer: "ne",
              en: "Do you have any bread? No, I don't have any.",
              options: ["lo", "ne", "ci", "mi"],
            },
            {
              template: "Cosa ___ pensi del nuovo film?",
              answer: "ne",
              en: "What do you think of the new film?",
              options: ["ne", "lo", "ci", "ti"],
            },
            {
              template: "Ho mangiato due cornetti. ___ ho mangiati due.",
              answer: "Ne",
              en: "I ate two cornetti. I ate two of them.",
              options: ["Li", "Ne", "Lo", "Le"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Ne at the deli",
          setup: "Buying cheese and olives.",
          lines: [
            { speaker: "Salumiere", l1: "Mi dica.", en: "Tell me." },
            { speaker: "You", l1: "Vorrei del pecorino romano. Quanto costa?", en: "I'd like some pecorino romano. How much is it?" },
            { speaker: "Salumiere", l1: "Due e ottanta all'etto. Quanto ne vuole?", en: "Two eighty per 100g. How much (of it) do you want?" },
            { speaker: "You", l1: "Ne prendo tre etti. E delle olive nere?", en: "I'll take 300g (of it). And some black olives?" },
            { speaker: "Salumiere", l1: "Quante ne vuole?", en: "How many (of them) do you want?" },
            { speaker: "You", l1: "Ne voglio circa un etto.", en: "I want about 100g (of them)." },
            { speaker: "Salumiere", l1: "Ecco. Altro?", en: "Here. Anything else?" },
            { speaker: "You", l1: "No, basta così, grazie.", en: "No, that's enough, thanks." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the 'ne' sentence",
          items: [
            { tokens: ["Ne", "prendo", "mezzo", "chilo", ",", "grazie"], en: "I'll take half a kilo (of it/them), thanks." },
            { tokens: ["Quanti", "ne", "ha", "venduti", "oggi", "?"], en: "How many did you sell today?" },
            { tokens: ["Non", "ne", "ho", "più", ",", "mi", "dispiace"], en: "I don't have any more, sorry." },
            { tokens: ["Cosa", "ne", "pensi", "di", "questo", "vino", "?"], en: "What do you think of this wine?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Do you have apples? Yes, I'll take three (of them).",
          reference: "Hai delle mele? Sì, ne prendo tre.",
          hint: "'Delle mele' = some apples. The reply uses 'ne' instead of repeating 'mele'.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'1 etto' =",
        options: ["10g", "100g", "1kg", "1 liter"],
        correct: 1,
      },
      {
        q: "'500 grams' in conversational Italian =",
        options: ["mezzo chilo", "cinque etti", "Both work", "duecentocinquanta grammi"],
        correct: 2,
      },
      {
        q: "At an outdoor market, you should…",
        options: [
          "pick the fruit yourself",
          "let the vendor pick — and tell them when you'll eat it",
          "ask to taste each one",
          "never speak Italian, only point",
        ],
        correct: 1,
      },
      {
        q: "'Sliced thin' (cured meat) =",
        options: ["tagliato grosso", "tagliato sottile", "tagliato a fette", "tagliato bene"],
        correct: 1,
      },
      {
        q: "'I'll take three of them' =",
        options: ["Prendo tre.", "Ne prendo tre.", "Li prendo tre.", "Tre prendo."],
        correct: 1,
      },
      {
        q: "'Ne' means…",
        options: [
          "'not'",
          "'of it / of them' — replaces a quantity already mentioned",
          "'never'",
          "'we'",
        ],
        correct: 1,
      },
      {
        q: "'What do you think of it?' =",
        options: ["Cosa pensi?", "Cosa ne pensi?", "Cosa ci pensi?", "Cosa lo pensi?"],
        correct: 1,
      },
      {
        q: "'In season' (produce) =",
        options: ["di stagione", "in tempo", "stagionale", "Both A and C work"],
        correct: 3,
      },
      {
        q: "'Half a liter of milk' =",
        options: ["mezzo chilo di latte", "mezzo litro di latte", "un etto di latte", "una bottiglia di latte"],
        correct: 1,
      },
      {
        q: "Translate: 'How much (of it) do you want?'",
        options: [
          "Quanto vuoi?",
          "Quanto ne vuoi?",
          "Quanto lo vuoi?",
          "Quanti vuoi?",
        ],
        correct: 1,
      },
    ],
  },
};
