import type { Unit } from "../../types";

export const UNIT_GREETINGS: Unit = {
  slug: "greetings",
  stage: 1,
  order: 2,
  icon: "👋",
  title: "Greetings & politeness",
  tagline: "Hola, buenos días, ¿cómo estás? — and when to use tú vs usted.",
  badge: "core",
  lessons: [
    {
      slug: "greetings-basic",
      title: "Saying hello and goodbye",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Greetings change with the time of day",
          body: [
            "Spanish has different greetings for morning, afternoon, and evening. <em>Hola</em> works any time — it's casual and friendly. For slightly more formal or time-specific greetings, use the buenos/buenas forms.",
            "Goodbyes range from the very casual <em>adiós</em> to the warm <em>hasta luego</em> (until later) and <em>hasta mañana</em> (until tomorrow).",
          ],
          tip: {
            label: "Buenos vs buenas",
            body: "Buenos días (morning), buenas tardes (afternoon), buenas noches (evening/night). The adjective matches the gender of the noun: días is masculine, tardes and noches are feminine.",
          },
        },
        {
          type: "vocab",
          heading: "Essential greetings",
          items: [
            { l1: "Hola", en: "Hello / Hi", note: "Casual, any time of day" },
            { l1: "Buenos días", en: "Good morning", note: "Until around 12–1pm" },
            { l1: "Buenas tardes", en: "Good afternoon", note: "From around 2pm to dusk" },
            { l1: "Buenas noches", en: "Good evening / Good night", note: "After dark — also used to say goodnight" },
            { l1: "Adiós", en: "Goodbye", note: "Somewhat final — not for 'see you later'" },
            { l1: "Hasta luego", en: "Goodbye / See you later", note: "Most common farewell" },
            { l1: "Hasta mañana", en: "See you tomorrow", note: "" },
            { l1: "Hasta pronto", en: "See you soon", note: "" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "Which greeting do you use in the afternoon?",
              options: ["Buenos días", "Buenas tardes", "Buenas noches", "Adiós"],
              correct: 1,
              fb: "Buenas tardes = good afternoon. Días = morning, noches = evening.",
            },
            {
              q: "'Hasta luego' literally means…",
              options: ["Goodbye forever", "Until later", "Good night", "See you tomorrow"],
              correct: 1,
              fb: "Hasta = until, luego = later. The most common everyday farewell.",
            },
            {
              q: "Why is it 'buenas tardes' but 'buenos días'?",
              options: ["Random exception", "Tardes is feminine, días is masculine", "Tardes is plural", "Regional variation"],
              correct: 1,
              fb: "Adjectives agree with the noun's gender. día (day) is masculine → buenos. tarde (afternoon) is feminine → buenas.",
            },
          ],
        },
        {
          type: "dialogue",
          heading: "A quick hello at a café in Madrid",
          setup: "You step into a busy café mid-morning to grab a coffee.",
          lines: [
            { speaker: "Tú", l1: "¡Buenos días!", en: "Good morning!" },
            { speaker: "Camarero", l1: "Buenos días. ¿Qué le pongo?", en: "Good morning. What can I get you?" },
            { speaker: "Tú", l1: "Un café con leche, por favor.", en: "A coffee with milk, please." },
            { speaker: "Camarero", l1: "Marchando. Aquí tiene.", en: "Coming right up. Here you go." },
            { speaker: "Tú", l1: "Gracias. ¡Hasta luego!", en: "Thank you. See you later!" },
            { speaker: "Camarero", l1: "A usted. ¡Que vaya bien!", en: "Thank you. Have a good one!" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the greeting",
          intro: "Tap the words into the correct order.",
          items: [
            { tokens: ["Buenos", "días", "señora"], en: "Good morning, ma'am." },
            { tokens: ["Hasta", "luego", "y", "gracias"], en: "See you later and thank you." },
            { tokens: ["Hola", "buenas", "tardes"], en: "Hi, good afternoon." },
            { tokens: ["Adiós", "hasta", "mañana"], en: "Goodbye, see you tomorrow." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Good morning! See you later.",
          reference: "¡Buenos días! Hasta luego.",
          hint: "Remember the inverted opening mark ¡ and the agreement in 'buenos días'.",
        },
      ],
    },
    {
      slug: "greetings-tu-usted",
      title: "Tú vs usted — formal and informal",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Two ways to say 'you'",
          body: [
            "Spanish has two words for 'you': <strong>tú</strong> (informal) and <strong>usted</strong> (formal). Choosing correctly matters — using tú with a stranger can seem rude; using usted with a friend can seem distant.",
            "Use <strong>tú</strong> with friends, family, children, and anyone who invites you to. Use <strong>usted</strong> with strangers, older people, bosses, and in formal settings.",
            "The verb conjugation is different for each: <em>¿Cómo estás?</em> (tú) vs <em>¿Cómo está usted?</em> (formal).",
          ],
          keyPoint: "tú = informal (friends/family) · usted = formal (strangers/elders) · Verb endings differ.",
        },
        {
          type: "vocab",
          heading: "Asking 'how are you?'",
          items: [
            { l1: "¿Cómo estás?", en: "How are you? (informal tú)", note: "" },
            { l1: "¿Cómo está usted?", en: "How are you? (formal)", note: "" },
            { l1: "¿Qué tal?", en: "How's it going? / What's up?", note: "Very common, casual" },
            { l1: "Muy bien, gracias", en: "Very well, thank you", note: "" },
            { l1: "Bien, ¿y tú?", en: "Fine, and you? (informal)", note: "" },
            { l1: "Bien, ¿y usted?", en: "Fine, and you? (formal)", note: "" },
            { l1: "Regular", en: "So-so", note: "Honest answer — not negative" },
            { l1: "No muy bien", en: "Not very well", note: "" },
          ],
        },
        {
          type: "tip",
          heading: "Encantado/a — nice to meet you",
          body: "When meeting someone for the first time: <em>Mucho gusto</em> or <em>Encantado</em> (if you're male) / <em>Encantada</em> (if you're female). Both mean 'pleased to meet you'. The adjective ending agrees with the speaker's gender.",
          example: { l1: "— Hola, soy María. — Encantada.", en: "— Hi, I'm María. — Pleased to meet you. (woman speaking)" },
        },
        {
          type: "multipleChoice",
          heading: "Formal or informal?",
          questions: [
            {
              q: "You're meeting your friend's grandmother. You say…",
              options: ["¿Cómo estás?", "¿Qué tal?", "¿Cómo está usted?", "¿Qué pasa?"],
              correct: 2,
              fb: "Use usted with elders you're meeting for the first time. ¿Cómo está usted? shows respect.",
            },
            {
              q: "A man says 'nice to meet you'. He says…",
              options: ["Encantada", "Encantado", "Mucho gustas", "Con gusto"],
              correct: 1,
              fb: "Encantado (male speaker), encantada (female speaker). The ending matches the speaker's gender.",
            },
            {
              q: "'¿Qué tal?' is…",
              options: ["Very formal", "Only used at night", "A casual 'how's it going?'", "Rude"],
              correct: 2,
              fb: "¿Qué tal? is extremely common and casual — like 'what's up?' or 'how's things?'",
            },
          ],
        },
        {
          type: "conjugation",
          heading: "How are you? — estar by person",
          verb: "estar",
          meaning: "to be (feelings, location, state)",
          intro: "Spanish uses 'estar' for how you feel. Notice how the ending changes with tú, usted, and vosotros.",
          tenses: [
            {
              name: "Asking how someone is",
              forms: [
                { person: "(tú) ¿Cómo estás?", form: "estás", en: "How are you? (informal)" },
                { person: "(usted) ¿Cómo está?", form: "está", en: "How are you? (formal)" },
                { person: "(vosotros) ¿Cómo estáis?", form: "estáis", en: "How are you all? (Spain, informal)" },
              ],
            },
            {
              name: "Common replies",
              forms: [
                { person: "Estoy bien.", form: "bien", en: "I'm well." },
                { person: "Estoy muy bien.", form: "muy bien", en: "I'm very well." },
                { person: "Estoy regular.", form: "regular", en: "I'm so-so." },
                { person: "Estoy cansado/a.", form: "cansado/a", en: "I'm tired. (m/f)" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in tú or usted",
          intro: "Choose the form that fits the context.",
          items: [
            {
              template: "Buenas tardes, señor. ¿Cómo ___?",
              answer: "está",
              en: "Good afternoon, sir. How are you?",
              options: ["estás", "está", "estáis", "estoy"],
            },
            {
              template: "¡Hola, Carmen! ¿Cómo ___?",
              answer: "estás",
              en: "Hi, Carmen! How are you?",
              options: ["estás", "está", "estoy", "estamos"],
            },
            {
              template: "Perdone, ¿de dónde es ___?",
              answer: "usted",
              en: "Excuse me, where are you from? (formal)",
              options: ["tú", "usted", "vosotros", "yo"],
            },
            {
              template: "Bien, gracias, ¿y ___?",
              answer: "tú",
              en: "Fine, thanks, and you? (to a friend)",
              options: ["tú", "usted", "yo", "él"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Hello, how are you? (to a friend) Pleased to meet you.",
          reference: "Hola, ¿cómo estás? Encantado.",
          hint: "Use tú (estás) for a friend. A male speaker says 'encantado'; a female speaker says 'encantada'.",
        },
      ],
    },
    {
      slug: "greetings-real-conversation",
      title: "Real greetings in context",
      estMinutes: 9,
      pages: [
        {
          type: "dialogue",
          heading: "Meeting someone for the first time",
          lines: [
            { speaker: "Ana", l1: "Buenos días. ¿Cómo se llama usted?", en: "Good morning. What is your name?" },
            { speaker: "Tom", l1: "Me llamo Tom. ¿Y usted?", en: "My name is Tom. And you?" },
            { speaker: "Ana", l1: "Soy Ana Martínez. Encantada.", en: "I'm Ana Martínez. Pleased to meet you." },
            { speaker: "Tom", l1: "Encantado. ¿De dónde es usted?", en: "Pleased to meet you. Where are you from?" },
            { speaker: "Ana", l1: "Soy de Madrid. ¿Y usted?", en: "I'm from Madrid. And you?" },
            { speaker: "Tom", l1: "Soy inglés, de Londres.", en: "I'm English, from London." },
          ],
        },
        {
          type: "dialogue",
          heading: "Greeting a friend",
          lines: [
            { speaker: "Carlos", l1: "¡Hola, Lucía! ¿Qué tal?", en: "Hi, Lucía! How's it going?" },
            { speaker: "Lucía", l1: "¡Bien, gracias! ¿Y tú?", en: "Fine, thanks! And you?" },
            { speaker: "Carlos", l1: "Regular. Estoy un poco cansado.", en: "So-so. I'm a bit tired." },
            { speaker: "Lucía", l1: "Vaya. Bueno, hasta luego.", en: "Oh dear. Well, see you later." },
            { speaker: "Carlos", l1: "¡Hasta pronto!", en: "See you soon!" },
          ],
        },
        {
          type: "pronounce",
          heading: "Greetings to practise aloud",
          items: [
            { l1: "Buenos días", en: "Good morning", tip: "BWEH-nos DEE-as" },
            { l1: "Buenas tardes", en: "Good afternoon", tip: "BWEH-nas TAR-des" },
            { l1: "Mucho gusto", en: "Pleased to meet you", tip: "MOO-cho GOOS-to" },
            { l1: "Hasta luego", en: "See you later", tip: "AS-ta LWEH-go" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Conversation check",
          questions: [
            {
              q: "You're meeting a client for the first time. You say…",
              options: ["¿Qué tal, tío?", "Encantado/a de conocerle.", "Hola, ¿qué pasa?", "¡Buenas!"],
              correct: 1,
              fb: "Encantado/a de conocerle = pleased to meet you (formal). The correct register for a client.",
            },
            {
              q: "Your friend asks '¿Qué tal?' and you're feeling tired. You say…",
              options: ["Muy bien, gracias", "Regular, un poco cansado/a", "Encantado/a", "Buenos días"],
              correct: 1,
              fb: "Regular = so-so. Un poco cansado/a = a bit tired. Honest and natural.",
            },
          ],
        },
        {
          type: "tip",
          heading: "Greetings come with a kiss — or a handshake",
          body: "In Spain, friends and acquaintances often greet with <em>dos besos</em> (two kisses, left cheek first), even on a first meeting in social settings. In formal or business contexts, a handshake with <em>encantado/a</em> is the safe choice. When in doubt, follow the other person's lead.",
          example: { l1: "— Encantada. — Igualmente.", en: "— Pleased to meet you. — Likewise. (woman speaking first)" },
        },
        {
          type: "translate",
          heading: "Translate the introduction",
          direction: "en-to-l1",
          prompt: "Good afternoon. What is your name? I'm from Madrid.",
          reference: "Buenas tardes. ¿Cómo se llama usted? Soy de Madrid.",
          hint: "Use the formal '¿cómo se llama usted?' since you're meeting someone for the first time. Don't forget the ¿ and accents.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Which greeting means 'good morning'?", options: ["Buenas noches", "Buenas tardes", "Buenos días", "Hola"], correct: 2 },
      { q: "Which farewell means 'see you later'?", options: ["Adiós", "Hasta luego", "Hasta mañana", "Buenas"], correct: 1 },
      { q: "'¿Cómo estás?' uses which form of 'you'?", options: ["usted (formal)", "tú (informal)", "vos", "vosotros"], correct: 1 },
      { q: "Why 'buenas tardes' but 'buenos días'?", options: ["Arbitrary", "tarde is feminine, día is masculine", "Regional preference", "tardes is plural"], correct: 1 },
      { q: "A woman saying 'nice to meet you' says…", options: ["Encantado", "Encantada", "Mucho gusto (either)", "Both B and C"], correct: 3 },
      { q: "'¿Qué tal?' is best translated as…", options: ["What time?", "How's it going?", "Are you well?", "What do you want?"], correct: 1 },
      { q: "Use usted when speaking to…", options: ["A close friend", "Your little brother", "A stranger twice your age", "A classmate"], correct: 2 },
      { q: "The reply 'regular' to ¿cómo estás? means…", options: ["Very well", "Terrible", "So-so", "Regular schedule"], correct: 2 },
      { q: "Which greeting works at any time of day?", options: ["Buenos días", "Buenas tardes", "Hola", "Buenas noches"], correct: 2 },
      { q: "'Hasta pronto' means…", options: ["Goodbye forever", "Until tomorrow", "See you soon", "Good night"], correct: 2 },
      { q: "Asking a stranger formally 'how are you?' is…", options: ["¿Cómo estás?", "¿Cómo está?", "¿Cómo estáis?", "¿Cómo estoy?"], correct: 1 },
      { q: "In Spain, friends often greet socially with…", options: ["a bow", "dos besos (two kisses)", "a high five", "nothing at all"], correct: 1 },
    ],
  },
};
