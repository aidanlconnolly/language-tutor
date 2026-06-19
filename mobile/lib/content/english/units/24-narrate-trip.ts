import type { Unit } from "../../types";

export const UNIT_NARRATE_TRIP: Unit = {
  slug: "narrate-trip",
  stage: 5,
  order: 24,
  icon: "📖",
  title: "Narrating a trip",
  tagline: "Combine your tenses to tell the story of your travels.",
  badge: "core",
  lessons: [
    {
      slug: "narrate-trip-sequencing",
      title: "Sequencing a story with connectors",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Putting events in order",
          body: [
            "A good travel story isn't just a list of past verbs — it <strong>flows</strong>. Connectors tell your listener what came next: <strong>first, then, after that, later, in the end, finally</strong>.",
            "Use the <strong>past simple</strong> for the main chain of events (what you did, one after another): <em>First we landed at Heathrow. Then we took the Tube into town. After that, we checked into the hotel.</em>",
            "Time phrases anchor the story: <strong>on the first day, the next morning, that evening, by the time we left</strong>.",
            "Two handy linkers: <strong>so</strong> (result — <em>It was raining, so we took a cab</em>) and <strong>but</strong> (contrast — <em>We wanted to see the Tower, but it was closed</em>).",
          ],
          keyPoint:
            "Main events = past simple, joined with first / then / after that / later / finally. Add 'so' (result) and 'but' (contrast).",
        },
        {
          type: "vocab",
          heading: "Sequencing connectors",
          items: [
            { l1: "first", en: "the opening event", note: "First, we arrived at the airport." },
            { l1: "then", en: "the next event" },
            { l1: "after that", en: "following the previous event" },
            { l1: "later", en: "some time afterwards" },
            { l1: "in the morning / evening", en: "anchors the time of day" },
            { l1: "the next day", en: "on the following day" },
            { l1: "finally", en: "the last event", note: "Finally, we flew home." },
            { l1: "in the end", en: "after everything / as a result" },
            { l1: "so", en: "introduces a result", note: "It rained, so we stayed in." },
            { l1: "but", en: "introduces a contrast" },
          ],
        },
        {
          type: "dialogue",
          heading: "How was your trip?",
          setup: "Back at work after a long weekend in York.",
          lines: [
            { speaker: "Sam", l1: "How was York? Tell me everything.", en: "" },
            { speaker: "Aisha", l1: "Brilliant! First we caught the train from King's Cross. Then we walked the old city walls.", en: "'caught the train' = took the train." },
            { speaker: "Sam", l1: "Did you see the Minster?", en: "The Minster = York's famous cathedral." },
            { speaker: "Aisha", l1: "We did, the next morning. After that, we wanted to visit the railway museum, but it was packed, so we had tea instead.", en: "'packed' = very crowded." },
            { speaker: "Sam", l1: "And in the end?", en: "" },
            { speaker: "Aisha", l1: "Finally, we caught the last train home. Exhausted, but happy.", en: "" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Add the connector",
          intro: "Choose the word that keeps the story flowing.",
          items: [
            {
              template: "___ , we arrived at the hotel and dropped off our bags.",
              answer: "First",
              en: "First, we arrived at the hotel and dropped off our bags.",
              options: ["First", "Finally", "But", "Later"],
            },
            {
              template: "It started to rain, ___ we went into a café.",
              answer: "so",
              en: "It started to rain, so we went into a café.",
              options: ["but", "so", "first", "finally"],
            },
            {
              template: "We wanted to climb the tower, ___ it was closed.",
              answer: "but",
              en: "We wanted to climb the tower, but it was closed.",
              options: ["so", "but", "then", "first"],
            },
            {
              template: "___ , we caught the last bus home.",
              answer: "Finally",
              en: "Finally, we caught the last bus home.",
              options: ["First", "Finally", "But", "So"],
            },
          ],
        },
      ],
    },
    {
      slug: "narrate-trip-memorable-day",
      title: "Describing a memorable day",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Mixing past simple and past continuous",
          body: [
            "A vivid day needs <strong>both</strong> past tenses. Use the <strong>past continuous</strong> (was/were + -ing) to paint the background, and the <strong>past simple</strong> for the events that happened.",
            "<em>The sun <strong>was shining</strong> and the streets <strong>were buzzing</strong>. We <strong>walked</strong> down to the river, <strong>bought</strong> ice creams, and <strong>watched</strong> the boats go by.</em>",
            "Drop in an interruption to make it lively: <em>While we <strong>were eating</strong>, it suddenly <strong>started</strong> to rain.</em>",
            "Remember the irregulars from earlier units: <em>go → went, see → saw, eat → ate, have → had, take → took, find → found</em>.",
          ],
          keyPoint:
            "Scene = past continuous (was/were + -ing); events = past simple. Combine them for a rich, natural story.",
        },
        {
          type: "conjugation",
          heading: "The two narrative tenses together",
          verb: "narrate the past",
          meaning: "background + events in a story",
          intro: "Background sets the mood; events drive the story forward.",
          tenses: [
            {
              name: "Background — past continuous",
              forms: [
                { person: "The sun", form: "was shining", en: "the weather, ongoing" },
                { person: "People", form: "were sitting outside", en: "the surroundings" },
                { person: "We", form: "were feeling great", en: "the mood at the time" },
              ],
            },
            {
              name: "Events — past simple",
              forms: [
                { person: "We", form: "walked to the bridge", en: "regular past" },
                { person: "We", form: "saw the parade", en: "irregular: see → saw" },
                { person: "We", form: "had lunch by the river", en: "irregular: have → had" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the memorable day",
          intro: "Choose past simple for events and past continuous for the background.",
          items: [
            {
              template: "The sun ___ (shine) as we ___ (leave) the hotel.",
              answer: "was shining",
              en: "The sun was shining as we left the hotel.",
              options: ["was shining", "shone", "were shining", "shines"],
            },
            {
              template: "We ___ (walk) to the market and ___ (buy) some fruit.",
              answer: "walked",
              en: "We walked to the market and bought some fruit.",
              options: ["were walking", "walked", "walk", "was walking"],
            },
            {
              template: "While we ___ (eat) lunch, a street band ___ (start) to play.",
              answer: "were eating",
              en: "While we were eating lunch, a street band started to play.",
              options: ["ate", "were eating", "was eating", "eat"],
            },
            {
              template: "In the afternoon we ___ (see) the cathedral and ___ (take) lots of photos.",
              answer: "saw",
              en: "In the afternoon we saw the cathedral and took lots of photos.",
              options: ["were seeing", "saw", "see", "seen"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Describe a memorable day: the sun was shining, you walked through the park, and you had a picnic by the lake.",
          reference: "The sun was shining, so we walked through the park and had a picnic by the lake.",
          hint: "Background in the past continuous (was shining); events in the past simple (walked, had).",
        },
        {
          type: "multipleChoice",
          heading: "Pick the natural sentence",
          questions: [
            {
              q: "Which mixes the tenses correctly?",
              options: [
                "We walked along the beach while the sun set was shining.",
                "We were walking along the beach when we saw a seal.",
                "We were walk along the beach when we were seeing a seal.",
                "We walked along the beach when we were seeing a seal.",
              ],
              correct: 1,
              fb: "Background = past continuous (were walking); event = past simple (saw).",
            },
            {
              q: "Choose the correct opener for a scene:",
              options: ["The market buzzed once.", "The market was buzzing.", "The market buzz.", "The market has buzzed."],
              correct: 1,
              fb: "A background scene → past continuous.",
            },
            {
              q: "Which is correct?",
              options: ["We had lunch and saw the show.", "We were having lunch and were seeing the show.", "We have lunch and see the show.", "We had lunch and were seeing the show once."],
              correct: 0,
              fb: "A chain of finished events → past simple throughout.",
            },
          ],
        },
      ],
    },
    {
      slug: "narrate-trip-future-plans",
      title: "Talking about future travel plans",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "From past stories to future trips",
          body: [
            "Once you can tell a past trip, you can talk about the <strong>next</strong> one. Use the futures from the last unit: <strong>going to</strong> for plans you've decided, <strong>will</strong> for predictions and on-the-spot decisions, and the <strong>present continuous</strong> for fixed arrangements with times.",
            "<em>(plan) Next year I'm going to travel around Italy. (arrangement) We're flying to Rome on the 3rd. (prediction) It'll be hot in July. (decision) I haven't booked a hotel yet — I'll do it tonight.</em>",
            "Future time phrases: <strong>tomorrow, next week, next summer, in August, the day after tomorrow, soon</strong>.",
          ],
          keyPoint:
            "Plans = going to; arrangements (with a time) = present continuous; predictions/decisions = will.",
        },
        {
          type: "vocab",
          heading: "Travel-plan phrases",
          items: [
            { l1: "I'm going to book the flights.", en: "a plan already decided" },
            { l1: "We're flying out on Friday.", en: "a fixed arrangement with a date" },
            { l1: "It'll be busy in August.", en: "a prediction" },
            { l1: "I'll sort out the tickets later.", en: "a decision / promise" },
            { l1: "next summer", en: "the coming summer" },
            { l1: "the day after tomorrow", en: "two days from now" },
            { l1: "I can't wait!", en: "expressing excitement" },
            { l1: "We're planning to…", en: "introduces an intention" },
          ],
        },
        {
          type: "dialogue",
          heading: "Planning the next trip",
          setup: "Two friends dream up a summer holiday.",
          lines: [
            { speaker: "Noor", l1: "So, where are we going next summer?", en: "" },
            { speaker: "Leo", l1: "I'm going to suggest Lisbon. I've always wanted to go.", en: "an intention → going to." },
            { speaker: "Noor", l1: "Perfect. It'll be warm but not too hot in June.", en: "a prediction → will." },
            { speaker: "Leo", l1: "My cousin's getting married there on the 12th, so we're flying out on the 10th.", en: "a fixed arrangement → present continuous." },
            { speaker: "Noor", l1: "Brilliant. I'll book the flights tonight, then.", en: "decision made on the spot → will." },
            { speaker: "Leo", l1: "Amazing. I can't wait!", en: "" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the right future",
          intro: "going to (plan), present continuous (arrangement), or will (prediction/decision).",
          items: [
            {
              template: "Next year we ___ travel around Spain. (a plan we've made)",
              answer: "are going to",
              en: "Next year we are going to travel around Spain.",
              options: ["are going to", "will", "travel", "travelled"],
            },
            {
              template: "Our train ___ at 9am on Saturday. (booked)",
              answer: "is leaving",
              en: "Our train is leaving at 9am on Saturday.",
              options: ["will leave", "is leaving", "leaves once", "left"],
            },
            {
              template: "I think it ___ be sunny all week. (just a guess)",
              answer: "will",
              en: "I think it will be sunny all week.",
              options: ["will", "is going to", "is", "was"],
            },
            {
              template: "There's no milk — I ___ buy some on the way. (deciding now)",
              answer: "'ll",
              en: "There's no milk — I'll buy some on the way.",
              options: ["'ll", "'m going to", "buy", "bought"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Tell the story of your first day in London: you arrived in the morning, it was raining, you took the Tube, and tomorrow you're going to visit the British Museum.",
          reference: "I arrived in the morning. It was raining, so I took the Tube into town. Tomorrow I'm going to visit the British Museum.",
          hint: "Mix tenses: past simple (arrived, took) + past continuous background (was raining) + going to for the plan.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "A plan you've already decided uses…",
              options: ["will", "going to", "the past simple", "the past continuous"],
              correct: 1,
            },
            {
              q: "Choose the correct background scene:",
              options: ["It rained while we waited once.", "It was raining while we were waiting.", "It rains while we wait.", "It was rain while we wait."],
              correct: 1,
            },
            {
              q: "A fixed travel arrangement with a date:",
              options: ["We'll fly on the 3rd.", "We're flying on the 3rd.", "We fly on the 3rd once.", "We flew on the 3rd."],
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
        q: "Which connector signals the LAST event in a story?",
        options: ["first", "then", "finally", "so"],
        correct: 2,
      },
      {
        q: "'It rained, ___ we stayed inside.' (result)",
        options: ["but", "so", "first", "then"],
        correct: 1,
      },
      {
        q: "The main chain of events in a story uses the…",
        options: ["past continuous", "past simple", "present simple", "will future"],
        correct: 1,
      },
      {
        q: "The background scene of a story uses the…",
        options: ["past simple", "past continuous", "going to future", "present perfect"],
        correct: 1,
      },
      {
        q: "Choose the correct mix:",
        options: ["We were walking when we saw the parade.", "We walked when we were seeing the parade.", "We were walk when we saw the parade.", "We walk when we were seeing the parade."],
        correct: 0,
      },
      {
        q: "Irregular past of 'take':",
        options: ["taked", "taken", "took", "tooked"],
        correct: 2,
      },
      {
        q: "A future plan you've decided: 'Next year I ___ travel around Italy.'",
        options: ["will", "'m going to", "travel", "travelled"],
        correct: 1,
      },
      {
        q: "A booked arrangement with a date: 'We ___ on the 10th.'",
        options: ["'ll fly", "'re flying", "fly once", "flew"],
        correct: 1,
      },
      {
        q: "A prediction (just a guess): 'I think it ___ be hot.'",
        options: ["will", "is", "was", "were"],
        correct: 0,
      },
      {
        q: "Choose the correct opening for a vivid day:",
        options: ["The sun shone once.", "The sun was shining.", "The sun shines.", "The sun has shone."],
        correct: 1,
      },
    ],
  },
};
