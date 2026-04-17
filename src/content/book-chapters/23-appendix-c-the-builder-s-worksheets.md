---
title: "Appendix C — The Builder's Worksheets"
slug: "23-appendix-c-the-builder-s-worksheets"
order: 23
type: "appendix"
part: "Appendices"
---

These are five worksheets you can copy into a notebook, a notes app, a doc, or wherever you think best on paper.

None of them are complicated. That is what matters.

Each one should take about 15 to 20 minutes. They are meant to help you get unstuck, make cleaner decisions, and catch avoidable mistakes before they get expensive.

Do not overthink them. Fill them in honestly. Messy answers are better than elegant avoidance.

---

### Worksheet 1 — Screenshot Planning

For each of your 10 App Store screenshot slots, fill in the following.

**Slot 1 — The Hook**
- Headline (under 40 characters):
- Subline (optional, under 40 characters):
- Visual (what is in the frame):
- Feeling you want the viewer to have in 2 seconds:
- Specific element that will make them tap:

**Slot 2 — The Outcome**
- Headline:
- Subline:
- Visual:
- Feeling:
- Conversion element:

**Slot 3 — The Mechanic**
- Headline:
- Subline:
- Visual:
- Feeling:
- Conversion element:

*(Repeat the same structure for slots 4 through 10.)*

Not every screenshot has to do the same job. Some are for atmosphere. Some are for proof. Some are for feature clarity. But every screenshot needs at least two things: a clear job and a specific feeling.

**The rule:** no screenshot gets to justify itself with "I felt like I should have one." Every slot has to earn its place. If you cannot name its job, it should not ship.

---

### Worksheet 2 — Trust-and-Safety Review

Fill this in for every feature that touches user data, money, privacy, or anything emotionally sensitive.

**Feature name:**

**Destructive actions in this feature:**
*(Anything that deletes, overwrites, moves, locks, hides, or makes user content harder to access)*

**For each destructive action, answer:**
- Does the user see what happened after it happens?
- Can the user undo it inside the feature, without needing support?
- Did the user explicitly approve the action, or did the app decide for them?

**Permissions this feature requires:**

**For each permission, answer:**
- Is the permission requested contextually, when the user taps the feature, or automatically at launch?
- If the user denies it, does the feature fail gracefully or does the app nag?
- Do you have a plan for middle-ground states, like limited photos access or provisional notifications?

**Data transparency check:**
- Is any user data being stored?
- If yes, does the user know that?
- Where in the app can they see what is stored?
- How do they delete it?

**The rule:** if any answer here makes you uncomfortable, do not talk yourself out of that feeling. Fix it before you ship. The user's trust is not a debt you get to repay later.

---

### Worksheet 3 — Premium Pricing

**Step 1 — Anchor the staircase.**

- Monthly price: $________
- Yearly price: $________
- Yearly-per-month equivalent: $________
- Lifetime price: $________
- Lifetime break-even in months: ________

**Step 2 — Answer the value question.**

In one sentence, why would a user pay for Premium?

(If you cannot answer that in one sentence, your Premium tier is not ready yet.)

**Step 3 — List the Premium features.**

| Feature | Emotional value | Rational value | Worth paying for? |
|---|---|---|---|
| | (What does it feel like?) | (What does it save or enable?) | Y/N |

**Step 4 — Decide the trial.**

- Length: 3 days / 7 days / none
- Trigger: StoreKit-managed / app-managed / feature-level
- What emotional state does the trial end in? (urgency? attachment? satisfaction? relief? fear of losing value?)

**Step 5 — The enforcement audit.**

List every pricing rule you advertise. For each one, confirm: is there a specific line of code that actually enforces it? If not, the pricing rule is not a rule. It is a suggestion.

| Advertised rule | Code file:line that enforces it | Verified? |
|---|---|---|

**The rule:** if the paywall copy says one thing and the code does another, the code wins, and your conversion probably loses.

---

### Worksheet 4 — Feature Complexity Filter

Before shipping any new feature, score it on both dimensions.

**Feature name:**

**User value (1-5):**
- 1 = nobody asked for this
- 3 = a few users have asked, or I think it matters
- 5 = users are actively frustrated without it

**Complexity cost (1-5):**
- 1 = one file, no dependencies, easy to maintain
- 3 = touches 2-3 files, adds moderate surface area
- 5 = touches many files, adds significant maintenance burden

**Dependency depth:** How many existing features does this interact with? ________

**Test burden:** How many new test cases will this require? ________

**Reversibility:** If this ships and users hate it, can you remove it cleanly? (Y/N)

**Score:** user value - complexity cost = ________

**Decision rule:**
- Score 2 or higher → Ship
- Score 0 or 1 → Park it in the feature temptation log
- Negative score → Kill it before it eats your time

**The rule:** not every good idea deserves to become a feature. Some good ideas are just expensive distractions with good branding.

---

### Worksheet 5 — Bug Triage

For every bug report, fill this out before deciding what to do next.

**Bug name / description:**

**Severity:**
- [ ] Crash (app quits)
- [ ] Data loss (user loses content)
- [ ] UX break (feature does not work as expected)
- [ ] Polish (confusing copy, ugly state, small friction)

**Frequency:**
- [ ] Always (happens every time)
- [ ] Sometimes (reproducible, but not 100%)
- [ ] Rare (reported once, cannot reproduce yet)

**Affected user percentage:** (rough estimate) ________

**Workaround exists:** Y/N

**Fix complexity:**
- [ ] Small (under an hour)
- [ ] Medium (a day or less)
- [ ] Large (multiple days)

**Ship blocker:** Y/N

If yes, stop and fix it. If no, schedule it for the next biweekly patch and move on with clarity.

**The rule:** not every bug deserves the same emotional energy. Some bugs are annoying. Some are trust-breaking. Learn the difference.

---

These worksheets are simple on purpose.

They are not here to impress anyone. They are here to help you think clearly when your brain is tired, excited, overwhelmed, or trying to avoid the hard question.

That is when structure helps most.

And that is when a worksheet can quietly save you a week.
