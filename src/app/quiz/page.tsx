/** biome-ignore-all assist/source/organizeImports: <explanation> */
/** biome-ignore-all assist/source/useSortedAttributes: <explanation> */
/** biome-ignore-all lint/nursery/useSortedClasses: <explanation> */
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
        className="text-blue-500 mb-6 inline-block"
      >
        ← Back to Courses
      </Link>

      <div className="border rounded-lg p-6 shadow-md">

        <h1 className="text-3xl font-bold mb-4">
          {course.title}
        </h1>

        <p className="text-gray-600 mb-6">
          {course.description}
        </p>

        <div className="flex gap-4">

          <Link
            href={`/quiz?courseId=${course.id}`}
            className="bg-black text-white px-6 py-2 rounded-md"
          >
            Start Quiz
          </Link>

          <Link
            href="/progress"
            className="border px-6 py-2 rounded-md"
          >
            View Progress
          </Link>

        </div>

      </div>

    </div>
  );
}