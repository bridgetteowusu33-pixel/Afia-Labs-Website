export interface OgPage {
  slug: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  /** Bottom-right text on the OG card. Defaults to the studio tagline. */
  footerRight?: string;
}

export const ogPages: OgPage[] = [
  { slug: 'default', title: 'Afia Labs — Apps, AI-Assisted Tools & Field Guides', eyebrow: 'Independent Product Studio', subtitle: 'Useful apps, AI-assisted tools, small-business digital systems, and practical field guides.' },
  { slug: 'about', title: 'About Afia Labs', eyebrow: 'About', subtitle: 'Independent iOS app studio founded by Bridgette Owusu. Makers of MemeScanr.' },
  { slug: 'book', title: 'From Idea to Income with AI Apps', eyebrow: 'Now on Amazon · Field Guide № 1', subtitle: 'The honest field guide to shipping a real consumer app with AI. Paperback, Kindle, and companion workbook live on Amazon. By Bridgette Owusu, Afia Labs.' },
  { slug: 'studio', title: 'Inside the Afia Labs Studio', eyebrow: 'STUDIO', subtitle: 'Apps, services, field guides, and notes from the studio.' },
  { slug: 'sitemap', title: 'Site map — afialabs.net', eyebrow: 'Site map' },
  { slug: 'faq', title: 'MemeScanr FAQ — every question, answered', eyebrow: 'FAQ', subtitle: 'Direct answers to 30+ MemeScanr questions — privacy, AI, pricing, features.' },
  { slug: 'services', title: 'Work With Afia Labs', eyebrow: 'Studio Services', subtitle: 'Websites, landing pages, and digital systems for founders and small businesses. Built by a product studio.', footerRight: 'afialabs.net/services' },
  { slug: 'services-website-design-virginia', title: 'Website Design in Virginia', eyebrow: 'Studio Services', subtitle: 'Website design for small businesses in Virginia. Mobile-first, conversion-focused, and built by a product studio.', footerRight: 'Based in Virginia · Remote welcome' },
  { slug: 'services-website-design-fredericksburg', title: 'Website Design in Fredericksburg, VA', eyebrow: 'Studio Services', subtitle: 'Local studio in Fredericksburg, Spotsylvania, and Stafford. Polished websites for small business owners.', footerRight: 'Fredericksburg · Spotsylvania · Stafford' },
  { slug: 'services-small-business-websites', title: 'Small Business Websites', eyebrow: 'Studio Services', subtitle: 'Websites that look real and help customers take action. Mobile-first, booking-ready, built to convert.', footerRight: 'afialabs.net/services' },
  { slug: 'services-landing-pages', title: 'Landing Page Design', eyebrow: 'Studio Services', subtitle: 'Single-purpose pages that sell the offer. Built for launches, services, books, waitlists, and ad campaigns.', footerRight: 'afialabs.net/services' },
  { slug: 'services-mobile-app-development', title: 'Mobile App Development', eyebrow: 'Studio Services', subtitle: 'Consumer iOS apps from a real product studio. Built by the team behind MemeScanr and TripSquad.', footerRight: 'afialabs.net/services' },

  { slug: 'memescanr', title: 'MemeScanr — on-device iPhone photo cleaner', eyebrow: 'Product', subtitle: 'Detects duplicates, memes, screenshots, and blurry photos. No server, no upload.' },
  { slug: 'memescanr-privacy', title: 'We literally don\'t have a server', eyebrow: 'Privacy', subtitle: 'MemeScanr processes every photo on-device. No cloud AI, no uploads, no account.' },
  { slug: 'memescanr-features', title: 'MemeScanr features', eyebrow: 'Features', subtitle: 'Memory Lane, Gallery Wrapped, Phone Therapist, Backroom, Boost, and more.' },
  { slug: 'memescanr-features-memory-lane', title: 'Memory Lane — Tinder for your camera roll', eyebrow: 'Feature', subtitle: 'Swipe left to delete, right to keep, up to vault. Streaks, stamps, time capsule badges.' },
  { slug: 'memescanr-features-gallery-wrapped', title: 'Gallery Wrapped — monthly personality reveal', eyebrow: 'Feature', subtitle: 'Eight gallery personality types. Nine swipeable story cards. Shareable.' },
  { slug: 'memescanr-features-phone-therapist', title: 'Phone Therapist — daily gallery diagnosis', eyebrow: 'Feature', subtitle: '27 templates. 50+ session notes. One per day. No judgement.' },
  { slug: 'memescanr-features-backroom-vault', title: 'Backroom — the vault that fools everyone', eyebrow: 'Feature', subtitle: 'Face ID + PIN private photo vault with a decoy mode on wrong PIN.' },
  { slug: 'memescanr-features-boost-compression', title: 'Boost — compress photos, videos & PDFs', eyebrow: 'Feature', subtitle: 'On-device HEVC compression. 40–70% smaller. No quality loss. No upload.' },
  { slug: 'memescanr-features-contacts-cleanup', title: 'Contacts Cleanup — fuzzy matching', eyebrow: 'Feature', subtitle: 'Levenshtein, comma-flip, phone normalization, Union-Find clustering.' },
  { slug: 'memescanr-features-seasonal-icons', title: 'Seasonal App Icons', eyebrow: 'Feature', subtitle: 'Seven app icons that auto-switch with the seasons.' },

  { slug: 'compare', title: 'MemeScanr comparisons', eyebrow: 'Compare', subtitle: 'Head-to-head vs every major iPhone photo cleaner in 2026.' },
  { slug: 'compare-best-photo-cleaner-apps-2026', title: 'Best iPhone photo cleaner apps in 2026', eyebrow: 'Ranking', subtitle: 'A ranked roundup. Features, privacy, pricing, clear recommendations.' },
  { slug: 'compare-memescanr-vs-gemini-photos', title: 'MemeScanr vs Gemini Photos', eyebrow: 'Comparison', subtitle: 'Both run on-device. One is focused on duplicates. One is a full cleanup suite.' },
  { slug: 'compare-memescanr-vs-photos-app-duplicates', title: 'MemeScanr vs iPhone Photos Duplicates', eyebrow: 'Comparison', subtitle: 'Apple\'s free Duplicates album vs a full category cleaner.' },
  { slug: 'compare-memescanr-vs-cleanup-app', title: 'MemeScanr vs Cleanup: Phone Storage', eyebrow: 'Comparison', subtitle: 'Swipe-to-delete vs a broader cleanup suite with a lifetime price tier.' },
  { slug: 'compare-memescanr-vs-smart-cleaner', title: 'MemeScanr vs Smart Cleaner', eyebrow: 'Comparison', subtitle: 'Traditional grid cleaners vs a modern swipe flow with a private vault.' },
  { slug: 'compare-memescanr-vs-magic-cleaner', title: 'MemeScanr vs Magic Cleaner', eyebrow: 'Comparison', subtitle: 'On-device vs cloud AI. The privacy question that should decide this.' },

  { slug: 'guides', title: 'iPhone cleanup guides', eyebrow: 'Guides', subtitle: 'Step-by-step how-tos for every iPhone cleanup problem.' },
  { slug: 'guides-iphone-storage-full-fix', title: 'iPhone storage full? The real fix', eyebrow: 'Guide', subtitle: 'The 15-minute cleanup that frees 10–40 GB on a bloated library.' },
  { slug: 'guides-clean-iphone-storage-fast', title: 'Clean iPhone storage fast', eyebrow: 'Guide', subtitle: 'The fastest path from "storage almost full" to 2–20 GB free.' },
  { slug: 'guides-delete-duplicate-photos-iphone', title: 'Delete duplicate photos on iPhone', eyebrow: 'Guide', subtitle: 'Exact duplicates and the near-duplicates iOS misses.' },
  { slug: 'guides-delete-screenshots-iphone-bulk', title: 'Delete iPhone screenshots in bulk', eyebrow: 'Guide', subtitle: 'Clear 500+ screenshots in 5 minutes.' },
  { slug: 'guides-delete-memes-iphone', title: 'Delete memes from your iPhone', eyebrow: 'Guide', subtitle: 'iOS can\'t classify memes. MemeScanr does, on-device.' },
  { slug: 'guides-find-blurry-photos-iphone', title: 'Find blurry photos on iPhone', eyebrow: 'Guide', subtitle: 'On-device Laplacian variance analysis at 0.58 threshold.' },
  { slug: 'guides-compress-videos-iphone-no-quality-loss', title: 'Compress iPhone videos without losing quality', eyebrow: 'Guide', subtitle: 'On-device HEVC encoding. 50–70% savings. No visible quality loss.' },
  { slug: 'guides-free-up-iphone-storage-without-icloud', title: 'Free up iPhone storage without iCloud', eyebrow: 'Guide', subtitle: 'Every step runs on-device. No cloud, no subscription.' },
  { slug: 'guides-hide-photos-iphone-private-vault', title: 'Hide photos with a real private vault', eyebrow: 'Guide', subtitle: 'The iOS Hidden album isn\'t private. Here\'s what is.' },
  { slug: 'guides-merge-duplicate-contacts-iphone', title: 'Merge duplicate contacts on iPhone', eyebrow: 'Guide', subtitle: 'Fuzzy matching — typos, comma-flip, phone normalization.' },

  { slug: 'blog', title: 'MemeScanr blog', eyebrow: 'Blog', subtitle: 'iPhone cleanup, privacy deep dives, design stories.' },
  { slug: 'blog-the-privacy-problem-with-ai-photo-cleaners', title: 'The privacy problem with "AI-powered" photo cleaners', eyebrow: 'Privacy', subtitle: 'Most AI cleaners upload your photos. Here\'s what that actually exposes.' },
  { slug: 'blog-tinder-for-your-camera-roll', title: 'Tinder for your camera roll', eyebrow: 'Design story', subtitle: 'The Memory Lane origin story. Why we built swipe review.' },
  { slug: 'blog-your-phone-needs-therapy', title: 'Your phone needs therapy', eyebrow: 'Design story', subtitle: 'The Phone Therapist origin story. Naming behavior with humor, not guilt.' },
  { slug: 'blog-i-had-10000-photos-heres-how-i-cleaned-my-iphone', title: 'I had 10,000 photos — here\'s how I cleaned my iPhone', eyebrow: 'Story', subtitle: 'A real cleanup walkthrough. Category by category. 19.8 GB freed.' },
  { slug: 'blog-how-i-freed-20gb-on-my-iphone-in-10-minutes', title: 'How I freed 20 GB in 10 minutes', eyebrow: 'Story', subtitle: 'A 10-minute cleanup that freed 20 GB. The exact sequence.' },
  { slug: 'blog-why-your-iphone-storage-is-always-full', title: 'Why your iPhone storage is always full', eyebrow: 'Explainer', subtitle: 'iOS does not clean itself. Here\'s what\'s actually eating your storage.' },
  { slug: 'blog-gallery-wrapped-2026-what-personality-are-you', title: 'Gallery Wrapped 2026 — which personality are you?', eyebrow: 'Launch', subtitle: 'Eight gallery personality types, computed on-device.' },
  { slug: 'blog-seasonal-icons-why-we-built-them', title: 'Why MemeScanr ships seasonal app icons', eyebrow: 'Design story', subtitle: 'Tiny feature, outsized value for retention and Apple editorial.' },
  { slug: 'blog-the-decoy-vault-explained', title: 'The decoy vault, explained', eyebrow: 'Security', subtitle: 'How Backroom fools snoopers with a fake library on wrong PIN.' },
];

/**
 * Map a page pathname (e.g. "/memescanr/features/memory-lane/")
 * to its corresponding OG image slug ("memescanr-features-memory-lane").
 */
export function pathnameToOgSlug(pathname: string): string {
  const trimmed = pathname.replace(/^\//, '').replace(/\/$/, '');
  if (trimmed === '') return 'default';
  return trimmed.replace(/\//g, '-');
}
