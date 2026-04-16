---
title: "The Pre-Submission Audit"
slug: "15-the-pre-submission-audit"
order: 15
type: "chapter"
number: 15
part: "Act III — Execution"
---I want to save you from the rejection letters I got.

This chapter is the one I wish I'd had bookmarked on my laptop before I submitted my first build to the App Store. It's the list of things that will get your submission rejected, or worse, approved and shipped with a bug that only gets caught by real users.

Every time you finish an app, do not just ask AI, "is this good?" That is too vague. You need a serious final audit. Treat launch like something real, because it is.

Before public release, your job is to shift from creator mode into reviewer mode. You need to look at the app through multiple lenses: user, QA lead, product strategist, UX critic, monetization reviewer, and marketplace reviewer.

Appendix A of this book has the full 13-step audit prompt I use for every launch. You can paste it directly into your AI chat and get a serious launch-readiness report. This chapter is the shorter version: the specific rejections you'll actually hit and how to avoid them.

### The Five Rejection Categories That Will Eat Your Lunch

Apple rejects apps for hundreds of specific reasons, but the ones solo builders actually hit cluster into five big categories. Here they are, in rough order of how common they are.

**1. Guideline 5.1.1(iv) — Permission Coercion.** Apple doesn't want you to redirect users to Settings after they've denied a permission. Ever. Even if your dialog is polite. Even if the button says "Not now." The rule is: denial is a valid answer, and the app must accept it without argument. Contextual recovery later (when the user tries to use a feature that needs the permission) is allowed. Immediate push-back is not.

**2. Guideline 2.1 — Crashes or Non-Functional Builds.** More common than people expect. This covers: apps that crash on launch, apps that crash during the reviewer's use, apps that have features that don't work, apps that have dead end screens. Also: builds that have test code or placeholder content. **A specific subcategory**: simulator frameworks leaking into your release build. This will happen to you if you use a stack that has dev dependencies, because those dev packages sometimes leave x86_64 frameworks in your archive that Apple's notarization process rejects.

**3. Guideline 2.3.10 — Misleading Metadata.** Your app description says one thing, your app does another. Or: your screenshots show features that aren't in the app. Or: your title contains words that imply features you don't have ("Duplicate Detector Pro" when your app is a photo viewer). Apple reads the metadata carefully. Mismatches between what you say and what the app does get flagged.

**4. Guideline 3.1.1 — Missing Restore Purchases.** If your app has in-app subscriptions, you are legally required to have a "Restore Purchases" button that is easy to find and actually works. A shocking number of first-time submissions forget this. Apple will reject you in five minutes.

**5. Guideline 4.2 — Minimum Functionality.** This one is vague on purpose. It means "your app is too thin to be in the app store." If you shipped a single-screen app that does one tiny thing, you may hit this. The fix is usually to either add meaningful functionality or reposition the app as something more substantial.

### Case Study — The Framework That Shouldn't Have Shipped

Let me tell you the specific story of how I lost a day to a simulator framework leak.

I was preparing MemeScanr build 24 for submission. The release build compiled. The IPA was ready. The app ran fine on my iPhone and on TestFlight. I uploaded to App Store Connect and went to bed.

The next morning, there was a notification in my inbox from Apple. The upload had been rejected, not by a human reviewer, but by the automated processing step that runs before a build gets to the review queue. The error said something like:

> *ITMS-90338: Non-public API usage. The app references non-public selectors in Frameworks/sqlite3x64ios_sim.framework: ...*

I had never seen this framework before. I had not installed it. Nobody on my team (there is no team, it's just me) had installed it. It was just... there. In my build. And Apple was saying it had private API calls that would get me banned.

I spent about four hours trying to figure out where the framework came from. I went through every package in my pubspec.yaml, every pod in my Podfile, every direct dependency and every transitive dependency. Nothing matched. I cleaned the build. I rebuilt. The framework came back. I deleted my derived data. Rebuilt. The framework came back. I started to question my sanity.

Finally, I found it. The framework was being included by `sqflite_common_ffi`, which was a `dev_dependency` I had added months earlier for running local integration tests on macOS. The framework was intended to run SQLite in a desktop simulator, not on device. But a bug in the Flutter build pipeline was bundling the framework into my release archive anyway, and Apple was catching it because the framework contained private iOS APIs that are fine in simulator context but forbidden in a shipping app.

The fix was to `flutter clean`, delete the iOS build directory, delete the `Pods` directory, delete the `Podfile.lock`, run `pod install` fresh, and rebuild. And then to audit my dev_dependencies and remove anything I wasn't actively using.

Total cost: a day of my life and a bruised ego.

The lesson I took is one I'll say plainly: **your build pipeline is part of your product.** If you don't understand how your stack packages dependencies into your release archive, you will one day get a rejection from a thing you didn't know existed.

### Case Study — The Permission Coercion Rejection

Here's the rejection story I promised you back in Chapter 12.

MemeScanr's onboarding ended with a photos permission request. Standard stuff. After the user finished the onboarding cards, we'd call the permission API and the system dialog would appear. If the user tapped "Allow," we'd continue into the app. If the user tapped "Don't Allow," we'd show a dialog explaining *"MemeScanr needs photo access to scan your gallery. You can enable access in Settings."* The dialog had two buttons: "Open Settings" and "Not now."

I shipped this as build 26. Apple rejected it. The rejection was under guideline 5.1.1(iv), data collection and storage. The specific reason:

> *"The app directs the user to grant permission in the following way(s): the user is redirected to the Settings app to grant access after tapping 'Don't Allow'."*

This was a perfect example of me thinking about permissions as bureaucracy instead of trust. The dialog I built was technically functional. The user wasn't forced into Settings. They could tap "Not now." But the flow reads as coercive. The user said "Don't Allow," and the very next screen is me pushing them back toward allowing. Apple's reading was: that's not respecting the user's decision.

The fix was the one I should have built from the start. When the user taps "Don't Allow," the app continues into the home tab silently, with no dialog. The user has not permitted photo access, and that's fine. Some features won't work, but we don't harangue them about it. Then, later, if they actively tap "Scan," we show a contextual message that says "photo access is required to scan your gallery" with an "Open Settings" button. Not a coerced redirect. A contextual offer that fires only when the user is trying to do the thing that needs the permission.

**Contextual recovery after the user takes an action = good.**
**Immediate redirect after the user says no = coercion.**

The difference sounds small. To Apple, and to the user, it is not small. It is the entire difference between "this app respects me" and "this app is pushing me around."

I lost 3 days fixing this and re-submitting. I earned a rejection that sat on my record for a week. All of that could have been avoided by treating permissions as a trust exchange from day one.

### The 25-Item Pre-Submission Audit

Here is the checklist I run before every app store submission. It takes an hour. It has saved me from multiple rejections. Use it. Modify it. Make it yours.

**Metadata pass (5 items):**

1. App name in App Store Connect matches what's displayed in the app
2. Subtitle is a clear sentence, not a keyword list
3. Description first 3 lines land the pitch without feature dump
4. Screenshots match features actually in the build (no mockups of unshipped features)
5. Category and secondary category are accurate (random picks get flagged)

**Assets pass (5 items):**

6. App icon is the final icon at every required size
7. Screenshots exist for every required device size
8. Optional app preview video, if included, has no title cards or marketing overlays
9. Privacy policy URL is live and reachable
10. Support URL is live and reachable

**Legal pass (5 items):**

11. Privacy policy accurately describes every piece of data the app touches
12. Terms of service (EULA) is either Apple's default or your own, and linked from the app
13. In-app purchase descriptions match StoreKit exactly
14. Subscription cancellation instructions are reachable from the paywall
15. Age rating is accurate (if you lie about this, Apple will find out)

**Functionality pass (5 items):**

16. App launches without crashing on a fresh install
17. App launches without crashing after a permission denial
18. Every tab renders without crashing
19. Every primary action (scan, purchase, delete, etc.) works end-to-end
20. Restore Purchases button exists and works

**Permission pass (5 items):**

21. Every permission request is contextual, not auto-fired on launch
22. Every denial path continues silently into the app
23. Contextual recovery (Open Settings link) fires only when the user actively tries to use a feature that needs the permission
24. Privacy nutrition labels in App Store Connect match the actual data collection
25. Permission prompts have usage description strings in Info.plist that read like human sentences, not developer shorthand

If every item on this checklist is checked, your submission chances go up dramatically. Not to 100%. Nothing is 100% with Apple. But from "guaranteed at least one rejection" to "usually approved in one round."

Then, for the deeper audit, run the full 13-step Launch Audit Prompt in Appendix A. It forces AI to stop being vague and start being useful. It gives structure. It tells the model what lens to use. It makes the review feel more like a serious launch meeting than a casual chat.

### The Metadata Tax

Before we leave this chapter, I want to name one more thing that caught me off guard.

**Metadata is a design surface, not a paperwork surface.**

What I mean: the things you write in App Store Connect (title, subtitle, description, What's New, category, keywords, age rating, privacy labels, screenshots, promo text) are not just "stuff you fill in to ship." They are part of your product. They are the first thing users see. They are what drives app store search ranking. They are what convinces users to download. They are what Apple uses to decide whether to feature you in editorial lists.

I spent more time on my App Store metadata than I did on some of my features. I rewrote the subtitle eight times. I rewrote the description first paragraph maybe twelve times. Every one of these iterations is a design decision, not a chore.

Specific things I learned:

- **Subtitle is for search keywords, not brand.** If you want people to find your app when they search for "photo cleaner," the word "cleaner" needs to be in your subtitle.
- **First three lines of description are the most-read copy on your product page.** Make them land the pitch. Lead with voice, not features.
- **Promotional text is your secret weapon.** You can update it without submitting a new build. Use it for in-app events, seasonal pushes, and launch moments.
- **"What's New" is where you build a relationship with users over time.** Write it in voice. Tell a story. Never say "bug fixes and performance improvements." That's the laziest thing you can put on your product page.
- **The privacy nutrition labels are a marketing surface.** "Data not collected" is the most powerful label you can have. Design your app to earn it from day one.

### > Think Before You Move On

Pick the rejection category above that you're most at risk of hitting. What's one concrete thing you can check right now to reduce that risk?
