import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

interface Post {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
}

const posts: Post[] = [
  {
    slug: 'gallery-wrapped-2026-what-personality-are-you',
    title: 'Gallery Wrapped 2026 — which gallery personality are you?',
    description:
      'Gallery Wrapped is MemeScanr\'s monthly personality reveal for your camera roll. Eight personality types, computed on-device.',
    pubDate: new Date('2026-04-01'),
  },
  {
    slug: 'the-privacy-problem-with-ai-photo-cleaners',
    title: 'The privacy problem with "AI-powered" iPhone photo cleaners',
    description:
      'Most iPhone cleaners that advertise "AI-powered" cleanup upload your photos to third-party servers. Here\'s what that actually exposes.',
    pubDate: new Date('2026-04-02'),
  },
  {
    slug: 'how-i-freed-20gb-on-my-iphone-in-10-minutes',
    title: 'How I freed 20 GB on my iPhone in 10 minutes',
    description:
      'A 10-minute cleanup that freed 20 GB on a full iPhone. The exact sequence and why most of the wins came from compression.',
    pubDate: new Date('2026-03-30'),
  },
  {
    slug: 'i-had-10000-photos-heres-how-i-cleaned-my-iphone',
    title: 'I had 10,000 photos — here\'s how I cleaned my iPhone',
    description:
      'A real cleanup session on a 10,000-photo iPhone library. What the scan found and how much storage came back, category by category.',
    pubDate: new Date('2026-03-25'),
  },
  {
    slug: 'tinder-for-your-camera-roll',
    title: 'Tinder for your camera roll — the Memory Lane origin story',
    description:
      'Why we built Memory Lane: a Tinder-style swipe review for your iPhone camera roll with streaks, stamps, and time capsule badges.',
    pubDate: new Date('2026-03-18'),
  },
  {
    slug: 'your-phone-needs-therapy',
    title: 'Your phone needs therapy — the Phone Therapist origin story',
    description:
      'Why we built Phone Therapist: a daily gallery diagnosis feature that names your camera roll behavior with humor instead of guilt.',
    pubDate: new Date('2026-03-10'),
  },
  {
    slug: 'why-your-iphone-storage-is-always-full',
    title: 'Why your iPhone storage is always full',
    description:
      'Your iPhone storage fills up because iOS does not clean itself. Here\'s what\'s actually eating your storage and what fixes it.',
    pubDate: new Date('2026-03-05'),
  },
  {
    slug: 'seasonal-icons-why-we-built-them',
    title: 'Why MemeScanr ships seasonal app icons',
    description:
      'Why MemeScanr ships seven seasonal app icons that automatically switch with the calendar — a small design decision with outsized value.',
    pubDate: new Date('2026-03-01'),
  },
  {
    slug: 'the-decoy-vault-explained',
    title: 'The decoy vault, explained',
    description:
      'Backroom\'s decoy vault shows a believable fake library when someone enters the wrong PIN. Here\'s how it works and the threat model it addresses.',
    pubDate: new Date('2026-02-22'),
  },
];

export async function GET(context: APIContext) {
  return rss({
    title: 'MemeScanr blog — Afia Labs',
    description:
      'Long-form posts about iPhone cleanup, the design decisions behind MemeScanr, the privacy problem with cloud AI cleaners, and real cleanup stories.',
    site: context.site ?? 'https://afialabs.net',
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
