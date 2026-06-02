import type { Unit } from "../../types";

export const UNIT_DIRECTIONS: Unit = {
  slug: "directions",
  stage: 3,
  order: 11,
  icon: "🧭",
  title: "Asking for directions",
  tagline: "Derecha, izquierda, recto — perdona, ¿dónde está…?",
  lessons: [
    {
      slug: "directions-vocab",
      title: "Direction words",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "Direction vocabulary",
          items: [
            { l1: "a la derecha", en: "to the right" },
            { l1: "a la izquierda", en: "to the left" },
            { l1: "todo recto / derecho", en: "straight ahead" },
            { l1: "al final de", en: "at the end of" },
            { l1: "en la esquina", en: "on the corner" },
            { l1: "cruzar", en: "to cross" },
            { l1: "girar / doblar", en: "to turn" },
            { l1: "la calle", en: "the street" },
            { l1: "la plaza", en: "the square" },
            { l1: "el semáforo", en: "the traffic light" },
          ],
        },
        {
          type: "vocab",
          heading: "Asking and giving directions",
          items: [
            { l1: "Perdona, ¿dónde está el Prado?", en: "Excuse me, where is the Prado?" },
            { l1: "Disculpe, ¿cómo se va a…?", en: "Excuse me, how do I get to…? (formal)" },
            { l1: "Gire a la derecha en el semáforo.", en: "Turn right at the traffic light." },
            { l1: "Siga todo recto.", en: "Keep going straight ahead." },
            { l1: "Está a dos manzanas.", en: "It's two blocks away." },
            { l1: "No está muy lejos.", en: "It's not very far." },
            { l1: "Está cerca / lejos.", en: "It's nearby / far." },
            { l1: "Tome la primera a la izquierda.", en: "Take the first on the left." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Directions check",
          questions: [
            {
              q: "How do you say 'Turn left at the traffic light'?",
              options: ["Gire a la derecha en el semáforo", "Gire a la izquierda en el semáforo", "Siga todo recto", "Tome la calle"],
              correct: 1,
              fb: "Izquierda = left. Gire a la izquierda en el semáforo.",
            },
            {
              q: "'Todo recto' means…",
              options: ["Turn right", "To the left", "Straight ahead", "At the corner"],
              correct: 2,
              fb: "Todo recto = straight ahead. Also derecho.",
            },
            {
              q: "Formal way to ask directions: ¿Cómo se va a…? uses…",
              options: ["tú form", "usted form (se va)", "impersonal se", "Both B and C"],
              correct: 3,
              fb: "Se va = one goes / you go — impersonal construction, also inherently polite.",
            },
          ],
        },
      ],
    },
    {
      slug: "directions-listening",
      title: "Following directions",
      estMinutes: 6,
      pages: [
        {
          type: "listen",
          heading: "Which direction?",
          items: [
            { l1: "a la derecha", en: "to the right", options: ["to the left", "to the right", "straight ahead", "at the corner"], correct: 1 },
            { l1: "todo recto", en: "straight ahead", options: ["turn right", "to the left", "straight ahead", "at the end"], correct: 2 },
            { l1: "en la esquina", en: "on the corner", options: ["at the lights", "on the corner", "at the end", "across the street"], correct: 1 },
            { l1: "al final de la calle", en: "at the end of the street", options: ["at the start of the street", "on the corner", "at the end of the street", "across the street"], correct: 2 },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Final check",
          questions: [
            {
              q: "'Está a dos manzanas' means…",
              options: ["It's two minutes away", "It's two blocks away", "Take two streets", "It's on the second street"],
              correct: 1,
              fb: "Manzana = city block (in Spain). Está a dos manzanas = it's two blocks away.",
            },
            {
              q: "How do you say 'Excuse me' to a stranger on the street?",
              options: ["¡Oye!", "Perdona / Perdone (formal)", "Hola", "Disculpa / Disculpe (formal)"],
              correct: 1,
              fb: "Perdona (informal) or Perdone (formal). Disculpa/Disculpe also work. All are correct.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'A la derecha' means…", options: ["to the left", "straight ahead", "to the right", "at the corner"], correct: 2 },
      { q: "'Todo recto' means…", options: ["turn right", "to the left", "at the end", "straight ahead"], correct: 3 },
      { q: "How do you say 'at the traffic light'?", options: ["en el semáforo", "en la esquina", "en la calle", "en el cruce"], correct: 0 },
      { q: "'Está a dos manzanas' means…", options: ["Two minutes away", "Two blocks away", "Two streets to the left", "Second floor"], correct: 1 },
      { q: "Formal way to ask 'how do I get to…?'", options: ["¿Dónde está?", "¿Cómo se va a…?", "¿Adónde voy?", "¿Dónde ir?"], correct: 1 },
      { q: "'Tome la primera a la izquierda' means…", options: ["Take the first on the right", "Take the first on the left", "Cross the first street", "Go to the first square"], correct: 1 },
      { q: "'Al final de la calle' means…", options: ["On the corner", "At the start of the street", "At the end of the street", "Across the street"], correct: 2 },
      { q: "'Cerca' means…", options: ["far", "nearby", "straight", "around"], correct: 1 },
      { q: "How do you say 'Turn right at the traffic light'?", options: ["Siga a la derecha", "Gire a la derecha en el semáforo", "Tome a la derecha", "Doble derecha semáforo"], correct: 1 },
      { q: "'En la esquina' means…", options: ["at the traffic light", "on the corner", "at the crossing", "at the end"], correct: 1 },
    ],
  },
};
