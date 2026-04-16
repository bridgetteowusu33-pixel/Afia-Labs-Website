---
title: "Pricing Like You Mean It"
slug: "16-pricing-like-you-mean-it"
order: 16
type: "chapter"
number: 16
part: "Act III — Execution"
---Most first-time builders get pricing wrong in the same three ways:

1. They price too low because they don't believe their product is worth more.
2. They pick a random number because they're afraid of looking greedy.
3. They copy a competitor's price without thinking about whether it makes sense for their positioning.

All three are understandable. All three leave money on the table and, worse, signal to users that the builder doesn't know what the product is worth, which makes users trust it less.

Pricing is not a math problem. Pricing is a **positioning** problem. The number you pick tells the user what to expect, what kind of product this is, and how seriously they should take it.

### The Anchoring Staircase

I price MemeScanr at three tiers:

- Monthly: **$4.99**
- Yearly: **$19.99**
- Lifetime: **$39.99**

These numbers are not random. They are a staircase, and each step has a specific job.

**$4.99/month is the impulse tier.** It's low enough that a user can buy it without agonizing. It's the "sure, I'll try it for a month" price. It converts best when a user needs the app *right now* and doesn't want to commit to a year.

**$19.99/year is the commitment tier.** The job of the yearly price is to be a visibly better deal than the monthly price. $19.99 ÷ 12 months = about $1.67/month. A user who does the math (and some users do) immediately sees that yearly is 4x cheaper per month. Most users who plan to use the app long-term will pick yearly.

**$39.99 lifetime is the "I love this" tier.** The job of the lifetime price is to capture the upside from power users who want to own the app outright. It's priced at roughly 2x the yearly price, which means the break-even is month 24. If a user uses the app for more than 2 years, lifetime is the best deal. Users who pick lifetime are making a declaration: *I believe in this product.* They become your strongest advocates.

The staircase is not just three prices. It's three different relationships. Monthly is transactional. Yearly is committed. Lifetime is invested. By offering all three, you let the user pick the relationship that fits their emotional state.

**The anchoring trick**: when users see three prices, they almost never pick the cheapest or the most expensive. They pick the middle. That's why yearly is the middle of MemeScanr's staircase. The price I most want users to pay is the yearly price, so the pricing page puts yearly in the middle, highlights it, and uses the other two prices as contrast.

### The Two-Trial Strategy

Here's something about trials that most builders don't think about carefully enough: **a trial is not one tool. It's two different tools, doing two different jobs, and you should probably use both.**

MemeScanr has a **3-day Premium trial**. This is a standard StoreKit-managed free trial. When a user taps "Start Free Trial" on the paywall, Apple gives them 3 days of full access, and on day 3 they're auto-charged the monthly or yearly rate. This trial is managed by Apple, and its job is simple: **convert free users to paying users.**

MemeScanr also has a **7-day Backroom trial**, which is completely separate from the Premium trial. This one is not StoreKit-managed. It's controlled by my own code. The way it works: when a user first moves a photo into the Backroom vault, a 7-day clock starts. For those 7 days, they have full access to Backroom. On day 7, the app enters a 30-day grace period where Backroom becomes read-only. Existing items are visible, but new items can't be added. On day 37, Backroom locks completely, and users need to upgrade to Premium to regain access. The items are never deleted from disk; they're just invisible until payment.

Why do I have two trials?

Because they do different jobs. The Premium trial is for **conversion**: it gets free users to become paying users. The Backroom trial is for **emotional attachment**: it gets users to put things they care about into the vault, so by the time the trial ends, they don't want to lose what they've stored. The second trial isn't about convincing the user the product is worth paying for (the Premium trial does that job). It's about creating a specific, emotional reason to upgrade on a specific feature.

The Backroom trial has a much higher conversion rate than the Premium trial. Users who have put actual private photos into the vault don't want to lose access to them. The emotional cost of losing those photos is much higher than the financial cost of the subscription. That's the whole point of the design.

**The lesson: trials are a design tool. Don't just ship "a 3-day free trial" as if that's the whole decision. Think about what each trial is for, and which emotional state it's designed to create.**

### Case Study — The Free Tier That Wasn't Gated

I want to tell you a pricing story that taught me the most important thing I know about monetization: **pricing rules only work if the code enforces them.**

MemeScanr's free tier is documented everywhere. In the App Store description, on the website, in the paywall. It says: *"free users can clean up to 25 items per session. Premium users get unlimited cleanup."*

The rule existed. The marketing copy said it. The pricing page said it. The support docs said it.

The code did not enforce it.

For months, free users could clean unlimited items. They could run a scan, select 200 duplicates, tap delete, and MemeScanr would happily delete all 200. The code did not check whether the user was free or Premium before performing the deletion. The 25-item rule was a story we told; it was not a rule we enforced.

This had a specific consequence: **free-to-paid conversion was terrible.** Under 1%. Users would download MemeScanr, clean their entire camera roll in one session, and never upgrade. Why would they? They'd already gotten the value. They had no reason to pay.

I fixed the bug by adding enforcement at four chokepoints: the bulk delete path, the single delete path, the selection confirmation path, and the smart clean path. Each chokepoint runs a check: is this user free, and are they about to exceed the 25-item session limit? If yes, show the paywall. If no, proceed.

The conversion rate jumped from under 1% to around 3.2% within two weeks.

**Same users. Same feature set. Same everything. Just actually enforcing the pricing.**

The lesson: your marketing copy is not a gate. Your paywall design is not a gate. Your user's understanding of your pricing is not a gate. **The only gate is the code that runs when they tap the button.** If you've documented a pricing rule and the code doesn't enforce it, you are giving away your product.

Before you launch, run a specific audit: **every pricing rule you advertise must be enforced somewhere in code.** Make a list. Check each one. It is the cheapest audit you can run and it might triple your conversion.

### The Free / Premium Split

Deciding what goes in the free tier vs what goes in the Premium tier is one of the most consequential product decisions you'll make.

Here are the rules I use for MemeScanr:

1. **The free tier must be genuinely useful on its own.** If a user downloads MemeScanr and never upgrades, they should still have had a valuable experience. If the free tier is crippled, users will uninstall and leave one-star reviews.

2. **The Premium tier unlocks depth, not function.** Free users can scan. Free users can clean. Free users can use Memory Lane. Free users can use the Phone Therapist. What Premium unlocks is: unlimited cleaning per session, full Backroom vault access after the trial, Boost compression, contacts cleanup, and Premium-only app icons. These are depth features.

3. **Premium unlocks must be visible but not annoying.** There's a difference between "nudge the user toward upgrade" and "harass the user until they pay." The first is healthy. The second destroys trust.

4. **There must be at least one premium feature that's emotionally desirable.** For MemeScanr, that feature is the unlimited Backroom vault. Users who care about privacy care *a lot*. They'll upgrade for that feature alone. Every app should have at least one premium feature that users will pay for not because of rational calculation but because of how it makes them feel.

### Monetization Is About Alignment

Monetization can feel emotionally loaded for a lot of people. Many builders are comfortable making things and deeply uncomfortable charging for them. They second-guess their value. They worry about being judged. They underprice because they are thinking about how quickly something was built instead of how useful it is.

That mindset has to change.

Your customer is not paying for the number of hours you suffered. They are paying for the outcome.

If your app saves someone time every week, reduces stress, organizes chaos, helps them work faster, or helps them avoid mistakes, that value exists whether the build took you six months or six days.

So respect value. Respect usefulness. Respect the role your product plays in someone's life. That does not mean pricing arrogantly. It means pricing thoughtfully.

**Underpricing is not always humility. Sometimes it is misalignment.**

Income grows when the product, the message, and the pricing begin to match. And once they do, something beautiful happens. You stop feeling like you are chasing money randomly. You start feeling like the business is making sense.

That is a much better feeling. And it is one built on alignment, not hype.

### > Think Before You Move On

What's your premium feature that users will pay for because of how it makes them feel? If you can't name one, your pricing is going to be a grind. Go back and find it before you launch.
