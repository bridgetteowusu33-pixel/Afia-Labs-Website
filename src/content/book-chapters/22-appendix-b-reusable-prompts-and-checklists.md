---
title: "Appendix B — Reusable Prompts and Checklists"
slug: "22-appendix-b-reusable-prompts-and-checklists"
order: 22
type: "appendix"
part: "Appendices"
---### The VS Code Build Prompt Formula

A complete reusable template you can keep next to your editor.

```
I am building [type of app] for [user]. It should help them
[outcome]. The first version should include [features]. Use
[stack]. Make it feel [design style]. Generate the code in
small steps and explain anything important.
```

Fill in the blanks every time. The formula alone will get you very far.

### The 15 Reusable AI Prompts

Copy these into a snippets file. Modify them with your specifics. Keep them somewhere you can paste quickly.

**1. Feature planning**

```
I want to add [feature] to my app [app name], a [stack] app
for [target user]. The feature should [goal]. The feature
should NOT [anti-goal].

Current relevant code lives in [file paths].

Walk me through:
1. What questions I should answer before I start
2. What the smallest viable version of this feature looks like
3. What can ship later
4. What edge cases I'm likely to miss

Be specific. Do not give me a generic answer.
```

**2. Bug fixing**

```
I have a bug in [file:line]. Here's what's happening:
[current behavior]. Here's what should happen: [desired
behavior]. Here's what I've already tried: [list].

Here's the relevant code: [paste].

Walk me through three possible root causes in order of
likelihood. For each, tell me the cheapest diagnostic I can
run to confirm or rule it out.

Do not suggest fixes until we've identified the root cause.
```

**3. Refactor planning**

```
I want to refactor [file or module]. The current code is
[paste]. Here's what I don't like about it: [specific
complaints].

Before suggesting a new design, tell me:
1. What I'm currently getting right that I should preserve
2. What the minimum invasive refactor would look like
3. What a more ambitious refactor would look like
4. Which one you'd recommend for a solo builder on a tight
   schedule, and why

Don't write any code yet.
```

**4. Code review**

```
Review the following code as if you were a senior engineer
reviewing a solo builder's pull request. Be direct but kind.

[paste code]

Specifically call out:
1. Any bugs or edge cases the author likely missed
2. Any security concerns
3. Any places the code is more complex than it needs to be
4. Any naming or readability issues
5. Anything that would be confusing to a reviewer who
   doesn't know the rest of the codebase
```

**5. Test writing**

```
I need to write tests for [feature] in [file]. Here's the
current implementation: [paste].

Walk me through:
1. The minimum test coverage that would catch a regression
2. The edge cases I should test deliberately
3. Any state I need to set up before tests run
4. Which tests should be unit tests and which should be
   integration tests

Then write the tests in [framework / test style]. Use real
assertions, not todos.
```

**6. Commit message**

```
I just made the following changes: [paste diff or summary].

Write a commit message that:
- Starts with a short (under 72 char) subject line
- Explains the "why" more than the "what"
- Mentions any breaking changes
- Is in the tone of a solo builder, not corporate

No fluff. No emoji unless they clarify.
```

**7. PR description**

```
I'm about to open a pull request (or release) for [change].
The change affects [files]. The user-facing impact is [impact].

Write a PR description with:
- One sentence summary
- Bullet list of what changed
- Test plan (how did I verify?)
- Any risks or rollback steps

Keep it short. I'm the only reviewer.
```

**8. Release notes ("What's New")**

```
I'm shipping version [x.y.z] of [app name] with the following
changes: [list].

Write the "What's New" copy that will appear on the app store.
It should:
- Be in the voice of [voice description]
- Prioritize user-visible wins, not internal refactors
- Never say "bug fixes and improvements"
- End with a line of personality

Fewer than 400 words. Closer to 200 is better.
```

**9. App store description draft**

```
Write the first 3 lines of an app store description for
[app name], a [one-sentence pitch]. The target user is
[specific persona]. The voice is [voice description].

The first 3 lines must:
- Hook in the first sentence (no "today's fast-paced world")
- Name the feeling, not just the function
- Avoid feature lists

Generate 5 variations. Tell me which you'd pick and why.
```

**10. Onboarding copy**

```
I have an onboarding flow with [n] screens. For each screen,
I need:
- A headline (under 30 characters)
- A subline (under 80 characters)
- A button label (under 20 characters)

The voice is [voice description]. The target user is
[persona].

The flow should:
- Screen 1: welcome + what the app is for
- Screen 2: the first promise (the feeling)
- Screen 3: the ask (permission, account, or action)

Write it. Be specific. No placeholders.
```

**11. Paywall copy**

```
Write paywall copy for [app name]. The user has just
encountered [trigger that brought them here]. The premium
tier costs [prices]. The trial is [trial terms].

The paywall should:
- Acknowledge the user's current moment
- Promise a specific outcome, not a list of features
- Show the price without being cheap about it
- Include a dismissal path that doesn't shame the user

Voice is [voice]. Target user is [persona]. 3 variations.
```

**12. Privacy policy draft**

```
I need a plain-english privacy policy for [app name], a
[stack] app that [what it does]. The app collects:
- [list, or "nothing"]

It uses:
- [crash reporting service if any]
- [analytics service if any]
- [any third-party SDKs]

Data is stored:
- [on device / in a specific cloud / nowhere]

Write a privacy policy in plain language. Include the
required legal disclosures but keep the tone human. Target
a reading level a regular user can parse.

This is a draft for me to review. I will have a human lawyer
verify before launch.
```

**13. Launch post**

```
I'm about to launch [app name], a [pitch] built as a solo
builder over [time]. The target audience is [persona].

Write a launch post for [platform — twitter/x, tiktok
caption, reddit post, linkedin, email]. The post should:
- Open with a specific moment or feeling, not "I'm excited
  to announce"
- Explain what the app does in one sentence
- Explain why it's different
- End with a clear call-to-action

Voice: [voice]. Length: [platform-appropriate].
```

**14. Founder story draft**

```
I need to write a short founder story for the "about" page
of [brand name]. The brand is a [one-sentence description].
The first product is [app name]. I started building because
[personal motivation].

Write a draft founder story in first person that:
- Opens with a specific moment, not a resume
- Names the problem I was trying to solve for myself
- Hints at the larger why without being preachy
- Ends with where I'm going, not just where I've been

Under 400 words.
```

**15. AI-failure recovery**

```
I asked you earlier to [task]. Your answer was [paste].
I tried it and [result — what broke, what surprised me,
what didn't work].

Before suggesting a new approach, walk me through:
1. Which assumption in your previous answer turned out to
   be wrong?
2. What context was missing that would have changed your
   answer?
3. What's the root cause of the failure — was it a code bug,
   a misunderstanding, or a wrong mental model?

Then suggest a new approach. Don't just patch the symptom.
```

### The Naming Checklist

Before you commit to a product or brand name:

- Search the business name online
- Search your state registry
- Search trademark databases
- Check the domain (all major extensions)
- Check social handles (Twitter/X, Instagram, TikTok, LinkedIn)
- Check the App Store for existing apps with similar names
- Say the name out loud to three people and watch their faces

### The Launch Checklist

- Test on simulator
- Test on physical device
- Run a TestFlight build
- Review payments end-to-end (including Restore Purchases)
- Review permissions (deny each one and confirm app still works)
- Review onboarding
- Review store assets (icon, screenshots, description)
- Run the final audit prompt in Appendix A
- Red team the app for an hour pretending to be a strict reviewer

### The Ownership Checklist

- Domain in your account
- Code in your GitHub
- Business email set up
- Payments under your control
- Website live
- Customer list and support path in place
- Apple Developer account registered as Organization (not Individual)
- Legal entity formed if you're serious about the brand

### The 25-Item Pre-Submission Audit

Full checklist from Chapter 15, reproduced here for easy reference.

**Metadata pass:**
1. App name in App Store Connect matches what's displayed in the app
2. Subtitle is a clear sentence, not a keyword list
3. Description first 3 lines land the pitch without feature dump
4. Screenshots match features actually in the build
5. Category and secondary category are accurate

**Assets pass:**
6. App icon is the final icon at every required size
7. Screenshots exist for every required device size
8. Optional app preview video has no title cards or marketing overlays
9. Privacy policy URL is live and reachable
10. Support URL is live and reachable

**Legal pass:**
11. Privacy policy accurately describes every piece of data the app touches
12. Terms of service is either Apple's default or your own, and linked from the app
13. In-app purchase descriptions match StoreKit exactly
14. Subscription cancellation instructions are reachable from the paywall
15. Age rating is accurate

**Functionality pass:**
16. App launches without crashing on a fresh install
17. App launches without crashing after a permission denial
18. Every tab renders without crashing
19. Every primary action works end-to-end
20. Restore Purchases button exists and works

**Permission pass:**
21. Every permission request is contextual, not auto-fired on launch
22. Every denial path continues silently into the app
23. Contextual recovery fires only when the user actively tries to use a feature that needs the permission
24. Privacy nutrition labels match the actual data collection
25. Permission usage description strings read like human sentences
