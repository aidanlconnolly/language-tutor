import type { DailyRead } from "../../types";

export const READ_DIE_WOHNUNG: DailyRead = {
  slug: "die-wohnung",
  order: 2,
  stageUnlock: 1,
  difficulty: 4.5,
  titleL1: "Die Wohnung in Kreuzberg",
  titleEn: "The flat in Kreuzberg",
  intro:
    "Still all present tense, but a few sentences are a little longer. You'll meet the word 'Vermieter' (landlord) and some home vocab: keys, room, window. Watch how 'der/die/das' changes the article.",
  paragraphs: [
    {
      l1: "Ich nehme ein Taxi. Die Wohnung ist in Kreuzberg. Das Taxi hält vor einem alten Haus. Die Fassade ist gelb.",
      en: "I take a taxi. The flat is in Kreuzberg. The taxi stops in front of an old building. The facade is yellow.",
    },
    {
      l1: "Ein Mann wartet vor der Tür. Er ist der Vermieter. Er heißt Herr Schulz. Er ist freundlich und trägt eine Brille.",
      en: "A man is waiting in front of the door. He is the landlord. His name is Herr Schulz. He is friendly and wears glasses.",
    },
    {
      l1: "«Guten Tag! Sie sind der neue Mieter, oder?» «Ja, das bin ich.» Wir geben uns die Hand. «Kommen Sie, ich zeige Ihnen die Wohnung.»",
      en: "\"Good afternoon! You are the new tenant, right?\" \"Yes, that's me.\" We shake hands. \"Come, I'll show you the flat.\"",
    },
    {
      l1: "Wir gehen die Treppe hinauf. Es gibt keinen Aufzug. Die Wohnung ist im dritten Stock. Herr Schulz öffnet die Tür mit einem großen Schlüssel.",
      en: "We go up the stairs. There is no elevator. The flat is on the third floor. Herr Schulz opens the door with a big key.",
    },
    {
      l1: "Das Zimmer ist klein, aber hell. Es gibt ein Bett, einen Tisch und einen Stuhl. Das Fenster ist groß. Ich sehe einen Hof und einen Baum.",
      en: "The room is small, but bright. There is a bed, a table and a chair. The window is big. I see a courtyard and a tree.",
    },
    {
      l1: "«Die Küche ist hier», sagt Herr Schulz. «Das Bad ist dort. Das Internet funktioniert. Die Heizung auch.» Er gibt mir zwei Schlüssel.",
      en: "\"The kitchen is here,\" says Herr Schulz. \"The bathroom is there. The internet works. The heating too.\" He gives me two keys.",
    },
    {
      l1: "«Die Miete ist am ersten Tag im Monat fällig. Bei Problemen rufen Sie mich an. Meine Nummer hängt an der Tür.» «Vielen Dank, Herr Schulz.»",
      en: "\"The rent is due on the first day of the month. If there are problems, call me. My number is on the door.\" \"Thank you very much, Herr Schulz.\"",
    },
    {
      l1: "Er geht. Jetzt bin ich allein. Ich setze mich auf das Bett. Das Zimmer ist klein, aber es ist mein Zimmer. Ich lächle.",
      en: "He leaves. Now I am alone. I sit down on the bed. The room is small, but it is my room. I smile.",
    },
    {
      l1: "Draußen höre ich die Stadt: Autos, Stimmen, Musik. Kreuzberg ist laut und lebendig. Ich glaube, ich bleibe gern hier.",
      en: "Outside I hear the city: cars, voices, music. Kreuzberg is loud and lively. I think I'll be happy staying here.",
    },
  ],
  vocabSpotlight: [
    { l1: "die Wohnung", en: "the flat / apartment" },
    { l1: "der Vermieter", en: "the landlord" },
    { l1: "der Mieter", en: "the tenant" },
    { l1: "der Schlüssel", en: "the key" },
    { l1: "das Zimmer", en: "the room" },
    { l1: "das Fenster", en: "the window" },
    { l1: "die Miete", en: "the rent" },
    { l1: "die Treppe", en: "the stairs" },
  ],
  comprehension: [
    {
      q: "Which neighbourhood is the flat in?",
      options: ["Mitte", "Kreuzberg", "Prenzlauer Berg", "Charlottenburg"],
      correct: 1,
    },
    {
      q: "What is the landlord's name?",
      options: ["Herr Müller", "Herr Schmidt", "Herr Schulz", "Herr Weber"],
      correct: 2,
    },
    {
      q: "On which floor is the flat?",
      options: ["ground floor", "first floor", "second floor", "third floor"],
      correct: 3,
    },
    {
      q: "What does the narrator see from the window?",
      options: [
        "a park and a lake",
        "a courtyard and a tree",
        "a street and shops",
        "another building",
      ],
      correct: 1,
    },
    {
      q: "When is the rent due?",
      options: [
        "on the last day of the month",
        "on the fifteenth",
        "on the first day of the month",
        "every Friday",
      ],
      correct: 2,
    },
  ],
};
