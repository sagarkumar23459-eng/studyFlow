import { Sparkles } from "lucide-react";

import { AIFeatureCard } from "./ai-feature-card";
import { aiWorkspaceItems } from "../../constants";

export function AICard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-sky-600 to-indigo-600 p-8 text-white shadow-lg">
      <div className="flex items-center gap-3">
        <Sparkles className="h-8 w-8" />

        <div>
          <h2 className="text-2xl font-bold">
            AI Workspace
          </h2>

          <p className="text-sky-100">
            Learn smarter with your personal AI assistant.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {aiWorkspaceItems.map((item) => (
          <AIFeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
}