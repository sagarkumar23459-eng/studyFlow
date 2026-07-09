"use client";

import { sidebarItems } from "../../constants";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r bg-white p-4">
      <div className="mb-8 px-4">
        <h1 className="text-2xl font-bold text-sky-600">
          StudyFlow
        </h1>
      </div>

      <nav className="flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>
    </aside>
  );
}