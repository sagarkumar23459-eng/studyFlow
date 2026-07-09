"use client";

import { Bell, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Search */}

      <div className="flex w-full max-w-md items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2">
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search notes, quizzes, AI..."
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      {/* Right */}

      <div className="ml-6 flex items-center gap-4">
        <button className="rounded-xl p-2 transition hover:bg-slate-100">
          <Bell size={20} />
        </button>

        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
          }}
        />
      </div>
    </header>
  );
}