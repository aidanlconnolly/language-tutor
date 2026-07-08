import type { Unit } from "../../types";

export const UNIT_PRESENT_PERFECT: Unit = {
  slug: "present-perfect",
  stage: 8,
  order: 34,
  icon: "🤔",
  title: "Present perfect",
  tagline: "'I've been to…', for/since, ever/never, just/already/yet.",
  badge: "advanced",
  lessons: [
    {
      slug: "present-perfect-form-experience",
      title: "Form & 'Have you ever…?'",
      summary: "have/has + past participle, and life experience.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "A tense that links past and present",
          body: [
            "The <strong>present perfect</strong> connects the past to <em>now</em>. We use it when the exact time isn't important — only that something has happened (or hasn't) at some point.",
            "The form is simple: <strong>have / has + past participle</strong>. <em>I have seen</em>, <em>she has gone</em>, <em>we have eaten</em>.",
            "In speech we almost always contract it: <em>I've</em>, <em>you've</em>, <em>he's</em>, <em>she's</em>, <em>we've</em>, <em>they've</em>.",
            "One classic use is <strong>life experience</strong> — things you have or haven't done in your life so far. For this we love the words <strong>ever</strong> (in questions) and <strong>never</strong>: <em>Have you <strong>ever</strong> been to London? — No, I've <strong>never</strong> been.</em>",
          ],
          keyPoint:
            "have/has + past participle. Questions about life experience: 'Have you ever…?' — answer 'Yes, I have' / 'No, I never have / I've never…'.",
        },
        {
          type: "conjugation",
          heading: "have / has + past participle",
          verb: "have been",
          meaning: "present perfect of 'to be / go'",
          intro: "Use 'has' for he/she/it; 'have' for everyone else. The past participle of regular verbs ends in -ed; many common verbs are irregular.",
          tenses: [
            {
              name: "Affirmative",
              forms: [
                { person: "I / you / we / they", form: "have been", en: "e.g. I've been to Paris." },
                { person: "he / she / it", form: "has been", en: "e.g. She's been to Rome." },
                { person: "Contractions", form: "I've, you've, he's, she's, we've", en: "used in normal speech" },
              ],
            },
            {
              name: "Questions & negatives",
              forms: [
                { person: "Have you ever…?", form: "Have you ever eaten sushi?", en: "asking about experience" },
                { person: "Has she ever…?", form: "Has she ever flown?", en: "third person" },
                { person: "Negative", form: "I haven't / she hasn't", en: "I've never / she's never…" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Common irregular past participles",
          intro: "These don't follow the -ed rule — learn them as a set.",
          items: [
            { l1: "be → been", en: "I've been to Spain." },
            { l1: "go → gone", en: "She's gone home." },
            { l1: "see → seen", en: "Have you seen this film?" },
            { l1: "do → done", en: "I've done my homework." },
            { l1: "eat → eaten", en: "We've eaten already." },
            { l1: "take → taken", en: "He's taken the keys." },
            { l1: "make → made", en: "I've made a cake." },
            { l1: "write → written", en: "She's written a book." },
            { l1: "give → given", en: "They've given up." },
            { l1: "meet → met", en: "I've met her before." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the present perfect",
          intro: "Choose the right form of have/has + participle.",
          items: [
            {
              template: "___ you ever ___ to London?",
              answer: "Have / been",
              en: "Question about life experience.",
              options: ["Have / been", "Has / been", "Did / go", "Have / went"],
            },
            {
              template: "She ___ never ___ sushi.",
              answer: "has / eaten",
              en: "Third person negative experience.",
              options: ["has / eaten", "have / eaten", "has / ate", "is / eaten"],
            },
            {
              template: "We ___ this film before.",
              answer: "'ve seen",
              en: "We've seen it at some point.",
              options: ["'ve seen", "'ve saw", "saw", "has seen"],
            },
            {
              template: "He ___ his homework.",
              answer: "has done",
              en: "Third person affirmative.",
              options: ["have done", "has done", "has did", "did"],
            },
            {
              template: "I ___ met her.",
              answer: "have never",
              en: "I've never met her in my life.",
              options: ["have never", "never have", "has never", "am never"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Ask someone whether they have ever been to London.",
          reference: "Have you ever been to London?",
          hint: "Have + you + ever + past participle of 'be' (been).",
        },
      ],
    },
    {
      slug: "present-perfect-for-since",
      title: "For/since & experience vs past simple",
      summary: "Unfinished time, duration, and when to use past simple instead.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "How long? — for and since",
          body: [
            "The present perfect also describes something that <em>started in the past and is still true now</em> — and we measure it with <strong>for</strong> and <strong>since</strong>.",
            "Use <strong>for</strong> with a <em>length of time</em>: <em>for</em> three years, <em>for</em> a week, <em>for</em> ages.",
            "Use <strong>since</strong> with a <em>starting point</em>: <em>since</em> 2019, <em>since</em> Monday, <em>since</em> I moved to London.",
            "<em>I've lived here <strong>for</strong> five years.</em> = <em>I've lived here <strong>since</strong> 2021.</em> Both mean I still live here now.",
          ],
          keyPoint:
            "for + a duration (for two years). since + a start point (since Monday). Both describe time still continuing now.",
        },
        {
          type: "tip",
          heading: "Present perfect vs past simple — the big rule",
          body: "If the time is <strong>finished</strong> (yesterday, last year, in 2010, when I was a child), use the <em>past simple</em>: <em>I saw that film last week.</em> If the time is <strong>unfinished or unspecified</strong> (in my life, this week, ever), use the <em>present perfect</em>: <em>I've seen that film.</em> A common pattern: announce news with the present perfect, then give details with the past simple — <em>I've been to Italy. I went there in 2019.</em>",
          example: { l1: "I've been to Japan. I went last spring.", en: "Perfect for the fact, simple for the finished detail." },
        },
        {
          type: "dialogue",
          heading: "Catching up with an old friend",
          setup: "Two friends meet after years apart in Camden.",
          lines: [
            { speaker: "Priya", l1: "It's been ages! How long have you lived in London?", en: "Question with present perfect + 'how long'." },
            { speaker: "Jon", l1: "I've lived here since 2018 — so for about six years now.", en: "since + start point, for + duration." },
            { speaker: "Priya", l1: "Wow. Have you been back home recently?", en: "Experience question." },
            { speaker: "Jon", l1: "I went back last Christmas, but I haven't been since.", en: "Past simple for finished time, perfect for 'since then'." },
            { speaker: "Priya", l1: "I've known you for fifteen years and you still haven't changed!", en: "for + duration, ongoing to now." },
          ],
        },
        {
          type: "fillBlank",
          heading: "For or since?",
          intro: "Choose 'for' (duration) or 'since' (start point).",
          items: [
            {
              template: "I've lived here ___ three years.",
              answer: "for",
              en: "Three years is a duration.",
              options: ["for", "since", "from", "during"],
            },
            {
              template: "She's worked here ___ 2020.",
              answer: "since",
              en: "2020 is a starting point.",
              options: ["for", "since", "from", "by"],
            },
            {
              template: "We've been friends ___ school.",
              answer: "since",
              en: "School marks the start point.",
              options: ["for", "since", "during", "by"],
            },
            {
              template: "I haven't seen him ___ ages.",
              answer: "for",
              en: "'Ages' is a (vague) duration.",
              options: ["for", "since", "from", "until"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Present perfect or past simple?",
          intro: "Pick the natural choice.",
          questions: [
            {
              q: "I ___ that film last night.",
              options: ["have seen", "saw", "have saw", "seen"],
              correct: 1,
              fb: "'Last night' is finished time — use the past simple 'saw'.",
            },
            {
              q: "___ you ever ___ to New York?",
              options: ["Did / go", "Have / been", "Have / went", "Did / been"],
              correct: 1,
              fb: "Life experience with 'ever' takes the present perfect: Have you ever been…?",
            },
            {
              q: "She ___ in Bristol since she was born.",
              options: ["lives", "lived", "has lived", "is living"],
              correct: 2,
              fb: "'Since' + still true now → present perfect 'has lived'.",
            },
            {
              q: "Which is correct?",
              options: [
                "I've been to Italy in 2019.",
                "I've been to Italy. I went in 2019.",
                "I went to Italy. I've been in 2019.",
                "I have went to Italy in 2019.",
              ],
              correct: 1,
              fb: "Announce with the perfect, then give the finished detail with the past simple.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Say that you have lived in London for five years.",
          reference: "I've lived in London for five years.",
          hint: "Present perfect + 'for' because five years is a duration still continuing.",
        },
      ],
    },
    {
      slug: "present-perfect-just-already-yet",
      title: "Just, already & yet — recent news",
      summary: "Talking about very recent events and what's still pending.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Three little words for recent news",
          body: [
            "When something happened <em>very recently</em>, or affects the present moment, we add <strong>just</strong>, <strong>already</strong> or <strong>yet</strong> to the present perfect.",
            "<strong>just</strong> = a very short time ago. It goes between have/has and the participle: <em>I've <strong>just</strong> arrived.</em>",
            "<strong>already</strong> = sooner than expected, by now. Same position: <em>She's <strong>already</strong> left.</em>",
            "<strong>yet</strong> = up to now (with a sense of 'still expecting it'). It goes at the <em>end</em>, and is used in questions and negatives: <em>Have you finished <strong>yet</strong>? — Not <strong>yet</strong>.</em>",
          ],
          keyPoint:
            "just / already → between have and participle (positive). yet → end of question or negative. 'I've just eaten.' 'She's already gone.' 'Have you left yet?'",
        },
        {
          type: "vocab",
          heading: "Recent-news phrases",
          intro: "Natural ways British speakers report recent events.",
          items: [
            { l1: "I've just got home.", en: "very recently — moments ago" },
            { l1: "She's already left.", en: "earlier than you'd expect" },
            { l1: "Have you eaten yet?", en: "asking if it's done by now" },
            { l1: "I haven't finished yet.", en: "still pending — negative + yet" },
            { l1: "Not yet.", en: "short answer: still no" },
            { l1: "I've just seen the news.", en: "fresh information" },
            { l1: "He's already done it.", en: "no need — it's done" },
            { l1: "Has the train left yet?", en: "checking status now" },
          ],
        },
        {
          type: "dialogue",
          heading: "Texting about dinner plans",
          setup: "Two flatmates message each other after work.",
          lines: [
            { speaker: "Amy", l1: "Have you left the office yet?", en: "yet — checking status now." },
            { speaker: "Sam", l1: "I've just walked out. I'll be twenty minutes.", en: "just — moments ago." },
            { speaker: "Amy", l1: "Great. I've already started cooking.", en: "already — sooner than expected." },
            { speaker: "Sam", l1: "Have you bought wine yet?", en: "yet in a question." },
            { speaker: "Amy", l1: "Not yet — could you grab some? I haven't had time yet.", en: "Not yet + negative + yet." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Just, already or yet?",
          intro: "Place the right word in each sentence.",
          items: [
            {
              template: "I've ___ arrived — give me a second.",
              answer: "just",
              en: "Moments ago.",
              options: ["just", "yet", "already", "since"],
            },
            {
              template: "Have you finished ___?",
              answer: "yet",
              en: "Question — end position.",
              options: ["just", "yet", "already", "ever"],
            },
            {
              template: "She's ___ left, so you've missed her.",
              answer: "already",
              en: "Sooner than expected.",
              options: ["yet", "just", "already", "for"],
            },
            {
              template: "I haven't seen it ___.",
              answer: "yet",
              en: "Negative — still pending.",
              options: ["already", "just", "yet", "ever"],
            },
            {
              template: "He's ___ eaten, so he's not hungry.",
              answer: "already",
              en: "It's done, sooner than expected.",
              options: ["yet", "already", "since", "for"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in the right order.",
          items: [
            { tokens: ["I've", "just", "got", "home"], en: "I've just got home." },
            { tokens: ["Have", "you", "finished", "yet"], en: "Have you finished yet?" },
            { tokens: ["She's", "already", "left", "the", "office"], alts: [["She's", "left", "the", "office", "already"]], en: "She's already left the office." },
            { tokens: ["I", "haven't", "eaten", "yet"], en: "I haven't eaten yet." },
          ],
        },
        {
          type: "translate",
          heading: "Say it in English",
          direction: "en-to-l1",
          prompt: "Tell someone you have just arrived and you haven't eaten yet.",
          reference: "I've just arrived and I haven't eaten yet.",
          hint: "'just' between have and participle; 'yet' at the end of the negative.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'just' usually goes:",
              options: [
                "at the end of the sentence",
                "between have/has and the participle",
                "before 'have'",
                "after the object",
              ],
              correct: 1,
            },
            {
              q: "Complete: 'Have you finished ___?'",
              options: ["already", "just", "yet", "since"],
              correct: 2,
            },
            {
              q: "Which is correct?",
              options: [
                "I've already gone.",
                "I've just ate.",
                "She has saw it.",
                "They has finished yet.",
              ],
              correct: 0,
            },
            {
              q: "Complete: 'She's ___ left, so you've missed her.'",
              options: ["yet", "just", "already", "since"],
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
        q: "The present perfect is formed with:",
        options: [
          "will + base verb",
          "have / has + past participle",
          "did + base verb",
          "was / were + -ing",
        ],
        correct: 1,
      },
      {
        q: "The past participle of 'be' is:",
        options: ["was", "been", "being", "be"],
        correct: 1,
      },
      {
        q: "Question about life experience:",
        options: [
          "Did you ever go to London?",
          "Have you ever been to London?",
          "Are you ever in London?",
          "Have you ever went to London?",
        ],
        correct: 1,
      },
      {
        q: "Choose: 'I've lived here ___ three years.'",
        options: ["since", "for", "from", "during"],
        correct: 1,
      },
      {
        q: "Choose: 'She's worked here ___ 2020.'",
        options: ["for", "since", "during", "by"],
        correct: 1,
      },
      {
        q: "Which uses the right tense? (time is finished)",
        options: [
          "I have seen that film last night.",
          "I saw that film last night.",
          "I have saw that film last night.",
          "I seen that film last night.",
        ],
        correct: 1,
      },
      {
        q: "'just' usually goes:",
        options: [
          "at the end of the sentence",
          "between have/has and the participle",
          "before 'have'",
          "after the object",
        ],
        correct: 1,
      },
      {
        q: "'yet' is used:",
        options: [
          "only in positive sentences",
          "in questions and negatives, at the end",
          "between have and the participle",
          "only with 'since'",
        ],
        correct: 1,
      },
      {
        q: "Complete: 'Have you finished ___?'",
        options: ["already", "just", "yet", "since"],
        correct: 2,
      },
      {
        q: "Which sentence is correct?",
        options: [
          "I've just ate.",
          "I've already gone.",
          "She has saw it.",
          "They has finished yet.",
        ],
        correct: 1,
      },
    ],
  },
};
