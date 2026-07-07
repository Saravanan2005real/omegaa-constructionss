import { siteConfig } from '@/lib/seo';

type SiteTaglineProps = {
  variant: 'header' | 'footer';
};

const taglineStyles = {
  header:
    'text-left text-xs font-medium leading-snug tracking-wide text-slate-800 sm:text-sm md:text-base lg:text-lg',
  footer: 'mt-2 text-sm font-light text-white',
} as const;

export default function SiteTagline({ variant }: SiteTaglineProps) {
  if (variant === 'header') {
    return (
      <p className={taglineStyles.header}>
        An Engineering and Construction
        <br />
        @ its best
      </p>
    );
  }
  return <p className={taglineStyles.footer}>{siteConfig.tagline}</p>;
}
