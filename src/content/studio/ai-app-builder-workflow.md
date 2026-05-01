---
title: The AI app builder workflow — what I actually do every day
date: 2026-04-14
excerpt: Every solo founder is using AI now. Few have written down what their actual workflow looks like. This is mine — the prompts, the order, the parts I won't outsource.
pillar: building-with-ai
readingTime: 12
---

Every solo founder building consumer software is using AI now.

Almost none have written down their actual workflow — the order, the prompts, the model choices, the parts they refuse to outsource. The genre is dominated by "10 prompts for ChatGPT" listicles that read like content marketing for the model providers.

This is what my workflow actually looks like. Not the aspirational version. The version I open my laptop to most days.

## The shape of the day

My day has a fixed rhythm: planning in the morning, building in the middle, shipping or writing in the evening. AI sits inside each phase doing different work.

| Phase | What I do | Where AI lives |
|---|---|---|
| Morning | Plan the day, scope the next feature | Spec writing, decision review |
| Mid-day | Build, fix, refactor | Code generation, code review, debugging |
| Evening | Ship, write, polish | Copy editing, release notes, social posts |

The rhythm isn't "use AI for everything." It's "use AI for specific things, where it earns its keep."

## Phase 1: morning planning

Mornings start with a decision: what's worth doing today? My default is to ship one user-visible thing every day. Not always a feature — sometimes it's a copy fix, or a UI polish pass, or a bug nobody noticed. But something the user will encounter when they next open the app.

The job for AI here is **spec writing**. Before I write a line of code, I write a one-page spec for the thing I want to build. I write it as a conversation with Claude — I describe the problem, Claude pushes back, I refine. By the end of 15-20 minutes, I have:

- A clear statement of what's being built
- The 2-4 design decisions the spec implies
- The data model changes (if any)
- The edge cases I might miss

This is the single highest-leverage use of AI in my whole workflow. It catches problems before I code. The cost of fixing a problem at the spec stage is roughly nothing. The cost of fixing it after I've shipped to TestFlight and a beta tester finds it is a whole afternoon of debugging plus one strained Slack conversation.

A representative spec dialogue:

> **Me:** I want to add an in-app feedback flow to TripSquad. Three buttons: loving it, it's okay, not great. Happy users go to Apple's review prompt. The other two open a form.
>
> **Claude:** Two things to push on. First — what about users who tap "loving it" but Apple's prompt doesn't fire because they've already seen it three times this year? You'd want a fallback (confetti overlay, manual App Store deep link). Second — for "not great," do you want the feedback form to capture the sentiment in metadata, or just the message? If you don't capture sentiment, you can't measure whether the form is actually catching the unhappy users vs. the ambivalent ones.
>
> **Me:** Good. Add confetti overlay regardless. And capture sentiment + category as separate columns.

That conversation took 90 seconds. It surfaced two real product decisions I would have made on the fly mid-implementation, gotten wrong, and rewritten three times.

## Phase 2: mid-day building

Building has three sub-phases — generation, review, and debugging. AI lives in different ways in each.

**Generation.** I rarely ask AI to write a feature from scratch. The output is too generic, the integration with existing code is too rough, and I lose the architectural thread. What I do is hand AI a spec + the relevant existing code, and ask for the *diff*. Ten lines, twenty lines, fifty lines max. Concrete and contained.

If I find myself asking for more than 100 lines of new code at once, the spec wasn't tight enough. Back to morning.

**Review.** Before I commit, I paste the diff back to a fresh Claude window and ask: "What's wrong with this?" Almost always finds something. Usually small (a missed null check, an off-by-one, a TypeScript type that's looser than it should be). Sometimes structural (the new function should be inside the service, not the widget). The five minutes of review prevents bug reports.

**Debugging.** When I'm stuck, the prompt I use most is some version of: "Here's the error. Here's the file. Here's what I expected. Here's what's happening. What's the most likely explanation?" Claude is shockingly good at this — better than I am — because it's a search problem and the model has a wider read of the surrounding ecosystem than I do.

I don't blindly accept its diagnosis. I read it as a hypothesis to test. Maybe 60% of the time the first hypothesis is right. The other 40% it pointed me at the right area, and I find the actual cause within five minutes of looking.

## Phase 3: evening shipping

Shipping is where AI does the boring work I'd otherwise procrastinate on.

**Release notes.** I write the first draft myself (because the voice has to be mine). Then I ask Claude to compress it by 30% without losing the personality. Then I write the final version, taking the cuts I agree with and rejecting the rest. The release notes I ship are mine; AI just helped me get there faster.

**Social posts.** Same pattern. I write the draft. Claude critiques it. I rewrite. The post that goes out is mine, but the rewrite was 3x faster than if I'd done multiple passes alone.

**Copy review.** Before any new screen ships, I paste every visible string into Claude and ask for: typos, voice inconsistencies, places where the words feel off. Catches drift between the brand voice in the app and the brand voice on the marketing site. Catches typos in places I would have missed.

## What I don't outsource

The non-negotiable list. AI never writes:

- **The first draft of any prose under my name.** Not blog posts, not release notes, not the book, not App Store descriptions. The voice has to start as mine. AI compresses, edits, and proofs my drafts. It doesn't generate them.
- **Product decisions.** AI is a sparring partner, never a decision-maker. When I ask "what should we build next?" I'm asking it to help me think, not to decide.
- **Anything that requires real product instinct.** Pricing, positioning, brand voice, taste calls. AI can list options. It can't tell me which option fits Afia Labs. That's the part of the job that earns the studio's identity.
- **The hard conversations.** App Store review responses, Apple support escalations, user emails about a refund. These need real humans on both ends.

If you outsource these to AI, you eventually become a brand with no spine. The output may be passable. But you'll lose the thread.

## Models and tools, current as of April 2026

The stack changes. The principles don't. As of right now, my stack is:

| Tool | Used for |
|---|---|
| Claude Sonnet 4.6 (or 4.7 / Opus when warranted) | Spec writing, code generation, code review, copy editing — the bulk of the work |
| Claude Haiku 4.5 | Lightweight extraction tasks (e.g., the dislike-extractor in TripSquad's Scout) |
| Cursor (with Claude) | The IDE I write in |
| Anthropic API (via Edge Functions) | In-product AI features (Scout in TripSquad, smart sorting in MemeScanr) |
| Code review by hand | Anything financial, security-sensitive, or that touches user data — AI helps, I commit |

I don't use ChatGPT for anything currently. Not for product reasons — Claude's voice and code-review quality just match how I work better.

## The rule that holds it all together

There's one rule I keep coming back to: **AI is a force multiplier on judgment, not a substitute for it.**

If your judgment is sharp, AI lets you ship faster, write better, and spec tighter. If your judgment is unclear, AI helps you produce more output that's confidently wrong.

Solo consumer founders can use AI to compete with much bigger teams now — but only if they keep the judgment muscle in shape. The temptation is to outsource the judgment too. That's the trap. Once you outsource the judgment, you're not a studio anymore. You're a content farm with better tools.

I keep the judgment. AI does the lifting around it. That's the workflow.

---

*Afia Labs ships [MemeScanr](https://memescanr.com), [TripSquad](https://gettripsquad.com), and the [From Idea to Income with AI Apps](/book/) book. The whole studio is solo + AI. This is what the workflow looks like in practice.*
