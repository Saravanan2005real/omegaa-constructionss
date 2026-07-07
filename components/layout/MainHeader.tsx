import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import HeaderTagline from '@/components/layout/HeaderTagline';
import MobileMenu from '@/components/layout/MobileMenu';
import { siteConfig } from '@/lib/seo';
import { images } from '@/lib/images';

export default function MainHeader() {
  return (
    <header className="relative z-50 flex w-full flex-nowrap items-center gap-2 border-b border-slate-200 bg-white px-4 py-4 shadow-sm sm:gap-3 md:gap-4 md:px-6 lg:px-8">
      <Link
        href="/"
        className="flex min-w-0 shrink items-center gap-3 transition-opacity duration-300 hover:opacity-90 md:gap-4 lg:gap-5"
      >
        <div className="inline-flex w-max items-center justify-center overflow-hidden rounded-[10px] transition-transform duration-300 hover:-translate-y-0.5">
          <Image
            src={images.logo}
            alt={`${siteConfig.name} logo`}
            className="h-14 w-auto max-w-[240px] object-contain md:h-[72px] md:max-w-[240px] lg:h-[88px] lg:max-w-[300px]"
            width={440}
            height={100}
            priority
          />
        </div>

        <div
          className="h-10 w-px shrink-0 bg-slate-300 sm:h-12 md:h-16 lg:h-20"
          aria-hidden="true"
        />

        <div className="min-w-0">
          <HeaderTagline />
        </div>
      </Link>

      {/* Desktop nav — hidden on mobile */}
      <Navbar className="ml-auto hidden md:flex" />

      {/* Hamburger — mobile only, renders its own dropdown */}
      <MobileMenu />
    </header>
  );
}
