/** biome-ignore-all lint/nursery/useSortedClasses: <explanation> */
/** biome-ignore-all assist/source/useSortedAttributes: <explanation> */
"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Welcome to the Education & Learning Platform
      </h1>
      <p className="text-gray-700 text-lg mb-8 text-center max-w-xl">
        Access courses, take quizzes, track your progress, and improve your skills in one place.
      </p>

      <div className="flex gap-4">
        <Link
          href="/register"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Get Started
        </Link>

        <Link
          href="/login"
          className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Login
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Courses</h2>
          <p>Browse and enroll in interactive courses across multiple subjects.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Quizzes</h2>
          <p>Test your knowledge with quizzes and track your performance.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Progress</h2>
          <p>Monitor your learning journey and see your achievements grow.</p>
        </div>
      </div>
    </div>
  );
}