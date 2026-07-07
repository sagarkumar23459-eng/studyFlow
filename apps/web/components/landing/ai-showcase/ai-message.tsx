type AIMessageProps = {
  role: "user" | "ai";
  message: string;
};

export function AIMessage({
  role,
  message,
}: AIMessageProps) {
  const isAI = role === "ai";

  return (
    <div
      className={`flex ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm leading-7 shadow-sm ${
          isAI
            ? "bg-slate-100 text-slate-800"
            : "bg-gradient-to-r from-sky-500 to-indigo-600 text-white"
        }`}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">
          {isAI ? "🤖 AI Tutor" : "👨‍🎓 You"}
        </p>

        <p>{message}</p>
      </div>
    </div>
  );
}