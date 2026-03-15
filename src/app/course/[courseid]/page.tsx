/** biome-ignore-all assist/source/useSortedAttributes: <explanation> */
/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { api } from "@/trpc/react";

export default function CourseDetailPage() {

  const params = useParams();
  const courseId = Number(params.courseId);

  const { data: course, isLoading } =
    api.course.getCourseById.useQuery({ courseId });

  if (isLoading) {
    return <div className="p-10">Loading course...</div>;
  }

  if (!course) {
    return <div className="p-10">Course not found</div>;
  }

  return (
    <div className="mx-auto max-w-4xl p-10">

      <Link
        href="/courses"
        className="mb-6 inline-block text-blue-500"
      >
        ← Back to Courses
      </Link>

      <div className="rounded-lg border p-6 shadow-md">

        <h1 className="mb-4 font-bold text-3xl">
          {course.title}
        </h1>

        <p className="mb-6 text-gray-600">
          {course.description}
        </p>

        <div className="flex gap-4">

          <Link
            href={`/quiz?courseId=${course.id}`}
            className="rounded-md bg-black px-6 py-2 text-white"
          >
            Start Quiz
          </Link>

          <Link
            href="/progress"
            className="rounded-md border px-6 py-2"
          >
            View Progress
          </Link>

        </div>

      </div>

    </div>
  );
}