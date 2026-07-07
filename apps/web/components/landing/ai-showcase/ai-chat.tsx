import { AIMessage } from "./ai-message";

export function AIChat() {
  return (
    <div className="space-y-5 rounded-3xl bg-slate-50 p-6">
      <AIMessage
        role="user"
        message="Explain Newton's First Law in simple words."
      />

      <AIMessage
        role="ai"
        message="Newton's First Law says that an object will continue to remain at rest or move with the same speed in a straight line unless an external force acts on it. For example, a football stays still until someone kicks it."
      />

      <AIMessage
        role="user"
        message="Great! Now generate quick revision notes."
      />

      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
        <p className="text-sm font-semibold text-violet-700">
          📄 AI Generated Summary
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Objects remain at rest unless a force acts.</li>
          <li>Moving objects continue in the same direction.</li>
          <li>This property is called inertia.</li>
        </ul>
      </div>
    </div>
  );
}