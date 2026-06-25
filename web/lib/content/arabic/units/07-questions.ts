import type { Unit } from "../../types";

export const UNIT_QUESTIONS: Unit = {
  slug: "questions",
  stage: 2,
  order: 7,
  icon: "❓",
  title: "Asking questions",
  tagline: "man, mā, mādhā, ayna, matā, kayfa, kam, limādhā.",
  badge: "core",
  lessons: [
    {
      slug: "questions-who-what",
      title: "man / mā / mādhā — who & what",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Two words for 'what', depending on what follows",
          body: [
            "<strong>man</strong> (مَنْ) asks 'who?' about people: <em>man hādhā?</em> = 'who is this?'",
            "For 'what?' Arabic splits by what comes next. Before a <em>noun</em>, use <strong>mā</strong> (مَا): <em>mā hādhā?</em> = 'what is this?', <em>mā ismuka?</em> = 'what is your name?'. Before a <em>verb</em>, use <strong>mādhā</strong> (مَاذَا): <em>mādhā tafʿal?</em> = 'what are you doing?'",
            "Question words sit at the <strong>front</strong> of the sentence, and because there's no 'to be', the answer is often just a noun: <em>man hādhā? — hādhā ṣadīqī</em> ('who is this? — this is my friend').",
          ],
          keyPoint:
            "man = who. mā = what (before a noun). mādhā = what (before a verb).",
        },
        {
          type: "vocab",
          heading: "Question words & answers",
          items: [
            { l1: "مَنْ", en: "who", note: "man." },
            { l1: "مَا", en: "what (before a noun)", note: "mā — mā hādhā? = what is this?" },
            { l1: "مَاذَا", en: "what (before a verb)", note: "mādhā — mādhā tureed? = what do you want?" },
            { l1: "اِسْم", en: "name", note: "ism — mā ismuka? = what's your name? (m.)" },
            { l1: "صَدِيق", en: "friend (m.)", note: "ṣadīq → ṣadīqa (f.); pl. aṣdiqāʾ." },
            { l1: "نَعَمْ", en: "yes", note: "naʿam." },
            { l1: "لَا", en: "no", note: "lā." },
            { l1: "هَٰذَا", en: "this (m.)", note: "hādhā — hādhihi for feminine." },
          ],
        },
        {
          type: "dialogue",
          heading: "Introductions in a Cairo café",
          setup: "You meet a friend's companion at a downtown ahwa (coffeehouse).",
          lines: [
            { speaker: "You", l1: "مَنْ هَٰذَا؟", en: "Who is this?" },
            { speaker: "Friend", l1: "هَٰذَا صَدِيقِي عُمَر.", en: "This is my friend Omar." },
            { speaker: "You", l1: "أَهْلًا عُمَر. مَا اِسْمُ هَٰذَا الْمَكَان؟", en: "Hi Omar. What is the name of this place?" },
            { speaker: "Omar", l1: "اِسْمُهُ مَقْهَى النِّيل.", en: "Its name is Café El-Nil." },
          ],
        },
        {
          type: "fillBlank",
          heading: "man, mā, or mādhā?",
          intro: "Pick the right question word for what follows.",
          items: [
            {
              template: "___ هَٰذَا؟ (a person)",
              answer: "مَنْ",
              en: "Who is this?",
              options: ["مَنْ", "مَا", "مَاذَا", "أَيْنَ"],
            },
            {
              template: "___ اِسْمُكَ؟",
              answer: "مَا",
              en: "What is your name?",
              options: ["مَنْ", "مَا", "مَاذَا", "كَمْ"],
            },
            {
              template: "___ تُرِيد؟ (followed by a verb)",
              answer: "مَاذَا",
              en: "What do you want?",
              options: ["مَنْ", "مَا", "مَاذَا", "مَتَى"],
            },
            {
              template: "___ هَٰذِهِ الْبِنْت؟",
              answer: "مَنْ",
              en: "Who is this girl?",
              options: ["مَنْ", "مَا", "مَاذَا", "كَيْفَ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Who is this? What is your name?",
          reference: "مَنْ هَٰذَا؟ مَا اسْمُكَ؟",
          hint: "man for the person; mā before the noun 'name'.",
        },
      ],
    },
    {
      slug: "questions-where-when-how-why",
      title: "ayna / matā / kayfa / limādhā",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Where, when, how, why",
          body: [
            "<strong>ayna</strong> (أَيْنَ) = where; <strong>matā</strong> (مَتَى) = when; <strong>kayfa</strong> (كَيْفَ) = how; <strong>limādhā</strong> (لِمَاذَا) = why.",
            "<em>kayfa</em> opens the most common greeting: <strong>kayfa ḥāluka?</strong> (كَيْفَ حَالُكَ؟) = 'how are you?' (lit. 'how is your state?'), answered <em>al-ḥamdu lillāh</em> ('praise God / fine').",
            "Notice <em>limādhā</em> ('why') is literally <em>li-</em> ('for') + <em>mādhā</em> ('what') — 'for what'. The answer usually starts with <strong>li-anna</strong> ('because'), which you'll meet in unit 9.",
          ],
          keyPoint:
            "ayna = where, matā = when, kayfa = how, limādhā = why (= li- 'for' + mādhā 'what').",
        },
        {
          type: "vocab",
          heading: "More question words",
          items: [
            { l1: "أَيْنَ", en: "where", note: "ayna — ayna al-bayt? = where is the house?" },
            { l1: "مَتَى", en: "when", note: "matā." },
            { l1: "كَيْفَ", en: "how", note: "kayfa — kayfa ḥāluka? = how are you? (m.)" },
            { l1: "لِمَاذَا", en: "why", note: "limādhā = li- ('for') + mādhā ('what')." },
            { l1: "حَال", en: "state / condition", note: "ḥāl — in 'kayfa ḥāluka'." },
            { l1: "اَلْحَمْدُ لِلَّه", en: "praise God (= I'm fine)", note: "al-ḥamdu lillāh — standard reply." },
            { l1: "اَلْآن", en: "now", note: "al-ān." },
            { l1: "مَطْعَم", en: "restaurant (m.)", note: "maṭʿam — pl. maṭāʿim; root ṭ-ʿ-m (food)." },
          ],
        },
        {
          type: "dialogue",
          heading: "Lost near the Egyptian Museum",
          setup: "You stop a passerby in Tahrir Square.",
          lines: [
            { speaker: "You", l1: "عَفْوًا، أَيْنَ الْمَتْحَف؟", en: "Excuse me, where is the museum?" },
            { speaker: "Passerby", l1: "هُوَ هُنَاكَ، قَرِيب.", en: "It's over there, nearby." },
            { speaker: "You", l1: "وَمَتَى يَفْتَح؟", en: "And when does it open?" },
            { speaker: "Passerby", l1: "اَلْآن. كَيْفَ حَالُكَ؟", en: "Now. How are you?" },
            { speaker: "You", l1: "اَلْحَمْدُ لِلَّه!", en: "Fine, thank God!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Pick the question word",
          questions: [
            {
              q: "You want to know the location of the restaurant. You ask: ___ al-maṭʿam?",
              options: ["matā", "ayna", "kayfa", "limādhā"],
              correct: 1,
              fb: "ayna = where.",
            },
            {
              q: "'kayfa ḥāluka?' means…",
              options: ["where are you?", "who are you?", "how are you?", "why are you here?"],
              correct: 2,
              fb: "Literally 'how is your state?'",
            },
            {
              q: "limādhā is built from…",
              options: ["li- + mādhā ('for what')", "lā + mādhā", "li- + man", "kayfa + mā"],
              correct: 0,
              fb: "limādhā = 'for what' = why.",
            },
            {
              q: "To ask 'when does it open?' you start with…",
              options: ["ayna", "kayfa", "matā", "man"],
              correct: 2,
              fb: "matā = when.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Where is the restaurant, and when does it open?",
          reference: "أَيْنَ الْمَطْعَم، وَمَتَى يَفْتَح؟",
          hint: "ayna = where, matā = when. 'and' = wa-.",
        },
      ],
    },
    {
      slug: "questions-yes-no-and-counting",
      title: "hal / a- and counting (kam)",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Turn a statement into a yes/no question",
          body: [
            "There are two yes/no markers. <strong>hal</strong> (هَلْ) is the everyday one — put it at the front and keep the rest unchanged: <em>anta ṭālib</em> ('you are a student') → <strong>hal anta ṭālib?</strong> ('are you a student?').",
            "The prefix <strong>a-</strong> (أ) does the same, attached to the first word: <strong>a-anta miṣrī?</strong> ('are you Egyptian?'). Both expect the answer <em>naʿam</em> (yes) or <em>lā</em> (no).",
            "To ask 'how many?' use <strong>kam</strong> (كَمْ) — and the counted noun stays <em>singular</em>: <em>kam akh ʿindaka?</em> = 'how many brothers do you have?' (lit. 'how many brother…').",
          ],
          keyPoint:
            "hal / a- = yes-no question markers. kam = how many (+ singular noun).",
        },
        {
          type: "vocab",
          heading: "Yes/no markers & numbers 1–6",
          items: [
            { l1: "هَلْ", en: "(yes/no question marker)", note: "hal — front of the sentence." },
            { l1: "كَمْ", en: "how many", note: "kam — followed by a singular noun." },
            { l1: "وَاحِد", en: "one", note: "wāḥid → wāḥida (f.)." },
            { l1: "اِثْنَان", en: "two", note: "ithnān." },
            { l1: "ثَلَاثَة", en: "three", note: "thalātha." },
            { l1: "أَرْبَعَة", en: "four", note: "arbaʿa." },
            { l1: "خَمْسَة", en: "five", note: "khamsa." },
            { l1: "سِتَّة", en: "six", note: "sitta." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the question",
          intro: "Arrange the words into a correct question.",
          items: [
            { tokens: ["هَلْ", "أَنْتَ", "مِصْرِيّ"], en: "Are you Egyptian?" },
            { tokens: ["هَلْ", "هَٰذَا", "مَطْعَمٌ"], en: "Is this a restaurant?" },
            { tokens: ["كَمْ", "أَخ", "عِنْدَكَ"], en: "How many brothers do you have?" },
            { tokens: ["هَلْ", "أَنْتِ", "طَالِبَة"], en: "Are you a student? (to a woman)" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the question",
          items: [
            {
              template: "___ أَنْتَ طَبِيب؟ (yes/no marker)",
              answer: "هَلْ",
              en: "Are you a doctor?",
              options: ["هَلْ", "كَمْ", "مَنْ", "أَيْنَ"],
            },
            {
              template: "___ أُخْت عِنْدَكِ؟ (how many)",
              answer: "كَمْ",
              en: "How many sisters do you have?",
              options: ["هَلْ", "كَمْ", "مَا", "مَتَى"],
            },
            {
              template: "عِنْدِي ___ إِخْوَة. (three)",
              answer: "ثَلَاثَة",
              en: "I have three brothers.",
              options: ["وَاحِد", "اِثْنَان", "ثَلَاثَة", "سِتَّة"],
            },
            {
              template: "هَلْ هَٰذِهِ ___ ؟ (a school)",
              answer: "مَدْرَسَة",
              en: "Is this a school?",
              options: ["مَدْرَسَة", "كَمْ", "هَلْ", "مَتَى"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Are you a student? How many books do you have?",
          reference: "هَلْ أَنْتَ طَالِب؟ كَمْ كِتَابًا عِنْدَكَ؟",
          hint: "hal opens the yes/no question; kam takes a singular noun (kitāb).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which word turns a statement into a yes/no question?",
              options: ["kam", "hal", "ayna", "mādhā"],
              correct: 1,
            },
            {
              q: "After 'kam' (how many), the counted noun is…",
              options: ["plural", "singular", "feminine", "dropped"],
              correct: 1,
            },
            {
              q: "'thalātha' means…",
              options: ["two", "three", "four", "six"],
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
        q: "Which word asks 'who?'",
        options: ["mā", "man", "mādhā", "ayna"],
        correct: 1,
      },
      {
        q: "'What is your name?' uses which 'what'?",
        options: ["mā (before a noun)", "mādhā (before a verb)", "man", "kam"],
        correct: 0,
      },
      {
        q: "Which question word means 'where'?",
        options: ["matā", "ayna", "kayfa", "limādhā"],
        correct: 1,
      },
      {
        q: "'kayfa ḥāluka?' means…",
        options: ["where are you?", "how are you?", "who are you?", "when are you free?"],
        correct: 1,
      },
      {
        q: "limādhā ('why') is literally…",
        options: ["'for what'", "'with what'", "'from where'", "'how much'"],
        correct: 0,
      },
      {
        q: "Which marker makes a yes/no question?",
        options: ["kam", "hal", "mā", "matā"],
        correct: 1,
      },
      {
        q: "After 'kam' (how many), the noun stays…",
        options: ["plural", "dual", "singular", "definite"],
        correct: 2,
      },
      {
        q: "'mādhā' is used before a…",
        options: ["noun", "verb", "preposition", "pronoun"],
        correct: 1,
      },
      {
        q: "The standard reply to 'kayfa ḥāluka?' is…",
        options: ["naʿam", "lā", "al-ḥamdu lillāh", "min faḍlik"],
        correct: 2,
      },
      {
        q: "'khamsa' means…",
        options: ["three", "four", "five", "six"],
        correct: 2,
      },
    ],
  },
};
