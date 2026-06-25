import type { Unit } from "../../types";

export const UNIT_VERB_FORMS: Unit = {
  slug: "verb-forms",
  stage: 8,
  order: 33,
  icon: "🎩",
  title: "Verb forms (awareness)",
  tagline: "Recognising Forms II–X and common derived verbs.",
  badge: "advanced",
  lessons: [
    {
      slug: "verb-forms-ii-iii",
      title: "The idea of derived forms — II & III",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Most Arabic verbs come from a three-letter root",
          body: [
            "Arabic verbs are built on a <strong>root</strong> of usually three consonants that carries a core meaning. The root <strong>د-ر-س</strong> (d-r-s) is about <em>studying</em>.",
            "You pour that root into a <strong>pattern</strong> (called a <em>form</em>, Latin numbers I–X) to get related verbs. Form I دَرَسَ <em>darasa</em> means \"to study\". Pour the same root into Form II and you get دَرَّسَ <em>darrasa</em> \"to teach\" — literally \"to make someone study\".",
            "You do <strong>not</strong> need to produce all ten forms at B1. The goal here is <strong>recognition</strong>: when you see a doubled middle letter or a long ā after the first letter, you can guess what's going on.",
            "Form II — <em>faʿʿala</em> — doubles the middle root letter (the shadda ّ ). It usually makes a verb <em>causative</em> or <em>intensive</em>.",
            "Form III — <em>fāʿala</em> — adds a long ā after the first root letter. It usually means doing something <em>to or with</em> someone else.",
          ],
          keyPoint:
            "Root = meaning. Form = pattern. Form II faʿʿala (doubled middle, causative): darrasa = to teach. Form III fāʿala (long ā): sāʿada = to help.",
        },
        {
          type: "vocab",
          heading: "Form II and Form III verbs",
          intro: "Notice the doubled letter (Form II) or the long ā (Form III).",
          items: [
            { l1: "دَرَّسَ", en: "to teach", note: "darrasa · Form II of d-r-s (study). Doubled rā = causative." },
            { l1: "عَلَّمَ", en: "to teach / instruct", note: "ʿallama · Form II of ʿ-l-m (know)." },
            { l1: "فَكَّرَ", en: "to think", note: "fakkara · Form II of f-k-r (thought)." },
            { l1: "ساعَدَ", en: "to help", note: "sāʿada · Form III of s-ʿ-d. Long ā after sīn." },
            { l1: "سافَرَ", en: "to travel", note: "sāfara · Form III of s-f-r (travel/journey)." },
            { l1: "شاهَدَ", en: "to watch / view", note: "shāhada · Form III of sh-h-d (witness)." },
          ],
        },
        {
          type: "conjugation",
          heading: "Form II: دَرَّسَ in the present",
          verb: "دَرَّسَ / يُدَرِّسُ",
          meaning: "to teach",
          intro:
            "The present prefix of Form II takes a ḍamma (يُـ). The doubled middle letter stays throughout — that shadda is the signature of Form II.",
          tenses: [
            {
              name: "Present tense (المضارع)",
              forms: [
                { person: "أنا", form: "أُدَرِّسُ", en: "I teach" },
                { person: "أنتَ", form: "تُدَرِّسُ", en: "you teach (m)" },
                { person: "أنتِ", form: "تُدَرِّسينَ", en: "you teach (f)" },
                { person: "هو", form: "يُدَرِّسُ", en: "he teaches" },
                { person: "هي", form: "تُدَرِّسُ", en: "she teaches" },
                { person: "نحن", form: "نُدَرِّسُ", en: "we teach" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Spot the form",
          questions: [
            {
              q: "The verb ساعَدَ (sāʿada, to help) is which form?",
              options: ["Form I (faʿala)", "Form II (faʿʿala)", "Form III (fāʿala)", "Form X"],
              correct: 2,
              fb: "The long ā after the first root letter (s-ā-ʿada) is the mark of Form III.",
            },
            {
              q: "Form II دَرَّسَ \"to teach\" is built from Form I دَرَسَ \"to study\". The relationship is…",
              options: [
                "causative (make someone study)",
                "passive (be studied)",
                "they are unrelated",
                "Form II reverses the meaning",
              ],
              correct: 0,
              fb: "Doubling the middle letter (Form II) commonly turns a verb causative: study → make-study → teach.",
            },
            {
              q: "Which visual clue signals Form II?",
              options: [
                "a long ā after the first letter",
                "a doubled middle letter (shadda)",
                "an alif-sīn-tā prefix",
                "a tā after the first letter",
              ],
              correct: 1,
              fb: "Form II (faʿʿala) doubles the middle root consonant — the شدّة.",
            },
          ],
        },
      ],
    },
    {
      slug: "verb-forms-v-viii",
      title: "Forms V–VIII recognition",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The reflexive and 'self' forms",
          body: [
            "Several forms add a <strong>تَـ (ta-)</strong> prefix or an infixed <strong>tā</strong>, and these often make a verb <em>reflexive</em> — the action turns back on the doer.",
            "Form V — <em>tafaʿʿala</em> — is Form II plus a ta- prefix. تَعَلَّمَ <em>taʿallama</em> = \"to learn\" (= to teach <em>oneself</em>), from عَلَّمَ \"to teach\".",
            "Form VIII — <em>iftaʿala</em> — slots a <strong>tā</strong> in after the first root letter. اِسْتَمَعَ… no — اِجْتَمَعَ <em>ijtamaʿa</em> = \"to meet / gather\". A very common Form VIII verb you'll hear in Cairo is اِسْتَمَعَ — careful, that's actually Form X; the cleaner Form VIII example is اِسْتَمَعَ's cousin اِسْتَمَعَ. For Form VIII recognition, lock onto the inserted tā: اِجْتَمَعَ, اِنْتَظَرَ <em>intaẓara</em> \"to wait\".",
            "Don't memorise tables. Train your eye: a <strong>ta-</strong> at the front often means \"to oneself\", and an inserted <strong>tā</strong> after the first letter is Form VIII.",
          ],
          tip: {
            label: "Listening tip",
            body: "When you hear <em>taʿallamtu l-ʿarabiyya</em> (\"I learned Arabic\") in a Cairo classroom, the <em>ta-</em> tells you the speaker did it to/for themselves — they learned, they weren't merely taught.",
          },
          keyPoint:
            "Form V tafaʿʿala (ta- + doubled middle, reflexive): taʿallama = to learn. Form VIII iftaʿala (inserted tā): intaẓara = to wait, ijtamaʿa = to meet.",
        },
        {
          type: "vocab",
          heading: "Forms V and VIII verbs",
          intro: "Watch for the ta- prefix (V) or the tā after the first root letter (VIII).",
          items: [
            { l1: "تَعَلَّمَ", en: "to learn", note: "taʿallama · Form V of ʿ-l-m. ta- + doubled lām = reflexive of 'teach'." },
            { l1: "تَكَلَّمَ", en: "to speak / talk", note: "takallama · Form V of k-l-m (speech)." },
            { l1: "تَذَكَّرَ", en: "to remember", note: "tadhakkara · Form V of dh-k-r (mention/recall)." },
            { l1: "اِنْتَظَرَ", en: "to wait", note: "intaẓara · Form VIII of n-ẓ-r (look). Inserted tā." },
            { l1: "اِجْتَمَعَ", en: "to meet / gather", note: "ijtamaʿa · Form VIII of j-m-ʿ (gather)." },
            { l1: "اِسْتَمَعَ", en: "to listen", note: "istamaʿa · derived verb of s-m-ʿ (hear); take it as 'to listen attentively'." },
          ],
        },
        {
          type: "conjugation",
          heading: "Form V: تَعَلَّمَ in the present",
          verb: "تَعَلَّمَ / يَتَعَلَّمُ",
          meaning: "to learn",
          intro:
            "The ta- prefix is part of the verb itself, so the present adds the usual prefixes in front of it: يَتَعَلَّمُ, أَتَعَلَّمُ.",
          tenses: [
            {
              name: "Present tense (المضارع)",
              forms: [
                { person: "أنا", form: "أَتَعَلَّمُ", en: "I learn" },
                { person: "أنتَ", form: "تَتَعَلَّمُ", en: "you learn (m)" },
                { person: "هو", form: "يَتَعَلَّمُ", en: "he learns" },
                { person: "هي", form: "تَتَعَلَّمُ", en: "she learns" },
                { person: "نحن", form: "نَتَعَلَّمُ", en: "we learn" },
                { person: "هم", form: "يَتَعَلَّمونَ", en: "they learn (m)" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the right derived verb",
          items: [
            {
              template: "أنا ___ اللغةَ العربيةَ في القاهرة.",
              answer: "أَتَعَلَّمُ",
              en: "I am learning Arabic in Cairo.",
              options: ["أَتَعَلَّمُ", "أُدَرِّسُ", "أُساعِدُ", "أَنْتَظِرُ"],
            },
            {
              template: "هي ___ الأتوبيسَ أمامَ المحطة.",
              answer: "تَنْتَظِرُ",
              en: "She is waiting for the bus in front of the station.",
              options: ["تَنْتَظِرُ", "تَتَكَلَّمُ", "تُسافِرُ", "تَتَذَكَّرُ"],
            },
            {
              template: "نحن ___ كلَّ يومِ جمعةٍ في بيتِ جدّي.",
              answer: "نَجْتَمِعُ",
              en: "We gather every Friday at my grandfather's house.",
              options: ["نَجْتَمِعُ", "نُدَرِّسُ", "نُشاهِدُ", "نُساعِدُ"],
            },
            {
              template: "هل ___ العربيةَ جيداً؟",
              answer: "تَتَكَلَّمُ",
              en: "Do you speak Arabic well?",
              options: ["تَتَكَلَّمُ", "تُدَرِّسُ", "تَنْتَظِرُ", "تُسافِرُ"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I am learning Arabic and I speak a little with my friends in Cairo.",
          reference: "أَتَعَلَّمُ العربيةَ وأَتَكَلَّمُ قليلاً مع أصدقائي في القاهرة.",
          hint: "Use the Form V verbs أَتَعَلَّمُ (I learn) and أَتَكَلَّمُ (I speak).",
        },
      ],
    },
    {
      slug: "verb-forms-x-pattern",
      title: "Form X and reading the root",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Form X: the اِسْتَـ form",
          body: [
            "Form X — <em>istafʿala</em> — is the easiest to spot: it starts with <strong>اِسْتَـ (ista-)</strong>. It often means \"to seek / ask for / consider something to be…\".",
            "اِسْتَعْمَلَ <em>istaʿmala</em> = \"to use\" (root ʿ-m-l, \"work\"). اِسْتَخْدَمَ <em>istakhdama</em> = \"to use / employ\" (root kh-d-m, \"serve\"). Both are everyday Cairo vocabulary: <em>kayfa astaʿmilu hādhā?</em> = \"how do I use this?\".",
            "Other useful Form X verbs: اِسْتَطاعَ <em>istaṭāʿa</em> \"to be able to\", اِسْتَأْجَرَ <em>istaʾjara</em> \"to rent\".",
            "<strong>Reading the root from a derived verb:</strong> strip the prefixes (اِسْتَـ, تَـ, the ا) and the helper letters, and the three strong consonants left over are your root. From اِسْتَعْمَلَ drop اِسْتَـ → ع-م-ل, the root for \"work\". That lets you guess meanings and look words up in a dictionary, which still lists verbs by root.",
          ],
          keyPoint:
            "Form X istafʿala starts with اِسْتَـ (ista-): istaʿmala = to use, istaṭāʿa = to be able. To find the root, strip the form's helper letters and keep the three strong consonants.",
        },
        {
          type: "vocab",
          heading: "Form X verbs you'll actually use",
          items: [
            { l1: "اِسْتَعْمَلَ", en: "to use", note: "istaʿmala · Form X of ʿ-m-l (work)." },
            { l1: "اِسْتَخْدَمَ", en: "to use / employ", note: "istakhdama · Form X of kh-d-m (serve)." },
            { l1: "اِسْتَطاعَ", en: "to be able to", note: "istaṭāʿa · Form X of ṭ-w-ʿ (obey/be able)." },
            { l1: "اِسْتَأْجَرَ", en: "to rent / hire", note: "istaʾjara · Form X of ʾ-j-r (wage)." },
            { l1: "اِسْتَيْقَظَ", en: "to wake up", note: "istayqaẓa · Form X of y-q-ẓ (be awake)." },
            { l1: "اِسْتَقْبَلَ", en: "to receive / welcome", note: "istaqbala · Form X of q-b-l (front/accept)." },
          ],
        },
        {
          type: "conjugation",
          heading: "Form X: اِسْتَعْمَلَ in the present",
          verb: "اِسْتَعْمَلَ / يَسْتَعْمِلُ",
          meaning: "to use",
          intro:
            "In the present the initial alif drops and the سْتَـ stays: يَسْتَعْمِلُ, أَسْتَعْمِلُ. That ست- block is the giveaway that you're looking at Form X.",
          tenses: [
            {
              name: "Present tense (المضارع)",
              forms: [
                { person: "أنا", form: "أَسْتَعْمِلُ", en: "I use" },
                { person: "أنتَ", form: "تَسْتَعْمِلُ", en: "you use (m)" },
                { person: "هو", form: "يَسْتَعْمِلُ", en: "he uses" },
                { person: "هي", form: "تَسْتَعْمِلُ", en: "she uses" },
                { person: "نحن", form: "نَسْتَعْمِلُ", en: "we use" },
                { person: "هم", form: "يَسْتَعْمِلونَ", en: "they use (m)" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Asking how to use the ticket machine",
          setup: "At a Cairo metro station, you can't figure out the machine.",
          lines: [
            { speaker: "أنت", l1: "عفواً، كيف أَسْتَعْمِلُ هذه الآلةَ؟", en: "Excuse me, how do I use this machine?" },
            { speaker: "موظف", l1: "اِضْغَطْ هنا، ثم اِخْتَرِ المحطةَ.", en: "Press here, then choose the station." },
            { speaker: "أنت", l1: "هل أَسْتَطيعُ الدفعَ بالبطاقة؟", en: "Can I pay by card?" },
            { speaker: "موظف", l1: "نعم، نَسْتَخْدِمُ البطاقاتِ هنا.", en: "Yes, we use cards here." },
            { speaker: "أنت", l1: "شكراً جزيلاً، ساعَدْتَني كثيراً.", en: "Thank you very much, you helped me a lot." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Lesson check",
          questions: [
            {
              q: "Which prefix marks Form X?",
              options: ["تَـ (ta-)", "اِسْتَـ (ista-)", "a doubled middle letter", "a long ā"],
              correct: 1,
            },
            {
              q: "اِسْتَعْمَلَ (istaʿmala, to use) comes from which root?",
              options: ["س-ت-ع", "ع-م-ل", "ا-س-ت", "م-ل-ا"],
              correct: 1,
            },
            {
              q: "اِسْتَطاعَ means…",
              options: ["to use", "to wait", "to be able to", "to teach"],
              correct: 2,
            },
            {
              q: "What is the everyday meaning shade of Form X?",
              options: [
                "to seek / ask for / consider",
                "to make someone do something",
                "to do something passively",
                "to do something repeatedly",
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
        q: "What is a 'root' in Arabic?",
        options: [
          "the first verb you learn",
          "a set of (usually three) consonants carrying a core meaning",
          "the longest word in a sentence",
          "the polite form of a verb",
        ],
        correct: 1,
      },
      {
        q: "Form II (faʿʿala) is recognised by…",
        options: [
          "a long ā after the first letter",
          "a doubled middle root letter (shadda)",
          "an اِسْتَـ prefix",
          "a تَـ prefix",
        ],
        correct: 1,
      },
      {
        q: "دَرَّسَ (darrasa) means…",
        options: ["to study", "to teach", "to learn", "to write"],
        correct: 1,
      },
      {
        q: "ساعَدَ (sāʿada) is which form, and what does it mean?",
        options: [
          "Form III, 'to help'",
          "Form II, 'to study'",
          "Form X, 'to use'",
          "Form V, 'to learn'",
        ],
        correct: 0,
      },
      {
        q: "تَعَلَّمَ (taʿallama) means…",
        options: ["to teach", "to learn", "to travel", "to wait"],
        correct: 1,
      },
      {
        q: "The تَـ (ta-) prefix on Form V often makes a verb…",
        options: ["causative", "reflexive (action on oneself)", "passive", "plural"],
        correct: 1,
      },
      {
        q: "Which verb is Form X?",
        options: ["دَرَّسَ", "ساعَدَ", "اِسْتَعْمَلَ", "تَكَلَّمَ"],
        correct: 2,
      },
      {
        q: "اِسْتَعْمَلَ (istaʿmala) means…",
        options: ["to wake up", "to use", "to receive", "to rent"],
        correct: 1,
      },
      {
        q: "To find the root of اِسْتَخْدَمَ you should…",
        options: [
          "keep the whole word",
          "strip اِسْتَـ and keep خ-د-م",
          "take only the first letter",
          "reverse the letters",
        ],
        correct: 1,
      },
      {
        q: "Why does recognising forms matter at B1?",
        options: [
          "you can guess meanings and look words up by root",
          "it is required for greetings",
          "it changes the alphabet",
          "it is only for poetry",
        ],
        correct: 0,
      },
    ],
  },
};
