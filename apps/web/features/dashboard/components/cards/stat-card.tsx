import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
};

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-500">
          {title}
        </h3>

        <Icon className="h-6 w-6 text-sky-600" />
      </div>

      <p className="text-3xl font-bold">
        {value}
      </p>

      {subtitle && (
        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}