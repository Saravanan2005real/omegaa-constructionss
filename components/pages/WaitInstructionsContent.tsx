'use client';

import { Activity } from 'lucide-react';
import MainHeader from '@/components/layout/MainHeader';
import FadeIn from '@/components/ui/FadeIn';

export default function WaitInstructionsContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />

      <section className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center md:min-h-[60vh] lg:min-h-[80vh]">
        <FadeIn>
          <div
            className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10"
            aria-hidden="true"
          >
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-primary/40" />
            <Activity size={40} className="relative text-primary" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
            System Standing By
          </h1>
          <p className="mt-4 text-lg text-muted md:text-xl">
            Waiting for your instructions...
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
