/** biome-ignore-all assist/source/useSortedAttributes: <explanation> */
"use client";

import { api } from "@/trpc/react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function QuizPage() {
  const params = useParams();
  const quizId = Number(params.quizId);

  const { data: quiz, isLoading } =
    api.content.getQuizById.useQuery({ quizId });

  const submitQuiz = api.content.submitQuiz.useMutation();

  const [answers, _setAnswers] = useState<Record<string, string>>({});

  if (isLoading) return <div>Loading quiz...</div>;
  if (!quiz) return <div>Quiz not found</div>;

  const handleSubmit = async () => {
    await submitQuiz.mutateAsync({
      quizId,
      answers,
    });

    alert("Quiz submitted");
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="font-bold text-2xl">{quiz.title}</h1>

      <div className="rounded border p-4">
        <p>{quiz.body}</p>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="rounded bg-black px-4 py-2 text-white"
      >
        Submit Quiz
      </button>
    </div>
  );
}