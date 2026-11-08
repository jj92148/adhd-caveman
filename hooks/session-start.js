// Loads the adhd-caveman rules into every new, resumed or compacted session, so the style is always on.
// Works on macOS and Windows (Node only). Turn off for a session by saying "stop adhd-caveman".
const fs = require('fs');
const path = require('path');

const root = process.env.CLAUDE_PLUGIN_ROOT || path.join(__dirname, '..');
let rules = '';
try {
  rules = fs.readFileSync(path.join(root, 'output-styles', 'adhd-caveman.md'), 'utf8')
    .replace(/^---[\s\S]*?---\s*/, ''); // drop the front matter
} catch (e) {
  process.exit(0); // never block a session
}
const context = 'ADHD-CAVEMAN MODE ACTIVE. Follow these reply rules in every reply until the reader says "stop adhd-caveman" or "normal mode".\n\n' + rules;
process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: context } }));
