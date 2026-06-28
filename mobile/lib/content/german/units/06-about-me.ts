import type { Unit } from "../../types";

export const UNIT_ABOUT_ME: Unit = {
  slug: "about-me",
  stage: 2,
  order: 6,
  icon: "🪪",
  title: "About me",
  tagline: "Nationalities, jobs, family, mein/dein possessives.",
  badge: "tourist",
  lessons: [
    {
      slug: "about-me-countries",
      title: "Countries & nationalities",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Where you're from, two ways",
          body: [
            "To say where you come from, use <strong>kommen aus</strong> + country: <em>Ich komme aus den USA</em> (\"I come from the USA\").",
            "To state your nationality, German uses a noun, not an adjective — and it changes for men and women: a man is <em>Deutscher</em>, a woman is <em>Deutsche</em>. <em>Ich bin Deutscher / Ich bin Deutsche</em>.",
            "Most country names take no article (<em>aus Deutschland</em>), but a few do: <em>aus der Schweiz</em>, <em>aus der Türkei</em>, <em>aus den USA</em>. Languages match the nationality: <em>Deutsch</em>, <em>Englisch</em>, <em>Spanisch</em>.",
          ],
          keyPoint:
            "kommen aus + country. Nationality is a noun that differs by gender: Deutscher (m) / Deutsche (f).",
        },
        {
          type: "vocab",
          heading: "Countries & nationalities",
          intro: "Nationalities are nouns and capitalized; the female form usually adds -in.",
          items: [
            { l1: "Deutschland", en: "Germany", note: "aus Deutschland" },
            { l1: "der Deutsche / die Deutsche", en: "German man / woman", note: "Ich bin Deutscher / Deutsche" },
            { l1: "Österreich", en: "Austria", note: "der Österreicher / die Österreicherin" },
            { l1: "die Schweiz", en: "Switzerland", note: "takes an article: aus der Schweiz" },
            { l1: "die USA", en: "the USA", note: "plural; aus den USA; der Amerikaner / die Amerikanerin" },
            { l1: "England", en: "England", note: "der Engländer / die Engländerin" },
            { l1: "Frankreich", en: "France", note: "der Franzose / die Französin" },
            { l1: "Spanien", en: "Spain", note: "der Spanier / die Spanierin" },
            { l1: "Italien", en: "Italy", note: "der Italiener / die Italienerin" },
          ],
        },
        {
          type: "dialogue",
          heading: "Small talk on the U-Bahn",
          setup: "Two people chat on the Berlin subway.",
          lines: [
            { speaker: "Jonas", l1: "Woher kommst du?", en: "Where are you from?" },
            { speaker: "You", l1: "Ich komme aus den USA. Ich bin Amerikanerin.", en: "I come from the USA. I'm American (female)." },
            { speaker: "Jonas", l1: "Und du sprichst schon Deutsch!", en: "And you already speak German!" },
            { speaker: "You", l1: "Ein bisschen. Und du? Bist du Deutscher?", en: "A little. And you? Are you German?" },
            { speaker: "Jonas", l1: "Ja, aber meine Mutter kommt aus der Schweiz.", en: "Yes, but my mother is from Switzerland." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Country or nationality?",
          items: [
            {
              template: "Ich komme ___ Deutschland.",
              answer: "aus",
              en: "I come from Germany.",
              options: ["aus", "in", "von", "nach"],
            },
            {
              template: "Maria ist ___. (Spain, female)",
              answer: "Spanierin",
              en: "Maria is Spanish.",
              options: ["Spanien", "Spanier", "Spanierin", "Spanisch"],
            },
            {
              template: "Wir kommen aus ___ Schweiz.",
              answer: "der",
              en: "We come from Switzerland.",
              options: ["die", "der", "den", "das"],
            },
            {
              template: "Er ist ___. (Germany, male)",
              answer: "Deutscher",
              en: "He is German.",
              options: ["Deutsch", "Deutscher", "Deutsche", "Deutschland"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I come from England and I am English. (said by a woman)",
          reference: "Ich komme aus England und ich bin Engländerin.",
          hint: "kommen aus + country; nationality is a noun, female form ends in -in.",
        },
      ],
    },
    {
      slug: "about-me-jobs",
      title: "Jobs & what you do",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Stating your job needs no article",
          body: [
            "When you say your profession with <em>sein</em>, German drops the article: <em>Ich bin Lehrer</em> (\"I am a teacher\") — not <em>ein Lehrer</em>. English keeps the \"a\"; German leaves it out.",
            "Like nationalities, job titles change by gender. A male teacher is <em>Lehrer</em>; a female teacher is <em>Lehrerin</em>. The female form almost always adds <strong>-in</strong>.",
            "You can also ask <em>Was sind Sie von Beruf?</em> (\"What's your profession?\"). The phrase <strong>von Beruf</strong> literally means \"by profession.\"",
          ],
          keyPoint:
            "Ich bin Lehrer — no article after sein when naming a job. Female form adds -in: Lehrerin.",
        },
        {
          type: "vocab",
          heading: "Common jobs",
          intro: "The male form is listed first; the female form adds -in.",
          items: [
            { l1: "der Lehrer / die Lehrerin", en: "teacher" },
            { l1: "der Arzt / die Ärztin", en: "doctor", note: "note the ä in the female form" },
            { l1: "der Student / die Studentin", en: "university student" },
            { l1: "der Ingenieur / die Ingenieurin", en: "engineer" },
            { l1: "der Kellner / die Kellnerin", en: "waiter / waitress" },
            { l1: "der Verkäufer / die Verkäuferin", en: "salesperson" },
            { l1: "der Programmierer / die Programmiererin", en: "programmer" },
            { l1: "der Künstler / die Künstlerin", en: "artist" },
            { l1: "der Beruf", en: "profession", note: "Was sind Sie von Beruf?" },
          ],
        },
        {
          type: "dialogue",
          heading: "At a Berlin networking event",
          setup: "You meet someone at a startup mixer.",
          lines: [
            { speaker: "Sara", l1: "Was sind Sie von Beruf?", en: "What's your profession?" },
            { speaker: "You", l1: "Ich bin Programmiererin. Und Sie?", en: "I'm a programmer. And you?" },
            { speaker: "Sara", l1: "Ich bin Ärztin. Ich arbeite hier in Berlin.", en: "I'm a doctor. I work here in Berlin." },
            { speaker: "You", l1: "Interessant! Arbeiten Sie in einem Krankenhaus?", en: "Interesting! Do you work in a hospital?" },
            { speaker: "Sara", l1: "Ja, in der Charité.", en: "Yes, at the Charité." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Name the job",
          items: [
            {
              template: "Ich bin ___. (teacher, female)",
              answer: "Lehrerin",
              en: "I am a teacher.",
              options: ["Lehrer", "Lehrerin", "ein Lehrer", "Lehre"],
            },
            {
              template: "Er ist ___. (doctor, male)",
              answer: "Arzt",
              en: "He is a doctor.",
              options: ["Ärztin", "Arzt", "ein Arzt", "Beruf"],
            },
            {
              template: "Was sind Sie ___ Beruf?",
              answer: "von",
              en: "What is your profession?",
              options: ["von", "aus", "in", "mit"],
            },
            {
              template: "Sie ist ___. (student, female)",
              answer: "Studentin",
              en: "She is a student.",
              options: ["Student", "Studentin", "ein Student", "Studium"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I am an engineer and I work in Berlin. (said by a man)",
          reference: "Ich bin Ingenieur und ich arbeite in Berlin.",
          hint: "No article after 'bin' for a job. 'arbeiten' is regular: ich arbeite.",
        },
      ],
    },
    {
      slug: "about-me-family",
      title: "Family & possessives",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "My, your, his, her",
          body: [
            "Possessives in German take the same endings as <em>ein/kein</em>. The base forms are <strong>mein</strong> (my), <strong>dein</strong> (your, informal), <strong>sein</strong> (his / its), <strong>ihr</strong> (her / their), <strong>Ihr</strong> (your, formal).",
            "They agree with the <em>thing owned</em>, not the owner. Feminine and plural nouns add <strong>-e</strong>: <em>mein Vater</em> (m), <em>meine Mutter</em> (f), <em>mein Kind</em> (n), <em>meine Eltern</em> (pl).",
            "A classic trap: <strong>sein</strong> = \"his\" but <strong>ihr</strong> = \"her.\" They follow the owner's gender, not the noun's: <em>ihr Bruder</em> = \"her brother.\"",
          ],
          keyPoint:
            "Possessives agree with the owned noun: mein Vater, meine Mutter, mein Kind, meine Eltern.",
        },
        {
          type: "vocab",
          heading: "The family",
          items: [
            { l1: "die Familie", en: "the family", note: "feminine" },
            { l1: "der Vater", en: "the father", note: "masculine; plural die Väter" },
            { l1: "die Mutter", en: "the mother", note: "feminine; plural die Mütter" },
            { l1: "die Eltern", en: "the parents", note: "plural only" },
            { l1: "der Bruder", en: "the brother", note: "masculine; plural die Brüder" },
            { l1: "die Schwester", en: "the sister", note: "feminine; plural die Schwestern" },
            { l1: "das Kind", en: "the child", note: "neuter; plural die Kinder" },
            { l1: "der Mann", en: "the husband / man", note: "masculine" },
            { l1: "die Frau", en: "the wife / woman", note: "feminine" },
          ],
        },
        {
          type: "conjugation",
          heading: "Possessives with the family",
          verb: "mein / dein / sein / ihr",
          meaning: "my / your / his / her",
          intro: "Watch the -e appear before feminine and plural nouns.",
          tenses: [
            {
              name: "my (mein)",
              forms: [
                { person: "mein Vater", form: "(masc)", en: "my father" },
                { person: "meine Mutter", form: "(fem)", en: "my mother" },
                { person: "mein Kind", form: "(neut)", en: "my child" },
                { person: "meine Eltern", form: "(plural)", en: "my parents" },
              ],
            },
            {
              name: "his vs her (sein / ihr)",
              forms: [
                { person: "sein Bruder", form: "(his)", en: "his brother" },
                { person: "seine Schwester", form: "(his)", en: "his sister" },
                { person: "ihr Bruder", form: "(her)", en: "her brother" },
                { person: "ihre Schwester", form: "(her)", en: "her sister" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Showing a photo",
          setup: "You show a friend a picture of your family.",
          lines: [
            { speaker: "Tim", l1: "Ist das deine Familie?", en: "Is that your family?" },
            { speaker: "You", l1: "Ja. Das ist meine Mutter und das ist mein Bruder.", en: "Yes. That's my mother and that's my brother." },
            { speaker: "Tim", l1: "Und wer ist das?", en: "And who is that?" },
            { speaker: "You", l1: "Das ist seine Frau. Sie heißt Anna.", en: "That's his wife. Her name is Anna." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the possessive",
          items: [
            {
              template: "Das ist ___ Mutter. (my)",
              answer: "meine",
              en: "That is my mother.",
              options: ["mein", "meine", "meinen", "ihr"],
            },
            {
              template: "Ist das ___ Bruder? (your, informal)",
              answer: "dein",
              en: "Is that your brother?",
              options: ["dein", "deine", "mein", "sein"],
            },
            {
              template: "Maria liebt ___ Kinder. (her)",
              answer: "ihre",
              en: "Maria loves her children.",
              options: ["ihr", "ihre", "sein", "seine"],
            },
            {
              template: "Peter besucht ___ Schwester. (his)",
              answer: "seine",
              en: "Peter visits his sister.",
              options: ["sein", "seine", "ihr", "ihre"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "That is my sister and that is her husband.",
          reference: "Das ist meine Schwester und das ist ihr Mann.",
          hint: "Schwester is feminine → meine. Mann is masculine → ihr (no -e).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Which is correct: 'my mother'?",
              options: ["mein Mutter", "meine Mutter", "meinen Mutter", "ihr Mutter"],
              correct: 1,
            },
            {
              q: "'ihr Bruder' means…",
              options: ["his brother", "my brother", "her brother", "your brother"],
              correct: 2,
            },
            {
              q: "Possessives in German agree with…",
              options: ["the owner", "the owned noun", "the verb", "nothing"],
              correct: 1,
            },
            {
              q: "Translate: 'his sister'",
              options: ["ihr Schwester", "seine Schwester", "ihre Schwester", "sein Schwester"],
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
        q: "Which preposition states where you're from? 'Ich komme ___ Deutschland.'",
        options: ["in", "aus", "nach", "von"],
        correct: 1,
      },
      {
        q: "A woman says she's German. Correct form?",
        options: ["Ich bin Deutsch.", "Ich bin Deutscher.", "Ich bin Deutsche.", "Ich bin Deutschland."],
        correct: 2,
      },
      {
        q: "Which country takes an article? 'Ich komme aus ___ Schweiz.'",
        options: ["die", "der", "den", "(none)"],
        correct: 1,
      },
      {
        q: "How do you state your job after 'sein'?",
        options: ["Ich bin ein Lehrer.", "Ich bin Lehrer.", "Ich habe Lehrer.", "Ich bin der Lehrer."],
        correct: 1,
      },
      {
        q: "Female form of 'Arzt' (doctor)?",
        options: ["Arztin", "Ärztin", "Arzte", "Arzterin"],
        correct: 1,
      },
      {
        q: "'Was sind Sie von ___?' asks about your profession.",
        options: ["Beruf", "Arbeit", "Job", "Stelle"],
        correct: 0,
      },
      {
        q: "Translate: 'my father'",
        options: ["meine Vater", "mein Vater", "meinen Vater", "ihr Vater"],
        correct: 1,
      },
      {
        q: "'ihre Schwester' means…",
        options: ["his sister", "her sister", "my sister", "your sister"],
        correct: 1,
      },
      {
        q: "Which adds -e? Possessive before a feminine noun like 'Mutter':",
        options: ["mein", "meine", "meinen", "meiner"],
        correct: 1,
      },
      {
        q: "Translate: 'his brother'",
        options: ["ihr Bruder", "sein Bruder", "seine Bruder", "ihre Bruder"],
        correct: 1,
      },
    ],
  },
};
