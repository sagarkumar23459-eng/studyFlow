import { Bell, Search, Sparkles } from "lucide-react";

export function PreviewHeader() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-8 py-5 backdrop-blur-xl">
      {/* Left */}
      <div>
        <p className="text-sm text-slate-500">
          Welcome back 👋
        </p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
          Continue Learning
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-5 py-2 md:flex">
          <Search className="h-4 w-4 text-slate-400" />

          <span className="text-sm text-slate-400">
            Search notes...
          </span>
        </div>

        {/* AI */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-md transition-all duration-300 hover:scale-105">
          <Sparkles className="h-5 w-5" />
        </button>

        {/* Notification */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:bg-slate-100">
          <Bell className="h-5 w-5 text-slate-600" />
        </button>

        {/* Avatar */}
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-sm font-bold text-white shadow-md">
          SK
        </div>
      </div>
    </header>
  );
}