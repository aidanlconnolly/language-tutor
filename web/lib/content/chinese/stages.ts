import type { Stage } from "../types";

export const STAGES: Stage[] = [
  { number: 1, title: "Foundations", blurb: "Pinyin, tones, characters, numbers, 是 & 的." },
  { number: 2, title: "First conversations", blurb: "Talk about yourself, ask questions, measure words." },
  { number: 3, title: "Around Beijing", blurb: "The subway, directions, hotels, help — survival Chinese." },
  { number: 4, title: "Eating & drinking", blurb: "Cafés, restaurants, dumplings, hotpot, Peking duck." },
  { number: 5, title: "Verbs & aspect", blurb: "Word order, 了, 在, wanting & the future." },
  { number: 6, title: "Daily life", blurb: "Markets, bargaining, polite requests, problems." },
  { number: 7, title: "Cultural fluency", blurb: "Expressions, small talk, customs, comparison." },
  { number: 8, title: "Real conversations (B1)", blurb: "Complements, 把 & 被, opinions." },
];

/** Full 35-unit outline (for the locked previews in the roadmap). */
export type UnitPreview = {
  slug: string;
  stage: number;
  order: number;
  icon: string;
  title: string;
  tagline: string;
};

export const UNIT_OUTLINE: UnitPreview[] = [
  // Stage 1 — Foundations
  { slug: "pinyin-tones", stage: 1, order: 1, icon: "🔤", title: "Pinyin & tones", tagline: "The pinyin system, the 4 tones + neutral, initials & finals." },
  { slug: "characters", stage: 1, order: 2, icon: "🀄", title: "Chinese characters", tagline: "How characters work — radicals, stroke order, simplified." },
  { slug: "greetings", stage: 1, order: 3, icon: "👋", title: "Greetings & courtesy", tagline: "nǐ hǎo, xièxie, bù kèqi — and the polite 您 nín." },
  { slug: "numbers-time", stage: 1, order: 4, icon: "🔢", title: "Numbers & time", tagline: "0–10000, dates, telling time, and 块 for money." },
  { slug: "pronouns-shi", stage: 1, order: 5, icon: "🧱", title: "Pronouns, 是 & 的", tagline: "wǒ/nǐ/tā, 是 (to be), the possessive 的, and 吗 questions." },

  // Stage 2 — First conversations
  { slug: "about-me", stage: 2, order: 6, icon: "🪪", title: "About me", tagline: "Nationalities, jobs, family, and 叫 (to be called)." },
  { slug: "questions", stage: 2, order: 7, icon: "❓", title: "Asking questions", tagline: "什么/谁/哪儿/什么时候/为什么/怎么 + 吗 and 呢." },
  { slug: "measure-words", stage: 2, order: 8, icon: "🎯", title: "Measure words", tagline: "个, 本, 张, 只 — classifiers, and 这/那." },
  { slug: "adjectives", stage: 2, order: 9, icon: "🌈", title: "Adjectives & 很", tagline: "Adjectives with 很, negation with 不, and 太…了." },

  // Stage 3 — Around Beijing
  { slug: "transit", stage: 3, order: 10, icon: "🚇", title: "Beijing transit", tagline: "地铁, 公交, 出租车, and the 一卡通 card." },
  { slug: "directions", stage: 3, order: 11, icon: "🧭", title: "Asking for directions", tagline: "左/右/一直走 — …在哪儿?" },
  { slug: "hotel", stage: 3, order: 12, icon: "🏨", title: "Airport & hotel", tagline: "护照, 入住, room vocab, problems." },
  { slug: "help", stage: 3, order: 13, icon: "🆘", title: "Help & emergencies", tagline: "药店, 医院, 帮帮我 — and 110/120." },
  { slug: "landmarks", stage: 3, order: 14, icon: "🏯", title: "Beijing landmarks", tagline: "长城, 故宫, 天安门, 颐和园." },

  // Stage 4 — Eating & drinking
  { slug: "cafe", stage: 4, order: 15, icon: "☕", title: "Café & tea", tagline: "咖啡, 茶, …请 — ordering drinks." },
  { slug: "restaurant", stage: 4, order: 16, icon: "🍜", title: "At the restaurant", tagline: "点菜, 服务员, 买单." },
  { slug: "food-vocab", stage: 4, order: 17, icon: "🥢", title: "Food vocab deep dive", tagline: "肉, 菜, 饭, 面 — and the meals of the day." },
  { slug: "diet-drinks", stage: 4, order: 18, icon: "🍵", title: "Drinks & dietary needs", tagline: "水, 啤酒, 我不吃…, 过敏 (allergies)." },
  { slug: "chinese-food", stage: 4, order: 19, icon: "🥟", title: "Chinese classics", tagline: "饺子, 火锅, 北京烤鸭 — and no tipping." },

  // Stage 5 — Verbs & aspect
  { slug: "verbs-basic", stage: 5, order: 20, icon: "🟢", title: "Basic verbs & word order", tagline: "Subject-Verb-Object and negation with 不." },
  { slug: "le-aspect", stage: 5, order: 21, icon: "✅", title: "了 — completed action", tagline: "了 for a completed action and a change of state." },
  { slug: "zai-continuous", stage: 5, order: 22, icon: "🌅", title: "在 & 正在 — ongoing", tagline: "(正)在 + verb for an action in progress." },
  { slug: "future-want", stage: 5, order: 23, icon: "⏩", title: "Wanting & the future", tagline: "想, 要, 会 — desire, intention and the future." },
  { slug: "narrate-trip", stage: 5, order: 24, icon: "📖", title: "Narrating a trip", tagline: "先…再…然后… — tell your travel story." },

  // Stage 6 — Daily life
  { slug: "shopping", stage: 6, order: 25, icon: "🛍️", title: "Money & shopping", tagline: "多少钱, 块, sizes, WeChat & Alipay." },
  { slug: "market", stage: 6, order: 26, icon: "🥕", title: "At the market", tagline: "市场, 一斤, 贵 vs 便宜, bargaining." },
  { slug: "polite-requests", stage: 6, order: 27, icon: "🤝", title: "Polite requests", tagline: "请, 能, 可以, 麻烦你…" },
  { slug: "complaints", stage: 6, order: 28, icon: "📣", title: "Complaints & problems", tagline: "有问题, 坏了, 我要退…" },

  // Stage 7 — Cultural fluency
  { slug: "expressions", stage: 7, order: 29, icon: "🧧", title: "Everyday expressions", tagline: "加油, 没关系, 不好意思, 随便." },
  { slug: "smalltalk", stage: 7, order: 30, icon: "🍵", title: "Small talk", tagline: "吃了吗?, the weather, and graceful exits." },
  { slug: "culture-customs", stage: 7, order: 31, icon: "🏮", title: "Customs & etiquette", tagline: "面子 (face), gift-giving, 红包, the festivals." },
  { slug: "comparatives", stage: 7, order: 32, icon: "✍️", title: "Comparing (比)", tagline: "A 比 B…, 最, and 跟…一样." },

  // Stage 8 — Real conversations (B1)
  { slug: "complements", stage: 8, order: 33, icon: "🎩", title: "Complements (得/完/到)", tagline: "Resultative & degree complements — 说得好, 吃完, 看到." },
  { slug: "ba-bei", stage: 8, order: 34, icon: "🤔", title: "把 & 被 sentences", tagline: "The 把 construction and the 被 passive." },
  { slug: "opinions", stage: 8, order: 35, icon: "🗣️", title: "Opinions & discussion", tagline: "我觉得, 同意, expressing a point of view." },
];

export const TOTAL_UNITS = UNIT_OUTLINE.length;
