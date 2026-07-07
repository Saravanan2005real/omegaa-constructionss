import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';
import SmoothScroll from '@/components/ui/SmoothScroll';
import { createPageMetadata, siteConfig } from '@/lib/seo';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force page to always start at top on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if (history.scrollRestoration) { history.scrollRestoration = 'manual'; } window.scrollTo(0, 0);`,
          }}
        />
      </head>
      <body className={raleway.variable}>
        <OrganizationJsonLd />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
