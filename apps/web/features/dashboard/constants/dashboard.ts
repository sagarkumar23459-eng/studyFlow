import type { DashboardData } from "../types";

export const dashboardData: DashboardData = {
  stats: [],
  continueLearning: {
    subject: "",
    chapter: "",
    progress: 0,
  },
  streak: {
    current: 0,
    longest: 0,
  },
  progress: {
    completed: 0,
    total: 0,
  },
  analytics: {
    studyHours: 0,
    notesRead: 0,
    quizzesCompleted: 0,
  },
};