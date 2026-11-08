# adhd-caveman

A Claude Code output style and skill. Caveman-short words, shaped for a reader with ADHD.

Built from two ideas:
- **caveman:** short words, no filler, code and errors kept exact.
- **i-have-adhd:** next action first, numbered steps, visible wins, one next step at the end.

## What a reply looks like

```
▶ Reload the extension at chrome://extensions.

✅ Now works:
- Tools cards all one height
- Edit box has a hover zoom

⚠️ Not tested: real Gemini model.

Next: open the library and hover a screenshot.
```

## Install

In Claude Code:

```
/plugin marketplace add jj92148/adhd-caveman
/plugin install adhd-caveman@adhd-caveman
```

Then turn it on:
- **Always on:** Settings, Claude Code, Output style, pick "adhd-caveman" (or `/config` in the terminal).
- **One session:** type `/adhd-caveman`. Say "stop adhd-caveman" to turn it off.

This repo is private, so installing needs a GitHub login with access to it.

## Rules

See [output-styles/adhd-caveman.md](output-styles/adhd-caveman.md). The skill in `skills/adhd-caveman` holds the same rules.

## Works with caveman

If the caveman plugin is also on, its hook says to cut unrequested lists and follow-ups. adhd-caveman keeps three things anyway: the closing next action, the ✅ list, and the ⚠️ section. Turning caveman off avoids the tug of war.
