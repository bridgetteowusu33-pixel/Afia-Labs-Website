---
title: "Building Messy Is Building Right"
slug: "14-building-messy-is-building-right"
order: 14
type: "chapter"
number: 14
part: "Act II — Reality"
---
I want to give you permission for something most building books will not give you permission for.

**Your code is allowed to be messy.**

Your first file can be messy.
Your tenth file can be messy.
Your architecture can be wrong and you can ship anyway.
Your variable names can be inconsistent.
Your state management can be a little tangled.
Your naming conventions can drift.
Your comments can be sparse.
Your tests can be incomplete.

All of that can be true, and your product can still be excellent, and your users can still love it, and you can still make money.

There is a whole genre of advice that tells you the opposite.

Clean code first. Tests first. Architecture first. Do it right the first time.

I understand the intention behind that advice. I also think it is one of the biggest reasons solo builders never ship. They get stuck trying to do it right before they even know what *it* is.

The truth is this:

**You cannot know what the right architecture is until you have built the wrong one.**

The right architecture is a function of the problems you actually encountered, and you cannot predict those from day one. So you build the wrong version on purpose, ship it, learn what breaks, and refactor what deserves to be refactored.

That is not sloppiness.

That is how learning works.

### Refactoring Is Not Failure

Let me name the false belief that stops a lot of people from shipping:

*"If I have to refactor later, that means I did it wrong the first time."*

No.

If you have to refactor later, that means you learned something you did not know before. Refactoring is not a confession of incompetence. Refactoring is a sign that you are growing.

I refactor MemeScanr's code every single week. Some weeks it is a small refactor. Some weeks it is a bigger one. The Backroom state machine has been rewritten twice. The scan orchestrator has been rewritten once. The Memory Lane screen has been rewritten completely.

Every one of those refactors was a response to something I learned from real use. Every one of them made the product better. None of them would have been possible without first shipping the version that was "wrong."

Here is the mental model that helped me:

**Your v1 code is a hypothesis. Your refactor is the experiment telling you which parts of the hypothesis were right.**

You do not know what your system should look like until you have watched it fail in specific ways. The failures are the data. The refactor is the learning.

### Case Study — The Silent Vault

I want to tell you the story I am most ashamed of, because it taught me one of the most important things I know about building consumer products.

MemeScanr's Backroom vault lets users move photos into a private, Face ID-protected space. When I first shipped it, the free tier had a five-item cap. After five items, non-paying users could not open the vault anymore.

But I had a bug in the gate.

Free users could still move items into the vault even after hitting the cap.

The move would succeed silently. A checkmark would appear. The item would disappear from the Photos app. The item would land in the vault. No error. No warning.

Then the user would try to open the vault to get it back, and they would hit the paywall.

They would see *"upgrade to unlock Backroom."*
They would close the paywall.
They would reopen the vault.
Same paywall.

They would try to get their item back.

They could not.

Because the item was in the vault, and the vault was locked.

In other words:

**Free users could put things into a container they could not open.**

The code passed tests. The app did not crash. The code did exactly what I told it to do.

And the user experience was still a betrayal.

The user gave MemeScanr something precious — private photos — and MemeScanr silently took the item and then demanded payment to return it. That is the kind of bug that earns one-star reviews, refund requests, and a reputation you spend years trying to repair.

I caught it in TestFlight before it hit a single real user. A friend was running through the flow for fun and got stuck. She emailed me in confusion: *"Did I break something? I moved a photo into Backroom and now I can't get it back."*

I felt sick reading that email.

I stopped everything and spent two days designing a proper trial state machine, the one that is in the app now. Seven days of full access from the first move. Then thirty days of read-only grace. Then a locked state where items stay preserved on disk but become invisible until the user upgrades.

At every transition, the user gets a clear explanation.

No silent eating.
No surprise paywalls.
No container without an opener.

The lesson was brutal and permanent:

**Working is not the same as trustworthy.**

Your code can pass every test and still fail the user. Your code can do exactly what you wrote it to do and still betray the relationship.

"The code does what I told it to do" is not a defense when the user feels tricked.

From that day on, I started testing every feature twice:

- Once for correctness
- Once for trustworthiness

Correctness asks: does it do what it is supposed to do?
Trustworthiness asks: does the user ever feel tricked, surprised, or unable to undo something they did not mean to do?

Those are different tests. Both matter. Trustworthiness matters more than most builders realize.

### The Trustworthiness Checklist

After the Silent Vault incident, I wrote myself a checklist. I run it every time I add a feature that touches user data or makes a consequential change.

It has saved me from shipping at least three more bugs like that one.

1. **Does the user understand what just happened?** If I moved a photo, did the user clearly see that it was moved? If I deleted something, did the user clearly see that it was deleted?

2. **Can the user undo it, or at least reverse it without customer support?** If not, that is a red flag. Destructive actions without undo need extra consent and extra clarity.

3. **Does the user see the cost before they pay it?** If a feature requires a subscription, does the paywall appear before the action or after? After is almost always a bug, even if it technically works.

4. **If this feature fails silently, would the user even know?** If the answer is no, that is a trust surface. Errors need to be visible.

5. **If the user had to explain what just happened to a friend, could they?** If the user's mental model is different from what the code actually did, I do not just have a code bug. I have a design bug.

Run this checklist. It is cheap. It is fast. It can save your butt.

### Case Study — The Premature Decoy

One more story before we move on, because it is a perfect example of the kind of bug that ships when you only test the happy path.

MemeScanr's Backroom vault has a decoy mode. The idea is this: if someone forces you to unlock your vault — a parent, a partner, whoever — you can enter a decoy PIN instead of your real PIN, and the vault will show a harmless fake space with placeholder content. The real vault stays hidden.

It is a privacy feature for users in genuinely sensitive situations.

That means it is security code. And security code has to be exactly right.

I had a bug.

For a few weeks, decoy mode was triggering on Face ID *cancel*.

Not wrong PIN. Not failed unlock. Cancel.

Which meant that if a user opened the vault, got the Face ID prompt, got distracted, and tapped cancel, they would see the decoy vault instead of a retry screen.

They would think their real content was gone.

They would panic.

They might even do something irreversible because they thought the vault had been wiped.

The bug did not show up in any of my tests, because all my tests checked the wrong-PIN path and the correct-PIN path. I had never tested Face ID cancel as its own case. I had not thought of it as its own case.

But semantically, those are very different things.

A friend found it by accident. She opened the vault, got distracted, tapped cancel, and then emailed me: *"Is this a new feature? I don't remember these items being there."*

I fixed the bug in an hour.

The lesson lasted much longer:

**Security features have edge cases that happy-path testing will miss.**

You have to deliberately test:

- Cancel paths
- Timeout paths
- Failure paths
- Offline paths
- Low-battery paths
- Interrupted-session paths

Not just the paths where everything goes right.

### The Sunday Refactor Ritual

One habit that has kept MemeScanr maintainable, even as it has grown:

**One Sunday a month is for refactoring, not features.**

Not every Sunday. One per month.

I pick a morning, make coffee, open the codebase, and spend three to four hours doing nothing but cleanup.

No new features. No bug triage. No user-facing work.

Just:

- Renaming things that confused me during the month
- Splitting files that got too long
- Removing dead code
- Adding comments to explain weird workarounds
- Updating dependencies that are drifting behind
- Deleting stale TODOs
- Tightening types I was lazy about earlier

The ritual is boring.

It is also one of the reasons the codebase has not collapsed.

The rule is simple:

**Refactor time is non-negotiable.**

I do not skip it because I am behind on features. I do not skip it because I am tired. I do not skip it because I feel productive and want to keep shipping.

Treat it like going to the gym.

You do not skip the gym because you are busy. You protect the gym by skipping something else.

Do the same thing here.

### What Messy Building Actually Means

I want to be clear about something.

"Build messy" does not mean "build carelessly."

It means:

- Do not worship premature elegance
- Do not delay shipping because the internals are not pretty yet
- Do not confuse polish in the codebase with proof of product-market fit
- Do not wait for the perfect structure before you have earned the information that structure should be based on

Messy building is still thoughtful.

It is just honest about sequence.

First you learn. Then you organize what you learned. Then you clean up what deserves cleaning.

That is very different from chaos.

### > Think Before You Move On

What is one bug or friction point in your product that you have been pretending is fine?

Write it down.

That is your next refactor.

You do not have to fix it today. But name it, so you can stop pretending.
