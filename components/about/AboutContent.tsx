import MainHeader from '@/components/layout/MainHeader';
import Footer from '@/components/layout/Footer';
import AboutFounder from '@/components/about/AboutFounder';
import AboutAssociations from '@/components/about/AboutAssociations';
import AboutJourney from '@/components/about/AboutJourney';
import AboutCoreValues from '@/components/about/AboutCoreValues';
import AboutMissionVision from '@/components/about/AboutMissionVision';
import AboutCta from '@/components/about/AboutCta';

export default function AboutContent() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />

      <main className="flex-1">
        <AboutFounder />
        <AboutAssociations />
        <AboutJourney />
        <AboutCoreValues />
        <AboutMissionVision />
        <AboutCta />
      </main>

      <Footer />
    </div>
  );
}
