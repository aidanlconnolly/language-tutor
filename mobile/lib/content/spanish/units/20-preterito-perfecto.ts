import type { Unit } from "../../types";

export const UNIT_PRETERITO_PERFECTO: Unit = {
  slug: "preterito-perfecto",
  stage: 5,
  order: 20,
  icon: "⏪",
  title: "Pretérito perfecto",
  tagline: "He comido, has ido — recent past with haber.",
  lessons: [
    {
      slug: "preterito-perfecto-intro",
      title: "The pretérito perfecto",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Recent past with haber + participle",
          body: [
            "The pretérito perfecto expresses actions that happened in the recent past or have a connection to the present — like 'I have eaten', 'she has gone', 'we have visited'. It's formed with the present tense of <em>haber</em> + past participle.",
            "In Spain, it's used for actions that happened today or have relevance now: <em>Esta mañana he comido un croissant</em> (This morning I ate a croissant). In Latin America, the simple past (pretérito indefinido) is preferred instead.",
          ],
          tip: {
            label: "Haber vs tener",
            body: "Haber in this construction is an auxiliary verb — it never means 'to have' (possess). That's tener. He comido = I have eaten. Tengo hambre = I have hunger.",
          },
        },
        {
          type: "conjugation",
          heading: "haber — present tense (auxiliary)",
          verb: "haber",
          meaning: "to have (auxiliary)",
          tenses: [{ name: "Presente", forms: [
            { person: "yo", form: "he" },
            { person: "tú", form: "has" },
            { person: "él/ella/usted", form: "ha" },
            { person: "nosotros", form: "hemos" },
            { person: "vosotros", form: "habéis" },
            { person: "ellos/ustedes", form: "han" },
          ] }],
        },
        {
          type: "tip",
          heading: "Regular past participles",
          body: "-ar verbs: drop -ar, add <strong>-ado</strong>. -er/-ir verbs: drop ending, add <strong>-ido</strong>. hablar → hablado · comer → comido · vivir → vivido.",
          example: { l1: "He hablado / Has comido / Ha vivido", en: "I have spoken / You have eaten / He has lived" },
        },
        {
          type: "vocab",
          heading: "Irregular past participles",
          items: [
            { l1: "hecho (hacer)", en: "done / made" },
            { l1: "dicho (decir)", en: "said" },
            { l1: "visto (ver)", en: "seen" },
            { l1: "escrito (escribir)", en: "written" },
            { l1: "abierto (abrir)", en: "opened" },
            { l1: "vuelto (volver)", en: "returned" },
            { l1: "puesto (poner)", en: "put / placed" },
            { l1: "roto (romper)", en: "broken" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Perfecto check",
          questions: [
            {
              q: "How do you say 'I have visited Madrid'?",
              options: ["He visitado Madrid", "Hé visitar Madrid", "He visitó Madrid", "Tengo visitado Madrid"],
              correct: 0,
              fb: "He (yo form of haber) + visitado (past participle of visitar). He visitado Madrid.",
            },
            {
              q: "What is the irregular participle of 'ver' (to see)?",
              options: ["vido", "veído", "visto", "vero"],
              correct: 2,
              fb: "Ver → visto (irregular). He visto = I have seen.",
            },
            {
              q: "'¿Has comido?' means…",
              options: ["Did you eat?", "Have you eaten?", "Are you eating?", "Will you eat?"],
              correct: 1,
              fb: "Has comido = have you eaten? (pretérito perfecto)",
            },
          ],
        },
      ],
    },
    {
      slug: "preterito-perfecto-practice",
      title: "Using the perfecto",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "Perfecto in context",
          items: [
            { l1: "Esta semana he trabajado mucho.", en: "This week I've worked a lot." },
            { l1: "¿Has estado en Barcelona?", en: "Have you been to Barcelona?" },
            { l1: "No he dormido bien.", en: "I haven't slept well." },
            { l1: "Hemos comido en el Prado.", en: "We've eaten at the Prado." },
            { l1: "¿Qué has hecho hoy?", en: "What have you done today?" },
            { l1: "He perdido mi cartera.", en: "I've lost my wallet." },
          ],
        },
        {
          type: "translate",
          heading: "Translate to Spanish",
          direction: "en-to-l1",
          prompt: "I have seen the film.",
          reference: "He visto la película.",
          hint: "haber + visto (irregular)",
        },
        {
          type: "translate",
          heading: "Translate to Spanish",
          direction: "en-to-l1",
          prompt: "Have you been to Madrid?",
          reference: "¿Has estado en Madrid?",
          hint: "has + estado",
        },
        {
          type: "multipleChoice",
          heading: "Final check",
          questions: [
            {
              q: "In Spain, the perfecto is used for actions…",
              options: ["In the distant past", "That happened today or recently", "In the future", "In stories"],
              correct: 1,
              fb: "In Spain, pretérito perfecto = recent/today's past. In Latin America, the indefinido (comí, fui) is used instead.",
            },
            {
              q: "'He hecho' means…",
              options: ["I will do", "I have done", "I did (simple past)", "I was doing"],
              correct: 1,
              fb: "He (haber, yo) + hecho (irregular participle of hacer). I have done.",
            },
          ],
        },
      ],
    },
    {
      slug: "preterito-perfecto-experiences",
      title: "Talking about experiences",
      estMinutes: 7,
      pages: [
        {
          type: "dialogue",
          heading: "Have you ever been to…?",
          lines: [
            { speaker: "Ana", l1: "¿Has ido alguna vez a Granada?", en: "Have you ever been to Granada?" },
            { speaker: "Tom", l1: "Sí, he ido dos veces. Es preciosa.", en: "Yes, I've been twice. It's beautiful." },
            { speaker: "Ana", l1: "¿Has visitado la Alhambra?", en: "Have you visited the Alhambra?" },
            { speaker: "Tom", l1: "Claro, es increíble. Nunca he visto algo tan impresionante.", en: "Of course, it's incredible. I've never seen anything so impressive." },
            { speaker: "Ana", l1: "Yo todavía no he ido. Me han dicho que hay que reservar con antelación.", en: "I still haven't been. I've been told you have to book in advance." },
          ],
        },
        {
          type: "vocab",
          heading: "Experience phrases with perfecto",
          items: [
            { l1: "¿Has ido alguna vez a…?", en: "Have you ever been to…?" },
            { l1: "Nunca he…", en: "I've never…" },
            { l1: "Ya he…", en: "I've already…" },
            { l1: "Todavía no he…", en: "I still haven't…" },
            { l1: "He ido una/dos veces", en: "I've been once/twice" },
            { l1: "Me han dicho que…", en: "I've been told that…" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Perfecto experiences",
          questions: [
            {
              q: "How do you say 'I've never been to Barcelona'?",
              options: ["Nunca fui a Barcelona", "Nunca he ido a Barcelona", "No he ido nunca a Barcelona", "Both B and C"],
              correct: 3,
              fb: "Both are correct: Nunca he ido and No he ido nunca. Nunca goes before or after the verb.",
            },
            {
              q: "'Ya he comido' means…",
              options: ["I haven't eaten yet", "I've already eaten", "I'm eating now", "I'll eat soon"],
              correct: 1,
              fb: "Ya = already. Ya he comido = I've already eaten.",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Pretérito perfecto is formed with…", options: ["ser + participle", "haber + participle", "tener + participle", "estar + participle"], correct: 1 },
      { q: "The past participle of 'hablar' is…", options: ["hablido", "hablado", "habló", "hablería"], correct: 1 },
      { q: "The past participle of 'comer' is…", options: ["comado", "comado", "comido", "comó"], correct: 2 },
      { q: "'He visto' means…", options: ["I will see", "I saw", "I have seen", "I was seeing"], correct: 2 },
      { q: "The irregular participle of 'decir' is…", options: ["decido", "dicido", "dicho", "decho"], correct: 2 },
      { q: "'¿Has dormido bien?' means…", options: ["Did you sleep well?", "Have you slept well?", "Do you sleep well?", "Will you sleep well?"], correct: 1 },
      { q: "The yo form of haber (auxiliary) is…", options: ["hay", "ha", "he", "hé"], correct: 2 },
      { q: "The irregular participle of 'abrir' is…", options: ["abrido", "abrido", "abierto", "aberto"], correct: 2 },
      { q: "In Spain, perfecto is used for…", options: ["Distant historical past", "Ongoing actions", "Today's/recent past", "Future plans"], correct: 2 },
      { q: "'Hemos comido' means…", options: ["We will eat", "We are eating", "We have eaten", "We ate"], correct: 2 },
    ],
  },
};
