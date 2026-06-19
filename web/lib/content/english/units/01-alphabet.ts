import type { Unit } from "../../types";

export const UNIT_ALPHABET: Unit = {
  slug: "alphabet",
  stage: 1,
  order: 1,
  icon: "🔤",
  title: "Alphabet & sounds",
  tagline: "Letter names, the schwa, silent letters, th, hard/soft c & g.",
  badge: "core",
  lessons: [
    {
      slug: "alphabet-letter-names",
      title: "The alphabet & spelling aloud",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Twenty-six letters, but the names surprise people",
          body: [
            "English has <strong>26 letters</strong>. The trouble for learners is that a letter's <em>name</em> is often nothing like the sound it makes in a word. The letter <strong>w</strong> is called \"double-u\", and <strong>h</strong> is called \"aitch\" with no h-sound at all.",
            "You spell things aloud all the time in Britain — on the phone, at the chemist, giving your name to a receptionist. So learning the letter <em>names</em> clearly is a practical skill, not just a recital.",
            "Watch the vowels especially: <strong>a</strong> = \"ay\", <strong>e</strong> = \"ee\", <strong>i</strong> = \"eye\", <strong>o</strong> = \"oh\", <strong>u</strong> = \"you\". Mixing up <em>e</em> and <em>i</em> when spelling aloud is the classic learner slip.",
          ],
          keyPoint:
            "A letter's name and its sound are different things. \"H\" is named \"aitch\" but the sound is a breathy /h/.",
        },
        {
          type: "vocab",
          heading: "Tricky letter names",
          intro: "Most letters are easy; these are the ones learners say wrong.",
          items: [
            { l1: "a", en: "the letter A", note: "Said \"ay\", rhymes with 'day'." },
            { l1: "e", en: "the letter E", note: "Said \"ee\". Don't confuse with I." },
            { l1: "i", en: "the letter I", note: "Said \"eye\", like the word 'eye'." },
            { l1: "g", en: "the letter G", note: "Said \"jee\". Don't confuse with J." },
            { l1: "j", en: "the letter J", note: "Said \"jay\"." },
            { l1: "h", en: "the letter H", note: "Said \"aitch\" — no h-sound in the name." },
            { l1: "r", en: "the letter R", note: "Said \"ar\"." },
            { l1: "w", en: "the letter W", note: "Said \"double-u\"." },
            { l1: "y", en: "the letter Y", note: "Said \"why\"." },
            { l1: "z", en: "the letter Z", note: "Said \"zed\" in Britain (\"zee\" in America)." },
          ],
        },
        {
          type: "tip",
          heading: "Double letters: say \"double\"",
          body: "When spelling a word with two of the same letter, Britons usually say <strong>\"double\"</strong> rather than the letter twice. <em>Coffee</em> is \"c-o-double-f-double-e\". <em>Llewelyn</em> starts with \"double-l\". This is normal and expected on the phone.",
          example: { l1: "How do you spell 'address'? — A-double-D-R-E-double-S.", en: "Spelling 'address' aloud, using 'double' for the repeated letters." },
        },
        {
          type: "dialogue",
          heading: "Giving your name on the phone",
          setup: "You are booking a table at a London restaurant and the staff need to spell your surname.",
          lines: [
            { speaker: "Staff", l1: "Could I take your name, please?", en: "A polite request for your name. 'Take' here means 'write down'." },
            { speaker: "You", l1: "Yes, it's Hughes.", en: "Giving your surname." },
            { speaker: "Staff", l1: "Sorry, how do you spell that?", en: "Asking you to say each letter. 'How do you spell that?' is the standard phrase." },
            { speaker: "You", l1: "H-U-G-H-E-S. Aitch for hotel.", en: "Spelling it out, then clarifying the first letter." },
            { speaker: "Staff", l1: "Lovely, thank you. And a first name?", en: "'Lovely' here just means 'fine, got it'." },
            { speaker: "You", l1: "Emma. E-double-M-A.", en: "Spelling the first name, using 'double-M'." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which letter is it?",
          questions: [
            {
              q: "Someone says the letter \"zed\". Which letter do they mean?",
              options: ["S", "Z", "C", "G"],
              correct: 1,
              fb: "In British English the letter Z is named \"zed\".",
            },
            {
              q: "Which letter is named \"aitch\"?",
              options: ["A", "H", "I", "R"],
              correct: 1,
              fb: "H is \"aitch\" — and there's no /h/ sound in the name itself.",
            },
            {
              q: "How do you say the letter W?",
              options: ["\"wuh\"", "\"vee\"", "\"double-u\"", "\"way\""],
              correct: 2,
              fb: "W is named \"double-u\", even though it never sounds like a U in words.",
            },
          ],
        },
      ],
    },
    {
      slug: "alphabet-tricky-sounds",
      title: "Tricky sounds: th, the schwa & silent letters",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The sounds that aren't on the page",
          body: [
            "English spelling and English sound parted ways centuries ago. Whole letters go <strong>silent</strong>, the same letters make different sounds, and a tiny, lazy vowel called the <strong>schwa</strong> hides inside nearly every long word.",
            "There are <strong>two TH sounds</strong>: a soft, voiceless one in <em>think</em> and <em>bath</em>, and a buzzy, voiced one in <em>this</em> and <em>mother</em>. Many learners replace both with /t/, /d/, /s/ or /z/ — training your tongue between the teeth fixes it.",
            "Don't fight the silent letters; just learn the common patterns. <strong>kn-</strong> (knife, knee), <strong>-mb</strong> (comb, thumb), <strong>wr-</strong> (write, wrong), and the silent <strong>h</strong> in <em>hour</em> and <em>honest</em>.",
          ],
          keyPoint:
            "The schwa is the weak \"uh\" in unstressed syllables — the 'a' in <em>about</em>, the 'er' in <em>teacher</em>. It is the most common vowel sound in English.",
        },
        {
          type: "pronounce",
          heading: "The two TH sounds",
          intro: "Put the tip of your tongue just behind your top teeth. Voiceless = no buzz; voiced = your throat buzzes.",
          items: [
            { l1: "think", en: "to use your mind", tip: "Voiceless TH — soft air, no buzz in the throat." },
            { l1: "three", en: "the number 3", tip: "Voiceless TH. Not 'tree' and not 'free'." },
            { l1: "bath", en: "a wash in a tub", tip: "Voiceless TH at the end. Southern British: 'bahth'." },
            { l1: "this", en: "the thing here", tip: "Voiced TH — feel the buzz before the 's'." },
            { l1: "mother", en: "your female parent", tip: "Voiced TH in the middle, like 'father', 'brother'." },
            { l1: "weather", en: "rain, sun, cloud", tip: "Voiced TH. A very British topic of small talk." },
          ],
        },
        {
          type: "vocab",
          heading: "Common silent letters",
          intro: "The crossed-out letter is written but not pronounced.",
          items: [
            { l1: "knife", en: "a tool for cutting", note: "Silent K. Just say \"nife\"." },
            { l1: "knee", en: "the joint in your leg", note: "Silent K: \"nee\"." },
            { l1: "comb", en: "a tool for your hair", note: "Silent B: \"cohm\"." },
            { l1: "thumb", en: "the short, thick finger", note: "Silent B: \"thum\"." },
            { l1: "write", en: "to put words on paper", note: "Silent W: \"rite\"." },
            { l1: "hour", en: "sixty minutes", note: "Silent H: \"our\". Takes 'an', not 'a'." },
            { l1: "honest", en: "truthful", note: "Silent H: \"onest\"." },
            { l1: "island", en: "land surrounded by sea", note: "Silent S: \"eye-land\"." },
          ],
        },
        {
          type: "tip",
          heading: "Hard and soft C and G",
          body: "Before <strong>e, i</strong> or <strong>y</strong>, the letters <strong>c</strong> and <strong>g</strong> usually go <em>soft</em>: <em>city</em> sounds like /s/, <em>gym</em> like /j/. Before <strong>a, o, u</strong> they go <em>hard</em>: <em>cat</em> /k/, <em>go</em> /g/. It's not a perfect rule (<em>get</em>, <em>give</em> stay hard), but it explains most words.",
          example: { l1: "city, cent — but cat, cost", en: "Soft C before e/i; hard C before a/o." },
        },
        {
          type: "multipleChoice",
          heading: "Hard or soft?",
          questions: [
            {
              q: "In which word is the C \"soft\" (an /s/ sound)?",
              options: ["cup", "circle", "cold", "cat"],
              correct: 1,
              fb: "\"Circle\" — C before I is soft. The second C (before L) is hard: \"sir-kul\".",
            },
            {
              q: "Which word has a SILENT letter?",
              options: ["finger", "knee", "happy", "table"],
              correct: 1,
              fb: "\"Knee\" has a silent K — just \"nee\".",
            },
            {
              q: "Which word uses the VOICED (buzzy) TH?",
              options: ["think", "bath", "this", "three"],
              correct: 2,
              fb: "\"This\" is voiced — you feel a buzz. The others are voiceless.",
            },
            {
              q: "The 'a' in \"about\" is an example of…",
              options: ["a long vowel", "the schwa", "a silent letter", "a hard C"],
              correct: 1,
              fb: "It's the schwa — the weak \"uh\" of unstressed syllables.",
            },
          ],
        },
      ],
    },
    {
      slug: "alphabet-stress-connected-speech",
      title: "Word stress & connected speech",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "English has a beat",
          body: [
            "Every English word of more than one syllable has <strong>one stressed syllable</strong> — said louder, longer and higher. <em>BA-na-na</em>, not <em>ba-NA-na</em>. Put the stress in the wrong place and a fluent speaker may simply not understand you.",
            "Around the stressed syllable, the others shrink — that's where the schwa lives. <em>Photograph</em> stresses the first syllable; <em>photographer</em> jumps the stress to the second, and the vowels rearrange completely.",
            "In normal speech, words also <strong>run together</strong>. \"What do you want?\" comes out as \"Whaddya want?\" This is called connected speech — you don't have to do it, but you must learn to <em>hear</em> it.",
          ],
          keyPoint:
            "Stress the right syllable and reduce the rest to schwa. That single habit makes you far easier to understand than getting every vowel 'correct'.",
        },
        {
          type: "pronounce",
          heading: "Where's the stress?",
          intro: "The CAPITAL syllable is the stressed one. Say it bigger; let the others fall away.",
          items: [
            { l1: "banana", en: "the yellow fruit", tip: "ba-NA-na — stress in the middle." },
            { l1: "computer", en: "the machine you type on", tip: "com-PU-ter — stress on the second syllable." },
            { l1: "photograph", en: "a picture from a camera", tip: "PHO-to-graph — stress on the first." },
            { l1: "photographer", en: "a person who takes photos", tip: "pho-TO-grapher — the stress moves!" },
            { l1: "umbrella", en: "what you hold up in the rain", tip: "um-BREL-la — very useful word in Britain." },
            { l1: "tomato", en: "the red salad fruit", tip: "to-MA-to — British 'mah', not 'may'." },
          ],
        },
        {
          type: "tip",
          heading: "Two words, one blur",
          body: "In relaxed British speech, little words blur into their neighbours. <em>Cup of tea</em> becomes \"cuppa tea\". <em>Going to</em> becomes \"gonna\". <em>Do you</em> becomes \"d'you\". You needn't speak this way yourself, but recognising it is the difference between following a conversation and being lost.",
          example: { l1: "Would you like a cup of tea? → \"Wouldja like a cuppa tea?\"", en: "How a polite, fully-spelled question actually sounds at speed." },
        },
        {
          type: "orderWords",
          heading: "Build the question",
          intro: "Put the words in order to make a natural spoken question.",
          items: [
            { tokens: ["How", "do", "you", "spell", "that"], en: "How do you spell that?" },
            { tokens: ["Could", "you", "say", "that", "again"], en: "Could you say that again?" },
            { tokens: ["Would", "you", "like", "a", "cup", "of", "tea"], en: "Would you like a cup of tea?" },
          ],
        },
        {
          type: "translate",
          heading: "Say it naturally",
          direction: "en-to-l1",
          prompt: "On the phone, ask the person to spell their surname for you, politely.",
          reference: "How do you spell your surname?",
          hint: "\"How do you spell…?\" is the fixed phrase. 'Surname' is the British word for 'last name'.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Where is the stress in \"computer\"?",
              options: ["COM-pu-ter", "com-PU-ter", "com-pu-TER", "all equal"],
              correct: 1,
            },
            {
              q: "\"Cuppa tea\" is a relaxed, run-together version of…",
              options: ["a cup tea", "cup of the tea", "a cup of tea", "cap of tea"],
              correct: 2,
            },
            {
              q: "When you move from \"photograph\" to \"photographer\", the stress…",
              options: ["stays the same", "disappears", "moves to a new syllable", "splits in two"],
              correct: 2,
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
        q: "In British English, the letter Z is named…",
        options: ["\"zee\"", "\"zed\"", "\"zod\"", "\"zid\""],
        correct: 1,
      },
      {
        q: "Which letter is named \"aitch\"?",
        options: ["A", "H", "R", "Y"],
        correct: 1,
      },
      {
        q: "Which word contains a SILENT letter?",
        options: ["table", "knife", "happy", "river"],
        correct: 1,
      },
      {
        q: "The word \"hour\" begins with…",
        options: ["a clear /h/ sound", "a silent H, so it sounds like 'our'", "a /w/ sound", "two syllables of stress"],
        correct: 1,
      },
      {
        q: "Which word uses the VOICED (buzzy) TH?",
        options: ["think", "bath", "three", "mother"],
        correct: 3,
      },
      {
        q: "Before e or i, the letter C is usually…",
        options: ["silent", "hard (/k/)", "soft (/s/)", "doubled"],
        correct: 2,
      },
      {
        q: "The schwa is best described as…",
        options: [
          "a long stressed vowel",
          "the weak \"uh\" in unstressed syllables",
          "a silent consonant",
          "the name of the letter R",
        ],
        correct: 1,
      },
      {
        q: "When spelling \"coffee\" aloud, a Briton is likely to say…",
        options: ["c-o-f-f-e-e", "c-o-double-f-double-e", "see-oh-eff", "k-o-f-i"],
        correct: 1,
      },
      {
        q: "Where is the stress in \"banana\"?",
        options: ["BA-na-na", "ba-NA-na", "ba-na-NA", "no stress"],
        correct: 1,
      },
      {
        q: "\"How do you spell that?\" is used to…",
        options: [
          "ask someone's age",
          "ask for each letter of a word",
          "say goodbye",
          "order a coffee",
        ],
        correct: 1,
      },
    ],
  },
};
