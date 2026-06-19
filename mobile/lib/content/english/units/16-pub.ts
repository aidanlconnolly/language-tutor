import type { Unit } from "../../types";

export const UNIT_PUB: Unit = {
  slug: "pub",
  stage: 4,
  order: 16,
  icon: "🍺",
  title: "At the pub",
  tagline: "Ordering at the bar, rounds, pub grub, 'what'll you have?'",
  badge: "culture",
  lessons: [
    {
      slug: "pub-ordering-at-bar",
      title: "Ordering at the bar",
      summary: "Pints, halves, and why nobody takes your order at the table.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The pub: you order at the bar",
          body: [
            "The British <strong>pub</strong> (short for 'public house') is the heart of social life. The golden rule: <strong>there is usually no table service for drinks</strong>. You go up to the <strong>bar</strong>, order, pay there and then, and carry your drinks back to your table yourself.",
            "Beer is sold by the <strong>pint</strong> (about 568 ml) or the <strong>half</strong> (a half-pint). A <em>pint of lager</em> or a <em>pint of bitter</em> are classic orders.",
            "When it's your turn, the bartender might catch your eye and say <strong>\"What can I get you?\"</strong> or <strong>\"What'll you have?\"</strong> — there's no formal queue at the bar, but the staff usually remember who arrived first.",
          ],
          keyPoint:
            "No table service — order and pay at the bar. Beer comes by the pint or the half. 'What'll you have?' = your cue to order.",
        },
        {
          type: "vocab",
          heading: "At the bar",
          intro: "Words and phrases you'll need to get a drink.",
          items: [
            { l1: "a pint", en: "a large glass of beer (about 568 ml)" },
            { l1: "a half / a half-pint", en: "half the size of a pint" },
            { l1: "a pint of lager", en: "a pint of light, fizzy beer" },
            { l1: "a pint of bitter", en: "a pint of traditional British ale", note: "Darker, less fizzy than lager." },
            { l1: "an ale", en: "a traditional, often darker beer" },
            { l1: "a cider", en: "an alcoholic apple drink" },
            { l1: "a glass of wine", en: "a glass of wine" },
            { l1: "a soft drink", en: "a non-alcoholic drink" },
            { l1: "on tap / draught", en: "beer poured from the pump, not a bottle", note: "'Draught' is pronounced 'draft'." },
            { l1: "What'll you have?", en: "What would you like to drink?" },
            { l1: "What can I get you?", en: "What would you like? (from the bartender)" },
            { l1: "the bar", en: "the counter where you order drinks" },
          ],
        },
        {
          type: "tip",
          heading: "There's no real queue at the bar",
          body: "Unlike a café, the pub bar has no neat line. You stand at the bar and wait to be noticed. <strong>Don't wave money or shout</strong> — that's frowned upon. Just make eye contact and wait your turn; good bar staff know the order people arrived in. When asked, order clearly and add 'please'.",
          example: { l1: "A pint of lager, please.", en: "I'd like a pint of lager." },
        },
        {
          type: "dialogue",
          heading: "Getting served",
          setup: "You're at the bar in a busy London pub.",
          lines: [
            { speaker: "Bartender", l1: "What can I get you?", en: "What would you like?" },
            { speaker: "You", l1: "A pint of lager and a half of cider, please.", en: "A pint of lager and a half-pint of cider, please." },
            { speaker: "Bartender", l1: "Anything else?", en: "Would you like anything else?" },
            { speaker: "You", l1: "That's it, thanks. How much is that?", en: "That's all, thank you. What's the total?" },
            { speaker: "Bartender", l1: "That's eight pounds twenty.", en: "The total is £8.20." },
            { speaker: "You", l1: "There you go. Cheers.", en: "Here you are. Thank you." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Order a drink",
          intro: "Pick the word that fits a British pub.",
          items: [
            {
              template: "A ___ of bitter, please.",
              answer: "pint",
              en: "A large glass of bitter, please.",
              options: ["pint", "cup", "litre", "mug"],
            },
            {
              template: "Just a ___ for me — I'm driving.",
              answer: "half",
              en: "Just a half-pint for me.",
              options: ["half", "double", "round", "shot"],
            },
            {
              template: "Is the lager on ___ ?",
              answer: "tap",
              en: "Is the lager poured from the pump?",
              options: ["tap", "bottle", "ice", "board"],
            },
            {
              template: "What'll you ___ ?",
              answer: "have",
              en: "What would you like to drink?",
              options: ["have", "take", "get", "do"],
            },
          ],
        },
      ],
    },
    {
      slug: "pub-rounds-etiquette",
      title: "Buying a round & pub etiquette",
      summary: "How rounds work, and 'it's your round'.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The sacred art of the round",
          body: [
            "When you're out with a group, drinks are usually bought in <strong>rounds</strong>: one person buys a drink for everyone, then the next person buys the next round, and so on. Over an evening it roughly evens out.",
            "Skipping your turn is a social crime. <strong>\"It's your round\"</strong> means it's now your turn to buy. <strong>\"What's everyone having?\"</strong> is how you collect the orders before going to the bar.",
            "A friendly toast before drinking is simply <strong>\"Cheers!\"</strong> — which also doubles as 'thank you' and 'goodbye' in casual British speech.",
          ],
          keyPoint:
            "Take turns buying rounds for the whole group. 'It's your round' = your turn to pay. 'Cheers!' = the toast.",
        },
        {
          type: "vocab",
          heading: "Rounds & toasts",
          items: [
            { l1: "a round", en: "drinks bought for the whole group by one person" },
            { l1: "It's your round.", en: "it's your turn to buy the drinks" },
            { l1: "I'll get this one.", en: "I'll pay for this round" },
            { l1: "What's everyone having?", en: "what does each person want to drink?" },
            { l1: "Same again?", en: "would you like the same drink again?" },
            { l1: "Cheers!", en: "a toast before drinking (also 'thanks'/'bye')" },
            { l1: "Bottoms up!", en: "a cheerful toast meaning 'drink up'" },
            { l1: "to get a round in", en: "to buy a round of drinks" },
            { l1: "my shout / your shout", en: "my turn / your turn to pay", note: "Casual." },
            { l1: "Put it on the tab.", en: "add it to a running bill to pay later" },
          ],
        },
        {
          type: "dialogue",
          heading: "Sorting out the round",
          setup: "You're with three friends. The glasses are nearly empty.",
          lines: [
            { speaker: "Friend", l1: "Right, it's my round. What's everyone having?", en: "It's my turn to buy. What does everyone want?" },
            { speaker: "You", l1: "Same again for me, cheers.", en: "The same drink again for me, thanks." },
            { speaker: "Friend", l1: "A pint of lager, yeah?", en: "A pint of lager, correct?" },
            { speaker: "You", l1: "That's the one.", en: "Yes, that's right." },
            { speaker: "Friend", l1: "And you two? Same again?", en: "And you two — the same again?" },
            { speaker: "You", l1: "I'll get the next one in.", en: "I'll buy the next round." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Round etiquette",
          questions: [
            {
              q: "You're out with friends and someone says 'It's your round.' This means…",
              options: [
                "you should leave",
                "it's your turn to buy drinks for the group",
                "you've had too much",
                "the pub is closing",
              ],
              correct: 1,
            },
            {
              q: "What does 'Cheers!' mean in casual British English?",
              options: [
                "only a toast",
                "a toast, but also 'thanks' and 'bye'",
                "an apology",
                "a question",
              ],
              correct: 1,
            },
            {
              q: "Before going to the bar for the group, you ask…",
              options: [
                "'How much money have you got?'",
                "'What's everyone having?'",
                "'Are you leaving?'",
                "'Is this your seat?'",
              ],
              correct: 1,
            },
            {
              q: "Not buying your round when it's your turn is seen as…",
              options: ["normal", "generous", "a bit of a social crime", "clever"],
              correct: 2,
              fb: "Skipping your round is considered mean — the system relies on everyone taking a turn.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Offer to buy this round and ask the group what they want.",
          reference: "I'll get this round. What's everyone having?",
          hint: "Use 'I'll get this round' and then ask 'What's everyone having?'.",
        },
      ],
    },
    {
      slug: "pub-food-last-orders",
      title: "Pub food & last orders",
      summary: "Pub grub, the Sunday roast, and 'last orders'.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Pub grub and closing time",
          body: [
            "Many pubs serve food, fondly called <strong>pub grub</strong>. Classics include <strong>fish and chips</strong>, <strong>bangers and mash</strong> (sausages and mashed potato), and the <strong>Sunday roast</strong> — roast meat, potatoes, vegetables and gravy, served on Sundays.",
            "Unlike drinks, <strong>food is usually ordered at the bar too</strong>: you note your table number, order and pay at the bar, and they bring the food out to you.",
            "Near closing time the staff call <strong>\"Last orders!\"</strong> (often ringing a bell) — your final chance to buy a drink. Then <strong>\"Time, please!\"</strong> means finish up and head home.",
          ],
          keyPoint:
            "Pub grub = fish and chips, bangers and mash, Sunday roast. Order food at the bar with your table number. 'Last orders!' = buy now; 'Time!' = closing.",
        },
        {
          type: "vocab",
          heading: "Pub food & closing",
          items: [
            { l1: "pub grub", en: "informal pub food" },
            { l1: "fish and chips", en: "battered fried fish with chips (fries)" },
            { l1: "bangers and mash", en: "sausages with mashed potato", note: "'Bangers' = sausages." },
            { l1: "a Sunday roast", en: "roast meat, potatoes, veg and gravy on Sundays" },
            { l1: "a ploughman's", en: "a cold plate of cheese, bread and pickle" },
            { l1: "chips", en: "thick-cut fried potatoes (US 'fries')", note: "Not crisps!" },
            { l1: "gravy", en: "a savoury meat sauce" },
            { l1: "the table number", en: "the number you give when ordering food" },
            { l1: "Last orders!", en: "the final chance to buy a drink before closing" },
            { l1: "Time, please!", en: "the pub is closing — finish your drinks" },
            { l1: "a starter", en: "a first course / appetiser" },
            { l1: "a main / main course", en: "the main dish" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering food at the bar",
          setup: "You've grabbed table 12 and gone to the bar to order food.",
          lines: [
            { speaker: "Bartender", l1: "Are you ordering food?", en: "Would you like to order food?" },
            { speaker: "You", l1: "Yes — the fish and chips and the Sunday roast, please. Table twelve.", en: "Yes, fish and chips and a Sunday roast, please. We're at table 12." },
            { speaker: "Bartender", l1: "Lovely. Any drinks with that?", en: "Great. Would you like any drinks too?" },
            { speaker: "You", l1: "Two pints of lager, cheers.", en: "Two pints of lager, thank you." },
            { speaker: "Bartender", l1: "That's twenty-six fifty. We'll bring the food over.", en: "The total is £26.50. We'll bring the food to your table." },
            { speaker: "You", l1: "Brilliant, thanks.", en: "Great, thank you." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in order.",
          items: [
            { tokens: ["Can", "we", "order", "food", "at", "the", "bar", "?"], en: "Can we order food at the bar?" },
            { tokens: ["The", "Sunday", "roast", "for", "table", "five", ",", "please", "."], en: "The Sunday roast for table five, please." },
            { tokens: ["Is", "it", "last", "orders", "yet", "?"], en: "Is it last orders yet?" },
            { tokens: ["Two", "fish", "and", "chips", ",", "please", "."], en: "Two fish and chips, please." },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Bangers and mash' is…",
              options: [
                "fish and chips",
                "sausages with mashed potato",
                "a dessert",
                "a type of beer",
              ],
              correct: 1,
            },
            {
              q: "In most pubs, how do you order food?",
              options: [
                "a waiter takes your order at the table",
                "at the bar, giving your table number",
                "by phone",
                "you can't order food in pubs",
              ],
              correct: 1,
            },
            {
              q: "'Last orders!' means…",
              options: [
                "the kitchen is open",
                "your final chance to buy a drink before closing",
                "the food is ready",
                "the pub just opened",
              ],
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
        q: "In a British pub, where do you order drinks?",
        options: ["at your table", "at the bar", "by app only", "outside"],
        correct: 1,
      },
      {
        q: "A 'pint' is…",
        options: ["a small glass", "a large glass of beer (~568 ml)", "a bottle", "a type of wine"],
        correct: 1,
      },
      {
        q: "'What'll you have?' from the bartender means…",
        options: ["you must leave", "what would you like to drink?", "how will you pay?", "are you old enough?"],
        correct: 1,
      },
      {
        q: "Buying drinks in 'rounds' means…",
        options: [
          "everyone pays for their own",
          "one person buys for the whole group, then it's the next person's turn",
          "the pub pays",
          "you pay at the end",
        ],
        correct: 1,
      },
      {
        q: "'It's your round' means…",
        options: ["it's time to leave", "it's your turn to buy the drinks", "you've won", "the bar is closed"],
        correct: 1,
      },
      {
        q: "In casual British English, 'Cheers!' can mean…",
        options: ["only a toast", "a toast, 'thanks', and 'bye'", "an apology", "a complaint"],
        correct: 1,
      },
      {
        q: "A 'Sunday roast' is…",
        options: [
          "a fried breakfast",
          "roast meat, potatoes, veg and gravy",
          "a dessert",
          "a cocktail",
        ],
        correct: 1,
      },
      {
        q: "In most pubs, food is ordered…",
        options: ["at the bar with your table number", "online", "at a separate restaurant", "by the kitchen door"],
        correct: 0,
      },
      {
        q: "When staff call 'Last orders!', it means…",
        options: ["the kitchen just opened", "buy your final drink before closing", "happy hour starts", "free drinks"],
        correct: 1,
      },
      {
        q: "In a British pub, 'chips' are…",
        options: ["thin crisps in a bag", "thick-cut fried potatoes", "biscuits", "nuts"],
        correct: 1,
      },
    ],
  },
};
