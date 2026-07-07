import { Container } from "@/components/layout/container";
import { PricingTitle } from "./pricing-title";
import { PricingDescription } from "./pricing-description";
import { PricingGrid } from "./pricing-grid";
import { PricingFAQ } from "./pricing-faq";

export function Pricing() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-7xl">
          <PricingTitle />

          <PricingDescription />

          <PricingGrid />

          <PricingFAQ />
        </div>
      </Container>
    </section>
  );
}