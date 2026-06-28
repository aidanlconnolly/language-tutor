import type { Unit } from "../../types";

export const UNIT_OPINIONS: Unit = {
  slug: "opinions",
  stage: 8,
  order: 35,
  icon: "🗣️",
  title: "Opinions & discussion",
  tagline: "fī raʾyī, agreeing & disagreeing, expressing a view.",
  badge: "advanced",
  lessons: [
    {
      slug: "opinions-giving",
      title: "Giving an opinion",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Three ways to say 'I think…'",
          body: [
            "To share a view in MSA, start with one of these openers:",
            "<strong>في رأيي</strong> <em>fī raʾyī</em> = \"in my opinion\" — the everyday workhorse, literally \"in my opinion\".",
            "<strong>أَعْتَقِدُ أنَّ…</strong> <em>aʿtaqid anna…</em> = \"I believe that…\". It is followed by <strong>أنَّ</strong> (anna, \"that\") plus a noun/pronoun.",
            "<strong>أَظُنُّ أنَّ…</strong> <em>aẓunnu anna…</em> = \"I think that…\", a touch more tentative than aʿtaqid.",
            "A key point: after <strong>أنَّ</strong> the following noun takes the accusative, and a pronoun attaches as a suffix — أَظُنُّ أنَّهُ <em>aẓunnu annahu</em> = \"I think that he…\". Keep أنَّ glued to whatever comes next.",
          ],
          keyPoint:
            "fī raʾyī = in my opinion. aʿtaqid anna… = I believe that… aẓunnu anna… = I think that… After أنَّ the noun is accusative; a pronoun attaches (annahu = that he).",
        },
        {
          type: "vocab",
          heading: "Opinion openers",
          items: [
            { l1: "في رأيي", en: "in my opinion", note: "fī raʾyī · lit. 'in my opinion'." },
            { l1: "بِالنِّسْبةِ لي", en: "as for me / for me", note: "bi-n-nisbati lī" },
            { l1: "أَعْتَقِدُ أنَّ", en: "I believe that…", note: "aʿtaqid anna · Form VIII of ʿ-q-d." },
            { l1: "أَظُنُّ أنَّ", en: "I think that…", note: "aẓunnu anna · slightly tentative." },
            { l1: "أَرى أنَّ", en: "I see / hold that…", note: "arā anna · 'I am of the view that'." },
            { l1: "مِنْ وُجْهةِ نَظَري", en: "from my point of view", note: "min wijhati naẓarī" },
            { l1: "بِصَراحة", en: "frankly / honestly", note: "bi-ṣarāḥa" },
            { l1: "شَخْصِيّاً", en: "personally", note: "shakhṣiyyan (adverbial -an)." },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about Cairo's traffic",
          setup: "Two friends chat at a café in Zamalek.",
          lines: [
            { speaker: "سامي", l1: "ما رأيُكَ في الزِّحامِ في القاهرة؟", en: "What's your opinion on the traffic in Cairo?" },
            { speaker: "أنت", l1: "في رأيي، الزِّحامُ مُشْكِلةٌ كبيرةٌ، لكنَّ المدينةَ جميلةٌ.", en: "In my opinion, the traffic is a big problem, but the city is beautiful." },
            { speaker: "سامي", l1: "أَظُنُّ أنَّ المِتْرو هو الحَلُّ.", en: "I think the metro is the solution." },
            { speaker: "أنت", l1: "أَعْتَقِدُ أنَّكَ على حَقّ. المِتْرو أَسْرَعُ بكثير.", en: "I believe you're right. The metro is much faster." },
            { speaker: "سامي", l1: "بِصَراحة، أَسْتَعْمِلُهُ كلَّ يومٍ.", en: "Honestly, I use it every day." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the opener",
          items: [
            {
              template: "___ ، القاهرةُ مدينةٌ رائعةٌ.",
              answer: "في رأيي",
              en: "In my opinion, Cairo is a wonderful city.",
              options: ["في رأيي", "بِصَراحةً وَ", "أنَّ", "نَعَم"],
            },
            {
              template: "أَعْتَقِدُ ___ المِتْرو أفضلُ من السيّارة.",
              answer: "أنَّ",
              en: "I believe that the metro is better than the car.",
              options: ["أنَّ", "في", "لي", "مع"],
            },
            {
              template: "أَظُنُّ ___ على حَقّ. (you, m)",
              answer: "أنَّكَ",
              en: "I think you're right.",
              options: ["أنَّكَ", "أنَّها", "أنَّهُ", "أنَّني"],
            },
            {
              template: "___ ، أُفَضِّلُ المشيَ على القيادة.",
              answer: "شَخْصِيّاً",
              en: "Personally, I prefer walking to driving.",
              options: ["شَخْصِيّاً", "أنَّ", "لكنَّ", "مع"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "In my opinion, Cairo is beautiful, but I think the traffic is a big problem.",
          reference: "في رأيي، القاهرةُ جميلةٌ، لكنّي أَظُنُّ أنَّ الزِّحامَ مُشْكِلةٌ كبيرةٌ.",
          hint: "Open with في رأيي, then use أَظُنُّ أنَّ for 'I think that…' (the noun after أنَّ is accusative: الزِّحامَ).",
        },
      ],
    },
    {
      slug: "opinions-agree-disagree",
      title: "Agreeing & disagreeing",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying yes, saying no — politely",
          body: [
            "<strong>Agreeing:</strong> أنا مُوافِق <em>anā muwāfiq</em> = \"I agree\" (a man says مُوافِق, a woman مُوافِقة). معكَ حَقّ <em>maʿaka ḥaqq</em> = \"you're right\". تَماماً <em>tamāman</em> = \"exactly\".",
            "<strong>Disagreeing softly:</strong> لا أَتَّفِقُ <em>lā attafiq</em> = \"I don't agree\" (Form VIII of w-f-q). لَسْتُ مُتَأَكِّداً <em>lastu mutaʾakkidan</em> = \"I'm not sure\".",
            "<strong>Flipping the view:</strong> على العَكْس <em>ʿalā l-ʿaks</em> = \"on the contrary\". This is the elegant way to push back: you name the opposite rather than just saying \"no\".",
            "In MSA discussion, soften disagreement: pair لا أَتَّفِقُ with a reason, and lead with <em>ʿalā l-ʿaks</em> when you genuinely hold the opposite view. Bluntly saying أنتَ مُخْطِئ (\"you're wrong\") is harsh — frame it around the idea, not the person.",
          ],
          keyPoint:
            "Agree: anā muwāfiq(a), maʿaka ḥaqq, tamāman. Disagree softly: lā attafiq, lastu mutaʾakkidan. Flip it: ʿalā l-ʿaks = on the contrary.",
        },
        {
          type: "vocab",
          heading: "Agree / disagree phrases",
          items: [
            { l1: "أنا مُوافِق / مُوافِقة", en: "I agree (m / f)", note: "anā muwāfiq / muwāfiqa" },
            { l1: "معكَ حَقّ", en: "you're right (to a man)", note: "maʿaka ḥaqq · maʿaki to a woman." },
            { l1: "تَماماً", en: "exactly / completely", note: "tamāman" },
            { l1: "هذا صحيح", en: "that's true / correct", note: "hādhā ṣaḥīḥ" },
            { l1: "لا أَتَّفِقُ", en: "I don't agree", note: "lā attafiq · Form VIII of w-f-q." },
            { l1: "لَسْتُ مُتَأَكِّداً", en: "I'm not sure", note: "lastu mutaʾakkidan (m); -mutaʾakkidatan (f)." },
            { l1: "على العَكْس", en: "on the contrary", note: "ʿalā l-ʿaks" },
            { l1: "رُبَّما، لكن…", en: "maybe, but…", note: "rubbamā, lākin…" },
          ],
        },
        {
          type: "tip",
          heading: "Disagree with the idea, not the person",
          body: "In an Arabic discussion, lively debate is welcome, but it stays courteous. Open a disagreement with a softener: <strong>أَفْهَمُ رأيَكَ، لكن…</strong> <em>afhamu raʾyaka, lākin…</em> = \"I understand your view, but…\". Saving face matters, so لا أَتَّفِقُ (\"I don't agree\") plus a reason lands far better than a flat أنتَ مُخْطِئ (\"you're wrong\").",
          example: { l1: "أَفْهَمُ رأيَكَ، لكنّي لا أَتَّفِقُ تَماماً.", en: "I understand your view, but I don't fully agree." },
        },
        {
          type: "dialogue",
          heading: "Is the metro really better?",
          setup: "Continuing the café conversation.",
          lines: [
            { speaker: "سامي", l1: "أَعْتَقِدُ أنَّ المِتْرو أفضلُ وسيلةٍ في القاهرة.", en: "I believe the metro is the best means of transport in Cairo." },
            { speaker: "أنت", l1: "معكَ حَقّ في السُّرعة، لكنّي لَسْتُ مُتَأَكِّداً منَ الزِّحامِ فيه.", en: "You're right about speed, but I'm not sure about the crowding in it." },
            { speaker: "سامي", l1: "على العَكْس، في رأيي هو أَريَحُ منَ الأتوبيس.", en: "On the contrary, in my opinion it's more comfortable than the bus." },
            { speaker: "أنت", l1: "رُبَّما، لكن أُفَضِّلُ المشيَ أحياناً.", en: "Maybe, but I prefer walking sometimes." },
            { speaker: "سامي", l1: "تَماماً، المشيُ صِحّيٌّ أيضاً.", en: "Exactly, walking is healthy too." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Agree or push back",
          items: [
            {
              template: "___ ، أنا أيضاً أُحِبُّ القاهرة. (I agree, m)",
              answer: "أنا مُوافِق",
              en: "I agree, I also love Cairo.",
              options: ["أنا مُوافِق", "على العَكْس", "لا أَتَّفِقُ", "لَسْتُ مُتَأَكِّداً"],
            },
            {
              template: "هذا صحيح، ___ في كلِّ شيءٍ. (you're right, to a man)",
              answer: "معكَ حَقّ",
              en: "That's true, you're right about everything.",
              options: ["معكَ حَقّ", "على العَكْس", "رُبَّما", "تَماماً"],
            },
            {
              template: "___ ، أَظُنُّ أنَّ الأتوبيسَ أرخصُ.",
              answer: "على العَكْس",
              en: "On the contrary, I think the bus is cheaper.",
              options: ["على العَكْس", "أنا مُوافِق", "معكَ حَقّ", "تَماماً"],
            },
            {
              template: "أَفْهَمُ رأيَكَ، لكنّي ___. (I don't agree)",
              answer: "لا أَتَّفِقُ",
              en: "I understand your view, but I don't agree.",
              options: ["لا أَتَّفِقُ", "تَماماً", "معكَ حَقّ", "هذا صحيح"],
            },
          ],
        },
      ],
    },
    {
      slug: "opinions-structuring",
      title: "Structuring a view & wrapping up",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Two-sided arguments and a clean conclusion",
          body: [
            "To weigh both sides, use the paired phrase <strong>مِنْ ناحيةٍ… ومِنْ ناحيةٍ أُخْرى…</strong> <em>min nāḥiya… wa-min nāḥiya ukhrā…</em> = \"on one hand… on the other hand…\".",
            "Glue clauses with connectors you already know: <strong>أوّلاً</strong> <em>awwalan</em> (firstly), <strong>ثانِياً</strong> <em>thāniyan</em> (secondly), <strong>بالإضافةِ إلى ذلك</strong> <em>bi-l-iḍāfati ilā dhālik</em> (in addition), <strong>مع ذلك</strong> <em>maʿa dhālik</em> (nevertheless).",
            "Then land the plane with <strong>خُلاصةُ القَوْل</strong> <em>khulāṣat al-qawl</em> = \"the gist of it / in conclusion\", literally \"the summary of the saying\". A close cousin is <strong>في النِّهاية</strong> <em>fī n-nihāya</em> = \"in the end\".",
            "Stacking opener + two sides + connector + conclusion is exactly what a B1 examiner listens for. You now have all four pieces.",
          ],
          keyPoint:
            "Two sides: min nāḥiya… wa-min nāḥiya ukhrā…. Connectors: awwalan, thāniyan, bi-l-iḍāfati ilā dhālik, maʿa dhālik. Conclude: khulāṣat al-qawl / fī n-nihāya.",
        },
        {
          type: "vocab",
          heading: "Structuring connectors",
          items: [
            { l1: "أوّلاً", en: "firstly", note: "awwalan" },
            { l1: "ثانِياً", en: "secondly", note: "thāniyan" },
            { l1: "مِنْ ناحيةٍ", en: "on one hand", note: "min nāḥiya" },
            { l1: "ومِنْ ناحيةٍ أُخْرى", en: "and on the other hand", note: "wa-min nāḥiya ukhrā" },
            { l1: "بالإضافةِ إلى ذلك", en: "in addition to that", note: "bi-l-iḍāfati ilā dhālik" },
            { l1: "مع ذلك", en: "nevertheless / despite that", note: "maʿa dhālik" },
            { l1: "خُلاصةُ القَوْل", en: "in conclusion / the gist", note: "khulāṣat al-qawl · lit. 'the summary of the saying'." },
            { l1: "في النِّهاية", en: "in the end", note: "fī n-nihāya" },
          ],
        },
        {
          type: "dialogue",
          heading: "A balanced view of living in Cairo",
          setup: "Wrapping up the whole conversation.",
          lines: [
            { speaker: "سامي", l1: "إذاً، هل تُحِبُّ الحياةَ في القاهرة؟", en: "So, do you like life in Cairo?" },
            { speaker: "أنت", l1: "مِنْ ناحيةٍ، المدينةُ مُزْدَحِمةٌ وغاليةٌ.", en: "On one hand, the city is crowded and expensive." },
            { speaker: "أنت", l1: "ومِنْ ناحيةٍ أُخْرى، الناسُ طيّبون والتاريخُ رائعٌ.", en: "And on the other hand, the people are kind and the history is wonderful." },
            { speaker: "سامي", l1: "بالإضافةِ إلى ذلك، الأكلُ لذيذٌ جدّاً!", en: "In addition, the food is very delicious!" },
            { speaker: "أنت", l1: "خُلاصةُ القَوْل: في رأيي، القاهرةُ تَسْتَحِقُّ كلَّ لحظةٍ.", en: "In conclusion: in my opinion, Cairo is worth every moment." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the argument",
          items: [
            {
              template: "___ ، المدينةُ مُزْدَحِمةٌ جدّاً. (on one hand)",
              answer: "مِنْ ناحيةٍ",
              en: "On one hand, the city is very crowded.",
              options: ["مِنْ ناحيةٍ", "خُلاصةُ القَوْل", "مع ذلك", "أوّلاً"],
            },
            {
              template: "___ أُخْرى، الحياةُ هنا مُمْتِعةٌ. (and on the other hand)",
              answer: "ومِنْ ناحيةٍ",
              en: "And on the other hand, life here is enjoyable.",
              options: ["ومِنْ ناحيةٍ", "في رأيي", "تَماماً", "بِصَراحة"],
            },
            {
              template: "___ إلى ذلك، المِتْرو رخيصٌ. (in addition to that)",
              answer: "بالإضافةِ",
              en: "In addition to that, the metro is cheap.",
              options: ["بالإضافةِ", "على العَكْس", "خُلاصةُ", "أوّلاً"],
            },
            {
              template: "___ : القاهرةُ مدينةٌ لا تُنْسى. (in conclusion)",
              answer: "خُلاصةُ القَوْل",
              en: "In conclusion: Cairo is an unforgettable city.",
              options: ["خُلاصةُ القَوْل", "مِنْ ناحيةٍ", "أوّلاً", "بِصَراحة"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "On one hand the city is expensive, and on the other hand the people are kind. In conclusion, in my opinion Cairo is wonderful.",
          reference: "مِنْ ناحيةٍ المدينةُ غاليةٌ، ومِنْ ناحيةٍ أُخْرى الناسُ طيّبون. خُلاصةُ القَوْل: في رأيي القاهرةُ رائعةٌ.",
          hint: "Stack the structure: min nāḥiya… wa-min nāḥiya ukhrā… then khulāṣat al-qawl + fī raʾyī.",
        },
        {
          type: "tip",
          heading: "You finished the roadmap — مبروك!",
          body: "This is the last of 35 units. You can now hold a real Arabic conversation in Cairo: greet and introduce yourself, get around the city, order food, shop and bargain, talk about the past and the future, recognise the verb forms, handle the dual and broken plurals, and — right here — give a structured opinion, agree, disagree, and wrap up. Keep reading the Daily Reads and reviewing your deck, and your Modern Standard Arabic will keep growing. <strong>مبروك! (mabrūk — congratulations!)</strong>",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'On one hand… on the other hand…' is…",
              options: [
                "min nāḥiya… wa-min nāḥiya ukhrā…",
                "fī raʾyī… maʿaka ḥaqq…",
                "awwalan… thāniyan…",
                "ʿalā l-ʿaks… tamāman…",
              ],
              correct: 0,
            },
            {
              q: "خُلاصةُ القَوْل means…",
              options: ["firstly", "on the contrary", "in conclusion / the gist", "I'm not sure"],
              correct: 2,
            },
            {
              q: "Which connector means 'in addition to that'?",
              options: ["مع ذلك", "بالإضافةِ إلى ذلك", "على العَكْس", "في رأيي"],
              correct: 1,
            },
            {
              q: "A good B1 spoken argument stacks…",
              options: [
                "opener + two sides + connectors + conclusion",
                "only a single yes/no",
                "the dual ending repeated",
                "verb forms with no meaning",
              ],
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
        q: "'In my opinion' (the everyday phrase) =",
        options: ["fī raʾyī (في رأيي)", "tamāman", "ʿalā l-ʿaks", "thāniyan"],
        correct: 0,
      },
      {
        q: "أَعْتَقِدُ أنَّ… means…",
        options: ["I'm not sure", "I believe that…", "on the contrary", "in conclusion"],
        correct: 1,
      },
      {
        q: "After أنَّ (anna, 'that'), the following noun is…",
        options: ["nominative", "accusative", "always plural", "dropped"],
        correct: 1,
      },
      {
        q: "'I agree' said by a man =",
        options: ["anā muwāfiqa", "anā muwāfiq (أنا مُوافِق)", "lā attafiq", "lastu mutaʾakkidan"],
        correct: 1,
      },
      {
        q: "'You're right' (to a man) =",
        options: ["maʿaka ḥaqq (معكَ حَقّ)", "anā muwāfiq", "ʿalā l-ʿaks", "rubbamā"],
        correct: 0,
      },
      {
        q: "لا أَتَّفِقُ means…",
        options: ["exactly", "I don't agree", "that's true", "personally"],
        correct: 1,
      },
      {
        q: "'On the contrary' =",
        options: ["bi-ṣarāḥa", "ʿalā l-ʿaks (على العَكْس)", "shakhṣiyyan", "tamāman"],
        correct: 1,
      },
      {
        q: "The polite way to disagree is…",
        options: [
          "say أنتَ مُخْطِئ ('you're wrong') bluntly",
          "soften with 'I understand your view, but…' + a reason",
          "stay silent",
          "repeat the dual",
        ],
        correct: 1,
      },
      {
        q: "'In conclusion / the gist' =",
        options: ["awwalan", "khulāṣat al-qawl (خُلاصةُ القَوْل)", "min nāḥiya", "maʿa dhālik"],
        correct: 1,
      },
      {
        q: "Translate: 'In my opinion, on one hand Cairo is expensive, and on the other hand it is beautiful.'",
        options: [
          "في رأيي، مِنْ ناحيةٍ القاهرةُ غاليةٌ، ومِنْ ناحيةٍ أُخْرى هي جميلةٌ.",
          "أَظُنُّ القاهرة، أوّلاً غالية، ثانياً جميلة فقط.",
          "على العَكْس، القاهرةُ غاليةٌ وجميلةٌ تَماماً.",
          "معكَ حَقّ، القاهرةُ مدينةٌ واحدةٌ غاليةٌ.",
        ],
        correct: 0,
      },
    ],
  },
};
