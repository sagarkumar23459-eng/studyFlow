import { Check } from "lucide-react";
import { AppButton } from "@/components/common/button";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-3xl border p-8 transition-all duration-300 ${
        highlighted
          ? "border-sky-500 bg-sky-50 shadow-2xl scale-[1.03]"
          : "border-slate-200 bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-sky-600 px-4 py-1 text-sm font-semibold text-white">
          ⭐ Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 text-slate-600">
        {description}
      </p>

      <div className="mt-8">
        <span className="text-5xl font-extrabold text-slate-900">
          {price}
        </span>

        {price !== "Custom" && (
          <span className="text-slate-500">
            {" "}/month
          </span>
        )}
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            <Check className="h-5 w-5 text-emerald-500" />

            <span className="text-slate-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <AppButton className="w-full">
          Get Started
        </AppButton>
      </div>
    </div>
  );
}