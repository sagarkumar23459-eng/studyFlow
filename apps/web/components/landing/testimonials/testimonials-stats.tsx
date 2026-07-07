const stats = [
  {
    value: "50K+",
    label: "Active Students",
  },
  {
    value: "4.9★",
    label: "Average Rating",
  },
  {
    value: "1M+",
    label: "Notes Generated",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
];

export function TestimonialsStats() {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl"
        >
          <h3 className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-4xl font-extrabold text-transparent">
            {stat.value}
          </h3>

          <p className="mt-3 text-sm font-medium text-slate-600">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}