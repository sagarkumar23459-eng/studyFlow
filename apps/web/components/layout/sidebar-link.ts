import {
  LayoutDashboard,
  Bot,
  BookOpen,
  Brain,
  FileQuestion,
  Map,
  CalendarDays,
  BarChart3,
  Settings,
} from "lucide-react";

export const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "AI Workspace",
    href: "/dashboard/ai",
    icon: Bot,
  },
  {
    title: "Notes",
    href: "/dashboard/notes",
    icon: BookOpen,
  },
  {
    title: "Flashcards",
    href: "/dashboard/flashcards",
    icon: Brain,
  },
  {
    title: "Quiz",
    href: "/dashboard/quiz",
    icon: FileQuestion,
  },
  {
    title: "Roadmaps",
    href: "/dashboard/roadmaps",
    icon: Map,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: CalendarDays,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];