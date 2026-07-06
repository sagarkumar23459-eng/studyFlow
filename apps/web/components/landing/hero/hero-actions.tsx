import { AppButton } from "@/components/common/button";

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <AppButton>
        Start Learning
      </AppButton>

      <AppButton variant="outline">
        Watch Demo
      </AppButton>
    </div>
  );
}