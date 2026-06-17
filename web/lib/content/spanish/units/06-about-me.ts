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
      estMinutes: 10,
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
          type: "intro",
          heading: "Saying where you're from",
          body: [
            "Use <strong>ser de</strong> + place to say where you are FROM: <em>Soy de Madrid</em> (I'm from Madrid), <em>Soy de México</em> (I'm from Mexico). The verb is always <em>ser</em>, never <em>estar</em>.",
            "To say where you live NOW, use <strong>vivir en</strong>: <em>Vivo en Barcelona</em> (I live in Barcelona). Origin and residence can differ: <em>Soy de Argentina, pero vivo en Madrid</em>.",
            "Watch the question forms: <em>¿De dónde eres?</em> uses <em>de</em> (origin), while <em>¿Dónde vives?</em> has no <em>de</em> (residence). Don't mix them up.",
          ],
          keyPoint:
            "Soy de [place] = where you're from. Vivo en [place] = where you live now.",
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
            { l1: "estadounidense", en: "American / from the USA", note: "same for m/f" },
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
            { l1: "camarero/a", en: "waiter / waitress" },
            { l1: "¿A qué te dedicas?", en: "What do you do (for work)?" },
          ],
        },
        {
          type: "tip",
          heading: "Two ways to talk about your job",
          body: "You can name your job directly with <em>ser</em> and no article: <em>Soy ingeniera</em>. Or describe what you do with <em>dedicarse a</em>: <em>Me dedico a la enseñanza</em> (I work in teaching). The question <em>¿A qué te dedicas?</em> is the natural everyday way to ask 'What do you do?'",
          example: { l1: "—¿A qué te dedicas? —Soy profesora de inglés.", en: "—What do you do? —I'm an English teacher." },
        },
        {
          type: "fillBlank",
          heading: "Ser, vivir, or de?",
          intro: "Choose the word that fits where you're from, what you do, and where you live.",
          items: [
            {
              template: "Soy ___ Valencia, pero vivo en Sevilla.",
              answer: "de",
              en: "I'm from Valencia, but I live in Seville.",
              options: ["de", "en", "a", "del"],
            },
            {
              template: "Ella ___ enfermera en un hospital.",
              answer: "es",
              en: "She is a nurse at a hospital.",
              options: ["es", "está", "tiene", "vive"],
            },
            {
              template: "¿Dónde ___? — En el centro de Bogotá.",
              answer: "vives",
              en: "Where do you live? — In the centre of Bogotá.",
              options: ["eres", "vives", "tienes", "estás"],
            },
            {
              template: "Nosotros ___ italianos, de Roma.",
              answer: "somos",
              en: "We are Italian, from Rome.",
              options: ["somos", "estamos", "tenemos", "vivimos"],
            },
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
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm from Mexico, but I live in Madrid and I'm an engineer.",
          reference: "Soy de México, pero vivo en Madrid y soy ingeniero.",
          hint: "Origin = soy de. Residence = vivo en. No 'a/an' before the profession.",
        },
      ],
    },
    {
      slug: "about-me-family",
      title: "Family and possessives",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Possessives agree with the thing, not the owner",
          body: [
            "Spanish possessives go before the noun and agree with what is OWNED, not who owns it. <em>Mi hermano</em> (my brother), <em>mis hermanos</em> (my brothers) — only number changes for <em>mi</em>.",
            "<strong>Nuestro</strong> (our) and <strong>vuestro</strong> (your, plural in Spain) change for BOTH gender and number: <em>nuestra casa, nuestros hijos, nuestras hijas</em>.",
            "<strong>Su / sus</strong> is the tricky one — it covers his, her, their, and your (formal). Context tells you which: <em>Su madre</em> can mean his mother, her mother, their mother, or your mother.",
          ],
          keyPoint:
            "mi/tu/su change only for number. nuestro/vuestro change for gender AND number.",
        },
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
            { l1: "el primo / la prima", en: "cousin (m/f)" },
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
            { l1: "su / sus", en: "his/her/its/your formal/their (sing/pl)" },
            { l1: "nuestro/a / nuestros/as", en: "our" },
            { l1: "vuestro/a / vuestros/as", en: "your (plural, Spain)" },
            { l1: "Mi madre se llama Ana.", en: "My mother's name is Ana." },
            { l1: "¿Cómo se llaman tus padres?", en: "What are your parents' names?" },
          ],
        },
        {
          type: "conjugation",
          heading: "Tener — to have (for family and age)",
          verb: "tener",
          meaning: "to have",
          intro: "You'll use tener constantly: to say who's in your family (tengo dos hermanos) and your age (tengo treinta años). It's irregular — learn it cold.",
          tenses: [
            {
              name: "Present (presente)",
              forms: [
                { person: "yo", form: "tengo", en: "I have" },
                { person: "tú", form: "tienes", en: "you have (informal)" },
                { person: "él / ella / usted", form: "tiene", en: "he/she has, you have (formal)" },
                { person: "nosotros/as", form: "tenemos", en: "we have" },
                { person: "vosotros/as", form: "tenéis", en: "you have (pl., Spain)" },
                { person: "ellos/as / ustedes", form: "tienen", en: "they/you all have" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about family",
          setup: "Lucía asks Diego about his family.",
          lines: [
            { speaker: "Lucía", l1: "¿Tienes hermanos?", en: "Do you have siblings?" },
            { speaker: "Diego", l1: "Sí, tengo una hermana mayor y un hermano menor.", en: "Yes, I have an older sister and a younger brother." },
            { speaker: "Lucía", l1: "¿Y a qué se dedican tus padres?", en: "And what do your parents do?" },
            { speaker: "Diego", l1: "Mi madre es médica y mi padre es profesor.", en: "My mother is a doctor and my father is a teacher." },
            { speaker: "Lucía", l1: "¿Vivís todos juntos?", en: "Do you all live together?" },
            { speaker: "Diego", l1: "No, mi hermana ya vive con su marido en Valencia.", en: "No, my sister already lives with her husband in Valencia." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Choose the right possessive",
          intro: "Remember: agree with the thing owned, in number (and gender for nuestro).",
          items: [
            {
              template: "Estos son ___ hermanos. (my)",
              answer: "mis",
              en: "These are my brothers.",
              options: ["mi", "mis", "mí", "mío"],
            },
            {
              template: "___ casa es muy grande. (our)",
              answer: "Nuestra",
              en: "Our house is very big.",
              options: ["Nuestro", "Nuestra", "Nuestros", "Nuestras"],
            },
            {
              template: "Ana vive con ___ padres. (her)",
              answer: "sus",
              en: "Ana lives with her parents.",
              options: ["su", "sus", "tu", "nuestros"],
            },
            {
              template: "¿Cómo se llama ___ madre? (your, informal)",
              answer: "tu",
              en: "What's your mother's name?",
              options: ["tu", "tus", "su", "tú"],
            },
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
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "My sister is a lawyer and her husband is a nurse.",
          reference: "Mi hermana es abogada y su marido es enfermero.",
          hint: "Possessives agree with the thing owned. No article before professions; mind the gender endings (-a / -o).",
        },
      ],
    },
    {
      slug: "about-me-conversation",
      title: "Talking about yourself",
      estMinutes: 9,
      pages: [
        {
          type: "vocab",
          heading: "Age and personal details",
          items: [
            { l1: "¿Cuántos años tienes?", en: "How old are you?" },
            { l1: "Tengo treinta años.", en: "I'm thirty (years old).", note: "tener + años for age" },
            { l1: "¿Dónde vives?", en: "Where do you live?" },
            { l1: "Vivo en el centro.", en: "I live in the centre." },
            { l1: "¿A qué te dedicas?", en: "What do you do for work?" },
            { l1: "Trabajo en una empresa de tecnología.", en: "I work in a tech company." },
            { l1: "Soy autónomo/a.", en: "I'm self-employed." },
            { l1: "Estoy en paro.", en: "I'm unemployed." },
          ],
        },
        {
          type: "tip",
          heading: "Age uses tener, never ser",
          body: "In English you 'are' a certain age; in Spanish you 'have' years. Always use <em>tener</em> for age: <em>Tengo veinticinco años</em>. Saying <em>soy veinticinco años</em> or <em>estoy veinticinco años</em> is a classic English-speaker mistake. Don't forget the word <em>años</em>.",
          example: { l1: "Mi abuela tiene ochenta años.", en: "My grandmother is eighty years old." },
        },
        {
          type: "dialogue",
          heading: "Getting to know someone",
          lines: [
            { speaker: "Sara", l1: "¿De dónde eres?", en: "Where are you from?" },
            { speaker: "Mark", l1: "Soy irlandés, de Dublín. ¿Y tú?", en: "I'm Irish, from Dublin. And you?" },
            { speaker: "Sara", l1: "Yo soy de Sevilla. ¿Cuánto tiempo llevas en Madrid?", en: "I'm from Seville. How long have you been in Madrid?" },
            { speaker: "Mark", l1: "Llevo dos años aquí. Trabajo como diseñador.", en: "I've been here two years. I work as a designer." },
            { speaker: "Sara", l1: "¡Qué interesante!", en: "How interesting!" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentences",
          intro: "Put the words in order to describe yourself.",
          items: [
            { tokens: ["Soy", "de", "México", "y", "tengo", "treinta", "años"], en: "I'm from Mexico and I'm thirty years old." },
            { tokens: ["Mi", "hermana", "vive", "en", "Barcelona"], en: "My sister lives in Barcelona." },
            { tokens: ["¿", "A", "qué", "te", "dedicas", "?"], en: "What do you do for work?" },
            { tokens: ["Trabajo", "en", "una", "empresa", "de", "tecnología"], en: "I work in a tech company." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Personal details check",
          questions: [
            {
              q: "How do you say 'I'm 25 years old'?",
              options: ["Soy 25 años", "Tengo 25 años", "Estoy 25 años", "Hay 25 años"],
              correct: 1,
              fb: "Age uses tener: Tengo 25 años. Never 'soy' or 'estoy' for age.",
            },
            {
              q: "'Llevo dos años aquí' means…",
              options: ["I came here two years ago", "I've been here for two years", "I lived here for two years", "Two years from now"],
              correct: 1,
              fb: "Llevar + time + gerund/location = to have been doing/here for. Very common in Spanish.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'm twenty-eight years old and I work in a hospital.",
          reference: "Tengo veintiocho años y trabajo en un hospital.",
          hint: "Age uses tener + años. 'I work in' = trabajo en.",
        },
      ],
    }
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
      { q: "How do you say 'I'm 30 years old'?", options: ["Soy treinta años", "Tengo treinta años", "Estoy treinta años", "Hay treinta años"], correct: 1 },
      { q: "'Nuestra casa' means…", options: ["your house", "their house", "our house", "his house"], correct: 2 },
    ],
  },
};
