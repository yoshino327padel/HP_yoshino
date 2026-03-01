# Inferno Design - 黒×オレンジ リデザイン

**Date**: 2026-02-20
**Status**: Approved
**Concept**: 黒い闇の中から燃え上がる炎のようなエネルギー

## Goals

1. カラースキームを黒×水色から**黒×オレンジ（炎・エネルギー系）**に変更
2. アニメーションを追加してよりダイナミックなサイトにする
3. パフォーマンスを維持しつつ、ヒーローセクションに集中的な演出

## Color Palette

### CSS Variables

| Variable | Before | After | Purpose |
|----------|--------|-------|---------|
| `--primary` | `#3b82f6` | `#ff6b00` | Main orange |
| `--primary-light` | `#60a5fa` | `#ff8c00` | Light orange |
| `--accent` | `#22d3ee` | `#ff2d00` | Red-orange accent |
| `--accent-light` | `#34d399` | `#ffaa00` | Amber gold |
| `--dark` | `#0a0f1e` | `#0a0a0a` | Pure black base |
| `--light` | `#f0f4f8` | `#f0f0f0` | Text (near-white) |
| `--gray` | `#94a3b8` | `#9ca3af` | Mid gray |
| `--gray-light` | `#111827` | `#111111` | Card background |
| `--bg-alt` | `#0d1321` | `#0d0d0d` | Alternate section bg |

### Gradients

- **Buttons**: `linear-gradient(135deg, #ff6b00, #ff2d00)` (orange → red)
- **Hero background**: Radial gradients with orange light sources pulsating in darkness
- **Section header tags**: Orange → amber gradient text
- **Table headers**: `linear-gradient(135deg, #1a1a1a, #111111)` with orange border

## Hero Section

### Background
- Replace blue/cyan mesh gradient with **orange/red flame gradients**
- Keep `meshMove` animation, change colors only
- Dark orange light sources pulsate in the background

### Canvas Fire Particle Effect (NEW)
- `<canvas>` element overlaying the hero section only
- **100-150 fire sparks** rising slowly with lateral sway
- Particle size: 2-5px circles
- Colors: Random from `#ff6b00`, `#ff2d00`, `#ffaa00`
- Spawned at bottom, fade out as they rise (opacity fadeout)
- Rendered with `requestAnimationFrame`
- **Performance**: Stop rendering when hero is off-screen (IntersectionObserver)

### Name Glitch Animation (NEW)
- "KUSHIMA YOSHINO" glitches briefly on page load
- CSS `@keyframes glitch` with RGB separation effect
- ~0.5s duration, then static
- Implemented with `::before` / `::after` pseudo-elements (no JS needed)

### Stats
- Keep existing count-up animation
- Change number color to orange

## Hover Effects (Enhanced)

### Cards
- Orange glow: `box-shadow: 0 0 20px rgba(255, 107, 0, 0.3)` on hover
- Keep existing `translateY(-8px)`
- Border transitions to orange on hover

### Buttons
- Ripple effect: Orange ripple expanding from click position (CSS `::after` + JS click position)
- Enhanced `box-shadow` spreading like flame on hover
- `transform: translateY(-3px) scale(1.02)` for lift effect

### Nav Links
- Underline color: blue → orange
- Text color transitions to orange on hover

### Table Rows
- Left border and highlight color changed to orange

## Scroll Animations (Enhanced)

### Parallax
- Hero background gradient moves with scroll (`translateY(scroll * 0.3)`)
- Section watermarks shift slightly with scroll

### Section Entrance (Staggered per section)
- **About**: Slide in from left
- **Achievements**: Cards appear one by one (stagger: 0.1s)
- **Schedule**: Slide in from right
- **Gallery**: Scale in (small → large)
- **News**: Fade in from bottom (existing)
- **Contact**: Two columns slide in from left and right
- Adjusted `IntersectionObserver` threshold for natural timing

### Timeline
- Keep existing scroll-linked line growth
- Change line color to orange
- Orange flash on each item appearance

## Scope

### In scope
- All CSS color variable changes
- Hero canvas particle system (new JS file)
- Glitch text animation (CSS)
- Enhanced hover effects (CSS + minimal JS for ripple)
- Scroll parallax (JS enhancement)
- Section entrance animation diversification (CSS + data attributes)
- All 3 HTML pages (index.html, en.html, results.html)

### Out of scope
- Layout changes
- Font changes
- Content changes
- New sections
- Mobile-specific animation differences (use reduced-motion media query)
