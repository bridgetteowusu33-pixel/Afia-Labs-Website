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

export const collections = { bookChapters, docs };
