import type { Unit } from "../../types";

export const UNIT_ABOUT_ME: Unit = {
  slug: "about-me",
  stage: 2,
  order: 6,
  icon: "🪪",
  title: "About me",
  tagline: "Nationalities, jobs, family, and nisba adjectives.",
  badge: "tourist",
  lessons: [
    {
      slug: "about-me-nationalities",
      title: "Countries & nationalities (the nisba)",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Turn a country into 'I'm ___ian' with one ending",
          body: [
            "Arabic builds nationalities with the <strong>nisba</strong> suffix. Take the country, drop any 'al-' or final ة, and add <strong>-ī</strong> (ـِيّ) for a man or <strong>-iyya</strong> (ـِيَّة) for a woman.",
            "<em>Miṣr</em> (Egypt) → <strong>miṣrī</strong> / <strong>miṣriyya</strong> (Egyptian). <em>Amrīkā</em> (America) → <strong>amrīkī</strong> / <strong>amrīkiyya</strong> (American). The same ending makes any adjective of belonging.",
            "Because there's no 'to be', a full sentence is just pronoun + nisba: <strong>anā miṣrī</strong> = 'I'm Egyptian (m.)', <strong>anā miṣriyya</strong> = 'I'm Egyptian (f.)'.",
          ],
          keyPoint:
            "Nisba = -ī (m.) / -iyya (f.). It converts a country (or noun) into an adjective of origin.",
        },
        {
          type: "vocab",
          heading: "Countries → nationalities",
          intro: "The masculine nisba is shown; add ة for the feminine.",
          items: [
            { l1: "مِصْر", en: "Egypt", note: "Miṣr → miṣrī / miṣriyya (Egyptian)." },
            { l1: "أَمْرِيكَا", en: "America", note: "Amrīkā → amrīkī / amrīkiyya." },
            { l1: "بِرِيطَانِيَا", en: "Britain", note: "Brīṭāniyā → brīṭānī / brīṭāniyya." },
            { l1: "فَرَنْسَا", en: "France", note: "Faransā → faransī / faransiyya." },
            { l1: "لُبْنَان", en: "Lebanon", note: "Lubnān → lubnānī / lubnāniyya." },
            { l1: "اَلْمَغْرِب", en: "Morocco", note: "al-Maghrib → maghribī / maghribiyya." },
            { l1: "أَلْمَانِيَا", en: "Germany", note: "Almāniyā → almānī / almāniyya." },
            { l1: "اَلْعَرَبِيَّة", en: "Arabic (language)", note: "al-ʿarabiyya — itself a nisba (from ʿarab)." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Apply the nisba",
          intro: "Choose the correct nationality form for the person described.",
          items: [
            {
              template: "أَنَا ___ . (Egyptian, said by a man)",
              answer: "مِصْرِيّ",
              en: "I'm Egyptian.",
              options: ["مِصْرِيّ", "مِصْرِيَّة", "مِصْر", "اَلْقَاهِرَة"],
            },
            {
              template: "هِيَ ___ . (American woman)",
              answer: "أَمْرِيكِيَّة",
              en: "She is American.",
              options: ["أَمْرِيكِيّ", "أَمْرِيكِيَّة", "أَمْرِيكَا", "فَرَنْسَا"],
            },
            {
              template: "أَنْتَ ___ ؟ (French, to a man)",
              answer: "فَرَنْسِيّ",
              en: "Are you French?",
              options: ["فَرَنْسِيّ", "فَرَنْسِيَّة", "فَرَنْسَا", "لُبْنَان"],
            },
            {
              template: "هُوَ ___ مِنْ بَيْرُوت. (Lebanese)",
              answer: "لُبْنَانِيّ",
              en: "He is Lebanese, from Beirut.",
              options: ["لُبْنَانِيّ", "لُبْنَانِيَّة", "لُبْنَان", "مَغْرِبِيّ"],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "At passport control in Cairo airport",
          setup: "An officer checks a traveller arriving at Cairo International.",
          lines: [
            { speaker: "Officer", l1: "أَهْلًا. مِنْ أَيْنَ أَنْتَ؟", en: "Welcome. Where are you from?" },
            { speaker: "Traveller", l1: "أَنَا أَمْرِيكِيّ، مِنْ نِيُويُورْك.", en: "I'm American, from New York." },
            { speaker: "Officer", l1: "هَلْ تَتَكَلَّمُ الْعَرَبِيَّة؟", en: "Do you speak Arabic?" },
            { speaker: "Traveller", l1: "قَلِيلًا. أَنَا طَالِب لِلْعَرَبِيَّة.", en: "A little. I'm a student of Arabic." },
            { speaker: "Officer", l1: "أَهْلًا وَسَهْلًا فِي مِصْر!", en: "Welcome to Egypt!" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I am American, and she is Egyptian.",
          reference: "أَنَا أَمْرِيكِيّ، وَهِيَ مِصْرِيَّة.",
          hint: "Masculine nisba -ī for you, feminine -iyya for her. 'and' = wa-.",
        },
      ],
    },
    {
      slug: "about-me-jobs",
      title: "Jobs",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Naming your job — no 'a' needed",
          body: [
            "To say your profession, drop the article: <strong>anā muhandis</strong> = 'I'm an engineer' (literally 'I engineer'). The indefinite 'a/an' is carried by the bare noun.",
            "Most jobs form the feminine the same way as adjectives — add <strong>ة</strong>: <em>ṭabīb</em> (doctor, m.) → <em>ṭabība</em> (f.); <em>muhandis</em> → <em>muhandisa</em>; <em>muʿallim</em> (teacher) → <em>muʿallima</em>.",
            "Many job words follow the <strong>mu-</strong> pattern (muhandis, muʿallim, mudarris, muwaẓẓaf) — a sign of an active participle, 'one who does X'. Spotting the pattern helps you guess new ones.",
          ],
          keyPoint:
            "Job nouns take ة for the feminine: ṭabīb → ṭabība, muhandis → muhandisa.",
        },
        {
          type: "vocab",
          heading: "Common professions",
          intro: "Masculine form shown; feminine adds ة.",
          items: [
            { l1: "طَبِيب", en: "doctor (m.)", note: "ṭabīb → ṭabība; root ṭ-b-b." },
            { l1: "مُهَنْدِس", en: "engineer (m.)", note: "muhandis → muhandisa." },
            { l1: "طَالِب", en: "student (m.)", note: "ṭālib → ṭāliba." },
            { l1: "مُعَلِّم", en: "teacher (m.)", note: "muʿallim → muʿallima; root ʿ-l-m." },
            { l1: "مُوَظَّف", en: "employee / clerk (m.)", note: "muwaẓẓaf → muwaẓẓafa." },
            { l1: "سَائِق", en: "driver (m.)", note: "sāʾiq → sāʾiqa; e.g. taxi driver." },
            { l1: "صَحَفِيّ", en: "journalist (m.)", note: "ṣaḥafī → ṣaḥafiyya — itself a nisba." },
            { l1: "طَبَّاخ", en: "cook (m.)", note: "ṭabbākh → ṭabbākha; faʿʿāl pattern = craftsperson." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Match the profession",
          questions: [
            {
              q: "Layla fixes bridges and roads. She says: anā…",
              options: ["muhandis", "muhandisa", "ṭabīb", "ṭabība"],
              correct: 1,
              fb: "Female engineer = muhandisa.",
            },
            {
              q: "How does a male doctor introduce his job?",
              options: ["anā ṭabība", "anā ṭabīb", "anā muʿallim", "anā sāʾiq"],
              correct: 1,
              fb: "ṭabīb is the masculine form.",
            },
            {
              q: "The mu- prefix on muhandis, muʿallim, muwaẓẓaf signals…",
              options: [
                "the plural",
                "the feminine",
                "an active participle ('one who does X')",
                "the past tense",
              ],
              correct: 2,
              fb: "mu- often marks 'the one who does' the root's action.",
            },
            {
              q: "'I'm a teacher' (said by a woman) is…",
              options: ["anā muʿallim", "anā muʿallima", "anā muʿallimūn", "anā ṭāliba"],
              correct: 1,
              fb: "Female teacher = muʿallima.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "He is an engineer and she is a doctor.",
          reference: "هُوَ مُهَنْدِس وَهِيَ طَبِيبَة.",
          hint: "No 'a/an'. Feminine doctor adds ة → ṭabība.",
        },
      ],
    },
    {
      slug: "about-me-family",
      title: "Family (al-ʿāʾila)",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The family — your most-used vocabulary in Egypt",
          body: [
            "Egyptians ask about family early and often. <strong>al-ʿāʾila</strong> (الْعَائِلَة) is 'the family'; <strong>al-usra</strong> (الْأُسْرَة) is the close household.",
            "Pairs come gendered: <em>ab</em> (father) / <em>umm</em> (mother), <em>akh</em> (brother) / <em>ukht</em> (sister), <em>ibn</em> (son) / <em>bint</em> (daughter, also 'girl').",
            "These nouns combine with attached possessives (which you'll drill in the next unit): <em>abī</em> = 'my father', <em>ummī</em> = 'my mother'. For now, just learn the base words.",
          ],
          keyPoint:
            "Family pairs are gendered: ab/umm, akh/ukht, ibn/bint, jadd/jadda.",
        },
        {
          type: "vocab",
          heading: "Family members",
          items: [
            { l1: "عَائِلَة", en: "family", note: "ʿāʾila — pl. ʿāʾilāt; root ʿ-w-l." },
            { l1: "أَب", en: "father", note: "ab — 'my father' = abī; pl. ābāʾ." },
            { l1: "أُمّ", en: "mother", note: "umm — pl. ummahāt; root ʾ-m-m." },
            { l1: "أَخ", en: "brother", note: "akh — pl. ikhwa." },
            { l1: "أُخْت", en: "sister", note: "ukht — pl. akhawāt." },
            { l1: "اِبْن", en: "son", note: "ibn — pl. abnāʾ." },
            { l1: "بِنْت", en: "daughter / girl", note: "bint — pl. banāt." },
            { l1: "جَدّ", en: "grandfather", note: "jadd → jadda (grandmother); root j-d-d." },
          ],
        },
        {
          type: "dialogue",
          heading: "Tea with a Cairene host",
          setup: "Your host pours shai and asks about your family.",
          lines: [
            { speaker: "Host", l1: "هَٰذِهِ عَائِلَتِي. هَٰذَا أَبِي وَهَٰذِهِ أُمِّي.", en: "This is my family. This is my father and this is my mother." },
            { speaker: "You", l1: "عَائِلَة جَمِيلَة! هَلْ لَكَ أَخ؟", en: "A lovely family! Do you have a brother?" },
            { speaker: "Host", l1: "نَعَمْ، لِي أَخ وَأُخْت.", en: "Yes, I have a brother and a sister." },
            { speaker: "You", l1: "وَأَنَا لِي أُخْت وَاحِدَة فَقَط.", en: "And I have only one sister." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the family word",
          items: [
            {
              template: "هَٰذَا ___ . (father)",
              answer: "أَب",
              en: "This is a father.",
              options: ["أَب", "أُمّ", "أُخْت", "بِنْت"],
            },
            {
              template: "هَٰذِهِ ___ . (sister)",
              answer: "أُخْت",
              en: "This is a sister.",
              options: ["أَخ", "أُخْت", "اِبْن", "جَدّ"],
            },
            {
              template: "لِي ___ وَاحِد. (one brother)",
              answer: "أَخ",
              en: "I have one brother.",
              options: ["أَخ", "أُخْت", "أُمّ", "بِنْت"],
            },
            {
              template: "هَٰذِهِ ___ كَبِيرَة. (a big family)",
              answer: "عَائِلَة",
              en: "This is a big family.",
              options: ["عَائِلَة", "اِبْن", "جَدّ", "أَب"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This is my father, and this is my mother.",
          reference: "هَٰذَا أَبِي، وَهَٰذِهِ أُمِّي.",
          hint: "'my father' = abī, 'my mother' = ummī. hādhā for him, hādhihi for her.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which word means 'mother'?",
              options: ["ab", "umm", "ukht", "bint"],
              correct: 1,
            },
            {
              q: "'akh' means…",
              options: ["father", "sister", "brother", "son"],
              correct: 2,
            },
            {
              q: "'my father' is…",
              options: ["ab", "abī", "umm", "ummī"],
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
        q: "The nisba ending that makes 'Egyptian' (m.) is…",
        options: ["-iyya", "-ī", "-āt", "-ūn"],
        correct: 1,
      },
      {
        q: "A French woman says she is…",
        options: ["faransī", "faransiyya", "faransā", "faransiyyūn"],
        correct: 1,
      },
      {
        q: "'I'm an engineer' (said by a man) is…",
        options: ["anā muhandisa", "anā al-muhandis", "anā muhandis", "anā muhandisūn"],
        correct: 2,
      },
      {
        q: "How does a female doctor name her job?",
        options: ["ṭabīb", "ṭabība", "ṭabbākh", "muʿallim"],
        correct: 1,
      },
      {
        q: "The mu- on muhandis / muʿallim typically marks…",
        options: ["a plural", "a feminine", "an active participle", "a place"],
        correct: 2,
      },
      {
        q: "Which pair is father / mother?",
        options: ["akh / ukht", "ab / umm", "ibn / bint", "jadd / jadda"],
        correct: 1,
      },
      {
        q: "'bint' means…",
        options: ["son", "brother", "daughter / girl", "grandmother"],
        correct: 2,
      },
      {
        q: "To say a profession in Arabic, you…",
        options: [
          "always add 'al-'",
          "use the bare noun, no 'a/an'",
          "must use a verb",
          "add the nisba ending",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'She is American.'",
        options: ["hiya amrīkī", "hiya amrīkiyya", "hiya amrīkā", "hiya min amrīkī"],
        correct: 1,
      },
      {
        q: "'al-ʿāʾila' means…",
        options: ["the city", "the family", "the school", "the work"],
        correct: 1,
      },
    ],
  },
};
