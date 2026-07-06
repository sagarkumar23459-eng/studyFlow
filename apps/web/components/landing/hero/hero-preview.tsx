import {
  PreviewHeader,
  PreviewSidebar,
  PreviewMain,
} from "./preview";

export function HeroPreview() {
  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
      <PreviewHeader />

      <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[260px_1fr]">
        <PreviewSidebar />
        <PreviewMain />
      </div>
    </div>
  );
}