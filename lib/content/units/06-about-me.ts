import type { Unit } from "../types";

export const UNIT_ABOUT_ME: Unit = {
  slug: "about-me",
  stage: 2,
  order: 6,
  icon: "🪪",
  title: "About me",
  tagline: "Say where you're from, what you do, who's in your family. The first real conversation toolkit.",
  badge: "core",
  lessons: [
    {
      slug: "about-me-origin",
      title: "Nationality & where you're from",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Two ways to say where you're from",
          body: [
            "<strong>Sono + nationality</strong>: <em>Sono americano / americana</em>. The ending agrees with you — <strong>-o</strong> if male, <strong>-a</strong> if female. Plural would be <em>-i / -e</em>.",
            "<strong>Sono di + city</strong>: <em>Sono di New York</em>. Don't say <em>sono da</em> — that's wrong. The preposition is <em>di</em> for where you're FROM.",
            "If you live somewhere now, use <em>abito a + city</em>: <em>Abito a Boston</em>. Cities take <strong>a</strong>, countries take <strong>in</strong>: <em>Abito in Italia</em>.",
          ],
          keyPoint:
            "Sono di [city]. Sono [nationality+o/a]. Abito a [city] / in [country].",
        },
        {
          type: "vocab",
          heading: "Nationalities (m / f)",
          intro: "Italian nationalities are NOT capitalized.",
          items: [
            { it: "americano / americana", en: "American" },
            { it: "italiano / italiana", en: "Italian" },
            { it: "inglese", en: "English (same m/f, ends in -e)" },
            { it: "francese", en: "French (same m/f)" },
            { it: "tedesco / tedesca", en: "German" },
            { it: "spagnolo / spagnola", en: "Spanish" },
            { it: "canadese", en: "Canadian (same m/f)" },
            { it: "australiano / australiana", en: "Australian" },
            { it: "messicano / messicana", en: "Mexican" },
            { it: "giapponese", en: "Japanese (same m/f)" },
          ],
        },
        {
          type: "tip",
          heading: "Countries vs nationalities",
          body: "Country names ARE capitalized: <em>Stati Uniti, Italia, Inghilterra, Francia, Germania, Spagna, Canada, Australia, Messico, Giappone</em>. The adjective forms (the nationalities above) are lowercase.",
          example: { it: "Sono degli Stati Uniti.", en: "I'm from the United States." },
        },
        {
          type: "fillBlank",
          heading: "Sono / Abito / Sono di",
          items: [
            {
              template: "___ Boston, ma adesso vivo a Roma.",
              answer: "Sono di",
              en: "I'm from Boston, but now I live in Rome.",
              options: ["Sono di", "Abito a", "Sono in", "Vengo a"],
            },
            {
              template: "Lei ___ italiana.",
              answer: "è",
              en: "She is Italian.",
              options: ["sono", "sei", "è", "siete"],
            },
            {
              template: "Noi ___ in Italia per due settimane.",
              answer: "siamo",
              en: "We are in Italy for two weeks.",
              options: ["abitiamo", "siamo", "viviamo", "andiamo"],
            },
            {
              template: "Marco è francese ma ___ a Milano.",
              answer: "abita",
              en: "Marco is French but lives in Milan.",
              options: ["è", "ha", "abita", "viene"],
            },
            {
              template: "I miei amici ___ canadesi.",
              answer: "sono",
              en: "My friends are Canadian.",
              options: ["sono", "hanno", "abitano", "siamo"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "I'm American, I'm from New York, but I live in Rome for work.",
          reference: "Sono americano, sono di New York, ma abito a Roma per lavoro.",
          hint: "Two clauses linked by 'ma'. Cities use 'a'. 'For work' = 'per lavoro'.",
        },
      ],
    },
    {
      slug: "about-me-work-family",
      title: "Work & family",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Professions: just the noun, no 'a/an'",
          body: [
            "English says \"I'm <em>a</em> teacher.\" Italian drops the article: <em>Sono insegnante</em> — literally \"I am teacher.\" This is a small but constant trip-up for English speakers.",
            "Professions often have masculine and feminine forms: <em>insegnante</em> (m/f, same), <em>medico</em> (traditionally m; many now say <em>medica</em> for women), <em>avvocato / avvocata</em>.",
            "<em>Fare</em> is also useful: <em>Faccio l'ingegnere</em> = \"I work as an engineer.\" Here you DO use the article — that's the structure with <em>fare</em>.",
          ],
          keyPoint:
            "Sono [professione] — no article. OR — Faccio il/la [professione] — with article.",
        },
        {
          type: "vocab",
          heading: "Common professions",
          items: [
            { it: "insegnante", en: "teacher (m/f)" },
            { it: "studente / studentessa", en: "student" },
            { it: "medico", en: "doctor" },
            { it: "avvocato / avvocata", en: "lawyer" },
            { it: "ingegnere / ingegnera", en: "engineer" },
            { it: "infermiere / infermiera", en: "nurse" },
            { it: "cuoco / cuoca", en: "cook / chef" },
            { it: "cameriere / cameriera", en: "waiter / waitress" },
            { it: "operaio / operaia", en: "factory worker" },
            { it: "impiegato / impiegata", en: "office worker / clerk" },
            { it: "commesso / commessa", en: "shop assistant" },
            { it: "pensionato / pensionata", en: "retired person" },
          ],
        },
        {
          type: "vocab",
          heading: "Family",
          items: [
            { it: "la famiglia", en: "the family" },
            { it: "il padre / la madre", en: "father / mother" },
            { it: "papà / mamma", en: "dad / mom (informal)" },
            { it: "il figlio / la figlia", en: "son / daughter" },
            { it: "il fratello / la sorella", en: "brother / sister" },
            { it: "il marito / la moglie", en: "husband / wife" },
            { it: "il nonno / la nonna", en: "grandfather / grandmother" },
            { it: "lo zio / la zia", en: "uncle / aunt" },
            { it: "il cugino / la cugina", en: "cousin" },
            { it: "il fidanzato / la fidanzata", en: "boyfriend / girlfriend" },
            { it: "i genitori", en: "the parents (plural)" },
            { it: "i figli", en: "the children (or just sons)" },
          ],
        },
        {
          type: "dialogue",
          heading: "First small talk",
          setup: "Marco asks Anna about herself.",
          lines: [
            { speaker: "Marco", it: "Anna, di dove sei?", en: "Anna, where are you from?" },
            { speaker: "Anna", it: "Sono di Napoli, ma abito a Roma da cinque anni.", en: "I'm from Naples, but I've lived in Rome for five years." },
            { speaker: "Marco", it: "Cosa fai?", en: "What do you do?" },
            { speaker: "Anna", it: "Sono avvocata. E tu?", en: "I'm a lawyer. And you?" },
            { speaker: "Marco", it: "Faccio l'ingegnere. Sei sposata?", en: "I'm an engineer. Are you married?" },
            { speaker: "Anna", it: "No, ho un fidanzato. Lui è cuoco.", en: "No, I have a boyfriend. He's a chef." },
            { speaker: "Marco", it: "Hai fratelli?", en: "Do you have siblings?" },
            { speaker: "Anna", it: "Sì, ho una sorella più grande e un fratello più piccolo.", en: "Yes, I have an older sister and a younger brother." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Spot the mistake",
          questions: [
            {
              q: "Which is correct?",
              options: ["Sono un avvocato.", "Sono avvocato.", "Io sono il avvocato.", "Mi avvocato."],
              correct: 1,
              fb: "No article after 'sono' for professions — just 'Sono avvocato.'",
            },
            {
              q: "How do you say 'I work as a chef'?",
              options: ["Faccio cuoco.", "Lavoro cuoco.", "Faccio il cuoco.", "Sono il cuoco."],
              correct: 2,
              fb: "With 'fare', use the article: Faccio il cuoco.",
            },
            {
              q: "'My parents are teachers' is…",
              options: [
                "I miei genitori sono insegnanti.",
                "I miei genitori sono gli insegnanti.",
                "Il mio genitore è insegnante.",
                "I miei genitori abitano insegnanti.",
              ],
              correct: 0,
              fb: "Drop the article with 'sono' + profession, plural form.",
            },
          ],
        },
      ],
    },
    {
      slug: "about-me-possessives",
      title: "Possessives — my, your, his/her",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Possessives carry an article — almost always",
          body: [
            "English: \"my book.\" Italian: <em>il mio libro</em> — the article + possessive + noun. The article changes with the noun's gender and number, and the possessive does too.",
            "<strong>Mio / mia / miei / mie</strong> = my (m.sg / f.sg / m.pl / f.pl). Same pattern for <em>tuo / tua / tuoi / tue</em> (your, informal) and <em>suo / sua / suoi / sue</em> (his/her).",
            "Big exception: <strong>family members in singular drop the article</strong>. <em>Mio padre, mia madre, tuo fratello, sua sorella</em> — no article. But plurals keep it: <em>i miei fratelli, le mie sorelle</em>. And <em>mamma/papà</em> always keeps the article: <em>la mia mamma</em>.",
          ],
          keyPoint:
            "Article + possessive + noun: il mio libro. Family singulars drop article: mio padre. Plurals keep it: i miei fratelli.",
        },
        {
          type: "conjugation",
          heading: "Possessives in all 4 forms",
          verb: "mio / tuo / suo / nostro / vostro / loro",
          meaning: "my / your / his-her / our / your(pl) / their",
          intro: "All change with gender and number EXCEPT loro, which never changes.",
          tenses: [
            {
              name: "Possessive table",
              forms: [
                { person: "my", form: "il mio / la mia / i miei / le mie", en: "il mio libro, la mia casa, i miei amici, le mie idee" },
                { person: "your (informal sg)", form: "il tuo / la tua / i tuoi / le tue", en: "tu form" },
                { person: "his / her / your (formal)", form: "il suo / la sua / i suoi / le sue", en: "agrees with the THING owned, not the owner" },
                { person: "our", form: "il nostro / la nostra / i nostri / le nostre", en: "noi form" },
                { person: "your (you all)", form: "il vostro / la vostra / i vostri / le vostre", en: "voi form" },
                { person: "their", form: "il loro / la loro / i loro / le loro", en: "loro is invariable — only the article changes" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Suo agrees with the thing, not the owner",
          body: "This trips up English speakers constantly. <em>Il suo libro</em> means his book OR her book — depends on context. The <em>suo</em> agrees with <em>libro</em> (masculine). <em>La sua macchina</em> = his car OR her car (macchina is feminine, so we use <em>sua</em>). Owner's gender is irrelevant.",
          example: { it: "Marco ha un libro. Il suo libro è interessante.", en: "Marco has a book. His book is interesting." },
        },
        {
          type: "fillBlank",
          heading: "Fill in the possessive",
          items: [
            {
              template: "___ padre è italiano.",
              answer: "Mio",
              en: "My father is Italian.",
              options: ["Il mio", "Mio", "I miei", "Il mie"],
            },
            {
              template: "___ sorelle abitano a Milano.",
              answer: "Le mie",
              en: "My sisters live in Milan.",
              options: ["Mie", "Le mie", "Mia", "I miei"],
            },
            {
              template: "Dov'è ___ macchina?",
              answer: "la tua",
              en: "Where's your car?",
              options: ["tuo", "la tua", "tua", "il tuo"],
            },
            {
              template: "Anna ha perso ___ chiavi.",
              answer: "le sue",
              en: "Anna lost her keys.",
              options: ["i suoi", "le sue", "sue", "la sua"],
            },
            {
              template: "Marco e Lucia parlano con ___ amici.",
              answer: "i loro",
              en: "Marco and Lucia talk with their friends.",
              options: ["loro", "i loro", "le loro", "il loro"],
            },
            {
              template: "___ mamma cucina benissimo.",
              answer: "La mia",
              en: "My mom cooks really well.",
              options: ["Mia", "La mia", "Le mie", "Mio"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentences",
          items: [
            { tokens: ["Il", "mio", "fratello", "è", "un", "medico"], en: "My brother is a doctor." },
            { tokens: ["Le", "sue", "sorelle", "vivono", "a", "Firenze"], en: "Her/his sisters live in Florence." },
            { tokens: ["I", "nostri", "amici", "sono", "italiani"], en: "Our friends are Italian." },
            { tokens: ["Tua", "moglie", "è", "francese", "?"], en: "Is your wife French?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "My sister is a teacher and her husband is a chef.",
          reference: "Mia sorella è insegnante e suo marito è cuoco.",
          hint: "Singular family members drop the article. No 'a/an' before professions.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Translate: 'I'm American, from Chicago.'",
        options: [
          "Sono americano, sono da Chicago.",
          "Sono americano, sono di Chicago.",
          "Io americano, sono Chicago.",
          "Sono di americano, sono Chicago.",
        ],
        correct: 1,
      },
      {
        q: "Which is correct?",
        options: ["Sono un dottore.", "Sono dottore.", "Mio dottore.", "Io dottore."],
        correct: 1,
      },
      {
        q: "'I work as an engineer' =",
        options: [
          "Lavoro ingegnere.",
          "Faccio ingegnere.",
          "Faccio l'ingegnere.",
          "Sono un ingegnere.",
        ],
        correct: 2,
      },
      {
        q: "'My father' =",
        options: ["il mio padre", "mio padre", "il padre mio", "mia padre"],
        correct: 1,
      },
      {
        q: "'My brothers' =",
        options: ["mio fratelli", "miei fratelli", "i miei fratelli", "il mio fratelli"],
        correct: 2,
      },
      {
        q: "Marco's car (Marco's car = his car, and 'car' is feminine):",
        options: ["il suo macchina", "la sua macchina", "il suo macchino", "la suo macchina"],
        correct: 1,
      },
      {
        q: "'Their friends' (mixed group) =",
        options: ["loro amici", "il loro amici", "i loro amici", "le loro amici"],
        correct: 2,
      },
      {
        q: "Country names in Italian:",
        options: [
          "are always lowercase",
          "are always capitalized",
          "are capitalized; nationalities (adjectives) are lowercase",
          "have no fixed rule",
        ],
        correct: 2,
      },
      {
        q: "'I live in Italy' =",
        options: ["Abito a Italia.", "Abito in Italia.", "Vivo a Italia.", "Sono in Italia."],
        correct: 1,
      },
      {
        q: "Translate: 'My grandmother is from Naples.'",
        options: [
          "La mia nonna è da Napoli.",
          "Mia nonna è di Napoli.",
          "Mia nonna è da Napoli.",
          "La mia nonna è in Napoli.",
        ],
        correct: 1,
      },
    ],
  },
};
