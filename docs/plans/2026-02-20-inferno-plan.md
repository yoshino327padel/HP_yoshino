# Inferno Implementation Plan - 黒×オレンジ リデザイン

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the site from black×cyan/blue to black×orange (Inferno theme) with enhanced animations including fire particles, glitch text, ripple buttons, and parallax scrolling.

**Architecture:** CSS variable swap as the foundation (most colors flow through variables), then fix hardcoded colors, add new JS for canvas particles and scroll effects, and add new CSS keyframes for glitch and enhanced animations.

**Tech Stack:** Vanilla CSS, Vanilla JS (Canvas API, IntersectionObserver, requestAnimationFrame)

---

### Task 1: Update CSS Variables and Base Colors

**Files:**
- Modify: `css/style.css:16-30` (CSS variables)
- Modify: `css/style.css:36` (navbar background)
- Modify: `css/style.css:44` (navbar scrolled background)

**Step 1: Update CSS variables in :root**

Change lines 16-30 in `css/style.css`:

```css
:root {
  --primary: #ff6b00;
  --primary-light: #ff8c00;
  --accent: #ff2d00;
  --accent-light: #ffaa00;
  --dark: #0a0a0a;
  --light: #f0f0f0;
  --gray: #9ca3af;
  --gray-light: #111111;
  --bg-alt: #0d0d0d;
  --shadow: 0 2px 8px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.16);
  --shadow-hover: 0 4px 16px rgba(0,0,0,0.25), 0 16px 48px rgba(0,0,0,0.3);
  --radius: 12px;
  --transition: 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
```

**Step 2: Update navbar backgrounds**

Line 36: Change `rgba(10,15,30,0.85)` to `rgba(10,10,10,0.85)`
Line 44: Change `rgba(10,15,30,0.95)` to `rgba(10,10,10,0.95)`

**Step 3: Verify the site loads without errors**

Open `index.html` in browser, confirm navbar and basic colors have changed.

**Step 4: Commit**

```bash
git add css/style.css
git commit -m "feat: update CSS variables to Inferno orange theme"
```

---

### Task 2: Update Hero Section Colors

**Files:**
- Modify: `css/style.css:99` (lang-switch hover)
- Modify: `css/style.css:106` (hero gradient)
- Modify: `css/style.css:110-113` (hero::before mesh gradient)
- Modify: `css/style.css:158-165` (btn-primary colors)

**Step 1: Update lang-switch hover**

Line 99: Change `rgba(59,130,246,0.15)` to `rgba(255,107,0,0.15)`

**Step 2: Update hero background gradient**

Line 106: Change to:
```css
background: linear-gradient(160deg, #050505 0%, #0a0a0a 35%, #0d0d0d 55%, #111111 80%, #1a1a1a 100%);
```

**Step 3: Update hero::before mesh gradients**

Lines 110-113: Change to:
```css
background:
  radial-gradient(ellipse at 20% 80%, rgba(255,45,0,0.12) 0%, transparent 50%),
  radial-gradient(ellipse at 80% 20%, rgba(255,107,0,0.15) 0%, transparent 40%),
  radial-gradient(ellipse at 50% 50%, rgba(255,170,0,0.1) 0%, transparent 60%);
```

**Step 4: Update btn-primary colors**

Line 161: Change `rgba(34,211,238,0.3)` to `rgba(255,107,0,0.3)`
Line 165: Change `rgba(34,211,238,0.4)` to `rgba(255,107,0,0.4)`

**Step 5: Verify hero section in browser**

Confirm hero has orange mesh gradient, buttons glow orange.

**Step 6: Commit**

```bash
git add css/style.css
git commit -m "feat: update hero section to orange flame gradients"
```

---

### Task 3: Update Section and Component Colors

**Files:**
- Modify: `css/style.css:218` (section-tag border)
- Modify: `css/style.css:239,242` (about background)
- Modify: `css/style.css:254` (about-image-placeholder)
- Modify: `css/style.css:406` (results background)
- Modify: `css/style.css:411` (results-table thead)
- Modify: `css/style.css:425` (results-table row hover)
- Modify: `css/style.css:470` (schedule-card active)
- Modify: `css/style.css:549` (achievement-card hover inset)
- Modify: `css/style.css:577` (gallery background)
- Modify: `css/style.css:594` (gallery-tab active shadow)
- Modify: `css/style.css:667` (news-thumb gradient)
- Modify: `css/style.css:686` (sponsors background)
- Modify: `css/style.css:704,709` (sponsors-cta gradient)
- Modify: `css/style.css:727` (contact background)
- Modify: `css/style.css:772` (form focus shadow)
- Modify: `css/style.css:785` (btn-submit hover shadow)
- Modify: `css/style.css:838` (mobile-menu background)

**Step 1: Update section-tag border**

Line 218: Change `rgba(59,130,246,0.3)` to `rgba(255,107,0,0.3)`

**Step 2: Update section backgrounds**

Line 239: Change `#0d1321` to `#0d0d0d`
Line 242: Change `#0d1321` to `#0d0d0d`
Line 406: Change `#0d1321` to `#0d0d0d`
Line 577: Change `#0d1321` to `#0d0d0d`
Line 686: Change `#0d1321` to `#0d0d0d`
Line 727: Change `linear-gradient(135deg, #111827, #0d1321)` to `linear-gradient(135deg, #111111, #0d0d0d)`

**Step 3: Update about-image-placeholder**

Line 254: Change `linear-gradient(135deg, #e0f2fe, #bae6fd)` to `linear-gradient(135deg, #1a1a1a, #111111)`

**Step 4: Update results-table colors**

Line 411: Change `linear-gradient(135deg, var(--dark), #1a2744)` to `linear-gradient(135deg, var(--dark), #1a1a1a)`
Line 425: Change `rgba(59,130,246,0.08)` to `rgba(255,107,0,0.08)`

**Step 5: Update schedule active**

Line 470: Change `rgba(34,211,238,0.06)` to `rgba(255,107,0,0.06)`

**Step 6: Update achievement card hover**

Line 549: Change `rgba(59,130,246,0.25)` to `rgba(255,107,0,0.25)`

**Step 7: Update gallery tab active shadow**

Line 594: Change `rgba(59,130,246,0.3)` to `rgba(255,107,0,0.3)`

**Step 8: Update news-thumb gradient**

Line 667: Change `linear-gradient(135deg, rgba(59,130,246,0.15), rgba(96,165,250,0.15))` to `linear-gradient(135deg, rgba(255,107,0,0.15), rgba(255,140,0,0.15))`

**Step 9: Update sponsors-cta gradient**

Line 704: Change `linear-gradient(160deg, var(--dark) 0%, #1e293b 100%)` to `linear-gradient(160deg, var(--dark) 0%, #1a1a1a 100%)`
Line 709: Change `rgba(10,102,194,0.15)` to `rgba(255,107,0,0.15)`

**Step 10: Update form focus and submit shadows**

Line 772: Change `rgba(59,130,246,0.15)` to `rgba(255,107,0,0.15)`
Line 785: Change `rgba(34,211,238,0.3)` to `rgba(255,107,0,0.3)`

**Step 11: Update mobile-menu background**

Line 838: Change `rgba(10,15,30,0.98)` to `rgba(10,10,10,0.98)`

**Step 12: Verify all sections in browser**

Scroll through entire page, confirm all sections are orange-themed.

**Step 13: Commit**

```bash
git add css/style.css
git commit -m "feat: update all section and component colors to orange"
```

---

### Task 4: Update Results Page Header

**Files:**
- Modify: `css/style.css:915` (page-header gradient)

**Step 1: Update page-header gradient**

Line 915: Change `linear-gradient(135deg, #0077b6 0%, #00b4d8 40%, #48cae4 100%)` to `linear-gradient(135deg, #1a1a1a 0%, #111111 40%, #0d0d0d 100%)`

**Step 2: Verify results.html in browser**

Open results.html, confirm the header is dark with orange accents.

**Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: update results page header to dark orange theme"
```

---

### Task 5: Update Animation Colors

**Files:**
- Modify: `css/animations.css:12` (tagPulse blue shadow)

**Step 1: Update tagPulse keyframe**

Line 12: Change `rgba(59,130,246,0.25)` to `rgba(255,107,0,0.25)`

**Step 2: Commit**

```bash
git add css/animations.css
git commit -m "feat: update animation colors to orange"
```

---

### Task 6: Update Inline Styles in index.html

**Files:**
- Modify: `index.html:498` (news-thumb inline style)
- Modify: `index.html:506` (news-thumb inline style)
- Modify: `index.html:514` (news-thumb inline style)
- Modify: `index.html:867-876` (THUMB_COLORS and THUMB_TEXT_COLORS JS constants)

**Step 1: Update inline news-thumb styles**

Line 498: Change `rgba(34,211,238,0.12), rgba(52,211,153,0.12)` to `rgba(255,45,0,0.12), rgba(255,107,0,0.12)` and `color: var(--accent)` to `color: var(--accent)`  (accent is now orange, OK)

Line 506: Change `rgba(59,130,246,0.12), rgba(96,165,250,0.12)` to `rgba(255,107,0,0.12), rgba(255,140,0,0.12)` and `color: var(--primary)` stays same (primary is now orange, OK)

Line 514: Change `rgba(34,211,238,0.12), rgba(52,211,153,0.12)` to `rgba(255,45,0,0.12), rgba(255,107,0,0.12)`

**Step 2: Update THUMB_COLORS JS constants**

Lines 867-876: Change to:
```javascript
const THUMB_COLORS = {
  blue: 'linear-gradient(135deg, rgba(255,107,0,0.12), rgba(255,140,0,0.12))',
  green: 'linear-gradient(135deg, rgba(255,45,0,0.12), rgba(255,107,0,0.12))',
  orange: 'linear-gradient(135deg, rgba(255,170,0,0.12), rgba(255,200,0,0.12))'
};
const THUMB_TEXT_COLORS = {
  blue: 'var(--primary)',
  green: 'var(--accent)',
  orange: '#ffaa00'
};
```

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: update inline colors in index.html to orange"
```

---

### Task 7: Update Inline Styles in en.html

**Files:**
- Modify: `en.html:492` (news-thumb inline style)
- Modify: `en.html:500` (news-thumb inline style)
- Modify: `en.html:508` (news-thumb inline style)
- Modify: `en.html:861-870` (THUMB_COLORS and THUMB_TEXT_COLORS JS constants)

**Step 1: Apply the same changes as Task 6 to en.html**

Same pattern: update inline gradients and JS THUMB_COLORS/THUMB_TEXT_COLORS.

**Step 2: Commit**

```bash
git add en.html
git commit -m "feat: update inline colors in en.html to orange"
```

---

### Task 8: Add Glitch Animation CSS

**Files:**
- Modify: `css/animations.css` (add glitch keyframes at end)
- Modify: `css/style.css` (add glitch styles for hero-name)

**Step 1: Add glitch keyframes to animations.css**

Append to `css/animations.css`:

```css
/* ===== Glitch Animation ===== */
@keyframes glitch {
  0% { transform: translate(0); }
  10% { transform: translate(-3px, 2px); }
  20% { transform: translate(3px, -2px); }
  30% { transform: translate(-2px, -1px); }
  40% { transform: translate(2px, 1px); }
  50% { transform: translate(-1px, 2px); }
  60% { transform: translate(1px, -1px); }
  70% { transform: translate(0); }
  100% { transform: translate(0); }
}

@keyframes glitchColor1 {
  0% { clip-path: inset(0 0 100% 0); }
  10% { clip-path: inset(20% 0 60% 0); }
  20% { clip-path: inset(40% 0 20% 0); }
  30% { clip-path: inset(60% 0 10% 0); }
  40% { clip-path: inset(10% 0 70% 0); }
  50% { clip-path: inset(50% 0 30% 0); }
  60% { clip-path: inset(0 0 100% 0); }
  100% { clip-path: inset(0 0 100% 0); }
}

@keyframes glitchColor2 {
  0% { clip-path: inset(100% 0 0 0); }
  10% { clip-path: inset(60% 0 20% 0); }
  20% { clip-path: inset(20% 0 40% 0); }
  30% { clip-path: inset(10% 0 60% 0); }
  40% { clip-path: inset(70% 0 10% 0); }
  50% { clip-path: inset(30% 0 50% 0); }
  60% { clip-path: inset(100% 0 0 0); }
  100% { clip-path: inset(100% 0 0 0); }
}
```

**Step 2: Add glitch styles to style.css**

Add after `.hero-name-fill` rule (after line 146):

```css
.hero-name {
  position: relative;
}
.hero-name.glitch-active::before,
.hero-name.glitch-active::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
}
.hero-name.glitch-active::before {
  color: #ff2d00;
  animation: glitchColor1 0.6s ease-out forwards;
  transform: translate(-2px, 0);
}
.hero-name.glitch-active::after {
  color: #ffaa00;
  animation: glitchColor2 0.6s ease-out forwards;
  transform: translate(2px, 0);
}
.hero-name.glitch-active {
  animation: glitch 0.6s ease-out forwards;
}
```

**Step 3: Update HTML for glitch**

In `index.html` line 66-68, add `data-text` attribute to the hero-name h1:
```html
<h1 class="hero-name" data-text="KUSHIMA YOSHINO">
```

Do the same in `en.html`.

**Step 4: Add glitch trigger JS**

Add to the bottom of the existing `<script>` in index.html and en.html:
```javascript
// Glitch animation trigger
document.addEventListener('DOMContentLoaded', () => {
  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    setTimeout(() => heroName.classList.add('glitch-active'), 400);
  }
});
```

**Step 5: Verify glitch animation**

Reload page, confirm name briefly glitches with red/amber color separation then settles.

**Step 6: Commit**

```bash
git add css/animations.css css/style.css index.html en.html
git commit -m "feat: add glitch text animation for hero name"
```

---

### Task 9: Add Canvas Fire Particle System

**Files:**
- Create: `scripts/particles.js`
- Modify: `index.html` (add canvas element and script tag)
- Modify: `en.html` (add canvas element and script tag)

**Step 1: Create particles.js**

Create `scripts/particles.js`:

```javascript
(function() {
  'use strict';

  const PARTICLE_COUNT = 120;
  const COLORS = ['#ff6b00', '#ff2d00', '#ffaa00', '#ff8c00'];

  class Particle {
    constructor(canvas) {
      this.canvas = canvas;
      this.reset();
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = this.canvas.height + Math.random() * 20;
      this.size = Math.random() * 3 + 2;
      this.speedY = -(Math.random() * 1.5 + 0.5);
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.life = 0;
      this.maxLife = Math.random() * 200 + 100;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.life * 0.02) * 0.3;
      this.life++;
      this.opacity = Math.max(0, this.opacity - (1 / this.maxLife));
      if (this.life >= this.maxLife || this.y < -10 || this.opacity <= 0) {
        this.reset();
      }
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function initParticles() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'fireParticles';
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;';
    hero.insertBefore(canvas, hero.firstChild.nextSibling);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;
    let isVisible = true;

    function resize() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = new Particle(canvas);
        p.y = Math.random() * canvas.height;
        p.life = Math.random() * p.maxLife;
        particles.push(p);
      }
    }

    function animate() {
      if (!isVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationId = requestAnimationFrame(animate);
    }

    // Pause when hero is off-screen
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationId) {
          animate();
        } else if (!isVisible && animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      });
    }, { threshold: 0 });

    observer.observe(hero);

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
  } else {
    initParticles();
  }
})();
```

**Step 2: Add script tag to index.html and en.html**

Before the closing `</body>` tag, add:
```html
<script src="scripts/particles.js"></script>
```

**Step 3: Ensure hero-content z-index is above particles**

The hero-content already has `z-index: 1` (style.css line 124). Update particles canvas to `z-index: 0` in the JS (`z-index:0` instead of `z-index:1`).

**Step 4: Verify particles**

Open page, confirm fire sparks rise from bottom of hero section, fade out, and stop when scrolled past.

**Step 5: Commit**

```bash
git add scripts/particles.js index.html en.html
git commit -m "feat: add canvas fire particle system to hero section"
```

---

### Task 10: Add Button Ripple Effect

**Files:**
- Modify: `css/style.css` (add ripple styles after btn rules, around line 175)
- Modify: `index.html` (add ripple JS at bottom of script)
- Modify: `en.html` (same)

**Step 1: Add ripple CSS to style.css**

Add after the `.btn-outline:hover` rule (after line 175):

```css
.btn .ripple {
  position: absolute; border-radius: 50%;
  background: rgba(255,255,255,0.35);
  transform: scale(0); animation: rippleEffect 0.6s ease-out forwards;
  pointer-events: none;
}
@keyframes rippleEffect {
  to { transform: scale(4); opacity: 0; }
}
```

**Step 2: Add ripple JS**

Add to the existing `<script>` section in index.html and en.html:

```javascript
// Button ripple effect
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});
```

**Step 3: Verify**

Click buttons, confirm orange-white ripple expands from click position.

**Step 4: Commit**

```bash
git add css/style.css index.html en.html
git commit -m "feat: add button ripple click effect"
```

---

### Task 11: Add Enhanced Hover Effects

**Files:**
- Modify: `css/style.css` (enhance card hover, schedule, achievement)

**Step 1: Enhance card hover glow**

Update `.achievement-card:hover` (line 530-534) to add orange glow:
```css
.achievement-card:hover {
  transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
  box-shadow: 0 0 20px rgba(255,107,0,0.2), var(--shadow-hover);
  border-color: rgba(255,107,0,0.3);
}
```

Update `.schedule-card:hover` (line 468) to add orange glow:
```css
.schedule-card:hover { transform: translateY(-6px); box-shadow: 0 0 16px rgba(255,107,0,0.15), var(--shadow-hover); }
```

Update `.news-card:hover` (line 661-664) to add orange glow:
```css
.news-card:hover {
  transform: translateY(-4px); box-shadow: 0 0 16px rgba(255,107,0,0.15), var(--shadow-hover);
  border-color: rgba(255,107,0,0.2);
}
```

Update `.sponsor-card.sponsor-named:hover` (line 498-502) to add orange glow:
```css
.sponsor-card.sponsor-named:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
  box-shadow: 0 0 16px rgba(255,107,0,0.15), var(--shadow);
}
```

**Step 2: Enhance nav link hover**

Update `.nav-links a:hover` (line 69): Change `color: var(--dark)` to `color: var(--primary)`

**Step 3: Verify all hover effects**

Test cards, buttons, nav links for orange glow.

**Step 4: Commit**

```bash
git add css/style.css
git commit -m "feat: enhance hover effects with orange glow"
```

---

### Task 12: Add Parallax Scroll Effect

**Files:**
- Modify: `index.html` (add parallax JS to script section)
- Modify: `en.html` (same)

**Step 1: Add parallax JS**

Add to the existing `<script>` section:

```javascript
// Parallax scroll effect
(function() {
  const hero = document.querySelector('.hero');
  const heroBefore = hero;
  const watermarks = document.querySelectorAll('.section-watermark');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Hero background parallax
    if (scrollY < window.innerHeight) {
      hero.style.backgroundPositionY = (scrollY * 0.3) + 'px';
    }
    // Watermark parallax
    watermarks.forEach(wm => {
      const rect = wm.parentElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (rect.top / window.innerHeight) * 30;
        wm.style.transform = `translateX(-50%) translateY(${offset}px)`;
      }
    });
  }, { passive: true });
})();
```

**Step 2: Verify**

Scroll page, confirm hero background shifts slightly and watermarks move with parallax.

**Step 3: Commit**

```bash
git add index.html en.html
git commit -m "feat: add parallax scroll effect for hero and watermarks"
```

---

### Task 13: Add Section-Specific Entrance Animations

**Files:**
- Modify: `index.html` (update animation classes on sections)
- Modify: `en.html` (same)
- Modify: `css/animations.css` (add stagger for achievement cards)

**Step 1: Update section animation classes in HTML**

In both `index.html` and `en.html`, change the animation classes on key sections:

- **About section content**: Change `fade-in` to `slide-in-left` on the about-image-area, and `slide-in-right` on about-text (if not already)
- **Achievement cards**: Keep `fade-in` but add `stagger-children` class to `achievements-grid`
- **Schedule cards**: Change wrapper to use `slide-in-right`
- **Gallery section**: Change gallery-photos wrapper to use `scale-in`
- **Contact columns**: First column `slide-in-left`, second column `slide-in-right`

**Step 2: Add timeline flash effect CSS**

Append to `css/animations.css`:

```css
/* ===== Timeline Flash ===== */
.timeline-item.visible::before {
  animation: timelineFlash 0.4s ease-out;
}
@keyframes timelineFlash {
  0% { box-shadow: 0 0 0 2px var(--primary), 0 0 20px rgba(255,107,0,0.6); }
  100% { box-shadow: 0 0 0 2px var(--primary); }
}
```

**Step 3: Commit**

```bash
git add index.html en.html css/animations.css
git commit -m "feat: add section-specific entrance animations and timeline flash"
```

---

### Task 14: Final QA and Polish

**Files:**
- All modified files

**Step 1: Full page visual review**

Open index.html, en.html, and results.html. Verify:
- [ ] All blues/cyans are replaced with oranges
- [ ] Fire particles render in hero
- [ ] Glitch animation fires on load
- [ ] Button ripple works on click
- [ ] Cards glow orange on hover
- [ ] Parallax scrolling is smooth
- [ ] Section entrances are varied and smooth
- [ ] Timeline flash fires
- [ ] Mobile menu is dark (not blue)
- [ ] Language switch is orange-themed
- [ ] Results page header is dark-themed
- [ ] No leftover blue/cyan colors visible

**Step 2: Mobile responsive check**

Resize to 768px and 480px widths. Confirm:
- [ ] Particles don't break layout
- [ ] Animations don't cause horizontal scroll
- [ ] All colors correct on mobile

**Step 3: Performance check**

Open DevTools Performance tab, confirm no janky frames from particles.

**Step 4: Fix any remaining issues found**

**Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete Inferno theme - black × orange with enhanced animations"
```
