"use strict";
// src/main.ts
// ---- Mobile nav toggle ----
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
function closeNav() {
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('is-open');
    navToggle === null || navToggle === void 0 ? void 0 : navToggle.setAttribute('aria-expanded', 'false');
}
navToggle === null || navToggle === void 0 ? void 0 : navToggle.addEventListener('click', () => {
    const isOpen = navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
navLinks === null || navLinks === void 0 ? void 0 : navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
});
// ---- Navbar scrolled state + back-to-top visibility ----
const toTopBtn = document.getElementById('toTop');
function handleScroll() {
    const scrolled = window.scrollY > 40;
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle('is-scrolled', scrolled);
    toTopBtn === null || toTopBtn === void 0 ? void 0 : toTopBtn.classList.toggle('is-visible', window.scrollY > 500);
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();
toTopBtn === null || toTopBtn === void 0 ? void 0 : toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// ---- Active nav link highlighting ----
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('a[data-nav]');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting)
            return;
        const id = entry.target.id;
        navAnchors.forEach((a) => {
            a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
        });
    });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((section) => navObserver.observe(section));
// ---- Scroll-reveal animation ----
const revealTargets = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
revealTargets.forEach((target) => revealObserver.observe(target));
