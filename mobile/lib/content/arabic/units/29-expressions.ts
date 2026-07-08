import type { Unit } from "../../types";

export const UNIT_EXPRESSIONS: Unit = {
  slug: "expressions",
  stage: 7,
  order: 29,
  icon: "🌙",
  title: "Everyday expressions",
  tagline: "in shāʾ Allāh, al-ḥamdu lillāh, mā shāʾ Allāh, yaʿnī.",
  badge: "culture",
  lessons: [
    {
      slug: "expressions-allah-phrases",
      title: "The everyday 'Allah' expressions",
      summary: "in shāʾ Allāh, al-ḥamdu lillāh, mā shāʾ Allāh — what they mean and when they're used.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Expressions everyone uses, all day long",
          body: [
            "A handful of phrases built on the word <em>Allāh</em> (God) are woven through ordinary Arabic conversation — by people of every background and belief, religious or not. They function as everyday social language, much like English 'hopefully', 'thank goodness', or 'touch wood'.",
            "<strong>In shāʾ Allāh</strong> (God willing) tags onto any plan or future statement: 'See you tomorrow, in shāʾ Allāh.' It signals hope without over-promising.",
            "<strong>Al-ḥamdu lillāh</strong> (praise be to God / thank God) is the standard answer to 'How are you?' — it means 'I'm fine, thanks'. It's also said after good news, after a meal, or after a sneeze.",
            "<strong>Mā shāʾ Allāh</strong> (what God has willed) admires something nice — a cute baby, a new job, good news — while warding off the 'evil eye'. It's the Arabic 'wonderful!' with a touch of 'touch wood'.",
          ],
          keyPoint:
            "in shāʾ Allāh = hopefully / God willing (for plans); al-ḥamdu lillāh = thank God / I'm fine; mā shāʾ Allāh = wonderful / touch wood (admiring something).",
        },
        {
          type: "vocab",
          heading: "The three core expressions",
          items: [
            { l1: "إِنْ شاءَ اللَّه", en: "God willing / hopefully", note: "transliteration: in shāʾ Allāh; literally 'if God wills'. Tag it onto any future plan." },
            { l1: "الْحَمْدُ لِلَّه", en: "thank God / I'm fine", note: "transliteration: al-ḥamdu lillāh; literally 'praise belongs to God'. The default reply to 'how are you?'." },
            { l1: "ما شاءَ اللَّه", en: "wonderful! / touch wood", note: "transliteration: mā shāʾ Allāh; literally 'what God has willed'. Said when admiring something, to avoid jinxing it." },
            { l1: "بِإِذْنِ اللَّه", en: "God willing (gentler variant)", note: "transliteration: bi-idhni-llāh; literally 'with God's permission'; close in use to in shāʾ Allāh." },
            { l1: "بارَكَ اللَّهُ فيك", en: "may God bless you", note: "transliteration: bāraka-llāhu fīk; a warm thank-you / blessing said in return for a kindness." },
          ],
        },
        {
          type: "tip",
          heading: "Why 'in shāʾ Allāh' is everywhere",
          body: "Adding <strong>in shāʾ Allāh</strong> to a plan is partly cultural humility — no one fully controls the future — and partly just politeness. It does <em>not</em> mean 'probably not', though learners sometimes joke that it does. When a friend says <em>'bukrā in shāʾ Allāh'</em> (tomorrow, God willing), they sincerely mean tomorrow. Leaving it off a future statement can sound oddly blunt or over-confident.",
          example: { l1: "أَراكَ غَدًا إِنْ شاءَ اللَّه.", en: "I'll see you tomorrow, God willing." },
        },
        {
          type: "multipleChoice",
          heading: "Which expression fits?",
          questions: [
            {
              q: "A friend asks 'How are you?' (kayf ḥālak?). The most natural everyday reply is:",
              options: ["In shāʾ Allāh", "Al-ḥamdu lillāh", "Mā shāʾ Allāh", "Bismillāh"],
              correct: 1,
              fb: "Al-ḥamdu lillāh ('thank God') is the standard 'I'm fine, thanks'.",
            },
            {
              q: "You see a friend's adorable new baby. You say:",
              options: ["In shāʾ Allāh", "Al-ḥamdu lillāh", "Mā shāʾ Allāh", "Maʿ as-salāma"],
              correct: 2,
              fb: "Mā shāʾ Allāh admires something nice while warding off the evil eye.",
            },
            {
              q: "You're making plans: 'We'll travel to Aswan next week ___'. Add:",
              options: ["mā shāʾ Allāh", "al-ḥamdu lillāh", "in shāʾ Allāh", "shukran"],
              correct: 2,
              fb: "In shāʾ Allāh (God willing) tags onto future plans.",
            },
            {
              q: "Does 'in shāʾ Allāh' on a plan usually mean the person won't do it?",
              options: ["Yes, it always means no", "No — it sincerely means they intend to", "It means 'maybe, 50/50'", "Only on Fridays"],
              correct: 1,
              fb: "It's sincere hope plus humility about the future — not a polite refusal.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Thank God, I'm fine. See you tomorrow, God willing.",
          reference: "الْحَمْدُ لِلَّه، أَنا بِخَيْر. أَراكَ غَدًا إِنْ شاءَ اللَّه.",
          hint: "Open with al-ḥamdu lillāh; close the plan with in shāʾ Allāh.",
        },
      ],
    },
    {
      slug: "expressions-fillers-reactions",
      title: "Fillers & reactions",
      summary: "yaʿnī, khalāṣ, maʿlish, yalla — the little words that keep conversation flowing.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The glue words of real conversation",
          body: [
            "Beyond the 'Allah' expressions, a few short fillers and reactions appear constantly — especially in Egyptian speech, which colours everyday spoken MSA.",
            "<strong>Yaʿnī</strong> (it means / I mean / sort of) is the Arabic 'like' / 'you know' — it fills pauses and softens statements.",
            "<strong>Khalāṣ</strong> (that's it / done / enough) closes a topic: 'okay, finished, let's move on.'",
            "<strong>Maʿlish</strong> (never mind / sorry / it's okay) smooths over small problems and apologies — wonderfully flexible.",
            "<strong>Yalla</strong> (come on / let's go) urges action: 'yalla, let's go!'",
          ],
          keyPoint:
            "yaʿnī = 'I mean / like'; khalāṣ = 'done / enough'; maʿlish = 'never mind / no worries'; yalla = 'come on / let's go'.",
        },
        {
          type: "vocab",
          heading: "Fillers & reactions",
          items: [
            { l1: "يَعْني", en: "I mean / it means / sort of", note: "transliteration: yaʿnī; literally 'it means'. Used as a filler, like English 'like' or 'you know'." },
            { l1: "خَلاص", en: "that's it / done / enough", note: "transliteration: khalāṣ; literally 'finished'. Closes a topic or signals 'okay, settled'." },
            { l1: "مَعْلِش", en: "never mind / no worries / sorry", note: "transliteration: maʿlish; Egyptian, very common; softens apologies and small setbacks." },
            { l1: "يَلّا", en: "come on / let's go", note: "transliteration: yalla; urges movement or action." },
            { l1: "طَيِّب", en: "okay / fine / alright", note: "transliteration: ṭayyib; literally 'good'; an all-purpose 'okay' and conversational acknowledgement." },
            { l1: "بَسّ", en: "but / only / enough", note: "transliteration: bass; means 'only/just', 'but', or 'stop it / that's enough' depending on tone." },
            { l1: "أَكيد", en: "for sure / definitely", note: "transliteration: akīd; an emphatic 'of course'." },
            { l1: "بِالضَّبْط", en: "exactly", note: "transliteration: biḍ-ḍabṭ; agreeing strongly — 'precisely'." },
          ],
        },
        {
          type: "tip",
          heading: "The many lives of 'maʿlish'",
          body: "<strong>Maʿlish</strong> is one of the most useful words in Egyptian Arabic. It means <em>'never mind'</em> when something small goes wrong, <em>'sorry'</em> when you bump someone, <em>'it's okay'</em> when you forgive a mistake, and <em>'don't worry about it'</em> when reassuring a friend. Tone and context do the rest. If you learn one filler, learn this one.",
          example: { l1: "مَعْلِش، مِش مُشْكِلَة.", en: "Never mind, it's not a problem." },
        },
        {
          type: "fillBlank",
          heading: "Drop in the right filler",
          intro: "Choose the word that fits the situation.",
          items: [
            {
              template: "___ ! لِنَذْهَب الآن.",
              answer: "يَلّا",
              en: "Come on! Let's go now.",
              options: ["يَلّا", "خَلاص", "يَعْني", "أَكيد"],
            },
            {
              template: "انْتَهَيْنا، ___ .",
              answer: "خَلاص",
              en: "We're finished, that's it.",
              options: ["مَعْلِش", "خَلاص", "أَكيد", "يَعْني"],
            },
            {
              template: "تَأَخَّرْتُ قَليلًا، ___ .",
              answer: "مَعْلِش",
              en: "I'm a little late, sorry / never mind.",
              options: ["يَلّا", "مَعْلِش", "بِالضَّبْط", "خَلاص"],
            },
            {
              template: "هُوَ، ___ ، صَديقٌ قَديم.",
              answer: "يَعْني",
              en: "He's, I mean, an old friend.",
              options: ["يَعْني", "يَلّا", "خَلاص", "بَسّ"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Match the reaction",
          questions: [
            {
              q: "Your friend describes a plan and you agree completely. You say:",
              options: ["maʿlish", "biḍ-ḍabṭ (exactly)", "yalla", "khalāṣ"],
              correct: 1,
            },
            {
              q: "You want to gently close a long discussion: 'okay, that's settled, done.' You say:",
              options: ["yaʿnī", "akīd", "khalāṣ", "bass... go on"],
              correct: 2,
            },
            {
              q: "Someone apologises for a tiny delay. A warm reply is:",
              options: ["Maʿlish (no worries)", "Khalāṣ!", "Akīd", "Yalla"],
              correct: 0,
            },
          ],
        },
      ],
    },
    {
      slug: "expressions-in-dialogue",
      title: "Using them naturally in dialogue",
      summary: "Stitch the expressions together the way a real conversation does.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Putting it all together",
          body: [
            "Real conversation strings these expressions together effortlessly. A single friendly exchange might open with <em>al-ḥamdu lillāh</em>, react with <em>mā shāʾ Allāh</em>, soften with <em>maʿlish</em>, and close with <em>in shāʾ Allāh</em>.",
            "The trick is rhythm: these words are short, frequent, and low-stakes. Sprinkle them and you sound natural; force them and you sound like a textbook. Listen for where natives place them and echo that.",
          ],
          keyPoint:
            "Chain them naturally: greet → react → soften → close. Short, frequent, low-stakes.",
        },
        {
          type: "dialogue",
          heading: "Bumping into a friend in Cairo",
          setup: "You run into an old friend near Tahrir Square.",
          lines: [
            { speaker: "Friend", l1: "السَّلامُ عَلَيْكُم! كَيْفَ حالُك؟", en: "Peace be upon you! How are you?" },
            { speaker: "You", l1: "وَعَلَيْكُمُ السَّلام. الْحَمْدُ لِلَّه، بِخَيْر. وَأَنْتَ؟", en: "And upon you peace. Thank God, I'm well. And you?" },
            { speaker: "Friend", l1: "الْحَمْدُ لِلَّه. حَصَلْتُ عَلى عَمَلٍ جَديد!", en: "Thank God. I got a new job!" },
            { speaker: "You", l1: "ما شاءَ اللَّه! مَبْروك!", en: "Wonderful! Congratulations!" },
            { speaker: "Friend", l1: "شُكْرًا. يَلّا، نَشْرَبُ قَهْوَة؟", en: "Thanks. Come on, shall we get a coffee?" },
            { speaker: "You", l1: "أَكيد، بَسّ لَدَيَّ عَشْرُ دَقائِق فَقَط. مَعْلِش.", en: "For sure, but I only have ten minutes. Sorry." },
            { speaker: "Friend", l1: "مَعْلِش، خَلاص. نَلْتَقي غَدًا إِنْ شاءَ اللَّه.", en: "No worries, that's fine. We'll meet tomorrow, God willing." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the reply",
          intro: "Tap the words into natural order.",
          items: [
            { tokens: ["الْحَمْدُ", "لِلَّه،", "أَنا", "بِخَيْر"], en: "Thank God, I'm well." },
            { tokens: ["ما", "شاءَ", "اللَّه،", "مَبْروك"], en: "Wonderful, congratulations!" },
            { tokens: ["نَلْتَقي", "غَدًا", "إِنْ", "شاءَ", "اللَّه"], alts: [["غَدًا", "نَلْتَقي", "إِنْ", "شاءَ", "اللَّه"]], en: "We'll meet tomorrow, God willing." },
            { tokens: ["مَعْلِش،", "مِش", "مُشْكِلَة"], en: "Never mind, it's not a problem." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Wonderful, congratulations! Come on, let's drink coffee, God willing.",
          reference: "ما شاءَ اللَّه، مَبْروك! يَلّا، نَشْرَبُ قَهْوَة إِنْ شاءَ اللَّه.",
          hint: "Admire with mā shāʾ Allāh; urge with yalla; close with in shāʾ Allāh.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Best reply to 'kayf ḥālak?' (how are you?):",
              options: ["Yalla", "Al-ḥamdu lillāh", "Khalāṣ", "Bass"],
              correct: 1,
            },
            {
              q: "You hear great news from a friend. You react with:",
              options: ["Maʿlish", "Yaʿnī", "Mā shāʾ Allāh! Mabrūk!", "Bass"],
              correct: 2,
            },
            {
              q: "'Yalla' means:",
              options: ["never mind", "come on / let's go", "exactly", "thank God"],
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
        q: "'In shāʾ Allāh' is most naturally added to:",
        options: ["a complaint", "a future plan", "an apology", "a greeting"],
        correct: 1,
      },
      {
        q: "The standard reply to 'How are you?' is:",
        options: ["Mā shāʾ Allāh", "Al-ḥamdu lillāh", "Yalla", "Bismillāh"],
        correct: 1,
      },
      {
        q: "You admire a friend's cute baby. You say:",
        options: ["Khalāṣ", "Maʿlish", "Mā shāʾ Allāh", "Yaʿnī"],
        correct: 2,
      },
      {
        q: "'Mā shāʾ Allāh' carries a sense of:",
        options: ["sorrow", "admiration + warding off the evil eye", "refusal", "boredom"],
        correct: 1,
      },
      {
        q: "'Yaʿnī' works like the English:",
        options: ["'goodbye'", "'I mean / like / you know'", "'thank you'", "'hurry up'"],
        correct: 1,
      },
      {
        q: "'Khalāṣ' signals:",
        options: ["a new topic", "done / enough / that's it", "a question", "a blessing"],
        correct: 1,
      },
      {
        q: "'Maʿlish' can mean all of these EXCEPT:",
        options: ["never mind", "sorry", "no worries", "let's go"],
        correct: 3,
      },
      {
        q: "'Yalla' means:",
        options: ["exactly", "come on / let's go", "thank God", "for sure"],
        correct: 1,
      },
      {
        q: "Does adding 'in shāʾ Allāh' to a plan usually signal a polite refusal?",
        options: ["Yes, always", "No — it's sincere hope plus humility", "Only with strangers", "Only on weekends"],
        correct: 1,
      },
      {
        q: "Translate: 'Thank God, I'm well. We'll meet tomorrow, God willing.'",
        options: [
          "الْحَمْدُ لِلَّه، أَنا بِخَيْر. نَلْتَقي غَدًا إِنْ شاءَ اللَّه.",
          "ما شاءَ اللَّه، أَنا بِخَيْر. نَلْتَقي غَدًا.",
          "يَلّا، أَنا بِخَيْر. خَلاص غَدًا.",
          "مَعْلِش، أَنا بِخَيْر. أَراكَ يَعْني غَدًا.",
        ],
        correct: 0,
      },
    ],
  },
};
