---
title: "How Not to Let AI Take Control of You"
slug: "03-how-not-to-let-ai-take-control-of-you"
order: 3
type: "chapter"
number: 3
part: "Act I — Belief"
---This chapter matters more than people realize.

AI is helpful. Almost too helpful. That is exactly why people can become dependent on it.

It is easy to start treating AI like emotional support, intellectual life support, or decision-making life support. People joke about things like, "I do not know what I will do with my life because my AI subscription maxed out for the day." That sounds funny, but it also reveals something real. A tool should not have that much control over your stability.

If you start feeling like you cannot think, plan, write, or build without AI, something is off. That does not mean AI is bad. It means your relationship with it needs boundaries.

A better way to think about AI is this: do not treat it like a ventilator. Treat it like a smart intern, a sous-chef, or a really fast assistant.

A sous-chef is helpful in the kitchen. They prep ingredients. They organize the station. They help you move faster. But they are not the head chef. They are not deciding the vision of the dish. They are not tasting on your behalf and deciding the final result.

You work with AI. You do not let AI quietly replace your judgment.

### The Healthy Workflow

A healthy workflow looks like this:

You plan. You brainstorm. You make the first key decisions. Then AI helps expand, refine, polish, generate, and speed things up. Then you review, edit, test, and finalize.

That order matters.

If AI becomes the first thinker, the first writer, the first designer, and the final decider, you slowly train yourself to disengage. If you do the thinking first, even imperfectly, then use AI to sharpen the work, you stay mentally strong.

### The Warning Signs

There are warning signs that AI is starting to control too much:

- You panic when the tool is down.
- You stop trying to solve things before asking AI.
- You copy outputs without reading them.
- You cannot explain your own product clearly.
- You avoid building unless AI is available.
- You feel mentally blank without it.

That is not healthy leverage. That is dependence.

### The Three Kinds of AI Wrongness

Before we talk about how to stay in charge, I want to name something that almost nobody in the "build with AI" category is willing to say out loud, because it's not good for business.

Here it is: **AI is frequently, confidently, and dangerously wrong.**

Not in the cute way where it misremembers a fact. In the dangerous way where it gives you a solution that compiles, runs, passes your tests, and quietly breaks your product in a way you won't notice until a user emails you in anger. AI failures at the fact level are embarrassing. AI failures at the judgment level are expensive.

In my experience building MemeScanr, AI has been wrong in three distinct ways. Knowing the categories has saved me hours and probably a rejection or two.

**1. Hallucination.** The AI makes something up that doesn't exist. A method name. A parameter. An API. A library version. You ask *"How do I do X in Flutter"* and it cheerfully writes code using a method that was removed two years ago, or never existed at all. The code looks reasonable. Your editor underlines it in red. You spend twenty minutes googling the method before you realize it was never real.

The fix: **always verify API calls against real docs.** For every method or class the AI suggests, take thirty seconds to confirm it's in the current documentation. This sounds tedious and it is, until you lose half a day to a hallucinated API call and decide the thirty seconds was cheap.

**2. Context blindness.** The AI gives you a technically correct answer that's wrong for your specific situation because it doesn't know what else is in your codebase. You ask *"How do I fetch user photos in Flutter"* and it writes perfect code using the `image_picker` package, except your app uses `photo_manager`, so now you have two packages doing the same job and your permission flow is broken in a way that will haunt you for weeks.

The fix: **give the AI context before you ask for code.** Tell it what packages you're using. Paste the relevant file. Explain what else is in the codebase. This is the single biggest upgrade you can make to your AI workflow, and we'll go deep on it in Chapter 9.

**3. Confidence without judgment.** This is the most dangerous kind. The AI gives you a solution that works, but the *direction* of the solution is wrong. It solves the symptom instead of the root cause. It adds a workaround instead of fixing the bug. It suggests a refactor that makes the code more complex instead of simpler. The code is correct. The architecture is worse. You don't notice for weeks.

The fix: **always ask why.** When the AI suggests a fix, ask it to explain why that's the right approach, not just how it works. Then ask what the alternatives were and why it chose this one. The AI's explanation of its reasoning is often where the flaws in the reasoning become visible. If it can't explain why, don't merge the fix.

### How to Stay in Charge

So how do you stay in charge?

**Think first for five minutes before asking AI anything major.** Write down your own rough answer.

**Use AI after your first pass.** Let it improve your thinking, not replace the act of thinking.

**Ask AI to critique, not just create.** That keeps you engaged.

**Explain the result back in your own words.** If you cannot explain it, you do not own it yet.

**Take AI-free reps sometimes.** Sketch the feature. Write the outline. Plan the flow without help first.

**And do not build your identity around access to the tool.** Your subscription is a resource, not your brain.

### My Personal Rules of Engagement

After the code-audit incident I told you about in Chapter 2, I wrote myself a short list of rules for working with AI. I keep them taped (figuratively) to the inside of my brain. I'll share them here because they might be useful to you too. They're not absolute. They're what works for me at this stage of my building journey.

1. **I always read AI-generated code line by line before merging.** If I can't explain what a line does, I don't merge it until I can.

2. **I never accept an AI solution to a bug until I understand the root cause.** A fix that makes the symptom go away is not the same as a fix. This rule alone has prevented me from shipping about twenty cursed workarounds.

3. **I verify API calls against current documentation.** Every method, every parameter, every import. Thirty seconds per call. Non-negotiable.

4. **I ask "why" at least twice.** Once for the approach, once for the alternatives. If the AI can't explain why this approach is better than the alternatives, I assume it doesn't know.

5. **I make the AI justify any refactor that increases complexity.** If the new version has more files, more abstractions, or more moving parts than the old version, I make it prove the benefit. Most of the time it can't, and we walk away.

6. **I never let the AI touch security code without a second pass.** Auth, permissions, encryption, user data handling. The AI can draft. I review. Sometimes I re-review.

7. **I write down what the AI got wrong.** Every false positive, every hallucination, every bad suggestion. Patterns emerge. The list is how I stay calibrated about what the AI is good at and what it's still bad at.

These rules cost me some speed. They save me from shipping things I'd regret. It's a good trade.

### The Deeper Truth

The deeper truth is that AI is not supposed to make you smaller. It is supposed to make you more capable.

If your confidence, judgment, and ownership are shrinking while your output is increasing, something is wrong. The goal is different. Use AI in a way that makes you sharper, calmer, faster, and more creative. Not weaker. Not more passive. Not disconnected from your own work.

That also means giving yourself permission to use AI emotionally well. By that, I mean not using it as a substitute for self-trust.

There is a difference between saying, "Help me think this through," and saying, "Tell me what to think."
There is a difference between saying, "Help me improve this," and saying, "Please replace my effort."
There is a difference between saying, "Make me faster," and saying, "I do not want to be present anymore."

One posture builds you. The other slowly weakens you.

And this matters outside of building too. The habit you form with AI here will leak into other parts of your life. If you train yourself to stay engaged, think first, and use AI as a strong assistant, that habit will make you sharper everywhere. If you train yourself to disappear whenever effort is required, that habit will follow you too.

So the real question is not just whether AI is powerful. It is what kind of person you become while using it. Make sure the answer is someone more capable, not someone more dependent.

### The Most Important Sentence in This Chapter

Here it is, and if you remember nothing else from this book so far, remember this:

**AI is a draft generator. You are the editor. You are also the publisher. And you are the name on the spine.**

When your product ships with a bug, the user doesn't know an AI wrote the code. They see your name. When your product does something the user didn't expect, the user doesn't know the AI suggested it. They see your name. When your product is brilliant, the user doesn't know AI helped. They see your name.

You get all the credit and all the blame. That is the deal. The AI cannot be responsible for the thing it generated because the AI has no skin in the game. You do. You always have. The master driver accepts this and uses it as fuel.

### > Think Before You Move On

Think about the last time you accepted an AI suggestion without fully understanding it. What would have happened if that suggestion had been subtly wrong? How would you have caught it?
