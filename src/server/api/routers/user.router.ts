import { z } from "zod";
import { eq } from "drizzle-orm";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { users } from "@/server/db/schema";

export const userRouter = createTRPCRouter({

	/**
	 * Get user profile
	 */
	getProfile: publicProcedure
		.input(
			z.object({
				userId: z.number(),
			})
		)
		.query(async ({ ctx, input }) => {

			const user = await ctx.db.query.users.findFirst({
				where: eq(users.id, input.userId),
			});

			return user;
		}),


	/**
	 * Update user profile
	 */
	updateProfile: publicProcedure
		.input(
			z.object({
				userId: z.number(),
				name: z.string().min(1),
			})
		)
		.mutation(async ({ ctx, input }) => {

			await ctx.db
				.update(users)
				.set({ name: input.name })
				.where(eq(users.id, input.userId));

			return { success: true };
		}),


	/**
	 * Admin: get all users
	 */
	getAllUsers: publicProcedure
		.input(
			z.object({
				userId: z.number(),
			})
		)
		.query(async ({ ctx, input }) => {

			const dbUser = await ctx.db.query.users.findFirst({
				where: eq(users.id, input.userId),
			});

			if (dbUser?.role !== "admin") {
				throw new Error("FORBIDDEN");
			}

			return ctx.db.select().from(users);
		}),
});