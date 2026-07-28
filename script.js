const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.18
});

reveals.forEach((el) => observer.observe(el));

// Parallax background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelector('.bg-gradient').style.transform =
    `translateY(${scrolled * 0.12}px)`;

  document.querySelector('.particles').style.transform =
    `translateY(${scrolled * 0.04}px)`;
});

// 3D tilt effect
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (0.5 - y / rect.height) * 10;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Mouse spotlight effect
const spotlight = document.createElement('div');
spotlight.style.position = 'fixed';
spotlight.style.width = '280px';
spotlight.style.height = '280px';
spotlight.style.borderRadius = '50%';
spotlight.style.pointerEvents = 'none';
spotlight.style.background = 'radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)';
spotlight.style.zIndex = '-1';
spotlight.style.filter = 'blur(10px)';
document.body.appendChild(spotlight);

window.addEventListener('mousemove', (e) => {
  spotlight.style.left = `${e.clientX - 140}px`;
  spotlight.style.top = `${e.clientY - 140}px`;
});