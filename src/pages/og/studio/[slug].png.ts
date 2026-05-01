import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgPng } from '../../../lib/og';

const PILLAR_LABELS: Record<string, string> = {
  'building-with-ai': 'BUILDING WITH AI',
  'indie-economics': 'INDIE ECONOMICS',
  'studio-philosophy': 'STUDIO PHILOSOPHY',
  'launch-notes': 'LAUNCH NOTES',
  'the-craft': 'THE CRAFT',
};

// Dynamic per-Studio-post OG cards. Eyebrow = pillar label, footer-right
// = "Afia Labs · Studio Notes". Generated at build time as static PNGs
// at /og/studio/<slug>.png with year-long immutable cache.
export const getStaticPaths: GetStaticPaths = async () => {
  const all = await getCollection('studio', ({ data }) => !data.draft);
  return all.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { entry } = props as { entry: Awaited<ReturnType<typeof getCollection<'studio'>>>[number] };
  const png = await renderOgPng({
    title: entry.data.title,
    eyebrow: PILLAR_LABELS[entry.data.pillar] ?? 'STUDIO',
    subtitle: entry.data.excerpt,
    footerRight: 'Afia Labs · Studio Notes',
  });
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
