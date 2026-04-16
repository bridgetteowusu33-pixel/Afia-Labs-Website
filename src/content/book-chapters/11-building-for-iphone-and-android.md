---
title: "Building for iPhone and Android"
slug: "11-building-for-iphone-and-android"
order: 11
type: "chapter"
number: 11
part: "Act II — Reality"
---
**Cross-platform is a tax you pay every day in exchange for an option you might never exercise.**

That sounds harsh. I mean it. And I'd still probably make the same call.

### The Night I Opened Android Studio

About five months into building MemeScanr, I finally opened Android Studio for the first time. I had been building exclusively in VS Code on the iOS simulator. Everything looked great. The scan engine was fast. Memory Lane was smooth. The onboarding flow had its voice. I was proud of how it felt.

Then I booted a Pixel 7 emulator, ran the same code, and stared at the screen for about thirty seconds trying to figure out what I was looking at.

The bottom navigation bar was fighting with Android's system navigation gestures. The status bar text was invisible because it was white on a light background that only appeared on Android's default theme. The photo permission dialog had different wording than iOS, and my recovery flow assumed the iOS phrasing. The keyboard pushed my scan button off the bottom of the screen on smaller displays. A swipe gesture I'd built for Memory Lane was conflicting with Android's back gesture.

None of this was broken in the way that crashes are broken. It all ran. It all technically worked. But it felt like wearing someone else's clothes. The product that felt so right on iPhone felt like a rough translation on Android. Not bad. Just not *mine*.

That was the night I realized something important: **"works on both platforms" and "belongs on both platforms" are completely different standards.** The first one is a compiler check. The second one is a design commitment. And the second one costs real time, every single week, for as long as the product exists.

### Getting Set Up

At the practical level, the setup is straightforward: install Android Studio, configure the SDK, run your app in an emulator or on a real device, and start catching Android-specific behavior early. The point is not the ceremony of setup. The point is to find problems before users do.

The same goes for prompting AI. When you ask for cross-platform code, say it explicitly. Do not assume the model will remember platform differences on its own. A good prompt sounds like this:

```
I am building a Flutter app that must support both iOS and Android.
Generate this feature in a way that works well on both platforms.
Avoid iOS-only assumptions or Android-only assumptions. If
platform-specific logic is needed, clearly separate it and explain why.
```

That one sentence can save you real pain later. Without it, the AI will give you something that technically works on one platform and quietly misbehaves on the other. You have to prompt for cross-platform awareness on purpose.

### The Hidden Costs Nobody Warns You About

Here's what cross-platform actually costs a solo builder, beyond the obvious "test on both" advice everyone gives:

**Permissions are different.** iOS has a single photos permission prompt. Android has granular media permissions that changed significantly in Android 13 and again in Android 14. Your permission flow, your recovery flow, your denial handling, your "limited access" states: all different. Not slightly different. Architecturally different.

**Navigation is different.** iOS users expect swipe-to-go-back from the left edge. Android users expect a system back button or gesture. If you build a custom navigation pattern that overrides either, you'll confuse users on one platform while delighting users on the other.

**Keyboards are different.** iOS keyboards have a predictable height and dismiss behavior. Android keyboards vary by manufacturer, can have custom toolbars, and sometimes don't report their height correctly to Flutter. Every screen with a text input needs to be tested on both, separately.

**Store submission is different.** Apple's review process is stricter, slower, and human-reviewed. Google Play is faster and more automated, but it flags different things. Your metadata, screenshot requirements, and privacy declarations all work differently.

**Notifications are different.** iOS requires explicit permission. Android (before Android 13) did not. Your notification prompt flow, your engagement strategy, your re-permission recovery: different code paths, different UX patterns.

None of these differences are documented in one place. You discover them one at a time, usually when something breaks or feels wrong and you have to spend a day figuring out why.

**Every one of these differences is a day.** Not a line of code. A day. A day of researching the platform behavior, a day of writing the platform-specific code, a day of testing it, a day of making sure you didn't break the other platform while fixing this one.

### Why I Chose iOS-Only Despite Having Flutter

I built MemeScanr in Flutter specifically because I wanted the option to ship Android. And I never shipped Android. Not in year one. Probably not in year two either.

The reason wasn't laziness. It was bandwidth. Shipping iOS alone was already more work than one person could do well. The App Store submission cycle. The TestFlight flow. The Apple Developer account setup. The privacy nutrition labels. The App Store Connect metadata. The review responses. The seasonal app icon system. The Live Activity integration. The home screen widgets. The Siri Shortcuts. The in-app events. Every one of these is an iOS-only surface that took real time to build and maintain.

Adding Android on top of that would have meant doing both platforms badly instead of iOS well.

The lesson I took away: **if you're a solo builder, pick the platform your target user is on and commit to that platform until the product has proven itself.** Cross-platform is a good option to have. It's a bad option to execute on both sides at once.

If you're going to pick cross-platform anyway, know that you will probably ship to one platform first and the other later. That's fine. Just know it going in, and don't pretend you're going to ship simultaneously. You're not.

### The Compromise That Taught Me the Most

There's one specific cross-platform compromise in MemeScanr that I think about more than any other, because it taught me what "thoughtful translation" actually means in practice.

MemeScanr's Backroom vault uses Face ID on iPhone. Face ID is a specific Apple technology with specific behaviors: the prompt appears as a system dialog, the animation is distinctive, and users trust it because they use it fifty times a day to unlock their phone. When I first thought about Android, I assumed I'd just swap Face ID for Android's BiometricPrompt API and everything would feel the same.

It does not feel the same.

Android's biometric prompt looks different, behaves differently, and has different fallback paths. Some Android devices have face unlock. Some have fingerprint. Some have both. Some have neither and fall back to a PIN or pattern. The "unlock your vault" moment, which on iPhone feels like one consistent gesture that users already trust, becomes on Android a branching path through hardware your code has never met.

I had two choices. I could build a unified abstraction that treated both platforms identically, which would mean the experience would feel slightly wrong on both. Or I could build platform-specific vault unlock flows that each felt native to their platform, which would mean maintaining two separate code paths for one of the most security-sensitive surfaces in the app.

I chose the second path. And then I never shipped Android. So the platform-specific Android vault code sits in my codebase, tested on emulators, never touched by a real user. It represents about two weeks of work that has produced zero value so far.

That's the tax. Not the code that breaks. The code that works perfectly and never ships.

**The lesson: before you build the cross-platform version of anything, ask yourself honestly: am I going to ship this platform in the next six months? If the answer is no, build for the platform you're actually shipping and save the abstraction for later.** The abstraction will be better when you build it later anyway, because you'll know more about what both platforms actually need.

### The Three Cases Where I'd Still Say Yes

After everything I just told you, I don't want to leave you thinking cross-platform is always wrong. It's not. Here are the three cases where I'd still choose it from day one.

**Your audience is genuinely split.** If your target user is equally likely to be on iPhone or Android, and picking one means losing half the people you're building for, cross-platform earns its tax. This is common for utility apps, B2B tools, and products targeting demographics with high Android adoption. MemeScanr's audience skews heavily iPhone. Yours might not.

**Your product is simple enough that the tax is small.** Three screens, no native integrations, no platform-specific features. The simpler the product, the smaller the gap between "works on both" and "belongs on both." If your app is a calculator with personality, the cross-platform cost is negligible. If your app has a Face ID vault, it's not.

**You're not alone.** If you have a partner who owns Android while you own iOS, or if you have enough bandwidth to maintain two platform experiences at a high standard without cutting corners on either, cross-platform becomes a genuine multiplier instead of a tax. The key word is *maintain*. Not launch. Maintain. For two years.

If none of those three apply, my honest advice is the same thing I told you in Chapter 8: pick one platform, ship it, prove the product works, and expand later. The second platform is a launch you get to have. And the launch you save for later is worth more than the launch you spend today.

### > Think Before You Move On

If you're building cross-platform, which platform is your actual primary? Not the one you wish were primary. The one where your real target user lives. Be honest.
