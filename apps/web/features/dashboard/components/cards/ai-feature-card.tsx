import type { LucideIcon } from "lucide-react";
import Link from "next/link";


type AIFeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href : string;
};

export function AIFeatureCard({
  title,
  description,
  icon: Icon,
  href,
}: AIFeatureCardProps) {
  return (
   <button>
    <Link
  href={href}
  className="
    block
    rounded-2xl
    border
    border-white/20
    bg-white/10
    p-5
    text-left
    backdrop-blur
    transition-all
    hover:scale-[1.03]
    hover:bg-white/20
  "
>
  <Icon className="mb-4 h-8 w-8" />

  <h3 className="text-lg font-semibold">
    {title}
  </h3>

  <p className="mt-2 text-sm text-sky-100">
    {description}
  </p>
</Link>
   </button>
  );
}