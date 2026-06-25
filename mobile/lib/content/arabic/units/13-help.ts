import type { Unit } from "../../types";

export const UNIT_HELP: Unit = {
  slug: "help",
  stage: 3,
  order: 13,
  icon: "🆘",
  title: "Help & emergencies",
  tagline: "The ṣaydaliyya, musāʿada!, finding a doctor.",
  badge: "tourist",
  lessons: [
    {
      slug: "help-asking",
      title: "Asking for help",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The words that get attention fast",
          body: [
            "The single most useful word in trouble is <strong>musāʿada!</strong> (مُساعَدة!) — \"help!\" To name your situation, <strong>anā tāʾih</strong> (أَنا تائِه) means \"I'm lost\" (a woman says <em>anā tāʾiha</em>, تائِهة).",
            "If you've lost something, the verb is <strong>aḍaʿtu…</strong> (أَضَعتُ…, \"I lost / misplaced…\"): <em>aḍaʿtu jawāz safarī</em> = I lost my passport, <em>aḍaʿtu maḥfaẓatī</em> = I lost my wallet.",
            "To get a person's help, ask <strong>mumkin tusāʿidnī?</strong> (مُمكِن تُساعِدني؟) — \"can you help me?\" — and to find an English speaker: <em>hal tatakallam al-injilīziyya?</em> (هَل تَتَكَلَّم الإنجليزِيّة؟).",
          ],
          keyPoint:
            "musāʿada! = help! · anā tāʾih = I'm lost · aḍaʿtu… = I lost… · mumkin tusāʿidnī? = can you help me?",
        },
        {
          type: "vocab",
          heading: "Help vocab",
          items: [
            { l1: "مُساعَدة!", en: "help!", note: "musāʿada!" },
            { l1: "أَنا تائِه", en: "I'm lost (m.)", note: "anā tāʾih; f.: anā tāʾiha أَنا تائِهة" },
            { l1: "أَضَعتُ…", en: "I lost… / I misplaced…", note: "aḍaʿtu…" },
            { l1: "جَواز سَفَري", en: "my passport", note: "jawāz safarī" },
            { l1: "مَحفَظَتي", en: "my wallet", note: "maḥfaẓatī (f.)" },
            { l1: "هاتِفي", en: "my phone", note: "hātifī (m.); colloquial: mobايلي mubāylī" },
            { l1: "مُمكِن تُساعِدني؟", en: "can you help me?", note: "mumkin tusāʿidnī?" },
            { l1: "هَل تَتَكَلَّم الإنجليزِيّة؟", en: "do you speak English?", note: "hal tatakallam al-injilīziyya?" },
            { l1: "السِّفارة", en: "the embassy", note: "as-sifāra (f.)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Lost near the bazaar",
          setup: "You can't find your group and stop a shopkeeper.",
          lines: [
            { speaker: "You", l1: "لَو سَمَحت، أَنا تائِه. مُمكِن تُساعِدني؟", en: "Excuse me, I'm lost. Can you help me?" },
            { speaker: "Shopkeeper", l1: "طَبعاً. أَينَ تُريد أَن تَذهَب؟", en: "Of course. Where do you want to go?" },
            { speaker: "You", l1: "إلى فُندُق النّيل. وَأَضَعتُ خَريطَتي.", en: "To the Nile Hotel. And I lost my map." },
            { speaker: "Shopkeeper", l1: "لا مُشكِلة. هو قَريب، تَعالَ مَعي.", en: "No problem. It's near, come with me." },
            { speaker: "You", l1: "شُكراً جَزيلاً، أَنت كَريم.", en: "Thank you very much, you're generous." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill the help phrase",
          items: [
            {
              template: "أَنا ___ . مُمكِن تُساعِدني؟",
              answer: "تائِه",
              en: "I'm lost. Can you help me?",
              options: ["تائِه", "تَعبان", "مَريض", "سَعيد"],
            },
            {
              template: "___ جَواز سَفَري!",
              answer: "أَضَعتُ",
              en: "I lost my passport!",
              options: ["أَضَعتُ", "وَجَدتُ", "أُريدُ", "عِندي"],
            },
            {
              template: "هَل ___ الإنجليزِيّة؟",
              answer: "تَتَكَلَّم",
              en: "Do you speak English?",
              options: ["تَتَكَلَّم", "تَذهَب", "تُساعِد", "تَأكُل"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm lost. I lost my wallet. Can you help me?",
          reference: "أَنا تائِه. أَضَعتُ مَحفَظَتي. مُمكِن تُساعِدني؟",
          hint: "anā tāʾih · aḍaʿtu maḥfaẓatī · mumkin tusāʿidnī?",
        },
      ],
    },
    {
      slug: "help-pharmacy",
      title: "The pharmacy & feeling ill",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The pharmacy is your first stop",
          body: [
            "In Egypt the <strong>ṣaydaliyya</strong> (صَيدَلِيّة, pharmacy) handles a lot — pharmacists give advice and many medicines without a prescription. Look for the green cross.",
            "To describe a complaint, use <strong>ʿindī…</strong> (عِندي…, \"I have…\"): <em>ʿindī ṣudāʿ</em> (عِندي صُداع, I have a headache), <em>ʿindī ḥumma</em> (عِندي حُمّى, I have a fever), <em>ʿindī alam fī…</em> (عِندي أَلَم في…, I have a pain in…).",
            "Ask for medicine with <strong>aḥtāj dawāʾ li…</strong> (أَحتاج دَواء لِـ…, I need medicine for…). The pharmacist may ask <em>min matā?</em> (مِن مَتى؟, since when?).",
          ],
          keyPoint:
            "ṣaydaliyya = pharmacy. ʿindī ṣudāʿ = I have a headache. aḥtāj dawāʾ li… = I need medicine for…",
        },
        {
          type: "vocab",
          heading: "Pharmacy & ailment vocab",
          items: [
            { l1: "صَيدَلِيّة", en: "pharmacy", note: "ṣaydaliyya (f.)" },
            { l1: "دَواء", en: "medicine", note: "dawāʾ (m.), pl. adwiya" },
            { l1: "عِندي صُداع", en: "I have a headache", note: "ʿindī ṣudāʿ" },
            { l1: "عِندي حُمّى", en: "I have a fever", note: "ʿindī ḥummā" },
            { l1: "عِندي أَلَم في…", en: "I have a pain in…", note: "ʿindī alam fī…" },
            { l1: "مَعِدَتي", en: "my stomach", note: "maʿidatī (f.) — alam fī maʿidatī" },
            { l1: "أَحتاج دَواء لِـ…", en: "I need medicine for…", note: "aḥtāj dawāʾ li…" },
            { l1: "حَساسِيّة", en: "allergy", note: "ḥasāsiyya (f.) — ʿindī ḥasāsiyya = I have an allergy" },
            { l1: "مَرّتَين في اليَوم", en: "twice a day", note: "marratayn fī l-yawm — dosage instruction" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the ṣaydaliyya",
          setup: "You've had a headache all day and step into a pharmacy.",
          lines: [
            { speaker: "You", l1: "مَساء الخَير. عِندي صُداع شَديد.", en: "Good evening. I have a bad headache." },
            { speaker: "Pharmacist", l1: "مِن مَتى؟", en: "Since when?" },
            { speaker: "You", l1: "مِن الصَّباح. أَحتاج دَواء لِلصُّداع.", en: "Since this morning. I need medicine for the headache." },
            { speaker: "Pharmacist", l1: "خُذ هذا، حَبّة مَرّتَين في اليَوم.", en: "Take this, one pill twice a day." },
            { speaker: "You", l1: "شُكراً. كَم الثَّمَن؟", en: "Thanks. How much is it?" },
            { speaker: "Pharmacist", l1: "ثَلاثون جُنَيهاً. سَلامتَك.", en: "Thirty pounds. Get well." },
          ],
        },
        {
          type: "listen",
          heading: "What's the complaint?",
          intro: "Read each sentence, then choose what they're saying.",
          items: [
            {
              l1: "عِندي صُداع.",
              en: "I have a headache.",
              options: ["I have a fever", "I have a headache", "I have an allergy", "I'm lost"],
              correct: 1,
            },
            {
              l1: "عِندي أَلَم في مَعِدَتي.",
              en: "I have a pain in my stomach.",
              options: ["I have a pain in my stomach", "I have a headache", "I need a pharmacy", "I have a fever"],
              correct: 0,
            },
            {
              l1: "أَحتاج دَواء لِلحُمّى.",
              en: "I need medicine for the fever.",
              options: ["I need a doctor", "I need medicine for the fever", "I have an allergy", "Where is the pharmacy?"],
              correct: 1,
            },
            {
              l1: "حَبّة مَرّتَين في اليَوم.",
              en: "One pill twice a day.",
              options: ["One pill twice a day", "Two pills once a day", "Take it at night", "No medicine needed"],
              correct: 0,
            },
          ],
        },
        {
          type: "tip",
          heading: "'Get well' — and how to reply",
          body: "When someone wishes you <strong>salāmtak</strong> (سَلامتَك, \"may you be well,\" to a man; <em>salāmtik</em> to a woman), the warm reply is <strong>Allāh yisallimak</strong> (الله يِسَلِّمَك). You'll hear salāmtak any time you mention being ill or tired.",
          example: { l1: "— سَلامتَك! — الله يِسَلِّمَك.", en: "— Get well! — May God keep you safe." },
        },
      ],
    },
    {
      slug: "help-emergencies",
      title: "Emergencies",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "When it's serious",
          body: [
            "For a real emergency, you want the <strong>police</strong> (الشُّرطة, <strong>ash-shurṭa</strong>) or an <strong>ambulance</strong> (الإسعاف, <strong>al-isʿāf</strong>). In Egypt police is 122 and ambulance is 123.",
            "The key command is <strong>ittaṣil bi…</strong> (اِتَّصِل بِـ…, \"call…\"): <em>ittaṣil bi-ṭ-ṭabīb</em> (اِتَّصِل بِالطَّبيب, call the doctor), <em>ittaṣil bi-sh-shurṭa</em>, <em>ittaṣil bi-l-isʿāf</em>.",
            "To say there's been an accident: <strong>hunāka ḥādith</strong> (هُناك حادِث). And to name a person needing help: <em>hādhā r-rajul marīḍ</em> (هذا الرَّجُل مَريض, this man is sick).",
          ],
          keyPoint:
            "ash-shurṭa = police (122). al-isʿāf = ambulance (123). ittaṣil bi… = call… · hunāka ḥādith = there's an accident.",
        },
        {
          type: "vocab",
          heading: "Emergency vocab",
          items: [
            { l1: "الشُّرطة", en: "the police", note: "ash-shurṭa (f.) — dial 122" },
            { l1: "الإسعاف", en: "the ambulance", note: "al-isʿāf (m.) — dial 123" },
            { l1: "الطَّبيب", en: "the doctor", note: "aṭ-ṭabīb (m.); colloquial: ad-duktūr الدُّكتور" },
            { l1: "المُستَشفى", en: "the hospital", note: "al-mustashfā (m.)" },
            { l1: "اِتَّصِل بِـ…", en: "call… (command)", note: "ittaṣil bi… — ittaṣil bi-ṭ-ṭabīb" },
            { l1: "هُناك حادِث", en: "there's an accident", note: "hunāka ḥādith" },
            { l1: "بِسُرعة!", en: "quickly! / hurry!", note: "bi-surʿa!" },
            { l1: "مَريض", en: "sick / ill", note: "marīḍ (m.), marīḍa (f.)" },
            { l1: "النَّجدة!", en: "help! / rescue!", note: "an-najda! — emergency shout" },
          ],
        },
        {
          type: "dialogue",
          heading: "Calling for help",
          setup: "Someone has collapsed in the street; you grab a passerby.",
          lines: [
            { speaker: "You", l1: "النَّجدة! هذا الرَّجُل مَريض!", en: "Help! This man is sick!" },
            { speaker: "Passerby", l1: "ماذا حَدَث؟", en: "What happened?" },
            { speaker: "You", l1: "لا أَعرِف. اِتَّصِل بِالإسعاف بِسُرعة!", en: "I don't know. Call an ambulance quickly!" },
            { speaker: "Passerby", l1: "حَسَناً، أَتَّصِل الآن. اِبقَ مَعه.", en: "Okay, I'm calling now. Stay with him." },
            { speaker: "You", l1: "هَل هُناك مُستَشفى قَريب؟", en: "Is there a hospital nearby?" },
            { speaker: "Passerby", l1: "نَعَم، عَلى بُعد دَقائِق.", en: "Yes, a few minutes away." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the emergency call",
          items: [
            { tokens: ["اِتَّصِل", "بِالإسعاف", "بِسُرعة", "!"], en: "Call an ambulance quickly!" },
            { tokens: ["هُناك", "حادِث"], en: "There's an accident." },
            { tokens: ["هذا", "الرَّجُل", "مَريض"], en: "This man is sick." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "There's an accident. Call the doctor quickly!",
          reference: "هُناك حادِث. اِتَّصِل بِالطَّبيب بِسُرعة!",
          hint: "hunāka ḥādith · ittaṣil bi-ṭ-ṭabīb bi-surʿa!",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Call the doctor!' =",
              options: [
                "اِتَّصِل بِالطَّبيب!",
                "أَنا تائِه!",
                "عِندي صُداع!",
                "أَينَ المُستَشفى؟",
              ],
              correct: 0,
            },
            {
              q: "al-isʿāf means…",
              options: ["the police", "the ambulance", "the pharmacy", "the embassy"],
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
        q: "'Help!' (the urgent shout) =",
        options: ["مُساعَدة!", "شُكراً!", "تَفَضَّل!", "أَهلاً!"],
        correct: 0,
      },
      {
        q: "'I'm lost' (said by a man) =",
        options: ["أَنا تائِه", "أَنا مَريض", "أَنا سَعيد", "أَنا تَعبان"],
        correct: 0,
      },
      {
        q: "aḍaʿtu… means…",
        options: ["I found…", "I lost…", "I need…", "I have…"],
        correct: 1,
      },
      {
        q: "The pharmacy is the…",
        options: ["mustashfā", "ṣaydaliyya", "sifāra", "shurṭa"],
        correct: 1,
      },
      {
        q: "'I have a headache' =",
        options: ["عِندي صُداع", "عِندي حُمّى", "عِندي حَساسِيّة", "عِندي أَلَم"],
        correct: 0,
      },
      {
        q: "'I need medicine for…' =",
        options: [
          "أَحتاج دَواء لِـ…",
          "أَضَعتُ…",
          "عِندي حَجز",
          "مُمكِن تُساعِدني؟",
        ],
        correct: 0,
      },
      {
        q: "ash-shurṭa means…",
        options: ["the ambulance", "the police", "the doctor", "the hospital"],
        correct: 1,
      },
      {
        q: "'Call an ambulance!' =",
        options: [
          "اِتَّصِل بِالإسعاف!",
          "اِتَّصِل بِالسِّفارة!",
          "أَينَ الصَّيدَلِيّة؟",
          "عِندي صُداع!",
        ],
        correct: 0,
      },
      {
        q: "hunāka ḥādith means…",
        options: ["there's a doctor", "there's an accident", "there's a pharmacy", "there's a hospital"],
        correct: 1,
      },
      {
        q: "'Do you speak English?' =",
        options: [
          "هَل تَتَكَلَّم الإنجليزِيّة؟",
          "أَينَ المُستَشفى؟",
          "كَم الثَّمَن؟",
          "مِن مَتى؟",
        ],
        correct: 0,
      },
    ],
  },
};
