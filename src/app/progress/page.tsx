/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
/** biome-ignore-all assist/source/useSortedAttributes: <explanation> */
"use client";

import { api } from "@/trpc/react";

export default function ProgressPage() {
  const { data: progress, isLoading } =
    api.analytics.getStudentProgress.useQuery();

  if (isLoading) {
    return <div className="p-10">Loading progress...</div>;
  }

  if (!progress || progress.length === 0) {
    return <div className="p-10">No progress found</div>;
  }

  return (
    <div className="mx-auto max-w-5xl p-10">

      <h1 className="mb-8 font-bold text-3xl">
        Learning Progress
      </h1>

      <div className="space-y-4">
        {progress.map((item: any) => (
          <div
            key={item.courseId}
            className="rounded-lg border p-6 shadow-sm"
          >
            <h2 className="font-semibold text-xl">
              {item.courseTitle}
            </h2>

            <p className="mt-2 text-gray-600">
              Quiz Score: {item.score}
            </p>

            <p className="text-gray-600">
              Completion: {item.completion}%
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}