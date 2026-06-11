import { getToken } from "./auth";
import type { Lang } from "./lang";

const API_BASE = process.env.EXPO_PUBLIC_API_BASE ?? "https://language-tutor-silk.vercel.app";

async function authHeaders(): Promise<Record<string, string>> {
  const token = await getToken();
  if (!token) throw new Error("Not authenticated");
  return { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
}

async function get<T>(path: string): Promise<T> {
  const headers = await authHeaders();
  const res = await fetch(`${API_BASE}${path}`, { headers });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error ?? "API error");
  return json as T;
}

async function post<T>(path: string, body: unknown): Promise<T> {
  const headers = await authHeaders();
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error ?? "API error");
  return json as T;
}

async function del<T>(path: string): Promise<T> {
  const headers = await authHeaders();
  const res = await fetch(`${API_BASE}${path}`, { method: "DELETE", headers });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error ?? "API error");
  return json as T;
}

/* ─────────── Auth ─────────── */

export async function apiLogin(email: string, password: string) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error ?? "Login failed");
  return json as { token: string; user: { id: string; email: string } };
}

export async function apiRegister(email: string, password: string) {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error ?? "Registration failed");
  return json as { token: string; user: { id: string; email: string } };
}

/* ─────────── Progress ─────────── */

export type ProgressData = {
  lessons: { lessonSlug: string; unitSlug: string; completedAt: number; score: number }[];
  checkpoints: { unitSlug: string; bestScore: number; passed: boolean; lastTakenAt: number }[];
  reads: { readSlug: string; completedAt: number; comprehensionScore: number }[];
  streaks: { kind: string; current: number; longest: number; lastDay: string | null }[];
};

export async function apiGetProgress(lang: Lang): Promise<ProgressData> {
  return get(`/api/${lang}/progress`);
}

export async function apiMarkLessonDone(lang: Lang, unitSlug: string, lessonSlug: string, score: number) {
  return post(`/api/${lang}/progress/lesson`, { unitSlug, lessonSlug, score });
}

export async function apiRecordCheckpoint(lang: Lang, unitSlug: string, score: number) {
  return post<{ passed: boolean }>(`/api/${lang}/progress/checkpoint`, { unitSlug, score });
}

export async function apiMarkReadDone(lang: Lang, readSlug: string, comprehensionScore: number) {
  return post(`/api/${lang}/progress/read`, { readSlug, comprehensionScore });
}

/* ─────────── Review ─────────── */

export type ReviewCard = {
  card: { id: string; fsrsState: unknown; fsrsDue: number; sourceSentence: string; sourceSurface: string };
  word: { id: string; lemma: string; translation: string; definition: string; pos: string; gender: string | null; examples: { l1: string; en: string }[]; conjugation: Record<string, Record<string, string>> | null; grammarNotes: string | null };
  intervals: Record<string, string>;
};

export type ReviewStats = { dueNow: number; reviewedToday: number; deckSize: number; retention7d: number | null };

export async function apiGetReview(lang: Lang): Promise<{ cards: ReviewCard[]; stats: ReviewStats }> {
  return get(`/api/${lang}/review`);
}

export async function apiRateCard(lang: Lang, cardId: string, rating: number) {
  return post<{ nextDueMs: number }>(`/api/${lang}/review/rate`, { cardId, rating });
}

/* ─────────── Deck ─────────── */

export async function apiGetDeck(lang: Lang) {
  return get<{ cards: { card: ReviewCard["card"]; word: ReviewCard["word"] }[]; savedSurfaces: string[] }>(`/api/${lang}/deck`);
}

export async function apiSaveCard(lang: Lang, wordId: string, sourceSurface: string, sourceSentence: string) {
  return post<{ cardId: string; created: boolean }>(`/api/${lang}/deck`, { wordId, sourceSurface, sourceSentence });
}

export async function apiDeleteCard(lang: Lang, cardId: string) {
  return del(`/api/${lang}/deck/${cardId}`);
}

/* ─────────── Lookup ─────────── */

export async function apiLookupWord(lang: Lang, surface: string, sentence: string) {
  return post<{ word: ReviewCard["word"]; cached: boolean; isSaved: boolean }>(`/api/${lang}/lookup`, { surface, sentence });
}

/* ─────────── Grade ─────────── */

export type GradeResult = { score: 0 | 1 | 2; corrected?: string; feedback: string; miss_lemmas?: string[] };

export async function apiGrade(lang: Lang, direction: string, prompt: string, reference: string, learner: string) {
  return post<{ grade: GradeResult }>(`/api/${lang}/grade`, { direction, prompt, reference, learner });
}
