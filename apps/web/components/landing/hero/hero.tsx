import { Container } from "@/components/layout/container";
import { HeroBadge } from "./hero-badge";
import { HeroTitle } from "./hero-title";
import { HeroDescription } from "./hero-description";
import { HeroActions } from "./hero-actions";
import { HeroPreview } from "./hero-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-28">
      {/* Background */}
      
      <div className="absolute left-1/2 top-0 -z-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
<div className="absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />

<div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
      <Container>
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <HeroBadge />

          <HeroTitle />

          <HeroDescription />

          <HeroActions />

          <div className="mt-16 w-full lg:mt-24">
  <HeroPreview />
</div>
        </div>
      </Container>
    </section>
  );
}