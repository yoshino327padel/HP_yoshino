# Individual Support & Partnership Pages — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create dedicated support (individual) and partnership (corporate) detail pages, linked from the existing Partners section on the top page.

**Architecture:** Two new standalone HTML pages (JP + EN = 4 files) using the same `page-header` pattern as `results.html`. Each page shares the site's CSS, fonts, and footer. The existing Partners section gets two link buttons added. New CSS goes into `css/style.css`.

**Tech Stack:** Static HTML/CSS, existing `translations.js` for JP pages, no build tools.

---

### Task 1: Add CSS for support plan cards and detail page sections

**Files:**
- Modify: `css/style.css` (append before the responsive `@media` block at line ~1080)

**Step 1: Add support plan card styles and detail page styles**

Append the following CSS before the `@media (max-width: 1024px)` block (line 1080):

```css
/* ===== Support Plan Cards ===== */
.support-plans {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  max-width: 900px; margin: 0 auto 64px;
}
.support-plan-card {
  padding: 40px 28px; border-radius: var(--radius);
  background: #ffffff; border: 2px solid rgba(0,0,0,0.08);
  text-align: center; transition: var(--transition);
  position: relative;
}
.support-plan-card.featured {
  border-color: var(--primary);
  box-shadow: 0 4px 24px rgba(255,107,0,0.15);
}
.support-plan-card.featured::before {
  content: 'おすすめ'; position: absolute; top: -12px; left: 50%;
  transform: translateX(-50%); background: var(--primary); color: #ffffff;
  font-size: 0.7rem; font-weight: 700; padding: 4px 16px; border-radius: 50px;
}
.support-plan-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}
.support-plan-name {
  font-size: 1.1rem; font-weight: 700; color: var(--light); margin-bottom: 8px;
}
.support-plan-price {
  font-family: 'Montserrat', sans-serif; font-size: 2.2rem; font-weight: 800;
  color: var(--primary); margin-bottom: 4px;
}
.support-plan-price span { font-size: 0.9rem; font-weight: 600; }
.support-plan-period {
  font-size: 0.8rem; color: var(--gray); margin-bottom: 24px;
}
.support-plan-features {
  list-style: none; padding: 0; margin: 0 0 32px; text-align: left;
}
.support-plan-features li {
  font-size: 0.85rem; color: #4b5563; padding: 8px 0;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  display: flex; align-items: center; gap: 8px;
}
.support-plan-features li::before {
  content: '✓'; color: var(--primary); font-weight: 700; flex-shrink: 0;
}
.support-plan-btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 12px 32px; border-radius: 50px; font-weight: 600;
  font-size: 0.85rem; transition: var(--transition); cursor: pointer;
  border: 2px solid var(--primary); color: var(--primary); background: transparent;
  width: 100%; text-decoration: none;
}
.support-plan-btn:hover {
  background: var(--primary); color: #ffffff;
}
.support-plan-card.featured .support-plan-btn {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #ffffff; border-color: transparent;
  box-shadow: 0 4px 16px rgba(255,107,0,0.3);
}
.support-plan-card.featured .support-plan-btn:hover {
  box-shadow: 0 8px 32px rgba(255,107,0,0.4);
  transform: translateY(-2px);
}

/* ===== Fund Usage Section ===== */
.fund-usage {
  max-width: 900px; margin: 0 auto;
}
.fund-usage-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  margin-top: 32px;
}
.fund-usage-card {
  text-align: center; padding: 32px 20px; border-radius: var(--radius);
  background: rgba(0,0,0,0.02); border: 1px solid rgba(0,0,0,0.08);
}
.fund-usage-icon {
  width: 56px; height: 56px; margin: 0 auto 16px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%; background: rgba(255,107,0,0.1); color: var(--primary);
}
.fund-usage-card h4 {
  font-size: 0.95rem; font-weight: 600; color: var(--light); margin-bottom: 8px;
}
.fund-usage-card p {
  font-size: 0.82rem; color: var(--gray); line-height: 1.6; margin: 0;
}

/* ===== Detail Page Sections ===== */
.detail-section {
  max-width: 1200px; margin: 0 auto; padding: 64px 24px;
}
.detail-section-title {
  font-size: 1.5rem; font-weight: 700; color: var(--light);
  text-align: center; margin-bottom: 12px;
}
.detail-section-subtitle {
  font-size: 0.95rem; color: var(--gray); text-align: center;
  max-width: 600px; margin: 0 auto 40px; line-height: 1.8;
}
.detail-section + .detail-section {
  border-top: 1px solid rgba(0,0,0,0.08);
}

/* ===== Partnership Format Cards ===== */
.partnership-formats {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
}
.partnership-format-card {
  padding: 32px 24px; border-radius: var(--radius);
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08);
  text-align: center; transition: var(--transition);
}
.partnership-format-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
.partnership-format-icon {
  width: 56px; height: 56px; margin: 0 auto 16px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%; background: rgba(255,107,0,0.1); color: var(--primary);
}
.partnership-format-card h4 {
  font-size: 0.95rem; font-weight: 600; color: var(--light); margin-bottom: 8px;
}
.partnership-format-card p {
  font-size: 0.82rem; color: var(--gray); line-height: 1.6; margin: 0;
}

/* ===== Detail Page CTA ===== */
.detail-cta {
  text-align: center; padding: 56px 24px; margin: 0;
  background: linear-gradient(160deg, #ff6b00 0%, #e65c00 100%);
  color: #ffffff; position: relative; overflow: hidden;
}
.detail-cta::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 30% 0%, rgba(255,107,0,0.15) 0%, transparent 60%);
}
.detail-cta h3 { font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; position: relative; }
.detail-cta p {
  font-size: 0.95rem; opacity: 0.85; margin-bottom: 32px;
  max-width: 600px; margin-left: auto; margin-right: auto; position: relative;
}
.detail-cta .btn { position: relative; }

/* ===== Sponsor Buttons Row ===== */
.sponsors-buttons {
  display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
}

/* btn-outline-dark: outline button for light backgrounds */
.btn-outline-dark {
  background: transparent; color: var(--light);
  border: 1.5px solid rgba(0,0,0,0.2);
}
.btn-outline-dark:hover {
  background: rgba(0,0,0,0.05); border-color: var(--primary); color: var(--primary);
  transform: translateY(-3px);
}
```

**Step 2: Add responsive overrides inside existing media queries**

Inside the `@media (max-width: 768px)` block, append:
```css
.support-plans { grid-template-columns: 1fr; max-width: 400px; }
.fund-usage-grid { grid-template-columns: 1fr; }
.partnership-formats { grid-template-columns: 1fr; }
.sponsors-buttons { flex-direction: column; align-items: center; }
```

Inside the `@media (max-width: 480px)` block, append:
```css
.support-plan-price { font-size: 1.8rem; }
.detail-section { padding: 48px 16px; }
```

**Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add CSS for support plan cards and detail pages"
```

---

### Task 2: Add link buttons to Partners section in index.html

**Files:**
- Modify: `index.html` — lines 637-638

**Step 1: Replace the existing single button with two buttons**

Find (line 637-638):
```html
      <div style="text-align: center; margin-top: 48px;">
        <a href="#contact" class="btn btn-primary" data-i18n="partnership-cta-btn" onclick="setTimeout(function(){document.getElementById('category').value='sponsor'},100)">パートナーシップについて問い合わせる</a>
      </div>
```

Replace with:
```html
      <div class="sponsors-buttons" style="margin-top: 48px;">
        <a href="support.html" class="btn btn-primary" data-i18n="sponsors-btn-support">個人で応援する</a>
        <a href="partnership.html" class="btn btn-outline" data-i18n="sponsors-btn-partnership">パートナーシップ詳細</a>
      </div>
```

**Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add support & partnership link buttons to index.html"
```

---

### Task 3: Add link buttons to Partners section in en.html

**Files:**
- Modify: `en.html` — lines 637-638

**Step 1: Replace the existing single button with two buttons**

Find (line 637-638):
```html
      <div style="text-align: center; margin-top: 48px;">
        <a href="#contact" class="btn btn-primary" onclick="setTimeout(function(){document.getElementById('category').value='sponsor'},100)">Inquire About Partnership</a>
      </div>
```

Replace with:
```html
      <div class="sponsors-buttons" style="margin-top: 48px;">
        <a href="support-en.html" class="btn btn-primary">Support Yoshino</a>
        <a href="partnership-en.html" class="btn btn-outline">Partnership Details</a>
      </div>
```

**Step 2: Commit**

```bash
git add en.html
git commit -m "feat: add support & partnership link buttons to en.html"
```

---

### Task 4: Add translation keys to translations.js

**Files:**
- Modify: `translations.js` — after line 171 (after `'partnership-cta-btn'`)

**Step 1: Add new keys**

After the line `'partnership-cta-btn': 'Inquire About Partnership',` add:

```javascript
  'sponsors-btn-support': 'Support Yoshino',
  'sponsors-btn-partnership': 'Partnership Details',
```

**Step 2: Commit**

```bash
git add translations.js
git commit -m "feat: add translation keys for support/partnership buttons"
```

---

### Task 5: Create support.html (JP individual support page)

**Files:**
- Create: `support.html`

**Step 1: Create the file**

The page follows the `results.html` pattern: `page-header` → content → footer. It uses `translations.js` and `data-i18n` attributes for JP/EN switching.

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>応援する | 串間よし乃 公式サイト</title>
  <meta name="description" content="パデル選手串間よし乃を応援する。個人サポータープランのご案内。">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/animations.css">
</head>
<body>

  <div class="page-header">
    <div class="page-header-inner">
      <div class="lang-switch" style="float: right; margin-top: 4px; display: flex; border-radius: 6px; overflow: hidden; border: 1.5px solid rgba(255,255,255,0.5);">
        <button class="active" onclick="switchLang('ja')" style="width: 36px; padding: 4px 0; border: none; cursor: pointer; font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; background: rgba(255,255,255,0.2); color: #fff; transition: 0.3s ease;">JP</button>
        <button onclick="switchLang('en')" style="width: 36px; padding: 4px 0; border: none; cursor: pointer; font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; background: transparent; color: rgba(255,255,255,0.6); transition: 0.3s ease;">EN</button>
      </div>
      <a href="index.html" class="back" data-i18n="support-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        トップページに戻る
      </a>
      <h1 data-i18n="support-page-title">串間よし乃を応援する</h1>
      <p data-i18n="support-page-subtitle">あなたの応援が、世界への挑戦を支えます</p>
    </div>
  </div>

  <!-- ===== Support Plans ===== -->
  <div class="detail-section">
    <h2 class="detail-section-title" data-i18n="support-plans-title">サポートプラン</h2>
    <p class="detail-section-subtitle" data-i18n="support-plans-desc">あなたに合った形で応援していただけます。すべてのご支援が、世界への挑戦の力になります。</p>

    <div class="support-plans">
      <!-- Plan 1: 応援プラン -->
      <div class="support-plan-card">
        <div class="support-plan-name" data-i18n="support-plan-1-name">応援プラン</div>
        <div class="support-plan-price">¥1,000<span data-i18n="support-plan-unit">/月</span></div>
        <div class="support-plan-period" data-i18n="support-plan-1-period">気軽に応援</div>
        <ul class="support-plan-features">
          <li data-i18n="support-plan-1-f1">お礼メール</li>
        </ul>
        <a href="#" class="support-plan-btn" data-i18n="support-plan-btn">支援する</a>
      </div>

      <!-- Plan 2: サポータープラン -->
      <div class="support-plan-card featured">
        <div class="support-plan-name" data-i18n="support-plan-2-name">サポータープラン</div>
        <div class="support-plan-price">¥3,000<span data-i18n="support-plan-unit">/月</span></div>
        <div class="support-plan-period" data-i18n="support-plan-2-period">活動を一緒に見守る</div>
        <ul class="support-plan-features">
          <li data-i18n="support-plan-2-f1">お礼メール</li>
          <li data-i18n="support-plan-2-f2">月次活動レポート</li>
        </ul>
        <a href="#" class="support-plan-btn" data-i18n="support-plan-btn">支援する</a>
      </div>

      <!-- Plan 3: プレミアムプラン -->
      <div class="support-plan-card">
        <div class="support-plan-name" data-i18n="support-plan-3-name">プレミアムプラン</div>
        <div class="support-plan-price">¥10,000<span data-i18n="support-plan-unit">/月</span></div>
        <div class="support-plan-period" data-i18n="support-plan-3-period">全力で応援する</div>
        <ul class="support-plan-features">
          <li data-i18n="support-plan-3-f1">お礼メール</li>
          <li data-i18n="support-plan-3-f2">月次活動レポート</li>
          <li data-i18n="support-plan-3-f3">限定コンテンツ</li>
          <li data-i18n="support-plan-3-f4">公式サイトにお名前掲載</li>
        </ul>
        <a href="#" class="support-plan-btn" data-i18n="support-plan-btn">支援する</a>
      </div>
    </div>
  </div>

  <!-- ===== Fund Usage ===== -->
  <div class="detail-section" style="background: var(--gray-light);">
    <div class="fund-usage">
      <h2 class="detail-section-title" data-i18n="fund-title">ご支援の使い道</h2>
      <p class="detail-section-subtitle" data-i18n="fund-desc">いただいたご支援は、世界で戦うための活動費に充てさせていただきます。</p>
      <div class="fund-usage-grid">
        <div class="fund-usage-card">
          <div class="fund-usage-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          </div>
          <h4 data-i18n="fund-1-title">海外遠征費</h4>
          <p data-i18n="fund-1-desc">年間15以上の国際大会への渡航費・滞在費。世界ランキング向上のため欠かせない費用です。</p>
        </div>
        <div class="fund-usage-card">
          <div class="fund-usage-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
          </div>
          <h4 data-i18n="fund-2-title">用具・トレーニング費</h4>
          <p data-i18n="fund-2-desc">ラケット、シューズなどの用具代やフィジカルトレーニング、コーチング費用に充てます。</p>
        </div>
        <div class="fund-usage-card">
          <div class="fund-usage-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
          </div>
          <h4 data-i18n="fund-3-title">パデル普及活動</h4>
          <p data-i18n="fund-3-desc">体験会やイベントの開催費用。日本でのパデル普及に取り組んでいます。</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== CTA ===== -->
  <div class="detail-cta">
    <h3 data-i18n="support-cta-title">一緒に世界を目指しませんか？</h3>
    <p data-i18n="support-cta-desc">あなたのご支援が、日本パデルの歴史を作る力になります。</p>
    <a href="index.html#contact" class="btn btn-outline" data-i18n="support-cta-btn">お問い合わせはこちら</a>
  </div>

  <!-- ===== Footer ===== -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">KUSHIMA<span>YOSHINO</span></a>
          <p data-i18n="footer-desc">パデルの魅力を日本から世界へ。挑戦し続けるパデルプレイヤー、串間よし乃の公式サイトです。</p>
          <div class="footer-social">
            <a href="https://x.com/yoshino327padel" target="_blank" rel="noopener" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://www.instagram.com/yoshino327_padel/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://note.com/yoshino327_padel" target="_blank" rel="noopener" aria-label="Note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Menu</h4>
          <a href="index.html#about">About</a>
          <a href="index.html#achievements">Achievements</a>
          <a href="index.html#results">Results</a>
          <a href="index.html#schedule">Schedule</a>
          <a href="index.html#gallery">Gallery</a>
          <a href="index.html#news">News</a>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <a href="support.html">サポーター</a>
          <a href="partnership.html">パートナー</a>
          <a href="index.html#contact" data-i18n="footer-support-contact">お問い合わせ</a>
        </div>
        <div class="footer-col">
          <h4>Links</h4>
          <a href="https://www.padelfip.com/player/yoshino-kushima/" target="_blank" rel="noopener" data-i18n="footer-fip">FIP公式HP</a>
          <a href="https://note.com/yoshino327_padel" target="_blank" rel="noopener">Note</a>
          <a href="https://www.instagram.com/yoshino327_padel/" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p data-i18n="footer-copyright">&copy; 2026 Kushima Yoshino. All rights reserved.</p>
        <p>Official Website of Padel Player Kushima Yoshino</p>
      </div>
    </div>
  </footer>

  <script src="translations.js"></script>
</body>
</html>
```

**Step 2: Commit**

```bash
git add support.html
git commit -m "feat: create support.html (JP individual support page)"
```

---

### Task 6: Create support-en.html (EN individual support page)

**Files:**
- Create: `support-en.html`

**Step 1: Create the file**

Same structure as `support.html` but with English text, `lang="en"`, and links pointing to `en.html` / `support-en.html` / `partnership-en.html`. No `data-i18n` attributes needed. Language switch uses `<a>` links (same pattern as `en.html`).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Support | Kushima Yoshino Official Website</title>
  <meta name="description" content="Support padel player Kushima Yoshino. Individual supporter plan information.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/animations.css">
</head>
<body>

  <div class="page-header">
    <div class="page-header-inner">
      <div class="lang-switch" style="float: right; margin-top: 4px; display: flex; border-radius: 6px; overflow: hidden; border: 1.5px solid rgba(255,255,255,0.5);">
        <a href="support.html" style="display: block; width: 36px; padding: 4px 0; text-align: center; font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; background: transparent; color: rgba(255,255,255,0.6); transition: 0.3s ease; text-decoration: none;">JP</a>
        <a href="support-en.html" class="active" style="display: block; width: 36px; padding: 4px 0; text-align: center; font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; background: rgba(255,255,255,0.2); color: #fff; transition: 0.3s ease; text-decoration: none;">EN</a>
      </div>
      <a href="en.html" class="back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        Back to Top
      </a>
      <h1>Support Kushima Yoshino</h1>
      <p>Your support fuels the journey to the world stage</p>
    </div>
  </div>

  <!-- ===== Support Plans ===== -->
  <div class="detail-section">
    <h2 class="detail-section-title">Support Plans</h2>
    <p class="detail-section-subtitle">Choose the plan that works for you. Every contribution powers the journey to compete worldwide.</p>

    <div class="support-plans">
      <div class="support-plan-card">
        <div class="support-plan-name">Cheer Plan</div>
        <div class="support-plan-price">¥1,000<span>/mo</span></div>
        <div class="support-plan-period">Casual support</div>
        <ul class="support-plan-features">
          <li>Thank-you email</li>
        </ul>
        <a href="#" class="support-plan-btn">Support</a>
      </div>

      <div class="support-plan-card featured">
        <div class="support-plan-name">Supporter Plan</div>
        <div class="support-plan-price">¥3,000<span>/mo</span></div>
        <div class="support-plan-period">Follow the journey</div>
        <ul class="support-plan-features">
          <li>Thank-you email</li>
          <li>Monthly activity report</li>
        </ul>
        <a href="#" class="support-plan-btn">Support</a>
      </div>

      <div class="support-plan-card">
        <div class="support-plan-name">Premium Plan</div>
        <div class="support-plan-price">¥10,000<span>/mo</span></div>
        <div class="support-plan-period">Full support</div>
        <ul class="support-plan-features">
          <li>Thank-you email</li>
          <li>Monthly activity report</li>
          <li>Exclusive content</li>
          <li>Name on official website</li>
        </ul>
        <a href="#" class="support-plan-btn">Support</a>
      </div>
    </div>
  </div>

  <!-- ===== Fund Usage ===== -->
  <div class="detail-section" style="background: var(--gray-light);">
    <div class="fund-usage">
      <h2 class="detail-section-title">How Funds Are Used</h2>
      <p class="detail-section-subtitle">Your support goes directly toward competing on the world stage.</p>
      <div class="fund-usage-grid">
        <div class="fund-usage-card">
          <div class="fund-usage-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          </div>
          <h4>Travel Expenses</h4>
          <p>Flights and accommodation for 15+ international tournaments per year — essential for improving world ranking.</p>
        </div>
        <div class="fund-usage-card">
          <div class="fund-usage-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
          </div>
          <h4>Equipment & Training</h4>
          <p>Rackets, shoes, physical training, and coaching to stay competitive at the highest level.</p>
        </div>
        <div class="fund-usage-card">
          <div class="fund-usage-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
          </div>
          <h4>Padel Promotion</h4>
          <p>Hosting experience sessions and events to grow padel in Japan.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== CTA ===== -->
  <div class="detail-cta">
    <h3>Join the Journey to the World Stage</h3>
    <p>Your support helps write the next chapter of Japanese padel history.</p>
    <a href="en.html#contact" class="btn btn-outline">Contact Us</a>
  </div>

  <!-- ===== Footer ===== -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="en.html" class="nav-logo">KUSHIMA<span>YOSHINO</span></a>
          <p>Bringing the excitement of padel from Japan to the world. Official website of padel player Kushima Yoshino.</p>
          <div class="footer-social">
            <a href="https://x.com/yoshino327padel" target="_blank" rel="noopener" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://www.instagram.com/yoshino327_padel/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://note.com/yoshino327_padel" target="_blank" rel="noopener" aria-label="Note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Menu</h4>
          <a href="en.html#about">About</a>
          <a href="en.html#achievements">Achievements</a>
          <a href="en.html#results">Results</a>
          <a href="en.html#schedule">Schedule</a>
          <a href="en.html#gallery">Gallery</a>
          <a href="en.html#news">News</a>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <a href="support-en.html">Supporter</a>
          <a href="partnership-en.html">Partners</a>
          <a href="en.html#contact">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Links</h4>
          <a href="https://www.padelfip.com/player/yoshino-kushima/" target="_blank" rel="noopener">FIP Official</a>
          <a href="https://note.com/yoshino327_padel" target="_blank" rel="noopener">Note</a>
          <a href="https://www.instagram.com/yoshino327_padel/" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Kushima Yoshino. All rights reserved.</p>
        <p>Official Website of Padel Player Kushima Yoshino</p>
      </div>
    </div>
  </footer>

</body>
</html>
```

**Step 2: Commit**

```bash
git add support-en.html
git commit -m "feat: create support-en.html (EN individual support page)"
```

---

### Task 7: Create partnership.html (JP partnership detail page)

**Files:**
- Create: `partnership.html`

**Step 1: Create the file**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>パートナーシップ | 串間よし乃 公式サイト</title>
  <meta name="description" content="パデル選手串間よし乃とのパートナーシップのご案内。企業スポンサー・サポーター募集。">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/animations.css">
</head>
<body>

  <div class="page-header">
    <div class="page-header-inner">
      <div class="lang-switch" style="float: right; margin-top: 4px; display: flex; border-radius: 6px; overflow: hidden; border: 1.5px solid rgba(255,255,255,0.5);">
        <button class="active" onclick="switchLang('ja')" style="width: 36px; padding: 4px 0; border: none; cursor: pointer; font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; background: rgba(255,255,255,0.2); color: #fff; transition: 0.3s ease;">JP</button>
        <button onclick="switchLang('en')" style="width: 36px; padding: 4px 0; border: none; cursor: pointer; font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; background: transparent; color: rgba(255,255,255,0.6); transition: 0.3s ease;">EN</button>
      </div>
      <a href="index.html" class="back" data-i18n="partnership-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        トップページに戻る
      </a>
      <h1 data-i18n="partnership-page-title">パートナーシップのご案内</h1>
      <p data-i18n="partnership-page-subtitle">パデルという成長競技を通じて、貴社のブランド価値向上に貢献します</p>
    </div>
  </div>

  <!-- ===== About Padel Market ===== -->
  <div class="detail-section">
    <h2 class="detail-section-title" data-i18n="pm-title">パデル市場について</h2>
    <p class="detail-section-subtitle" data-i18n="pm-desc">パデルは世界で最も急成長しているスポーツの一つです。</p>

    <div class="sponsors-stats">
      <div class="sponsors-stat">
        <div class="sponsors-stat-num" data-count="3500">0</div>
        <div class="sponsors-stat-label" data-i18n="pm-stat-1">万人の競技人口（世界）</div>
      </div>
      <div class="sponsors-stat">
        <div class="sponsors-stat-num" data-count="90">0</div>
        <div class="sponsors-stat-label" data-i18n="pm-stat-2">カ国以上で普及</div>
      </div>
      <div class="sponsors-stat">
        <div class="sponsors-stat-num" data-count="15">0</div>
        <div class="sponsors-stat-label" data-i18n="pm-stat-3">年間出場国数</div>
      </div>
    </div>

    <div class="sponsors-cta">
      <h3 data-i18n="pm-cta-title">先行者メリットのあるスポーツ</h3>
      <p data-i18n="pm-cta-desc">ヨーロッパ・中東・東南アジアで急速に拡大中。日本でも競技人口が増加しており、今パートナーになることで他社に先駆けたブランド認知を獲得できます。テニスに次ぐラケットスポーツとして、メディア露出も年々増加しています。</p>
    </div>
  </div>

  <!-- ===== What I Bring ===== -->
  <div class="detail-section" style="background: var(--gray-light);">
    <h2 class="detail-section-title" data-i18n="wib-detail-title">串間よし乃が届けるもの</h2>
    <p class="detail-section-subtitle" data-i18n="wib-detail-desc">世界の舞台で戦うアスリートとして、パートナーの皆様に価値を届けます。</p>

    <div class="sponsors-benefits-grid" style="max-width: 900px; margin: 0 auto;">
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08); color: var(--light);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
        </div>
        <h4 style="color: var(--light);" data-i18n="wib-1-title">世界の舞台で戦う</h4>
        <p style="color: var(--gray);" data-i18n="wib-1-desc">年間15以上の国際大会に出場し、15カ国以上を転戦。世界に挑み続けます</p>
      </div>
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        </div>
        <h4 style="color: var(--light);" data-i18n="wib-2-title">パデルを日本に届ける</h4>
        <p style="color: var(--gray);" data-i18n="wib-2-desc">体験会やイベントを通じて、まだ知られていないパデルの魅力を一人でも多くの人に届けます</p>
      </div>
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
        </div>
        <h4 style="color: var(--light);" data-i18n="wib-3-title">ストーリーを発信する</h4>
        <p style="color: var(--gray);" data-i18n="wib-3-desc">SNSやメディアを通じて、挑戦の裏側やパデルの世界をリアルタイムで届けます</p>
      </div>
    </div>
  </div>

  <!-- ===== Partnership Benefits ===== -->
  <div class="detail-section">
    <h2 class="detail-section-title" data-i18n="partnership-benefits-heading">パートナーシップのメリット</h2>
    <p class="detail-section-subtitle" data-i18n="pb-detail-desc">パートナーとして、以下のメリットをご提供いたします。</p>

    <div class="sponsors-benefits-grid" style="max-width: 900px; margin: 0 auto;">
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/><path d="M12 3v12"/><circle cx="12" cy="21" r="1"/><path d="M3 15l9 6 9-6"/></svg>
        </div>
        <h4 style="color: var(--light);" data-i18n="partner-1-title">ブランドを世界へ</h4>
        <p style="color: var(--gray);" data-i18n="partner-1-desc">ウェア・用具・大会会場でのロゴ露出を通じて、あなたのブランドを世界に届けます</p>
      </div>
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
        </div>
        <h4 style="color: var(--light);" data-i18n="partner-2-title">一緒に届ける</h4>
        <p style="color: var(--gray);" data-i18n="partner-2-desc">SNS・メディア・公式サイトでの共同発信で、パートナーとしてのストーリーを一緒に届けます</p>
      </div>
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h4 style="color: var(--light);" data-i18n="partner-3-title">体験を共創する</h4>
        <p style="color: var(--gray);" data-i18n="partner-3-desc">パデル体験会やブランディングイベントを一緒に企画・開催します</p>
      </div>
    </div>
  </div>

  <!-- ===== Partnership Formats ===== -->
  <div class="detail-section" style="background: var(--gray-light);">
    <h2 class="detail-section-title" data-i18n="pf-title">パートナーシップの形態</h2>
    <p class="detail-section-subtitle" data-i18n="pf-desc">貴社のニーズに合わせた柔軟なパートナーシップをご提案いたします。</p>

    <div class="partnership-formats" style="max-width: 900px; margin: 0 auto;">
      <div class="partnership-format-card">
        <div class="partnership-format-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <h4 data-i18n="pf-1-title">ロゴ掲載</h4>
        <p data-i18n="pf-1-desc">ウェア、用具、公式サイト、SNS投稿へのロゴ掲載。大会中継や報道時にも露出します。</p>
      </div>
      <div class="partnership-format-card">
        <div class="partnership-format-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        </div>
        <h4 data-i18n="pf-2-title">用品提供</h4>
        <p data-i18n="pf-2-desc">パデル用具、ウェア、サプリメントなどの用品提供。世界の舞台で使用・紹介します。</p>
      </div>
      <div class="partnership-format-card">
        <div class="partnership-format-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <h4 data-i18n="pf-3-title">イベント協賛</h4>
        <p data-i18n="pf-3-desc">パデル体験会やブランディングイベントの共催。御社のターゲット層に直接リーチできます。</p>
      </div>
    </div>
  </div>

  <!-- ===== Current Partners ===== -->
  <div class="detail-section">
    <h2 class="detail-section-title" data-i18n="cp-title">現在のパートナー</h2>
    <p class="detail-section-subtitle" data-i18n="cp-desc">活動を支えてくださっている企業・団体の皆様です。</p>

    <div class="sponsors-grid" style="max-width: 900px; margin: 0 auto;">
      <a href="https://www.amtecnet.co.jp/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/アムテック.png" alt="アムテック株式会社" class="sponsor-logo sponsor-logo-sm">
        <div class="sponsor-name">アムテック株式会社</div>
        <div class="sponsor-category" data-i18n="sponsor-cat-1">パートナー</div>
      </a>
      <a href="https://royalpadel.com/en/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/royalpadel.png" alt="ロイヤルパデル" class="sponsor-logo">
        <div class="sponsor-name">ロイヤルパデル</div>
        <div class="sponsor-category" data-i18n="sponsor-cat-2">パデル用品</div>
      </a>
      <a href="https://www.a2network.jp/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/Skyberry.png" alt="a2network" class="sponsor-logo sponsor-logo-sm">
        <div class="sponsor-name">a2network</div>
        <div class="sponsor-category" data-i18n="sponsor-cat-3">海外通信</div>
      </a>
      <a href="https://www.pink-ion.jp/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/pinkion.png" alt="PINK ION" class="sponsor-logo">
        <div class="sponsor-name">PINK ION</div>
        <div class="sponsor-category" data-i18n="sponsor-cat-4">サプリメント・飲料</div>
      </a>
      <a href="https://www.hoshino-kikaku.co.jp/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/hoshino.png" alt="株式会社ホシノ" class="sponsor-logo">
        <div class="sponsor-name">株式会社ホシノ</div>
        <div class="sponsor-category" data-i18n="sponsor-cat-5">インソール</div>
      </a>
      <a href="https://www.kimony.com/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/kimony.png" alt="kimony" class="sponsor-logo">
        <div class="sponsor-name">kimony</div>
        <div class="sponsor-category" data-i18n="sponsor-cat-6">グリップテープ</div>
      </a>
    </div>
  </div>

  <!-- ===== Contact CTA ===== -->
  <div class="detail-cta">
    <h3 data-i18n="pcta-title">パートナーシップについてお気軽にご相談ください</h3>
    <p data-i18n="pcta-desc">貴社のニーズに合わせたプランをご提案いたします。まずはお気軽にお問い合わせください。</p>
    <a href="index.html#contact" class="btn btn-outline" data-i18n="pcta-btn">お問い合わせはこちら</a>
  </div>

  <!-- ===== Footer ===== -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">KUSHIMA<span>YOSHINO</span></a>
          <p data-i18n="footer-desc">パデルの魅力を日本から世界へ。挑戦し続けるパデルプレイヤー、串間よし乃の公式サイトです。</p>
          <div class="footer-social">
            <a href="https://x.com/yoshino327padel" target="_blank" rel="noopener" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://www.instagram.com/yoshino327_padel/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://note.com/yoshino327_padel" target="_blank" rel="noopener" aria-label="Note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Menu</h4>
          <a href="index.html#about">About</a>
          <a href="index.html#achievements">Achievements</a>
          <a href="index.html#results">Results</a>
          <a href="index.html#schedule">Schedule</a>
          <a href="index.html#gallery">Gallery</a>
          <a href="index.html#news">News</a>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <a href="support.html">サポーター</a>
          <a href="partnership.html">パートナー</a>
          <a href="index.html#contact" data-i18n="footer-support-contact">お問い合わせ</a>
        </div>
        <div class="footer-col">
          <h4>Links</h4>
          <a href="https://www.padelfip.com/player/yoshino-kushima/" target="_blank" rel="noopener" data-i18n="footer-fip">FIP公式HP</a>
          <a href="https://note.com/yoshino327_padel" target="_blank" rel="noopener">Note</a>
          <a href="https://www.instagram.com/yoshino327_padel/" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p data-i18n="footer-copyright">&copy; 2026 Kushima Yoshino. All rights reserved.</p>
        <p>Official Website of Padel Player Kushima Yoshino</p>
      </div>
    </div>
  </footer>

  <script src="translations.js"></script>
  <script>
    // Count-up animation for stats
    function animateCountUp(el, target, duration) {
      let start = 0;
      const step = function(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    const statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.sponsors-stat-num').forEach(function(num) {
            var target = parseInt(num.getAttribute('data-count'));
            if (!isNaN(target)) animateCountUp(num, target, 2000);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    var statsEl = document.querySelector('.sponsors-stats');
    if (statsEl) statsObserver.observe(statsEl);
  </script>
</body>
</html>
```

**Step 2: Commit**

```bash
git add partnership.html
git commit -m "feat: create partnership.html (JP partnership detail page)"
```

---

### Task 8: Create partnership-en.html (EN partnership detail page)

**Files:**
- Create: `partnership-en.html`

**Step 1: Create the file**

Same structure as `partnership.html` but English text, `lang="en"`, links to `en.html` / `support-en.html` / `partnership-en.html`, `<a>` lang switch. No `data-i18n`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Partnership | Kushima Yoshino Official Website</title>
  <meta name="description" content="Partnership opportunities with padel player Kushima Yoshino. Corporate sponsorship information.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/animations.css">
</head>
<body>

  <div class="page-header">
    <div class="page-header-inner">
      <div class="lang-switch" style="float: right; margin-top: 4px; display: flex; border-radius: 6px; overflow: hidden; border: 1.5px solid rgba(255,255,255,0.5);">
        <a href="partnership.html" style="display: block; width: 36px; padding: 4px 0; text-align: center; font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; background: transparent; color: rgba(255,255,255,0.6); transition: 0.3s ease; text-decoration: none;">JP</a>
        <a href="partnership-en.html" class="active" style="display: block; width: 36px; padding: 4px 0; text-align: center; font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; background: rgba(255,255,255,0.2); color: #fff; transition: 0.3s ease; text-decoration: none;">EN</a>
      </div>
      <a href="en.html" class="back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        Back to Top
      </a>
      <h1>Partnership Opportunities</h1>
      <p>Enhance your brand value through the fastest-growing sport in the world</p>
    </div>
  </div>

  <!-- ===== About Padel Market ===== -->
  <div class="detail-section">
    <h2 class="detail-section-title">About the Padel Market</h2>
    <p class="detail-section-subtitle">Padel is one of the fastest-growing sports in the world.</p>

    <div class="sponsors-stats">
      <div class="sponsors-stat">
        <div class="sponsors-stat-num" data-count="35">0</div>
        <div class="sponsors-stat-label">Million Players Worldwide</div>
      </div>
      <div class="sponsors-stat">
        <div class="sponsors-stat-num" data-count="90">0</div>
        <div class="sponsors-stat-label">Countries & Growing</div>
      </div>
      <div class="sponsors-stat">
        <div class="sponsors-stat-num" data-count="15">0</div>
        <div class="sponsors-stat-label">Countries Competed In / Year</div>
      </div>
    </div>

    <div class="sponsors-cta">
      <h3>First-Mover Advantage</h3>
      <p>Expanding rapidly across Europe, the Middle East, and Southeast Asia. With padel growing in Japan too, early partners gain powerful brand recognition ahead of the competition. As the next major racket sport after tennis, media coverage increases year after year.</p>
    </div>
  </div>

  <!-- ===== What I Bring ===== -->
  <div class="detail-section" style="background: var(--gray-light);">
    <h2 class="detail-section-title">What Kushima Yoshino Brings</h2>
    <p class="detail-section-subtitle">As an athlete competing on the world stage, delivering value to partners.</p>

    <div class="sponsors-benefits-grid" style="max-width: 900px; margin: 0 auto;">
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
        </div>
        <h4 style="color: var(--light);">Compete on the World Stage</h4>
        <p style="color: var(--gray);">Competing in 15+ international tournaments across 15+ countries each year, challenging the world</p>
      </div>
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        </div>
        <h4 style="color: var(--light);">Bring Padel to Japan</h4>
        <p style="color: var(--gray);">Delivering the excitement of padel to as many people as possible through experience sessions and events</p>
      </div>
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
        </div>
        <h4 style="color: var(--light);">Share the Story</h4>
        <p style="color: var(--gray);">Sharing the behind-the-scenes of each challenge and the world of padel in real-time through SNS and media</p>
      </div>
    </div>
  </div>

  <!-- ===== Partnership Benefits ===== -->
  <div class="detail-section">
    <h2 class="detail-section-title">Partnership Benefits</h2>
    <p class="detail-section-subtitle">As a partner, you receive the following benefits.</p>

    <div class="sponsors-benefits-grid" style="max-width: 900px; margin: 0 auto;">
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/><path d="M12 3v12"/><circle cx="12" cy="21" r="1"/><path d="M3 15l9 6 9-6"/></svg>
        </div>
        <h4 style="color: var(--light);">Take Your Brand Global</h4>
        <p style="color: var(--gray);">Your brand reaches the world through logo placement on apparel, equipment, and tournament venues</p>
      </div>
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
        </div>
        <h4 style="color: var(--light);">Tell It Together</h4>
        <p style="color: var(--gray);">Joint storytelling through SNS, media coverage, and official website as true partners</p>
      </div>
      <div class="sponsors-benefit-card" style="background: #ffffff; border-color: rgba(0,0,0,0.08);">
        <div class="sponsors-benefit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h4 style="color: var(--light);">Co-create Experiences</h4>
        <p style="color: var(--gray);">Jointly plan and host padel experience sessions and branding events</p>
      </div>
    </div>
  </div>

  <!-- ===== Partnership Formats ===== -->
  <div class="detail-section" style="background: var(--gray-light);">
    <h2 class="detail-section-title">Partnership Formats</h2>
    <p class="detail-section-subtitle">Flexible partnership options tailored to your needs.</p>

    <div class="partnership-formats" style="max-width: 900px; margin: 0 auto;">
      <div class="partnership-format-card">
        <div class="partnership-format-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <h4>Logo Placement</h4>
        <p>Logo on apparel, equipment, official website, and SNS posts. Visibility during tournament broadcasts and media coverage.</p>
      </div>
      <div class="partnership-format-card">
        <div class="partnership-format-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        </div>
        <h4>Equipment Supply</h4>
        <p>Padel equipment, apparel, and supplements. Used and showcased on the world stage.</p>
      </div>
      <div class="partnership-format-card">
        <div class="partnership-format-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <h4>Event Sponsorship</h4>
        <p>Co-hosting padel experience sessions and branding events. Direct reach to your target audience.</p>
      </div>
    </div>
  </div>

  <!-- ===== Current Partners ===== -->
  <div class="detail-section">
    <h2 class="detail-section-title">Current Partners</h2>
    <p class="detail-section-subtitle">Companies and organizations supporting our activities.</p>

    <div class="sponsors-grid" style="max-width: 900px; margin: 0 auto;">
      <a href="https://www.amtecnet.co.jp/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/アムテック.png" alt="Amtec Inc." class="sponsor-logo sponsor-logo-sm">
        <div class="sponsor-name">Amtec Inc.</div>
        <div class="sponsor-category">Partner</div>
      </a>
      <a href="https://royalpadel.com/en/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/royalpadel.png" alt="Royal Padel" class="sponsor-logo">
        <div class="sponsor-name">Royal Padel</div>
        <div class="sponsor-category">Padel Equipment</div>
      </a>
      <a href="https://www.a2network.jp/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/Skyberry.png" alt="a2network" class="sponsor-logo sponsor-logo-sm">
        <div class="sponsor-name">a2network</div>
        <div class="sponsor-category">International Communications</div>
      </a>
      <a href="https://www.pink-ion.jp/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/pinkion.png" alt="PINK ION" class="sponsor-logo">
        <div class="sponsor-name">PINK ION</div>
        <div class="sponsor-category">Supplements & Drinks</div>
      </a>
      <a href="https://www.hoshino-kikaku.co.jp/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/hoshino.png" alt="Hoshino Co., Ltd." class="sponsor-logo">
        <div class="sponsor-name">Hoshino Co., Ltd.</div>
        <div class="sponsor-category">Insoles</div>
      </a>
      <a href="https://www.kimony.com/" target="_blank" rel="noopener" class="sponsor-card sponsor-named" style="text-decoration: none;">
        <img src="images/sponsors/kimony.png" alt="kimony" class="sponsor-logo">
        <div class="sponsor-name">kimony</div>
        <div class="sponsor-category">Grip Tape</div>
      </a>
    </div>
  </div>

  <!-- ===== Contact CTA ===== -->
  <div class="detail-cta">
    <h3>Let's Discuss Partnership Opportunities</h3>
    <p>We'll propose a plan tailored to your needs. Feel free to reach out.</p>
    <a href="en.html#contact" class="btn btn-outline">Contact Us</a>
  </div>

  <!-- ===== Footer ===== -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="en.html" class="nav-logo">KUSHIMA<span>YOSHINO</span></a>
          <p>Bringing the excitement of padel from Japan to the world. Official website of padel player Kushima Yoshino.</p>
          <div class="footer-social">
            <a href="https://x.com/yoshino327padel" target="_blank" rel="noopener" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://www.instagram.com/yoshino327_padel/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://note.com/yoshino327_padel" target="_blank" rel="noopener" aria-label="Note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Menu</h4>
          <a href="en.html#about">About</a>
          <a href="en.html#achievements">Achievements</a>
          <a href="en.html#results">Results</a>
          <a href="en.html#schedule">Schedule</a>
          <a href="en.html#gallery">Gallery</a>
          <a href="en.html#news">News</a>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <a href="support-en.html">Supporter</a>
          <a href="partnership-en.html">Partners</a>
          <a href="en.html#contact">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Links</h4>
          <a href="https://www.padelfip.com/player/yoshino-kushima/" target="_blank" rel="noopener">FIP Official</a>
          <a href="https://note.com/yoshino327_padel" target="_blank" rel="noopener">Note</a>
          <a href="https://www.instagram.com/yoshino327_padel/" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Kushima Yoshino. All rights reserved.</p>
        <p>Official Website of Padel Player Kushima Yoshino</p>
      </div>
    </div>
  </footer>

  <script>
    // Count-up animation for stats
    function animateCountUp(el, target, duration) {
      let start = 0;
      const step = function(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    const statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.sponsors-stat-num').forEach(function(num) {
            var target = parseInt(num.getAttribute('data-count'));
            if (!isNaN(target)) animateCountUp(num, target, 2000);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    var statsEl = document.querySelector('.sponsors-stats');
    if (statsEl) statsObserver.observe(statsEl);
  </script>
</body>
</html>
```

**Step 2: Commit**

```bash
git add partnership-en.html
git commit -m "feat: create partnership-en.html (EN partnership detail page)"
```

---

### Task 9: Add translation keys for new pages to translations.js

**Files:**
- Modify: `translations.js` — insert after `'partnership-cta-btn'` line

**Step 1: Add all new translation keys**

After the line `'partnership-cta-btn': 'Inquire About Partnership',` add:

```javascript
  'sponsors-btn-support': 'Support Yoshino',
  'sponsors-btn-partnership': 'Partnership Details',
  // Support page
  'support-back': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back to Top',
  'support-page-title': 'Support Kushima Yoshino',
  'support-page-subtitle': 'Your support fuels the journey to the world stage',
  'support-plans-title': 'Support Plans',
  'support-plans-desc': 'Choose the plan that works for you. Every contribution powers the journey to compete worldwide.',
  'support-plan-1-name': 'Cheer Plan',
  'support-plan-unit': '/mo',
  'support-plan-1-period': 'Casual support',
  'support-plan-1-f1': 'Thank-you email',
  'support-plan-2-name': 'Supporter Plan',
  'support-plan-2-period': 'Follow the journey',
  'support-plan-2-f1': 'Thank-you email',
  'support-plan-2-f2': 'Monthly activity report',
  'support-plan-3-name': 'Premium Plan',
  'support-plan-3-period': 'Full support',
  'support-plan-3-f1': 'Thank-you email',
  'support-plan-3-f2': 'Monthly activity report',
  'support-plan-3-f3': 'Exclusive content',
  'support-plan-3-f4': 'Name on official website',
  'support-plan-btn': 'Support',
  'fund-title': 'How Funds Are Used',
  'fund-desc': 'Your support goes directly toward competing on the world stage.',
  'fund-1-title': 'Travel Expenses',
  'fund-1-desc': 'Flights and accommodation for 15+ international tournaments per year — essential for improving world ranking.',
  'fund-2-title': 'Equipment & Training',
  'fund-2-desc': 'Rackets, shoes, physical training, and coaching to stay competitive at the highest level.',
  'fund-3-title': 'Padel Promotion',
  'fund-3-desc': 'Hosting experience sessions and events to grow padel in Japan.',
  'support-cta-title': 'Join the Journey to the World Stage',
  'support-cta-desc': 'Your support helps write the next chapter of Japanese padel history.',
  'support-cta-btn': 'Contact Us',
  // Partnership page
  'partnership-back': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back to Top',
  'partnership-page-title': 'Partnership Opportunities',
  'partnership-page-subtitle': 'Enhance your brand value through the fastest-growing sport in the world',
  'pm-title': 'About the Padel Market',
  'pm-desc': 'Padel is one of the fastest-growing sports in the world.',
  'pm-stat-1': 'Million Players Worldwide',
  'pm-stat-2': 'Countries & Growing',
  'pm-stat-3': 'Countries Competed In / Year',
  'pm-cta-title': 'First-Mover Advantage',
  'pm-cta-desc': 'Expanding rapidly across Europe, the Middle East, and Southeast Asia. With padel growing in Japan too, early partners gain powerful brand recognition ahead of the competition. As the next major racket sport after tennis, media coverage increases year after year.',
  'wib-detail-title': 'What Kushima Yoshino Brings',
  'wib-detail-desc': 'As an athlete competing on the world stage, delivering value to partners.',
  'pb-detail-desc': 'As a partner, you receive the following benefits.',
  'pf-title': 'Partnership Formats',
  'pf-desc': 'Flexible partnership options tailored to your needs.',
  'pf-1-title': 'Logo Placement',
  'pf-1-desc': 'Logo on apparel, equipment, official website, and SNS posts. Visibility during tournament broadcasts and media coverage.',
  'pf-2-title': 'Equipment Supply',
  'pf-2-desc': 'Padel equipment, apparel, and supplements. Used and showcased on the world stage.',
  'pf-3-title': 'Event Sponsorship',
  'pf-3-desc': 'Co-hosting padel experience sessions and branding events. Direct reach to your target audience.',
  'cp-title': 'Current Partners',
  'cp-desc': 'Companies and organizations supporting our activities.',
  'pcta-title': 'Let\'s Discuss Partnership Opportunities',
  'pcta-desc': 'We\'ll propose a plan tailored to your needs. Feel free to reach out.',
  'pcta-btn': 'Contact Us',
```

**Note:** The button keys `sponsors-btn-support` and `sponsors-btn-partnership` from Task 4 are already included here. If Task 4 was executed separately, skip those two lines.

**Step 2: Commit**

```bash
git add translations.js
git commit -m "feat: add translation keys for support and partnership pages"
```

---

### Task 10: Visual verification

**Step 1: Open all pages in browser and verify**

Open the following files in a browser and check:
- `index.html` — Partners section shows 2 new buttons, links work
- `en.html` — Same buttons in English, links go to EN versions
- `support.html` — 3 plan cards, fund usage section, CTA, footer
- `support-en.html` — English version matches
- `partnership.html` — Market stats, benefits, formats, partner grid, CTA
- `partnership-en.html` — English version matches

Check responsive: resize to mobile width and verify cards stack to single column.

**Step 2: Commit all remaining changes if any**

```bash
git add -A
git status
# If clean, done. If changes exist:
git commit -m "fix: final adjustments for support/partnership pages"
```
