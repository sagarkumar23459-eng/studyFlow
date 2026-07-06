import { Bell, Search } from "lucide-react";

export function PreviewHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Left */}
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          Study Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Welcome back, Sagar 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex w-72 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <Search className="h-4 w-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search notes..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Notification */}
        <button className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100">
          <Bell className="h-5 w-5 text-slate-600" />
        </button>

        {/* Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 font-semibold text-white">
          S
        </div>
      </div>
    </header>
  );
}