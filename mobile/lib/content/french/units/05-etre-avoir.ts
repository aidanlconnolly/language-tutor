import type { Unit } from "../../types";

export const UNIT_ETRE_AVOIR: Unit = {
  slug: "etre-avoir",
  stage: 1,
  order: 5,
  icon: "🧱",
  title: "Être, avoir & present tense",
  tagline: "The two pillars, plus -er/-ir/-re regulars.",
  badge: "core",
  lessons: [
    {
      slug: "etre-avoir-verbs",
      title: "Être and avoir",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Être and avoir: the two pillars of French",
          body: [
            "<strong>Être</strong> (to be) and <strong>avoir</strong> (to have) are the two most important verbs in French. They're both highly irregular and used everywhere: as main verbs and as auxiliary (helping) verbs in compound tenses like the passé composé.",
            "Unlike English which has one 'you', French distinguishes <em>tu</em> (informal) and <em>vous</em> (formal or plural). In daily Paris life, use <em>vous</em> with adults you don't know.",
            "French verbs change form for every pronoun — much more than English. Memorize both verb tables now; they appear in every lesson from here on.",
          ],
        },
        {
          type: "conjugation",
          heading: "Être — to be",
          verb: "être",
          meaning: "to be",
          tenses: [
            {
              name: "présent",
              forms: [
                { person: "je", form: "suis", en: "I am" },
                { person: "tu", form: "es", en: "you are (informal)" },
                { person: "il/elle/on", form: "est", en: "he/she/one is" },
                { person: "nous", form: "sommes", en: "we are" },
                { person: "vous", form: "êtes", en: "you are (formal/plural)" },
                { person: "ils/elles", form: "sont", en: "they are" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "Avoir — to have",
          verb: "avoir",
          meaning: "to have",
          tenses: [
            {
              name: "présent",
              forms: [
                { person: "j'", form: "ai", en: "I have" },
                { person: "tu", form: "as", en: "you have" },
                { person: "il/elle/on", form: "a", en: "he/she/one has" },
                { person: "nous", form: "avons", en: "we have" },
                { person: "vous", form: "avez", en: "you have (formal/plural)" },
                { person: "ils/elles", form: "ont", en: "they have" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "On — the most useful subject pronoun",
          body: "<strong>On</strong> is technically 'one' but in modern French it's commonly used to mean 'we': <em>On mange?</em> (Shall we eat? / We eat). It always takes the il/elle form of the verb. You'll hear it constantly in casual conversation.",
          example: { l1: "On est à Paris. On a faim!", en: "We're in Paris. We're hungry!" },
        },
        {
          type: "dialogue",
          heading: "Using être & avoir",
          lines: [
            { speaker: "Pierre", l1: "Tu es français?", en: "Are you French?" },
            { speaker: "You", l1: "Non, je suis américain. Et toi?", en: "No, I'm American. And you?" },
            { speaker: "Pierre", l1: "Je suis français. J'ai un appartement à Paris.", en: "I'm French. I have an apartment in Paris." },
            { speaker: "You", l1: "C'est super! Vous avez de la chance.", en: "That's great! You're lucky. (vous = polite shift)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Être & avoir check",
          questions: [
            {
              q: "How do you say 'We are in Paris'?",
              options: ["Nous êtes à Paris.", "Nous sommes à Paris.", "Nous est à Paris.", "On êtes à Paris."],
              correct: 1,
              fb: "nous + être = nous sommes.",
            },
            {
              q: "'Vous avez faim?' means…",
              options: ["You have time?", "Are you hungry?", "Do you have hunger? (=Are you hungry?)", "both b and c"],
              correct: 3,
              fb: "'avoir faim' = 'to be hungry' (literally 'to have hunger'). It means both b and c.",
            },
          ],
        },
      ],
    },
    {
      slug: "etre-avoir-regular-verbs",
      title: "Regular -er, -ir, -re verbs",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Three verb families",
          body: [
            "French verbs come in three regular patterns: <strong>-er</strong> (by far the largest group), <strong>-ir</strong>, and <strong>-re</strong>. Once you learn the pattern for one, you can conjugate hundreds of verbs.",
            "The -er verbs: drop -er, add endings <strong>-e, -es, -e, -ons, -ez, -ent</strong>. The -e and -ent endings are silent — <em>je parle</em> and <em>ils parlent</em> sound identical.",
            "Many common verbs are -er: parler (to speak), manger (to eat), habiter (to live), aimer (to love/like), travailler (to work).",
          ],
          keyPoint: "-er endings: -e, -es, -e, -ons, -ez, -ent. The -e and -ent are SILENT.",
        },
        {
          type: "conjugation",
          heading: "Parler — to speak",
          verb: "parler",
          meaning: "to speak",
          tenses: [
            {
              name: "présent",
              forms: [
                { person: "je", form: "parle", en: "I speak" },
                { person: "tu", form: "parles", en: "you speak" },
                { person: "il/elle", form: "parle", en: "he/she speaks" },
                { person: "nous", form: "parlons", en: "we speak" },
                { person: "vous", form: "parlez", en: "you speak (formal)" },
                { person: "ils/elles", form: "parlent", en: "they speak" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "Finir / Attendre — -ir and -re",
          verb: "finir / attendre",
          meaning: "to finish / to wait",
          intro: "-ir adds -is, -is, -it, -issons, -issez, -issent. -re drops -re and adds -s, -s, -, -ons, -ez, -ent.",
          tenses: [
            {
              name: "-ir (finir)",
              forms: [
                { person: "je", form: "finis", en: "I finish" },
                { person: "tu", form: "finis", en: "you finish" },
                { person: "il/elle", form: "finit", en: "he/she finishes" },
                { person: "nous", form: "finissons", en: "we finish" },
                { person: "vous", form: "finissez", en: "you finish" },
                { person: "ils/elles", form: "finissent", en: "they finish" },
              ],
            },
            {
              name: "-re (attendre)",
              forms: [
                { person: "je", form: "attends", en: "I wait" },
                { person: "tu", form: "attends", en: "you wait" },
                { person: "il/elle", form: "attend", en: "he/she waits" },
                { person: "nous", form: "attendons", en: "we wait" },
                { person: "vous", form: "attendez", en: "you wait" },
                { person: "ils/elles", form: "attendent", en: "they wait" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Conjugate the verb",
          items: [
            { template: "Nous ___ (parler) français.", answer: "parlons", en: "We speak French." },
            { template: "Elle ___ (finir) ses devoirs.", answer: "finit", en: "She finishes her homework." },
            { template: "Vous ___ (attendre) le bus?", answer: "attendez", en: "Are you waiting for the bus?" },
            { template: "Ils ___ (manger) une pizza.", answer: "mangent", en: "They eat a pizza." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I speak a little French. Do you speak English?",
          reference: "Je parle un peu français. Vous parlez anglais?",
          hint: "un peu = a little; parlez-vous? or vous parlez? both work for questions",
        },
      ],
    },
    {
      slug: "etre-avoir-aller-faire",
      title: "Aller, faire & the near future",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Aller and faire — two more verbs you'll use hourly",
          body: [
            "<strong>Aller</strong> (to go) and <strong>faire</strong> (to do / to make) are the next two essential irregular verbs after être and avoir. Both are irregular and both power dozens of everyday expressions.",
            "Aller has a second job: <em>aller</em> + an infinitive forms the <strong>futur proche</strong> (near future), exactly like English 'going to': <em>Je vais manger</em> = I'm going to eat. This is the easiest way to talk about the future, so learn it early.",
            "Faire shows up in weather (<em>il fait beau</em>), chores (<em>faire les courses</em>), and activities (<em>faire du sport</em>) — often where English wouldn't use 'do' or 'make' at all.",
          ],
          keyPoint: "aller + infinitive = near future ('going to'). faire = do/make, and lots of set expressions.",
        },
        {
          type: "conjugation",
          heading: "Aller — to go",
          verb: "aller",
          meaning: "to go",
          tenses: [
            {
              name: "présent",
              forms: [
                { person: "je", form: "vais", en: "I go / I'm going" },
                { person: "tu", form: "vas", en: "you go" },
                { person: "il/elle/on", form: "va", en: "he/she/one goes" },
                { person: "nous", form: "allons", en: "we go" },
                { person: "vous", form: "allez", en: "you go (formal/plural)" },
                { person: "ils/elles", form: "vont", en: "they go" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "Faire — to do / to make",
          verb: "faire",
          meaning: "to do / to make",
          tenses: [
            {
              name: "présent",
              forms: [
                { person: "je", form: "fais", en: "I do / I make" },
                { person: "tu", form: "fais", en: "you do" },
                { person: "il/elle/on", form: "fait", en: "he/she/one does" },
                { person: "nous", form: "faisons", en: "we do", },
                { person: "vous", form: "faites", en: "you do (formal/plural)" },
                { person: "ils/elles", form: "font", en: "they do" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "aller + infinitive, and faire expressions",
          body: "For the near future, just conjugate <em>aller</em> and add an infinitive: <em>On va visiter le Louvre</em> (We're going to visit the Louvre). For <em>faire</em>, learn the set phrases whole: <em>faire les courses</em> (to do the shopping), <em>faire la cuisine</em> (to cook), <em>faire une promenade</em> (to take a walk), and weather: <em>il fait beau / froid / chaud</em>.",
          example: { l1: "Demain, on va faire les courses.", en: "Tomorrow, we're going to do the shopping." },
        },
        {
          type: "fillBlank",
          heading: "Conjugate aller or faire",
          items: [
            { template: "Je ___ à Paris demain. (aller)", answer: "vais", en: "I'm going to Paris tomorrow." },
            { template: "Il ___ beau aujourd'hui. (faire)", answer: "fait", en: "The weather is nice today." },
            { template: "Nous ___ visiter le musée. (aller)", answer: "allons", en: "We're going to visit the museum." },
            { template: "Vous ___ la cuisine ce soir? (faire)", answer: "faites", en: "Are you cooking tonight?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "We're going to eat at a restaurant tonight.",
          reference: "On va manger au restaurant ce soir.",
          hint: "near future: on va + infinitive; 'at the restaurant' = au restaurant; 'tonight' = ce soir",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'Nous sommes' is the nous form of…",
        options: ["avoir", "être", "aller", "faire"],
        correct: 1,
      },
      {
        q: "How do you say 'They have a car'?",
        options: ["Ils sont une voiture.", "Elles avez une voiture.", "Ils ont une voiture.", "Ils a une voiture."],
        correct: 2,
      },
      {
        q: "For -er verbs, which ending is SILENT?",
        options: ["-ons", "-ez", "-ent", "-is"],
        correct: 2,
      },
      {
        q: "'On' in casual French means…",
        options: ["one (formal)", "we (informally)", "they", "someone specific"],
        correct: 1,
      },
      {
        q: "The -ir verb 'finir' conjugates as 'ils…'",
        options: ["finit", "finissent", "finissez", "finis"],
        correct: 1,
      },
      {
        q: "How do you say 'I'm hungry' in French (using avoir)?",
        options: ["Je suis faim.", "J'ai faim.", "Je mange faim.", "J'être faim."],
        correct: 1,
      },
      {
        q: "Vous parlez — this means…",
        options: ["You speak (formal/plural)", "We speak", "They speak", "He speaks"],
        correct: 0,
      },
      {
        q: "For -re verbs, the il/elle form…",
        options: ["adds -t", "adds nothing (drop -re)", "adds -it", "adds -s"],
        correct: 1,
      },
    ],
  },
};
