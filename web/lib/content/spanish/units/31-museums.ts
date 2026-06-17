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
      estMinutes: 11,
      pages: [
        {
          type: "intro",
          heading: "Spanish museums, in your own words",
          body: [
            "Spain has some of the world's great museums, and the big ones cluster on Madrid's <em>Paseo del Arte</em>: el Museo del Prado (Velázquez, Goya, El Greco), el Reina Sofía (Picasso's <em>Guernica</em>, Dalí, Miró) and el Thyssen-Bornemisza. Up north, el Guggenheim de Bilbao is famous as much for Frank Gehry's titanium building as for the art inside.",
            "Plaques are usually in Spanish first, English second. A handful of words let you read them, follow a <em>visita guiada</em> (guided tour), and ask for tickets.",
            "<strong>Materials & forms:</strong> <em>el óleo sobre lienzo</em> (oil on canvas), <em>el fresco</em>, <em>la escultura en mármol / bronce</em> (marble / bronze sculpture), <em>el grabado</em> (engraving), <em>el dibujo</em> (drawing), <em>el retrato</em> (portrait), <em>el autorretrato</em> (self-portrait), <em>el bodegón</em> (still life), <em>el paisaje</em> (landscape).",
          ],
          keyPoint:
            "El Prado + el Reina Sofía + el Thyssen = Madrid's Paseo del Arte. El Guggenheim is in Bilbao. Materials (óleo, mármol, bronce) + forms (retrato, paisaje, bodegón) cover most plaques.",
        },
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
        {
          type: "tip",
          heading: "Free hours at Spanish museums",
          body: "Most state museums offer <em>entrada gratuita</em> (free entry) at set times. El Prado is free the last two hours each evening (Mon–Sat) and Sunday afternoons; el Reina Sofía closes Tuesdays and has free evening slots too. Ask at the desk: <em>«¿Hay alguna hora con entrada gratuita?»</em> = Is there a time with free entry? Bring ID — <em>el carné de estudiante</em> (student card) gets you <em>la entrada reducida</em>.",
          example: { l1: "¿A partir de qué hora es gratis la entrada?", en: "From what time is admission free?" },
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like two tickets for the permanent collection, please.",
          reference: "Quería dos entradas para la colección permanente, por favor.",
          hint: "'Quería…' is a soft, polite way to say 'I'd like…' (literally 'I wanted'). 'La entrada' = ticket.",
        },
      ],
    },
    {
      slug: "museums-conversation",
      title: "Museum conversations",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Buying tickets and asking your way around",
          body: [
            "Ticket types: <em>la entrada general</em> (full), <em>la entrada reducida</em> (reduced — students, seniors), <em>la entrada gratuita</em> (free). Some museums sell <em>la entrada combinada</em> (combo with another collection or the temporary show).",
            "Useful openers: <em>«¿A qué hora abre / cierra?»</em> (When does it open / close?), <em>«¿Hay descuento para estudiantes?»</em> (Is there a student discount?), <em>«¿Está incluida la exposición temporal?»</em> (Is the temporary exhibition included?).",
            "Watch for signs: <em>prohibido hacer fotos</em> (photos forbidden), <em>prohibido el flash</em> (no flash), <em>no tocar</em> (do not touch).",
          ],
          keyPoint:
            "General / reducida / gratuita / combinada. Ask «¿Hay descuento para estudiantes?» and «¿A qué hora cierra?». Look for «prohibido hacer fotos».",
        },
        {
          type: "vocab",
          heading: "Practical museum phrases",
          items: [
            { l1: "¿A qué hora abre el museo?", en: "What time does the museum open?" },
            { l1: "¿A qué hora cierra el museo?", en: "What time does the museum close?" },
            { l1: "¿Hay descuento para estudiantes?", en: "Is there a student discount?" },
            { l1: "¿Está incluida la exposición temporal?", en: "Is the temporary exhibition included?" },
            { l1: "¿Se puede tomar fotos?", en: "Can photos be taken?" },
            { l1: "Prohibido hacer fotos.", en: "Photos forbidden." },
            { l1: "¿Dónde están los aseos?", en: "Where are the toilets?" },
            { l1: "¿Hay visita guiada en inglés?", en: "Is there a guided tour in English?" },
            { l1: "¿Cuánto dura la audioguía?", en: "How long does the audio guide last?" },
            { l1: "el guardarropa / la consigna", en: "the coat check / cloakroom" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the Prado ticket desk",
          setup: "You arrive at the box office (la taquilla) without a ticket.",
          lines: [
            { speaker: "You", l1: "Buenos días. Quería dos entradas para la colección permanente, por favor.", en: "Good morning. I'd like two tickets for the permanent collection, please." },
            { speaker: "Cajero", l1: "Muy bien. Son quince euros cada una. ¿Tienen carné de estudiante?", en: "Of course. They're fifteen euros each. Do you have a student card?" },
            { speaker: "You", l1: "Sí, los dos somos estudiantes. ¿Hay descuento?", en: "Yes, we're both students. Is there a discount?" },
            { speaker: "Cajero", l1: "Entonces la entrada reducida: siete con cincuenta cada una.", en: "Then the reduced ticket: seven fifty each." },
            { speaker: "You", l1: "Perfecto. ¿Está incluida la exposición temporal de Goya?", en: "Perfect. Is the temporary Goya exhibition included?" },
            { speaker: "Cajero", l1: "No, esa es aparte. La entrada combinada cuesta cuatro euros más.", en: "No, that one's separate. The combined ticket costs four euros more." },
            { speaker: "You", l1: "Vale, dos entradas combinadas, por favor. ¿Y la audioguía?", en: "Okay, two combined tickets, please. And the audio guide?" },
            { speaker: "Cajero", l1: "La audioguía son cinco euros más. Pueden recogerla en aquella mesa.", en: "The audio guide is five euros more. You can pick it up at that table." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Museum fill-ins",
          items: [
            {
              template: "¿Hay ___ para estudiantes?",
              answer: "descuento",
              en: "Is there a student discount?",
              options: ["descuento", "entrada", "reducida", "precio"],
            },
            {
              template: "La ___ en inglés cuesta cinco euros más.",
              answer: "audioguía",
              en: "The audio guide in English costs five euros more.",
              options: ["audioguía", "guía", "visita", "consigna"],
            },
            {
              template: "¿A qué hora ___ el museo?",
              answer: "cierra",
              en: "What time does the museum close?",
              options: ["abre", "cierra", "incluye", "dura"],
            },
            {
              template: "Está ___ hacer fotos en esta sala.",
              answer: "prohibido",
              en: "It's forbidden to take photos in this room.",
              options: ["prohibido", "incluido", "permitido", "gratuito"],
            },
            {
              template: "¿Está ___ la exposición temporal en la entrada?",
              answer: "incluida",
              en: "Is the temporary exhibition included in the ticket?",
              options: ["incluida", "reducida", "cerrada", "guiada"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Is there a discount for students? And what time does the museum close?",
          reference: "¿Hay descuento para estudiantes? ¿Y a qué hora cierra el museo?",
          hint: "Remember the inverted ¿ at the start of each question. 'cerrar' → cierra (e→ie stem change).",
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
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Sounding thoughtful in front of a painting",
          body: [
            "On a <em>visita guiada</em> you'll hear the passive a lot: <em>fue pintado por…</em> (was painted by…), <em>fue restaurado en…</em> (was restored in…). It's just <em>ser</em> in the preterite + past participle + <em>por</em>.",
            "To share an opinion without sounding like a know-it-all, a few soft phrases go a long way: <em>Me llama la atención…</em> (It catches my eye…), <em>Lo que más me gusta es…</em> (What I like most is…), <em>Se nota la influencia de…</em> (You can see the influence of…), <em>Me recuerda a…</em> (It reminds me of…).",
            "Spanish reactions to art: <em>Es una obra maestra</em> (it's a masterpiece), <em>Es impresionante</em> (it's striking), <em>No me dice mucho</em> (it doesn't speak to me), <em>Está sobrevalorado/a</em> (it's overrated).",
          ],
          keyPoint:
            "Passive: ser (preterite) + participle + por. Opinions: me llama la atención / lo que más me gusta es / se nota la influencia de / me recuerda a.",
        },
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
          type: "vocab",
          heading: "Opinion phrases for art",
          items: [
            { l1: "me llama la atención", en: "it catches my eye / strikes me" },
            { l1: "lo que más me gusta es…", en: "what I like most is…" },
            { l1: "se nota la influencia de…", en: "you can see the influence of…" },
            { l1: "me recuerda a…", en: "it reminds me of…" },
            { l1: "en mi opinión / para mí", en: "in my opinion / for me" },
            { l1: "es impresionante", en: "it's striking / impressive" },
            { l1: "no me dice mucho", en: "it doesn't speak to me" },
            { l1: "está sobrevalorado/a", en: "it's overrated" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in the right order.",
          items: [
            {
              tokens: ["Las", "Meninas", "fue", "pintado", "por", "Velázquez"],
              en: "Las Meninas was painted by Velázquez.",
            },
            {
              tokens: ["Lo", "que", "más", "me", "gusta", "es", "el", "color"],
              en: "What I like most is the colour.",
            },
            {
              tokens: ["Se", "nota", "la", "influencia", "de", "Goya"],
              en: "You can see the influence of Goya.",
            },
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
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "This painting really catches my eye. You can see the influence of Velázquez.",
          reference: "Este cuadro me llama mucho la atención. Se nota la influencia de Velázquez.",
          hint: "'Me llama la atención' = it catches my eye. 'Se nota…' = you can see / one notices…",
        },
        {
          type: "tip",
          heading: "Don't fake it",
          body: "Spaniards notice when visitors name-drop artists to seem cultured. It's better to be honest: <em>«No lo conocía, pero me encanta»</em> = I didn't know it, but I love it. Curiosity beats false expertise — asking <em>«¿Me puede contar algo sobre este artista?»</em> opens up a real conversation.",
          example: { l1: "No lo conocía, pero me parece impresionante.", en: "I didn't know it, but I think it's striking." },
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
