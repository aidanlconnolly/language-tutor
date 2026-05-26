import type { Unit } from "../types";

export const UNIT_CONDIZIONALE: Unit = {
  slug: "condizionale",
  stage: 8,
  order: 33,
  icon: "🎩",
  title: "Condizionale",
  tagline: "Vorrei, potrei, dovrei — the conditional that turns demands into polite requests.",
  badge: "advanced",
  lessons: [
    {
      slug: "condizionale-formation",
      title: "Forming the conditional",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The 'would' tense — for politeness, hypotheticals, and softening",
          body: [
            "The conditional is the 'would' tense: <em>I would speak, you would eat, we would go</em>.",
            "Italian formula: take the <strong>future stem</strong> (the one you learned in unit 23) and add the <strong>conditional endings</strong>: <strong>-ei, -esti, -ebbe, -emmo, -este, -ebbero</strong>.",
            "<em>parlare → parler-</em> → parler<strong>ei, esti, ebbe, emmo, este, ebbero</strong>.",
            "<em>leggere → legger-</em> → leggerei, leggeresti, leggerebbe…",
            "<em>dormire → dormir-</em> → dormirei, dormiresti…",
            "If the future stem is irregular (andrò → andr-), the conditional uses the SAME irregular stem: <em>andrei, andresti, andrebbe…</em>",
          ],
          keyPoint:
            "Future stem + -ei/-esti/-ebbe/-emmo/-este/-ebbero. Irregular future stems carry over (andrei, sarei, vorrei, potrei…).",
        },
        {
          type: "conjugation",
          heading: "Parlare in the conditional",
          verb: "parlare",
          meaning: "to speak (conditional)",
          tenses: [
            {
              name: "Condizionale presente",
              forms: [
                { person: "io", form: "parlerei", en: "I would speak" },
                { person: "tu", form: "parleresti", en: "you would speak" },
                { person: "lui/lei", form: "parlerebbe", en: "he/she would speak" },
                { person: "noi", form: "parleremmo", en: "we would speak" },
                { person: "voi", form: "parlereste", en: "you all would speak" },
                { person: "loro", form: "parlerebbero", en: "they would speak" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "The top 8 you'll actually use",
          verb: "essere / avere / volere / potere / dovere / sapere / andare / fare",
          meaning: "common conditional forms",
          tenses: [
            {
              name: "Common conditional (io)",
              forms: [
                { person: "essere", form: "sarei", en: "I would be" },
                { person: "avere", form: "avrei", en: "I would have" },
                { person: "volere", form: "vorrei", en: "I would want / I'd like" },
                { person: "potere", form: "potrei", en: "I could / would be able to" },
                { person: "dovere", form: "dovrei", en: "I should / would have to" },
                { person: "sapere", form: "saprei", en: "I would know / I'd know how to" },
                { person: "andare", form: "andrei", en: "I would go" },
                { person: "fare", form: "farei", en: "I would do" },
              ],
            },
            {
              name: "Common conditional (tu)",
              forms: [
                { person: "essere", form: "saresti", en: "you would be" },
                { person: "avere", form: "avresti", en: "you would have" },
                { person: "volere", form: "vorresti", en: "you'd want / like" },
                { person: "potere", form: "potresti", en: "you could" },
                { person: "dovere", form: "dovresti", en: "you should" },
                { person: "andare", form: "andresti", en: "you would go" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "You've already been using it",
          body: "<em>Vorrei un caffè</em> = I'd like a coffee. You've used this since unit 1. <em>Vorrei</em> = conditional of <em>volere</em>. Italians use the conditional constantly to soften requests, give advice gently, and avoid sounding pushy.",
        },
        {
          type: "fillBlank",
          heading: "Conditional drills",
          items: [
            {
              template: "___ andare al mare oggi. (volere, io)",
              answer: "Vorrei",
              en: "I'd like to go to the beach today.",
              options: ["Voglio", "Vorrei", "Volevo", "Vorrei"],
            },
            {
              template: "Tu ___ aiutarmi, per favore? (potere)",
              answer: "potresti",
              en: "Could you help me, please?",
              options: ["puoi", "potresti", "potrai", "potete"],
            },
            {
              template: "Lui ___ andare ma è impegnato. (dovere)",
              answer: "dovrebbe",
              en: "He should go but he's busy.",
              options: ["deve", "dovrà", "dovrebbe", "doverebbe"],
            },
            {
              template: "Cosa ___ stasera, voi? (fare)",
              answer: "fareste",
              en: "What would you all do tonight?",
              options: ["fate", "farete", "fareste", "farebbero"],
            },
            {
              template: "Mi ___ un favore? (fare — tu)",
              answer: "faresti",
              en: "Would you do me a favor?",
              options: ["fai", "farai", "faresti", "facevi"],
            },
            {
              template: "(Noi) ___ partire subito, ma non possiamo. (volere)",
              answer: "vorremmo",
              en: "We'd want to leave right away, but we can't.",
              options: ["vogliamo", "volevamo", "vorremo", "vorremmo"],
            },
          ],
        },
      ],
    },
    {
      slug: "condizionale-uses",
      title: "The three jobs of the conditional",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Politeness, hypotheticals, and reported futures",
          body: [
            "<strong>1. Politeness</strong> — softening requests and statements. <em>Vorrei un cappuccino</em> > <em>Voglio un cappuccino</em>. <em>Potresti chiudere la porta?</em> > <em>Chiudi la porta!</em>",
            "<strong>2. Hypotheticals</strong> — things that 'would' happen if conditions were met. <em>Andrei in vacanza, ma non ho soldi.</em> = I'd go on vacation, but I don't have money.",
            "<strong>3. Reported future</strong> — \"he said he would…\". <em>Marco ha detto che sarebbe arrivato alle otto.</em> = Marco said he would arrive at eight. (Notice: <em>sarebbe arrivato</em> = past conditional, covered briefly below.)",
          ],
          keyPoint:
            "Three uses: politeness (vorrei), hypothetical (andrei se…), reported future (ha detto che sarebbe…).",
        },
        {
          type: "vocab",
          heading: "Common conditional phrases",
          items: [
            { it: "Vorrei…", en: "I'd like… (the polite default)" },
            { it: "Potresti / Potrebbe…?", en: "Could you…? (informal / formal)" },
            { it: "Dovresti…", en: "You should… (gentle advice)" },
            { it: "Mi piacerebbe…", en: "I would like (to) …" },
            { it: "Sarebbe meglio…", en: "It would be better…" },
            { it: "Sarebbe possibile…?", en: "Would it be possible…?" },
            { it: "Mi darebbe / Mi daresti…?", en: "Would you give me…? (formal / informal)" },
            { it: "Cosa faresti?", en: "What would you do?" },
            { it: "Andrei volentieri", en: "I'd gladly go" },
            { it: "Avrei una domanda", en: "I would have a question (very polite way to start)" },
          ],
        },
        {
          type: "dialogue",
          heading: "Polite requests in action",
          setup: "You need a hotel room change.",
          lines: [
            { speaker: "You", it: "Buonasera. Avrei una richiesta — sarebbe possibile cambiare camera?", en: "Good evening. I'd have a request — would it be possible to change rooms?" },
            { speaker: "Receptionist", it: "Certo, mi dica. C'è un problema?", en: "Of course, tell me. Is there a problem?" },
            { speaker: "You", it: "La camera attuale è un po' rumorosa. Vorrei qualcosa di più tranquillo, se è disponibile.", en: "The current room is a bit noisy. I'd like something quieter, if available." },
            { speaker: "Receptionist", it: "Capisco. Le potrei dare la 405 al quarto piano. Sarebbe più silenziosa.", en: "I understand. I could give you 405 on the fourth floor. It would be quieter." },
            { speaker: "You", it: "Sarebbe perfetto. Quando potrei spostarmi?", en: "That would be perfect. When could I move?" },
            { speaker: "Receptionist", it: "Tra mezz'ora, dopo le pulizie. Vorrebbe che le portiamo le valigie?", en: "In half an hour, after cleaning. Would you like us to bring your suitcases?" },
            { speaker: "You", it: "No, grazie, faccio io. Grazie davvero!", en: "No thanks, I'll do it. Thank you really!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Apply the conditional",
          items: [
            {
              template: "___ avere il menù, per favore? (potere — io)",
              answer: "Potrei",
              en: "Could I have the menu, please?",
              options: ["Posso", "Potrei", "Devi", "Vorrei"],
            },
            {
              template: "Mi ___ un'acqua frizzante? (dare — Lei formal)",
              answer: "darebbe",
              en: "Would you give me a sparkling water?",
              options: ["dà", "daresti", "darebbe", "diaresti"],
            },
            {
              template: "Tu ___ andare in palestra più spesso. (dovere)",
              answer: "dovresti",
              en: "You should go to the gym more often.",
              options: ["devi", "dovresti", "dovrai", "dovevi"],
            },
            {
              template: "Mi ___ un viaggio in Sicilia. (piacere)",
              answer: "piacerebbe",
              en: "I would like a trip to Sicily.",
              options: ["piace", "piacerebbe", "piaceva", "piacerà"],
            },
            {
              template: "(Noi) ___ partire prima, ma c'è troppo traffico. (volere)",
              answer: "vorremmo",
              en: "We'd want to leave earlier, but there's too much traffic.",
              options: ["vogliamo", "vorremmo", "vorremo", "volevamo"],
            },
          ],
        },
        {
          type: "tip",
          heading: "Condizionale passato — 'I would have…'",
          body: "For 'I would have done X' (past conditional), use <em>avere/essere in the conditional + participle</em>:<br>• <em>Avrei mangiato</em> = I would have eaten.<br>• <em>Sarei andato/a</em> = I would have gone.<br><br>Use it for past hypotheticals and especially for 'reported future' in the past: <em>Mi ha detto che sarebbe venuto</em> = He told me he would come. This is one of those quirks where Italian uses the past conditional where English uses 'would'.",
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "Excuse me, could you tell me where the bathroom is?",
          reference: "Mi scusi, potrebbe dirmi dov'è il bagno?",
          hint: "'Potrebbe' = could you (formal). 'Dirmi' = to tell me (dire + mi).",
        },
      ],
    },
    {
      slug: "condizionale-advice",
      title: "Giving advice and wishes",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Soft advice and wishful thinking",
          body: [
            "Italians give advice indirectly. The conditional is the main tool.",
            "<em>Se fossi in te, andrei in vacanza.</em> = If I were you, I'd go on vacation. ('Fossi' = imperfect subjunctive of essere — coming in unit 34.)",
            "<em>Al posto tuo, parlerei con lui.</em> = In your place, I'd talk to him.",
            "<em>Sarebbe meglio non insistere.</em> = It would be better not to insist.",
            "<em>Magari!</em> + conditional = wishful: <em>Magari potessi venire!</em> = If only I could come!",
          ],
          keyPoint:
            "Advice: Se fossi in te, … / Al posto tuo, … / Sarebbe meglio … / Dovresti … / Potresti … Mostly conditional + soft openers.",
        },
        {
          type: "vocab",
          heading: "Advice formulas",
          items: [
            { it: "Se fossi in te / al posto tuo", en: "If I were you / in your place" },
            { it: "Dovresti…", en: "You should…" },
            { it: "Potresti…", en: "You could…" },
            { it: "Ti consiglierei…", en: "I'd recommend you…" },
            { it: "Sarebbe meglio…", en: "It would be better…" },
            { it: "Sarebbe il caso di…", en: "It would be appropriate to…" },
            { it: "Penso che dovresti…", en: "I think you should…" },
            { it: "Forse potresti…", en: "Maybe you could…" },
            { it: "Magari…", en: "Maybe / hopefully…" },
            { it: "Non sarebbe meglio…?", en: "Wouldn't it be better…?" },
          ],
        },
        {
          type: "dialogue",
          heading: "A friend asking for advice",
          setup: "Anna's stressed about work.",
          lines: [
            { speaker: "Anna", it: "Sono stressatissima. Non so cosa fare con il mio capo.", en: "I'm super stressed. I don't know what to do with my boss." },
            { speaker: "You", it: "Mi dispiace. Se fossi in te, gli parlerei direttamente.", en: "I'm sorry. If I were you, I'd talk to him directly." },
            { speaker: "Anna", it: "Pensi? Ho paura che si arrabbi.", en: "You think? I'm afraid he'll get angry." },
            { speaker: "You", it: "Forse potresti scrivergli una mail prima, per spiegare la situazione con calma.", en: "Maybe you could write him an email first, to explain the situation calmly." },
            { speaker: "Anna", it: "Sarebbe più semplice, sì.", en: "It would be easier, yes." },
            { speaker: "You", it: "Esatto. Sarebbe meglio risolvere la cosa prima che diventi più grande.", en: "Exactly. It would be better to solve it before it gets bigger." },
            { speaker: "Anna", it: "Hai ragione. Grazie, mi hai aiutato molto.", en: "You're right. Thanks, you've helped a lot." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Soft advice fill",
          items: [
            {
              template: "Se fossi in te, ___ con lui. (parlare)",
              answer: "parlerei",
              en: "If I were you, I'd talk with him.",
              options: ["parlo", "ho parlato", "parlerei", "parlavo"],
            },
            {
              template: "Sarebbe ___ partire prima. (meglio)",
              answer: "meglio",
              en: "It would be better to leave earlier.",
              options: ["bene", "meglio", "ottimo", "perfetto"],
            },
            {
              template: "Tu ___ studiare di più. (dovere)",
              answer: "dovresti",
              en: "You should study more.",
              options: ["devi", "dovresti", "dovrai", "dovevi"],
            },
            {
              template: "Forse ___ provare un altro ristorante. (potere — voi)",
              answer: "potreste",
              en: "Maybe you could try another restaurant.",
              options: ["potete", "potreste", "potrete", "poteste"],
            },
            {
              template: "Non ___ meglio chiamarlo? (essere)",
              answer: "sarebbe",
              en: "Wouldn't it be better to call him?",
              options: ["è", "sarà", "sarebbe", "era"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the advice",
          items: [
            { tokens: ["Se", "fossi", "in", "te", ",", "andrei", "al", "mare"], en: "If I were you, I'd go to the beach." },
            { tokens: ["Forse", "potresti", "chiamare", "tua", "madre"], en: "Maybe you could call your mother." },
            { tokens: ["Sarebbe", "meglio", "non", "insistere", "ora"], en: "It would be better not to insist now." },
            { tokens: ["Ti", "consiglierei", "di", "prenotare", "in", "anticipo"], en: "I'd recommend booking in advance." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-it",
          prompt: "If I were you, I'd take the train — it would be faster.",
          reference: "Se fossi in te, prenderei il treno — sarebbe più veloce.",
          hint: "'Se fossi in te' = if I were you. Conditional for both verbs.",
        },
        {
          type: "tip",
          heading: "Avoid imperative when giving advice to peers",
          body: "Saying <em>«Fai questo!»</em> (Do this!) to a friend can sound bossy. Use <em>«Potresti fare questo»</em> (You could do this) or <em>«Faresti meglio a…»</em> (You'd be better off…). Italians appreciate the softening — it shows you respect their autonomy.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "Conditional endings =",
        options: [
          "-vo, -vi, -va, -vamo, -vate, -vano",
          "-ò, -ai, -à, -emo, -ete, -anno",
          "-ei, -esti, -ebbe, -emmo, -este, -ebbero",
          "-o, -i, -a, -iamo, -ate, -ano",
        ],
        correct: 2,
      },
      {
        q: "Conditional of 'volere' (io) =",
        options: ["voglio", "volevo", "vorrò", "vorrei"],
        correct: 3,
      },
      {
        q: "Conditional of 'potere' (tu) =",
        options: ["puoi", "potresti", "potrai", "poteste"],
        correct: 1,
      },
      {
        q: "Conditional of 'andare' (noi) =",
        options: ["andiamo", "andremo", "andremmo", "andiammo"],
        correct: 2,
      },
      {
        q: "'I should study more' =",
        options: [
          "Devo studiare di più.",
          "Dovrei studiare di più.",
          "Dovrò studiare di più.",
          "Dovevo studiare di più.",
        ],
        correct: 1,
      },
      {
        q: "'Could you help me?' (formal) =",
        options: [
          "Puoi aiutarmi?",
          "Mi aiuti?",
          "Potrebbe aiutarmi?",
          "Aiuti me?",
        ],
        correct: 2,
      },
      {
        q: "Conditional uses the same stem as…",
        options: [
          "present tense",
          "future tense",
          "imperfetto",
          "passato prossimo",
        ],
        correct: 1,
      },
      {
        q: "'If I were you, I'd go.' =",
        options: [
          "Se fossi in te, vado.",
          "Se fossi in te, andrei.",
          "Se sono in te, andrei.",
          "Se ero in te, andavo.",
        ],
        correct: 1,
      },
      {
        q: "'I would have gone' (past conditional) =",
        options: [
          "Andrei",
          "Sarei andato/a",
          "Andavo",
          "Sono andato/a",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'I'd like a coffee, please.'",
        options: [
          "Voglio un caffè, per favore.",
          "Vorrei un caffè, per favore.",
          "Vorrò un caffè, per favore.",
          "Volevo un caffè, per favore.",
        ],
        correct: 1,
      },
    ],
  },
};
