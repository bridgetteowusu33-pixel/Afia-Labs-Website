---
title: "Appendix B — Reusable Prompts and Checklists"
slug: "22-appendix-b-reusable-prompts-and-checklists"
order: 22
type: "appendix"
part: "Appendices"
---
This appendix is the toolbox.

These are the prompts, templates, and checklists I wish I had beside me when I started building. Some of them would have saved me time. Some would have saved me confusion. A few probably would have saved me from entirely avoidable mistakes.

Do not try to memorize all of them.

Copy the ones you actually need. Save them somewhere easy to reach. Modify them until they sound like you. The point is not to use them perfectly. The point is to give yourself a stronger starting point than a blank prompt box and a stressed-out brain.

---

### The VS Code Build Prompt Formula

This is the simplest reusable template I know. Keep it next to your editor.

```
I am building [type of app] for [user]. It should help them
[outcome]. The first version should include [features]. Use
[stack]. Make it feel [design style]. Generate the code in
small steps and explain anything important.
```

Fill in the blanks every time.

That formula alone will get you surprisingly far.

---

### The 15 Reusable AI Prompts

Copy these into a snippets file. Keep them in your notes. Save them somewhere you can paste fast.

You do not need all fifteen every week. But when you need one, you will be glad it already exists.

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
4. What edge cases I am likely to miss

Be specific. Do not give me a generic answer.
```

**2. Bug fixing**

```
I have a bug in [file:line]. Here is what is happening:
[current behavior]. Here is what should happen: [desired
behavior]. Here is what I have already tried: [list].

Here is the relevant code: [paste].

Walk me through three possible root causes in order of
likelihood. For each one, tell me the cheapest diagnostic I
can run to confirm or rule it out.

Do not suggest fixes until we have identified the root cause.
```

**3. Refactor planning**

```
I want to refactor [file or module]. The current code is
[paste]. Here is what I do not like about it: [specific
complaints].

Before suggesting a new design, tell me:
1. What I am currently getting right that I should preserve
2. What the minimum invasive refactor would look like
3. What a more ambitious refactor would look like
4. Which one you would recommend for a solo builder on a tight
   schedule, and why

Do not write any code yet.
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
5. Anything that would confuse a reviewer who does not know
   the rest of the codebase
```

**5. Test writing**

```
I need to write tests for [feature] in [file]. Here is the
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
- starts with a short subject line under 72 characters
- explains the "why" more than the "what"
- mentions any breaking changes
- sounds like a solo builder, not a corporate release note

No fluff. No emoji unless they add clarity.
```

**7. PR description**

```
I am about to open a pull request (or release) for [change].
The change affects [files]. The user-facing impact is [impact].

Write a PR description with:
- one-sentence summary
- bullet list of what changed
- test plan (how did I verify?)
- any risks or rollback steps

Keep it short. I am the only reviewer.
```

**8. Release notes ("What's New")**

```
I am shipping version [x.y.z] of [app name] with the following
changes: [list].

Write the "What's New" copy that will appear on the app store.

It should:
- be in the voice of [voice description]
- prioritize user-visible wins, not internal refactors
- never say "bug fixes and improvements"
- end with a line of personality

Fewer than 400 words. Closer to 200 is better.
```

**9. App Store description draft**

```
Write the first 3 lines of an app store description for
[app name], a [one-sentence pitch]. The target user is
[specific persona]. The voice is [voice description].

The first 3 lines must:
- hook in the first sentence
- name the feeling, not just the function
- avoid feature lists
- avoid clichés like "in today's fast-paced world"

Generate 5 variations. Tell me which one you would pick and why.
```

**10. Onboarding copy**

```
I have an onboarding flow with [n] screens. For each screen,
I need:
- a headline (under 30 characters)
- a subline (under 80 characters)
- a button label (under 20 characters)

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
- acknowledge the user's current moment
- promise a specific outcome, not a list of features
- show the price without sounding cheap or defensive
- include a dismissal path that does not shame the user

Voice is [voice]. Target user is [persona]. Give me 3 variations.
```

**12. Privacy policy draft**

```
I need a plain-English privacy policy for [app name], a
[stack] app that [what it does].

The app collects:
- [list, or "nothing"]

It uses:
- [crash reporting service if any]
- [analytics service if any]
- [any third-party SDKs]

Data is stored:
- [on device / in a specific cloud / nowhere]

Write a privacy policy in plain language. Include the
required legal disclosures, but keep the tone human.
Target a reading level a regular user can parse.

This is a draft for me to review. I will have a human lawyer
verify before launch.
```

**13. Launch post**

```
I am about to launch [app name], a [pitch] built as a solo
builder over [time]. The target audience is [persona].

Write a launch post for [platform — Twitter/X, TikTok
caption, Reddit post, LinkedIn, email].

The post should:
- open with a specific moment or feeling, not "I'm excited to announce"
- explain what the app does in one sentence
- explain why it is different
- end with a clear call-to-action

Voice: [voice]. Length: [platform-appropriate].
```

**14. Founder story draft**

```
I need to write a short founder story for the "About" page
of [brand name]. The brand is a [one-sentence description].
The first product is [app name]. I started building because
[personal motivation].

Write a draft founder story in first person that:
- opens with a specific moment, not a resume
- names the problem I was trying to solve for myself
- hints at the bigger why without getting preachy
- ends with where I am going, not just where I have been

Under 400 words.
```

**15. AI-failure recovery**

```
I asked you earlier to [task]. Your answer was [paste].
I tried it and [result — what broke, what surprised me,
what did not work].

Before suggesting a new approach, walk me through:
1. Which assumption in your previous answer turned out to be wrong?
2. What context was missing that would have changed your answer?
3. What is the root cause of the failure — a code bug,
   a misunderstanding, or a wrong mental model?

Then suggest a new approach. Do not just patch the symptom.
```

---

### The Naming Checklist

Before you commit to a product name or brand name, check the boring things first.

- Search the business name online
- Search your state registry
- Search trademark databases
- Check the domain, including the major extensions
- Check social handles on X, Instagram, TikTok, and LinkedIn
- Check the App Store for similar app names
- Say the name out loud to three real people and watch their faces

If the name is hard to say, hard to remember, already crowded, or weirdly easy to confuse, that matters more than you think.

---

### The Launch Checklist

Before every serious release:

- Test on simulator
- Test on a physical device
- Run a TestFlight build
- Review payments end to end, including Restore Purchases
- Review permissions by denying each one and making sure the app still works
- Review onboarding
- Review store assets: icon, screenshots, description
- Run the final audit prompt from Appendix A
- Red-team the app for an hour pretending to be a strict reviewer

A launch usually does not fail because of one giant dramatic problem. It usually fails because of one small thing nobody checked carefully enough.

---

### The Ownership Checklist

These are the layers that make the product actually yours.

- Domain in your account
- Code in your GitHub
- Business email set up
- Payments under your control
- Website live
- Customer list and support path in place
- Apple Developer account registered as an Organization, not an individual account
- Legal entity formed, if you are serious about the brand

You do not need every layer on day one. But you do need to know which layers you still do not own.

---

### The 25-Item Pre-Submission Audit

This is the full checklist from Chapter 15, reproduced here so you can use it without flipping back.

**Metadata pass:**

1. App name in App Store Connect matches what is displayed in the app
2. Subtitle is a clear sentence, not a keyword pile
3. The first 3 lines of the description land the pitch without a feature dump
4. Screenshots match features actually in the build
5. Category and secondary category are accurate

**Assets pass:**

6. App icon is final at every required size
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
19. Every primary action works end to end
20. Restore Purchases button exists and works

**Permission pass:**

21. Every permission request is contextual, not auto-fired on launch
22. Every denial path continues silently into the app
23. Contextual recovery fires only when the user actively tries to use a feature that needs the permission
24. Privacy nutrition labels match the actual data collection
25. Permission usage description strings read like human sentences

---

This appendix is not here to make you feel organized.

It is here to reduce blank-page paralysis, save you from preventable mistakes, and help you move with a little more clarity than you had before.

That matters.

Because most builders do not stop because they are untalented. They stop because the next step feels foggy.

Prompts and checklists will not build the thing for you.

But they can clear enough fog for you to keep walking.
