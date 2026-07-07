import {
  Sparkles,
  FileText,
  ClipboardCheck,
  Brain,
  MessageSquare,
} from "lucide-react";

const actions = [
  {
    icon: Sparkles,
    title: "Generate Notes",
  },
  {
    icon: ClipboardCheck,
    title: "Create Quiz",
  },
  {
    icon: Brain,
    title: "Make Flashcards",
  },
  {
    icon: FileText,
    title: "Summarize Chapter",
  },
  {
    icon: MessageSquare,
    title: "Ask AI Anything",
  },
];

export function AIActions() {
  return (
    <aside className="rounded-3xl bg-slate-50 p-6">
      <h3 className="text-lg font-bold text-slate-900">
        AI Tools
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        Everything you need to study faster with AI.
      </p>

      <div className="mt-6 space-y-3">
        {actions.map((action) => (
          <button
            key={action.title}
            className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left transition-all duration-300 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md"
          >
            <action.icon className="h-5 w-5 text-violet-600" />

            <span className="font-medium text-slate-700">
              {action.title}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-5 text-white">
        <p className="text-sm opacity-90">
          AI Status
        </p>

        <h4 className="mt-2 text-xl font-bold">
          Ready to Help 🚀
        </h4>

        <p className="mt-2 text-sm opacity-90">
          Your AI Tutor is available 24/7 for instant learning support.
        </p>
      </div>
    </aside>
  );
}