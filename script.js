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

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelector('.bg-gradient').style.transform =
    `translateY(${scrolled * 0.12}px)`;
});
