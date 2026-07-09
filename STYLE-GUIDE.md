# Style Guide — Amit Om, MD redesign

## Concept

A refined clinical identity for a fellowship-trained Mohs surgeon. Warm ivory instead of clinical white, deep teal instead of generic medical blue, and one subject-grounded signature: **gentian violet**, the color of the surgical marker Mohs surgeons use to draw tumor margins (visible in Dr. Om's own case photos). The violet appears as a hand-drawn ellipse in the hero, as numbering accents in the case gallery, and in focus outlines — always as "the marker," never as decoration.

## Color

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FAF7F1` | Page background (warm ivory) |
| `--paper-2` | `#F2ECE1` | Alternating section tint |
| `--ink` | `#22302D` | Text, footer background |
| `--ink-2` | `#5C6B67` | Secondary text |
| `--teal` | `#175A52` | Primary accent, buttons, links |
| `--teal-deep` | `#0E3B35` | CTA band, hover states |
| `--teal-tint` | `#E2ECE8` | Hero arch, soft fills |
| `--violet` | `#5B3E8F` | Signature accent — the surgical marker. Used sparingly. |
| `--line` | `#E2D9C9` | Hairline borders |

Rule: teal is the workhorse accent; violet appears at most once or twice per screen.

## Typography

| Role | Face | Weights | Notes |
|---|---|---|---|
| Display | **Newsreader** (Google) | 400, 500 + italics | Medical-journal heritage; used for h1–h3, pull quotes, stats |
| Body | **Public Sans** (Google) | 400–700 | Neutral, highly legible for a 60+ patient demographic |
| Labels | **IBM Plex Mono** (Google) | 400, 500 | Eyebrows, case numbers, phone — echoes pathology slide labels |

Scale: h1 `clamp(2.4rem→3.9rem)`, h2 `clamp(1.8rem→2.5rem)`, body `1.0625rem/1.65`. Eyebrows are mono, 0.78rem, letter-spaced 0.14em, uppercase, teal.

## Layout

- Max content width 1120px, 24px gutters.
- Sections alternate `--paper` / `--paper-2` with 88px vertical padding (64px mobile).
- Cards: white, 1px `--line` border, 10px radius, no shadows — hairlines carry the structure.
- The hero portrait sits on a teal-tint arch (`border-radius: 999px 999px 0 0`), grounded to the section edge.

## Signature element

The **marker ellipse**: an SVG hand-drawn ellipse in gentian violet around one phrase in the hero headline, animated as a 1.1s draw-on stroke on load (skipped under `prefers-reduced-motion`). Echoed by violet `01 /` case numbers in the surgical gallery.

## Motion

- One orchestrated moment (the marker draw), plus quiet scroll-reveals (18px rise, 550ms) via IntersectionObserver.
- Everything respects `prefers-reduced-motion: reduce`.

## Voice & content rules

- Lead with credentials that differentiate: *double board-certified, ACGME fellowship, 23 publications* — never "distinguished practitioner."
- Active voice, plain verbs. "Book an appointment," not "Make Appointment."
- Graphic surgical photos always sit behind an explicit opt-in with the consent statement.
- Every image gets descriptive alt text.

## Accessibility floor

- Semantic heading order (one h1 per page).
- Visible focus (`2px` violet outline).
- Text contrast ≥ 4.5:1 on all backgrounds (teal `#175A52` on ivory = 7.5:1).
- Base font 17px for the practice's older patient demographic.
