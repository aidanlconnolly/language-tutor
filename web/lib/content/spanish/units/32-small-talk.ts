import type { Unit } from "../../types";

export const UNIT_SMALL_TALK: Unit = {
  slug: "small-talk",
  stage: 7,
  order: 32,
  icon: "💬",
  title: "Small talk",
  tagline: "El tiempo, el fútbol, ¡qué calor! — graceful exits.",
  lessons: [
    {
      slug: "small-talk-weather",
      title: "Weather and everyday chat",
      estMinutes: 11,
      pages: [
        {
          type: "intro",
          heading: "The weather is Spain's safest opener",
          body: [
            "In Spain the weather (<em>el tiempo</em>) is the universal icebreaker — in the lift, the bakery queue, with a neighbour you barely know.",
            "Spanish almost always uses <em>hacer</em> for weather: <em>«Hace calor.»</em> = It's hot. <em>«Hace frío.»</em> = It's cold. <em>«Hace sol.»</em> = It's sunny.",
            "To exclaim, add <em>¡qué!</em>: <em>«¡Qué calor!»</em> = So hot! <em>«¡Qué frío!»</em> = So cold!",
            "For rain and snow use the verbs directly: <em>«Llueve.»</em> / <em>«Está lloviendo.»</em> = It's raining. <em>«Nieva.»</em> = It's snowing.",
            "Bad weather earns a sigh: <em>«¡Vaya tiempo!»</em> = What awful weather!",
          ],
          keyPoint:
            "Weather = hacer: hace calor / frío / sol / viento. Exclaim with ¡qué…! Rain & snow take their own verbs: llueve, nieva.",
        },
        {
          type: "vocab",
          heading: "Weather vocabulary",
          items: [
            { l1: "Hace calor / frío.", en: "It's hot / cold." },
            { l1: "Hace sol / viento.", en: "It's sunny / windy." },
            { l1: "Llueve. / Está lloviendo.", en: "It's raining." },
            { l1: "Nieva. / Está nevando.", en: "It's snowing." },
            { l1: "Está nublado.", en: "It's cloudy." },
            { l1: "¡Qué calor hace!", en: "What heat! / It's so hot!" },
            { l1: "¡Vaya tiempo!", en: "What weather! (used for bad weather)" },
            { l1: "El tiempo está muy bueno.", en: "The weather is very nice." },
          ],
        },
        {
          type: "vocab",
          heading: "Starting and sustaining small talk",
          items: [
            { l1: "¿Qué tal tu fin de semana?", en: "How was your weekend?" },
            { l1: "Nada especial, ¿y el tuyo?", en: "Nothing special, and yours?" },
            { l1: "¿Has visto el partido?", en: "Did you watch the match?" },
            { l1: "¿Eres del Madrid o del Barça?", en: "Are you a Madrid or Barça fan?" },
            { l1: "¿Qué planes tienes este finde?", en: "What are your plans this weekend? (finde = fin de semana)" },
            { l1: "¿Has leído algo bueno últimamente?", en: "Have you read anything good lately?" },
            { l1: "¡Qué coincidencia!", en: "What a coincidence!" },
            { l1: "Me alegro de verte.", en: "Good to see you." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Small talk check",
          questions: [
            {
              q: "'Hace calor' means…",
              options: ["It's cold", "It's hot", "It's windy", "It's humid"],
              correct: 1,
              fb: "Hacer calor = to be hot (weather). ¡Qué calor hace! = It's so hot! (a very common Spanish summer phrase)",
            },
            {
              q: "'Finde' is slang for…",
              options: ["Fine / OK", "The end", "Weekend (fin de semana)", "Saturday"],
              correct: 2,
              fb: "Finde = fin de semana (weekend). Very common informal abbreviation.",
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Chatting in the lift",
          setup: "You share the lift with a neighbour on a hot Madrid morning.",
          lines: [
            { speaker: "Vecina", l1: "¡Buenos días! ¡Qué calor hace ya, eh?", en: "Good morning! It's so hot already, huh?" },
            { speaker: "You", l1: "Buenos días. Sí, y eso que es temprano.", en: "Good morning. Yes, and that's despite it being early." },
            { speaker: "Vecina", l1: "Dicen que mañana llueve. A ver si refresca un poco.", en: "They say it'll rain tomorrow. Let's see if it cools down a bit." },
            { speaker: "You", l1: "Ojalá. Buena falta nos hace.", en: "I hope so. We really need it." },
            { speaker: "Vecina", l1: "Pues nada, ¡que pase un buen día!", en: "Well then, have a good day!" },
            { speaker: "You", l1: "¡Igualmente!", en: "You too!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Weather fill-ins",
          items: [
            {
              template: "Hoy ___ mucho calor, casi cuarenta grados.",
              answer: "hace",
              en: "Today it's very hot, almost forty degrees.",
              options: ["es", "hace", "está", "tiene"],
            },
            {
              template: "No salgas sin paraguas, está ___ .",
              answer: "lloviendo",
              en: "Don't go out without an umbrella, it's raining.",
              options: ["lloviendo", "llueve", "nevando", "nublado"],
            },
            {
              template: "¡___ frío! Ponte el abrigo.",
              answer: "Qué",
              en: "So cold! Put on your coat.",
              options: ["Qué", "Cómo", "Cuánto", "Vaya"],
            },
            {
              template: "El cielo está ___ , parece que va a llover.",
              answer: "nublado",
              en: "The sky is cloudy, it looks like it's going to rain.",
              options: ["nublado", "sol", "viento", "calor"],
            },
            {
              template: "¿___ tal el finde? — Nada especial.",
              answer: "Qué",
              en: "How was the weekend? — Nothing special.",
              options: ["Qué", "Cómo", "Cuál", "Cuándo"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "It's so hot today! How was your weekend?",
          reference: "¡Qué calor hace hoy! ¿Qué tal tu fin de semana?",
          hint: "Open with weather (¡qué calor!), then pivot to the weekend (¿qué tal…?). 'Hace' for the heat.",
        },
      ],
    },
    {
      slug: "small-talk-exits",
      title: "Ending conversations gracefully",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Leaving without seeming rude",
          body: [
            "Spaniards rarely cut a chat short abruptly — they signal the exit first, then say goodbye warmly.",
            "Signal it: <em>«Bueno, te dejo.»</em> = Right, I'll let you go. <em>«Me tengo que ir.»</em> = I have to go. <em>«Se me hace tarde.»</em> = It's getting late for me.",
            "Then the warm sign-off: <em>«Nos vemos.»</em> = See you. <em>«Cuídate.»</em> = Take care. <em>«Un abrazo.»</em> = A hug (very common, even spoken).",
            "Add a good wish: <em>«Que te vaya bien.»</em> = May it go well for you. <em>«Que tengas buen día.»</em> = Have a good day.",
            "Note the <em>que + subjunctive</em> pattern in these wishes (<em>que te vaya, que tengas</em>) — a fixed, friendly formula you just memorise.",
          ],
          keyPoint:
            "Two beats to exit: signal (bueno, te dejo / me tengo que ir) then sign off warmly (nos vemos, cuídate, un abrazo). Wishes use que + subjunctive.",
        },
        {
          type: "vocab",
          heading: "Exit phrases",
          items: [
            { l1: "Bueno, me tengo que ir.", en: "Well, I have to go." },
            { l1: "Ha sido un placer.", en: "It's been a pleasure." },
            { l1: "Que te vaya bien.", en: "I hope things go well for you. / Take care." },
            { l1: "Cuídate.", en: "Take care." },
            { l1: "Nos vemos.", en: "See you around." },
            { l1: "¡Hasta la próxima!", en: "Until next time!" },
            { l1: "Que te lo pases bien.", en: "Have a good time." },
            { l1: "Un abrazo.", en: "A hug. (common warm sign-off)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Exit phrases",
          questions: [
            {
              q: "'Que te vaya bien' means…",
              options: ["That you go well", "I hope things go well for you", "Goodbye forever", "Go quickly"],
              correct: 1,
              fb: "Que + subjunctive used as a wish. Que te vaya bien = I hope things go well for you. A warm farewell.",
            },
            {
              q: "'Ha sido un placer' is said…",
              options: ["When you arrive", "When leaving — it's been a pleasure", "When ordering food", "When you're surprised"],
              correct: 1,
              fb: "Ha sido un placer = it's been a pleasure. Used when parting from someone you've enjoyed meeting.",
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Wrapping up at the café",
          setup: "You've been chatting with an acquaintance and it's time to head off.",
          lines: [
            { speaker: "Carlos", l1: "Oye, ha estado genial ponerse al día.", en: "Hey, it's been great catching up." },
            { speaker: "You", l1: "Sí, la verdad. Bueno, se me hace tarde, me tengo que ir.", en: "Yes, really. Well, it's getting late, I have to go." },
            { speaker: "Carlos", l1: "Claro, claro. ¡A ver si quedamos pronto!", en: "Of course, of course. Let's meet up soon!" },
            { speaker: "You", l1: "¡Eso, sin falta! Que te vaya muy bien.", en: "Yes, for sure! Take good care." },
            { speaker: "Carlos", l1: "Igualmente. Un abrazo y cuídate.", en: "Likewise. A hug and take care." },
            { speaker: "You", l1: "¡Un abrazo! Nos vemos.", en: "A hug! See you." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Exit fill-ins",
          items: [
            {
              template: "Bueno, me ___ que ir, se me hace tarde.",
              answer: "tengo",
              en: "Well, I have to go, it's getting late.",
              options: ["tengo", "voy", "debo", "hago"],
            },
            {
              template: "Que te ___ bien en el trabajo.",
              answer: "vaya",
              en: "May it go well for you at work.",
              options: ["vaya", "va", "vas", "fue"],
            },
            {
              template: "Nos ___ pronto, ¿vale?",
              answer: "vemos",
              en: "See you soon, OK?",
              options: ["vemos", "vamos", "veo", "vimos"],
            },
            {
              template: "Un ___ muy fuerte, cuídate.",
              answer: "abrazo",
              en: "A big hug, take care.",
              options: ["abrazo", "beso", "saludo", "placer"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Well, I have to go. Take care, see you soon!",
          reference: "Bueno, me tengo que ir. ¡Cuídate, nos vemos pronto!",
          hint: "Signal first (me tengo que ir), then the warm sign-off (cuídate, nos vemos).",
        },
        {
          type: "tip",
          heading: "'Dos besos' is the default greeting in Spain",
          body: "When meeting or parting from friends and family, Spaniards usually give <em>dos besos</em> — two cheek kisses, starting with <strong>your left cheek (their right)</strong>, lightly touching cheeks rather than really kissing. It's standard woman-to-woman and woman-to-man. Men who are close may do it too, but men-to-men more often shake hands or hug. In a work or first-time setting, a handshake (<em>un apretón de manos</em>) is safe — follow the other person's lead.",
          example: { l1: "¡Encantado! (con dos besos)", en: "Nice to meet you! (with two cheek kisses)" },
        },
      ],
    },
    {
      slug: "small-talk-sustained",
      title: "Sustaining a conversation",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Keeping the ball in the air",
          body: [
            "Good small talk is a rally: you react, you ask back, you change topic smoothly.",
            "React with energy: <em>«¡No me digas!»</em> = You don't say! <em>«¡Qué bien!»</em> = How great! <em>«¡Qué casualidad!»</em> = What a coincidence!",
            "Pivot the topic: <em>«Por cierto…»</em> = By the way… <em>«Hablando de eso…»</em> = Speaking of that…",
            "Ask a personal opener: <em>«¿De dónde eres?»</em> = Where are you from? <em>«¿A qué te dedicas?»</em> = What do you do (for work)?",
            "And always bounce it back: <em>«¿Y tú?»</em> = And you? — the simplest way to keep things going.",
          ],
          keyPoint:
            "React (¡no me digas!), pivot (por cierto…), ask back (¿y tú?). Personal openers: ¿de dónde eres? / ¿a qué te dedicas?",
        },
        {
          type: "vocab",
          heading: "Getting-to-know-you questions",
          items: [
            { l1: "¿De dónde eres?", en: "Where are you from?" },
            { l1: "Soy de Sevilla, ¿y tú?", en: "I'm from Seville, and you?" },
            { l1: "¿A qué te dedicas?", en: "What do you do (for work)?" },
            { l1: "¿Tienes planes para el finde?", en: "Do you have plans for the weekend?" },
            { l1: "¿Cuánto tiempo llevas aquí?", en: "How long have you been here?" },
            { l1: "¿Qué tal estás?", en: "How are you doing?" },
            { l1: "¿Y tú?", en: "And you? (bounce the question back)" },
          ],
        },
        {
          type: "vocab",
          heading: "Keeping the conversation going",
          items: [
            { l1: "¡No me digas!", en: "You don't say! / No way!" },
            { l1: "¡Qué interesante!", en: "How interesting!" },
            { l1: "¡Qué casualidad!", en: "What a coincidence!" },
            { l1: "Por cierto…", en: "By the way…" },
            { l1: "A propósito…", en: "By the way / On that note…" },
            { l1: "Hablando de…", en: "Speaking of…" },
            { l1: "¿Y qué me cuentas de…?", en: "And what can you tell me about…?" },
          ],
        },
        {
          type: "dialogue",
          heading: "A sustained small talk conversation",
          lines: [
            { speaker: "Marta", l1: "¿Cómo te va el trabajo?", en: "How's work going?" },
            { speaker: "You", l1: "Bien, bastante ocupado. Por cierto, ¿sigues en la misma empresa?", en: "Good, quite busy. By the way, are you still at the same company?" },
            { speaker: "Marta", l1: "No, cambié en enero. ¡Fue un gran cambio!", en: "No, I changed in January. It was a big change!" },
            { speaker: "You", l1: "¡No me digas! ¿Y estás contenta?", en: "You don't say! And are you happy?" },
            { speaker: "Marta", l1: "Mucho más. Hablando de trabajo, ¿has pensado en el cambio del que me hablaste?", en: "Much more. Speaking of work, have you thought about the change you mentioned?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Small talk tools",
          questions: [
            {
              q: "'Por cierto' introduces…",
              options: ["A conclusion", "A topic change or additional point (by the way)", "A complaint", "A formal request"],
              correct: 1,
              fb: "Por cierto = by the way. Used to introduce a new topic or add something relevant.",
            },
            {
              q: "'¡No me digas!' expresses…",
              options: ["Disbelief or pleasant surprise", "Disagreement", "Boredom", "A command not to speak"],
              correct: 0,
              fb: "¡No me digas! = you don't say! / really?! Shows surprise or interest in what was just said.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Questions & reactions fill-ins",
          items: [
            {
              template: "¿A qué te ___ ? — Soy profesor.",
              answer: "dedicas",
              en: "What do you do? — I'm a teacher.",
              options: ["dedicas", "haces", "trabajas", "eres"],
            },
            {
              template: "¿De ___ eres? — De Valencia.",
              answer: "dónde",
              en: "Where are you from? — From Valencia.",
              options: ["dónde", "qué", "quién", "cuándo"],
            },
            {
              template: "¡Qué ___ ! Yo también vivo en ese barrio.",
              answer: "casualidad",
              en: "What a coincidence! I live in that neighbourhood too.",
              options: ["casualidad", "suerte", "pena", "lástima"],
            },
            {
              template: "Por ___ , ¿sigues estudiando español?",
              answer: "cierto",
              en: "By the way, are you still studying Spanish?",
              options: ["cierto", "supuesto", "favor", "fin"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the small-talk lines",
          items: [
            { tokens: ["¿A", "qué", "te", "dedicas?"], en: "What do you do (for work)?" },
            { tokens: ["¿Tienes", "planes", "para", "el", "finde?"], en: "Do you have plans for the weekend?" },
            { tokens: ["¡Qué", "casualidad", "verte", "por", "aquí!"], en: "What a coincidence seeing you around here!" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Where are you from? And what do you do?",
          reference: "¿De dónde eres? ¿Y a qué te dedicas?",
          hint: "Two classic getting-to-know-you questions. Keep the inverted ¿ on each, and bounce with ¿y…?",
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Hace calor' means…", options: ["It's cold", "It's sunny", "It's hot", "It's windy"], correct: 2 },
      { q: "'Está nublado' means…", options: ["It's sunny", "It's cloudy", "It's raining", "It's cold"], correct: 1 },
      { q: "'Finde' is short for…", options: ["fin de mes", "fin de semana", "el final", "finish"], correct: 1 },
      { q: "'Que te vaya bien' is…", options: ["A request", "A warm farewell wish", "A question", "A complaint"], correct: 1 },
      { q: "'Ha sido un placer' means…", options: ["What a pleasure!", "It's been a pleasure", "I have pleasure in…", "The pleasure is mine"], correct: 1 },
      { q: "'¡Qué coincidencia!' means…", options: ["What a coincidence!", "How strange!", "Really?", "I agree!"], correct: 0 },
      { q: "'Nos vemos' means…", options: ["We see each other now", "See you around", "I can't see you", "We watched it"], correct: 1 },
      { q: "'Cuídate' means…", options: ["Watch out!", "Take care", "Be careful (warning)", "Both A and C"], correct: 1 },
      { q: "'¿Has visto el partido?' means…", options: ["Have you been to the park?", "Did you watch the match?", "Have you seen this?", "Did you visit?"], correct: 1 },
      { q: "'Me alegro de verte' means…", options: ["I like seeing things", "Good to see you", "I'm happy to meet you for the first time", "I'm glad you're here"], correct: 1 },
    ],
  },
};
