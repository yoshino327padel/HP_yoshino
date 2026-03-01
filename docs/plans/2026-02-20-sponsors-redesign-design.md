# Sponsors Section Redesign - インパクトファースト

**Date**: 2026-02-20
**Status**: Approved

## Goal

スポンサーセクションを、潜在スポンサーの目を引く内容に改善する。実績数字・パデル市場の成長性・詳細なメリットカードを追加。

## Structure (Top to Bottom)

### 1. Sponsor Grid (Improved)
- 6社のカードデザインを改善
- ダッシュボーダー → 実線 + rgba(255,255,255,0.06) 背景
- ロゴを中央に大きく表示
- ホバー時にオレンジグロー

### 2. Stats Bar (NEW)
- 4つの実績数字カードを横並び
- カウントアップアニメーション（スクロール連動）
- 仮の数字（後で差し替え）:
  - XX+ 年間大会出場数
  - XX+ 訪問国数
  - XX+ SNSフォロワー
  - XX+ メディア掲載実績

### 3. Padel Market Growth (NEW)
- 見出し: 世界で最も急成長しているスポーツ
- 短い訴求文でパデル市場の将来性をアピール
- 全世界2,500万人以上のプレーヤー、先行者メリット

### 4. Sponsor Benefits (Expanded)
- 4つのチェックマークリスト → 6つのアイコン付きカードグリッド（3列×2行）
- 各カード: SVGアイコン + タイトル + 1行説明
  1. ウェア・用具ロゴ掲載
  2. SNS・メディア露出
  3. 国際大会での露出
  4. パデル体験会の実施
  5. イベント共同開催
  6. 公式サイト掲載

### 5. CTA Button
- 既存のまま維持

## Scope
- index.html, en.html のスポンサーセクションHTML変更
- css/style.css のスポンサー関連CSS追加・変更
- JS: stats barのカウントアップ（既存のIntersectionObserver活用）
