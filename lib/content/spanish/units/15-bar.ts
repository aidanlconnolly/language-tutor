import type { Unit } from "../../types";

export const UNIT_BAR: Unit = {
  slug: "bar",
  stage: 4,
  order: 15,
  icon: "☕",
  title: "At the bar",
  tagline: "Café con leche, vermut, tapas gratis, pagar al salir.",
  lessons: [
    {
      slug: "bar-coffee",
      title: "Spanish coffee culture",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Coffee in Spain is serious",
          body: [
            "Spanish bars serve coffee all day. Stand at the bar (at the barra) and your coffee costs less than at a table. The most common orders: <em>café con leche</em> (half espresso, half hot milk), <em>solo</em> (straight espresso), and <em>cortado</em> (espresso with a splash of milk).",
            "In Spain, coffee usually comes with a small glass of water. At breakfast many bars include a croissant (<em>el cruasán</em>) or toast (<em>la tostada</em>).",
          ],
          tip: {
            label: "Pagar al salir",
            body: "In Spanish bars you typically pay when you leave (<em>al salir</em>), not when you order. The bartender keeps track. Just say '¿Qué le debo?' (What do I owe you?) or 'La cuenta, por favor' when you're ready.",
          },
        },
        {
          type: "vocab",
          heading: "Coffee orders",
          items: [
            { l1: "un café solo", en: "a straight espresso" },
            { l1: "un café con leche", en: "espresso with hot milk (half and half)" },
            { l1: "un cortado", en: "espresso with a splash of milk" },
            { l1: "un café americano", en: "a long black / Americano" },
            { l1: "un café con hielo", en: "iced coffee (espresso poured over ice)" },
            { l1: "un descafeinado", en: "a decaf" },
            { l1: "una tostada con aceite", en: "toast with olive oil (classic Spanish breakfast)" },
            { l1: "un zumo de naranja", en: "an orange juice" },
          ],
        },
        {
          type: "vocab",
          heading: "Ordering and paying",
          items: [
            { l1: "Ponme un café con leche.", en: "Give me a café con leche. (informal, common at the bar)" },
            { l1: "¿Qué le debo?", en: "What do I owe you?" },
            { l1: "¿Me cobra?", en: "Can I pay? / Will you charge me?" },
            { l1: "Cóbrame cuando puedas.", en: "Charge me whenever you can." },
            { l1: "¿Hay tapa con la bebida?", en: "Does the drink come with a tapa?" },
            { l1: "Pago yo.", en: "I'll pay. (I've got this)" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Coffee culture check",
          questions: [
            {
              q: "A café con leche is…",
              options: ["A double espresso", "Espresso with a splash of milk", "Half espresso half hot milk", "Coffee with cream"],
              correct: 2,
              fb: "Café con leche = half espresso, half hot milk. The most popular coffee in Spain.",
            },
            {
              q: "In most Spanish bars you pay…",
              options: ["Before ordering", "When the drink arrives", "When you leave", "Only with cash"],
              correct: 2,
              fb: "Al salir = when leaving. You order, drink, then pay on your way out.",
            },
          ],
        },
      ],
    },
    {
      slug: "bar-tapas",
      title: "Tapas and drinks",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "Bar drinks and tapas",
          items: [
            { l1: "una cerveza / una caña", en: "a beer / a small draught beer" },
            { l1: "un vino tinto / blanco / rosado", en: "a red / white / rosé wine" },
            { l1: "el vermut / el vermú", en: "vermouth (the aperitif of Madrid)" },
            { l1: "una tónica", en: "a tonic water" },
            { l1: "un refresco", en: "a soft drink" },
            { l1: "las tapas", en: "small snacks served with drinks" },
            { l1: "las patatas bravas", en: "fried potatoes with spicy sauce" },
            { l1: "la tortilla española", en: "potato omelette — the classic bar tapa" },
            { l1: "el jamón", en: "cured ham (the king of tapas)" },
            { l1: "las aceitunas", en: "olives" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Tapas and drinks",
          questions: [
            {
              q: "Una caña is…",
              options: ["A glass of wine", "A small draught beer", "A cocktail", "A sparkling water"],
              correct: 1,
              fb: "Una caña = a small draught beer. The standard bar order in Spain.",
            },
            {
              q: "What are patatas bravas?",
              options: ["Fried potatoes with spicy sauce", "Mashed potatoes", "Potato crisps", "Potato soup"],
              correct: 0,
              fb: "Patatas bravas = fried potato chunks with a spicy or aioli sauce — one of Spain's most iconic tapas.",
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "A café con leche is…", options: ["Espresso + cream", "Half espresso half milk", "Double espresso", "Cold coffee"], correct: 1 },
      { q: "A cortado is…", options: ["A small beer", "Espresso with a splash of milk", "A long coffee", "Coffee with ice"], correct: 1 },
      { q: "In Spanish bars you pay…", options: ["Before ordering", "When the drink arrives", "When you leave", "Only with card"], correct: 2 },
      { q: "'¿Qué le debo?' means…", options: ["What would you like?", "What do I owe you?", "Can I order?", "What's on tap?"], correct: 1 },
      { q: "Una caña is…", options: ["A glass of wine", "A cocktail", "A small draught beer", "A sparkling water"], correct: 2 },
      { q: "'Pago yo' means…", options: ["You pay", "I'll pay", "We pay together", "No need to pay"], correct: 1 },
      { q: "Patatas bravas are…", options: ["Potato soup", "Mashed potatoes", "Fried potatoes with spicy sauce", "Potato crisps"], correct: 2 },
      { q: "The aperitif tradition on Sunday mornings in Madrid involves…", options: ["Sangría", "Vermut/vermú", "Horchata", "Cava"], correct: 1 },
      { q: "'Ponme un café con leche' is…", options: ["Formal", "Common informal bar order", "Rude", "Old-fashioned"], correct: 1 },
      { q: "'¿Hay tapa con la bebida?' means…", options: ["Is the tapas free?", "Is the drink free?", "Does the drink come with a tapa?", "How much are the tapas?"], correct: 2 },
    ],
  },
};
