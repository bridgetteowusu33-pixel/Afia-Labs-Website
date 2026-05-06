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
  { slug: 'legal-services-agreement', title: 'Services Agreement', eyebrow: 'Legal · Plain-English', subtitle: 'Plain-English terms of engagement for client work. Scope, payment, IP, revisions, cancellation. Final binding terms live in the signed SOW.', footerRight: 'Last updated 2026-05-06' },

  { slug: 'memescanr', title: 'MemeScanr — on-device iPhone photo cleaner', eyebrow: 'Product', subtitle: 'Detects duplicates, memes, screenshots, and blurry photos. No server, no upload.' },
  { slug: 'tripsquad', title: 'TripSquad — group trip planner for the whole squad', eyebrow: 'Product', subtitle: 'Invite, vote, reveal, plan day-by-day. Scout, the AI travel companion, suggests destinations the squad will actually like. Free on iOS.', footerRight: 'TripSquad · Free on iOS' },
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

  { slug: 'compare-tripsquad-vs-tripit', title: 'TripSquad vs TripIt', eyebrow: 'Comparison', subtitle: 'TripIt builds itineraries for solo travelers. TripSquad runs the group decision. Different stages.', footerRight: 'TripSquad · Free on iOS' },
  { slug: 'compare-tripsquad-vs-google-travel', title: 'TripSquad vs Google Travel', eyebrow: 'Comparison', subtitle: 'Google Travel is single-player research. TripSquad is built for groups deciding together.', footerRight: 'TripSquad · Free on iOS' },
  { slug: 'compare-tripsquad-vs-troupe', title: 'TripSquad vs Troupe', eyebrow: 'Comparison', subtitle: 'Troupe is for trip leaders. TripSquad is for friend groups making decisions together.', footerRight: 'TripSquad · Free on iOS' },
  { slug: 'compare-tripsquad-vs-splitwise-for-travel', title: 'TripSquad vs Splitwise for travel', eyebrow: 'Comparison', subtitle: 'Splitwise splits expenses after. TripSquad runs the planning before. Most groups need both.', footerRight: 'TripSquad · Free on iOS' },

  { slug: 'guides', title: 'Afia Labs Guides', eyebrow: 'Guides', subtitle: 'Practical how-tos from the studio. iPhone cleanup, small-business websites, group travel. Pick the guide that matches your problem.' },
  { slug: 'guides-how-to-plan-a-group-trip-everyone-shows-up-for', title: 'How to plan a group trip everyone shows up for', eyebrow: 'Group Travel', subtitle: 'The five-step decision flow that gets the trip booked instead of stuck in the group chat forever.', footerRight: 'Built by the TripSquad team' },
  { slug: 'guides-best-group-travel-apps-2026', title: 'Best group travel apps in 2026', eyebrow: 'Group Travel', subtitle: 'Honest comparison of TripSquad, TripIt, Google Travel, Troupe, Splitwise, and the group chat.', footerRight: 'Built by the TripSquad team' },
  { slug: 'guides-group-trip-checklist-before-booking', title: 'Group trip checklist before booking', eyebrow: 'Group Travel', subtitle: 'The 14-item checklist every group trip needs to clear before anyone pays a deposit.', footerRight: 'Built by the TripSquad team' },
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

  { slug: 'blog', title: 'The Afia Labs blog', eyebrow: 'Blog', subtitle: 'Small-business websites, local SEO writing, design and privacy stories from MemeScanr, and founder notes from the studio.' },
  { slug: 'blog-the-privacy-problem-with-ai-photo-cleaners', title: 'The privacy problem with "AI-powered" photo cleaners', eyebrow: 'Privacy', subtitle: 'Most AI cleaners upload your photos. Here\'s what that actually exposes.' },
  { slug: 'blog-tinder-for-your-camera-roll', title: 'Tinder for your camera roll', eyebrow: 'Design story', subtitle: 'The Memory Lane origin story. Why we built swipe review.' },
  { slug: 'blog-your-phone-needs-therapy', title: 'Your phone needs therapy', eyebrow: 'Design story', subtitle: 'The Phone Therapist origin story. Naming behavior with humor, not guilt.' },
  { slug: 'blog-i-had-10000-photos-heres-how-i-cleaned-my-iphone', title: 'I had 10,000 photos — here\'s how I cleaned my iPhone', eyebrow: 'Story', subtitle: 'A real cleanup walkthrough. Category by category. 19.8 GB freed.' },
  { slug: 'blog-how-i-freed-20gb-on-my-iphone-in-10-minutes', title: 'How I freed 20 GB in 10 minutes', eyebrow: 'Story', subtitle: 'A 10-minute cleanup that freed 20 GB. The exact sequence.' },
  { slug: 'blog-why-your-iphone-storage-is-always-full', title: 'Why your iPhone storage is always full', eyebrow: 'Explainer', subtitle: 'iOS does not clean itself. Here\'s what\'s actually eating your storage.' },
  { slug: 'blog-gallery-wrapped-2026-what-personality-are-you', title: 'Gallery Wrapped 2026 — which personality are you?', eyebrow: 'Launch', subtitle: 'Eight gallery personality types, computed on-device.' },
  { slug: 'blog-seasonal-icons-why-we-built-them', title: 'Why MemeScanr ships seasonal app icons', eyebrow: 'Design story', subtitle: 'Tiny feature, outsized value for retention and Apple editorial.' },
  { slug: 'blog-the-decoy-vault-explained', title: 'The decoy vault, explained', eyebrow: 'Security', subtitle: 'How Backroom fools snoopers with a fake library on wrong PIN.' },

  { slug: 'blog-small-business-website-cost-virginia', title: 'How much does a small business website cost in Virginia?', eyebrow: 'Small Business', subtitle: 'The honest tier-by-tier breakdown for VA. DIY, freelancer, studio, agency. What you pay and what you get.', footerRight: 'afialabs.net/services' },
  { slug: 'blog-local-service-business-website-checklist', title: 'What every local service business website needs before launch', eyebrow: 'Small Business', subtitle: 'The 12-item pre-launch checklist for local service business websites, ordered by impact.', footerRight: 'afialabs.net/services' },
  { slug: 'blog-instagram-not-enough-local-business', title: 'Why Instagram is not enough for local beauty and service businesses', eyebrow: 'Small Business', subtitle: 'Instagram shows the work. A website does the booking. The four problems with Instagram-only.', footerRight: 'afialabs.net/services' },
  { slug: 'blog-booking-ready-website-helps-small-businesses', title: 'How a booking-ready website helps small businesses get more clients', eyebrow: 'Small Business', subtitle: 'What booking-ready actually means, why it changes the economics, and the simple setup that ships in a week.', footerRight: 'afialabs.net/services' },
  { slug: 'blog-website-checklist-virginia-small-businesses', title: 'Website checklist for Virginia small businesses', eyebrow: 'Small Business', subtitle: 'The 18-item practical, Virginia-specific website checklist for small business owners. Ordered by what to do first.', footerRight: 'afialabs.net/services' },

  { slug: 'blog-why-group-trips-fall-apart', title: 'Why group trips fall apart', eyebrow: 'Group Travel · Story', subtitle: 'Most group trips never happen. The reason is not the destination. It is the social design of group decisions.', footerRight: 'TripSquad · Free on iOS' },
  { slug: 'blog-scout-the-ai-travel-companion', title: 'Scout, the AI travel companion', eyebrow: 'Group Travel · Feature', subtitle: 'The AI inside TripSquad knows what the group voted on, what dates are locked, and what kind of trip the squad is shaping. AI as leverage, not autopilot.', footerRight: 'TripSquad · Free on iOS' },
  { slug: 'blog-getting-friends-to-actually-commit-to-the-trip', title: 'Getting friends to actually commit to the trip', eyebrow: 'Group Travel · Strategy', subtitle: 'The four moves that convert "yes, I want to go" into "yes, I am committed."', footerRight: 'TripSquad · Free on iOS' },
  { slug: 'blog-the-reveal-mechanic-why-it-works', title: 'The reveal mechanic, and why it works', eyebrow: 'Group Travel · Design Story', subtitle: 'Voting privately and revealing the winner all at once is the most important social-design choice in TripSquad. Here is why.', footerRight: 'TripSquad · Free on iOS' },
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
