import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ConstructionBg from '@/components/home/ConstructionBg';
import { aboutCta } from '@/lib/about';

export default function AboutCta() {
  return (
    <section className="relative w-full overflow-hidden border-t border-slate-200/80 bg-[#f8fafc] px-4 py-16 md:px-8 md:py-20 lg:px-16">
      <ConstructionBg />
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mx-auto h-1.5 w-24 rounded-full bg-gold" />
        <h2 className="mt-6 text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl">
          {aboutCta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base font-light text-slate-600 md:text-lg">
          {aboutCta.subtext}
        </p>

        <Link
          href={aboutCta.buttonHref}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-blue bg-brand-blue px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue/90 hover:shadow-[0_10px_30px_rgba(21,46,255,0.2)]"
        >
          {aboutCta.buttonLabel}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
