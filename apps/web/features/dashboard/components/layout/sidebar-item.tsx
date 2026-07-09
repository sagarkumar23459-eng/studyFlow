"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export function SidebarItem({
  title,
  href,
  icon: Icon,
}: SidebarItemProps) {
  const pathname = usePathname();

  const active =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-xl px-4 py-3 transition-all",
        active
          ? "bg-sky-600 text-white shadow"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{title}</span>
    </Link>
  );
}