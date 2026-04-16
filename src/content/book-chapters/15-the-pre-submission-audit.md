---
title: "The Pre-Submission Audit"
slug: "15-the-pre-submission-audit"
order: 15
type: "chapter"
number: 15
part: "Act III — Execution"
---
I want to save you from the rejection letters I got.

This chapter is the one I wish I had bookmarked before I submitted my first build to the App Store. It is the list of things that can get your app rejected, delayed, or approved with a problem that only shows up once real users touch it.

Every time you finish an app, do not just ask AI, "is this good?" That is too vague to be useful.

You need a real final audit.

Treat launch like something real, because it is.

Before public release, your job shifts. You are not just the creator anymore. You are also the reviewer. You have to look at the product through multiple lenses at once: user, QA lead, product strategist, UX critic, monetization reviewer, and marketplace reviewer.

Appendix A has the full thirteen-step audit prompt I use before launch. You can paste it into Claude, ChatGPT, or another capable tool and get a serious launch-readiness review.

This chapter is the shorter version.

These are the problems that actually show up. These are the ones that cost me time. These are the ones I want you to catch before Apple does.

### The Five Rejection Categories That Will Eat Your Lunch

Apple rejects apps for hundreds of specific reasons, but the ones solo builders actually hit tend to cluster into five big categories.

**1. Guideline 5.1.1(iv) — Permission Coercion.**

Apple does not want you pushing users toward Settings right after they deny a permission. Not aggressively. Not politely. Not with a soft little "Not now" button beside it.

The rule is simple: denial is a valid answer. Your app has to accept it.

Contextual recovery later is allowed. If the user actively tries to use a feature that needs the permission, you can explain why access is needed and offer an "Open Settings" path. But the immediate "you said no, now go fix that in Settings" move? Apple sees that as coercive.

**2. Guideline 2.1 — Crashes or Non-Functional Builds.**

This one is more common than people expect.

It covers: apps that crash on launch, apps that crash during review, features that do not work, dead-end screens, unfinished placeholder flows, and builds with broken integrations.

It also covers weird build-pipeline issues, like development-only frameworks leaking into your release build and triggering Apple's automated checks before a human even sees your app.

Sometimes it is not a big bug. Sometimes it is just one broken flow in one corner of the app that tells the reviewer: this is not ready.

**3. Guideline 2.3.10 — Misleading Metadata.**

Your screenshots say one thing. Your description says another. The app does something else.

Apple notices.

If your screenshots show features that are not actually in the build, that is a problem. If your title or subtitle implies a capability you do not really offer, that is a problem. If your listing makes the app sound more complete, more premium, or more magical than the actual experience, that is a problem.

A surprising amount of launch risk lives in metadata, not code.

**4. Guideline 3.1.1 — Missing Restore Purchases.**

If your app has subscriptions or non-consumable purchases, you need a visible Restore Purchases button. Not buried somewhere weird. Not half-working. Not "we'll add it later."

It has to exist, and it has to work.

This is one of the easiest rejection reasons to avoid, which somehow makes it even more painful when people still get hit by it.

**5. Guideline 4.2 — Minimum Functionality.**

This is Apple's vague way of saying: your app feels too thin.

If you ship something that looks like a wrapper, a one-screen utility with no depth, or a product that does not feel substantial enough for the store, you can run into this.

The fix is usually one of two things: add more meaningful functionality, or position the product more honestly and more clearly.

Thin products can still work. But they cannot feel disposable.

### Case Study — The Framework That Shouldn't Have Shipped

Let me tell you how I lost a day to a framework I did not even know was in my app.

I was preparing MemeScanr build 24 for submission. The release build compiled. The IPA was ready. The app ran fine on my iPhone. It ran fine through TestFlight. I uploaded it to App Store Connect and went to bed feeling productive.

The next morning, Apple had rejected the upload before it even made it to review.

Not because of a user-facing bug. Not because of metadata. Because of an automated processing error.

The message said something like:

> *ITMS-90338: Non-public API usage. The app references non-public selectors in Frameworks/sqlite3x64ios_sim.framework…*

I had never heard of that framework.

I had not added it on purpose. I did not know where it came from. And now Apple was telling me it was inside my build and using private APIs.

I spent hours chasing it.

I checked pubspec dependencies. I checked pods. I cleaned the build. I rebuilt. The framework kept coming back.

Eventually I found it.

It was coming from `sqflite_common_ffi`, a dev dependency I had added months earlier for local integration testing on macOS. It was meant for a simulator context, not for a shipping iPhone build. But because of the way the build pipeline had resolved things, that simulator framework was getting bundled into my release archive.

The app itself was fine.

The build pipeline was not.

The fix was ugly but straightforward: `flutter clean`, delete the iOS build directory, delete `Pods`, delete `Podfile.lock`, reinstall pods, rebuild from a clean state, and audit dev dependencies to remove what I was not actively using.

Total cost: basically a full day and a bruised ego.

The lesson was bigger than the bug:

**Your build pipeline is part of your product.**

If you do not understand what your stack is bundling into the final archive, one day you are going to get rejected for something you did not even know existed.

### Case Study — The Permission Coercion Rejection

This is the rejection story I hinted at earlier, and it is one of the most important lessons in the whole book.

MemeScanr's onboarding ended with a photos permission request. Pretty standard.

After the onboarding cards, the system prompt appeared. If the user tapped Allow, great. We continued into the app. If the user tapped Don't Allow, I showed a follow-up dialog:

*"MemeScanr needs photo access to scan your gallery. You can enable access in Settings."*

Two buttons: "Open Settings" and "Not now."

Technically, it worked. The user was not forced. The app did not crash. The denial path existed.

Apple still rejected it.

The rejection cited guideline 5.1.1(iv) and specifically said the app was redirecting the user toward Settings immediately after they denied permission.

And Apple was right.

The issue was not technical. The issue was relational.

The user had just answered the question. They said no. And my app immediately tried to steer them back toward yes.

That is not respect. That is pressure.

The fix was the one I should have built from the start.

If the user taps Don't Allow, the app simply continues. No guilt dialog. No redirect. No second ask.

Then, later, if the user actively taps Scan, that is the moment to explain: this feature needs photo access. At that point, offering an Open Settings path is contextual, not coercive.

**Contextual recovery after user intent = good.**
**Immediate pushback after a denial = coercive.**

I lost three days fixing that and resubmitting.

I do not tell you that so you will fear Apple. I tell you that because it taught me something deeper:

**Permissions are not bureaucracy. Permissions are a trust exchange.**

If you treat them like a technical checkbox, you will miss the emotional part. And Apple often evaluates the emotional part.

### The 25-Item Pre-Submission Audit

Here is the checklist I run before every submission now.

It takes about an hour. It is boring. It is absolutely worth it.

**Metadata pass:**

1. App name in App Store Connect matches what appears in the app
2. Subtitle is a real sentence, not just keyword stuffing
3. First three lines of the description land the pitch clearly
4. Screenshots only show features that are actually in the build
5. Category and secondary category are accurate

**Assets pass:**

6. App icon is final at every required size
7. Screenshots exist for every required device size
8. App preview video, if included, has no cheesy title cards or fake overlays
9. Privacy policy URL is live
10. Support URL is live

**Legal pass:**

11. Privacy policy accurately reflects what the app actually touches
12. Terms of service or EULA is linked correctly
13. In-app purchase descriptions match StoreKit exactly
14. Subscription cancellation instructions are reachable
15. Age rating is accurate

**Functionality pass:**

16. App launches on a fresh install without crashing
17. App still launches after a permission denial
18. Every tab renders
19. Every primary action works end to end
20. Restore Purchases exists and works

**Permission pass:**

21. Every permission request is contextual, not dumped on launch
22. Every denial path continues cleanly into the app
23. Settings recovery only appears when the user actively tries to use a blocked feature
24. Privacy nutrition labels match actual data handling
25. Usage description strings read like human sentences, not developer shorthand

If every item on this list is checked, your odds improve dramatically. Not perfectly. Nothing with Apple is perfect. But dramatically.

Then I run the full launch audit prompt from Appendix A for a second layer of review.

That is the system now.

### The Metadata Tax

Before we leave this chapter, I want to say something that surprised me:

**Metadata is a design surface, not a paperwork surface.**

The things you enter in App Store Connect are not just admin tasks.

Your title, subtitle, screenshots, promo text, "What's New," keywords, and privacy labels all shape how users experience your product before they even install it.

I spent more time rewriting App Store metadata than I spent building some features.

And honestly? That was the right call.

A few things I learned:

**Subtitle is for discoverability.** If people search "photo cleaner," that phrase needs to show up somewhere useful.

**The first three lines of your description matter most.** Most people will not read the rest. Lead with the emotional pitch, not a feature dump.

**Promotional text is underrated.** You can update it without shipping a new build. Use it for launches, seasonal pushes, and events.

**"What's New" is relationship-building copy.** Do not waste it on "bug fixes and performance improvements." Tell people what changed in a way that sounds human.

**Privacy labels are also positioning.** "Data not collected" is not just compliance. It is a trust signal.

### What the Audit Is Really For

The point of a pre-submission audit is not perfection.

It is friction reduction.

You are trying to reduce: reviewer friction, user confusion, trust breaks, avoidable bugs, and sloppy mismatches between what you built and what you claim.

That is it.

You are trying to give your product the cleanest possible first contact with reality.

That is a worthy use of an hour.

### > Think Before You Move On

Which rejection category above are you most likely to hit right now?

Name it.

Then write down one concrete thing you can check today to reduce that risk.
