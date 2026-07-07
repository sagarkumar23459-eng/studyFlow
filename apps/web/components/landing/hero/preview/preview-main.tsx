import { PreviewStats } from "./preview-stats";
import { PreviewAI } from "./preview-ai";

export function PreviewMain() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-white p-8">
      {/* Top Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Progress */}
        <div className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <p className="text-sm text-slate-500">
            Today's Progress
          </p>

          <h3 className="mt-2 text-4xl font-bold text-slate-900">
            76%
          </h3>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-sky-500 to-indigo-600" />
          </div>
        </div>

        {/* Streak */}
        <div className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <p className="text-sm text-slate-500">
            Study Streak
          </p>

          <h3 className="mt-2 text-4xl font-bold text-orange-500">
            🔥 12
          </h3>

          <p className="mt-3 text-sm text-slate-500">
            Keep your streak alive every day.
          </p>
        </div>

        {/* AI Card */}
        <PreviewAI />
      </div>

      {/* Bottom Section */}
      <div className="mt-6 rounded-3xl bg-white p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-slate-900">
          Recent Notes
        </h3>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          <PreviewStats />

          <div className="space-y-3">
            {[
              "Physics - Motion",
              "Chemistry - Atoms",
              "Mathematics - Trigonometry",
            ].map((note) => (
              <div
                key={note}
                className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition-all duration-300 hover:border-sky-400 hover:bg-sky-50"
              >
                <span className="font-medium text-slate-700">
                  {note}
                </span>

                <span className="text-sm font-medium text-sky-600">
                  Open ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}