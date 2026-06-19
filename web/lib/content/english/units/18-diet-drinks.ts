import type { Unit } from "../../types";

export const UNIT_DIET_DRINKS: Unit = {
  slug: "diet-drinks",
  stage: 4,
  order: 18,
  icon: "🥗",
  title: "Drinks & dietary needs",
  tagline: "'I'm vegetarian', 'I'm allergic to…', ordering a round of drinks.",
  badge: "tourist",
  lessons: [
    {
      slug: "diet-drinks-dietary-needs",
      title: "Dietary needs",
      summary: "Saying what you can and can't eat, and asking about ingredients.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Telling staff what you can eat",
          body: [
            "If you have a <strong>dietary need</strong>, the simplest way to say it is <em>\"I'm vegetarian\"</em>, <em>\"I'm vegan\"</em>, or <em>\"I'm allergic to nuts.\"</em> British restaurants are used to this and menus often mark dishes with <strong>(V)</strong> for vegetarian and <strong>(VG)</strong> for vegan.",
            "To check an ingredient, ask <strong>\"Does this contain…?\"</strong> — for example <em>\"Does this contain nuts?\"</em> or <em>\"Is there any dairy in this?\"</em>",
            "Allergies are taken seriously: by law, British venues must tell you about the <strong>14 major allergens</strong> (nuts, dairy, gluten, eggs, shellfish and more) on request.",
          ],
          keyPoint:
            "Say 'I'm vegetarian / vegan' or 'I'm allergic to ___'. Ask 'Does this contain…?'. Menus mark (V) and (VG).",
        },
        {
          type: "vocab",
          heading: "Dietary words",
          items: [
            { l1: "vegetarian", en: "someone who eats no meat or fish" },
            { l1: "vegan", en: "someone who eats no animal products at all" },
            { l1: "allergic to", en: "having a harmful reaction to something" },
            { l1: "an allergy", en: "a harmful reaction to a food" },
            { l1: "intolerant to", en: "unable to digest something well" },
            { l1: "gluten-free", en: "containing no gluten (wheat protein)" },
            { l1: "dairy-free", en: "containing no milk products" },
            { l1: "nuts", en: "nuts (a common allergen)" },
            { l1: "I'm allergic to nuts.", en: "nuts make me ill" },
            { l1: "Does this contain…?", en: "is ___ an ingredient in this?" },
            { l1: "Is there any dairy in this?", en: "does this have milk products?" },
            { l1: "Is this suitable for vegetarians?", en: "can a vegetarian eat this?" },
          ],
        },
        {
          type: "tip",
          heading: "'I'm allergic' vs 'I don't like'",
          body: "Be precise: an <strong>allergy</strong> is a medical reaction, so staff will be careful about cross-contamination. If you simply <em>don't like</em> something, say <em>\"I'd rather not have…\"</em> or <em>\"Could I have it without…?\"</em> Using 'allergic' when you just dislike a food can cause confusion in the kitchen.",
          example: { l1: "Could I have the salad without onions, please?", en: "A polite way to remove an ingredient you dislike." },
        },
        {
          type: "dialogue",
          heading: "Checking the menu",
          setup: "You're ordering and you have a nut allergy.",
          lines: [
            { speaker: "Server", l1: "Are you ready to order?", en: "Would you like to order now?" },
            { speaker: "You", l1: "Yes — but I'm allergic to nuts. Does the curry contain any?", en: "Yes, but I have a nut allergy. Are there nuts in the curry?" },
            { speaker: "Server", l1: "Let me check with the kitchen. Is it a serious allergy?", en: "I'll ask the kitchen. Is it a severe allergy?" },
            { speaker: "You", l1: "Yes, quite serious. And is the rice dish vegetarian?", en: "Yes, it's serious. Also, can a vegetarian eat the rice dish?" },
            { speaker: "Server", l1: "The rice is suitable for vegetarians, yes.", en: "Yes, vegetarians can eat the rice." },
            { speaker: "You", l1: "Lovely, thank you for checking.", en: "Great, thanks for checking." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Say your dietary need",
          intro: "Choose the word that fits.",
          items: [
            {
              template: "I'm ___ , so I don't eat any meat or fish.",
              answer: "vegetarian",
              en: "Eats no meat or fish.",
              options: ["vegetarian", "allergic", "gluten-free", "savoury"],
            },
            {
              template: "Does this dish ___ any dairy?",
              answer: "contain",
              en: "Is dairy an ingredient?",
              options: ["contain", "cook", "order", "taste"],
            },
            {
              template: "I'm ___ to nuts, so please be careful.",
              answer: "allergic",
              en: "Nuts cause a reaction.",
              options: ["allergic", "vegan", "bland", "tender"],
            },
            {
              template: "Is this bread ___ -free?",
              answer: "gluten",
              en: "Without wheat protein.",
              options: ["gluten", "dairy", "sugar", "salt"],
            },
          ],
        },
      ],
    },
    {
      slug: "diet-drinks-soft-hot-water",
      title: "Soft drinks, hot drinks & water",
      summary: "Non-alcoholic drinks and 'still, sparkling or tap?'.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Drinks without alcohol",
          body: [
            "A <strong>soft drink</strong> is any cold non-alcoholic drink: a <em>lemonade</em>, an <em>orange juice</em>, a <em>cola</em>, or a <em>squash</em> (fruit cordial mixed with water).",
            "When you ask for water, you'll often be offered a choice: <strong>still</strong> (no bubbles), <strong>sparkling</strong> (fizzy), or <strong>tap water</strong> — which is free, safe and perfectly normal to ask for in Britain.",
            "Hot drinks beyond tea and coffee include <strong>herbal tea</strong> and <strong>hot chocolate</strong>. Don't be shy about asking for tap water; restaurants must provide it free.",
          ],
          keyPoint:
            "Soft drink = cold, non-alcoholic. Water choice: still, sparkling, or free tap water. Asking for tap water is totally normal.",
        },
        {
          type: "vocab",
          heading: "Drinks",
          items: [
            { l1: "a soft drink", en: "a cold non-alcoholic drink" },
            { l1: "still water", en: "water without bubbles" },
            { l1: "sparkling water", en: "fizzy water" },
            { l1: "tap water", en: "free water from the tap" },
            { l1: "a lemonade", en: "a fizzy lemon drink", note: "Usually fizzy in the UK." },
            { l1: "an orange juice / a juice", en: "fruit juice" },
            { l1: "a cola / a coke", en: "a cola drink" },
            { l1: "squash", en: "fruit cordial diluted with water" },
            { l1: "a fizzy drink", en: "a carbonated soft drink" },
            { l1: "herbal tea", en: "tea made from herbs, no caffeine" },
            { l1: "a hot chocolate", en: "a hot chocolate drink" },
            { l1: "a glass of water", en: "a glass of water" },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering drinks (no alcohol)",
          setup: "You're at a restaurant table and the server asks about drinks.",
          lines: [
            { speaker: "Server", l1: "Can I get you any drinks?", en: "Would you like any drinks?" },
            { speaker: "You", l1: "Just some water, please.", en: "Just water, please." },
            { speaker: "Server", l1: "Still, sparkling, or tap?", en: "Would you like still, sparkling, or tap water?" },
            { speaker: "You", l1: "Tap's fine, thanks. And an orange juice.", en: "Tap water is fine, thank you. And an orange juice." },
            { speaker: "Server", l1: "A jug of tap water and an OJ. Anything else?", en: "A jug of tap water and an orange juice. Anything else?" },
            { speaker: "You", l1: "That's all for now, cheers.", en: "That's everything for now, thanks." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Drinks check",
          questions: [
            {
              q: "'Sparkling water' is…",
              options: ["water with no bubbles", "fizzy water", "hot water", "free tap water"],
              correct: 1,
            },
            {
              q: "In Britain, asking for 'tap water' in a restaurant is…",
              options: ["rude", "not allowed", "free and totally normal", "very expensive"],
              correct: 2,
            },
            {
              q: "A 'soft drink' is…",
              options: [
                "an alcoholic drink",
                "a cold non-alcoholic drink",
                "a hot drink",
                "a type of beer",
              ],
              correct: 1,
            },
            {
              q: "'Squash' in British English is…",
              options: [
                "a vegetable only",
                "fruit cordial mixed with water",
                "sparkling wine",
                "a hot drink",
              ],
              correct: 1,
              fb: "'Squash' here means a fruit cordial diluted with water — a common kids' drink.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Ask for tap water and an orange juice.",
          reference: "Could I have some tap water and an orange juice, please?",
          hint: "Use 'Could I have…, please?' and join the two drinks with 'and'.",
        },
      ],
    },
    {
      slug: "diet-drinks-round-for-group",
      title: "Ordering drinks for a group",
      summary: "Collecting orders and getting a round in for everyone.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Getting drinks for the table",
          body: [
            "When you offer to get drinks for a group, first <strong>collect the orders</strong>: <em>\"What's everyone having?\"</em> or <em>\"What can I get you all?\"</em>",
            "At the bar you list them clearly: <em>\"Two pints of lager, a glass of white wine, and a lemonade, please.\"</em> Group the same drinks together so it's easy for the bartender.",
            "If it's a lot to carry, ask for a <strong>tray</strong>, or make two trips. To check the total, ask <strong>\"How much is that altogether?\"</strong>",
          ],
          keyPoint:
            "Collect orders first ('What's everyone having?'), list them grouped at the bar, and ask 'How much is that altogether?'.",
        },
        {
          type: "vocab",
          heading: "Group ordering phrases",
          items: [
            { l1: "What's everyone having?", en: "what does each person want?" },
            { l1: "What can I get you all?", en: "what would the group like?" },
            { l1: "Two of those, please.", en: "two of the same drink" },
            { l1: "the same again", en: "the same drinks as before" },
            { l1: "a tray", en: "a flat board for carrying drinks" },
            { l1: "How much is that altogether?", en: "what's the total for everything?" },
            { l1: "Can you put it on a tab?", en: "can we pay all together at the end?" },
            { l1: "a round of drinks", en: "drinks for the whole group" },
            { l1: "a jug of water", en: "a large container of water for sharing" },
            { l1: "Anything for you?", en: "would you like a drink too?" },
          ],
        },
        {
          type: "dialogue",
          heading: "A round for four",
          setup: "You're getting the drinks in for you and three friends.",
          lines: [
            { speaker: "You", l1: "Right, what's everyone having?", en: "Okay, what does everyone want?" },
            { speaker: "Friend 1", l1: "A pint of lager for me.", en: "I'd like a pint of lager." },
            { speaker: "Friend 2", l1: "Same again, please.", en: "The same as before, please." },
            { speaker: "Friend 3", l1: "Just a lemonade, thanks — I'm driving.", en: "Just a lemonade, thanks." },
            { speaker: "You", l1: "So that's three pints of lager and a lemonade. How much is that altogether?", en: "So three pints of lager and a lemonade. What's the total?" },
            { speaker: "Bartender", l1: "That'll be nineteen pounds, please.", en: "The total is £19." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in order.",
          items: [
            { tokens: ["What's", "everyone", "having", "?"], en: "What's everyone having?" },
            { tokens: ["Two", "pints", "and", "a", "lemonade", ",", "please", "."], en: "Two pints and a lemonade, please." },
            { tokens: ["How", "much", "is", "that", "altogether", "?"], en: "How much is that altogether?" },
            { tokens: ["Can", "we", "get", "a", "jug", "of", "water", "too", "?"], en: "Can we get a jug of water too?" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Before getting drinks for the group, you ask…",
              options: [
                "'How much money have you got?'",
                "'What's everyone having?'",
                "'Are you leaving?'",
                "'Is this seat taken?'",
              ],
              correct: 1,
            },
            {
              q: "To check the total for several drinks, you ask…",
              options: [
                "'How much is that altogether?'",
                "'Where is the bar?'",
                "'Is this vegetarian?'",
                "'Can I sit here?'",
              ],
              correct: 0,
            },
            {
              q: "'Same again' means…",
              options: [
                "a different drink",
                "the same drinks as before",
                "no drink",
                "a free drink",
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
        q: "A 'vegetarian' eats…",
        options: ["no animal products at all", "no meat or fish", "only fish", "everything"],
        correct: 1,
      },
      {
        q: "A 'vegan' eats…",
        options: ["no meat but eats fish", "no animal products at all", "only vegetables on Sundays", "anything gluten-free"],
        correct: 1,
      },
      {
        q: "To check an ingredient, you ask…",
        options: ["'How much is it?'", "'Does this contain…?'", "'Where's the bar?'", "'Is it open?'"],
        correct: 1,
      },
      {
        q: "'I'm allergic to nuts' tells staff that nuts…",
        options: ["are your favourite", "make you ill", "are too expensive", "taste nice"],
        correct: 1,
      },
      {
        q: "When ordering water you may be offered…",
        options: ["hot or cold", "still, sparkling or tap", "red or white", "large or small only"],
        correct: 1,
      },
      {
        q: "In a British restaurant, tap water is…",
        options: ["never served", "free and normal to ask for", "always extra", "only for children"],
        correct: 1,
      },
      {
        q: "A 'soft drink' is…",
        options: ["an alcoholic drink", "a cold non-alcoholic drink", "a hot tea", "a dessert"],
        correct: 1,
      },
      {
        q: "Before buying drinks for friends, you ask…",
        options: ["'What's everyone having?'", "'Are you tired?'", "'Where do you live?'", "'Is it raining?'"],
        correct: 0,
      },
      {
        q: "'How much is that altogether?' asks for…",
        options: ["the time", "the total price", "the menu", "the bar's name"],
        correct: 1,
      },
      {
        q: "'Gluten-free' means the food contains no…",
        options: ["milk", "wheat protein (gluten)", "sugar", "salt"],
        correct: 1,
      },
    ],
  },
};
