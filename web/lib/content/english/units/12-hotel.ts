import type { Unit } from "../../types";

export const UNIT_HOTEL: Unit = {
  slug: "hotel",
  stage: 3,
  order: 12,
  icon: "🏨",
  title: "Airport & hotel",
  tagline: "Heathrow, check-in, booking a room, room vocab, problems.",
  badge: "tourist",
  lessons: [
    {
      slug: "hotel-heathrow",
      title: "At Heathrow",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Landing at Heathrow",
          body: [
            "<strong>Heathrow</strong> is London's biggest airport. After you land, you go through <strong>passport control</strong> (also called border control or immigration).",
            "The officer will ask the <strong>purpose of your visit</strong> — usually <em>'business or pleasure?'</em> — and how long you're staying. Answer clearly and simply.",
            "Then you collect your suitcase at <strong>baggage reclaim</strong> (Americans say 'baggage claim') and go through <strong>customs</strong>: the green channel if you have nothing to declare, the red channel if you do.",
          ],
          keyPoint: "Order: passport control → baggage reclaim → customs (green = nothing to declare).",
        },
        {
          type: "vocab",
          heading: "Airport vocabulary",
          items: [
            { l1: "passport control", en: "where officers check your passport" },
            { l1: "the purpose of your visit", en: "the reason you've come" },
            { l1: "business or pleasure", en: "for work, or for a holiday" },
            { l1: "baggage reclaim", en: "where you collect your checked suitcase", note: "US: 'baggage claim'." },
            { l1: "customs", en: "where they check what you're bringing in" },
            { l1: "to declare", en: "to officially tell customs about goods you carry" },
            { l1: "hand luggage", en: "the bag you take onto the plane", note: "US: 'carry-on'." },
            { l1: "a suitcase", en: "the large bag you check in" },
            { l1: "the arrivals hall", en: "where you exit after landing" },
            { l1: "a connecting flight", en: "a second flight you change onto" },
          ],
        },
        {
          type: "dialogue",
          heading: "At passport control",
          setup: "An officer at Heathrow checks your passport.",
          lines: [
            { speaker: "Officer", l1: "Good morning. What's the purpose of your visit?", en: "Why have you come to the UK?" },
            { speaker: "You", l1: "I'm here on holiday.", en: "A leisure trip; US would say 'on vacation'." },
            { speaker: "Officer", l1: "How long are you staying?", en: "The length of your trip." },
            { speaker: "You", l1: "Ten days.", en: "A short, clear answer." },
            { speaker: "Officer", l1: "And where are you staying?", en: "Your accommodation." },
            { speaker: "You", l1: "At a hotel in central London.", en: "A clear, simple reply." },
            { speaker: "Officer", l1: "Enjoy your stay.", en: "A friendly closing; you can go." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the answer",
          items: [
            {
              template: "I'm here on ___.",
              answer: "holiday",
              en: "A leisure trip.",
              options: ["holiday", "business", "work", "visit"],
            },
            {
              template: "I'll collect my suitcase at baggage ___.",
              answer: "reclaim",
              en: "Where checked bags arrive.",
              options: ["reclaim", "control", "customs", "office"],
            },
            {
              template: "I have nothing to ___.",
              answer: "declare",
              en: "Tell customs about.",
              options: ["declare", "pay", "carry", "show"],
            },
            {
              template: "I'm staying for ten ___.",
              answer: "days",
              en: "The trip length.",
              options: ["days", "nights", "weeks", "hours"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "'The purpose of your visit' asks…",
              options: ["where you live", "why you've come", "how much money you have", "your job title"],
              correct: 1,
            },
            {
              q: "Where do you collect a checked suitcase?",
              options: ["passport control", "baggage reclaim", "customs", "the gate"],
              correct: 1,
            },
            {
              q: "If you have nothing to declare, you use the…",
              options: ["red channel", "green channel", "blue channel", "VIP channel"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "hotel-check-in",
      title: "Hotel check-in",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Checking in",
          body: [
            "At the hotel <strong>reception</strong> (or front desk), the key phrase is <em>'I have a reservation'</em> (a booking made in advance).",
            "You'll choose between room types: a <strong>single</strong> (one bed), a <strong>double</strong> (one big bed), a <strong>twin</strong> (two separate beds), and you may be asked about <strong>en-suite</strong> (a private bathroom).",
            "<strong>Check-in</strong> is when you arrive; <strong>check-out</strong> is when you leave — often by 11am. Breakfast may be <strong>included</strong> or extra.",
          ],
          keyPoint: "'I have a reservation.' Room types: single, double, twin. En-suite = private bathroom.",
        },
        {
          type: "vocab",
          heading: "Hotel vocabulary",
          items: [
            { l1: "a reservation", en: "a booking made in advance", note: "Also called 'a booking'." },
            { l1: "reception", en: "the front desk", note: "The receptionist works there." },
            { l1: "a single room", en: "a room with one bed for one person" },
            { l1: "a double room", en: "a room with one large bed" },
            { l1: "a twin room", en: "a room with two separate beds" },
            { l1: "en-suite", en: "with a private bathroom attached" },
            { l1: "to check in", en: "to arrive and register at the hotel" },
            { l1: "to check out", en: "to leave and settle the bill" },
            { l1: "included", en: "already part of the price", note: "'Breakfast is included.'" },
            { l1: "the key card", en: "the card that opens your room" },
          ],
        },
        {
          type: "dialogue",
          heading: "At reception",
          setup: "You arrive at a London hotel with a booking.",
          lines: [
            { speaker: "You", l1: "Hello, I have a reservation under Garcia.", en: "'Under' = booked in the name of." },
            { speaker: "Receptionist", l1: "Welcome. A double room for three nights?", en: "Confirming the booking details." },
            { speaker: "You", l1: "That's right. Is breakfast included?", en: "Checking what the price covers." },
            { speaker: "Receptionist", l1: "Yes, it's served from seven to ten.", en: "Breakfast times." },
            { speaker: "You", l1: "Lovely. What time is check-out?", en: "When you must leave." },
            { speaker: "Receptionist", l1: "Eleven o'clock. Here's your key card.", en: "Check-out time plus your room card." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the check-in lines",
          items: [
            { tokens: ["I", "have", "a", "reservation", "under", "Smith", "."], en: "I have a reservation under Smith." },
            { tokens: ["Is", "breakfast", "included", "?"], en: "Is breakfast included?" },
            { tokens: ["What", "time", "is", "check-out", "?"], en: "What time is check-out?" },
            { tokens: ["I'd", "like", "a", "twin", "room", ",", "please", "."], en: "I'd like a twin room, please." },
          ],
        },
        {
          type: "translate",
          heading: "Say it in natural English",
          direction: "en-to-l1",
          prompt: "Tell the receptionist you have a booking and ask whether breakfast is included.",
          reference: "I have a reservation. Is breakfast included?",
          hint: "Use 'reservation' or 'booking', then a simple yes/no question.",
        },
      ],
    },
    {
      slug: "hotel-problems",
      title: "Room vocab and polite problems",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "When something's wrong",
          body: [
            "British complaints are wrapped in politeness. You rarely say something is broken directly; you say it <strong>'isn't working'</strong> — <em>'the heating isn't working'</em>, <em>'the Wi-Fi isn't working'</em>.",
            "Soften the request even more with <em>'I'm sorry, but…'</em> or <em>'Could you possibly…?'</em> This is expected, not weak.",
            "Know your room words: the <strong>heating</strong>, the <strong>air conditioning</strong>, the <strong>shower</strong>, the <strong>towels</strong>, the <strong>kettle</strong>, and the <strong>lift</strong> (Americans say 'elevator').",
          ],
          keyPoint: "Polite complaint pattern: 'I'm sorry, but the [thing] isn't working. Could you…?'",
        },
        {
          type: "vocab",
          heading: "Room vocabulary",
          items: [
            { l1: "the heating", en: "the system that warms the room" },
            { l1: "the air conditioning", en: "the system that cools the room", note: "Often shortened to 'the air con'." },
            { l1: "the shower", en: "where you wash standing up" },
            { l1: "the towels", en: "cloths for drying yourself" },
            { l1: "the kettle", en: "the device that boils water for tea", note: "A British essential." },
            { l1: "the lift", en: "the elevator", note: "US: 'elevator'." },
            { l1: "the Wi-Fi", en: "the wireless internet" },
            { l1: "isn't working", en: "is broken or not functioning" },
            { l1: "to sort out", en: "to fix or deal with a problem" },
            { l1: "extra", en: "an additional one", note: "'an extra towel'." },
          ],
        },
        {
          type: "dialogue",
          heading: "A polite complaint",
          setup: "You phone reception about a problem in your room.",
          lines: [
            { speaker: "You", l1: "Hi, sorry to bother you — the heating isn't working.", en: "Polite opener; 'isn't working' = is broken." },
            { speaker: "Receptionist", l1: "Oh, I'm sorry about that. I'll send someone up.", en: "Apology plus a fix." },
            { speaker: "You", l1: "Thanks. Could I also have an extra towel?", en: "A softened additional request." },
            { speaker: "Receptionist", l1: "Of course. Anything else?", en: "Offering further help." },
            { speaker: "You", l1: "No, that's all. And the lift seems quite slow.", en: "Mentioning a minor issue gently." },
            { speaker: "Receptionist", l1: "I'll let maintenance know. We'll sort it out.", en: "'Sort it out' = deal with it." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Make a polite complaint",
          items: [
            {
              template: "Sorry to bother you, but the shower ___ working.",
              answer: "isn't",
              en: "Politely saying it's broken.",
              options: ["isn't", "not", "doesn't", "won't"],
            },
            {
              template: "Could I have an ___ towel, please?",
              answer: "extra",
              en: "One more.",
              options: ["extra", "other", "more", "another"],
            },
            {
              template: "The ___ doesn't boil — I can't make tea.",
              answer: "kettle",
              en: "Boils water for tea.",
              options: ["kettle", "lift", "heating", "shower"],
            },
            {
              template: "We'll ___ it out for you straight away.",
              answer: "sort",
              en: "Fix the problem.",
              options: ["sort", "work", "make", "put"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Lesson check",
          questions: [
            {
              q: "The polite British way to say the heater is broken is…",
              options: [
                "The heating is destroyed.",
                "The heating isn't working.",
                "Your heating is bad.",
                "Fix the heating now.",
              ],
              correct: 1,
            },
            {
              q: "In British English, the 'lift' is the…",
              options: ["staircase", "elevator", "reception", "corridor"],
              correct: 1,
            },
            {
              q: "'We'll sort it out' means…",
              options: ["we'll ignore it", "we'll deal with it", "we'll charge you", "we'll close the hotel"],
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
        q: "At passport control, 'the purpose of your visit' asks…",
        options: ["where you live", "why you've come", "your job", "your age"],
        correct: 1,
      },
      {
        q: "Where do you collect a checked suitcase?",
        options: ["passport control", "baggage reclaim", "the gate", "reception"],
        correct: 1,
      },
      {
        q: "The phrase for arriving with a booking is…",
        options: ["I want a room.", "I have a reservation.", "Give me a key.", "Where's my room?"],
        correct: 1,
      },
      {
        q: "A 'twin room' has…",
        options: ["one big bed", "two separate beds", "no bed", "a private bathroom only"],
        correct: 1,
      },
      {
        q: "'En-suite' means the room has…",
        options: ["a balcony", "a private bathroom", "breakfast included", "a sea view"],
        correct: 1,
      },
      {
        q: "'Is breakfast included?' asks whether breakfast is…",
        options: ["free of extra charge", "served late", "self-service", "in the room"],
        correct: 0,
      },
      {
        q: "The polite way to report a broken heater is…",
        options: [
          "The heating is destroyed.",
          "The heating isn't working.",
          "Your heating is rubbish.",
          "I demand a new room.",
        ],
        correct: 1,
      },
      {
        q: "In British English, the 'lift' is the…",
        options: ["staircase", "elevator", "corridor", "balcony"],
        correct: 1,
      },
      {
        q: "'Check-out' is…",
        options: ["when you arrive", "when you leave", "the breakfast room", "the front desk"],
        correct: 1,
      },
      {
        q: "Which is the most natural, polite request?",
        options: [
          "Give me a towel.",
          "Could I have an extra towel, please?",
          "Towel now.",
          "I need towel.",
        ],
        correct: 1,
      },
    ],
  },
};
