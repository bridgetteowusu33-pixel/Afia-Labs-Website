---
title: "Your Kitchen: Stack and Setup"
slug: "10-your-kitchen-stack-and-setup"
order: 10
type: "chapter"
number: 10
part: "Act III — Execution"
---For most builders starting out, a practical ownership-first stack looks like this:

- VS Code as your editor
- Codex, Claude Code, or GitHub Copilot as your AI coding assistant
- React or Flutter for the frontend depending on your product goals
- Supabase or Firebase for the backend
- Postgres through Supabase or Firebase depending on the tradeoffs you want
- Git and GitHub for version control
- Vercel for web deployment
- App Store Connect for iOS
- Google Play Console for Android
- Stripe for payments

The goal is not to use every tool. The goal is to pick a stack you can grow with.

VS Code is my personal favorite because it gives you a home base. It is where your files live, where your project is organized, where your Git history lives, and where you build the habit of understanding your own product.

If AI app builders are like ordering food from a restaurant, **VS Code is like having your own kitchen.**

You still might use pre-made ingredients. You still might use helpful appliances. You still might even get recipe suggestions. But you are in your own kitchen.

That changes everything.

### Your Basic Setup

Your basic setup is simple:

1. Install VS Code.
2. Create a folder for your app.
3. Open that folder in VS Code.
4. Initialize Git.
5. Create a GitHub repository.
6. Connect your local project to GitHub.
7. Install the AI extensions you need.

Now you have a real place to build.

That matters more than it sounds. Because once you have your own environment, you are no longer just generating ideas. You are building assets.

There is a psychological benefit here too. When you have a real workspace, your project starts feeling more legitimate. A named folder. A repository. A structure. A proper editor. A version history. A place where the work lives.

All of that helps your brain understand that this is not just a thought anymore. It is a real thing. That shift is useful because it increases follow-through.

### Don't Collect Tools Like Trophies

It is also why I encourage keeping your stack simple in the beginning.

Do not collect tools like trophies. Do not keep switching every week because someone on the internet posted a new recommendation. Do not make your tool stack your hobby.

Pick a lane. Pick a workable combination. Learn it deeply enough to move. The stack should support execution, not become another form of procrastination.

A clean stack also helps when you are asking AI for help. The more stable your environment is, the easier it is to prompt clearly, diagnose problems, and make consistent progress. Chaos in your tooling usually becomes chaos in your output.

So think of this chapter as setting the table. You are choosing the environment your future work will live inside. Make it stable enough to trust and simple enough to grow with.

### The Three Stacks You're Probably Choosing Between

If you're building a mobile consumer app as a solo dev in the AI era, your realistic choices are:

**Flutter.** One codebase for iOS and Android. Uses Dart. Has its own rendering engine, which means pixel-perfect design control and consistent behavior across platforms, at the cost of never feeling *quite* native. Mature ecosystem. Strong AI support. Biggest downside: hiring a Flutter dev later is harder than hiring an iOS or web dev, because the talent pool is smaller.

**SwiftUI (+ Swift).** Native iOS only. Feels like iOS because it *is* iOS. The fastest path to a polished iOS product, and the only path if you want things like Live Activities, lock screen widgets, watch companion apps, and all the Apple-specific surfaces. Biggest downside: you're committing to one platform. Android is a separate codebase you'll never write.

**React Native.** One codebase for iOS and Android, built on JavaScript/TypeScript. Huge talent pool, because every web dev already knows the language. Fast iteration. Lots of libraries. Biggest downside: polish is harder than Flutter. Performance on older devices can be uneven.

I picked Flutter for MemeScanr. I'll tell you why, and what I'd do differently if I were starting over today.

### Why I Picked Flutter (and What It Cost Me)

I picked Flutter for three reasons, and two of them turned out to be wrong.

**Reason 1 (turned out right): cross-platform theoretically.** I wanted the option to ship Android later. Flutter made that a realistic option, where SwiftUI would have required a complete rewrite.

**Reason 2 (turned out wrong): I thought cross-platform would matter soon.** Spoiler: it did not. I shipped iOS only for the entire first year. Android was always "later." Later never came, because iOS alone was more work than I had capacity for. The theoretical option of Android was real, but I never exercised it. I carried the extra complexity of Flutter for a benefit I didn't use.

**Reason 3 (turned out wrong): I thought a single codebase would be half the work of two codebases.** It's more like 80% of the work, not 50%. You still have platform-specific code for permissions, StoreKit, local notifications, photo access, background processing, widgets, Siri Shortcuts, and about a dozen other things.

**If I were starting MemeScanr today, I would probably pick SwiftUI.** Not because Flutter is bad (it's not), but because my actual, revealed preference was "iOS first, Android maybe, polish-obsessed." That set of preferences is exactly what SwiftUI is built for.

I'm telling you this so you can make a more honest prediction about your own revealed preferences than I made about mine. Ask yourself: **if you could only ship to one platform, which would you ship to?** If the answer is "iOS," and you're being honest, SwiftUI will probably serve you better than Flutter.

### The 2-Year Commitment

Here's a question I wish someone had asked me on day one:

**Are you willing to spend the next two years learning this stack deeply enough to debug it at 2am when something weird happens in production?**

Because that's the real commitment. A stack choice is not "which framework do I use to prototype." A stack choice is "which framework am I going to be fluent in by month twenty-four." And fluency in a framework is a huge time investment.

The question to ask yourself, honestly: **if this app fails, am I going to be glad I spent two years becoming fluent in this stack?** If yes, the stack is a good fit regardless of what happens to this specific product. If no, you're betting everything on one app being successful, and that's a fragile bet.

My answer for Flutter: yes, I'm glad. Even if MemeScanr never made a dollar, the Flutter skills I built are valuable, portable, and not wasted. That's the minimum bar.

**Pick a stack whose worst-case outcome is still a career-positive outcome.** That's the filter.

### The 24,000-Line Confession

I want to plant a specific warning here, because it's the biggest hidden cost of building with AI, and nobody talks about it enough.

**AI accelerates output AND technical debt, at the same rate.**

Here is what happens in practice. You're building a new feature. You have momentum. You prompt the AI, the AI generates a solution, you merge it. It works. You move on. The file that feature lives in is now slightly longer than it was. The next feature, same thing. Slightly longer. And the next, and the next. After three months, the file is twice as long as it should be. After six months, it's four times as long. After a year, it's a tangle.

This happened to me with `lib/main.dart` in MemeScanr. The file grew to around 24,000 lines. Twenty-four thousand. For a single Dart file.

I did not plan for this. Nobody plans for this. It happened because every individual decision ("just add this one class to main.dart, I'll refactor it later") was individually rational. Collectively, the decisions were a disaster.

Here's the thing about a 24k-line file: it still works. The app runs fine. The features work. The tests pass. There is no "failure" event. But:

- Every time I open the file, my editor lags
- Every time I search for something, I have to remember exactly what I named it
- Every refactor is scary because the blast radius is hard to predict
- Every new developer (including me, six months later) has to relearn the file from scratch
- AI tools work worse on 24k-line files than on 1k-line files, because the context window fills up with noise

I am paying a daily tax for a decision I didn't notice I was making.

**The lesson: refactor earlier than feels necessary.** I know that feels like premature optimization. It's not. It's preventing a specific kind of debt that compounds silently. Every time you find yourself pasting a new class or a new widget into an existing file that already feels big, pause. Make a decision. Either refactor the file now, or decide consciously that you're adding to the debt and write it in your feature temptation log.

There is a specific heuristic I use now: **if a file is longer than 500 lines, any new feature I add to it has to justify the addition by explaining why splitting the file would be more expensive than growing it.** Most of the time, the justification fails, and the split wins. If I had enforced this rule from day one, main.dart would not be 24k lines today.

Learn from my regret. Refactor earlier.

### > Think Before You Move On

If you had to commit to one stack for the next two years, not just for this project, but for your growth as a builder, which would you pick, and can you explain why in one specific sentence?
