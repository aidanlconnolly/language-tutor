CREATE TABLE `cards` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text DEFAULT '__legacy__' NOT NULL,
	`word_id` text NOT NULL,
	`source_sentence` text NOT NULL,
	`source_surface` text NOT NULL,
	`source_text_id` text,
	`fsrs_due` integer NOT NULL,
	`fsrs_state` text NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`word_id`) REFERENCES `words`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`source_text_id`) REFERENCES `texts`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `cards_user_word_idx` ON `cards` (`user_id`,`word_id`);--> statement-breakpoint
CREATE INDEX `cards_fsrs_due_idx` ON `cards` (`fsrs_due`);--> statement-breakpoint
CREATE TABLE `checkpoint_attempts` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text DEFAULT '__legacy__' NOT NULL,
	`unit_slug` text NOT NULL,
	`score` integer NOT NULL,
	`passed` integer NOT NULL,
	`taken_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `checkpoint_attempts_unit_idx` ON `checkpoint_attempts` (`unit_slug`);--> statement-breakpoint
CREATE TABLE `lesson_progress` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text DEFAULT '__legacy__' NOT NULL,
	`lesson_slug` text NOT NULL,
	`unit_slug` text NOT NULL,
	`completed_at` integer NOT NULL,
	`score` integer DEFAULT 100 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `lesson_progress_user_lesson_idx` ON `lesson_progress` (`user_id`,`lesson_slug`);--> statement-breakpoint
CREATE INDEX `lesson_progress_unit_idx` ON `lesson_progress` (`unit_slug`);--> statement-breakpoint
CREATE TABLE `read_progress` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text DEFAULT '__legacy__' NOT NULL,
	`read_slug` text NOT NULL,
	`completed_at` integer NOT NULL,
	`comprehension_score` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `read_progress_user_read_idx` ON `read_progress` (`user_id`,`read_slug`);--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` text PRIMARY KEY NOT NULL,
	`card_id` text NOT NULL,
	`rating` integer NOT NULL,
	`reviewed_at` integer NOT NULL,
	`prev_state` text NOT NULL,
	`new_state` text NOT NULL,
	FOREIGN KEY (`card_id`) REFERENCES `cards`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `streaks` (
	`user_id` text DEFAULT '__legacy__' NOT NULL,
	`kind` text NOT NULL,
	`current` integer DEFAULT 0 NOT NULL,
	`longest` integer DEFAULT 0 NOT NULL,
	`last_day` text,
	PRIMARY KEY(`user_id`, `kind`)
);
--> statement-breakpoint
CREATE TABLE `texts` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text,
	`content` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`password_hash` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `words` (
	`id` text PRIMARY KEY NOT NULL,
	`lemma` text NOT NULL,
	`surface_seen` text DEFAULT '[]' NOT NULL,
	`pos` text NOT NULL,
	`gender` text,
	`translation` text NOT NULL,
	`definition` text NOT NULL,
	`conjugation` text,
	`examples` text DEFAULT '[]' NOT NULL,
	`grammar_notes` text,
	`looked_up_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `words_lemma_unique` ON `words` (`lemma`);--> statement-breakpoint
CREATE INDEX `words_lemma_idx` ON `words` (`lemma`);