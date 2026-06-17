import type { Unit } from "../../types";

export const UNIT_PRETERITO_PERFEITO: Unit = {
  slug: "preterito-perfeito",
  stage: 5,
  order: 20,
  icon: "📅",
  title: "Pretérito perfeito",
  tagline: "Comi, fui, fiz — completed past actions.",
  badge: "core",
  lessons: [
    {
      slug: "preterito-perfeito-regulars",
      title: "Regular verbs in the past: -ar, -er, -ir",
      estMinutes: 11,
      pages: [
        {
          type: "intro",
          heading: "The everyday past tense",
          body: [
            "The <strong>pretérito perfeito</strong> is the simple past — one word, not a compound. <em>Falei</em> = I spoke / I talked. <em>Comi</em> = I ate. It's the default way to talk about finished actions in both Brazil and Portugal.",
            "There's no helper verb. You take the stem and add the past endings. Compare the present and the past: <em>eu falo</em> (I speak) → <em>eu falei</em> (I spoke).",
            "Three families, three endings. The good news: <strong>-er</strong> and <strong>-ir</strong> verbs share the same set of past endings, so you really only learn two patterns.",
            "We default to <strong>você</strong> for \"you\" — it takes the same form as ele/ela, so one ending covers \"you\", \"he\", and \"she\".",
          ],
          keyPoint:
            "Simple past = one word. -ar: -ei/-ou/-amos/-aram · -er & -ir: -i/-eu(-iu)/-emos(-imos)/-eram.",
        },
        {
          type: "conjugation",
          heading: "falar (to speak) — regular -ar",
          verb: "falar",
          meaning: "to speak",
          intro: "Note the accent on falei and the -ou ending for você/ele/ela.",
          tenses: [
            {
              name: "Pretérito perfeito",
              forms: [
                { person: "eu", form: "falei", en: "I spoke" },
                { person: "você / ele / ela", form: "falou", en: "you/he/she spoke" },
                { person: "nós", form: "falamos", en: "we spoke" },
                { person: "vocês / eles / elas", form: "falaram", en: "you all/they spoke" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "comer (to eat) — regular -er",
          verb: "comer",
          meaning: "to eat",
          intro: "The você/ele/ela form ends in -eu: comeu.",
          tenses: [
            {
              name: "Pretérito perfeito",
              forms: [
                { person: "eu", form: "comi", en: "I ate" },
                { person: "você / ele / ela", form: "comeu", en: "you/he/she ate" },
                { person: "nós", form: "comemos", en: "we ate" },
                { person: "vocês / eles / elas", form: "comeram", en: "you all/they ate" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "abrir (to open) — regular -ir",
          verb: "abrir",
          meaning: "to open",
          intro: "Almost identical to -er; only the você/ele/ela form differs: abriu (-iu).",
          tenses: [
            {
              name: "Pretérito perfeito",
              forms: [
                { person: "eu", form: "abri", en: "I opened" },
                { person: "você / ele / ela", form: "abriu", en: "you/he/she opened" },
                { person: "nós", form: "abrimos", en: "we opened" },
                { person: "vocês / eles / elas", form: "abriram", en: "you all/they opened" },
              ],
            },
          ],
        },
        {
          type: "tip",
          heading: "Brazilian uses the simple past where English wants \"have\"",
          body: "English often reaches for the present perfect — \"I <em>have</em> already eaten,\" \"I <em>have</em> finished.\" Brazilian Portuguese just uses the simple <strong>pretérito perfeito</strong>: <em>Já comi</em> (\"I already ate\"), <em>Já terminei</em> (\"I finished\"). Don't try to build a \"have + participle\" compound — it exists in Portuguese but means something different (a repeated/ongoing action). For a single completed action, one word is all you need.",
          example: { l1: "Já comi, obrigado.", en: "I've already eaten, thanks." },
        },
        {
          type: "vocab",
          heading: "Regular verbs in the past",
          intro: "Each follows its family pattern. Watch the eu and você/ele/ela forms — those carry the meaning.",
          items: [
            { l1: "falar → falei / falou", en: "spoke" },
            { l1: "trabalhar → trabalhei / trabalhou", en: "worked" },
            { l1: "morar → morei / morou", en: "lived (somewhere)" },
            { l1: "comprar → comprei / comprou", en: "bought" },
            { l1: "estudar → estudei / estudou", en: "studied" },
            { l1: "comer → comi / comeu", en: "ate" },
            { l1: "beber → bebi / bebeu", en: "drank" },
            { l1: "vender → vendi / vendeu", en: "sold" },
            { l1: "abrir → abri / abriu", en: "opened" },
            { l1: "partir → parti / partiu", en: "left / departed" },
            { l1: "decidir → decidi / decidiu", en: "decided" },
            { l1: "dormir → dormi / dormiu", en: "slept" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Build the simple past",
          items: [
            {
              template: "Ontem eu ___ com a Maria. (falar)",
              answer: "falei",
              en: "Yesterday I spoke with Maria.",
              options: ["falei", "falo", "falou", "falava"],
            },
            {
              template: "Você ___ a porta? (abrir)",
              answer: "abriu",
              en: "Did you open the door?",
              options: ["abre", "abriu", "abri", "abriram"],
            },
            {
              template: "Nós ___ pizza no almoço. (comer)",
              answer: "comemos",
              en: "We ate pizza at lunch.",
              options: ["comemos", "comeram", "comi", "comeu"],
            },
            {
              template: "Eles ___ muito ontem à noite. (trabalhar)",
              answer: "trabalharam",
              en: "They worked a lot last night.",
              options: ["trabalham", "trabalharam", "trabalhamos", "trabalhei"],
            },
            {
              template: "Eu ___ um carro novo. (comprar)",
              answer: "comprei",
              en: "I bought a new car.",
              options: ["compro", "comprei", "comprou", "compraram"],
            },
            {
              template: "Ela ___ oito horas. (dormir)",
              answer: "dormiu",
              en: "She slept eight hours.",
              options: ["dorme", "dormi", "dormiu", "dormiram"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it — regular verbs",
          direction: "en-to-l1",
          prompt: "Yesterday I worked, ate at home, and slept eight hours.",
          reference: "Ontem eu trabalhei, comi em casa e dormi oito horas.",
          hint: "Three families: trabalhar → trabalhei (-ar), comer → comi (-er), dormir → dormi (-ir).",
        },
      ],
    },
    {
      slug: "preterito-perfeito-irregulars",
      title: "The key irregulars: fui, fiz, tive, disse",
      estMinutes: 12,
      pages: [
        {
          type: "intro",
          heading: "A handful of irregulars carry most conversations",
          body: [
            "The most common verbs are irregular in the past — there's no rule, you memorize the stems. The good part: a small set covers almost everything you'll say.",
            "The single most important one: <strong>fui</strong> works for BOTH <em>ser</em> (to be) and <em>ir</em> (to go). <em>Fui médico</em> = I was a doctor. <em>Fui ao Rio</em> = I went to Rio. Context tells them apart.",
            "Most irregular stems end in a stressed vowel for eu, and add <strong>-emos</strong>/<strong>-eram</strong> for nós/eles: <em>fiz, fez, fizemos, fizeram</em>.",
          ],
          keyPoint:
            "fui = was AND went. Top irregulars: fiz (fazer), tive (ter), estive (estar), disse (dizer), vim (vir), pude (poder), quis (querer).",
        },
        {
          type: "conjugation",
          heading: "ser & ir — both are 'fui'",
          verb: "ser / ir",
          meaning: "to be / to go (same past!)",
          intro: "These two verbs share the exact same pretérito perfeito.",
          tenses: [
            {
              name: "Pretérito perfeito",
              forms: [
                { person: "eu", form: "fui", en: "I was / I went" },
                { person: "você / ele / ela", form: "foi", en: "you/he/she was / went" },
                { person: "nós", form: "fomos", en: "we were / went" },
                { person: "vocês / eles / elas", form: "foram", en: "you all/they were / went" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "fazer (to do/make) — irregular",
          verb: "fazer",
          meaning: "to do / to make",
          intro: "Note the irregular stem fiz-/fez- and the accent-free endings.",
          tenses: [
            {
              name: "Pretérito perfeito",
              forms: [
                { person: "eu", form: "fiz", en: "I did/made" },
                { person: "você / ele / ela", form: "fez", en: "you/he/she did/made" },
                { person: "nós", form: "fizemos", en: "we did/made" },
                { person: "vocês / eles / elas", form: "fizeram", en: "you all/they did/made" },
              ],
            },
          ],
        },
        {
          type: "conjugation",
          heading: "ter (to have) — irregular",
          verb: "ter",
          meaning: "to have",
          intro: "tive / teve — and estar follows the same shape (estive / esteve).",
          tenses: [
            {
              name: "Pretérito perfeito",
              forms: [
                { person: "eu", form: "tive", en: "I had" },
                { person: "você / ele / ela", form: "teve", en: "you/he/she had" },
                { person: "nós", form: "tivemos", en: "we had" },
                { person: "vocês / eles / elas", form: "tiveram", en: "you all/they had" },
              ],
            },
          ],
        },
        {
          type: "vocab",
          heading: "Top irregulars — eu & você/ele/ela forms",
          intro: "Memorize these two forms for each; nós/eles follow the same stem (+ -emos/-eram or -mos/-ram).",
          items: [
            { l1: "ser/ir → fui / foi", en: "was / went" },
            { l1: "fazer → fiz / fez", en: "did, made" },
            { l1: "ter → tive / teve", en: "had" },
            { l1: "estar → estive / esteve", en: "was (location/state)" },
            { l1: "dizer → disse / disse", en: "said" },
            { l1: "vir → vim / veio", en: "came" },
            { l1: "poder → pude / pôde", en: "could / was able to" },
            { l1: "querer → quis / quis", en: "wanted" },
            { l1: "ver → vi / viu", en: "saw" },
            { l1: "dar → dei / deu", en: "gave" },
            { l1: "pôr → pus / pôs", en: "put / placed" },
            { l1: "saber → soube / soube", en: "knew / found out" },
          ],
        },
        {
          type: "tip",
          heading: "Portugal's \"tu\" past forms",
          body: "We teach <em>você</em> (Brazilian default), but European Portuguese leans on <em>tu</em>, which has its own past ending: usually <strong>-ste</strong>. So <em>fazer</em> → <strong>tu fizeste</strong> (you did), <em>falar</em> → <strong>tu falaste</strong>, <em>ir/ser</em> → <strong>tu foste</strong>, <em>comer</em> → <strong>tu comeste</strong>. Recognize these when you hear or read European Portuguese; in Brazil you'll say <em>você fez, você falou, você foi</em>.",
          example: { l1: "BR: Você fez o jantar? · PT: Tu fizeste o jantar?", en: "Did you make dinner?" },
        },
        {
          type: "multipleChoice",
          heading: "Irregular check",
          questions: [
            {
              q: "'I went to Rio' =",
              options: ["Eu vou ao Rio", "Eu fui ao Rio", "Eu fiz ao Rio", "Eu era ao Rio"],
              correct: 1,
              fb: "ir in the past = fui. Eu fui ao Rio.",
            },
            {
              q: "The eu form of 'fazer' in the past is…",
              options: ["fazei", "fiz", "fez", "fazi"],
              correct: 1,
              fb: "Irregular stem: eu fiz, você/ele/ela fez.",
            },
            {
              q: "'She had a bad day' uses…",
              options: ["tem", "teve", "tinha", "tiveram"],
              correct: 1,
              fb: "ter past, você/ele/ela = teve. Ela teve um dia ruim.",
            },
          ],
        },
        {
          type: "fillBlank",
          heading: "Irregular past drill",
          items: [
            {
              template: "Eu ___ ao mercado de manhã. (ir)",
              answer: "fui",
              en: "I went to the market in the morning.",
              options: ["fui", "vou", "fiz", "fomos"],
            },
            {
              template: "Você ___ o que para o jantar? (fazer)",
              answer: "fez",
              en: "What did you make for dinner?",
              options: ["faz", "fez", "fiz", "fizeram"],
            },
            {
              template: "Nós ___ uma reunião difícil ontem. (ter)",
              answer: "tivemos",
              en: "We had a difficult meeting yesterday.",
              options: ["temos", "tivemos", "tiveram", "teve"],
            },
            {
              template: "Ela me ___ a verdade. (dizer)",
              answer: "disse",
              en: "She told me the truth.",
              options: ["diz", "disse", "disseram", "digo"],
            },
            {
              template: "Eu não ___ ir à festa. (poder)",
              answer: "pude",
              en: "I couldn't go to the party.",
              options: ["posso", "pude", "pôde", "puderam"],
            },
            {
              template: "Eles ___ ontem de São Paulo. (vir)",
              answer: "vieram",
              en: "They came yesterday from São Paulo.",
              options: ["vêm", "vieram", "vim", "veio"],
            },
            {
              template: "Eu ___ no Rio por dois dias. (estar)",
              answer: "estive",
              en: "I was in Rio for two days.",
              options: ["estou", "estive", "esteve", "estiveram"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it — irregulars",
          direction: "en-to-l1",
          prompt: "Yesterday I went to the market, made lunch, and had a coffee with a friend.",
          reference: "Ontem eu fui ao mercado, fiz o almoço e tomei um café com um amigo.",
          hint: "ir → fui, fazer → fiz, tomar (regular -ar) → tomei. \"to the market\" = ao mercado.",
        },
      ],
    },
    {
      slug: "preterito-perfeito-time",
      title: "Time markers & telling a story",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Anchor the past with a time word",
          body: [
            "These markers tell your listener you're in the past:",
            "<em>ontem</em> = yesterday · <em>anteontem</em> = day before yesterday · <em>ontem à noite</em> = last night · <em>de manhã / hoje cedo</em> = this morning · <em>na semana passada</em> = last week · <em>no mês passado</em> = last month · <em>no ano passado</em> = last year · <em>em 2010</em> = in 2010 · <em>há dois dias</em> = two days ago.",
            "To say \"___ ago,\" Brazilians use <strong>há</strong> + duration: <em>há dois dias</em> (two days ago), <em>há uma semana</em> (a week ago). In casual speech you'll also hear <em>dois dias atrás</em>.",
          ],
          keyPoint:
            "ontem · na semana passada · no ano passado · em 2010 · há dois dias (= two days ago).",
        },
        {
          type: "vocab",
          heading: "Past-time vocabulary",
          items: [
            { l1: "ontem", en: "yesterday" },
            { l1: "ontem à noite", en: "last night" },
            { l1: "anteontem", en: "day before yesterday" },
            { l1: "hoje cedo / de manhã", en: "this morning / earlier today" },
            { l1: "há pouco", en: "a little while ago" },
            { l1: "há dois dias", en: "two days ago" },
            { l1: "na semana passada", en: "last week" },
            { l1: "no mês passado", en: "last month" },
            { l1: "no ano passado", en: "last year" },
            { l1: "em 2010", en: "in 2010" },
            { l1: "já", en: "already" },
            { l1: "ainda não", en: "not yet" },
            { l1: "depois", en: "afterwards / then" },
            { l1: "primeiro", en: "first" },
          ],
        },
        {
          type: "tip",
          heading: "Já = already; ainda não = not yet",
          body: "With the simple past, <em>já</em> and <em>ainda não</em> handle what English does with \"have/haven't yet.\" <em>Você já almoçou?</em> = \"Have you had lunch yet?\" Answer: <em>Já, sim.</em> (\"Yes, already.\") or <em>Ainda não.</em> (\"Not yet.\"). No compound tense needed.",
          example: { l1: "— Você já pagou a conta? — Ainda não.", en: "— Have you paid the bill yet? — Not yet." },
        },
        {
          type: "dialogue",
          heading: "How was your day?",
          setup: "Catching up with a friend after work.",
          lines: [
            { speaker: "Bruna", l1: "E aí, como foi o seu dia?", en: "Hey, how was your day?" },
            { speaker: "You", l1: "Foi corrido! De manhã eu trabalhei e depois fui ao banco.", en: "It was busy! In the morning I worked and then I went to the bank." },
            { speaker: "Bruna", l1: "E almoçou onde?", en: "And where did you have lunch?" },
            { speaker: "You", l1: "Comi um sanduíche rápido perto do escritório. E você, o que fez?", en: "I ate a quick sandwich near the office. And you, what did you do?" },
            { speaker: "Bruna", l1: "Tive três reuniões e ainda não almocei!", en: "I had three meetings and I haven't had lunch yet!" },
            { speaker: "You", l1: "Nossa! Ontem você também trabalhou até tarde?", en: "Wow! Did you work late yesterday too?" },
            { speaker: "Bruna", l1: "Trabalhei. Na semana passada foi a mesma coisa.", en: "I did. Last week was the same thing." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the past sentence",
          intro: "Drag the words into a natural Brazilian order.",
          items: [
            { tokens: ["Ontem", "eu", "fui", "ao", "cinema"], en: "Yesterday I went to the cinema." },
            { tokens: ["Na", "semana", "passada", "nós", "viajamos"], en: "Last week we traveled." },
            { tokens: ["Você", "já", "comeu?"], en: "Have you eaten yet?" },
            { tokens: ["Eu", "morei", "em", "Lisboa", "em", "2010"], en: "I lived in Lisbon in 2010." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Time + past tense",
          items: [
            {
              template: "___ à noite eu vi um filme ótimo.",
              answer: "Ontem",
              en: "Last night I saw a great film.",
              options: ["Ontem", "Amanhã", "Agora", "Hoje"],
            },
            {
              template: "Eu cheguei ___ dois dias.",
              answer: "há",
              en: "I arrived two days ago.",
              options: ["há", "em", "para", "desde"],
            },
            {
              template: "Você ___ terminou o trabalho?",
              answer: "já",
              en: "Have you already finished the work?",
              options: ["já", "ainda", "depois", "agora"],
            },
            {
              template: "No ano ___ eu morei no Brasil.",
              answer: "passado",
              en: "Last year I lived in Brazil.",
              options: ["passado", "próximo", "que vem", "atrás"],
            },
            {
              template: "Eu ___ não falei com ele.",
              answer: "ainda",
              en: "I haven't spoken with him yet.",
              options: ["já", "ainda", "depois", "primeiro"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Final translation challenge",
          direction: "en-to-l1",
          prompt: "Last week I went to São Paulo, I saw an old friend, and we ate at a restaurant.",
          reference: "Na semana passada eu fui a São Paulo, vi um amigo antigo e comemos num restaurante.",
          hint: "ir → fui, ver → vi, comer → comemos (nós). \"last week\" = na semana passada.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "The pretérito perfeito is…",
        options: [
          "a one-word simple past for completed actions",
          "estar + gerund",
          "ter + past participle",
          "the present tense",
        ],
        correct: 0,
      },
      {
        q: "The eu form of 'falar' in the past is…",
        options: ["falo", "falei", "falou", "falava"],
        correct: 1,
      },
      {
        q: "The você/ele/ela form of 'comer' in the past is…",
        options: ["come", "comi", "comeu", "comeram"],
        correct: 2,
      },
      {
        q: "'I went to Rio' =",
        options: ["Eu vou ao Rio", "Eu fui ao Rio", "Eu era ao Rio", "Eu ia ao Rio"],
        correct: 1,
      },
      {
        q: "Which verb shares its past form with 'ser'?",
        options: ["estar", "ter", "ir", "fazer"],
        correct: 2,
      },
      {
        q: "The eu form of 'fazer' in the past is…",
        options: ["fez", "fiz", "fazi", "fazei"],
        correct: 1,
      },
      {
        q: "'We had a meeting' =",
        options: [
          "Nós temos uma reunião.",
          "Nós tivemos uma reunião.",
          "Nós teve uma reunião.",
          "Nós tinha uma reunião.",
        ],
        correct: 1,
      },
      {
        q: "'Two days ago' =",
        options: ["em dois dias", "há dois dias", "dois dias para", "depois dois dias"],
        correct: 1,
      },
      {
        q: "'She said the truth' =",
        options: [
          "Ela diz a verdade.",
          "Ela disse a verdade.",
          "Ela disseram a verdade.",
          "Ela dizia a verdade.",
        ],
        correct: 1,
      },
      {
        q: "'Have you eaten yet?' (Brazilian) =",
        options: [
          "Você tem comido?",
          "Você já comeu?",
          "Você está comendo?",
          "Você come já?",
        ],
        correct: 1,
      },
    ],
  },
};
