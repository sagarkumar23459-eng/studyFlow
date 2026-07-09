// IMPORTANT: globals.css must be imported exactly once in the root layout.
// Keep this import as the very first line.
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}