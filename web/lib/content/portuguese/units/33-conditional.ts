import type { Unit } from "../../types";

export const UNIT_CONDITIONAL: Unit = {
  slug: "conditional",
  stage: 8,
  order: 33,
  icon: "🎩",
  title: "Conditional (futuro do pretérito)",
  tagline: "Eu gostaria, poderia, deveria — polite requests.",
  badge: "advanced",
  lessons: [
    {
      slug: "conditional-formation",
      title: "Forming the conditional",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The 'would' tense — for politeness, hypotheticals, and softening",
          body: [
            "The conditional is the 'would' tense: <em>I would speak, you would eat, we would live</em>.",
            "Portuguese formula: take the <strong>whole infinitive</strong> and add the endings <strong>-ia, -ia, -íamos, -iam</strong> (one ending for eu and for você/ele/ela — they're identical).",
            "<em>falar</em> → falar<strong>ia</strong>, falar<strong>íamos</strong>, falar<strong>iam</strong>.",
            "<em>comer</em> → comer<strong>ia</strong>, comer<strong>íamos</strong>, comer<strong>iam</strong>.",
            "<em>viver</em> → viver<strong>ia</strong>, viver<strong>íamos</strong>, viver<strong>iam</strong>.",
            "Almost every verb is regular here — you just bolt the endings onto the full infinitive. Only three common verbs have a shortened stem (you'll meet them below).",
          ],
          tip: {
            label: "The name",
            body: "Brazilian school grammar calls this tense the futuro do pretérito (\"future-of-the-past\"). The older European/traditional term is condicional. Same tense, two names — don't be thrown when a Portuguese textbook says condicional.",
          },
          keyPoint:
            "Full infinitive + -ia / -ia / -íamos / -iam. Note the accent on the nós form: falaríamos, comeríamos.",
        },
        {
          type: "conjugation",
          heading: "falar in the conditional",
          verb: "falar",
          meaning: "to speak (conditional)",
          intro: "Você/ele/ela takes the same -ia form as eu.",
          tenses: [
            {
              name: "Futuro do pretérito (conditional)",
              forms: [
                { person: "eu", form: "falaria", en: "I would speak" },
                { person: "você / ele / ela", form: "falaria", en: "you/he/she would speak" },
                { person: "nós", form: "falaríamos", en: "we would speak" },
                { person: "vocês / eles / elas", form: "falariam", en: "you all/they would speak" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "comer & viver — -er and -ir work the same",
          verb: "comer / viver",
          meaning: "to eat / to live (conditional)",
          intro: "The endings are identical across all three verb families.",
          tenses: [
            {
              name: "comer",
              forms: [
                { person: "eu", form: "comeria", en: "I would eat" },
                { person: "você / ele / ela", form: "comeria", en: "you/he/she would eat" },
                { person: "nós", form: "comeríamos", en: "we would eat" },
                { person: "vocês / eles / elas", form: "comeriam", en: "you all/they would eat" },
              ],
            },
            {
              name: "viver",
              forms: [
                { person: "eu", form: "viveria", en: "I would live" },
                { person: "você / ele / ela", form: "viveria", en: "you/he/she would live" },
                { person: "nós", form: "viveríamos", en: "we would live" },
                { person: "vocês / eles / elas", form: "viveriam", en: "you all/they would live" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "The only three irregular stems",
          verb: "fazer / dizer / trazer",
          meaning: "to do / to say / to bring (conditional)",
          intro: "These drop the -ze- of the infinitive: faria (not fazeria), diria, traria. Memorize these three and you've got every irregular conditional.",
          tenses: [
            {
              name: "fazer → far-",
              forms: [
                { person: "eu / você / ele / ela", form: "faria", en: "I/you/he/she would do" },
                { person: "nós", form: "faríamos", en: "we would do" },
                { person: "vocês / eles / elas", form: "fariam", en: "you all/they would do" },
              ],
            },
            {
              name: "dizer → dir-  ·  trazer → trar-",
              forms: [
                { person: "dizer (eu/você)", form: "diria", en: "I/you would say" },
                { person: "dizer (nós)", form: "diríamos", en: "we would say" },
                { person: "trazer (eu/você)", form: "traria", en: "I/you would bring" },
                { person: "trazer (nós)", form: "traríamos", en: "we would bring" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "The polite four you'll use most",
          verb: "gostar / poder / dever / querer",
          meaning: "would like / could / should / would want",
          intro: "These four carry most polite speech. (gostar, poder, dever are regular; querer is regular too.)",
          tenses: [
            {
              name: "eu form (and você/ele/ela — same)",
              forms: [
                { person: "gostar", form: "gostaria", en: "I would like" },
                { person: "poder", form: "poderia", en: "I could / would be able to" },
                { person: "dever", form: "deveria", en: "I should / ought to" },
                { person: "querer", form: "quereria", en: "I would want" },
              ],
            },
            {
              name: "nós form",
              forms: [
                { person: "gostar", form: "gostaríamos", en: "we would like" },
                { person: "poder", form: "poderíamos", en: "we could" },
                { person: "dever", form: "deveríamos", en: "we should" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "You've already been saying 'I'd like'",
          body: "<em>Eu gostaria de um café</em> = I'd like a coffee. <em>Gostaria</em> is the conditional of <em>gostar</em>, and it's the polite default for ordering and requesting — far softer than <em>quero</em> (I want). Brazilians lean on the conditional to make requests sound courteous instead of demanding.",
          example: { l1: "Eu gostaria de uma água, por favor.", en: "I'd like a water, please." },
        },
        {
          type: "fillBlank",
          heading: "Conditional drills",
          items: [
            {
              template: "Eu ___ de ir à praia hoje. (gostar)",
              answer: "gostaria",
              en: "I'd like to go to the beach today.",
              options: ["gosto", "gostaria", "gostava", "gostarei"],
            },
            {
              template: "Você ___ me ajudar, por favor? (poder)",
              answer: "poderia",
              en: "Could you help me, please?",
              options: ["pode", "poderia", "poderá", "podia"],
            },
            {
              template: "Ele ___ ir, mas está ocupado. (dever)",
              answer: "deveria",
              en: "He should go, but he's busy.",
              options: ["deve", "deverá", "deveria", "devia"],
            },
            {
              template: "O que vocês ___ hoje à noite? (fazer)",
              answer: "fariam",
              en: "What would you all do tonight?",
              options: ["fazem", "farão", "fariam", "fazeriam"],
            },
            {
              template: "Nós ___ partir agora, mas não dá. (querer)",
              answer: "quereríamos",
              en: "We'd want to leave now, but it's not possible.",
              options: ["queremos", "queríamos", "quereríamos", "quereremos"],
            },
            {
              template: "Eu ___ a verdade, mas é complicado. (dizer)",
              answer: "diria",
              en: "I would tell the truth, but it's complicated.",
              options: ["digo", "diria", "dizeria", "direi"],
            },
          ],
        },
      ],
    },
    {
      slug: "conditional-uses",
      title: "The three jobs of the conditional",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Politeness, hypotheticals, and reported futures",
          body: [
            "<strong>1. Politeness</strong> — softening requests and statements. <em>Eu gostaria de um cappuccino</em> > <em>Eu quero um cappuccino</em>. <em>Você poderia fechar a porta?</em> > <em>Feche a porta!</em>",
            "<strong>2. Hypotheticals</strong> — what 'would' happen if conditions were met. <em>Eu iria de férias, mas não tenho dinheiro.</em> = I'd go on vacation, but I don't have money.",
            "<strong>3. Reported future</strong> — \"he said he would…\". <em>O Marco disse que chegaria às oito.</em> = Marco said he would arrive at eight.",
          ],
          keyPoint:
            "Three uses: politeness (gostaria), hypothetical (iria se…), reported future (disse que chegaria).",
        },
        {
          type: "tip",
          heading: "In casual Brazil, the imperfect often stands in",
          body: "In everyday spoken Brazilian, people frequently swap the conditional for the <em>imperfeito</em> to be polite: <strong>eu queria</strong> instead of <em>eu gostaria</em>, <strong>você podia?</strong> instead of <em>você poderia?</em>, <strong>você devia</strong> instead of <em>você deveria</em>. Both are correct and equally courteous — the imperfect just sounds more relaxed. Learn the full conditional (it's the 'safe' form anywhere), but recognize the imperfect substitute when you hear it on the street.",
          example: { l1: "Eu queria um café. (= Eu gostaria de um café.)", en: "I'd like a coffee. (casual spoken Brazilian)" },
        },
        {
          type: "vocab",
          heading: "Common conditional phrases",
          items: [
            { l1: "Eu gostaria de…", en: "I'd like to / I'd like… (the polite default)" },
            { l1: "Você poderia…? / O senhor poderia…?", en: "Could you…? (informal / formal)" },
            { l1: "Você deveria…", en: "You should… (gentle advice)" },
            { l1: "Seria melhor…", en: "It would be better…" },
            { l1: "Seria possível…?", en: "Would it be possible…?" },
            { l1: "Você me daria…?", en: "Would you give me…?" },
            { l1: "O que você faria?", en: "What would you do?" },
            { l1: "Eu iria com prazer", en: "I'd gladly go" },
            { l1: "Eu teria uma pergunta", en: "I'd have a question (very polite way to start)" },
            { l1: "Eu adoraria…", en: "I'd love to…" },
          ],
        },
        {
          type: "dialogue",
          heading: "Polite requests in action",
          setup: "You need to change your hotel room.",
          lines: [
            { speaker: "You", l1: "Boa noite. Eu teria um pedido — seria possível trocar de quarto?", en: "Good evening. I'd have a request — would it be possible to change rooms?" },
            { speaker: "Recepcionista", l1: "Claro, pode dizer. Há algum problema?", en: "Of course, go ahead. Is there a problem?" },
            { speaker: "You", l1: "O quarto atual é um pouco barulhento. Eu gostaria de algo mais tranquilo, se houver.", en: "The current room is a bit noisy. I'd like something quieter, if there is one." },
            { speaker: "Recepcionista", l1: "Entendo. Eu poderia lhe dar o 405, no quarto andar. Seria mais silencioso.", en: "I understand. I could give you 405, on the fourth floor. It would be quieter." },
            { speaker: "You", l1: "Seria perfeito. Quando eu poderia me mudar?", en: "That would be perfect. When could I move?" },
            { speaker: "Recepcionista", l1: "Em meia hora, depois da limpeza. O senhor gostaria que levássemos as malas?", en: "In half an hour, after cleaning. Would you like us to take your bags?" },
            { speaker: "You", l1: "Não, obrigado, eu mesmo levo. Muito obrigado!", en: "No thanks, I'll take them myself. Thank you very much!" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Which use is it?",
          questions: [
            {
              q: "'Você poderia abrir a janela?' is an example of…",
              options: ["a hypothetical", "a polite request", "a reported future", "a past fact"],
              correct: 1,
              fb: "Softening a request with poderia → politeness.",
            },
            {
              q: "'Ela disse que voltaria mais tarde' is…",
              options: ["politeness", "a wish", "a reported future ('she said she would…')", "present continuous"],
              correct: 2,
              fb: "Reported future: 'she said she would come back later.'",
            },
            {
              q: "'Eu viajaria, mas não tenho tempo' is…",
              options: ["a polite order", "a hypothetical", "a reported future", "a command"],
              correct: 1,
              fb: "A would-happen-if statement → hypothetical.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Apply the conditional",
          items: [
            {
              template: "Eu ___ ver o cardápio, por favor? (poder)",
              answer: "poderia",
              en: "Could I see the menu, please?",
              options: ["posso", "poderia", "deveria", "gostaria"],
            },
            {
              template: "Você me ___ uma água com gás? (dar)",
              answer: "daria",
              en: "Would you give me a sparkling water?",
              options: ["dá", "daria", "deria", "dava"],
            },
            {
              template: "Você ___ ir à academia com mais frequência. (dever)",
              answer: "deveria",
              en: "You should go to the gym more often.",
              options: ["deve", "deveria", "deverá", "devia"],
            },
            {
              template: "Eu ___ de uma viagem ao Nordeste. (gostar)",
              answer: "gostaria",
              en: "I would like a trip to the Northeast.",
              options: ["gosto", "gostaria", "gostava", "gostarei"],
            },
            {
              template: "Nós ___ sair mais cedo, mas há muito trânsito. (querer)",
              answer: "quereríamos",
              en: "We'd want to leave earlier, but there's a lot of traffic.",
              options: ["queremos", "quereríamos", "quereremos", "queríamos"],
            },
          ],
        },
        {
          type: "tip",
          heading: "Futuro do pretérito composto — 'I would have…'",
          body: "For 'I would have done X', use <em>ter in the conditional + past participle</em>:<br>• <em>Eu teria comido</em> = I would have eaten.<br>• <em>Eu teria ido</em> = I would have gone.<br><br>Use it for past hypotheticals: <em>Eu teria ligado, mas perdi seu número</em> = I would have called, but I lost your number.",
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Excuse me, could you tell me where the bathroom is?",
          reference: "Com licença, você poderia me dizer onde fica o banheiro?",
          hint: "'Você poderia' = could you. 'me dizer' = to tell me. 'fica' (ficar) for where a place is located.",
        },
      ],
    },
    {
      slug: "conditional-advice",
      title: "Giving advice and wishes",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Soft advice and wishful thinking",
          body: [
            "Brazilians give advice indirectly, and the conditional is the main tool.",
            "<em>Se eu fosse você, viajaria.</em> = If I were you, I'd travel. ('fosse' = imperfect subjunctive of ser — coming in unit 34.)",
            "<em>No seu lugar, eu falaria com ele.</em> = In your place, I'd talk to him.",
            "<em>Seria melhor não insistir.</em> = It would be better not to insist.",
            "<em>Quem dera</em> + imperfect subjunctive = wishful: <em>Quem dera eu pudesse ir!</em> = If only I could go!",
          ],
          keyPoint:
            "Advice: Se eu fosse você, … / No seu lugar, … / Seria melhor … / Você deveria … / Você poderia … Mostly conditional + soft openers.",
        },
        {
          type: "vocab",
          heading: "Advice formulas",
          items: [
            { l1: "Se eu fosse você / no seu lugar", en: "If I were you / in your place" },
            { l1: "Você deveria…", en: "You should…" },
            { l1: "Você poderia…", en: "You could…" },
            { l1: "Eu recomendaria…", en: "I'd recommend…" },
            { l1: "Seria melhor…", en: "It would be better…" },
            { l1: "Seria o caso de…", en: "It would be appropriate to…" },
            { l1: "Eu acho que você deveria…", en: "I think you should…" },
            { l1: "Talvez você pudesse…", en: "Maybe you could… (imperfect subjunctive)" },
            { l1: "Quem sabe…", en: "Who knows / maybe…" },
            { l1: "Não seria melhor…?", en: "Wouldn't it be better…?" },
          ],
        },
        {
          type: "dialogue",
          heading: "A friend asking for advice",
          setup: "Ana is stressed about work.",
          lines: [
            { speaker: "Ana", l1: "Estou superestressada. Não sei o que fazer com o meu chefe.", en: "I'm super stressed. I don't know what to do about my boss." },
            { speaker: "You", l1: "Sinto muito. Se eu fosse você, falaria com ele diretamente.", en: "I'm sorry. If I were you, I'd talk to him directly." },
            { speaker: "Ana", l1: "Você acha? Tenho medo de que ele fique bravo.", en: "You think so? I'm afraid he'll get angry." },
            { speaker: "You", l1: "Talvez você pudesse mandar um e-mail antes, para explicar a situação com calma.", en: "Maybe you could send an email first, to explain the situation calmly." },
            { speaker: "Ana", l1: "Seria mais fácil, sim.", en: "It would be easier, yes." },
            { speaker: "You", l1: "Exato. Seria melhor resolver isso antes que vire algo maior.", en: "Exactly. It would be better to solve it before it becomes something bigger." },
            { speaker: "Ana", l1: "Você tem razão. Obrigada, você me ajudou muito.", en: "You're right. Thanks, you've helped me a lot." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Soft advice fill",
          items: [
            {
              template: "Se eu fosse você, ___ com ele. (falar)",
              answer: "falaria",
              en: "If I were you, I'd talk with him.",
              options: ["falo", "falei", "falaria", "falava"],
            },
            {
              template: "___ melhor sair mais cedo. (ser)",
              answer: "Seria",
              en: "It would be better to leave earlier.",
              options: ["É", "Será", "Seria", "Era"],
            },
            {
              template: "Você ___ estudar mais. (dever)",
              answer: "deveria",
              en: "You should study more.",
              options: ["deve", "deveria", "deverá", "devia"],
            },
            {
              template: "Talvez vocês ___ tentar outro restaurante. (poder)",
              answer: "poderiam",
              en: "Maybe you could try another restaurant.",
              options: ["podem", "poderiam", "poderão", "podiam"],
            },
            {
              template: "Não ___ melhor ligar para ele? (ser)",
              answer: "seria",
              en: "Wouldn't it be better to call him?",
              options: ["é", "será", "seria", "era"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the advice",
          items: [
            { tokens: ["Se", "eu", "fosse", "você", ",", "iria", "à", "praia"], en: "If I were you, I'd go to the beach." },
            { tokens: ["Talvez", "você", "pudesse", "ligar", "para", "sua", "mãe"], en: "Maybe you could call your mother." },
            { tokens: ["Seria", "melhor", "não", "insistir", "agora"], en: "It would be better not to insist now." },
            { tokens: ["Eu", "recomendaria", "reservar", "com", "antecedência"], en: "I'd recommend booking in advance." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "If I were you, I'd take the train — it would be faster.",
          reference: "Se eu fosse você, pegaria o trem — seria mais rápido.",
          hint: "'Se eu fosse você' = if I were you. Conditional for both verbs: pegaria, seria.",
        },
        {
          type: "tip",
          heading: "Avoid the bare command when advising peers",
          body: "Telling a friend <em>«Faça isto!»</em> (Do this!) can come across as bossy. Soften it with <em>«Você poderia fazer isto»</em> (You could do this) or <em>«Seria bom você fazer…»</em> (It'd be good for you to…). The conditional shows you respect the other person's choice — exactly the tone Brazilians expect.",
          example: { l1: "Você poderia tentar de novo? (em vez de: Tente de novo!)", en: "Could you try again? (instead of: Try again!)" },
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "The conditional (futuro do pretérito) is formed with…",
        options: [
          "the present stem + -ava, -ávamos",
          "the full infinitive + -ia, -íamos, -iam",
          "the present stem + -ei, -emos",
          "ter + past participle",
        ],
        correct: 1,
      },
      {
        q: "Conditional of 'gostar' (eu) =",
        options: ["gosto", "gostava", "gostarei", "gostaria"],
        correct: 3,
      },
      {
        q: "Conditional of 'poder' (você) =",
        options: ["pode", "poderia", "poderá", "podia"],
        correct: 1,
      },
      {
        q: "Conditional of 'fazer' (eu) =",
        options: ["fazeria", "fazia", "faria", "farei"],
        correct: 2,
      },
      {
        q: "'You should study more' =",
        options: [
          "Você deve estudar mais.",
          "Você deveria estudar mais.",
          "Você deverá estudar mais.",
          "Você devia estudou mais.",
        ],
        correct: 1,
      },
      {
        q: "'Could you help me?' (formal, o senhor) =",
        options: [
          "Você pode me ajudar?",
          "O senhor me ajuda?",
          "O senhor poderia me ajudar?",
          "O senhor ajudaria me?",
        ],
        correct: 2,
      },
      {
        q: "The Brazilian school-grammar name for this tense is…",
        options: [
          "condicional",
          "futuro do pretérito",
          "pretérito perfeito",
          "imperfeito",
        ],
        correct: 1,
      },
      {
        q: "'If I were you, I'd go.' =",
        options: [
          "Se eu fosse você, vou.",
          "Se eu fosse você, iria.",
          "Se eu sou você, iria.",
          "Se eu era você, ia.",
        ],
        correct: 1,
      },
      {
        q: "In casual spoken Brazilian, 'eu gostaria' is often replaced by…",
        options: [
          "eu gosto",
          "eu queria (imperfect)",
          "eu gostarei",
          "eu gostei",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'I'd like a coffee, please.'",
        options: [
          "Eu quero um café, por favor.",
          "Eu gostaria de um café, por favor.",
          "Eu gostarei de um café, por favor.",
          "Eu gostei de um café, por favor.",
        ],
        correct: 1,
      },
    ],
  },
};
