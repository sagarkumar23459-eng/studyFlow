import {
  LayoutDashboard,
  BookOpen,
  BrainCircuit,
  Layers3,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BookOpen, label: "Notes" },
  { icon: BrainCircuit, label: "AI Tutor" },
  { icon: Layers3, label: "Flashcards" },
  { icon: BarChart3, label: "Progress" },
  { icon: Settings, label: "Settings" },
];

export function PreviewSidebar() {
  return (
    <aside className="hidden border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b border-slate-200 px-8 py-8">
        <h2 className="text-3xl font-bold tracking-tight text-sky-600">
          StudyFlow
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          AI Learning Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-5">
        {items.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
              active
                ? "bg-sky-600 text-white shadow-lg"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-200 p-5">
        <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 p-4 text-white">
          <p className="text-xs opacity-80">Pro Plan</p>

          <h3 className="mt-1 font-semibold">
            Unlock AI Workspace
          </h3>

          <button className="mt-4 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-sky-600">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
}