import type { Unit } from "../../types";

export const UNIT_CULTURE_ARTS: Unit = {
  slug: "culture-arts",
  stage: 7,
  order: 31,
  icon: "🖼️",
  title: "Museums & the arts",
  tagline: "The British Museum, the West End, 'have you seen…?'",
  badge: "culture",
  lessons: [
    {
      slug: "culture-arts-museums",
      title: "Museums & galleries",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Many museums are free",
          body: [
            "London is full of world-class museums, and a great British perk: most of the big national ones offer <strong>free entry</strong> — the British Museum, the Tate, the National Gallery, the Natural History Museum.",
            "You pay only for <strong>special exhibitions</strong> (temporary shows), where you usually <strong>book a timed ticket</strong> in advance.",
            "Useful museum English: <em>the permanent collection</em> (always there), <em>an exhibition</em> (temporary), <em>the gift shop</em>, <em>the cloakroom</em> (where you leave coats and bags), and <em>donations welcome</em> (a suggested but optional payment).",
          ],
          tip: {
            label: "Free, but...",
            body: "Free national museums often invite a <strong>donation</strong> — a small contribution, usually around £5, dropped in a box at the entrance. It's optional, but appreciated, and keeps the doors open and free.",
          },
        },
        {
          type: "vocab",
          heading: "Museum & gallery words",
          items: [
            { l1: "free entry", en: "no admission charge", note: "Common at national museums." },
            { l1: "an exhibition", en: "a temporary display of art or objects" },
            { l1: "the permanent collection", en: "the works always on display" },
            { l1: "a timed ticket", en: "a ticket for a specific entry slot" },
            { l1: "to book in advance", en: "to reserve before you go" },
            { l1: "a donation", en: "an optional contribution of money" },
            { l1: "the cloakroom", en: "where you leave coats and bags" },
            { l1: "the gift shop", en: "the shop selling souvenirs" },
            { l1: "a guided tour", en: "a tour led by a guide" },
            { l1: "an audio guide", en: "a handset that narrates as you walk" },
            { l1: "a gallery", en: "a room or building displaying art" },
            { l1: "an artefact", en: "a historical object on display" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the British Museum entrance",
          setup: "A visitor approaches the front desk in the Great Court.",
          lines: [
            { speaker: "Visitor", l1: "Hi, is it free to get in?", en: "Hello, is admission free?" },
            { speaker: "Staff", l1: "Yes, the main collection is free. Donations are welcome, though.", en: "Yes, the main collection is free. Donations are welcome, though." },
            { speaker: "Visitor", l1: "Lovely. Do I need a ticket for the Egypt exhibition?", en: "Great. Do I need a ticket for the Egypt exhibition?" },
            { speaker: "Staff", l1: "You do — it's a timed ticket. Have you booked in advance?", en: "You do — it's a timed ticket. Have you booked in advance?" },
            { speaker: "Visitor", l1: "Not yet. Can I get one now?", en: "Not yet. Can I get one now?" },
            { speaker: "Staff", l1: "Of course. The next slot is at two. The cloakroom's on your left.", en: "Of course. The next slot is at two. The cloakroom is on your left." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the sentence",
          intro: "Choose the museum word that fits.",
          items: [
            {
              template: "The National Gallery has ___ entry — you don't pay to go in.",
              answer: "free",
              en: "The National Gallery has free entry.",
              options: ["free", "timed", "guided", "paid"],
            },
            {
              template: "We should ___ the tickets in advance; the show sells out.",
              answer: "book",
              en: "We should book the tickets in advance.",
              options: ["book", "donate", "guide", "leave"],
            },
            {
              template: "Leave your big bag in the ___ by the entrance.",
              answer: "cloakroom",
              en: "Leave your big bag in the cloakroom.",
              options: ["gift shop", "cloakroom", "gallery", "exhibition"],
            },
            {
              template: "The mummies are part of the permanent ___.",
              answer: "collection",
              en: "The mummies are part of the permanent collection.",
              options: ["ticket", "collection", "tour", "donation"],
            },
          ],
        },
      ],
    },
    {
      slug: "culture-arts-theatre",
      title: "Theatre & the West End",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "London's theatre heartland",
          body: [
            "The <strong>West End</strong> is London's theatre district — the British equivalent of Broadway — packed with musicals, plays and long-running shows around Shaftesbury Avenue and Covent Garden.",
            "To go, you <strong>book tickets</strong> for a <strong>performance</strong>. Cheaper seats are <em>up in the gods</em> (the highest balcony); the best are in the <em>stalls</em> (ground floor) or <em>dress circle</em>.",
            "You can grab discounted same-day tickets at the <strong>TKTS booth</strong> in Leicester Square. A show has an <strong>interval</strong> (a break in the middle) — the American word <em>intermission</em> is understood but not used.",
            "A very common conversation opener: <strong>Have you seen…?</strong> — <em>Have you seen the new play at the National?</em>",
          ],
          keyPoint:
            "West End = London theatre. Book tickets for a performance; mind the interval; 'Have you seen…?' opens the chat.",
        },
        {
          type: "vocab",
          heading: "Theatre words",
          items: [
            { l1: "the West End", en: "London's main theatre district" },
            { l1: "a play", en: "a (usually spoken) theatre production" },
            { l1: "a musical", en: "a show with songs and dancing" },
            { l1: "a performance", en: "a single showing of a production" },
            { l1: "a matinee", en: "an afternoon performance" },
            { l1: "the stalls", en: "ground-floor seats", note: "Usually the priciest." },
            { l1: "the gods", en: "the highest, cheapest seats", note: "Informal: 'up in the gods'." },
            { l1: "the interval", en: "the break in the middle of a show", note: "Not 'intermission' in Britain." },
            { l1: "to book tickets", en: "to reserve seats" },
            { l1: "sold out", en: "no tickets left" },
            { l1: "the box office", en: "where you buy tickets at the venue" },
            { l1: "the curtain call", en: "the bows at the end" },
          ],
        },
        {
          type: "dialogue",
          heading: "Booking at the box office",
          setup: "Two friends decide what to see on a Saturday in the West End.",
          lines: [
            { speaker: "Ben", l1: "Have you seen the new musical at the Lyric?", en: "Have you seen the new musical at the Lyric theatre?" },
            { speaker: "Maya", l1: "Not yet — everyone says it's brilliant. Is it sold out?", en: "Not yet — everyone says it's wonderful. Are there no tickets left?" },
            { speaker: "Ben", l1: "The evening is, but there's a matinee with seats in the gods.", en: "The evening performance is, but there's an afternoon one with cheap top seats." },
            { speaker: "Maya", l1: "I don't mind the gods. How long is it?", en: "I don't mind the high seats. How long is it?" },
            { speaker: "Ben", l1: "About two and a half hours, with an interval.", en: "About two and a half hours, with a break in the middle." },
            { speaker: "Maya", l1: "Perfect. Let's book it.", en: "Perfect. Let's reserve the tickets." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in a natural order.",
          items: [
            { tokens: ["Have", "you", "seen", "the", "new", "play"], en: "Have you seen the new play?" },
            { tokens: ["The", "evening", "show", "is", "sold", "out"], en: "The evening show is sold out." },
            { tokens: ["There's", "an", "interval", "after", "the", "first", "act"], en: "There's an interval after the first act." },
            { tokens: ["Let's", "book", "two", "tickets", "for", "the", "matinee"], en: "Let's book two tickets for the matinee." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Ask a friend if they've seen the new musical, and say the evening show is sold out.",
          reference: "Have you seen the new musical? The evening show is sold out.",
          hint: "Use 'Have you seen…?' and 'sold out' for no tickets left.",
        },
      ],
    },
    {
      slug: "culture-arts-opinions",
      title: "Giving opinions on what you've seen",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Sharing what you thought",
          body: [
            "After a show or exhibition, the natural question is <em>What did you think?</em> or <em>Did you enjoy it?</em> Your answer is a small, polite opinion.",
            "Positive: <strong>I really enjoyed it.</strong> / <strong>It was fantastic.</strong> / <strong>I'd definitely recommend it.</strong>",
            "Lukewarm or negative, done the British way — gently: <strong>It was a bit slow.</strong> / <strong>It wasn't really my thing.</strong> / <strong>It was alright, I suppose.</strong> Brits soften criticism with words like <em>a bit</em>, <em>quite</em> and <em>I suppose</em>.",
          ],
          keyPoint:
            "Praise plainly ('I really enjoyed it'); criticise gently ('it was a bit slow', 'not really my thing').",
        },
        {
          type: "vocab",
          heading: "Opinion phrases",
          items: [
            { l1: "I really enjoyed it", en: "a warm positive opinion" },
            { l1: "It was fantastic / brilliant", en: "strong praise" },
            { l1: "I'd recommend it", en: "I think you should see it too" },
            { l1: "It was a bit slow", en: "gentle criticism — too slow" },
            { l1: "It wasn't really my thing", en: "polite 'I didn't like it'" },
            { l1: "It was alright", en: "lukewarm — neither good nor bad", note: "'Alright, I suppose' is even cooler." },
            { l1: "a bit long", en: "softened 'too long'" },
            { l1: "overrated", en: "less good than people say" },
            { l1: "the acting was superb", en: "the performances were excellent" },
            { l1: "What did you think?", en: "asking for an opinion" },
            { l1: "Did you enjoy it?", en: "asking if someone liked it" },
            { l1: "to be honest, ...", en: "softens a frank opinion" },
          ],
        },
        {
          type: "dialogue",
          heading: "After the show",
          setup: "Leaving the theatre, the friends compare notes.",
          lines: [
            { speaker: "Maya", l1: "So, what did you think?", en: "So, what did you think?" },
            { speaker: "Ben", l1: "I really enjoyed it. The acting was superb.", en: "I really enjoyed it. The performances were excellent." },
            { speaker: "Maya", l1: "Yeah, it was great. The second half was a bit slow, though.", en: "Yes, it was great. The second half was a bit slow, though." },
            { speaker: "Ben", l1: "To be honest, I didn't mind. Would you recommend it?", en: "Honestly, I didn't mind. Would you recommend it to others?" },
            { speaker: "Maya", l1: "Definitely. Not perfect, but well worth it.", en: "Definitely. Not perfect, but well worth seeing." },
            { speaker: "Ben", l1: "Same. Fancy a cuppa before we head off?", en: "Me too. Want a cup of tea before we leave?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "What do they mean?",
          questions: [
            {
              q: "'It wasn't really my thing.' The speaker…",
              options: ["loved it", "didn't enjoy it much", "hasn't seen it", "found it scary"],
              correct: 1,
            },
            {
              q: "'It was a bit slow' is an example of…",
              options: ["strong praise", "gentle, softened criticism", "a question", "an apology"],
              correct: 1,
            },
            {
              q: "Which is the warmest praise?",
              options: ["It was alright.", "It was a bit long.", "It was fantastic.", "Not really my thing."],
              correct: 2,
            },
            {
              q: "'What did you think?' is asking for…",
              options: ["the time", "your opinion", "the price", "directions"],
              correct: 1,
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which phrase recommends something?",
              options: ["I'd recommend it.", "It was a bit slow.", "Not my thing.", "It was overrated."],
              correct: 0,
            },
            {
              q: "The British way to say you disliked a play politely is…",
              options: ["It was terrible.", "It wasn't really my thing.", "I hated it.", "What a waste."],
              correct: 1,
            },
            {
              q: "Complete: 'I really ___ it.'",
              options: ["enjoyed", "recommend", "slow", "honest"],
              correct: 0,
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
        q: "Most big national museums in London offer…",
        options: ["free entry", "no exhibitions", "only guided tours", "evening shows only"],
        correct: 0,
      },
      {
        q: "A 'donation' at a free museum is…",
        options: ["compulsory", "an optional contribution", "a guided tour", "a souvenir"],
        correct: 1,
      },
      {
        q: "Where do you leave your coat and bag?",
        options: ["the gift shop", "the cloakroom", "the gods", "the stalls"],
        correct: 1,
      },
      {
        q: "The 'West End' is London's…",
        options: ["shopping district", "theatre district", "financial district", "museum quarter"],
        correct: 1,
      },
      {
        q: "In a British theatre, the break in the middle is called the…",
        options: ["intermission", "interval", "matinee", "curtain call"],
        correct: 1,
      },
      {
        q: "'The gods' are…",
        options: ["the best seats", "the highest, cheapest seats", "the actors", "the box office"],
        correct: 1,
      },
      {
        q: "'Sold out' means…",
        options: ["tickets are cheap", "no tickets are left", "the show is free", "the show is cancelled"],
        correct: 1,
      },
      {
        q: "A common way to open a chat about a show is…",
        options: ["How much was it?", "Have you seen…?", "Where are you?", "What time is it?"],
        correct: 1,
      },
      {
        q: "'It was a bit slow' is…",
        options: ["high praise", "softened criticism", "a recommendation", "a question"],
        correct: 1,
      },
      {
        q: "The polite British way to say you didn't enjoy something is…",
        options: ["It was awful.", "It wasn't really my thing.", "I hated every minute.", "Total rubbish."],
        correct: 1,
      },
    ],
  },
};
