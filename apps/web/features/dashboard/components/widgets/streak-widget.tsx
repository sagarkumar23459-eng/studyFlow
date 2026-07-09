import { Flame } from "lucide-react";

export function StreakWidget() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Flame className="h-6 w-6 text-orange-500" />

        <h2 className="text-xl font-semibold">
          Study Streak
        </h2>
      </div>

      <div className="mt-6">
        <p className="text-5xl font-bold text-orange-500">
          12 🔥
        </p>

        <p className="mt-3 text-slate-500">
          Keep studying every day to maintain your streak.
        </p>
      </div>
    </section>
  );
}