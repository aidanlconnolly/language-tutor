import type { Unit } from "../../types";

export const UNIT_SPANISH_FOOD: Unit = {
  slug: "spanish-food",
  stage: 4,
  order: 19,
  icon: "🥘",
  title: "Spanish & regional food",
  tagline: "Jamón, paella, pintxos, tortilla, propinas.",
  badge: "culture",
  lessons: [
    {
      slug: "spanish-food-icons",
      title: "Iconic Spanish dishes",
      estMinutes: 12,
      pages: [
        {
          type: "intro",
          heading: "Spanish cuisine — regional and proud",
          body: [
            "Spain has no single national cuisine — it's a federation of distinct regional food cultures. Catalonia, the Basque Country, Andalusia, and Galicia each have their own culinary traditions. The one thread: quality ingredients, olive oil, and simplicity.",
            "A few dishes are found everywhere: the tortilla española, jamón ibérico, and gazpacho. Paella is regional (Valencia) but appears on menus nationwide.",
          ],
          tip: {
            label: "Jamón ibérico vs serrano",
            body: "Jamón ibérico comes from Iberian black-footed pigs, often acorn-fed (bellota) — Spain's finest cured ham. Jamón serrano is from white pigs — excellent but more everyday. Jamón is eaten at room temperature, carved thinly.",
          },
        },
        {
          type: "vocab",
          heading: "Classic Spanish dishes",
          items: [
            { l1: "la tortilla española", en: "Spanish omelette — potatoes, egg, sometimes onion" },
            { l1: "el jamón ibérico / serrano", en: "Iberian / mountain-cured ham" },
            { l1: "la paella valenciana", en: "saffron rice with chicken, rabbit and vegetables (Valencia)" },
            { l1: "el gazpacho", en: "cold tomato soup (Andalusia)" },
            { l1: "el salmorejo", en: "thicker cold tomato soup (Córdoba)" },
            { l1: "los pintxos", en: "Basque Country bar snacks (like tapas on bread)" },
            { l1: "el pulpo a la gallega", en: "Galician-style octopus with paprika and olive oil" },
            { l1: "el chuletón", en: "thick T-bone or rib-eye steak — a Madrid speciality" },
          ],
        },
        {
          type: "vocab",
          heading: "Talking about food",
          items: [
            { l1: "Está delicioso/a.", en: "It's delicious." },
            { l1: "Está riquísimo/a.", en: "It's absolutely delicious. (strongest praise)" },
            { l1: "Tiene muy buena pinta.", en: "It looks really good." },
            { l1: "¿De dónde es este plato?", en: "Where is this dish from?" },
            { l1: "¿Qué lleva?", en: "What's in it?" },
            { l1: "¿Está picante?", en: "Is it spicy?" },
          ],
        },
        {
          type: "tip",
          heading: "Paella — myths and rules",
          body: "Real <em>paella valenciana</em> has chicken, rabbit, green beans and <em>garrofó</em> beans — <strong>not</strong> chorizo, and traditionally not seafood. The seafood version is <em>paella de marisco</em>; the mixed one is <em>paella mixta</em>. The prized crispy layer at the bottom is the <em>socarrat</em>. And Valencians eat it at lunch, almost never for dinner.",
          example: { l1: "La paella de verdad no lleva chorizo.", en: "Real paella doesn't have chorizo in it." },
        },
        {
          type: "multipleChoice",
          heading: "Spanish food check",
          questions: [
            {
              q: "Gazpacho is…",
              options: ["A hot stew", "A cold tomato soup from Andalusia", "A rice dish", "A type of ham"],
              correct: 1,
              fb: "Gazpacho = cold blended tomato soup, originally from Andalusia. Served cold, even in winter by some.",
            },
            {
              q: "Pintxos are from…",
              options: ["Madrid", "Valencia", "The Basque Country", "Catalonia"],
              correct: 2,
              fb: "Pintxos (pinchos) are the Basque Country's version of tapas — small snacks on bread, served at bars.",
            },
            {
              q: "'Está riquísimo' means…",
              options: ["It's expensive", "It's quite good", "It's absolutely delicious", "It's very rich"],
              correct: 2,
              fb: "Riquísimo = superlative of rico (rich/delicious). The highest food compliment.",
            },
            {
              q: "The prized crispy crust at the bottom of a paella is called…",
              options: ["el sofrito", "el socarrat", "la corteza", "el garrofó"],
              correct: 1,
              fb: "El socarrat = the toasted, slightly crispy rice layer at the base of the pan. Valencians fight over it.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the dish",
          intro: "Pick the word that completes each Spanish food fact.",
          items: [
            {
              template: "La tortilla española lleva patatas, huevo y a veces ___.",
              answer: "cebolla",
              en: "Spanish omelette has potatoes, egg and sometimes onion.",
              options: ["cebolla", "arroz", "jamón", "queso"],
            },
            {
              template: "El pulpo a la ___ se sirve con pimentón y aceite de oliva.",
              answer: "gallega",
              en: "Galician-style octopus is served with paprika and olive oil.",
              options: ["valenciana", "gallega", "andaluza", "vasca"],
            },
            {
              template: "El jamón ibérico de ___ viene de cerdos alimentados con bellotas.",
              answer: "bellota",
              en: "Acorn-fed Iberian ham comes from pigs fed on acorns.",
              options: ["serrano", "bellota", "cebo", "campo"],
            },
            {
              template: "El gazpacho es una sopa ___ de tomate.",
              answer: "fría",
              en: "Gazpacho is a cold tomato soup.",
              options: ["caliente", "fría", "espesa", "dulce"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Real paella doesn't have chorizo; it has chicken and rabbit.",
          reference: "La paella de verdad no lleva chorizo; lleva pollo y conejo.",
          hint: "Use 'llevar' for what a dish contains. 'De verdad' = real / proper.",
        },
      ],
    },
    {
      slug: "spanish-food-tipping",
      title: "Tipping and food culture",
      estMinutes: 11,
      pages: [
        {
          type: "intro",
          heading: "Tipping in Spain",
          body: [
            "Tipping is not obligatory in Spain — service charge is generally included. It's appreciated but not expected. Rounding up or leaving small coins is standard. In upscale restaurants, 5–10% is generous.",
            "The siesta (roughly 2–5pm) means many shops close at lunchtime. In tourist areas this is changing, but in smaller towns it's still respected.",
          ],
        },
        {
          type: "vocab",
          heading: "Food culture vocabulary",
          items: [
            { l1: "la propina", en: "the tip" },
            { l1: "el servicio (está incluido)", en: "service charge (is included)" },
            { l1: "la siesta", en: "the midday rest period" },
            { l1: "el aperitivo", en: "the pre-lunch/dinner drink and snack" },
            { l1: "la sobremesa", en: "time spent talking after a meal (untranslatable)" },
            { l1: "¡Buen provecho!", en: "Enjoy your meal! / Bon appétit!" },
          ],
        },
        {
          type: "tip",
          heading: "The Spanish clock — eat late",
          body: "Spain runs on its own schedule. <em>Lunch</em> (<em>la comida</em>, the main meal) is around 2–3 pm, and <em>dinner</em> (<em>la cena</em>) rarely starts before 9 pm — 10 pm in summer. Many kitchens won't even open before 8:30 pm. If you turn up at 7 pm expecting dinner, you'll be eating alone. The gap is bridged by <em>la merienda</em> (an afternoon snack) and tapas with a drink.",
          example: { l1: "Aquí se cena tarde, a partir de las nueve.", en: "Here people eat dinner late, from nine o'clock onward." },
        },
        {
          type: "dialogue",
          heading: "Ordering tapas at the bar",
          setup: "You stand at a busy bar in Andalusia and order a round of tapas.",
          lines: [
            { speaker: "Camarero", l1: "Buenas. ¿Qué os pongo?", en: "Hi there. What can I get you?" },
            { speaker: "Tú", l1: "Una caña y, para picar, ¿qué tapas tenéis?", en: "A small draft beer, and to nibble, what tapas do you have?" },
            { speaker: "Camarero", l1: "Hoy hay jamón, tortilla, croquetas y boquerones en vinagre.", en: "Today we have ham, omelette, croquettes and anchovies in vinegar." },
            { speaker: "Tú", l1: "Ponme una de croquetas y otra de jamón, por favor.", en: "Give me a portion of croquettes and one of ham, please." },
            { speaker: "Camarero", l1: "Marchando. ¿Algo más?", en: "Coming right up. Anything else?" },
            { speaker: "Tú", l1: "Nada más de momento, gracias.", en: "Nothing else for now, thanks." },
          ],
        },
        {
          type: "vocab",
          heading: "At the bar",
          intro: "Words you'll hear and use when ordering drinks and tapas.",
          items: [
            { l1: "una caña", en: "a small glass of draft beer" },
            { l1: "una ración / una media ración", en: "a full / half plate to share" },
            { l1: "una tapa / un pincho", en: "a small bar snack (free or cheap)" },
            { l1: "para picar", en: "to nibble / for snacking" },
            { l1: "¿Qué me recomienda?", en: "What do you recommend?" },
            { l1: "¡Marchando!", en: "Coming right up! (waiter's reply)" },
            { l1: "la barra / la terraza", en: "the bar counter / the outdoor terrace" },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the order",
          intro: "Put the words in the right order to make a natural Spanish sentence.",
          items: [
            { tokens: ["Una", "caña", "y", "una", "ración", "de", "jamón", ",", "por", "favor", "."], en: "A small beer and a plate of ham, please." },
            { tokens: ["¿", "Qué", "tapas", "tenéis", "hoy", "?"], en: "What tapas do you have today?" },
            { tokens: ["Aquí", "se", "cena", "muy", "tarde", "."], en: "Here people eat dinner very late." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Culture check",
          questions: [
            {
              q: "La sobremesa is…",
              options: ["The appetiser course", "Lingering and talking after a meal", "The dessert menu", "A type of tapas"],
              correct: 1,
              fb: "La sobremesa = the post-meal conversation. A valued social ritual — rushing off after eating is considered rude.",
            },
            {
              q: "Tipping in Spain is…",
              options: ["Mandatory at 20%", "Not expected but appreciated", "Illegal", "10% minimum"],
              correct: 1,
              fb: "Tipping is optional and appreciated but not obligatory in Spain.",
            },
            {
              q: "In Spain, dinner (la cena) usually starts around…",
              options: ["6 pm", "7 pm", "9–10 pm", "midnight"],
              correct: 2,
              fb: "Dinner rarely starts before 9 pm, and 10 pm is common in summer. Lunch is the big meal, around 2–3 pm.",
            },
            {
              q: "'Una caña' is…",
              options: ["A glass of wine", "A small draft beer", "A shot of liquor", "A coffee"],
              correct: 1,
              fb: "Una caña = a small glass of draft beer, the default bar order. A larger one is 'una jarra'.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Here people eat dinner late, and tipping isn't expected.",
          reference: "Aquí se cena tarde, y la propina no se espera.",
          hint: "Use the impersonal 'se' (se cena = one dines). 'No se espera' = isn't expected.",
        },
      ],
    },
    {
      slug: "spanish-food-conversation",
      title: "Talking about food and cuisine",
      estMinutes: 11,
      pages: [
        {
          type: "dialogue",
          heading: "Discussing Spanish food",
          lines: [
            { speaker: "Maria", l1: "¿Has probado la tortilla española?", en: "Have you tried Spanish omelette?" },
            { speaker: "Tom", l1: "Sí, me encanta. La probé ayer en un bar.", en: "Yes, I love it. I tried it yesterday at a bar." },
            { speaker: "Maria", l1: "¿La prefieres con cebolla o sin cebolla?", en: "Do you prefer it with onion or without onion?" },
            { speaker: "Tom", l1: "Con cebolla, es más jugosa.", en: "With onion, it's juicier." },
            { speaker: "Maria", l1: "Exacto. Y es mejor cuando está poco hecha.", en: "Exactly. And it's better when it's slightly undercooked." },
          ],
        },
        {
          type: "vocab",
          heading: "Evaluating food",
          items: [
            { l1: "jugoso/a", en: "juicy / moist" },
            { l1: "seco/a", en: "dry" },
            { l1: "sabroso/a", en: "tasty / flavoursome" },
            { l1: "soso/a", en: "bland / tasteless" },
            { l1: "demasiado salado", en: "too salty" },
            { l1: "en su punto", en: "perfectly cooked" },
            { l1: "me ha dejado con hambre", en: "it left me hungry (too small)" },
          ],
        },
        {
          type: "conjugation",
          heading: "probar — to try / to taste",
          verb: "probar",
          meaning: "to try, to taste (food)",
          intro: "A stem-changing verb (o → ue) you'll use constantly with food. The stem changes in all forms except nosotros/vosotros.",
          tenses: [
            {
              name: "Presente",
              forms: [
                { person: "yo", form: "pruebo", en: "I try" },
                { person: "tú", form: "pruebas", en: "you try" },
                { person: "él/ella", form: "prueba", en: "he/she tries" },
                { person: "nosotros", form: "probamos", en: "we try" },
                { person: "vosotros", form: "probáis", en: "you all try" },
                { person: "ellos/ellas", form: "prueban", en: "they try" },
              ],
            },
            {
              name: "Pretérito perfecto (have you tried…?)",
              forms: [
                { person: "yo", form: "he probado", en: "I have tried" },
                { person: "tú", form: "has probado", en: "you have tried" },
                { person: "él/ella", form: "ha probado", en: "he/she has tried" },
                { person: "nosotros", form: "hemos probado", en: "we have tried" },
              ],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Food evaluation",
          questions: [
            {
              q: "'Está soso' means the food is…",
              options: ["Too spicy", "Too salty", "Bland / tasteless", "Too sweet"],
              correct: 2,
              fb: "Soso = bland / tasteless. The opposite of sabroso (tasty).",
            },
            {
              q: "'Está en su punto' means the food is…",
              options: ["Undercooked", "Overcooked", "Perfectly cooked", "Too hot"],
              correct: 2,
              fb: "En su punto = at its point / perfectly cooked. A great compliment.",
            },
            {
              q: "Choose the correct form: '¿___ tú la paella alguna vez?' (Have you ever tried paella?)",
              options: ["Has probado", "Probas", "Pruebes", "Probaste a"],
              correct: 0,
              fb: "Pretérito perfecto: '¿Has probado…?' = Have you tried…? It's the natural way to ask about food experiences.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Complete the conversation",
          intro: "Fill in the missing word in each natural food exchange.",
          items: [
            {
              template: "—¿Has ___ el pulpo a la gallega? —Todavía no.",
              answer: "probado",
              en: "—Have you tried Galician octopus? —Not yet.",
              options: ["probado", "comido", "tomado", "gustado"],
            },
            {
              template: "Esta tortilla está ___, le falta sal.",
              answer: "sosa",
              en: "This omelette is bland, it needs salt.",
              options: ["rica", "sosa", "jugosa", "salada"],
            },
            {
              template: "El cocido madrileño es un ___ contundente de garbanzos y carne.",
              answer: "guiso",
              en: "Madrid cocido is a hearty stew of chickpeas and meat.",
              options: ["postre", "guiso", "aperitivo", "pincho"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "l1-to-en",
          prompt: "Me encanta el jamón ibérico, pero el gazpacho me parece soso.",
          reference: "I love Iberian ham, but the gazpacho seems bland to me.",
          hint: "'Me parece' = seems to me / I find it. 'Soso' = bland.",
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "La tortilla española is made from…", options: ["Corn flour", "Potato and egg", "Wheat flour and egg", "Rice"], correct: 1 },
      { q: "Gazpacho comes from…", options: ["Madrid", "Valencia", "Andalusia", "Catalonia"], correct: 2 },
      { q: "Pintxos are associated with…", options: ["Valencia", "The Basque Country", "Madrid", "Galicia"], correct: 1 },
      { q: "Paella originates from…", options: ["Madrid", "Seville", "Valencia", "Barcelona"], correct: 2 },
      { q: "'Está riquísimo' means…", options: ["It's very expensive", "It's absolutely delicious", "It's too rich", "It's quite good"], correct: 1 },
      { q: "Jamón ibérico comes from…", options: ["White domestic pigs", "Iberian black-footed pigs", "Wild boar", "Mountain deer"], correct: 1 },
      { q: "La sobremesa is…", options: ["The dessert", "Post-meal conversation", "Afternoon nap", "The bill"], correct: 1 },
      { q: "Tipping in Spain is…", options: ["Mandatory", "Not expected but appreciated", "Rude", "Always 10%"], correct: 1 },
      { q: "'Tiene muy buena pinta' means…", options: ["It tastes good", "It smells good", "It looks really good", "It's very popular"], correct: 2 },
      { q: "'¡Buen provecho!' means…", options: ["Enjoy your drinks!", "Bon appétit / Enjoy your meal!", "Good choice!", "Well done!"], correct: 1 },
    ],
  },
};
