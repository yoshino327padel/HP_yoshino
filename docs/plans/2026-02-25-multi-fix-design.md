# Multi-Fix Design: Hero cleanup, Results headings, Stats, Partnership background

**Date:** 2026-02-25
**Status:** Approved

## Changes

### 1. Hero photo card removal
Remove `<div class="hero-image">...</div>` from HTML (already hidden via CSS). Clean up unused CSS for `.hero-img`, `.hero-image-placeholder`.

### 2. Results section headings fix + color coding
Current `color: var(--dark)` = `#ffffff` (invisible on white/gray bg). Fix:
- **Premier Padel**: `color: #9d174d` (pink/magenta) + matching left border
- **Cupra FIP Tour**: `color: var(--primary)` (#ff6b00 orange) + matching left border
- Convert inline styles to CSS classes `.results-heading-premier` and `.results-heading-fip`

### 3. Stats bar update
- SNS followers: `data-count="3000"` → `data-count="1000"`
- Remove media mentions stat (4th item)
- Change grid from 4 columns to 3: `grid-template-columns: repeat(3, 1fr)`

### 4. Partnership benefits background
- Add `partner.jpg` as background to the partnership benefits area
- Dark overlay for text readability
- White text on dark overlay
- Wrap benefits section in a container with the background

## Files to Modify

1. `css/style.css` - Results headings classes, stats grid, partnership background, hero cleanup
2. `index.html` - Remove hero-image div, fix results headings, update stats, wrap partnership section
3. `en.html` - Same changes as index.html
4. `translations.js` - Remove media stat translation key
