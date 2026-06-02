import type { Unit } from "../../types";

export const UNIT_A_PROPOS_DE_MOI: Unit = {
  slug: "a-propos-de-moi",
  stage: 2,
  order: 6,
  icon: "🪪",
  title: "About me",
  tagline: "Nationalités, professions, famille, possessifs.",
  lessons: [
    {
      slug: "a-propos-nationalites-professions",
      title: "Nationalities, professions & family",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "Talking about yourself in French",
          body: [
            "Nationalities and professions in French agree in gender: <em>il est américain / elle est américaine</em>. Many nationalities just add -e for feminine: américain → américaine, espagnol → espagnole.",
            "Unlike English, French does NOT use an article before professions: <em>Je suis professeur</em> (not: 'Je suis un professeur'). This only applies after être — when describing someone with an adjective you still use the article.",
            "Family vocabulary is essential for small talk in France. French families are close-knit and family is a common conversation topic.",
          ],
          keyPoint: "No article before professions with être: 'Je suis médecin' (not 'un médecin').",
        },
        {
          type: "vocab",
          heading: "Nationalities",
          intro: "Masculine form first, then feminine. Nationalities are NOT capitalized in French.",
          items: [
            { l1: "américain / américaine", en: "American" },
            { l1: "français / française", en: "French" },
            { l1: "anglais / anglaise", en: "English" },
            { l1: "espagnol / espagnole", en: "Spanish" },
            { l1: "allemand / allemande", en: "German" },
            { l1: "italien / italienne", en: "Italian" },
            { l1: "chinois / chinoise", en: "Chinese" },
            { l1: "japonais / japonaise", en: "Japanese" },
          ],
        },
        {
          type: "vocab",
          heading: "Professions",
          items: [
            { l1: "professeur / professeure", en: "teacher", note: "both forms used" },
            { l1: "médecin", en: "doctor", note: "same for m/f in formal French" },
            { l1: "infirmier / infirmière", en: "nurse" },
            { l1: "ingénieur / ingénieure", en: "engineer" },
            { l1: "avocat / avocate", en: "lawyer" },
            { l1: "journaliste", en: "journalist", note: "same m/f" },
            { l1: "étudiant / étudiante", en: "student" },
            { l1: "retraité / retraitée", en: "retired" },
          ],
        },
        {
          type: "vocab",
          heading: "Family vocabulary",
          items: [
            { l1: "la famille", en: "the family" },
            { l1: "les parents", en: "the parents (or 'relatives')" },
            { l1: "le père / la mère", en: "the father / the mother" },
            { l1: "le frère / la sœur", en: "the brother / the sister" },
            { l1: "le fils / la fille", en: "the son / the daughter" },
            { l1: "le mari / la femme", en: "the husband / the wife" },
            { l1: "le petit-fils / la petite-fille", en: "the grandson / granddaughter" },
            { l1: "les enfants", en: "the children" },
          ],
        },
        {
          type: "dialogue",
          heading: "Talking about yourself",
          lines: [
            { speaker: "Lucie", l1: "Qu'est-ce que vous faites dans la vie?", en: "What do you do for a living?" },
            { speaker: "You", l1: "Je suis ingénieur. Et vous?", en: "I'm an engineer. And you?" },
            { speaker: "Lucie", l1: "Je suis journaliste. Vous avez de la famille à Paris?", en: "I'm a journalist. Do you have family in Paris?" },
            { speaker: "You", l1: "Non, mais mon frère habite à Lyon.", en: "No, but my brother lives in Lyon." },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I'm American. I'm a student and I have two sisters.",
          reference: "Je suis américain/e. Je suis étudiant/e et j'ai deux sœurs.",
          hint: "No article before profession. deux = two. sœurs = sisters",
        },
      ],
    },
    {
      slug: "a-propos-possessifs",
      title: "Possessives & describing people",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Possessive adjectives agree with the noun, not the owner",
          body: [
            "In French, the possessive adjective (<em>my, your, his, her</em>) agrees with the gender and number of the thing owned, not the gender of the owner. So <em>his mother</em> and <em>her mother</em> are both <em>sa mère</em>.",
            "Before a feminine noun starting with a vowel, use the masculine form: <em>mon amie</em> (my female friend) — not <em>ma amie</em>.",
          ],
          keyPoint: "Possessives agree with the NOUN: mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs.",
        },
        {
          type: "vocab",
          heading: "Possessive adjectives",
          items: [
            { l1: "mon père / ma mère / mes parents", en: "my father / my mother / my parents", note: "je → mon/ma/mes" },
            { l1: "ton frère / ta sœur / tes enfants", en: "your brother / your sister / your children", note: "tu → ton/ta/tes" },
            { l1: "son fils / sa fille / ses amis", en: "his/her son / his/her daughter / his/her friends", note: "il/elle → son/sa/ses" },
            { l1: "notre appartement / nos voisins", en: "our apartment / our neighbours", note: "nous → notre/nos" },
            { l1: "votre hôtel / vos bagages", en: "your hotel / your luggage", note: "vous → votre/vos" },
            { l1: "leur chat / leurs enfants", en: "their cat / their children", note: "ils → leur/leurs" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in the possessive",
          items: [
            { template: "C'est ___ frère. (my brother)", answer: "mon", en: "It's my brother.", options: ["ma", "mon", "mes", "son"] },
            { template: "Elle aime ___ voiture. (her car)", answer: "sa", en: "She loves her car.", options: ["son", "sa", "ses", "mon"] },
            { template: "___ parents sont à Paris. (our parents)", answer: "Nos", en: "Our parents are in Paris.", options: ["Notre", "Nos", "Votre", "Vos"] },
            { template: "Il a ___ chats. (his cats)", answer: "ses", en: "He has his cats.", options: ["son", "sa", "ses", "leur"] },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "How do you say 'her brother'?",
              options: ["sa frère", "son frère", "ses frères", "leur frère"],
              correct: 1,
              fb: "frère is masculine, so: son frère — regardless of whether the owner is male or female.",
            },
            {
              q: "'Mon amie' (my female friend) uses 'mon' because…",
              options: ["mon is used for both genders", "amie starts with a vowel, so ma → mon", "The speaker is male", "It's an exception"],
              correct: 1,
              fb: "Before a vowel, ma → mon to avoid vowel clash: 'ma amie' is awkward to say.",
            },
          ],
        },
      ],
    },
    {
      slug: "a-propos-age-description",
      title: "Age, appearance & personality",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "In French, you 'have' your age",
          body: [
            "To say how old you are, French uses <em>avoir</em>, not <em>être</em>: <em>J'ai trente ans</em> (literally 'I have thirty years'). Forgetting <em>ans</em> is a classic mistake — <em>J'ai trente</em> means nothing. The question is <em>Quel âge avez-vous?</em> / <em>Tu as quel âge?</em>",
            "To describe appearance, French uses <em>être</em> for general adjectives (<em>il est grand</em>) and <em>avoir</em> for features you 'have' (<em>elle a les yeux bleus</em> — she has blue eyes, <em>il a les cheveux bruns</em> — he has brown hair).",
            "Personality adjectives agree in gender like all adjectives. <em>Sympa</em> (nice) is invariable and extremely common — you'll hear it everywhere.",
          ],
          keyPoint: "Age: avoir + number + ans. Features: avoir les yeux/cheveux… General traits: être + adjective.",
        },
        {
          type: "vocab",
          heading: "Age & physical description",
          items: [
            { l1: "Quel âge avez-vous?", en: "How old are you? (formal)" },
            { l1: "J'ai vingt-cinq ans.", en: "I'm 25 (years old).", note: "Never omit 'ans'." },
            { l1: "grand / grande", en: "tall" },
            { l1: "petit / petite", en: "short" },
            { l1: "les cheveux", en: "the hair", note: "always plural in French" },
            { l1: "il a les cheveux bruns / blonds", en: "he has brown / blond hair" },
            { l1: "les yeux", en: "the eyes", note: "singular: un œil" },
            { l1: "elle a les yeux bleus / verts / marron", en: "she has blue / green / brown eyes", note: "'marron' is invariable" },
            { l1: "jeune / âgé(e)", en: "young / elderly" },
          ],
        },
        {
          type: "vocab",
          heading: "Personality",
          items: [
            { l1: "sympa", en: "nice, friendly", note: "invariable; very common (short for sympathique)" },
            { l1: "gentil / gentille", en: "kind" },
            { l1: "drôle", en: "funny", note: "same m/f" },
            { l1: "timide", en: "shy", note: "same m/f" },
            { l1: "sérieux / sérieuse", en: "serious" },
            { l1: "bavard / bavarde", en: "talkative, chatty" },
            { l1: "travailleur / travailleuse", en: "hard-working" },
            { l1: "calme", en: "calm, easy-going", note: "same m/f" },
          ],
        },
        {
          type: "dialogue",
          heading: "Describing your sister",
          lines: [
            { speaker: "Élodie", l1: "Tu as des frères et sœurs?", en: "Do you have brothers and sisters?" },
            { speaker: "You", l1: "Oui, j'ai une sœur. Elle a vingt ans.", en: "Yes, I have a sister. She's twenty." },
            { speaker: "Élodie", l1: "Elle est comment?", en: "What's she like?" },
            { speaker: "You", l1: "Elle est grande, elle a les cheveux blonds, et elle est très sympa.", en: "She's tall, she has blond hair, and she's very nice." },
            { speaker: "Élodie", l1: "Et elle est drôle comme toi?", en: "And is she funny like you?" },
            { speaker: "You", l1: "Plus drôle que moi!", en: "Funnier than me!" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in the blank",
          items: [
            { template: "J'___ trente ans. (have)", answer: "ai", en: "I'm thirty." },
            { template: "Elle a les yeux ___. (blue)", answer: "bleus", en: "She has blue eyes." },
            { template: "Mon frère est très ___. (kind, masc.)", answer: "gentil", en: "My brother is very kind." },
            { template: "Quel ___ avez-vous? (age)", answer: "âge", en: "How old are you?" },
          ],
        },
        {
          type: "translate",
          heading: "Translate",
          direction: "en-to-l1",
          prompt: "I'm thirty years old. I'm tall and I have brown eyes.",
          reference: "J'ai trente ans. Je suis grand/e et j'ai les yeux marron.",
          hint: "Age with avoir + ans; height with être; eyes with avoir. 'marron' doesn't change.",
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "How do you say 'I'm a doctor' in French?",
        options: ["Je suis un médecin.", "Je suis médecin.", "Je suis la médecin.", "Je médecin."],
        correct: 1,
      },
      {
        q: "Nationalities in French are…",
        options: ["Always capitalized", "Not capitalized", "Capitalized only for countries", "Capitalized only if feminine"],
        correct: 1,
      },
      {
        q: "'Sa mère' can mean…",
        options: ["his mother only", "her mother only", "both his mother and her mother", "their mother"],
        correct: 2,
      },
      {
        q: "How do you say 'my female friend' in French?",
        options: ["ma amie", "mon amie", "mes amie", "sa amie"],
        correct: 1,
      },
      {
        q: "'Nos parents' means…",
        options: ["his parents", "her parents", "our parents", "your parents"],
        correct: 2,
      },
      {
        q: "The feminine of 'ingénieur' is…",
        options: ["ingénieuresse", "ingéniera", "ingénieure", "same word"],
        correct: 2,
      },
    ],
  },
};
