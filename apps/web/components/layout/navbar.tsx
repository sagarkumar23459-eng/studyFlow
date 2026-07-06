
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "@/components/common/logo";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <Container>
        <nav className="flex h-16 items-center justify-between">
         <Logo />

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}