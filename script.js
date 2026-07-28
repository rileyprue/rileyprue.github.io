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

  // Floating logo parallax
  document.querySelectorAll('.floating-logo').forEach((logo, index) => {
    const speed = 0.04 + index * 0.01;
    logo.style.transform = `translateY(${y * speed}px)`;
  });
});

// Subtle card tilt (desktop only)
if (window.innerWidth > 768) {
  document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -5;
      const rotateY = ((x / rect.width) - 0.5) * 5;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-6px)
      `;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}