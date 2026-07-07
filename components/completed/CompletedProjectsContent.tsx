import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MainHeader from '@/components/layout/MainHeader';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/ui/FadeIn';
import CompletedProjectsHeroCarousel from '@/components/completed/CompletedProjectsHeroCarousel';
import {
  completedProjects,
  completedProjectsHeroSlides,
} from '@/lib/completed-projects';

export default function CompletedProjectsContent() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />

      <main className="flex-1 bg-[#f8fafc]">
        <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <FadeIn>
              <div className="mb-10 text-center md:mb-12">
                <h1 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                  Completed Projects
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base font-light text-slate-600 md:text-lg">
                  Explore our finished work — built with precision, delivered on
                  time, and crafted to last.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mx-auto mb-8 w-full max-w-[1400px] md:mb-10">
            <CompletedProjectsHeroCarousel images={completedProjectsHeroSlides} />
          </FadeIn>

          <div className="mx-auto max-w-6xl">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
                {completedProjects.map((project, index) => (
                  <FadeIn key={project.slug}>
                    <Link
                      href={`/completed/${project.slug}`}
                      className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
                    >
                      <div className="relative h-44 overflow-hidden sm:h-48">
                        <Image
                          src={project.coverImage}
                          alt={`${project.name} completed project`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 50vw"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-slate-900/20 transition-colors duration-300 group-hover:bg-slate-900/10" />
                      </div>
                      <div className="flex items-center justify-between gap-4 p-5">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {project.name}
                          </h3>
                          <p className="mt-1 line-clamp-2 text-sm font-light text-slate-600">
                            {project.summary}
                          </p>
                        </div>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                          <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
