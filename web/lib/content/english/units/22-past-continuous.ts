import type { Unit } from "../../types";

export const UNIT_PAST_CONTINUOUS: Unit = {
  slug: "past-continuous",
  stage: 5,
  order: 22,
  icon: "🌅",
  title: "Past continuous",
  tagline: "'I was walking when…' — setting the scene in a story.",
  badge: "core",
  lessons: [
    {
      slug: "past-continuous-was-were-ing",
      title: "was / were + -ing",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "An action in progress in the past",
          body: [
            "The past continuous describes an action that was <strong>in progress</strong> at a moment in the past — it had already begun and hadn't finished yet. <em>At eight o'clock I was having dinner.</em>",
            "Formula: <strong>was / were + verb-ing</strong>. Use <strong>was</strong> with I, he, she, it; use <strong>were</strong> with you, we, they.",
            "It paints the <strong>background</strong> of a story: <em>The sun was shining. People were walking by the river. Birds were singing.</em> Nothing is finished — you're describing a scene.",
          ],
          keyPoint:
            "Past continuous = was/were + -ing. was → I/he/she/it; were → you/we/they. Describes an action in progress.",
        },
        {
          type: "conjugation",
          heading: "'walk' in the past continuous",
          verb: "walk",
          meaning: "to move on foot",
          intro: "Only the helper changes (was/were); the -ing form stays the same.",
          tenses: [
            {
              name: "Past continuous",
              forms: [
                { person: "I", form: "was walking", en: "I was walking to the station." },
                { person: "you", form: "were walking", en: "You were walking ahead of me." },
                { person: "he/she/it", form: "was walking", en: "She was walking the dog." },
                { person: "we", form: "were walking", en: "We were walking by the Thames." },
                { person: "they", form: "were walking", en: "They were walking home." },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Spelling the -ing form",
          body: "Most verbs just add <strong>-ing</strong> (walk → walking, play → playing). If the verb ends in a single <strong>-e</strong>, drop it: <em>make → making, have → having, write → writing</em>. A short verb ending in a single vowel + consonant <strong>doubles</strong> it: <em>run → running, sit → sitting, swim → swimming</em>. Note: a few verbs (called 'state' verbs) like <em>know, like, want</em> are not usually used in the continuous.",
          example: { l1: "make → making, run → running", en: "drop -e / double the consonant" },
        },
        {
          type: "fillBlank",
          heading: "was or were + -ing",
          intro: "Match the helper to the subject and add the -ing form.",
          items: [
            {
              template: "At nine o'clock I ___ (have) breakfast.",
              answer: "was having",
              en: "At nine o'clock I was having breakfast.",
              options: ["was having", "were having", "was haveing", "were haveing"],
            },
            {
              template: "They ___ (wait) for the bus in the rain.",
              answer: "were waiting",
              en: "They were waiting for the bus in the rain.",
              options: ["was waiting", "were waiting", "were waitting", "was waitting"],
            },
            {
              template: "The children ___ (run) around the park.",
              answer: "were running",
              en: "The children were running around the park.",
              options: ["was running", "were runing", "were running", "was runing"],
            },
            {
              template: "She ___ (write) an email when I called.",
              answer: "was writing",
              en: "She was writing an email when I called.",
              options: ["were writing", "was writeing", "was writing", "were writting"],
            },
          ],
        },
      ],
    },
    {
      slug: "past-continuous-vs-simple",
      title: "Past continuous vs past simple",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "A longer action, interrupted by a shorter one",
          body: [
            "These two tenses team up. The <strong>past continuous</strong> sets a longer background action; the <strong>past simple</strong> drops in a shorter, sudden event that interrupts it.",
            "<em>I <strong>was cooking</strong> when the phone <strong>rang</strong>.</em> The cooking was already happening (continuous); the ringing happened suddenly inside it (simple).",
            "The two are usually joined by <strong>when</strong> or <strong>while</strong>. <em>While I was walking home, it started to rain. When she arrived, we were watching the news.</em>",
            "Rough rule: <strong>while + past continuous</strong> (the longer action), <strong>when + past simple</strong> (the sudden event) — though both connectors can be flexible.",
          ],
          keyPoint:
            "Background (longer) = past continuous; interruption (shorter, sudden) = past simple. 'I was cooking when the phone rang.'",
        },
        {
          type: "conjugation",
          heading: "Background + interruption",
          verb: "cook / ring",
          meaning: "showing how the two tenses combine",
          intro: "The continuous action sets the scene; the simple action interrupts it.",
          tenses: [
            {
              name: "was/were + -ing (background)",
              forms: [
                { person: "I", form: "was cooking", en: "the longer action, in progress" },
                { person: "we", form: "were watching TV", en: "the scene already happening" },
                { person: "she", form: "was sleeping", en: "ongoing when something happened" },
              ],
            },
            {
              name: "past simple (interruption)",
              forms: [
                { person: "the phone", form: "rang", en: "sudden, short event" },
                { person: "someone", form: "knocked", en: "broke into the scene" },
                { person: "the lights", form: "went out", en: "happened at one moment" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which tense fits the gap?",
          questions: [
            {
              q: "I ___ a shower when the doorbell rang.",
              options: ["had", "was having", "have", "am having"],
              correct: 1,
              fb: "The shower was the longer background action → past continuous.",
            },
            {
              q: "While we ___ dinner, the lights went out.",
              options: ["ate", "were eating", "eat", "have eaten"],
              correct: 1,
              fb: "'While' + the longer action → past continuous.",
            },
            {
              q: "When the train ___ , I was reading my book.",
              options: ["was stopping", "stopped", "stops", "were stopping"],
              correct: 1,
              fb: "The stop was the sudden event → past simple.",
            },
            {
              q: "She was walking to work when it ___ to rain.",
              options: ["was starting", "started", "starts", "start"],
              correct: 1,
              fb: "The rain starting is the short interruption → past simple.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Combine the two tenses",
          intro: "Use past continuous for the background and past simple for the interruption.",
          items: [
            {
              template: "I ___ (cook) dinner when the phone ___ (ring).",
              answer: "was cooking",
              en: "I was cooking dinner when the phone rang.",
              options: ["was cooking", "cooked", "were cooking", "cook"],
            },
            {
              template: "While they ___ (wait), the train ___ (arrive).",
              answer: "were waiting",
              en: "While they were waiting, the train arrived.",
              options: ["waited", "were waiting", "was waiting", "wait"],
            },
            {
              template: "When I saw her, she ___ (talk) on the phone.",
              answer: "was talking",
              en: "When I saw her, she was talking on the phone.",
              options: ["talked", "was talking", "were talking", "talks"],
            },
            {
              template: "It ___ (start) to rain while we were walking home.",
              answer: "started",
              en: "It started to rain while we were walking home.",
              options: ["was starting", "started", "starts", "were starting"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "What happened?",
          setup: "Two friends discuss a small accident in the kitchen.",
          lines: [
            { speaker: "Dev", l1: "What happened to your hand?", en: "" },
            { speaker: "Mia", l1: "I was chopping onions when the knife slipped.", en: "background = chopping; interruption = slipped." },
            { speaker: "Dev", l1: "Ouch! Were you watching the telly at the same time?", en: "'telly' = television (British, informal)." },
            { speaker: "Mia", l1: "Of course I was! That's how it happened.", en: "" },
            { speaker: "Dev", l1: "Classic. Were you at least making something nice?", en: "" },
            { speaker: "Mia", l1: "A curry. It was simmering while I sorted out the plaster.", en: "'plaster' = a bandage (British English)." },
          ],
        },
      ],
    },
    {
      slug: "past-continuous-set-a-scene",
      title: "Setting a scene and telling a richer story",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Open a story with the scene",
          body: [
            "Good storytellers often <strong>open with the past continuous</strong> to set the scene, then switch to the <strong>past simple</strong> for what actually happened.",
            "<em>It was raining and the streets were quiet. I was waiting at the bus stop. Suddenly, a black cab pulled up…</em>",
            "Useful scene-setting verbs: <strong>shine, rain, wait, sit, stand, watch, hold, wear</strong>. Useful 'sudden' connectors: <strong>suddenly, just then, all of a sudden, at that moment</strong>.",
          ],
          keyPoint:
            "Set the scene in the past continuous, then deliver the event in the past simple. 'I was waiting… suddenly, a cab pulled up.'",
        },
        {
          type: "vocab",
          heading: "Scene-setting language",
          items: [
            { l1: "It was raining.", en: "describes the weather as a background" },
            { l1: "The sun was shining.", en: "a bright, pleasant scene" },
            { l1: "The streets were quiet.", en: "describes the surroundings" },
            { l1: "I was waiting at the bus stop.", en: "what you were doing at the time" },
            { l1: "People were rushing past.", en: "background movement around you" },
            { l1: "suddenly", en: "marks the sudden event", note: "often starts the past-simple clause" },
            { l1: "just then", en: "at exactly that moment" },
            { l1: "all of a sudden", en: "very unexpectedly" },
            { l1: "at that moment", en: "precisely when something else happened" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the scene-setting sentence",
          items: [
            { tokens: ["The", "sun", "was", "shining", "in", "the", "park"], en: "The sun was shining in the park." },
            { tokens: ["I", "was", "waiting", "when", "the", "rain", "started"], en: "I was waiting when the rain started." },
            { tokens: ["People", "were", "rushing", "past", "the", "station"], en: "People were rushing past the station." },
            { tokens: ["Suddenly", "a", "dog", "ran", "across", "the", "road"], en: "Suddenly, a dog ran across the road." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Finish the little story",
          intro: "Past continuous for the scene; past simple for what happened.",
          items: [
            {
              template: "It ___ (rain) heavily and I ___ (wait) under a tree.",
              answer: "was raining",
              en: "It was raining heavily and I was waiting under a tree.",
              options: ["was raining", "rained", "were raining", "rains"],
            },
            {
              template: "Suddenly, a car ___ (stop) right in front of me.",
              answer: "stopped",
              en: "Suddenly, a car stopped right in front of me.",
              options: ["was stopping", "stopped", "stops", "were stopping"],
            },
            {
              template: "People ___ (hurry) past while the band ___ (play).",
              answer: "were hurrying",
              en: "People were hurrying past while the band was playing.",
              options: ["hurried", "were hurrying", "was hurrying", "hurry"],
            },
            {
              template: "At that moment, my phone ___ (ring).",
              answer: "rang",
              en: "At that moment, my phone rang.",
              options: ["was ringing", "rang", "rings", "were ringing"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Set a scene: it was raining and you were waiting at the bus stop when a friend arrived.",
          reference: "It was raining and I was waiting at the bus stop when a friend arrived.",
          hint: "Background actions in the past continuous (was raining, was waiting); the sudden event in the past simple (arrived).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Choose the scene-setter:",
              options: ["The sun shone briefly.", "The sun was shining.", "The sun shines.", "The sun has shone."],
              correct: 1,
            },
            {
              q: "I ___ to work when I ___ an old friend.",
              options: ["walked / was seeing", "was walking / saw", "walked / saw", "was walking / was seeing"],
              correct: 1,
            },
            {
              q: "Which helper goes with 'they'?",
              options: ["was", "were", "is", "are"],
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
        q: "Past continuous is formed with…",
        options: ["did + base verb", "was/were + -ing", "have + -ed", "will + base verb"],
        correct: 1,
      },
      {
        q: "Which helper goes with 'I'?",
        options: ["were", "was", "are", "did"],
        correct: 1,
      },
      {
        q: "Which helper goes with 'we'?",
        options: ["was", "were", "is", "did"],
        correct: 1,
      },
      {
        q: "Choose the correct sentence:",
        options: ["I was cook dinner.", "I was cooking dinner.", "I were cooking dinner.", "I was cookking dinner."],
        correct: 1,
      },
      {
        q: "The -ing form of 'run' is…",
        options: ["runing", "running", "runnning", "runed"],
        correct: 1,
      },
      {
        q: "The -ing form of 'write' is…",
        options: ["writeing", "writting", "writing", "writeng"],
        correct: 2,
      },
      {
        q: "In 'I was reading when the phone rang', the interruption is…",
        options: ["was reading", "rang", "when", "the phone"],
        correct: 1,
      },
      {
        q: "Choose the correct combination:",
        options: ["While I cooked, the phone was ringing.", "While I was cooking, the phone rang.", "While I cook, the phone rings.", "While I was cooking, the phone was ring."],
        correct: 1,
      },
      {
        q: "The past continuous is good for…",
        options: ["a finished, sudden event", "setting the background/scene", "a future plan", "a habit"],
        correct: 1,
      },
      {
        q: "Complete: 'They ___ TV when I arrived.'",
        options: ["watched", "were watching", "was watching", "watch"],
        correct: 1,
      },
    ],
  },
};
