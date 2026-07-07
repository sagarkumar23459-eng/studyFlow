import {
  BookOpen,
  BrainCircuit,
  FileText,
  BarChart3,
  Trophy,
} from "lucide-react";

import { JourneyCard } from "./journey-card";

const steps = [
  {
    icon: BookOpen,
    title: "Learn",
    description:
      "Access high-quality notes and structured lessons designed for focused learning.",
  },
  {
    icon: BrainCircuit,
    title: "Practice with AI",
    description:
      "Ask questions, clear doubts, and get personalized explanations from your AI Tutor.",
  },
  {
    icon: FileText,
    title: "Create Smart Notes",
    description:
      "Generate summaries, revision sheets, and flashcards in seconds.",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    description:
      "Monitor your learning streaks, performance, and daily goals effortlessly.",
  },
  {
    icon: Trophy,
    title: "Achieve Your Goals",
    description:
      "Stay consistent, prepare smarter, and perform confidently in every exam.",
  },
];

export function JourneySteps() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
      {steps.map((step) => (
        <JourneyCard
          key={step.title}
          icon={step.icon}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}