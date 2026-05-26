import type { Unit } from "../types";

export const UNIT_IMPERFETTO: Unit = {
  slug: "imperfetto",
  stage: 5,
  order: 22,
  icon: "🌅",
  title: "Imperfetto",
  tagline: "Quando ero a Roma… The 'used to' past — descriptions, habits, background scenes.",
  badge: "core",
  lessons: [
    {
      slug: "imperfetto-formation",
      title: "How to form the imperfetto",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "One simple tense — no auxiliary verbs",
          body: [
            "The imperfetto is a single-word tense (no avere/essere helpers). It's what Italians use for: <strong>used to / was -ing / would (habitually)</strong>.",
            "Take the infinitive, drop the final <strong>-re</strong>, add: <strong>-vo, -vi, -va, -vamo, -vate, -vano</strong>.",
            "<em>parlare → parla-</em> + endings: parla<strong>vo, vi, va, vamo, vate, vano</strong>.",
            "<em>leggere → legge-</em> → leggevo, leggevi, leggeva, leggevamo, leggevate, leggevano.",
            "<em>dormire → dormi-</em> → dormivo, dormivi, dormiva, dormivamo, dormivate, dormivano.",
          ],
          keyPoint:
            "Stem (drop -re) + vo/vi/va/vamo/vate/vano. Single word. No auxiliary.",
        },
        {
          type: "conjugation",
          heading: "Three families — same endings",
          verb: "parlare / leggere / dormire",
          meaning: "to speak / read / sleep — imperfetto",
          tenses: [
            {
              name: "All three families side-by-side",
              forms: [
                { person: "io", form: "parlavo / leggevo / dormivo", en: "I was speaking / reading / sleeping" },
                { person: "tu", form: "parlavi / leggevi / dormivi", en: "you were…" },
                { person: "lui/lei", form: "parlava / leggeva / dormiva", en: "he/she was…" },
                { person: "noi", form: "parlavamo / leggevamo / dormivamo", en: "we were…" },
                { person: "voi", form: "parlavate / leggevate / dormivate", en: "you all were…" },
                { person: "loro", form: "parlavano / leggevano / dormivano", en: "they were…" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Three irregulars that matter",
          body: "Most verbs are regular in the imperfetto. The big exceptions:<br><br>• <strong>essere</strong> → ero, eri, era, eravamo, eravate, erano<br>• <strong>fare</strong> → facevo, facevi, faceva, facevamo, facevate, facevano (from old infinitive 'facere')<br>• <strong>dire</strong> → dicevo, dicevi, diceva… (from old 'dicere')<br>• <strong>bere</strong> → bevevo, bevevi, beveva… (from old 'bevere')<br><br>Notice: fare, dire, bere all use their old Latin stems.",
        },
        {
          type: "fillBlank",
          heading: "Conjugate the imperfetto",
          items: [
            {
              template: "Quando ero piccolo, ___ molto con i lego. (giocare)",
              answer: "giocavo",
              en: "When I was little, I used to play a lot with legos.",
              options: ["gioco", "giocavo", "ho giocato", "giocaba"],
            },
            {
              template: "Marco ___ il giornale ogni mattina. (leggere)",
              answer: "leggeva",
              en: "Marco used to read the paper every morning.",
              options: ["legge", "leggeva", "ha letto", "leggava"],
            },
            {
              template: "Noi ___ in centro a Roma. (abitare)",
              answer: "abitavamo",
              en: "We used to live in central Rome.",
              options: ["abitavamo", "abitiamo", "abbiamo abitato", "abitavano"],
            },
            {
              template: "I bambini ___ molto la sera. (dormire)",
              answer: "dormivano",
              en: "The kids used to sleep a lot in the evening.",
              options: ["dormono", "dormivano", "hanno dormito", "dormivamo"],
            },
            {
              template: "Tu ___ molto stanca a quei tempi. (essere)",
              answer: "eri",
              en: "You used to be very tired in those days.",
              options: ["sei", "eri", "stavi", "stata"],
            },
            {
              template: "Voi ___ molto vino allora? (bere)",
              answer: "bevevate",
              en: "Did you used to drink a lot of wine back then?",
              options: ["bevete", "bevevate", "avete bevuto", "bevevano"],
            },
          ],
        },
      ],
    },
    {
      slug: "imperfetto-when-to-use",
      title: "When to use it — the three jobs",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Imperfetto does three things",
          body: [
            "<strong>1. Habits in the past:</strong> \"used to.\" <em>Da bambino, andavo al mare ogni estate.</em> = As a child, I used to go to the beach every summer.",
            "<strong>2. Background description:</strong> what things WERE like. Weather, age, feelings, ongoing states. <em>Era una giornata fredda. Pioveva. Avevo dieci anni.</em> = It was a cold day. It was raining. I was ten years old.",
            "<strong>3. Was -ing (background of an action):</strong> what was happening WHEN something else happened. <em>Mentre cucinavo, ha squillato il telefono.</em> = While I was cooking, the phone rang.",
            "Time markers that signal imperfetto: <em>spesso, sempre, di solito, ogni giorno, mentre, quando ero…</em>",
          ],
          keyPoint:
            "Imperfetto = habits + descriptions + ongoing background. Look for 'used to', 'was -ing', 'every / often / always' / 'while…'.",
        },
        {
          type: "vocab",
          heading: "Signal words for imperfetto",
          items: [
            { it: "spesso", en: "often" },
            { it: "sempre", en: "always" },
            { it: "di solito", en: "usually" },
            { it: "ogni giorno / ogni estate", en: "every day / every summer" },
            { it: "tutti i giorni", en: "every day" },
            { it: "mentre", en: "while" },
            { it: "da bambino/a", en: "as a child" },
            { it: "una volta", en: "once / back then" },
            { it: "a quei tempi", en: "in those days" },
            { it: "negli anni '80", en: "in the '80s" },
          ],
        },
        {
          type: "tip",
          heading: "Imperfetto vs passato prossimo — the decisive test",
          body: "<strong>Was it a single completed action with a clear endpoint?</strong> → passato prossimo (\"ho mangiato una pizza\"). <strong>Was it a state, description, habit, or what was happening in the background?</strong> → imperfetto (\"mangiavo spesso la pizza\"). Same verb, totally different feel:<br><br>• <em>Ho mangiato la pizza ieri.</em> = I ate the pizza yesterday. (one event)<br>• <em>Mangiavo la pizza ogni venerdì.</em> = I used to eat pizza every Friday. (habit)",
        },
        {
          type: "dialogue",
          heading: "Reminiscing",
          setup: "Your friend asks about your childhood.",
          lines: [
            { speaker: "Anna", it: "Dove abitavi da piccolo?", en: "Where did you used to live as a kid?" },
            { speaker: "You", it: "Abitavamo in una piccola città in Vermont. C'era molto verde, e nevicava sempre d'inverno.", en: "We lived in a small town in Vermont. There was lots of green, and it always snowed in winter." },
            { speaker: "Anna", it: "Andavi a scuola a piedi?", en: "Did you walk to school?" },
            { speaker: "You", it: "No, prendevo lo scuolabus. Era giallo, come nei film americani. Mio fratello e io aspettavamo alla fermata ogni mattina, anche quando faceva freddissimo.", en: "No, I took the school bus. It was yellow, like in American movies. My brother and I waited at the stop every morning, even when it was really cold." },
            { speaker: "Anna", it: "E cosa facevate il sabato?", en: "And what did you (all) used to do on Saturday?" },
            { speaker: "You", it: "Andavamo in piscina o al parco. Erano giornate semplici. Mi piaceva molto.", en: "We used to go to the pool or the park. They were simple days. I liked it a lot." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which tense fits?",
          questions: [
            {
              q: "'Yesterday I went to the gym.' (single event)",
              options: ["imperfetto", "passato prossimo", "either", "depends"],
              correct: 1,
            },
            {
              q: "'I used to go to the gym every Saturday.' (habit)",
              options: ["imperfetto", "passato prossimo", "future", "present"],
              correct: 0,
            },
            {
              q: "'It was raining when I left the house.' (background + event)",
              options: [
                "imperfetto + imperfetto",
                "passato prossimo + passato prossimo",
                "imperfetto (raining) + passato prossimo (left)",
                "passato prossimo (raining) + imperfetto (left)",
              ],
              correct: 2,
            },
            {
              q: "'I was 18 years old.' (state)",
              options: ["imperfetto", "passato prossimo", "present", "future"],
              correct: 0,
            },
            {
              q: "'She read the book in two days.' (completed with a duration)",
              options: ["imperfetto", "passato prossimo", "either", "depends on the book"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "imperfetto-mixed",
      title: "Mixing both tenses — real narration",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Real Italian narration uses both at once",
          body: [
            "Italian narration constantly weaves the two tenses together: imperfetto sets the scene, passato prossimo drops the events.",
            "<em>Era una sera tranquilla. Pioveva da ore. Stavo leggendo a casa, quando improvvisamente è suonato il campanello.</em>",
            "Imperfetto: era, pioveva, stavo leggendo (background). Passato prossimo: è suonato (the new event).",
            "Rule of thumb: the imperfetto is the canvas, passato prossimo is the paint splash.",
          ],
          keyPoint:
            "Imperfetto = background canvas (state, habit, ongoing). Passato prossimo = paint splash (the specific event).",
        },
        {
          type: "dialogue",
          heading: "Telling a story",
          setup: "You're explaining how you sprained your ankle.",
          lines: [
            { speaker: "Marco", it: "Cosa è successo? Come ti sei fatto male?", en: "What happened? How did you hurt yourself?" },
            { speaker: "You", it: "Allora, ieri pomeriggio camminavo a Trastevere. Faceva caldo, c'era molta gente per strada.", en: "So, yesterday afternoon I was walking in Trastevere. It was hot, there were lots of people on the street." },
            { speaker: "You", it: "Guardavo le vetrine, non guardavo i miei piedi. Improvvisamente sono inciampato in un sampietrino sconnesso.", en: "I was looking at the shop windows, I wasn't looking at my feet. Suddenly I tripped on a loose cobblestone." },
            { speaker: "You", it: "Sono caduto male. Ho sentito un dolore forte alla caviglia.", en: "I fell badly. I felt a sharp pain in my ankle." },
            { speaker: "Marco", it: "Sei andato al pronto soccorso?", en: "Did you go to the ER?" },
            { speaker: "You", it: "Sì. Mentre aspettavo, ho visto che si gonfiava. Per fortuna non era rotta — solo una bella distorsione.", en: "Yes. While I was waiting, I saw it was swelling. Luckily it wasn't broken — just a good sprain." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the right tense",
          items: [
            {
              template: "Mentre (io) ___ , è arrivato Marco. (mangiare)",
              answer: "mangiavo",
              en: "While I was eating, Marco arrived.",
              options: ["ho mangiato", "mangiavo", "mangio", "mangerò"],
            },
            {
              template: "Ieri (io) ___ il film di Sorrentino. (vedere)",
              answer: "ho visto",
              en: "Yesterday I watched Sorrentino's film. (completed event)",
              options: ["vedevo", "ho visto", "vedo", "vedrò"],
            },
            {
              template: "Da bambina, (io) ___ a casa della nonna ogni domenica. (andare)",
              answer: "andavo",
              en: "As a girl, I used to go to grandma's every Sunday.",
              options: ["andavo", "sono andata", "vado", "ho andato"],
            },
            {
              template: "Quando ho aperto la porta, lui ___ già. (dormire)",
              answer: "dormiva",
              en: "When I opened the door, he was already sleeping.",
              options: ["ha dormito", "dormiva", "dorme", "dormirà"],
            },
            {
              template: "L'altra notte non (io) ___ . (dormire)",
              answer: "ho dormito",
              en: "The other night I didn't sleep. (completed event)",
              options: ["dormivo", "ho dormito", "dormo", "dormirò"],
            },
            {
              template: "(Noi) ___ a Firenze per una settimana e ___ molti musei. (essere / visitare)",
              answer: "siamo stati / abbiamo visitato",
              en: "We were in Florence for a week and visited many museums.",
              options: [
                "siamo stati / abbiamo visitato",
                "eravamo / visitavamo",
                "siamo / visitiamo",
                "siamo stati / visitavamo",
              ],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the mixed-tense sentence",
          items: [
            { tokens: ["Mentre", "leggevo", ",", "è", "squillato", "il", "telefono"], en: "While I was reading, the phone rang." },
            { tokens: ["Quando", "ero", "piccolo", ",", "abitavo", "a", "New", "York"], en: "When I was little, I lived in New York." },
            { tokens: ["Pioveva", ",", "ma", "siamo", "andati", "al", "parco", "lo", "stesso"], en: "It was raining, but we went to the park anyway." },
            { tokens: ["Faceva", "molto", "freddo", ",", "quindi", "abbiamo", "preso", "un", "taxi"], en: "It was very cold, so we took a taxi." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "When I was a child, I used to live in Boston. Every summer we went to the beach.",
          reference: "Quando ero bambino/a, abitavo a Boston. Ogni estate andavamo al mare.",
          hint: "Two states (was, used to live) + one repeated habit (went) → all imperfetto.",
        },
        {
          type: "tip",
          heading: "'Andare' in both tenses, different meanings",
          body: "<em>Andavo a Parigi ogni estate.</em> = I used to go to Paris every summer (habit, imperfetto). <em>Sono andato a Parigi l'estate scorsa.</em> = I went to Paris last summer (one trip, passato prossimo). Same verb, totally different feel — the listener instantly knows whether you're telling them about a one-time event or a recurring habit.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Imperfetto endings (regular) are…",
        options: [
          "-vo, -vi, -va, -vamo, -vate, -vano",
          "-to, -ti, -ta, -tamo, -tate, -tano",
          "-o, -i, -a, -iamo, -ate, -ano",
          "-rò, -rai, -rà, -remo, -rete, -ranno",
        ],
        correct: 0,
      },
      {
        q: "Essere imperfetto (io) =",
        options: ["sono", "ero", "fui", "stavo"],
        correct: 1,
      },
      {
        q: "'I used to go to the beach every summer' =",
        options: [
          "Sono andato al mare ogni estate.",
          "Andavo al mare ogni estate.",
          "Vado al mare ogni estate.",
          "Andrò al mare ogni estate.",
        ],
        correct: 1,
      },
      {
        q: "'Yesterday I went to the beach' (one event) =",
        options: [
          "Andavo al mare ieri.",
          "Sono andato/a al mare ieri.",
          "Vado al mare ieri.",
          "Ho andato al mare ieri.",
        ],
        correct: 1,
      },
      {
        q: "Imperfetto is used for…",
        options: [
          "completed past events with a clear end",
          "descriptions, habits, background — 'used to' / 'was -ing'",
          "future actions",
          "commands",
        ],
        correct: 1,
      },
      {
        q: "Fare imperfetto (io) =",
        options: ["fo", "facevo", "ho fatto", "facenvo"],
        correct: 1,
      },
      {
        q: "'I was reading when the phone rang' =",
        options: [
          "Leggevo quando ha squillato il telefono.",
          "Ho letto quando squillava il telefono.",
          "Ho letto quando ha squillato il telefono.",
          "Leggevo quando squillava il telefono.",
        ],
        correct: 0,
      },
      {
        q: "Imperfetto signal: which word strongly hints at it?",
        options: ["ieri", "una volta", "spesso / di solito / ogni giorno", "stamattina"],
        correct: 2,
      },
      {
        q: "Bere imperfetto (noi) =",
        options: ["beviamo", "bevevamo", "abbiamo bevuto", "berevamo"],
        correct: 1,
      },
      {
        q: "Translate: 'It was raining and I was cold.'",
        options: [
          "È piovuto e ho avuto freddo.",
          "Pioveva e avevo freddo.",
          "Pioveva e ho avuto freddo.",
          "Piove e ho freddo.",
        ],
        correct: 1,
      },
    ],
  },
};
