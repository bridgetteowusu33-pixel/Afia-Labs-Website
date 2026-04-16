---
title: "GitHub and Version Control"
slug: "13-github-and-version-control"
order: 13
type: "chapter"
number: 13
part: "Act III — Execution"
---GitHub is not just where you "put your code." It is part of ownership.

GitHub gives you a place to save your code, track changes, create branches, collaborate later if needed, and build a real record of what you have built. It turns your project from a fragile pile of files into something structured and recoverable.

At minimum, create a repository for each serious project, connect your local code to it, commit often, and push regularly.

Use meaningful commit messages. Not "stuff." Not "update." Not "new changes." Say what you actually did:

- Add onboarding flow.
- Fix Android keyboard overlap on login.
- Connect reminders screen to local storage.
- Prepare beta build for TestFlight.

That history becomes your memory.

### GitHub Is More Than Storage

GitHub is useful beyond storage. Branches let you try risky changes without wrecking your main build. README files document what the project is. Issues can track bugs and feature ideas. Releases help mark milestones. Public repos can even become portfolio assets.

Think of GitHub as part backup, part timeline, part proof, and part infrastructure.

A simple rhythm could be:

- Set up the repo on day one.
- First commit: project setup.
- Second commit: onboarding flow.
- Third commit: auth working.
- Fourth commit: dashboard feature done.
- Fifth commit: bug fixes before TestFlight build.

That rhythm turns chaos into a build history. And that build history makes you calmer, because you know your work is not floating in the void. It lives somewhere. It is tracked. It can be recovered. It can be improved.

That is ownership.

### Version Control Reduces Fear

There is also a practical emotional benefit to version control that people rarely say out loud. It reduces fear.

When your code has no history, every change feels dangerous. You become timid. You delay refactors. You hesitate to experiment. You avoid cleaning things up because you are scared of breaking what currently works.

GitHub and version control change that emotional landscape.

They let you try things with a safety net. They let you create branches for risky experiments. They let you roll back when needed. They let you see what changed between "working" and "broken." They let you return to a known-good state instead of spiraling.

That freedom creates better builders.

It also helps when AI is involved. AI can make large edits quickly, and while that speed is useful, it also increases the need for a strong version history. The faster the editing gets, the more valuable your recovery path becomes.

### The Git-First Workflow

Here's a workflow habit that's saved me from disasters more than once: **commit before you prompt the AI, not after.**

The pattern most builders fall into is: they're working on a feature, they hit a problem, they prompt the AI, the AI writes a fix, they merge the fix, they test it, it works, they commit the result. This is the "commit after" pattern. It's fine when things go well. It's a disaster when things go badly.

The better pattern: **commit the current state of your work before you ask the AI for anything.** This gives you a clean checkpoint to roll back to if the AI's suggestion turns out to be wrong. Then prompt the AI, apply the suggestion, test it, and *only* commit if the test passes. If the test fails, you can `git reset --hard` back to the checkpoint and try a different approach, with no cleanup required.

This workflow turns every AI interaction into a low-risk experiment. You're never one merge away from a broken codebase. You're always one reset away from a clean slate.

### Professionalism Is Quiet Infrastructure

So treat GitHub like part of the product, not an optional extra.

If your app matters, your repository matters. If your repository matters, your Git habits matter.

That is not overkill. That is professionalism.

It is also one of the clearest examples of what it means to build with ownership. An owner does not only celebrate the shiny parts of the product. An owner protects the boring but critical infrastructure that keeps the whole thing stable. Backups, repos, branches, commit history, environment organization, release notes, documentation: all of that may feel less exciting than UI or launch content, but those quiet systems are what make growth possible.

If you ignore them, you usually pay later. If you respect them early, they quietly pay you back again and again.

That is what strong infrastructure often feels like. Invisible when everything is going well, priceless when something goes wrong.

### Case Study — The Branch That Saved the Week

A builder lets AI refactor a large chunk of her app. At first it looks fine. Then state starts behaving strangely, a screen breaks, and two unrelated flows start failing. Without version control, that moment would feel like chaos.

But she had made a clean commit before the experiment and done the refactor in a branch.

She compares the changes, spots the weak pattern, rolls back the risky part, and keeps the useful pieces.

The build is saved, but more importantly, so is her confidence.

That is what good Git habits do. They do not only protect the code. They protect your ability to stay calm.

### > Think Before You Move On

When was the last time you made a commit? If it was more than a day ago, pause reading, go commit your current work, and come back. Future-you will thank present-you.
