# Partnership Benefits Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the 6-card "Sponsorship Benefits" section with a 2-block layout: "What I Bring" (3 large story cards) + "Partnership Benefits" (3 compact cards), shifting tone from corporate advertising to equal partnership.

**Architecture:** Static HTML/CSS site with i18n via `translations.js`. Two HTML files (index.html for JP, en.html for EN) share the same CSS. New CSS classes for the larger "what I bring" cards; existing `.sponsors-benefit-card` reused for the compact partnership cards.

**Tech Stack:** HTML, CSS, vanilla JavaScript (translations.js)

---

### Task 1: Add CSS for "What I Bring" large story cards

**Files:**
- Modify: `css/style.css:800` (insert before `/* ===== Contact ===== */`)
- Modify: `css/style.css:969` (768px breakpoint)
- Modify: `css/style.css:990` (480px breakpoint)

**Step 1: Add new CSS classes**

Insert before the `/* ===== Contact ===== */` comment at line 801 in `css/style.css`:

```css
    /* ===== What I Bring (Story Cards) ===== */
    .what-i-bring-title {
      text-align: center; font-size: 1.4rem; font-weight: 700;
      color: var(--light); margin: 48px 0 24px;
    }
    .what-i-bring-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
      margin-bottom: 48px;
    }
    .what-i-bring-card {
      padding: 36px 24px; border-radius: var(--radius);
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);
      text-align: center; transition: var(--transition);
    }
    .what-i-bring-card:hover {
      border-color: var(--primary);
      box-shadow: 0 0 24px rgba(255,107,0,0.18);
      transform: translateY(-4px);
    }
    .what-i-bring-icon {
      width: 56px; height: 56px; margin: 0 auto 20px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(255,107,0,0.15), rgba(255,45,0,0.10));
      color: var(--primary);
    }
    .what-i-bring-card h4 {
      font-size: 1.3rem; font-weight: 700; color: var(--light); margin-bottom: 12px;
    }
    .what-i-bring-card p {
      font-size: 0.85rem; color: var(--gray); line-height: 1.6; margin: 0;
    }
```

**Step 2: Add responsive breakpoints**

At `@media (max-width: 768px)` add after `.sponsors-benefits-grid` rule:
```css
      .what-i-bring-grid { grid-template-columns: 1fr; }
```

At `@media (max-width: 480px)` add after `.sponsors-benefits-grid` rule:
```css
      .what-i-bring-grid { grid-template-columns: 1fr; }
```

**Step 3: Commit**

```bash
git add css/style.css
git commit -m "style: add CSS for What I Bring story cards layout"
```

---

### Task 2: Replace benefits HTML in index.html (Japanese)

**Files:**
- Modify: `index.html:575-624`

**Step 1: Replace the sponsors benefits block**

Replace from `<!-- ===== スポンサーメリット ===== -->` (line 575) through the CTA `</div>` (line 624) with:

```html
      <!-- ===== 私にできること ===== -->
      <h3 class="what-i-bring-title fade-in" data-i18n="what-i-bring-heading">私にできること</h3>
      <div class="what-i-bring-grid stagger-children">
        <div class="what-i-bring-card fade-in">
          <div class="what-i-bring-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          </div>
          <h4 data-i18n="wib-1-title">世界の舞台で戦う</h4>
          <p data-i18n="wib-1-desc">年間15以上の国際大会に出場し、10カ国以上を転戦。日本代表として世界のトップに挑み続けます</p>
        </div>
        <div class="what-i-bring-card fade-in">
          <div class="what-i-bring-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
          <h4 data-i18n="wib-2-title">パデルを日本に届ける</h4>
          <p data-i18n="wib-2-desc">体験会やイベントを通じて、まだ知られていないパデルの魅力を一人でも多くの人に届けます</p>
        </div>
        <div class="what-i-bring-card fade-in">
          <div class="what-i-bring-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
          </div>
          <h4 data-i18n="wib-3-title">ストーリーを発信する</h4>
          <p data-i18n="wib-3-desc">SNSやメディアを通じて、挑戦の裏側やパデルの世界をリアルタイムで届けます</p>
        </div>
      </div>

      <!-- ===== パートナーシップのメリット ===== -->
      <h3 class="sponsors-benefits-title fade-in" data-i18n="partnership-benefits-heading">パートナーシップのメリット</h3>
      <div class="sponsors-benefits-grid stagger-children">
        <div class="sponsors-benefit-card fade-in">
          <div class="sponsors-benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/><path d="M12 3v12"/><circle cx="12" cy="21" r="1"/><path d="M3 15l9 6 9-6"/></svg>
          </div>
          <h4 data-i18n="partner-1-title">ブランドを世界へ</h4>
          <p data-i18n="partner-1-desc">ウェア・用具・大会会場でのロゴ露出を通じて、あなたのブランドを世界に届けます</p>
        </div>
        <div class="sponsors-benefit-card fade-in">
          <div class="sponsors-benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          </div>
          <h4 data-i18n="partner-2-title">一緒に届ける</h4>
          <p data-i18n="partner-2-desc">SNS・メディア・公式サイトでの共同発信で、パートナーとしてのストーリーを一緒に届けます</p>
        </div>
        <div class="sponsors-benefit-card fade-in">
          <div class="sponsors-benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h4 data-i18n="partner-3-title">体験を共創する</h4>
          <p data-i18n="partner-3-desc">パデル体験会やブランディングイベントを一緒に企画・開催します</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 48px;">
        <a href="#contact" class="btn btn-primary" data-i18n="partnership-cta-btn">パートナーシップについて問い合わせる</a>
      </div>
```

**Step 2: Verify in browser, then commit**

```bash
git add index.html
git commit -m "feat: replace sponsorship benefits with partnership blocks in index.html"
```

---

### Task 3: Replace benefits HTML in en.html (English)

**Files:**
- Modify: `en.html:575-624`

**Step 1: Replace the sponsors benefits block**

Replace from `<!-- ===== Sponsor Benefits ===== -->` (line 575) through the CTA `</div>` (line 624) with:

```html
      <!-- ===== What I Bring ===== -->
      <h3 class="what-i-bring-title fade-in">What I Bring</h3>
      <div class="what-i-bring-grid stagger-children">
        <div class="what-i-bring-card fade-in">
          <div class="what-i-bring-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          </div>
          <h4>Compete on the World Stage</h4>
          <p>Competing in 15+ international tournaments across 10+ countries each year, challenging the world's best as Japan's representative</p>
        </div>
        <div class="what-i-bring-card fade-in">
          <div class="what-i-bring-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
          <h4>Bring Padel to Japan</h4>
          <p>Delivering the excitement of padel to as many people as possible through experience sessions and events</p>
        </div>
        <div class="what-i-bring-card fade-in">
          <div class="what-i-bring-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
          </div>
          <h4>Share the Story</h4>
          <p>Sharing the behind-the-scenes of each challenge and the world of padel in real-time through SNS and media</p>
        </div>
      </div>

      <!-- ===== Partnership Benefits ===== -->
      <h3 class="sponsors-benefits-title fade-in">Partnership Benefits</h3>
      <div class="sponsors-benefits-grid stagger-children">
        <div class="sponsors-benefit-card fade-in">
          <div class="sponsors-benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/><path d="M12 3v12"/><circle cx="12" cy="21" r="1"/><path d="M3 15l9 6 9-6"/></svg>
          </div>
          <h4>Take Your Brand Global</h4>
          <p>Your brand reaches the world through logo placement on apparel, equipment, and tournament venues</p>
        </div>
        <div class="sponsors-benefit-card fade-in">
          <div class="sponsors-benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          </div>
          <h4>Tell It Together</h4>
          <p>Joint storytelling through SNS, media coverage, and official website as true partners</p>
        </div>
        <div class="sponsors-benefit-card fade-in">
          <div class="sponsors-benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h4>Co-create Experiences</h4>
          <p>Jointly plan and host padel experience sessions and branding events</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 48px;">
        <a href="#contact" class="btn btn-primary">Inquire About Partnership</a>
      </div>
```

**Step 2: Verify in browser, then commit**

```bash
git add en.html
git commit -m "feat: replace sponsorship benefits with partnership blocks in en.html"
```

---

### Task 4: Update translations.js with new i18n keys

**Files:**
- Modify: `translations.js:137-153`

**Step 1: Replace old sponsor benefit keys with new partnership keys**

Replace lines 147-153 (from `'sponsors-cta-title'` through `'sponsors-cta-btn'`) with:

```javascript
  'sponsors-cta-title': 'Partnership Information',
  'sponsors-cta-desc': 'Padel is one of the fastest-growing sports in the world. Would you like to create the future of padel together?',
  // What I Bring
  'what-i-bring-heading': 'What I Bring',
  'wib-1-title': 'Compete on the World Stage',
  'wib-1-desc': 'Competing in 15+ international tournaments across 10+ countries each year, challenging the world\'s best as Japan\'s representative',
  'wib-2-title': 'Bring Padel to Japan',
  'wib-2-desc': 'Delivering the excitement of padel to as many people as possible through experience sessions and events',
  'wib-3-title': 'Share the Story',
  'wib-3-desc': 'Sharing the behind-the-scenes of each challenge and the world of padel in real-time through SNS and media',
  // Partnership Benefits
  'partnership-benefits-heading': 'Partnership Benefits',
  'partner-1-title': 'Take Your Brand Global',
  'partner-1-desc': 'Your brand reaches the world through logo placement on apparel, equipment, and tournament venues',
  'partner-2-title': 'Tell It Together',
  'partner-2-desc': 'Joint storytelling through SNS, media coverage, and official website as true partners',
  'partner-3-title': 'Co-create Experiences',
  'partner-3-desc': 'Jointly plan and host padel experience sessions and branding events',
  'partnership-cta-btn': 'Inquire About Partnership',
```

**Step 2: Verify language toggle in browser, then commit**

```bash
git add translations.js
git commit -m "feat: update i18n keys for partnership benefits section"
```

---

### Task 5: Visual QA and final verification

**Step 1:** Desktop (1200px+) - verify 3+3 card grid, hover effects, animations
**Step 2:** Mobile (480px) - verify single column stack, readable text
**Step 3:** Language toggle JP/EN - verify all keys resolve correctly
**Step 4:** Commit any fixes if needed
