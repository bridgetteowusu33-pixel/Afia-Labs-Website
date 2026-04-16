---
title: "Your Kitchen: Stack and Setup"
slug: "10-your-kitchen-stack-and-setup"
order: 10
type: "chapter"
number: 10
part: "Act III — Execution"
---
I picked Flutter for three reasons, and two of them turned out to be wrong.

That is probably the most honest way I can start this chapter, because stack decisions have a way of following you into problems you do not yet know you are signing up for.

When people talk about choosing a stack, they often talk as if it is a purely technical decision. It is not. It is a product decision, a workflow decision, and a future-self decision. It shapes how fast you move, how hard your bugs are to fix, how much control you have, and what kind of builder you are quietly becoming.

For most builders starting out, a practical ownership-first stack looks something like this:

- VS Code as your editor
- Codex, Claude Code, or GitHub Copilot as your AI coding assistant
- React or Flutter for the frontend, depending on your product goals
- Supabase or Firebase for the backend
- Postgres through Supabase or Firebase, depending on the tradeoffs you want
- Git and GitHub for version control
- Vercel for web deployment
- App Store Connect for iOS
- Google Play Console for Android
- Stripe for payments

The goal is not to use every tool. The goal is to pick a stack you can grow with.

### VS Code Is Your Kitchen

VS Code is my personal favorite because it gives you a home base.

It is where your files live. It is where your project is organized. It is where your Git history lives. It is where you build the habit of understanding your own product instead of just generating pieces of it.

If AI app builders are like ordering food from a restaurant, **VS Code is like having your own kitchen.**

You still might use pre-made ingredients.
You still might use helpful appliances.
You still might even get recipe suggestions.

But you are in your own kitchen.

That changes everything.

There is a psychological shift that happens when you have a real workspace. A named folder. A repository. A structure. A proper editor. A version history. A place where the work actually lives.

That shift matters more than it sounds. It tells your brain that this is no longer just an idea. It is a thing. A thing with files. A thing with history. A thing that can be improved, recovered, and shipped.

That is why I care so much about builders having their own environment, even if the first version is messy. Once you are building in your own kitchen, you are no longer just imagining a product. You are building an asset.

At the practical level, the basic setup is simple: install VS Code, create a folder for your app, initialize Git, create a GitHub repository, connect the project, and install the AI tools you actually plan to use. That is enough to start. The point is not ceremony. The point is to give the work a real home.

### Don't Collect Tools Like Trophies

One of the easiest ways to waste energy as a modern builder is to turn tool selection into a hobby.

Do not collect tools like trophies.
Do not switch every week because someone online posted a new favorite setup.
Do not make your stack another form of procrastination.

Pick a lane. Pick a workable combination. Learn it deeply enough to move.

The stack should support execution, not become the thing you hide inside when you are scared to build.

A clean stack also helps when you are asking AI for help. The more stable your environment is, the easier it is to prompt clearly, diagnose problems, and make consistent progress. Chaos in your tools usually becomes chaos in your output.

So think of this chapter as setting the table. You are choosing the environment your future work will live inside. Make it stable enough to trust and simple enough to grow with.

### The Three Stacks You're Probably Choosing Between

If you are building a mobile consumer app as a solo builder in the AI era, your realistic choices are usually some version of these three.

**Flutter** gives you one codebase for iOS and Android. It uses Dart and has its own rendering engine, which means you get strong design control and consistent behavior across platforms. It is mature, fast, and AI tools generally handle it well. The biggest downside is that it never feels fully native in the way a true iOS or Android app does, and the hiring pool later is smaller than the pool for web or iOS-native developers.

**SwiftUI plus Swift** is the native iOS path. It feels like iOS because it *is* iOS. It is the best path if you care deeply about polish, native behavior, and Apple-specific surfaces like Live Activities, widgets, watch integrations, or other things that only really sing when you build directly in Apple's world. The tradeoff is obvious: you are choosing one platform, and Android becomes a second project you may never start.

**React Native** gives you one codebase for iOS and Android using JavaScript or TypeScript. That makes it attractive if you already think in web terms or want access to a large talent pool later. It can move quickly and has a huge ecosystem. The tradeoff is that polish is usually harder than people expect, and performance can get uneven on older devices if you are not careful.

There is no holy stack. There is only the stack that fits the product you are actually trying to build and the builder you are actually trying to become.

### Why I Picked Flutter, and What It Cost Me

I picked Flutter for three reasons, and two of them turned out to be wrong.

**Reason one, which turned out to be right:** I wanted the option to ship Android later. Flutter made that a real option. If I had started in SwiftUI, Android would have meant a second build from scratch.

**Reason two, which turned out to be wrong:** I thought cross-platform would matter soon. It did not. I shipped iOS only for the entire first year. Android was always "later." Later never came, because iOS alone was already more work than I had capacity for. The option was real, but I never exercised it.

**Reason three, which also turned out to be wrong:** I thought one codebase would mean half the work. It is not half the work. It is more like eighty percent of the work. You still have platform-specific code for permissions, StoreKit, local notifications, photo access, background behavior, widgets, Siri Shortcuts, and a long list of other things that do not magically become identical just because the UI framework is shared.

**If I were starting MemeScanr today, I would probably pick SwiftUI.**

Not because Flutter is bad. It is not.

But because my actual revealed preference was this: iOS first, Android maybe, polish-obsessed. That is a very different thing than saying "I want a balanced cross-platform build." And SwiftUI matches my actual preference better than Flutter did.

I am telling you this because I want you to make a more honest stack decision than I made.

Ask yourself: **if you could only ship to one platform, which would you choose?**

If the answer is iOS, and you are being honest, SwiftUI may serve you better than Flutter.

### The Two-Year Commitment

Here is the question I wish someone had asked me on day one:

**Are you willing to spend the next two years learning this stack deeply enough to debug it at 2 a.m. when something weird happens in production?**

Because that is the real commitment.

A stack choice is not just "what should I prototype in?" It is also "what am I willing to become fluent in?"

That matters because fluency is expensive. It takes time. It takes frustration. It takes repetition. And if you are going to make that investment, you should at least ask whether the worst-case outcome is still worth it.

Here is the better filter:

**If this app fails, will I still be glad I spent two years getting good at this stack?**

If the answer is yes, the stack may still be a good decision.
If the answer is no, you are betting too much on one product.

My answer for Flutter is yes. Even if MemeScanr had made no money, the Flutter skills I built would still be valuable, portable, and career-positive. That is the minimum bar.

**Pick a stack whose worst-case outcome is still worth living with.**

### The 24,000-Line Confession

I want to plant a specific warning here, because it is one of the biggest hidden costs of building with AI and almost nobody talks about it enough.

**AI accelerates output and technical debt at the same rate.**

Here is what that looks like in practice.

You are building a feature. You have momentum. You prompt the AI. It gives you a solution. You merge it. It works. You move on.

The file is now a little longer.

The next feature, same thing.
A little longer.
Then a little longer again.
Then one more helper class.
Then one more widget.
Then one more exception to the structure you meant to clean up later.

Nothing breaks.

That is the trap.

The file still works. The app still runs. The features still ship. So you do not feel the cost right away. You just quietly accumulate structure you no longer fully understand.

This happened to me with `lib/main.dart` in MemeScanr.

The file grew to around 24,000 lines. Twenty-four thousand. In one Dart file.

I did not plan for that. Nobody plans for that. It happened because every individual choice made sense in the moment. "Just put this one more class in here." "I'll split it later." "This is not worth refactoring right now." Individually, those decisions felt rational. Collectively, they became a tax I now pay every day.

Here is what a 24,000-line file does to your life:

Every time I open it, the editor lags.
Every time I search for something, I have to remember exactly what I named it.
Every refactor feels riskier because the blast radius is hard to predict.
Every future version of me has to relearn the file from scratch.
AI tools become less useful because the context window fills up with noise.

I am paying a daily tax for a decision I did not realize I was making.

That is why I tell people to refactor earlier than feels necessary.

I know that sounds like premature optimization. It is not. It is defense against a very specific kind of debt that compounds quietly while everything still appears to be working.

The rule I use now is simple:

**If a file is longer than 500 lines, any new feature I add to it has to justify why splitting the file would be more expensive than growing it.**

Most of the time, that justification fails, and the split wins.

If I had enforced that rule from day one, main.dart would not be 24,000 lines today.

Learn from my regret.

Refactor earlier.

### > Think Before You Move On

If you had to commit to one stack for the next two years, not just for this project but for your growth as a builder, which would you pick, and can you explain why in one specific sentence?
