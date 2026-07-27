import Link from "next/link";
import Container from "@/src/components/ui/Container";
import Logo from "@/src/components/layout/Logo";
import MobileMenu from "@/src/components/layout/MobileMenu";
import { navigationLinks } from "@/src/data/navigation";

const links = [
  {
    name: "Bands",
    href: "/bands",
  },
  {
    name: "Albums",
    href: "/albums",
  },
  {
    name: "Favorites",
    href: "/favorites",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}