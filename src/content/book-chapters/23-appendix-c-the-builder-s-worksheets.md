---
title: "Appendix C — The Builder's Worksheets"
slug: "23-appendix-c-the-builder-s-worksheets"
order: 23
type: "appendix"
part: "Appendices"
---Five worksheets you can copy into a notebook or notes app and fill in as you go. Each one takes 15-20 minutes.

### Worksheet 1 — Screenshot Planning

For each of your 10 app store screenshot slots, fill in the following:

**Slot 1 — The Hook**
- Headline (under 40 characters):
- Subline (optional, under 40 characters):
- Visual (what's in the frame):
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

*(Repeat for slots 4-10. Not every slot needs all fields: some slots are atmosphere, some are proof, some are features. But every slot needs a headline and a feeling.)*

**The rule:** no slot can justify itself as "I felt like I should have one." Every slot has to do a job. If you can't name the job, the slot shouldn't ship.

### Worksheet 2 — Trust-and-Safety Review

Fill this in for every feature that touches user data, money, or privacy.

**Feature name:**

**Destructive actions in this feature:**
*(Anything that deletes, overwrites, moves, or makes user content harder to access)*

**For each destructive action, answer:**
- Does the user see what happened after it happens?
- Can the user undo it within the feature, without needing support?
- Did the user explicitly approve the action, or did the app decide for them?

**Permissions this feature requires:**

**For each permission, answer:**
- Is the permission requested contextually (when the user taps the feature), or at app launch?
- If the user denies, does the feature fail gracefully or does the app nag?
- Do you have a plan for the "limited photos" or "provisional notifications" middle-ground states?

**Data transparency check:**
- Is any data about the user being stored?
- If yes, does the user know about it?
- Where in the app can the user see what's stored?
- How does the user delete it?

**The rule:** if any answer above makes you uncomfortable, fix that before shipping the feature. The user's trust is not a debt you can repay later.

### Worksheet 3 — Premium Pricing

**Step 1 — Anchor the staircase.**

- Monthly price: $________
- Yearly price: $________
- Yearly-per-month equivalent: $________
- Lifetime price: $________
- Lifetime break-even in months: ________

**Step 2 — Answer the value question.**

- In one sentence, why would a user pay for premium?

(If you can't answer in one sentence, your premium tier isn't ready to launch. Keep iterating.)

**Step 3 — List the premium features.**

| Feature | Emotional value | Rational value | Worth paying for? |
|---|---|---|---|
| | (What does it feel like?) | (What does it save/enable?) | Y/N |

**Step 4 — Decide the trial.**

- Length: 3 days / 7 days / none
- Trigger: StoreKit-managed / app-managed / feature-level
- What emotional state does the trial end in? (urgency? attachment? satisfaction?)

**Step 5 — The enforcement audit.**

List every pricing rule you advertise. For each, confirm: is there a specific line of code that enforces this rule? If no, your pricing is a suggestion, not a gate.

| Advertised rule | Code file:line that enforces | Verified? |
|---|---|---|

### Worksheet 4 — Feature Complexity Filter

Before shipping any new feature, score it on both dimensions.

**Feature name:**

**User value (1-5):**
- 1 = Nobody's asked for this
- 3 = A few users have asked, or I think it's important
- 5 = Users are actively frustrated without it

**Complexity cost (1-5):**
- 1 = One file, no dependencies, easy to maintain
- 3 = Touches 2-3 files, minor new surface area
- 5 = Touches many files, adds significant ongoing maintenance

**Dependency depth:** How many existing features does this interact with? ________

**Test burden:** How many new test cases will this require? ________

**Reversibility:** If this ships and users hate it, can you remove it cleanly? (Y/N)

**Score:** user value − complexity cost = ________

**Rule:** Ship features with score ≥ 2. Park features with score 0 or 1 in the feature temptation log. Kill features with negative scores before they cost you time.

### Worksheet 5 — Bug Triage

For every bug report, fill in the following before deciding what to do.

**Bug name / description:**

**Severity:**
- [ ] Crash (app quits)
- [ ] Data loss (user loses content)
- [ ] UX break (feature doesn't work as expected)
- [ ] Polish (looks bad, confusing copy, small friction)

**Frequency:**
- [ ] Always (happens every time)
- [ ] Sometimes (reproducible but not 100%)
- [ ] Rare (reported once, can't reproduce yet)

**Affected user percentage:** (rough estimate) ________

**Workaround exists:** Y/N

**Fix complexity:**
- [ ] Small (under an hour)
- [ ] Medium (a day or less)
- [ ] Large (multiple days)

**Ship blocker:** Y/N. If yes, stop everything and fix. If no, schedule for the next biweekly patch.

---

# Back Matter
