import type { Unit } from "../../types";

export const UNIT_DIET_DRINKS: Unit = {
  slug: "diet-drinks",
  stage: 4,
  order: 18,
  icon: "🍺",
  title: "Drinks & dietary needs",
  tagline: "Ich bin Vegetarier, allergisch gegen…, Bier & Wein, die Kneipe.",
  badge: "tourist",
  lessons: [
    {
      slug: "diet-drinks-dietary",
      title: "Dietary needs & allergies",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Saying what you can and can't eat",
          body: [
            "To state a diet, use <strong>Ich bin…</strong>: <em>Ich bin Vegetarier(in)</em> (I'm vegetarian), <em>Ich bin Veganer(in)</em> (I'm vegan). The <em>-in</em> ending is for women: <em>Vegetarierin</em>, <em>Veganerin</em>.",
            "For allergies: <strong>Ich bin allergisch gegen…</strong> (\"I'm allergic to…\"), followed by the allergen — e.g. <em>gegen Nüsse</em> (to nuts), <em>gegen Gluten</em> (to gluten), <em>gegen Laktose</em> (to lactose).",
            "To check an ingredient, ask <strong>\"Enthält das…?\"</strong> (\"Does this contain…?\") — e.g. <em>Enthält das Nüsse?</em> The verb <strong>enthalten</strong> means \"to contain.\"",
          ],
          keyPoint:
            "Ich bin Vegetarier/Veganer. Ich bin allergisch gegen + allergen. Enthält das…? = Does this contain…?",
        },
        {
          type: "vocab",
          heading: "Diets & allergies",
          items: [
            { l1: "der Vegetarier / die Vegetarierin", en: "vegetarian (m / f)", note: "Ich bin Vegetarier(in)" },
            { l1: "der Veganer / die Veganerin", en: "vegan (m / f)", note: "Ich bin Veganer(in)" },
            { l1: "vegetarisch", en: "vegetarian (adjective)", note: "ein vegetarisches Gericht" },
            { l1: "vegan", en: "vegan (adjective)", note: "" },
            { l1: "allergisch gegen", en: "allergic to", note: "+ accusative: allergisch gegen Nüsse" },
            { l1: "die Allergie", en: "allergy", note: "die, plural die Allergien" },
            { l1: "die Nuss", en: "nut", note: "die, plural die Nüsse" },
            { l1: "das Gluten", en: "gluten", note: "das" },
            { l1: "die Laktose", en: "lactose", note: "die" },
            { l1: "enthalten", en: "to contain", note: "Enthält das…? = Does this contain…?" },
            { l1: "die Zutat", en: "ingredient", note: "die, plural die Zutaten" },
          ],
        },
        {
          type: "dialogue",
          heading: "Checking the menu",
          setup: "You're ordering and have a nut allergy.",
          lines: [
            { speaker: "Du", l1: "Ich bin allergisch gegen Nüsse. Enthält der Salat Nüsse?", en: "I'm allergic to nuts. Does the salad contain nuts?" },
            { speaker: "Kellner", l1: "Moment, ich frage in der Küche.", en: "One moment, I'll ask in the kitchen." },
            { speaker: "Kellner", l1: "Nein, der Salat ist ohne Nüsse.", en: "No, the salad is without nuts." },
            { speaker: "Du", l1: "Super. Und haben Sie ein vegetarisches Hauptgericht?", en: "Great. And do you have a vegetarian main course?" },
            { speaker: "Kellner", l1: "Ja, die Gemüsepfanne ist vegetarisch.", en: "Yes, the vegetable stir-fry is vegetarian." },
            { speaker: "Du", l1: "Perfekt, die nehme ich.", en: "Perfect, I'll have that." },
          ],
        },
        {
          type: "fillBlank",
          heading: "State your needs",
          items: [
            {
              template: "Ich bin ___ gegen Nüsse.",
              answer: "allergisch",
              en: "I'm allergic to nuts.",
              options: ["allergisch", "vegetarisch", "lecker", "scharf"],
            },
            {
              template: "Ich bin ___. Ich esse kein Fleisch.",
              answer: "Vegetarier",
              en: "I'm vegetarian. I don't eat meat.",
              options: ["Veganer", "Vegetarier", "Allergie", "Kellner"],
            },
            {
              template: "___ das Gluten?",
              answer: "Enthält",
              en: "Does this contain gluten?",
              options: ["Enthält", "Kostet", "Bringt", "Isst"],
            },
            {
              template: "Haben Sie ein ___ Gericht?",
              answer: "vegetarisches",
              en: "Do you have a vegetarian dish?",
              options: ["vegetarisches", "salziges", "kaltes", "teures"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm vegan. Does this contain milk?",
          reference: "Ich bin Veganer. Enthält das Milch?",
          hint: "Use 'Veganerin' if you're female. 'Enthält das…?' = Does this contain…?",
        },
      ],
    },
    {
      slug: "diet-drinks-water-beer-wine",
      title: "Water culture, Bier & Wein",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Water in Germany is fizzy by default",
          body: [
            "Order \"a water\" in Germany and you'll get <strong>sparkling</strong>. Specify: <strong>Wasser mit Kohlensäure</strong> (with carbonation / fizzy) or <strong>Wasser ohne Kohlensäure</strong> (still). \"Still\" water may be labeled <em>still</em> or <em>ohne</em>.",
            "Tap water is <strong>Leitungswasser</strong>. Germans rarely drink it in restaurants, and asking for it free can get a puzzled look — bottled water is the norm and you usually pay for it.",
            "Germany is famous for <strong>Bier</strong> (beer) and <strong>Wein</strong> (wine). Beer comes in many styles: <em>Pils</em>, <em>Weizen</em> (wheat beer), <em>Helles</em>, <em>Dunkles</em> (dark). Wine: <em>Weißwein</em> (white), <em>Rotwein</em> (red).",
          ],
          tip: {
            label: "Leitungswasser",
            body: "If you do want tap water, ask <em>\"Ein Glas Leitungswasser, bitte\"</em> — but don't be surprised if it's not offered, or if there's a small charge. Bottled <em>Mineralwasser</em> is the default.",
          },
        },
        {
          type: "vocab",
          heading: "Drinks",
          items: [
            { l1: "das Wasser", en: "water", note: "das" },
            { l1: "das Mineralwasser", en: "(bottled) mineral water", note: "das" },
            { l1: "mit Kohlensäure", en: "sparkling / carbonated", note: "literally 'with carbonic acid'" },
            { l1: "ohne Kohlensäure", en: "still / non-carbonated", note: "" },
            { l1: "das Leitungswasser", en: "tap water", note: "das" },
            { l1: "das Bier", en: "beer", note: "das, plural die Biere" },
            { l1: "das Pils", en: "pilsner", note: "das; the most common lager" },
            { l1: "das Weizen / Weißbier", en: "wheat beer", note: "das; Bavarian favorite" },
            { l1: "der Wein", en: "wine", note: "der" },
            { l1: "der Weißwein", en: "white wine", note: "der" },
            { l1: "der Rotwein", en: "red wine", note: "der" },
            { l1: "die Schorle", en: "juice/wine mixed with sparkling water", note: "die; Apfelschorle is hugely popular" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering drinks",
          setup: "The waiter asks what you'd like to drink.",
          lines: [
            { speaker: "Kellner", l1: "Was möchten Sie trinken?", en: "What would you like to drink?" },
            { speaker: "Du", l1: "Ein Wasser ohne Kohlensäure und ein Pils, bitte.", en: "A still water and a pilsner, please." },
            { speaker: "Kellner", l1: "Gern. Welche Größe beim Bier?", en: "Sure. What size for the beer?" },
            { speaker: "Du", l1: "Ein Großes, bitte.", en: "A large one, please." },
            { speaker: "Kellner", l1: "Und für Sie?", en: "And for you?" },
            { speaker: "Du", l1: "Eine Apfelschorle, bitte.", en: "An apple spritzer, please." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Order your drink",
          items: [
            {
              template: "Ein Wasser ___ Kohlensäure, bitte.",
              answer: "ohne",
              en: "A still water, please.",
              options: ["mit", "ohne", "und", "für"],
            },
            {
              template: "Ein ___, bitte. (a pilsner)",
              answer: "Pils",
              en: "A pilsner, please.",
              options: ["Pils", "Wein", "Wasser", "Tee"],
            },
            {
              template: "Tap water is called ___.",
              answer: "Leitungswasser",
              en: "tap water",
              options: ["Mineralwasser", "Leitungswasser", "Weißbier", "Schorle"],
            },
            {
              template: "Ein Glas ___, bitte. (red wine)",
              answer: "Rotwein",
              en: "A glass of red wine, please.",
              options: ["Weißwein", "Rotwein", "Weizen", "Schorle"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "A still water and a glass of white wine, please.",
          reference: "Ein Wasser ohne Kohlensäure und ein Glas Weißwein, bitte.",
          hint: "'still' = ohne Kohlensäure; 'glass of' = ein Glas.",
        },
      ],
    },
    {
      slug: "diet-drinks-kneipe",
      title: "In der Kneipe & Prost!",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The neighborhood pub",
          body: [
            "A <strong>Kneipe</strong> is a casual German pub — the place to drink beer, chat, and watch football. Berlin is full of them, from cozy <em>Eckkneipen</em> (corner pubs) to lively bars.",
            "When you toast, you say <strong>Prost!</strong> (\"Cheers!\") or <strong>Zum Wohl!</strong> (\"To your health!\"). Make <strong>eye contact</strong> while clinking glasses — Germans take this seriously; looking away is said to bring bad luck.",
            "To order a round for the table: <strong>\"Eine Runde Bier für alle, bitte\"</strong> (a round of beer for everyone). The person who offers usually pays. You pay at the end, and you can run a <em>Deckel</em> (tab).",
          ],
          tip: {
            label: "Eye contact",
            body: "When clinking glasses, look the other person in the eye and say their toast back. Skipping eye contact is a small but real faux pas in German drinking culture (and, the joke goes, brings seven years of bad luck).",
          },
        },
        {
          type: "vocab",
          heading: "At the Kneipe",
          items: [
            { l1: "die Kneipe", en: "pub / bar", note: "die, plural die Kneipen" },
            { l1: "die Eckkneipe", en: "corner pub", note: "die; a beloved local institution" },
            { l1: "die Runde", en: "round (of drinks)", note: "die; eine Runde = a round" },
            { l1: "Prost!", en: "Cheers!", note: "the standard toast" },
            { l1: "Zum Wohl!", en: "To your health! / Cheers!", note: "slightly more formal toast" },
            { l1: "anstoßen", en: "to clink glasses / toast", note: "Wir stoßen an = we make a toast" },
            { l1: "der Deckel", en: "the tab / bill", note: "der; running tab at the bar" },
            { l1: "Noch ein Bier, bitte", en: "Another beer, please", note: "noch ein = another" },
            { l1: "ein Großes / ein Kleines", en: "a large one / a small one", note: "beer sizes" },
          ],
        },
        {
          type: "dialogue",
          heading: "A round in the Kneipe",
          setup: "You're out with friends in a Berlin Eckkneipe.",
          lines: [
            { speaker: "Du", l1: "Eine Runde Bier für alle, bitte!", en: "A round of beer for everyone, please!" },
            { speaker: "Wirt", l1: "Vier Pils, kommt sofort.", en: "Four pilsners, coming right up." },
            { speaker: "Du", l1: "Danke! Prost, zusammen!", en: "Thanks! Cheers, everyone!" },
            { speaker: "Freunde", l1: "Prost!", en: "Cheers!" },
            { speaker: "Du", l1: "Später noch eine Runde?", en: "Another round later?" },
            { speaker: "Freund", l1: "Klar! Aber dann zahle ich.", en: "Sure! But then I'll pay." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["Eine", "Runde", "Bier", "für", "alle", ",", "bitte"], en: "A round of beer for everyone, please." },
            { tokens: ["Noch", "ein", "Bier", ",", "bitte"], en: "Another beer, please." },
            { tokens: ["Prost", ",", "zusammen", "!"], en: "Cheers, everyone!" },
            { tokens: ["Wir", "zahlen", "den", "Deckel", "später"], alts: [["Wir", "zahlen", "später", "den", "Deckel"]], en: "We'll pay the tab later." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Another beer, please. Cheers!",
          reference: "Noch ein Bier, bitte. Prost!",
          hint: "'Another' = noch ein; 'Cheers!' = Prost!",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "A 'Kneipe' is a…",
              options: ["bakery", "pub / bar", "restaurant", "café"],
              correct: 1,
            },
            {
              q: "The standard German toast is…",
              options: ["Guten Appetit!", "Prost!", "Stimmt so!", "Bitte schön!"],
              correct: 1,
            },
            {
              q: "While clinking glasses, you should…",
              options: ["look away", "make eye contact", "close your eyes", "stay silent"],
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
        q: "How do you say 'I'm vegetarian'?",
        options: ["Ich bin allergisch", "Ich bin Vegetarier", "Ich esse Fleisch", "Ich bin Veganer"],
        correct: 1,
      },
      {
        q: "'Ich bin allergisch gegen Nüsse' means…",
        options: ["I love nuts", "I'm allergic to nuts", "I don't eat nuts on principle", "Nuts are expensive"],
        correct: 1,
      },
      {
        q: "'Enthält das…?' is asking…",
        options: ["How much is this?", "Does this contain…?", "Is this fresh?", "Can I order this?"],
        correct: 1,
      },
      {
        q: "If you just order 'a water', you'll usually get…",
        options: ["still water", "sparkling water", "tap water", "hot water"],
        correct: 1,
      },
      {
        q: "'Wasser ohne Kohlensäure' is…",
        options: ["sparkling water", "still water", "tap water", "tonic water"],
        correct: 1,
      },
      {
        q: "Tap water in German is…",
        options: ["Mineralwasser", "Leitungswasser", "Schorle", "Weißbier"],
        correct: 1,
      },
      {
        q: "'Weizen' / 'Weißbier' is a…",
        options: ["white wine", "wheat beer", "pilsner", "dark beer"],
        correct: 1,
      },
      {
        q: "A casual German pub is a…",
        options: ["Bäckerei", "Kneipe", "Speisekarte", "Schorle"],
        correct: 1,
      },
      {
        q: "When you toast in Germany, you say 'Prost!' and you should…",
        options: ["look away", "make eye contact", "drink immediately", "stand up"],
        correct: 1,
      },
      {
        q: "Translate: 'A round of beer for everyone, please.'",
        options: [
          "Ein Wasser ohne Kohlensäure, bitte.",
          "Eine Runde Bier für alle, bitte.",
          "Noch ein Bier, bitte.",
          "Ich bin allergisch gegen Bier.",
        ],
        correct: 1,
      },
    ],
  },
};
