# White + Orange Theme Redesign Design

**Date:** 2026-02-25
**Status:** Approved

## Overview

Change the site color scheme from dark (black background + red accent) to light (white background + orange accent). Hero section uses orange gradient, footer uses dark orange, body sections alternate between white and light gray.

## Approach

CSS variable one-shot change (Approach A). Update `:root` variables and fix hardcoded color values throughout `style.css`.

## Color Palette

| Variable | Before | After | Purpose |
|----------|--------|-------|---------|
| `--primary` | `#ff6b00` | `#ff6b00` (no change) | Buttons, accents |
| `--primary-light` | `#ff8c00` | `#ff8c00` (no change) | Hover states |
| `--accent` | `#ff2d00` (red) | `#e65c00` (dark orange) | Gradients |
| `--accent-light` | `#ffaa00` | `#ffaa00` (no change) | Gradients |
| `--dark` | `#0a0a0a` | `#ffffff` | Main background |
| `--light` | `#f0f0f0` | `#1a1a1a` | Text color |
| `--gray` | `#9ca3af` | `#6b7280` | Secondary text |
| `--gray-light` | `#111111` | `#f3f4f6` | Alternating section bg |
| `--bg-alt` | `#0d0d0d` | `#f8f8f8` | Body background |
| body color | `#e2e8f0` | `#374151` | Body text |

## Section Backgrounds

| Section | Background |
|---------|-----------|
| Hero | Orange gradient (`#ff6b00` to `#e65c00`) |
| About | White (`#ffffff`) |
| Career | Light gray (`#f3f4f6`) |
| Achievements | White |
| Results | Light gray |
| Schedule | White |
| Gallery | Light gray |
| News | White |
| Partners | Light gray |
| Contact | White |
| Footer | Dark orange (`#e65c00`) |

## Key Changes

- Card backgrounds: `rgba(0,0,0,0.02)` + `border: 1px solid rgba(0,0,0,0.08)`
- Hover glow: orange glow (works well on white)
- Navbar: white bg + subtle bottom border
- Buttons: orange (unchanged), white text
- Shadows: softer, lighter
- All hardcoded `rgba(255,255,255,...)` backgrounds become `rgba(0,0,0,...)`
- All hardcoded `#0d0d0d`, `#111111` backgrounds become white/light gray
- Hero overlay: orange gradient instead of dark gradient
- Footer: dark orange background with white text

## Files to Modify

1. `css/style.css` - All color changes (variables + hardcoded values)
2. `index.html` - Inline styles if any
3. `en.html` - Inline styles if any
