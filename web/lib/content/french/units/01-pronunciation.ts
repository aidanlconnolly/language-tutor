import type { Unit } from "../../types";

export const UNIT_PRONUNCIATION: Unit = {
  slug: "pronunciation",
  stage: 1,
  order: 1,
  icon: "🔤",
  title: "Pronunciation & sounds",
  tagline: "Nasal vowels, silent letters, r, u/eu/ou — the 20-minute French sound foundation.",
  badge: "core",
  lessons: [
    {
      slug: "pronunciation-vowels",
      title: "French vowels & the silent letter rule",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "French spelling looks like English — the sounds don't",
          body: [
            "French uses the Latin alphabet, and many words look familiar: <em>table, hotel, animal, rose, nature</em>. But the pronunciation is different enough that you can't just sound it out with English rules.",
            "The single most important rule: <strong>French final consonants are usually silent</strong>. The 's' in <em>les</em>, the 't' in <em>petit</em>, the 'd' in <em>grand</em> — all silent. This is why French sounds smooth and flowing rather than staccato.",
            "French has <strong>accent marks</strong> that change vowel quality or distinguish words: é (closed e), è/ê (open e), à (distinguishes <em>a</em> vs <em>à</em>), ç (soft c), and ù (only in <em>où</em>).",
          ],
          tip: {
            label: "The silent-letter promise",
            body: "Once you internalize 'final consonants are silent,' you'll stop pronouncing the 's' in plurals and the 't' in verb forms. It makes French flow naturally.",
          },
        },
        {
          type: "vocab",
          heading: "The five base vowels",
          intro: "French vowels are pure — no gliding. Hold each one steady.",
          items: [
            { l1: "a", en: "like 'a' in 'father' — short and open", note: "chat, table, café" },
            { l1: "e", en: "varies: silent at end of word, like 'uh' mid-word", note: "le, me, petit" },
            { l1: "i", en: "like 'ee' in 'see'", note: "si, midi, Paris" },
            { l1: "o", en: "like 'o' in 'go' — round your lips", note: "mot, photo, beau" },
            { l1: "u", en: "no English equivalent: say 'ee' but round your lips", note: "tu, sur, du" },
          ],
        },
        {
          type: "tip",
          heading: "The French 'u' — your first real challenge",
          body: "English has no sound like French <strong>u</strong>. Say the word 'see' and hold the 'ee' sound. Now, without moving your tongue, slowly round your lips as if you're going to whistle. That rounded-'ee' is French <em>u</em>.",
          example: { l1: "Tu as une voiture.", en: "You have a car. (tü — round your lips on that 'u')" },
        },
        {
          type: "vocab",
          heading: "Complex vowel sounds",
          intro: "These combinations are common — learn them as single sounds.",
          items: [
            { l1: "eu / œu", en: "like 'ur' in 'fur' — round lips slightly", note: "peur, cœur, feu" },
            { l1: "ou", en: "like 'oo' in 'food' — fully round lips", note: "vous, tout, rouge" },
            { l1: "ai / ei", en: "like 'e' in 'bed' — open e", note: "mais, lait, neige" },
            { l1: "au / eau", en: "like 'o' in 'go'", note: "beau, eau, chaud" },
            { l1: "oi", en: "like 'wa' — two sounds fused", note: "moi, voir, trois" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Quick check",
          questions: [
            {
              q: "How is French 'u' (as in 'tu') pronounced?",
              options: ["Like 'oo' in 'food'", "Like 'ee' with rounded lips", "Like 'uh'", "Like English 'you'"],
              correct: 1,
              fb: "French 'u' is 'ee' with rounded lips — no English equivalent. It's different from 'ou' (oo).",
            },
            {
              q: "Which letter is silent in 'petit' (small)?",
              options: ["p", "e", "t", "i"],
              correct: 2,
              fb: "Final consonants are usually silent in French. 'Petit' = puh-TEE, not puh-TEET.",
            },
            {
              q: "How is 'eau' (water) pronounced?",
              options: ["ee-ah-oo", "Oh (like English 'go')", "Ay", "Uh"],
              correct: 1,
              fb: "'eau' = 'oh' — same as 'au'. Water in French is 'eau' = OH.",
            },
          ],
        },
      ],
    },
    {
      slug: "pronunciation-consonants",
      title: "Consonants, nasal vowels & liaison",
      estMinutes: 10,
      pages: [
        {
          type: "intro",
          heading: "The nasal vowels — French's most distinctive sounds",
          body: [
            "French has four nasal vowels: sounds made by letting air pass through your nose. There's no good English equivalent. They appear when a vowel is followed by 'm' or 'n' in the same syllable.",
            "<strong>an/en</strong> = like 'on' in 'on' but nasalized. <strong>in/ain/ein</strong> = nasalized 'a' (like 'an' in 'sang'). <strong>on</strong> = nasalized 'oh'. <strong>un</strong> = nasalized 'uh'.",
            "The key: when the 'm' or 'n' is followed by another consonant or ends the word, nasalize the vowel and <em>don't</em> pronounce the m/n itself. <em>Bon</em> = BOH (nasal), not BON.",
          ],
          keyPoint: "an/en = nasal 'ah'. in/ain = nasal 'a'. on = nasal 'oh'. un = nasal 'uh'. Don't pronounce the n itself.",
        },
        {
          type: "vocab",
          heading: "The four nasal vowels",
          items: [
            { l1: "an / en", en: "nasal 'ah' — open mouth, air through nose", note: "dans, enfant, France" },
            { l1: "in / ain / ein", en: "nasal 'a' (as in 'sang')", note: "vin, main, plein" },
            { l1: "on", en: "nasal 'oh'", note: "bon, maison, pont" },
            { l1: "un / eum", en: "nasal 'uh' (in careful speech)", note: "un, parfum, lundi" },
          ],
        },
        {
          type: "tip",
          heading: "The French R — a gentle gargle",
          body: "The French <strong>r</strong> is not rolled (like Spanish) and not English. It's made in the back of the throat, like a very soft gargling sound. Try saying 'ah' and then let your tongue drop back while air passes over it. In practice, most learners approximate it well enough after a little practice.",
          example: { l1: "Je voudrais un café, s'il vous plaît.", en: "I would like a coffee, please. (Focus on the r in 'voudrais' and 'café'.)" },
        },
        {
          type: "intro",
          heading: "Liaison — linking words together",
          body: [
            "When a word ending in a normally-silent consonant is followed by a word beginning with a vowel or silent h, the consonant is pronounced. This is called <strong>liaison</strong>.",
            "<em>Vous avez</em> → the 's' links: VOO-zah-VAY. <em>Les enfants</em> → LAY-zon-FON. <em>Nous avons</em> → NOO-zah-VON.",
            "Liaison is mandatory in some contexts (articles + noun: <em>les amis</em>), optional in others, and actually forbidden between a noun and verb (<em>les enfants arrivent</em> — no liaison after <em>enfants</em>). For now, focus on the mandatory cases.",
          ],
          keyPoint: "Liaison: final silent consonant becomes audible before a vowel sound. les amis = LAY-zah-MEE.",
        },
        {
          type: "listen",
          heading: "Nasal vs non-nasal",
          items: [
            { l1: "vin", en: "wine (nasal in)", options: ["vin", "vain", "vent", "vins"], correct: 0 },
            { l1: "bon", en: "good (nasal on)", options: ["bonne", "bon", "beau", "ban"], correct: 1 },
            { l1: "dans", en: "in (nasal an)", options: ["den", "donc", "dans", "dons"], correct: 2 },
            { l1: "brun", en: "brown (nasal un)", options: ["brin", "brun", "bran", "brûn"], correct: 1 },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Sound check",
          questions: [
            {
              q: "In 'les amis' (the friends), what happens to the 's' in 'les'?",
              options: ["It's silent", "It's pronounced as 'z' (liaison)", "It's pronounced as 's'", "It disappears"],
              correct: 1,
              fb: "Liaison: 'les amis' = LAY-zah-MEE. The 's' becomes a 'z' sound before a vowel.",
            },
            {
              q: "In 'bon' (good), what happens to the 'n'?",
              options: ["Pronounced clearly", "Nasalizes the vowel — 'n' itself is silent", "Both pronounced", "Dropped completely"],
              correct: 1,
              fb: "Nasal vowel: the 'on' is nasalized, but the 'n' itself disappears into the nasal quality.",
            },
            {
              q: "How is 'ou' different from 'u'?",
              options: ["They sound the same", "'ou' = oo (round lips fully), 'u' = ee with rounded lips", "'u' = oo, 'ou' = ee rounded", "Both = English 'oo'"],
              correct: 1,
              fb: "'ou' (vous, tout) = oo. 'u' (tu, sur) = ee with very rounded lips. They're very different — keep them apart.",
            },
          ],
        },
      ],
    },
    {
      slug: "pronunciation-rhythm",
      title: "Rhythm, stress & reading aloud",
      estMinutes: 9,
      pages: [
        {
          type: "intro",
          heading: "French rhythm is even — stress lands at the end",
          body: [
            "English stresses one syllable hard and swallows the rest (<em>PHOtograph, phoTOgrapher</em>). French does the opposite: every syllable gets roughly <strong>equal length and weight</strong>, and a very light stress falls on the <em>last</em> syllable of a word or group.",
            "This is why <em>important</em> sounds like an-por-TAN in French rather than im-POR-tant. Resist the urge to hammer one syllable — keep them flat and even, then lean gently on the final one.",
            "French also links words into breath-groups. You don't pause between words the way English does; a whole phrase like <em>je ne sais pas</em> runs together as one smooth unit (jeun-say-PA).",
          ],
          keyPoint: "Equal-weight syllables, light stress on the last one of each group. Words flow together, not chopped apart.",
        },
        {
          type: "tip",
          heading: "The 'e muet' — the disappearing e",
          body: "An unstressed <strong>e</strong> with no accent is often dropped in speech, especially in fast or casual French. <em>Je</em> becomes 'j', <em>le</em> shrinks, and <em>petit</em> can sound like 'p'tit'. You'll hear <em>je ne sais pas</em> collapse all the way to 'chais pas'. You don't have to drop them yet — but recognizing it helps you understand spoken French.",
          example: { l1: "Je ne sais pas. → 'Chais pas.'", en: "I don't know. (the e's vanish in casual speech)" },
        },
        {
          type: "vocab",
          heading: "Letter combinations that aren't intuitive",
          intro: "These spellings map to one sound each. Learn them and most words become readable.",
          items: [
            { l1: "ch", en: "like 'sh' in 'ship'", note: "chat, chocolat, riche" },
            { l1: "gn", en: "like 'ny' in 'canyon'", note: "montagne, champagne, ligne" },
            { l1: "qu", en: "like 'k' — the u is silent", note: "qui, quatre, musique" },
            { l1: "ph", en: "like 'f'", note: "photo, téléphone, pharmacie" },
            { l1: "th", en: "like plain 't' — never the English 'th'", note: "thé, théâtre, maths" },
            { l1: "ill", en: "usually like 'y' in 'yes'", note: "fille, billet, travailler" },
            { l1: "h", en: "always silent", note: "homme, heure, hôtel" },
          ],
        },
        {
          type: "tip",
          heading: "h muet vs h aspiré",
          body: "Every French <strong>h</strong> is silent, but there are two kinds. The <em>h muet</em> (mute h) allows elision and liaison: <em>l'homme</em>, <em>les hommes</em> (LAY-zom). The <em>h aspiré</em> (aspirated h) blocks them: <em>le héros</em> (not l'héros), <em>les héros</em> with no liaison. There's no rule — it's marked in dictionaries — but most common words use the mute h.",
          example: { l1: "l'hôtel vs le hibou", en: "the hotel (elision) vs the owl (no elision — h aspiré)" },
        },
        {
          type: "pronounce",
          heading: "Read these aloud",
          intro: "Keep syllables even, lean on the last one, and apply the letter rules above.",
          items: [
            { l1: "la pharmacie", en: "the pharmacy", tip: "ph = f: far-ma-SEE" },
            { l1: "une bouteille de champagne", en: "a bottle of champagne", tip: "ill = y, gn = ny" },
            { l1: "Qu'est-ce que c'est?", en: "What is it?", tip: "qu = k, run it together: kess-kuh-SAY" },
            { l1: "le théâtre", en: "the theatre", tip: "th = t: tay-AHTR" },
            { l1: "Je voudrais un billet.", en: "I'd like a ticket.", tip: "ill = y: bee-YAY" },
          ],
        },
        {
          type: "multipleChoice",
          heading: "Reading check",
          questions: [
            {
              q: "Where does the light stress fall in a French word or phrase?",
              options: ["On the first syllable", "On the last syllable", "On the loudest vowel", "There's no stress at all"],
              correct: 1,
              fb: "French puts a gentle stress on the final syllable of a group and keeps the rest even.",
            },
            {
              q: "How is 'gn' pronounced in 'montagne'?",
              options: ["Hard g + n", "Like 'ny' in canyon", "Silent", "Like 'ng'"],
              correct: 1,
              fb: "'gn' = 'ny': mon-TA-ny. Same sound as Spanish ñ.",
            },
            {
              q: "Why can you say 'l'homme' but not 'l'héros'?",
              options: ["héros is plural", "homme has an h muet (allows elision); héros has h aspiré (blocks it)", "It's a spelling mistake", "héros is feminine"],
              correct: 1,
              fb: "h muet allows elision/liaison; h aspiré blocks both. It's lexical — dictionaries mark it.",
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
        q: "French 'u' (in 'tu') is pronounced like…",
        options: ["'oo' in food", "'ee' with rounded lips", "'uh'", "English 'you'"],
        correct: 1,
      },
      {
        q: "The final 't' in 'petit' is…",
        options: ["Pronounced like English t", "Silent", "Like a soft d", "Nasalized"],
        correct: 1,
      },
      {
        q: "In 'les enfants', what happens at the liaison?",
        options: ["s is silent", "s is pronounced as 'z'", "e is dropped", "No change"],
        correct: 1,
      },
      {
        q: "'on' in French (as in 'bon') is…",
        options: ["Pronounced oh-n", "A nasal vowel — no separate n sound", "Like English 'on'", "Like 'an'"],
        correct: 1,
      },
      {
        q: "'ou' (as in 'vous') sounds like…",
        options: ["'oo' in food", "'ee' with rounded lips", "'uh'", "'oh'"],
        correct: 0,
      },
      {
        q: "Which pair are nasal vowels in French?",
        options: ["a and o", "an and on", "ai and au", "ou and eu"],
        correct: 1,
      },
      {
        q: "The accent in 'é' signals…",
        options: ["A nasal sound", "A closed 'ay' sound", "A silent vowel", "Stress on that syllable"],
        correct: 1,
      },
      {
        q: "French final consonants are typically…",
        options: ["Strongly pronounced", "Silent", "Aspirated", "Rolled"],
        correct: 1,
      },
    ],
  },
};
