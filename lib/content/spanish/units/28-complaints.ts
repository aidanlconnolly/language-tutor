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
      estMinutes: 8,
      pages: [
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
      ],
    },
    {
      slug: "complaints-escalating",
      title: "Escalating politely",
      estMinutes: 6,
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
      ],
    },
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
