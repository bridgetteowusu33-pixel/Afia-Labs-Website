---
title: "GitHub and Version Control"
slug: "13-github-and-version-control"
order: 13
type: "chapter"
number: 13
part: "Act III — Execution"
---
The fastest way to lose a week as a solo builder is to let AI make a large edit in a codebase that has no clean rollback point.

I know because I did exactly that.

It was month six of building MemeScanr. I had been working on the scan orchestrator, the piece of the app that coordinates everything that happens when a user taps "Scan My Gallery." The orchestrator touched about eight files and handled photo access, hash computation, duplicate grouping, progress UI, and result storage. It was messy. It had grown organically over months. I knew it needed a refactor.

So I asked Claude to refactor it. I gave it the files, described the structure I wanted, and hit enter. The AI rewrote about four hundred lines across three files. I skimmed the output. It looked cleaner. I merged it.

Then I ran the app.

The scan started. The progress bar filled to about 40%. Then the app froze. Not a crash. A freeze. The UI was alive but the scan had stopped processing. I tapped around. Some screens worked. Others didn't. The results screen showed zero duplicates on a gallery that had eight hundred.

I spent about two hours trying to figure out what the AI had broken. The refactor had changed the order of two async calls, which meant the hash computation was now racing the duplicate grouping, which meant results were being written before the scan was actually done. The code was cleaner than before. It was also wrong.

Here's the part that made me feel sick: **I had not committed before the refactor.** My last commit was from the day before, and it included a bunch of other changes I'd made that morning. I couldn't cleanly roll back to the pre-refactor state without also losing everything else I'd done that day.

I spent the rest of the evening manually undoing the AI's changes line by line, comparing what I remembered against what the files now contained. I got the scan working again around midnight. I lost about six hours of productive time to a problem that would have been a thirty-second `git reset` if I'd committed first.

That night, I made a rule: **commit before you prompt the AI, not after.** I have not broken this rule since.

### Why Git Is Part of Ownership

GitHub is not where you "put your code." It is where your code becomes an asset instead of a fragile pile of files.

A repository gives you history, recovery, and proof. It turns every decision you've made into something you can revisit, compare, and learn from. It lets you experiment without fear, because every experiment has a rollback point. It gives you a timeline of your own growth as a builder, which is something you'll value more than you expect.

At minimum: create a repository for each serious project, connect your local code to it, commit often, and push regularly. Use meaningful commit messages. Not "stuff." Not "update." Say what you actually did:

- Add onboarding flow
- Fix Android keyboard overlap on login
- Connect reminders screen to local storage
- Prepare beta build for TestFlight

That history becomes your memory. Six months from now, when you can't remember why a file looks the way it does, `git log` will tell you. That matters more than it sounds.

### The Emotional Case for Version Control

There's a benefit to version control that people rarely say out loud: it changes how brave you are.

When your code has no history, every change feels dangerous. You become timid. You delay refactors. You hesitate to experiment. You avoid cleaning things up because you're scared of breaking what currently works. The codebase gets worse because you're afraid to touch it, and the fear is rational, because you have no safety net.

Git changes that. Branches let you try risky things without wrecking your main build. Diffs let you see exactly what changed between "working" and "broken." Resets let you return to a known-good state instead of spiraling. The safety net makes you braver, and braver builders ship better products.

This matters even more when AI is involved. AI can rewrite four hundred lines in eight seconds. That speed is powerful and also terrifying if you have no way to undo it. The faster the editing gets, the more valuable your recovery path becomes.

### Commit Before You Prompt

Let me say the rule again, because it's the single most important Git habit for builders who use AI:

**Commit the current state of your work before you ask the AI for anything.**

The pattern most builders fall into: they're working on a feature, they hit a problem, they prompt the AI, the AI writes a fix, they merge the fix, they test it, it works, they commit. This is the "commit after" pattern. It's fine when things go well. It's a disaster when things go badly, because you have no clean state to return to.

The better pattern: commit first, then prompt. If the AI's suggestion works, commit again. If it doesn't, `git reset --hard` back to the checkpoint. No cleanup. No line-by-line undo at midnight. No lost work.

Every AI interaction becomes a low-risk experiment. You're never one merge away from a broken codebase. You're always one reset away from a clean slate.

### Case Study — The Refactor That Almost Ate My Sunday

About two months after the scan orchestrator disaster, I needed to refactor the Backroom vault's state machine. The trial logic had grown tangled. I had three different places checking whether the user was in the trial period, the grace period, or the locked state, and they were starting to disagree with each other.

This time I committed first. Clean commit. Clear message: "pre-refactor checkpoint: vault state machine."

Then I asked Claude to consolidate the three check points into a single state machine class. The AI produced something elegant. I merged it. I ran the app. The vault opened fine. The trial countdown worked. The grace period transitioned correctly.

Then I tested the edge case where a user's trial expires while the app is backgrounded. The vault showed the locked state for one frame, then flickered back to the trial state. A visual glitch, but a trust-breaking one. Users would see their vault lock and unlock in a split second, which is exactly the kind of thing that makes people think an app is broken.

I could have spent an hour debugging. Instead I ran `git diff` against my checkpoint, found the one line where the AI had changed the order of a state check, fixed that single line, and committed. Total time: twelve minutes.

The difference between the scan orchestrator disaster (six hours, no checkpoint) and the vault refactor (twelve minutes, clean checkpoint) is the entire argument for Git discipline. Same builder. Same AI. Same kind of problem. Completely different outcome, because one had a safety net and the other didn't.

### Professionalism Is Quiet Infrastructure

If your app matters, your repository matters. If your repository matters, your Git habits matter.

An owner doesn't only celebrate the shiny parts of the product. An owner protects the boring infrastructure that keeps the whole thing stable. Repos, branches, commit history, backup rhythm, release notes. None of that is exciting. All of it is what makes growth possible.

Invisible when everything is going well. Priceless when something goes wrong. That's what strong infrastructure feels like.

### > Think Before You Move On

When was the last time you made a commit? If it was more than a day ago, pause reading, go commit your current work, and come back. Future-you will thank present-you.
