import type { Unit } from "../../types";

export const UNIT_DIRECTIONS: Unit = {
  slug: "directions",
  stage: 3,
  order: 11,
  icon: "🧭",
  title: "Asking for directions",
  tagline: "Left, right, straight on — 'excuse me, where's…?'",
  badge: "tourist",
  lessons: [
    {
      slug: "directions-vocab",
      title: "Left, right, straight on",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The words that get you there",
          body: [
            "Directions in English are built from a small set of words: <strong>left</strong>, <strong>right</strong>, and <strong>straight on</strong> (Americans say 'straight ahead').",
            "You also need <strong>position words</strong>: something is <strong>opposite</strong> (facing) you, <strong>next to</strong> (beside) something, or <strong>on the corner</strong>.",
            "London loves a <strong>roundabout</strong> — a circular junction where you 'take the second exit'. And a <strong>zebra crossing</strong> is the black-and-white striped pedestrian crossing.",
          ],
          keyPoint: "Core set: left, right, straight on, opposite, next to, on the corner, roundabout.",
        },
        {
          type: "vocab",
          heading: "Direction and position words",
          items: [
            { l1: "left", en: "the opposite of right" },
            { l1: "right", en: "the opposite of left" },
            { l1: "straight on", en: "keep going forward, don't turn", note: "US: 'straight ahead'." },
            { l1: "to turn", en: "to change direction" },
            { l1: "opposite", en: "facing, on the other side", note: "'The bank is opposite the park.'" },
            { l1: "next to", en: "beside, right by" },
            { l1: "on the corner", en: "where two streets meet" },
            { l1: "the roundabout", en: "a circular road junction" },
            { l1: "the junction", en: "where roads cross or meet" },
            { l1: "the zebra crossing", en: "a striped pedestrian crossing" },
            { l1: "the traffic lights", en: "the red/amber/green signals" },
            { l1: "round the corner", en: "just past the corner, nearby" },
          ],
        },
        {
          type: "tip",
          heading: "'On the left' vs 'turn left'",
          body: "Use <strong>'on the left/right'</strong> to describe where something <em>is</em> ('the shop is on the right'), and <strong>'turn left/right'</strong> to tell someone to <em>change direction</em> ('turn left at the lights'). Mixing these up is the most common beginner slip.",
          example: { l1: "Turn right at the lights, and it's on the left.", en: "Change direction at the lights; the place is on your left side." },
        },
        {
          type: "fillBlank",
          heading: "Choose the word",
          items: [
            {
              template: "Go ___ on for about two minutes.",
              answer: "straight",
              en: "Keep going forward.",
              options: ["straight", "left", "right", "round"],
            },
            {
              template: "The café is ___ to the bank.",
              answer: "next",
              en: "Right beside it.",
              options: ["next", "opposite", "straight", "round"],
            },
            {
              template: "Turn ___ at the traffic lights.",
              answer: "left",
              en: "Change direction.",
              options: ["left", "straight", "opposite", "corner"],
            },
            {
              template: "The station is ___ the park, on the other side.",
              answer: "opposite",
              en: "Facing it.",
              options: ["opposite", "next", "round", "on"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "Which means 'keep going forward'?",
              options: ["turn left", "straight on", "opposite", "round the corner"],
              correct: 1,
            },
            {
              q: "A 'roundabout' is…",
              options: [
                "a pedestrian crossing",
                "a circular road junction",
                "a set of traffic lights",
                "a bus stop",
              ],
              correct: 1,
            },
            {
              q: "'The shop is opposite the church' means it is…",
              options: ["beside the church", "facing the church across the road", "behind the church", "inside the church"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "directions-asking-politely",
      title: "Asking politely",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Start with 'Excuse me'",
          body: [
            "To stop a stranger politely, always open with <strong>'Excuse me'</strong>. Then ask your question.",
            "The most natural question is <em>'Excuse me, how do I get to…?'</em> You can also say <em>'Could you tell me the way to…?'</em> or simply <em>'Where's the nearest…?'</em>",
            "Adding <strong>'please'</strong> and a smile goes a long way — politeness is expected, not optional, in Britain.",
          ],
          keyPoint: "Open with 'Excuse me', then 'how do I get to…?' or 'where's the nearest…?'",
        },
        {
          type: "vocab",
          heading: "Polite question phrases",
          items: [
            { l1: "Excuse me…", en: "polite opener to get attention" },
            { l1: "How do I get to…?", en: "asking the way to a place" },
            { l1: "Could you tell me the way to…?", en: "a more formal way to ask directions" },
            { l1: "Where's the nearest…?", en: "asking for the closest example of something" },
            { l1: "Is it far?", en: "asking about distance" },
            { l1: "How long does it take?", en: "asking the time on foot" },
            { l1: "Is it within walking distance?", en: "close enough to walk to" },
            { l1: "Sorry to bother you", en: "extra-polite opener; 'sorry to interrupt'" },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking a passer-by",
          setup: "You're lost near Trafalgar Square and stop someone.",
          lines: [
            { speaker: "You", l1: "Excuse me, how do I get to the National Gallery?", en: "Polite opener plus the direct question." },
            { speaker: "Local", l1: "It's just there, opposite the square.", en: "'Just there' = very close, right in front." },
            { speaker: "You", l1: "Oh, lovely. Is it far?", en: "Checking the distance." },
            { speaker: "Local", l1: "No, a two-minute walk.", en: "Very close, easily walkable." },
            { speaker: "You", l1: "Thanks so much. Sorry to bother you.", en: "Polite thanks and apology for interrupting." },
            { speaker: "Local", l1: "No bother at all.", en: "'No bother' = not a problem." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the polite question",
          items: [
            { tokens: ["Excuse", "me", ",", "how", "do", "I", "get", "to", "the", "station", "?"], en: "Excuse me, how do I get to the station?" },
            { tokens: ["Where's", "the", "nearest", "cash", "machine", "?"], en: "Where's the nearest cash machine?" },
            { tokens: ["Could", "you", "tell", "me", "the", "way", "to", "the", "park", "?"], en: "Could you tell me the way to the park?" },
            { tokens: ["Is", "it", "within", "walking", "distance", "?"], en: "Is it within walking distance?" },
          ],
        },
        {
          type: "translate",
          heading: "Say it in natural English",
          direction: "en-to-l1",
          prompt: "Politely stop someone and ask the way to the nearest Tube station.",
          reference: "Excuse me, how do I get to the nearest Tube station?",
          hint: "Open with 'Excuse me' and use 'how do I get to…?'",
        },
      ],
    },
    {
      slug: "directions-understanding",
      title: "Understanding the answer",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Listening for landmarks",
          body: [
            "When someone gives directions, they string together the words you've learnt: <em>'Go straight on, take the second left, and it's opposite the pub.'</em>",
            "They'll often anchor directions to <strong>landmarks</strong> — a pub, a church, the lights, a bridge — rather than street names. Listen for these.",
            "If you don't catch it, it's perfectly polite to ask them to repeat: <em>'Sorry, could you say that again?'</em> or <em>'Could you slow down a bit?'</em>",
          ],
          keyPoint: "Listen for landmarks (pub, church, lights). Ask to repeat with 'Sorry, could you say that again?'",
        },
        {
          type: "vocab",
          heading: "Phrases in the answer",
          items: [
            { l1: "take the first left", en: "turn at the first left-hand street" },
            { l1: "take the second right", en: "turn at the second right-hand street" },
            { l1: "go past", en: "continue beyond something" },
            { l1: "carry on", en: "keep going", note: "'Carry on' = continue." },
            { l1: "you can't miss it", en: "it's very easy to find" },
            { l1: "it's on your left", en: "it will be on your left side" },
            { l1: "at the end of the road", en: "where the street finishes" },
            { l1: "Could you say that again?", en: "polite request to repeat" },
            { l1: "Could you slow down a bit?", en: "asking someone to speak more slowly" },
          ],
        },
        {
          type: "dialogue",
          heading: "Following the directions",
          setup: "You've asked the way to a pub called The Anchor.",
          lines: [
            { speaker: "Local", l1: "Right, go straight on and take the second left.", en: "'Right' here is just a filler, like 'OK'." },
            { speaker: "You", l1: "Straight on, second left. Got it.", en: "Repeating back to confirm. 'Got it' = understood." },
            { speaker: "Local", l1: "Then carry on past the church, and it's on your right.", en: "Continue beyond the church." },
            { speaker: "You", l1: "Sorry, could you say that again?", en: "Politely asking to repeat." },
            { speaker: "Local", l1: "Past the church, and it's on your right. You can't miss it.", en: "It's very easy to find." },
            { speaker: "You", l1: "Brilliant, thank you.", en: "Casual British thanks." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the directions",
          items: [
            {
              template: "Take the ___ left, then it's on your right.",
              answer: "first",
              en: "Turn at the first left-hand street.",
              options: ["first", "next", "straight", "opposite"],
            },
            {
              template: "Carry ___ past the bridge.",
              answer: "on",
              en: "Keep going beyond the bridge.",
              options: ["on", "off", "out", "up"],
            },
            {
              template: "It's at the ___ of the road.",
              answer: "end",
              en: "Where the street finishes.",
              options: ["end", "corner", "side", "front"],
            },
            {
              template: "Sorry, could you say that ___?",
              answer: "again",
              en: "Asking to repeat.",
              options: ["again", "slower", "more", "twice"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Lesson check",
          questions: [
            {
              q: "'You can't miss it' means…",
              options: ["it's hard to find", "it's very easy to find", "you'll be late", "it's closed"],
              correct: 1,
            },
            {
              q: "Which phrase asks someone to repeat?",
              options: [
                "Could you slow down a bit?",
                "Could you say that again?",
                "Is it far?",
                "Carry on past the church.",
              ],
              correct: 1,
            },
            {
              q: "'Take the second left' means…",
              options: [
                "turn left immediately",
                "turn at the second left-hand street",
                "turn left twice",
                "stay on the left",
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
        q: "Which means 'keep going forward, don't turn'?",
        options: ["turn left", "straight on", "opposite", "next to"],
        correct: 1,
      },
      {
        q: "How should you politely stop a stranger?",
        options: ["Hey, you!", "Excuse me…", "Listen…", "Give me directions."],
        correct: 1,
      },
      {
        q: "'The bank is opposite the park' means it's…",
        options: ["beside the park", "facing the park across the road", "behind the park", "in the park"],
        correct: 1,
      },
      {
        q: "Which is the most natural question for directions?",
        options: [
          "Where I go station?",
          "How do I get to the station?",
          "Station is where?",
          "I want station.",
        ],
        correct: 1,
      },
      {
        q: "A 'roundabout' is…",
        options: ["a crossing", "a circular road junction", "a bus stop", "traffic lights"],
        correct: 1,
      },
      {
        q: "'Take the second left' means…",
        options: ["turn left now", "turn at the second left-hand street", "turn left twice", "keep to the left"],
        correct: 1,
      },
      {
        q: "'You can't miss it' means…",
        options: ["it's hard to find", "it's very easy to find", "it's far", "it's closed"],
        correct: 1,
      },
      {
        q: "Which asks someone to repeat?",
        options: ["Is it far?", "Could you say that again?", "Carry on.", "On the corner."],
        correct: 1,
      },
      {
        q: "To tell someone to change direction, you say…",
        options: ["on the left", "turn left", "it's on the left", "the left one"],
        correct: 1,
      },
      {
        q: "'Within walking distance' means…",
        options: ["too far to walk", "close enough to walk", "across the river", "near a Tube"],
        correct: 1,
      },
    ],
  },
};
