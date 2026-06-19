import type { Unit } from "../../types";

export const UNIT_MARKET: Unit = {
  slug: "market",
  stage: 6,
  order: 26,
  icon: "🥕",
  title: "Market & supermarket",
  tagline: "Borough Market, 'a pound of…', 'two for one'.",
  badge: "tourist",
  lessons: [
    {
      slug: "market-at-the-market",
      title: "At the market",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Buying fresh food at a market",
          body: [
            "London's <strong>Borough Market</strong> is a famous food market near London Bridge. At a market stall you buy from the <em>stallholder</em>, often by weight or by the piece.",
            "By weight, you ask for <strong>'a pound of apples'</strong> or <strong>'half a kilo of tomatoes'</strong>. To ask the price you say <strong>'How much for…?'</strong> — for example, <em>'How much for a punnet of strawberries?'</em>",
            "A <strong>punnet</strong> is a small basket of soft fruit. <strong>A pound</strong> here means a weight (about 450g), not money — you'll know which one from context.",
          ],
          keyPoint:
            "Market stall = stallholder. 'A pound of apples' (weight). 'How much for…?' A punnet = a small basket of fruit.",
        },
        {
          type: "vocab",
          heading: "At the market",
          intro: "Words you'll hear at a British food market.",
          items: [
            { l1: "a market", en: "a place with many stalls selling goods" },
            { l1: "a stall", en: "a single seller's table or stand" },
            { l1: "the stallholder", en: "the person running the stall" },
            { l1: "fresh", en: "newly picked, not old" },
            { l1: "ripe", en: "ready to eat (of fruit)" },
            { l1: "a pound (of)", en: "a weight, about 450g — also money, but here it's weight" },
            { l1: "half a kilo", en: "500 grams" },
            { l1: "a punnet", en: "a small basket of berries or soft fruit" },
            { l1: "How much for…?", en: "asking the price of an amount" },
            { l1: "That's all, thanks.", en: "saying you've finished ordering" },
          ],
        },
        {
          type: "dialogue",
          heading: "At a fruit stall in Borough Market",
          setup: "You're buying fruit from a stallholder.",
          lines: [
            { speaker: "Stallholder", l1: "Morning! What can I get you?", en: "Friendly 'what would you like?'" },
            { speaker: "You", l1: "Can I have a pound of apples, please?", en: "Asking for apples by weight." },
            { speaker: "Stallholder", l1: "Course. Anything else?", en: "Of course — anything more?" },
            { speaker: "You", l1: "How much for a punnet of strawberries?", en: "Asking the price." },
            { speaker: "Stallholder", l1: "Two fifty, or two punnets for four pounds.", en: "£2.50, or 2 for £4." },
            { speaker: "You", l1: "I'll take two, then. That's all, thanks.", en: "Buying two and finishing." },
            { speaker: "Stallholder", l1: "Lovely. That's six pounds fifty altogether.", en: "£6.50 in total." },
          ],
        },
        {
          type: "tip",
          heading: "Pounds, weights, and a bit of haggling",
          body: "At British markets you'll often hear old <strong>imperial</strong> weights like <em>a pound</em> (lb) and <em>half a pound</em> mixed with metric <em>kilos</em> and <em>grams</em>. Near closing time, stallholders may sell off fruit and veg cheaply, shouting <em>'pound a bowl!'</em> — meaning a whole bowl for £1. Gentle haggling is fine at market stalls, but never in a supermarket.",
          example: { l1: "How much for a bowl of plums? — Pound a bowl, love!", en: "A whole bowl for £1." },
        },
        {
          type: "fillBlank",
          heading: "Fill in the gap",
          intro: "Choose the word that fits at a market stall.",
          items: [
            {
              template: "Can I have a ___ of apples, please?",
              answer: "pound",
              en: "Can I have a pound of apples, please?",
              options: ["pound", "punnet", "piece", "slice"],
            },
            {
              template: "How much ___ a punnet of strawberries?",
              answer: "for",
              en: "How much for a punnet of strawberries?",
              options: ["for", "of", "to", "by"],
            },
            {
              template: "These tomatoes are lovely and ___.",
              answer: "fresh",
              en: "These tomatoes are lovely and fresh.",
              options: ["fresh", "old", "tight", "cheap"],
            },
            {
              template: "That's ___, thanks.",
              answer: "all",
              en: "That's all, thanks. (I've finished ordering.)",
              options: ["all", "much", "fine", "good"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Ask for a pound of apples, then ask the price of a punnet of strawberries.",
          reference: "Can I have a pound of apples, please? How much for a punnet of strawberries?",
          hint: "Use 'a pound of…' for weight and 'How much for…?' for the price.",
        },
      ],
    },
    {
      slug: "market-supermarket",
      title: "The supermarket",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Aisles, offers, and self-checkout",
          body: [
            "In a supermarket, goods are arranged in <strong>aisles</strong> — long rows of shelves. If you're lost, ask <strong>'Which aisle is the milk in?'</strong> or <strong>'Where can I find the bread?'</strong>",
            "Look out for special offers. <strong>'Two for one'</strong> and <strong>'buy one get one free'</strong> (often shortened to <em>BOGOF</em>) both mean you pay for one and get a second free. <strong>'Half price'</strong> means it costs 50% less.",
            "At the end you either go to a staffed <strong>till</strong> or use the <strong>self-checkout</strong>, where you scan items yourself. A common recorded phrase there is <em>'Unexpected item in the bagging area.'</em>",
          ],
          keyPoint:
            "Aisle = a row of shelves. 'Two for one' / 'buy one get one free' = pay for one, get one free. Self-checkout = scan it yourself.",
        },
        {
          type: "vocab",
          heading: "Around the supermarket",
          items: [
            { l1: "an aisle", en: "a row between shelves (the 's' is silent: 'eye-l')" },
            { l1: "a shelf / shelves", en: "where products sit" },
            { l1: "a trolley", en: "the wheeled basket you push" },
            { l1: "a basket", en: "a small hand-carried container" },
            { l1: "the checkout / the till", en: "where you pay" },
            { l1: "self-checkout", en: "a machine where you scan and pay yourself" },
            { l1: "an offer / a deal", en: "a reduced price or special promotion" },
            { l1: "two for one", en: "buy one, get a second free" },
            { l1: "buy one get one free", en: "the same idea, written out (BOGOF)" },
            { l1: "half price", en: "50% off" },
            { l1: "Which aisle is the milk in?", en: "asking where to find something" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking for help in a supermarket",
          setup: "You can't find something and ask a member of staff.",
          lines: [
            { speaker: "You", l1: "Excuse me, which aisle is the milk in?", en: "Asking where the milk is." },
            { speaker: "Staff", l1: "It's in aisle four, just past the bread.", en: "Giving directions." },
            { speaker: "You", l1: "Thanks. Is the orange juice on offer?", en: "Asking about a deal." },
            { speaker: "Staff", l1: "Yes, it's buy one get one free this week.", en: "Confirming the offer." },
            { speaker: "You", l1: "Brilliant. And can I use the self-checkout?", en: "Asking about self-checkout." },
            { speaker: "Staff", l1: "Of course, they're just by the exit.", en: "Pointing them out." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which is right?",
          questions: [
            {
              q: "A long row of shelves in a supermarket is an…",
              options: ["aisle", "alley", "avenue", "arch"],
              correct: 0,
              fb: "'Aisle' is pronounced 'eye-l' — the 's' is silent.",
            },
            {
              q: "'Buy one get one free' means…",
              options: [
                "everything is free",
                "you pay for one and get a second free",
                "the second costs half price",
                "you must buy three",
              ],
              correct: 1,
              fb: "It's the same as 'two for one'.",
            },
            {
              q: "The wheeled cart you push round a supermarket is a…",
              options: ["trolley", "basket", "buggy", "cart"],
              correct: 0,
              fb: "In Britain it's a 'trolley'; Americans say 'cart'.",
            },
            {
              q: "At the self-checkout you…",
              options: [
                "wait for staff to scan everything",
                "scan and pay yourself",
                "pay only with cash",
                "leave without paying",
              ],
              correct: 1,
              fb: "You do the scanning and paying.",
            },
            {
              q: "'Half price' means…",
              options: ["double the price", "50% off", "free", "two items"],
              correct: 1,
              fb: "Half price = it costs 50% less.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Ask which aisle the milk is in, then ask whether it is on offer.",
          reference: "Which aisle is the milk in? Is it on offer?",
          hint: "Use 'which aisle … in?' and 'on offer' for a deal.",
        },
      ],
    },
    {
      slug: "market-quantities-containers",
      title: "Quantities and containers",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "A tin, a loaf, a bunch, a packet",
          body: [
            "When you buy food, you often name the <strong>container</strong> rather than the food itself. You'd say <strong>'a tin of beans'</strong>, not just 'beans'. A <strong>tin</strong> is the British word for a sealed metal can.",
            "Bread comes as a <strong>loaf</strong> (the whole shape) or by the <strong>slice</strong>. Bananas and grapes come in a <strong>bunch</strong>. Crisps and biscuits come in a <strong>packet</strong>.",
            "Other useful ones: <strong>a bottle of</strong> water, <strong>a carton of</strong> juice or milk, <strong>a jar of</strong> jam, and <strong>a bag of</strong> rice.",
          ],
          keyPoint:
            "Container words: a tin of (beans), a loaf of (bread), a bunch of (bananas), a packet of (crisps), a carton of (juice).",
        },
        {
          type: "vocab",
          heading: "Containers and quantities",
          items: [
            { l1: "a tin of", en: "a metal can — 'a tin of beans'" },
            { l1: "a loaf of", en: "a whole shaped bread — 'a loaf of bread'" },
            { l1: "a slice of", en: "a thin cut piece — 'a slice of bread'" },
            { l1: "a bunch of", en: "several joined together — 'a bunch of bananas'" },
            { l1: "a packet of", en: "a sealed paper/plastic pack — 'a packet of crisps'" },
            { l1: "a bottle of", en: "for liquids — 'a bottle of water'" },
            { l1: "a carton of", en: "a cardboard container — 'a carton of milk'" },
            { l1: "a jar of", en: "a glass container — 'a jar of jam'" },
            { l1: "a bag of", en: "a soft container — 'a bag of rice'" },
            { l1: "a box of", en: "a stiff container — 'a box of eggs'" },
          ],
        },
        {
          type: "orderWords",
          heading: "Put the words in order",
          intro: "Tap the words into a natural English shopping phrase.",
          items: [
            { tokens: ["a", "tin", "of", "beans"], en: "a tin of beans" },
            { tokens: ["a", "loaf", "of", "bread"], en: "a loaf of bread" },
            { tokens: ["a", "bunch", "of", "bananas"], en: "a bunch of bananas" },
            { tokens: ["a", "packet", "of", "crisps"], en: "a packet of crisps" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in the container",
          intro: "Choose the correct container word.",
          items: [
            {
              template: "Can I have a ___ of milk, please?",
              answer: "carton",
              en: "Can I have a carton of milk, please?",
              options: ["carton", "loaf", "bunch", "slice"],
            },
            {
              template: "We need a ___ of bread for sandwiches.",
              answer: "loaf",
              en: "We need a loaf of bread for sandwiches.",
              options: ["tin", "loaf", "jar", "packet"],
            },
            {
              template: "He bought a ___ of jam.",
              answer: "jar",
              en: "He bought a jar of jam.",
              options: ["jar", "bunch", "bottle", "carton"],
            },
            {
              template: "I'll grab a ___ of bananas.",
              answer: "bunch",
              en: "I'll grab a bunch of bananas.",
              options: ["slice", "tin", "bunch", "box"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Ask for a tin of beans and a loaf of bread.",
          reference: "Can I have a tin of beans and a loaf of bread, please?",
          hint: "Use the container words: 'a tin of…' and 'a loaf of…'.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "The person running a market stall is the…",
        options: ["stallholder", "cashier", "waiter", "manager"],
        correct: 0,
      },
      {
        q: "'A pound of apples' here means…",
        options: ["apples worth £1", "a weight of apples", "one apple", "a bag of apples"],
        correct: 1,
      },
      {
        q: "A punnet is…",
        options: ["a coin", "a small basket of soft fruit", "a kind of bread", "a market"],
        correct: 1,
      },
      {
        q: "A long row of shelves in a supermarket is an…",
        options: ["aisle", "alley", "arch", "avenue"],
        correct: 0,
      },
      {
        q: "'Two for one' means…",
        options: [
          "buy two, pay double",
          "pay for one, get a second free",
          "two items cost £1",
          "half the price of two",
        ],
        correct: 1,
      },
      {
        q: "The wheeled cart you push round a supermarket is a…",
        options: ["trolley", "basket", "punnet", "tin"],
        correct: 0,
      },
      {
        q: "A British 'tin' is…",
        options: ["a glass jar", "a sealed metal can", "a cardboard box", "a paper bag"],
        correct: 1,
      },
      {
        q: "Bread comes as a whole…",
        options: ["bunch", "loaf", "punnet", "carton"],
        correct: 1,
      },
      {
        q: "Milk usually comes in a…",
        options: ["jar", "carton", "tin", "punnet"],
        correct: 1,
      },
      {
        q: "To ask the price of an amount at a stall you say…",
        options: ["How long for…?", "How much for…?", "How many for…?", "How far for…?"],
        correct: 1,
      },
    ],
  },
};
