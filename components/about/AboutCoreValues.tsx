import {
  Handshake,
  Heart,
  Shield,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { coreValues } from '@/lib/about';

const valueIcons: Record<(typeof coreValues)[number]['title'], LucideIcon> = {
  Integrity: Shield,
  Quality: Sparkles,
  Transparency: Handshake,
  Safety: ShieldCheck,
  'Customer Satisfaction': Heart,
};

export default function AboutCoreValues() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] px-4 py-16 md:px-8 md:py-24 lg:px-16">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Our Core Values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-slate-500">
            The principles that guide every project we build
          </p>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gold" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {coreValues.map((value, index) => {
            const Icon = valueIcons[value.title];
            return (
              <article
                key={value.title}
                className={`group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_12px_35px_rgba(21,46,255,0.08)] md:p-7 lg:col-span-2 ${
                  index === 3 ? 'lg:col-start-2' : ''
                } ${index === 4 ? 'sm:col-span-2 sm:mx-auto sm:max-w-md lg:mx-0 lg:max-w-none' : ''}`}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-gold bg-brand-blue shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-gold group-hover:bg-brand-blue/95 group-hover:shadow-[0_8px_24px_rgba(212,175,55,0.35)]">
                  <Icon
                    className="h-6 w-6 fill-transparent text-gold transition-all duration-300 group-hover:scale-110 group-hover:fill-gold group-hover:text-gold"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-slate-600 md:text-base">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
