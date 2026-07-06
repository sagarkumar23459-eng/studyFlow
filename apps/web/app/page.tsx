import { Container } from "@/components/layout/container";

export default function HomePage() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-5xl font-bold">
          Welcome to StudyFlow 🚀
        </h1>

        <p className="mt-6 text-lg text-gray-500">
          Your AI-powered learning platform.
        </p>
      </Container>
    </main>
  );
}