---
title: "Testing on Simulators, Real Devices, and TestFlight"
slug: "12-testing-on-simulators-real-devices-and-testflight"
order: 12
type: "chapter"
number: 12
part: "Act III — Execution"
---Testing matters more than people want it to. A beautiful broken app is still broken.

That is why your testing process needs to include both speed and reality.

A simulator is a virtual phone running on your computer. It lets you interact with a software version of a device even when you do not have a physical phone in your hand. Simulators are great for quickly testing screens, checking layout on different devices, debugging navigation, finding early bugs, and speeding up iteration.

They are not perfect for exact real-world performance, every hardware feature, some permission flows, or the true feel of using the app in your hand.

So the best mindset is simple: **use simulators when you need speed, and use physical devices when you need reality.**

If you have both, that is ideal. If you only have one, start with what you have. Just do not skip testing entirely.

When you do have an iPhone available, test on it. Connect the iPhone to your Mac, open Xcode, select the device as the run destination, enable Developer Mode if prompted, and run the app directly.

And after every meaningful update, use TestFlight. That is one of the best ways to test your app like a real product before public release.

### A Healthy Testing Rhythm

A healthy rhythm looks like this:

1. Make a meaningful update.
2. Upload a new build.
3. Install it through TestFlight.
4. Test like a real user.
5. Fix bugs.
6. Upload again.

Do this after every important update, not just right before launch. A tiny edit can break something random.

What should you test every time?

- Onboarding
- Login and signup
- Core feature flow
- Payments if relevant
- Notifications if relevant
- Empty states
- Slow-network behavior
- Crash-prone areas
- Anything you just changed

This kind of repetition is not glamorous. It is professional. And when launch day comes, you will be grateful you built that habit.

### Testing As Empathy

One of the biggest mistakes builders make is assuming that because something worked once, it is safe. But software is full of side effects. A tiny UI change can affect state. A simple logic fix can break navigation. A new permission request can affect onboarding. A new package can affect performance. An innocent-looking refactor can create weird bugs you do not notice until the product is packaged more like the real thing.

That is why repetition matters.

Testing is not a punishment. It is how you earn trust in your product.

It also helps to test with different emotional states in mind. Test when you are calm. Test when you are tired. Test quickly. Test slowly. Test as if you have never seen the app before. Test as if you are annoyed. Test as if you are distracted. Real users are not going to use your product in the perfect mental state you had when building it.

They will use it while busy, impatient, confused, hopeful, and rushed.

So your testing should reflect that.

And this is where physical devices matter so much. Simulators are excellent for speed, but a real device reveals feel. It reveals lag, awkward tap targets, weird transitions, keyboard annoyances, and subtle trust issues. It tells you whether your app feels smooth or merely functional.

That difference matters. Because users do not only judge products by whether they work. They judge them by how they feel.

### The 20-Scenario Device Grid

Here is a testing grid I use before every submission. Do not submit without running at least fifteen of these twenty scenarios on a real device, not the simulator.

**Device × state matrix — pick 15+ to test:**

| # | Scenario |
|---|---|
| 1 | Smallest supported iPhone, fresh install, full permissions |
| 2 | Largest iPhone, fresh install, full permissions |
| 3 | iPad (if supported), fresh install, full permissions |
| 4 | Fresh install, deny photos permission |
| 5 | Fresh install, deny notifications permission |
| 6 | Fresh install, deny Face ID permission (if used) |
| 7 | Fresh install, deny contacts permission (if used) |
| 8 | Fresh install, grant only "limited" photos |
| 9 | Fresh install, offline (airplane mode) |
| 10 | Fresh install, low battery (<20%) |
| 11 | Onboarding completion with no gallery content |
| 12 | Onboarding completion with 10,000+ items in gallery |
| 13 | Dark mode |
| 14 | Light mode |
| 15 | Largest accessibility text size |
| 16 | Reduced motion enabled |
| 17 | Reduced transparency enabled |
| 18 | Interrupt scan mid-process (background the app) |
| 19 | Kill the app mid-purchase flow |
| 20 | Restore purchases from a signed-out account |

Every untested scenario is a risk. The simulator catches some of these; real devices catch the rest. Do not skip.

### Case Study — The Permission Rejection That Cost Me Three Days

I'm going to tell you this story properly in Chapter 15 (the Pre-Submission Audit), but it's worth planting here because it's directly about testing.

MemeScanr's onboarding ended with a photos permission request. Standard stuff. If the user tapped "Don't Allow," I showed a dialog that said "MemeScanr needs photo access to scan your gallery. You can enable access in Settings" with two buttons: "Open Settings" and "Not now."

Apple rejected this. Under guideline 5.1.1(iv), the privacy guideline. The reason: *"the app directs the user to grant permission in the following way(s): the user is redirected to the settings app to grant access after tapping 'don't allow'."*

My code worked. My tests passed. Nothing crashed. But I had never **tested the denial path seriously**. I tested that the permission prompt showed up. I tested that "Allow" worked. I never sat down and asked myself "what does the experience feel like if the user says no?"

If I had run scenario 4 from the grid above (fresh install, deny photos permission) before submitting, I would have caught this. Instead, I caught it from Apple's rejection email.

The lesson: **deny every permission your app requests, at least once, before you submit.** The denial path is where most builders miss bugs. The denial path is also where Apple rejections live.

### > Think Before You Move On

Pick one permission your app requests. When was the last time you tested what happens when the user denies it? If the answer is "never," that's your next 30 minutes of testing work.
