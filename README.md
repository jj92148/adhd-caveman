# adhd-caveman

A Claude Code output style and skill for a reader with ADHD.

Version 2 is built on the original [i-have-adhd](https://github.com/ayghri/i-have-adhd) rules (next action first, numbered steps, visible wins, one next step at the end), plus:
- **Six fixed markers:** ❓ Need from you, 👉 Do next, ✅ Done, ⚠️ Risk, 🔹 Info, 📎 Files and links. Each always means the same thing.
- **Titles that stand alone:** "Extra time if we rebuild", not "Time".
- **Set order:** same kinds of section sit together, in the order above. Links always last.
- **Layout:** headings on their own line, bullets and numbered lists, `**Label:** text` as dot points.
- **Shape fits the question:** only the sections a reply needs; a yes/no stays one line.

Version 1 (caveman-short words, fixed section list) is in git history up to `1.7.0`.

## What a reply looks like

```
Yes, no issue. A textless version is easier, with no burned-in text to cover.

---

👉 **Backup plan if Jeremy can't send it**
1. Get the edit timings from Jeremy (an EDL or XML)
2. Pull the matching clips from Google Drive
3. Rebuild the cut to those timings, then apply the graphics

---

⚠️ **Rebuild risks**
- **Colour:** raw Drive clips may not have Jeremy's grade
- **Deadline:** rebuilding without an EDL is tight

---

🔹 **Why textless is better**
- **Graphics:** they go straight on top, with no masking over old titles

---

🔹 **Extra time if we rebuild**
- **With an EDL:** about half a day
- **Matching by eye:** about a full day
```

## Install

In Claude Code:

```
/plugin marketplace add jj92148/adhd-caveman
/plugin install adhd-caveman@adhd-caveman
```

It is on in every new session from then on: a SessionStart hook (`hooks/session-start.js`) loads the rules at start, resume and after compaction. Say "stop adhd-caveman" to turn it off for one session, or disable the plugin to turn it off everywhere.

Other ways to use it:
- **Output style:** Settings, Claude Code, Output style, pick "adhd-caveman". Use this or the hook, not both.
- **One session by hand:** type `/adhd-caveman`.

This repo is private, so installing needs a GitHub login with access to it.

## Rules

See [output-styles/adhd-caveman.md](output-styles/adhd-caveman.md). The skill in `skills/adhd-caveman` holds the same rules.

## Works with i-have-adhd

Version 2 already holds the i-have-adhd rules. If i-have-adhd's always-on flag (`~/.claude/.i-have-adhd-always`) is also set, both rule sets load; remove the flag or disable one plugin.
