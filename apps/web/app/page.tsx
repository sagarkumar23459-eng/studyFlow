import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/landing/hero";
import { Journey } from "@/components/landing/journey";
import { Features } from "@/components/landing/features";
import { AIShowcase } from "@/components/landing/ai-showcase";

export default function HomePage() {
  return (
    <>
  <Navbar />
  <Hero />
  <Journey />
  <Features />
  <AIShowcase />
    </>
  );
}