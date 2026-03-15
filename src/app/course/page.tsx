/** biome-ignore-all assist/source/useSortedAttributes: <explanation> */
"use client";

import { api } from "@/trpc/react";

export default function CoursesPage() {

  const { data: courses, isLoading } = api.course.getAllCourses.useQuery();

  if (isLoading) {
    return <div>Loading courses...</div>;
  }

  return (
    <div className="p-10">
      <h1 className="mb-6 font-bold text-3xl">Courses</h1>

      <div className="grid grid-cols-3 gap-6">

        {courses?.map((course) => (
          <div
            key={course.id}
            className="rounded-lg border p-4 shadow-sm"
          >
            <h2 className="font-semibold text-xl">{course.title}</h2>
            <p className="text-gray-500">{course.description}</p>
          </div>
        ))}

      </div>
    </div>
  );
}