import type { Unit } from "../../types";

export const UNIT_FORMAL_USTED: Unit = {
  slug: "formal-usted",
  stage: 6,
  order: 27,
  icon: "🤝",
  title: "Formal (usted) deep dive",
  tagline: "Disculpe, ¿podría…? — polite imperative and usted forms.",
  lessons: [
    {
      slug: "formal-usted-verbs",
      title: "Usted and ustedes forms",
      estMinutes: 11,
      pages: [
        {
          type: "intro",
          heading: "When to use usted",
          body: [
            "Usted (abbreviated Ud. or Vd.) is the formal 'you' in Spanish. It takes third-person singular verb forms — the same as él/ella. This often confuses English speakers who expect a distinct form.",
            "In Spain, usted is used with strangers, elders, and professionals. In Latin America it's somewhat more common even in casual settings. In Canary Islands and some areas, ustedes replaces vosotros even informally.",
          ],
          keyPoint: "Usted = 3rd person singular verbs (same as él/ella). Ustedes = 3rd person plural (same as ellos).",
        },
        {
          type: "tip",
          heading: "Spain vs Latin America: how fast you switch",
          body: "The biggest practical difference is <em>speed</em>, not grammar. In Spain people drop into <em>tú</em> very quickly — even a shop clerk or a younger waiter may use tú right away, and clinging to usted can feel cold or distant. In much of Latin America (especially Colombia, Mexico, Central America) usted stays the default far longer, sometimes even with family or between spouses. <em>Vosotros</em> (informal plural) is used only in Spain; Latin America uses <em>ustedes</em> for every plural 'you', formal or not.",
          example: { l1: "España: ¿Qué quieres tomar? / Latinoamérica: ¿Qué desea tomar usted?", en: "What would you like to drink? (informal in Spain vs formal in Latin America)" },
        },
        {
          type: "conjugation",
          heading: "Tú vs usted vs ustedes — three key verbs",
          verb: "estar / poder / querer",
          meaning: "to be / to be able to / to want",
          intro: "Usted borrows the él/ella form; ustedes borrows the ellos/ellas form. Compare them side by side.",
          tenses: [
            {
              name: "estar (to be)",
              forms: [
                { person: "tú", form: "estás", en: "you are (informal)" },
                { person: "usted", form: "está", en: "you are (formal sg.)" },
                { person: "vosotros (Spain)", form: "estáis", en: "you all are (informal, Spain)" },
                { person: "ustedes", form: "están", en: "you all are (formal / all LatAm)" },
              ],
            },
            {
              name: "poder (to be able)",
              forms: [
                { person: "tú", form: "puedes", en: "you can (informal)" },
                { person: "usted", form: "puede", en: "you can (formal sg.)" },
                { person: "vosotros (Spain)", form: "podéis", en: "you all can (informal, Spain)" },
                { person: "ustedes", form: "pueden", en: "you all can (formal / all LatAm)" },
              ],
            },
            {
              name: "querer (to want)",
              forms: [
                { person: "tú", form: "quieres", en: "you want (informal)" },
                { person: "usted", form: "quiere", en: "you want (formal sg.)" },
                { person: "vosotros (Spain)", form: "queréis", en: "you all want (informal, Spain)" },
                { person: "ustedes", form: "quieren", en: "you all want (formal / all LatAm)" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Formal phrases in action",
          items: [
            { l1: "¿Cómo está usted?", en: "How are you? (formal)" },
            { l1: "¿Puede usted ayudarme?", en: "Can you help me? (formal)" },
            { l1: "Disculpe, señor/señora.", en: "Excuse me, sir/madam." },
            { l1: "¿Podría repetir eso?", en: "Could you repeat that?" },
            { l1: "¿Sería tan amable de…?", en: "Would you be so kind as to…?" },
            { l1: "Por favor, ¿me trae…?", en: "Please, could you bring me…? (waiter)" },
            { l1: "Muchas gracias, muy amable.", en: "Thank you very much, very kind of you." },
            { l1: "Quedo a su disposición.", en: "I remain at your disposal. (formal sign-off)" },
          ],
        },
        {
          type: "tip",
          heading: "Formal imperative",
          body: "The polite command for usted is formed from the present subjunctive. For -ar verbs: drop -ar, add -e. For -er/-ir: drop ending, add -a. hablar → hable (speak!); comer → coma (eat!); venir → venga (come!).",
          example: { l1: "Siéntese, por favor.", en: "Please, sit down. (formal command)" },
        },
        {
          type: "multipleChoice",
          heading: "Formal Spanish check",
          questions: [
            {
              q: "Usted takes the same verb form as…",
              options: ["Tú", "Yo", "Él/ella", "Nosotros"],
              correct: 2,
              fb: "Usted uses 3rd person singular: usted habla, usted come, usted vive.",
            },
            {
              q: "The formal command of 'hablar' (for usted) is…",
              options: ["habla", "hablas", "hable", "hablad"],
              correct: 2,
              fb: "Formal imperative of -ar: add -e to stem. hablar → hable. Hable más despacio, por favor.",
            },
            {
              q: "In Latin America, the plural 'you all' (any register) is…",
              options: ["vosotros", "ustedes", "tú", "usted"],
              correct: 1,
              fb: "Latin America uses ustedes for every plural 'you'. Vosotros only exists in Spain.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Good morning, sir. How are you? (formal)",
          reference: "Buenos días, señor. ¿Cómo está usted?",
          hint: "Usted takes the él/ella form: está, not estás.",
        },
      ],
    },
    {
      slug: "formal-usted-requests",
      title: "Polite requests with conditional",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Softening with the conditional",
          body: [
            "To sound polite in Spanish, swap the blunt present for the conditional. ¿Puede…? (can you?) is fine, but ¿Podría…? (could you?) is gentler and more deferential.",
            "The conditional endings are the same for every verb: -ía, -ías, -ía, -íamos, -íais, -ían, added to the infinitive. For usted you'll mostly use the -ía form: podría, sería, tendría, querría, le importaría.",
            "Pair the conditional with the indirect object pronoun le (to you, formal): ¿Le importaría…? = Would it matter to you…? / Would you mind…?",
          ],
          keyPoint: "¿Podría…? (could you?) > ¿Puede…? (can you?). Conditional + le = maximum politeness.",
        },
        {
          type: "vocab",
          heading: "Conditional for polite requests",
          items: [
            { l1: "¿Podría hablar más despacio?", en: "Could you speak more slowly?" },
            { l1: "¿Me podría traer la carta?", en: "Could you bring me the menu?" },
            { l1: "¿Sería posible cambiar de habitación?", en: "Would it be possible to change rooms?" },
            { l1: "¿Tendría un momento?", en: "Would you have a moment?" },
            { l1: "¿Le molestaría si…?", en: "Would you mind if…?" },
            { l1: "Le agradecería que…", en: "I'd be grateful if you…" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Polite requests",
          questions: [
            {
              q: "The most polite way to ask for help is…",
              options: ["¿Puede ayudarme?", "¿Podría ayudarme?", "Ayúdame", "Necesito ayuda"],
              correct: 1,
              fb: "¿Podría? (conditional of poder) is the most polite. ¿Puede? is polite; Ayúdame is a direct command.",
            },
            {
              q: "'¿Le molestaría si…?' means…",
              options: ["Do you like it if…?", "Would you mind if…?", "Could you…?", "Would it be possible if…?"],
              correct: 1,
              fb: "Molestar = to bother. ¿Le molestaría? = would it bother you? = would you mind?",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the polite request",
          intro: "Fill in the conditional form for usted.",
          items: [
            {
              template: "¿___ usted hablar más despacio, por favor? (poder)",
              answer: "Podría",
              en: "Could you speak more slowly, please?",
              options: ["Puede", "Podría", "Podía", "Pudo"],
            },
            {
              template: "¿Le ___ si abro la ventana? (importar)",
              answer: "importaría",
              en: "Would you mind if I open the window?",
              options: ["importa", "importaría", "importaba", "importará"],
            },
            {
              template: "¿___ tan amable de cerrar la puerta? (ser)",
              answer: "Sería",
              en: "Would you be so kind as to close the door?",
              options: ["Es", "Sería", "Será", "Era"],
            },
            {
              template: "Le ___ que me enviara el documento hoy. (agradecer)",
              answer: "agradecería",
              en: "I'd be grateful if you sent me the document today.",
              options: ["agradezco", "agradecería", "agradecía", "agradeceré"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, could you bring me the menu, please?",
          reference: "Disculpe, ¿me podría traer la carta, por favor?",
          hint: "Disculpe (formal). ¿Me podría + infinitive…? is the polite request frame.",
        },
      ],
    },
    {
      slug: "formal-professional",
      title: "Formal language in professional contexts",
      estMinutes: 9,
      pages: [
        {
          type: "vocab",
          heading: "Business and formal Spanish",
          items: [
            { l1: "Estimado/a señor/señora", en: "Dear Mr./Ms. (letter/email opening)" },
            { l1: "Me dirijo a usted para…", en: "I am writing to you to…" },
            { l1: "Le agradezco de antemano su atención.", en: "I thank you in advance for your attention." },
            { l1: "En espera de su respuesta…", en: "Awaiting your reply…" },
            { l1: "Atentamente / Un cordial saludo", en: "Yours sincerely / Kind regards" },
            { l1: "¿Podría concertar una cita?", en: "Could I arrange an appointment?" },
          ],
        },
        {
          type: "dialogue",
          heading: "Making a formal appointment",
          lines: [
            { speaker: "You", l1: "Buenos días. Quisiera hablar con el señor Gómez.", en: "Good morning. I'd like to speak with Mr Gómez." },
            { speaker: "Receptionist", l1: "¿De parte de quién?", en: "Who shall I say is calling?" },
            { speaker: "You", l1: "De Tom Williams, de la empresa Johnson & Co.", en: "Tom Williams, from Johnson & Co." },
            { speaker: "Receptionist", l1: "Un momento, por favor. Le paso.", en: "One moment, please. I'll put you through." },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Formal Spanish check",
          questions: [
            {
              q: "'¿De parte de quién?' on the phone means…",
              options: ["Who do you want to speak to?", "Who shall I say is calling?", "What is it about?", "Can you hold?"],
              correct: 1,
              fb: "¿De parte de quién? = on behalf of whom? Standard phone phrase when connecting a call.",
            },
            {
              q: "A formal email in Spanish closes with…",
              options: ["Hasta luego", "Atentamente / Un cordial saludo", "Con amor", "Besos"],
              correct: 1,
              fb: "Atentamente = yours sincerely / faithfully. Un cordial saludo = kind regards. Both are standard formal closings.",
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the formal sentence",
          intro: "Put the words in order.",
          items: [
            {
              tokens: ["Me", "dirijo", "a", "usted", "para", "solicitar", "información"],
              en: "I am writing to you to request information.",
            },
            {
              tokens: ["¿Podría", "concertar", "una", "cita", "para", "el", "lunes?"],
              en: "Could I arrange an appointment for Monday?",
            },
            {
              tokens: ["Le", "agradezco", "de", "antemano", "su", "atención"],
              en: "I thank you in advance for your attention.",
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Dear Mrs. Gómez, I am writing to you to arrange an appointment.",
          reference: "Estimada señora Gómez, me dirijo a usted para concertar una cita.",
          hint: "Estimada (f.) for the opening; me dirijo a usted = I am writing to you (formal).",
        },
        {
          type: "tip",
          heading: "Usted in writing: capital or not?",
          body: "Unlike Italian (which capitalizes <em>Lei</em>), Spanish does <em>not</em> capitalize <em>usted</em> in normal text. You will, however, see the abbreviations <em>Ud.</em>, <em>Vd.</em> (singular) and <em>Uds.</em>, <em>Vds.</em> (plural) in formal letters and signage. In an email, capitalize <em>Su / Sus</em> (your, formal) only as a courtesy in very formal correspondence — it is optional and increasingly rare.",
          example: { l1: "Quedo a su disposición para cualquier consulta.", en: "I remain at your disposal for any query." },
        },
      ],
    }
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      { q: "Usted uses the same verb form as…", options: ["yo", "tú", "él/ella", "nosotros"], correct: 2 },
      { q: "The formal command of 'comer' is…", options: ["come", "comes", "coma", "comed"], correct: 2 },
      { q: "The formal command of 'hablar' is…", options: ["habla", "hable", "hablas", "hablad"], correct: 1 },
      { q: "'¿Podría repetir eso?' uses which tense?", options: ["Present", "Imperfect", "Conditional", "Future"], correct: 2 },
      { q: "The most polite way to ask 'can you?' is…", options: ["¿Puede…?", "¿Podría…?", "¿Haga…?", "¿Puede usted (same as A)?"], correct: 1 },
      { q: "'Disculpe' is the ___ form of 'disculpar'.", options: ["informal (tú)", "formal (usted)", "plural", "imperative plural"], correct: 1 },
      { q: "'Siéntese, por favor' means…", options: ["Stand up please", "Come in please", "Sit down please", "Be quiet please"], correct: 2 },
      { q: "In Latin America, ustedes often replaces…", options: ["usted", "tú", "vosotros", "nosotros"], correct: 2 },
      { q: "'¿Le molestaría si…?' means…", options: ["Do you like it if…?", "Would you mind if…?", "Is it a problem if…?", "Both B and C"], correct: 3 },
      { q: "'Quedo a su disposición' is…", options: ["A shopping phrase", "A formal sign-off meaning 'I'm at your service'", "An emergency phrase", "A restaurant phrase"], correct: 1 },
    ],
  },
};
