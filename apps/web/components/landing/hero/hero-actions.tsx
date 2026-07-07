import { AppButton } from "@/components/common/button";

export function HeroActions() {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
      {/* Primary CTA */}
      <AppButton className="h-14 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-8 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        🚀 Start Learning Free
      </AppButton>

      {/* Secondary CTA */}
      <AppButton
        variant="outline"
        className="h-14 rounded-2xl border-slate-300 bg-white/70 px-8 text-base font-semibold backdrop-blur transition-all duration-300 hover:bg-slate-100"
      >
        ▶ Watch Demo
      </AppButton>
    </div>
  );
}