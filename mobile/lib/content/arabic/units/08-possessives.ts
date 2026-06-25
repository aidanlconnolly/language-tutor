import type { Unit } from "../../types";

export const UNIT_POSSESSIVES: Unit = {
  slug: "possessives",
  stage: 2,
  order: 8,
  icon: "🎯",
  title: "Possession (iḍāfa)",
  tagline: "Attached pronouns (-ī/-ka/-ki) and the construct chain.",
  badge: "core",
  lessons: [
    {
      slug: "possessives-attached-pronouns",
      title: "Attached possessive pronouns",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Arabic glues 'my, your, his' onto the noun",
          body: [
            "Arabic has no separate word for 'my' or 'your'. Instead a small <strong>suffix</strong> attaches to the end of the noun. <em>bayt</em> = 'house'; <strong>baytī</strong> = 'my house'; <strong>baytuka</strong> = 'your house' (to a man).",
            "The suffixes mirror the pronouns: <strong>-ī</strong> (my), <strong>-ka</strong> (your, m.), <strong>-ki</strong> (your, f.), <strong>-hu</strong> (his), <strong>-hā</strong> (her), <strong>-nā</strong> (our), <strong>-kum</strong> (your, pl.), <strong>-hum</strong> (their).",
            "A noun with a possessive suffix is automatically <em>definite</em> — 'my house' is already specific — so it never takes 'al-' and never takes the indefinite <em>-un</em> tanwīn.",
          ],
          keyPoint:
            "Possession = a suffix on the noun: -ī (my), -ka/-ki (your m./f.), -hu/-hā (his/her).",
        },
        {
          type: "conjugation",
          heading: "bayt (house) with every possessive",
          verb: "بَيْت",
          meaning: "house → 'my/your/his… house'",
          intro: "Read down the column: the same noun 'bayt' takes each attached pronoun.",
          tenses: [
            {
              name: "bayt + possessive suffix",
              forms: [
                { person: "anā", form: "بَيْتِي", en: "baytī — my house" },
                { person: "anta", form: "بَيْتُكَ", en: "baytuka — your house (m.)" },
                { person: "anti", form: "بَيْتُكِ", en: "baytuki — your house (f.)" },
                { person: "huwa", form: "بَيْتُهُ", en: "baytuhu — his house" },
                { person: "hiya", form: "بَيْتُهَا", en: "baytuhā — her house" },
                { person: "naḥnu", form: "بَيْتُنَا", en: "baytunā — our house" },
                { person: "antum", form: "بَيْتُكُمْ", en: "baytukum — your house (pl.)" },
                { person: "hum", form: "بَيْتُهُمْ", en: "baytuhum — their house" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "The same suffixes work on prepositions",
          body: "These endings also attach to little words. <em>ʿinda</em> ('at/with', used for 'to have') gives <strong>ʿindī</strong> ('I have', lit. 'at-me'), <strong>ʿindaka</strong> ('you have'). <em>li-</em> ('to/for') gives <strong>lī</strong> ('to me'). That's how Arabic says 'I have a brother': <em>ʿindī akh</em> or <em>lī akh</em>.",
          example: { l1: "عِنْدِي أَخ وَأُخْت.", en: "I have a brother and a sister." },
        },
        {
          type: "fillBlank",
          heading: "Attach the right ending",
          intro: "Build the possessed noun from 'bayt' (house) or 'ism' (name).",
          items: [
            {
              template: "هَٰذَا ___ . (my house)",
              answer: "بَيْتِي",
              en: "This is my house.",
              options: ["بَيْتِي", "بَيْتُكَ", "بَيْتُهُ", "بَيْتُهَا"],
            },
            {
              template: "مَا ___ ؟ (your name, to a man)",
              answer: "اسْمُكَ",
              en: "What is your name? (m.)",
              options: ["اسْمِي", "اسْمُكَ", "اسْمُكِ", "اسْمُهُ"],
            },
            {
              template: "اسْمُهَا لَيْلَى وَ ___ عُمَر. (his name)",
              answer: "اسْمُهُ",
              en: "Her name is Layla and his name is Omar.",
              options: ["اسْمُهَا", "اسْمُهُ", "اسْمُكِ", "اسْمُنَا"],
            },
            {
              template: "هَٰذَا ___ . (our house)",
              answer: "بَيْتُنَا",
              en: "This is our house.",
              options: ["بَيْتِي", "بَيْتُنَا", "بَيْتُكُمْ", "بَيْتُهُمْ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This is my house, and that is her name.",
          reference: "هَٰذَا بَيْتِي، وَهَٰذَا اسْمُهَا.",
          hint: "my house = baytī (suffix -ī); her name = ismuhā (suffix -hā).",
        },
      ],
    },
    {
      slug: "possessives-idafa-construct",
      title: "The iḍāfa construct — 'the X of the Y'",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Arabic has no word for 'of'",
          body: [
            "To link two nouns — 'the door of the house' — Arabic simply puts them side by side: <strong>bāb al-bayt</strong> (بَابُ الْبَيْت), literally 'door the-house'. This pair is called an <strong>iḍāfa</strong> (construct chain).",
            "The rules are tight. The <em>first</em> noun (the possessed thing) takes <strong>no</strong> 'al-' and <strong>no</strong> tanwīn — even though it's understood as definite. Only the <em>last</em> noun carries 'al-' (or a possessive suffix).",
            "So definiteness comes from the end: <em>bāb bayt</em> = 'a door of a house', <em>bāb al-bayt</em> = 'the door of the house', <em>bāb baytī</em> = 'the door of my house'. The first word never changes its bare shape.",
          ],
          keyPoint:
            "iḍāfa: noun + noun = 'X of Y'. First noun has no al-/no tanwīn; the last noun fixes definiteness.",
        },
        {
          type: "conjugation",
          heading: "Building iḍāfa chains",
          verb: "إِضَافَة",
          meaning: "construct chain — 'the X of the Y'",
          intro: "Compare how the first noun stays bare while the second noun controls 'the'.",
          tenses: [
            {
              name: "noun + noun",
              forms: [
                { person: "bāb + al-bayt", form: "بَابُ الْبَيْت", en: "bābu al-bayt — the door of the house" },
                { person: "miftāḥ + al-bāb", form: "مِفْتَاحُ الْبَاب", en: "miftāḥu al-bāb — the key of the door" },
                { person: "ism + al-walad", form: "اسْمُ الْوَلَد", en: "ismu al-walad — the boy's name" },
                { person: "kitāb + al-ṭālib", form: "كِتَابُ الطَّالِب", en: "kitābu al-ṭālib — the student's book" },
                { person: "madīna + al-Qāhira", form: "مَدِينَةُ الْقَاهِرَة", en: "madīnatu al-Qāhira — the city of Cairo" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "How iḍāfa works",
          questions: [
            {
              q: "In 'bāb al-bayt', why does 'bāb' have no 'al-'?",
              options: [
                "It's plural",
                "The first noun of an iḍāfa never takes al-",
                "It's feminine",
                "It's a typo",
              ],
              correct: 1,
              fb: "The first (possessed) noun stays bare; the last noun carries definiteness.",
            },
            {
              q: "'the key of the door' is…",
              options: ["al-miftāḥ al-bāb", "miftāḥ al-bāb", "miftāḥun bābun", "al-bāb miftāḥ"],
              correct: 1,
              fb: "miftāḥ (bare) + al-bāb. No 'of', no al- on the first noun.",
            },
            {
              q: "'a door of a house' (fully indefinite) is…",
              options: ["al-bāb al-bayt", "bāb al-bayt", "bāb bayt", "bābun baytun"],
              correct: 2,
              fb: "Both bare → indefinite: bāb bayt.",
            },
            {
              q: "Where does the 'the' go in an iḍāfa?",
              options: [
                "On both nouns",
                "On the first noun only",
                "On the last noun only",
                "Nowhere — iḍāfa is always indefinite",
              ],
              correct: 2,
              fb: "Only the final noun takes al- (or a possessive suffix).",
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Assemble the construct chain",
          intro: "Put the two nouns in iḍāfa order: possessed thing first.",
          items: [
            { tokens: ["بَابُ", "الْبَيْت"], en: "the door of the house" },
            { tokens: ["مِفْتَاحُ", "السَّيَّارَة"], en: "the key of the car" },
            { tokens: ["كِتَابُ", "الطَّالِب"], en: "the student's book" },
            { tokens: ["مَدِينَةُ", "الْقَاهِرَة"], en: "the city of Cairo" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "the door of the house and the key of the car",
          reference: "بَابُ الْبَيْت وَمِفْتَاحُ السَّيَّارَة",
          hint: "No 'of'. First noun bare (no al-), second noun takes al-.",
        },
      ],
    },
    {
      slug: "possessives-practice",
      title: "Practice — family & objects",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Putting suffixes and iḍāfa together",
          body: [
            "You can end an iḍāfa with a <em>possessive suffix</em> instead of 'al-'. That suffix makes the whole chain definite: <strong>bāb baytī</strong> = 'the door of my house', <strong>sayyārat abī</strong> = 'my father's car'.",
            "Feminine first nouns ending in <strong>ة</strong> pronounce that <em>t</em> when they head a chain: <em>sayyāra</em> ('car') → <strong>sayyārat al-bint</strong> ('the girl's car'). The silent <em>-a</em> turns audible.",
            "This is exactly how Egyptians say things like <em>bint ʿammī</em> ('my paternal cousin', lit. 'daughter of my uncle') — chains within chains.",
          ],
          keyPoint:
            "Ending an iḍāfa with -ī/-ka/etc. makes it definite: sayyārat abī = 'my father's car'.",
        },
        {
          type: "vocab",
          heading: "Objects to possess",
          items: [
            { l1: "سَيَّارَة", en: "car (f.)", note: "sayyāra — chain form: sayyārat-; root s-y-r." },
            { l1: "مِفْتَاح", en: "key (m.)", note: "miftāḥ — pl. mafātīḥ; root f-t-ḥ (to open)." },
            { l1: "بَاب", en: "door (m.)", note: "bāb — pl. abwāb." },
            { l1: "هَاتِف", en: "phone (m.)", note: "hātif — pl. hawātif; also mobile = mawbāyl." },
            { l1: "حَقِيبَة", en: "bag (f.)", note: "ḥaqība — chain form: ḥaqībat-." },
            { l1: "عَمّ", en: "paternal uncle", note: "ʿamm — ibn ʿammī = my (male) cousin." },
            { l1: "خَال", en: "maternal uncle", note: "khāl — the mother's brother." },
            { l1: "غُرْفَة", en: "room (f.)", note: "ghurfa — chain form: ghurfat-." },
          ],
        },
        {
          type: "conjugation",
          heading: "sayyāra (car) — chains and suffixes",
          verb: "سَيَّارَة",
          meaning: "car → possessed forms",
          intro: "Watch the ة become an audible 't' (sayyārat-) the moment it heads a chain.",
          tenses: [
            {
              name: "Possessed 'car'",
              forms: [
                { person: "anā", form: "سَيَّارَتِي", en: "sayyāratī — my car" },
                { person: "anta", form: "سَيَّارَتُكَ", en: "sayyāratuka — your car (m.)" },
                { person: "hiya", form: "سَيَّارَتُهَا", en: "sayyāratuhā — her car" },
                { person: "+ al-bint", form: "سَيَّارَةُ الْبِنْت", en: "sayyāratu al-bint — the girl's car" },
                { person: "+ abī", form: "سَيَّارَةُ أَبِي", en: "sayyāratu abī — my father's car" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Suffix or chain?",
          items: [
            {
              template: "هَٰذِهِ ___ . (my car)",
              answer: "سَيَّارَتِي",
              en: "This is my car.",
              options: ["سَيَّارَتِي", "سَيَّارَتُكَ", "سَيَّارَةُ الْبِنْت", "بَابُ الْبَيْت"],
            },
            {
              template: "أَيْنَ ___ ؟ (the key of the car)",
              answer: "مِفْتَاحُ السَّيَّارَة",
              en: "Where is the key of the car?",
              options: ["مِفْتَاحِي", "مِفْتَاحُ السَّيَّارَة", "السَّيَّارَة مِفْتَاح", "مِفْتَاحٌ سَيَّارَةٌ"],
            },
            {
              template: "هَٰذِهِ ___ . (my father's car)",
              answer: "سَيَّارَةُ أَبِي",
              en: "This is my father's car.",
              options: ["سَيَّارَتِي", "سَيَّارَةُ أَبِي", "سَيَّارَتُكِ", "بَابُ بَيْتِي"],
            },
            {
              template: "أَيْنَ ___ ؟ (your phone, to a woman)",
              answer: "هَاتِفُكِ",
              en: "Where is your phone? (f.)",
              options: ["هَاتِفِي", "هَاتِفُكَ", "هَاتِفُكِ", "هَاتِفُهُ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Where is the key of my father's car?",
          reference: "أَيْنَ مِفْتَاحُ سَيَّارَةِ أَبِي؟",
          hint: "A three-noun chain: key → car → my father. Only the final word (abī) carries possession.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'my car' is…",
              options: ["sayyāratī", "sayyāratuka", "al-sayyāra", "sayyāratun"],
              correct: 0,
            },
            {
              q: "In 'sayyārat al-bint', the ة of sayyāra is…",
              options: ["silent", "pronounced as 't'", "dropped", "doubled"],
              correct: 1,
            },
            {
              q: "'my father's car' is…",
              options: ["sayyāratī abī", "sayyāratu abī", "al-sayyāra abī", "sayyāra al-ab"],
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
        q: "How does Arabic say 'my house'?",
        options: ["al-bayt", "baytī (suffix -ī)", "anā bayt", "bayt min"],
        correct: 1,
      },
      {
        q: "The suffix for 'your' (to a woman) is…",
        options: ["-ka", "-ki", "-hu", "-hā"],
        correct: 1,
      },
      {
        q: "'her name' is…",
        options: ["ismuhu", "ismuhā", "ismuki", "ismunā"],
        correct: 1,
      },
      {
        q: "In the iḍāfa 'bāb al-bayt', the first noun 'bāb'…",
        options: ["takes al-", "takes tanwīn -un", "stays bare (no al-, no tanwīn)", "becomes plural"],
        correct: 2,
      },
      {
        q: "'the key of the door' is…",
        options: ["al-miftāḥ al-bāb", "miftāḥ al-bāb", "miftāḥun bābun", "bāb al-miftāḥ"],
        correct: 1,
      },
      {
        q: "In an iḍāfa chain, definiteness ('the') is set by…",
        options: ["the first noun", "the last noun", "both nouns", "neither"],
        correct: 1,
      },
      {
        q: "A noun with a possessive suffix (e.g. baytī)…",
        options: ["still needs al-", "is already definite", "takes tanwīn", "is always plural"],
        correct: 1,
      },
      {
        q: "'my father's car' is…",
        options: ["sayyāratī abī", "sayyāratu abī", "al-sayyāra abī", "sayyāra al-ab"],
        correct: 1,
      },
      {
        q: "When sayyāra (ة) heads a chain, the final ة is…",
        options: ["silent", "pronounced as 't' (sayyārat-)", "removed", "written as alif"],
        correct: 1,
      },
      {
        q: "Arabic expresses 'of' (as in 'door of the house') by…",
        options: ["the word 'min'", "the word 'li-'", "no word — just placing the nouns together", "the suffix -hu"],
        correct: 2,
      },
    ],
  },
};
