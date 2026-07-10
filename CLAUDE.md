# CLAUDE.md

Unofficial redesign demo of amitommd.com (Dr. Amit Om — Aryan's cousin; Mohs surgeon, Charlotte NC).

- **Live:** https://arluigi.github.io/amitommd-redesign/ (GitHub Pages, `main` branch root, repo `Arluigi/amitommd-redesign`)
- Plain static HTML/CSS + `js/main.js`. No build step — edit, commit, push to deploy.
- Repo must stay **public** (free-plan Pages requirement).
- `AUDIT.md` = critique of the current live site (rendered at `/audit.html`); `STYLE-GUIDE.md` = design tokens/voice rules.
- Original site is WordPress on Hostinger (`platform: hostinger` header); domain + Titan email also at Hostinger.

## Gotchas

- Surgical gallery on the *original* site is placeholder content (same 3 photos for all 19 cases) — only one real case exists; it's the one used here.
- Scroll-reveal `.rv` elements are hidden only under `html.js` — don't remove the `classList.add('js')` line in `main.js`.
- Contact stats sourced from the old site's animated counters: 23 publications, 9 state licenses, 27,194 telemedicine patients.

## If cousin adopts the site (pending)

1. He updates Hostinger DNS: apex A records → 185.199.108/109/110/111.153, `www` CNAME → `arluigi.github.io` (tutorial already sent).
2. Then: repo Settings → Pages → custom domain `amitommd.com` + enforce HTTPS (adds CNAME file).
3. Remove "unofficial concept" footer disclaimer on all 6 HTML pages + README URLs; he cancels Hostinger web hosting (keeps domain + email).

## Session Log

### 2026-07-09
- Completed: Audited amitommd.com (perf/SEO/content/UX findings in AUDIT.md), built 5-page static redesign + audit page + style guide, published to GitHub Pages, verified live. Sent cousin the Hostinger DNS tutorial.
- Next: If he does the DNS change — flip custom domain in repo settings, drop demo disclaimers. Nice-to-haves: real case photos, Formspree contact form.
