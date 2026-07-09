import type { LucideIcon } from "lucide-react";

export interface DashboardStat {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
}

export interface ContinueLearning {
  subject: string;
  chapter: string;
  progress: number;
}

export interface StudyStreak {
  current: number;
  longest: number;
}

export interface StudyProgress {
  completed: number;
  total: number;
}

export interface DashboardAnalytics {
  studyHours: number;
  notesRead: number;
  quizzesCompleted: number;
}

export interface DashboardData {
  stats: DashboardStat[];
  continueLearning: ContinueLearning;
  streak: StudyStreak;
  progress: StudyProgress;
  analytics: DashboardAnalytics;
}