import React from 'react';
import MainHeader from '@/components/layout/MainHeader';
import Footer from '@/components/layout/Footer';
import ConstructionBg from '@/components/home/ConstructionBg';
import HomeHeroCarousel from '@/components/home/HomeHeroCarousel';
import WhyChooseOmegaa from '@/components/home/WhyChooseOmegaa';
import { createPageMetadata, siteConfig } from '@/lib/seo';
import { images } from '@/lib/images';

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: '/',
});

function SketchUpMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100.1 109.27"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M100.1,24.02L64.69,3.61c0,0-5.61-3.28-14.56-3.28c-9.32,0-14.72,3.38-14.72,3.38L2.61,22.48l49.9,28.68v57.96l32.84-18.75c0,0,5.87-3.24,10.33-10.94c3.93-6.78,4.42-13.34,4.42-13.34V24.02L100.1,24.02z M46.7,33.46c0,0,7.32-1.35,13.51,2.22c6.19,3.57,9.84,5.67,9.84,5.67s0.01,4.97,0.01,12.4c0,5.95-5.04,12.12-5.04,12.12l0.01-21.83L46.7,33.46z M75.72,81.34l-10.69,6.13v-5.75l8.32-4.76c7.92-5.71,9.23-14.13,9.23-17.05l-0.03-25.86L59.86,20.99c0,0-3.45-2.26-9.65-2.26s-9.58,2.09-9.58,2.09l-7.97,4.58l-5.03-2.91l11.01-6.29c0,0,4.31-2.39,11.53-2.39c6.63,0,11.79,2.59,11.79,2.59l25.62,14.8l-0.03,28.22C87.73,63.76,85.71,74.36,75.72,81.34z"
      />
      <path
        fill="currentColor"
        d="M0.09,41.25l34.98,20.07l-0.03,5.98L15.14,55.89L2.62,63.01l32.4,18.67l0.02,5.76L0.33,67.47c0.09,2.34,2.21,9.55,6.27,15.13c4.12,5.65,8.82,8.05,8.82,8.05l32.08,18.47V54.04L0.12,26.83L0.09,41.25z"
      />
    </svg>
  );
}

export default function HomePage() {
  type ServiceItem = {
    title: string;
    description: string;
    icon: React.ReactNode;
    logoIcon?: boolean;
  };

  const services: ServiceItem[] = [
    {
      title: 'Residential Construction',
      description: 'We build quality homes designed around your lifestyle.',
      icon: (
        <svg className="size-full text-gold transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      title: 'Commercial Construction',
      description: 'Reliable construction solutions for offices and commercial spaces.',
      icon: (
        <svg className="size-full text-gold transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3.75-6H15m-1.5 3H15m-1.5 3H15M9 16.5h1.5m3.75 0H15" />
        </svg>
      ),
    },
    {
      title: 'Interior Design',
      description: 'Elegant and functional interiors tailored to your needs.',
      icon: (
        <svg className="size-full text-gold transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v18M20.25 3v18M3.75 7.5h16.5M3.75 16.5h16.5m-12-9v9m7.5-9v9" />
        </svg>
      ),
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transforming existing spaces with modern design and craftsmanship.',
      icon: (
        <svg className="size-full text-gold transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v1.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-1.5m6.75 9h4.5" />
        </svg>
      ),
    },
    {
      title: 'Architectural Planning',
      description: 'Smart planning and innovative designs for every project.',
      icon: (
        <svg className="size-full text-gold transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 0L16.5 16.5m3-10.5L6 18M3 21h18M12 12h.008v.008H12V12zm0 3h.008v.008H12V15zm0-6h.008v.008H12V9zm-3 3h.008v.008H9V12zm6 0h.008v.008H15V12z" />
        </svg>
      ),
    },
    {
      title: '3D SketchUp Drawing & Visualization',
      description:
        'Professional SketchUp drawings and 3D visualizations so you can preview your project before construction begins.',
      icon: (
        <SketchUpMarkIcon className="size-full text-gold transition-transform duration-300 group-hover:scale-110" />
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />

      <main className="w-full">
        <HomeHeroCarousel images={images.heroSlides} />
      </main>


      <section className="relative mt-2 w-full overflow-hidden bg-[#f8fafc] px-4 py-20 md:mt-3 md:px-8 md:py-28 lg:mt-4 lg:px-16">
        <ConstructionBg />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Services we provide
            </h2>
            <p className="mt-4 text-slate-500 text-lg font-light">
              We offer a wide range of services to meet your needs
            </p>
            <div className="w-24 h-1.5 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="flex flex-col gap-6 py-8 md:gap-0">
            {services.map(({ title, description, icon, logoIcon }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={title}
                  className={`relative w-full md:w-[62%] lg:w-[58%] flex items-center group md:mb-10 lg:mb-12 ${
                    isLeft
                      ? 'mr-auto flex-row text-left justify-start'
                      : 'ml-auto flex-row-reverse text-right justify-start md:text-right'
                  }`}
                  style={{
                    zIndex: 10 + i,
                  }}
                >
                  {/* Square Icon Container Box */}
                  <div
                    className={`relative z-30 flex aspect-square size-20 shrink-0 items-center justify-center rounded-xl border-2 border-gold bg-brand-blue shadow-md transition-transform duration-300 group-hover:scale-105 md:size-28 ${
                      isLeft
                        ? 'translate-x-4 md:translate-x-8'
                        : '-translate-x-4 md:-translate-x-8'
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-1 rounded-lg border border-white/5" />
                    <div
                      className={
                        logoIcon
                          ? 'flex w-[4.25rem] items-center justify-center rounded-md bg-white p-1.5 transition-transform duration-300 group-hover:scale-105 md:w-20 md:p-2'
                          : 'flex size-10 items-center justify-center md:size-14'
                      }
                    >
                      {icon}
                    </div>
                  </div>

                  {/* Horizontal Text Banner Box */}
                  <div
                    className={`bg-white/95 backdrop-blur-md border border-slate-100 hover:border-gold/30 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(21,46,255,0.08)] transition-all duration-300 py-6 md:py-8 w-full ${
                      isLeft 
                        ? 'pl-10 pr-6 md:pl-16 md:pr-10' 
                        : 'pr-10 pl-6 md:pr-16 md:pl-10'
                    }`}
                  >
                    <h3 className="mb-2 text-xl font-semibold text-slate-900 md:text-2xl">
                      {title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseOmegaa />

      <Footer />
    </div>
  );
}


