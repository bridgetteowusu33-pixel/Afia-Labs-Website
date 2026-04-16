---
title: "Your Kitchen: Stack and Setup"
slug: "10-your-kitchen-stack-and-setup"
order: 10
type: "chapter"
number: 10
part: "Act II — Reality"
---
I picked Flutter for three reasons, and two of them turned out to be wrong.

That is probably the most honest way I can start this chapter, because stack decisions have a way of following you into problems you do not yet know you are signing up for.

When people talk about choosing a stack, they often talk as if it is a purely technical decision. It is not. It is a product decision, a workflow decision, and a future-self decision. It shapes how fast you move, how hard your bugs are to fix, how much control you have, and what kind of builder you are quietly becoming.

For most builders starting out, a practical ownership-first stack looks something like this:
- VS Code as your editor
- Codex, Claude Code, or GitHub Copilot as your AI assistant
- React or Flutter for the frontend, depending on your product
- Supabase or Firebase for the backend
- Git and GitHub for version control
- Vercel for web deployment
- App Store Connect for iOS
- Google Play Console for Android
- Stripe for payments

The goal is not to use every tool. The goal is to pick a stack you can grow with.

### VS Code Is Your Kitchen

VS Code is my favorite because it gives you a home base.

It is where your files live. It is where your project is organized. It is where your Git history lives. It is where you build the habit of understanding your own product instead of just generating pieces of it.

There is a psychological shift that happens when you have a real workspace. A named folder. A repository. A structure. A proper editor. A version history. A place where the work actually lives.

That shift matters more than it sounds. It tells your brain that this is no longer just an idea. It is a thing. A thing with files. A thing with history. A thing that can be improved, recovered, and shipped.

That is why I care so much about builders having their own environment, even if the first version is messy.

Once you are building in your own kitchen, you are no longer just imagining a product. You are building an asset.

### Do Not Collect Tools Like Trophies

One of the easiest ways to waste energy as a modern builder is to turn tool selection into a hobby.

Do not collect tools like trophies.

Do not switch every week because someone online posted a new favorite setup.

Do not make your stack another form of procrastination.

Pick a lane. Pick a workable combination. Learn it deeply enough to move.

The stack should support execution, not become the thing you hide inside when you are scared to build.

### The Three Stacks You Are Probably Choosing Between

If you are building a mobile consumer app as a solo builder, your realistic choices are usually some version of these three.

Flutter gives you one codebase for iOS and Android. It gives you strong design control and consistent behavior across platforms. The downside is that it never feels fully native in the way a true iOS app does, and platform-specific work still shows up more than people expect.

SwiftUI is the native iOS path. It feels like iOS because it is iOS. It is the best path if you care deeply about polish, native behavior, and Apple-specific surfaces like widgets, Live Activities, and Siri integrations. The tradeoff is obvious: Android becomes a separate future project.

React Native gives you one codebase for iOS and Android using JavaScript or TypeScript. It is attractive if you already think in web terms or want access to a larger hiring pool later. The tradeoff is that polish can be harder than people expect and performance can get uneven if you are not careful.

There is no holy stack.

There is only the stack that fits the product you are actually trying to build and the builder you are actually trying to become.

### Why I Picked Flutter, and What It Cost Me

I picked Flutter for three reasons.

Reason one, which turned out to be right: I wanted the option to ship Android later. Flutter made that a real option.

Reason two, which turned out to be wrong: I thought cross-platform would matter soon. It did not. I shipped iOS only for the entire first year.

Reason three, which also turned out to be wrong: I thought one codebase would mean half the work. It does not. It is closer to eighty percent. You still end up doing platform-specific work for permissions, purchases, notifications, native APIs, and edge-case behavior.

If I were starting MemeScanr today, I would probably pick SwiftUI.

Not because Flutter is bad.

Because my actual revealed preference was this: iOS first, Android maybe, polish-obsessed.

SwiftUI matches that preference better than Flutter did.

I am telling you this because I want you to make a more honest stack decision than I made.

Ask yourself:

If you could only ship to one platform, which would you choose?

If the answer is iOS, and you are being honest, SwiftUI may serve you better than Flutter.

### The Two-Year Commitment

Here is the question I wish someone had asked me on day one:

Are you willing to spend the next two years learning this stack deeply enough to debug it at 2 a.m. when something weird happens in production?

Because that is the real commitment.

A stack choice is not just what should I prototype in. It is also what am I willing to become fluent in.

Here is the better filter:

If this app fails, will I still be glad I spent two years getting good at this stack?

If the answer is yes, the stack may still be a good decision.

If the answer is no, you are betting too much on one product.

Pick a stack whose worst-case outcome is still worth living with.

### The 24,000-Line Confession

I want to plant a specific warning here, because it is one of the biggest hidden costs of building with AI and almost nobody talks about it enough.

AI accelerates output and technical debt at the same rate.

Here is what that looks like in practice.

You are building a feature. You have momentum. You prompt the AI. It gives you a solution. You merge it. It works. You move on.

The file gets a little longer.

Then another feature.
Then another.
Then one more helper class.
Then one more widget.
Then one more exception to the structure you meant to clean up later.

Nothing breaks.

That is the trap.

The file still works. The app still runs. So you do not feel the cost right away. You just quietly accumulate structure you no longer fully understand.

This happened to me with lib/main.dart in MemeScanr.

The file grew to around 24,000 lines.

I did not plan for that. It happened because every individual choice made sense in the moment. "Just put this one more class in here." "I will split it later." "This is not worth refactoring right now."

Individually, those decisions felt rational.

Collectively, they became a tax I now pay every day.

Every time I open the file, the editor lags.
Every time I search, I have to remember exactly what I named something.
Every refactor feels riskier because the blast radius is hard to predict.
AI tools become less useful because the context window fills up with noise.

That is why I tell people to refactor earlier than feels necessary.

The rule I use now is simple:

If a file is longer than 500 lines, any new feature I add to it has to justify why splitting the file would be more expensive than growing it.

Most of the time, the split wins.

If I had enforced that rule from day one, main.dart would not be 24,000 lines today.

Learn from my regret.

Refactor earlier.

### > Think Before You Move On

If you had to commit to one stack for the next two years, not just for this project but for your growth as a builder, which would you pick, and can you explain why in one specific sentence?
