import type { Unit } from "../../types";

export const UNIT_ABOUT_ME: Unit = {
  slug: "about-me",
  stage: 2,
  order: 6,
  icon: "🪪",
  title: "About me",
  tagline: "Nationalities, professions, family, possessives.",
  lessons: [
    {
      slug: "about-me-identity",
      title: "Identity and origins",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Introducing yourself",
          body: [
            "To introduce yourself in Spanish, use <em>Me llamo…</em> (My name is… / I call myself…) or simply <em>Soy…</em> (I am…). To ask someone's name: <em>¿Cómo te llamas?</em> (informal) or <em>¿Cómo se llama usted?</em> (formal).",
            "Nationalities in Spanish are adjectives — they agree with gender. Most add -a for feminine: español → española, francés → francesa. Some are the same for both: estadounidense, belga.",
          ],
          tip: {
            label: "No article before professions",
            body: "Unlike English, Spanish drops the article before professions after ser: Soy médico (not 'un médico') unless you add an adjective.",
          },
        },
        {
          type: "vocab",
          heading: "Nationalities and origins",
          items: [
            { l1: "español / española", en: "Spanish (m/f)" },
            { l1: "inglés / inglesa", en: "English (m/f)" },
            { l1: "francés / francesa", en: "French (m/f)" },
            { l1: "americano / americana", en: "American (m/f)" },
            { l1: "alemán / alemana", en: "German (m/f)" },
            { l1: "italiano / italiana", en: "Italian (m/f)" },
            { l1: "chino / china", en: "Chinese (m/f)" },
            { l1: "¿De dónde eres?", en: "Where are you from?" },
          ],
        },
        {
          type: "vocab",
          heading: "Professions",
          items: [
            { l1: "médico/a", en: "doctor" },
            { l1: "profesor/a", en: "teacher / professor" },
            { l1: "enfermero/a", en: "nurse" },
            { l1: "abogado/a", en: "lawyer" },
            { l1: "ingeniero/a", en: "engineer" },
            { l1: "estudiante", en: "student", note: "same for m/f" },
            { l1: "periodista", en: "journalist", note: "same for m/f" },
            { l1: "¿A qué te dedicas?", en: "What do you do (for work)?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "A woman saying 'I'm Spanish' says…",
              options: ["Soy español", "Soy española", "Estoy española", "Soy la española"],
              correct: 1,
              fb: "Nationalities agree with the speaker's gender. A woman: española.",
            },
            {
              q: "How do you say 'I'm a doctor' (no article in Spanish)?",
              options: ["Soy un médico", "Estoy médico", "Soy médico", "Tengo médico"],
              correct: 2,
              fb: "No article before professions: Soy médico.",
            },
          ],
        },
      ],
    },
    {
      slug: "about-me-family",
      title: "Family and possessives",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "Family members",
          items: [
            { l1: "la familia", en: "the family" },
            { l1: "el padre / la madre", en: "father / mother" },
            { l1: "el hermano / la hermana", en: "brother / sister" },
            { l1: "el hijo / la hija", en: "son / daughter" },
            { l1: "el abuelo / la abuela", en: "grandfather / grandmother" },
            { l1: "el tío / la tía", en: "uncle / aunt" },
            { l1: "el marido / la mujer", en: "husband / wife" },
            { l1: "los padres", en: "parents", note: "Masculine plural can include both genders" },
          ],
        },
        {
          type: "vocab",
          heading: "Possessive adjectives",
          intro: "These agree with the THING possessed, not the owner.",
          items: [
            { l1: "mi / mis", en: "my (sing/pl)" },
            { l1: "tu / tus", en: "your informal (sing/pl)" },
            { l1: "su / sus", en: "his/her/its/your formal (sing/pl)" },
            { l1: "nuestro/a / nuestros/as", en: "our" },
            { l1: "Mi madre se llama Ana.", en: "My mother's name is Ana." },
            { l1: "¿Cómo se llaman tus padres?", en: "What are your parents' names?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Family and possessives",
          questions: [
            {
              q: "How do you say 'my sisters'?",
              options: ["mi hermana", "mis hermanas", "su hermanas", "nuestras hermanas"],
              correct: 1,
              fb: "Mis (plural possessive) + hermanas (plural noun). Mis hermanas.",
            },
            {
              q: "'Los padres' means…",
              options: ["The fathers only", "The parents (both)", "The fathers and mothers (separately)", "The family"],
              correct: 1,
              fb: "Los padres = the parents. Spanish uses masculine plural to refer to a mixed-gender group.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "A woman from France says…", options: ["Soy francés", "Soy francesa", "Estoy francesa", "Es francesa"], correct: 1 },
      { q: "How do you say 'I'm a teacher' (no article)?", options: ["Soy un profesor", "Soy profesora", "Estoy profesora", "Tengo profesora"], correct: 1 },
      { q: "'¿De dónde eres?' means…", options: ["Where are you going?", "Where are you from?", "Who are you?", "Where do you live?"], correct: 1 },
      { q: "How do you say 'my books'?", options: ["mi libros", "mis libros", "su libros", "tu libros"], correct: 1 },
      { q: "The word for 'parents' in Spanish is…", options: ["los padres", "los papás (only)", "los parientes", "los familiares"], correct: 0 },
      { q: "'Mi hermano' means…", options: ["my sister", "my brother", "our brother", "her brother"], correct: 1 },
      { q: "Possessive adjectives agree with…", options: ["The owner's gender", "The thing possessed", "The verb", "The sentence subject"], correct: 1 },
      { q: "'¿A qué te dedicas?' means…", options: ["Where do you live?", "How old are you?", "What do you do for work?", "What's your name?"], correct: 2 },
      { q: "Which nationality is the same for m/f?", options: ["español", "francés", "estudiante", "alemán"], correct: 2 },
      { q: "How do you ask someone's name informally?", options: ["¿Cómo se llama usted?", "¿Cómo te llamas?", "¿Cuál es su nombre?", "¿Me llamo?"], correct: 1 },
    ],
  },
};
