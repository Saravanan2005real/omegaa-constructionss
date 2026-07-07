import MainHeader from '@/components/layout/MainHeader';
import Footer from '@/components/layout/Footer';
import ContactDetails from '@/components/contact/ContactDetails';
import OfficeAddress from '@/components/contact/OfficeAddress';
import { JsonLd } from '@/components/seo/JsonLd';
import { createPageMetadata, siteConfig } from '@/lib/seo';
import { officeLocation } from '@/lib/contact';

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description:
    'Connect with Omegaa Constructions for project consultations, quotes, and site visits. Share your details and schedule a meeting with our team.',
  path: '/contact',
});

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${siteConfig.name}`,
  description: 'Contact Omegaa Constructions to schedule a consultation.',
  url: `${siteConfig.url}/contact`,
  mainEntity: {
    '@type': 'GeneralContractor',
    name: siteConfig.name,
    url: siteConfig.url,
    hasMap: officeLocation.mapsUrl,
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <JsonLd data={contactPageSchema} />
      <MainHeader />

      <main className="flex-1 bg-white">
        <section className="relative overflow-hidden px-4 py-12 md:px-8 md:py-16 lg:px-16">
          <div
            className="bg-blueprint pointer-events-none absolute inset-0 opacity-30"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-10 text-center md:mb-14">
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                Tell Us About Your Project
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base font-light text-slate-600 md:text-lg">
                Share your project vision with us — our team is ready to listen,
                advise, and deliver with precision.
              </p>
              <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-gold" />
            </div>

            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
              <ContactDetails />
              <OfficeAddress />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
