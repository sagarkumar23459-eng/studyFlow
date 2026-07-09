import type { ReactNode } from "react";

import { Sidebar } from "./sidebar";
import { TopNavbar } from "./top-navbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <TopNavbar />

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}