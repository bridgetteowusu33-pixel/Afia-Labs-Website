---
title: "Pricing Like You Mean It"
slug: "16-pricing-like-you-mean-it"
order: 16
type: "chapter"
number: 16
part: "Act III — Ownership"
---
Pricing is not a math problem. Pricing is a **positioning** problem.

The number you pick tells the user what to expect, what kind of product this is, and how seriously they should take it.

Most first-time builders get pricing wrong in the same three ways.

They price too low because they do not believe their product is worth more.
They pick a random number because they are afraid of looking greedy.
They copy a competitor's price without asking whether it makes sense for their positioning.

All three are understandable. All three leave money on the table. Worse, they can quietly signal to users that the builder does not actually know what the product is worth.

That matters.

Because pricing is not just about money. Pricing is part of the product's story. It tells the user whether this is disposable, premium, serious, casual, undercooked, or worth trusting.

### The Anchoring Staircase

I price MemeScanr at three tiers:

- Monthly: **$6.99**
- Yearly: **$24.99**
- Lifetime: **$59.99**

These numbers are not random. They are a staircase, and each step has a specific job.

**$6.99 per month is the impulse tier.** It is low enough that a user can buy it without agonizing. It is the "sure, I'll try it for a month" price. It converts best when a user needs the app right now and does not want to commit to a year.

**$24.99 per year is the commitment tier.** Its job is to be a visibly better deal than the monthly plan. At about $2.08 per month, it makes the monthly plan feel expensive by comparison. Users who expect to use the app for more than a moment usually land here.

**$59.99 lifetime is the "I love this" tier.** Its job is to capture the upside from power users who want to own the app outright. It is priced at roughly twice the yearly plan, which means the break-even is about month twenty-four. If a user sees themselves using the app longer than that, lifetime becomes the emotional and practical win.

The staircase is not just three prices. It is three different relationships.

Monthly is transactional.
Yearly is committed.
Lifetime is invested.

By offering all three, you let the user choose the relationship that matches their emotional state.

There is also a simple anchoring principle at work here: when users see three prices, they almost never pick the cheapest or the most expensive. They usually pick the middle. That is why yearly sits in the middle of MemeScanr's pricing. It is the plan I most want users to choose, so the page is designed to make that choice feel obvious.

### The Two-Trial Strategy

Here is something about trials that a lot of builders do not think about carefully enough:

**A trial is not one tool. It is two different tools doing two different jobs, and you should probably think about both.**

MemeScanr has a **3-day Premium trial**. This is a standard StoreKit-managed free trial. When a user taps "Start Free Trial" on the paywall, Apple gives them three days of full access, and on day three they are charged the monthly or yearly rate unless they cancel. That trial has one simple job: **convert free users into paying users.**

MemeScanr also has a **7-day Backroom trial**, and this one is completely different.

It is not StoreKit-managed. It is controlled by my own code. When a user first moves a photo into the Backroom vault, a seven-day clock starts. For those seven days, they have full access to Backroom. On day seven, the app enters a thirty-day grace period where Backroom becomes read-only. Existing items remain visible, but new items cannot be added. On day thirty-seven, Backroom locks completely, and users need Premium to regain full access. The items are not deleted. They are simply inaccessible until payment.

Why do both?

Because they do different jobs.

The Premium trial is about **conversion**.
The Backroom trial is about **emotional attachment**.

The first asks, "Can I get this user to try Premium?"
The second asks, "Can I create a specific reason this user will not want to lose access?"

That difference matters.

The Backroom trial performs much better than the Premium trial, because users who have stored actual private photos in the vault now have an emotional reason to upgrade. The cost of losing access to something personal feels bigger than the subscription price.

That is the real leverage.

**Trials are not just pricing mechanics. They are design tools.** Do not just ship "a three-day free trial" as if that is the whole decision. Think about what the trial is supposed to do and what emotional state it is supposed to create.

### Case Study — The Free Tier That Was Not Gated

This is the pricing story that taught me the most important thing I know about monetization:

**Pricing rules only work if the code enforces them.**

MemeScanr's free tier is documented everywhere. In the App Store description, on the website, in the paywall. It says: free users can clean up to 25 items per session. Premium users get unlimited cleanup.

The rule existed in the copy.
The rule existed in the pricing page.
The rule existed in the support docs.

The code did not enforce it.

For months, free users could clean unlimited items. They could run a scan, select 200 duplicates, tap delete, and MemeScanr would happily delete all 200. The 25-item rule was a story we told. It was not a rule the product actually enforced.

This had a predictable consequence: free-to-paid conversion was terrible. Under 1 percent.

Why would users upgrade? They had already gotten all the value they needed.

I fixed the bug by adding enforcement at four chokepoints: the bulk delete path, the single delete path, the selection confirmation path, and the smart clean path. Each one now checks whether the user is free and whether they are about to exceed the 25-item session limit. If yes, the paywall appears. If no, the action continues.

The conversion rate jumped from under 1 percent to around 3.2 percent within two weeks.

Same users.
Same feature set.
Same app.
Just actually enforced pricing.

That lesson stayed with me.

Your marketing copy is not a gate.
Your paywall design is not a gate.
Your user's understanding of the pricing is not a gate.

**The only gate is the code that runs when they tap the button.**

If you advertise a pricing rule and the code does not enforce it, you are giving away your product.

Before you launch, run this audit: every pricing rule you advertise should exist somewhere in code. Make a list. Check each one. It is one of the cheapest audits you can run, and it can completely change your conversion.

### The Free and Premium Split

Deciding what goes into the free tier versus the Premium tier is one of the most consequential product decisions you will make.

Here are the rules I use for MemeScanr.

**The free tier must be genuinely useful on its own.** If a user downloads MemeScanr and never upgrades, they should still have had a valuable experience. If the free tier is crippled, users will uninstall and leave one-star reviews.

**Premium should unlock depth, not basic function.** Free users can scan. Free users can clean. Free users can use Memory Lane. Free users can use the Phone Therapist. Premium unlocks things like unlimited cleaning per session, full Backroom access after the trial, Boost compression, contacts cleanup, and premium-only app icons. These are depth features.

**Premium unlocks should be visible, but not annoying.** There is a difference between nudging a user toward upgrade and harassing them until they pay. The first can work. The second destroys trust.

**At least one premium feature should be emotionally desirable.** For MemeScanr, that feature is the unlimited Backroom vault. Users who care about privacy care deeply. They do not upgrade for a spreadsheet reason. They upgrade because the feature protects something that matters to them.

That is an important pricing lesson on its own: people do not only buy features. They buy relief, convenience, privacy, confidence, speed, peace of mind, and the feeling of being taken care of.

If your Premium offer has no emotional gravity, pricing will always feel harder than it needs to.

### Monetization Is About Alignment

Monetization can feel emotionally loaded for a lot of people.

Many builders are comfortable making things and deeply uncomfortable charging for them. They second-guess their value. They worry about being judged. They underprice because they are thinking about how quickly something was built instead of how useful it is.

That mindset has to change.

Your customer is not paying for the number of hours you suffered. They are paying for the outcome.

If your app saves someone time every week, reduces stress, organizes chaos, helps them move faster, or helps them avoid mistakes, that value exists whether the build took you six months or six days.

So respect value. Respect usefulness. Respect the role your product plays in someone's life.

That does not mean pricing arrogantly. It means pricing thoughtfully.

**Underpricing is not always humility. Sometimes it is misalignment.**

Income starts becoming more predictable when the product, the message, and the pricing finally agree with each other. When that happens, monetization stops feeling random. It starts feeling coherent.

That is a much better feeling.

And it is built on alignment, not hype.

### > Think Before You Move On

What is your premium feature that users will pay for because of how it makes them feel? If you cannot name one, your pricing is going to be a grind. Go back and find it before you launch.
