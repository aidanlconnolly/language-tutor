import type { Unit } from "../../types";

export const UNIT_TO_BE_HAVE: Unit = {
  slug: "to-be-have",
  stage: 1,
  order: 5,
  icon: "🧱",
  title: "To be, to have & present simple",
  tagline: "am/is/are, have/has, and the everyday present tense.",
  badge: "core",
  lessons: [
    {
      slug: "to-be-have-am-is-are",
      title: "To be: am / is / are",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The most important verb in English",
          body: [
            "<strong>To be</strong> is irregular and everywhere. Its three present forms are <strong>am</strong> (with I), <strong>is</strong> (with he/she/it), and <strong>are</strong> (with you/we/they). Get these solid and everything else stands on them.",
            "In speech and friendly writing we <strong>contract</strong> them: <em>I'm</em>, <em>you're</em>, <em>he's</em>, <em>she's</em>, <em>it's</em>, <em>we're</em>, <em>they're</em>. Beware: <strong>it's</strong> = \"it is\", while <strong>its</strong> (no apostrophe) means \"belonging to it\".",
            "To make a <strong>question</strong>, swap the subject and the verb: \"You are tired\" → \"<strong>Are you</strong> tired?\". To make it <strong>negative</strong>, add <em>not</em>: \"I am not\", \"she is not / she isn't\", \"they are not / they aren't\".",
          ],
          keyPoint:
            "I am, you/we/they are, he/she/it is. Question = flip them (Are you…?). Negative = add not (isn't / aren't).",
        },
        {
          type: "conjugation",
          heading: "To be — present simple",
          verb: "to be",
          meaning: "to exist / to describe a state",
          intro: "The full set, with the everyday contractions.",
          tenses: [
            {
              name: "Positive (full → contracted)",
              forms: [
                { person: "I", form: "I am → I'm", en: "I'm tired." },
                { person: "you", form: "you are → you're", en: "You're early." },
                { person: "he / she / it", form: "is → he's / she's / it's", en: "She's a teacher." },
                { person: "we", form: "we are → we're", en: "We're here." },
                { person: "you (plural)", form: "you are → you're", en: "You're all welcome." },
                { person: "they", form: "they are → they're", en: "They're from London." },
              ],
            },
            {
              name: "Negative & question",
              forms: [
                { person: "negative (I)", form: "I'm not", en: "I'm not ready." },
                { person: "negative (he/she/it)", form: "isn't", en: "It isn't cold." },
                { person: "negative (you/we/they)", form: "aren't", en: "They aren't here." },
                { person: "question (you)", form: "Are you…?", en: "Are you alright?" },
                { person: "question (he/she/it)", form: "Is he…?", en: "Is she ready?" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "it's vs its",
          body: "This trips up native speakers too. <strong>It's</strong> = \"it is\" or \"it has\" (the apostrophe stands for the missing letter). <strong>Its</strong> = belonging to it, like 'his' or 'her'. If you can replace it with \"it is\", use the apostrophe.",
          example: { l1: "It's raining, and the dog wants its dinner.", en: "It's = it is; its = belonging to the dog." },
        },
        {
          type: "dialogue",
          heading: "Meeting at a language class",
          setup: "Two students chat before their first English lesson in London.",
          lines: [
            { speaker: "Sam", l1: "Hi! Are you new here?", en: "A question — note 'are you' is flipped from 'you are'." },
            { speaker: "You", l1: "Yes, I'm new. I'm Marco.", en: "Answering and introducing yourself with 'I'm'." },
            { speaker: "Sam", l1: "Nice to meet you. Where are you from?", en: "'Where are you from?' asks your country or city." },
            { speaker: "You", l1: "I'm from Italy. Are you from London?", en: "Stating origin, then asking back." },
            { speaker: "Sam", l1: "No, I'm not. I'm from Leeds, but I live here now.", en: "A negative answer: 'I'm not'." },
            { speaker: "You", l1: "It's a big class, isn't it?", en: "'Isn't it?' is a question tag asking for agreement." },
          ],
        },
        {
          type: "fillBlank",
          heading: "am, is or are?",
          intro: "Choose the correct form of 'to be'.",
          items: [
            {
              template: "I ___ from Spain.",
              answer: "am",
              en: "I am from Spain.",
              options: ["am", "is", "are", "be"],
            },
            {
              template: "She ___ a doctor.",
              answer: "is",
              en: "She is a doctor.",
              options: ["am", "is", "are", "be"],
            },
            {
              template: "___ you ready?",
              answer: "Are",
              en: "Are you ready?",
              options: ["Am", "Is", "Are", "Be"],
            },
            {
              template: "They ___ not at home.",
              answer: "are",
              en: "They are not at home.",
              options: ["am", "is", "are", "be"],
            },
            {
              template: "It ___ raining again.",
              answer: "is",
              en: "It is raining again.",
              options: ["am", "is", "are", "be"],
            },
          ],
        },
      ],
    },
    {
      slug: "to-be-have-have-got",
      title: "Have & have got",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two ways to say you possess something",
          body: [
            "<strong>Have</strong> is used for possession, relationships, and many fixed expressions. It's mostly regular: <em>I/you/we/they <strong>have</strong></em>, but <em>he/she/it <strong>has</strong></em> — the third person takes <strong>-s</strong>, like other verbs.",
            "In British English, <strong>have got</strong> is extremely common for possession: \"I've got a car\", \"she's got two brothers\". It means the same as plain 'have' but feels more natural in casual British speech.",
            "Questions and negatives differ. With <strong>have got</strong>: \"<em>Have you got</em> a pen?\", \"I <em>haven't got</em> any money.\" With plain <strong>have</strong> you usually need <em>do/does</em>: \"<em>Do you have</em> a pen?\", \"She <em>doesn't have</em> a car.\"",
          ],
          keyPoint:
            "have → has in the 3rd person. British casual: 'have got' (I've got, she's got). Questions: Have you got…? / Do you have…?",
        },
        {
          type: "conjugation",
          heading: "To have — present simple",
          verb: "to have",
          meaning: "to possess",
          intro: "Watch the he/she/it form: it changes to 'has'.",
          tenses: [
            {
              name: "Plain 'have'",
              forms: [
                { person: "I", form: "have", en: "I have a question." },
                { person: "you", form: "have", en: "You have time." },
                { person: "he / she / it", form: "has", en: "She has a dog." },
                { person: "we", form: "have", en: "We have tickets." },
                { person: "they", form: "have", en: "They have a flat." },
              ],
            },
            {
              name: "'Have got' (British, casual)",
              forms: [
                { person: "I", form: "I've got", en: "I've got a car." },
                { person: "you", form: "you've got", en: "You've got mail." },
                { person: "he / she / it", form: "he's / she's got", en: "She's got two brothers." },
                { person: "we", form: "we've got", en: "We've got time." },
                { person: "they", form: "they've got", en: "They've got a dog." },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "'s can be 'is' OR 'has'",
          body: "When you see <strong>she's</strong>, context decides. <em>She's tired</em> = she <strong>is</strong> tired. <em>She's got a dog</em> = she <strong>has</strong> got a dog. The contraction looks identical; the word after it tells you which verb it is.",
          example: { l1: "He's late, and he's got no excuse.", en: "First 's = is (he is late); second 's = has (he has got)." },
        },
        {
          type: "dialogue",
          heading: "Looking for a flat",
          setup: "You ring an estate agent about a flat to rent in Bristol.",
          lines: [
            { speaker: "Agent", l1: "Hello, how can I help?", en: "A polite phone greeting." },
            { speaker: "You", l1: "Have you got any one-bedroom flats?", en: "'Have you got…?' asks about availability, British style." },
            { speaker: "Agent", l1: "We have one on Park Street. It's got a small garden.", en: "Uses plain 'have' and then 'it's got' (it has got)." },
            { speaker: "You", l1: "Does it have parking?", en: "A question with 'does' + plain 'have'." },
            { speaker: "Agent", l1: "No, it doesn't have parking, I'm afraid.", en: "Negative with 'doesn't have'. 'I'm afraid' softens bad news." },
            { speaker: "You", l1: "That's fine. I haven't got a car anyway.", en: "'Haven't got' = do not have." },
          ],
        },
        {
          type: "fillBlank",
          heading: "have or has?",
          intro: "Choose the right form.",
          items: [
            {
              template: "She ___ two sisters.",
              answer: "has",
              en: "Third person → has.",
              options: ["have", "has", "haves", "got"],
            },
            {
              template: "We ___ a meeting at three.",
              answer: "have",
              en: "We → have.",
              options: ["have", "has", "haves", "having"],
            },
            {
              template: "I've ___ a great idea.",
              answer: "got",
              en: "'I've got' — British casual possession.",
              options: ["get", "got", "have", "has"],
            },
            {
              template: "He ___ got a new job.",
              answer: "has",
              en: "He's got = he has got.",
              options: ["have", "has", "is", "are"],
            },
          ],
        },
      ],
    },
    {
      slug: "to-be-have-present-simple",
      title: "Present simple & the 3rd-person -s",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The everyday tense for habits and facts",
          body: [
            "The <strong>present simple</strong> is for routines, habits and general truths: \"I <em>work</em> in London\", \"the shop <em>opens</em> at nine\", \"water <em>boils</em> at 100 degrees\".",
            "The big rule is the <strong>third-person -s</strong>: with <em>he, she, it</em> you add <strong>-s</strong> to the verb. <em>I work → she works</em>, <em>they live → he lives</em>. After a hissing sound add <strong>-es</strong> (<em>he watches</em>, <em>she goes</em>), and consonant + y becomes <strong>-ies</strong> (<em>study → studies</em>).",
            "For <strong>negatives and questions</strong> you bring in <strong>do / does</strong> — and the main verb goes back to its plain form (no -s). \"She <em>works</em>\" → \"She <em>doesn't work</em>\", \"<em>Does</em> she <em>work</em>?\" The -s moves onto 'does'.",
          ],
          keyPoint:
            "Add -s only in he/she/it (she works). With do/does, the main verb drops the -s: 'Does she work?', 'He doesn't work.'",
        },
        {
          type: "conjugation",
          heading: "Present simple: to work",
          verb: "to work",
          meaning: "to do a job",
          intro: "Notice the -s appears only in the he/she/it line.",
          tenses: [
            {
              name: "Positive",
              forms: [
                { person: "I", form: "work", en: "I work from home." },
                { person: "you", form: "work", en: "You work hard." },
                { person: "he / she / it", form: "works", en: "She works in a bank." },
                { person: "we", form: "work", en: "We work together." },
                { person: "they", form: "work", en: "They work nights." },
              ],
            },
            {
              name: "Negative & question (with do/does)",
              forms: [
                { person: "I / you / we / they (neg)", form: "don't work", en: "They don't work on Sundays." },
                { person: "he / she / it (neg)", form: "doesn't work", en: "He doesn't work here." },
                { person: "question (you)", form: "Do you work…?", en: "Do you work in London?" },
                { person: "question (he/she/it)", form: "Does she work…?", en: "Does she work here?" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Spelling the third-person -s",
          body: "Most verbs just add <strong>-s</strong>. After a hissing or -o sound, add <strong>-es</strong>: <em>watch → watches</em>, <em>go → goes</em>, <em>do → does</em>. After a consonant + y, change y to <strong>-ies</strong>: <em>study → studies</em>, <em>fly → flies</em>. (A vowel + y just adds -s: <em>play → plays</em>.)",
          example: { l1: "He goes to the gym and studies French.", en: "go→goes (-es), study→studies (-ies)." },
        },
        {
          type: "dialogue",
          heading: "Talking about routines",
          setup: "Two neighbours chat about their daily lives.",
          lines: [
            { speaker: "Neighbour", l1: "Do you work nearby?", en: "Present simple question with 'do'." },
            { speaker: "You", l1: "Yes, I work in town. My wife works from home.", en: "'I work' (no -s), but 'she works' (third person -s)." },
            { speaker: "Neighbour", l1: "Does she like it?", en: "Question with 'does' — note 'like', not 'likes'." },
            { speaker: "You", l1: "She does, but she doesn't start until ten.", en: "'She does' (short answer); 'doesn't start' (negative, plain verb)." },
            { speaker: "Neighbour", l1: "Lucky her. My bus leaves at seven.", en: "'Leaves' takes -s because 'bus' is third person." },
            { speaker: "You", l1: "That's early! Does it get busy?", en: "Another 'does' question." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Present simple practice",
          intro: "Add the -s if needed, and use do/does correctly.",
          items: [
            {
              template: "He ___ in a hospital. (work)",
              answer: "works",
              en: "Third person → works.",
              options: ["work", "works", "working", "worked"],
            },
            {
              template: "___ she speak French? (do/does)",
              answer: "Does",
              en: "Question with 'she' → Does.",
              options: ["Do", "Does", "Is", "Are"],
            },
            {
              template: "They ___ live here. (negative)",
              answer: "don't",
              en: "They → don't.",
              options: ["doesn't", "don't", "isn't", "not"],
            },
            {
              template: "My sister ___ to the gym every day. (go)",
              answer: "goes",
              en: "go → goes after a hissing/-o sound.",
              options: ["go", "gos", "goes", "going"],
            },
            {
              template: "He ___ work on Fridays. (negative)",
              answer: "doesn't",
              en: "He → doesn't (and 'work' loses its -s).",
              options: ["don't", "doesn't", "isn't", "not"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in order.",
          items: [
            { tokens: ["she", "works", "in", "a", "bank"], en: "She works in a bank." },
            { tokens: ["do", "you", "live", "in", "London"], en: "Do you live in London?" },
            { tokens: ["he", "doesn't", "drink", "coffee"], en: "He doesn't drink coffee." },
          ],
        },
        {
          type: "translate",
          heading: "Say it naturally",
          direction: "en-to-l1",
          prompt: "Tell someone, in the present simple, that your sister works in London but doesn't live there.",
          reference: "My sister works in London but she doesn't live there.",
          hint: "Third person needs -s: 'works'. The negative uses 'doesn't' + plain verb: 'doesn't live'.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Complete: \"She ___ in a shop.\"",
              options: ["work", "works", "working", "do work"],
              correct: 1,
            },
            {
              q: "Which is the correct question?",
              options: ["Does she works here?", "Do she work here?", "Does she work here?", "Is she work here?"],
              correct: 2,
            },
            {
              q: "Complete: \"He ___ eat meat.\"",
              options: ["don't", "doesn't", "isn't", "not"],
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
        q: "Complete: \"I ___ a student.\"",
        options: ["am", "is", "are", "be"],
        correct: 0,
      },
      {
        q: "Complete: \"They ___ from Spain.\"",
        options: ["am", "is", "are", "be"],
        correct: 2,
      },
      {
        q: "Which is the correct question form of \"You are ready\"?",
        options: ["You are ready?", "Are you ready?", "Do you ready?", "Is you ready?"],
        correct: 1,
      },
      {
        q: "\"It's\" (with an apostrophe) means…",
        options: ["belonging to it", "it is / it has", "many its", "the plural of it"],
        correct: 1,
      },
      {
        q: "Complete: \"She ___ two brothers.\"",
        options: ["have", "has", "haves", "having"],
        correct: 1,
      },
      {
        q: "The British casual way to say \"I have a car\" is…",
        options: ["I has a car", "I've got a car", "I am a car", "I do a car"],
        correct: 1,
      },
      {
        q: "Complete: \"He ___ in a bank.\" (work)",
        options: ["work", "works", "working", "worked"],
        correct: 1,
      },
      {
        q: "Which is correct?",
        options: ["Does she works here?", "Does she work here?", "Do she work here?", "She does works here?"],
        correct: 1,
      },
      {
        q: "Complete: \"They ___ live in London.\" (negative)",
        options: ["doesn't", "don't", "isn't", "not"],
        correct: 1,
      },
      {
        q: "The third-person form of \"go\" is…",
        options: ["gos", "goes", "goies", "going"],
        correct: 1,
      },
    ],
  },
};
