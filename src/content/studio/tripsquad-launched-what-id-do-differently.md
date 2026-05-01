---
title: TripSquad launched. Here's what I'd do differently.
date: 2026-04-01
excerpt: TripSquad shipped to the App Store on April 27th. Eight things I got right, four I got wrong, and what the next launch looks like.
pillar: launch-notes
readingTime: 14
---

TripSquad shipped to the App Store on April 27th, 2026. Two products live now under Afia Labs.

The launch went better than I expected on paper. The app passed Apple review on the first submission, the website held up, the early users were generous with their time, and the v1 feature set was more complete than I'd told myself it would be when I started.

But "the launch went well" is not the same as "I did this well." Some of the things I got right were luck. Some of the things I should have done weren't done. This piece is the honest accounting — eight things I'd do the same way, four I'd change, and what shipping product number three is going to look like.

This is mostly a note to my future self, but if you're a solo founder building toward your first or second launch, the lessons are portable.

## What I'd do the same way

### 1. Ship it before it's ready

The single best decision I made was setting an arbitrary launch date and refusing to move it.

The version of TripSquad that hit the App Store was missing things I'd planned to ship — native expense splitting, drag-and-drop itinerary editing, Android, deeper itinerary maps. None of them are blockers for the core loop (squad invites → vibes → vote → reveal → trip space). All of them would have delayed the launch by 3-6 months apiece.

The launch is when the feedback loop turns on. Every day of pre-launch perfectionism is a day you're optimizing in the dark. The instinct to "polish a little more" is the instinct that kills indie products. Set a date. Ship the v1 that exists on that date. Polish in v1.1.

### 2. Two-path invite flow from day one

The single most-praised feature in early-user feedback was the no-download invite. Squad members get a branded web form, fill in their preferences, are in the trip — no app install, no account creation. The host has the app; the rest of the squad doesn't have to.

This was a hard product call. It cost weeks of extra work (a whole second auth-less flow on the web side, plus the deep-link handoff back into the app). It would have been easier to require everyone to download the app.

I'm glad I didn't. Every group-trip app on the market requires every squad member to install. That single decision — accepting more engineering work to remove a coordination cost from the user — is what makes TripSquad feel different from Wanderlog or anything else in the category.

The lesson: when you're building consumer software in a category that has incumbents, the friction your competitors accept becomes your wedge. Find the friction nobody else is willing to remove. Remove it. That's the whole positioning.

### 3. Have an opinion in the AI

Scout — TripSquad's AI travel companion — has a personality. It's gen-z lowercase punchy, has hot takes, speaks like a friend not a chatbot, and refuses to do the corporate "I'd be happy to help" thing.

Most apps that ship AI features ship the default ChatGPT voice. Generic, capitalized, hedge-everything. It's the laziest possible use of the technology because the model will happily be voiceless if you don't push it.

Scout's voice is in the system prompt. It's not magic. It took maybe four hours of writing and re-writing the system prompt across multiple iterations of "this still doesn't sound like a person." But that four hours is the reason every Scout interaction is on-brand and on-voice. Most apps will never bother. That's their loss, my advantage.

### 4. Solo Explorer as a first-class mode

A late decision in the build was that TripSquad would also work for solo trips, not just group trips. Same app, single-user mode, Scout adapts.

I almost cut this. The feature creep argument was: "TripSquad is a group app. Solo travelers aren't the audience. Stay focused."

The argument that won: half the people who told me they were excited about the app weren't telling me about a specific group trip. They were telling me about a solo trip they'd been putting off. Which means the real product positioning isn't "for groups" — it's "for the trips you keep almost taking." Solo Explorer is what makes that positioning honest.

The lesson: if your audience keeps describing the product back to you in a way that's broader than your positioning, your positioning is wrong. Update.

### 5. Real photos, not stock

Every Scout-recommended hotel and restaurant in TripSquad has a real photo of the actual property, fetched from Google Places API. Not stock skylines. Not the city's most iconic image used as a backdrop for everything.

This took significant engineering work to integrate, plus a Google Places API key with billing set up, plus a photo cache table to avoid running up costs on duplicate fetches. Without the photo work, the recommendation cards looked like every other travel app — "here's a Lisbon skyline because we couldn't find the actual hotel image."

It was worth every hour. The first time someone opens the Stays + Eats tab and sees real photos of real Lisbon hotels in their actual neighborhood, the perception of the app shifts from "AI-generated content" to "this is a real product."

### 6. Scout as a measurable product surface, not a black box

Every Scout API call now writes a row to a `scout_call_log` table — user, trip, tone, context-depth, response length, latency, prompt version. Lengths only, never message content (PII boundary).

This was a v1.2 feature, but I wish I'd shipped it on day one. Without it, every Scout-related question becomes opinion and intuition. With it, I can answer questions like "are users with more accumulated context engaging differently?" or "did the prompt change in v1.2 produce shorter or longer conversations?" with real data.

For any product where AI is a significant surface, log the structural metadata of every call. Not for analytics theater — for actual decision-making.

### 7. Affiliate revenue from launch, not later

TripSquad earns commissions on outbound hotel and flight links from day one (Travelpayouts marker 723381 routes through Hotellook → Booking.com / Aviasales / etc., plus a separate Booking.com direct affiliate application in flight). The infrastructure was built before launch, not after.

Most indie apps wait to add monetization until they have "enough users." That's backwards. Affiliate revenue from day one means even modest user numbers produce some real signal about which recommendation types convert. By the time TripSquad has 10,000 users, the affiliate-funnel data will already be six months mature, and I'll know which categories pay back.

Build the monetization plumbing into v1, even if revenue is tiny at launch. The data alone is worth it.

### 8. Real privacy from the start

Block, report, and delete-account are all one tap from the profile screen. Encryption in transit and at rest. Row-level security on every Supabase table. No tracking analytics that exfiltrate user content to third parties. The privacy policy is a real document, not boilerplate.

This isn't a feature users will praise. Nobody opens an app and goes "wow, the RLS policies are well-scoped." But it's the difference between launching a product I'm proud of and launching something I'd be embarrassed to defend.

When you're a solo founder, your product *is* you. The privacy posture isn't a marketing line. It's a public statement about what you stand for. Get it right at v1 — retrofitting privacy into a launched app is hell.

## What I'd do differently

### 1. Ship the analytics layer with v1, not v1.2

I shipped TripSquad v1 with two narrow analytics tables (affiliate clickthroughs, push permission log) and `app_feedback`. That's it. No funnel views, no Scout call log, no behavioral event stream.

By v1.2 I added a real analytics layer (8 funnel views over existing tables, plus the Scout call log, plus push opt-out telemetry). The new layer is great. The problem is that it can only answer questions about user behavior *from the moment it shipped*. Everything in v1's launch month is opinion, because I didn't have the instrumentation to measure it.

Next product: **analytics layer at the same priority as the core feature loop**. Not later. Not v1.2. Day one.

### 2. Don't ship 24h/8h/2h push tiers

The original v1 push design fired three deadline-warning push tiers per booking deadline (24 hours before, 8 hours before, 2 hours before). Plus a lock-in celebration push when the squad was fully booked. Plus host nudges. Plus richer body copy in each.

For a 6-person squad with 3 deadlines: that's 108 push impressions per trip. Multiplied by every active trip on every device. The math screamed "users will turn off your notifications and never come back."

I caught it in v1.2 and consolidated to a single 24h tier. But the right move was never to ship the 8h and 2h tiers in the first place. Push notification quantity is reversible technically (you can dial it back) but irreversible socially (users who turned off notifications rarely re-enable them).

The lesson is broader: when the math on a feature suggests it could push users to opt out of *your whole product*, the math wins over the feature. Don't ship it because you can. Ship it because you measured it.

### 3. Verify the AASA file before depending on Universal Links

The TripSquad iOS app has Associated Domains configured for Universal Links to gettripsquad.com. The AASA file lived at `gettripsquad.com/.well-known/apple-app-site-association` from before launch.

It was wrong. The bundle identifier in the AASA had an extra `App` suffix (`com.afialabs.tripsquadApp` instead of the actual `com.afialabs.tripsquad`). iOS fetched it, couldn't find a matching app, refused to route any Universal Link, and I never noticed because the auth flow used a separate custom URL scheme that worked fine.

The bug shipped in v1. I caught it the night I tried to set up an App Store In-App Event and the deep link wouldn't open the app on my own phone. Apple's CDN had been serving the broken AASA for months.

The fix took five minutes. The lesson is: **anything that depends on out-of-band infrastructure (DNS records, AASA, push entitlements, App Store Connect setup) should be verified end-to-end, on a real device, before launch.** Don't trust that the file you wrote is actually being served. Verify with a tool like Branch.io's AASA validator and a fresh device install.

### 4. Set the in-app review prompt expectations correctly

TripSquad has a sentiment-router feedback flow: three-card vote, "loving it" routes to Apple's `requestReview()` prompt, "it's okay" and "not great" route to a feedback form.

The feature works. But I shipped expecting that the "loving it" path would always show Apple's native rating dialog. It often doesn't — Apple's `requestReview()` is rate-limited to three prompts per user per year, and on TestFlight builds it's a no-op. So users on TestFlight tap "loving it" and see... a confetti overlay and nothing else. Which is intended behavior, but if I'd been more careful about explaining this in the in-app copy and reviewer notes, I'd have spared myself a few "is this broken?" emails.

The lesson: **for any flow that depends on Apple/Google's behavior outside your control, document the behavior loudly in your own copy.** Don't assume users (or your future self) will know that the rating prompt sometimes silently no-ops. Tell them.

## What launch number three looks like

Two products in, the muscle is forming. Here's what changes for the next one:

- **Analytics + Scout call logs ship with v1, not v1.2.** Day-one instrumentation.
- **AASA + push entitlements + Apple-side configurations verified end-to-end on a real device** before submitting v1 to review.
- **Push notification volume modeled** before any push code ships. If the math says "this is more than 4 push impressions per user per week," cut tiers.
- **Affiliate revenue infrastructure** ships with v1, even if revenue starts at zero.
- **The launch piece** (the post you're reading) gets drafted in week one of building, not three days after launch. Writing about what I'm building forces the strategic clarity that makes the launch better.

Two products in, three months apart, starting from zero — that's the studio cadence I'm aiming for. Each product faster, sharper, and more clearly an Afia Labs product than the last. The body of work is what compounds.

TripSquad is live: [App Store](https://apps.apple.com/us/app/tripsquad-plan-vote-go/id6762568582). The [marketing site](https://gettripsquad.com) and [the journal](https://gettripsquad.com/journal) live there too.

Next launch is being scoped. The pattern is set.
