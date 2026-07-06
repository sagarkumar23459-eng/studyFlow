// IMPORTANT: globals.css must be imported exactly once in the root layout.
// Keep this import as the very first line.
import "./globals.css";

import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "StudyFlow",
  description: "StudyFlow web app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("min-h-screen bg-background text-foreground", "font-sans", geist.variable)}>
      <body className="min-h-screen antialiased">
  {children}
</body>
    </html>
  );
}