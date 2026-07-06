
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "@/components/common/logo";
import { NAVIGATION } from "@/constants/navigation";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <Container>
        <nav className="flex h-16 items-center justify-between">
         <Logo />

          <div className="flex items-center gap-6">
  {NAVIGATION.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
    >
      {item.label}
    </Link>
  ))}
</div>
        </nav>
      </Container>
    </header>
  );
}