import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  review: string;
};

export function TestimonialCard({
  name,
  role,
  review,
}: TestimonialCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-2xl">
      {/* Rating */}
      <div className="mb-6 flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-slate-600 leading-7">
        "{review}"
      </p>

      {/* User */}
      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 font-bold text-white">
          {name.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">
            {name}
          </h4>

          <p className="text-sm text-slate-500">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}