// Reveal animations
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach((el) => observer.observe(el));

// Smooth parallax background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;

  document.querySelector('.bg').style.transform =
    `translateY(${scrolled * 0.08}px)`;

  document.querySelector('.grid-overlay').style.transform =
    `translateY(${scrolled * 0.03}px)`;
});

// 3D tilt cards (desktop only)
if (window.innerWidth > 768) {
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 8;
      const rotateX = (0.5 - y / rect.height) * 8;

      card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Cursor spotlight effect
const spotlight = document.createElement('div');
spotlight.style.position = 'fixed';
spotlight.style.width = '260px';
spotlight.style.height = '260px';
spotlight.style.borderRadius = '50%';
spotlight.style.pointerEvents = 'none';
spotlight.style.background = 'radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)';
spotlight.style.filter = 'blur(10px)';
spotlight.style.zIndex = '-1';
document.body.appendChild(spotlight);

window.addEventListener('mousemove', (e) => {
  spotlight.style.left = `${e.clientX - 130}px`;
  spotlight.style.top = `${e.clientY - 130}px`;
});