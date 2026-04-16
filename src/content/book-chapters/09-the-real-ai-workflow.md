---
title: "The Real AI Workflow"
slug: "09-the-real-ai-workflow"
order: 9
type: "chapter"
number: 9
part: "Act II — Clarity"
---
AI inside VS Code can be incredibly powerful when you use it the right way.

Codex is useful when you want help writing, editing, understanding, or debugging code across your project. Claude Code is useful when you want deeper reasoning across multiple files, better planning, stronger code understanding, and more deliberate editing. GitHub Copilot is useful for autocomplete, inline suggestions, chat, refactors, explanations, and quick edits directly inside the editor.

But the tool itself is not the magic.

How you use it is what matters.

### Start With a Spec

The right workflow begins with a spec.

Before you ask AI to build anything, write down who the user is, what problem the feature solves, what the screen should do, what success looks like, and what constraints matter.

A lot of wasted time comes from asking AI to build something vague. Clarity saves time.

Then ask for one piece at a time.

Do not ask AI to build your whole app in one giant prompt. Ask for one component, one API route, one database table, one user flow, or one bug fix. That makes the output easier to review and keeps your codebase from turning into a giant mystery all at once.

Then review what it produced.

Read the file. Run the code. Test edge cases. Ask follow-up questions.

Do not admire the output just because it came fast. Fast output is not the same thing as good output.

Commit often. Use Git as your safety net. Commit before a major AI change and after a successful one. That makes experimentation much less scary, because you know you can roll back.

And make AI explain itself.

Ask what a function is doing step by step. Ask what could break. Ask whether there are security risks. Ask it to explain the file in plain English.

That is how learning happens.

The goal is not just to get code. The goal is to build understanding while you build product.

### Pour Your Heart Out First

One of my favorite workflows is to pour your heart out first.

Not everyone is naturally articulate with prompts. That is fine. In real life, sometimes you just need to say what you mean in your own messy human way before you can say it clearly.

Open your regular AI chat and talk.

Do not overthink it. Do not try to sound technical. Just say what you mean.

Tell it what kind of app you want to build, who it is for, what problem it solves, what screens you imagine, what features matter most, what feeling you want the app to have, and whether you want iPhone only, Android only, or both.

Then ask it to turn that messy thinking into a clean development prompt for your coding assistant inside VS Code.

That is the move.

Your everyday AI chat helps you think. Your IDE assistant helps you execute.

That combination is powerful.

Here is the simple formula:

> I am building [type of app] for [user]. It should help them [outcome]. The first version should include [features]. Use [stack]. Make it feel [design style]. Generate the code in small steps and explain anything important.

That formula alone can take someone very far.

### The Prompt Template That Actually Works

Here is the reusable prompt template I use for almost every meaningful AI request I make.

```
Context: I'm building [feature] in [stack].
Current behavior: [what's happening now]
Desired behavior: [what should happen]
Constraints: [what not to touch, what to preserve]
Files involved: [actual file paths]
Question: [specific question, not "help me"]
```

Let me show you a real example. This is a prompt I actually sent to Claude while building MemeScanr's Backroom vault:

```
Context: I'm adding a 7-day trial state machine to Backroom,
the Face ID / PIN protected private vault in MemeScanr.
Backroom is a Flutter screen backed by SQLite.

Current behavior: there's no trial. Free users can either use
Backroom or they can't. The free/paid gate is a single boolean
check in backroom_screen.dart:142.

Desired behavior: new users get 7 days of full Backroom access
from the first time they add an item. After 7 days, they enter
a 30-day grace period where items are read-only. After 37 days
total, items become invisible (but still on disk) and the tab
shows a paywall.

Constraints: don't change anything in main.dart. The state
machine should live in backroom_vault_state.dart. Don't break
the existing premium bypass — premium users should never hit
the trial state.

Files involved:
- lib/backroom/backroom_screen.dart
- lib/backroom/backroom_vault_state.dart
- lib/main.dart (leave alone, read only)

Question: what's the minimal state machine I can add that
handles all four transitions (never used → trial → grace →
locked), with a single method I can call from backroom_screen
to check "can the user write to the vault right now?"
```

That prompt got me a working answer in one shot.

Not because the prompt was clever. Because the prompt gave the AI everything it needed to reason well: context, current state, desired state, constraints, files, and one specific question.

That is the rule.

**The quality of the answer is almost always a function of the quality of the context.**

Always. No exceptions. Memorize that.

### The Question-Stack Technique

When I am stuck on something hard, I do not try to solve it in one prompt.

I build a question stack.

A question stack is a sequence of prompts where each question builds on the previous answer. The goal is not to get the answer in one shot. The goal is to use AI to sharpen your own thinking until you know exactly what question needs to be asked next.

Here is an example from MemeScanr.

I was trying to figure out why the scan engine was taking forty seconds on older iPhones when it should have been taking ten.

Instead of asking, "Why is my scan slow?" I asked:

1. *"Given a Flutter scan engine that processes 10k images using perceptual hashing, what are the top five causes of unexpected slowness?"*
2. *"For each of those five causes, what is the cheapest diagnostic I can run to confirm or rule it out?"*
3. *"Here are the results for three of those diagnostics. Based on those results, which cause is most likely?"*
4. *"Assuming cause #3 is correct, what are three possible fixes, ranked by how invasive they are?"*
5. *"Fix option #2 sounds right. Here is the current code. What does the minimal version of that fix look like?"*

That is five prompts.

Each one narrows the problem. Each one improves the next answer. Each one makes the final fix more trustworthy.

The question-stack technique is slower than throwing one desperate prompt at the model.

It is also how you avoid confident-but-wrong answers.

### When to Trust, When to Verify

Here is the rough rule I use for trust:

**The more irreversible the consequence, the more careful the verification.**

So I break AI output into three buckets.

**Low trust — verify line by line:**
- Anything touching auth, permissions, or security
- Anything involving money, subscriptions, or pricing logic
- Anything destructive, like deletion, file writes, or database mutations
- Anything touching personal user content
- Anything tied to platform rules, like Apple, Google, Stripe, or StoreKit

**Medium trust — verify the logic, trust the syntax more:**
- Refactors that do not change behavior
- Additive features
- Isolated UI changes
- Tests

**Higher trust — sanity check and move on:**
- Boilerplate
- Type definitions
- JSON parsing
- String formatting
- Imports
- Documentation comments

Deletion is more irreversible than display. Payments are more irreversible than layout. Security is more irreversible than almost everything else.

Calibrate your attention to the stakes.

### Case Study — The Deep Link I Already Had

I want to tell you a small story that taught me a big lesson about using AI in a large codebase.

MemeScanr has an in-app event for Gallery Wrapped, the monthly personality reveal. When I was setting it up in App Store Connect, the system required a deep link, a URL scheme that would open the app directly to the Wrapped screen.

I did not think I had one.

So I started planning the work: register a URL scheme in Info.plist, wire up AppDelegate, add a Dart-side handler, build routing, test on device. I assumed it was a multi-day task.

Before I started, I asked Claude Code a simple question:

*Does this codebase already have any URL scheme infrastructure?*

It searched the project and came back almost immediately.

I already had it.

MemeScanr already had a `memescanr://` URL scheme registered. It already had an AppDelegate handler. It already had a Dart-side deep link dispatcher with cases for `scan`, `clean`, and `storage`.

I had built all of that months earlier when I added Siri Shortcuts and widgets. I had simply forgotten.

The infrastructure was already there. The only thing missing was one extra case in a switch statement for `wrapped`.

My "multi-day task" turned into about fifteen lines.

That lesson stuck with me:

**In a large codebase, you will forget what past-you already built.**

The bigger the product gets, the less your own memory is enough.

That is one of the most underrated things AI is good at.

Not just generating code. Finding code.

*"Do I already have something like this?"*
*"Where does this logic already live?"*
*"Have I already solved half this problem?"*

Those are incredibly valuable questions.

**AI is not just a generator. AI is a memory extension for your own codebase.**

Use it that way and you will save days.

### The AI Reflection Ritual

Once a week, usually on Sunday evening before I plan the next week of work, I do a short reflection on how my AI usage went.

I ask myself three questions:

1. **Did AI help me think, or did it replace my thinking?** If I look back and realize I was copy-pasting without understanding, something is off. If I can see that AI helped me notice what I would have missed, that is healthy.

2. **What did the AI get wrong this week?** I keep a running list. Not to shame the model. To stay calibrated. The list reminds me where it is unreliable and where my verification needs to be sharper.

3. **What did I skip verifying that I should not have skipped?** If I accepted something too quickly, I mark it and go back. That is how I catch myself drifting into passenger mode before it becomes a habit.

The ritual takes about ten minutes.

It saves weeks.

If someone took only one practical habit from this chapter, I would want it to be that one.

### What This Workflow Really Does

At the deepest level, this workflow is not about productivity. Not really.

It is about staying present.

That is the thing people miss when they talk about building with AI. The risk is not only bad code. The risk is psychological drift. You slowly become less involved in your own work. Less curious. Less sharp. Less able to explain what you built.

A real AI workflow does the opposite.

It keeps you close to the work. It keeps you asking better questions. It keeps you learning while you move. It lets AI increase your leverage without decreasing your ownership.

That is the whole point.

### > Think Before You Move On

Think about your last interaction with an AI tool. Was it passenger-style — *"help me"* — or master-driver-style — context, constraints, and a specific question? If it was passenger-style, rewrite it now using the template from this chapter and save it for next time.
