import type { Unit } from "../../types";

export const UNIT_COMPLAINTS: Unit = {
  slug: "complaints",
  stage: 6,
  order: 28,
  icon: "📣",
  title: "Complaints & returns",
  tagline: "Quisiera una devolución — polite escalation.",
  lessons: [
    {
      slug: "complaints-vocab",
      title: "Making complaints",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Complaining in Spain: firm but courteous",
          body: [
            "Spaniards are more direct than some cultures, but in shops and restaurants you still get the best results by staying <strong>calm and polite</strong>.",
            "<strong>Step 1 (open softly):</strong> <em>«Perdone, hay un pequeño problema…»</em>",
            "<strong>Step 2 (state it clearly):</strong> <em>«Esto no funciona / no es lo que pedí.»</em>",
            "<strong>Step 3 (ask for action):</strong> <em>«¿Me lo pueden cambiar?»</em> or <em>«Quisiera un reembolso.»</em>",
            "<strong>Step 4 (escalate if needed):</strong> <em>«¿Puedo hablar con el encargado?»</em> and, as a last resort, <em>«¿Me da la hoja de reclamaciones?»</em>",
            "Use <em>quisiera</em> (I'd like) instead of <em>quiero</em> (I want) — it sounds far more polite and keeps things friendly.",
          ],
          keyPoint:
            "Start soft ('Perdone, hay un problema'), state it clearly, then ask for a fix. Prefer 'quisiera' over 'quiero'.",
        },
        {
          type: "vocab",
          heading: "Complaint phrases",
          items: [
            { l1: "Quisiera hacer una reclamación.", en: "I'd like to make a complaint." },
            { l1: "Hay un problema con…", en: "There's a problem with…" },
            { l1: "No funciona.", en: "It doesn't work." },
            { l1: "Está roto/a.", en: "It's broken." },
            { l1: "No es lo que pedí.", en: "It's not what I ordered." },
            { l1: "Me cobraron de más.", en: "I was overcharged." },
            { l1: "Llevo esperando una hora.", en: "I've been waiting an hour." },
            { l1: "Esto no es aceptable.", en: "This is not acceptable." },
          ],
        },
        {
          type: "vocab",
          heading: "Returns and resolutions",
          items: [
            { l1: "Quisiera devolver esto.", en: "I'd like to return this." },
            { l1: "Quisiera que me lo cambien.", en: "I'd like it replaced." },
            { l1: "Quisiera un reembolso.", en: "I'd like a refund." },
            { l1: "¿Puedo hablar con el encargado?", en: "Can I speak with the manager?" },
            { l1: "Tengo el recibo aquí.", en: "I have the receipt here." },
            { l1: "¿Cuánto tiempo tengo para devolverlo?", en: "How long do I have to return it?" },
          ],
        },
        {
          type: "tip",
          heading: "Reclamación vs queja",
          body: "Una <em>reclamación</em> is a formal complaint (you want action/compensation). Una <em>queja</em> is an informal complaint. In Spain, all businesses with public service must have a <em>libro de reclamaciones</em> (complaints book) by law — asking for it often resolves problems quickly.",
          example: { l1: "¿Me puede dar el libro de reclamaciones?", en: "Can you give me the complaints book?" },
        },
        {
          type: "fillBlank",
          heading: "Complete the complaint",
          items: [
            {
              template: "Perdone, esto no ___ .",
              answer: "funciona",
              en: "Excuse me, this doesn't work.",
              options: ["funciona", "trabaja", "vale", "sirve"],
            },
            {
              template: "Quisiera hacer una ___ .",
              answer: "reclamación",
              en: "I'd like to make a complaint.",
              options: ["reclamación", "recibo", "devolución", "respuesta"],
            },
            {
              template: "Esto no es lo que ___ .",
              answer: "pedí",
              en: "This is not what I ordered.",
              options: ["pedí", "pido", "pedía", "pediré"],
            },
            {
              template: "Me ___ de más en la cuenta.",
              answer: "cobraron",
              en: "I was overcharged on the bill.",
              options: ["cobraron", "pagaron", "dieron", "cobré"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Complaints check",
          questions: [
            {
              q: "The formal complaint book in Spanish businesses is called…",
              options: ["el diario de problemas", "el libro de reclamaciones", "el cuaderno de quejas", "la hoja de reclamación"],
              correct: 1,
              fb: "El libro de reclamaciones is legally required in Spain. Asking for it is a powerful way to escalate.",
            },
            {
              q: "'No es lo que pedí' means…",
              options: ["It's not what I wanted to order", "It's not what I ordered", "I don't like this", "I'd like to reorder"],
              correct: 1,
              fb: "Pedí = I ordered (indefinido of pedir). No es lo que pedí = it's not what I ordered.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, there's a problem. This isn't what I ordered.",
          reference: "Perdone, hay un problema. Esto no es lo que pedí.",
          hint: "'Perdone' opens politely. 'Pedí' = I ordered (pretérito of pedir).",
        },
      ],
    },
    {
      slug: "complaints-escalating",
      title: "Escalating politely",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "Polite escalation",
          items: [
            { l1: "Entiendo su posición, pero…", en: "I understand your position, but…" },
            { l1: "Me gustaría resolver esto amigablemente.", en: "I'd like to resolve this amicably." },
            { l1: "De lo contrario, tendré que…", en: "Otherwise, I'll have to…" },
            { l1: "¿Hay alguna solución?", en: "Is there any solution?" },
            { l1: "¿Qué puede hacer por mí?", en: "What can you do for me?" },
          ],
        },
        {
          type: "tip",
          heading: "Soften it with the conditional",
          body: "The conditional keeps a complaint from sounding aggressive. Avoid <em>«Quiero hablar con el encargado»</em> (demanding); say <em>«¿Podría hablar con el encargado?»</em> = could I speak with the manager? Likewise <em>«Me gustaría…»</em> (I'd like…) and <em>«¿Sería posible…?»</em> (would it be possible…?) lower the temperature instantly.",
          example: { l1: "¿Sería posible cambiarlo por otro?", en: "Would it be possible to exchange it for another?" },
        },
        {
          type: "orderWords",
          heading: "Build the escalation",
          items: [
            { tokens: ["¿", "Puedo", "hablar", "con", "el", "encargado", "?"], en: "Can I speak with the manager?" },
            { tokens: ["Me", "gustaría", "resolver", "esto", "hoy", "."], en: "I'd like to resolve this today." },
            { tokens: ["¿", "Hay", "alguna", "solución", "?"], en: "Is there any solution?" },
            { tokens: ["De", "lo", "contrario", ",", "haré", "una", "reclamación", "."], en: "Otherwise, I'll file a complaint." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Final check",
          questions: [
            {
              q: "How do you ask to speak to the manager?",
              options: ["¿Dónde está el jefe?", "¿Puedo hablar con el encargado?", "Llame al director", "Quiero hablar arriba"],
              correct: 1,
              fb: "El encargado = the person in charge / manager. ¿Puedo hablar con el encargado?",
            },
            {
              q: "'Quisiera un reembolso' means…",
              options: ["I'd like a replacement", "I'd like an exchange", "I'd like a refund", "I'd like to speak to a manager"],
              correct: 2,
              fb: "Reembolso = refund. Quisiera un reembolso = I'd like a refund.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'd like to resolve this amicably. Can I speak with the manager?",
          reference: "Me gustaría resolver esto amigablemente. ¿Puedo hablar con el encargado?",
          hint: "'Me gustaría' = I'd like (conditional, polite). 'El encargado' = the person in charge.",
        },
      ],
    },
    {
      slug: "complaints-full-scenario",
      title: "A complete complaint resolution",
      estMinutes: 9,
      pages: [
        {
          type: "dialogue",
          heading: "Returning a faulty item",
          lines: [
            { speaker: "You", l1: "Buenas tardes. Compré este cargador hace tres días y no funciona.", en: "Good afternoon. I bought this charger three days ago and it doesn't work." },
            { speaker: "Staff", l1: "¿Tiene el recibo?", en: "Do you have the receipt?" },
            { speaker: "You", l1: "Sí, aquí lo tiene.", en: "Yes, here it is." },
            { speaker: "Staff", l1: "¿Prefiere cambiarlo por otro o le devolvemos el dinero?", en: "Do you prefer to exchange it for another or shall we refund you?" },
            { speaker: "You", l1: "Prefiero el reembolso, si es posible.", en: "I prefer a refund, if possible." },
            { speaker: "Staff", l1: "Por supuesto. En un momento le tramitamos la devolución.", en: "Of course. We'll process the return right away." },
          ],
        },
        {
          type: "vocab",
          heading: "Formal complaint vocabulary",
          items: [
            { l1: "tramitar una devolución", en: "to process a return" },
            { l1: "el servicio postventa", en: "after-sales service" },
            { l1: "el plazo de devolución", en: "the return period" },
            { l1: "fuera de plazo", en: "out of time / past the deadline" },
            { l1: "presentar una queja formal", en: "to lodge a formal complaint" },
            { l1: "resolver el problema", en: "to resolve the problem" },
          ],
        },
        {
          type: "dialogue",
          heading: "An error on the bill",
          setup: "You're paying at a restaurant and notice an extra charge.",
          lines: [
            { speaker: "You", l1: "Perdone, creo que hay un error en la cuenta. No pedimos esta botella de vino.", en: "Excuse me, I think there's an error on the bill. We didn't order this bottle of wine." },
            { speaker: "Camarero", l1: "Déjeme ver… Tiene razón, me he equivocado de mesa. Le quito el vino ahora mismo.", en: "Let me see… You're right, I've got the wrong table. I'll remove the wine right now." },
            { speaker: "You", l1: "Gracias. ¿Me trae la cuenta corregida, por favor?", en: "Thank you. Could you bring me the corrected bill, please?" },
            { speaker: "Camarero", l1: "Claro, disculpe las molestias.", en: "Of course, sorry for the inconvenience." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Resolution fill",
          items: [
            {
              template: "Hay un ___ en la cuenta.",
              answer: "error",
              en: "There's an error on the bill.",
              options: ["error", "recibo", "plazo", "cambio"],
            },
            {
              template: "Quisiera un ___ , no un cambio.",
              answer: "reembolso",
              en: "I'd like a refund, not an exchange.",
              options: ["reembolso", "recibo", "encargado", "plazo"],
            },
            {
              template: "Lo siento, está ___ de plazo.",
              answer: "fuera",
              en: "Sorry, it's past the deadline.",
              options: ["fuera", "dentro", "cerca", "antes"],
            },
            {
              template: "¿Me trae el libro de ___ , por favor?",
              answer: "reclamaciones",
              en: "Could you bring me the complaints book, please?",
              options: ["reclamaciones", "recibos", "devoluciones", "quejas"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Complaint vocabulary",
          questions: [
            {
              q: "'¿Prefiere cambiarlo o le devolvemos el dinero?' is asking…",
              options: ["If you like the item", "If you want an exchange or a refund", "If you have the receipt", "If the item is broken"],
              correct: 1,
              fb: "Cambiar = to exchange. Devolver el dinero = to refund. A standard retail question.",
            },
            {
              q: "'Fuera de plazo' means…",
              options: ["On time", "Outside the return window / past the deadline", "In a rush", "Too slow"],
              correct: 1,
              fb: "Fuera de plazo = outside the time limit. Important to know when making returns.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "It's broken and it doesn't work. I'd like a refund.",
          reference: "Está roto y no funciona. Quisiera un reembolso.",
          hint: "'Está roto' = it's broken. 'Quisiera' keeps the request polite.",
        },
        {
          type: "tip",
          heading: "If they refuse",
          body: "If a shop digs in, stay calm and ask politely for the <em>hoja de reclamaciones</em> (official complaint form) — every business in Spain must provide one and it carries real weight, since copies go to consumer authorities. For defective goods you have a legal guarantee; you can mention <em>«Tengo derecho a la garantía.»</em> = I have a right to the warranty. Escalate to the regional <em>OMIC</em> (consumer office) only if it gets serious.",
          example: { l1: "Si no hay solución, pediré la hoja de reclamaciones.", en: "If there's no solution, I'll ask for the complaints form." },
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'No funciona' means…", options: ["It's broken", "It doesn't work", "It's not here", "It's defective"], correct: 1 },
      { q: "'Me cobraron de más' means…", options: ["I was undercharged", "I was overcharged", "I paid in cash", "The price is wrong"], correct: 1 },
      { q: "How do you say 'I'd like a refund'?", options: ["Quisiera un cambio", "Quisiera devolverlo", "Quisiera un reembolso", "Quiero mi dinero"], correct: 2 },
      { q: "El libro de reclamaciones is…", options: ["A recipe book", "A legally required complaints book", "A guest book", "A menu"], correct: 1 },
      { q: "'No es lo que pedí' means…", options: ["I didn't order this", "I don't like this", "This is wrong", "It's not what I ordered"], correct: 3 },
      { q: "How do you ask to speak to the manager?", options: ["¿Dónde está el jefe?", "¿Puedo hablar con el encargado?", "Necesito al director", "Both A and B"], correct: 1 },
      { q: "'Llevo esperando una hora' means…", options: ["I've been waiting an hour", "I waited an hour yesterday", "I'll wait an hour", "The wait is one hour"], correct: 0 },
      { q: "'Está roto/a' means…", options: ["It doesn't work", "It's broken", "It's empty", "It's dirty"], correct: 1 },
      { q: "'¿Hay alguna solución?' means…", options: ["Is there a solution?", "Can you help?", "What's the problem?", "What can you do?"], correct: 0 },
      { q: "'De lo contrario' means…", options: ["On the other hand", "Otherwise / if not", "In addition", "For that reason"], correct: 1 },
    ],
  },
};
