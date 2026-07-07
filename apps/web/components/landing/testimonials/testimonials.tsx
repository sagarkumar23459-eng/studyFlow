import { Container } from "@/components/layout/container";
import { TestimonialsTitle } from "./testimonials-title";
import { TestimonialsDescription } from "./testimonials-description";
import { TestimonialsStats } from "./testimonials-stats";
import { TestimonialsGrid } from "./testimonials-grid";

export function Testimonials() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-7xl">
          <TestimonialsTitle />

          <TestimonialsDescription />

          <TestimonialsStats />

          <TestimonialsGrid />
        </div>
      </Container>
    </section>
  );
}