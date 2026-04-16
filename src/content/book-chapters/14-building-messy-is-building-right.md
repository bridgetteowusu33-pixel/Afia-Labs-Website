---
title: "Building Messy Is Building Right"
slug: "14-building-messy-is-building-right"
order: 14
type: "chapter"
number: 14
part: "Act III — Execution"
---I want to give you permission for something that most building books will not give you permission for.

**Your code is allowed to be messy.**

Your first file can be messy. Your tenth file can be messy. Your architecture can be wrong and you can ship anyway. Your variable names can be inconsistent. Your state management can be a little tangled. Your naming conventions can drift. Your comments can be sparse. Your tests can be incomplete.

All of these can be true, and your product can still be excellent, and your users can still love it, and you can still make money.

There is a whole genre of advice that tells you the opposite: "clean code first." "Tests first." "Architecture first." "Do it right the first time." I understand the intention behind this advice. I also think it is one of the single biggest reasons solo builders never ship. They get stuck trying to do it right before they know what "it" is.

The truth is: **you cannot know what the right architecture is until you've built the wrong one.** The right architecture is a function of the problems you actually encountered, which you cannot predict from day one. So you build the wrong architecture on purpose, ship it, learn what breaks, and refactor what deserves to be refactored. This is not sloppiness. This is how learning works.

### Refactoring Is Not Failure

Let me name the false belief that stops a lot of people from shipping:

*"If I have to refactor later, that means I did it wrong the first time."*

No. If you have to refactor later, that means you learned something you didn't know before. Refactoring is not a confession of incompetence. Refactoring is a sign that you're growing.

I refactor MemeScanr's code every single week. Some weeks a small refactor, some weeks a bigger one. The Backroom state machine has been rewritten twice. The scan orchestrator has been rewritten once. The Memory Lane screen has been rewritten completely. Every one of these refactors was a response to something I learned from real use. Every one of them made the product better. None of them would have been possible without first shipping the version that was "wrong."

Here's the mental model that helped me: **your v1 code is a hypothesis. Your refactor is the experiment telling you which parts of the hypothesis were right.** You don't know what your system should look like until you've watched it fail in specific ways. The failures are the data. The refactor is the learning.

### Case Study — The Silent Vault

I want to tell you the story I'm most ashamed of, because it taught me the single most important thing I know about building consumer products.

MemeScanr's Backroom vault lets users move photos into a private, Face ID-protected space. When I first shipped it, the free tier had a 5-item cap. After 5 items, non-paying users couldn't open the vault at all, but I had a bug in the gate. Free users could still *move items into* the vault, even after hitting the cap. The move would succeed silently. A little checkmark would appear. The item would disappear from the Photos app. The item would land in the vault. No error.

Then the user would go to open the vault to find the item, and they'd hit the paywall. They'd see *"upgrade to unlock Backroom."* They'd close the paywall. They'd reopen the vault. Same paywall. They'd try to get their item back. They couldn't, because the item was in the vault, and the vault was locked.

In other words: **free users could put things into a container they couldn't open.**

The code passed tests. The code worked exactly as I wrote it. The code did not crash. But the user experience was a betrayal. The user gave MemeScanr something precious (their private photos), and MemeScanr silently ate the item and then demanded payment to return it. This is the kind of thing that gets you one-star reviews, refund requests, and a reputation you spend years recovering from.

I caught it in TestFlight before it hit a single real user. The person who caught it was a friend who was running through the flow for fun and got stuck. She emailed me in confusion: *"did I break something? I moved a photo into Backroom and now I can't get it back."*

I felt sick reading that email.

I stopped everything. I spent two days designing a proper trial state machine, the one that's in the app today. Seven days of full access from the first move, then thirty days of read-only grace, then a lock state where items stay preserved on disk but become invisible to the user until they upgrade. At every transition, the user gets a clear notification. No silent eating. No surprise paywalls. No container-without-an-opener.

The lesson was brutal and permanent: **working is not the same as trustworthy.**

Your code can pass every test and still fail the user. Your code can do exactly what you wrote it to do and still betray the relationship. "The code does what I told it to do" is not a defense when the user feels tricked.

From that day on, I test every feature twice: once for correctness, once for trustworthiness. Correctness is "does it do what it's supposed to do?" Trustworthiness is "does the user ever feel tricked, surprised, or unable to undo something they didn't mean to do?" These are different tests. Both matter. Trustworthiness matters more.

### The Trustworthiness Checklist

After the silent vault, I wrote myself a checklist. I run it every time I add a feature that touches user data or makes a consequential change. I'll share it here because it's saved me from shipping at least three more silent-vault-style bugs.

1. **Does the user understand what just happened?** If I moved a photo, did the user see that it was moved? If I deleted something, did the user see that it was deleted?

2. **Can the user undo it, or at least reverse it without customer support?** If no, that's a red flag. Destructive actions without undo need to be flagged with extra consent.

3. **Does the user see the cost before they pay it?** If the feature requires a subscription, does the paywall fire *before* the user takes the action, or *after*? (After is almost always a bug, even if it technically works.)

4. **If this feature fails silently, would the user even know?** If the answer is no, that's a trust surface. Errors need to be visible.

5. **If the user had to explain what just happened to a friend, could they?** If the user's mental model of what the feature does is different from what the code actually does, I have a bug in the design, not in the code.

Run this checklist. It's cheap. It has saved my butt.

### Case Study — The Premature Decoy

One more story before we move on, because it's a perfect example of a bug that would have shipped without me noticing if I hadn't been paying attention.

MemeScanr's Backroom vault has a decoy mode. The idea is: if someone forces you to unlock your vault (a parent, a partner, whoever), you can enter a "decoy PIN" instead of your real PIN, and the vault shows a fake, innocent vault with placeholder content. The real vault is invisible. The duress is invisible. It's a privacy feature for users in actually sensitive situations.

Decoy mode is sensitive security code. It's the kind of thing you get exactly right or you get badly wrong.

I had a bug. For a few weeks, decoy mode was triggering on Face ID *cancel*. Not on wrong PIN. On cancel. Which meant: if a user opened the vault, Face ID failed or was cancelled, they'd see the decoy vault instead of a retry prompt. They'd think their real content was gone. They'd panic. They'd potentially do something irreversible thinking their real vault had been wiped.

The bug didn't show up in any test, because all my tests were checking the "wrong PIN" path and the "correct PIN" path. I'd never written a test for "Face ID was cancelled" as a separate case, because I'd never thought of it as a case. Face ID cancel and wrong PIN were semantically very different, but my decoy trigger was conflating them.

A friend found the bug by accident. She opened the vault, got a Face ID prompt, got distracted, tapped cancel, and saw the decoy vault. She emailed me: *"is this a new feature? I don't remember these items being there."*

I fixed the bug in an hour. But the lesson stayed with me:

**Security features have edge cases that your "happy path" testing will miss.** You need to deliberately test the failure paths, the cancel paths, the timeout paths, the offline paths, the low-battery paths. Not just the paths where everything goes right.

### The Sunday Refactor Ritual

One habit that's kept MemeScanr maintainable, even as it's grown: **one Sunday a month is for refactoring, not features.**

Not every Sunday. One per month. I pick a morning, make coffee, open the codebase, and spend 3-4 hours doing nothing but cleanup. No new features. No bugs. No user-facing anything. Just:

- Renaming things that have confused me in the last month
- Splitting files that have grown too long
- Removing dead code I've been meaning to delete
- Adding comments to explain weird workarounds I'll forget about
- Updating dependency versions that are falling behind
- Deleting `TODO:` comments that are no longer relevant
- Tightening types I was lazy about earlier

The ritual is boring. It's also what keeps the codebase from collapsing.

The rule: **refactor time is non-negotiable.** I don't skip it when I'm behind on features. I don't skip it when I'm burned out. I don't skip it when I feel productive and want to keep shipping.

Treat this like going to the gym. You don't skip the gym because you're busy. You skip other things to protect the gym. Do the same for refactor time.

### > Think Before You Move On

What's one bug or friction point in your product that you've been pretending is fine? Write it down. That's your next refactor. You don't have to fix it today. But name it so you can stop pretending.

---

# Act III — Ownership

*What happens after you ship, and the part nobody tells you about.*
