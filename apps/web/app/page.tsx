import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/landing/hero";
import { Journey } from "@/components/landing/journey";
import { Features } from "@/components/landing/features";
import { AIShowcase } from "@/components/landing/ai-showcase";
import { Testimonials } from "@/components/landing/testimonials";

export default function HomePage() {
  return (
    <>
  <Navbar />
  <Hero />
  <Journey />
  <Features />
  <AIShowcase />
  <Testimonials />
    </>
  );
}