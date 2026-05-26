import type { Unit } from "../types";

export const UNIT_FORMAL: Unit = {
  slug: "formal",
  stage: 6,
  order: 27,
  icon: "🤝",
  title: "Formal (Lei) deep dive",
  tagline: "Mi scusi, dica, prego — the polite imperative and the formal Italian that locals appreciate.",
  badge: "core",
  lessons: [
    {
      slug: "formal-when-and-why",
      title: "When to use Lei",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "The unwritten rules",
          body: [
            "Italians use <strong>Lei</strong> (capitalized in writing) — the formal \"you\" — much more than English speakers expect. Default to Lei when:",
            "• Talking to strangers",
            "• Anyone you meet professionally (shopkeepers, waiters, ticket agents, doctors)",
            "• People significantly older than you",
            "• Anyone you don't know well, especially in a service context",
            "Switch to <strong>tu</strong> only after the other person invites it (<em>«Diamoci del tu»</em> = let's use 'tu'), or with: kids, close friends, family, work peers of the same age.",
            "<strong>Tourist tip:</strong> if you default to Lei with everyone, you'll never offend. Defaulting to tu can sound rude.",
          ],
          keyPoint:
            "Default = Lei (formal). Switch to tu only when invited or with kids/friends/peers. Tourists: Lei is always safe.",
        },
        {
          type: "vocab",
          heading: "Tu vs Lei — same phrases compared",
          intro: "Notice the verb endings shift.",
          items: [
            { it: "(tu) Come stai? / (Lei) Come sta?", en: "How are you?" },
            { it: "(tu) Cosa fai? / (Lei) Cosa fa?", en: "What are you doing?" },
            { it: "(tu) Di dove sei? / (Lei) Di dov'è?", en: "Where are you from?" },
            { it: "(tu) Mi puoi aiutare? / (Lei) Mi può aiutare?", en: "Can you help me?" },
            { it: "(tu) Hai un attimo? / (Lei) Ha un attimo?", en: "Do you have a moment?" },
            { it: "(tu) Scusa! / (Lei) Mi scusi!", en: "Excuse me!" },
            { it: "(tu) Senti / (Lei) Senta", en: "Hey / Listen (getting attention)" },
            { it: "(tu) Dimmi / (Lei) Mi dica", en: "Tell me" },
            { it: "(tu) Vieni qui / (Lei) Venga qui", en: "Come here" },
            { it: "(tu) Parli inglese? / (Lei) Parla inglese?", en: "Do you speak English?" },
          ],
        },
        {
          type: "tip",
          heading: "The 'Lei' verb is just 3rd person singular",
          body: "Lei always uses the SAME verb form as 'lei' (she). <em>«Come sta?»</em> works for both \"How is she?\" and \"How are you (formally)?\" — context tells you which. This means you don't have to memorize a new verb chart — you already know it from learning 3rd person.",
        },
        {
          type: "multipleChoice",
          heading: "Tu or Lei?",
          questions: [
            {
              q: "Speaking to a hotel receptionist, default to…",
              options: ["tu", "Lei", "either works", "voi"],
              correct: 1,
            },
            {
              q: "'Come sta?' is…",
              options: [
                "informal 'How are you?'",
                "formal 'How are you?'",
                "third-person 'How is he/she?'",
                "B and C — same form for both",
              ],
              correct: 3,
            },
            {
              q: "Speaking to a friend's 5-year-old, use…",
              options: ["tu", "Lei", "voi", "depends on parents"],
              correct: 0,
            },
            {
              q: "Your colleague your age says 'diamoci del tu' — they're…",
              options: [
                "asking you to switch to informal 'tu'",
                "asking for a tip",
                "saying 'Let's go!'",
                "introducing themselves",
              ],
              correct: 0,
            },
            {
              q: "If unsure, the safe default for tourists is…",
              options: ["tu", "Lei", "no pronoun at all", "voi"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "formal-commands",
      title: "Formal commands — the imperative for Lei",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "How to ask politely (without sounding bossy)",
          body: [
            "The formal command (Lei imperative) uses <strong>special endings</strong> that look like the subjunctive — for now just memorize the patterns.",
            "<strong>-are</strong> verbs → ending in <strong>-i</strong>: <em>scusare → scusi! parlare → parli!</em>",
            "<strong>-ere</strong> and <strong>-ire</strong> verbs → ending in <strong>-a</strong>: <em>prendere → prenda! aprire → apra!</em>",
            "Irregular formal commands you'll hear constantly: <em>dire → dica!</em> <em>fare → faccia!</em> <em>venire → venga!</em> <em>dare → dia!</em> <em>essere → sia!</em> <em>avere → abbia!</em> <em>stare → stia!</em> <em>andare → vada!</em>",
            "Italians use these CONSTANTLY at shops, restaurants, with strangers: <em>«Mi dica», «Si accomodi», «Prego, entri», «Aspetti un attimo»</em>.",
          ],
          keyPoint:
            "-are → -i (scusi). -ere/-ire → -a (prenda, apra). Memorize irregulars: dica, faccia, venga, dia, sia, abbia, vada.",
        },
        {
          type: "conjugation",
          heading: "Formal commands (Lei) — common verbs",
          verb: "scusare / dire / fare / prendere / venire / aspettare",
          meaning: "common Lei imperatives",
          tenses: [
            {
              name: "Imperativo formale (Lei)",
              forms: [
                { person: "scusare", form: "scusi!", en: "excuse me!" },
                { person: "dire", form: "dica!", en: "tell (me)!" },
                { person: "fare", form: "faccia!", en: "do (it)!" },
                { person: "prendere", form: "prenda!", en: "take!" },
                { person: "venire", form: "venga!", en: "come!" },
                { person: "aspettare", form: "aspetti!", en: "wait!" },
                { person: "accomodarsi", form: "si accomodi!", en: "have a seat!" },
                { person: "dare", form: "dia!", en: "give!" },
                { person: "essere (be)", form: "sia!", en: "be! (e.g. sia gentile = be kind)" },
                { person: "stare (stay)", form: "stia!", en: "stay! (stia tranquillo = don't worry)" },
                { person: "andare", form: "vada!", en: "go!" },
                { person: "sentire", form: "senta!", en: "listen! (getting attention)" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Pronouns attach BEFORE in formal, AFTER in informal",
          body: "Informal commands attach pronouns to the end: <em>dimmi!</em> (tell me — tu form). Formal commands put the pronoun BEFORE: <em>mi dica!</em>. Same with: <em>dammi → mi dia, dimmelo → me lo dica, vieni qui → venga qui</em>.",
          example: { it: "Informal: scusami! / Formal: mi scusi!", en: "Excuse me!" },
        },
        {
          type: "fillBlank",
          heading: "Formal command fill",
          items: [
            {
              template: "Mi ___ , dov'è la stazione? (scusare)",
              answer: "scusi",
              en: "Excuse me, where is the station?",
              options: ["scusa", "scusi", "scusare", "scusate"],
            },
            {
              template: "___ , la fermata è qui? (sentire — formal command)",
              answer: "Senta",
              en: "Listen, is the stop here?",
              options: ["Senti", "Senta", "Sentire", "Sentite"],
            },
            {
              template: "___ tranquillo, arriva subito. (stare)",
              answer: "Stia",
              en: "Don't worry, it's coming right away.",
              options: ["Stai", "Stia", "Stiamo", "Stare"],
            },
            {
              template: "___ pure! Le porto il menù subito. (accomodarsi — formal)",
              answer: "Si accomodi",
              en: "Have a seat! I'll bring you the menu right away.",
              options: ["Accomodati", "Si accomodi", "Accomodatevi", "Accomodare"],
            },
            {
              template: "___ pazienza, c'è molta gente oggi. (avere)",
              answer: "Abbia",
              en: "Have patience, there are lots of people today.",
              options: ["Hai", "Abbia", "Avere", "Avete"],
            },
            {
              template: "___ il biglietto allo sportello tre. (prendere)",
              answer: "Prenda",
              en: "Take the ticket at window three.",
              options: ["Prendi", "Prenda", "Prendere", "Prendete"],
            },
          ],
        },
      ],
    },
    {
      slug: "formal-real-encounters",
      title: "Lei in real-world encounters",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "The phrases you'll actually use",
          body: [
            "<em>«Mi scusi, signore / signora.»</em> = Excuse me, sir / ma'am. Use 'signore' for men, 'signora' for married women (or unknown), 'signorina' for young women (used less now — \"signora\" is safer).",
            "<em>«Mi può dire…?»</em> = Can you tell me…? (formal). Mi può aiutare? = Can you help me?",
            "<em>«La ringrazio»</em> = I thank you (formal). Stronger than 'grazie' alone.",
            "<em>«È stato molto gentile»</em> = You've been very kind. A warm parting phrase.",
            "<em>«ArrivederLa»</em> (m/f) = Goodbye, you (formal, capitalized). Less used; <em>«Arrivederci»</em> is fine too.",
          ],
          keyPoint:
            "Mi scusi (excuse me), mi può (can you), la ringrazio (I thank you formally), è stato molto gentile (you've been very kind), arrivederLa (goodbye to you formally).",
        },
        {
          type: "vocab",
          heading: "Formal Lei essentials",
          items: [
            { it: "signore / signora", en: "sir / ma'am (use these — Italians love them)" },
            { it: "mi scusi", en: "excuse me (formal)" },
            { it: "mi può…?", en: "can you…? (formal)" },
            { it: "Le dispiace…?", en: "do you mind…? (very polite)" },
            { it: "Le posso chiedere…?", en: "may I ask you…?" },
            { it: "se non Le dispiace", en: "if you don't mind" },
            { it: "la ringrazio", en: "I thank you (formal, strong)" },
            { it: "molto gentile", en: "very kind" },
            { it: "è stato un piacere", en: "it has been a pleasure" },
            { it: "arrivederLa / arrivederci", en: "goodbye (formal / neutral)" },
            { it: "buona giornata / serata", en: "have a good day / evening" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the pharmacy (formal Lei)",
          setup: "Polite back-and-forth at the farmacia.",
          lines: [
            { speaker: "You", it: "Buongiorno, signora. Mi scusi se La disturbo.", en: "Good morning, ma'am. Sorry to bother you." },
            { speaker: "Farmacista", it: "Mi dica, in cosa La posso aiutare?", en: "Tell me, how can I help you?" },
            { speaker: "You", it: "Avrei bisogno di qualcosa per il mal di gola. Cosa mi consiglia?", en: "I'd need something for a sore throat. What do you recommend?" },
            { speaker: "Farmacista", it: "Le do questi sciroppi naturali. Ne prenda un cucchiaino tre volte al giorno.", en: "I'll give you these natural syrups. Take a teaspoonful three times a day." },
            { speaker: "You", it: "Perfetto. Quanto Le devo?", en: "Perfect. How much do I owe you?" },
            { speaker: "Farmacista", it: "Otto e cinquanta. Vuole anche un'aspirina?", en: "Eight fifty. Would you also like an aspirin?" },
            { speaker: "You", it: "No, grazie. La ringrazio davvero, è stata molto gentile.", en: "No, thanks. I really thank you, you've been very kind." },
            { speaker: "Farmacista", it: "Si figuri. Guarisca presto. Buona giornata.", en: "Don't mention it. Get well soon. Have a good day." },
            { speaker: "You", it: "Anche a Lei, arrivederLa.", en: "You too, goodbye." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Formal phrases",
          items: [
            {
              template: "Mi ___ , dov'è il bagno? (scusare)",
              answer: "scusi",
              en: "Excuse me, where's the bathroom?",
              options: ["scusi", "scusa", "scusami", "scusate"],
            },
            {
              template: "Mi ___ aiutare con questa valigia? (potere)",
              answer: "può",
              en: "Can you help me with this suitcase?",
              options: ["puoi", "può", "potrà", "potete"],
            },
            {
              template: "___ ringrazio davvero della Sua gentilezza.",
              answer: "La",
              en: "I really thank you for your kindness.",
              options: ["Vi", "La", "Le", "Ti"],
            },
            {
              template: "___ stato un piacere conoscerLa.",
              answer: "È",
              en: "It's been a pleasure to meet you.",
              options: ["È", "Ho", "Ero", "Sono"],
            },
            {
              template: "Buona ___ , signora!",
              answer: "giornata",
              en: "Have a good day, ma'am!",
              options: ["sera", "giornata", "mattina", "tempo"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "Excuse me, sir. Can you tell me where the museum is?",
          reference: "Mi scusi, signore. Mi può dire dov'è il museo?",
          hint: "Mi scusi (formal). Mi può + infinitive = formal 'can you…'.",
        },
        {
          type: "tip",
          heading: "Switching to 'tu' as a guest",
          body: "If an Italian friend introduces you to their family or friends and you're not sure: start with Lei. If they use 'tu' with you immediately, switch. If they're older, wait for them to say <em>«Diamoci del tu»</em> = Let's use 'tu' — then you can switch. It's a small moment of bonding.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Default 'you' when speaking to strangers in Italy =",
        options: ["tu", "Lei", "voi", "loro"],
        correct: 1,
      },
      {
        q: "'How are you?' (formal) =",
        options: ["Come stai?", "Come sta?", "Come va?", "Come sei?"],
        correct: 1,
      },
      {
        q: "Lei verb forms use…",
        options: [
          "a unique formal conjugation",
          "the same form as 3rd person singular (he/she)",
          "the voi plural form",
          "the loro form",
        ],
        correct: 1,
      },
      {
        q: "Formal command of 'scusare' =",
        options: ["scusa!", "scusi!", "scusate!", "scusare!"],
        correct: 1,
      },
      {
        q: "Formal command of 'prendere' =",
        options: ["prendi!", "prenda!", "prendete!", "prendere!"],
        correct: 1,
      },
      {
        q: "Formal command of 'dire' =",
        options: ["di'!", "dica!", "dite!", "dire!"],
        correct: 1,
      },
      {
        q: "'Have a seat' (formal command) =",
        options: ["Accomodati!", "Si accomodi!", "Accomodatevi!", "Si siede!"],
        correct: 1,
      },
      {
        q: "Pronoun placement with formal commands =",
        options: [
          "always attached to the end",
          "always BEFORE the verb",
          "after, but with a dash",
          "doesn't matter",
        ],
        correct: 1,
      },
      {
        q: "'I really thank you' (formal, strong) =",
        options: [
          "Grazie tante.",
          "La ringrazio.",
          "Ti ringrazio.",
          "Vi ringrazio.",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'Excuse me, can you help me, please?'",
        options: [
          "Scusa, puoi aiutarmi, per favore?",
          "Mi scusi, mi può aiutare, per favore?",
          "Sorry, mi può aiutare?",
          "Mi scusi, puoi aiutarmi?",
        ],
        correct: 1,
      },
    ],
  },
};
