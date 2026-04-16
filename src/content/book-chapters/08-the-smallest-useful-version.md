---
title: "The Smallest Useful Version"
slug: "08-the-smallest-useful-version"
order: 8
type: "chapter"
number: 8
part: "Act II — Clarity"
---
The hardest lesson of my first year building MemeScanr was not technical.

It was this:

**Every feature you cut before launch is a future launch you get to have.**

I did not believe that at first.

I was deep in the cave. I had the roadmap. I wanted MemeScanr v1.0 to ship with duplicate detection, screenshot filtering, Memory Lane, Backroom vault, Gallery Wrapped, Phone Therapist, Boost compression, contacts cleanup, seasonal icons, and a voice feature I have since abandoned.

I wanted all of it because each feature felt essential, and I could not imagine shipping a product without all the things that made it feel alive in my head.

I was wrong about essential.
And I was also wrong about imagining.

Here is what actually happened:

MemeScanr v1.0 shipped with **duplicate detection only**.

That was the whole product.

One feature. Scan your gallery, find duplicates, swipe through them, delete what you do not want, done.

No Memory Lane.
No Backroom.
No Gallery Wrapped.
No Phone Therapist.

Just one feature.

And here is the part I did not see coming:

**Cutting those features was not a loss. It was a strategy.**

### The Feature You Ship Later Is Often Worth More

Think about what it means to ship five features all at once.

You get one launch. One announcement. One "What's New." One shot at attention.

Users try all five features at once. They love one, feel neutral about two, and do not fully understand the other two. Everything lands at the same volume. Nothing gets to breathe.

Now think about what it means to ship one feature now and four features over the next four months.

You get five launch moments. Five reasons to post. Five "What's New" entries. Five re-engagement opportunities. Five chances to tell a story.

**The launch you save for later is often worth more than the launch you spend today.**

Memory Lane is a good example.

It shipped as an update in month four. That made it the story of that month. I made content about it. I updated screenshots. I added an in-app event. Lapsed users had a reason to come back. Some of them did. Some of them upgraded.

**That whole cycle would not have existed if Memory Lane had shipped on day one**, because on day one, almost nobody was paying attention yet.

### The Feature Temptation Log

I want to give you a tool I still use.

It is called the **feature temptation log**.

The idea is simple: every time you feel tempted to add something that is not part of your current version, you write it down instead of building it immediately.

For each feature, you write three things:

1. The feature
2. Why it is tempting
3. What would need to be true before it is worth adding

That second part matters more than it sounds.

Because sometimes the reason is not user demand. Sometimes the reason is fear. Or comparison. Or impatience. Or boredom.

Here is a simplified version of what my MemeScanr temptation log looked like early on:

| Feature | Why It's Tempting | Conditions to Add |
|---|---|---|
| Android version | I'm afraid I'm missing half the market | After iOS hits $1k/mo |
| Video deduplication | It's a cool technical problem | After photo cleanup is rock solid and users ask for it repeatedly |
| Social sharing of Wrapped cards | A competitor did it and it looked cool | After Wrapped itself proves people care |
| Auto-cleanup with no review | It would feel magical | Never |
| AI album suggestions | It sounds smart | After I understand what users actually want |
| Storage widget | Easy to build, nice flex | After launch |

A few things matter here.

First, every tempting feature has a reason, and some of those reasons are bad reasons. "I'm afraid I'm missing half the market" is fear, not signal. "It sounds smart" is comparison anxiety, not evidence.

Second, every feature has a gate. Not "later." Not "maybe." A real condition. That matters because vague gates turn into feature creep. Specific gates turn into a roadmap.

Third, one item was a permanent no. Auto-cleanup without user review was never going to happen, because it violated a trust rule I had already decided on: users approve every deletion. Writing "never" in the log stopped me from re-arguing with myself every week.

Keep a temptation log. Update it weekly. It is one of the cheapest discipline tools I know.

### The Core Loop Test

Here is another filter that saves a lot of people from overbuilding:

Ask yourself:

**What is the one action the user must be able to do for this product to have a point?**

Not what would be nice. Not what would feel impressive. Not what you hope people will eventually love.

The one action.

For MemeScanr, the core loop was simple:

*open the app → run a scan → see duplicates → swipe through them → delete what you do not want*

That was the product.

Everything else was additive.

If a user could complete that loop without crashing, without confusion, and with a satisfying payoff, I had something real. If they could not, nothing else mattered.

That is how I filtered v1 scope:

- Does this feature make the core loop possible? → must-have
- Does this feature make the core loop better? → maybe
- Does this feature live outside the core loop? → not v1

This is a brutal filter. That is why it works.

It cut most of MemeScanr's roadmap out of v1. And every one of those cuts bought me a future launch I got to use later.

### The User Journey Map

Before you build, draw the journey.

Not in your head. Not vaguely. Actually draw it.

Paper, notes app, whiteboard, Figma. I do not care.

For an MVP, the journey should be simple enough to fit in five steps:

1. **Trigger** — what brings the user here?
2. **Arrival** — what do they see first?
3. **First action** — what do they do first?
4. **Payoff** — what happens when that action works?
5. **Return hook** — why would they come back?

If any of those five steps is blurry, your MVP is probably still too vague.

This is where a lot of solo builders go wrong. They skip the journey and go straight to features. The result is a product with pieces, but no story.

MemeScanr's early journey looked something like this:

- **Trigger:** user sees a TikTok about camera roll cleanup or searches for a photo cleaner
- **Arrival:** onboarding that sets the voice, then a permission prompt
- **First action:** tap "scan my gallery"
- **Payoff:** results screen showing how much clutter is there and what can be cleaned
- **Return hook:** a later notification pulling them back in

That was not the final product. It was not even the full v1. But it was the minimum coherent story.

That is what matters.

**If you cannot sketch your MVP journey in fifteen minutes, your idea is probably still too foggy to build.**

### Case Study — The Feature That Shipped Twice

Memory Lane was one of the features I was most excited about from the beginning.

It is the Tinder-style swipe deck for forgotten photos. I could picture it clearly in my head long before it existed.

What I could not picture was how the first version would actually feel in someone's hand.

The first version of Memory Lane shipped in month four. It was a grid. Photos grouped by month and year. You could tap into one and decide to keep it, delete it, or vault it.

It was functional. It looked good. It had decent empty states.

And it flopped.

Users opened it, scrolled for a few seconds, and left. Session time was low. Deletion rate was near zero. Almost nobody used it the way I thought they would.

I kept trying to fix the wrong thing. Maybe the grouping was wrong. Maybe the layout density was off. Maybe users needed better labels.

Then I did something I should have done much earlier: I watched someone use it in person and shut up.

She opened Memory Lane. Scrolled for a few seconds. Closed it. Then said:

*"Wait, what was I supposed to do?"*

That was the answer.

The problem was not the design polish. The problem was the posture.

A grid is a browsing interface. But Memory Lane needed to be a deciding interface. A grid invites passive looking. It does not invite choice.

So I rebuilt it as a card stack.

One photo at a time. Swipe left to delete. Right to keep. Up to vault. No wandering. No passive browsing. Just decision after decision.

Memory Lane v2 shipped the next month.

Session time jumped. Deletion rate became real. Users started mentioning the feature in reviews.

**Same feature. Same data. Same underlying content. Completely different experience.**

The interface was the feature.

That lesson stayed with me.

When you are building an MVP, do not only ask, "What does this feature do?"

Ask, **"What posture does this feature put the user in?"**

Browse. Decide. Learn. Celebrate. Reflect. Panic. Organize.

Those are different postures. Your interface chooses one.

### The Scope Creep Tax

Let me give you a number I believe in:

**Every day you spend adding scope to your MVP is usually about two days you add to your launch date.**

Not because the feature itself takes two days. Because the feature is never just the feature.

You build it. Then you integrate it. Then you test it. Then you fix the weird edge case. Then you adjust the UI. Then you update your mental model of what the product now is.

That hidden second day is where scope creep lives.

You tell yourself, "I'll just add this one thing." Then that one thing touches four other things. Then those four things create six new decisions.

That is how solo builders lose months without noticing.

At some point, you need **scope lock**.

A real date. A hard line. After that line, no new v1 features get added. Not "I'll try." Not "unless it is small." A real lock.

Anything new goes into the temptation log.

MemeScanr hit scope lock around week ten. After that, I did not add a single new feature to v1. A few new ideas came up before launch. All of them went into the log. All of them shipped later. None of them were worth delaying the release for.

Pick your lock date. Respect it.

**Because the builder who can say no is the builder who gets to launch.**

### > Think Before You Move On

What is the one thing your core loop absolutely must let the user do? Write it as a single sentence. If the sentence is trying to do too much, your MVP still is too.
