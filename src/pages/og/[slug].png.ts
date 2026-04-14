import type { APIRoute, GetStaticPaths } from 'astro';
import { renderOgPng } from '../../lib/og';
import { ogPages } from '../../lib/og-pages';

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
  });
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
