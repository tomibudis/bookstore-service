DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('success', 'canceled', 'pending');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"writer" text,
	"cover_image" text,
	"point" numeric,
	"tag" text[],
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"book_id" integer,
	"status" "status",
	"created_at" timestamp DEFAULT now()
);
