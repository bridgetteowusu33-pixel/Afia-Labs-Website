import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

const PILLAR_LABELS: Record<string, string> = {
  'building-with-ai': 'Building with AI',
  'indie-economics': 'Indie Economics',
  'studio-philosophy': 'Studio Philosophy',
  'launch-notes': 'Launch Notes',
  'the-craft': 'The Craft',
};

export async function GET(context: APIContext) {
  const all = await getCollection('studio', ({ data }) => !data.draft);
  const sorted = all.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: 'Afia Labs Studio',
    description:
      'Notes from the studio. Cross-product thinking from Afia Labs — the team behind MemeScanr and TripSquad. Building with AI, shipping consumer apps solo, the parts of a launch nobody tells you about.',
    site: context.site ?? 'https://afialabs.net',
    items: sorted.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.excerpt,
      link: `/studio/${p.id}/`,
      categories: [PILLAR_LABELS[p.data.pillar]],
    })),
    customData: `<language>en-us</language>`,
  });
}
