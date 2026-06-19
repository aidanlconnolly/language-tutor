import type { Unit } from "../../types";

export const UNIT_LANDMARKS: Unit = {
  slug: "landmarks",
  stage: 3,
  order: 14,
  icon: "🏛️",
  title: "London landmarks",
  tagline: "Big Ben, the Eye, the Thames — talking about what you've seen.",
  badge: "culture",
  lessons: [
    {
      slug: "landmarks-the-sights",
      title: "The big sights",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "London's famous sights",
          body: [
            "<strong>Big Ben</strong> is the nickname for the great bell (and, loosely, the clock tower) at the <strong>Houses of Parliament</strong> by the river.",
            "The <strong>London Eye</strong> is the giant observation wheel on the South Bank; the <strong>Tower of London</strong> is the ancient castle that guards the Crown Jewels.",
            "<strong>Buckingham Palace</strong> is the King's official London home, famous for the <strong>Changing of the Guard</strong>. All of them sit on or near the <strong>Thames</strong>, London's river.",
          ],
          tip: {
            label: "Saying it right",
            body: "The river is the <em>Thames</em> — pronounced 'temz', not 'thaymz'. And it's the 'Tower <em>of</em> London', not the 'London Tower'.",
          },
        },
        {
          type: "vocab",
          heading: "Landmark vocabulary",
          items: [
            { l1: "Big Ben", en: "the famous bell and clock tower by Parliament" },
            { l1: "the Houses of Parliament", en: "where the UK government meets" },
            { l1: "the London Eye", en: "the giant observation wheel" },
            { l1: "the Tower of London", en: "the historic castle and Crown Jewels" },
            { l1: "Buckingham Palace", en: "the King's official London residence" },
            { l1: "the Changing of the Guard", en: "the ceremony of soldiers swapping duty" },
            { l1: "the Thames", en: "London's river", note: "Pronounced 'temz'." },
            { l1: "a landmark", en: "a famous, easily recognised place" },
            { l1: "the view", en: "what you can see from a high or open spot" },
            { l1: "a guided tour", en: "a visit led by a guide who explains things" },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning the day",
          setup: "Two travellers decide where to go first.",
          lines: [
            { speaker: "Sam", l1: "Shall we start with the Tower of London?", en: "'Shall we…?' suggests a plan." },
            { speaker: "Lee", l1: "Good idea. Then we can walk along the Thames.", en: "Following the river." },
            { speaker: "Sam", l1: "And go on the London Eye for the view?", en: "Riding the wheel for the scenery." },
            { speaker: "Lee", l1: "Definitely. Big Ben's near there too.", en: "The clock tower is close by." },
            { speaker: "Sam", l1: "Perfect. It's all within walking distance.", en: "Close enough to walk between." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Name the landmark",
          items: [
            {
              template: "The Crown Jewels are kept at the ___ of London.",
              answer: "Tower",
              en: "The historic castle.",
              options: ["Tower", "Palace", "Eye", "Bridge"],
            },
            {
              template: "The King lives at Buckingham ___.",
              answer: "Palace",
              en: "His London residence.",
              options: ["Palace", "House", "Tower", "Hall"],
            },
            {
              template: "We went up the London ___ for the view.",
              answer: "Eye",
              en: "The observation wheel.",
              options: ["Eye", "Tower", "Bridge", "Wheel"],
            },
            {
              template: "London's river is the ___.",
              answer: "Thames",
              en: "Pronounced 'temz'.",
              options: ["Thames", "Severn", "Mersey", "Avon"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "Big Ben is…",
              options: [
                "a museum",
                "the famous bell and clock tower by Parliament",
                "a Tube line",
                "a department store",
              ],
              correct: 1,
            },
            {
              q: "Where are the Crown Jewels kept?",
              options: ["Buckingham Palace", "the Tower of London", "the London Eye", "the British Museum"],
              correct: 1,
            },
            {
              q: "How is 'the Thames' pronounced?",
              options: ["thaymz", "temz", "thaymes", "tames"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "landmarks-tickets",
      title: "Tickets & opening hours",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Buying tickets and checking times",
          body: [
            "Many attractions charge <strong>admission</strong> (the entry price). You buy <strong>tickets</strong>, often cheaper if you book <strong>in advance</strong> online.",
            "Look out for <strong>concessions</strong> — reduced prices for children, students and older visitors. Some museums, like the British Museum, are <strong>free</strong>.",
            "Always check the <strong>opening hours</strong>. The natural questions are <em>'What time do you open?'</em> and <em>'What time do you close?'</em>",
          ],
          keyPoint: "admission = entry price. concessions = reduced rates. Ask 'What time do you open/close?'",
        },
        {
          type: "vocab",
          heading: "Tickets & hours vocabulary",
          items: [
            { l1: "admission", en: "the entry price" },
            { l1: "a ticket", en: "what lets you in" },
            { l1: "in advance", en: "before the day, ahead of time" },
            { l1: "a concession", en: "a reduced price for some groups" },
            { l1: "free", en: "no charge" },
            { l1: "opening hours", en: "the times a place is open" },
            { l1: "the last entry", en: "the latest time you can go in" },
            { l1: "a guided tour", en: "a visit led by a guide" },
            { l1: "sold out", en: "no tickets left" },
            { l1: "What time do you close?", en: "asking the closing time" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the ticket desk",
          setup: "You're buying tickets for the Tower of London.",
          lines: [
            { speaker: "You", l1: "Hi, two adult tickets, please. How much is admission?", en: "Asking the entry price." },
            { speaker: "Staff", l1: "It's £34.80 each, or less if you booked in advance.", en: "Cheaper if bought ahead online." },
            { speaker: "You", l1: "Are there concessions for students?", en: "Asking about reduced prices." },
            { speaker: "Staff", l1: "Yes, with a valid student card.", en: "Available with proof." },
            { speaker: "You", l1: "Great. And what time do you close?", en: "Checking closing time." },
            { speaker: "Staff", l1: "Five thirty, last entry at half four.", en: "'Half four' = 4:30." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the question",
          items: [
            { tokens: ["How", "much", "is", "admission", "?"], en: "How much is admission?" },
            { tokens: ["Are", "there", "concessions", "for", "students", "?"], en: "Are there concessions for students?" },
            { tokens: ["What", "time", "do", "you", "close", "?"], en: "What time do you close?" },
            { tokens: ["Can", "I", "book", "tickets", "in", "advance", "?"], en: "Can I book tickets in advance?" },
          ],
        },
        {
          type: "translate",
          heading: "Say it in natural English",
          direction: "en-to-l1",
          prompt: "Ask the entry price, then ask what time they close.",
          reference: "How much is admission? And what time do you close?",
          hint: "Use 'admission' for the entry price and a simple 'What time…?' question.",
        },
      ],
    },
    {
      slug: "landmarks-sightseeing",
      title: "Talking about sightseeing",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "'Have you been to…?'",
          body: [
            "To talk about experiences, English uses the <strong>present perfect</strong>: <em>'Have you been to the London Eye?'</em> — meaning at any time in your life up to now.",
            "You answer <em>'Yes, I have'</em> or <em>'No, I haven't (yet)'</em>. To recommend a place, the classic British phrase is <strong>'It's worth a visit'</strong> (it deserves the trip).",
            "Other handy reactions: <em>'It's well worth it'</em>, <em>'It was amazing'</em>, or, more lukewarm, <em>'It was a bit overrated'</em> (not as good as people say).",
          ],
          keyPoint: "Ask experiences with 'Have you been to…?' Recommend with 'It's worth a visit.'",
        },
        {
          type: "vocab",
          heading: "Sightseeing phrases",
          items: [
            { l1: "Have you been to…?", en: "asking if someone has visited a place" },
            { l1: "I've been to…", en: "saying you have visited it" },
            { l1: "I haven't been yet", en: "you still plan to go" },
            { l1: "It's worth a visit.", en: "it deserves the trip; recommended" },
            { l1: "It's well worth it.", en: "very much worth the effort or money" },
            { l1: "It was amazing.", en: "it was wonderful" },
            { l1: "overrated", en: "not as good as people say" },
            { l1: "the highlight", en: "the best part" },
            { l1: "sightseeing", en: "visiting famous places as a tourist" },
            { l1: "breathtaking", en: "stunningly beautiful" },
          ],
        },
        {
          type: "dialogue",
          heading: "Comparing notes",
          setup: "Two friends chat about what they've seen.",
          lines: [
            { speaker: "Ana", l1: "Have you been to the Tower of London?", en: "Asking about a past experience." },
            { speaker: "Tom", l1: "Yes, I have — the Crown Jewels were the highlight.", en: "'The highlight' = the best part." },
            { speaker: "Ana", l1: "I haven't been yet. Is it worth a visit?", en: "She still plans to go." },
            { speaker: "Tom", l1: "Definitely. It's well worth it.", en: "Strongly recommended." },
            { speaker: "Ana", l1: "And the London Eye?", en: "Asking about another sight." },
            { speaker: "Tom", l1: "Honestly, a bit overrated — but the view's breathtaking.", en: "Mixed: not all hype, but a stunning view." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the conversation",
          items: [
            {
              template: "___ you been to Buckingham Palace?",
              answer: "Have",
              en: "Asking about experience.",
              options: ["Have", "Did", "Are", "Do"],
            },
            {
              template: "No, I ___ been yet.",
              answer: "haven't",
              en: "You still plan to go.",
              options: ["haven't", "didn't", "wasn't", "don't"],
            },
            {
              template: "It's definitely ___ a visit.",
              answer: "worth",
              en: "It deserves the trip.",
              options: ["worth", "value", "good", "nice"],
            },
            {
              template: "The view from the top was ___.",
              answer: "breathtaking",
              en: "Stunningly beautiful.",
              options: ["breathtaking", "overrated", "closed", "free"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Lesson check",
          questions: [
            {
              q: "Which asks about a past experience?",
              options: [
                "Do you go to the Eye?",
                "Have you been to the Eye?",
                "Are you the Eye?",
                "Will you the Eye?",
              ],
              correct: 1,
            },
            {
              q: "'It's worth a visit' means…",
              options: ["it's expensive", "it deserves the trip", "it's closed", "it's free"],
              correct: 1,
            },
            {
              q: "If something is 'overrated', it is…",
              options: ["better than people say", "not as good as people say", "very cheap", "sold out"],
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
        q: "Big Ben is…",
        options: ["a museum", "the famous bell and clock tower by Parliament", "a palace", "a Tube line"],
        correct: 1,
      },
      {
        q: "Where are the Crown Jewels kept?",
        options: ["Buckingham Palace", "the Tower of London", "the London Eye", "the National Gallery"],
        correct: 1,
      },
      {
        q: "The London Eye is…",
        options: ["a castle", "a giant observation wheel", "a cathedral", "a market"],
        correct: 1,
      },
      {
        q: "London's river is the…",
        options: ["Severn", "Thames", "Mersey", "Tyne"],
        correct: 1,
      },
      {
        q: "'Admission' means…",
        options: ["the closing time", "the entry price", "a guided tour", "a discount"],
        correct: 1,
      },
      {
        q: "'Concessions' are…",
        options: ["snack stalls", "reduced prices for some visitors", "free maps", "guided tours"],
        correct: 1,
      },
      {
        q: "Which asks about a past experience?",
        options: ["Do you go to the Tower?", "Have you been to the Tower?", "Are you Tower?", "Will the Tower?"],
        correct: 1,
      },
      {
        q: "'It's worth a visit' means…",
        options: ["it's costly", "it deserves the trip", "it's far", "it's shut"],
        correct: 1,
      },
      {
        q: "If a place is 'overrated', it is…",
        options: ["better than people say", "not as good as people say", "very cheap", "very near"],
        correct: 1,
      },
      {
        q: "Buckingham Palace is famous for the…",
        options: ["Changing of the Guard", "Crown Jewels", "observation wheel", "fish market"],
        correct: 0,
      },
    ],
  },
};
