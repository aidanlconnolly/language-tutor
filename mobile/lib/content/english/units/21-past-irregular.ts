import type { Unit } from "../../types";

export const UNIT_PAST_IRREGULAR: Unit = {
  slug: "past-irregular",
  stage: 5,
  order: 21,
  icon: "🏃",
  title: "Past simple (irregular)",
  tagline: "went, saw, had, did — negatives & questions with 'did'.",
  badge: "core",
  lessons: [
    {
      slug: "past-irregular-common-verbs",
      title: "The most common irregular verbs",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "No -ed — you just learn them",
          body: [
            "Many of the most common English verbs are <strong>irregular</strong>: their past form doesn't end in -ed and follows no reliable rule. <em>go → went, have → had, see → saw, do → did, eat → ate.</em>",
            "There's no shortcut — you memorise them. The good news: the past form is still the <strong>same for every person</strong>. <em>I went, you went, she went, they went.</em>",
            "These few verbs appear in almost every sentence about the past, so they're worth getting solid first.",
          ],
          keyPoint:
            "Irregular pasts have no -ed and no rule — memorise them. Still one form for every person: I went, she went, they went.",
        },
        {
          type: "vocab",
          heading: "Top irregular verbs",
          intro: "Base form → past form.",
          items: [
            { l1: "go → went", en: "moved/travelled somewhere" },
            { l1: "have → had", en: "owned / experienced", note: "also for meals: had breakfast" },
            { l1: "see → saw", en: "perceived with the eyes" },
            { l1: "do → did", en: "performed an action", note: "also the question/negative helper" },
            { l1: "eat → ate", en: "consumed food" },
            { l1: "get → got", en: "received / obtained / arrived" },
            { l1: "make → made", en: "created / produced" },
            { l1: "take → took", en: "carried / used (transport)" },
            { l1: "come → came", en: "moved towards the speaker" },
            { l1: "give → gave", en: "handed to someone" },
            { l1: "say → said", en: "spoke words", note: "rhymes with 'bed', not 'paid'" },
            { l1: "buy → bought", en: "paid for and obtained" },
          ],
        },
        {
          type: "conjugation",
          heading: "'go' in the past simple",
          verb: "go",
          meaning: "to move or travel somewhere",
          intro: "An irregular verb — but, like all past simples, one form for everyone.",
          tenses: [
            {
              name: "Past simple of 'go' = went",
              forms: [
                { person: "I", form: "went", en: "I went to Borough Market." },
                { person: "you", form: "went", en: "You went home early." },
                { person: "he/she/it", form: "went", en: "She went to the cinema." },
                { person: "we", form: "went", en: "We went by Tube." },
                { person: "they", form: "went", en: "They went to Brighton." },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Use the right past form",
          intro: "All of these verbs are irregular.",
          items: [
            {
              template: "Last night we ___ to a restaurant in Soho. (go)",
              answer: "went",
              en: "Last night we went to a restaurant in Soho.",
              options: ["goed", "went", "gone", "going"],
            },
            {
              template: "I ___ a great film at the weekend. (see)",
              answer: "saw",
              en: "I saw a great film at the weekend.",
              options: ["seed", "seen", "saw", "sawed"],
            },
            {
              template: "She ___ a sandwich for lunch. (eat)",
              answer: "ate",
              en: "She ate a sandwich for lunch.",
              options: ["eated", "eat", "eaten", "ate"],
            },
            {
              template: "We ___ a lovely time in Bath. (have)",
              answer: "had",
              en: "We had a lovely time in Bath.",
              options: ["haved", "had", "haded", "has"],
            },
            {
              template: "They ___ the bus to the station. (take)",
              answer: "took",
              en: "They took the bus to the station.",
              options: ["taked", "taken", "took", "tooked"],
            },
          ],
        },
      ],
    },
    {
      slug: "past-irregular-did-didnt",
      title: "Negatives and questions with did",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "did carries the past — so the main verb goes back to base",
          body: [
            "To make a <strong>question</strong> or a <strong>negative</strong> in the past simple, you use <strong>did</strong> — and then the main verb returns to its <strong>base form</strong> (no -ed, no irregular past).",
            "Negative: <strong>didn't + base verb</strong>. <em>I didn't go. She didn't see it. We didn't have time.</em> (Not <em>didn't went</em>.)",
            "Question: <strong>Did + subject + base verb?</strong> <em>Did you go? Did she see it? Did they have fun?</em> (Not <em>Did you went?</em>)",
            "This works for both regular and irregular verbs — once <em>did</em> appears, the main verb is always base form. The verb <strong>be</strong> is the exception: it uses <em>was/wasn't, were/weren't</em> with no 'did'.",
          ],
          keyPoint:
            "Questions/negatives: did(n't) + BASE verb. 'Did you go?' / 'I didn't go' — never 'didn't went'.",
        },
        {
          type: "conjugation",
          heading: "Statement, negative, question",
          verb: "did",
          meaning: "past helper for questions and negatives",
          intro: "Watch how the main verb changes back to base once 'did' appears.",
          tenses: [
            {
              name: "go (irregular)",
              forms: [
                { person: "Statement", form: "I went to the market.", en: "irregular past 'went'" },
                { person: "Negative", form: "I didn't go to the market.", en: "did + base 'go'" },
                { person: "Question", form: "Did you go to the market?", en: "Did + subject + base 'go'" },
              ],
            },
            {
              name: "watch (regular)",
              forms: [
                { person: "Statement", form: "She watched the match.", en: "regular past 'watched'" },
                { person: "Negative", form: "She didn't watch the match.", en: "did + base 'watch'" },
                { person: "Question", form: "Did she watch the match?", en: "Did + subject + base 'watch'" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Did you have a good trip?",
          setup: "A colleague is back from a weekend away.",
          lines: [
            { speaker: "Olu", l1: "Did you go to Edinburgh in the end?", en: "" },
            { speaker: "Hana", l1: "Yes, I did! We took the train up on Friday.", en: "'took the train up' = travelled north." },
            { speaker: "Olu", l1: "Lovely. Did you see the castle?", en: "" },
            { speaker: "Hana", l1: "We did, but we didn't have time for the museum. Did you do anything fun?", en: "" },
            { speaker: "Olu", l1: "Not really. I didn't go out — I just stayed in and read.", en: "'stayed in' = remained at home." },
          ],
        },
        {
          type: "fillBlank",
          heading: "did, didn't, or base verb?",
          intro: "Remember: after 'did', the main verb is the base form.",
          items: [
            {
              template: "___ you see the message?",
              answer: "Did",
              en: "Did you see the message?",
              options: ["Did", "Do", "Was", "Done"],
            },
            {
              template: "I ___ go to the party last night.",
              answer: "didn't",
              en: "I didn't go to the party last night.",
              options: ["didn't", "don't", "wasn't", "not"],
            },
            {
              template: "Did she ___ the email this morning?",
              answer: "send",
              en: "Did she send the email this morning?",
              options: ["sent", "send", "sends", "sending"],
            },
            {
              template: "We didn't ___ enough time at the gallery.",
              answer: "have",
              en: "We didn't have enough time at the gallery.",
              options: ["had", "have", "has", "having"],
            },
            {
              template: "___ they enjoy the concert?",
              answer: "Did",
              en: "Did they enjoy the concert?",
              options: ["Did", "Done", "Was", "Were"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the question or negative",
          items: [
            { tokens: ["Did", "you", "go", "to", "work", "?"], en: "Did you go to work?" },
            { tokens: ["She", "didn't", "see", "the", "sign"], en: "She didn't see the sign." },
            { tokens: ["Did", "they", "have", "a", "good", "time", "?"], en: "Did they have a good time?" },
            { tokens: ["We", "didn't", "take", "the", "bus"], en: "We didn't take the bus." },
          ],
        },
      ],
    },
    {
      slug: "past-irregular-tell-a-story",
      title: "More irregulars: tell a past story",
      estMinutes: 9,
      pages: [
        {
          type: "vocab",
          heading: "More everyday irregulars",
          intro: "Base form → past form. These come up constantly in stories.",
          items: [
            { l1: "find → found", en: "discovered / located" },
            { l1: "think → thought", en: "had an idea/opinion" },
            { l1: "bring → brought", en: "carried towards" },
            { l1: "leave → left", en: "went away from a place" },
            { l1: "meet → met", en: "came together with someone" },
            { l1: "pay → paid", en: "gave money for" },
            { l1: "feel → felt", en: "experienced an emotion/sensation" },
            { l1: "tell → told", en: "informed someone" },
            { l1: "win → won", en: "came first / was successful", note: "rhymes with 'one'" },
            { l1: "drink → drank", en: "swallowed a liquid" },
            { l1: "run → ran", en: "moved fast on foot" },
            { l1: "begin → began", en: "started" },
          ],
        },
        {
          type: "tip",
          heading: "Loose patterns (but check each one)",
          body: "Some irregulars cluster in families. A few <em>-ought / -aught</em> verbs: <strong>buy → bought, think → thought, bring → brought, catch → caught, teach → taught</strong>. A vowel-swap group changes <em>i → a</em> in the past: <strong>drink → drank, sing → sang, swim → swam, begin → began, run → ran</strong>. These hints help your memory, but every verb still has to be learned — don't invent forms.",
          example: { l1: "think → thought, drink → drank", en: "-ought family / i→a family" },
        },
        {
          type: "fillBlank",
          heading: "Complete the story",
          intro: "All of these are irregular verbs.",
          items: [
            {
              template: "I ___ my old friend Sara at the station. (meet)",
              answer: "met",
              en: "I met my old friend Sara at the station.",
              options: ["meeted", "met", "meet", "meets"],
            },
            {
              template: "We ___ a cosy pub near the river. (find)",
              answer: "found",
              en: "We found a cosy pub near the river.",
              options: ["finded", "find", "found", "founded"],
            },
            {
              template: "She ___ the bill and we said goodbye. (pay)",
              answer: "paid",
              en: "She paid the bill and we said goodbye.",
              options: ["payed", "paid", "pay", "paied"],
            },
            {
              template: "We ___ the pub at eleven and ___ home. (leave / run)",
              answer: "left",
              en: "We left the pub at eleven and ran home.",
              options: ["leaved", "left", "leaft", "leaving"],
            },
            {
              template: "I really ___ it was a wonderful evening. (think)",
              answer: "thought",
              en: "I really thought it was a wonderful evening.",
              options: ["thinked", "thinked", "thought", "thinkt"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Tell a friend about last night: you met your friends, ate at a Thai restaurant, but didn't go to the cinema.",
          reference: "Last night I met my friends and we ate at a Thai restaurant, but we didn't go to the cinema.",
          hint: "Irregulars: meet → met, eat → ate. After 'didn't', use the base form: go.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Past simple of 'find':",
              options: ["finded", "found", "finded", "fond"],
              correct: 1,
            },
            {
              q: "Choose the correct negative:",
              options: ["I didn't went.", "I didn't go.", "I not went.", "I don't went."],
              correct: 1,
            },
            {
              q: "Choose the correct question:",
              options: ["Did you saw it?", "Did you see it?", "Did you seen it?", "You did see it?"],
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
        q: "Past simple of 'go':",
        options: ["goed", "gone", "went", "going"],
        correct: 2,
      },
      {
        q: "Past simple of 'see':",
        options: ["seed", "saw", "seen", "sawed"],
        correct: 1,
      },
      {
        q: "Past simple of 'have':",
        options: ["haved", "haded", "had", "haves"],
        correct: 2,
      },
      {
        q: "Past simple of 'buy':",
        options: ["buyed", "boughten", "bought", "buied"],
        correct: 2,
      },
      {
        q: "Choose the correct negative:",
        options: ["She didn't saw it.", "She didn't see it.", "She not saw it.", "She doesn't saw it."],
        correct: 1,
      },
      {
        q: "Choose the correct question:",
        options: ["Did they went home?", "Did they go home?", "Did they gone home?", "They did go home?"],
        correct: 1,
      },
      {
        q: "After 'did/didn't', the main verb is…",
        options: ["the -ed form", "the irregular past", "the base form", "the -ing form"],
        correct: 2,
      },
      {
        q: "Complete: 'We ___ enough money.' (negative, 'have')",
        options: ["didn't had", "didn't have", "not had", "don't have"],
        correct: 1,
      },
      {
        q: "Past simple of 'think':",
        options: ["thinked", "thought", "thinks", "thunk"],
        correct: 1,
      },
      {
        q: "Past simple of 'pay':",
        options: ["payed", "paid", "payd", "paied"],
        correct: 1,
      },
    ],
  },
};
