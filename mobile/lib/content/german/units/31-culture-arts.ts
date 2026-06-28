import type { Unit } from "../../types";

export const UNIT_CULTURE_ARTS: Unit = {
  slug: "culture-arts",
  stage: 7,
  order: 31,
  icon: "🖼️",
  title: "Museums & the arts",
  tagline: "Museumsinsel, das Theater, Hast du … gesehen?",
  badge: "culture",
  lessons: [
    {
      slug: "culture-arts-museums",
      title: "Museums & galleries",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Berlin is a museum city",
          body: [
            "Berlin's <strong>Museumsinsel</strong> ('Museum Island') is a UNESCO World Heritage cluster of five world-class museums on a single island in the Spree — the Pergamonmuseum and the bust of Nefertiti among them.",
            "An <strong>Ausstellung</strong> is an exhibition. Many shows are temporary, so you'll ask <em>Wie lange läuft die Ausstellung?</em> ('How long is the exhibition running?').",
            "Watch for <strong>freier Eintritt</strong> ('free admission'). Many Berlin museums are free on certain evenings or for under-18s. Otherwise you buy a <strong>Ticket</strong> or <strong>die Eintrittskarte</strong>.",
          ],
          tip: {
            label: "Museumssonntag",
            body: "On the first Sunday of each month, dozens of Berlin's state museums offer <em>freier Eintritt</em> — the <strong>Museumssonntag</strong>. Book a free time slot online; it fills up fast.",
          },
          keyPoint:
            "die Ausstellung = exhibition, freier Eintritt = free admission, die Eintrittskarte = ticket.",
        },
        {
          type: "vocab",
          heading: "Museum words",
          items: [
            { l1: "das Museum", en: "the museum", note: "Plural: die Museen." },
            { l1: "die Museumsinsel", en: "Museum Island", note: "Berlin's UNESCO museum cluster." },
            { l1: "die Ausstellung", en: "the exhibition", note: "Plural: die Ausstellungen." },
            { l1: "die Eintrittskarte", en: "the entry ticket", note: "Plural: die Eintrittskarten. Also just 'das Ticket'." },
            { l1: "der Eintritt", en: "the admission / entry" },
            { l1: "freier Eintritt", en: "free admission", note: "frei = free (of charge)." },
            { l1: "die Galerie", en: "the gallery", note: "Plural: die Galerien." },
            { l1: "das Gemälde", en: "the painting", note: "Neuter. Plural: die Gemälde." },
            { l1: "die Führung", en: "the guided tour", note: "Plural: die Führungen." },
            { l1: "geöffnet / geschlossen", en: "open / closed" },
            { l1: "Wie lange läuft die Ausstellung?", en: "How long is the exhibition running?" },
          ],
        },
        {
          type: "dialogue",
          heading: "At the museum ticket desk",
          setup: "You buy tickets for the Pergamonmuseum.",
          lines: [
            { speaker: "You", l1: "Guten Tag, zwei Eintrittskarten, bitte.", en: "Hello, two tickets, please." },
            { speaker: "Kassierer", l1: "Gern. Für Studierende ist der Eintritt frei. Haben Sie einen Ausweis?", en: "Gladly. For students admission is free. Do you have an ID?" },
            { speaker: "You", l1: "Ja, hier. Wie lange läuft die Ausstellung noch?", en: "Yes, here. How much longer is the exhibition running?" },
            { speaker: "Kassierer", l1: "Bis Ende September. Eine Führung beginnt um 14 Uhr.", en: "Until the end of September. A guided tour starts at 2 p.m." },
            { speaker: "You", l1: "Perfekt, danke. Wo ist die Nofretete?", en: "Perfect, thanks. Where is the Nefertiti bust?" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill the gap",
          items: [
            {
              template: "Heute ist ___ Eintritt — wir müssen nichts bezahlen!",
              answer: "freier",
              en: "Today admission is free — we don't have to pay anything!",
              options: ["freier", "geschlossen", "geöffnet", "teuer"],
            },
            {
              template: "Die ___ über Picasso läuft bis Mai.",
              answer: "Ausstellung",
              en: "The Picasso exhibition runs until May.",
              options: ["Ausstellung", "Eintrittskarte", "Führung", "Galerie"],
            },
            {
              template: "Zwei ___ , bitte. Wir sind keine Studierenden.",
              answer: "Eintrittskarten",
              en: "Two tickets, please. We're not students.",
              options: ["Eintrittskarten", "Museen", "Gemälde", "Führungen"],
            },
            {
              template: "Montags ist das Museum leider ___ .",
              answer: "geschlossen",
              en: "On Mondays the museum is unfortunately closed.",
              options: ["geschlossen", "geöffnet", "frei", "spät"],
            },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Museum check",
          questions: [
            {
              q: "'freier Eintritt' means…",
              options: ["the exit", "free admission", "a guided tour", "a painting"],
              correct: 1,
            },
            {
              q: "Berlin's UNESCO cluster of five museums is called…",
              options: ["die Galerie", "die Museumsinsel", "die Ausstellung", "das Gemälde"],
              correct: 1,
            },
            {
              q: "'die Führung' is…",
              options: ["the ticket", "the guided tour", "the painting", "the exit"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      slug: "culture-arts-theatre-cinema",
      title: "Theatre, cinema & music",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "An evening out, in German",
          body: [
            "To say where you went, German uses <strong>in + dative</strong> for these venues, often contracted: <em>im Theater</em>, <em>im Kino</em>, <em>im Konzert</em> (in + dem → im).",
            "Past tense in conversation is the <strong>Perfekt</strong>: <em>Ich war gestern im Theater</em> ('I was at the theatre yesterday') uses <em>war</em> (was), while a full action uses <em>haben/sein</em> + participle: <em>Ich habe einen Film gesehen</em> ('I watched a film').",
            "Note <strong>OmU</strong> on cinema listings — <em>Original mit Untertiteln</em> ('original with subtitles'). Berlin shows many films in English with German subtitles this way.",
          ],
          keyPoint:
            "Use in+dative for venues: im Theater / im Kino / im Konzert. Say where you were with 'Ich war…' and what you did with 'Ich habe … gesehen'.",
        },
        {
          type: "vocab",
          heading: "Going out vocabulary",
          items: [
            { l1: "das Theater", en: "the theatre", note: "im Theater = at the theatre (in + dem)." },
            { l1: "das Kino", en: "the cinema", note: "im Kino = at the cinema." },
            { l1: "das Konzert", en: "the concert", note: "Plural: die Konzerte." },
            { l1: "der Film", en: "the film", note: "Plural: die Filme." },
            { l1: "das Stück", en: "the play (theatre piece)", note: "das Theaterstück. Plural: die Stücke." },
            { l1: "die Oper", en: "the opera" },
            { l1: "die Vorstellung", en: "the performance / showing", note: "Plural: die Vorstellungen." },
            { l1: "Ich war gestern im Kino.", en: "I was at the cinema yesterday." },
            { l1: "Ich habe einen Film gesehen.", en: "I watched a film.", note: "Perfekt of sehen → gesehen." },
            { l1: "die Karte", en: "the ticket", note: "Same word as for a map; context decides. Plural: die Karten." },
            { l1: "OmU", en: "original with subtitles", note: "Original mit Untertiteln." },
          ],
        },
        {
          type: "conjugation",
          heading: "Saying what you saw — sehen in the Perfekt",
          verb: "sehen",
          meaning: "to see / to watch",
          intro: "In conversation, the past is the Perfekt: haben + the participle 'gesehen'.",
          tenses: [
            {
              name: "Perfekt (spoken past) of sehen",
              forms: [
                { person: "ich habe … gesehen", form: "habe gesehen", en: "I saw / I have seen" },
                { person: "du hast … gesehen", form: "hast gesehen", en: "you saw (informal)" },
                { person: "er/sie/es hat … gesehen", form: "hat gesehen", en: "he/she/it saw" },
                { person: "wir haben … gesehen", form: "haben gesehen", en: "we saw" },
                { person: "ihr habt … gesehen", form: "habt gesehen", en: "you all saw" },
                { person: "sie/Sie haben … gesehen", form: "haben gesehen", en: "they / you (formal) saw" },
              ],
            },
            {
              name: "Saying where you were (sein → war)",
              forms: [
                { person: "ich war im Kino", form: "war", en: "I was at the cinema" },
                { person: "wir waren im Theater", form: "waren", en: "we were at the theatre" },
              ],
            },
          ],
        },
        {
          type: "dialogue",
          heading: "Catching up on Monday",
          setup: "Two colleagues compare weekends.",
          lines: [
            { speaker: "Anja", l1: "Was hast du am Wochenende gemacht?", en: "What did you do on the weekend?" },
            { speaker: "Ben", l1: "Ich war im Kino. Ich habe einen Film auf Englisch gesehen, OmU.", en: "I was at the cinema. I watched a film in English, with subtitles." },
            { speaker: "Anja", l1: "Schön! Ich war im Theater, ein Stück von Brecht.", en: "Nice! I was at the theatre, a Brecht play." },
            { speaker: "Ben", l1: "Und? Wie war die Vorstellung?", en: "And? How was the performance?" },
            { speaker: "Anja", l1: "Wirklich gut. Die Karten waren auch nicht teuer.", en: "Really good. The tickets weren't expensive either." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Talk about your evening",
          items: [
            {
              template: "Ich war gestern ___ Kino.",
              answer: "im",
              en: "I was at the cinema yesterday.",
              options: ["im", "in", "am", "auf"],
            },
            {
              template: "Wir haben ein tolles Konzert ___ .",
              answer: "gesehen",
              en: "We saw a great concert.",
              options: ["gesehen", "sehen", "sieht", "gesehene"],
            },
            {
              template: "Das ___ von Brecht hat mir gefallen.",
              answer: "Stück",
              en: "The Brecht play pleased me (I liked it).",
              options: ["Stück", "Kino", "Karte", "Eintritt"],
            },
            {
              template: "Der Film läuft im Original mit Untertiteln, also ___ .",
              answer: "OmU",
              en: "The film runs in the original with subtitles, so OmU.",
              options: ["OmU", "Oper", "Kino", "Karte"],
            },
          ],
        },
      ],
    },
    {
      slug: "culture-arts-opinions",
      title: "Giving opinions on what you've seen",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Did you like it?",
          body: [
            "The everyday way to say you liked something is <strong>gefallen</strong>, which works backwards from English: the thing pleases <em>you</em>. <em>Der Film hat mir gefallen.</em> = literally 'The film pleased me' = 'I liked the film.'",
            "The 'me' is in the dative — <strong>mir</strong>. Ask others with <em>Hat es dir gefallen?</em> ('Did you like it?').",
            "Soften criticism the German way with <strong>ein bisschen</strong> ('a bit'): <em>ein bisschen langweilig</em> ('a bit boring') is politer than a flat <em>langweilig</em>.",
          ],
          keyPoint:
            "gefallen works backwards: 'Es hat mir gefallen' = I liked it. Soften critique with 'ein bisschen' (a bit).",
        },
        {
          type: "vocab",
          heading: "Opinion words",
          items: [
            { l1: "Es hat mir gefallen.", en: "I liked it.", note: "gefallen takes the dative: mir = to me." },
            { l1: "Hat es dir gefallen?", en: "Did you like it?" },
            { l1: "Es war spannend.", en: "It was exciting / gripping." },
            { l1: "Es war ein bisschen langweilig.", en: "It was a bit boring.", note: "ein bisschen = a bit (softener)." },
            { l1: "Es war beeindruckend.", en: "It was impressive." },
            { l1: "Es hat mir gut gefallen.", en: "I really liked it." },
            { l1: "Es hat mir nicht so gefallen.", en: "I didn't like it that much.", note: "Polite way to say you disliked it." },
            { l1: "Wie hast du es gefunden?", en: "What did you think of it?", note: "lit. 'how did you find it?'" },
            { l1: "der Schauspieler / die Schauspielerin", en: "the actor / actress" },
            { l1: "die Musik war toll", en: "the music was great" },
          ],
        },
        {
          type: "tip",
          heading: "'gefallen' flips the subject",
          body: "English: <em>I like the film</em> (I = subject). German flips it: the film is the subject, and the person is in the dative. <strong>Der Film gefällt mir</strong> = 'The film pleases me.' In the past: <strong>Der Film hat mir gefallen.</strong> Whatever you liked is the grammatical subject, so its gender drives the verb.",
          example: { l1: "Die Ausstellung hat mir sehr gefallen.", en: "I really liked the exhibition." },
        },
        {
          type: "dialogue",
          heading: "After the concert",
          setup: "Leaving a concert hall, comparing notes.",
          lines: [
            { speaker: "You", l1: "Und? Wie hast du das Konzert gefunden?", en: "So? What did you think of the concert?" },
            { speaker: "Mira", l1: "Es hat mir gut gefallen. Die Musik war toll!", en: "I really liked it. The music was great!" },
            { speaker: "You", l1: "Ja, beeindruckend. Der erste Teil war aber ein bisschen lang.", en: "Yes, impressive. The first part was a bit long, though." },
            { speaker: "Mira", l1: "Stimmt. Und der Sänger? Hat er dir gefallen?", en: "True. And the singer? Did you like him?" },
            { speaker: "You", l1: "Sehr. Insgesamt ein schöner Abend.", en: "Very much. All in all a lovely evening." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Share your opinion",
          items: [
            {
              template: "Der Film hat ___ gut gefallen.",
              answer: "mir",
              en: "I really liked the film.",
              options: ["mir", "ich", "mich", "mein"],
            },
            {
              template: "Das Stück war ein bisschen ___ .",
              answer: "langweilig",
              en: "The play was a bit boring.",
              options: ["langweilig", "spannend", "toll", "frei"],
            },
            {
              template: "Hat es ___ gefallen?",
              answer: "dir",
              en: "Did you like it?",
              options: ["dir", "du", "dich", "dein"],
            },
            {
              template: "Wie hast du die Ausstellung ___ ?",
              answer: "gefunden",
              en: "What did you think of the exhibition?",
              options: ["gefunden", "finden", "findet", "gefallen"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I was at the theatre yesterday. I liked the play, but it was a bit long.",
          reference: "Ich war gestern im Theater. Das Stück hat mir gefallen, aber es war ein bisschen lang.",
          hint: "Use 'Ich war … im Theater' and 'hat mir gefallen' for 'I liked'.",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "'Es hat mir gefallen.' means…",
              options: ["It fell on me.", "I liked it.", "I missed it.", "It surprised me."],
              correct: 1,
            },
            {
              q: "With 'gefallen', the person who likes something is in the…",
              options: ["nominative", "dative ('mir', 'dir')", "accusative", "genitive"],
              correct: 1,
            },
            {
              q: "Politely say a film was a bit boring:",
              options: ["Es war toll.", "Es war ein bisschen langweilig.", "Es war beeindruckend.", "Es war spannend."],
              correct: 1,
            },
          ],
        },
      ],
    },
  ],
  checkpoint: {
    passingPct: 80,
    questions: [
      {
        q: "'freier Eintritt' means…",
        options: ["the exit", "free admission", "a tour", "a painting"],
        correct: 1,
      },
      {
        q: "Berlin's UNESCO cluster of five museums is the…",
        options: ["Galerie", "Museumsinsel", "Ausstellung", "Vorstellung"],
        correct: 1,
      },
      {
        q: "'die Ausstellung' is…",
        options: ["the ticket", "the exhibition", "the tour", "the performance"],
        correct: 1,
      },
      {
        q: "How do you say 'I was at the cinema'?",
        options: ["Ich war im Kino.", "Ich bin Kino.", "Ich war am Kino.", "Ich habe Kino."],
        correct: 0,
      },
      {
        q: "'Ich habe einen Film gesehen.' is in the…",
        options: ["future", "Perfekt (spoken past)", "present", "imperative"],
        correct: 1,
      },
      {
        q: "'OmU' on a cinema listing means…",
        options: ["sold out", "original with subtitles", "matinee only", "open-air"],
        correct: 1,
      },
      {
        q: "'Es hat mir gefallen.' means…",
        options: ["It fell on me.", "I liked it.", "I forgot it.", "It bored me."],
        correct: 1,
      },
      {
        q: "With 'gefallen', the person is in the…",
        options: ["nominative", "dative (mir/dir)", "accusative", "genitive"],
        correct: 1,
      },
      {
        q: "Politely say something was a bit boring:",
        options: ["Es war spannend.", "Es war ein bisschen langweilig.", "Es war toll.", "Es war beeindruckend."],
        correct: 1,
      },
      {
        q: "Translate: 'I liked the play.'",
        options: [
          "Das Stück hat mir gefallen.",
          "Ich gefalle das Stück.",
          "Das Stück mag mich.",
          "Ich habe das Stück gefallen.",
        ],
        correct: 0,
      },
    ],
  },
};
