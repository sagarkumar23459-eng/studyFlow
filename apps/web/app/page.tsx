import { Navbar } from "@/components/layout/navbar";

import { Container } from "@/components/layout/container";

import { AppButton } from "@/components/common/button";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <Container>
          <h1 className="text-5xl font-bold">
            Welcome to StudyFlow 🚀
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Your AI-powered learning platform.
          </p>
          <div className="flex min-h-screen items-center justify-center">
  <AppButton>Get Started</AppButton>
</div>
        </Container>
      </main>
    </>
  );
}