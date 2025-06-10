"use strict";
// src/main.ts
console.log("TypeScript loaded and running!");
// Highlight project cards on hover
document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        card.classList.add('shadow-lg');
    });
    card.addEventListener('mouseleave', function () {
        card.classList.remove('shadow-lg');
    });
});
// Scroll observer to log active section
var sections = document.querySelectorAll('section');
var options = {
    threshold: 0.6
};
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            console.log("Now viewing: ".concat(entry.target.id));
        }
    });
}, options);
sections.forEach(function (section) {
    observer.observe(section);
});
