import type { Unit } from "../../types";

export const UNIT_PASSATO_ESSERE: Unit = {
  slug: "passato-essere",
  stage: 5,
  order: 21,
  icon: "🏃",
  title: "Passato prossimo (essere)",
  tagline: "Sono andato/a — verbs of motion and state take essere, and the participle agrees.",
  badge: "core",
  lessons: [
    {
      slug: "passato-essere-which-verbs",
      title: "Which verbs use essere",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Two rules for picking the auxiliary",
          body: [
            "Most verbs in the passato prossimo use <strong>avere</strong>. But a specific category uses <strong>essere</strong>: verbs of <strong>motion, state, change of state, and reflexive verbs</strong>.",
            "<strong>Motion:</strong> andare (to go), venire (to come), arrivare, partire, entrare, uscire, salire (go up), scendere (go down), tornare, cadere (to fall).",
            "<strong>State / change of state:</strong> essere (to be), stare (to stay), restare, rimanere, diventare (to become), nascere (to be born), morire (to die), crescere (to grow).",
            "<strong>Reflexives</strong> always take essere: mi sono lavato (I washed myself), si è alzato (he got up).",
          ],
          keyPoint:
            "Motion + state + change of state + reflexives = essere. Everything else = avere.",
        },
        {
          type: "vocab",
          heading: "Verbs that take essere (memorize them)",
          intro: "Each shown with its 'io sono…' form.",
          items: [
            { l1: "andare → sono andato/a", en: "I went" },
            { l1: "venire → sono venuto/a", en: "I came" },
            { l1: "arrivare → sono arrivato/a", en: "I arrived" },
            { l1: "partire → sono partito/a", en: "I left / departed" },
            { l1: "entrare → sono entrato/a", en: "I entered" },
            { l1: "uscire → sono uscito/a", en: "I went out" },
            { l1: "salire → sono salito/a", en: "I went up / boarded" },
            { l1: "scendere → sono sceso/a", en: "I went down / got off" },
            { l1: "tornare → sono tornato/a", en: "I returned" },
            { l1: "essere → sono stato/a", en: "I was / I have been" },
            { l1: "stare → sono stato/a", en: "I stayed (same as essere)" },
            { l1: "rimanere → sono rimasto/a", en: "I stayed / remained" },
            { l1: "diventare → sono diventato/a", en: "I became" },
            { l1: "nascere → sono nato/a", en: "I was born" },
            { l1: "morire → è morto/a", en: "he/she died" },
          ],
        },
        {
          type: "tip",
          heading: "The trick that works for ~90% of cases",
          body: "Ask yourself: does the verb mean someone GOING somewhere, BEING somewhere, or CHANGING into something? → essere. Does it describe DOING something? → avere. <em>Ho mangiato</em> (I ate — doing) vs <em>Sono andato</em> (I went — moving). A few oddballs (vivere, dormire, salire, scendere) can go either way.",
          example: { l1: "Ho dormito otto ore. (avere — doing)\nSono nato nel 1990. (essere — state)", en: "I slept eight hours. / I was born in 1990." },
        },
        {
          type: "multipleChoice",
          heading: "Avere or essere?",
          questions: [
            {
              q: "'I went to the store' uses…",
              options: ["avere", "essere", "either works", "neither"],
              correct: 1,
              fb: "Andare = motion → essere.",
            },
            {
              q: "'I read a book' uses…",
              options: ["avere", "essere", "either works", "depends on gender"],
              correct: 0,
              fb: "Leggere = doing → avere.",
            },
            {
              q: "'She was born in Rome' uses…",
              options: ["avere", "essere", "fare", "stare"],
              correct: 1,
              fb: "Nascere = state of being born → essere.",
            },
            {
              q: "Reflexive verbs (mi vesto, si lava) in the past use…",
              options: ["avere", "essere", "stare", "fare"],
              correct: 1,
              fb: "All reflexives take essere.",
            },
            {
              q: "'I ate the pizza' uses…",
              options: ["avere", "essere", "stare", "venire"],
              correct: 0,
            },
          ],
        },
      ],
    },
    {
      slug: "passato-essere-agreement",
      title: "Participle agreement with essere",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The participle changes with the subject",
          body: [
            "When you use <strong>essere</strong> as the auxiliary, the participle agrees in <strong>gender and number</strong> with the subject — just like an adjective.",
            "<em>Marco è andato.</em> (m sg) → <em>Anna è andata.</em> (f sg) → <em>I ragazzi sono andati.</em> (m pl) → <em>Le ragazze sono andate.</em> (f pl).",
            "Mixed-gender group → masculine plural wins: <em>Marco e Anna sono andati.</em>",
            "If you're talking about yourself (io): <em>sono andato</em> (male speaker) / <em>sono andata</em> (female speaker). Get this wrong and Italians will notice instantly.",
          ],
          keyPoint:
            "Essere → participle agrees: -o (m sg), -a (f sg), -i (m pl, mixed), -e (f pl).",
        },
        {
          type: "conjugation",
          heading: "Andare — full agreement table",
          verb: "andare",
          meaning: "to go",
          tenses: [
            {
              name: "Passato prossimo (with all four endings)",
              forms: [
                { person: "io (m)", form: "sono andato", en: "I went (male speaker)" },
                { person: "io (f)", form: "sono andata", en: "I went (female speaker)" },
                { person: "tu (m)", form: "sei andato", en: "you went (m)" },
                { person: "tu (f)", form: "sei andata", en: "you went (f)" },
                { person: "lui", form: "è andato", en: "he went" },
                { person: "lei", form: "è andata", en: "she went" },
                { person: "noi (m or mixed)", form: "siamo andati", en: "we went" },
                { person: "noi (f)", form: "siamo andate", en: "we went (all-female)" },
                { person: "voi (m or mixed)", form: "siete andati", en: "you all went" },
                { person: "voi (f)", form: "siete andate", en: "you all went (all-female)" },
                { person: "loro (m / mixed)", form: "sono andati", en: "they went" },
                { person: "loro (f)", form: "sono andate", en: "they went (all-female)" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Match the ending",
          items: [
            {
              template: "Anna è ___ a Roma. (andare)",
              answer: "andata",
              en: "Anna went to Rome.",
              options: ["andato", "andata", "andati", "andate"],
            },
            {
              template: "Marco e Lucia sono ___ tardi. (arrivare)",
              answer: "arrivati",
              en: "Marco and Lucia arrived late.",
              options: ["arrivato", "arrivata", "arrivati", "arrivate"],
            },
            {
              template: "Le mie sorelle sono ___ in Spagna. (partire)",
              answer: "partite",
              en: "My sisters left for Spain.",
              options: ["partito", "partita", "partiti", "partite"],
            },
            {
              template: "Io (f) sono ___ in Italia nel 1990. (nascere)",
              answer: "nata",
              en: "I (female) was born in Italy in 1990.",
              options: ["nato", "nata", "nati", "nate"],
            },
            {
              template: "Voi siete ___ a casa tutto il giorno? (rimanere)",
              answer: "rimasti",
              en: "Did you all stay home all day? (mixed/male group)",
              options: ["rimasto", "rimasta", "rimasti", "rimaste"],
            },
            {
              template: "Mio fratello è ___ medico. (diventare)",
              answer: "diventato",
              en: "My brother became a doctor.",
              options: ["diventato", "diventata", "diventati", "diventate"],
            },
          ],
        },
        {
          type: "tip",
          heading: "Irregular participles with essere",
          body: "Many essere-verbs have irregular participles too: <em>essere/stare → stato/a</em>, <em>venire → venuto/a</em>, <em>rimanere → rimasto/a</em>, <em>nascere → nato/a</em>, <em>morire → morto/a</em>, <em>scendere → sceso/a</em>, <em>succedere → successo/a</em>. They still agree with the subject.",
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "We went to Naples last weekend. My sister stayed in Rome.",
          reference: "Siamo andati a Napoli lo scorso fine settimana. Mia sorella è rimasta a Roma.",
          hint: "'We' (mixed) = andati. Sister = rimasta (f sg).",
        },
      ],
    },
    {
      slug: "passato-essere-storytelling",
      title: "Putting it together — narrating your day",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Most stories mix the two auxiliaries constantly",
          body: [
            "Real narration switches between avere and essere all the time. The trick is to think about each verb individually as it comes up.",
            "<em>Ieri sono andato al ristorante (essere — motion) e ho mangiato una pizza (avere — doing). Poi sono tornato a casa (essere — motion) e ho letto un libro (avere — doing).</em>",
            "Listen for the auxiliary jumping back and forth — it sounds natural to Italians and unnatural if you stay on one.",
          ],
          keyPoint:
            "Stories mix avere + essere. Think about each verb individually: motion/state → essere, action → avere.",
        },
        {
          type: "dialogue",
          heading: "What did you do this weekend?",
          setup: "Monday morning at the office.",
          lines: [
            { speaker: "Anna", l1: "Come è andato il weekend?", en: "How was the weekend?" },
            { speaker: "You", l1: "Bellissimo. Sabato sono andato a Firenze in treno. Sono partito presto, alle sette.", en: "Wonderful. Saturday I went to Florence by train. I left early, at seven." },
            { speaker: "Anna", l1: "Cosa hai fatto a Firenze?", en: "What did you do in Florence?" },
            { speaker: "You", l1: "Ho visitato gli Uffizi, ho camminato in centro, e ho mangiato una bistecca alla fiorentina. Sono rimasto fino alle otto di sera.", en: "I visited the Uffizi, walked in the center, and ate a Florentine steak. I stayed until eight in the evening." },
            { speaker: "Anna", l1: "Allora sei tornato la sera?", en: "So you came back in the evening?" },
            { speaker: "You", l1: "Sì, sono arrivato a Roma all'una di notte. E tu, cosa hai fatto?", en: "Yes, I got to Rome at one in the morning. And you, what did you do?" },
            { speaker: "Anna", l1: "Niente di speciale. Sono rimasta a casa, ho letto un libro, ho cucinato. Tranquillo.", en: "Nothing special. I stayed home, read a book, cooked. Quiet." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Mixed avere + essere",
          items: [
            {
              template: "Stamattina (io, m) sono ___ presto. (svegliarsi)",
              answer: "svegliato",
              en: "This morning I woke up early.",
              options: ["svegliato", "svegliata", "svegliati", "svegliate"],
            },
            {
              template: "Poi ho ___ colazione al bar. (fare)",
              answer: "fatto",
              en: "Then I had breakfast at the bar.",
              options: ["fato", "fatto", "facuto", "fatti"],
            },
            {
              template: "Sono ___ al lavoro alle nove. (arrivare)",
              answer: "arrivato",
              en: "I got to work at nine.",
              options: ["arrivato", "arrivata", "arrivati", "arrivate"],
            },
            {
              template: "Ho ___ tre riunioni difficili. (avere)",
              answer: "avuto",
              en: "I had three difficult meetings.",
              options: ["avuto", "aviuto", "abbuto", "stato"],
            },
            {
              template: "A pranzo siamo ___ tutti insieme. (uscire)",
              answer: "usciti",
              en: "At lunch we all went out together.",
              options: ["uscito", "uscita", "usciti", "uscite"],
            },
            {
              template: "Sono ___ a casa stanca morta. (tornare — female speaker)",
              answer: "tornata",
              en: "I got home dead tired.",
              options: ["tornato", "tornata", "tornati", "tornate"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Reconstruct the narration",
          items: [
            { tokens: ["Ieri", "sono", "andato", "al", "cinema", "con", "Marco"], en: "Yesterday I went to the cinema with Marco." },
            { tokens: ["Abbiamo", "visto", "un", "film", "francese"], en: "We watched a French film." },
            { tokens: ["Dopo", ",", "siamo", "andati", "a", "mangiare", "una", "pizza"], en: "After, we went to eat a pizza." },
            { tokens: ["Sono", "tornato", "a", "casa", "alle", "undici"], en: "I got home at eleven." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I left at seven, took the train, and arrived in Florence at nine.",
          reference: "Sono partito/a alle sette, ho preso il treno e sono arrivato/a a Firenze alle nove.",
          hint: "Three verbs: partire (essere), prendere (avere), arrivare (essere). Match the auxiliary to the verb type.",
        },
        {
          type: "tip",
          heading: "Pro move: lo / la / li / le pronoun + avere",
          body: "Sneak preview for object pronouns: when you replace a direct object with <em>lo / la / li / le</em>, the participle DOES agree, even with avere. <em>Ho mangiato la pizza → L'ho mangiata.</em> <em>Ho visto i ragazzi → Li ho visti.</em> This is the one situation where avere's participle agrees. You'll meet this properly in the pronoun unit.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'I went to Rome' (female speaker) =",
        options: [
          "Ho andato a Roma.",
          "Sono andato a Roma.",
          "Sono andata a Roma.",
          "Vado a Roma.",
        ],
        correct: 2,
      },
      {
        q: "'We arrived late' (mixed group) =",
        options: [
          "Abbiamo arrivato tardi.",
          "Siamo arrivate tardi.",
          "Siamo arrivati tardi.",
          "Sono arrivati tardi.",
        ],
        correct: 2,
      },
      {
        q: "Which auxiliary for 'mangiare'?",
        options: ["essere", "avere", "stare", "fare"],
        correct: 1,
      },
      {
        q: "Which auxiliary for 'andare'?",
        options: ["essere", "avere", "stare", "fare"],
        correct: 0,
      },
      {
        q: "'She was born in Rome' =",
        options: [
          "È nato a Roma.",
          "Ha nato a Roma.",
          "È nata a Roma.",
          "Sono nata a Roma.",
        ],
        correct: 2,
      },
      {
        q: "Participle of 'rimanere' =",
        options: ["rimanato", "rimanito", "rimasto", "rimanuto"],
        correct: 2,
      },
      {
        q: "Reflexive verbs (e.g., svegliarsi) take which auxiliary?",
        options: ["avere", "essere", "either", "neither"],
        correct: 1,
      },
      {
        q: "'My sisters left for Spain' =",
        options: [
          "Le mie sorelle hanno partito per la Spagna.",
          "Le mie sorelle sono partite per la Spagna.",
          "Le mie sorelle sono partiti per la Spagna.",
          "Le mie sorelle sono partito per la Spagna.",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'I ate a pizza and went home.'",
        options: [
          "Ho mangiato una pizza e ho andato a casa.",
          "Sono mangiato una pizza e sono andato/a a casa.",
          "Ho mangiato una pizza e sono andato/a a casa.",
          "Mangiavo una pizza e andavo a casa.",
        ],
        correct: 2,
      },
      {
        q: "Most verbs use which auxiliary?",
        options: ["essere", "avere", "stare", "split 50/50"],
        correct: 1,
      },
    ],
  },
};
