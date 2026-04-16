---
title: "The Smallest Useful Version"
slug: "08-the-smallest-useful-version"
order: 8
type: "chapter"
number: 8
part: "Act II — Clarity"
---The hardest lesson of my first year building MemeScanr was not technical. It was this: **every feature you cut before launch is a future launch you get to have.**

I didn't believe this at first. I was in the cave. I had the roadmap. I wanted to ship MemeScanr v1.0 with duplicate detection, screenshot filtering, Memory Lane, Backroom vault, Gallery Wrapped, Phone Therapist, Boost compression, contacts cleanup, seasonal icons, and a voice feature I've since abandoned. I wanted all of it, because each feature felt essential, and I couldn't imagine shipping a product that didn't have all of them.

I was wrong about essential. I was also wrong about imagining.

Here's what actually happened: MemeScanr v1.0 shipped with **duplicate detection only**. That was the entire product. One feature. Scan your gallery, find duplicates, swipe through them, delete what you don't want, done. No Memory Lane. No Backroom. No Gallery Wrapped. No Phone Therapist. One feature.

And here's the thing I did not see coming: **cutting the features was not a loss. Cutting the features was a strategy.**

### The Feature You Ship After Launch Is Worth More Than the Feature You Ship at Launch

Think about what it means to ship five features all at once. You announce one launch. Users try all five at once. Most of them love one feature, are neutral on two, and confused by two. You have one shot at attention. You have one press moment. You have one "What's New" entry.

Now think about what it means to ship one feature now and four features over the next four months. You get five launches. Five chances at attention. Five "What's New" entries. Five in-app events. Five chances to re-engage users who lapsed. Five chances to make a TikTok about a new thing. Five stories to tell.

**The launch you save for later is worth more than the launch you spend today.**

Memory Lane, for example, shipped as an update in month four. It was the marketing moment of that month. I made a TikTok about it. I updated the app store screenshots. I added an in-app event. Users who had lapsed got a notification. Some of them came back. Some of them upgraded to Premium. **That whole cycle would not have existed if Memory Lane had shipped on day one**, because on day one, nobody was paying attention yet.

### The Feature Temptation Log

I want to give you a tool. I use this tool every single time I'm designing a new version of MemeScanr, and it's saved me from at least twenty bad decisions.

It's called the **feature temptation log**.

The log is a list, written in a notebook, or a notes app, or wherever you keep things, of every feature you're tempted to add that is **not** in your current version. For each feature, you write three things:

1. The feature
2. Why it's tempting (be honest: is it user demand, or is it fear, or is it comparison anxiety?)
3. What conditions would have to be true before it's worth adding

Here's an excerpt from my actual MemeScanr feature temptation log from month two of building:

| Feature | Why It's Tempting | Conditions to Add |
|---|---|---|
| Android version | I'm afraid I'm missing half the market | After iOS hits $1k/mo, not before |
| Video deduplication | It's a cool technical problem | After the photo version is rock solid AND users have asked for it at least five times |
| Social sharing of Wrapped cards | I saw a competitor do it and it looked cool | After Gallery Wrapped itself ships and proves it's interesting |
| Auto-cleanup (no user review) | It would feel magical | Never. This violates the "users must approve every deletion" principle I wrote down in week one |
| AI-powered album suggestions | It sounds smart | After I understand what users actually want, not what I imagine they want |
| Widget for storage level | Easy to build, nice flex | After launch, as a week-four update |

Notice a few things about this log:

- **Every item has a reason for being tempting, and some of those reasons are not good.** "I'm afraid I'm missing half the market" is fear, not user demand. "It sounds smart" is comparison anxiety, not signal. Naming these out loud is how I caught myself before I followed the temptation.

- **Every item has an explicit gate.** The gate is not "later" or "soon." The gate is a specific condition. "After iOS hits $1k/mo" is testable. "After users ask five times" is testable. Vague gates turn into feature creep. Specific gates turn into a roadmap.

- **One item is a permanent no.** Some features are tempting but fundamentally off-brand or off-strategy. MemeScanr will never auto-delete without user review, because that would violate the trust contract. Writing "never" in the log is how I stop re-litigating the same question every week.

Keep a feature temptation log. Update it weekly. It is the cheapest discipline tool I've ever found.

### The Core Loop Test

Here is another test that will save you from shipping too much.

Ask yourself: **what is the one action the user must be able to do for this product to have a point?**

Not "what should the user be able to do." Not "what would be nice." The one action. The core loop.

For MemeScanr, the core loop is: *open the app → run a scan → see duplicates → swipe through them → delete the ones you don't want.* That's it. Everything else is additive. If a user can do that loop without crashing, without confusion, and with a satisfying payoff at the end, I have a product. If a user can't do that loop, nothing else matters.

The core loop test is how you decide what makes it into v1.0:

- Does this feature make the core loop possible? → Must-have
- Does this feature make the core loop better? → Maybe
- Does this feature do something outside the core loop? → Not v1.0

This is a brutal filter. It cut most of MemeScanr's features out of v1.0. And every one of those cuts bought me a launch I got to use later, which turned out to be worth more than anything I lost.

### The User Journey Map

Before you start building, draw the user journey. I mean literally draw it, on paper, in Figma, in your notes app, wherever. The tool doesn't matter. The act of drawing it matters.

A user journey for an MVP has exactly five steps:

1. **Trigger** — what brings the user to your app in the first place? (A TikTok, a search, a friend's recommendation, a problem they just hit)
2. **Arrival** — what's the very first thing they see when they open the app? (Your onboarding, your home screen, your empty state)
3. **First action** — what's the first thing they tap or do? (The button, the scan, the upload, the account creation)
4. **Payoff** — what do they see or feel when the first action completes? (The result, the stats, the cleaned state, the celebration)
5. **Return hook** — why would they open the app a second time? (The habit, the notification, the updated content, the streak)

If any of those five steps is unclear, your MVP is not ready to build. I mean this literally. The most common reason solo builders ship products that feel hollow is that they skipped drawing the journey and just built the features.

MemeScanr's first journey map, which I drew on paper in month two, looked like this:

1. **Trigger:** User sees a TikTok about camera roll cleanup, or searches "best photo cleaner app for iPhone"
2. **Arrival:** Onboarding that sets up the voice in three cards, then a permission prompt
3. **First action:** Tap "scan my gallery," the only button on the home screen
4. **Payoff:** Results screen showing "you have 14,823 photos, 847 duplicates, 412 screenshots, 198 blurry shots. Want help?"
5. **Return hook:** A notification three days later that says "your phone therapist has a new diagnosis for you"

That journey was not the final product. It wasn't even the v1 product. Memory Lane and Gallery Wrapped showed up later. But it was the minimum coherent story, and I built to it.

**Draw your journey. If you can't draw it in fifteen minutes on one piece of paper, your idea is still too vague to build.**

### Case Study — The Feature That Shipped Twice

Memory Lane was the feature I was most excited about when I first had the idea for MemeScanr. It's the Tinder-style swipe deck for forgotten photos. I could picture it perfectly in my head.

What I couldn't picture was how the first version of it would actually feel to use.

The first version of Memory Lane, which shipped in month four, after v1.0 had stabilized, was a grid view. Rows of photos grouped by month and year. Users could tap into a photo and decide to keep, delete, or vault it. It was functional. It was well-designed. It had good empty states and a nice animation.

It flopped.

Users opened it. Scrolled for about three seconds. Closed it. The analytics were brutal. Time in Memory Lane was under twenty seconds per session. Deletion rate was near zero. People weren't using it.

I spent a week trying to figure out why. I thought maybe the grouping was wrong. Maybe the visual density was off. Maybe users didn't understand what it was for. I shipped small tweaks. Nothing helped.

Then I did something I should have done on day one: I watched someone use it. A friend. In person. Shut up while she used it.

She opened Memory Lane. She scrolled for three seconds. She closed it and said *"wait, what was I supposed to do?"*

The issue was not visual density. The issue was that a grid of photos is a *browsing experience*, not a *deciding experience*. A grid invites the user to look without choosing. That's fine if you're scrolling through an album. It's terrible if you're trying to triage photos one by one.

I rewrote Memory Lane as a card stack. One photo at a time. Swipe left to delete, right to keep, up to vault. Nothing else on screen. The user had to decide. There was no "keep browsing" option because there was no "browsing." There was only deciding.

Memory Lane v2 shipped as an update in month five. Time in Memory Lane jumped to an average of four minutes per session. Deletion rate went from near zero to meaningful. Users started mentioning Memory Lane in app store reviews.

**Same feature. Same data. Same backend. Completely different product.** The interface was the feature.

The lesson: when you're designing an MVP, the question is not just "what does this feature do?" It's "what posture does this feature put the user in?" Browse, decide, learn, celebrate, vent. These are different postures, and your interface picks one for the user.

### The Scope Creep Tax

Let me give you a specific number to remember: **every day you spend adding scope to your MVP is roughly two days you're adding to your launch date.**

This is not a law of physics. It's a law of solo builders. Here's why:

- One day to build the new scope item itself
- One day to integrate it with the rest of the product, write tests, fix edge cases, polish the UI, and update the mental model you had of the product

The second day is the hidden one. It's the day that feels invisible until you've experienced it. You tell yourself "I'll just add this one thing, it'll take a day," and then you discover that the one thing touches four other things, and the four other things need to be reconsidered, and each reconsideration creates new questions.

At some point in your build, you should declare **scope lock**: a specific date after which no new features can be added to v1.0. Not "I'll try not to add features." A hard line. Anything you think of after the lock date goes directly into the feature temptation log.

MemeScanr's scope lock was week ten of building. After week ten, I didn't add a single new feature to v1.0. Three new feature ideas came up between week ten and launch. All three went into the log. All three eventually shipped as updates. None of them were worth delaying launch for.

Pick your scope lock date. Honor it.

### > Think Before You Move On

What is the one thing your core loop absolutely must do? Write it as a single sentence. If your sentence has more than one verb, you haven't cut enough yet.
