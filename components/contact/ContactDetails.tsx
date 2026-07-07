import type { ReactNode } from 'react';
import { Mail, Phone } from 'lucide-react';
import { contactChannels } from '@/lib/contact';

const contactLabelClass =
  'font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue';

const contactValueClass =
  'font-sans text-base font-normal text-slate-900 transition-colors';

const contactHelperClass = 'font-sans text-sm font-light text-slate-500';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type ChannelCardProps = {
  href: string;
  label: string;
  icon: ReactNode;
  children: ReactNode;
  external?: boolean;
};

function ChannelCard({ href, label, icon, children, external }: ChannelCardProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/25 hover:shadow-[0_10px_30px_rgba(21,46,255,0.08)] md:p-6"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-blue/10 bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
          {icon}
        </span>
        <span className={contactLabelClass}>
          {label}
        </span>
      </div>
      <div className="mt-4 space-y-1">{children}</div>
    </a>
  );
}

function PhoneCard() {
  return (
    <div className="group font-sans rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand-blue/25 hover:shadow-[0_10px_30px_rgba(21,46,255,0.08)] md:p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-blue/10 bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
          <Phone className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className={contactLabelClass}>Phone</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        {contactChannels.phones.map((phone) => (
          <a
            key={phone.href}
            href={phone.href}
            className={`inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-brand-blue/5 hover:border-brand-blue/20 hover:text-brand-blue px-4 py-2.5 transition-all duration-200 ${contactValueClass}`}
          >
            <Phone className="h-4 w-4 text-slate-400" />
            {phone.display}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ContactDetails() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white font-sans shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white px-6 py-8 md:px-8 md:py-10">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Get in Touch with Omegaa
        </h2>
        <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-slate-600 md:text-base">
          Reach out to discuss your project, request a consultation, or schedule a
          site visit with our team.
        </p>
        <div className="mt-5 h-1 w-16 rounded-full bg-gold" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 md:gap-5 md:p-8">
        <PhoneCard />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <ChannelCard
            href={contactChannels.whatsapp.href}
            label="WhatsApp"
            icon={<WhatsAppIcon className="h-5 w-5" />}
            external
          >
            <span className={`block whitespace-nowrap group-hover:text-brand-blue ${contactValueClass}`}>
              {contactChannels.whatsapp.display}
            </span>
            <span className={`block ${contactHelperClass}`}>
              Chat with us on WhatsApp
            </span>
          </ChannelCard>

          <ChannelCard
            href={`mailto:${contactChannels.email}`}
            label="Email"
            icon={<Mail className="h-5 w-5" />}
          >
            <span className={`block whitespace-nowrap group-hover:text-brand-blue ${contactValueClass}`}>
              {contactChannels.email}
            </span>
          </ChannelCard>
        </div>

        <p className="mt-auto rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-4 text-sm font-light leading-relaxed text-slate-600">
          You can also visit our office in Kanchipuram for in-person consultations.
          We look forward to hearing about your project.
        </p>
      </div>
    </div>
  );
}
