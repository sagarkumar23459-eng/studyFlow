import { auth } from "@clerk/nextjs/server";

import {
  DashboardLayout,
  WelcomeCard,
  StatCard,
  ContinueLearningCard,
  AICard,
  ProgressWidget,
  StreakWidget,
  CalendarWidget,
  AnalyticsWidget,
} from "@/features/dashboard";

import {
  BookOpen,
  Flame,
  Target,
  Clock3,
} from "lucide-react";

import { NotesPreviewCard } from "@/features/notes";

import { FlashcardsPreviewCard } from "@/features/flashcards";

import { QuizPreviewCard } from "@/features/quiz";


export default async function DashboardPage() {
  const { userId } = await auth();

  return (
    <DashboardLayout>
  <WelcomeCard />

  {/* Stats */}
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    ...
  </div>

  {/* Continue Learning */}
  <ContinueLearningCard />

  {/* AI Workspace */}
  <AICard />

  {/* Dashboard Widgets */}
  <div className="grid gap-6 lg:grid-cols-2">
    <ProgressWidget />
    <StreakWidget />
    <CalendarWidget />
    <AnalyticsWidget />
  </div>

  {/* Recent Activity */}
  <NotesPreviewCard />
  <FlashcardsPreviewCard />
  <QuizPreviewCard />
</DashboardLayout>
  );
}