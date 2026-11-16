const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const checks = [
  ['one main heading', (html.match(/<h1\b/g) || []).length === 1],
  ['landmark and section anchors', ['id="main"','id="about"','id="why"','id="updates"'].every(s => html.includes(s))],
  ['all local anchors resolve', [...html.matchAll(/href="#([^"]+)"/g)].every(([, id]) => html.includes(`id="${id}"`))],
  ['mobile layout', css.includes('@media(max-width:680px)')],
  ['keyboard focus', css.includes(':focus-visible')],
  ['reduced motion', css.includes('prefers-reduced-motion:reduce')],
  ['no fake signup', !/<form\b/i.test(html) && html.includes("Signups will open here")],
  ['no long dash', !/[—–]/.test(html + css)],
];
for (const [name, ok] of checks) console.log(`${ok ? 'PASS' : 'FAIL'} ${name}`);
if (checks.some(([, ok]) => !ok)) process.exit(1);
