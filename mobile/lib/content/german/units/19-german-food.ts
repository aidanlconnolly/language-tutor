import type { Unit } from "../../types";

export const UNIT_GERMAN_FOOD: Unit = {
  slug: "german-food",
  stage: 4,
  order: 19,
  icon: "🌭",
  title: "German & regional",
  tagline: "Currywurst, Schnitzel, Brezn, the Berlin Döner, Trinkgeld.",
  badge: "culture",
  lessons: [
    {
      slug: "german-food-classics",
      title: "Classic dishes",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The dishes everyone knows",
          body: [
            "Some dishes are part of German identity. <strong>Currywurst</strong> — sliced sausage in a spiced tomato-curry sauce — is Berlin's iconic snack, sold at <em>Imbiss</em> stands all over the city.",
            "<strong>Schnitzel</strong> is a thin breaded cutlet (the famous <em>Wiener Schnitzel</em> is veal; <em>Schnitzel Wiener Art</em> is the cheaper pork version). <strong>Spätzle</strong> are soft egg noodles from the southwest, often served with cheese as <em>Käsespätzle</em>.",
            "<strong>Brezn</strong> (the Bavarian word for <em>Brezel</em>, pretzel) are everywhere in the south, especially with a <em>Weißwurst</em> breakfast. These regional words matter — see the next lesson.",
          ],
          tip: {
            label: "Currywurst origin",
            body: "<strong>Currywurst</strong> was invented in <em>Berlin</em> in 1949 by Herta Heuwer, who got ketchup and curry powder from British soldiers. There's even a Currywurst museum. It's the ultimate Berlin street food.",
          },
        },
        {
          type: "vocab",
          heading: "Classic German dishes",
          items: [
            { l1: "die Currywurst", en: "curry sausage (Berlin snack)", note: "die" },
            { l1: "das Schnitzel", en: "breaded cutlet", note: "das" },
            { l1: "das Wiener Schnitzel", en: "Viennese schnitzel (veal)", note: "das" },
            { l1: "die Spätzle", en: "soft egg noodles", note: "die (plural); southwest German" },
            { l1: "die Käsespätzle", en: "cheese spätzle", note: "die (plural)" },
            { l1: "die Brezn / die Brezel", en: "pretzel", note: "Brezn = Bavarian, Brezel = standard" },
            { l1: "die Weißwurst", en: "white (veal) sausage", note: "die; Bavarian breakfast" },
            { l1: "der Sauerbraten", en: "marinated pot roast", note: "der" },
            { l1: "die Bratwurst", en: "fried sausage", note: "die" },
            { l1: "das Sauerkraut", en: "fermented cabbage", note: "das" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Know your classics",
          questions: [
            {
              q: "Currywurst was invented in…",
              options: ["Munich", "Berlin", "Hamburg", "Vienna"],
              correct: 1,
            },
            {
              q: "'Wiener Schnitzel' is traditionally made of…",
              options: ["pork", "chicken", "veal", "beef"],
              correct: 2,
            },
            {
              q: "'Spätzle' are…",
              options: ["dumplings", "soft egg noodles", "sausages", "pretzels"],
              correct: 1,
            },
            {
              q: "'Brezn' is the ___ word for pretzel.",
              options: ["Berlin", "Bavarian", "northern", "Austrian only"],
              correct: 1,
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Name the dish",
          items: [
            {
              template: "Ich nehme eine ___ mit Pommes.",
              answer: "Currywurst",
              en: "I'll have a currywurst with fries.",
              options: ["Currywurst", "Spätzle", "Brezn", "Weißwurst"],
            },
            {
              template: "Das ___ ist paniert.",
              answer: "Schnitzel",
              en: "The schnitzel is breaded.",
              options: ["Schnitzel", "Sauerkraut", "Bier", "Brot"],
            },
            {
              template: "___ sind Eiernudeln aus dem Südwesten.",
              answer: "Spätzle",
              en: "Spätzle are egg noodles from the southwest.",
              options: ["Spätzle", "Brötchen", "Garnelen", "Nüsse"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like a currywurst with fries, please.",
          reference: "Ich hätte gern eine Currywurst mit Pommes, bitte.",
          hint: "Currywurst is feminine (eine); 'fries' = Pommes.",
        },
      ],
    },
    {
      slug: "german-food-berlin-street",
      title: "Berlin street food: Döner & Imbiss",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The Berlin Döner",
          body: [
            "The <strong>Döner Kebab</strong> in its modern sandwich form was popularized in <em>Berlin</em> in the 1970s by Turkish immigrants — it's arguably the city's most-eaten food. A <strong>Döner</strong> is grilled meat in flatbread with salad and sauce.",
            "You order at an <strong>Imbiss</strong> — a casual takeaway stand or snack bar. Key choices: the meat, the sauce, and whether you want it <em>mit allem</em> (with everything) or <em>mit scharf</em> (with the spicy sauce).",
            "Other Imbiss staples: <strong>Falafel</strong> (the veggie option), <strong>Pommes</strong> (fries) — ask for them <em>rot-weiß</em> (with ketchup and mayo) — and of course <strong>Currywurst</strong>.",
          ],
          keyPoint:
            "Imbiss = takeaway snack stand. Döner = grilled meat in flatbread. 'Mit allem, mit scharf' = with everything, with spicy sauce.",
        },
        {
          type: "vocab",
          heading: "Street-food vocabulary",
          items: [
            { l1: "der Imbiss", en: "snack stand / takeaway", note: "der" },
            { l1: "der Döner", en: "döner kebab", note: "der; short for Döner Kebab" },
            { l1: "das Fladenbrot", en: "flatbread", note: "das" },
            { l1: "die Falafel", en: "falafel", note: "die; the vegetarian option" },
            { l1: "mit allem", en: "with everything", note: "all the salad & toppings" },
            { l1: "mit scharf", en: "with the spicy sauce", note: "colloquial Berlin phrasing" },
            { l1: "die Soße", en: "sauce", note: "die; also spelled Sauce" },
            { l1: "rot-weiß", en: "with ketchup & mayo (fries)", note: "literally 'red-white'" },
            { l1: "zum Mitnehmen", en: "to take away", note: "" },
            { l1: "scharf", en: "spicy / hot", note: "" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering a Döner",
          setup: "At an Imbiss in Berlin-Kreuzberg.",
          lines: [
            { speaker: "Verkäufer", l1: "Hallo, was möchtest du?", en: "Hi, what would you like?" },
            { speaker: "Du", l1: "Einen Döner, bitte.", en: "A döner, please." },
            { speaker: "Verkäufer", l1: "Mit allem?", en: "With everything?" },
            { speaker: "Du", l1: "Ja, mit allem, aber nicht zu scharf.", en: "Yes, with everything, but not too spicy." },
            { speaker: "Verkäufer", l1: "Zum Hieressen oder zum Mitnehmen?", en: "To eat here or to take away?" },
            { speaker: "Du", l1: "Zum Mitnehmen, bitte. Was macht das?", en: "To take away, please. How much is that?" },
            { speaker: "Verkäufer", l1: "Sechs Euro fünfzig.", en: "Six euros fifty." },
          ],
        },
        {
          type: "fillBlank",
          heading: "At the Imbiss",
          items: [
            {
              template: "Einen Döner ___ allem, bitte.",
              answer: "mit",
              en: "A döner with everything, please.",
              options: ["mit", "ohne", "für", "und"],
            },
            {
              template: "Aber nicht zu ___.",
              answer: "scharf",
              en: "But not too spicy.",
              options: ["scharf", "süß", "kalt", "teuer"],
            },
            {
              template: "Pommes ___, bitte. (ketchup & mayo)",
              answer: "rot-weiß",
              en: "Fries with ketchup and mayo, please.",
              options: ["rot-weiß", "mit allem", "scharf", "ohne"],
            },
            {
              template: "A takeaway snack stand is an ___.",
              answer: "Imbiss",
              en: "Imbiss = snack stand",
              options: ["Imbiss", "Döner", "Soße", "Kneipe"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "A döner with everything, to take away, please.",
          reference: "Einen Döner mit allem, zum Mitnehmen, bitte.",
          hint: "Döner is masculine (einen in the accusative); 'to take away' = zum Mitnehmen.",
        },
      ],
    },
    {
      slug: "german-food-regional-tipping",
      title: "Regional words & tipping etiquette",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "One roll, three names",
          body: [
            "Germany's regions disagree on basic food words. A bread roll is a <strong>Brötchen</strong> in most of the north and standard German, a <strong>Semmel</strong> in Bavaria and Austria, and a <strong>Schrippe</strong> in Berlin.",
            "More splits: minced meat is <em>Hackfleisch</em> (north) vs <em>Faschiertes</em> (Austria); the jam doughnut is a <em>Berliner</em> almost everywhere but a <em>Pfannkuchen</em> in Berlin. Locals love testing you on these.",
            "On <strong>tipping</strong> (<strong>Trinkgeld</strong>): the etiquette from the restaurant unit applies everywhere — round up or add ~5–10%, and tell the server the total <em>as you pay</em>. At an Imbiss or for a quick coffee, rounding up the coins is plenty; tipping isn't obligatory.",
          ],
          tip: {
            label: "Schrippe vs Semmel vs Brötchen",
            body: "Ask for a <em>Schrippe</em> in Munich and you'll get a blank stare; ask for a <em>Semmel</em> in Hamburg, same. The safe, understood-everywhere word is <strong>Brötchen</strong>.",
          },
        },
        {
          type: "vocab",
          heading: "Regional words & tipping",
          items: [
            { l1: "das Brötchen", en: "bread roll (standard / north)", note: "das" },
            { l1: "die Semmel", en: "bread roll (Bavaria / Austria)", note: "die" },
            { l1: "die Schrippe", en: "bread roll (Berlin)", note: "die" },
            { l1: "das Hackfleisch", en: "minced meat (most of Germany)", note: "das" },
            { l1: "der Pfannkuchen", en: "jam doughnut (Berlin) / pancake (elsewhere)", note: "der" },
            { l1: "der Berliner", en: "jam doughnut (most regions)", note: "der" },
            { l1: "das Trinkgeld", en: "tip", note: "das" },
            { l1: "aufrunden", en: "to round up", note: "the usual way to tip" },
            { l1: "Stimmt so", en: "keep the change", note: "" },
            { l1: "Passt so", en: "that's fine / keep it", note: "common alternative" },
          ],
        },
        {
          type: "dialogue",
          heading: "Regional confusion (and a tip)",
          setup: "A Berliner orders at a Munich bakery, then pays.",
          lines: [
            { speaker: "Berliner", l1: "Zwei Schrippen, bitte.", en: "Two rolls, please." },
            { speaker: "Verkäuferin", l1: "Schrippen? Sie meinen Semmeln!", en: "'Schrippen'? You mean Semmeln!" },
            { speaker: "Berliner", l1: "Ach ja, in Bayern heißen sie Semmeln. Zwei Semmeln, bitte.", en: "Oh right, in Bavaria they're called Semmeln. Two rolls, please." },
            { speaker: "Verkäuferin", l1: "Gern. Das macht ein Euro zwanzig.", en: "Sure. That comes to one euro twenty." },
            { speaker: "Berliner", l1: "Eineinhalb. Stimmt so.", en: "One fifty. Keep the change." },
            { speaker: "Verkäuferin", l1: "Danke schön!", en: "Thank you!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Regional & tipping check",
          questions: [
            {
              q: "In Berlin, a bread roll is a…",
              options: ["Semmel", "Schrippe", "Brötchen only", "Pfannkuchen"],
              correct: 1,
            },
            {
              q: "In Bavaria, a bread roll is a…",
              options: ["Schrippe", "Semmel", "Berliner", "Brezn"],
              correct: 1,
            },
            {
              q: "The roll word understood everywhere is…",
              options: ["Schrippe", "Semmel", "Brötchen", "Faschiertes"],
              correct: 2,
            },
            {
              q: "How do you normally tip in Germany?",
              options: [
                "leave 20% on the table",
                "round up / ~5–10%, told to the server as you pay",
                "never tip",
                "tip only with a card",
              ],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Two rolls, please. Keep the change.",
          reference: "Zwei Brötchen, bitte. Stimmt so.",
          hint: "Use the universally understood 'Brötchen'; 'keep the change' = Stimmt so.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "A 'Semmel' is the ___ word for a bread roll.",
              options: ["Berlin", "Bavarian/Austrian", "northern", "standard"],
              correct: 1,
            },
            {
              q: "Which word for 'roll' is understood across all of Germany?",
              options: ["Schrippe", "Semmel", "Brötchen", "Pfannkuchen"],
              correct: 2,
            },
            {
              q: "'Stimmt so' means…",
              options: ["that's wrong", "keep the change", "two more", "the bill, please"],
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
        q: "Currywurst was invented in…",
        options: ["Munich", "Berlin", "Hamburg", "Cologne"],
        correct: 1,
      },
      {
        q: "'Wiener Schnitzel' is traditionally made of…",
        options: ["pork", "chicken", "veal", "beef"],
        correct: 2,
      },
      {
        q: "'Spätzle' are…",
        options: ["sausages", "soft egg noodles", "pretzels", "dumplings"],
        correct: 1,
      },
      {
        q: "An 'Imbiss' is a…",
        options: ["fine-dining restaurant", "takeaway snack stand", "wine bar", "bakery"],
        correct: 1,
      },
      {
        q: "The Döner kebab sandwich was popularized in…",
        options: ["Istanbul", "Berlin", "Frankfurt", "Vienna"],
        correct: 1,
      },
      {
        q: "Ordering a Döner 'mit allem' means…",
        options: ["with everything", "without sauce", "to take away", "extra spicy only"],
        correct: 0,
      },
      {
        q: "In Berlin, a bread roll is called a…",
        options: ["Semmel", "Schrippe", "Brezn", "Berliner"],
        correct: 1,
      },
      {
        q: "In Bavaria, a bread roll is called a…",
        options: ["Schrippe", "Semmel", "Pfannkuchen", "Brötchen only"],
        correct: 1,
      },
      {
        q: "A typical German tip is…",
        options: ["20%", "round up / ~5–10%", "nothing", "the full bill again"],
        correct: 1,
      },
      {
        q: "Translate: 'A döner with everything, to take away, please.'",
        options: [
          "Eine Currywurst mit Pommes, bitte.",
          "Einen Döner mit allem, zum Mitnehmen, bitte.",
          "Zwei Brötchen, bitte. Stimmt so.",
          "Ich hätte gern ein Schnitzel.",
        ],
        correct: 1,
      },
    ],
  },
};
