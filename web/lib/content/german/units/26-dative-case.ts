import type { Unit } from "../../types";

export const UNIT_DATIVE_CASE: Unit = {
  slug: "dative-case",
  stage: 6,
  order: 26,
  icon: "🎁",
  title: "The dative case",
  tagline: "dem/der/den — dative verbs and mit/bei/nach prepositions.",
  badge: "core",
  lessons: [
    {
      slug: "dative-case-articles",
      title: "The dative article forms",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The case of the indirect object",
          body: [
            "German has four cases. You already know the <strong>nominative</strong> (the subject) and <strong>accusative</strong> (the direct object). The <strong>dative</strong> (<em>der Dativ</em>) marks the <strong>indirect object</strong> — usually the receiver of something.",
            "In <em>Ich gebe dem Mann das Buch</em> (\"I give the man the book\"), <em>das Buch</em> is the direct object (accusative — what is given) and <em>dem Mann</em> is the indirect object (dative — who receives it).",
            "The dative changes the articles. <em>der</em> → <strong>dem</strong>, <em>die</em> → <strong>der</strong>, <em>das</em> → <strong>dem</strong>, and the plural <em>die</em> → <strong>den</strong> — plus you add an <strong>-n</strong> to the noun in the plural (<em>den Kindern</em>).",
            "Think of the test question <em>wem?</em> (\"to whom?\"). The answer is always in the dative.",
          ],
          keyPoint:
            "Dative = the indirect object (the receiver). der→dem, die→der, das→dem, plural die→den + noun gets -n. Test word: wem?",
        },
        {
          type: "tip",
          heading: "Accusative vs dative in one sentence",
          body: "Many sentences have both. The thing given is <strong>accusative</strong>; the person it's given to is <strong>dative</strong>. In <em>Ich schenke der Frau einen Ring</em>, <em>einen Ring</em> (what) is accusative and <em>der Frau</em> (to whom) is dative. Word order: dative usually comes before accusative when both are nouns.",
          example: { l1: "Ich schenke der Frau einen Ring.", en: "I give the woman a ring." },
        },
        {
          type: "vocab",
          heading: "Dative articles & pronouns",
          intro: "Compare the nominative (in brackets) with the dative form.",
          items: [
            { l1: "dem", en: "to the (masculine)", note: "from der: dem Mann." },
            { l1: "der", en: "to the (feminine)", note: "from die: der Frau — looks like masc. nominative!" },
            { l1: "dem", en: "to the (neuter)", note: "from das: dem Kind." },
            { l1: "den …-n", en: "to the (plural)", note: "from die: den Kindern — add -n to the noun." },
            { l1: "einem", en: "to a (masc./neut.)", note: "einem Mann, einem Kind." },
            { l1: "einer", en: "to a (feminine)", note: "einer Frau." },
            { l1: "mir", en: "to me", note: "dative of ich." },
            { l1: "dir", en: "to you (informal)", note: "dative of du." },
            { l1: "ihm", en: "to him / it", note: "dative of er / es." },
            { l1: "ihr", en: "to her", note: "dative of sie (she)." },
            { l1: "uns / euch", en: "to us / to you all" },
            { l1: "ihnen / Ihnen", en: "to them / to you (formal)" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the dative article",
          intro: "der→dem, die→der, das→dem, plural→den.",
          items: [
            {
              template: "Ich gebe ___ Mann das Buch.",
              answer: "dem",
              en: "I give the man the book.",
              options: ["der", "dem", "den", "das"],
            },
            {
              template: "Ich gebe ___ Frau die Blume.",
              answer: "der",
              en: "I give the woman the flower.",
              options: ["die", "der", "dem", "den"],
            },
            {
              template: "Ich gebe ___ Kind den Ball.",
              answer: "dem",
              en: "I give the child the ball.",
              options: ["das", "der", "dem", "den"],
            },
            {
              template: "Ich gebe ___ Kindern die Bücher.",
              answer: "den",
              en: "I give the children the books.",
              options: ["die", "der", "dem", "den"],
            },
            {
              template: "Sie schenkt ___ Mann eine Uhr.",
              answer: "einem",
              en: "She gives a man a watch.",
              options: ["ein", "einem", "einer", "einen"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Nominative or dative?",
          questions: [
            {
              q: "Which word is in the dative in 'Ich gebe dem Kind den Ball'?",
              options: ["Ich", "dem Kind", "den Ball", "gebe"],
              correct: 1,
            },
            {
              q: "The dative of 'die Frau' (singular) is…",
              options: ["dem Frau", "der Frau", "den Frau", "die Frau"],
              correct: 1,
            },
            {
              q: "In the plural dative, the noun gets…",
              options: ["an -s", "no change", "an extra -n", "an umlaut"],
              correct: 2,
            },
            {
              q: "The test question for the dative is…",
              options: ["wer?", "wen?", "wem?", "was?"],
              correct: 2,
            },
          ],
        },
      ],
    },
    {
      slug: "dative-case-verbs",
      title: "Dative verbs & mir/dir/ihm/ihr",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Verbs that demand the dative",
          body: [
            "A handful of common German verbs take their object in the <strong>dative</strong> even when English would use a plain object. Learn them as a set: <strong>helfen</strong> (to help), <strong>danken</strong> (to thank), <strong>gefallen</strong> (to please/like), <strong>gehören</strong> (to belong to), <strong>antworten</strong> (to answer), <strong>folgen</strong> (to follow).",
            "<em>Ich helfe dir</em> = I help you — not <em>dich</em>. <em>Ich danke Ihnen</em> = I thank you (formal).",
            "<strong>gefallen</strong> flips the logic of English \"to like\": the thing liked is the subject, the person is in the dative. <em>Das Buch gefällt mir</em> = literally \"the book pleases me\" = I like the book.",
            "<strong>gehören</strong> works the same way: <em>Das Auto gehört mir</em> = the car belongs to me / is mine.",
          ],
          keyPoint:
            "helfen, danken, gefallen, gehören, antworten, folgen all take the dative. gefällt mir = I like it. gehört mir = it's mine.",
        },
        {
          type: "conjugation",
          heading: "helfen (+ dative) in the present",
          verb: "helfen",
          meaning: "to help (takes a dative object)",
          intro: "The object of helfen is always dative: mir, dir, ihm, ihr…",
          tenses: [
            {
              name: "Present tense",
              forms: [
                { person: "ich", form: "helfe", en: "I help" },
                { person: "du", form: "hilfst", en: "you help (e→i vowel change)" },
                { person: "er/sie/es", form: "hilft", en: "he/she helps" },
                { person: "wir", form: "helfen", en: "we help" },
                { person: "ihr", form: "helft", en: "you all help" },
                { person: "sie/Sie", form: "helfen", en: "they / you (formal) help" },
              ],
            },
            {
              name: "With dative objects",
              forms: [
                { person: "Ich helfe dir.", form: "dir", en: "I help you." },
                { person: "Er hilft ihr.", form: "ihr", en: "He helps her." },
                { person: "Wir helfen ihm.", form: "ihm", en: "We help him." },
                { person: "Sie hilft uns.", form: "uns", en: "She helps us." },
                { person: "Ich danke Ihnen.", form: "Ihnen", en: "I thank you (formal)." },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Dative verbs in action",
          items: [
            { l1: "helfen", en: "to help", note: "Ich helfe dir. + dative." },
            { l1: "danken", en: "to thank", note: "Ich danke dir. + dative." },
            { l1: "gefallen", en: "to please / to like", note: "Es gefällt mir. The liked thing is subject." },
            { l1: "gehören", en: "to belong to", note: "Das gehört mir. = That's mine." },
            { l1: "antworten", en: "to answer (a person)", note: "Ich antworte dir. + dative." },
            { l1: "folgen", en: "to follow", note: "Folgen Sie mir. = Follow me." },
            { l1: "passen", en: "to fit / suit", note: "Das passt mir. = That fits me / suits me." },
            { l1: "schmecken", en: "to taste good (to)", note: "Es schmeckt mir. = It tastes good to me." },
            { l1: "Das gefällt mir.", en: "I like that." },
            { l1: "Das gehört dir.", en: "That's yours." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the dative pronoun",
          intro: "mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen.",
          items: [
            {
              template: "Kannst du ___ helfen? (to me)",
              answer: "mir",
              en: "Can you help me?",
              options: ["mich", "mir", "ich", "mein"],
            },
            {
              template: "Das Buch gefällt ___ sehr. (to me)",
              answer: "mir",
              en: "I really like the book.",
              options: ["mich", "mir", "ich", "meiner"],
            },
            {
              template: "Das Auto gehört ___. (to him)",
              answer: "ihm",
              en: "The car belongs to him.",
              options: ["ihn", "er", "ihm", "sein"],
            },
            {
              template: "Ich danke ___ für die Hilfe. (formal you)",
              answer: "Ihnen",
              en: "I thank you for the help.",
              options: ["Sie", "Ihnen", "dich", "dir"],
            },
            {
              template: "Die Schuhe passen ___ gut. (to her)",
              answer: "ihr",
              en: "The shoes fit her well.",
              options: ["sie", "ihr", "ihm", "ihre"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Can you help me? I really like this jacket, but it doesn't fit me.",
          reference: "Kannst du mir helfen? Diese Jacke gefällt mir sehr, aber sie passt mir nicht.",
          hint: "helfen, gefallen and passen all take the dative pronoun mir.",
        },
      ],
    },
    {
      slug: "dative-case-prepositions",
      title: "Dative prepositions: mit, bei, nach…",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Prepositions that always take the dative",
          body: [
            "Some prepositions <strong>always</strong> trigger the dative on the noun that follows, no matter the meaning. Memorise the set: <strong>mit, bei, nach, von, zu, aus, seit, gegenüber</strong>.",
            "A common mnemonic chant is <em>aus, bei, mit, nach, seit, von, zu</em> — say it until it sticks.",
            "Watch the contractions: <em>bei dem → beim</em>, <em>von dem → vom</em>, <em>zu dem → zum</em>, <em>zu der → zur</em>. <em>Ich gehe zum Arzt</em> = I'm going to the doctor.",
            "Quick meanings: <em>mit</em> = with, <em>bei</em> = at/near/with (someone's place), <em>nach</em> = after / to (cities & countries), <em>von</em> = from / of, <em>zu</em> = to (people/places), <em>aus</em> = out of / from (origin), <em>seit</em> = since / for (time).",
          ],
          keyPoint:
            "Always-dative prepositions: aus, bei, mit, nach, seit, von, zu (+ gegenüber). Contractions: beim, vom, zum, zur.",
        },
        {
          type: "conjugation",
          heading: "Full dative declension table",
          verb: "der / die / das / plural",
          meaning: "definite article across the genders in the dative",
          intro: "This is the core table to memorise — note die→der and the plural -n on the noun.",
          tenses: [
            {
              name: "Definite article (dative)",
              forms: [
                { person: "masculine (der)", form: "dem Mann", en: "to/with the man" },
                { person: "feminine (die)", form: "der Frau", en: "to/with the woman" },
                { person: "neuter (das)", form: "dem Kind", en: "to/with the child" },
                { person: "plural (die)", form: "den Kindern", en: "to/with the children (+ -n)" },
              ],
            },
            {
              name: "Indefinite & possessive (dative)",
              forms: [
                { person: "ein Mann →", form: "einem Mann", en: "to a man" },
                { person: "eine Frau →", form: "einer Frau", en: "to a woman" },
                { person: "ein Kind →", form: "einem Kind", en: "to a child" },
                { person: "mein Bruder →", form: "meinem Bruder", en: "to my brother" },
                { person: "meine Schwester →", form: "meiner Schwester", en: "to my sister" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Dative prepositions in context",
          items: [
            { l1: "mit", en: "with", note: "mit dem Bus = by bus." },
            { l1: "bei", en: "at / near / at someone's place", note: "bei mir = at my place; beim Arzt." },
            { l1: "nach", en: "after / to (cities, countries)", note: "nach Berlin; nach der Arbeit." },
            { l1: "von", en: "from / of", note: "von der Arbeit; vom Bahnhof." },
            { l1: "zu", en: "to (people / places)", note: "zum Arzt; zur Schule." },
            { l1: "aus", en: "out of / from (origin)", note: "aus dem Haus; aus Deutschland." },
            { l1: "seit", en: "since / for (time)", note: "seit einem Jahr = for a year." },
            { l1: "gegenüber", en: "opposite / across from", note: "Often follows its noun: dem Bahnhof gegenüber." },
            { l1: "mit dem Bus / Auto", en: "by bus / car" },
            { l1: "Ich fahre nach Berlin.", en: "I'm going to Berlin." },
            { l1: "Ich wohne bei meiner Mutter.", en: "I live at my mother's place." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Preposition + dative",
          intro: "Use the dative article after these prepositions.",
          items: [
            {
              template: "Ich fahre mit ___ Bus zur Arbeit.",
              answer: "dem",
              en: "I go to work by bus.",
              options: ["der", "dem", "den", "das"],
            },
            {
              template: "Nach ___ Arbeit gehe ich nach Hause.",
              answer: "der",
              en: "After work I go home.",
              options: ["die", "der", "dem", "den"],
            },
            {
              template: "Ich wohne bei ___ Mutter. (my)",
              answer: "meiner",
              en: "I live at my mother's place.",
              options: ["meine", "meiner", "meinem", "mein"],
            },
            {
              template: "Wir kommen gerade ___ dem Kino.",
              answer: "aus",
              en: "We're just coming out of the cinema.",
              options: ["aus", "mit", "zu", "seit"],
            },
            {
              template: "Ich gehe ___ Arzt. (zu + dem)",
              answer: "zum",
              en: "I'm going to the doctor.",
              options: ["zum", "zur", "zu der", "beim"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in the correct order.",
          items: [
            { tokens: ["Ich", "fahre", "mit", "dem", "Zug", "nach", "Berlin"], alts: [["Ich", "fahre", "nach", "Berlin", "mit", "dem", "Zug"]], en: "I'm travelling to Berlin by train." },
            { tokens: ["Wir", "wohnen", "bei", "unseren", "Freunden"], en: "We are staying at our friends' place." },
            { tokens: ["Sie", "kommt", "gerade", "von", "der", "Arbeit"], en: "She is just coming from work." },
            { tokens: ["Seit", "einem", "Jahr", "lerne", "ich", "Deutsch"], en: "I've been learning German for a year." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm going to the doctor by bus after work.",
          reference: "Ich fahre nach der Arbeit mit dem Bus zum Arzt.",
          hint: "nach der Arbeit (f. dative), mit dem Bus (m. dative), zum Arzt (zu + dem).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which preposition does NOT always take the dative?",
              options: ["mit", "bei", "für", "nach"],
              correct: 2,
            },
            {
              q: "'mit der Bus' — the correct form is…",
              options: ["mit der Bus", "mit dem Bus", "mit den Bus", "mit das Bus"],
              correct: 1,
            },
            {
              q: "'zu dem Arzt' contracts to…",
              options: ["zur Arzt", "zum Arzt", "zoom Arzt", "zu Arzt"],
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
        q: "The dative case marks the…",
        options: ["subject", "direct object", "indirect object (receiver)", "possessor"],
        correct: 2,
      },
      {
        q: "The dative of 'der Mann' is…",
        options: ["der Mann", "den Mann", "dem Mann", "des Mannes"],
        correct: 2,
      },
      {
        q: "The dative of 'die Frau' (singular) is…",
        options: ["dem Frau", "der Frau", "den Frau", "die Frau"],
        correct: 1,
      },
      {
        q: "In the plural dative, the noun adds…",
        options: ["-s", "-n", "-er", "nothing"],
        correct: 1,
      },
      {
        q: "'I help you' (informal) =",
        options: ["Ich helfe dich.", "Ich helfe du.", "Ich helfe dir.", "Ich helfe dein."],
        correct: 2,
      },
      {
        q: "'I like the book' in German literally uses gefallen as…",
        options: [
          "Ich gefalle das Buch.",
          "Das Buch gefällt mir.",
          "Ich mag dem Buch.",
          "Das Buch gefällt mich.",
        ],
        correct: 1,
      },
      {
        q: "'Das Auto gehört ___.' (to him) =",
        options: ["ihn", "er", "ihm", "sein"],
        correct: 2,
      },
      {
        q: "Which preposition always takes the dative?",
        options: ["für", "ohne", "mit", "durch"],
        correct: 2,
      },
      {
        q: "'zu der Schule' contracts to…",
        options: ["zum Schule", "zur Schule", "zu Schule", "zus Schule"],
        correct: 1,
      },
      {
        q: "Translate: 'I'm travelling to Berlin by train.'",
        options: [
          "Ich fahre mit den Zug nach Berlin.",
          "Ich fahre mit dem Zug nach Berlin.",
          "Ich fahre mit der Zug zu Berlin.",
          "Ich fahre bei dem Zug nach Berlin.",
        ],
        correct: 1,
      },
    ],
  },
};
