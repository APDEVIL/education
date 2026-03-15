import { z } from "zod";
import { eq } from "drizzle-orm";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { notifications } from "@/server/db/schema";

export const notificationRouter = createTRPCRouter({

  // Create notification
  createNotification: protectedProcedure
    .input(
      z.object({
        userId: z.number(),
        message: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      const notification = await ctx.db
        .insert(notifications)
        .values({
          userId: input.userId,
          message: input.message,
        })
        .returning();

      return notification[0];
    }),

  // Get my notifications
  getMyNotifications: protectedProcedure
    .query(async ({ ctx }) => {

      const userId = Number(ctx.session.user.id);

      return ctx.db
        .select()
        .from(notifications)
        .where(eq(notifications.userId, userId));

    }),

  // Delete notification
  deleteNotification: protectedProcedure
    .input(
      z.object({
        notificationId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {

      await ctx.db
        .delete(notifications)
        .where(eq(notifications.id, input.notificationId));

      return { success: true };

    }),

});