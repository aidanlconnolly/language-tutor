import type { Unit } from "../../types";

export const UNIT_PRONUNCIATION: Unit = {
  slug: "pronunciation",
  stage: 1,
  order: 1,
  icon: "🔤",
  title: "Pronunciation & sounds",
  tagline: "Vowels, ñ, rr, ll/y, accent marks — read anything on sight.",
  badge: "core",
  lessons: [
    {
      slug: "pronunciation-vowels",
      title: "Vowels and basic sounds",
      estMinutes: 7,
      pages: [
        {
          type: "intro",
          heading: "Five pure vowels — always clear",
          body: [
            "Spanish has five vowels — <strong>a, e, i, o, u</strong> — and each one sounds the same every time. Unlike English, they never change to a vague 'uh'. Once you learn them, you can read almost any Spanish word out loud.",
            "This consistency is Spanish's great gift to learners: spelling and pronunciation are nearly one-to-one. If you can say the vowels and a few key consonants, you can read anything.",
          ],
          tip: {
            label: "The promise",
            body: "Master the five vowels and a handful of special sounds (ñ, rr, ll, j) and you can read Spanish on sight — including words you've never seen.",
          },
        },
        {
          type: "vocab",
          heading: "The five vowels",
          intro: "Short and clean — never glide, never swallow.",
          items: [
            { l1: "a", en: "like 'a' in 'father'", note: "casa, hablar, gracias" },
            { l1: "e", en: "like 'e' in 'bed'", note: "mesa, bien, leche" },
            { l1: "i", en: "like 'ee' in 'see'", note: "sí, vivir, libro" },
            { l1: "o", en: "like 'o' in 'more'", note: "hola, como, poco" },
            { l1: "u", en: "like 'oo' in 'food'", note: "tú, uno, mucho" },
          ],
        },
        {
          type: "tip",
          heading: "The letter h is always silent",
          body: "Unlike English, Spanish <strong>h</strong> makes no sound at all. <em>Hola</em> starts with the 'o' sound. <em>Hablar</em> starts with 'a'. The h is purely a spelling convention.",
          example: { l1: "Hola, ¿cómo estás?", en: "Hello, how are you? (the h is silent — sounds like 'Ola')" },
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "How is the 'i' in 'vivir' pronounced?",
              options: ["Like 'i' in 'sit'", "Like 'ee' in 'see'", "Like 'eye'", "Silent"],
              correct: 1,
              fb: "Spanish 'i' is always 'ee'. vivir = vee-VEER.",
            },
            {
              q: "How do you pronounce 'hola'?",
              options: ["HOH-la with a strong H", "OH-la (h is silent)", "WHO-la", "HO-la like English"],
              correct: 1,
              fb: "The h is always silent in Spanish. Hola sounds like 'oh-la'.",
            },
            {
              q: "Which vowel sounds like 'oo' in 'food'?",
              options: ["a", "e", "o", "u"],
              correct: 3,
              fb: "Spanish u is always 'oo' — like in 'food'. Never like English 'you'.",
            },
          ],
        },
      ],
    },
    {
      slug: "pronunciation-special",
      title: "Special letters: ñ, rr, j, ll",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Four sounds that don't exist in English",
          body: [
            "Most Spanish letters sound like their English counterparts. But four special sounds set Spanish apart: <strong>ñ</strong> (like 'ny' in canyon), <strong>rr</strong> (trilled r), <strong>j</strong> (a breathy 'h'), and <strong>ll</strong> (like 'y' in yes in modern Spanish).",
            "These are worth practising early — they appear constantly.",
          ],
          keyPoint: "ñ = ny · rr = trill · j = breathy h · ll = y",
        },
        {
          type: "vocab",
          heading: "Hear the special sounds",
          items: [
            { l1: "mañana", en: "tomorrow / morning", note: "ñ = 'ny' — ma-NYA-na" },
            { l1: "señor", en: "Mr. / sir", note: "se-NYOR" },
            { l1: "perro", en: "dog", note: "rr = trill — PEH-rroh" },
            { l1: "arroz", en: "rice", note: "a-RROHS — one of the most common rr words" },
            { l1: "jardín", en: "garden", note: "j = breathy h — har-DEEN" },
            { l1: "trabajar", en: "to work", note: "tra-ba-HAR — j sounds like a strong h" },
            { l1: "llamar", en: "to call", note: "ll = y — ya-MAR" },
            { l1: "llegar", en: "to arrive", note: "ye-GAR" },
          ],
        },
        {
          type: "tip",
          heading: "Accent marks change the stress",
          body: "Spanish uses written accents (á, é, í, ó, ú) to show which syllable to stress when it breaks the default rule. Default rule: stress the second-to-last syllable. If the word ends in a vowel, n, or s, that's the natural stress — no accent needed. An accent marks an exception.",
          example: { l1: "café, estación, inglés", en: "café (stress on é), estación (stress on ción), inglés (stress on és)" },
        },
        {
          type: "listen",
          heading: "Pick what you heard",
          items: [
            { l1: "mañana", en: "tomorrow", options: ["manana", "mañana", "mannana", "mayana"], correct: 1 },
            { l1: "perro", en: "dog", options: ["pero", "perro", "pero", "pérro"], correct: 1 },
            { l1: "jardín", en: "garden", options: ["jardín", "hardin", "yardin", "gardin"], correct: 0 },
            { l1: "llegar", en: "to arrive", options: ["llegar", "lyegar", "yegar", "llegar"], correct: 0 },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Sound it out",
          questions: [
            {
              q: "How is 'j' pronounced in Spanish?",
              options: ["Like English 'j' in 'jump'", "Like a breathy/guttural 'h'", "Silent", "Like 'y'"],
              correct: 1,
              fb: "Spanish j is a strong breathy sound from the back of the throat — like a forceful h. trabajar = tra-ba-HAR.",
            },
            {
              q: "What does the accent in 'café' tell you?",
              options: ["The word is French", "Stress the é at the end", "The e is silent", "The word has two syllables"],
              correct: 1,
              fb: "The accent on é tells you to stress that syllable: ca-FÉ. Without it you'd stress the first syllable by default.",
            },
            {
              q: "How does 'll' sound in modern Spanish?",
              options: ["Like English 'll' in 'full'", "Like 'ly'", "Like 'y' in 'yes'", "Like a trill"],
              correct: 2,
              fb: "In modern Spain and most of Latin America, ll sounds like English 'y'. llamar = ya-MAR.",
            },
          ],
        },
      ],
    },
    {
      slug: "pronunciation-reading",
      title: "Reading Spanish out loud",
      estMinutes: 6,
      pages: [
        {
          type: "intro",
          heading: "c and g — the two chameleons",
          body: [
            "Like Italian, Spanish c and g change sound depending on the next vowel.",
            "<strong>c</strong> before a/o/u = 'k' (casa, como). <strong>c</strong> before e/i = 'th' in Spain / 's' in Latin America (centro, ciudad).",
            "<strong>g</strong> before a/o/u = hard g (gato, gordo). <strong>g</strong> before e/i = breathy h (gente, gimnasio).",
          ],
          keyPoint: "c/g before a/o/u are hard. c/g before e/i soften (c→th/s, g→h).",
        },
        {
          type: "vocab",
          heading: "c and g in action",
          items: [
            { l1: "casa", en: "house", note: "KA-sa — hard c before a" },
            { l1: "centro", en: "centre", note: "THEN-tro (Spain) / SEN-tro (Lat Am) — soft c before e" },
            { l1: "ciudad", en: "city", note: "thyu-DAD / syu-DAD" },
            { l1: "gato", en: "cat", note: "GA-to — hard g before a" },
            { l1: "gente", en: "people", note: "HEN-te — g before e = breathy h" },
            { l1: "gimnasio", en: "gym", note: "him-NA-syo" },
          ],
        },
        {
          type: "pronounce",
          heading: "Practise saying these",
          items: [
            { l1: "Buenos días", en: "Good morning", tip: "BWEH-nos DEE-as" },
            { l1: "Gracias", en: "Thank you", tip: "GRA-thyas (Spain) / GRA-syas (Lat Am)" },
            { l1: "Por favor", en: "Please", tip: "por fa-VOR" },
            { l1: "¿Cómo estás?", en: "How are you?", tip: "KO-mo es-TAS" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Final check",
          questions: [
            {
              q: "How is 'c' pronounced before 'e' in Spain?",
              options: ["Like 'k'", "Like 'th' in 'think'", "Like 's'", "Silent"],
              correct: 1,
              fb: "In Spain, ce/ci = 'th'. In Latin America it's 's'. Both are correct.",
            },
            {
              q: "How is 'gente' (people) pronounced?",
              options: ["GEN-te (hard g)", "HEN-te (breathy h)", "YEN-te", "JEN-te"],
              correct: 1,
              fb: "g before e/i = breathy h. gente = HEN-te.",
            },
            {
              q: "Where does the stress fall in 'hablar' (to speak)?",
              options: ["HA-blar", "ha-BLAR", "Equal", "On the silent h"],
              correct: 1,
              fb: "Default rule: second-to-last syllable. ha-BLAR. No accent needed because it ends in 'r' (consonant other than n/s).",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "How is the 'u' in 'uno' pronounced?", options: ["Like 'you'", "Like 'oo' in food", "Like 'uh'", "Silent"], correct: 1 },
      { q: "The letter 'h' in Spanish is…", options: ["Pronounced like English h", "Always silent", "Trilled", "Pronounced 'j'"], correct: 1 },
      { q: "How is 'ñ' in 'mañana' pronounced?", options: ["Like 'n'", "Like 'ny' in canyon", "Like 'ng'", "Silent"], correct: 1 },
      { q: "How is 'j' pronounced in 'jardín'?", options: ["Like English j", "Like 'y'", "Like a strong breathy h", "Like 'g'"], correct: 2 },
      { q: "How does 'll' sound in modern Spanish?", options: ["Like 'l'", "Like 'ly'", "Like 'y' in yes", "Trilled"], correct: 2 },
      { q: "What does a written accent (á, é…) mark?", options: ["A foreign word", "A stressed syllable breaking the default rule", "A silent vowel", "Plural form"], correct: 1 },
      { q: "How is 'c' before 'e' in Spain pronounced?", options: ["Like 'k'", "Like 'th'", "Like 's'", "Silent"], correct: 1 },
      { q: "How is 'g' in 'gente' pronounced?", options: ["Hard g", "Breathy h", "Like 'j' in jump", "Like 'y'"], correct: 1 },
      { q: "Which word has a trilled rr?", options: ["pero (but)", "perro (dog)", "hora (hour)", "caro (expensive)"], correct: 1 },
      { q: "Default stress in Spanish falls on…", options: ["The first syllable", "The last syllable", "The second-to-last syllable", "Wherever the vowel is"], correct: 2 },
    ],
  },
};
