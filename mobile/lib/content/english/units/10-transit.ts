import type { Unit } from "../../types";

export const UNIT_TRANSIT: Unit = {
  slug: "transit",
  stage: 3,
  order: 10,
  icon: "🚇",
  title: "Getting around",
  tagline: "The Tube, buses, the Oyster card, 'mind the gap', train tickets.",
  badge: "tourist",
  lessons: [
    {
      slug: "transit-tube-buses",
      title: "The Tube and the buses",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "London runs on the Tube and the bus",
          body: [
            "Londoners almost never say 'the underground' in conversation — they say <strong>the Tube</strong>. Each route is a colour-coded <strong>line</strong> (the Central line is red, the Victoria line is light blue, the Piccadilly line is dark blue).",
            "The network is split into <strong>zones</strong>. Zone 1 is the centre, and the further out you go, the higher the zone number — and the more you pay.",
            "You almost never buy a paper ticket. You <strong>tap in</strong> at the start of your journey and <strong>tap out</strong> at the end, using an <strong>Oyster card</strong> or just a <strong>contactless</strong> bank card. (Tap in and tap out = touch your card on the yellow reader.)",
          ],
          tip: {
            label: "Buses are tap-in only",
            body: "On a London bus you only <em>tap in</em> when you board — there is no tap out, and the fare is a flat price wherever you go. On the Tube you must tap both ends or you'll be charged the maximum fare.",
          },
        },
        {
          type: "vocab",
          heading: "Getting-around vocabulary",
          items: [
            { l1: "the Tube", en: "the London underground railway", note: "Far more common than 'the underground'." },
            { l1: "the line", en: "a single Tube route", note: "Each has a name and a colour: Central, Victoria, Jubilee." },
            { l1: "the zone", en: "a fare area; Zone 1 is the centre" },
            { l1: "the Oyster card", en: "a reusable travel card you top up with money" },
            { l1: "contactless", en: "paying by tapping a bank card or phone, no PIN" },
            { l1: "to tap in", en: "to touch your card on the reader at the start" },
            { l1: "to tap out", en: "to touch your card on the reader at the end" },
            { l1: "to top up", en: "to add money to your Oyster card" },
            { l1: "the fare", en: "the price of a journey" },
            { l1: "the platform", en: "where you wait for and board the train" },
            { l1: "the carriage", en: "one section of a train", note: "Americans say 'car'." },
            { l1: "rush hour", en: "the busy travel times, morning and evening" },
          ],
        },
        {
          type: "dialogue",
          heading: "Buying an Oyster card",
          setup: "You're at a Tube station and want a travelcard.",
          lines: [
            { speaker: "You", l1: "Hi, could I get an Oyster card, please?", en: "A polite request: 'could I get' is softer than 'I want'." },
            { speaker: "Staff", l1: "Of course. That's a £7 deposit, and how much would you like to put on it?", en: "The deposit is refundable; you also load travel money." },
            { speaker: "You", l1: "Can I put twenty pounds on, please?", en: "Asking to top up by £20." },
            { speaker: "Staff", l1: "No problem. Just tap in and tap out each time on the Tube.", en: "Touch the card at the start and end of each Tube journey." },
            { speaker: "You", l1: "And on the buses?", en: "Asking about bus rules." },
            { speaker: "Staff", l1: "Buses are tap in only — one flat fare.", en: "You only touch the reader when boarding a bus." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the sentence",
          items: [
            {
              template: "I need to ___ in before I get on the train.",
              answer: "tap",
              en: "Touch your card at the start.",
              options: ["tap", "press", "touch", "swipe"],
            },
            {
              template: "Can I pay with my ___ card instead of an Oyster?",
              answer: "contactless",
              en: "A bank card you can tap.",
              options: ["contactless", "credit", "metal", "loyalty"],
            },
            {
              template: "My Oyster is empty — I need to ___ it up.",
              answer: "top",
              en: "Add more money.",
              options: ["top", "fill", "load", "pour"],
            },
            {
              template: "Zone 1 is the most expensive ___.",
              answer: "fare",
              en: "The price of travel.",
              options: ["fare", "fee", "price", "cost"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "What do Londoners usually call the underground?",
              options: ["the Metro", "the Tube", "the Subway", "the Rail"],
              correct: 1,
              fb: "'The Tube' is the everyday word.",
            },
            {
              q: "On a London bus, you…",
              options: ["tap in and tap out", "only tap in", "only tap out", "buy a paper ticket"],
              correct: 1,
              fb: "Buses are tap-in only, with one flat fare.",
            },
            {
              q: "If you tap in on the Tube but forget to tap out, you'll be charged…",
              options: ["nothing", "half fare", "the maximum fare", "a £7 deposit"],
              correct: 2,
            },
          ],
        },
      ],
    },
    {
      slug: "transit-train-tickets",
      title: "Buying train tickets",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Single or return?",
          body: [
            "For National Rail (overground trains between towns and cities), you buy a ticket for a specific journey. A <strong>single</strong> is one way; a <strong>return</strong> is there and back. (Americans say 'one-way' and 'round-trip'.)",
            "Trains leave from a numbered <strong>platform</strong>. The big departure board tells you the platform, but it can change at the last minute — so you'll often ask <em>'Which platform?'</em>",
            "<strong>Off-peak</strong> tickets are cheaper because they avoid rush hour. An <strong>anytime</strong> ticket costs more but has no time restriction.",
          ],
          keyPoint: "single = one way; return = there and back. Off-peak = cheaper, outside rush hour.",
        },
        {
          type: "vocab",
          heading: "At the ticket office",
          items: [
            { l1: "a single", en: "a one-way ticket" },
            { l1: "a return", en: "a there-and-back ticket" },
            { l1: "off-peak", en: "outside the busy rush-hour times, cheaper" },
            { l1: "anytime", en: "valid at any time, more expensive" },
            { l1: "the departure board", en: "the screen listing trains, times and platforms" },
            { l1: "the platform", en: "where the train arrives and you board" },
            { l1: "the ticket office", en: "the counter where you buy tickets" },
            { l1: "the ticket machine", en: "the self-service screen for buying tickets" },
            { l1: "a railcard", en: "a discount card for certain travellers" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the ticket office",
          setup: "You're at Paddington station travelling to Oxford.",
          lines: [
            { speaker: "You", l1: "A return to Oxford, please.", en: "A there-and-back ticket to Oxford." },
            { speaker: "Clerk", l1: "Off-peak or anytime?", en: "Cheaper restricted, or fully flexible?" },
            { speaker: "You", l1: "Off-peak, please. How much is that?", en: "Choosing the cheaper option and asking the price." },
            { speaker: "Clerk", l1: "That'll be £28.50.", en: "'That'll be' = the total comes to." },
            { speaker: "You", l1: "Which platform is it?", en: "Asking where to catch the train." },
            { speaker: "Clerk", l1: "Platform 4, but check the board — it can change.", en: "The platform may be updated on the departure board." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the request",
          items: [
            { tokens: ["A", "return", "to", "Brighton", ",", "please", "."], en: "A return to Brighton, please." },
            { tokens: ["Which", "platform", "is", "the", "train", "?"], en: "Which platform is the train?" },
            { tokens: ["Is", "there", "an", "off-peak", "ticket", "?"], en: "Is there an off-peak ticket?" },
            { tokens: ["What", "time", "does", "the", "next", "train", "leave", "?"], en: "What time does the next train leave?" },
          ],
        },
        {
          type: "translate",
          heading: "Say it in natural English",
          direction: "en-to-l1",
          prompt: "Ask for a single ticket to Cambridge, then ask which platform.",
          reference: "A single to Cambridge, please. Which platform is it?",
          hint: "'single' = one-way; keep it short and polite.",
        },
      ],
    },
    {
      slug: "transit-onboard",
      title: "On board and asking",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "'Mind the gap' and other announcements",
          body: [
            "The most famous announcement in London is <strong>'Mind the gap'</strong> — it means watch the space between the train and the platform edge as you step on or off.",
            "On the Tube you'll hear <em>'This is a Victoria line train to Brixton. The next station is Victoria.'</em> Listen for <strong>'the next station is…'</strong>",
            "If you're not sure you're going the right way, just ask a fellow passenger: <em>'Does this go to…?'</em> or <em>'Is this the right stop for…?'</em>",
          ],
          keyPoint: "'Mind the gap' = watch the space at the platform edge. 'Does this go to…?' checks your direction.",
        },
        {
          type: "vocab",
          heading: "On-board phrases",
          items: [
            { l1: "Mind the gap", en: "watch the space between train and platform" },
            { l1: "the next station is…", en: "announcement naming the upcoming stop" },
            { l1: "Does this go to…?", en: "Is this train/bus heading to…?" },
            { l1: "Is this the right stop for…?", en: "asking if you should get off here" },
            { l1: "to get off", en: "to leave the train or bus" },
            { l1: "to change", en: "to switch to another line", note: "'Change at King's Cross.'" },
            { l1: "the terminus", en: "the last stop on the line" },
            { l1: "all change", en: "everyone must get off; the train goes no further" },
            { l1: "Excuse me", en: "polite phrase to get attention or get past someone" },
          ],
        },
        {
          type: "dialogue",
          heading: "Checking with a passenger",
          setup: "You're on a bus and not sure it's the right one.",
          lines: [
            { speaker: "You", l1: "Excuse me, does this bus go to the British Museum?", en: "Politely checking the destination." },
            { speaker: "Passenger", l1: "It does, yes. It's about four stops away.", en: "'It does' confirms yes." },
            { speaker: "You", l1: "Thanks. Is this the right stop for Russell Square?", en: "Checking whether to get off here." },
            { speaker: "Passenger", l1: "Not yet — get off at the next one.", en: "'Not yet' means wait one more stop." },
            { speaker: "You", l1: "Brilliant, cheers.", en: "'Cheers' is a casual British 'thanks'." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the question",
          items: [
            {
              template: "Excuse me, does this ___ to Oxford Street?",
              answer: "go",
              en: "Asking the direction.",
              options: ["go", "goes", "going", "went"],
            },
            {
              template: "Is this the right ___ for the Tower of London?",
              answer: "stop",
              en: "Asking where to get off.",
              options: ["stop", "platform", "station", "exit"],
            },
            {
              template: "You need to ___ at King's Cross for the Victoria line.",
              answer: "change",
              en: "Switch lines there.",
              options: ["change", "get off", "tap", "wait"],
            },
            {
              template: "___ the gap between the train and the platform.",
              answer: "Mind",
              en: "Watch the space.",
              options: ["Mind", "Watch", "See", "Hold"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Lesson check",
          questions: [
            {
              q: "What does 'mind the gap' mean?",
              options: [
                "Look after your luggage",
                "Watch the space between train and platform",
                "Stand back from the doors",
                "Have your ticket ready",
              ],
              correct: 1,
            },
            {
              q: "Which question checks the train's direction?",
              options: [
                "How much is the fare?",
                "Does this go to Camden?",
                "Where can I top up?",
                "Is the lift working?",
              ],
              correct: 1,
            },
            {
              q: "A passenger says 'Not yet — get off at the next one.' You should…",
              options: ["get off immediately", "wait one more stop", "change lines", "tap out now"],
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
        q: "What do Londoners call the underground railway?",
        options: ["the Metro", "the Tube", "the Subway", "the Rail"],
        correct: 1,
      },
      {
        q: "An Oyster card is…",
        options: [
          "a paper ticket",
          "a reusable travel card you top up",
          "a discount railcard",
          "a bus pass only",
        ],
        correct: 1,
      },
      {
        q: "On the Tube you must…",
        options: ["only tap in", "only tap out", "tap in and tap out", "show a paper ticket"],
        correct: 2,
      },
      {
        q: "A 'return' ticket is…",
        options: ["one way", "there and back", "a refund", "a season ticket"],
        correct: 1,
      },
      {
        q: "'Off-peak' tickets are…",
        options: [
          "more expensive and flexible",
          "cheaper, outside rush hour",
          "only for railcard holders",
          "valid only on buses",
        ],
        correct: 1,
      },
      {
        q: "Which question asks where to catch the train?",
        options: ["Which platform is it?", "How much is it?", "Does this go far?", "Is it off-peak?"],
        correct: 0,
      },
      {
        q: "'Mind the gap' tells you to…",
        options: [
          "watch your wallet",
          "watch the space at the platform edge",
          "hold the doors",
          "stand on the right",
        ],
        correct: 1,
      },
      {
        q: "To switch from one Tube line to another, you…",
        options: ["tap out", "change", "top up", "mind the gap"],
        correct: 1,
      },
      {
        q: "On a London bus you pay…",
        options: [
          "by distance with tap in and out",
          "a flat fare, tapping in only",
          "in cash only",
          "nothing",
        ],
        correct: 1,
      },
      {
        q: "Which is the natural way to check your direction with a stranger?",
        options: [
          "Give me the direction.",
          "Does this go to Greenwich?",
          "I go Greenwich?",
          "Where this train?",
        ],
        correct: 1,
      },
    ],
  },
};
