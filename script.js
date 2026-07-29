const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
  if (!heroImage) return;

  const offset = window.scrollY * 0.12;
  heroImage.style.transform = `translateY(${offset}px) scale(1.12)`;
});
