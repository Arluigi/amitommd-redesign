# CLAUDE.md

The live website of amitommd.com (Dr. Amit Om — Aryan's cousin; Mohs surgeon, Charlotte NC). Went live on the real domain 2026-07-11.

- **Live:** https://amitommd.com (GitHub Pages, `main` branch root, repo `Arluigi/amitommd-redesign`, custom domain via `CNAME` file + Hostinger DNS)
- Plain static HTML/CSS + `js/main.js`. No build step — edit, commit, push to deploy.
- Repo must stay **public** (free-plan Pages requirement). Don't delete the `CNAME` file or the domain unbinds.
- DNS stays at Hostinger (registrar + Titan email — MX/SPF/DKIM records must never be touched). Apex A → 185.199.108–111.153, `www` CNAME → arluigi.github.io.
- `AUDIT.md` = critique of the old WordPress site (rendered at `/audit.html`, noindex); `STYLE-GUIDE.md` = design tokens/voice rules.

## Gotchas

- Surgical gallery on the *original* site is placeholder content (same 3 photos for all 19 cases) — only one real case exists; it's the one used here.
- Scroll-reveal `.rv` elements are hidden only under `html.js` — don't remove the `classList.add('js')` line in `main.js`.
- Contact stats sourced from the old site's animated counters: 23 publications, 9 state licenses, 27,194 telemedicine patients.

## Remaining

- Cousin can cancel the Hostinger **web hosting** plan (must keep domain registration + Titan email).
- Nice-to-haves: real case photos for the gallery, Formspree contact form.

## Session Log

### 2026-07-11
- Completed: Domain cutover. Aryan edited Hostinger DNS (apex A → GitHub IPs, dropped Hostinger AAAA, `www` CNAME → arluigi.github.io); set custom domain on the repo, cert issued, HTTPS enforced, removed demo disclaimers (now © footer), rewrote README, added CNAME file (commit 2a4aa02). Verified live: https://amitommd.com serves the new site, www + HTTP redirect correctly.
- Next: Remind cousin he can cancel Hostinger web hosting (keep domain + email). Nice-to-haves: real case photos, Formspree form.
