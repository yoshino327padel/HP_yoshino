# Design: Individual Support & Partnership Detail Pages

## Overview

Split the sponsor/partner section into two distinct experiences by creating dedicated detail pages:
- **Individual Support page** — for fans and individuals who want to support Kushima Yoshino
- **Partnership page** — for companies interested in corporate sponsorship

The current Partners section on the top page remains unchanged in layout; only two navigation buttons are added.

## Decision Log

| Question | Answer |
|----------|--------|
| Payment method for individual support | TBD — design UI first, add payment links later |
| Support plan tiers | 3 plans (placeholder amounts: 1,000 / 3,000 / 10,000 yen) |
| Page placement | Separate pages (not tabs, not inline) |
| Navigation from top page | Add 2 buttons to existing Partners section |
| Page design | Unified design — same header/footer/CSS as main site |

## Changes to Existing Pages

### index.html / en.html — Partners Section

**Minimal change**: Replace the existing "パートナーシップについて問い合わせる" button area with two buttons:

```
[個人で応援する →]  [パートナーシップ詳細 →]
```

- "個人で応援する" → links to `support.html`
- "パートナーシップ詳細" → links to `partnership.html`
- Button styles: `btn btn-primary` + `btn btn-outline` (existing classes)
- Everything else in the section stays untouched

## New Page: Individual Support (`support.html` / `support-en.html`)

### Structure

1. **Header** — Same nav as main site, links back to `index.html` sections
2. **Hero area** — Title: "串間よし乃を応援する" / Subtitle message
3. **Support plans** — 3-card grid:
   - 応援プラン (¥1,000): お礼メール
   - サポータープラン (¥3,000): お礼メール + 活動レポート
   - プレミアムプラン (¥10,000): お礼メール + 活動レポート + 限定コンテンツ + サイト名前掲載
   - Each card has a "支援する" button (placeholder link for now)
4. **How funds are used** — Brief section: 遠征費 / 用具費 / トレーニング費
5. **Footer** — Same as main site

### Notes
- Plan amounts and perks are placeholders — easily editable
- "支援する" buttons link to `#` for now (external payment service TBD)
- JP/EN versions: `support.html` (JP) / `support-en.html` (EN)

## New Page: Partnership Detail (`partnership.html` / `partnership-en.html`)

### Structure

1. **Header** — Same nav as main site
2. **Hero area** — Title: "パートナーシップのご案内"
3. **About padel market** — Expanded version of current CTA block (market data, growth)
4. **Partnership benefits** — Expanded version of current 6 benefit cards with more detail
5. **Partnership formats** — Examples: logo placement, equipment provision, event sponsorship
6. **Current partners** — Same logo grid as top page
7. **Contact CTA** — Link to contact form on top page (`index.html#contact`)
8. **Footer** — Same as main site

### Notes
- Content is an expanded version of what already exists in the Partners section
- JP/EN versions: `partnership.html` (JP) / `partnership-en.html` (EN)

## New Files

| File | Purpose |
|------|---------|
| `support.html` | Individual support page (JP) |
| `support-en.html` | Individual support page (EN) |
| `partnership.html` | Partnership detail page (JP) |
| `partnership-en.html` | Partnership detail page (EN) |

## Modified Files

| File | Change |
|------|--------|
| `index.html` | Add 2 buttons to Partners section |
| `en.html` | Add 2 buttons to Partners section |
| `css/style.css` | Add styles for support plan cards, page hero, etc. |
| `translations.js` | Add translation keys for new pages (if needed) |

## Design Constraints

- Current Partners section layout/width unchanged
- Reuse existing CSS classes and design patterns
- Same header/footer across all pages
- Mobile responsive (follow existing breakpoints)
- Plan amounts and payment links are placeholders
