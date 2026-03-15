import { z } from "zod";
import { eq } from "drizzle-orm";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { courses } from "@/server/db/schema";

export const courseRouter = createTRPCRouter({

  // Create Course
  createCourse: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        instructorId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      const course = await ctx.db
        .insert(courses)
        .values({
          title: input.title,
          description: input.description,
          instructorId: input.instructorId,
        })
        .returning();

      return course[0];
    }),

  // Get All Courses
  getAllCourses: publicProcedure
    .query(async ({ ctx }) => {

      return ctx.db
        .select()
        .from(courses);

    }),

  // Get Course By ID
  getCourseById: publicProcedure
    .input(
      z.object({
        courseId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {

      const course = await ctx.db
        .select()
        .from(courses)
        .where(eq(courses.id, input.courseId));

      return course[0];

    }),

  // Update Course
  updateCourse: publicProcedure
    .input(
      z.object({
        courseId: z.number(),
        title: z.string(),
        description: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      const updated = await ctx.db
        .update(courses)
        .set({
          title: input.title,
          description: input.description,
        })
        .where(eq(courses.id, input.courseId))
        .returning();

      return updated[0];

    }),

  // Delete Course
  deleteCourse: publicProcedure
    .input(
      z.object({
        courseId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      await ctx.db
        .delete(courses)
        .where(eq(courses.id, input.courseId));

      return { success: true };

    }),

});