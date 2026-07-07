import type { ReactNode } from 'react';
import ConstructionBg from '@/components/home/ConstructionBg';
import {
  CustomerCentricIcon,
  DurableConstructionIcon,
  OnTimeDeliveryIcon,
  PremiumMaterialsIcon,
  TransparentCostIcon,
} from '@/components/home/WhyChooseIcons';

type WhyChooseItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

const whyChooseItems: WhyChooseItem[] = [
  {
    title: 'On-Time Project Delivery',
    description:
      'We value your time and are committed to completing every project within the promised schedule without compromising on quality.',
    icon: <OnTimeDeliveryIcon className="size-full text-gold transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: 'Premium Quality Materials',
    description:
      'We use trusted brands and high-quality materials to ensure every structure is strong, durable, and built to last.',
    icon: <PremiumMaterialsIcon className="size-full text-gold transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: 'Reliable & Durable Construction',
    description:
      'We build strong, safe, and long-lasting structures using quality materials and proven construction practices.',
    icon: <DurableConstructionIcon className="size-full text-gold transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: 'Transparent Cost Estimation',
    description:
      'Receive clear and detailed project estimates with no hidden charges, ensuring complete transparency from start to finish.',
    icon: <TransparentCostIcon className="size-full text-gold transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: 'Customer-Centric Approach',
    description:
      'Your satisfaction is our priority. We work closely with you at every stage, keeping your ideas and requirements at the heart of every project.',
    icon: <CustomerCentricIcon className="size-full text-gold transition-transform duration-300 group-hover:scale-110" />,
  },
];

export default function WhyChooseOmegaa() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] px-4 py-20 md:px-8 md:py-28 lg:px-16">
      <ConstructionBg />
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <div className="relative px-4 py-8 md:px-8 md:py-12">
            <div>
              <h2 className="text-left text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Why Choose Omegaa?
              </h2>

              <p className="mt-4 text-left text-lg font-light text-slate-500">
                Built on trust, precision, and a commitment to delivering excellence
              </p>
              <div className="mt-4 h-1.5 w-24 rounded-full bg-gold" />

              <div className="mt-10 flex flex-col items-center gap-8 md:mt-12 md:gap-10">
                {whyChooseItems.map((item, index) => (
                  <article
                    key={item.title}
                    className="group relative flex w-full max-w-3xl flex-row items-center justify-start text-left"
                    style={{ zIndex: 10 + index }}
                  >
                    <div className="relative z-30 flex aspect-square size-20 shrink-0 translate-x-4 items-center justify-center rounded-xl border-2 border-gold bg-brand-blue shadow-md transition-transform duration-300 group-hover:scale-105 md:size-28 md:translate-x-8">
                      <div className="pointer-events-none absolute inset-1 rounded-lg border border-white/10" />
                      <div className="flex size-10 items-center justify-center md:size-14">
                        {item.icon}
                      </div>
                    </div>

                    <div className="w-full rounded-2xl border border-white/80 bg-white/95 py-6 pl-10 pr-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_35px_rgba(21,46,255,0.08)] md:py-8 md:pl-16 md:pr-10">
                      <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-light leading-relaxed text-slate-600 md:mt-3 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
