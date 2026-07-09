import { Brain } from "lucide-react";

export function FlashcardsPreviewCard() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Brain className="h-6 w-6 text-violet-600" />

        <div>
          <h2 className="text-xl font-semibold">
            Flashcards
          </h2>

          <p className="text-sm text-slate-500">
            Revise smarter with AI flashcards
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-5">
        <h3 className="font-medium">
          Biology Cell Structure
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          24 cards • Last studied yesterday
        </p>
      </div>
    </section>
  );
}