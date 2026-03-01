# Midnight Neon Color Scheme Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the site from a light cyan+orange palette to a dark navy "Midnight Neon" theme with electric blue and neon green accents.

**Architecture:** Change CSS variables first (foundation), then update all hardcoded colors in style.css, animations.css, and inline styles in HTML files. Badge colors are preserved as-is.

**Tech Stack:** Pure CSS variable changes + hardcoded color replacements. No JS logic changes.

---

### Task 1: CSS Variables & Body Base

**Files:**
- Modify: `css/style.css:1-30`

**Step 1: Replace CSS variables and body color**

Change the `:root` block and body text color:

```css
/* Line 6 */ color: #e2e8f0;  /* was #2d2d2d */

/* Lines 16-30 - replace entire :root block */
:root {
  --primary: #3b82f6;         /* was #48cae4 */
  --primary-light: #60a5fa;   /* was #90e0ef */
  --accent: #22d3ee;          /* was #ff6b2b */
  --accent-light: #34d399;    /* was #ff9500 */
  --dark: #0a0f1e;            /* was #0a0e1a */
  --light: #f0f4f8;           /* was #ffffff */
  --gray: #94a3b8;            /* was #64748b */
  --gray-light: #111827;      /* was #f0f8ff */
  --bg-alt: #0d1321;          /* was #ffffff */
  --shadow: 0 2px 8px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.16);
  --shadow-hover: 0 4px 16px rgba(0,0,0,0.25), 0 16px 48px rgba(0,0,0,0.3);
  --radius: 12px;
  --transition: 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
```

**Step 2: Verify** — Open `index.html` in browser. Body background should be dark navy. Text should be light. Many elements will look broken (expected at this stage).

---

### Task 2: Navigation & Mobile Menu

**Files:**
- Modify: `css/style.css:33-100` (navigation section)
- Modify: `css/style.css:834-856` (mobile menu section)

**Step 1: Update navbar colors**

```css
/* Line 36-37 */
background: rgba(10,15,30,0.85);  /* was rgba(255,255,255,0.85) */

/* Line 39 */
border-bottom: 1px solid rgba(255,255,255,0.06);  /* was rgba(0,0,0,0.04) */

/* Line 44 */
background: rgba(10,15,30,0.95);  /* was rgba(255,255,255,0.95) */

/* Line 45 */
box-shadow: 0 1px 0 rgba(255,255,255,0.04), 0 4px 20px rgba(0,0,0,0.2);  /* was rgba(0,0,0,...) */

/* Line 59: .nav-logo color */
color: var(--light);  /* was var(--dark) */

/* Line 82: .hamburger span */
background: var(--light);  /* was var(--dark) */

/* Line 99: .lang-switch button hover */
background: rgba(59,130,246,0.15);  /* was rgba(0,119,182,0.1) */
```

**Step 2: Update mobile menu**

```css
/* Line 838 */
background: rgba(10,15,30,0.98);  /* was rgba(255,255,255,0.98) */

/* Line 841 */
box-shadow: -8px 0 40px rgba(0,0,0,0.3);  /* was rgba(0,0,0,0.1) */

/* Line 850: .mobile-menu a */
color: var(--light);  /* was var(--dark) */

/* Line 855: .mobile-close */
color: var(--light);  /* was var(--dark) */
```

**Step 3: Verify** — Navigation bar should be dark glass with light text. Mobile hamburger should be visible.

---

### Task 3: Hero Section

**Files:**
- Modify: `css/style.css:102-207` (hero section)

**Step 1: Update hero gradient and overlays**

```css
/* Line 106: .hero background gradient */
background: linear-gradient(160deg, #050810 0%, #0a0f1e 35%, #0d1321 55%, #111827 80%, #1a2235 100%);
/* was: linear-gradient(160deg, var(--dark) 0%, #023e8a 35%, #0077b6 55%, #48cae4 80%, #90e0ef 100%) */

/* Lines 111-113: .hero::before radial gradients */
background:
  radial-gradient(ellipse at 20% 80%, rgba(34,211,238,0.12) 0%, transparent 50%),
  radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.15) 0%, transparent 40%),
  radial-gradient(ellipse at 50% 50%, rgba(52,211,153,0.1) 0%, transparent 60%);
/* was: orange, light blue, cyan radial gradients */

/* Line 161: .btn-primary box-shadow */
box-shadow: 0 4px 24px rgba(34,211,238,0.3);  /* was rgba(255,107,43,0.35) */

/* Line 165: .btn-primary:hover box-shadow */
box-shadow: 0 8px 32px rgba(34,211,238,0.4);  /* was rgba(255,107,43,0.45) */
```

**Step 2: Verify** — Hero should be dark with subtle blue/green glows. Primary button should glow cyan/green instead of orange.

---

### Task 4: Section Backgrounds

**Files:**
- Modify: `css/style.css` — about, achievements, results, schedule, gallery, news, sponsors, contact sections

**Step 1: Update section backgrounds**

Sections alternate between `#0d1321` and `#111827`:

```css
/* Line 239: .about */
.about { background: #0d1321; }  /* was var(--light) */

/* Lines 241-244: .about::before clip-path */
.about::before { ... background: #0d1321; ... }  /* was var(--light) */

/* Line 406: .results */
.results { background: #0d1321; }  /* was var(--light) */

/* Line 459: .schedule */
.schedule { background: #111827; }  /* was var(--gray-light) i.e. was #f0f8ff */

/* Line 521: .achievements */
.achievements { background: #111827; }  /* was var(--gray-light) */

/* Line 577: .gallery */
.gallery { background: #0d1321; }  /* was var(--light) */

/* Line 649: .news */
.news { background: #111827; }  /* was var(--gray-light) */

/* Line 686: .sponsors */
.sponsors { background: #0d1321; }  /* was var(--light) */

/* Line 727: .contact background */
background: linear-gradient(135deg, #111827, #0d1321);  /* was linear-gradient(135deg, #f0f8ff, #e0f4ff) */
```

**Step 2: Update section title and watermark colors**

```css
/* Line 222: .section-title */
color: var(--light);  /* was var(--dark) */

/* Line 233: .section-watermark */
color: var(--light);  /* was var(--dark) - stays low opacity 0.03 */
```

**Step 3: Verify** — All sections should have dark backgrounds alternating between two tones. Section titles should be white.

---

### Task 5: About Section Details

**Files:**
- Modify: `css/style.css:238-403` (about, profile, timeline subsections)

**Step 1: Update about text colors**

```css
/* Line 282: .about-text h3 */
color: var(--light);  /* was var(--dark) */

/* Line 286: .about-text p */
color: #cbd5e1;  /* was #555 */

/* Line 307: .about-info-detail strong */
color: var(--light);  /* was var(--dark) */

/* Line 254: .about-image-placeholder */
background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(34,211,238,0.15));  /* was #e0f2fe, #bae6fd */

/* Line 270-272: .about-floating-card */
background: var(--gray-light);  /* was var(--light) */
border: 1px solid rgba(255,255,255,0.08);  /* was rgba(0,0,0,0.04) */
```

**Step 2: Update dual career banner**

```css
/* Line 313: .dual-career-banner */
background: linear-gradient(135deg, rgba(34,211,238,0.08), rgba(52,211,153,0.08));  /* was #fff7ed, #fef3c7 */
border-left: 4px solid var(--accent);  /* was var(--accent) — OK since accent changed */

/* Line 325: .dual-career-content p */
color: #cbd5e1;  /* was #555 */
```

**Step 3: Update profile table**

```css
/* Line 330: .profile-detail-section h3 */
color: var(--light);  /* was var(--dark) */

/* Line 331 */
border-bottom: 2px solid rgba(255,255,255,0.08);  /* was var(--gray-light) which is now dark */

/* Line 336: .profile-table tr */
border-bottom: 1px solid rgba(255,255,255,0.06);  /* was var(--gray-light) */

/* Line 344: .profile-table td */
color: #cbd5e1;  /* was #444 */
```

**Step 4: Update career journey / timeline**

```css
/* Line 368: .career-journey h3 */
color: var(--light);  /* was var(--dark) */

/* Line 369 */
border-bottom: 2px solid rgba(255,255,255,0.08);  /* was var(--gray-light) */

/* Line 363: .playstyle-card p */
color: #cbd5e1;  /* was #555 */

/* Line 353: .playstyle-card */
background: var(--gray-light);  /* was var(--gray-light) — OK since variable changed */
```

**Step 5: Verify** — About section: white headings, light gray paragraphs, dark cards, profile table readable.

---

### Task 6: Cards & Components

**Files:**
- Modify: `css/style.css` — achievement cards, schedule cards, sponsor cards, news cards

**Step 1: Achievement cards**

```css
/* Line 526-528: .achievement-card */
background: rgba(255,255,255,0.04);  /* was var(--light) */
border: 1px solid rgba(255,255,255,0.08);  /* was rgba(0,0,0,0.04) */

/* Line 549: .achievement-card:hover::after */
box-shadow: inset 0 0 0 2px rgba(59,130,246,0.25);  /* was rgba(72,202,228,0.2) */

/* Line 558: .achievement-title */
/* No change needed — inherits light text from body */
```

**Step 2: Schedule cards**

```css
/* Line 464: .schedule-card */
background: rgba(255,255,255,0.04);  /* was var(--light) */

/* Line 469: .schedule-card.past */
border-left-color: rgba(255,255,255,0.15);  /* was #d1d5db */

/* Line 470: .schedule-card.active */
background: rgba(34,211,238,0.06);  /* was #fff7ed */
```

**Step 3: News cards**

```css
/* Line 654-655: .news-card */
background: rgba(255,255,255,0.04);  /* was var(--light) */
border: 1px solid rgba(255,255,255,0.08);  /* was rgba(0,0,0,0.04) */

/* Line 667: .news-thumb default */
background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(96,165,250,0.15));  /* was #dbeafe, #e0f2fe */
```

**Step 4: Sponsor cards**

```css
/* Line 494: .sponsor-card.sponsor-named */
border: 1.5px solid rgba(255,255,255,0.1);  /* was #e5e7eb */

/* Line 517: .sponsor-name */
color: var(--light);  /* was var(--dark) */

/* Line 689: .sponsors-intro */
color: #cbd5e1;  /* was #555 */

/* Line 696: .sponsor-card (placeholder) */
border: 2px dashed rgba(255,255,255,0.15);  /* was #d1d5db */
```

**Step 5: Verify** — All card types should have dark semi-transparent backgrounds with subtle borders.

---

### Task 7: Tables, Gallery, Buttons & Form

**Files:**
- Modify: `css/style.css` — results tables, gallery tabs, form inputs, buttons

**Step 1: Results table**

```css
/* Line 425: .results-table tbody tr:hover */
background: rgba(59,130,246,0.08);  /* was rgba(72,202,228,0.06) */

/* Line 455: .results-year-divider */
background: rgba(255,255,255,0.04);  /* was var(--gray-light) */
color: var(--light);  /* was var(--dark) */
```

**Step 2: Gallery tabs**

```css
/* Line 583: .gallery-tab */
border: 1.5px solid rgba(255,255,255,0.12);  /* was #e2e8f0 */

/* Line 593: .gallery-tab.active - update shadow color */
box-shadow: 0 4px 16px rgba(59,130,246,0.3);  /* was rgba(72,202,228,0.3) */

/* Line 592: .gallery-tab.active background */
background: linear-gradient(135deg, var(--primary), var(--accent));  /* keep — uses new variable values */
```

**Step 3: Form inputs**

```css
/* Line 763: .form-group input, select, textarea border */
border: 1.5px solid rgba(255,255,255,0.12);  /* was #e2e8f0 */

/* Line 765: .form-group input background */
background: rgba(255,255,255,0.06);  /* was #f8fafc */

/* Line 771: focus background */
background: rgba(255,255,255,0.08);  /* was var(--light) */

/* Line 772: focus box-shadow */
box-shadow: 0 0 0 4px rgba(59,130,246,0.15);  /* was rgba(72,202,228,0.12) */

/* Line 750-751: .contact-form */
background: rgba(255,255,255,0.04);  /* was var(--light) */
border: 1px solid rgba(255,255,255,0.08);  /* was rgba(0,0,0,0.04) */

/* Line 735: .contact-info p */
color: #cbd5e1;  /* was #555 */

/* Line 733: .contact-info h3 */
color: var(--light);  /* was var(--dark) */

/* Line 739: .contact-method */
background: rgba(255,255,255,0.04);  /* was var(--light) */
```

**Step 4: Submit button**

```css
/* Line 778: .btn-submit */
background: linear-gradient(135deg, var(--accent), var(--accent-light));  /* was var(--dark), #1e293b */

/* Line 785: .btn-submit:hover */
box-shadow: 0 8px 24px rgba(34,211,238,0.3);  /* was rgba(10,14,26,0.3) */
```

**Step 5: Verify** — Tables, gallery tabs, and form should look correct on dark background.

---

### Task 8: Footer & Section Tag

**Files:**
- Modify: `css/style.css:788-833` (footer)
- Modify: `css/style.css:213-219` (section tag)

**Step 1: Footer**

```css
/* Line 790: .footer */
background: #050810;  /* was var(--dark) — slightly deeper than main dark */

/* Line 795: .footer::before */
background: #050810;  /* was var(--dark) */

/* Line 805: .footer-brand .nav-logo */
/* Keep: already white */
```

**Step 2: Section tag border**

```css
/* Line 218: .section-tag border */
border: 1.5px solid rgba(59,130,246,0.3);  /* was rgba(72,202,228,0.3) */
```

**Step 3: Sponsors CTA overlay**

```css
/* Line 709: .sponsors-cta::before radial gradient */
background: radial-gradient(ellipse at 30% 0%, rgba(59,130,246,0.2) 0%, transparent 60%);
/* was rgba(10,102,194,0.15) */
```

**Step 4: Results page header**

```css
/* Line 915: .page-header */
background: linear-gradient(135deg, #0a0f1e 0%, #111827 40%, #1a2235 100%);
/* was linear-gradient(135deg, #0077b6 0%, #00b4d8 40%, #48cae4 100%) */
```

**Step 5: FIP link section**

```css
/* Line 998-1000: .fip-link */
background: rgba(255,255,255,0.04);  /* was var(--gray-light) */
color: #cbd5e1;  /* was #555 */
```

**Step 6: Verify** — Footer darker than main sections. Section tags have blue border. Results page header dark.

---

### Task 9: Animations

**Files:**
- Modify: `css/animations.css:10-13`

**Step 1: Update tagPulse animation colors**

```css
/* Line 12 */
50% { border-color: rgba(255,255,255,0.35); box-shadow: 0 0 20px 2px rgba(59,130,246,0.25); }
/* was rgba(144,224,239,0.2) */
```

**Step 2: Verify** — Hero tag should pulse with blue glow.

---

### Task 10: index.html Inline Styles

**Files:**
- Modify: `index.html`

**Step 1: Update schedule Coming Soon card (around line 445)**

```html
style="background: rgba(255,255,255,0.04); border-left-color: rgba(255,255,255,0.15);"
<!-- was: background: var(--light); border-left-color: #d1d5db; -->
```

**Step 2: Update news thumbnail inline styles (around lines 498, 506, 514)**

The green thumb gradients change to darker versions:
```
background: linear-gradient(135deg, rgba(34,211,238,0.12), rgba(52,211,153,0.12))
```
with `color: var(--accent)` instead of `color: #065f46`.

The blue thumb gradient:
```
background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(96,165,250,0.12))
```

**Step 3: Update Note icon background (around line 668)**

```html
style="background: var(--accent);"
<!-- was: background: #41c9b4; -->
```

**Step 4: Update JS THUMB_COLORS and THUMB_TEXT_COLORS (around lines 868-875)**

```javascript
const THUMB_COLORS = {
  blue: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(96,165,250,0.12))',
  green: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(52,211,153,0.12))',
  orange: 'linear-gradient(135deg, rgba(251,191,36,0.12), rgba(253,224,71,0.12))'
};
const THUMB_TEXT_COLORS = {
  blue: 'var(--primary)',
  green: 'var(--accent)',
  orange: '#fbbf24'
};
```

**Step 5: Verify** — News thumbnails and schedule cards look correct.

---

### Task 11: en.html Inline Styles

**Files:**
- Modify: `en.html`

**Step 1: Apply identical inline style changes as Task 10**

Mirror all changes from Task 10:
- Schedule Coming Soon card inline style
- News thumbnail inline styles (around lines 492, 500, 508)
- Note icon background (around line 662)
- JS THUMB_COLORS and THUMB_TEXT_COLORS

**Step 2: Verify** — English page matches Japanese page styling.

---

### Task 12: results.html Inline Styles

**Files:**
- Modify: `results.html`

**Step 1: Update lang switch inline styles (lines 18-20)**

The rgba(255,255,255,...) values are already fine for dark backgrounds. No changes needed here.

**Step 2: Verify** — Results page looks correct with dark theme. Header gradient is dark, tables readable.

---

### Task 13: Final Visual QA & Adjustments

**Step 1:** Open all 3 pages in browser and check:
- Navigation readability on scroll
- Hero section visual impact
- All card types visible and readable
- Tables (results, profile) legible
- Form inputs visible
- Gallery tabs and photos
- Sponsor logos still visible (opacity may need adjustment)
- Footer contrast
- Mobile responsive view

**Step 2:** Fix any contrast issues discovered during QA.

**Step 3:** Commit all changes.
