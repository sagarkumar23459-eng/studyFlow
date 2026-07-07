import {
  PreviewHeader,
  PreviewSidebar,
  PreviewMain,
} from "./preview";

export function HeroPreview() {
  return (
<div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_40px_120px_rgba(15,23,42,0.15)] transition-all duration-300">
      <PreviewHeader />

      <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[280px_1fr]">
        <PreviewSidebar />
        <PreviewMain />
      </div>
    </div>
  );
}