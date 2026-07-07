import { Fragment, type ReactNode } from 'react';
import ConstructionBg from '@/components/home/ConstructionBg';
import { journeyTimeline } from '@/lib/about';

const HIGHLIGHT_TERM = 'Larsen & Toubro (L&T)';

function renderDescription(description: string): ReactNode {
  if (!description.includes(HIGHLIGHT_TERM)) {
    return description;
  }

  return description.split(HIGHLIGHT_TERM).map((part, index, parts) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <span className="font-semibold text-brand-blue">{HIGHLIGHT_TERM}</span>
      )}
    </Fragment>
  ));
}

function parseYearLabel(year: string) {
  const rangeMatch = year.match(/^(\d{4})\s*[–-]\s*(\d{4})$/);
  if (rangeMatch) {
    return { type: 'range' as const, start: rangeMatch[1], end: rangeMatch[2] };
  }
  return { type: 'single' as const, label: year };
}

function JourneyYearBadge({ year }: { year: string }) {
  const parsed = parseYearLabel(year);

  return (
    <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border-2 border-gold bg-brand-blue px-1.5 text-center shadow-md md:h-[4.5rem] md:w-[4.5rem] md:px-2">
      {parsed.type === 'range' ? (
        <>
          <span className="text-[11px] font-bold leading-none text-gold md:text-xs">
            {parsed.start}
          </span>
          <span className="my-0.5 text-[9px] font-bold leading-none text-gold/90 md:text-[10px]">
            –
          </span>
          <span className="text-[11px] font-bold leading-none text-gold md:text-xs">
            {parsed.end}
          </span>
        </>
      ) : (
        <span className="text-xs font-bold leading-tight text-gold md:text-sm">
          {parsed.label}
        </span>
      )}
    </div>
  );
}

export default function AboutJourney() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] px-4 py-16 md:px-8 md:py-24 lg:px-16">
      <ConstructionBg />
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-12 text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Our Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-slate-500">
            Three decades of building trust, one project at a time
          </p>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gold" />
        </div>

        <div className="relative">
          {/* Continuous vertical timeline line passing through the center of the badges */}
          <span
            className="absolute left-[28px] top-[28px] bottom-[28px] w-0.5 rounded-full bg-gradient-to-b from-gold via-[#E8CD82] to-gold/70 shadow-[0_0_6px_rgba(212,175,55,0.35)] md:left-[36px] md:top-[36px] md:bottom-[36px]"
            aria-hidden="true"
          />

          <ol className="relative space-y-10">
            {journeyTimeline.map((item) => (
              <li key={item.title} className="relative flex items-center gap-6 md:gap-10">
                <JourneyYearBadge year={item.year} />

                <article className="flex-1 rounded-2xl border border-white/80 bg-white/95 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(21,46,255,0.08)] md:p-6">
                  <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-slate-600 md:text-base">
                    {renderDescription(item.description)}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        {/* Standalone Trust Callout Design Box */}
        <div className="mt-16 rounded-3xl border border-gold/30 bg-gradient-to-r from-brand-blue to-[#0e21bc] p-8 text-center text-white shadow-[0_12px_40px_rgba(21,46,255,0.12)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,205,130,0.12),transparent)] pointer-events-none" aria-hidden="true" />
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-xl font-bold tracking-tight text-[#E8CD82] md:text-2xl lg:text-3xl">
              30+ Years of Trusted Construction Excellence
            </h3>
            <div className="w-16 h-1 bg-gold/50 my-4 rounded-full" />
            <p className="max-w-2xl text-sm font-light leading-relaxed text-slate-100 md:text-base lg:text-lg">
              Continuing to serve clients with the same dedication to quality, transparency, and on-time delivery that defined our founding years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
