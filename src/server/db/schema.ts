/** biome-ignore-all assist/source/organizeImports: <explanation> */
import {
	pgTable,
	serial,
	text,
	varchar,
	timestamp,
	integer,
	boolean,
} from "drizzle-orm/pg-core";

/**
 * Users table
 * Used by Better Auth + application logic
 */
export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: varchar("name", { length: 100 }),

  email: varchar("email", { length: 255 }).notNull().unique(),

  password: varchar("password", { length: 255 }).notNull(),

  role: varchar("role", { length: 20 }).notNull().default("student"),

  createdAt: timestamp("created_at", { mode: "date" })
    .defaultNow()
    .notNull(),
});

/**
 * Courses table
 */
export const courses = pgTable("courses", {
	id: serial("id").primaryKey(),

	title: varchar("title", { length: 255 }).notNull(),

	description: text("description"),

	instructorId: integer("instructor_id")
		.notNull()
		.references(() => users.id),

	createdAt: timestamp("created_at", { mode: "date" })
		.defaultNow()
		.notNull(),
});

/**
 * Enrollment table
 */
export const enrollments = pgTable("enrollments", {
	id: serial("id").primaryKey(),

	userId: integer("user_id")
		.notNull()
		.references(() => users.id),

	courseId: integer("course_id")
		.notNull()
		.references(() => courses.id),

	status: varchar("status", { length: 20 }).default("enrolled"),

	createdAt: timestamp("created_at", { mode: "date" })
		.defaultNow()
		.notNull(),
});

/**
 * Learning content table
 */
export const contents = pgTable("contents", {
	id: serial("id").primaryKey(),

	courseId: integer("course_id")
		.notNull()
		.references(() => courses.id),

	title: varchar("title", { length: 255 }).notNull(),

	body: text("body"),

	isPublished: boolean("is_published").default(false),

	createdAt: timestamp("created_at", { mode: "date" })
		.defaultNow()
		.notNull(),
});

/**
 * Notifications table
 */
export const notifications = pgTable("notifications", {
	id: serial("id").primaryKey(),

	userId: integer("user_id")
		.notNull()
		.references(() => users.id),

	message: text("message").notNull(),

	isRead: boolean("is_read").default(false),

	createdAt: timestamp("created_at", { mode: "date" })
		.defaultNow()
		.notNull(),
});