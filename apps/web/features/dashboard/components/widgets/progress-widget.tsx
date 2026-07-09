import { Target } from "lucide-react";

export function ProgressWidget() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Target className="h-6 w-6 text-sky-600" />

        <h2 className="text-xl font-semibold">
          Today's Progress
        </h2>
      </div>

      <div className="mt-6">
        <div className="h-3 rounded-full bg-slate-100">
          <div className="h-3 w-2/3 rounded-full bg-sky-600" />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          65% Completed
        </p>
      </div>
    </section>
  );
}