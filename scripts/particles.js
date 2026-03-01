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
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const hero = document.getElementById('hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'fireParticles';
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    hero.insertBefore(canvas, hero.firstChild);

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
