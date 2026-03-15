import { z } from "zod";
import { eq, and } from "drizzle-orm";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { enrollments } from "@/server/db/schema";

export const enrollmentRouter = createTRPCRouter({

  // Enroll in a course
  enrollCourse: protectedProcedure
    .input(
      z.object({
        courseId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      const userId = Number(ctx.session.user.id);

      const enrollment = await ctx.db
        .insert(enrollments)
        .values({
          userId: userId,
          courseId: input.courseId,
        })
        .returning();

      return enrollment[0];
    }),

  // View my enrolled courses
  getMyEnrollments: protectedProcedure
    .query(async ({ ctx }) => {

      const userId = Number(ctx.session.user.id);

      return ctx.db
        .select()
        .from(enrollments)
        .where(eq(enrollments.userId, userId));

    }),

  // Check if user is enrolled in a course
  checkEnrollment: protectedProcedure
    .input(
      z.object({
        courseId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {

      const userId = Number(ctx.session.user.id);

      const result = await ctx.db
        .select()
        .from(enrollments)
        .where(
          and(
            eq(enrollments.userId, userId),
            eq(enrollments.courseId, input.courseId)
          )
        );

      return result.length > 0;
    }),

  // Cancel enrollment
  cancelEnrollment: protectedProcedure
    .input(
      z.object({
        courseId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      const userId = Number(ctx.session.user.id);

      await ctx.db
        .delete(enrollments)
        .where(
          and(
            eq(enrollments.userId, userId),
            eq(enrollments.courseId, input.courseId)
          )
        );

      return { success: true };
    }),

});