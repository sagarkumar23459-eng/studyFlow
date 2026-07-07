import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl">
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 mt-6 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-600">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}