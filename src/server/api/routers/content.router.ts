import { z } from "zod";
import { eq } from "drizzle-orm";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { contents } from "@/server/db/schema";

export const contentRouter = createTRPCRouter({

  // Create content
  createContent: protectedProcedure
    .input(
      z.object({
        courseId: z.number(),
        title: z.string(),
        body: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      const content = await ctx.db
        .insert(contents)
        .values({
          courseId: input.courseId,
          title: input.title,
          body: input.body,
        })
        .returning();

      return content[0];
    }),

  // Get course contents
  getCourseContents: protectedProcedure
    .input(
      z.object({
        courseId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {

      return ctx.db
        .select()
        .from(contents)
        .where(eq(contents.courseId, input.courseId));

    }),

  // Update content
  updateContent: protectedProcedure
    .input(
      z.object({
        contentId: z.number(),
        title: z.string(),
        body: z.string(),
        isPublished: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      const updated = await ctx.db
        .update(contents)
        .set({
          title: input.title,
          body: input.body,
          isPublished: input.isPublished,
        })
        .where(eq(contents.id, input.contentId))
        .returning();

      return updated[0];

    }),

  // Delete content
  deleteContent: protectedProcedure
    .input(
      z.object({
        contentId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      await ctx.db
        .delete(contents)
        .where(eq(contents.id, input.contentId));

      return { success: true };

    }),

  // ✅ Added: Get Quiz By Id
  getQuizById: protectedProcedure
    .input(
      z.object({
        quizId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {

      const quiz = await ctx.db
        .select()
        .from(contents)
        .where(eq(contents.id, input.quizId));

      return quiz[0];

    }),

  // Submit Quiz (Added only fix here)
  submitQuiz: protectedProcedure
    .input(
      z.object({
        quizId: z.number(),
        answers: z.record(z.string(), z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {

      const userId = Number(ctx.session?.user.id);

      const score = 0;

      return {
        success: true,
        userId,
        quizId: input.quizId,
        score,
      };

    }),

});