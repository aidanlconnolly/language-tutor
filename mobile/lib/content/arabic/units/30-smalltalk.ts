import type { Unit } from "../../types";

export const UNIT_SMALLTALK: Unit = {
  slug: "smalltalk",
  stage: 7,
  order: 30,
  icon: "🍵",
  title: "Small talk & courtesy",
  tagline: "Hospitality, the weather, izzayyak, graceful goodbyes.",
  badge: "culture",
  lessons: [
    {
      slug: "smalltalk-hospitality",
      title: "Hospitality & tea offers",
      summary: "You will be offered tea or coffee — here's how to accept or decline politely.",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Hospitality is a point of pride",
          body: [
            "In Egypt and across the Arab world, offering a guest something to drink is almost automatic. Step into a shop, an office, or a home and you'll likely hear <strong>tfaḍḍal</strong> ('please, go ahead') and an offer of tea (<em>shāy</em>) or coffee (<em>qahwa</em>).",
            "Declining the first offer is normal politeness on both sides — the host may insist once or twice. A warm 'yes' is welcome and rarely refused; a polite 'no thank you' is also fine if you genuinely can't stay.",
            "<strong>Tfaḍḍal</strong> (to a man) / <strong>tfaḍḍalī</strong> (to a woman) is the magic courtesy word — 'please, help yourself / after you / come in / take this.' You'll hear it constantly.",
          ],
          tip: {
            label: "Cairo tea note",
            body: "Egyptian <em>shāy</em> is usually strong black tea, often quite sweet by default. You can ask for it <em>ʿalā khafīf</em> (light) or with little sugar — <em>sukkar qalīl</em> — without offence.",
          },
          keyPoint:
            "Expect an offer of shāy (tea) or qahwa (coffee). tfaḍḍal/tfaḍḍalī = 'please, go ahead'. Accepting graciously is welcomed.",
        },
        {
          type: "vocab",
          heading: "Hospitality words",
          items: [
            { l1: "تَفَضَّل", en: "please go ahead / help yourself (to a man)", note: "transliteration: tfaḍḍal; the all-purpose courtesy invitation." },
            { l1: "تَفَضَّلي", en: "please go ahead / help yourself (to a woman)", note: "transliteration: tfaḍḍalī; final -ī marks the female addressee." },
            { l1: "شاي", en: "tea", note: "transliteration: shāy; Egyptian tea is strong and often sweet." },
            { l1: "قَهْوَة", en: "coffee", note: "transliteration: qahwa; can mean Arabic coffee or, in cafés, the place itself." },
            { l1: "نَعَم، مِنْ فَضْلِك", en: "yes, please", note: "transliteration: naʿam, min faḍlik; a warm acceptance." },
            { l1: "لا، شُكْرًا", en: "no, thank you", note: "transliteration: lā, shukran; a polite decline." },
            { l1: "بِالْهَناء وَالشِّفاء", en: "enjoy! (said before eating/drinking)", note: "transliteration: bil-hanāʾ wash-shifāʾ; literally 'with pleasure and good health', like bon appétit." },
            { l1: "كَرَم", en: "generosity / hospitality", note: "transliteration: karam; a deeply valued quality." },
          ],
        },
        {
          type: "dialogue",
          heading: "Offered tea at a shop",
          setup: "A shopkeeper in Khan el-Khalili invites you to sit.",
          lines: [
            { speaker: "Shopkeeper", l1: "أَهْلًا! تَفَضَّل، اِجْلِس. شاي أَمْ قَهْوَة؟", en: "Welcome! Please, sit. Tea or coffee?" },
            { speaker: "You", l1: "شُكْرًا جَزيلًا. شاي، مِنْ فَضْلِك.", en: "Thank you very much. Tea, please." },
            { speaker: "Shopkeeper", l1: "حاضِر. بِالْهَناء وَالشِّفاء.", en: "Right away. Enjoy." },
            { speaker: "You", l1: "كَرَمُكَ كَبير. شُكْرًا.", en: "Your generosity is great. Thank you." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Respond politely",
          questions: [
            {
              q: "A shopkeeper says 'tfaḍḍal' and offers tea. A warm acceptance is:",
              options: ["Lā, shukran", "Naʿam, min faḍlik", "Maʿ as-salāma", "Khalāṣ"],
              correct: 1,
              fb: "Naʿam, min faḍlik ('yes, please') graciously accepts.",
            },
            {
              q: "'Tfaḍḍalī' (with final -ī) is addressed to:",
              options: ["a man", "a woman", "a group", "a child only"],
              correct: 1,
            },
            {
              q: "'Bil-hanāʾ wash-shifāʾ' is roughly the Arabic:",
              options: ["'good luck'", "'bon appétit / enjoy'", "'goodbye'", "'cheers'"],
              correct: 1,
            },
            {
              q: "If you genuinely can't stay, a polite decline is:",
              options: ["Yalla!", "Lā, shukran (no, thank you)", "Khalāṣ", "Yaʿnī"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Thank you very much. Tea, please.",
          reference: "شُكْرًا جَزيلًا. شاي، مِنْ فَضْلِك.",
          hint: "shukran jazīlan = thank you very much; min faḍlik = please.",
        },
      ],
    },
    {
      slug: "smalltalk-weather-howareyou",
      title: "Weather & 'how's it going'",
      summary: "izzayyak, akhbārak ēh, and chatting about the weather.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The opening moves of small talk",
          body: [
            "After greetings, Arabic small talk runs through a familiar script of 'how are you' questions — often several in a row, almost ritually. Answer each one, usually with <em>al-ḥamdu lillāh</em>, and ask back.",
            "In standard speech you'll use <strong>kayf ḥālak?</strong> (how are you?). In everyday Egyptian you'll constantly hear <strong>izzayyak?</strong> (how are you?) and <strong>akhbārak ēh?</strong> (what's your news? / how's it going?).",
            "Weather (<em>al-jaww</em>) is safe, easy small talk — Cairo is mostly hot and dry, so 'it's hot today' (<em>al-jaww ḥārr al-yawm</em>) is a reliable opener.",
          ],
          keyPoint:
            "Standard: kayf ḥālak? Egyptian: izzayyak? / akhbārak ēh? Reply with al-ḥamdu lillāh and ask back. Weather = al-jaww.",
        },
        {
          type: "vocab",
          heading: "Small-talk phrases",
          items: [
            { l1: "كَيْفَ حالُك؟", en: "how are you? (standard)", note: "transliteration: kayf ḥālak (to a man) / ḥālik (to a woman)." },
            { l1: "إِزَّيَّك؟", en: "how are you? (Egyptian)", note: "transliteration: izzayyak (m) / izzayyik (f); very common in Cairo." },
            { l1: "أَخْبارَك إيه؟", en: "what's your news? / how's it going?", note: "transliteration: akhbārak ēh; an Egyptian 'how are things?'." },
            { l1: "الْحَمْدُ لِلَّه", en: "fine, thank God", note: "transliteration: al-ḥamdu lillāh; the default answer to all of the above." },
            { l1: "الْجَوّ", en: "the weather", note: "transliteration: al-jaww; also 'the atmosphere'." },
            { l1: "الْجَوّ حارّ الْيَوْم", en: "it's hot today", note: "transliteration: al-jaww ḥārr al-yawm; ḥārr = hot." },
            { l1: "الْجَوّ بارِد", en: "it's cold", note: "transliteration: al-jaww bārid; bārid = cold." },
            { l1: "الدُّنْيا حَرّ", en: "it's hot out (Egyptian)", note: "transliteration: id-dunyā ḥarr; literally 'the world is heat' — colloquial for 'it's hot'." },
          ],
        },
        {
          type: "dialogue",
          heading: "Quick chat with a neighbour",
          setup: "You meet a neighbour on a hot Cairo morning.",
          lines: [
            { speaker: "Neighbour", l1: "صَباح الْخَيْر! إِزَّيَّك؟", en: "Good morning! How are you?" },
            { speaker: "You", l1: "صَباح النّور! الْحَمْدُ لِلَّه. أَخْبارَك إيه؟", en: "Good morning! Fine, thank God. How's it going?" },
            { speaker: "Neighbour", l1: "الْحَمْدُ لِلَّه. الْجَوّ حارّ الْيَوْم!", en: "Fine, thank God. It's hot today!" },
            { speaker: "You", l1: "نَعَم، الدُّنْيا حَرّ جِدًّا.", en: "Yes, it's really hot out." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the small talk",
          intro: "Pick the word that fits.",
          items: [
            {
              template: "صَباح الْخَيْر! ___ ؟",
              answer: "إِزَّيَّك",
              en: "Good morning! How are you?",
              options: ["إِزَّيَّك", "مَعْلِش", "خَلاص", "يَلّا"],
            },
            {
              template: "الْحَمْدُ لِلَّه. ___ إيه؟",
              answer: "أَخْبارَك",
              en: "Fine, thank God. What's your news?",
              options: ["أَخْبارَك", "الْجَوّ", "شاي", "كَرَم"],
            },
            {
              template: "الْجَوّ ___ الْيَوْم.",
              answer: "حارّ",
              en: "The weather is hot today.",
              options: ["حارّ", "قَهْوَة", "شُكْرًا", "تَفَضَّل"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Fine, thank God. It's hot today!",
          reference: "الْحَمْدُ لِلَّه. الْجَوّ حارّ الْيَوْم!",
          hint: "al-ḥamdu lillāh for 'fine'; al-jaww ḥārr al-yawm for the weather.",
        },
      ],
    },
    {
      slug: "smalltalk-goodbyes",
      title: "Graceful exits & blessings",
      summary: "maʿ as-salāma and the warm blessings that close a conversation.",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Leaving warmly takes a few words",
          body: [
            "Arabic goodbyes are gentle and reciprocal. The person leaving and the person staying have slightly different lines, and a small blessing usually rounds things off.",
            "<strong>Maʿ as-salāma</strong> (go with safety / goodbye) is said by the one staying to the one leaving. The one leaving often says <strong>ilā al-liqāʾ</strong> (until we meet again) or simply <em>maʿ as-salāma</em> back.",
            "Warm closers like <strong>Allāh yiḥfaẓak</strong> (may God protect you) or <strong>tiṣbaḥ ʿalā khayr</strong> (good night — 'wake up to good') add friendliness. And many exits include <strong>in shāʾ Allāh</strong> for the next meeting.",
          ],
          keyPoint:
            "maʿ as-salāma = goodbye (to the one leaving); ilā al-liqāʾ = until we meet; close with a blessing + in shāʾ Allāh.",
        },
        {
          type: "vocab",
          heading: "Goodbyes & blessings",
          items: [
            { l1: "مَعَ السَّلامَة", en: "goodbye / go in safety", note: "transliteration: maʿ as-salāma; literally 'with safety'. Said to the one departing." },
            { l1: "إِلى اللِّقاء", en: "until we meet again", note: "transliteration: ilā al-liqāʾ; a slightly formal 'see you'." },
            { l1: "أَراكَ لاحِقًا", en: "see you later", note: "transliteration: arāka lāḥiqan; casual." },
            { l1: "تُصْبِح عَلى خَيْر", en: "good night", note: "transliteration: tiṣbaḥ ʿalā khayr; literally 'may you wake to good'. Reply: wa-anta min ahlih." },
            { l1: "اللَّه يِحْفَظَك", en: "may God protect you", note: "transliteration: Allāh yiḥfaẓak; a warm farewell blessing." },
            { l1: "في أَمانِ اللَّه", en: "in God's safekeeping (goodbye)", note: "transliteration: fī amāni-llāh; a gentle, caring goodbye." },
            { l1: "نَلْتَقي قَريبًا", en: "we'll meet soon", note: "transliteration: naltaqī qarīban; pairs naturally with in shāʾ Allāh." },
          ],
        },
        {
          type: "dialogue",
          heading: "Wrapping up a visit",
          setup: "You're leaving a friend's home after tea.",
          lines: [
            { speaker: "You", l1: "شُكْرًا عَلى الضِّيافَة. يَجِبُ أَنْ أَذْهَب.", en: "Thank you for the hospitality. I should go." },
            { speaker: "Friend", l1: "الْعَفْو. تَشَرَّفْنا!", en: "You're welcome. It was an honour!" },
            { speaker: "You", l1: "نَلْتَقي قَريبًا إِنْ شاءَ اللَّه.", en: "We'll meet soon, God willing." },
            { speaker: "Friend", l1: "إِنْ شاءَ اللَّه. مَعَ السَّلامَة، اللَّه يِحْفَظَك.", en: "God willing. Goodbye, may God protect you." },
            { speaker: "You", l1: "في أَمانِ اللَّه.", en: "In God's safekeeping." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the goodbye",
          intro: "Tap the words into order.",
          items: [
            { tokens: ["نَلْتَقي", "قَريبًا", "إِنْ", "شاءَ", "اللَّه"], alts: [["قَريبًا", "نَلْتَقي", "إِنْ", "شاءَ", "اللَّه"]], en: "We'll meet soon, God willing." },
            { tokens: ["مَعَ", "السَّلامَة،", "اللَّه", "يِحْفَظَك"], en: "Goodbye, may God protect you." },
            { tokens: ["شُكْرًا", "عَلى", "الضِّيافَة"], en: "Thank you for the hospitality." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Thank you for the hospitality. We'll meet soon, God willing. Goodbye.",
          reference: "شُكْرًا عَلى الضِّيافَة. نَلْتَقي قَريبًا إِنْ شاءَ اللَّه. مَعَ السَّلامَة.",
          hint: "ḍiyāfa = hospitality; close with in shāʾ Allāh then maʿ as-salāma.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Maʿ as-salāma' is said by:",
              options: ["the one leaving, to the one staying", "the one staying, to the one leaving", "only on the phone", "only in the morning"],
              correct: 1,
            },
            {
              q: "'Tiṣbaḥ ʿalā khayr' means:",
              options: ["good morning", "good night", "good luck", "welcome"],
              correct: 1,
            },
            {
              q: "A warm farewell blessing meaning 'may God protect you' is:",
              options: ["Allāh yiḥfaẓak", "Tfaḍḍal", "Akhbārak ēh", "Bil-hanāʾ"],
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
        q: "Stepping into a Cairo shop, you'll most likely be offered:",
        options: ["a discount", "tea or coffee", "a taxi", "directions"],
        correct: 1,
      },
      {
        q: "'Tfaḍḍal / tfaḍḍalī' roughly means:",
        options: ["goodbye", "please, go ahead / help yourself", "I'm sorry", "how much?"],
        correct: 1,
      },
      {
        q: "A gracious way to accept an offered tea:",
        options: ["Lā, shukran", "Naʿam, min faḍlik", "Maʿ as-salāma", "Khalāṣ"],
        correct: 1,
      },
      {
        q: "'Bil-hanāʾ wash-shifāʾ' is said:",
        options: ["when leaving", "before eating/drinking (enjoy!)", "when angry", "when paying"],
        correct: 1,
      },
      {
        q: "Egyptian 'how are you?' includes:",
        options: ["izzayyak / akhbārak ēh", "maʿ as-salāma", "tfaḍḍal", "bil-hanāʾ"],
        correct: 0,
      },
      {
        q: "Reliable weather small talk in Cairo:",
        options: ["Al-jaww ḥārr al-yawm (it's hot today)", "Al-jaww bārid jiddan (freezing)", "It's snowing", "Tiṣbaḥ ʿalā khayr"],
        correct: 0,
      },
      {
        q: "'Maʿ as-salāma' is said to:",
        options: ["the person staying", "the person leaving", "a shopkeeper only", "nobody"],
        correct: 1,
      },
      {
        q: "'Tiṣbaḥ ʿalā khayr' is:",
        options: ["good morning", "good night", "thank you", "welcome"],
        correct: 1,
      },
      {
        q: "'Allāh yiḥfaẓak' means:",
        options: ["may God protect you", "God willing", "thank God", "never mind"],
        correct: 0,
      },
      {
        q: "Translate: 'Thank you for the hospitality. Goodbye.'",
        options: [
          "شُكْرًا عَلى الضِّيافَة. مَعَ السَّلامَة.",
          "تَفَضَّل، شاي مِنْ فَضْلِك.",
          "إِزَّيَّك؟ الْجَوّ حارّ.",
          "يَلّا، خَلاص، مَعْلِش.",
        ],
        correct: 0,
      },
    ],
  },
};
