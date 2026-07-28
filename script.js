// Reveal animations
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Background parallax
const bg = document.querySelector('.bg-glow');

window.addEventListener('scroll', () => {
  const y = window.pageYOffset;
  bg.style.transform = `translateY(${y * 0.05}px)`;

  // Apple-style card transitions
  document.querySelectorAll('.scroll-card').forEach((card) => {
    const rect = card.getBoundingClientRect();
    const progress = Math.min(Math.max(1 - rect.top / window.innerHeight, 0), 1);

    const icon = card.querySelector('.scroll-icon');

    card.style.transform = `translateY(${progress * -12}px) scale(${1 - progress * 0.015})`;
    card.style.opacity = `${0.78 + progress * 0.22}`;

    if (icon) {
      icon.style.transform = `translateY(${progress * -18}px) rotate(${progress * -4}deg)`;
      icon.style.opacity = `${0.7 + progress * 0.3}`;
    }
  });
});