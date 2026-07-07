import { Container } from "@/components/layout/container";
import { FeaturesTitle } from "./features-title";
import { FeaturesDescription } from "./features-description";
import { FeaturesGrid } from "./features-grid";

export function Features() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-7xl">
          <FeaturesTitle />

          <FeaturesDescription />

          <FeaturesGrid />
        </div>
      </Container>
    </section>
  );
}