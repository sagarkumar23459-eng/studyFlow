import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`text-2xl font-extrabold tracking-tight text-blue-600 ${className}`}
    >
      StudyFlow
    </Link>
  );
}