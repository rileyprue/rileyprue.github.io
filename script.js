// Smooth reveal animations
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.14
});

reveals.forEach((el) => observer.observe(el));

// Subtle background parallax
const bg = document.querySelector('.bg-glow');

window.addEventListener('scroll', () => {
  const y = window.pageYOffset;
  bg.style.transform = `translateY(${y * 0.06}px)`;
});