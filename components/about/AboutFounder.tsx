import Image from 'next/image';
import { Fragment } from 'react';
import { Award, Calendar, Quote } from 'lucide-react';
import { founder } from '@/lib/about';

function renderPhilosophyWithFounderName(text: string) {
  const parts = text.split(founder.name);
  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <span className="whitespace-nowrap">{founder.name}</span>
      )}
    </Fragment>
  ));
}

export default function AboutFounder() {
  return (
    <section className="relative w-full bg-white px-4 py-16 md:px-8 md:py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Our Founder
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gold" />

        <article className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          <div className="absolute left-0 top-0 z-10 h-full w-1.5 bg-gold" aria-hidden="true" />

          <div className="flex flex-col md:flex-row">
            {/* Photo — 45% */}
            <div className="flex w-full shrink-0 flex-col border-b border-slate-200/80 md:w-[45%] md:border-b-0 md:border-r">
              <div className="relative aspect-[4/3] w-full bg-slate-50/50">
                <Image
                  src={founder.photo.src}
                  alt={founder.photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain"
                />
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/25"
                  aria-hidden="true"
                />
              </div>
              <div className="bg-white px-5 py-4 md:px-6 md:py-5 border-t border-slate-100">
                <p className="whitespace-nowrap text-lg font-semibold text-slate-900">{founder.name}</p>
                <p className="mt-1 whitespace-nowrap text-sm font-light text-slate-500">
                  Founder, Omegaa Construction
                </p>
              </div>
            </div>

            {/* Description — 55% */}
            <div className="relative w-full bg-slate-50 px-6 py-8 md:w-[55%] md:px-10 md:py-10 flex flex-col justify-center">
              <Quote
                className="absolute right-5 top-5 h-14 w-14 text-brand-blue/10 md:right-8 md:top-8 md:h-20 md:w-20"
                aria-hidden="true"
              />

              <div className="relative mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-slate-900 shadow-[0_4px_14px_rgba(212,175,55,0.35)]">
                  <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {founder.experience} of Experience
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm">
                  <Calendar
                    className="h-4 w-4 shrink-0 text-brand-blue"
                    aria-hidden="true"
                  />
                  Founded Omegaa in {founder.foundedYear}
                </span>
              </div>

              <p className="relative text-justify text-base font-light leading-relaxed text-slate-700 md:text-lg md:leading-relaxed">
                {renderPhilosophyWithFounderName(founder.philosophy)}
              </p>
              <p className="relative mt-4 text-justify text-base font-light leading-relaxed text-slate-700 md:text-lg md:leading-relaxed">
                {founder.philosophySecondary}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
