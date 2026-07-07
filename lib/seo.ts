import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Omegaa Constructions',
  tagline: 'An Engineering and Construction @ its best',
  description:
    'Premium engineering and construction services with 30+ years of experience. Residential, commercial, and turnkey projects built on time with quality you can trust.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://omegaaconstructions.com',
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = '',
}: PageMetadataInput): Metadata {
  const pageTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    slogan: siteConfig.tagline,
  };
}
