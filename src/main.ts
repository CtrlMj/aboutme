// src/main.ts

// ---- Mobile nav toggle ----
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function closeNav(): void {
  navbar?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
  const isOpen = navbar?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNav);
});

// ---- Navbar scrolled state + back-to-top visibility ----
const toTopBtn = document.getElementById('toTop');

function handleScroll(): void {
  const scrolled = window.scrollY > 40;
  navbar?.classList.toggle('is-scrolled', scrolled);
  toTopBtn?.classList.toggle('is-visible', window.scrollY > 500);
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

toTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- Active nav link highlighting ----
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll<HTMLAnchorElement>('a[data-nav]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navAnchors.forEach((a) => {
        a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
      });
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);

sections.forEach((section) => navObserver.observe(section));

// ---- Scroll-reveal animation ----
const revealTargets = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((target) => revealObserver.observe(target));
