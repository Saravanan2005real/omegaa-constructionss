import MainHeader from '@/components/layout/MainHeader';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/ui/FadeIn';

type PlaceholderPageProps = {
  title: string;
  message: string;
};

export default function PlaceholderPage({ title, message }: PlaceholderPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />

      <main className="flex-1 bg-[#f8fafc]">
        <section className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-12 text-center md:min-h-[60vh] md:px-8 md:py-16 lg:min-h-[70vh] lg:px-16">
          <FadeIn>
            <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">{message}</p>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
