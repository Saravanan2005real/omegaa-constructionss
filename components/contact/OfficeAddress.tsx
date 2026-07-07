import Image from 'next/image';
import { MapPin, ExternalLink } from 'lucide-react';
import { officeLocation } from '@/lib/contact';
import { images } from '@/lib/images';

export default function OfficeAddress() {
  return (
    <aside className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white font-sans shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white px-6 py-8 md:px-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-blue/10 bg-brand-blue/10">
          <MapPin className="h-6 w-6 text-brand-blue" aria-hidden="true" />
        </div>

        <h2 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
          {officeLocation.label}
        </h2>
        <p className="mt-2 font-sans text-base font-semibold text-slate-900">
          {officeLocation.name}
        </p>
        <p className="mt-3 font-sans text-sm font-light leading-relaxed text-slate-600">
          Visit our office for project consultations, site discussions, and
          partnership meetings. We look forward to welcoming you.
        </p>
        <div className="mt-5 h-1 w-16 rounded-full bg-gold" />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <a
          href={officeLocation.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/25 hover:shadow-[0_10px_30px_rgba(21,46,255,0.08)]"
          aria-label="Open Omegaa Construction office location in Google Maps"
        >
          <div className="relative h-48 md:h-52">
            <Image
              src={images.map}
              alt="Map showing Omegaa Construction office location"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="bg-white px-5 py-4">
            <address className="font-sans text-base font-normal not-italic leading-relaxed text-slate-700">
              {officeLocation.addressLines.map((line) => (
                <span key={line} className="block font-sans">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-3 flex items-center gap-2 font-sans text-sm font-light text-brand-blue">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              Tap to open in Google Maps
            </p>
          </div>
        </a>

        <a
          href={officeLocation.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-blue bg-brand-blue px-6 py-3.5 font-sans text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue/90 hover:shadow-lg"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {officeLocation.directionsLabel}
          <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
