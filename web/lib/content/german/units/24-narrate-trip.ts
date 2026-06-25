import type { Unit } from "../../types";

export const UNIT_NARRATE_TRIP: Unit = {
  slug: "narrate-trip",
  stage: 5,
  order: 24,
  icon: "📖",
  title: "Narrating a trip",
  tagline: "Combine tenses and separable verbs to tell your story.",
  badge: "core",
  lessons: [
    {
      slug: "narrate-trip-separable",
      title: "Separable verbs in present & Perfekt",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Verbs that split in two",
          body: [
            "Many German verbs have a <strong>separable prefix</strong>: ankommen (arrive), aufstehen (get up), einkaufen (shop), mitkommen (come along), abfahren (depart).",
            "In a main clause (present or Präteritum), the prefix <strong>flies to the end</strong>: <em>Ich stehe um sieben auf.</em> = I get up at seven. <em>Der Zug kommt um acht an.</em> = The train arrives at eight.",
            "In the Perfekt, the participle keeps the prefix and tucks <strong>-ge-</strong> in the middle: ankommen → <em>angekommen</em>, aufstehen → <em>aufgestanden</em>, einkaufen → <em>eingekauft</em>.",
            "The stress tells you it's separable: <strong>AN</strong>kommen, <strong>AUF</strong>stehen, <strong>EIN</strong>kaufen — the prefix is stressed.",
          ],
          keyPoint:
            "Separable: prefix to the end in present (stehe … auf). Perfekt = prefix + ge + stem: angekommen, aufgestanden, eingekauft.",
        },
        {
          type: "vocab",
          heading: "Useful separable verbs",
          intro: "Each shows the present (split) and the Perfekt participle.",
          items: [
            { l1: "ankommen — kommt an / ist angekommen", en: "to arrive", note: "Motion → sein in the Perfekt." },
            { l1: "aufstehen — steht auf / ist aufgestanden", en: "to get up", note: "Change of state → sein." },
            { l1: "einkaufen — kauft ein / hat eingekauft", en: "to shop / buy groceries" },
            { l1: "abfahren — fährt ab / ist abgefahren", en: "to depart", note: "Motion → sein." },
            { l1: "mitkommen — kommt mit / ist mitgekommen", en: "to come along", note: "Motion → sein." },
            { l1: "anrufen — ruft an / hat angerufen", en: "to call (phone)" },
            { l1: "einsteigen — steigt ein / ist eingestiegen", en: "to get on/in (transport)", note: "Motion → sein." },
            { l1: "aussteigen — steigt aus / ist ausgestiegen", en: "to get off/out", note: "Motion → sein." },
            { l1: "anfangen — fängt an / hat angefangen", en: "to begin / start" },
            { l1: "einladen — lädt ein / hat eingeladen", en: "to invite" },
          ],
        },
        {
          type: "fillBlank",
          heading: "Split it or stack it",
          items: [
            {
              template: "Ich ___ jeden Tag um sieben ___ . (aufstehen, present)",
              answer: "stehe / auf",
              en: "I get up at seven every day.",
              options: ["stehe / auf", "aufstehe / —", "stehe auf / —", "aufstehe / auf"],
            },
            {
              template: "Der Zug ___ um neun ___ . (ankommen, present)",
              answer: "kommt / an",
              en: "The train arrives at nine.",
              options: ["kommt / an", "ankommt / —", "kommt an / —", "ankommt / an"],
            },
            {
              template: "Wir ___ gestern im Supermarkt ___ . (einkaufen, Perfekt)",
              answer: "haben / eingekauft",
              en: "We shopped at the supermarket yesterday.",
              options: ["haben / eingekauft", "haben / einkauft", "sind / eingekauft", "haben / gekauft ein"],
            },
            {
              template: "Ich ___ um Mitternacht ___ . (ankommen, Perfekt)",
              answer: "bin / angekommen",
              en: "I arrived at midnight.",
              options: ["bin / angekommen", "habe / angekommen", "bin / ankommen", "bin / gekommen an"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "I got up early and the train arrived at nine.",
          reference: "Ich bin früh aufgestanden und der Zug ist um neun angekommen.",
          hint: "Both are separable + sein in the Perfekt: bin aufgestanden, ist angekommen.",
        },
      ],
    },
    {
      slug: "narrate-trip-sequencing",
      title: "Sequencing a past story",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "Connectors that move a story forward",
          body: [
            "Stringing events together makes you sound fluent. Use sequence words: <strong>zuerst</strong> (first), <strong>dann</strong> (then), <strong>danach</strong> (after that), <strong>später</strong> (later), <strong>am Ende</strong> / <strong>schließlich</strong> (finally).",
            "Watch the word order: <em>dann</em>, <em>danach</em> and <em>zuerst</em> at the front push the verb to second position — <em>Dann <strong>bin</strong> ich…</em>, not <em>Dann ich bin…</em>",
            "Tell the body of the story in the <strong>Perfekt</strong> (spoken past), choosing haben or sein per verb, and keep the participles at the end.",
          ],
          keyPoint:
            "Connectors: zuerst, dann, danach, später, schließlich. A connector in front → verb stays in 2nd position (Dann bin ich…).",
        },
        {
          type: "vocab",
          heading: "Sequence & connector words",
          items: [
            { l1: "zuerst", en: "first / at first" },
            { l1: "dann", en: "then" },
            { l1: "danach", en: "after that" },
            { l1: "später", en: "later" },
            { l1: "am Nachmittag", en: "in the afternoon" },
            { l1: "am Abend", en: "in the evening" },
            { l1: "schließlich", en: "finally / in the end" },
            { l1: "am Ende", en: "at the end" },
            { l1: "plötzlich", en: "suddenly" },
            { l1: "deshalb", en: "therefore / that's why", note: "Also flips the verb to 2nd position." },
          ],
        },
        {
          type: "dialogue",
          heading: "How was your first day in Berlin?",
          setup: "You recap your arrival day to a friend.",
          lines: [
            { speaker: "Friend", l1: "Wie war dein erster Tag in Berlin?", en: "How was your first day in Berlin?" },
            { speaker: "You", l1: "Toll! Zuerst bin ich am Flughafen angekommen.", en: "Great! First I arrived at the airport." },
            { speaker: "You", l1: "Dann bin ich mit der S-Bahn ins Zentrum gefahren.", en: "Then I took the S-Bahn into the centre." },
            { speaker: "You", l1: "Danach habe ich im Hostel eingecheckt und ein Bier getrunken.", en: "After that I checked in at the hostel and drank a beer." },
            { speaker: "Friend", l1: "Und am Abend?", en: "And in the evening?" },
            { speaker: "You", l1: "Schließlich bin ich am Brandenburger Tor spazieren gegangen.", en: "Finally I went for a walk at the Brandenburg Gate." },
          ],
        },
        {
          type: "orderWords",
          heading: "Build the sentence",
          intro: "Connector first means the verb is still in second position.",
          items: [
            { tokens: ["Zuerst", "bin", "ich", "aufgestanden"], en: "First I got up." },
            { tokens: ["Dann", "habe", "ich", "gefrühstückt"], en: "Then I had breakfast." },
            { tokens: ["Danach", "sind", "wir", "in", "die", "Stadt", "gefahren"], en: "After that we drove into town." },
            { tokens: ["Schließlich", "habe", "ich", "Freunde", "getroffen"], en: "Finally I met friends." },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "First I arrived, then I drank a coffee, and after that I met a friend.",
          reference: "Zuerst bin ich angekommen, dann habe ich einen Kaffee getrunken, und danach habe ich einen Freund getroffen.",
          hint: "Connector first → verb second: Zuerst bin ich…, dann habe ich…, danach habe ich…",
        },
      ],
    },
    {
      slug: "narrate-trip-future-plans",
      title: "Describing future travel plans",
      estMinutes: 8,
      pages: [
        {
          type: "intro",
          heading: "Now point the story forward",
          body: [
            "Future plans pull together everything from this stage: the present-as-future, <em>werden</em> for Futur I, modals (<em>will</em>, <em>möchte</em>, <em>muss</em>), and separable verbs (which still split: <em>Ich fahre morgen ab.</em>).",
            "Sequence your plans with the same connectors — <em>zuerst, dann, danach, schließlich</em> — but keep the verbs in the present or Futur I.",
            "Keep the bracket discipline: conjugated verb in second position, infinitive (or separable prefix) at the end.",
          ],
          keyPoint:
            "Future plans = present + time word OR werden + infinitive, plus modals. Separable verbs still split: fahre … ab.",
        },
        {
          type: "dialogue",
          heading: "Planning next week's trip",
          setup: "You outline your upcoming Berlin trip.",
          lines: [
            { speaker: "Friend", l1: "Was sind deine Pläne für nächste Woche?", en: "What are your plans for next week?" },
            { speaker: "You", l1: "Zuerst werde ich nach Berlin fliegen.", en: "First I'll fly to Berlin." },
            { speaker: "You", l1: "Dann möchte ich das Museum besuchen und durch die Stadt laufen.", en: "Then I'd like to visit the museum and walk through the city." },
            { speaker: "Friend", l1: "Musst du auch arbeiten?", en: "Do you have to work too?" },
            { speaker: "You", l1: "Ja, am Mittwoch muss ich an einer Konferenz teilnehmen.", en: "Yes, on Wednesday I have to take part in a conference." },
            { speaker: "You", l1: "Schließlich fahre ich am Sonntag wieder ab.", en: "Finally I'll depart again on Sunday." },
          ],
        },
        {
          type: "fillBlank",
          heading: "Fill in the future",
          items: [
            {
              template: "Nächste Woche ___ ich nach Berlin ___ . (fliegen, present-as-future)",
              answer: "fliege / —",
              en: "Next week I'm flying to Berlin.",
              options: ["fliege / —", "werde / fliegen", "fliege / ab", "bin / geflogen"],
            },
            {
              template: "Ich ___ das Museum ___ . (möchten / besuchen)",
              answer: "möchte / besuchen",
              en: "I'd like to visit the museum.",
              options: ["möchte / besuchen", "möchte / besucht", "will / besuchen ab", "möchte / besuche"],
            },
            {
              template: "Am Sonntag ___ ich wieder ___ . (abfahren, present)",
              answer: "fahre / ab",
              en: "On Sunday I'm departing again.",
              options: ["fahre / ab", "abfahre / —", "fahre ab / —", "werde / abfahren"],
            },
            {
              template: "Wir ___ nächstes Jahr eine Reise ___ . (werden / machen)",
              answer: "werden / machen",
              en: "Next year we will take a trip.",
              options: ["werden / machen", "wird / machen", "werden / gemacht", "werden / mache"],
            },
          ],
        },
        {
          type: "translate",
          heading: "Translate it",
          direction: "en-to-l1",
          prompt: "Tell what you did on your first day in Berlin: First I arrived, then I bought groceries, and finally I went for a walk.",
          reference: "Zuerst bin ich angekommen, dann habe ich eingekauft, und schließlich bin ich spazieren gegangen.",
          hint: "Mix helpers: bin angekommen (sein), habe eingekauft (haben), bin … gegangen (sein).",
        },
        {
          type: "checkpoint",
          heading: "Lesson check",
          questions: [
            {
              q: "Present tense of 'aufstehen' (ich) =",
              options: ["aufstehe", "ich stehe … auf", "ich aufstehe … auf", "ich habe aufgestanden"],
              correct: 1,
            },
            {
              q: "Perfekt participle of 'ankommen' =",
              options: ["ankommen", "gekommen an", "angekommen", "ankamen"],
              correct: 2,
            },
            {
              q: "After 'Dann', the verb goes in…",
              options: ["last position", "second position", "first position", "the end"],
              correct: 1,
            },
            {
              q: "'On Sunday I'm departing' =",
              options: ["Am Sonntag fahre ich ab.", "Am Sonntag ich abfahre.", "Am Sonntag abfahre ich.", "Am Sonntag ich fahre ab."],
              correct: 0,
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
        q: "In the present, a separable prefix goes…",
        options: ["right after the verb", "to the end of the clause", "before the subject", "it doesn't move"],
        correct: 1,
      },
      {
        q: "'I get up at seven' =",
        options: ["Ich aufstehe um sieben.", "Ich stehe um sieben auf.", "Ich stehe auf um sieben.", "Ich auf stehe um sieben."],
        correct: 1,
      },
      {
        q: "Perfekt participle of 'einkaufen' =",
        options: ["eingekauft", "gekauft ein", "einkauft", "geeinkauft"],
        correct: 0,
      },
      {
        q: "'The train arrived' =",
        options: ["Der Zug hat angekommen.", "Der Zug ist angekommen.", "Der Zug ist ankommen.", "Der Zug kommt an."],
        correct: 1,
      },
      {
        q: "Which connector means 'after that'?",
        options: ["zuerst", "danach", "schließlich", "plötzlich"],
        correct: 1,
      },
      {
        q: "'Dann ___ ich nach Hause gefahren.' — fill the helper:",
        options: ["habe", "bin", "war", "werde"],
        correct: 1,
      },
      {
        q: "Which word order is correct?",
        options: ["Zuerst ich bin angekommen.", "Zuerst bin ich angekommen.", "Zuerst angekommen ich bin.", "Ich zuerst bin angekommen."],
        correct: 1,
      },
      {
        q: "'I'd like to visit the museum' =",
        options: ["Ich möchte das Museum besuchen.", "Ich möchte besuchen das Museum.", "Ich will das Museum besucht.", "Ich möchte das Museum besuche."],
        correct: 0,
      },
      {
        q: "Perfekt participle of 'aufstehen' =",
        options: ["aufgestanden", "gestanden auf", "aufstanden", "geaufstanden"],
        correct: 0,
      },
      {
        q: "'Next week I'll fly to Berlin' (Futur I) =",
        options: ["Nächste Woche ich werde nach Berlin fliegen.", "Nächste Woche werde ich nach Berlin fliegen.", "Nächste Woche werde ich nach Berlin geflogen.", "Nächste Woche fliege ich werde nach Berlin."],
        correct: 1,
      },
    ],
  },
};
