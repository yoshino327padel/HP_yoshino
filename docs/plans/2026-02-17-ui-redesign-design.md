# UI Redesign Design Document

**Date**: 2026-02-17
**Project**: Kushima Yoshino Official Website
**Approach**: CSS Overhaul + CSS Animations (Approach 1)

---

## Goals

- Modernize the overall design (current design feels dated)
- Add athlete/sports energy feel
- Implement rich CSS animations for dynamic impression
- Separate CSS into external files for maintainability

## Design Direction

**Style**: Energy x Dynamic
- Vivid gradients, bold animations, energetic impression
- Blue-based color scheme enhanced with stronger accents
- Rich micro-interactions and scroll-driven animations

---

## 1. Color Palette & Typography

### Colors
| Role | Current | New |
|------|---------|-----|
| Primary | `#0a66c2` | `#0055ff` -> `#00b4ff` (Electric Blue gradient) |
| Accent | `#e85d04` | `#ff6b2b` -> `#ff9500` (Vivid Orange) |
| Dark | `#0f172a` | `#0a0e1a` (Deeper Navy) |
| Background | `#fafafa` | `#fafafa` <-> `#f0f4f8` alternating |
| Gray | `#64748b` | `#64748b` (unchanged) |

### Typography
- Section titles: **Montserrat 900**, 3rem+, wide letter-spacing
- Large watermark text behind sections (English section name, opacity 0.03-0.05)
- Body: Noto Sans JP 400, slightly tighter line-height (1.7)

### Shape Language
- Border-radius: 20px -> 12px (sharper feel)
- Shadows: softer -> harder edge
- Diagonal `clip-path: polygon()` section dividers

---

## 2. Hero Section

### Layout
- Full-screen (100vh), maintained
- Background: Deep navy -> electric blue diagonal gradient
- **Animated mesh gradient** via CSS `@keyframes` (3 colors shifting slowly)
- Geometric pattern (diagonal lines or honeycomb) via `background-image` at low opacity

### Content
- Name "KUSHIMA YOSHINO" enlarged (5rem+)
- **Stroke + fill combination**: "KUSHIMA" as outline, "YOSHINO" as filled
- "PRO PADEL PLAYER" tag with **pulse animation** (slowly glowing border)
- Hero image with **mask effect** (clip-path + gradient fade) and enhanced shadow
- Stats numbers (168, 2) with **count-up animation** (CSS `@property`)

### Scroll Indicator
- Bottom of screen: bouncing scroll-down arrow indicator

---

## 3. Profile (About) Section

### Layout
- 2-column (image + text) maintained
- Profile image with **diagonal clip** (`clip-path: polygon()`)
- Info cards (DOB, birthplace, etc.) in **glassmorphism** style (semi-transparent + blur)
- Timeline: gradient line with **scroll-driven grow animation**
- Profile table: gradient header background

### Dual Career Banner
- Maintained, enhanced with stronger accent gradient

### Play Style Cards
- Maintained, hover effects enhanced

---

## 4. Achievements Section

### Cards
- **Tilt effect on hover** (CSS `perspective` + `transform`)
- Top color line: 3px -> 4px, hover adds glow on all borders
- Year as large watermark in top-left corner of card

---

## 5. Results Section

### Table
- Header: **dark blue gradient** background
- Result badges (QF, SF, etc.): hover scale-up effect
- Row hover: left border slides in
- "View All Results" button: **arrow animation** CTA

---

## 6. Schedule Section

### Cards
- Active card: **pulse animation** on "NOW" badge (dot blink)
- Left border: **gradient** (blue -> cyan)
- Enhanced hover effects

---

## 7. Gallery Section (REDESIGNED)

### Structure Change
- **Tournament-based card layout** instead of flat photo grid
- Each card: 1 thumbnail + tournament name + date + location
- Click to **expand photo gallery** (accordion or modal)
- Cards: hover scale-up + shadow enhancement
- **New data file**: `data/gallery.json` managing tournament name, date, photo paths array

### Data Structure (gallery.json)
```json
{
  "events": [
    {
      "name": "FIP Bronze Bahrain",
      "date": "2026.02.03 - 02.08",
      "location": "Bahrain",
      "thumbnail": "images/gallery/20251029_121941355_iOS.jpg",
      "photos": [
        "images/gallery/20251029_121941355_iOS.jpg",
        "images/gallery/20251022_164441565_iOS.jpg"
      ]
    }
  ]
}
```

---

## 8. News Section

### Layout Change
- Cards to **horizontal layout** (thumbnail left, text right)
- Latest news displayed larger, older news as smaller cards
- Tag badges with **SVG icons** (match=racket, media=camera, career=briefcase)
- Date displayed large in vertical format (month/day prominent)

---

## 9. Sponsors Section

- Logo images **front and center** (currently opacity 0.08 background)
- Card hover: **grayscale to color** logo transition
- CTA section: background pattern + glow effect

---

## 10. Contact Section

- Form inputs: **floating label animation** (label moves up on focus)
- Submit button: **loading -> complete animation**
- Background gradient made more vivid

---

## 11. Footer

- SNS icons: **hover to brand color**
- Top edge: **diagonal clip-path divider**

---

## 12. Navigation

- Scrolled navbar: **progress bar** showing read position
- Mobile menu: **full-screen overlay** (slide in from left)

---

## 13. Animation Strategy (CSS-First)

| Animation | Technique |
|-----------|-----------|
| Scroll reveal | `@keyframes` + `IntersectionObserver` (minimal JS) |
| Hero background | `@keyframes` mesh gradient movement |
| Hover effects | `transform`, `box-shadow`, `filter` |
| Micro-interactions | Button ripple, link underline stretch |
| Page load | Hero text sequential entrance |
| Number count-up | CSS `@property` counter animation |
| Section dividers | `clip-path: polygon()` diagonal cuts |
| Timeline grow | Scroll-driven line extension |
| Card tilt | CSS `perspective` + `transform` on hover |

---

## 14. File Structure (After Redesign)

```
HP_yoshino/
  index.html          (JP, CSS link tag instead of inline)
  en.html             (EN, CSS link tag instead of inline)
  results.html         (CSS link tag)
  css/
    style.css          (Main styles)
    animations.css     (All @keyframes and animation rules)
  scripts/
    update.js          (existing)
  translations.js      (existing)
  data/
    news.json          (existing)
    schedule.json      (existing)
    gallery.json       (NEW - tournament-based gallery data)
  images/              (existing)
  docs/plans/          (this file)
```

---

## 15. Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- CSS `@property` for count-up: graceful degradation (shows final number)
- `clip-path`: well-supported in modern browsers
- `backdrop-filter`: supported with `-webkit-` prefix for Safari

---

## Constraints

- No build tools or frameworks (pure HTML/CSS/JS)
- External dependencies: Google Fonts only (Montserrat, Noto Sans JP)
- No GSAP or heavy JS libraries
- Minimal JS: IntersectionObserver for scroll animations, existing i18n logic
- Both JP and EN versions must be updated consistently
