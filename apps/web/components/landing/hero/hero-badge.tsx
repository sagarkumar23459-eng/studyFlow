import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/80 px-5 py-2 backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
        <Sparkles className="h-4 w-4" />
      </div>

      <span className="text-sm font-semibold text-slate-700">
        AI-Powered Learning Platform
      </span>

      <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-bold text-sky-700">
        NEW
      </span>
    </div>
  );
}