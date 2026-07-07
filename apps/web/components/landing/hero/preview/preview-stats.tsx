export function PreviewStats() {
  const stats = [
    {
      title: "Courses",
      value: "24",
    },
    {
      title: "Hours",
      value: "132h",
    },
    {
      title: "Rank",
      value: "#12",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-slate-500">
            {item.title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
}