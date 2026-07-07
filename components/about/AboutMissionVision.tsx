import { Eye, Target } from 'lucide-react';
import { missionVision } from '@/lib/about';

export default function AboutMissionVision() {
  return (
    <section className="relative w-full bg-white px-4 py-16 md:px-8 md:py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Mission &amp; Vision
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gold" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <article className="group rounded-3xl border border-slate-200/80 bg-gradient-to-br from-brand-blue to-brand-blue/90 p-8 text-white shadow-[0_12px_40px_rgba(21,46,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(21,46,255,0.25)] md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold/40 bg-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:border-gold/70 group-hover:bg-white/15">
              <Target className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-gold">Mission</h3>
            <p className="mt-4 text-base font-light leading-relaxed text-white/95 transition-colors duration-300 group-hover:text-white md:text-lg">
              {missionVision.mission}
            </p>
          </article>

          <article className="group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(21,46,255,0.12)] md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-gold bg-brand-blue/10 transition-all duration-300 group-hover:scale-105 group-hover:border-gold group-hover:bg-brand-blue group-hover:text-white">
              <Eye className="h-7 w-7 text-brand-blue transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-brand-blue">
              Vision
            </h3>
            <p className="mt-4 text-base font-light leading-relaxed text-slate-600 md:text-lg">
              {missionVision.vision}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
