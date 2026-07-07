'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '@/lib/constants';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Hamburger toggle — mobile only */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-colors hover:bg-slate-200 md:hidden"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {/* Slide-down nav panel */}
      <AnimatePresence initial={false}>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[var(--header-h,72px)] z-40 bg-slate-950/40 backdrop-blur-sm md:hidden"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              id="mobile-nav"
              key="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="absolute left-0 right-0 top-full z-50 border-b border-slate-200 bg-white px-4 pb-4 pt-2 shadow-xl md:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col divide-y divide-slate-100">
                {navItems.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`flex w-full items-center py-3.5 text-base font-medium transition-colors ${
                          isActive
                            ? 'text-gold font-semibold'
                            : 'text-slate-800 hover:text-slate-900'
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {isActive && (
                          <span
                            className="mr-3 h-4 w-1 rounded-full bg-gold"
                            aria-hidden="true"
                          />
                        )}
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
