import Link from 'next/link';
import { navItems } from '@/lib/constants';
import SiteTagline from '@/components/layout/SiteTagline';
import { FooterSocialLinks, FooterContactLinks } from '@/components/layout/SocialIcons';

export default function Footer() {
  return (
    <footer className="w-full bg-[#152eff] text-white py-12 px-4 md:px-8 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {/* Left Column: Logo & Tagline */}
          <div className="flex flex-col justify-start text-center md:border-r-2 md:border-gold md:pr-10 md:text-left lg:pr-14">
            <h2 className="font-sans text-xl font-light uppercase tracking-wider text-[#E8CD82] md:text-2xl">
              OMEGAA CONSTRUCTION
            </h2>
            <SiteTagline variant="footer" />
          </div>

          {/* Center Column: Quick Links */}
          <div className="flex flex-col items-center justify-start text-center md:border-r-2 md:border-gold md:px-10 md:items-start lg:px-14">
            <h3 className="text-sm font-semibold text-gold tracking-widest uppercase mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 w-full items-start">
              {navItems.map(({ href, label }) => (
                <li key={href} className="w-full">
                  <Link
                    href={href}
                    prefetch={true}
                    className="text-white hover:text-gold transition-colors duration-200 text-sm font-normal text-left block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Social & Contact Icons */}
          <div className="flex w-full flex-col items-center justify-start md:items-end md:pl-10 lg:pl-14">
            <div className="inline-flex flex-col items-start">
              <h3 className="mb-4 text-left text-sm font-semibold uppercase tracking-widest text-gold">
                Follow Us
              </h3>
              <FooterSocialLinks />

              <h3 className="mt-6 mb-4 text-left text-sm font-semibold uppercase tracking-widest text-gold">
                Contact Us
              </h3>
              <FooterContactLinks />
            </div>
          </div>
        </div>

        {/* Bottom Footer: Copyright */}
        <div className="text-center text-xs font-light tracking-wider text-white">
          © 2026{' '}
          <span className="font-sans font-light text-[#E8CD82]">OMEGAA CONSTRUCTION</span>. All
          copyrights are reserved.
        </div>
      </div>
    </footer>
  );
}
