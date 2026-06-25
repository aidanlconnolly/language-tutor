import type { Unit } from "../../types";

export const UNIT_DIRECTIONS: Unit = {
  slug: "directions",
  stage: 3,
  order: 11,
  icon: "🧭",
  title: "Asking for directions",
  tagline: "yamīn, yasār, ʿalā ṭūl — ayna…?",
  badge: "tourist",
  lessons: [
    {
      slug: "directions-words",
      title: "Direction words",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The compass of the street",
          body: [
            "Four words get you almost anywhere: <strong>yamīn</strong> (يَمين, right), <strong>yasār</strong> (يَسار, left), <strong>ʿalā ṭūl</strong> (عَلى طول, straight ahead), and <strong>hunā / hunāk</strong> (هُنا / هُناك, here / there).",
            "To say how far, you pair <strong>qarīb</strong> (قَريب, near) and <strong>baʿīd</strong> (بَعيد, far) with <strong>min</strong> (مِن, from): <em>qarīb min al-funduq</em> = near the hotel.",
            "In Egyptian colloquial you'll also hear <em>shimāl</em> (شِمال) for \"left\" instead of yasār — handy to recognize, though MSA <strong>yasār</strong> is always understood.",
          ],
          keyPoint:
            "yamīn = right, yasār = left, ʿalā ṭūl = straight, qarīb = near, baʿīd = far.",
        },
        {
          type: "vocab",
          heading: "Direction vocab",
          items: [
            { l1: "يَمين", en: "right", note: "yamīn — Egyptian: same" },
            { l1: "يَسار", en: "left", note: "yasār — Egyptian colloquial: shimāl شِمال" },
            { l1: "عَلى طول", en: "straight ahead", note: "ʿalā ṭūl" },
            { l1: "هُنا", en: "here", note: "hunā" },
            { l1: "هُناك", en: "there", note: "hunāk" },
            { l1: "قَريب (مِن)", en: "near (to)", note: "qarīb (min)" },
            { l1: "بَعيد (عَن)", en: "far (from)", note: "baʿīd (ʿan)" },
            { l1: "أَمام", en: "in front of", note: "amām" },
            { l1: "خَلف", en: "behind", note: "khalf — Egyptian: warā ورا" },
            { l1: "بِجانِب", en: "next to", note: "bi-jānib" },
            { l1: "النّاصِية", en: "the corner", note: "an-nāṣiya (f.)" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Right, left, or straight?",
          items: [
            {
              template: "الفُندُق عَلى ال___ .",
              answer: "يَمين",
              en: "The hotel is on the right.",
              options: ["يَمين", "يَسار", "طول", "ناصية"],
            },
            {
              template: "اِمشِ عَلى ___ .",
              answer: "طول",
              en: "Walk straight ahead.",
              options: ["طول", "يَمين", "خَلف", "أَمام"],
            },
            {
              template: "المَطعَم ___ مِن هُنا.",
              answer: "قَريب",
              en: "The restaurant is near here.",
              options: ["قَريب", "بَعيد", "يَسار", "هُناك"],
            },
          ],
        },
        {
          type: "pronounce",
          heading: "Say the direction words",
          intro: "These short words carry the whole conversation — say each aloud.",
          items: [
            { l1: "يَمين", en: "right", tip: "ya-MEEN — stress the long ī." },
            { l1: "يَسار", en: "left", tip: "ya-SAAR — the s is light, not z." },
            { l1: "عَلى طول", en: "straight ahead", tip: "ʿa-la-TOOL — the ط is an emphatic, dark t." },
            { l1: "بَعيد", en: "far", tip: "ba-ʿEED — the ʿ is a throaty catch before ʿeed." },
          ],
        },
      ],
    },
    {
      slug: "directions-asking",
      title: "Asking the way",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two questions that unlock the city",
          body: [
            "<strong>ayna…?</strong> (أَينَ…؟) means \"where is…?\" — point your phone map or just name the place: <em>ayna l-maḥaṭṭa?</em> = where's the station?",
            "<strong>kayfa aṣil ilā…?</strong> (كَيفَ أَصِلُ إلى…؟) means \"how do I get to…?\" — this invites a set of directions rather than just a location.",
            "Open politely with <strong>law samaḥt</strong> (لَو سَمَحت, \"excuse me / if you please\") to a man, or <em>law samaḥtī</em> to a woman. It softens the question and Egyptians warm to it instantly.",
          ],
          keyPoint:
            "ayna…? = where is…? · kayfa aṣil ilā…? = how do I get to…? · open with law samaḥt.",
        },
        {
          type: "vocab",
          heading: "Asking vocab",
          items: [
            { l1: "أَين…؟", en: "where is…?", note: "ayna…?" },
            { l1: "كَيفَ أَصِلُ إلى…؟", en: "how do I get to…?", note: "kayfa aṣil ilā…?" },
            { l1: "لَو سَمَحت", en: "excuse me / please", note: "law samaḥt (to a man); law samaḥtī (to a woman)" },
            { l1: "هَل هو بَعيد؟", en: "is it far?", note: "hal huwa baʿīd?" },
            { l1: "أَمشي أَم آخُذ تاكسي؟", en: "should I walk or take a taxi?", note: "amshī am ākhudh tāksī?" },
            { l1: "الشّارِع", en: "the street", note: "ash-shāriʿ (m.)" },
            { l1: "المَيدان", en: "the square", note: "al-maydān (m.) — e.g. Maydān at-Taḥrīr" },
            { l1: "تُهتُ", en: "I'm lost", note: "tuhtu (MSA); Egyptian: anā tāyih أنا تايه" },
          ],
        },
        {
          type: "dialogue",
          heading: "Looking for Tahrir Square",
          setup: "You stop a passerby near downtown.",
          lines: [
            { speaker: "You", l1: "لَو سَمَحت، أَينَ مَيدان التَّحرير؟", en: "Excuse me, where is Tahrir Square?" },
            { speaker: "Passerby", l1: "اِمشِ عَلى طول، ثُمَّ اِنعَطِف يَمين.", en: "Walk straight ahead, then turn right." },
            { speaker: "You", l1: "هَل هو بَعيد؟", en: "Is it far?" },
            { speaker: "Passerby", l1: "لا، قَريب. خَمس دَقائِق سَيراً.", en: "No, it's near. Five minutes on foot." },
            { speaker: "You", l1: "شُكراً جَزيلاً، لَطيف مِنك.", en: "Thank you very much, that's kind of you." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the question",
          items: [
            { tokens: ["لَو", "سَمَحت", "،", "أَينَ", "المَحَطّة", "؟"], en: "Excuse me, where is the station?" },
            { tokens: ["كَيفَ", "أَصِلُ", "إلى", "الفُندُق", "؟"], en: "How do I get to the hotel?" },
            { tokens: ["هَل", "هو", "بَعيد", "؟"], en: "Is it far?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, how do I get to the museum? Is it far?",
          reference: "لَو سَمَحت، كَيفَ أَصِلُ إلى المَتحَف؟ هَل هو بَعيد؟",
          hint: "Open with law samaḥt, then kayfa aṣil ilā…?",
        },
      ],
    },
    {
      slug: "directions-answers",
      title: "Understanding answers & landmarks",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Catching the reply",
          body: [
            "Directions come as short commands: <strong>imshi</strong> (اِمشِ, walk), <strong>inʿaṭif</strong> (اِنعَطِف, turn), <strong>li-fāʾ</strong>... most often you'll hear <em>imshi ʿalā ṭūl</em> then <em>inʿaṭif yamīn / yasār</em>.",
            "People orient you by <strong>landmarks</strong> (مَعالِم, maʿālim): the mosque (المَسجِد, al-masjid), the bank (البَنك, al-bank), the bridge (الجِسر, al-jisr). Listen for <em>ʿinda…</em> (عِندَ…, at / by…) and <em>baʿda…</em> (بَعدَ…, after…).",
            "If it's too fast, ask them to repeat: <strong>marra ukhrā, min faḍlak</strong> (مَرّة أُخرى، مِن فَضلَك) — \"again, please.\"",
          ],
          keyPoint:
            "imshi = walk, inʿaṭif = turn. Landmarks: ʿinda… = at…, baʿda… = after…. 'Again' = marra ukhrā.",
        },
        {
          type: "vocab",
          heading: "Reply & landmark vocab",
          items: [
            { l1: "اِمشِ", en: "walk! (command)", note: "imshi" },
            { l1: "اِنعَطِف", en: "turn! (command)", note: "inʿaṭif — inʿaṭif yamīn = turn right" },
            { l1: "عِندَ", en: "at / by", note: "ʿinda — ʿinda l-masjid = at the mosque" },
            { l1: "بَعدَ", en: "after", note: "baʿda — baʿda l-bank = after the bank" },
            { l1: "المَسجِد", en: "the mosque", note: "al-masjid (m.)" },
            { l1: "البَنك", en: "the bank", note: "al-bank (m.)" },
            { l1: "الجِسر", en: "the bridge", note: "al-jisr (m.) — e.g. Kasr el-Nil bridge" },
            { l1: "الإشارة", en: "the traffic light", note: "al-ishāra (f.)" },
            { l1: "مَرّة أُخرى", en: "again / one more time", note: "marra ukhrā" },
          ],
        },
        {
          type: "listen",
          heading: "What were you told?",
          intro: "Read each direction, then pick the matching meaning.",
          items: [
            {
              l1: "اِمشِ عَلى طول.",
              en: "Walk straight ahead.",
              options: ["Turn left", "Walk straight ahead", "Stop here", "Go back"],
              correct: 1,
            },
            {
              l1: "اِنعَطِف يَسار عِندَ المَسجِد.",
              en: "Turn left at the mosque.",
              options: ["Turn left at the mosque", "Turn right at the bank", "Walk past the bridge", "Wait at the light"],
              correct: 0,
            },
            {
              l1: "هو بَعدَ البَنك.",
              en: "It's after the bank.",
              options: ["It's before the mosque", "It's after the bank", "It's next to the bridge", "It's far"],
              correct: 1,
            },
            {
              l1: "اِنعَطِف يَمين عِندَ الإشارة.",
              en: "Turn right at the traffic light.",
              options: ["Turn right at the traffic light", "Turn left at the corner", "Go straight at the square", "Stop at the bank"],
              correct: 0,
            },
          ],
        },
        {
          type: "tip",
          heading: "When it's too fast, slow it down",
          body: "Cairenes give directions warmly and quickly. If you lose the thread, just say <strong>marra ukhrā, min faḍlak</strong> and add <em>biwuḍūḥ</em> (بِوُضوح, \"clearly\"). Most people will happily repeat with gestures.",
          example: { l1: "مَرّة أُخرى، مِن فَضلَك. بِبُطء.", en: "Again, please. Slowly." },
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "inʿaṭif yamīn means…",
              options: ["walk straight", "turn right", "turn left", "stop here"],
              correct: 1,
            },
            {
              q: "Translate: 'It's after the bank.'",
              options: ["هو بَعدَ البَنك", "هو عِندَ المَسجِد", "هو أَمام الجِسر", "هو بَعيد"],
              correct: 0,
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
        q: "yamīn means…",
        options: ["left", "right", "straight", "behind"],
        correct: 1,
      },
      {
        q: "yasār means…",
        options: ["right", "near", "left", "far"],
        correct: 2,
      },
      {
        q: "'Straight ahead' =",
        options: ["ʿalā ṭūl", "ʿalā jamb", "ʿalā l-yamīn", "ʿinda"],
        correct: 0,
      },
      {
        q: "'Where is the station?' =",
        options: ["أَينَ المَحَطّة؟", "كَيفَ المَحَطّة؟", "مَتى المَحَطّة؟", "بِكَم المَحَطّة؟"],
        correct: 0,
      },
      {
        q: "'How do I get to the hotel?' =",
        options: [
          "كَيفَ أَصِلُ إلى الفُندُق؟",
          "أَينَ الفُندُق؟",
          "هَل الفُندُق بَعيد؟",
          "بِكَم إلى الفُندُق؟",
        ],
        correct: 0,
      },
      {
        q: "qarīb min means…",
        options: ["far from", "near to", "behind", "after"],
        correct: 1,
      },
      {
        q: "The polite opener 'excuse me / please' (to a man) is…",
        options: ["law samaḥt", "marra ukhrā", "min faḍlak only", "shukran"],
        correct: 0,
      },
      {
        q: "inʿaṭif means…",
        options: ["walk", "turn", "stop", "wait"],
        correct: 1,
      },
      {
        q: "'Is it far?' =",
        options: ["هَل هو بَعيد؟", "هَل هو قَريب؟", "أَينَ هو؟", "كَيفَ هو؟"],
        correct: 0,
      },
      {
        q: "ʿinda l-masjid means…",
        options: ["after the bank", "at the mosque", "behind the bridge", "near the square"],
        correct: 1,
      },
    ],
  },
};
