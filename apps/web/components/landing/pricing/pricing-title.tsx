export function PricingTitle() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
        💎 Simple Pricing
      </span>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
        Choose the Plan That{" "}
        <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
          Fits Your Learning
        </span>
      </h2>
    </div>
  );
}