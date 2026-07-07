import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/landing/hero";
import { Journey } from "@/components/landing/journey";
import { Features } from "@/components/landing/features";

export default function HomePage() {
  return (
    <>
  <Navbar />
  <Hero />
  <Journey />
  <Features />
    </>
  );
}