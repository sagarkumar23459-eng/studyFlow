import { BookOpen } from "lucide-react";

export function NotesPreviewCard() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <BookOpen className="h-6 w-6 text-sky-600" />

        <div>
          <h2 className="text-xl font-semibold">
            Notes
          </h2>

          <p className="text-sm text-slate-500">
            Continue reading your notes
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-5">
        <h3 className="font-medium">
          Physics Chapter 3
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Last opened 2 hours ago
        </p>
      </div>
    </section>
  );
}