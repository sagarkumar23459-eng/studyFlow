import {
  BrainCircuit,
  BookOpen,
  Files,
  BarChart3,
  Route,
  Cloud,
} from "lucide-react";

import { FeatureCard } from "./features-card";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Tutor",
    description:
      "Ask doubts anytime and receive clear, personalized explanations powered by AI.",
  },
  {
    icon: BookOpen,
    title: "Smart Notes",
    description:
      "Study from clean, organized notes designed for faster understanding and revision.",
  },
  {
    icon: Files,
    title: "Flashcards",
    description:
      "Revise concepts efficiently with automatically generated flashcards.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Track your learning streaks, performance, and daily study goals.",
  },
  {
    icon: Route,
    title: "Learning Roadmap",
    description:
      "Follow a personalized roadmap to complete your syllabus with confidence.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Access your notes and progress securely across all your devices.",
  },
];

export function FeaturesGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}