import type { Unit } from "../../types";

export const UNIT_ALPHABET: Unit = {
  slug: "alphabet",
  stage: 1,
  order: 1,
  icon: "🔤",
  title: "Alphabet & sounds",
  tagline: "ä ö ü ß, ch & sch, w=v, z=ts, ei vs ie, the German r.",
  badge: "core",
  lessons: [
    {
      slug: "alphabet-letters",
      title: "The alphabet & spelling aloud",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "26 letters, plus four extras",
          body: [
            "German uses the same 26 Latin letters as English, plus four special characters: <strong>ä, ö, ü</strong> (the umlauts) and <strong>ß</strong> (the Eszett or 'sharp s').",
            "Most letters look familiar but several are <em>said</em> differently. The good news: German spelling is highly regular — once you know the rules, you can read almost any word aloud correctly on the first try.",
            "Three letter-names worth fixing now, because you'll spell your name and email with them constantly: <strong>e</strong> sounds like English 'ay', <strong>i</strong> sounds like 'ee', and <strong>j</strong> is called 'yot'.",
          ],
          keyPoint:
            "German reads as it's written. Learn the sound rules and pronunciation stops being guesswork.",
        },
        {
          type: "vocab",
          heading: "Letter names that trip up English speakers",
          intro: "These are the letter names you'll say when spelling out loud.",
          items: [
            { l1: "a", en: "'ah'", note: "like the a in 'father'" },
            { l1: "e", en: "'ay'", note: "not 'ee' — this is the big one" },
            { l1: "i", en: "'ee'", note: "the opposite of what English does" },
            { l1: "j", en: "'yot'", note: "the letter j; the sound is English 'y'" },
            { l1: "v", en: "'fau'", note: "the letter is named 'fau'; usually sounds like 'f'" },
            { l1: "w", en: "'veh'", note: "sounds like English 'v'" },
            { l1: "y", en: "'üpsilon'", note: "rare; mostly in foreign words" },
            { l1: "z", en: "'tsett'", note: "the sound is 'ts'" },
          ],
        },
        {
          type: "tip",
          heading: "Spelling your name: the magic words",
          body: "To spell aloud, Germans say letter names and use <strong>Doppel-</strong> for double letters: <em>Doppel-l</em> = 'double l'. For a capital they say <strong>groß</strong> ('big') and for lowercase <strong>klein</strong>. To check, ask <em>Wie schreibt man das?</em> — 'How do you write that?'",
          example: { l1: "Mein Name ist Anna — A, Doppel-n, a.", en: "My name is Anna — A, double-n, a." },
        },
        {
          type: "dialogue",
          heading: "Spelling a name at a Berlin hostel",
          setup: "You're checking in and the receptionist needs your surname.",
          lines: [
            { speaker: "Rezeption", l1: "Wie ist Ihr Nachname, bitte?", en: "What's your surname, please?" },
            { speaker: "Du", l1: "Schmidt.", en: "Schmidt." },
            { speaker: "Rezeption", l1: "Können Sie das buchstabieren?", en: "Can you spell that?" },
            { speaker: "Du", l1: "Ja: S, C, H, M, I, D, T.", en: "Yes: S, C, H, M, I, D, T." },
            { speaker: "Rezeption", l1: "Danke. Alles klar.", en: "Thanks. All good." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Letter-name check",
          questions: [
            {
              q: "In German, the letter 'w' sounds like which English sound?",
              options: ["w (as in 'water')", "v (as in 'van')", "f (as in 'fan')", "b (as in 'bat')"],
              correct: 1,
              fb: "German w = English v. So 'Wasser' starts like 'vasser'.",
            },
            {
              q: "The German letter 'e' is named…",
              options: ["'ee'", "'ay'", "'eh'", "'uh'"],
              correct: 1,
              fb: "German 'e' is named 'ay' — the reverse of the English 'i', which is 'ee'.",
            },
            {
              q: "How would you say 'double' when spelling 'Doppel-n'?",
              options: ["zwei", "Doppel", "groß", "klein"],
              correct: 1,
              fb: "Doppel- prefixes a doubled letter: Doppel-n = 'nn'.",
            },
          ],
        },
      ],
    },
    {
      slug: "alphabet-umlauts-consonants",
      title: "Umlauts, ß, ch, sch & the w/v/z sounds",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The sounds that make German sound German",
          body: [
            "The <strong>umlauts</strong> ä, ö, ü change a vowel's sound. <strong>ä</strong> ≈ the 'e' in 'bed'. <strong>ö</strong> is like saying 'eh' with rounded lips (no English equivalent). <strong>ü</strong> is 'ee' with rounded lips.",
            "<strong>ß</strong> (Eszett) is just a sharp, voiceless 's' — never a 'b' or 'B'. <em>Straße</em> is said 'shtrah-sse'. It only appears after long vowels or diphthongs; after short vowels you write <strong>ss</strong> instead (compare <em>Straße</em> vs <em>Fluss</em>).",
            "<strong>ch</strong> has two flavours: a soft hiss after i/e (the <em>ich</em>-sound) and a throaty rasp after a/o/u (the <em>ach</em>-sound). <strong>sch</strong> is simply English 'sh'.",
            "Finally the consonant swaps: <strong>w</strong> = English 'v', <strong>v</strong> usually = 'f', <strong>z</strong> = 'ts', and the German <strong>r</strong> is made in the back of the throat (or lightly rolled).",
          ],
          keyPoint:
            "ß = sharp 's' (after long vowels); ss after short. w='v', v='f', z='ts'.",
        },
        {
          type: "pronounce",
          heading: "Umlauts and ß out loud",
          intro: "Tap each word to hear it, then repeat. Watch your lips on ö and ü.",
          items: [
            { l1: "schön", en: "beautiful", tip: "ö = 'eh' with rounded lips" },
            { l1: "Tür", en: "door", tip: "ü = 'ee' with rounded lips" },
            { l1: "Mädchen", en: "girl", tip: "ä ≈ 'e' in 'bed'" },
            { l1: "Straße", en: "street", tip: "ß = sharp 's': 'shtrah-sse'" },
            { l1: "Fuß", en: "foot", tip: "long u, then sharp s" },
            { l1: "groß", en: "big", tip: "long o, then sharp s" },
          ],
        },
        {
          type: "pronounce",
          heading: "ch, sch and the consonant swaps",
          intro: "Notice the two different 'ch' sounds, and how w, v, z behave.",
          items: [
            { l1: "ich", en: "I", tip: "soft 'ich'-sound after i" },
            { l1: "Buch", en: "book", tip: "throaty 'ach'-sound after u" },
            { l1: "Tisch", en: "table", tip: "sch = English 'sh'" },
            { l1: "Wasser", en: "water", tip: "w = English 'v': 'vasser'" },
            { l1: "Vater", en: "father", tip: "v = 'f': 'fah-ter'" },
            { l1: "Zeit", en: "time", tip: "z = 'ts': 'tsait'" },
          ],
        },
        {
          type: "tip",
          heading: "No umlaut on the keyboard? Spell it out",
          body: "If you can't type ä ö ü ß, the accepted workaround is <strong>ae, oe, ue, ss</strong>. <em>Müller</em> becomes <em>Mueller</em>, <em>Straße</em> becomes <em>Strasse</em>. Germans recognise this instantly — it's how many surnames are romanised on passports.",
          example: { l1: "Schön → Schoen, Fuß → Fuss", en: "beautiful → ; foot →" },
        },
        {
          type: "multipleChoice",
          heading: "Sound it out",
          questions: [
            {
              q: "The word 'Zeit' (time) begins with which sound?",
              options: ["z (as in 'zoo')", "ts (as in 'cats')", "s (as in 'see')", "sh"],
              correct: 1,
              fb: "German z is always 'ts'. Zeit = 'tsait'.",
            },
            {
              q: "After a short vowel, the sharp-s sound is spelled…",
              options: ["ß", "ss", "z", "sch"],
              correct: 1,
              fb: "Short vowel → ss (Fluss). Long vowel/diphthong → ß (Straße).",
            },
            {
              q: "'sch' in 'Tisch' sounds like…",
              options: ["sk", "sh", "ch (as in 'church')", "s"],
              correct: 1,
              fb: "sch = English 'sh'. Tisch = 'tish'.",
            },
            {
              q: "Which word uses the throaty 'ach'-sound rather than the soft 'ich'-sound?",
              options: ["ich", "Milch", "Buch", "China"],
              correct: 2,
              fb: "After a/o/u the ch is throaty: Buch. After i/e it's soft: ich.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "The street is beautiful.",
          reference: "Die Straße ist schön.",
          hint: "Watch the ß in Straße and the ö in schön.",
        },
      ],
    },
    {
      slug: "alphabet-vowels-stress",
      title: "ei vs ie, vowel length & word stress",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Two vowel rules that fix half your reading",
          body: [
            "Two vowel pairs flip what English speakers expect. <strong>ei</strong> is pronounced like English 'eye', and <strong>ie</strong> is a long 'ee'. The simple rule: <strong>ei = 'eye', ie = 'ee'</strong>. So <em>Wein</em> sounds like 'vine' but <em>Bier</em> sounds like 'beer'.",
            "Vowel <strong>length</strong> matters. A vowel is long before a single consonant or when doubled (<em>Beet</em>, <em>kam</em>), and before <em>h</em> (the h is silent and just marks length: <em>Bahn</em>, <em>sehen</em>). A vowel is short before a doubled consonant (<em>Bett</em>, <em>Mann</em>).",
            "<strong>Word stress</strong> in native German words usually falls on the <em>first</em> syllable: <em>AR</em>beit, <em>DEUTSCH</em>land. Many prefixes (be-, ge-, ver-, ent-) are unstressed, so the stress lands on the root: be<em>KOMM</em>en.",
          ],
          keyPoint: "ei = 'eye', ie = 'ee'. A silent h after a vowel just makes it long.",
        },
        {
          type: "pronounce",
          heading: "ei vs ie — hear the difference",
          intro: "These pairs are minimal — only the vowel order changes.",
          items: [
            { l1: "Wein", en: "wine", tip: "ei = 'eye' → 'vine'" },
            { l1: "Bier", en: "beer", tip: "ie = 'ee' → 'beer'" },
            { l1: "drei", en: "three", tip: "ei = 'eye' → 'dry'" },
            { l1: "vier", en: "four", tip: "ie = 'ee' → 'feer'" },
            { l1: "mein", en: "my", tip: "ei = 'eye' → 'mine'" },
            { l1: "die", en: "the (f.)", tip: "ie = 'ee' → 'dee'" },
          ],
        },
        {
          type: "pronounce",
          heading: "Long vs short vowels & first-syllable stress",
          intro: "Notice the silent h marking length, and where the stress falls.",
          items: [
            { l1: "Bahnhof", en: "train station", tip: "silent h → long a; stress on BAHN" },
            { l1: "sehen", en: "to see", tip: "silent h → long e: 'zay-en'" },
            { l1: "Mann", en: "man", tip: "double n → short a" },
            { l1: "Arbeit", en: "work", tip: "stress the first syllable: AR-beit" },
            { l1: "Deutschland", en: "Germany", tip: "stress on DEUTSCH" },
            { l1: "bekommen", en: "to receive", tip: "unstressed be-; stress on KOMM" },
          ],
        },
        {
          type: "fillBlank",
          heading: "ei or ie?",
          intro: "Fill the gap so the word is spelled (and sounds) correctly.",
          items: [
            {
              template: "der W___n (wine)",
              answer: "ei",
              en: "the wine",
              options: ["ei", "ie"],
            },
            {
              template: "das B___r (beer)",
              answer: "ie",
              en: "the beer",
              options: ["ei", "ie"],
            },
            {
              template: "dr___ (three)",
              answer: "ei",
              en: "three",
              options: ["ei", "ie"],
            },
            {
              template: "v___r (four)",
              answer: "ie",
              en: "four",
              options: ["ei", "ie"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Stress & length check",
          questions: [
            {
              q: "Where does the stress fall in 'Bahnhof'?",
              options: ["BAHN-hof", "bahn-HOF", "neither — both equal", "on the h"],
              correct: 0,
              fb: "Native German words stress the first syllable: BAHN-hof.",
            },
            {
              q: "What does the silent 'h' in 'sehen' do?",
              options: [
                "Adds a breathy sound",
                "Marks the preceding vowel as long",
                "Marks it as short",
                "Nothing at all",
              ],
              correct: 1,
              fb: "An h after a vowel is silent and signals a long vowel.",
            },
            {
              q: "Which word has a SHORT vowel?",
              options: ["Bahn", "kam", "Mann", "Beet"],
              correct: 2,
              fb: "Doubled consonant (nn) → short vowel. Mann has a short a.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Three beers and one wine, please.",
          reference: "Drei Bier und ein Wein, bitte.",
          hint: "Bier with 'ie' = 'ee'; Wein with 'ei' = 'eye'. Beer stays singular here.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'ei' is pronounced like the English word…",
              options: ["'ee'", "'eye'", "'ay'", "'oy'"],
              correct: 1,
            },
            {
              q: "'ie' is pronounced like…",
              options: ["'eye'", "'ee'", "'ay'", "'ih'"],
              correct: 1,
            },
            {
              q: "A vowel before a doubled consonant (e.g. 'Bett') is…",
              options: ["long", "short", "silent", "stressed extra hard"],
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
        q: "Which four extra characters does German add to the Latin alphabet?",
        options: ["á é í ó", "ä ö ü ß", "ç ñ å ø", "ä ë ï ö"],
        correct: 1,
      },
      {
        q: "The German letter 'w' is pronounced like English…",
        options: ["w", "v", "f", "b"],
        correct: 1,
      },
      {
        q: "The German letter 'z' is pronounced…",
        options: ["z (as in 'zoo')", "ts (as in 'cats')", "s", "j"],
        correct: 1,
      },
      {
        q: "'ß' represents which sound?",
        options: ["a 'b'", "a sharp/voiceless 's'", "a 'z'", "a 'sh'"],
        correct: 1,
      },
      {
        q: "After a SHORT vowel, the sharp-s sound is written…",
        options: ["ß", "ss", "z", "sch"],
        correct: 1,
      },
      {
        q: "'ei' as in 'Wein' is pronounced like…",
        options: ["'ee'", "'eye'", "'ay'", "'oo'"],
        correct: 1,
      },
      {
        q: "'ie' as in 'Bier' is pronounced like…",
        options: ["'eye'", "'ee'", "'ay'", "'ih'"],
        correct: 1,
      },
      {
        q: "'sch' (as in 'Tisch') sounds like English…",
        options: ["sk", "sh", "ch (church)", "s"],
        correct: 1,
      },
      {
        q: "A silent 'h' after a vowel (as in 'Bahn') signals…",
        options: ["a short vowel", "a long vowel", "extra stress", "a separate syllable"],
        correct: 1,
      },
      {
        q: "In native German words, word stress usually falls on the…",
        options: ["last syllable", "first syllable", "middle syllable", "prefix"],
        correct: 1,
      },
    ],
  },
};
