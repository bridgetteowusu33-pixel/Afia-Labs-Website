---
title: "Testing on Simulators, Real Devices, and TestFlight"
slug: "12-testing-on-simulators-real-devices-and-testflight"
order: 12
type: "chapter"
number: 12
part: "Act III — Execution"
---
Apple rejected MemeScanr for a permission flow that never crashed once.

That is one of the most useful testing lessons I have ever learned, because it reminded me that software can be technically functional and still fail the user.

MemeScanr's onboarding ended with a photos permission request. Standard stuff. If the user tapped "Don't Allow," I showed a dialog that said MemeScanr needed photo access to scan the gallery and that they could enable access in Settings. Two buttons. "Open Settings" and "Not now."

Nothing was broken.
The dialog appeared.
The app kept running.
The code did exactly what I told it to do.

Apple still rejected it.

The problem was not that the app crashed.
The problem was not that the code failed.
The problem was that the experience did not respect the denial path.

What made the lesson sharper is that I had AI help build that flow in the first place. Before submission, I even asked AI to review the onboarding and permission handling again. It still missed the thing Apple cared about. That was the reminder: AI can help you generate and review code, but it cannot replace human judgment about trust, friction, and how a reviewer will actually experience the flow.

I had tested that the permission prompt showed up. I had tested that "Allow" worked. I had never sat down and asked the more important question:

*What does this feel like if the user says no?*

If I had run the "fresh install, deny photos permission" scenario from my own testing grid with actual honesty, I would have caught it. I would have seen that the flow felt pushy. I would have felt the friction. I would have fixed it before Apple ever saw it.

Instead, I learned it from a rejection email and lost three days.

That is the heart of this chapter.

Testing is not just about proving that the app works. It is about discovering how the app feels under real conditions, on real devices, in the hands of real people who will not use it as carefully as you do.

A beautiful broken app is still broken.

And a technically working app can still be wrong.

### Testing Is Empathy

The best way I know to describe testing is this:

Testing is empathy.

It is your attempt to feel what the user will feel before they do.

That matters because software is full of side effects. A tiny UI change can affect state. A simple logic fix can break navigation. A new permission request can change onboarding. A package update can create weird performance problems. An innocent-looking refactor can quietly damage something you were not even thinking about.

That is why testing matters more than people want it to.

Not because testing is glamorous.
Not because it makes you feel clever.
Because it is how you earn trust in your product.

Real users are not going to use your app in the same perfect mental state you had when you built it. They are going to use it while tired, distracted, rushed, confused, annoyed, hopeful, or impatient.

So your testing has to reflect that.

Test when you are calm.
Test when you are tired.
Test quickly.
Test slowly.
Test like a person who has never seen the app before.
Test like a person who is already frustrated.

That is what empathy looks like in software.

### Speed Versus Reality

A simulator is a virtual phone running on your computer. It is great for speed.

Simulators are excellent for quickly testing screens, checking layout on different device sizes, debugging navigation, and speeding up iteration. They are one of the best tools you have when you want to move fast without constantly reaching for hardware.

But they are not reality.

They are not perfect for real-world performance, every hardware feature, many permission flows, or the physical feel of using the app in your hand. They cannot fully show you lag, awkward tap targets, weird keyboard behavior, subtle animation problems, or all the little trust-breaking moments that only become obvious on a real device.

So the best mindset is simple:

**Use simulators when you need speed. Use physical devices when you need reality.**

If you have both, that is ideal. If you only have one, start with what you have. Just do not fool yourself into thinking that simulator-tested automatically means user-ready.

When you do have an iPhone available, test on it. Connect it to your Mac, open Xcode, select the device as the run destination, enable Developer Mode if prompted, and run the app directly.

And after every meaningful update, use TestFlight.

That is one of the best ways to test your app like a real product before public release.

### The Testing Rhythm That Actually Works

A healthy testing rhythm is not complicated.

Make a meaningful update.
Upload a build.
Install it through TestFlight.
Test like a real user.
Fix bugs.
Upload again.

That cycle sounds repetitive because it is. And that repetition is exactly what makes it useful.

Do not wait until launch week to start testing seriously. A tiny edit can break something random. A safe-looking change can quietly damage a flow you were not even thinking about.

What should you test every time?

- Onboarding
- Login and signup
- The core feature flow
- Payments, if relevant
- Notifications, if relevant
- Empty states
- Slow-network behavior
- Crash-prone areas
- Anything you just changed

This kind of repetition is not glamorous. It is professional.

And when launch day comes, you will be grateful you built the habit before the pressure got higher.

### What Real Devices Reveal

This is where physical devices matter so much.

A simulator can tell you whether something technically renders. A real device tells you whether it feels good enough to trust.

Real devices reveal lag. They reveal awkward tap targets. They reveal keyboard annoyances, weird transitions, battery-sensitive behavior, performance dips, and subtle moments where the product feels slightly off even though everything is technically functioning.

That difference matters because users do not only judge products by whether they work.

They judge them by how they feel.

Does the app feel smooth?
Does it feel safe?
Does it feel responsive?
Does it feel respectful?
Does it feel like something they can trust with their time, their attention, their money, or their data?

That is what real-device testing helps you answer.

### The 20-Scenario Device Grid

Here is the testing grid I use before every submission.

I do not trust a build until I have run a meaningful chunk of these on a real device, not just the simulator. If you do nothing else from this chapter, steal this grid.

**Device and state matrix — test at least 15 of these before submitting:**

1. Smallest supported iPhone, fresh install, full permissions
2. Largest iPhone, fresh install, full permissions
3. iPad, if supported, fresh install, full permissions
4. Fresh install, deny photos permission
5. Fresh install, deny notifications permission
6. Fresh install, deny Face ID permission, if used
7. Fresh install, deny contacts permission, if used
8. Fresh install, grant only limited photos
9. Fresh install, offline, airplane mode
10. Fresh install, low battery, under 20 percent
11. Onboarding completion with no gallery content
12. Onboarding completion with 10,000 or more items in the gallery
13. Dark mode
14. Light mode
15. Largest accessibility text size
16. Reduced motion enabled
17. Reduced transparency enabled
18. Interrupt scan mid-process by backgrounding the app
19. Kill the app mid-purchase flow
20. Restore purchases from a signed-out account

Every untested scenario is a risk.

The simulator catches some of these.
Real devices catch the rest.

Do not skip the rest.

### The Rule I Would Give Every Builder

If your app asks for any permission at all, **deny it at least once before you submit.**

Actually deny it.
Actually use the app afterward.
Actually feel what the product feels like from that side.

If the denial path is confusing, pushy, broken, dead-ended, or emotionally off, fix that before launch.

Because the denial path is where most builders miss bugs.

And the denial path is also where a lot of Apple rejections live.

Most builders test the happy path. They make sure "Allow" works. They make sure "Continue" works. They make sure "Buy" works.

Fewer builders test:

- What happens when the user says no
- What happens when the user is offline
- What happens when the user is interrupted
- What happens when the user changes their mind halfway through

That is where your product reveals what it is really made of.

### > Think Before You Move On

Pick one permission your app requests. When was the last time you tested what happens when the user denies it? If the answer is never, that is your next thirty minutes of work.
