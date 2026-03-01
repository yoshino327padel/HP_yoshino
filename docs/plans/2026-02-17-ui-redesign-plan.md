# UI Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Modernize the Kushima Yoshino official website with an energy/dynamic design, CSS animations, and tournament-based gallery.

**Architecture:** Extract all inline CSS from 3 HTML files into shared external CSS files (`css/style.css`, `css/animations.css`). Add minimal JS for scroll animations and gallery. Restructure gallery section from flat photo grid to tournament-based card layout backed by `data/gallery.json`.

**Tech Stack:** Pure HTML/CSS/JS, Google Fonts (Montserrat, Noto Sans JP), CSS `@keyframes`, CSS `@property`, IntersectionObserver API

---

## Task 1: Create CSS directory and extract base styles

**Files:**
- Create: `css/style.css`
- Modify: `index.html` (remove `<style>` block, add `<link>`)
- Modify: `en.html` (remove `<style>` block, add `<link>`)
- Modify: `results.html` (remove `<style>` block, add `<link>`)

**Step 1: Create `css/style.css` with new CSS variables and reset**

Create `css/style.css` with the new color palette and base reset. Start with CSS variables only:

```css
/* ===== CSS Variables ===== */
:root {
  --primary: #0055ff;
  --primary-light: #00b4ff;
  --accent: #ff6b2b;
  --accent-light: #ff9500;
  --dark: #0a0e1a;
  --light: #ffffff;
  --gray: #64748b;
  --gray-light: #f0f4f8;
  --bg-alt: #fafafa;
  --shadow: 0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06);
  --shadow-hover: 0 4px 16px rgba(0,0,0,0.1), 0 16px 48px rgba(0,0,0,0.14);
  --radius: 12px;
  --transition: 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ===== Reset & Base ===== */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: 'Noto Sans JP', 'Montserrat', sans-serif;
  color: #2d2d2d;
  background: var(--bg-alt);
  line-height: 1.7;
  overflow-x: hidden;
}
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { max-width: 100%; display: block; }
```

**Step 2: Copy all existing CSS rules from `index.html` into `css/style.css`**

Copy every CSS rule from the `<style>` tag in `index.html` (lines 11-734) into `css/style.css`, placing them after the new variables. Replace all old variable values with new ones as you go:
- `--primary: #0a66c2` → already set as `#0055ff`
- `--primary-light: #0891b2` → already set as `#00b4ff`
- `--accent: #e85d04` → already set as `#ff6b2b`
- `--accent-light: #f48c06` → already set as `#ff9500`
- `--dark: #0f172a` → already set as `#0a0e1a`
- `--radius: 20px` → already set as `12px`
- `line-height: 1.8` → already set as `1.7`

**Step 3: Update `index.html` - remove inline styles, add link tag**

In `index.html`:
- Remove the entire `<style>...</style>` block (lines 11-734)
- Add before `</head>`: `<link rel="stylesheet" href="css/style.css">`
- Add before `</head>`: `<link rel="stylesheet" href="css/animations.css">`

**Step 4: Update `en.html` - remove inline styles, add link tag**

In `en.html`:
- Remove the entire `<style>...</style>` block
- Add before `</head>`: `<link rel="stylesheet" href="css/style.css">`
- Add before `</head>`: `<link rel="stylesheet" href="css/animations.css">`

**Step 5: Update `results.html` - remove inline styles, add link tag**

In `results.html`:
- Remove the `<style>...</style>` block
- Add before `</head>`: `<link rel="stylesheet" href="css/style.css">`
- Add before `</head>`: `<link rel="stylesheet" href="css/animations.css">`
- Keep any results-page-specific styles in a small `<style>` block or add them to `style.css` under a `/* ===== Results Page ===== */` comment

**Step 6: Create empty `css/animations.css`**

Create `css/animations.css` with a header comment:
```css
/* ===== Animations & Keyframes ===== */
/* All @keyframes, scroll animations, and transition effects */
```

**Step 7: Verify all 3 pages render correctly**

Open each HTML file in a browser and confirm styles load correctly.

**Step 8: Commit**

```bash
git add css/style.css css/animations.css index.html en.html results.html
git commit -m "refactor: extract CSS into external files and update color palette"
```

---

## Task 2: Hero section redesign

**Files:**
- Modify: `css/style.css` (hero styles)
- Modify: `css/animations.css` (hero animations)
- Modify: `index.html` (hero HTML structure)
- Modify: `en.html` (hero HTML structure)

**Step 1: Update hero CSS in `style.css`**

Replace the existing `.hero` styles with:

```css
/* ===== Hero ===== */
.hero {
  min-height: 100vh; display: flex; align-items: center;
  position: relative; overflow: hidden;
  background: linear-gradient(160deg, var(--dark) 0%, #0033aa 40%, var(--primary) 70%, var(--primary-light) 100%);
}
.hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 20% 80%, rgba(255,107,43,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(0,180,255,0.12) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 50%, rgba(0,85,255,0.2) 0%, transparent 60%);
  animation: meshMove 12s ease-in-out infinite alternate;
}
.hero-pattern {
  position: absolute; inset: 0; opacity: 0.04;
  background-image:
    repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px);
}
```

**Step 2: Update hero name with stroke/fill effect**

In `index.html` and `en.html`, update the hero name HTML:
```html
<h1 class="hero-name">
  <span class="hero-name-stroke">KUSHIMA</span><br>
  <span class="hero-name-fill">YOSHINO</span>
</h1>
```

Add CSS:
```css
.hero-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 5rem; font-weight: 900; line-height: 1.05;
  margin-bottom: 28px; letter-spacing: 4px;
}
.hero-name-stroke {
  -webkit-text-stroke: 2px rgba(255,255,255,0.8);
  color: transparent;
}
.hero-name-fill {
  color: var(--light);
}
```

**Step 3: Add pulse animation to hero tag**

CSS:
```css
.hero-tag {
  display: inline-block; padding: 6px 20px; border-radius: 50px;
  background: rgba(255,255,255,0.06); backdrop-filter: blur(8px);
  font-size: 0.75rem; font-weight: 600; margin-bottom: 24px;
  border: 1px solid rgba(255,255,255,0.15);
  letter-spacing: 2.5px; text-transform: uppercase;
  animation: tagPulse 3s ease-in-out infinite;
}
```

**Step 4: Add hero image mask effect**

Update the hero image inline style in `index.html` and `en.html`:
```html
<img src="images/hero.jpeg" alt="串間よし乃" class="hero-img">
```

CSS:
```css
.hero-img {
  width: 380px; height: 460px; object-fit: cover;
  border-radius: 24px;
  clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
  box-shadow: 0 12px 48px rgba(0,0,0,0.35);
}
```

**Step 5: Add scroll indicator**

Add to `index.html` and `en.html` at the end of `.hero` section (before `</section>`):
```html
<div class="scroll-indicator">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
</div>
```

CSS:
```css
.scroll-indicator {
  position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
  color: rgba(255,255,255,0.5); z-index: 2;
  animation: scrollBounce 2s ease-in-out infinite;
}
```

**Step 6: Add hero animations to `animations.css`**

```css
@keyframes meshMove {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-30px, -20px) scale(1.05); }
}

@keyframes tagPulse {
  0%, 100% { border-color: rgba(255,255,255,0.15); box-shadow: 0 0 0 0 rgba(255,255,255,0); }
  50% { border-color: rgba(255,255,255,0.35); box-shadow: 0 0 20px 2px rgba(0,180,255,0.15); }
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.5; }
  50% { transform: translateX(-50%) translateY(10px); opacity: 1; }
}

/* Hero text entrance */
.hero-tag { opacity: 0; animation: heroEntrance 0.8s ease-out 0.2s forwards, tagPulse 3s ease-in-out 1s infinite; }
.hero-name { opacity: 0; animation: heroEntrance 0.8s ease-out 0.4s forwards; }
.hero-desc { opacity: 0; animation: heroEntrance 0.8s ease-out 0.6s forwards; }
.hero-buttons { opacity: 0; animation: heroEntrance 0.8s ease-out 0.8s forwards; }
.hero-stats { opacity: 0; animation: heroEntrance 0.8s ease-out 1.0s forwards; }

@keyframes heroEntrance {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**Step 7: Add count-up for hero stat numbers**

Add CSS `@property` count-up animation in `animations.css`:
```css
@property --stat-num {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}

.hero-stat-num {
  counter-reset: stat var(--stat-num);
  animation: countUp 2s ease-out 1.2s forwards;
}
.hero-stat-num::after {
  content: counter(stat);
}
```

Note: This is an advanced technique. For simplicity, we will use a small JS snippet with IntersectionObserver instead (see Task 9).

**Step 8: Verify hero renders on desktop and mobile**

**Step 9: Commit**

```bash
git add css/style.css css/animations.css index.html en.html
git commit -m "feat: redesign hero section with animations and new styling"
```

---

## Task 3: Navigation and progress bar

**Files:**
- Modify: `css/style.css` (navbar styles)
- Modify: `css/animations.css` (progress bar)
- Modify: `index.html` (add progress bar element + mobile menu update)
- Modify: `en.html` (same)

**Step 1: Update navbar CSS**

Update `.navbar` styles in `style.css` for the new design:
```css
.navbar {
  position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
  padding: 18px 0;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(0,0,0,0.04);
  transition: var(--transition);
}
```

**Step 2: Add progress bar HTML**

In `index.html` and `en.html`, add inside `.navbar` at the very end:
```html
<div class="nav-progress" id="navProgress"></div>
```

**Step 3: Add progress bar CSS**

```css
.nav-progress {
  position: absolute; bottom: 0; left: 0; height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--primary-light), var(--accent));
  width: 0%; transition: width 0.1s linear;
}
```

**Step 4: Update mobile menu CSS to slide-in**

```css
.mobile-menu {
  display: none; position: fixed; top: 0; right: -100%; width: 80%; max-width: 360px;
  height: 100vh; z-index: 999;
  background: rgba(255,255,255,0.98); backdrop-filter: blur(20px);
  flex-direction: column; align-items: center; justify-content: center; gap: 32px;
  transition: right 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: -8px 0 40px rgba(0,0,0,0.1);
}
.mobile-menu.active { display: flex; right: 0; }
```

Note: the slide-in from right needs the menu to always be `display: flex` but off-screen. Update JS accordingly in Task 9.

**Step 5: Commit**

```bash
git add css/style.css css/animations.css index.html en.html
git commit -m "feat: add navbar progress bar and slide-in mobile menu"
```

---

## Task 4: Section common styles and dividers

**Files:**
- Modify: `css/style.css`
- Modify: `index.html` (add watermark elements to sections)
- Modify: `en.html` (same)

**Step 1: Update section common CSS**

```css
.section { padding: 120px 24px; position: relative; overflow: hidden; }
.section-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
.section-header { text-align: center; margin-bottom: 72px; }
.section-tag {
  display: inline-block; padding: 5px 18px; border-radius: 50px;
  background: transparent; color: var(--primary);
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 3px; margin-bottom: 16px;
  border: 1.5px solid rgba(0,85,255,0.2);
}
.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.6rem; font-weight: 900; color: var(--dark);
  letter-spacing: 2px;
}
.section-subtitle {
  font-size: 0.95rem; color: var(--gray); margin-top: 16px;
  max-width: 600px; margin-left: auto; margin-right: auto;
  font-weight: 300;
}
```

**Step 2: Add watermark text**

In `index.html` and `en.html`, add a watermark `<span>` as the first child inside each `<section>`:
```html
<span class="section-watermark">ABOUT</span>
```
(Use "ACHIEVEMENTS", "RESULTS", "SCHEDULE", "GALLERY", "NEWS", "SPONSORS", "CONTACT" for each section)

CSS:
```css
.section-watermark {
  position: absolute; top: 40px; left: 50%; transform: translateX(-50%);
  font-family: 'Montserrat', sans-serif; font-size: 8rem; font-weight: 900;
  color: var(--dark); opacity: 0.03; pointer-events: none;
  letter-spacing: 20px; text-transform: uppercase; white-space: nowrap;
  user-select: none;
}
```

**Step 3: Add diagonal section dividers**

Add CSS for alternating section backgrounds and diagonal clip-path:
```css
.section:nth-of-type(even) { background: var(--gray-light); }
.section:nth-of-type(odd) { background: var(--light); }

.section-divider {
  position: absolute; bottom: -1px; left: 0; width: 100%; height: 60px;
  z-index: 2;
}
.section-divider svg { display: block; width: 100%; height: 100%; }
```

Add diagonal SVG divider between sections in HTML where visual impact is desired (e.g., after hero, before footer):
```html
<div class="section-divider">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
    <polygon fill="currentColor" points="0,60 1440,0 1440,60"/>
  </svg>
</div>
```

**Step 4: Commit**

```bash
git add css/style.css index.html en.html
git commit -m "feat: add section watermarks, dividers, and updated section styles"
```

---

## Task 5: About/Profile section redesign

**Files:**
- Modify: `css/style.css`
- Modify: `index.html` (minor HTML tweaks)
- Modify: `en.html` (same)

**Step 1: Update profile image with diagonal clip**

```css
.about-image-area img {
  width: 100%; aspect-ratio: 4/5; object-fit: cover;
  border-radius: var(--radius);
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
  transition: var(--transition);
}
.about-image-area:hover img {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
```

**Step 2: Glassmorphism info cards**

```css
.about-info-item {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 18px; border-radius: var(--radius);
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.3);
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  transition: var(--transition);
}
.about-info-item:hover {
  background: rgba(255,255,255,0.85);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
```

**Step 3: Timeline scroll-grow animation**

```css
.timeline::before {
  content: ''; position: absolute; left: 11px; top: 4px; bottom: 4px;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), var(--primary-light), var(--accent));
  transform-origin: top; transform: scaleY(0);
  transition: transform 1.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.timeline.visible::before {
  transform: scaleY(1);
}
```

Add `.timeline` to the `fade-in` observation list (or add class `scroll-reveal` — handled in Task 9 JS).

**Step 4: Enhanced profile table**

```css
.profile-table th {
  text-align: left; padding: 14px 20px; font-size: 0.85rem;
  font-weight: 600; color: var(--light);
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  width: 160px; white-space: nowrap; vertical-align: top;
}
```

**Step 5: Commit**

```bash
git add css/style.css index.html en.html
git commit -m "feat: redesign about section with glassmorphism and clip-path"
```

---

## Task 6: Achievements section redesign

**Files:**
- Modify: `css/style.css`

**Step 1: Update achievement card CSS**

```css
.achievement-card {
  background: var(--light); border-radius: var(--radius); padding: 36px;
  transition: var(--transition); position: relative; overflow: hidden;
  border: 1px solid rgba(0,0,0,0.04);
  perspective: 800px;
}
.achievement-card:hover {
  transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
  box-shadow: var(--shadow-hover);
  border-color: transparent;
}
.achievement-card::before {
  content: ''; position: absolute; top: 0; left: 0;
  width: 100%; height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--primary-light));
}
.achievement-card:hover::after {
  content: ''; position: absolute; inset: 0;
  border-radius: var(--radius);
  box-shadow: inset 0 0 0 2px rgba(0,85,255,0.15);
  pointer-events: none;
}

/* Year watermark in card */
.achievement-year {
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem; font-weight: 900; color: var(--dark);
  opacity: 0.04; position: absolute; top: 8px; right: 12px;
  line-height: 1; pointer-events: none;
}
```

**Step 2: Commit**

```bash
git add css/style.css
git commit -m "feat: redesign achievement cards with tilt and watermark year"
```

---

## Task 7: Results, Schedule, News section updates

**Files:**
- Modify: `css/style.css`
- Modify: `index.html` (minor HTML tweaks for news layout)
- Modify: `en.html` (same)

**Step 1: Results table update**

```css
.results-table thead {
  background: linear-gradient(135deg, var(--dark), #1a2744);
  color: var(--light);
}
.results-table tbody tr {
  position: relative; transition: var(--transition);
}
.results-table tbody tr:hover {
  background: rgba(0,85,255,0.04);
}
.results-table tbody tr:hover::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0;
  width: 3px; background: var(--primary);
}
.results-table .result-badge {
  transition: var(--transition);
}
.results-table .result-badge:hover {
  transform: scale(1.15);
}

/* Arrow animation for "View All" button */
.btn-arrow svg {
  transition: transform 0.3s ease;
}
.btn-arrow:hover svg {
  transform: translateX(4px);
}
```

Update "全成績一覧を見る" button in `index.html`/`en.html` to include class `btn-arrow` and an inline SVG arrow.

**Step 2: Schedule card update**

```css
.schedule-card {
  padding: 28px; border-radius: var(--radius); background: var(--light);
  border-left: 3px solid transparent;
  border-image: linear-gradient(to bottom, var(--primary), var(--primary-light)) 1;
  transition: var(--transition);
  box-shadow: var(--shadow);
}
.schedule-card.active {
  border-image: linear-gradient(to bottom, var(--accent), var(--accent-light)) 1;
  background: #fff7ed;
}

/* Pulse dot for active */
.schedule-card.active .schedule-month::before {
  content: ''; display: inline-block; width: 8px; height: 8px;
  border-radius: 50%; background: var(--accent); margin-right: 8px;
  animation: dotPulse 1.5s ease-in-out infinite;
}
```

Add to `animations.css`:
```css
@keyframes dotPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}
```

**Step 3: News card horizontal layout**

Update news card CSS for featured (first) + horizontal layout:
```css
.news-grid {
  display: grid; grid-template-columns: 1fr; gap: 20px;
}
.news-card {
  background: var(--light); border-radius: var(--radius); overflow: hidden;
  transition: var(--transition); border: 1px solid rgba(0,0,0,0.04);
  display: grid; grid-template-columns: 200px 1fr; align-items: center;
}
.news-card:first-child {
  grid-template-columns: 1fr;
}
.news-card:first-child .news-thumb {
  aspect-ratio: 16/9;
}
.news-card:not(:first-child) .news-thumb {
  aspect-ratio: 1; height: 100%;
}
.news-card:hover {
  transform: translateY(-4px); box-shadow: var(--shadow-hover);
  border-color: transparent;
}
```

Mobile responsive:
```css
@media (max-width: 768px) {
  .news-card {
    grid-template-columns: 1fr;
  }
}
```

**Step 4: Commit**

```bash
git add css/style.css css/animations.css index.html en.html
git commit -m "feat: update results, schedule, and news section styles"
```

---

## Task 8: Gallery redesign (tournament-based cards)

**Files:**
- Create: `data/gallery.json`
- Modify: `css/style.css` (gallery styles)
- Modify: `index.html` (gallery HTML + JS)
- Modify: `en.html` (gallery HTML + JS)
- Modify: `translations.js` (gallery translations)

**Step 1: Create `data/gallery.json`**

```json
{
  "lastUpdated": "2026-02-17T00:00:00+09:00",
  "events": [
    {
      "name": "FIP Bronze Bahrain",
      "nameEn": "FIP Bronze Bahrain",
      "date": "2026.02.03 - 02.08",
      "location": "Bahrain",
      "locationEn": "Bahrain",
      "thumbnail": "images/gallery/20251029_121941355_iOS.jpg",
      "photos": [
        "images/gallery/20251029_121941355_iOS.jpg",
        "images/gallery/20251027_071410702_iOS.jpg"
      ]
    },
    {
      "name": "FIP Silver Australian Padel Open",
      "nameEn": "FIP Silver Australian Padel Open",
      "date": "2026.01.14 - 01.19",
      "location": "メルボルン, オーストラリア",
      "locationEn": "Melbourne, Australia",
      "thumbnail": "images/gallery/20251026_161321655_iOS.jpg",
      "photos": [
        "images/gallery/20251026_161321655_iOS.jpg",
        "images/gallery/20251026_141923023_iOS.jpg",
        "images/gallery/20251026_141228636_iOS.jpg"
      ]
    },
    {
      "name": "Cupra FIP Finals",
      "nameEn": "Cupra FIP Finals",
      "date": "2025.12.03 - 12.07",
      "location": "上海, 中国",
      "locationEn": "Shanghai, China",
      "thumbnail": "images/gallery/20251025_164647778_iOS.jpg",
      "photos": [
        "images/gallery/20251025_164647778_iOS.jpg",
        "images/gallery/20251025_021553621_iOS.jpg",
        "images/gallery/20251023_155306400_iOS.jpg",
        "images/gallery/20251022_164441565_iOS.jpg"
      ]
    },
    {
      "name": "FIP Tour 2025 海外遠征",
      "nameEn": "FIP Tour 2025 International",
      "date": "2025",
      "location": "世界各地",
      "locationEn": "Worldwide",
      "thumbnail": "images/gallery/20251021_225434520_iOS.jpg",
      "photos": [
        "images/gallery/20251021_225434520_iOS.jpg",
        "images/gallery/20251020_112312690_iOS.jpg",
        "images/gallery/20250908_121215373_iOS.jpg",
        "images/gallery/20250828_054127754_iOS.jpg",
        "images/gallery/20250828_054106052_iOS.jpg",
        "images/gallery/20250811_010205000_iOS.jpg",
        "images/gallery/20250717_100626648_iOS.jpg",
        "images/gallery/20250706_093213266_iOS.jpg",
        "images/gallery/20250706_092856279_iOS.jpg",
        "images/gallery/20250615_001829320_iOS.jpg"
      ]
    }
  ]
}
```

Note: Photo assignments to events are approximate. The user should adjust `gallery.json` to match actual tournament photos.

**Step 2: Update gallery HTML**

Replace the gallery grid in `index.html` and `en.html` with:
```html
<div class="gallery-events" id="galleryEvents">
  <!-- Rendered by JS from data/gallery.json -->
</div>

<!-- Lightbox modal -->
<div class="lightbox" id="lightbox">
  <button class="lightbox-close" id="lightboxClose">&times;</button>
  <button class="lightbox-prev" id="lightboxPrev">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
  </button>
  <img class="lightbox-img" id="lightboxImg" src="" alt="">
  <button class="lightbox-next" id="lightboxNext">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
  </button>
</div>
```

Remove old `galleryMain`, `galleryMore`, and `galleryToggle` elements.

**Step 3: Gallery card CSS**

```css
.gallery-events {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;
}
.gallery-event-card {
  border-radius: var(--radius); overflow: hidden; cursor: pointer;
  background: var(--light); box-shadow: var(--shadow);
  transition: var(--transition); position: relative;
}
.gallery-event-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: var(--shadow-hover);
}
.gallery-event-thumb {
  width: 100%; aspect-ratio: 16/10; object-fit: cover;
  transition: transform 0.5s ease;
}
.gallery-event-card:hover .gallery-event-thumb {
  transform: scale(1.05);
}
.gallery-event-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 60%;
  background: linear-gradient(to bottom, transparent 40%, rgba(10,14,26,0.7));
  pointer-events: none; opacity: 0;
  transition: opacity 0.3s ease;
}
.gallery-event-card:hover .gallery-event-overlay { opacity: 1; }
.gallery-event-info {
  padding: 16px 20px;
}
.gallery-event-name {
  font-size: 1rem; font-weight: 700; color: var(--dark); margin-bottom: 4px;
}
.gallery-event-meta {
  font-size: 0.8rem; color: var(--gray);
  display: flex; align-items: center; gap: 12px;
}
.gallery-event-count {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 0.75rem; color: var(--primary); font-weight: 600;
}

/* Lightbox */
.lightbox {
  display: none; position: fixed; inset: 0; z-index: 2000;
  background: rgba(0,0,0,0.92); backdrop-filter: blur(8px);
  align-items: center; justify-content: center;
}
.lightbox.active { display: flex; }
.lightbox-img {
  max-width: 90vw; max-height: 85vh; object-fit: contain;
  border-radius: 8px;
}
.lightbox-close {
  position: absolute; top: 20px; right: 20px;
  background: none; border: none; color: white; font-size: 2rem;
  cursor: pointer; z-index: 2001;
}
.lightbox-prev, .lightbox-next {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: rgba(255,255,255,0.1); border: none; color: white;
  width: 48px; height: 48px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: var(--transition);
}
.lightbox-prev:hover, .lightbox-next:hover { background: rgba(255,255,255,0.25); }
.lightbox-prev { left: 20px; }
.lightbox-next { right: 20px; }
```

**Step 4: Gallery JS** (add to bottom of `index.html` and `en.html` inline script)

```javascript
// Gallery - tournament cards
let galleryData = [];
let currentLightboxPhotos = [];
let currentLightboxIndex = 0;

async function loadGalleryData() {
  try {
    const res = await fetch('data/gallery.json');
    if (!res.ok) return;
    const data = await res.json();
    galleryData = data.events || [];
    renderGalleryCards();
  } catch (e) {
    console.log('Gallery data load skipped');
  }
}

function renderGalleryCards() {
  const container = document.getElementById('galleryEvents');
  if (!container) return;
  container.innerHTML = '';
  galleryData.forEach((event, idx) => {
    const isEn = currentLang === 'en';
    const card = document.createElement('div');
    card.className = 'gallery-event-card fade-in';
    card.innerHTML = `
      <div style="position:relative;overflow:hidden;">
        <img class="gallery-event-thumb" src="${event.thumbnail}" alt="${isEn ? event.nameEn : event.name}" loading="lazy">
        <div class="gallery-event-overlay"></div>
      </div>
      <div class="gallery-event-info">
        <div class="gallery-event-name">${isEn ? event.nameEn : event.name}</div>
        <div class="gallery-event-meta">
          <span>${event.date}</span>
          <span>${isEn ? event.locationEn : event.location}</span>
        </div>
        <div class="gallery-event-count">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          ${event.photos.length} photos
        </div>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(event.photos, 0));
    container.appendChild(card);
  });
  container.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function openLightbox(photos, index) {
  currentLightboxPhotos = photos;
  currentLightboxIndex = index;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  img.src = photos[index];
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + currentLightboxPhotos.length) % currentLightboxPhotos.length;
  document.getElementById('lightboxImg').src = currentLightboxPhotos[currentLightboxIndex];
}

document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev')?.addEventListener('click', () => lightboxNav(-1));
document.getElementById('lightboxNext')?.addEventListener('click', () => lightboxNav(1));
document.getElementById('lightbox')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox')?.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  if (e.key === 'ArrowRight') lightboxNav(1);
});
```

Call `loadGalleryData()` alongside `loadNewsData()` and `loadScheduleData()`.

**Step 5: Remove old `toggleGallery` function**

Remove the `toggleGallery()` function from the inline script in both `index.html` and `en.html`.

**Step 6: Commit**

```bash
git add data/gallery.json css/style.css index.html en.html
git commit -m "feat: redesign gallery as tournament-based card layout with lightbox"
```

---

## Task 9: Sponsors, Contact, Footer updates

**Files:**
- Modify: `css/style.css`
- Modify: `css/animations.css`

**Step 1: Sponsor card - logo front and center + grayscale hover**

```css
.sponsor-card.sponsor-named {
  border: 2px solid #e5e7eb; padding: 20px; text-align: center;
  position: relative; overflow: hidden; border-radius: var(--radius);
  transition: var(--transition);
}
.sponsor-card.sponsor-named:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}
.sponsor-logo {
  position: relative; width: 80%; max-height: 60px;
  object-fit: contain; margin: 0 auto 12px;
  filter: grayscale(100%); opacity: 0.6;
  transition: all 0.4s ease;
}
.sponsor-card.sponsor-named:hover .sponsor-logo {
  filter: grayscale(0%); opacity: 1;
}
```

**Step 2: Contact floating labels**

```css
.form-group {
  position: relative; margin-bottom: 24px;
}
.form-group label {
  position: absolute; left: 18px; top: 13px;
  font-size: 0.85rem; font-weight: 500; color: var(--gray);
  transition: all 0.2s ease; pointer-events: none;
  background: var(--light); padding: 0 4px;
}
.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group select:focus + label,
.form-group select:not([value=""]) + label,
.form-group textarea:focus + label,
.form-group textarea:not(:placeholder-shown) + label {
  top: -8px; font-size: 0.72rem; color: var(--primary); font-weight: 600;
}
```

Note: This requires moving `<label>` after `<input>` in HTML, or using a different approach. For simplicity, keep labels above and add a focus-glow effect instead:
```css
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none; border-color: var(--primary);
  background: var(--light);
  box-shadow: 0 0 0 4px rgba(0,85,255,0.1);
}
```

**Step 3: Footer diagonal divider + SNS brand colors**

```css
.footer {
  background: var(--dark); color: rgba(255,255,255,0.55);
  padding: 72px 24px 36px; position: relative;
}
.footer::before {
  content: ''; position: absolute; top: -30px; left: 0; width: 100%; height: 30px;
  background: var(--dark);
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}
.footer-social a:hover {
  background: var(--primary); color: var(--light);
  transform: translateY(-3px);
}
```

**Step 4: Commit**

```bash
git add css/style.css css/animations.css
git commit -m "feat: update sponsor, contact, and footer sections"
```

---

## Task 10: Animation system (scroll reveal + count-up)

**Files:**
- Modify: `css/animations.css`
- Modify: `index.html` (update inline JS)
- Modify: `en.html` (update inline JS)

**Step 1: Enhanced scroll reveal animations in `animations.css`**

```css
/* ===== Scroll Reveal ===== */
.fade-in {
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.fade-in.visible { opacity: 1; transform: translateY(0); }

.slide-in-left {
  opacity: 0; transform: translateX(-40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.slide-in-left.visible { opacity: 1; transform: translateX(0); }

.slide-in-right {
  opacity: 0; transform: translateX(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.slide-in-right.visible { opacity: 1; transform: translateX(0); }

.scale-in {
  opacity: 0; transform: scale(0.9);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.scale-in.visible { opacity: 1; transform: scale(1); }

/* Stagger children */
.stagger-children > .fade-in:nth-child(1) { transition-delay: 0.1s; }
.stagger-children > .fade-in:nth-child(2) { transition-delay: 0.2s; }
.stagger-children > .fade-in:nth-child(3) { transition-delay: 0.3s; }
.stagger-children > .fade-in:nth-child(4) { transition-delay: 0.4s; }
.stagger-children > .fade-in:nth-child(5) { transition-delay: 0.5s; }
.stagger-children > .fade-in:nth-child(6) { transition-delay: 0.6s; }
```

**Step 2: Add stagger class to grids**

In `index.html` and `en.html`, add class `stagger-children` to:
- `.achievements-grid`
- `.sponsors-grid`
- `.gallery-events`
- `.schedule-grid`

**Step 3: Update IntersectionObserver JS**

Update the scroll observer in the inline `<script>` of both HTML files:
```javascript
// Enhanced scroll animations
const revealElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .timeline');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
revealElements.forEach(el => revealObserver.observe(el));
```

**Step 4: Progress bar JS**

Add to inline script:
```javascript
// Navbar progress bar
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  const bar = document.getElementById('navProgress');
  if (bar) bar.style.width = progress + '%';
});
```

**Step 5: Count-up animation JS**

Add simple count-up for hero stats:
```javascript
// Count-up animation for hero stats
function animateCountUp(el, target, duration) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const heroStatsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.hero-stat-num');
      nums.forEach(num => {
        const target = parseInt(num.textContent);
        if (!isNaN(target)) animateCountUp(num, target, 2000);
      });
      heroStatsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroStatsObserver.observe(heroStats);
```

**Step 6: Commit**

```bash
git add css/animations.css index.html en.html
git commit -m "feat: add scroll reveal animations, progress bar, and count-up"
```

---

## Task 11: Mobile responsive updates

**Files:**
- Modify: `css/style.css` (responsive section)

**Step 1: Update all media queries**

```css
@media (max-width: 1024px) {
  .hero-content { grid-template-columns: 1fr; text-align: center; }
  .hero-desc { margin-left: auto; margin-right: auto; }
  .hero-buttons { justify-content: center; }
  .hero-img { width: 280px; height: 340px; }
  .hero-stats { justify-content: center; }
  .hero-name { font-size: 3.5rem; }
  .about-grid { grid-template-columns: 1fr; }
  .about-floating-card { right: 20px; }
  .achievements-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-top { grid-template-columns: 1fr 1fr; }
  .section-watermark { font-size: 5rem; }
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .hero-name { font-size: 2.6rem; }
  .hero-img { display: none; }
  .section { padding: 80px 16px; }
  .section-title { font-size: 2rem; }
  .section-watermark { font-size: 3.5rem; }
  .achievements-grid { grid-template-columns: 1fr; }
  .gallery-events { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .news-card { grid-template-columns: 1fr; }
  .sponsors-grid { grid-template-columns: repeat(2, 1fr); }
  .contact-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
  .sponsors-benefits { flex-direction: column; align-items: center; }
  .dual-career-banner { flex-direction: column; }
  .profile-table th { display: block; width: 100%; padding-bottom: 2px; }
  .profile-table td { display: block; padding-top: 2px; padding-bottom: 14px; }
  .about-info { grid-template-columns: 1fr; }
  .lightbox-prev { left: 8px; }
  .lightbox-next { right: 8px; }
}

@media (max-width: 480px) {
  .gallery-events { grid-template-columns: 1fr; }
  .hero-name { font-size: 2.2rem; }
  .hero-stat-num { font-size: 2rem; }
}
```

**Step 2: Commit**

```bash
git add css/style.css
git commit -m "feat: update responsive styles for all breakpoints"
```

---

## Task 12: `en.html` and `results.html` sync

**Files:**
- Modify: `en.html` (sync all HTML structure changes from index.html)
- Modify: `results.html` (add CSS link, update styles)

**Step 1: Sync `en.html`**

Apply all HTML structure changes made to `index.html` in Tasks 2-8 to `en.html`:
- Hero name stroke/fill markup
- Scroll indicator
- Progress bar element
- Gallery tournament cards HTML + lightbox modal
- Watermark spans
- Any class additions (stagger-children, btn-arrow, etc.)
- Updated inline JS (progress bar, count-up, gallery loader)

**Step 2: Update `results.html`**

- Ensure `<link rel="stylesheet" href="css/style.css">` and `<link rel="stylesheet" href="css/animations.css">` are in `<head>`
- Keep results-page-specific styles (`.page-header`, `.main`, `.stats-row`, `.stat-card`, `.year-heading`) in a small inline `<style>` block or add them to `style.css` under `/* ===== Results Page ===== */`
- Update `.results-table` styles to match the new design (gradient header, hover effects)
- Add `.nav-progress` bar if needed

**Step 3: Verify all 3 pages**

Open each in browser, check:
- Colors consistent across pages
- Navigation works
- Language toggle works
- Animations play correctly
- Mobile responsive on all pages

**Step 4: Commit**

```bash
git add en.html results.html css/style.css
git commit -m "feat: sync en.html and results.html with new design system"
```

---

## Task 13: Final polish and button/micro-interaction styles

**Files:**
- Modify: `css/style.css`
- Modify: `css/animations.css`

**Step 1: Button styles**

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px 36px; border-radius: 50px; font-weight: 600;
  font-size: 0.85rem; transition: var(--transition); cursor: pointer; border: none;
  min-width: 200px; letter-spacing: 0.5px; position: relative; overflow: hidden;
}
.btn::after {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.2) 0%, transparent 60%);
  opacity: 0; transition: opacity 0.3s;
}
.btn:hover::after { opacity: 1; }

.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: var(--light);
  box-shadow: 0 4px 24px rgba(255,107,43,0.35);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(255,107,43,0.45);
}

.btn-submit {
  width: 100%; padding: 15px;
  background: linear-gradient(135deg, var(--dark), #1e293b);
  color: var(--light); border: none; border-radius: var(--radius);
  font-size: 0.9rem; font-weight: 600; cursor: pointer;
  transition: var(--transition); letter-spacing: 1px;
}
.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(10,14,26,0.3);
}
```

**Step 2: Link hover underline animation**

```css
.nav-links a::after {
  content: ''; position: absolute; bottom: -6px; left: 0;
  width: 0; height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--primary-light));
  transition: width 0.3s ease;
}
.nav-links a:hover::after { width: 100%; }
```

**Step 3: Commit**

```bash
git add css/style.css css/animations.css
git commit -m "feat: add button effects, micro-interactions, and final polish"
```

---

## Summary

| Task | Description | Est. Files |
|------|-------------|-----------|
| 1 | CSS extraction + new variables | 5 |
| 2 | Hero redesign | 4 |
| 3 | Navigation + progress bar | 4 |
| 4 | Section common + dividers | 4 |
| 5 | About/Profile redesign | 3 |
| 6 | Achievements redesign | 1 |
| 7 | Results, Schedule, News | 4 |
| 8 | Gallery redesign (tournament cards) | 5 |
| 9 | Sponsors, Contact, Footer | 2 |
| 10 | Animation system | 3 |
| 11 | Mobile responsive | 1 |
| 12 | en.html + results.html sync | 3 |
| 13 | Final polish | 2 |
