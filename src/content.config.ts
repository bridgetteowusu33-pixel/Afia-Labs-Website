import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bookChapters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/book-chapters' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    type: z.enum(['front', 'chapter', 'letter', 'appendix', 'back']),
    number: z.number().optional(),
    part: z.string().nullable().optional(),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
  }),
});

// Studio — Afia Labs' editorial layer.
// Cross-product essays, founder thinking, launch retrospectives, building
// with AI. Lives separately from MemeScanr's /blog and /guides so each
// brand keeps its own topical SEO authority. Pillar enum is the
// taxonomy; pinned drives the featured slot on the studio index.
const studio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/studio' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    pillar: z.enum([
      'building-with-ai',
      'indie-economics',
      'studio-philosophy',
      'launch-notes',
      'the-craft',
    ]),
    readingTime: z.number().optional(),
    coverImage: z.string().optional(),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { bookChapters, docs, studio };
