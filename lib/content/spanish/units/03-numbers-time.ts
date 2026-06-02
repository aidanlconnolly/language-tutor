import type { Unit } from "../../types";

export const UNIT_NUMBERS_TIME: Unit = {
  slug: "numbers-time",
  stage: 1,
  order: 3,
  icon: "🔢",
  title: "Numbers, days & time",
  tagline: "0–1000, días de la semana, telling time, prices.",
  badge: "core",
  lessons: [
    {
      slug: "numbers-0-100",
      title: "Numbers 0–100",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Numbers in Spanish — spot the patterns",
          body: [
            "Spanish numbers 1–15 must be memorised individually. From 16 onward the pattern kicks in: 16 = diez y seis (ten and six) → written as <em>dieciséis</em>. The teens 16–19 are one fused word.",
            "Multiples of ten (20, 30, 40…) are regular: <em>veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa</em>. In-between numbers use <em>y</em> (and): 21 = veintiuno, 35 = treinta y cinco.",
          ],
          tip: {
            label: "uno → un / una",
            body: "Uno shortens to <em>un</em> before a masculine noun (un euro, un minuto) and changes to <em>una</em> before feminine nouns (una persona, una hora).",
          },
        },
        {
          type: "vocab",
          heading: "0–20",
          items: [
            { l1: "cero, uno, dos, tres", en: "0, 1, 2, 3" },
            { l1: "cuatro, cinco, seis", en: "4, 5, 6" },
            { l1: "siete, ocho, nueve", en: "7, 8, 9" },
            { l1: "diez, once, doce", en: "10, 11, 12" },
            { l1: "trece, catorce, quince", en: "13, 14, 15" },
            { l1: "dieciséis, diecisiete", en: "16, 17" },
            { l1: "dieciocho, diecinueve", en: "18, 19" },
            { l1: "veinte", en: "20" },
          ],
        },
        {
          type: "vocab",
          heading: "Tens and key numbers",
          items: [
            { l1: "treinta, cuarenta, cincuenta", en: "30, 40, 50" },
            { l1: "sesenta, setenta, ochenta, noventa", en: "60, 70, 80, 90" },
            { l1: "cien", en: "100", note: "cien alone; ciento before more digits" },
            { l1: "veintiuno, treinta y uno", en: "21, 31" },
            { l1: "cincuenta y cinco", en: "55" },
            { l1: "noventa y nueve", en: "99" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "How do you say 45?",
              options: ["cuarenta y cuatro", "cuarenta y cinco", "cincuenta y cinco", "cuarenta cinco"],
              correct: 1,
              fb: "Cuarenta (40) + y + cinco (5) = cuarenta y cinco.",
            },
            {
              q: "What is 'un euro' an example of?",
              options: ["Uno before a verb", "Uno shortened before a masculine noun", "A typo", "Feminine agreement"],
              correct: 1,
              fb: "Uno shortens to un before masculine nouns: un euro, un café.",
            },
          ],
        },
      ],
    },
    {
      slug: "numbers-time-days",
      title: "Time, days & dates",
      estMinutes: 9,
      pages: [
        {
          type: "vocab",
          heading: "Days of the week",
          intro: "All lowercase in Spanish. The week starts on Monday.",
          items: [
            { l1: "lunes", en: "Monday" },
            { l1: "martes", en: "Tuesday" },
            { l1: "miércoles", en: "Wednesday" },
            { l1: "jueves", en: "Thursday" },
            { l1: "viernes", en: "Friday" },
            { l1: "sábado", en: "Saturday" },
            { l1: "domingo", en: "Sunday" },
          ],
        },
        {
          type: "tip",
          heading: "Telling time — Es la / Son las",
          body: "Use <em>Es la una</em> for 1:00 (singular). For all other hours use <em>Son las</em> + number. Add <em>y</em> for minutes past the hour, <em>menos</em> for minutes to the next hour.",
          example: { l1: "Son las tres y cuarto. / Son las cinco menos diez.", en: "It's quarter past three. / It's ten to five." },
        },
        {
          type: "vocab",
          heading: "Time expressions",
          items: [
            { l1: "¿Qué hora es?", en: "What time is it?" },
            { l1: "Es la una", en: "It's one o'clock" },
            { l1: "Son las dos", en: "It's two o'clock" },
            { l1: "Son las tres y media", en: "It's half past three" },
            { l1: "Son las cuatro y cuarto", en: "It's quarter past four" },
            { l1: "Son las seis menos veinte", en: "It's twenty to six" },
            { l1: "a medianoche", en: "at midnight" },
            { l1: "al mediodía", en: "at noon" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Time and days",
          questions: [
            {
              q: "How do you say 'It's 3:00'?",
              options: ["Es la tres", "Son las tres", "Es las tres", "Son los tres"],
              correct: 1,
              fb: "Son las tres — use 'son' for all hours except one (es la una).",
            },
            {
              q: "What does 'Son las nueve y media' mean?",
              options: ["It's 9:15", "It's 9:30", "It's 8:30", "It's 9:45"],
              correct: 1,
              fb: "y media = half past. Son las nueve y media = 9:30.",
            },
            {
              q: "Which day comes after martes?",
              options: ["lunes", "jueves", "miércoles", "viernes"],
              correct: 2,
              fb: "lunes, martes, miércoles, jueves, viernes, sábado, domingo.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "How do you say 17?", options: ["dieciocho", "diecisiete", "dieciséis", "diecisiete"], correct: 1 },
      { q: "What is 'cien'?", options: ["10", "100", "1000", "110"], correct: 1 },
      { q: "How do you say 55?", options: ["cincuenta y cinco", "cincuenta cinco", "sesenta y cinco", "cuarenta y cinco"], correct: 0 },
      { q: "What day follows viernes?", options: ["jueves", "domingo", "sábado", "lunes"], correct: 2 },
      { q: "'Son las dos' means…", options: ["It's 1 o'clock", "It's 2 o'clock", "It's 20 past", "Two hours"], correct: 1 },
      { q: "'Es la una' uses 'es' because…", options: ["Una is feminine", "It's singular — one o'clock", "Es is more formal", "Grammar exception"], correct: 1 },
      { q: "'y media' means…", options: ["quarter past", "half past", "to the hour", "and a bit"], correct: 1 },
      { q: "How do you say 'What time is it?'", options: ["¿Cuánto tiempo?", "¿Qué hora es?", "¿A qué hora?", "¿Cuándo?"], correct: 1 },
      { q: "Uno before a masculine noun becomes…", options: ["una", "unos", "un", "uno stays the same"], correct: 2 },
      { q: "How do you say 'at noon'?", options: ["a medianoche", "al mediodía", "a las doce", "a medio"], correct: 1 },
    ],
  },
};
