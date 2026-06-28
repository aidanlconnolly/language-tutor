import type { Unit } from "../../types";

export const UNIT_CAFE: Unit = {
  slug: "cafe",
  stage: 4,
  order: 15,
  icon: "☕",
  title: "Café & bakery",
  tagline: "Kaffee und Kuchen, the Bäckerei, zum Mitnehmen.",
  badge: "tourist",
  lessons: [
    {
      slug: "cafe-coffee-cake",
      title: "Kaffee und Kuchen",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The afternoon coffee-and-cake ritual",
          body: [
            "<strong>Kaffee und Kuchen</strong> is a beloved German institution — the afternoon (around 3–4pm) pause for coffee and a slice of cake. Weekends especially, families gather in a <em>Café</em> or at home for it.",
            "To order politely, the magic phrase is <strong>Ich hätte gern…</strong> (\"I would like…\"). It's softer and more polite than <em>Ich will</em> (\"I want\"). You'll also hear <strong>Ich nehme…</strong> (\"I'll take/have…\").",
            "Cakes are usually ordered as <em>ein Stück</em> (a piece): <strong>ein Stück Kuchen</strong> or <strong>ein Stück Torte</strong>. A <em>Torte</em> is a richer, layered cake; <em>Kuchen</em> is the everyday word for cake.",
          ],
          tip: {
            label: "Hätte gern",
            body: "<em>Ich hätte gern</em> literally means \"I would have gladly\" — it's the Konjunktiv (subjunctive) of <em>haben</em>. You don't need to understand the grammar yet; just memorize it as the polite way to order anything.",
          },
        },
        {
          type: "vocab",
          heading: "Hot drinks & cake",
          items: [
            { l1: "der Kaffee", en: "coffee", note: "der; ein Kaffee = a (cup of) coffee" },
            { l1: "der Espresso", en: "espresso", note: "der" },
            { l1: "der Cappuccino", en: "cappuccino", note: "der" },
            { l1: "der Milchkaffee", en: "café au lait (coffee with lots of milk)", note: "der" },
            { l1: "der Tee", en: "tea", note: "der" },
            { l1: "die heiße Schokolade", en: "hot chocolate", note: "die" },
            { l1: "der Kuchen", en: "cake", note: "der; plural die Kuchen (unchanged)" },
            { l1: "die Torte", en: "(layered) gateau", note: "die, plural die Torten" },
            { l1: "der Apfelstrudel", en: "apple strudel", note: "der" },
            { l1: "der Käsekuchen", en: "cheesecake", note: "der" },
            { l1: "die Sahne", en: "(whipped) cream", note: "die; mit Sahne = with cream" },
            { l1: "ein Stück", en: "a piece / slice", note: "ein Stück Kuchen = a slice of cake" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering coffee and cake",
          setup: "You sit down at a café table in Berlin-Prenzlauer Berg on a Sunday afternoon.",
          lines: [
            { speaker: "Kellnerin", l1: "Guten Tag! Was darf es sein?", en: "Hello! What can I get you?" },
            { speaker: "Du", l1: "Ich hätte gern einen Kaffee, bitte.", en: "I'd like a coffee, please." },
            { speaker: "Kellnerin", l1: "Gerne. Und etwas dazu?", en: "Sure. And anything with that?" },
            { speaker: "Du", l1: "Ja, ein Stück Apfelstrudel mit Sahne.", en: "Yes, a piece of apple strudel with cream." },
            { speaker: "Kellnerin", l1: "Sehr gern. Kommt sofort.", en: "Of course. Coming right up." },
            { speaker: "Du", l1: "Danke schön!", en: "Thank you!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Order it politely",
          items: [
            {
              template: "Ich ___ gern einen Kaffee.",
              answer: "hätte",
              en: "I'd like a coffee.",
              options: ["habe", "hätte", "bin", "will"],
            },
            {
              template: "Ein ___ Käsekuchen, bitte.",
              answer: "Stück",
              en: "A piece of cheesecake, please.",
              options: ["Glas", "Stück", "Tasse", "Liter"],
            },
            {
              template: "Einen Cappuccino mit ___, bitte.",
              answer: "Sahne",
              en: "A cappuccino with cream, please.",
              options: ["Wasser", "Sahne", "Brot", "Salz"],
            },
            {
              template: "Was ___ es sein?",
              answer: "darf",
              en: "What can I get you? (lit. what may it be?)",
              options: ["darf", "ist", "hat", "kann"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like a coffee and a piece of cake, please.",
          reference: "Ich hätte gern einen Kaffee und ein Stück Kuchen, bitte.",
          hint: "Kaffee is masculine (einen in the accusative); Stück is neuter (ein).",
        },
      ],
    },
    {
      slug: "cafe-baeckerei",
      title: "Die Bäckerei: Brötchen & Brezel",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Germany runs on its bakeries",
          body: [
            "The <strong>Bäckerei</strong> (bakery) is everywhere in Germany — most people buy fresh <em>Brötchen</em> (bread rolls) for breakfast. Many bakeries also have a counter for coffee and a quick bite.",
            "When you order to go, the key question is <strong>\"Zum Hieressen oder zum Mitnehmen?\"</strong> — \"To eat here or to take away?\" Answer <em>Zum Mitnehmen, bitte</em> (to go) or <em>Zum Hieressen</em> (to have here).",
            "A <strong>Brezel</strong> (pretzel) — called <em>Brezn</em> in Bavaria — is a classic snack. Rolls come in many forms: a plain <em>Brötchen</em>, a <em>Vollkornbrötchen</em> (wholegrain), or a seeded <em>Mehrkornbrötchen</em>.",
          ],
          keyPoint:
            "Zum Hieressen = to eat in. Zum Mitnehmen = to take away. You'll hear this question at every counter.",
        },
        {
          type: "vocab",
          heading: "At the bakery",
          items: [
            { l1: "die Bäckerei", en: "bakery", note: "die" },
            { l1: "das Brötchen", en: "bread roll", note: "das; plural die Brötchen (unchanged)" },
            { l1: "das Brot", en: "bread (a loaf)", note: "das; plural die Brote" },
            { l1: "die Brezel", en: "pretzel", note: "die; Bavarian: die Brezn" },
            { l1: "das Croissant", en: "croissant", note: "das" },
            { l1: "das Franzbrötchen", en: "cinnamon pastry (Hamburg specialty)", note: "das" },
            { l1: "der Berliner", en: "jam doughnut", note: "der; called Pfannkuchen in Berlin!" },
            { l1: "das belegte Brötchen", en: "a filled roll (with topping)", note: "das" },
            { l1: "zum Hieressen", en: "to eat here", note: "answer to the counter question" },
            { l1: "zum Mitnehmen", en: "to take away / to go", note: "literally 'to take-with'" },
          ],
        },
        {
          type: "tip",
          heading: "A Berliner in Berlin is a Pfannkuchen",
          body: "The jam-filled doughnut is called a <strong>Berliner</strong> in most of Germany — but in Berlin itself (and the east), it's a <strong>Pfannkuchen</strong>. Confusingly, <em>Pfannkuchen</em> means \"pancake\" elsewhere. Regional bakery words are a running theme in Germany.",
          example: { l1: "Einen Pfannkuchen, bitte. — Zum Mitnehmen?", en: "A jam doughnut, please. — To go?" },
        },
        {
          type: "dialogue",
          heading: "At the bakery counter",
          setup: "Morning rush at a Berlin Bäckerei.",
          lines: [
            { speaker: "Verkäufer", l1: "Guten Morgen, was möchten Sie?", en: "Good morning, what would you like?" },
            { speaker: "Du", l1: "Zwei Brötchen und eine Brezel, bitte.", en: "Two rolls and a pretzel, please." },
            { speaker: "Verkäufer", l1: "Gern. Sonst noch etwas?", en: "Sure. Anything else?" },
            { speaker: "Du", l1: "Einen Kaffee, bitte.", en: "A coffee, please." },
            { speaker: "Verkäufer", l1: "Zum Hieressen oder zum Mitnehmen?", en: "To eat here or to take away?" },
            { speaker: "Du", l1: "Zum Mitnehmen, bitte.", en: "To go, please." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["Zwei", "Brötchen", "und", "eine", "Brezel", ",", "bitte"], en: "Two rolls and a pretzel, please." },
            { tokens: ["Zum", "Mitnehmen", ",", "bitte"], en: "To go, please." },
            { tokens: ["Ich", "hätte", "gern", "ein", "belegtes", "Brötchen"], en: "I'd like a filled roll." },
            { tokens: ["Sonst", "noch", "etwas", "?"], en: "Anything else?" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "What does the counter question 'Zum Hieressen oder zum Mitnehmen?' ask?",
              options: ["Cash or card?", "Eat here or take away?", "Small or large?", "With or without sugar?"],
              correct: 1,
            },
            {
              q: "How do you say 'to go / take away'?",
              options: ["zum Hieressen", "zum Wohl", "zum Mitnehmen", "zum Glück"],
              correct: 2,
            },
            {
              q: "In Berlin, a jam-filled doughnut is called a…",
              options: ["Berliner", "Pfannkuchen", "Brezel", "Croissant"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "cafe-paying",
      title: "Paying: zusammen oder getrennt & cash",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "Germany is still a cash country",
          body: [
            "Many German cafés and bakeries take <strong>only cash</strong> — you'll see a sign reading <em>Nur Bargeld</em> (\"cash only\"). Always carry some euros; don't assume a card will work, especially in small or older places.",
            "When you pay as a group, the server asks <strong>\"Zusammen oder getrennt?\"</strong> — \"Together or separately?\" Answer <em>Zusammen</em> (all on one bill) or <em>Getrennt</em> (split, everyone pays their own).",
            "To get the bill, say <strong>\"Zahlen, bitte\"</strong> or <strong>\"Ich möchte zahlen.\"</strong> You typically pay the server at the table — you don't go to a register.",
          ],
          keyPoint:
            "Zusammen = one bill. Getrennt = split. Nur Bargeld = cash only. Pay at the table, not a register.",
        },
        {
          type: "vocab",
          heading: "Paying vocabulary",
          items: [
            { l1: "zahlen", en: "to pay", note: "Zahlen, bitte! = The bill, please!" },
            { l1: "bezahlen", en: "to pay (for)", note: "Ich möchte bezahlen = I'd like to pay" },
            { l1: "die Rechnung", en: "the bill / check", note: "die" },
            { l1: "das Bargeld", en: "cash", note: "das; Nur Bargeld = cash only" },
            { l1: "die Karte", en: "card", note: "die; Kann ich mit Karte zahlen? = Can I pay by card?" },
            { l1: "zusammen", en: "together (one bill)", note: "answer to 'zusammen oder getrennt?'" },
            { l1: "getrennt", en: "separately (split bill)", note: "everyone pays their own" },
            { l1: "das Trinkgeld", en: "tip", note: "das; usually round up ~5–10%" },
            { l1: "Stimmt so", en: "keep the change", note: "say it when handing over money" },
          ],
        },
        {
          type: "dialogue",
          heading: "Settling up for two",
          setup: "You and a friend finish your coffee and want to pay.",
          lines: [
            { speaker: "Du", l1: "Wir möchten zahlen, bitte.", en: "We'd like to pay, please." },
            { speaker: "Kellner", l1: "Gern. Zusammen oder getrennt?", en: "Sure. Together or separately?" },
            { speaker: "Du", l1: "Zusammen, bitte.", en: "Together, please." },
            { speaker: "Kellner", l1: "Das macht neun Euro fünfzig.", en: "That comes to nine euros fifty." },
            { speaker: "Du", l1: "Zehn Euro. Stimmt so.", en: "Ten euros. Keep the change." },
            { speaker: "Kellner", l1: "Vielen Dank! Schönen Tag noch.", en: "Many thanks! Have a nice day." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Paying comprehension",
          questions: [
            {
              q: "The server asks 'Zusammen oder getrennt?'. You want one shared bill. You say…",
              options: ["Getrennt", "Zusammen", "Bargeld", "Stimmt so"],
              correct: 1,
            },
            {
              q: "A sign says 'Nur Bargeld'. That means…",
              options: ["card only", "cash only", "no tipping", "exact change only"],
              correct: 1,
            },
            {
              q: "You hand over a ten for a 9.50 bill and want them to keep the change. You say…",
              options: ["Getrennt, bitte", "Zahlen, bitte", "Stimmt so", "Zum Mitnehmen"],
              correct: 2,
            },
            {
              q: "How do you ask for the bill?",
              options: ["Zahlen, bitte", "Getrennt, bitte", "Prost!", "Zum Hieressen"],
              correct: 0,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "We'd like to pay, separately please.",
          reference: "Wir möchten zahlen, getrennt bitte.",
          hint: "'We'd like' = Wir möchten; 'separately' = getrennt.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Zusammen oder getrennt?' asks whether you want to…",
              options: ["eat in or take away", "pay together or split", "pay cash or card", "have a small or large"],
              correct: 1,
            },
            {
              q: "What should you always carry in German cafés?",
              options: ["a credit card", "cash (Bargeld)", "a passport", "exact change only"],
              correct: 1,
            },
            {
              q: "Translate: 'I'd like to pay.'",
              options: ["Ich möchte essen.", "Ich möchte zahlen.", "Ich hätte gern Kaffee.", "Ich bin getrennt."],
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
        q: "The polite way to order ('I would like…') is…",
        options: ["Ich will", "Ich hätte gern", "Ich muss", "Ich darf"],
        correct: 1,
      },
      {
        q: "'Kaffee und Kuchen' is a German ritual that happens…",
        options: ["at breakfast", "late morning", "in the afternoon (~3–4pm)", "after dinner"],
        correct: 2,
      },
      {
        q: "A slice of cake is 'ein ___ Kuchen'.",
        options: ["Glas", "Stück", "Tasse", "Liter"],
        correct: 1,
      },
      {
        q: "At the bakery counter, 'Zum Hieressen oder zum Mitnehmen?' means…",
        options: ["cash or card?", "eat here or take away?", "with or without cream?", "one or two?"],
        correct: 1,
      },
      {
        q: "In Berlin, the jam doughnut is called a…",
        options: ["Berliner", "Pfannkuchen", "Brezel", "Croissant"],
        correct: 1,
      },
      {
        q: "A 'Brezel' is a…",
        options: ["roll", "pretzel", "doughnut", "loaf"],
        correct: 1,
      },
      {
        q: "A sign 'Nur Bargeld' means the café takes…",
        options: ["card only", "cash only", "vouchers", "no tips"],
        correct: 1,
      },
      {
        q: "The server asks 'Zusammen oder getrennt?'. To split the bill you say…",
        options: ["Zusammen", "Getrennt", "Stimmt so", "Zum Mitnehmen"],
        correct: 1,
      },
      {
        q: "'Stimmt so' means…",
        options: ["the bill, please", "keep the change", "separately", "together"],
        correct: 1,
      },
      {
        q: "Translate: 'I'd like a coffee, please.'",
        options: [
          "Ich will Kaffee.",
          "Ich hätte gern einen Kaffee, bitte.",
          "Ein Kaffee zum Mitnehmen.",
          "Ich möchte zahlen.",
        ],
        correct: 1,
      },
    ],
  },
};
