CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"username" text,
	"password" text,
	"point" numeric,
	"created_at" timestamp DEFAULT now()
);
