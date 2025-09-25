'use client';

import { useState } from 'react';
import { MenuButton } from './menu-button';

interface MobileMenuProps {
  children: React.ReactNode;
}

export function MobileMenu({ children }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </>
  );
}