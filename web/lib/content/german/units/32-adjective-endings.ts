import type { Unit } from "../../types";

export const UNIT_ADJECTIVE_ENDINGS: Unit = {
  slug: "adjective-endings",
  stage: 7,
  order: 32,
  icon: "✍️",
  title: "Adjective endings",
  tagline: "The der/die/das adjective declension tables, demystified.",
  badge: "core",
  lessons: [
    {
      slug: "adjective-endings-weak",
      title: "After der/die/das (weak declension)",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Why German adjectives grow endings",
          body: [
            "An adjective only takes an ending when it sits <em>in front of a noun</em>. After a verb it stays bare: <em>Der Wein ist rot</em> ('The wine is red') — no ending. But <em>der rot<strong>e</strong> Wein</em> ('the red wine') — ending added.",
            "Which ending depends on three things: the noun's <strong>gender</strong>, its <strong>case</strong>, and <strong>what kind of word comes before</strong> the adjective.",
            "When a <strong>definite article</strong> (der/die/das) already shows the gender and case, the adjective barely has to work — this is the <strong>weak</strong> declension, and it only ever uses <strong>-e</strong> or <strong>-en</strong>.",
          ],
          tip: {
            label: "The shortcut",
            body: "After der/die/das, the rule is almost a slogan: in the <em>nominative singular</em> and the neuter/feminine <em>accusative</em>, the ending is <strong>-e</strong>. <em>Everywhere else</em> it's <strong>-en</strong>.",
          },
          keyPoint:
            "Adjective gets an ending only before a noun. After der/die/das (weak), it's only ever -e or -en.",
        },
        {
          type: "conjugation",
          heading: "Weak endings — nominative (the subject)",
          verb: "der rote Wein",
          meaning: "weak declension, nominative case",
          intro: "After der/die/das in the nominative, it's -e everywhere in the singular, -en in the plural.",
          tenses: [
            {
              name: "Nominative",
              forms: [
                { person: "masculine", form: "der rote Wein", en: "the red wine" },
                { person: "feminine", form: "die kalte Milch", en: "the cold milk" },
                { person: "neuter", form: "das kleine Bier", en: "the small beer" },
                { person: "plural", form: "die roten Weine", en: "the red wines" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "Weak endings — accusative (the object)",
          verb: "den roten Wein",
          meaning: "weak declension, accusative case",
          intro: "Only the masculine changes from nominative: der → den, rote → roten. Feminine & neuter stay -e.",
          tenses: [
            {
              name: "Accusative",
              forms: [
                { person: "masculine", form: "den roten Wein", en: "the red wine (object)" },
                { person: "feminine", form: "die kalte Milch", en: "the cold milk (object)" },
                { person: "neuter", form: "das kleine Bier", en: "the small beer (object)" },
                { person: "plural", form: "die roten Weine", en: "the red wines (object)" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "The whole weak table at a glance",
          body: "Picture a 4×4 grid. The <strong>-e</strong> cells form an L in the top-left: masculine/feminine/neuter <em>nominative</em>, plus feminine/neuter <em>accusative</em>. <strong>Every other cell is -en</strong> — including everything in the dative and genitive, the whole plural, and the masculine accusative.",
          example: { l1: "Ich trinke den roten Wein und das kleine Bier.", en: "I'm drinking the red wine and the small beer." },
        },
        {
          type: "fillBlank",
          heading: "Add the weak ending",
          intro: "After der/die/das/den — choose -e or -en.",
          items: [
            {
              template: "Der rot___ Wein ist aus Italien. (nom., masc.)",
              answer: "e",
              en: "The red wine is from Italy.",
              options: ["e", "en", "es", "er"],
            },
            {
              template: "Ich nehme den rot___ Wein. (acc., masc.)",
              answer: "en",
              en: "I'll take the red wine.",
              options: ["en", "e", "es", "er"],
            },
            {
              template: "Das klein___ Bier, bitte. (nom./acc., neut.)",
              answer: "e",
              en: "The small beer, please.",
              options: ["e", "en", "es", "er"],
            },
            {
              template: "Die kalt___ Milch steht im Kühlschrank. (nom., fem.)",
              answer: "e",
              en: "The cold milk is in the fridge.",
              options: ["e", "en", "es", "er"],
            },
            {
              template: "Mit den frisch___ Brötchen. (dat., plural)",
              answer: "en",
              en: "With the fresh rolls.",
              options: ["en", "e", "es", "er"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Weak ending check",
          questions: [
            {
              q: "After der/die/das, the adjective ending is only ever…",
              options: ["-e or -en", "-er or -es", "-em or -en", "-e or -er"],
              correct: 0,
            },
            {
              q: "'I'm drinking the red wine.' — fill the gap: Ich trinke den rot__ Wein.",
              options: ["-e", "-en", "-es", "-er"],
              correct: 1,
            },
            {
              q: "Why does '__ ist rot' (Der Wein __ ist rot) take NO ending on rot?",
              options: [
                "Because wine is masculine",
                "Because the adjective comes after the verb, not before the noun",
                "Because it's plural",
                "Because of the dative",
              ],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "adjective-endings-mixed",
      title: "After ein/kein/mein (mixed declension)",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "When the article can't do all the work",
          body: [
            "<strong>ein</strong>, <strong>kein</strong>, and the possessives (<strong>mein</strong>, <strong>dein</strong>, <strong>sein</strong>…) sometimes carry no ending themselves — <em>ein</em> Wein, <em>ein</em> Bier look identical for masculine and neuter.",
            "So in three spots the adjective has to step in and show the gender. This is the <strong>mixed</strong> declension: mostly like the weak endings, but with three 'strong' endings borrowed where <em>ein</em> is bare.",
            "Those three spots: masculine nominative takes <strong>-er</strong>, neuter nominative <em>and</em> accusative take <strong>-es</strong>. Everywhere else, it's the familiar weak <strong>-e / -en</strong>.",
          ],
          keyPoint:
            "After ein/kein/mein: masc. nom. = -er, neut. nom./acc. = -es. Everywhere else, the weak -e / -en.",
        },
        {
          type: "conjugation",
          heading: "Mixed endings — nominative",
          verb: "ein roter Wein",
          meaning: "mixed declension, nominative case",
          intro: "Where 'ein' shows no gender, the adjective does: -er (masc.), -es (neut.).",
          tenses: [
            {
              name: "Nominative",
              forms: [
                { person: "masculine", form: "ein roter Wein", en: "a red wine" },
                { person: "feminine", form: "eine kalte Milch", en: "a cold milk" },
                { person: "neuter", form: "ein kleines Bier", en: "a small beer" },
                { person: "plural (kein/meine)", form: "keine roten Weine", en: "no red wines" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "Mixed endings — accusative",
          verb: "einen roten Wein",
          meaning: "mixed declension, accusative case",
          intro: "Masculine shifts to -en (ein → einen). Neuter keeps -es; feminine keeps -e.",
          tenses: [
            {
              name: "Accusative",
              forms: [
                { person: "masculine", form: "einen roten Wein", en: "a red wine (object)" },
                { person: "feminine", form: "eine kalte Milch", en: "a cold milk (object)" },
                { person: "neuter", form: "ein kleines Bier", en: "a small beer (object)" },
                { person: "plural (kein/meine)", form: "keine roten Weine", en: "no red wines (object)" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Spot the difference from weak",
          body: "Compare: <em>das klein<strong>e</strong> Bier</em> (after <em>das</em>, weak) vs <em>ein klein<strong>es</strong> Bier</em> (after <em>ein</em>, mixed). The adjective grew an extra <strong>-s</strong> because <em>ein</em> — unlike <em>das</em> — doesn't signal 'neuter' on its own. Same logic gives you <em>ein rot<strong>er</strong> Wein</em> vs <em>der rot<strong>e</strong> Wein</em>.",
          example: { l1: "Ein kleines Bier und ein roter Wein, bitte.", en: "A small beer and a red wine, please." },
        },
        {
          type: "fillBlank",
          heading: "Add the mixed ending",
          intro: "After ein/kein/mein — watch the three -er / -es spots.",
          items: [
            {
              template: "Das ist ein rot___ Wein. (nom., masc.)",
              answer: "er",
              en: "That is a red wine.",
              options: ["er", "e", "es", "en"],
            },
            {
              template: "Ich möchte ein klein___ Bier. (acc., neut.)",
              answer: "es",
              en: "I'd like a small beer.",
              options: ["es", "e", "en", "er"],
            },
            {
              template: "Ich trinke einen rot___ Wein. (acc., masc.)",
              answer: "en",
              en: "I'm drinking a red wine.",
              options: ["en", "er", "es", "e"],
            },
            {
              template: "Eine kalt___ Milch, bitte. (nom., fem.)",
              answer: "e",
              en: "A cold milk, please.",
              options: ["e", "en", "es", "er"],
            },
            {
              template: "Das ist mein neu___ Auto. (nom., neut.)",
              answer: "es",
              en: "That is my new car.",
              options: ["es", "e", "er", "en"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like a small beer and a red wine, please.",
          reference: "Ich möchte ein kleines Bier und einen roten Wein, bitte.",
          hint: "Neuter accusative 'ein kleines Bier' (-es); masculine accusative 'einen roten Wein' (-en).",
        },
      ],
    },
    {
      slug: "adjective-endings-strong",
      title: "No article (strong) + practice",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "When nothing comes before the adjective",
          body: [
            "If there's <strong>no article at all</strong> — common with drinks, food, materials, and abstract nouns — the adjective has to do <em>all</em> the gender/case work itself. This is the <strong>strong</strong> declension.",
            "The trick: the strong endings copy the <em>der/die/das</em> word almost exactly. Masculine nom. <em>der</em> → <strong>-er</strong>, neuter <em>das</em> → <strong>-es</strong>, feminine <em>die</em> → <strong>-e</strong>, plural <em>die</em> → <strong>-e</strong>.",
            "So <em>guter Wein</em> ('good wine'), <em>kaltes Bier</em> ('cold beer'), <em>frische Milch</em> ('fresh milk'), <em>rote Weine</em> ('red wines'). The adjective ending mimics the article that isn't there.",
          ],
          keyPoint:
            "No article = strong = the adjective ending copies der/die/das: -er (masc.), -es (neut.), -e (fem. & plural) in nom.",
        },
        {
          type: "conjugation",
          heading: "Strong endings — no article",
          verb: "guter Wein",
          meaning: "strong declension, nominative & accusative",
          intro: "With no article the adjective shows everything. Note neuter accusative stays -es.",
          tenses: [
            {
              name: "Nominative (no article)",
              forms: [
                { person: "masculine", form: "guter Wein", en: "good wine" },
                { person: "feminine", form: "frische Milch", en: "fresh milk" },
                { person: "neuter", form: "kaltes Bier", en: "cold beer" },
                { person: "plural", form: "rote Weine", en: "red wines" },
              ],
            },
            {
              name: "Accusative (no article)",
              forms: [
                { person: "masculine", form: "guten Wein", en: "good wine (object)" },
                { person: "feminine", form: "frische Milch", en: "fresh milk (object)" },
                { person: "neuter", form: "kaltes Bier", en: "cold beer (object)" },
                { person: "plural", form: "rote Weine", en: "red wines (object)" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Three declensions, one logic",
          body: "Think of it as a relay. <strong>Weak</strong> (after der/die/das): the article carries the info, so the adjective relaxes into <em>-e/-en</em>. <strong>Mixed</strong> (after ein/kein/mein): the article is sometimes lazy, so the adjective covers three gaps with <em>-er/-es</em>. <strong>Strong</strong> (no article): the adjective does everything, copying der/die/das. Someone always shows the gender — article or adjective.",
          example: { l1: "Ich kaufe guten Käse, frische Milch und kaltes Bier.", en: "I'm buying good cheese, fresh milk, and cold beer." },
        },
        {
          type: "fillBlank",
          heading: "Strong endings — no article",
          items: [
            {
              template: "Ich trinke gern kalt___ Bier. (acc., neut.)",
              answer: "es",
              en: "I like drinking cold beer.",
              options: ["es", "e", "en", "er"],
            },
            {
              template: "Gut___ Wein ist nicht immer teuer. (nom., masc.)",
              answer: "er",
              en: "Good wine isn't always expensive.",
              options: ["er", "e", "es", "en"],
            },
            {
              template: "Wir kaufen frisch___ Milch. (acc., fem.)",
              answer: "e",
              en: "We're buying fresh milk.",
              options: ["e", "en", "es", "er"],
            },
            {
              template: "Sie verkaufen rot___ Weine aus Spanien. (acc., plural)",
              answer: "e",
              en: "They sell red wines from Spain.",
              options: ["e", "en", "es", "er"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which declension, which ending?",
          questions: [
            {
              q: "No article: 'I'm buying good cheese.' Ich kaufe gut__ Käse. (masc. acc.)",
              options: ["-en", "-er", "-es", "-e"],
              correct: 0,
            },
            {
              q: "Strong endings copy which words?",
              options: ["ein/kein", "der/die/das", "the personal pronouns", "the verbs"],
              correct: 1,
            },
            {
              q: "'a small beer' (neuter accusative) is…",
              options: ["ein kleine Bier", "ein kleinen Bier", "ein kleines Bier", "ein kleiner Bier"],
              correct: 2,
            },
            {
              q: "'the red wine' as an object (masc. acc.) is…",
              options: ["der rote Wein", "den roten Wein", "den rote Wein", "der roten Wein"],
              correct: 1,
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I like drinking cold beer and good red wine.",
          reference: "Ich trinke gern kaltes Bier und guten roten Wein.",
          hint: "No article = strong: neuter 'kaltes Bier' (-es), masculine accusative 'guten roten Wein' (-en).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "With NO article, the adjective ending copies…",
              options: ["der/die/das", "ein/kein", "nothing", "the verb"],
              correct: 0,
            },
            {
              q: "'cold beer' (no article, neuter) is…",
              options: ["kalte Bier", "kalten Bier", "kaltes Bier", "kalter Bier"],
              correct: 2,
            },
            {
              q: "After 'das', the ending is always…",
              options: ["-er or -es", "-e or -en", "-em or -en", "-es only"],
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
        q: "An adjective takes an ending when it…",
        options: [
          "comes after the verb (Der Wein ist rot)",
          "sits in front of the noun (der rote Wein)",
          "is plural only",
          "never — German adjectives don't change",
        ],
        correct: 1,
      },
      {
        q: "After der/die/das (weak), the ending is only ever…",
        options: ["-er or -es", "-e or -en", "-em or -er", "-es or -en"],
        correct: 1,
      },
      {
        q: "'the red wine' as a direct object (masc. acc.):",
        options: ["der rote Wein", "den roten Wein", "den rote Wein", "der roten Wein"],
        correct: 1,
      },
      {
        q: "'the small beer' (neuter, nom./acc.):",
        options: ["das kleine Bier", "das kleines Bier", "das kleinen Bier", "das kleiner Bier"],
        correct: 0,
      },
      {
        q: "After ein/kein/mein, the masculine nominative ending is…",
        options: ["-e", "-en", "-er", "-es"],
        correct: 2,
      },
      {
        q: "'a small beer' (mixed, neuter acc.):",
        options: ["ein kleine Bier", "ein kleines Bier", "ein kleinen Bier", "ein kleiner Bier"],
        correct: 1,
      },
      {
        q: "'I'm drinking a red wine.' Ich trinke einen rot__ Wein.",
        options: ["-er", "-es", "-en", "-e"],
        correct: 2,
      },
      {
        q: "With NO article (strong), the adjective endings copy…",
        options: ["ein/kein", "der/die/das", "the pronouns", "the case alone"],
        correct: 1,
      },
      {
        q: "'cold beer' (no article, neuter):",
        options: ["kalte Bier", "kaltes Bier", "kalten Bier", "kalter Bier"],
        correct: 1,
      },
      {
        q: "Translate: 'a small beer and a red wine'.",
        options: [
          "ein kleines Bier und einen roten Wein",
          "ein kleine Bier und ein rote Wein",
          "einen kleinen Bier und ein roter Wein",
          "ein kleiner Bier und einen rote Wein",
        ],
        correct: 0,
      },
    ],
  },
};
