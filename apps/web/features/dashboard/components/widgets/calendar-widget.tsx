import { CalendarDays } from "lucide-react";

export function CalendarWidget() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <CalendarDays className="h-6 w-6 text-green-600" />

        <h2 className="text-xl font-semibold">
          Calendar
        </h2>
      </div>

      <div className="mt-6">
        <p className="font-medium">
          Next Study Session
        </p>

        <p className="mt-2 text-slate-500">
          Today • 7:00 PM
        </p>
      </div>
    </section>
  );
}