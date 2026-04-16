---
title: "The Real AI Workflow"
slug: "09-the-real-ai-workflow"
order: 9
type: "chapter"
number: 9
part: "Act II — Clarity"
---AI inside VS Code can be incredibly powerful when used the right way.

Codex is useful when you want help writing, editing, understanding, or debugging code across your project. Claude Code is useful when you want deeper reasoning across multiple files, planning, code understanding, and more deliberate editing. GitHub Copilot is useful for autocomplete, inline suggestions, chat, refactors, explanations, and quick edits directly in the editor.

But the tool itself is not the magic. How you use it is what matters.

### Start With a Spec

The right workflow begins with a spec.

Before you ask AI to build anything, write down who the user is, what problem the feature solves, what the screen should do, what success looks like, and what constraints matter.

A lot of wasted time comes from asking AI to build something vague. Clarity saves time.

Then ask for one piece at a time. Do not ask AI to build your whole app in one prompt. Ask for one component, one API route, one database table, one user flow, or one bug fix. That makes the work easier to review and keeps your codebase from turning into a giant mystery all at once.

Then review what it produced. Read the file. Run the code. Test edge cases. Ask follow-up questions. Do not just admire the output because it came fast. Fast output is not the same thing as good output.

Commit often. Use Git as your safety net. Commit before a major AI change and after a successful one. That gives you confidence. You are much less afraid of experimentation when you know you can roll back.

And make AI explain itself. Ask what a function is doing step by step. Ask what could break. Ask whether there are security risks. Ask it to explain the file in plain English. That is how learning happens. The goal is not just to get code. The goal is to build understanding while you build product.

### Pour Your Heart Out First

One of my favorite workflows is to pour your heart out first.

Not everyone is naturally articulate with prompts. That is fine. In real life, sometimes you just need to say what you mean in your own messy human way first.

Open your regular AI chat and talk. Do not overthink it. Do not try to sound technical. Tell it what kind of app you want to build, who it is for, what problem it solves, what screens you imagine, what features matter most, what feeling you want the app to have, and whether you want iOS only, Android only, or both.

Then ask it to convert your thoughts into a clean development prompt for your coding assistant inside VS Code.

That is the move. Your personal AI chat helps you think. Your IDE assistant helps you execute. That combination is powerful.

Here is a simple formula you can remember:

> I am building [type of app] for [user]. It should help them [outcome]. The first version should include [features]. Use [stack]. Make it feel [design style]. Generate the code in small steps and explain anything important.

That formula alone can get someone very far.

### The Prompt Template That Actually Works

Here's the reusable prompt template I use for almost every meaningful AI request I make. It is not fancy. That's the point.

```
Context: I'm building [feature] in [stack].
Current behavior: [what's happening now]
Desired behavior: [what should happen]
Constraints: [what not to touch, what to preserve]
Files involved: [actual file paths]
Question: [specific question, not "help me"]
```

Let me show you a real example. Here is a prompt I actually sent to Claude while building MemeScanr's Backroom vault:

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
- lib/backroom/backroom_screen.dart (the tab)
- lib/backroom/backroom_vault_state.dart (where new code goes)
- lib/main.dart (leave alone, read only)

Question: what's the minimal state machine I can add that
handles all four transitions (never used → trial → grace →
locked), with a single method I can call from backroom_screen
to check "can the user write to the vault right now?"
```

That prompt got me a working answer in one shot. Not because the prompt was clever. Because the prompt gave the AI everything it needed to reason about the problem the way I would reason about it. Context, current state, desired state, constraints, files, and a specific question.

**The quality of the answer is always a function of the quality of the context.** Always. No exceptions. Memorize this.

### The Question-Stack Technique

When I'm stuck on something hard, I don't try to solve it in one prompt. I build a question stack.

A question stack is a sequence of questions I ask the AI in order, where each question builds on the previous answer. The point is not to get to the answer in one shot. The point is to use the AI to sharpen my own thinking until I know exactly what question to ask last.

Here's an example from MemeScanr. I was trying to figure out why the scan engine was taking forty seconds on older iPhones when it should have been taking ten. Instead of asking *"why is my scan slow?"* I built a question stack:

1. *"Given a Flutter scan engine that processes 10k images using perceptual hashing, what are the top five causes of unexpected slowness?"*
2. *"For each of those five causes, what's the cheapest diagnostic I can run to confirm or rule it out?"*
3. *"Here are the diagnostic results for three of those five causes. Based on these results, which cause is most likely?"*
4. *"Assuming cause #3 is correct, what are three possible fixes, ranked by how invasive they are?"*
5. *"Fix option #2 sounds right. Here's the current code [paste]. What does the minimal version of that fix look like?"*

Five prompts. Each one built on the previous. The final answer I got was a surgical fix I could paste directly into my code. But the fix wouldn't have worked without the first four prompts, because I didn't know which fix was right until I'd reasoned through the causes.

The question stack technique is slow. It's also how you avoid getting confident-but-wrong answers.

### When to Trust, When to Verify

Here's a rough rule of thumb for when to trust an AI answer vs when to verify it line by line:

**Low trust — always verify line by line:**
- Anything touching authentication, permissions, or security
- Anything involving money (payments, subscriptions, pricing logic)
- Anything destructive (deletion, file writes, database mutations)
- Anything that touches data the user gave you (photos, notes, personal content)
- Anything that interacts with the platform's rules (Apple, Google, Stripe, StoreKit)

**Medium trust — verify the logic, trust the syntax:**
- Refactors that don't change behavior
- New features that are additive, not mutating
- UI changes in isolation
- Tests

**Higher trust — sanity check, but don't obsess:**
- Boilerplate (getters, setters, JSON parsing, type definitions)
- Documentation comments
- String formatting
- Import statements

The rule is: **the more irreversible the consequence, the more careful your verification.** Deletion is more irreversible than display. Payments are more irreversible than layout. Security is more irreversible than all of the above. Calibrate your attention to the stakes.

### Case Study — The Deep Link I Already Had

I want to tell you a small story that taught me a big lesson about using AI in a large codebase.

MemeScanr has an in-app event for Gallery Wrapped, the monthly personality reveal. When I was setting it up in App Store Connect, the system required a "deep link," a URL scheme that would open the app directly to the Wrapped screen.

I didn't have one.

I started planning how to add it. I figured it would take me a couple of days. Register a URL scheme in Info.plist. Wire up the AppDelegate to handle incoming URLs. Add a Dart-side handler. Build routing. Test on device. Multi-day job.

Before I started, out of habit, I asked Claude Code to check whether MemeScanr already had any URL scheme infrastructure.

It did a grep. Came back a minute later.

MemeScanr already had a full `memescanr://` URL scheme registered. Already had an AppDelegate handler. Already had a Dart-side deep link dispatcher with cases for `scan`, `clean`, and `storage`. I had built all of this months earlier when I added Siri Shortcuts and home screen widgets, and then completely forgotten I'd done it. The infrastructure was there. The only thing missing was one case in a switch statement for `wrapped`.

My "multi-day job" turned into a 15-line diff.

The lesson that stuck with me is this: **in a large codebase, you will forget what past-you already built.** The main.dart in MemeScanr is around 24,000 lines. I cannot hold all of that in my head. I write code in one corner of the file, and three months later when I need something in the opposite corner, I have no memory of whether it exists.

AI is extraordinary at this problem. Not at *writing* the code. At *finding* the code. "Does this codebase already have X?" is a question you should ask before you build X, and asking the AI is the fastest way to get a trustworthy answer.

This is maybe the single biggest productivity unlock I've had as a solo builder. AI is not just a code generator. **AI is a memory extension for your own codebase.** Use it that way. You'll save days.

### The AI Reflection Ritual

Once a week, usually on a Sunday evening before I plan the next week of work, I do a short reflection on how my AI usage went that week. I ask myself three questions:

1. **Did AI help me think, or did it replace my thinking?** If I look at the week and realize I was copy-pasting without understanding, something is off. I need to slow down. If I look at the week and realize AI helped me see things I would have missed, that's healthy.

2. **What did the AI get wrong this week?** I keep a running list. Not to shame the AI. To stay calibrated. The list reminds me where the AI is unreliable, and where my verification energy needs to go.

3. **What did I skip verifying that I shouldn't have?** If I accepted a fix without reading it line by line, I mark that and audit the code later. This is how I catch myself slipping into passenger mode before it becomes a habit.

The reflection takes ten minutes. It prevents weeks of drift. If you do one thing differently after reading this book, do this one.

### > Think Before You Move On

Think about your last interaction with an AI tool. Was it passenger-style ("help me") or master-driver-style (context, constraints, specific question)? If it was passenger-style, rewrite the prompt now, using the template from this chapter, and save it as a template for next time.
