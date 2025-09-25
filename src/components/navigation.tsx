import Link from 'next/link';
import { Edit } from 'react-feather';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/ui/mobile-menu';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Pottery Painting', href: '/pottery' },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const NavLinks = () => (
  <>
    {navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:text-indigo-600 transition-colors"
      >
        {link.name}
      </Link>
    ))}
  </>
);

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Edit className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 playfair">
                Clay Girls
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <NavLinks />
            <Button size="default">Book Appointment</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileMenu>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLinks />
                <Button size="default" className="w-full mt-4">
                  Book Appointment
                </Button>
              </div>
            </MobileMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}