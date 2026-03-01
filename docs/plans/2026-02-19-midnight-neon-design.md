# Midnight Neon Color Scheme Design

## Summary

Redesign the site color scheme from the current light cyan + orange palette to a dark navy base with electric blue and neon green accents. The goal: a modern, powerful look that expresses "an athlete challenging the world."

## Color Palette

### CSS Variables

```css
:root {
  --primary:       #3b82f6;   /* Electric blue */
  --primary-light:  #60a5fa;   /* Light blue */
  --accent:         #22d3ee;   /* Neon cyan */
  --accent-light:   #34d399;   /* Neon green */
  --dark:           #0a0f1e;   /* Deep navy */
  --light:          #f0f4f8;   /* Off-white */
  --gray:           #94a3b8;   /* Medium gray */
  --gray-light:     #111827;   /* Dark card background */
  --bg-alt:         #0d1321;   /* Alternate section background */
}
```

### Derived Colors

- Body text: `#e2e8f0` (light gray-white)
- Paragraph text: `#cbd5e1` (medium light gray)
- Card background: `rgba(255,255,255,0.04)` with `border: 1px solid rgba(255,255,255,0.08)`
- Navigation background: `rgba(10,15,30,0.85)` with blur
- Footer: `#050810` (deeper black)

## Section Backgrounds

Alternating two dark tones for visual rhythm:

| Section | Background |
|---|---|
| Hero | `#050810` -> `#0a0f1e` -> `#111827` gradient |
| About | `#0d1321` |
| Achievements | `#111827` |
| Results | `#0d1321` |
| Schedule | `#111827` |
| Gallery | `#0d1321` |
| News | `#111827` |
| Sponsors | `#0d1321` |
| Contact | `#111827` with subtle gradient |
| Footer | `#050810` |

## Component Changes

### Navigation
- Background: `rgba(10,15,30,0.85)` with backdrop blur
- Scrolled state: `rgba(10,15,30,0.95)`
- Logo text: `var(--light)`, span: `var(--primary)`
- Link color: `var(--gray)` -> hover: `var(--light)`
- Progress bar gradient: `var(--primary)` -> `var(--accent)` -> `var(--accent-light)`
- Border-bottom: `rgba(255,255,255,0.06)`

### Hero
- Gradient: `#050810` -> `#0a0f1e` -> `#111827` (subtle dark progression)
- Overlay radials: primary blue glow + green glow (replacing cyan + orange)
- Tag border: `rgba(255,255,255,0.15)` (keep)
- Stats: white text (keep)

### Buttons
- Primary button: `linear-gradient(135deg, var(--accent), var(--accent-light))` (cyan -> green)
- Shadow: `rgba(34,211,238,0.3)`
- Outline button: Keep semi-transparent white border (works on dark)

### Cards (Achievement, Schedule, Sponsor, News)
- Background: `rgba(255,255,255,0.04)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Hover: `rgba(255,255,255,0.08)` + stronger shadow
- Text: headings `var(--light)`, body `#cbd5e1`

### Tables (Results, Profile)
- Header: keep `linear-gradient(135deg, var(--dark), #1a2744)` or slightly adjust
- Body background: transparent (inherits section dark)
- Row text: `#e2e8f0`
- Row hover: `rgba(59,130,246,0.08)`
- Year divider: `rgba(255,255,255,0.06)` background

### Timeline
- Line gradient: `var(--primary)` -> `var(--accent)` -> `var(--accent-light)`
- Dot: `var(--primary)` for normal, `var(--accent-light)` for highlight
- Year text: `var(--primary)` / `var(--accent-light)` for highlight

### Gallery Tabs
- Default: `border: 1.5px solid rgba(255,255,255,0.12)`, `color: var(--gray)`
- Active: `linear-gradient(135deg, var(--primary), var(--accent))` with glow shadow

### Form
- Input background: `rgba(255,255,255,0.06)`
- Input border: `rgba(255,255,255,0.12)`
- Focus: `border-color: var(--primary)`, shadow `rgba(59,130,246,0.15)`
- Submit button: `linear-gradient(135deg, var(--accent), var(--accent-light))`

### Badges
- Keep ALL existing badge colors (result badges, news tags, medal badges, category badges)
- These pastel colors remain readable on dark backgrounds

### Sponsor Cards
- Border: `rgba(255,255,255,0.12)`
- Name/category text: `var(--light)` / `var(--gray)`
- Logo opacity: 0.12 (slightly higher for dark bg visibility)

## Files to Modify

1. `css/style.css` - All CSS variables and color references
2. `css/animations.css` - Animation color references
3. `index.html` - Inline styles (badge colors, gradients, text colors)
4. `en.html` - Mirror all index.html inline style changes
5. `results.html` - Table and header colors

## Out of Scope

- Layout changes (no structural modifications)
- Font changes
- Badge color changes (keep existing)
- Image changes
- JavaScript logic changes
