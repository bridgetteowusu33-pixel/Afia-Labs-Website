---
title: "Building for iPhone and Android"
slug: "11-building-for-iphone-and-android"
order: 11
type: "chapter"
number: 11
part: "Act III — Execution"
---If you are building for both iPhone and Android, you need to respect both platforms.

Even when using Flutter or another cross-platform framework, Android still has its own testing, tooling, and behavior patterns, and so does iOS.

That is why Android Studio matters. It helps you run Android emulators, inspect logs, test layouts, manage Android builds, troubleshoot Android-specific issues, and understand how your app behaves on the Android side.

A simple beginner setup looks like this:

1. Install Android Studio.
2. Open your Flutter or Android project.
3. Install the Android SDK components you need.
4. Set up an emulator or connect a physical Android device.
5. Run the project and watch for Android-specific errors.

### Prompting AI for Cross-Platform Code

When prompting AI for cross-platform code, say it clearly. Do not assume the model will automatically remember platform differences.

A good prompt sounds like this:

> I am building a Flutter app that must support both iOS and Android. Generate this feature in a way that works well on both platforms. Avoid iOS-only assumptions or Android-only assumptions. If platform-specific logic is needed, clearly separate it and explain why.

That one sentence can save you a lot of pain later. Because when you ask for "code," AI may give you something that technically works somewhere but is not truly thoughtful across platforms. You have to prompt for cross-platform support on purpose.

When you build this way, you are not just shipping in more places. You are becoming a better systems thinker. You start anticipating differences. You start testing more carefully. You start thinking like a real product owner.

### Cross-Platform Is Not Identical

It also helps to remember that "cross-platform" does not mean "identical in every way." It means one product experience translated thoughtfully across more than one ecosystem. Sometimes that means shared code and slightly different behavior. Sometimes that means consistent design language with platform-sensitive interactions. Sometimes that means handling permissions, navigation, keyboards, notifications, or gestures with more care.

This is where AI can help a lot if you prompt well. Ask it to point out platform-specific concerns. Ask it to review your screen for Android and iOS differences. Ask it where permission handling might diverge. Ask it whether any part of your feature assumes one platform's behavior.

The more you do that, the more you begin to think ahead instead of reacting late. That is what mature builders do. They stop thinking only in terms of "does it compile?" and start thinking in terms of "does it hold up across real environments?"

### Why I Chose iOS-Only Despite Having Flutter

A quick note about my own path, because it's instructive.

I built MemeScanr in Flutter specifically because I wanted the option to ship Android. And I never shipped Android. Not in year one. Probably not in year two either.

The reason wasn't laziness. It was bandwidth. Shipping iOS alone (the App Store submission cycle, the TestFlight flow, the Apple Developer account setup, the privacy nutrition labels, the App Store Connect metadata, the review responses, the seasonal app icon system, the Live Activity integration, the widgets) was already more work than one person could do well. Adding Android on top of that would have meant doing both platforms badly instead of iOS well.

The lesson I took away: **if you're a solo builder, pick the platform your target user is on and commit to that platform until the product has proven itself.** Cross-platform is a good option to have. It's a bad option to execute on both sides at once.

If you're going to pick cross-platform anyway, know that you will probably ship to one platform first and the other later. That's fine. Just know it going in, and don't pretend you're going to ship simultaneously. You're not.

### Case Study — The Feature That Worked Perfectly… Until Android

A builder creates a clean feature in Flutter on an iPhone simulator. It looks great. The transitions feel smooth. The keyboard behavior feels fine. The onboarding works. She is excited.

Then she opens it on Android.

The keyboard covers the input field. The spacing feels tighter. One screen overflows on a smaller device. A permission message lands too abruptly. The feature is still functional, but not respectful of the environment.

That moment frustrates her at first. Then it teaches her something priceless: "cross-platform" is not a checkbox. It is a responsibility.

That awareness makes every future prompt, review, and test more intelligent. And that is how better builders get formed.

### > Think Before You Move On

If you're building cross-platform, which platform is your actual primary? Not the one you wish were primary. The one where your real target user lives. Be honest.
