import { AIChat } from "./ai-chat";
import { AIActions } from "./ai-actions";

export function AIPreview() {
  return (
    <div className="mx-auto mt-20 max-w-6xl overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.15)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-8 py-5">
        <div>
          <p className="text-sm font-medium text-violet-600">
            🤖 AI Tutor
          </p>

          <h3 className="mt-1 text-xl font-bold text-slate-900">
            Ask Anything
          </h3>
        </div>

        <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          ● Online
        </div>
      </div>

      <div className="grid gap-8 p-8 lg:grid-cols-[1fr_300px]">
        <AIChat />

        <AIActions />
      </div>
    </div>
  );
}