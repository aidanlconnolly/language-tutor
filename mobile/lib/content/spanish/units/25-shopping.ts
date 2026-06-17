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
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Euros, céntimos, and asking the price",
          body: [
            "Spain uses the <strong>euro (€)</strong>. Cents = <em>céntimos</em>. €4,50 is said <em>cuatro euros con cincuenta</em> — or just <em>cuatro cincuenta</em> in fast speech. Note Spain writes the decimal with a comma: <em>4,50 €</em>.",
            "Two ways to ask the price: <em>«¿Cuánto cuesta?»</em> (from <em>costar</em>) and <em>«¿Cuánto vale?»</em> (from <em>valer</em>) — both totally normal, <em>vale</em> is very common in Spain. For the total: <em>«¿Cuánto es (en total)?»</em>.",
            "Discounts: <em>el descuento</em> = discount. <em>la oferta</em> = special offer. <em>las rebajas</em> = the sales season — a real event in Spain, in January and in summer (July).",
            "<em>Caro</em> = expensive. <em>barato</em> = cheap. <em>está de oferta</em> = it's on offer.",
          ],
          keyPoint:
            "¿Cuánto cuesta? = ¿Cuánto vale? (both = how much is it). Las rebajas = the sales season. Caro/barato = expensive/cheap.",
        },
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
        {
          type: "tip",
          heading: "Paying in Spain: cash vs card",
          body: "Contactless (<em>sin contacto</em>) is everywhere in Spain — just tap your card or phone on the <em>datáfono</em> (card reader). Above €50 you may be asked for the PIN. Small bars, bakeries, and markets often prefer cash, so carry a few coins and small notes. If a shop has a minimum for card payments they'll say <em>«hay un mínimo de cinco euros con tarjeta»</em>.",
          example: { l1: "¿Puedo pagar con tarjeta?", en: "Can I pay by card?" },
        },
        {
          type: "fillBlank",
          heading: "Price and payment fill",
          items: [
            {
              template: "¿Cuánto ___ estos zapatos?",
              answer: "cuestan",
              en: "How much do these shoes cost?",
              options: ["cuesta", "cuestan", "valen", "es"],
            },
            {
              template: "Está de ___ , tiene un veinte por ciento de descuento.",
              answer: "oferta",
              en: "It's on offer, it has a 20% discount.",
              options: ["oferta", "rebaja", "precio", "cambio"],
            },
            {
              template: "¿Tiene algo más ___ ? Esto es muy caro.",
              answer: "barato",
              en: "Do you have something cheaper? This is very expensive.",
              options: ["caro", "barato", "grande", "pequeño"],
            },
            {
              template: "Pago en ___ , no llevo tarjeta.",
              answer: "efectivo",
              en: "I'll pay in cash, I don't have a card on me.",
              options: ["efectivo", "tarjeta", "cambio", "recibo"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "How much does it cost? Can I pay by card?",
          reference: "¿Cuánto cuesta? ¿Puedo pagar con tarjeta?",
          hint: "Use the inverted ¿ at the start of each question. 'Pay by card' = 'pagar con tarjeta'.",
        },
      ],
    },
    {
      slug: "shopping-clothes",
      title: "Clothes and sizes",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Sizes, colours, and trying things on",
          body: [
            "<em>«¿Qué talla?»</em> = What size? <em>la talla</em> is for clothes (S, M, L, XL or numbers 36–46); <em>el número</em> is for shoes (35–46 EU).",
            "<em>«¿Puedo probármelo / probármela?»</em> = Can I try it on? The pronoun agrees with the item: <em>-lo</em> for masculine (el jersey), <em>-la</em> for feminine (la camisa).",
            "<em>«Me queda grande / pequeño / bien»</em> = It fits big / small / well on me. The verb is <em>quedar</em> — like Italian's <em>quedare</em>, it describes how something sits on you.",
            "<em>«Me lo llevo»</em> / <em>«Me la llevo»</em> = I'll take it. The fitting room is <em>el probador</em>.",
          ],
          keyPoint:
            "¿Qué talla? (clothes) / ¿Qué número? (shoes). Me queda grande/pequeño = it's too big/small on me. Me lo llevo = I'll take it.",
        },
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
        {
          type: "vocab",
          heading: "Colours and fit",
          intro: "Colours agree with the noun: una camisa roja, un jersey rojo.",
          items: [
            { l1: "blanco / negro / gris", en: "white / black / grey" },
            { l1: "rojo / azul / verde", en: "red / blue / green" },
            { l1: "amarillo / naranja", en: "yellow / orange" },
            { l1: "el jersey / la chaqueta", en: "jumper/sweater / jacket" },
            { l1: "la falda / el abrigo", en: "skirt / coat" },
            { l1: "¿Tiene esto en otro color?", en: "Do you have this in another colour?" },
            { l1: "una talla más / menos", en: "a size up / a size down" },
            { l1: "me aprieta / me sobra", en: "it's too tight / it's too loose on me" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Put the words in the correct order.",
          items: [
            {
              tokens: ["¿", "Puedo", "probarme", "esta", "camisa", "?"],
              en: "Can I try this shirt on?",
            },
            {
              tokens: ["Me", "queda", "un", "poco", "grande", "."],
              en: "It's a bit big on me.",
            },
            {
              tokens: ["¿", "Tiene", "esto", "en", "otro", "color", "?"],
              en: "Do you have this in another colour?",
            },
            {
              tokens: ["Me", "la", "llevo", ",", "gracias", "."],
              en: "I'll take it, thank you.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "It's a bit small on me. Do you have a size up?",
          reference: "Me queda un poco pequeño. ¿Tiene una talla más?",
          hint: "'It fits small on me' = 'me queda pequeño'. 'A size up' = 'una talla más'.",
        },
      ],
    },
    {
      slug: "shopping-full-scenario",
      title: "A complete shopping trip",
      estMinutes: 9,
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
        {
          type: "fillBlank",
          heading: "At the till",
          intro: "Complete the checkout phrases.",
          items: [
            {
              template: "Me ___ llevo, ¿puedo pagar con tarjeta?",
              answer: "lo",
              en: "I'll take it, can I pay by card? (masculine item)",
              options: ["lo", "la", "le", "me"],
            },
            {
              template: "¿Me puede dar un ___ , por favor?",
              answer: "recibo",
              en: "Can you give me a receipt, please?",
              options: ["recibo", "cambio", "descuento", "probador"],
            },
            {
              template: "El ___ está al fondo, a la derecha.",
              answer: "probador",
              en: "The fitting room is at the back, on the right.",
              options: ["probador", "recibo", "número", "abrigo"],
            },
            {
              template: "Lo siento, está ___ en azul.",
              answer: "agotado",
              en: "I'm sorry, it's sold out in blue.",
              options: ["agotado", "barato", "defectuoso", "abierto"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I'll take it. Can you give me a receipt, please?",
          reference: "Me lo llevo. ¿Me puede dar un recibo, por favor?",
          hint: "'I'll take it' = 'me lo llevo' (masculine item). Start the question with ¿.",
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
