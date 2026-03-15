import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

import { userRouter } from "@/server/api/routers/user.router";
import { courseRouter } from "@/server/api/routers/course.router";
import { enrollmentRouter } from "@/server/api/routers/enrollment.router";
import { contentRouter } from "@/server/api/routers/content.router";
import { notificationRouter } from "@/server/api/routers/notification.router";
import { analyticsRouter } from "@/server/api/routers/analytics.router";

/**
 * Primary API router
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  course: courseRouter,
  enrollment: enrollmentRouter,
  content: contentRouter,
  notification: notificationRouter,
  analytics: analyticsRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);