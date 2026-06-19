import type { Unit } from "../../types";

export const UNIT_PAST_SIMPLE: Unit = {
  slug: "past-simple",
  stage: 5,
  order: 20,
  icon: "⏪",
  title: "Past simple (regular)",
  tagline: "'Yesterday I worked' — -ed endings, spelling and sounds.",
  badge: "core",
  lessons: [
    {
      slug: "past-simple-forming-ed",
      title: "Forming the past with -ed",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "One ending for everybody",
          body: [
            "The good news about the English past simple: for <strong>regular</strong> verbs you just add <strong>-ed</strong> — and the ending never changes for the person. <em>I worked, you worked, she worked, they worked.</em> No separate forms to learn.",
            "Use the past simple for a <strong>finished action</strong> at a definite time in the past: <em>Yesterday I walked to work. Last week we visited the Tower of London.</em>",
            "The spelling has a few small rules. If the verb already ends in <strong>-e</strong>, just add <strong>-d</strong>: <em>live → lived, like → liked</em>.",
          ],
          keyPoint:
            "Regular past = verb + -ed. Same form for I/you/he/she/it/we/they. Verb ends in -e? Just add -d.",
        },
        {
          type: "conjugation",
          heading: "'work' in the past simple",
          verb: "work",
          meaning: "to do a job / to function",
          intro: "Notice the form is identical for every person — only the subject changes.",
          tenses: [
            {
              name: "Past simple",
              forms: [
                { person: "I", form: "worked", en: "I worked yesterday." },
                { person: "you", form: "worked", en: "You worked late." },
                { person: "he/she/it", form: "worked", en: "She worked in the City." },
                { person: "we", form: "worked", en: "We worked together." },
                { person: "they", form: "worked", en: "They worked all weekend." },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "The spelling rules",
          body: "Three patterns cover almost every regular verb. <strong>1) Most verbs:</strong> just add <em>-ed</em> (play → played, watch → watched). <strong>2) Verb ends in -e:</strong> add only <em>-d</em> (live → lived, close → closed). <strong>3) Verb ends in consonant + -y:</strong> change y to i and add <em>-ed</em> (study → studied, try → tried). And one more: a short verb ending in a single vowel + consonant <em>doubles</em> the consonant (stop → stopped, plan → planned).",
          example: { l1: "stop → stopped, study → studied, live → lived", en: "double / y→i / +d" },
        },
        {
          type: "vocab",
          heading: "Regular verbs and their past forms",
          intro: "Read each base verb and its past form aloud.",
          items: [
            { l1: "work → worked", en: "did a job", note: "just add -ed" },
            { l1: "play → played", en: "took part in a game/sport", note: "just add -ed" },
            { l1: "watch → watched", en: "looked at (TV, a match)", note: "just add -ed" },
            { l1: "live → lived", en: "had your home somewhere", note: "ends in -e, add -d" },
            { l1: "like → liked", en: "enjoyed", note: "ends in -e, add -d" },
            { l1: "study → studied", en: "learned a subject", note: "y → ied" },
            { l1: "try → tried", en: "attempted", note: "y → ied" },
            { l1: "stop → stopped", en: "ended a movement/action", note: "double the p" },
            { l1: "plan → planned", en: "arranged in advance", note: "double the n" },
            { l1: "travel → travelled", en: "went on a journey", note: "British English doubles the l" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Add the right ending",
          intro: "Write the past simple form of the verb in brackets.",
          items: [
            {
              template: "Yesterday I ___ in a café in Soho. (work)",
              answer: "worked",
              en: "Yesterday I worked in a café in Soho.",
              options: ["worked", "worke", "workd", "working"],
            },
            {
              template: "We ___ in Camden for three years. (live)",
              answer: "lived",
              en: "We lived in Camden for three years.",
              options: ["liveed", "lived", "livd", "living"],
            },
            {
              template: "She ___ English at university. (study)",
              answer: "studied",
              en: "She studied English at university.",
              options: ["studyed", "studed", "studied", "studying"],
            },
            {
              template: "The bus ___ outside the station. (stop)",
              answer: "stopped",
              en: "The bus stopped outside the station.",
              options: ["stoped", "stopped", "stopd", "stopping"],
            },
            {
              template: "They ___ tennis in the park on Sunday. (play)",
              answer: "played",
              en: "They played tennis in the park on Sunday.",
              options: ["plaied", "playd", "played", "playied"],
            },
          ],
        },
      ],
    },
    {
      slug: "past-simple-three-sounds",
      title: "The three sounds of -ed",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Spelled the same, said three ways",
          body: [
            "Every regular past ends in <strong>-ed</strong> on paper, but it has <strong>three</strong> different sounds. You don't choose — the sound of the last letter of the base verb decides for you.",
            "<strong>/t/</strong> after voiceless sounds (p, k, f, s, sh, ch): <em>worked, stopped, watched, washed</em>. The -ed is a quick, soft <em>t</em>.",
            "<strong>/d/</strong> after voiced sounds and vowels (b, g, v, l, n, r, vowels): <em>lived, played, called, opened</em>. The -ed is a soft <em>d</em>.",
            "<strong>/ɪd/</strong> — an extra syllable — only after <strong>t</strong> or <strong>d</strong>: <em>wanted, needed, started, decided</em>. This is the one that adds a beat to the word.",
          ],
          keyPoint:
            "-ed = /t/ after voiceless sounds, /d/ after voiced sounds/vowels, /ɪd/ (extra syllable) only after t or d.",
        },
        {
          type: "tip",
          heading: "A quick test",
          body: "Only verbs ending in <strong>t</strong> or <strong>d</strong> get the extra <em>/ɪd/</em> syllable. Say <em>want</em> then <em>wanted</em> — you can hear two syllables become three. But <em>work → worked</em> stays one syllable: the -ed is just a hidden <em>t</em> sound. If you're unsure, ask: does the base verb end in a t/d sound? If yes, /ɪd/. If no, the -ed adds no extra beat.",
          example: { l1: "want → wan-ted (/ɪd/), but work → worked (one beat)", en: "t/d → extra syllable" },
        },
        {
          type: "pronounce",
          heading: "Say each group aloud",
          intro: "Listen for the difference: a soft t, a soft d, or a whole extra syllable.",
          items: [
            { l1: "worked", en: "/t/ sound", tip: "Ends in a k sound (voiceless) → wor-kt, one beat." },
            { l1: "stopped", en: "/t/ sound", tip: "p is voiceless → stopt, one beat." },
            { l1: "watched", en: "/t/ sound", tip: "ch is voiceless → wotcht, one beat." },
            { l1: "lived", en: "/d/ sound", tip: "v is voiced → livd, one beat." },
            { l1: "played", en: "/d/ sound", tip: "ends in a vowel sound → playd, one beat." },
            { l1: "opened", en: "/d/ sound", tip: "n is voiced → opend, one beat." },
            { l1: "wanted", en: "/ɪd/ sound", tip: "ends in t → wan-tid, an extra syllable." },
            { l1: "needed", en: "/ɪd/ sound", tip: "ends in d → nee-did, an extra syllable." },
            { l1: "started", en: "/ɪd/ sound", tip: "ends in t → star-tid, an extra syllable." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which sound does -ed make?",
          questions: [
            {
              q: "wanted",
              options: ["/t/", "/d/", "/ɪd/ (extra syllable)"],
              correct: 2,
              fb: "The base verb 'want' ends in t → /ɪd/, an extra syllable.",
            },
            {
              q: "played",
              options: ["/t/", "/d/", "/ɪd/ (extra syllable)"],
              correct: 1,
              fb: "Ends in a vowel sound (voiced) → /d/, no extra syllable.",
            },
            {
              q: "stopped",
              options: ["/t/", "/d/", "/ɪd/ (extra syllable)"],
              correct: 0,
              fb: "'p' is voiceless → /t/.",
            },
            {
              q: "needed",
              options: ["/t/", "/d/", "/ɪd/ (extra syllable)"],
              correct: 2,
              fb: "'need' ends in d → /ɪd/, an extra syllable.",
            },
            {
              q: "lived",
              options: ["/t/", "/d/", "/ɪd/ (extra syllable)"],
              correct: 1,
              fb: "'v' is voiced → /d/.",
            },
          ],
        },
      ],
    },
    {
      slug: "past-simple-time-narrative",
      title: "Time words and a short story",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Words that put you in the past",
          body: [
            "Certain time expressions tell your listener you're talking about the finished past: <strong>yesterday</strong>, <strong>last night / last week / last year</strong>, <strong>two days ago</strong>, <strong>this morning</strong> (if it's now finished), <strong>in 2019</strong>.",
            "<strong>ago</strong> comes <em>after</em> the length of time: <em>three days ago, a week ago, ten years ago</em>.",
            "<strong>last</strong> comes <em>before</em> the time word, with no 'the': <em>last week</em> (not <em>the last week</em>), <em>last night, last summer</em>.",
          ],
          keyPoint:
            "ago goes AFTER the time (two days ago). last goes BEFORE, no 'the' (last week).",
        },
        {
          type: "vocab",
          heading: "Past-time expressions",
          items: [
            { l1: "yesterday", en: "the day before today" },
            { l1: "yesterday morning", en: "the morning of the day before" },
            { l1: "last night", en: "the night before today", note: "not 'yesterday night'" },
            { l1: "last week", en: "the week before this one", note: "no 'the' before 'last'" },
            { l1: "last weekend", en: "the most recent Saturday/Sunday" },
            { l1: "two days ago", en: "two days before now", note: "'ago' comes after the time" },
            { l1: "a long time ago", en: "far in the past" },
            { l1: "this morning", en: "earlier today (now finished)" },
            { l1: "in 2019", en: "during that year" },
            { l1: "then", en: "after that / next in the story" },
          ],
        },
        {
          type: "dialogue",
          heading: "What did you do at the weekend?",
          setup: "Two friends catch up on Monday morning in a London office.",
          lines: [
            { speaker: "Priya", l1: "How was your weekend?", en: "" },
            { speaker: "Tom", l1: "Lovely, thanks. On Saturday I walked along the South Bank and watched the street performers.", en: "The South Bank = a riverside area by the Thames." },
            { speaker: "Priya", l1: "Nice! And on Sunday?", en: "" },
            { speaker: "Tom", l1: "I stayed at home and tidied the flat. Then I cooked a roast. What about you?", en: "'flat' = apartment (British English)." },
            { speaker: "Priya", l1: "I visited my sister in Greenwich. We talked for hours and played board games.", en: "" },
            { speaker: "Tom", l1: "Sounds perfect.", en: "" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Finish the story",
          intro: "Put the verb in the past simple. Watch the spelling.",
          items: [
            {
              template: "Last Saturday we ___ the British Museum. (visit)",
              answer: "visited",
              en: "Last Saturday we visited the British Museum.",
              options: ["visit", "visited", "visitted", "visiting"],
            },
            {
              template: "We ___ for two hours and then went home. (walk)",
              answer: "walked",
              en: "We walked for two hours and then went home.",
              options: ["walkd", "walking", "walked", "walken"],
            },
            {
              template: "A week ___ , I started a new job. (use the time word)",
              answer: "ago",
              en: "A week ago, I started a new job.",
              options: ["ago", "last", "before", "then"],
            },
            {
              template: "I really ___ the exhibition. (enjoy)",
              answer: "enjoyed",
              en: "I really enjoyed the exhibition.",
              options: ["enjoied", "enjoyd", "enjoyed", "enjoying"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Tell a friend what you did yesterday morning: you walked to work and watched a film in the evening.",
          reference: "Yesterday morning I walked to work, and in the evening I watched a film.",
          hint: "Both verbs are regular: walk → walked, watch → watched.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Past simple of 'study':",
              options: ["studyed", "studied", "studed", "studyd"],
              correct: 1,
            },
            {
              q: "Which is correct?",
              options: ["I worked two days ago.", "I worked ago two days.", "I worked the last week.", "I worked yesterday night."],
              correct: 0,
            },
            {
              q: "Which -ed makes an extra syllable /ɪd/?",
              options: ["played", "worked", "wanted", "lived"],
              correct: 2,
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
        q: "Regular past simple is formed by adding…",
        options: ["-ing", "-ed", "-s", "-en"],
        correct: 1,
      },
      {
        q: "Past simple of 'live':",
        options: ["liveed", "livd", "lived", "living"],
        correct: 2,
      },
      {
        q: "Past simple of 'stop':",
        options: ["stoped", "stopped", "stopd", "stopt"],
        correct: 1,
      },
      {
        q: "Past simple of 'study':",
        options: ["studyed", "studied", "studeed", "studyd"],
        correct: 1,
      },
      {
        q: "The past form is the same for…",
        options: ["only I and you", "every person (I/you/he/we/they)", "only he/she/it", "only plural subjects"],
        correct: 1,
      },
      {
        q: "Which word has the /ɪd/ (extra syllable) ending?",
        options: ["worked", "needed", "played", "lived"],
        correct: 1,
      },
      {
        q: "Which word has a /t/ ending?",
        options: ["opened", "watched", "played", "lived"],
        correct: 1,
      },
      {
        q: "Choose the correct sentence:",
        options: ["I visited London a week ago.", "I visited London ago a week.", "I visited London last the week.", "I visit London yesterday."],
        correct: 0,
      },
      {
        q: "'ago' goes…",
        options: ["before the time (ago a week)", "after the time (a week ago)", "at the start of the sentence", "with 'the'"],
        correct: 1,
      },
      {
        q: "Translate the idea: a finished action yesterday — 'I ___ to work.' (walk)",
        options: ["walk", "walked", "walking", "am walking"],
        correct: 1,
      },
    ],
  },
};
