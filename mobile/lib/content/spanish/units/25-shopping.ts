import type { Unit } from "../../types";

export const UNIT_SHOPPING: Unit = {
  slug: "shopping",
  stage: 6,
  order: 25,
  icon: "🛍️",
  title: "Money & shopping",
  tagline: "¿Cuánto cuesta? descuento, ¿puedo pagar con tarjeta?",
  lessons: [
    {
      slug: "shopping-prices",
      title: "Prices and transactions",
      estMinutes: 8,
      pages: [
        {
          type: "vocab",
          heading: "Shopping vocabulary",
          items: [
            { l1: "¿Cuánto cuesta / vale?", en: "How much does it cost?" },
            { l1: "¿Cuánto es en total?", en: "How much is it in total?" },
            { l1: "El precio", en: "The price" },
            { l1: "El descuento / la oferta", en: "The discount / the special offer" },
            { l1: "Las rebajas", en: "The sales" },
            { l1: "¿Tiene algo más barato?", en: "Do you have something cheaper?" },
            { l1: "Me lo llevo.", en: "I'll take it." },
            { l1: "¿Puedo probármelo?", en: "Can I try it on?" },
          ],
        },
        {
          type: "vocab",
          heading: "Payment and receipts",
          items: [
            { l1: "Pago en efectivo / con tarjeta.", en: "I'm paying in cash / by card." },
            { l1: "¿Me puede dar un recibo?", en: "Can you give me a receipt?" },
            { l1: "El cambio", en: "The change (money)" },
            { l1: "¿Tienen devoluciones?", en: "Do you accept returns?" },
            { l1: "Está defectuoso.", en: "It's defective." },
            { l1: "Me gustaría cambiarlo.", en: "I'd like to exchange it." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Shopping check",
          questions: [
            {
              q: "How do you say 'I'll take it'?",
              options: ["Me gusta", "Lo quiero", "Me lo llevo", "Cómpralo"],
              correct: 2,
              fb: "Me lo llevo = I'll take it (lit. I take it with me). The standard phrase when buying.",
            },
            {
              q: "'Las rebajas' are…",
              options: ["Discounts on individual items", "The January/summer sales", "Free gifts", "Tax refunds"],
              correct: 1,
              fb: "Las rebajas = sales period (typically January and July in Spain).",
            },
          ],
        },
      ],
    },
    {
      slug: "shopping-clothes",
      title: "Clothes and sizes",
      estMinutes: 7,
      pages: [
        {
          type: "vocab",
          heading: "Clothing vocabulary",
          items: [
            { l1: "la camisa / la camiseta", en: "shirt / t-shirt" },
            { l1: "los pantalones", en: "trousers (always plural in Spanish)" },
            { l1: "el vestido", en: "dress" },
            { l1: "los zapatos / las zapatillas", en: "shoes / trainers/sneakers" },
            { l1: "la talla", en: "the size (clothing)" },
            { l1: "el número", en: "the size (shoes)" },
            { l1: "¿Tiene la talla M / 38?", en: "Do you have size M / 38?" },
            { l1: "Me queda bien / mal / grande / pequeño.", en: "It fits well / badly / large / small on me." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Sizes check",
          questions: [
            {
              q: "'Me queda grande' means…",
              options: ["It looks great on me", "It's too big on me", "I love it", "It's perfect"],
              correct: 1,
              fb: "Quedar = to fit/suit. Me queda grande = it's too big on me.",
            },
            {
              q: "How do you ask if they have a size?",
              options: ["¿Tiene la talla M?", "¿Hay talla M?", "¿Cuánto cuesta la talla M?", "Both A and B"],
              correct: 3,
              fb: "Both ¿Tiene la talla M? and ¿Hay talla M? are correct and common.",
            },
          ],
        },
      ],
    },
    {
      slug: "shopping-full-scenario",
      title: "A complete shopping trip",
      estMinutes: 7,
      pages: [
        {
          type: "dialogue",
          heading: "Buying clothes",
          lines: [
            { speaker: "You", l1: "Buenas. ¿Tienen esta camiseta en azul?", en: "Hello. Do you have this t-shirt in blue?" },
            { speaker: "Staff", l1: "Sí, claro. ¿Qué talla usa?", en: "Yes, of course. What size do you take?" },
            { speaker: "You", l1: "La M normalmente, pero depende.", en: "M usually, but it depends." },
            { speaker: "Staff", l1: "Pruébese esta. El probador está al fondo a la derecha.", en: "Try this one. The fitting room is at the back on the right." },
            { speaker: "You", l1: "Me queda un poco grande. ¿Tiene la S?", en: "It's a bit big on me. Do you have the S?" },
            { speaker: "Staff", l1: "Lo siento, en azul solo tenemos la M y la L.", en: "I'm sorry, in blue we only have M and L." },
          ],
        },
        {
          type: "vocab",
          heading: "Online and sales vocabulary",
          items: [
            { l1: "el probador", en: "the fitting room" },
            { l1: "¿Tienen en otro color?", en: "Do you have it in another colour?" },
            { l1: "lo siento, está agotado", en: "I'm sorry, it's sold out" },
            { l1: "¿Puedo pedirlo por internet?", en: "Can I order it online?" },
            { l1: "la talla única", en: "one size fits all" },
            { l1: "queda bien / mal", en: "it suits you / doesn't suit you" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Shopping scenario",
          questions: [
            {
              q: "'Está agotado' means…",
              options: ["It's on sale", "It's sold out", "It's exhausting", "It's defective"],
              correct: 1,
              fb: "Agotado = sold out (lit. exhausted). Stock is exhausted.",
            },
            {
              q: "'Te queda bien' means…",
              options: ["You keep it well", "It suits/fits you well", "It's the right size for you", "Both B and C"],
              correct: 3,
              fb: "Quedar bien = to suit/fit well. Te queda bien = it suits you / it fits you well.",
            },
          ],
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "'Me lo llevo' means…", options: ["I like it", "I'll take it", "How much is it?", "I'm returning it"], correct: 1 },
      { q: "'Las rebajas' are…", options: ["Individual discounts", "The sales period", "Tax refunds", "Special offers"], correct: 1 },
      { q: "'¿Tiene algo más barato?' means…", options: ["Do you have anything in my size?", "Do you have something cheaper?", "Is there a discount?", "What's the cheapest?"], correct: 1 },
      { q: "How do you ask to try something on?", options: ["¿Puedo probármelo?", "¿Puedo llevármelo?", "¿Me queda bien?", "¿Es mi talla?"], correct: 0 },
      { q: "'Está defectuoso' means…", options: ["It's too expensive", "It's defective", "It's the wrong size", "It's out of stock"], correct: 1 },
      { q: "'El cambio' in a shopping context means…", options: ["An exchange of goods", "The change (money)", "A price change", "A receipt"], correct: 1 },
      { q: "'Me queda pequeño' means…", options: ["It fits perfectly", "It's too small on me", "It's a small size", "I want a smaller one"], correct: 1 },
      { q: "Shoe size in Spanish is 'el ___'", options: ["talla", "número", "tamaño", "medida"], correct: 1 },
      { q: "How do you say 'I'd like to exchange it'?", options: ["Quiero devolverlo", "Me gustaría cambiarlo", "Lo quiero cambiar (also correct)", "Both B and C"], correct: 3 },
      { q: "How do you ask for a receipt?", options: ["¿Me puede dar un recibo?", "¿Tiene la cuenta?", "¿Hay factura?", "Quiero el recibo"], correct: 0 },
    ],
  },
};
