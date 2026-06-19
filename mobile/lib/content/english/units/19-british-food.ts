import type { Unit } from "../../types";

export const UNIT_BRITISH_FOOD: Unit = {
  slug: "british-food",
  stage: 4,
  order: 19,
  icon: "🍟",
  title: "British & regional",
  tagline: "Fish & chips, the Sunday roast, the curry house, tipping.",
  badge: "culture",
  lessons: [
    {
      slug: "british-food-classics",
      title: "Classic British dishes",
      summary: "Fish and chips, bangers and mash, and the Sunday roast.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The dishes Britain is known for",
          body: [
            "<strong>Fish and chips</strong> is the most iconic British meal: battered fried fish (usually cod or haddock) with thick <em>chips</em>. You buy it from a <strong>chippy</strong> (fish-and-chip shop), often to take away, with salt and vinegar on top.",
            "<strong>Bangers and mash</strong> is sausages on a pile of mashed potato with <em>onion gravy</em>. Comfort food at its finest.",
            "The <strong>Sunday roast</strong> is a weekend institution: roast meat (beef, chicken or lamb), <em>roast potatoes</em>, vegetables, <em>Yorkshire pudding</em> (a savoury baked batter) and lots of <strong>gravy</strong>.",
          ],
          keyPoint:
            "Fish and chips from the 'chippy' with salt and vinegar. Bangers and mash with onion gravy. Sunday roast = roast meat, veg, Yorkshire pud and gravy.",
        },
        {
          type: "vocab",
          heading: "Classic dishes",
          items: [
            { l1: "fish and chips", en: "battered fried fish with thick chips" },
            { l1: "a chippy", en: "a fish-and-chip shop", note: "Informal." },
            { l1: "salt and vinegar", en: "the classic topping for chips" },
            { l1: "mushy peas", en: "soft, mashed green peas (a chippy side)" },
            { l1: "bangers and mash", en: "sausages with mashed potato" },
            { l1: "onion gravy", en: "gravy with onions, served on bangers and mash" },
            { l1: "a Sunday roast", en: "the weekend roast-meat dinner" },
            { l1: "Yorkshire pudding", en: "a savoury baked batter served with roast beef" },
            { l1: "roast potatoes / roasties", en: "potatoes roasted crisp in fat" },
            { l1: "a pie", en: "a baked dish with a pastry crust", note: "e.g. steak and ale pie." },
            { l1: "a pasty", en: "a folded pastry filled with meat and veg" },
          ],
        },
        {
          type: "tip",
          heading: "At the chippy",
          body: "When you order at a chip shop they'll ask <strong>\"Salt and vinegar?\"</strong> — say yes for the full experience. Chips are also sold on their own as <em>\"a portion of chips\"</em> or just <em>\"chips, please\"</em>. A <strong>'fish supper'</strong> is the Scottish name for fish and chips.",
          example: { l1: "Cod and chips, please — salt and vinegar.", en: "Ordering the classic at a chip shop." },
        },
        {
          type: "dialogue",
          heading: "Ordering at the chippy",
          setup: "Friday night at the local fish-and-chip shop.",
          lines: [
            { speaker: "Server", l1: "What can I get you, love?", en: "What would you like? ('love' is a friendly address)" },
            { speaker: "You", l1: "Cod and chips, please. To take away.", en: "Cod and chips to take with me, please." },
            { speaker: "Server", l1: "Salt and vinegar?", en: "Would you like salt and vinegar?" },
            { speaker: "You", l1: "Yes please. And a side of mushy peas.", en: "Yes, and a portion of mushy peas." },
            { speaker: "Server", l1: "That's seven pounds eighty.", en: "The total is £7.80." },
            { speaker: "You", l1: "Cheers. Card okay?", en: "Thanks. Can I pay by card?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Name the dish",
          intro: "Choose the British classic.",
          items: [
            {
              template: "Sausages with mashed potato is called bangers and ___.",
              answer: "mash",
              en: "Sausages and mashed potato.",
              options: ["mash", "gravy", "chips", "peas"],
            },
            {
              template: "A fish-and-chip shop is informally a ___.",
              answer: "chippy",
              en: "Informal name for the shop.",
              options: ["chippy", "pub", "caff", "tab"],
            },
            {
              template: "A Sunday roast usually comes with Yorkshire ___.",
              answer: "pudding",
              en: "The savoury baked batter.",
              options: ["pudding", "gravy", "peas", "sauce"],
            },
            {
              template: "At the chippy they ask: 'Salt and ___?'",
              answer: "vinegar",
              en: "The classic chip topping.",
              options: ["vinegar", "ketchup", "butter", "sugar"],
            },
          ],
        },
      ],
    },
    {
      slug: "british-food-curry-world",
      title: "The curry house & world food",
      summary: "Britain's love of curry and London's global food scene.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Curry: a British favourite",
          body: [
            "Curry is so popular it's practically a national dish. The <strong>curry house</strong> (an Indian/Bangladeshi restaurant) is a Friday-night staple. Famous orders include <strong>chicken tikka masala</strong>, <strong>korma</strong> (mild and creamy), <strong>madras</strong> (hot) and <strong>vindaloo</strong> (very hot!).",
            "A typical curry comes with <strong>rice</strong> or <strong>naan</strong> (flatbread), plus <em>poppadoms</em> to start. You'll be asked how spicy you want it: <em>mild, medium</em> or <em>hot</em>.",
            "London is one of the world's great food cities: you'll find everything from a <strong>Chinese takeaway</strong> and a <strong>kebab</strong> to Turkish, Caribbean, Thai and Lebanese food, often as a quick <strong>takeaway</strong>.",
          ],
          keyPoint:
            "Curry house staples: tikka masala, korma (mild), madras (hot), vindaloo (very hot). Served with rice or naan. London = global takeaways galore.",
        },
        {
          type: "vocab",
          heading: "Curry & world food",
          items: [
            { l1: "a curry", en: "a spiced dish, usually with sauce" },
            { l1: "a curry house", en: "an Indian/Bangladeshi restaurant" },
            { l1: "chicken tikka masala", en: "a creamy, tomato-based curry" },
            { l1: "a korma", en: "a mild, creamy curry" },
            { l1: "a madras", en: "a hot curry" },
            { l1: "a vindaloo", en: "a very hot curry" },
            { l1: "naan", en: "a soft flatbread" },
            { l1: "poppadoms", en: "thin, crispy starters" },
            { l1: "mild / medium / hot", en: "the spice levels you can choose" },
            { l1: "a takeaway", en: "food bought to eat elsewhere (US 'takeout')" },
            { l1: "a Chinese / an Indian", en: "a meal from a Chinese / Indian restaurant", note: "'Let's get a Chinese.'" },
            { l1: "a kebab", en: "grilled meat in flatbread, a late-night classic" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering a curry",
          setup: "At a curry house with a friend.",
          lines: [
            { speaker: "Waiter", l1: "Are you ready to order?", en: "Would you like to order now?" },
            { speaker: "You", l1: "Yes — a chicken tikka masala and a vegetable korma, please.", en: "Yes, a chicken tikka masala and a vegetable korma." },
            { speaker: "Waiter", l1: "How spicy would you like the masala?", en: "What spice level for the masala?" },
            { speaker: "You", l1: "Medium, please. And two naans and some rice.", en: "Medium spice, please. With two naans and rice." },
            { speaker: "Waiter", l1: "Any poppadoms to start?", en: "Would you like poppadoms first?" },
            { speaker: "You", l1: "Go on then, yes please.", en: "Yes, alright, please." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Curry comprehension",
          questions: [
            {
              q: "A 'korma' is…",
              options: ["a very hot curry", "a mild, creamy curry", "a flatbread", "a starter"],
              correct: 1,
            },
            {
              q: "Which curry is the hottest?",
              options: ["korma", "tikka masala", "vindaloo", "naan"],
              correct: 2,
            },
            {
              q: "'Naan' is…",
              options: ["a soft flatbread", "a spice level", "a dessert", "a drink"],
              correct: 0,
            },
            {
              q: "In Britain, 'a takeaway' means…",
              options: [
                "a sit-down meal",
                "food bought to eat elsewhere",
                "the bill",
                "a tip",
              ],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Order a medium chicken curry with rice and a naan.",
          reference: "Can I have a medium chicken curry with rice and a naan, please?",
          hint: "Use 'Can I have…, please?' and include the spice level 'medium'.",
        },
      ],
    },
    {
      slug: "british-food-tipping-bill",
      title: "Tipping & the bill",
      summary: "Service charge, tipping, and splitting the bill.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Paying the bill in Britain",
          body: [
            "To pay in a sit-down restaurant, ask <strong>\"Can we get the bill, please?\"</strong> (in Britain it's the 'bill', not the 'check').",
            "Many restaurants add a <strong>service charge</strong> (usually 12.5%) to the bill automatically — check before adding more. If there's no service charge and the service was good, a tip of around <strong>10%</strong> is normal but not compulsory. In pubs and cafés, tipping isn't expected.",
            "If you're with friends, you might <strong>split the bill</strong> (divide it evenly) or pay <strong>\"separately\"</strong> (each pays for their own).",
          ],
          keyPoint:
            "Ask for 'the bill'. A 12.5% service charge is often included — check first. Otherwise tip ~10% for good service. 'Split the bill' = share it evenly.",
        },
        {
          type: "vocab",
          heading: "Bill & tipping",
          items: [
            { l1: "the bill", en: "the total you must pay (US 'check')" },
            { l1: "Can we get the bill, please?", en: "may we have the total to pay?" },
            { l1: "a service charge", en: "a fee for service added to the bill" },
            { l1: "a tip", en: "extra money for good service" },
            { l1: "to tip", en: "to leave extra money for service" },
            { l1: "to split the bill", en: "to divide the total evenly" },
            { l1: "separately", en: "each person pays for their own" },
            { l1: "Is service included?", en: "is a service charge already on the bill?" },
            { l1: "Keep the change.", en: "let the staff keep the extra as a tip" },
            { l1: "all together", en: "paying as one bill" },
          ],
        },
        {
          type: "dialogue",
          heading: "Sorting the bill",
          setup: "You've finished a meal with a friend.",
          lines: [
            { speaker: "You", l1: "Can we get the bill, please?", en: "May we have the bill?" },
            { speaker: "Waiter", l1: "Of course. Together or separately?", en: "Yes. One bill or separate bills?" },
            { speaker: "You", l1: "Together, thanks. Is service included?", en: "One bill, thanks. Is a service charge on it already?" },
            { speaker: "Waiter", l1: "Yes, there's a 12.5% service charge.", en: "Yes, a 12.5% service charge is included." },
            { speaker: "You", l1: "Lovely, no need to add anything then. Card, please.", en: "Great, so no extra tip needed. I'll pay by card." },
            { speaker: "Waiter", l1: "I'll bring the card machine over.", en: "I'll bring the card reader to you." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in order.",
          items: [
            { tokens: ["Can", "we", "get", "the", "bill", ",", "please", "?"], en: "Can we get the bill, please?" },
            { tokens: ["Is", "service", "included", "?"], en: "Is service included?" },
            { tokens: ["Shall", "we", "split", "the", "bill", "?"], en: "Shall we split the bill?" },
            { tokens: ["Could", "we", "pay", "separately", ",", "please", "?"], en: "Could we pay separately, please?" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "In Britain, the total you pay at a restaurant is called…",
              options: ["the check", "the bill", "the tab", "the round"],
              correct: 1,
            },
            {
              q: "A 'service charge' is…",
              options: [
                "a free drink",
                "a fee for service added to the bill",
                "the price of water",
                "a discount",
              ],
              correct: 1,
            },
            {
              q: "If a 12.5% service charge is already on the bill, you…",
              options: [
                "must add 20% more",
                "don't need to add another tip",
                "should refuse to pay",
                "pay double",
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
        q: "A 'chippy' is…",
        options: ["a pub", "a fish-and-chip shop", "a café", "a curry house"],
        correct: 1,
      },
      {
        q: "At the chippy, the classic topping for chips is…",
        options: ["ketchup", "salt and vinegar", "gravy", "cheese"],
        correct: 1,
      },
      {
        q: "'Bangers and mash' is…",
        options: ["fish and chips", "sausages with mashed potato", "a curry", "a dessert"],
        correct: 1,
      },
      {
        q: "A Sunday roast usually includes…",
        options: ["sushi", "Yorkshire pudding and gravy", "a kebab", "poppadoms"],
        correct: 1,
      },
      {
        q: "Which curry is the mildest?",
        options: ["vindaloo", "madras", "korma", "tikka masala"],
        correct: 2,
      },
      {
        q: "In Britain, 'a takeaway' means…",
        options: ["a sit-down meal", "food to eat elsewhere", "the bill", "a tip"],
        correct: 1,
      },
      {
        q: "To pay in a restaurant you ask for…",
        options: ["the check", "the bill", "the round", "the menu"],
        correct: 1,
      },
      {
        q: "A 'service charge' on a British bill is usually about…",
        options: ["12.5%", "50%", "1%", "30%"],
        correct: 0,
      },
      {
        q: "'Split the bill' means…",
        options: ["one person pays everything", "divide the total evenly", "don't pay", "pay tomorrow"],
        correct: 1,
      },
      {
        q: "Tipping in British pubs and cafés is…",
        options: ["always 20%", "not expected", "compulsory by law", "added automatically"],
        correct: 1,
      },
    ],
  },
};
