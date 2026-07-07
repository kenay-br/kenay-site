/* ============================================================
   KENAY — main.js
   ============================================================ */

'use strict';

/* ── Utilidades ─────────────────────────────────────────── */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


/* ── 1. Scroll Progress Bar ─────────────────────────────── */

function initScrollProgress() {
  const bar = $('#scrollProgress');
  if (!bar) return;

  function update() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}


/* ── 2. Navbar scroll state ─────────────────────────────── */

function initNavbar() {
  const navbar = $('#navbar');
  if (!navbar) return;

  function update() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}


/* ── 3. Menu Mobile ─────────────────────────────────────── */

function initMobileMenu() {
  const toggle   = $('#menuToggle');
  const menu     = $('#mobileMenu');
  const closeBtn = $('#menuClose');
  if (!toggle || !menu) return;

  function open() {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function close() {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggle.focus();
  }

  toggle.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);

  /* Fecha ao clicar em link do menu */
  $$('.mobile-menu__link', menu).forEach(link => {
    link.addEventListener('click', close);
  });

  /* Fecha com Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !menu.hidden) close();
  });

  /* Fecha ao clicar fora (no overlay) */
  menu.addEventListener('click', e => {
    if (e.target === menu) close();
  });
}


/* ── 4. Smooth scroll em links âncora ───────────────────── */

function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });
}


/* ── 5. Reveal on scroll (Intersection Observer) ────────── */

function initReveal() {
  /* Elementos hero recebem is-visible imediatamente no load */
  $$('.animate-fade-in, .animate-fade-up, .animate-fade-left').forEach(el => {
    if (prefersReducedMotion) {
      el.classList.add('is-visible');
      return;
    }
    /* Pequeno delay para garantir que o CSS foi aplicado */
    requestAnimationFrame(() => {
      setTimeout(() => el.classList.add('is-visible'),
        parseInt(getComputedStyle(el).getPropertyValue('--delay') || '0') || 0);
    });
  });

  if (prefersReducedMotion) {
    $$('.reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(getComputedStyle(el).getPropertyValue('--delay') || '0') || 0;
      setTimeout(() => el.classList.add('is-visible'), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal').forEach(el => observer.observe(el));
}


/* ── 6. Counter animado (Social Proof) ──────────────────── */

function animateCounter(el) {
  const target   = parseFloat(el.dataset.target);
  const prefix   = el.dataset.prefix || '';
  const suffix   = el.dataset.suffix || '';
  const duration = 1500;
  const start    = performance.now();

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value    = Math.floor(easeOut(progress) * target);
    el.textContent = prefix + value.toLocaleString('pt-BR') + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function initCounters() {
  const counters = $$('[data-target]');
  if (!counters.length) return;

  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}


/* ── 7. FAQ Accordion ───────────────────────────────────── */

function initFaq() {
  $$('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const answerId = btn.getAttribute('aria-controls');
      const answer   = document.getElementById(answerId);
      if (!answer) return;

      /* Fecha todos os outros */
      $$('.faq__question').forEach(other => {
        if (other === btn) return;
        other.setAttribute('aria-expanded', 'false');
        const otherId  = other.getAttribute('aria-controls');
        const otherAns = document.getElementById(otherId);
        if (otherAns) otherAns.hidden = true;
      });

      /* Alterna o atual */
      const next = !expanded;
      btn.setAttribute('aria-expanded', String(next));
      answer.hidden = !next;
    });
  });
}


/* ── 8. Back to Top ─────────────────────────────────────── */

function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;

  function update() {
    const show = window.scrollY > 400;
    btn.hidden = !show;
    /* Pequeno delay para o hidden ser removido antes da transição */
    requestAnimationFrame(() => btn.classList.toggle('visible', show));
  }

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  window.addEventListener('scroll', update, { passive: true });
  update();
}


/* ── 9. Active nav link no scroll ───────────────────────── */

function initActiveNav() {
  const sections = $$('section[id]');
  const links    = $$('.navbar__link[href^="#"]');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, { rootMargin: '-30% 0px -65% 0px' });

  sections.forEach(s => observer.observe(s));
}


/* ── Init ───────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initReveal();
  initCounters();
  initFaq();
  initBackToTop();
  initActiveNav();
});
