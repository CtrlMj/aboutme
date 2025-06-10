// src/main.ts

console.log("TypeScript loaded and running!");

// Highlight project cards on hover
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('shadow-lg');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('shadow-lg');
  });
});

// Scroll observer to log active section
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.6
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`Now viewing: ${entry.target.id}`);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
