import type { Unit } from "../../types";

export const UNIT_SUBJUNCTIVE: Unit = {
  slug: "subjunctive",
  stage: 8,
  order: 34,
  icon: "🤔",
  title: "Subjunctive / conjuntivo",
  tagline: "Espero que, quero que — common triggers (BR vs PT names).",
  badge: "advanced",
  lessons: [
    {
      slug: "subjunctive-why",
      title: "Why the subjunctive exists (and the triggers)",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "It's the mood of the unreal",
          body: [
            "The present subjunctive (<em>presente do subjuntivo</em>) is what Portuguese uses when you're NOT stating a plain fact — wishes, doubts, emotions, requests, and things that may or may not happen.",
            "English barely has it (\"I wish I <strong>were</strong> there\"), so it feels invisible. Portuguese, by contrast, leans on it constantly — especially after <em>que</em>.",
            "<strong>The que rule:</strong> if a verb of wish, doubt, emotion, or influence is followed by <em>que</em> and a NEW subject, you almost always need the subjunctive.",
            "<em>Sei que ele vem.</em> (indicative — a fact: I know he's coming) vs <em>Espero que ele venha.</em> (subjunctive — a hope).",
            "<strong>One subject, no que:</strong> if there's no change of subject, use the infinitive instead: <em>Quero sair</em> (I want to leave), but <em>Quero que você saia</em> (I want YOU to leave).",
          ],
          keyPoint:
            "Subjunctive = NOT a plain fact (wish, doubt, emotion, request). Triggered by que + new subject after those verbs. Sei que → fact (indicative). Espero que → hope (subjunctive).",
        },
        {
          type: "tip",
          heading: "Same tense, two names: subjuntivo vs conjuntivo",
          body: "Brazil calls this mood the <strong>subjuntivo</strong>; Portugal calls it the <strong>conjuntivo</strong>. It is the <em>same</em> tense with the <em>same</em> forms and the <em>same</em> uses — only the name differs. So a Brazilian grammar book says <em>presente do subjuntivo</em> and a Portuguese one says <em>presente do conjuntivo</em>, but <em>espero que ele venha</em> is identical in both. We teach the Brazilian name.",
          example: { l1: "BR: presente do subjuntivo · PT: presente do conjuntivo", en: "present subjunctive (one tense, two names)" },
        },
        {
          type: "vocab",
          heading: "Triggers — expressions that demand the subjunctive",
          intro: "After these, with que and a new subject, the subjunctive follows. Group them: wish/emotion, doubt, influence, impersonal.",
          items: [
            { l1: "espero que…", en: "I hope that…", note: "wish" },
            { l1: "tomara que…", en: "I really hope that… (very Brazilian)", note: "wish" },
            { l1: "oxalá…", en: "let's hope / God willing", note: "wish (more PT/literary)" },
            { l1: "é bom que…", en: "it's good that / you'd better…", note: "emotion" },
            { l1: "quero que…", en: "I want (someone) to…", note: "influence" },
            { l1: "peço que… / peça que…", en: "I ask that… / ask that…", note: "influence" },
            { l1: "duvido que…", en: "I doubt that…", note: "doubt" },
            { l1: "não acho que…", en: "I don't think that…", note: "doubt" },
            { l1: "talvez…", en: "maybe / perhaps", note: "doubt (often no que)" },
            { l1: "é importante que…", en: "it's important that…", note: "impersonal" },
            { l1: "embora / ainda que…", en: "although / even though", note: "concession" },
            { l1: "antes que / a menos que / contanto que…", en: "before / unless / provided that", note: "conjunction" },
          ],
        },
        {
          type: "tip",
          heading: "Fact vs opinion: indicative vs subjunctive",
          body: "<em>Sei que o Pedro é brasileiro.</em> = I know Pedro is Brazilian. → fact → indicative (<strong>é</strong>).<br><em>Não acho que o Pedro seja brasileiro.</em> = I don't think Pedro is Brazilian. → doubt → subjunctive (<strong>seja</strong>).<br><br>Notice that <em>acho que</em> (I think) on its own takes the indicative — <em>acho que ele é</em> — because you're fairly sure. Negate or doubt it (<em>não acho que…, duvido que…</em>) and Portuguese flips to the subjunctive.",
        },
        {
          type: "multipleChoice",
          heading: "Indicative or subjunctive?",
          questions: [
            {
              q: "'Sei que a Ana está aqui.' uses…",
              options: [
                "indicative — it's a fact",
                "subjunctive — uncertainty",
                "future tense",
                "conditional",
              ],
              correct: 0,
              fb: "Saber + que = stating a fact → indicative (está).",
            },
            {
              q: "'Espero que a Ana ___ aqui amanhã.' (estar)",
              options: ["está", "esteja", "estava", "estará"],
              correct: 1,
              fb: "Espero que → subjunctive → esteja.",
            },
            {
              q: "'Duvido que ele ___ a verdade.' (saber)",
              options: ["sabe", "saiba", "sabia", "saberá"],
              correct: 1,
              fb: "Duvido que → doubt → subjunctive → saiba.",
            },
            {
              q: "Which is a subjunctive trigger?",
              options: ["sei que", "vejo que", "quero que", "digo que"],
              correct: 2,
              fb: "Quero que (I want someone to) triggers the subjunctive; the others state facts.",
            },
          ],
        },
      ],
    },
    {
      slug: "subjunctive-formation",
      title: "How to form the present subjunctive",
      estMinutes: 11,
      pages: [
        {
          type: "intro",
          heading: "The trick: take the eu form, swap the vowel",
          body: [
            "Easiest route in Portuguese: start from the <strong>eu form of the present indicative</strong>, drop the <em>-o</em>, and add the opposite-family vowel.",
            "<strong>-ar verbs</strong> take an <strong>-e</strong>: falar → eu falo → <em>que eu fale</em>.",
            "<strong>-er and -ir verbs</strong> take an <strong>-a</strong>: comer → eu como → <em>que eu coma</em>; partir → eu parto → <em>que eu parta</em>.",
            "This eu-stem trick fixes most irregular stems for free: <em>fazer → faço → faça</em>, <em>dizer → digo → diga</em>, <em>ter → tenho → tenha</em>, <em>ver → vejo → veja</em>.",
            "Like in the indicative, <strong>você/ele/ela share one form</strong> and so do vocês/eles/elas — so eu and você look identical here.",
          ],
          keyPoint:
            "From the eu indicative, drop -o: -ar → add -e (fale), -er/-ir → add -a (coma, parta). Irregular stems carry over: faço→faça, tenho→tenha, vejo→veja.",
        },
        {
          type: "conjugation",
          heading: "Three families in the present subjunctive",
          verb: "falar / comer / partir",
          meaning: "present subjunctive",
          intro: "-ar takes -e; -er and -ir both take -a. você = eu form, vocês = eles form.",
          tenses: [
            {
              name: "Side-by-side",
              forms: [
                { person: "que eu", form: "fale / coma / parta", en: "I speak / eat / leave" },
                { person: "que você / ele / ela", form: "fale / coma / parta", en: "you / he / she" },
                { person: "que nós", form: "falemos / comamos / partamos", en: "we" },
                { person: "que vocês / eles / elas", form: "falem / comam / partam", en: "you all / they" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Spelling shifts to keep the sound",
          body: "Some -ar verbs change spelling so the consonant keeps its sound before <em>-e</em>. <em>-car → -que</em> (ficar → que eu <strong>fique</strong>), <em>-gar → -gue</em> (chegar → que eu <strong>chegue</strong>), <em>-çar → -ce</em> (começar → que eu <strong>comece</strong>). The sound stays the same; only the spelling adjusts.",
          example: { l1: "Espero que você chegue cedo.", en: "I hope you arrive early. (chegar → chegue)" },
        },
        {
          type: "conjugation",
          heading: "The irregular essentials",
          verb: "ser / estar / ir / haver / saber / dar / querer",
          meaning: "irregular present subjunctive",
          intro: "These don't follow the eu-stem trick — memorize them. They appear constantly after espero/quero/duvido que.",
          tenses: [
            {
              name: "Subjunctive (eu = você form shown first)",
              forms: [
                { person: "ser", form: "seja (seja, sejamos, sejam)", en: "I/you/he be" },
                { person: "estar", form: "esteja (esteja, estejamos, estejam)", en: "I/you/he be (state)" },
                { person: "ir", form: "vá (vá, vamos, vão)", en: "I/you/he go" },
                { person: "haver", form: "haja (haja, hajamos, hajam)", en: "there be / have (aux)" },
                { person: "saber", form: "saiba (saiba, saibamos, saibam)", en: "I/you/he know" },
                { person: "dar", form: "dê (dê, demos, deem)", en: "I/you/he give" },
                { person: "querer", form: "queira (queira, queiramos, queiram)", en: "I/you/he want" },
                { person: "poder", form: "possa (possa, possamos, possam)", en: "I/you/he can" },
                { person: "ter", form: "tenha (tenha, tenhamos, tenham)", en: "I/you/he have" },
                { person: "fazer", form: "faça (faça, façamos, façam)", en: "I/you/he do/make" },
              ],
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Subjunctive practice",
          items: [
            {
              template: "Espero que ele ___ em casa. (estar)",
              answer: "esteja",
              en: "I hope he's at home.",
              options: ["está", "esteja", "estava", "estará"],
            },
            {
              template: "Quero que você ___ feliz. (ser)",
              answer: "seja",
              en: "I want you to be happy.",
              options: ["é", "seja", "era", "será"],
            },
            {
              template: "É importante que vocês ___ cedo. (chegar)",
              answer: "cheguem",
              en: "It's important that you all arrive early.",
              options: ["chegam", "cheguem", "chegarão", "chegavam"],
            },
            {
              template: "Tomara que ___ sol amanhã. (fazer)",
              answer: "faça",
              en: "Let's hope it's sunny tomorrow.",
              options: ["faz", "faça", "fará", "fazia"],
            },
            {
              template: "Duvido que ela ___ a resposta. (saber)",
              answer: "saiba",
              en: "I doubt she knows the answer.",
              options: ["sabe", "saiba", "sabia", "saberá"],
            },
            {
              template: "Peço que você ___ comigo. (ir)",
              answer: "vá",
              en: "I ask that you go with me.",
              options: ["vai", "vá", "ia", "irá"],
            },
            {
              template: "É bom que nós ___ mais devagar. (comer)",
              answer: "comamos",
              en: "It's good that we eat more slowly.",
              options: ["comemos", "comamos", "comíamos", "comeremos"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it — form + trigger",
          direction: "en-to-l1",
          prompt: "I want you to speak Portuguese, and I hope you arrive early.",
          reference: "Quero que você fale português e espero que você chegue cedo.",
          hint: "Quero que + new subject → subjunctive (fale). Espero que → chegue (chegar → chegue, spelling shift).",
        },
      ],
    },
    {
      slug: "subjunctive-triggers-future",
      title: "Triggers in action + a peek at the future subjunctive",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Grouping the triggers so they stick",
          body: [
            "Most subjunctive triggers fall into four buckets. Learn one example per bucket and you can extend it.",
            "<strong>Wish / emotion:</strong> espero que, tomara que, oxalá, é bom que, gosto que, tenho medo (de) que.",
            "<strong>Doubt:</strong> duvido que, não acho que, não é verdade que, talvez (often with no <em>que</em>: <em>talvez ele venha</em>).",
            "<strong>Influence / request:</strong> quero que, peço que, preciso que, recomendo que, deixe que.",
            "<strong>Impersonal:</strong> é importante que, é preciso que, é possível que, é melhor que.",
          ],
          keyPoint:
            "Four buckets: wish/emotion (espero que), doubt (duvido que / talvez), influence (quero que / peço que), impersonal (é importante que). All + new subject → subjunctive.",
        },
        {
          type: "tip",
          heading: "Portuguese also has a FUTURE subjunctive — and uses it a lot",
          body: "Unlike Spanish or Italian, Portuguese keeps a living <strong>future subjunctive</strong> for things that haven't happened yet, especially after <em>quando</em> (when) and <em>se</em> (if). <em>Quando eu <strong>for</strong> ao Brasil…</em> (When I go to Brazil…), <em>Se você <strong>quiser</strong>…</em> (If you want…), <em>Assim que ele <strong>chegar</strong>…</em> (As soon as he arrives…). For regular verbs it looks like the infinitive: <em>falar → quando eu falar</em>. We'll drill it fully later — for now, just recognize that <em>quando/se + a future event</em> takes this form, not the present.",
          example: { l1: "Quando eu for ao Rio, te aviso. · Se você quiser, a gente vai junto.", en: "When I go to Rio, I'll let you know. · If you want, we'll go together." },
        },
        {
          type: "dialogue",
          heading: "Subjunctive in real conversation",
          setup: "Two friends planning a weekend.",
          lines: [
            { speaker: "Bia", l1: "Você acha que o Lucas vem no sábado?", en: "Do you think Lucas is coming on Saturday?" },
            { speaker: "You", l1: "Não acho que ele venha. Tomara que sim, mas ele está muito ocupado.", en: "I don't think he'll come. I really hope so, but he's very busy." },
            { speaker: "Bia", l1: "É importante que a gente decida hoje. Quero que todo mundo saiba o plano.", en: "It's important that we decide today. I want everyone to know the plan." },
            { speaker: "You", l1: "Tá. Quando ele responder, eu te aviso. Talvez ele consiga vir.", en: "Okay. When he replies, I'll let you know. Maybe he can come." },
            { speaker: "Bia", l1: "Espero que dê tudo certo!", en: "I hope it all works out!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Pick the right subjunctive",
          items: [
            {
              template: "Espero que vocês ___ bem. (estar)",
              answer: "estejam",
              en: "I hope you all are well.",
              options: ["estão", "estejam", "estarão", "estavam"],
            },
            {
              template: "Embora ___ cansado, ele sai. (estar — ele)",
              answer: "esteja",
              en: "Although he's tired, he's going out.",
              options: ["está", "esteja", "estava", "estará"],
            },
            {
              template: "Antes que você ___ , me liga. (ir)",
              answer: "vá",
              en: "Before you go, call me.",
              options: ["vai", "vá", "ia", "irá"],
            },
            {
              template: "Não acho que ___ verdade. (ser)",
              answer: "seja",
              en: "I don't think it's true.",
              options: ["é", "seja", "era", "será"],
            },
            {
              template: "Quero que vocês ___ agora. (ir)",
              answer: "vão",
              en: "I want you all to go now.",
              options: ["vão", "vá", "iam", "irão"],
            },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Drag the words into a natural Portuguese order.",
          items: [
            { tokens: ["Espero", "que", "você", "venha", "amanhã"], en: "I hope you come tomorrow." },
            { tokens: ["Quero", "que", "ele", "fale", "comigo"], en: "I want him to talk to me." },
            { tokens: ["É", "importante", "que", "nós", "cheguemos", "cedo"], en: "It's important that we arrive early." },
            { tokens: ["Talvez", "ela", "saiba", "a", "resposta"], en: "Maybe she knows the answer." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it — triggers",
          direction: "en-to-l1",
          prompt: "I doubt he knows, but I hope everything works out.",
          reference: "Duvido que ele saiba, mas espero que dê tudo certo.",
          hint: "Duvido que → saiba (saber). Espero que + dar → dê. \"works out\" = dar certo.",
        },
        {
          type: "tip",
          heading: "Same forms whether you call it subjuntivo or conjuntivo",
          body: "A reminder before the quiz: everything you learned here is identical in Brazil and Portugal. Brazilians say <em>subjuntivo</em>, Portuguese say <em>conjuntivo</em>, but <em>espero que ele venha</em>, <em>quero que você fale</em>, and <em>quando eu for</em> are word-for-word the same. Different name, one grammar.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "The subjunctive is the mood of…",
        options: [
          "plain factual statements",
          "wishes, doubt, emotion, and requests",
          "completed past actions",
          "fixed future predictions",
        ],
        correct: 1,
      },
      {
        q: "Which triggers the subjunctive?",
        options: ["sei que", "vejo que", "espero que", "digo que"],
        correct: 2,
      },
      {
        q: "Present subjunctive of an -ar verb 'falar' (que eu) =",
        options: ["falo", "fala", "fale", "falar"],
        correct: 2,
      },
      {
        q: "Present subjunctive of an -er verb 'comer' (que eu) =",
        options: ["como", "come", "coma", "comer"],
        correct: 2,
      },
      {
        q: "Present subjunctive of 'ser' (que eu) =",
        options: ["sou", "seja", "fosse", "era"],
        correct: 1,
      },
      {
        q: "Present subjunctive of 'estar' (que ele) =",
        options: ["está", "esteja", "estava", "estará"],
        correct: 1,
      },
      {
        q: "Present subjunctive of 'ir' (que você) =",
        options: ["vai", "vá", "ia", "irá"],
        correct: 1,
      },
      {
        q: "Brazil calls this mood the subjuntivo. Portugal calls it the…",
        options: ["condicional", "conjuntivo", "indicativo", "infinitivo"],
        correct: 1,
      },
      {
        q: "'Sei que ele vem.' (I know he's coming) uses the indicative because…",
        options: [
          "saber + que states a fact, so no subjunctive",
          "it's a wish",
          "vir is irregular",
          "que always blocks the subjunctive",
        ],
        correct: 0,
      },
      {
        q: "Which uses the FUTURE subjunctive (an unhappened event)?",
        options: [
          "Espero que ele venha.",
          "Quando eu for ao Brasil, te aviso.",
          "Duvido que ele saiba.",
          "Quero que você fale.",
        ],
        correct: 1,
      },
      {
        q: "Translate: 'I want you to speak.'",
        options: [
          "Quero que você fala.",
          "Quero que você fale.",
          "Quero você falar.",
          "Quero que você falará.",
        ],
        correct: 1,
      },
    ],
  },
};
