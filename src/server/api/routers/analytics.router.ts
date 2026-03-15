import { createTRPCRouter, protectedProcedure } from "../trpc";
import { users, courses, enrollments, contents } from "@/server/db/schema";
import { count } from "drizzle-orm";

export const analyticsRouter = createTRPCRouter({

  // Total Users
  totalUsers: protectedProcedure
    .query(async ({ ctx }) => {

      const result = await ctx.db
        .select({ value: count() })
        .from(users);

      return result[0]?.value ?? 0;

    }),

  // Total Courses
  totalCourses: protectedProcedure
    .query(async ({ ctx }) => {

      const result = await ctx.db
        .select({ value: count() })
        .from(courses);

      return result[0]?.value ?? 0;

    }),

  // Total Enrollments
  totalEnrollments: protectedProcedure
    .query(async ({ ctx }) => {

      const result = await ctx.db
        .select({ value: count() })
        .from(enrollments);

      return result[0]?.value ?? 0;

    }),

  // Total Contents
  totalContents: protectedProcedure
    .query(async ({ ctx }) => {

      const result = await ctx.db
        .select({ value: count() })
        .from(contents);

      return result[0]?.value ?? 0;

    }),

  // Student Progress (ADDED ONLY THIS)
  getStudentProgress: protectedProcedure
    .query(async ({ ctx }) => {

      const userId = Number(ctx.session?.user.id);

      const result = await ctx.db
        .select()
        .from(enrollments);

      return result.map((enrollment) => ({
        courseId: enrollment.courseId,
        progress: 0,
        userId,
      }));

    }),

});