import type { Unit } from "../../types";

export const UNIT_CAFE: Unit = {
  slug: "cafe",
  stage: 4,
  order: 15,
  icon: "☕",
  title: "At the café",
  tagline: "Tea or coffee, 'eat in or takeaway', and how to queue.",
  badge: "tourist",
  lessons: [
    {
      slug: "cafe-hot-drinks",
      title: "Ordering hot drinks",
      summary: "Coffees, teas, and the 'eat in or takeaway' question.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The British café and coffee shop",
          body: [
            "In Britain you'll order hot drinks in a <strong>café</strong> (often pronounced 'caff' for the cheap, traditional ones) or a high-street <strong>coffee shop</strong>. You order at the counter, then either sit down or take it away.",
            "<strong>Tea</strong> is the national default — usually a strong black tea ('builder's tea') served with milk. <strong>Coffee</strong> culture has grown fast: you'll hear <em>flat white</em>, <em>latte</em>, <em>cappuccino</em> and <em>Americano</em> everywhere.",
            "The first question you'll be asked is almost always: <strong>\"Eat in or takeaway?\"</strong> — meaning will you sit and drink here, or take it with you?",
          ],
          keyPoint:
            "Order at the counter. 'Tea' means black tea with milk by default. Expect to be asked 'eat in or takeaway?'.",
        },
        {
          type: "vocab",
          heading: "Hot drinks menu",
          intro: "The drinks you'll actually see on a British café board.",
          items: [
            { l1: "a tea", en: "black tea, usually served with milk", note: "Say 'a cup of tea' or just 'a tea'." },
            { l1: "a builder's tea", en: "strong, milky black tea", note: "Informal — the classic British 'cuppa'." },
            { l1: "a cup of tea / a cuppa", en: "an informal name for a tea", note: "'Cuppa' is very casual." },
            { l1: "a coffee", en: "a coffee (you'll be asked which kind)" },
            { l1: "a flat white", en: "espresso with steamed milk, smaller than a latte" },
            { l1: "a latte", en: "espresso with lots of steamed milk" },
            { l1: "a cappuccino", en: "espresso, steamed milk and foam" },
            { l1: "an Americano", en: "espresso topped up with hot water" },
            { l1: "an espresso", en: "a small, strong shot of coffee" },
            { l1: "a hot chocolate", en: "a hot chocolate drink" },
            { l1: "with milk", en: "added milk", note: "Tea normally comes with milk unless you say otherwise." },
            { l1: "no sugar", en: "without sugar" },
          ],
        },
        {
          type: "tip",
          heading: "How Brits order tea",
          body: "When someone asks how you take your tea, they mean milk and sugar. <strong>\"White, no sugar\"</strong> means with milk and no sugar; <strong>\"black\"</strong> means no milk. <em>\"Builder's\"</em> means strong and milky. Most cafés add milk by default, so if you want it black you should say so.",
          example: { l1: "A tea, please — white, one sugar.", en: "A tea with milk and one sugar." },
        },
        {
          type: "dialogue",
          heading: "At the coffee shop counter",
          setup: "You're at the counter of a busy high-street coffee shop.",
          lines: [
            { speaker: "Barista", l1: "Hiya, what can I get you?", en: "Hello, what would you like?" },
            { speaker: "You", l1: "Can I get a flat white, please?", en: "I'd like a flat white." },
            { speaker: "Barista", l1: "Of course. Eat in or takeaway?", en: "Will you sit here or take it with you?" },
            { speaker: "You", l1: "Takeaway, please.", en: "I'll take it with me." },
            { speaker: "Barista", l1: "Any milk alternative, or is normal milk fine?", en: "Do you want dairy-free milk, or is regular milk okay?" },
            { speaker: "You", l1: "Normal milk's fine, thanks.", en: "Regular milk is fine." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the order",
          intro: "Choose the word that fits.",
          items: [
            {
              template: "Can I ___ a cappuccino, please?",
              answer: "get",
              en: "Can I have a cappuccino, please?",
              options: ["get", "make", "do", "give"],
            },
            {
              template: "Eat in or ___ ?",
              answer: "takeaway",
              en: "To have here or to take with you?",
              options: ["takeaway", "takeout", "togo", "outside"],
            },
            {
              template: "A tea, please — ___, no sugar.",
              answer: "white",
              en: "A tea with milk and no sugar.",
              options: ["white", "clear", "open", "plain"],
            },
          ],
        },
      ],
    },
    {
      slug: "cafe-food-queueing",
      title: "Café food & queueing",
      summary: "Snacks, sandwiches, and the British art of the queue.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Food at the café — and how to queue",
          body: [
            "Most cafés sell light food: <strong>sandwiches</strong>, <strong>toasties</strong> (toasted sandwiches), <strong>cakes</strong>, and pastries. Traditional 'caffs' do a cooked breakfast — beans on toast, a bacon sandwich.",
            "Crucial British skill: the <strong>queue</strong>. You join the back of the line and wait your turn. Pushing in (jumping the queue) is one of the rudest things you can do here.",
            "When it's your turn, the staff member will often say <em>\"Who's next?\"</em> or <em>\"Next, please.\"</em> — that's your cue to step up and order.",
          ],
          keyPoint:
            "Join the back of the queue and wait. Never push in. 'Who's next?' means it's your turn.",
        },
        {
          type: "vocab",
          heading: "Café food & queue words",
          items: [
            { l1: "a sandwich", en: "a sandwich" },
            { l1: "a toastie", en: "a toasted sandwich", note: "Informal British word." },
            { l1: "a bacon sandwich / bacon butty", en: "a sandwich filled with bacon", note: "'Butty' is casual/northern." },
            { l1: "beans on toast", en: "tinned baked beans served on toast", note: "A classic cheap British meal." },
            { l1: "a slice of cake", en: "a piece of cake" },
            { l1: "a scone", en: "a baked cake-like bun, often with jam and cream" },
            { l1: "a pastry", en: "a sweet baked item like a croissant" },
            { l1: "the queue", en: "the line of people waiting", note: "Pronounced like the letter 'Q'." },
            { l1: "to queue / to queue up", en: "to wait in line" },
            { l1: "to push in / to jump the queue", en: "to skip ahead unfairly", note: "Considered very rude." },
            { l1: "Who's next?", en: "Whose turn is it to order?" },
            { l1: "After you.", en: "a polite way to let someone go first" },
          ],
        },
        {
          type: "dialogue",
          heading: "Joining the queue",
          setup: "There's a short queue at the café. You join the back.",
          lines: [
            { speaker: "Customer", l1: "Are you in the queue?", en: "Are you waiting in line?" },
            { speaker: "You", l1: "Yes, the end's just behind you.", en: "Yes, the back of the line is behind you." },
            { speaker: "Staff", l1: "Right, who's next?", en: "Okay, whose turn is it?" },
            { speaker: "You", l1: "That's me. A ham toastie and a tea, please.", en: "It's my turn. A toasted ham sandwich and a tea, please." },
            { speaker: "Staff", l1: "Eat in?", en: "Will you sit here?" },
            { speaker: "You", l1: "Yes, please.", en: "Yes." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Queue & café etiquette",
          questions: [
            {
              q: "You arrive at a café with five people waiting. What should you do?",
              options: [
                "Go straight to the counter",
                "Join the back of the queue",
                "Ask everyone to move",
                "Wait outside",
              ],
              correct: 1,
              fb: "You always join the back of the queue and wait your turn.",
            },
            {
              q: "A 'toastie' is…",
              options: ["a toast rack", "a toasted sandwich", "a slice of cake", "a hot drink"],
              correct: 1,
            },
            {
              q: "The staff member says 'Who's next?'. This means…",
              options: [
                "the café is closing",
                "it's your turn to order",
                "they're out of stock",
                "you should pay",
              ],
              correct: 1,
            },
            {
              q: "'To jump the queue' means…",
              options: [
                "to wait politely",
                "to skip ahead of others unfairly",
                "to leave the café",
                "to order quickly",
              ],
              correct: 1,
              fb: "Jumping the queue (pushing in) is considered very rude in Britain.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Politely order a bacon sandwich and a tea with milk to eat in.",
          reference: "Can I get a bacon sandwich and a tea with milk, please? To eat in.",
          hint: "Start with 'Can I get…, please?' and add 'to eat in' at the end.",
        },
      ],
    },
    {
      slug: "cafe-paying",
      title: "Paying at the café",
      summary: "Card or cash, contactless, and 'keep the change'.",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "Paying — card is king",
          body: [
            "Most British cafés take <strong>card</strong>, and these days many are <em>card only</em>. <strong>Contactless</strong> (tapping your card or phone) is the normal way to pay for small amounts.",
            "Prices are in <strong>pounds (£)</strong>. A coffee might be <em>£3.20</em>, said as 'three twenty' or 'three pounds twenty'.",
            "Tipping in a café is not expected. If you do want to leave a little, you can say <strong>\"keep the change\"</strong> when paying with cash, or add a tip on the card machine if it offers one.",
          ],
          keyPoint:
            "Card and contactless are normal. Prices are in pounds (£). Tipping isn't expected at a café counter.",
        },
        {
          type: "vocab",
          heading: "Paying vocabulary",
          items: [
            { l1: "card or cash?", en: "will you pay by card or with notes/coins?" },
            { l1: "contactless", en: "paying by tapping a card or phone" },
            { l1: "to tap (your card)", en: "to pay by holding your card to the reader" },
            { l1: "Chip and PIN", en: "inserting your card and typing your PIN code" },
            { l1: "a receipt", en: "a printed proof of payment" },
            { l1: "change", en: "the money returned when you pay with cash" },
            { l1: "Keep the change.", en: "let the staff keep the extra money as a tip" },
            { l1: "How much is that?", en: "what is the total price?" },
            { l1: "a pound (£)", en: "the British currency unit" },
            { l1: "a fiver / a tenner", en: "a £5 note / a £10 note", note: "Informal." },
            { l1: "notes and coins", en: "paper money and metal money" },
            { l1: "Is card okay?", en: "can I pay by card?" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the till",
          setup: "You've ordered and now you're paying at the till (cash register).",
          lines: [
            { speaker: "Staff", l1: "That's four pounds fifty, please.", en: "The total is £4.50." },
            { speaker: "You", l1: "Is card okay?", en: "Can I pay by card?" },
            { speaker: "Staff", l1: "Yeah, contactless is fine — just tap there.", en: "Yes, you can pay by tapping your card there." },
            { speaker: "You", l1: "Lovely. Do you need a receipt?", en: "Great. Wait — do I get a receipt?" },
            { speaker: "Staff", l1: "Do you want one?", en: "Would you like a receipt?" },
            { speaker: "You", l1: "No, you're alright, thanks.", en: "No, thank you." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in the right order.",
          items: [
            { tokens: ["Can", "I", "pay", "by", "card", "?"], en: "Can I pay by card?" },
            { tokens: ["How", "much", "is", "that", "altogether", "?"], en: "How much is that altogether?" },
            { tokens: ["Keep", "the", "change", ",", "thanks", "."], en: "Keep the change, thanks." },
            { tokens: ["Is", "contactless", "okay", "for", "this", "?"], en: "Is contactless okay for this?" },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "What does 'contactless' mean?",
              options: [
                "paying with a cheque",
                "paying by tapping a card or phone",
                "paying later",
                "paying in another shop",
              ],
              correct: 1,
            },
            {
              q: "What's the currency in Britain?",
              options: ["the euro", "the dollar", "the pound (£)", "the franc"],
              correct: 2,
            },
            {
              q: "You say 'keep the change' when…",
              options: [
                "you want a receipt",
                "you want the staff to keep the extra as a tip",
                "you're paying by card",
                "you want more change",
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
        q: "In a British café, 'a tea' by default comes…",
        options: ["black, no milk", "with milk", "with lemon", "iced"],
        correct: 1,
      },
      {
        q: "'Eat in or takeaway?' is asking…",
        options: [
          "what you'd like to drink",
          "whether you'll sit here or take it with you",
          "how you'll pay",
          "if you want food",
        ],
        correct: 1,
      },
      {
        q: "A 'flat white' is…",
        options: [
          "a black tea",
          "espresso with steamed milk, smaller than a latte",
          "hot water with milk",
          "a fizzy drink",
        ],
        correct: 1,
      },
      {
        q: "You arrive and there's a queue. You should…",
        options: [
          "go to the front",
          "join the back and wait",
          "shout your order",
          "leave",
        ],
        correct: 1,
      },
      {
        q: "'Who's next?' from the staff means…",
        options: ["they're closing", "it's the next person's turn to order", "they're out of coffee", "pay now"],
        correct: 1,
      },
      {
        q: "'Builder's tea' is…",
        options: ["herbal tea", "strong, milky black tea", "tea with lemon", "iced tea"],
        correct: 1,
      },
      {
        q: "'Contactless' payment means…",
        options: ["paying online", "tapping a card or phone", "paying with a cheque", "paying with coins"],
        correct: 1,
      },
      {
        q: "Tipping at a café counter in Britain is…",
        options: ["always 20%", "expected", "not expected", "illegal"],
        correct: 2,
      },
      {
        q: "'Keep the change' means…",
        options: [
          "give me my change",
          "let the staff keep the extra money",
          "pay by card",
          "I want a receipt",
        ],
        correct: 1,
      },
      {
        q: "Politely order a coffee: choose the best phrase.",
        options: [
          "Coffee now.",
          "Give me coffee.",
          "Can I get a coffee, please?",
          "I take coffee.",
        ],
        correct: 2,
      },
    ],
  },
};
