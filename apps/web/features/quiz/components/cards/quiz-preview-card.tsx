import { FileQuestion } from "lucide-react";

export function QuizPreviewCard() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <FileQuestion className="h-6 w-6 text-amber-600" />

        <div>
          <h2 className="text-xl font-semibold">
            Quiz
          </h2>

          <p className="text-sm text-slate-500">
            Test your knowledge with AI quizzes
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-5">
        <h3 className="font-medium">
          Physics Chapter 5 Quiz
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          20 Questions • Medium Difficulty
        </p>
      </div>
    </section>
  );
}