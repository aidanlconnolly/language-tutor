import type { Unit } from "../../types";

export const UNIT_PRONOUNS_NOMINAL: Unit = {
  slug: "pronouns-nominal",
  stage: 1,
  order: 5,
  icon: "🧱",
  title: "Pronouns & nominal sentences",
  tagline: "anā/anta/anti — sentences with no verb 'to be'.",
  badge: "core",
  lessons: [
    {
      slug: "pronouns-nominal-subject-pronouns",
      title: "Subject pronouns",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Arabic pronouns mark gender — even for 'you'",
          body: [
            "English has one word for 'you'. Arabic has several. <strong>anta</strong> (أَنْتَ) is 'you' to a man; <strong>anti</strong> (أَنْتِ) is 'you' to a woman. The only difference is the final vowel — a short <em>a</em> versus a short <em>i</em>.",
            "The same gender split runs through the third person: <strong>huwa</strong> (هُوَ) is 'he/it', <strong>hiya</strong> (هِيَ) is 'she/it'. There is no neutral 'it' — every noun is masculine or feminine.",
            "The plural <strong>antum</strong> (أَنْتُمْ, you all) and <strong>hum</strong> (هُمْ, they) are the default masculine/mixed-group forms. A group with even one man uses the masculine plural.",
          ],
          keyPoint:
            "anta = you (m), anti = you (f). The final harakat — fatḥa vs kasra — carries the gender.",
        },
        {
          type: "vocab",
          heading: "The eight core pronouns",
          intro: "These appear in every Arabic sentence you'll build. Note the script and the transliteration together.",
          items: [
            { l1: "أَنَا", en: "I", note: "anā — same for men and women." },
            { l1: "أَنْتَ", en: "you (m. sing.)", note: "anta — final fatḥa (a)." },
            { l1: "أَنْتِ", en: "you (f. sing.)", note: "anti — final kasra (i)." },
            { l1: "هُوَ", en: "he / it (m.)", note: "huwa." },
            { l1: "هِيَ", en: "she / it (f.)", note: "hiya." },
            { l1: "نَحْنُ", en: "we", note: "naḥnu — one form for any group including yourself." },
            { l1: "أَنْتُمْ", en: "you all (m./mixed)", note: "antum — masculine/mixed plural." },
            { l1: "هُمْ", en: "they (m./mixed)", note: "hum — masculine/mixed plural." },
          ],
        },
        {
          type: "pronounce",
          heading: "Say them aloud",
          intro: "Listen for the difference between anta and anti — it is the whole gender system in one vowel.",
          items: [
            { l1: "أَنَا", en: "I (anā)", tip: "Long final 'aa'." },
            { l1: "أَنْتَ", en: "you, m. (anta)", tip: "Ends low, open — 'a'." },
            { l1: "أَنْتِ", en: "you, f. (anti)", tip: "Ends high, thin — 'i'." },
            { l1: "نَحْنُ", en: "we (naḥnu)", tip: "The ḥ is a breathy throat sound." },
            { l1: "هُمْ", en: "they (hum)", tip: "Close the lips on the final m." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which pronoun?",
          questions: [
            {
              q: "You are speaking to one woman, your friend Layla. You address her as…",
              options: ["anta", "anti", "antum", "hiya"],
              correct: 1,
              fb: "anti is 'you' to a single woman — note the final kasra.",
            },
            {
              q: "Which pronoun means 'we'?",
              options: ["hum", "antum", "naḥnu", "huwa"],
              correct: 2,
              fb: "naḥnu covers any group that includes the speaker.",
            },
            {
              q: "You point at a group of men and refer to them as…",
              options: ["hum", "antum", "hiya", "naḥnu"],
              correct: 0,
              fb: "hum = they (masculine/mixed).",
            },
            {
              q: "The difference between anta and anti is…",
              options: [
                "number (singular vs plural)",
                "gender (masculine vs feminine)",
                "politeness",
                "nothing — they're interchangeable",
              ],
              correct: 1,
              fb: "anta addresses a man, anti a woman.",
            },
          ],
        },
      ],
    },
    {
      slug: "pronouns-nominal-no-verb-to-be",
      title: "The nominal sentence — no verb 'to be'",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Arabic drops 'am / is / are' in the present",
          body: [
            "To say 'I am a student' you simply place the pronoun next to the noun: <strong>anā ṭālib</strong> (أَنَا طَالِب) — literally 'I student'. There is <em>no</em> word for 'am'.",
            "This is the <strong>nominal sentence</strong> (jumla ismiyya): a subject plus a predicate, with the linking 'to be' understood. <em>huwa ṭabīb</em> = 'he (is a) doctor'. <em>hiya min miṣr</em> = 'she (is) from Egypt'.",
            "A woman makes the predicate feminine, usually by adding the tāʾ marbūṭa <strong>ة</strong> (an 'a' sound): a male student is <em>ṭālib</em>, a female student is <em>ṭāliba</em> (طَالِبَة).",
          ],
          keyPoint:
            "Present-tense 'to be' is invisible in Arabic: subject + predicate is a complete sentence.",
        },
        {
          type: "vocab",
          heading: "Words to build first sentences",
          items: [
            { l1: "طَالِب", en: "student (m.)", note: "ṭālib — pl. ṭullāb; root ṭ-l-b." },
            { l1: "طَالِبَة", en: "student (f.)", note: "ṭāliba — feminine ة added." },
            { l1: "مِنْ", en: "from", note: "min — preposition." },
            { l1: "مِصْر", en: "Egypt", note: "Miṣr — feminine; capital al-Qāhira (Cairo)." },
            { l1: "اَلْقَاهِرَة", en: "Cairo", note: "al-Qāhira — 'the victorious'." },
            { l1: "هُنَا", en: "here", note: "hunā." },
            { l1: "سَعِيد", en: "happy (m.)", note: "saʿīd — fem. saʿīda." },
            { l1: "تَعْبَان", en: "tired (m.)", note: "taʿbān — fem. taʿbāna; colloquial-leaning but widely understood." },
          ],
        },
        {
          type: "dialogue",
          heading: "Meeting on a felucca on the Nile",
          setup: "A tourist and a Cairene student strike up a conversation on a boat.",
          lines: [
            { speaker: "Student", l1: "أَنَا طَالِب. وَأَنْتَ؟", en: "I'm a student. And you?" },
            { speaker: "Tourist", l1: "أَنَا مِنْ أَمْرِيكَا. أَنَا سَعِيد هُنَا.", en: "I'm from America. I'm happy here." },
            { speaker: "Student", l1: "اَلْقَاهِرَة جَمِيلَة، أَلَيْسَ كَذَٰلِكَ؟", en: "Cairo is beautiful, isn't it?" },
            { speaker: "Tourist", l1: "نَعَمْ، جَمِيلَة جِدًّا.", en: "Yes, very beautiful." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the nominal sentence",
          intro: "There is no 'to be' to insert — pick the word that completes the meaning.",
          items: [
            {
              template: "أَنَا ___ . (a student, said by a man)",
              answer: "طَالِب",
              en: "I am a student.",
              options: ["طَالِب", "طَالِبَة", "مِنْ", "هُنَا"],
            },
            {
              template: "هِيَ ___ مِصْر.",
              answer: "مِنْ",
              en: "She is from Egypt.",
              options: ["مِنْ", "هُنَا", "سَعِيد", "أَنَا"],
            },
            {
              template: "هُوَ ___ . (happy)",
              answer: "سَعِيد",
              en: "He is happy.",
              options: ["سَعِيدَة", "سَعِيد", "طَالِبَة", "مِصْر"],
            },
            {
              template: "أَنَا طَالِبَة وَأَنَا ___ . (here)",
              answer: "هُنَا",
              en: "I am a student and I am here.",
              options: ["مِنْ", "هُنَا", "مِصْر", "أَنْتَ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I am a student. I am from Cairo.",
          reference: "أَنَا طَالِب. أَنَا مِنَ الْقَاهِرَة.",
          hint: "No verb 'to be'. Just put the pronoun next to the noun.",
        },
      ],
    },
    {
      slug: "pronouns-nominal-this-demonstratives",
      title: "hādhā / hādhihi — this",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "'This' also has a gender",
          body: [
            "<strong>hādhā</strong> (هَٰذَا) means 'this' for a masculine noun; <strong>hādhihi</strong> (هَٰذِهِ) means 'this' for a feminine noun. The choice follows the gender of the thing pointed at.",
            "Combined with the nominal sentence, you get pointing sentences with no 'to be': <strong>hādhā baytun</strong> (هَٰذَا بَيْتٌ) = 'this (is) a house'. <em>hādhihi madrasa</em> = 'this (is) a school'.",
            "Watch the difference with a definite noun: <em>hādhā al-bayt</em> (هَٰذَا الْبَيْت) means 'this house' (a phrase, not a sentence), while <em>hādhā baytun</em> means 'this is a house' (a full sentence). The little <em>-un</em> ending (tanwīn) signals 'a/an'.",
          ],
          keyPoint:
            "hādhā = this (m.), hādhihi = this (f.). Match the gender of the noun, not the speaker.",
        },
        {
          type: "vocab",
          heading: "Things to point at",
          items: [
            { l1: "هَٰذَا", en: "this (m.)", note: "hādhā — the alif is silent in spelling but read long." },
            { l1: "هَٰذِهِ", en: "this (f.)", note: "hādhihi." },
            { l1: "بَيْت", en: "house (m.)", note: "bayt — pl. buyūt; root b-y-t." },
            { l1: "مَدْرَسَة", en: "school (f.)", note: "madrasa — pl. madāris; root d-r-s." },
            { l1: "كِتَاب", en: "book (m.)", note: "kitāb — pl. kutub; root k-t-b." },
            { l1: "مَدِينَة", en: "city (f.)", note: "madīna — pl. mudun." },
            { l1: "سُوق", en: "market (m.)", note: "sūq — pl. aswāq; e.g. Khan al-Khalili." },
            { l1: "جَامِع", en: "mosque (m.)", note: "jāmiʿ — congregational mosque; root j-m-ʿ." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the pointing sentence",
          intro: "Arrange the words. Remember: subject + predicate, no 'to be'.",
          items: [
            { tokens: ["هَٰذَا", "بَيْتٌ"], en: "This is a house." },
            { tokens: ["هَٰذِهِ", "مَدْرَسَةٌ"], en: "This is a school." },
            { tokens: ["هَٰذَا", "كِتَابٌ"], en: "This is a book." },
            { tokens: ["هَٰذِهِ", "مَدِينَةٌ", "جَمِيلَةٌ"], en: "This is a beautiful city." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "hādhā or hādhihi?",
          questions: [
            {
              q: "kitāb (book) is masculine. 'This is a book' is…",
              options: ["hādhihi kitāb", "hādhā kitābun", "hādhā madrasa", "hādhihi kitābun"],
              correct: 1,
              fb: "Masculine noun → hādhā. The -un ending means 'a'.",
            },
            {
              q: "madīna (city) is feminine. 'This is a city' is…",
              options: ["hādhā madīna", "hādhihi madīnatun", "hādhā madīnatun", "hādhihi bayt"],
              correct: 1,
              fb: "Feminine noun → hādhihi.",
            },
            {
              q: "What is the difference between 'hādhā baytun' and 'hādhā al-bayt'?",
              options: [
                "Nothing",
                "'This is a house' vs 'this house'",
                "Masculine vs feminine",
                "Singular vs plural",
              ],
              correct: 1,
              fb: "The tanwīn -un = 'a house' (a full sentence); al- = 'the house' (a phrase).",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This is a school, and this is a beautiful mosque.",
          reference: "هَٰذِهِ مَدْرَسَةٌ، وَهَٰذَا جَامِعٌ جَمِيلٌ.",
          hint: "madrasa is feminine (hādhihi); jāmiʿ is masculine (hādhā). 'and' = wa-.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which means 'this' for a feminine noun?",
              options: ["hādhā", "hādhihi", "huwa", "hiya"],
              correct: 1,
            },
            {
              q: "'I am from Cairo' (said with no verb) is…",
              options: ["anā akūnu min al-Qāhira", "anā min al-Qāhira", "anā huwa al-Qāhira", "anā al-Qāhira hādhā"],
              correct: 1,
            },
            {
              q: "A female student calls herself…",
              options: ["ṭālib", "ṭāliba", "ṭullāb", "madrasa"],
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
        q: "How do you say 'you' to a single woman?",
        options: ["anta", "anti", "antum", "hiya"],
        correct: 1,
      },
      {
        q: "Which pronoun means 'we'?",
        options: ["hum", "naḥnu", "antum", "huwa"],
        correct: 1,
      },
      {
        q: "'huwa ṭabīb' means…",
        options: ["he has a doctor", "he is a doctor", "this is a doctor", "where is the doctor"],
        correct: 1,
      },
      {
        q: "Why is there no word for 'is' in 'anā ṭālib'?",
        options: [
          "It was dropped by mistake",
          "Arabic has no present-tense 'to be'",
          "It comes at the end",
          "It is only used in writing",
        ],
        correct: 1,
      },
      {
        q: "The feminine of 'ṭālib' (student) is…",
        options: ["ṭullāb", "ṭāliba", "ṭabīb", "madrasa"],
        correct: 1,
      },
      {
        q: "Which 'this' goes with the feminine noun 'madrasa'?",
        options: ["hādhā", "hādhihi", "huwa", "hunā"],
        correct: 1,
      },
      {
        q: "'hādhā baytun' means…",
        options: ["this house", "this is a house", "the house here", "whose house"],
        correct: 1,
      },
      {
        q: "Which pronoun refers to a mixed group of people (they)?",
        options: ["hum", "naḥnu", "antum", "hiya"],
        correct: 0,
      },
      {
        q: "Translate: 'I am from Egypt.'",
        options: ["anā miṣr", "anā min miṣr", "hādhā miṣr", "anā huwa miṣr"],
        correct: 1,
      },
      {
        q: "The final vowel that distinguishes anta from anti is…",
        options: ["a long vs short alif", "fatḥa (a) vs kasra (i)", "ḍamma vs sukūn", "nothing audible"],
        correct: 1,
      },
    ],
  },
};
