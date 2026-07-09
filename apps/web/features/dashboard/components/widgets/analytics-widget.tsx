import { BarChart3 } from "lucide-react";

export function AnalyticsWidget() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <BarChart3 className="h-6 w-6 text-violet-600" />

        <h2 className="text-xl font-semibold">
          Weekly Analytics
        </h2>
      </div>

      <div className="mt-6">
        <p className="text-4xl font-bold">
          18h
        </p>

        <p className="mt-2 text-slate-500">
          Total study time this week
        </p>
      </div>
    </section>
  );
}