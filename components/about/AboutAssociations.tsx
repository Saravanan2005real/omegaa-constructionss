import Image from 'next/image';
import { images } from '@/lib/images';

type Association = {
  abbr: string;
  name: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
};

const associations: Association[] = [
  {
    abbr: 'BAI',
    name: 'Builders Association of India',
    logo: images.associations.bai,
    logoAlt: "Builders' Association of India (BAI) logo",
    logoWidth: 225,
    logoHeight: 225,
  },
  {
    abbr: 'KANCEA',
    name: 'Kanchipuram Civil Engineers Association',
    logo: images.associations.kancea,
    logoAlt: 'Kanchipuram Civil Engineers Association (KANCEA) logo',
    logoWidth: 757,
    logoHeight: 254,
  },
];

export default function AboutAssociations() {
  return (
    <section className="relative w-full bg-white px-4 py-16 md:px-8 md:py-24 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Our Memberships
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gold" />
        <p className="mx-auto mt-5 max-w-2xl text-center text-base font-light leading-relaxed text-slate-500 md:text-lg">
          We are proud members of the following professional associations,
          upholding industry standards and best practices in construction.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {associations.map((association) => (
            <li key={association.abbr}>
              <article className="flex h-full flex-col items-center gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(21,46,255,0.08)] md:p-8">
                <div className="flex h-28 w-full items-center justify-center md:h-32">
                  <Image
                    src={association.logo}
                    alt={association.logoAlt}
                    width={association.logoWidth}
                    height={association.logoHeight}
                    className="h-full w-auto max-w-full object-contain"
                    sizes="(max-width: 640px) 80vw, 40vw"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900 md:text-xl">
                    {association.abbr}
                  </p>
                  <p className="mt-1 text-sm font-light text-slate-500 md:text-base">
                    {association.name}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
