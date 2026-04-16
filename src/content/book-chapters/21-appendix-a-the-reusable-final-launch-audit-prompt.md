---
title: "Appendix A — The Reusable Final Launch Audit Prompt"
slug: "21-appendix-a-the-reusable-final-launch-audit-prompt"
order: 21
type: "appendix"
part: "Appendices"
---This is the prompt I run before every launch of MemeScanr. Copy it. Paste it into Claude, ChatGPT, or any capable AI chat. Fill in the "App context" section with your app's specifics. Send it.

The output is a serious, structured pre-launch audit that forces the AI to evaluate your product the way a real reviewer, QA lead, or launch strategist would. It's longer than a casual "is this good?" prompt, but the length is the point. The structure is what makes it useful.

Use this as the anchor tool for every launch-audit discipline in Chapter 15.

---

```
You are a world-class mobile and web app launch strategist,
app marketplace reviewer, senior QA lead, software engineer,
UX auditor, and subscription product consultant.

We are preparing an app called "YOUR APP" for public launch.

Your job: Perform a FINAL deep pre-launch audit as if this
app is about to be submitted to a marketplace and released
to real users.

You must act like:
- a marketplace reviewer
- a QA lead
- a product strategist
- a UX critic
- a monetization reviewer
- a launch consultant

You are NOT doing a casual review. You are doing a serious
final launch-readiness audit.

App context:
[Insert what the app does, target audience, platform, tone,
main features, pricing, technical setup, and recent changes.]

Your task: Do a FINAL deep scan of the app and determine:
- what is launch-ready
- what is risky
- what still needs improvement
- what could cause rejection or review delays
- what could cause bad reviews
- how strong the app currently is
- how you would rate it today

STEP 1 — EXECUTIVE LAUNCH ASSESSMENT

Give an overall launch-readiness assessment. Answer:
- is this app ready for launch right now?
- if not, why not?
- what are the biggest launch risks?
- what are the strongest selling points?
- what is the likely first impression for users?
- what is the likely first impression for reviewers?

STEP 2 — FINAL DEEP PRODUCT AUDIT

Audit the full product as it would be experienced by a real
new user.

Review:
- onboarding
- first-launch clarity
- core experience
- main feature flow
- settings
- premium experience
- trust and safety
- brand tone
- app value clarity

Identify:
- friction points
- confusing areas
- weak spots
- trust-breaking moments
- features that feel unfinished
- anything that feels like too much
- anything that feels especially impressive

STEP 3 — REVIEW RISK AUDIT

Act like a strict reviewer. Identify anything that could
trigger rejection, scrutiny, or delay, including:
- privacy concerns
- misleading language
- subscriptions/paywall issues
- restore purchase visibility
- permissions handling
- background behavior
- security claims
- data deletion/storage claims
- unsupported promises
- broken links
- localization quality issues
- crashes or dead ends
- deceptive UI patterns
- manipulative prompts
- unclear premium disclosures
- incomplete integrations
- content moderation concerns if relevant

For each risk, explain:
- why reviewers might care
- severity
- how to fix or de-risk it

STEP 4 — FINAL UX AUDIT

Audit the full app UX. Evaluate:
- navigation clarity
- visual hierarchy
- trust
- premium feel
- polish
- interactivity
- emotional appeal
- speed perception
- delight
- consistency across screens
- brand voice consistency

Explain:
- what feels polished
- what feels inconsistent
- what feels cluttered
- what feels memorable
- what needs refinement before launch

STEP 5 — BUG / QA RISK AUDIT

Infer final likely bugs and launch risks. Focus on:
- crash risk
- stale data
- broken flows
- partial failures
- permission edge cases
- state issues
- empty states
- loading states
- interrupted-session behavior

STEP 6 — PERFORMANCE / POLISH AUDIT

Audit:
- launch performance
- responsiveness
- navigation speed
- scrolling
- animations
- app resume behavior
- memory risk
- perceived lag

Explain:
- whether performance is good enough for launch
- which issues are tolerable for v1
- which issues are unacceptable before upload

STEP 7 — MONETIZATION / PAYWALL AUDIT

Audit:
- free value
- premium positioning
- gating fairness
- subscription clarity
- paywall timing
- pricing presentation
- restore purchase visibility
- conversion flow
- review risk around subscriptions

Recommend final adjustments before launch.

STEP 8 — TRUST / SAFETY AUDIT

Audit:
- whether users will trust the app's outputs
- whether users understand what is reversible vs permanent
- whether the product feels safe enough to rely on
- whether wording feels respectful and clear

Recommend final trust improvements.

STEP 9 — STORE PAGE READINESS

Audit whether the product is ready to be marketed. Recommend:
- strongest positioning angle
- most compelling headline
- best differentiators
- screenshot priorities
- feature order
- what to emphasize
- what to downplay
- what users will care about most

Also identify:
- what feature is most screenshot-worthy
- what makes this app feel unique
- what message can cut through competition

STEP 10 — FINAL PRE-LAUNCH CHECKLIST

Create a final detailed pre-upload checklist. Include:
- product checks
- QA checks
- paywall checks
- review checks
- privacy checks
- performance checks
- copy checks
- settings/legal checks
- purchase checks
- integration checks
- localization checks
- crash/logging checks

STEP 11 — MUST-FIX VS NICE-TO-HAVE

Create two sections:
A. Must fix before launch
B. Nice to improve after launch

Be brutally honest.

STEP 12 — RATE THE APP

Rate the app in its current form out of 10 for:
- originality
- UI / visual appeal
- product clarity
- trust
- performance
- polish
- monetization design
- marketplace competitiveness
- personality / brand
- retention potential
- premium feel
- overall launch readiness

Then provide:
- overall rating out of 10
- whether this feels weak, good, or standout
- whether it has breakout potential

STEP 13 — FINAL RECOMMENDATION

End with a strong, opinionated launch recommendation:
- Should we submit now, or not yet?
- What are the top 5 final recommendations before upload?
- What would make the biggest difference immediately?
- What is the app's biggest strength?
- What is the app's biggest weakness?
- What should the team feel proud of?
- What must not be ignored before launch?

Important instructions:
- Be brutally honest
- Treat this like a serious pre-launch review
- Assume we want to submit soon
- Do not sugarcoat weaknesses
- Praise what is strong, but clearly call out what is risky
- Optimize for launch success, not just code completion
```

---

Run this prompt before every serious launch. Keep a copy of the output in your git repo or your notes. Over time, the prompt outputs become your growing record of how the product has matured.
