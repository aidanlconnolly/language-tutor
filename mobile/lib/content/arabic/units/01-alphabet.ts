import type { Unit } from "../../types";

export const UNIT_ALPHABET: Unit = {
  slug: "alphabet",
  stage: 1,
  order: 1,
  icon: "🔤",
  title: "The Arabic alphabet",
  tagline: "28 letters, connecting forms, right-to-left, sun & moon letters.",
  badge: "core",
  lessons: [
    {
      slug: "alphabet-first-letters",
      title: "Right-to-left & your first letters",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "How the Arabic script works",
          body: [
            "Arabic is written and read <strong>right to left</strong>. The book opens from what looks to us like the back, and your eye starts at the right edge of every line.",
            "There are <strong>28 letters</strong> and <strong>no capital letters</strong> — and no separate print vs. cursive. Arabic is always 'joined-up': most letters connect to the next one inside a word.",
            "Because letters connect, each one can change shape depending on its <em>position</em>: <strong>initial</strong> (start of a word), <strong>medial</strong> (middle), <strong>final</strong> (end), or <strong>isolated</strong> (standing alone). It's the same letter — just a different costume.",
          ],
          tip: {
            label: "Six 'non-connectors'",
            body: "A handful of letters (<em>ا د ذ ر ز و</em>) connect to the letter <em>before</em> them but never to the one <em>after</em>. So they force a little gap inside a word. Don't worry about memorizing the list yet — just notice the gaps.",
          },
          keyPoint:
            "Same letter, four possible shapes: initial, medial, final, isolated. Direction is always right-to-left.",
        },
        {
          type: "vocab",
          heading: "Your first six letters",
          intro: "These share skeletons: ب ت ث ن are dot variations of one shape, and ي is closely related.",
          items: [
            { l1: "ا", en: "alif (long 'aa' / a seat for the glottal stop)", note: "transliteration: alif; a NON-connector; isolated ا, final ـا." },
            { l1: "ب", en: "bāʾ — the 'b' sound", note: "transliteration: bāʾ; one dot BELOW. Forms: بـ ـبـ ـب ب." },
            { l1: "ت", en: "tāʾ — the 't' sound", note: "transliteration: tāʾ; two dots ABOVE. Same skeleton as bāʾ." },
            { l1: "ث", en: "thāʾ — 'th' as in 'think'", note: "transliteration: thāʾ; three dots above." },
            { l1: "ن", en: "nūn — the 'n' sound", note: "transliteration: nūn; one dot above, deeper bowl when final/isolated." },
            { l1: "ي", en: "yāʾ — 'y' sound or long 'ee'", note: "transliteration: yāʾ; two dots below." },
          ],
        },
        {
          type: "tip",
          heading: "Dots do all the work",
          body: "Four of today's letters share <strong>exactly the same skeleton</strong> — only the dots differ: <em>ب</em> (1 dot below), <em>ت</em> (2 above), <em>ث</em> (3 above), <em>ن</em> (1 above, with a rounder tail). Read the dots carefully and half the alphabet falls into place.",
          example: { l1: "ب · ت · ث · ن", en: "b · t · th · n — one shape, different dots" },
        },
        {
          type: "multipleChoice",
          heading: "Read the dots",
          questions: [
            {
              q: "Which letter has one dot BELOW it?",
              qL1: "ب",
              options: ["ت (tāʾ)", "ث (thāʾ)", "ب (bāʾ)", "ن (nūn)"],
              correct: 2,
              fb: "بـ has a single dot below — the 'b' sound.",
            },
            {
              q: "Arabic is read…",
              options: ["left to right", "right to left", "top to bottom", "either direction"],
              correct: 1,
              fb: "Right to left — your eye starts at the right edge of the line.",
            },
            {
              q: "Which statement is TRUE about Arabic letters?",
              options: [
                "Each letter has only one fixed shape",
                "There are capital and lowercase letters",
                "Letters change shape by position in the word",
                "Words are written letter-by-letter, never joined",
              ],
              correct: 2,
              fb: "Letters take initial / medial / final / isolated forms depending on position.",
            },
            {
              q: "ث (thāʾ) is the sound…",
              options: ["'s' in 'sun'", "'th' in 'think'", "'t' in 'top'", "'z' in 'zoo'"],
              correct: 1,
              fb: "Three dots above = the soft 'th' of 'think'.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Name the sound",
          intro: "Match each letter to its sound.",
          items: [
            { template: "ن makes the sound ___.", answer: "n", en: "nūn = n", options: ["n", "b", "t", "th"] },
            { template: "ت makes the sound ___.", answer: "t", en: "tāʾ = t", options: ["d", "t", "th", "s"] },
            { template: "ي can be a 'y' sound or a long ___ sound.", answer: "ee", en: "yāʾ = y / long ee", options: ["oo", "ee", "aa", "ay"] },
          ],
        },
      ],
    },
    {
      slug: "alphabet-emphatic-throat",
      title: "Throat & emphatic sounds",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The sounds English doesn't have",
          body: [
            "Arabic has a famous set of sounds made deep in the throat and at the back of the mouth. They feel strange at first — but they are what give Arabic its character.",
            "The <strong>emphatic</strong> letters (<em>ص ض ط ظ</em>) are 'heavy' versions of s, d, t, dh. Your tongue presses flat and low, and the vowels around them sound darker.",
            "The <strong>throat</strong> letters (<em>ع ح خ ق</em>) come from the pharynx and uvula — places English never uses. Be patient; even a rough approximation will be understood.",
          ],
          keyPoint:
            "Emphatic = 'heavy/dark' consonants (ص ض ط ظ). Throat = pharyngeal/uvular consonants (ع ح خ ق).",
        },
        {
          type: "pronounce",
          heading: "Listen and imitate",
          intro: "Say each slowly. Exaggerate at first — you can soften later.",
          items: [
            { l1: "ع", en: "ʿayn — a tight squeeze from deep in the throat", tip: "transliteration: ʿayn. Imagine starting to gag gently, then voicing it. The most distinctively Arabic sound." },
            { l1: "ح", en: "ḥāʾ — a strong, breathy 'h'", tip: "transliteration: ḥāʾ. Like fogging a mirror, but from the throat — sharper than English 'h'." },
            { l1: "خ", en: "khāʾ — 'ch' as in Scottish 'loch'", tip: "transliteration: khāʾ. A raspy sound at the back of the mouth." },
            { l1: "ق", en: "qāf — a 'k' made far back, near the uvula", tip: "transliteration: qāf. Deeper and harder than the English 'k' (ك)." },
            { l1: "ص", en: "ṣād — emphatic 'S'", tip: "transliteration: ṣād. A 'heavy' s; the following vowel sounds darker." },
            { l1: "ط", en: "ṭāʾ — emphatic 'T'", tip: "transliteration: ṭāʾ. A 'heavy' t, tongue pressed flat and low." },
          ],
        },
        {
          type: "vocab",
          heading: "The full emphatic & throat set",
          items: [
            { l1: "ع", en: "ʿayn — voiced pharyngeal", note: "transliteration: ʿayn; written ʿ in transliteration." },
            { l1: "ح", en: "ḥāʾ — voiceless pharyngeal 'h'", note: "transliteration: ḥāʾ; dotless, distinct from خ and ج." },
            { l1: "خ", en: "khāʾ — raspy 'kh'", note: "transliteration: khāʾ; one dot above." },
            { l1: "ق", en: "qāf — deep 'q'", note: "transliteration: qāf; two dots above." },
            { l1: "ص", en: "ṣād — emphatic s", note: "transliteration: ṣād; emphatic counterpart of س." },
            { l1: "ض", en: "ḍād — emphatic d", note: "transliteration: ḍād; Arabic is called 'the language of the ḍād'." },
            { l1: "ط", en: "ṭāʾ — emphatic t", note: "transliteration: ṭāʾ; emphatic counterpart of ت." },
            { l1: "ظ", en: "ẓāʾ — emphatic dh", note: "transliteration: ẓāʾ; emphatic counterpart of ذ." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Match the sound",
          questions: [
            {
              q: "Which letter sounds like the 'ch' in Scottish 'loch'?",
              options: ["ح (ḥāʾ)", "خ (khāʾ)", "ع (ʿayn)", "ق (qāf)"],
              correct: 1,
              fb: "خ (khāʾ) is the raspy 'kh' of 'loch'.",
            },
            {
              q: "ق (qāf) differs from ك (kāf) because it is…",
              options: ["softer and breathier", "made further back, near the uvula", "always silent", "a vowel"],
              correct: 1,
              fb: "qāf is a deep 'k' produced far back near the uvula.",
            },
            {
              q: "The emphatic ('heavy') letters are…",
              options: ["ب ت ث ن", "ا و ي", "ص ض ط ظ", "ع ح خ ق"],
              correct: 2,
              fb: "ص ض ط ظ are the four emphatic consonants.",
            },
            {
              q: "Arabic is nicknamed 'the language of the ___'.",
              options: ["ʿayn", "ḍād", "qāf", "ḥāʾ"],
              correct: 1,
              fb: "ض (ḍād) is so distinctive that Arabic is called luġat aḍ-ḍād.",
            },
          ],
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "ع (ʿayn) is produced…",
              options: ["with the lips", "deep in the throat (pharynx)", "with the tip of the tongue", "through the nose"],
              correct: 1,
            },
            {
              q: "Which is the emphatic counterpart of ت (t)?",
              options: ["ط (ṭāʾ)", "ص (ṣād)", "ظ (ẓāʾ)", "ض (ḍād)"],
              correct: 0,
            },
            {
              q: "ح (ḥāʾ) is best described as…",
              options: ["a soft English 'h'", "a strong breathy throat 'h'", "a 'kh' sound", "a silent letter"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "alphabet-vowels-sun-moon",
      title: "Vowels, shadda & sun vs moon letters",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Long vowels vs short marks",
          body: [
            "Arabic has only three vowel qualities — a, i, u — and each comes in a short and a long version.",
            "The <strong>short</strong> vowels are tiny marks (harakāt) written above or below a letter: <em>fatḥa</em> (ـَ = a), <em>kasra</em> (ـِ = i), <em>ḍamma</em> (ـُ = u). A <em>sukūn</em> (ـْ) means 'no vowel here'. These marks are usually left out in everyday text, but we show them in these early units so you can read.",
            "The <strong>long</strong> vowels are full letters: <strong>ا</strong> (long aa), <strong>و</strong> (long uu), <strong>ي</strong> (long ee). So و and ي double as consonants (w, y) AND as long vowels.",
          ],
          keyPoint:
            "Three short marks: fatḥa (a), kasra (i), ḍamma (u). Three long-vowel letters: ا (aa), و (uu), ي (ee).",
        },
        {
          type: "vocab",
          heading: "The marks you'll see",
          items: [
            { l1: "بَ", en: "ba (fatḥa = short a)", note: "transliteration: ba; the small stroke ABOVE is fatḥa." },
            { l1: "بِ", en: "bi (kasra = short i)", note: "transliteration: bi; the small stroke BELOW is kasra." },
            { l1: "بُ", en: "bu (ḍamma = short u)", note: "transliteration: bu; the small loop ABOVE is ḍamma." },
            { l1: "بْ", en: "b (sukūn = no vowel)", note: "transliteration: b; the small circle marks a vowelless consonant." },
            { l1: "بّ", en: "bb (shadda = doubled consonant)", note: "transliteration: bb; the little 'w' shape doubles the letter." },
            { l1: "بَا", en: "baa (long a)", note: "transliteration: bā; fatḥa + alif = long aa." },
          ],
        },
        {
          type: "tip",
          heading: "Sun letters vs moon letters",
          body: "The word for 'the' is <strong>الـ (al-)</strong>. With about half the letters — the <strong>sun letters</strong> — the 'l' assimilates and you double the next sound instead: <em>ash-shams</em> (the sun), not 'al-shams'. With the other half — the <strong>moon letters</strong> — you pronounce the 'l' clearly: <em>al-qamar</em> (the moon). You'll drill this fully in the article unit; for now just hear the contrast.",
          example: { l1: "الشَّمْس · الْقَمَر", en: "ash-shams (the sun) · al-qamar (the moon)" },
        },
        {
          type: "multipleChoice",
          heading: "Vowels & marks",
          questions: [
            {
              q: "Which mark gives a short 'i' sound?",
              options: ["fatḥa (above)", "kasra (below)", "ḍamma (above)", "sukūn"],
              correct: 1,
              fb: "kasra is the small stroke written BELOW the letter = short i.",
            },
            {
              q: "The shadda (ـّ) tells you to…",
              options: ["delete the vowel", "double the consonant", "make it long aa", "stop reading"],
              correct: 1,
              fb: "shadda doubles the consonant it sits on.",
            },
            {
              q: "Which letters serve as LONG vowels?",
              options: ["ب ت ث", "ا و ي", "ص ض ط", "ع ح خ"],
              correct: 1,
              fb: "ا (aa), و (uu), ي (ee) are the three long-vowel letters.",
            },
            {
              q: "In 'ash-shams' (the sun), ش is a…",
              options: ["moon letter — l pronounced", "sun letter — l assimilates", "long vowel", "silent letter"],
              correct: 1,
              fb: "ش is a sun letter, so al- becomes ash-, doubling the š.",
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the syllable (right to left)",
          intro: "Arrange the pieces. Remember: Arabic reads right-to-left, so the first piece sits on the right.",
          items: [
            { tokens: ["بَ", "ا"], en: "bā — long a (write the seat-consonant first, then alif)" },
            { tokens: ["الْ", "قَمَر"], en: "al-qamar — 'the moon' (moon letter: l is pronounced)" },
            { tokens: ["الشَّمْس"], en: "ash-shams — 'the sun' (sun letter: l assimilates into š)" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "the moon",
          reference: "الْقَمَر",
          hint: "qāf is a moon letter, so the 'l' of al- is pronounced: al-qamar.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "How many letters are in the Arabic alphabet?",
        options: ["24", "26", "28", "30"],
        correct: 2,
      },
      {
        q: "Arabic is written and read…",
        options: ["left to right", "right to left", "top to bottom", "boustrophedon"],
        correct: 1,
      },
      {
        q: "Letters in Arabic change shape depending on…",
        options: ["the writer's mood", "their position in the word", "the time of day", "whether they are capitalized"],
        correct: 1,
      },
      {
        q: "ب · ت · ث differ from one another only by their…",
        options: ["size", "color", "dots", "direction"],
        correct: 2,
      },
      {
        q: "Which letter is the deep, uvular 'q'?",
        options: ["ك (kāf)", "ق (qāf)", "خ (khāʾ)", "ح (ḥāʾ)"],
        correct: 1,
      },
      {
        q: "The four EMPHATIC letters are:",
        options: ["ا و ي ن", "ب ت ث ن", "ص ض ط ظ", "ع ح خ ق"],
        correct: 2,
      },
      {
        q: "Which mark means 'no vowel on this consonant'?",
        options: ["fatḥa", "kasra", "ḍamma", "sukūn"],
        correct: 3,
      },
      {
        q: "The shadda (ـّ) tells you to…",
        options: ["lengthen the vowel", "double the consonant", "drop the consonant", "add a 'th' sound"],
        correct: 1,
      },
      {
        q: "Which three letters can act as LONG vowels?",
        options: ["ا و ي", "ب ت ث", "ع ح خ", "ص ض ط"],
        correct: 0,
      },
      {
        q: "In 'ash-shams' (the sun), ش behaves as a…",
        options: ["moon letter", "sun letter", "long vowel", "emphatic"],
        correct: 1,
      },
    ],
  },
};
