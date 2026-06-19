import type { Unit } from "../../types";

export const UNIT_ARTICLES: Unit = {
  slug: "articles",
  stage: 1,
  order: 4,
  icon: "📚",
  title: "A, an, the & plurals",
  tagline: "a vs an, the, regular & irregular plurals, this/that.",
  badge: "core",
  lessons: [
    {
      slug: "articles-a-vs-an",
      title: "A or an — it's about sound",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Choose by the sound, not the letter",
          body: [
            "<strong>A</strong> and <strong>an</strong> mean the same thing — \"one, some unspecified\" — and you only use them with singular countable nouns. The choice between them depends on the <strong>sound</strong> that follows, not the spelling.",
            "Use <strong>an</strong> before a <em>vowel sound</em>: <em>an apple</em>, <em>an egg</em>, <em>an hour</em> (the 'h' is silent, so it starts with a vowel sound!). Use <strong>a</strong> before a <em>consonant sound</em>: <em>a cat</em>, <em>a university</em> (it sounds like \"yoo-\", a consonant sound).",
            "So the tricky cases are exactly the ones where spelling and sound disagree: <strong>an hour</strong>, <strong>an honest man</strong> (silent h), but <strong>a university</strong>, <strong>a European</strong> (they begin with a 'y' sound).",
          ],
          keyPoint:
            "It's the SOUND, not the letter: an hour (silent h → vowel sound), a university (sounds like 'yoo' → consonant sound).",
        },
        {
          type: "vocab",
          heading: "Tricky a / an pairs",
          intro: "Say each one aloud — the article follows the sound.",
          items: [
            { l1: "an apple", en: "one apple", note: "Vowel sound → an." },
            { l1: "an egg", en: "one egg", note: "Vowel sound → an." },
            { l1: "an hour", en: "one hour", note: "Silent h → vowel sound → an." },
            { l1: "an honest answer", en: "a truthful answer", note: "Silent h → an." },
            { l1: "a university", en: "one university", note: "Sounds like 'yoo' → a." },
            { l1: "a European country", en: "one European country", note: "'Yoo' sound → a." },
            { l1: "a one-way street", en: "a street going one direction", note: "'One' sounds like 'wun' → a." },
            { l1: "an umbrella", en: "one umbrella", note: "Vowel sound → an." },
            { l1: "an MP", en: "a Member of Parliament", note: "Letter M is said 'em' → vowel sound → an." },
          ],
        },
        {
          type: "tip",
          heading: "Letters and abbreviations follow the sound too",
          body: "When you read a letter or abbreviation aloud, use the article that matches its <em>spoken</em> sound. <strong>An MP</strong> (because 'M' = \"em\"), <strong>an X-ray</strong> ('X' = \"ex\"), but <strong>a UN report</strong> ('U' = \"yoo\"). The written letter is irrelevant; only the sound counts.",
          example: { l1: "She's an MP and gave an honest answer.", en: "Both take 'an' because of their opening vowel sounds." },
        },
        {
          type: "fillBlank",
          heading: "A or an?",
          intro: "Pick the article that matches the sound.",
          items: [
            {
              template: "I'll be there in ___ hour.",
              answer: "an",
              en: "Silent h → vowel sound.",
              options: ["a", "an", "the", "one"],
            },
            {
              template: "She studies at ___ university.",
              answer: "a",
              en: "'University' sounds like 'yoo'.",
              options: ["a", "an", "the", "one"],
            },
            {
              template: "Would you like ___ egg?",
              answer: "an",
              en: "Vowel sound.",
              options: ["a", "an", "some", "the"],
            },
            {
              template: "He gave ___ honest answer.",
              answer: "an",
              en: "Silent h.",
              options: ["a", "an", "the", "one"],
            },
            {
              template: "It's ___ one-way street.",
              answer: "a",
              en: "'One' sounds like 'wun'.",
              options: ["a", "an", "the", "some"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "Which is correct?",
              options: ["a hour", "an hour", "the hour one", "a an hour"],
              correct: 1,
              fb: "\"An hour\" — the h is silent, so it begins with a vowel sound.",
            },
            {
              q: "Which is correct?",
              options: ["an university", "a university", "an universities", "the a university"],
              correct: 1,
              fb: "\"A university\" — it begins with a 'yoo' sound, a consonant sound.",
            },
            {
              q: "Why do we say \"an MP\"?",
              options: [
                "M is a vowel",
                "MP is plural",
                "'M' is read as \"em\", a vowel sound",
                "It's always 'an' before capitals",
              ],
              correct: 2,
              fb: "The letter M is read \"em\", which begins with a vowel sound.",
            },
          ],
        },
      ],
    },
    {
      slug: "articles-the-vs-zero",
      title: "The, or no article at all",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "When to say 'the' — and when to say nothing",
          body: [
            "<strong>The</strong> is the definite article: it points to a <em>specific</em> thing both speaker and listener know. \"Pass me <strong>the</strong> salt\" = the salt on this table. \"I bought <strong>a</strong> book\" (any book) → \"<strong>The</strong> book is great\" (now we both know which one).",
            "Often English uses <strong>no article at all</strong> — the 'zero article'. We drop it before plural or uncountable nouns used in general: \"<em>Cats</em> are independent\", \"I like <em>coffee</em>\", \"<em>Children</em> need sleep.\"",
            "There are very British fixed habits: you go to <strong>hospital</strong>, to <strong>university</strong>, to <strong>bed</strong> with no article (Americans say \"to <em>the</em> hospital\"). But you do take <strong>the</strong> Tube, <strong>the</strong> bus, and <strong>the</strong> lift.",
          ],
          keyPoint:
            "Use 'the' for a specific, known thing. Use no article for plurals/uncountables in general. British: go to hospital / to university (no 'the').",
        },
        {
          type: "vocab",
          heading: "Article habits to notice",
          items: [
            { l1: "the sun, the moon", en: "unique things", note: "Only one → always 'the'." },
            { l1: "go to hospital", en: "be admitted as a patient", note: "British: no 'the'." },
            { l1: "go to university", en: "be a student there", note: "British: no 'the'." },
            { l1: "go to bed", en: "go to sleep", note: "Fixed phrase, no article." },
            { l1: "take the Tube", en: "use the Underground", note: "'The' Tube, 'the' bus, 'the' train." },
            { l1: "take the lift", en: "use the elevator", note: "'Lift' is the British word." },
            { l1: "I like coffee", en: "coffee in general", note: "Uncountable, general → no article." },
            { l1: "Dogs are loyal", en: "dogs in general", note: "Plural, general → no article." },
            { l1: "play the piano", en: "play that instrument", note: "Instruments take 'the'." },
          ],
        },
        {
          type: "tip",
          heading: "First mention 'a', then 'the'",
          body: "A classic pattern: introduce something with <strong>a/an</strong>, then refer back to it with <strong>the</strong>. \"There's <em>a</em> café on the corner. <em>The</em> café does great cake.\" The first time it's new (a); after that it's known (the).",
          example: { l1: "I saw a fox. The fox ran across the road.", en: "'A fox' (new) becomes 'the fox' (now known)." },
        },
        {
          type: "fillBlank",
          heading: "the or nothing?",
          intro: "Type 'the' or leave it blank with — for the zero article.",
          items: [
            {
              template: "She's ill, so she went to ___ hospital. (British)",
              answer: "—",
              en: "British English: 'go to hospital', no article.",
              options: ["the", "a", "—", "an"],
            },
            {
              template: "Could you pass me ___ salt, please?",
              answer: "the",
              en: "A specific salt on this table.",
              options: ["a", "the", "—", "an"],
            },
            {
              template: "I love ___ music.",
              answer: "—",
              en: "Music in general → no article.",
              options: ["the", "a", "—", "an"],
            },
            {
              template: "We took ___ Tube into town.",
              answer: "the",
              en: "'The Tube' — fixed British phrase.",
              options: ["a", "the", "—", "an"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Say it naturally",
          direction: "en-to-l1",
          prompt: "Tell a friend, in everyday British English, that you took the Underground to work this morning.",
          reference: "I took the Tube to work this morning.",
          hint: "'The Tube' (with 'the'), but 'to work' takes no article.",
        },
      ],
    },
    {
      slug: "articles-plurals-this-that",
      title: "Plurals & this / that / these / those",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Most plurals add -s, but watch the exceptions",
          body: [
            "Most English nouns add <strong>-s</strong>: <em>cat → cats</em>, <em>book → books</em>. After a hissing sound (-s, -ss, -sh, -ch, -x) you add <strong>-es</strong>: <em>bus → buses</em>, <em>box → boxes</em>, <em>church → churches</em>.",
            "Nouns ending in a consonant + <strong>y</strong> change y to <strong>-ies</strong>: <em>baby → babies</em>, <em>city → cities</em>. Many ending in -f/-fe go to <strong>-ves</strong>: <em>knife → knives</em>, <em>leaf → leaves</em>.",
            "Then there are the <strong>irregulars</strong> you simply learn: <em>child → children</em>, <em>man → men</em>, <em>woman → women</em>, <em>foot → feet</em>, <em>tooth → teeth</em>, <em>mouse → mice</em>. A few don't change at all: <em>sheep → sheep</em>, <em>fish → fish</em>.",
          ],
          keyPoint:
            "Regular: +s / +es / -y→-ies / -f→-ves. Irregular (just memorise): child→children, foot→feet, tooth→teeth, man→men.",
        },
        {
          type: "vocab",
          heading: "Irregular plurals",
          intro: "These don't follow the -s rule. Learn them as pairs.",
          items: [
            { l1: "child → children", en: "one kid → more than one", note: "Very common irregular." },
            { l1: "man → men", en: "one man → more men", note: "Vowel change." },
            { l1: "woman → women", en: "one woman → more women", note: "Said 'wimmin' in the plural." },
            { l1: "foot → feet", en: "one foot → both feet", note: "Vowel change." },
            { l1: "tooth → teeth", en: "one tooth → all teeth", note: "Vowel change." },
            { l1: "mouse → mice", en: "one mouse → many mice", note: "Irregular." },
            { l1: "person → people", en: "one person → many", note: "'Persons' is rare and legal-sounding." },
            { l1: "sheep → sheep", en: "no change", note: "Same word for one or many." },
            { l1: "knife → knives", en: "-fe becomes -ves", note: "Also life→lives, wife→wives." },
          ],
        },
        {
          type: "tip",
          heading: "this / that / these / those",
          body: "These point to things by number and distance. <strong>This</strong> (singular, near) / <strong>these</strong> (plural, near): <em>this book, these books</em> — here, in my hand. <strong>That</strong> (singular, far) / <strong>those</strong> (plural, far): <em>that car, those cars</em> — over there.",
          example: { l1: "This is my bag, but those are your shoes.", en: "'This' (near, singular) vs 'those' (far, plural)." },
        },
        {
          type: "fillBlank",
          heading: "Make it plural / pick the pointer",
          intro: "Choose the correct form.",
          items: [
            {
              template: "One child, two ___.",
              answer: "children",
              en: "Irregular plural of child.",
              options: ["childs", "childes", "children", "childrens"],
            },
            {
              template: "My ___ hurt after the walk. (foot)",
              answer: "feet",
              en: "Plural of foot.",
              options: ["foots", "feet", "feets", "foots"],
            },
            {
              template: "I'll have one of ___ cakes over there.",
              answer: "those",
              en: "Plural and far → those.",
              options: ["this", "that", "these", "those"],
            },
            {
              template: "___ coffee in my hand is cold.",
              answer: "This",
              en: "Singular and near → this.",
              options: ["This", "These", "Those", "Them"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in the correct order.",
          items: [
            { tokens: ["these", "knives", "are", "very", "sharp"], en: "These knives are very sharp." },
            { tokens: ["there", "are", "two", "children", "in", "the", "garden"], en: "There are two children in the garden." },
            { tokens: ["those", "are", "my", "shoes"], en: "Those are my shoes." },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "The plural of \"tooth\" is…",
              options: ["tooths", "teeth", "toothes", "teeths"],
              correct: 1,
            },
            {
              q: "Which is correct?",
              options: ["this books", "these book", "these books", "those book"],
              correct: 2,
            },
            {
              q: "The plural of \"knife\" is…",
              options: ["knifes", "knives", "knive", "knifies"],
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
        q: "Which is correct?",
        options: ["a hour", "an hour", "the a hour", "an hours"],
        correct: 1,
      },
      {
        q: "Which is correct?",
        options: ["an university", "a university", "an universitys", "the an university"],
        correct: 1,
      },
      {
        q: "We choose 'a' or 'an' based on…",
        options: ["the spelling", "the following sound", "whether it's plural", "the day of the week"],
        correct: 1,
      },
      {
        q: "In British English, when ill you 'go to…'",
        options: ["the hospital", "a hospital", "hospital", "an hospital"],
        correct: 2,
      },
      {
        q: "\"I like ___ coffee\" (coffee in general) takes…",
        options: ["the", "a", "an", "no article"],
        correct: 3,
      },
      {
        q: "The plural of \"child\" is…",
        options: ["childs", "childes", "children", "childrens"],
        correct: 2,
      },
      {
        q: "The plural of \"foot\" is…",
        options: ["foots", "feet", "feets", "footes"],
        correct: 1,
      },
      {
        q: "Which points to ONE thing that is NEAR you?",
        options: ["these", "those", "this", "that"],
        correct: 2,
      },
      {
        q: "Which points to MANY things that are FAR away?",
        options: ["this", "that", "these", "those"],
        correct: 3,
      },
      {
        q: "After a hissing sound (-ch, -sh, -x), the plural adds…",
        options: ["-s", "-es", "-ies", "nothing"],
        correct: 1,
      },
    ],
  },
};
