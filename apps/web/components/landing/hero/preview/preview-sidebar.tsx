import {
  LayoutDashboard,
  BookOpen,
  BrainCircuit,
  Layers3,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Notes",
    icon: BookOpen,
  },
  {
    title: "AI Tutor",
    icon: BrainCircuit,
  },
  {
    title: "Flashcards",
    icon: Layers3,
  },
  {
    title: "Progress",
    icon: BarChart3,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export function PreviewSidebar() {
  return (
    <aside className="hidden border-r border-slate-200 bg-slate-50 lg:flex lg:w-[260px] lg:flex-col">
      {/* Logo */}
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-2xl font-bold text-sky-600">
          StudyFlow
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          AI Learning Platform
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                item.active
                  ? "bg-sky-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-white hover:shadow-sm"
              }`}
            >
              <Icon className="h-5 w-5" />

              <span className="font-medium">
                {item.title}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4">
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">
            Study Streak 🔥
          </p>

          <p className="mt-1 text-2xl font-bold text-sky-600">
            12 Days
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Keep learning every day.
          </p>
        </div>
      </div>
    </aside>
  );
}