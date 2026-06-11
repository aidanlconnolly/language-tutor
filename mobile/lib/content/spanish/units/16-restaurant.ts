import type { Unit } from "../../types";

export const UNIT_RESTAURANT: Unit = {
  slug: "restaurant",
  stage: 4,
  order: 16,
  icon: "🍽️",
  title: "At the restaurant",
  tagline: "Carta, menú del día, pedir, la cuenta.",
  lessons: [
    {
      slug: "restaurant-ordering",
      title: "Ordering at a Spanish restaurant",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The menú del día",
          body: [
            "Spain's best lunchtime bargain is the <em>menú del día</em> — a set lunch menu available at most restaurants Monday–Friday. It typically includes a starter (<em>primer plato</em>), main (<em>segundo plato</em>), dessert or coffee, and bread and a drink — all for €10–15.",
            "Dinner is later than you're used to: most Spaniards eat at 9–10pm. Lunch (2–4pm) is the main meal of the day.",
          ],
          tip: {
            label: "La carta vs el menú",
            body: "In Spain, <em>la carta</em> = the full menu you choose from. <em>El menú</em> = a fixed-price set menu. Asking for 'el menú' means you want the set deal.",
          },
        },
        {
          type: "vocab",
          heading: "Restaurant vocabulary",
          items: [
            { l1: "la carta / el menú", en: "the menu / set menu" },
            { l1: "el primer plato", en: "the first course / starter" },
            { l1: "el segundo plato", en: "the main course" },
            { l1: "el postre", en: "the dessert" },
            { l1: "la bebida", en: "the drink" },
            { l1: "el pan", en: "the bread" },
            { l1: "la cuenta", en: "the bill" },
            { l1: "la propina", en: "the tip" },
          ],
        },
        {
          type: "vocab",
          heading: "Phrases for ordering",
          items: [
            { l1: "Una mesa para dos, por favor.", en: "A table for two, please." },
            { l1: "¿Nos puede traer la carta?", en: "Can you bring us the menu?" },
            { l1: "Quisiera el menú del día.", en: "I'd like the set menu." },
            { l1: "De primero quiero…", en: "For my starter I'll have…" },
            { l1: "De segundo, el pescado.", en: "For my main, the fish." },
            { l1: "¿Qué recomienda?", en: "What do you recommend?" },
            { l1: "¿Está incluido el pan?", en: "Is the bread included?" },
            { l1: "La cuenta, por favor.", en: "The bill, please." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Restaurant check",
          questions: [
            {
              q: "What is the menú del día?",
              options: ["The full à la carte menu", "A fixed-price set lunch menu", "A menu only for tourists", "A menu of daily specials"],
              correct: 1,
              fb: "Menú del día = set lunch menu with starter, main, and dessert. Great value.",
            },
            {
              q: "In Spain, dinner is typically eaten at…",
              options: ["6pm", "7pm", "8pm", "9–10pm"],
              correct: 3,
              fb: "Spaniards eat dinner late — 9pm or later is standard.",
            },
            {
              q: "How do you ask 'What do you recommend?'",
              options: ["¿Qué quieres?", "¿Qué recomienda?", "¿Qué es bueno?", "¿Cuál es el mejor?"],
              correct: 1,
              fb: "¿Qué recomienda? is the polite form (usted). ¿Qué recomiendas? is informal.",
            },
          ],
        },
      ],
    },
    {
      slug: "restaurant-paying",
      title: "Paying and leaving",
      estMinutes: 6,
      pages: [
        {
          type: "vocab",
          heading: "Paying phrases",
          items: [
            { l1: "¿Puedo pagar con tarjeta?", en: "Can I pay by card?" },
            { l1: "¿Está todo incluido?", en: "Is everything included?" },
            { l1: "Creo que hay un error en la cuenta.", en: "I think there's an error in the bill." },
            { l1: "¿Cobran por el pan?", en: "Do you charge for the bread?" },
            { l1: "¿Se acepta tarjeta?", en: "Do you accept card?" },
            { l1: "Vamos a pagar por separado.", en: "We'll pay separately." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Paying up",
          questions: [
            {
              q: "How do you ask if you can pay by card?",
              options: ["¿Puedo pagar con dinero?", "¿Puedo pagar con tarjeta?", "¿Se acepta efectivo?", "¿Cuánto es?"],
              correct: 1,
              fb: "Con tarjeta = by card. ¿Puedo pagar con tarjeta? is essential.",
            },
            {
              q: "'Vamos a pagar por separado' means…",
              options: ["We'll pay together", "We'll pay separately", "Can we split the bill?", "We need separate bills"],
              correct: 1,
              fb: "Por separado = separately. We'll pay separately.",
            },
          ],
        },
      ],
    },
    {
      slug: "restaurant-full-conversation",
      title: "A full restaurant experience",
      estMinutes: 7,
      pages: [
        {
          type: "dialogue",
          heading: "From arrival to dessert",
          lines: [
            { speaker: "Waiter", l1: "Buenas tardes. ¿Tienen reserva?", en: "Good afternoon. Do you have a reservation?" },
            { speaker: "Guest", l1: "No, ¿tienen mesa para dos?", en: "No, do you have a table for two?" },
            { speaker: "Waiter", l1: "Sí, síganme por favor.", en: "Yes, follow me please." },
            { speaker: "Guest", l1: "¿Nos recomienda algo de hoy?", en: "Do you recommend anything from today's menu?" },
            { speaker: "Waiter", l1: "El bacalao al horno está muy bueno hoy.", en: "The baked cod is very good today." },
            { speaker: "Guest", l1: "Perfecto. Lo ponemos de segundo.", en: "Perfect. We'll have that as our main." },
          ],
        },
        {
          type: "vocab",
          heading: "Specific ordering phrases",
          items: [
            { l1: "¿Tienen mesa libre?", en: "Do you have a free table?" },
            { l1: "Síganme / Pase por aquí.", en: "Follow me / Come this way." },
            { l1: "¿Nos recomienda algo?", en: "Do you recommend anything?" },
            { l1: "Lo ponemos de segundo.", en: "We'll have that as our main." },
            { l1: "¿Qué viene con el plato?", en: "What comes with the dish?" },
            { l1: "¿Podemos pedir ya?", en: "Can we order now?" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Restaurant language",
          questions: [
            {
              q: "'¿Tienen mesa libre?' means…",
              options: ["Is the table free? (one specific table)", "Do you have a free table?", "Is this seat taken?", "Can I sit anywhere?"],
              correct: 1,
              fb: "¿Tienen mesa libre? = do you have a free/available table? The standard question on arrival.",
            },
            {
              q: "'Lo ponemos de segundo' means…",
              options: ["We'll have it as our starter", "We'll have it as our main", "We'll have two of it", "We'll have it second time around"],
              correct: 1,
              fb: "De segundo = as the main course. Lo ponemos = we'll have it (lit. we put it as).",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "The menú del día is…", options: ["À la carte menu", "Fixed-price set lunch", "Menu of the day's specials only", "A tourist menu"], correct: 1 },
      { q: "'La carta' is…", options: ["The set menu", "The full à la carte menu", "The bill", "The wine list"], correct: 1 },
      { q: "Spanish dinner is typically at…", options: ["6pm", "7pm", "8pm", "9–10pm"], correct: 3 },
      { q: "'De segundo, el pescado' means…", options: ["And also, the fish", "For my main, the fish", "Second, I want fish", "Fish for two"], correct: 1 },
      { q: "How do you ask for the bill?", options: ["El menú, por favor", "La cuenta, por favor", "La carta, por favor", "¿Puedo pagar?"], correct: 1 },
      { q: "'¿Qué recomienda?' is in…", options: ["Informal tú form", "Formal usted form", "Plural form", "Past tense"], correct: 1 },
      { q: "'¿Cobran por el pan?' means…", options: ["Is the bread good?", "Do you have bread?", "Do you charge for the bread?", "Is bread included?"], correct: 2 },
      { q: "How do you ask to pay separately?", options: ["Pago solo yo", "Vamos a pagar por separado", "Dos cuentas", "Pagamos juntos"], correct: 1 },
      { q: "How do you ask 'Can you bring us the menu?'", options: ["¿Nos puede traer la carta?", "¿Tiene la carta?", "Quiero la carta", "Deme la carta"], correct: 0 },
      { q: "'¿Se acepta tarjeta?' means…", options: ["Is the card mine?", "Do you accept card?", "Can I see the card?", "Is cash accepted?"], correct: 1 },
    ],
  },
};
