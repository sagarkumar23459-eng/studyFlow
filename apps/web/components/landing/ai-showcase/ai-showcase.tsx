import { Container } from "@/components/layout/container";
import { AITitle } from "./ai-title";
import { AIDescription } from "./ai-description";
import { AIPreview } from "./ai-preview";

export function AIShowcase() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-7xl">
          <AITitle />

          <AIDescription />

          <AIPreview />
        </div>
      </Container>
    </section>
  );
}