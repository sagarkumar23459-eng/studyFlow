export function PreviewAI() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-600 p-6 text-white shadow-xl">
      <p className="text-sm opacity-80">
        AI Assistant
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        Ask anything.
      </h3>

      <p className="mt-3 text-sm opacity-90">
        Generate notes, solve doubts, create quizzes and learn faster.
      </p>

      <button className="mt-6 rounded-xl bg-white px-5 py-2 font-semibold text-sky-600 transition hover:scale-105">
        Start Chat →
      </button>
    </div>
  );
}