import {
	integer,
	pgTable,
	text,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

export const trainingPrograms = pgTable("training_programs", {
	id: uuid("id").defaultRandom().primaryKey(),
	title: varchar("title", { length: 160 }).notNull(),
	slug: varchar("slug", { length: 160 }).notNull().unique(),
	summary: text("summary").notNull(),
	durationWeeks: integer("duration_weeks").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});
