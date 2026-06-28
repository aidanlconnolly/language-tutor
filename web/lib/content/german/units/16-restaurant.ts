import type { Unit } from "../../types";

export const UNIT_RESTAURANT: Unit = {
  slug: "restaurant",
  stage: 4,
  order: 16,
  icon: "🍽️",
  title: "At the restaurant",
  tagline: "Bestellen, Ich hätte gern, die Rechnung, getrennt oder zusammen.",
  badge: "tourist",
  lessons: [
    {
      slug: "restaurant-table-menu",
      title: "Getting a table & the Speisekarte",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Finding a seat",
          body: [
            "In most casual German restaurants you can just walk in and pick a table. To ask, say <strong>\"Einen Tisch für zwei, bitte\"</strong> (a table for two). Watch out for a <em>Reserviert</em> (reserved) sign.",
            "The menu is the <strong>Speisekarte</strong> (or just <em>die Karte</em>). The drinks list may be a separate <strong>Getränkekarte</strong>. To ask for it: <strong>\"Die Speisekarte, bitte.\"</strong>",
            "A German custom: it's normal — even friendly — to share a table with strangers at a busy place. If someone asks <em>\"Ist hier noch frei?\"</em> (\"Is this seat free?\"), they want to sit at your table. Answer <em>Ja, bitte</em>.",
          ],
          tip: {
            label: "Ist hier noch frei?",
            body: "Sharing tables (<em>Tisch teilen</em>) is common in beer halls and busy lunch spots. It's not rude — it's efficient. A simple <strong>Ja, bitte</strong> and a nod is all you need.",
          },
        },
        {
          type: "vocab",
          heading: "Restaurant basics",
          items: [
            { l1: "das Restaurant", en: "restaurant", note: "das" },
            { l1: "der Tisch", en: "table", note: "der; ein Tisch für zwei = a table for two" },
            { l1: "die Speisekarte", en: "menu (food)", note: "die; often just 'die Karte'" },
            { l1: "die Getränkekarte", en: "drinks menu", note: "die" },
            { l1: "der Kellner / die Kellnerin", en: "waiter / waitress", note: "der / die" },
            { l1: "die Bedienung", en: "the service / server", note: "die; also used to call the waiter" },
            { l1: "reserviert", en: "reserved", note: "sign on a table" },
            { l1: "Ist hier noch frei?", en: "Is this seat free?", note: "asking to share a table" },
            { l1: "bestellen", en: "to order", note: "Wir möchten bestellen = we'd like to order" },
          ],
        },
        {
          type: "dialogue",
          heading: "Being seated",
          setup: "You arrive at a restaurant in Berlin-Kreuzberg with a friend.",
          lines: [
            { speaker: "Du", l1: "Guten Abend, einen Tisch für zwei, bitte.", en: "Good evening, a table for two, please." },
            { speaker: "Kellner", l1: "Haben Sie reserviert?", en: "Do you have a reservation?" },
            { speaker: "Du", l1: "Nein, leider nicht.", en: "No, unfortunately not." },
            { speaker: "Kellner", l1: "Kein Problem, der Tisch am Fenster ist frei.", en: "No problem, the table by the window is free." },
            { speaker: "Du", l1: "Super. Die Speisekarte, bitte.", en: "Great. The menu, please." },
            { speaker: "Kellner", l1: "Natürlich, ich bringe sie gleich.", en: "Of course, I'll bring it right away." },
          ],
        },
        {
          type: "fillBlank",
          heading: "At the door",
          items: [
            {
              template: "Einen ___ für zwei, bitte.",
              answer: "Tisch",
              en: "A table for two, please.",
              options: ["Tisch", "Stuhl", "Teller", "Löffel"],
            },
            {
              template: "Die ___, bitte.",
              answer: "Speisekarte",
              en: "The menu, please.",
              options: ["Rechnung", "Speisekarte", "Bedienung", "Brezel"],
            },
            {
              template: "Haben Sie ___?",
              answer: "reserviert",
              en: "Do you have a reservation?",
              options: ["bezahlt", "reserviert", "bestellt", "gegessen"],
            },
            {
              template: "Ist hier noch ___?",
              answer: "frei",
              en: "Is this seat free?",
              options: ["frei", "voll", "warm", "teuer"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Good evening, a table for two, please.",
          reference: "Guten Abend, einen Tisch für zwei, bitte.",
          hint: "Tisch is masculine; in the accusative 'a table' = einen Tisch.",
        },
      ],
    },
    {
      slug: "restaurant-ordering",
      title: "Ordering: Vorspeise, Hauptgericht, Nachtisch",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The structure of a meal",
          body: [
            "A German menu is organized by course: <strong>Vorspeise</strong> (starter), <strong>Hauptgericht</strong> (main course), and <strong>Nachtisch</strong> or <strong>Nachspeise</strong> (dessert). Soups (<em>Suppen</em>) often have their own section.",
            "To order, use <strong>\"Ich nehme…\"</strong> (\"I'll have…\") or the polite <strong>\"Ich hätte gern…\"</strong> (\"I'd like…\"). The waiter may start with <em>\"Was möchten Sie trinken?\"</em> (\"What would you like to drink?\").",
            "Watch the article: it changes with the noun's gender after <em>einen/eine/ein</em>. <em>Ich nehme <strong>den</strong> Salat</em> (the salad, masculine), <em>die Suppe</em> (the soup, feminine), <em>das Schnitzel</em> (the schnitzel, neuter).",
          ],
          keyPoint:
            "Vorspeise = starter, Hauptgericht = main, Nachtisch = dessert. Order with 'Ich nehme…' or 'Ich hätte gern…'.",
        },
        {
          type: "vocab",
          heading: "Courses & dishes",
          items: [
            { l1: "die Vorspeise", en: "starter / appetizer", note: "die" },
            { l1: "die Suppe", en: "soup", note: "die" },
            { l1: "das Hauptgericht", en: "main course", note: "das" },
            { l1: "der Nachtisch", en: "dessert", note: "der; also der/die Nachspeise" },
            { l1: "der Salat", en: "salad", note: "der" },
            { l1: "das Schnitzel", en: "schnitzel (breaded cutlet)", note: "das" },
            { l1: "die Beilage", en: "side dish", note: "die; e.g. Pommes, Kartoffeln" },
            { l1: "die Pommes", en: "fries", note: "die (plural); short for Pommes frites" },
            { l1: "Ich nehme…", en: "I'll have…", note: "common way to order" },
            { l1: "Ich hätte gern…", en: "I'd like…", note: "more polite ordering phrase" },
            { l1: "Guten Appetit!", en: "Enjoy your meal!", note: "said before eating" },
          ],
        },
        {
          type: "dialogue",
          heading: "Placing the order",
          setup: "The waiter comes to take your order.",
          lines: [
            { speaker: "Kellner", l1: "Was möchten Sie trinken?", en: "What would you like to drink?" },
            { speaker: "Du", l1: "Ein Wasser und ein Bier, bitte.", en: "A water and a beer, please." },
            { speaker: "Kellner", l1: "Und zu essen?", en: "And to eat?" },
            { speaker: "Du", l1: "Als Vorspeise eine Suppe, und als Hauptgericht nehme ich das Schnitzel.", en: "As a starter a soup, and as a main I'll have the schnitzel." },
            { speaker: "Kellner", l1: "Mit Pommes oder Kartoffeln?", en: "With fries or potatoes?" },
            { speaker: "Du", l1: "Mit Pommes, bitte.", en: "With fries, please." },
            { speaker: "Kellner", l1: "Sehr gern. Guten Appetit später!", en: "Of course. Enjoy your meal later!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the order",
          items: [
            {
              template: "Ich ___ das Schnitzel.",
              answer: "nehme",
              en: "I'll have the schnitzel.",
              options: ["nehme", "gebe", "bringe", "esse"],
            },
            {
              template: "Als ___ eine Suppe, bitte.",
              answer: "Vorspeise",
              en: "As a starter, a soup, please.",
              options: ["Nachtisch", "Vorspeise", "Beilage", "Getränk"],
            },
            {
              template: "Was möchten Sie ___?",
              answer: "trinken",
              en: "What would you like to drink?",
              options: ["essen", "trinken", "zahlen", "bestellen"],
            },
            {
              template: "Mit ___ oder Kartoffeln?",
              answer: "Pommes",
              en: "With fries or potatoes?",
              options: ["Pommes", "Sahne", "Wasser", "Salz"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          items: [
            { tokens: ["Ich", "hätte", "gern", "das", "Schnitzel", "mit", "Pommes"], en: "I'd like the schnitzel with fries." },
            { tokens: ["Als", "Nachtisch", "nehme", "ich", "einen", "Apfelstrudel"], en: "For dessert I'll have an apple strudel." },
            { tokens: ["Was", "möchten", "Sie", "trinken", "?"], en: "What would you like to drink?" },
            { tokens: ["Wir", "möchten", "bestellen", ",", "bitte"], en: "We'd like to order, please." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'll have the soup as a starter and the schnitzel as a main course.",
          reference: "Ich nehme die Suppe als Vorspeise und das Schnitzel als Hauptgericht.",
          hint: "Suppe is feminine (die), Schnitzel is neuter (das).",
        },
      ],
    },
    {
      slug: "restaurant-paying-tipping",
      title: "Paying & tipping",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Asking for the bill and tipping",
          body: [
            "To get the check, catch the server's eye and say <strong>\"Die Rechnung, bitte\"</strong> or <strong>\"Wir möchten zahlen.\"</strong> Again you'll hear <em>\"Zusammen oder getrennt?\"</em>",
            "Tipping (<strong>das Trinkgeld</strong>) is modest in Germany — usually rounding up or about <strong>5–10%</strong>. You don't leave it on the table; instead, you tell the server the total you want to pay <em>as you hand over the money</em>.",
            "The trick: if the bill is €18.50 and you want to pay €20, you say <strong>\"Zwanzig, bitte\"</strong> when handing over a larger note — the server keeps the difference. Or simply say <strong>\"Stimmt so\"</strong> (\"keep the change\").",
          ],
          keyPoint:
            "Tip ~5–10% by telling the server the rounded total as you pay. 'Stimmt so' = keep the change.",
        },
        {
          type: "vocab",
          heading: "Paying & tipping",
          items: [
            { l1: "die Rechnung", en: "the bill / check", note: "die" },
            { l1: "zahlen", en: "to pay", note: "Zahlen, bitte = the bill, please" },
            { l1: "das Trinkgeld", en: "tip", note: "das; literally 'drink-money'" },
            { l1: "Stimmt so", en: "keep the change", note: "said when handing over money" },
            { l1: "zusammen", en: "together (one bill)", note: "" },
            { l1: "getrennt", en: "separately (split)", note: "" },
            { l1: "aufrunden", en: "to round up", note: "common way to tip" },
            { l1: "Das macht…", en: "That comes to…", note: "how the server states the total" },
            { l1: "passt so", en: "that's fine / keep it", note: "alternative to 'stimmt so'" },
          ],
        },
        {
          type: "dialogue",
          heading: "Settling the bill and tipping",
          setup: "You've finished dinner and want to pay. The bill is €27.50.",
          lines: [
            { speaker: "Du", l1: "Die Rechnung, bitte.", en: "The bill, please." },
            { speaker: "Kellnerin", l1: "Zusammen oder getrennt?", en: "Together or separately?" },
            { speaker: "Du", l1: "Zusammen, bitte.", en: "Together, please." },
            { speaker: "Kellnerin", l1: "Das macht siebenundzwanzig Euro fünfzig.", en: "That comes to twenty-seven euros fifty." },
            { speaker: "Du", l1: "Dreißig, bitte. Stimmt so.", en: "Thirty, please. Keep the change." },
            { speaker: "Kellnerin", l1: "Vielen Dank! Einen schönen Abend.", en: "Many thanks! Have a nice evening." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Tipping comprehension",
          questions: [
            {
              q: "Roughly how much do Germans tip in a restaurant?",
              options: ["nothing, ever", "5–10% / round up", "18–20%", "exactly half"],
              correct: 1,
            },
            {
              q: "How do you tip in Germany?",
              options: [
                "leave coins on the table",
                "tell the server the rounded total as you pay",
                "add it to the card machine later",
                "tipping is forbidden",
              ],
              correct: 1,
            },
            {
              q: "The bill is €27.50 and you want to pay €30. You hand over a note and say…",
              options: ["Getrennt, bitte", "Dreißig, stimmt so", "Reserviert", "Guten Appetit"],
              correct: 1,
            },
            {
              q: "How do you ask for the bill?",
              options: ["Die Rechnung, bitte", "Die Speisekarte, bitte", "Ist hier frei?", "Prost!"],
              correct: 0,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The bill, please. Together. Keep the change.",
          reference: "Die Rechnung, bitte. Zusammen. Stimmt so.",
          hint: "'Keep the change' = Stimmt so.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Die Rechnung, bitte' means…",
              options: ["the menu, please", "the bill, please", "the reservation, please", "the table, please"],
              correct: 1,
            },
            {
              q: "A typical German tip is…",
              options: ["20%", "5–10% / rounding up", "nothing", "the full bill again"],
              correct: 1,
            },
            {
              q: "'Stimmt so' means…",
              options: ["that's wrong", "keep the change", "split it", "I'm full"],
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
        q: "How do you ask for a table for two?",
        options: ["Die Rechnung, bitte", "Einen Tisch für zwei, bitte", "Zum Mitnehmen", "Stimmt so"],
        correct: 1,
      },
      {
        q: "The food menu is called the…",
        options: ["Rechnung", "Speisekarte", "Bedienung", "Beilage"],
        correct: 1,
      },
      {
        q: "'Ist hier noch frei?' is someone asking to…",
        options: ["pay the bill", "share your table", "order food", "reserve a table"],
        correct: 1,
      },
      {
        q: "The courses in order are…",
        options: [
          "Nachtisch, Hauptgericht, Vorspeise",
          "Vorspeise, Hauptgericht, Nachtisch",
          "Beilage, Suppe, Salat",
          "Getränk, Rechnung, Trinkgeld",
        ],
        correct: 1,
      },
      {
        q: "Two polite ways to order are 'Ich nehme…' and…",
        options: ["Ich will…", "Ich hätte gern…", "Ich muss…", "Ich bin…"],
        correct: 1,
      },
      {
        q: "'Pommes' are…",
        options: ["potatoes", "fries", "dumplings", "pretzels"],
        correct: 1,
      },
      {
        q: "How do you ask for the bill?",
        options: ["Die Rechnung, bitte", "Die Karte, bitte", "Guten Appetit", "Zum Hieressen"],
        correct: 0,
      },
      {
        q: "A typical restaurant tip in Germany is about…",
        options: ["18–20%", "5–10% / round up", "nothing", "double the bill"],
        correct: 1,
      },
      {
        q: "You pay and want them to keep the change. You say…",
        options: ["Getrennt", "Stimmt so", "Reserviert", "Prost"],
        correct: 1,
      },
      {
        q: "Translate: 'I'll have the schnitzel with fries.'",
        options: [
          "Ich hätte gern die Suppe.",
          "Ich nehme das Schnitzel mit Pommes.",
          "Die Rechnung, bitte.",
          "Einen Tisch für zwei.",
        ],
        correct: 1,
      },
    ],
  },
};
