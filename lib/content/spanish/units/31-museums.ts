import type { Unit } from "../../types";

export const UNIT_MUSEUMS: Unit = {
  slug: "museums",
  stage: 7,
  order: 31,
  icon: "🖼️",
  title: "Museums & art talk",
  tagline: "Cuadro, exposición, entrada reducida, Goya, Dalí.",
  lessons: [
    {
      slug: "museums-vocab",
      title: "Museum vocabulary",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "At the museum",
          items: [
            { l1: "el cuadro / la pintura", en: "the painting" },
            { l1: "la escultura", en: "the sculpture" },
            { l1: "la exposición / la muestra", en: "the exhibition / show" },
            { l1: "la colección permanente", en: "the permanent collection" },
            { l1: "la entrada / el billete", en: "the ticket" },
            { l1: "la entrada reducida", en: "the discounted ticket (students, seniors)" },
            { l1: "la audioguía", en: "the audio guide" },
            { l1: "el catálogo", en: "the catalogue" },
          ],
        },
        {
          type: "vocab",
          heading: "Talking about art",
          items: [
            { l1: "Me encanta este cuadro.", en: "I love this painting." },
            { l1: "¿Quién es el autor / la autora?", en: "Who is the artist?" },
            { l1: "¿De qué época es?", en: "What period is it from?" },
            { l1: "Es del siglo XVII.", en: "It's from the 17th century." },
            { l1: "El estilo es…", en: "The style is…" },
            { l1: "Me resulta muy expresivo.", en: "I find it very expressive." },
            { l1: "No me dice mucho.", en: "It doesn't really speak to me." },
            { l1: "Es una obra maestra.", en: "It's a masterpiece." },
          ],
        },
        {
          type: "vocab",
          heading: "Key Spanish artists",
          items: [
            { l1: "Goya", en: "Francisco de Goya (1746–1828) — court painter, 'Black Paintings'" },
            { l1: "Velázquez", en: "Diego Velázquez (1599–1660) — Las Meninas (El Prado)" },
            { l1: "El Greco", en: "Domenikos Theotokopoulos (1541–1614) — Toledo" },
            { l1: "Picasso", en: "Pablo Picasso (1881–1973) — Guernica (Reina Sofía)" },
            { l1: "Dalí", en: "Salvador Dalí (1904–1989) — surrealism, Theatre-Museum in Figueres" },
            { l1: "Miró", en: "Joan Miró (1893–1983) — abstract, bright colours" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Art and museums check",
          questions: [
            {
              q: "Las Meninas is by…",
              options: ["Goya", "Picasso", "Velázquez", "El Greco"],
              correct: 2,
              fb: "Las Meninas (1656) by Velázquez is in El Prado — one of the most studied paintings in art history.",
            },
            {
              q: "'La entrada reducida' is for…",
              options: ["Foreigners", "Children under 12 only", "Reduced-price tickets (students, seniors, etc.)", "Evening tickets"],
              correct: 2,
              fb: "Reducida = reduced. La entrada reducida = discounted ticket for eligible groups.",
            },
          ],
        },
      ],
    },
    {
      slug: "museums-conversation",
      title: "Museum conversations",
      estMinutes: 6,
      pages: [
        {
          type: "vocab",
          heading: "Practical museum phrases",
          items: [
            { l1: "¿A qué hora cierra el museo?", en: "What time does the museum close?" },
            { l1: "¿Está incluida la exposición temporal?", en: "Is the temporary exhibition included?" },
            { l1: "¿Se puede tomar fotos?", en: "Can photos be taken?" },
            { l1: "¿Dónde están los aseos?", en: "Where are the toilets?" },
            { l1: "¿Hay visita guiada en inglés?", en: "Is there a guided tour in English?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Final check",
          questions: [
            {
              q: "Picasso's Guernica is in…",
              options: ["El Prado", "El Reina Sofía", "The Thyssen", "Bilbao Guggenheim"],
              correct: 1,
              fb: "Guernica has been at the Museo Nacional Centro de Arte Reina Sofía since 1992.",
            },
            {
              q: "'Es una obra maestra' means…",
              options: ["It's a very old painting", "It's a masterpiece", "It's the main work", "It's by a master artist"],
              correct: 1,
              fb: "Obra maestra = masterpiece. Una obra = a work (of art).",
            },
          ],
        },
      ],
    },
    {
      slug: "museums-guided-tour",
      title: "On a museum guided tour",
      estMinutes: 7,
      pages: [
        {
          type: "dialogue",
          heading: "During a guided tour",
          lines: [
            { speaker: "Guide", l1: "Este cuadro fue pintado por Goya entre 1820 y 1823.", en: "This painting was painted by Goya between 1820 and 1823." },
            { speaker: "Visitor", l1: "¿Por qué se llaman 'las pinturas negras'?", en: "Why are they called 'the Black Paintings'?" },
            { speaker: "Guide", l1: "Por su temática oscura y los colores que Goya usó.", en: "Because of their dark subject matter and the colours Goya used." },
            { speaker: "Visitor", l1: "¿Cuál es la más famosa?", en: "Which is the most famous?" },
            { speaker: "Guide", l1: "Probablemente 'Saturno devorando a su hijo'. Es muy perturbadora.", en: "Probably 'Saturn Devouring His Son'. It's very disturbing." },
          ],
        },
        {
          type: "vocab",
          heading: "Talking about paintings and style",
          items: [
            { l1: "fue pintado por", en: "was painted by (passive)" },
            { l1: "la temática", en: "the subject matter / theme" },
            { l1: "el estilo barroco / romántico", en: "the Baroque / Romantic style" },
            { l1: "la técnica", en: "the technique" },
            { l1: "perturbador/a", en: "disturbing" },
            { l1: "conmovedor/a", en: "moving / touching" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Art vocabulary",
          questions: [
            {
              q: "'Fue pintado por Goya' is what construction?",
              options: ["Active voice", "Passive voice with ser", "Imperfect tense", "Reflexive verb"],
              correct: 1,
              fb: "Fue pintado por = was painted by. Passive: ser (indefinido) + past participle + por.",
            },
            {
              q: "'Conmovedor' describes art that is…",
              options: ["Strange and unusual", "Technically perfect", "Emotionally moving/touching", "Very old"],
              correct: 2,
              fb: "Conmovedor = moving / touching (from conmover = to move emotionally).",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Las Meninas is by…", options: ["Goya", "Picasso", "Velázquez", "El Greco"], correct: 2 },
      { q: "Guernica is by…", options: ["Dalí", "Miró", "Picasso", "Velázquez"], correct: 2 },
      { q: "Guernica hangs in…", options: ["El Prado", "El Reina Sofía", "The Thyssen", "El Retiro"], correct: 1 },
      { q: "'La entrada reducida' means…", options: ["Free entrance", "Discounted ticket", "Main entrance", "Exit ticket"], correct: 1 },
      { q: "'Es del siglo XVII' means…", options: ["It's from the 7th century", "It's from the 17th century", "It's 17 years old", "It's from the 70s"], correct: 1 },
      { q: "Dalí's museum-theatre is in…", options: ["Barcelona", "Madrid", "Figueres", "Seville"], correct: 2 },
      { q: "'La audioguía' is…", options: ["A music device", "An audio guide", "A phone tour app", "A guided tour"], correct: 1 },
      { q: "'No me dice mucho' about an artwork means…", options: ["I don't understand it", "It doesn't speak to me / I'm not moved by it", "I haven't seen it", "It's not famous"], correct: 1 },
      { q: "'La exposición' is…", options: ["The exit", "The collection", "The exhibition", "The catalogue"], correct: 2 },
      { q: "How do you ask if photos are allowed?", options: ["¿Puedo fotografiar?", "¿Se puede tomar fotos?", "¿Hay fotos?", "¿Está permitido tomar fotos? (also correct)"], correct: 3 },
    ],
  },
};
