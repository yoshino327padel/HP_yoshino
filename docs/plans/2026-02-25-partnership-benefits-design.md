# Partnership Benefits Redesign Design

**Date:** 2026-02-25
**Status:** Approved

## Overview

Redesign the "Sponsorship Benefits" section to "Partnership Benefits", shifting the tone from corporate advertising to an equal, collaborative relationship. The new design communicates what the athlete can offer and makes visitors want to support the world challenge.

## Target Audience

- Corporate partners (marketing managers, executives)
- Individual supporters (crowdfunding, personal sponsorship)

## Design: A+B Mix (Story + Concrete Benefits)

### Structure Change

**Before:** Single block of 6 uniform benefit cards titled "Sponsorship Benefits"

**After:** Two blocks with distinct purposes:

### Block 1: 「私にできること」/ "What I Bring" (3 large story cards)

Emotional, story-driven cards showing the athlete's value and challenge.

| # | JP キャッチコピー | JP 説明 | EN Catchphrase | EN Description | Icon |
|---|-----------------|---------|----------------|----------------|------|
| 1 | 世界の舞台で戦う | 年間15以上の国際大会に出場し、10カ国以上を転戦。日本代表として世界のトップに挑み続けます | Compete on the World Stage | Competing in 15+ international tournaments across 10+ countries each year, challenging the world's best as Japan's representative | Globe + flag |
| 2 | パデルを日本に届ける | 体験会やイベントを通じて、まだ知られていないパデルの魅力を一人でも多くの人に届けます | Bring Padel to Japan | Delivering the excitement of padel to as many people as possible through experience sessions and events | People + heart |
| 3 | ストーリーを発信する | SNSやメディアを通じて、挑戦の裏側やパデルの世界をリアルタイムで届けます | Share the Story | Sharing the behind-the-scenes of each challenge and the world of padel in real-time through SNS and media | Camera + broadcast |

**Card Design:**
- Larger cards: padding 36px 24px
- Background: `rgba(255,255,255,0.06)` (slightly brighter than current)
- Icon: 56px, gradient background (`rgba(255,107,0,0.15)` to `rgba(255,45,0,0.1)`)
- Catchphrase: 1.3rem, bold (font-weight: 700)
- Description: 0.85rem, gray text
- Hover: orange glow + translateY(-4px)
- Grid: 3 columns, 1 column on tablet/mobile

### Block 2: 「パートナーシップのメリット」/ "Partnership Benefits" (3 compact cards)

Concrete returns reframed with collaborative tone.

| # | JP タイトル | JP 説明 | EN Title | EN Description | Icon |
|---|-----------|---------|----------|----------------|------|
| 1 | ブランドを世界へ | ウェア・用具・大会会場でのロゴ露出を通じて、あなたのブランドを世界に届けます | Take Your Brand Global | Your brand reaches the world through logo placement on apparel, equipment, and tournament venues | Trophy/flag |
| 2 | 一緒に届ける | SNS・メディア・公式サイトでの共同発信で、パートナーとしてのストーリーを一緒に届けます | Tell It Together | Joint storytelling through SNS, media coverage, and official website as true partners | Share/megaphone |
| 3 | 体験を共創する | パデル体験会やブランディングイベントを一緒に企画・開催します | Co-create Experiences | Jointly plan and host padel experience sessions and branding events | Handshake/people |

**Card Design:**
- Current size: padding 28px 20px
- Existing styles maintained for consistency
- Same hover effects as current

### CTA Button

- JP: 「パートナーシップについて問い合わせる」
- EN: "Inquire About Partnership"

## Files to Modify

1. `index.html` - Replace sponsorship benefits HTML (lines ~575-624)
2. `en.html` - Replace sponsorship benefits HTML (lines ~575-624)
3. `css/style.css` - Add styles for new "what I bring" cards (lines ~771-799)
4. `translations.js` - Update i18n keys for new content

## Content Details (JP)

### Block 1 見出し
「私にできること」

### カード1: 世界の舞台で戦う
- キャッチコピー: 世界の舞台で戦う
- 説明: 年間15以上の国際大会に出場し、10カ国以上を転戦。日本代表として世界のトップに挑み続けます

### カード2: パデルを日本に届ける
- キャッチコピー: パデルを日本に届ける
- 説明: 体験会やイベントを通じて、まだ知られていないパデルの魅力を一人でも多くの人に届けます

### カード3: ストーリーを発信する
- キャッチコピー: ストーリーを発信する
- 説明: SNSやメディアを通じて、挑戦の裏側やパデルの世界をリアルタイムで届けます

### Block 2 見出し
「パートナーシップのメリット」

### カード1: ブランドを世界へ
- タイトル: ブランドを世界へ
- 説明: ウェア・用具・大会会場でのロゴ露出を通じて、あなたのブランドを世界に届けます

### カード2: 一緒に届ける
- タイトル: 一緒に届ける
- 説明: SNS・メディア・公式サイトでの共同発信で、パートナーとしてのストーリーを一緒に届けます

### カード3: 体験を共創する
- タイトル: 体験を共創する
- 説明: パデル体験会やブランディングイベントを一緒に企画・開催します
