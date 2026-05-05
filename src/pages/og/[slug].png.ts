import type { APIRoute, GetStaticPaths } from 'astro';
import { renderOgPng } from '../../lib/og';
import { ogPages } from '../../lib/og-pages';

// Smart default for the OG card's bottom-right text based on slug family.
// Pages keep their product/brand identifier without needing an explicit
// footerRight on every entry. Explicit footerRight on a page entry wins.
const inferFooter = (slug: string): string | undefined => {
  if (
    slug === 'memescanr' ||
    slug.startsWith('memescanr-') ||
    slug.startsWith('compare') ||
    slug.startsWith('guides') ||
    slug.startsWith('blog')
  ) {
    return 'MemeScanr · iOS photo cleaner';
  }
  if (slug === 'book' || slug.startsWith('book-')) {
    return 'Field Guide № 1';
  }
  return undefined;
};

export const getStaticPaths: GetStaticPaths = () =>
  ogPages.map((page) => ({
    params: { slug: page.slug },
    props: { page },
  }));

export const GET: APIRoute = async ({ props }) => {
  const { page } = props as { page: (typeof ogPages)[number] };
  const png = await renderOgPng({
    title: page.title,
    eyebrow: page.eyebrow,
    subtitle: page.subtitle,
    footerRight: page.footerRight ?? inferFooter(page.slug),
  });
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
