# Hero Photo Background + Motto Design

**Date:** 2026-02-25
**Status:** Approved

## Overview

Change the hero section from orange gradient background + right-side photo card to a full-bleed background photo (`hero.jpeg`) with dark overlay. Add the athlete's motto. Center-align all text. Remove the right-side photo card.

## Approach

Approach A: Full photo background + dark overlay for text readability.

## Changes

### Background
- `.hero` background: `url('images/hero.jpeg')` with `background-size: cover; background-position: center;`
- Remove current orange gradient
- Dark overlay via `::before`: `rgba(0,0,0,0.55)`
- Keep `.hero-pattern` (subtle stripe pattern on top)

### Layout
- Change from 2-column (`1fr 1fr`) to single column, centered
- Hide `.hero-image` (right-side photo card)
- All text `text-align: center`
- Buttons and stats centered (`justify-content: center`)

### Motto (NEW)
- Text: 「報われるまで努力し続ける」
- English: "Keep striving until the effort pays off"
- Position: directly below the name, above the description
- Style: `font-size: 1.2rem; font-weight: 500; letter-spacing: 3px; opacity: 0.85;`
- Add `data-i18n="hero-motto"` for translation

### Elements Kept
- Hero tag (PRO PADEL PLAYER / JAPAN NATIONAL TEAM)
- Name (KUSHIMA YOSHINO)
- Description text
- Buttons (contact + profile)
- Stats (FIP Ranking + National Team)
- Scroll indicator

## Files to Modify

1. `css/style.css` - Hero section styles (background, layout, new motto class)
2. `index.html` - Remove hero-image, add motto element, center layout
3. `en.html` - Same as index.html
4. `translations.js` - Add `hero-motto` translation key
