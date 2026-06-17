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
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Six words and you can find anything",
          body: [
            "<strong>La derecha</strong> (right) and <strong>la izquierda</strong> (left) are feminine — they pair with <em>a la</em>: <em>a la derecha</em>, <em>a la izquierda</em>.",
            "<strong>Todo recto</strong> (also <em>todo derecho</em>) = straight ahead. <strong>Siga</strong> = keep going (formal). <strong>Cruce</strong> = cross. <strong>Gire</strong> / <strong>doble</strong> = turn.",
            "Prepositions of place: <strong>cerca de</strong> (near), <strong>lejos de</strong> (far from), <strong>al lado de</strong> (next to), <strong>enfrente de</strong> (opposite / across from), <strong>detrás de</strong> (behind), <strong>delante de</strong> (in front of), <strong>entre</strong> (between).",
          ],
          keyPoint:
            "A la derecha / a la izquierda / todo recto. Cerca de / lejos de. Al lado de / enfrente de / detrás de.",
        },
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
            { l1: "cerca de", en: "near (to)" },
            { l1: "lejos de", en: "far (from)" },
            { l1: "al lado de", en: "next to" },
            { l1: "enfrente de", en: "opposite / across from" },
            { l1: "detrás de", en: "behind" },
            { l1: "delante de", en: "in front of" },
            { l1: "entre", en: "between" },
          ],
        },
        {
          type: "tip",
          heading: "Recto, derecho — and a false friend",
          body: "Both <em>todo recto</em> and <em>todo derecho</em> mean \"straight ahead.\" Be careful: <strong>la derecha</strong> = the right (direction), but <strong>derecho</strong> (no article) = straight. So <em>«a la derecha»</em> = to the right, while <em>«siga derecho»</em> = keep going straight. Spain prefers <em>recto</em>; Latin America prefers <em>derecho</em> — both are understood everywhere.",
          example: { l1: "Siga todo recto y gire a la derecha.", en: "Keep going straight and turn right." },
        },
        {
          type: "fillBlank",
          heading: "Where is it?",
          items: [
            {
              template: "La farmacia está ___ del hotel.",
              answer: "al lado",
              en: "The pharmacy is next to the hotel.",
              options: ["al lado", "detrás", "lejos", "entre"],
            },
            {
              template: "El museo está ___ de la plaza.",
              answer: "cerca",
              en: "The museum is near the square.",
              options: ["cerca", "lejos", "entre", "delante"],
            },
            {
              template: "El bar está ___ de la iglesia.",
              answer: "enfrente",
              en: "The bar is across from the church.",
              options: ["detrás", "enfrente", "entre", "lejos"],
            },
            {
              template: "Tiene que girar a la ___ en el semáforo.",
              answer: "izquierda",
              en: "You have to turn left at the traffic light.",
              options: ["derecha", "izquierda", "recto", "esquina"],
            },
            {
              template: "El banco está ___ la farmacia y el correo.",
              answer: "entre",
              en: "The bank is between the pharmacy and the post office.",
              options: ["entre", "cerca", "detrás", "al lado"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, where is the museum? Is it far from here?",
          reference: "Perdona, ¿dónde está el museo? ¿Está lejos de aquí?",
          hint: "Use «perdona» (informal) or «perdone» (formal) for 'excuse me'. «de aquí» = from here. Remember the inverted ¿.",
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
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The verbs you'll HEAR most",
          body: [
            "When a stranger gives you directions, they almost always use the <strong>formal (usted) command</strong>. These are the forms to recognize by ear.",
            "<strong>Girar / doblar</strong> (to turn) → <em>gire / doble</em>. <strong>Seguir</strong> (to keep going) → <em>siga</em>. <strong>Cruzar</strong> (to cross) → <em>cruce</em>. <strong>Tomar / coger</strong> (to take) → <em>tome / coja</em>.",
            "Spain uses <em>coger</em> (\"take\") freely for streets and transport; in much of Latin America <em>coger</em> is vulgar, so use <em>tomar</em> there. <em>Tomar</em> is safe everywhere.",
          ],
          keyPoint:
            "Formal commands: gire, doble, siga, cruce, tome. These end the -ar verbs in -e and the -er/-ir verbs in -a.",
        },
        {
          type: "conjugation",
          heading: "Formal commands (usted) — for directions",
          verb: "girar / seguir / cruzar / tomar",
          meaning: "turn / keep going / cross / take (formal)",
          intro: "The usted command is what locals use to give directions politely. Learn to spot these endings.",
          tenses: [
            {
              name: "Formal imperative (usted)",
              forms: [
                { person: "girar", form: "gire", en: "turn (formal command)" },
                { person: "doblar", form: "doble", en: "turn (formal command)" },
                { person: "seguir", form: "siga", en: "keep going (formal command)" },
                { person: "cruzar", form: "cruce", en: "cross (formal command)" },
                { person: "tomar", form: "tome", en: "take (formal command)" },
                { person: "perdonar", form: "perdone", en: "excuse me (the formal version of 'perdona')" },
              ],
            },
          ],
        },
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
          type: "orderWords",
          heading: "Reconstruct the directions",
          items: [
            { tokens: ["Siga", "todo", "recto", "por", "esta", "calle"], en: "Keep going straight along this street." },
            { tokens: ["Gire", "a", "la", "derecha", "en", "el", "semáforo"], en: "Turn right at the traffic light." },
            { tokens: ["Tome", "la", "segunda", "calle", "a", "la", "izquierda"], en: "Take the second street on the left." },
            { tokens: ["Cruce", "la", "plaza", "y", "siga", "recto"], en: "Cross the square and keep going straight." },
            { tokens: ["Está", "enfrente", "de", "la", "estación"], en: "It's across from the station." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Turn left at the traffic light and keep going straight.",
          reference: "Gire a la izquierda en el semáforo y siga todo recto.",
          hint: "Use the formal commands «gire» and «siga». «todo recto» = straight ahead.",
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
    {
      slug: "directions-full-route",
      title: "Following a full set of directions",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Reading the signs around you",
          body: [
            "You'll see these compact phrases on signs all over a Spanish city:",
            "<em>Centro / Casco antiguo ➜</em> (Center / Old town this way)",
            "<em>Salida / Entrada</em> (Exit / Entrance)",
            "<em>Calle peatonal / Zona peatonal</em> (Pedestrian street / zone)",
            "<em>Dirección única / Sentido único</em> (One way)",
            "<em>Paso de peatones</em> (Crosswalk / pedestrian crossing)",
            "<em>Prohibido el paso</em> (No entry)",
          ],
        },
        {
          type: "dialogue",
          heading: "Getting directions to the market",
          lines: [
            { speaker: "You", l1: "Perdona, ¿sabe dónde está el Mercado de San Miguel?", en: "Excuse me, do you know where the San Miguel Market is?" },
            { speaker: "Local", l1: "Sí, claro. Siga todo recto por esta calle.", en: "Yes, of course. Go straight ahead along this street." },
            { speaker: "Local", l1: "Gire a la izquierda en el semáforo.", en: "Turn left at the traffic light." },
            { speaker: "Local", l1: "Después cruce la plaza y el mercado está a su derecha.", en: "Then cross the square and the market is on your right." },
            { speaker: "You", l1: "¿Está muy lejos?", en: "Is it very far?" },
            { speaker: "Local", l1: "No, a unos cinco minutos andando.", en: "No, about five minutes on foot." },
          ],
        },
        {
          type: "vocab",
          heading: "On foot vs by transport",
          items: [
            { l1: "a pie / andando", en: "on foot" },
            { l1: "en metro / en autobús", en: "by metro / by bus" },
            { l1: "a unos cinco minutos", en: "about five minutes (away)" },
            { l1: "cruzar la calle", en: "to cross the street" },
            { l1: "seguir adelante", en: "to continue forward" },
            { l1: "pasar por delante de", en: "to pass in front of" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Directions check",
          questions: [
            {
              q: "'A pie' means…",
              options: ["By car", "On foot", "By bike", "By taxi"],
              correct: 1,
              fb: "A pie = on foot. Also 'andando' (walking). Both are very common.",
            },
            {
              q: "'Cruce la plaza' means…",
              options: ["Turn at the square", "Cross the square", "Stop at the square", "Go around the square"],
              correct: 1,
              fb: "Cruzar = to cross. Cruce (formal imperative) = cross. Cruce la plaza.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, I'm lost. Is the cathedral far from here, or can I walk?",
          reference: "Perdone, estoy perdido. ¿La catedral está lejos de aquí, o puedo ir andando?",
          hint: "«Estoy perdido» (m) / «estoy perdida» (f) = I'm lost. «ir andando» = to go on foot. «de aquí» = from here.",
        },
        {
          type: "tip",
          heading: "If their directions overwhelm you, ask them to slow down or point",
          body: "Spanish directions often come as a rapid stream of <em>gire, cruce, siga, tome…</em> If you lose the thread, say <em>«¿Me lo puede repetir más despacio, por favor?»</em> (Can you repeat it more slowly, please?) or <em>«¿Me lo puede señalar en el mapa?»</em> (Can you point it out on the map?). A friendly <em>«¿Está lejos andando?»</em> (Is it far on foot?) also helps you decide whether to walk.",
          example: { l1: "Perdone, ¿me lo puede repetir más despacio?", en: "Excuse me, can you repeat it more slowly?" },
        },
      ],
    }
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
