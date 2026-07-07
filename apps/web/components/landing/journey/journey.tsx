import { Container } from "@/components/layout/container";
import { JourneyTitle } from "./journey-title";
import { JourneyDescription } from "./journey-description";
import { JourneySteps } from "./journey-steps";

export function Journey() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-7xl">
          <JourneyTitle />

          <JourneyDescription />

          <JourneySteps />
        </div>
      </Container>
    </section>
  );
}