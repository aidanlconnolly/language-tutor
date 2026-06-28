import type { Unit } from "../../types";

export const UNIT_DIET_DRINKS: Unit = {
  slug: "diet-drinks",
  stage: 4,
  order: 18,
  icon: "🧃",
  title: "Drinks & dietary needs",
  tagline: "ʿaṣīr, shāy, anā nabātī, halal, allergies.",
  badge: "tourist",
  lessons: [
    {
      slug: "diet-drinks-juices-water",
      title: "Juices, water & karkadē",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Egypt's juice culture",
          body: [
            "Egypt is famous for its juice stands (<strong>maḥall ʿaṣīr</strong>). The word for juice is <strong>ʿaṣīr</strong>, and you name the fruit after it: <em>ʿaṣīr manga</em> (mango), <em>ʿaṣīr laymūn</em> (lemon), <em>ʿaṣīr qaṣab</em> (sugarcane — the local icon).",
            "Two national drinks: <strong>karkadē</strong> (hibiscus tea, served hot or iced) and <strong>ʿaraʾsūs</strong> (licorice). Both are everywhere in summer.",
            "For water, ask for <strong>mayya</strong> (colloquial) or <strong>māʾ</strong> (MSA). Bottled is <em>mayya maʿdaniyya</em> (mineral water); specify <em>saʾʿa</em> (cold) if you want it chilled.",
          ],
          keyPoint:
            "ʿaṣīr = juice (+ fruit name). karkadē = hibiscus. mayya/māʾ = water; mayya maʿdaniyya = bottled.",
        },
        {
          type: "vocab",
          heading: "Drinks",
          items: [
            { l1: "عَصِير", en: "juice", note: "ʿaṣīr — m.; + fruit name." },
            { l1: "عَصِير مَانْجَا", en: "mango juice", note: "ʿaṣīr manga." },
            { l1: "عَصِير قَصَب", en: "sugarcane juice", note: "ʿaṣīr qaṣab — Egyptian icon." },
            { l1: "كَرْكَدِيه", en: "hibiscus tea", note: "karkadē — m.; hot or iced." },
            { l1: "مَيَّة", en: "water", note: "mayya — f. (colloq.); MSA māʾ." },
            { l1: "مَيَّة مَعْدَنِيّة", en: "mineral/bottled water", note: "mayya maʿdaniyya." },
            { l1: "سَاقْعَة", en: "cold", note: "saʾʿa (f.) — chilled." },
            { l1: "بَدُون تَلْج", en: "without ice", note: "bidūn talj — talj = ice." },
            { l1: "كُولَا", en: "cola / soft drink", note: "kūlā — f." },
          ],
        },
        {
          type: "dialogue",
          heading: "At the juice stand",
          setup: "You step up to a busy ʿaṣīr counter.",
          lines: [
            { speaker: "Vendor", l1: "أَيْوَة يَا أُسْطَى، عَايِز إِيه؟", en: "Yes boss, what would you like?" },
            { speaker: "You", l1: "عَصِير مَانْجَا سَاقِع، مِنْ فَضْلَك.", en: "A cold mango juice, please." },
            { speaker: "Vendor", l1: "بِتَلْج وَلَّا بِدُون؟", en: "With ice or without?" },
            { speaker: "You", l1: "بِدُون تَلْج. وَكَرْكَدِيه كَمَان.", en: "Without ice. And a hibiscus too." },
            { speaker: "Vendor", l1: "حَاضِر، كُلُّه ثَلَاثِين جُنَيْه.", en: "Right away, thirty pounds all together." },
            { speaker: "You", l1: "اِتْفَضَّل، شُكْرًا.", en: "Here you go, thanks." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Order a drink",
          questions: [
            {
              q: "'ʿaṣīr' means…",
              options: ["water", "juice", "tea", "milk"],
              correct: 1,
            },
            {
              q: "'karkadē' is…",
              options: ["sugarcane juice", "hibiscus tea", "licorice", "cola"],
              correct: 1,
            },
            {
              q: "'mayya maʿdaniyya' is…",
              options: ["tap water", "bottled/mineral water", "hot water", "ice"],
              correct: 1,
            },
            {
              q: "To ask for it without ice you say…",
              options: ["saʾʿa", "bidūn talj", "bi-l-ḥalīb", "sāda"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "A cold mango juice, without ice, please.",
          reference: "عَصِير مَانْجَا سَاقِع، بِدُون تَلْج، مِنْ فَضْلَك.",
          hint: "ʿaṣīr manga + sāʾiʿ + bidūn talj.",
        },
      ],
    },
    {
      slug: "diet-drinks-dietary-needs",
      title: "Dietary needs & allergies",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Saying what you can't eat",
          body: [
            "To say you're vegetarian: <strong>anā nabātī</strong> (m) / <strong>anā nabātiyya</strong> (f). Vegan is less common as a word — you can add <em>ana mā bākulsh muntajāt al-ḥalīb</em> ('I don't eat dairy').",
            "Most meat in Egypt is already <strong>ḥalāl</strong>, but you can confirm: <em>da ḥalāl?</em> Pork (<em>laḥm khanzīr</em>) is rarely served and easy to avoid.",
            "For allergies, use <strong>ʿindī ḥasāsiyya min…</strong> = 'I have an allergy to…' followed by the food: <em>min al-mukassarāt</em> (nuts), <em>min as-samak</em> (fish). This is the single most important phrase in this unit.",
          ],
          tip: {
            label: "Be clear and repeat",
            body: "Allergy awareness is growing but not universal. State it plainly: <em>ʿindī ḥasāsiyya min al-mukassarāt — muhimm jiddan</em> ('I have a nut allergy — very important'), and confirm with the waiter.",
          },
        },
        {
          type: "vocab",
          heading: "Dietary words",
          items: [
            { l1: "نَبَاتِي", en: "vegetarian (m)", note: "nabātī; f. nabātiyya." },
            { l1: "حَلَال", en: "halal", note: "ḥalāl — permissible." },
            { l1: "لَحْم خِنْزِير", en: "pork", note: "laḥm khanzīr — usually avoided." },
            { l1: "حَسَاسِيّة", en: "allergy", note: "ḥasāsiyya — f." },
            { l1: "عِنْدِي حَسَاسِيّة مِنْ…", en: "I have an allergy to…", note: "ʿindī ḥasāsiyya min…" },
            { l1: "مُكَسَّرَات", en: "nuts", note: "mukassarāt — pl." },
            { l1: "مُنْتَجَات الْحَلِيب", en: "dairy products", note: "muntajāt al-ḥalīb." },
            { l1: "بِدُون", en: "without", note: "bidūn — bidūn laḥm = without meat." },
            { l1: "مُهِمّ", en: "important", note: "muhimm — adj." },
          ],
        },
        {
          type: "dialogue",
          heading: "Telling the waiter",
          setup: "You order, then flag your needs.",
          lines: [
            { speaker: "You", l1: "أَنَا نَبَاتِي، مَا بَاكُلْش لَحْم وَلَا فِرَاخ.", en: "I'm vegetarian, I don't eat meat or chicken." },
            { speaker: "Waiter", l1: "تَمَام، عِنْدِنَا أَطْبَاق خُضَار كِتِير.", en: "Fine, we have lots of vegetable dishes." },
            { speaker: "You", l1: "وَعِنْدِي حَسَاسِيّة مِنْ الْمُكَسَّرَات. مُهِمّ جِدًّا.", en: "And I have a nut allergy. Very important." },
            { speaker: "Waiter", l1: "مَفْهُوم، هَقُول لِلْمَطْبَخ.", en: "Understood, I'll tell the kitchen." },
            { speaker: "You", l1: "شُكْرًا، دَه لَطِيف مِنَّك.", en: "Thanks, that's kind of you." },
            { speaker: "Waiter", l1: "وَلَا يِهِمَّك.", en: "Don't mention it." },
          ],
        },
        {
          type: "fillBlank",
          heading: "State your needs",
          intro: "Choose the right word.",
          items: [
            {
              template: "أَنَا ___ ، مَا بَاكُلْش لَحْم.",
              answer: "نَبَاتِي",
              en: "I'm vegetarian, I don't eat meat.",
              options: ["نَبَاتِي", "حَلَال", "مُهِمّ", "سَاقِع"],
            },
            {
              template: "عِنْدِي ___ مِنْ الْمُكَسَّرَات.",
              answer: "حَسَاسِيّة",
              en: "I have an allergy to nuts.",
              options: ["حَسَاسِيّة", "عَصِير", "حَلَال", "بِدُون"],
            },
            {
              template: "الطَّبَق دَه ___ ؟",
              answer: "حَلَال",
              en: "Is this dish halal?",
              options: ["حَلَال", "نَبَاتِي", "مُهِمّ", "تَلْج"],
            },
            {
              template: "مِنْ فَضْلَك، ___ مُنْتَجَات الْحَلِيب.",
              answer: "بِدُون",
              en: "Please, without dairy products.",
              options: ["بِدُون", "عِنْدِي", "حَارّ", "سَاقِع"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm vegetarian, and I have an allergy to nuts.",
          reference: "أَنَا نَبَاتِي، وَعِنْدِي حَسَاسِيّة مِنْ الْمُكَسَّرَات.",
          hint: "anā nabātī + ʿindī ḥasāsiyya min al-mukassarāt.",
        },
      ],
    },
    {
      slug: "diet-drinks-group-order",
      title: "Ordering for a group",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Numbers do the work",
          body: [
            "When ordering for a table, lead with the number then the item: <strong>talāta ʿaṣīr manga</strong> ('three mango juices'), <strong>itnēn shāy</strong> ('two teas'). Egyptians often keep the noun singular after the number in casual speech.",
            "Useful framing words: <strong>li-kullina</strong> ('for all of us'), <strong>nafs ash-shayʾ</strong> ('the same thing'), and <strong>wāḥid kamān</strong> ('one more').",
            "To split or combine the bill: <strong>kullu maʿa baʿḍ</strong> ('all together') or <strong>kull wāḥid lawaḥdu</strong> ('each one separately').",
          ],
          keyPoint:
            "Number + item: itnēn shāy, talāta ʿaṣīr. nafs ash-shayʾ = the same. kullu maʿa baʿḍ = all together.",
        },
        {
          type: "vocab",
          heading: "Group ordering",
          items: [
            { l1: "اِتْنَيْن", en: "two", note: "itnēn." },
            { l1: "ثَلَاثَة", en: "three", note: "talāta." },
            { l1: "أَرْبَعَة", en: "four", note: "arbaʿa." },
            { l1: "لِكُلِّنَا", en: "for all of us", note: "li-kullina." },
            { l1: "نَفْس الشَّيْء", en: "the same thing", note: "nafs ash-shayʾ." },
            { l1: "وَاحِد كَمَان", en: "one more", note: "wāḥid kamān." },
            { l1: "كُلُّه مَعَ بَعْض", en: "all together", note: "kullu maʿa baʿḍ — one bill." },
            { l1: "كُلّ وَاحِد لِوَحْدُه", en: "each separately", note: "kull wāḥid lawaḥdu." },
          ],
        },
        {
          type: "dialogue",
          heading: "Ordering for the table",
          setup: "You're with three friends; you order for everyone.",
          lines: [
            { speaker: "Waiter", l1: "أَهْلًا، تَطْلُبُوا إِيه؟", en: "Welcome, what will you order?" },
            { speaker: "You", l1: "ثَلَاثَة شَاي مَضْبُوط وَوَاحِد قَهْوَة سَادَة.", en: "Three medium teas and one coffee without sugar." },
            { speaker: "Waiter", l1: "وَمَشْرُوبَات تَانِيَة؟", en: "And other drinks?" },
            { speaker: "You", l1: "اِتْنَيْن عَصِير قَصَب كَمَان.", en: "Two sugarcane juices as well." },
            { speaker: "Waiter", l1: "تَمَام. الْحِسَاب كُلُّه مَعَ بَعْض؟", en: "Great. The bill all together?" },
            { speaker: "You", l1: "أَيْوَة، كُلُّه مَعَ بَعْض.", en: "Yes, all together." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the order",
          intro: "Tap the words into order.",
          items: [
            { tokens: ["ثَلَاثَة", "شَاي", "مَضْبُوط"], en: "Three medium teas." },
            { tokens: ["اِتْنَيْن", "عَصِير", "قَصَب"], en: "Two sugarcane juices." },
            { tokens: ["نَفْس", "الشَّيْء", "لِيَّا"], en: "The same thing for me." },
            { tokens: ["الْحِسَاب", "كُلُّه", "مَعَ", "بَعْض"], en: "The bill all together." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Three teas and two coffees, the bill all together.",
          reference: "ثَلَاثَة شَاي وَاِتْنَيْن قَهْوَة، الْحِسَاب كُلُّه مَعَ بَعْض.",
          hint: "talāta shāy + itnēn qahwa + al-ḥisāb kullu maʿa baʿḍ.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'nafs ash-shayʾ' means…",
              options: ["one more", "the same thing", "all together", "without ice"],
              correct: 1,
            },
            {
              q: "'kullu maʿa baʿḍ' tells the waiter…",
              options: ["each pays separately", "all on one bill", "no service charge", "bring water"],
              correct: 1,
            },
            {
              q: "'itnēn' is…",
              options: ["two", "three", "four", "one"],
              correct: 0,
            },
            {
              q: "'wāḥid kamān' means…",
              options: ["the same", "one more", "for all of us", "all together"],
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
        q: "'ʿaṣīr' means…",
        options: ["water", "juice", "tea", "ice"],
        correct: 1,
      },
      {
        q: "'karkadē' is…",
        options: ["mango juice", "hibiscus tea", "sugarcane", "cola"],
        correct: 1,
      },
      {
        q: "To ask for water without ice you say…",
        options: ["bidūn talj", "saʾʿa", "sāda", "maẓbūṭ"],
        correct: 0,
      },
      {
        q: "A woman says 'I'm vegetarian' as…",
        options: ["anā nabātī", "anā nabātiyya", "anā ḥalāl", "anā jawʿāna"],
        correct: 1,
      },
      {
        q: "'ʿindī ḥasāsiyya min…' means…",
        options: ["I'd like…", "I have an allergy to…", "without…", "do you have…?"],
        correct: 1,
      },
      {
        q: "'mukassarāt' are…",
        options: ["dairy products", "nuts", "vegetables", "spices"],
        correct: 1,
      },
      {
        q: "To confirm a dish is permissible you ask…",
        options: ["da ḥalāl?", "da lazīz?", "da ḥārr?", "da saʾʿa?"],
        correct: 0,
      },
      {
        q: "'kullu maʿa baʿḍ' means the bill is…",
        options: ["split per person", "all together", "free", "by card"],
        correct: 1,
      },
      {
        q: "'nafs ash-shayʾ' means…",
        options: ["one more", "the same thing", "for all of us", "without dairy"],
        correct: 1,
      },
      {
        q: "Translate: 'A cold mango juice, please.'",
        options: [
          "عَصِير مَانْجَا سَاقِع، مِنْ فَضْلَك.",
          "أَنَا نَبَاتِي.",
          "عِنْدِي حَسَاسِيّة مِنْ الْمُكَسَّرَات.",
          "ثَلَاثَة شَاي مَضْبُوط.",
        ],
        correct: 0,
      },
    ],
  },
};
