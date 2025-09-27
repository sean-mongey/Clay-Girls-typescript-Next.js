import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/ui/mobile-menu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Workshops", href: "/workshops" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
  <>
    {navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className={`text-clay-800 px-3 py-2 rounded-md text-sm font-medium hover:text-amber-800 hover:bg-clay-300 transition-all duration-100 ease-in-out ${
          isMobile ? 'block w-full text-left' : ''
        }`}
      >
        {link.name}
      </Link>
    ))}
  </>
);

export function Navigation() {
  return (
    <nav className="bg-clay-100 shadow-lg sticky top-0 z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                src="/images/logos/clayGirlsLogo.jpg"
                alt="Clay Girls"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="ml-2 text-xl font-bold text-clay-800 playfair">
                Clay Girls
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileMenu>
              <div className="space-y-2">
                <NavLinks isMobile={true} />
              </div>
            </MobileMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
