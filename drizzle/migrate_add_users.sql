-- Migration: add multi-user support
-- Existing rows get user_id = '__legacy__'.
-- After creating your account, run:
--   UPDATE cards SET user_id='<your-id>' WHERE user_id='__legacy__';
--   (same for lesson_progress, checkpoint_attempts, read_progress, streaks)

PRAGMA foreign_keys = OFF;

-- ── 1. Create users table ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `users` (
  `id` text PRIMARY KEY NOT NULL,
  `email` text NOT NULL,
  `password_hash` text NOT NULL,
  `created_at` integer NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS `users_email_unique` ON `users` (`email`);

-- ── 2. Recreate cards (add user_id, new composite unique) ──────────────────
CREATE TABLE `cards_new` (
  `id` text PRIMARY KEY NOT NULL,
  `user_id` text NOT NULL DEFAULT '__legacy__',
  `word_id` text NOT NULL,
  `source_sentence` text NOT NULL,
  `source_surface` text NOT NULL,
  `source_text_id` text,
  `fsrs_due` integer NOT NULL,
  `fsrs_state` text NOT NULL,
  `created_at` integer NOT NULL,
  FOREIGN KEY (`word_id`) REFERENCES `words`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`source_text_id`) REFERENCES `texts`(`id`) ON DELETE SET NULL
);
INSERT INTO `cards_new`
  SELECT `id`, '__legacy__', `word_id`, `source_sentence`, `source_surface`,
         `source_text_id`, `fsrs_due`, `fsrs_state`, `created_at`
  FROM `cards`;
DROP TABLE `cards`;
ALTER TABLE `cards_new` RENAME TO `cards`;
CREATE UNIQUE INDEX `cards_user_word_idx` ON `cards` (`user_id`, `word_id`);
CREATE INDEX `cards_fsrs_due_idx` ON `cards` (`fsrs_due`);

-- ── 3. Recreate lesson_progress (add user_id, new composite unique) ────────
CREATE TABLE `lesson_progress_new` (
  `id` text PRIMARY KEY NOT NULL,
  `user_id` text NOT NULL DEFAULT '__legacy__',
  `lesson_slug` text NOT NULL,
  `unit_slug` text NOT NULL,
  `completed_at` integer NOT NULL,
  `score` integer NOT NULL DEFAULT 100
);
INSERT INTO `lesson_progress_new`
  SELECT `id`, '__legacy__', `lesson_slug`, `unit_slug`, `completed_at`, `score`
  FROM `lesson_progress`;
DROP TABLE `lesson_progress`;
ALTER TABLE `lesson_progress_new` RENAME TO `lesson_progress`;
CREATE UNIQUE INDEX `lesson_progress_user_lesson_idx` ON `lesson_progress` (`user_id`, `lesson_slug`);
CREATE INDEX `lesson_progress_unit_idx` ON `lesson_progress` (`unit_slug`);

-- ── 4. Recreate checkpoint_attempts (add user_id) ─────────────────────────
CREATE TABLE `checkpoint_attempts_new` (
  `id` text PRIMARY KEY NOT NULL,
  `user_id` text NOT NULL DEFAULT '__legacy__',
  `unit_slug` text NOT NULL,
  `score` integer NOT NULL,
  `passed` integer NOT NULL,
  `taken_at` integer NOT NULL
);
INSERT INTO `checkpoint_attempts_new`
  SELECT `id`, '__legacy__', `unit_slug`, `score`, `passed`, `taken_at`
  FROM `checkpoint_attempts`;
DROP TABLE `checkpoint_attempts`;
ALTER TABLE `checkpoint_attempts_new` RENAME TO `checkpoint_attempts`;
CREATE INDEX `checkpoint_attempts_unit_idx` ON `checkpoint_attempts` (`unit_slug`);

-- ── 5. Recreate read_progress (add user_id, new composite unique) ──────────
CREATE TABLE `read_progress_new` (
  `id` text PRIMARY KEY NOT NULL,
  `user_id` text NOT NULL DEFAULT '__legacy__',
  `read_slug` text NOT NULL,
  `completed_at` integer NOT NULL,
  `comprehension_score` integer NOT NULL DEFAULT 0
);
INSERT INTO `read_progress_new`
  SELECT `id`, '__legacy__', `read_slug`, `completed_at`, `comprehension_score`
  FROM `read_progress`;
DROP TABLE `read_progress`;
ALTER TABLE `read_progress_new` RENAME TO `read_progress`;
CREATE UNIQUE INDEX `read_progress_user_read_idx` ON `read_progress` (`user_id`, `read_slug`);

-- ── 6. Recreate streaks (composite PK: user_id + kind) ────────────────────
CREATE TABLE `streaks_new` (
  `user_id` text NOT NULL DEFAULT '__legacy__',
  `kind` text NOT NULL,
  `current` integer NOT NULL DEFAULT 0,
  `longest` integer NOT NULL DEFAULT 0,
  `last_day` text,
  PRIMARY KEY (`user_id`, `kind`)
);
INSERT INTO `streaks_new`
  SELECT '__legacy__', `kind`, `current`, `longest`, `last_day`
  FROM `streaks`;
DROP TABLE `streaks`;
ALTER TABLE `streaks_new` RENAME TO `streaks`;

PRAGMA foreign_keys = ON;
