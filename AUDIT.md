# Website Audit — amitommd.com

Audited July 2026. Current stack: WordPress 6.4.8 + Elementor Pro + 6 plugins (Essential Addons, Instagram Feed, Preloader Plus, Fluent Forms, Site Kit, Elementor Pro).

## 1. Performance (the biggest problem)

- **4-second artificial preloader.** The "Preloader Plus" plugin is configured with a 4000ms animation delay before the site even fades in. Every visitor waits ~4 extra seconds on every page, on purpose. This alone likely costs more visitors than everything else combined.
- **22 CSS files and 33 script tags on the homepage** — jQuery, jQuery Migrate, Swiper, Elementor frontend, Essential Addons, Instagram feed, emoji polyfills. ~100KB of raw HTML before a single image loads.
- **The logo is shipped at 1930×1493px (97KB) with `fetchpriority="high"`** to render at ~100px tall in the header — and the homepage loads *both* logo variants plus a 528KB animated GIF of the logo.
- **4 Google Font families (Roboto, Roboto Slab, Nunito, Open Sans) loaded in all 18 weights/styles each** — 72 font variations requested; the visible design uses maybe 3.
- **The "For Patients" page is 312KB of HTML** with 20+ Instagram reel embeds, each pulling Instagram's player scripts. It also loads 33 gallery images up front.
- **WordPress emoji-detection inline script** and other legacy polyfills run on every page.

## 2. SEO & metadata

- **The homepage `<title>` is literally "amitommd"** — not "Dermatologist," not "Mohs surgeon," not "Charlotte." Google shows this as the headline of the search result.
- **Zero meta descriptions anywhere.** Google invents its own snippet.
- **No Open Graph or Twitter card tags** — sharing the site in a text or on social produces a bare link.
- **No structured data** (`Physician`/`LocalBusiness` schema) — no rich result with address, hours, reviews.
- **No `<h1>` on any page.** Everything is `<h2>`–`<h4>`, and there are `<p>` tags nested *inside* headings (invalid HTML). Heading order is decorative, not semantic.
- The one thing carrying the practice's local SEO is the Google Business profile, not the site.

## 3. Content & trust issues

- **The surgical gallery is placeholder content.** All 19 "cases" across scalp/forehead/temple/cheek/nose/ears display the *same three photos* of one forehead case. Several case captions don't match their section (the "Ears — Case 2" caption describes a forehead). A before/after gallery is the single most persuasive asset a surgeon has — right now it undermines trust for anyone who clicks two cases.
- **Two AI-generated images are used where credibility matters most:** the "Expert Witness" section uses an obvious Midjourney portrait (the filename still contains the AI prompt), and the telemedicine section uses an AI cartoon doctor. For a physician selling expert testimony, an AI-fabricated image is the wrong signal.
- **The announcement is stale/ambiguous:** "Starting September 2, I'll be seeing patients at Dermatology Group of the Carolinas" — no year, and the date has long passed. It should say "Now seeing patients at…".
- **Copy reads as AI-padded.** Nearly every service description follows the same formula ("Dr. Om, a distinguished/seasoned/dedicated X, is committed to…"). Sentences like "His commitment goes beyond operating on patients" bury the actual selling points (double board certification, ACGME fellowship, 23 publications) in filler.
- **Real credentials are under-sold.** The animated counters start at 0 and only show real values (23 publications, 9 states, 27,194 virtual patients) if you scroll slowly with JS enabled. Search engines and fast scrollers see "0 Peer Reviewed Publications."
- The stat label says "0 Platforms" — even fully animated, "5 Platforms" is a stat that means nothing to a patient.

## 4. UI / visual design

- **No coherent visual identity:** default Elementor look, red accent buttons that clash with the blue/teal logo, four typefaces, inconsistent heading sizes set per-widget.
- **The script logo is a low-res photo-edit** (a white-background image run through a background remover, with visible fringing), shipped in 6 different crops.
- **The education/membership section is a wall of clashing logos** — VCU's black banner, FSU's garnet seal, MUSC's white JPEG, each in different aspect ratios and backgrounds.
- **Testimonial cards show empty star-rating list items** (five empty `<li>` elements) and generic gray avatar placeholders.
- Spacer widgets and inconsistent section padding produce uneven vertical rhythm; some sections are edge-to-edge while neighbors are boxed.

## 5. UX & accessibility

- **Every image on the site has an empty `alt` attribute** — screen readers announce nothing; Google Images indexes nothing.
- **Graphic surgical photos load with no warning or opt-in.** The disclaimer ("viewer discretion advised") sits *below* the gallery, after you've already seen the photos.
- **The contact forms submit to a WordPress plugin** but there's no confirmation of what happens next, no expected response time, and the same form is duplicated on two pages with different titles ("Make Telemedicine Appointment" / "Looking For Help?").
- **"Consulting" lives at `/telemedicine/`** — nav label, page title, and URL all disagree.
- Two of the five social icons in the header are the practice's *only* prominent CTAs on mobile; the "Make Appointment" button is hidden on tablet/mobile (`elementor-hidden-tablet elementor-hidden-mobile`).
- Menu items and page sections have no visible keyboard focus styling.

## 6. Technical / maintenance

- WordPress + 6 plugins is a permanent maintenance burden (updates, security patches, hosting fees) for what is functionally a 5-page brochure site. A static site would be faster, free to host, and unhackable.
- `xmlrpc.php`, REST API index, and WP version are all publicly exposed — standard WordPress attack surface left open.
- Google Analytics is configured, but with a 4-second preloader the bounce data is poisoned.

## What the redesign demonstrates

| | Old site | Redesign |
|---|---|---|
| Time to content | ~4s preloader + heavy assets | Instant (static HTML) |
| Homepage weight | multi-MB, 55+ requests | ~1MB, ~15 requests |
| Title tag | "amitommd" | "Amit Om, MD — Mohs Surgeon & Dermatologist in Charlotte, NC" |
| Headings | no h1, invalid nesting | semantic h1→h3 |
| Gallery | 19 duplicate placeholder cases | 1 honest real case + graphic-content opt-in |
| Fonts | 4 families × 18 weights | 3 families, 9 weights total |
| Hosting cost | WordPress hosting + plugins | $0 (GitHub Pages) |
| Alt text | none | every image |
