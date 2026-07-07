import Link from 'next/link';
import { navItems } from '@/lib/constants';

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className = '' }: NavbarProps) {
  return (
    <nav
      className={`flex shrink-0 flex-nowrap items-center justify-end gap-[10.5px] sm:gap-[14.5px] md:gap-[18.5px] lg:gap-[22.5px] xl:gap-[30.5px] ${className}`}
      aria-label="Main navigation"
    >
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          prefetch={true}
          className="group/link relative whitespace-nowrap rounded-lg px-2 py-2 text-sm font-normal text-slate-900 md:px-3 md:text-base lg:px-4 lg:text-lg"
        >
          {/* Invisible bold copy — reserves bold width so layout never shifts */}
          <span
            className="pointer-events-none block h-0 overflow-hidden font-bold"
            aria-hidden="true"
          >
            {label}
          </span>

          {/* Visible label — transitions colour, not weight */}
          <span className="block transition-colors duration-200 group-hover/link:text-slate-900">
            {label}
          </span>

          {/* Underline slide-in */}
          <span
            className="absolute bottom-0 left-0 h-[2.5px] w-0 rounded-full bg-slate-900 transition-[width] duration-500 ease-in-out group-hover/link:w-full"
            aria-hidden="true"
          />
        </Link>
      ))}
    </nav>
  );
}
