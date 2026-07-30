/* =========================
   TYPING EFFECT
========================= */

const typingElements = document.querySelectorAll(".typing");

const typingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const element = entry.target;
    const text = element.dataset.text || element.textContent;

    element.textContent = "";

    let i = 0;

    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, 40);
      }
    };

    type();

    typingObserver.unobserve(element);
  });
}, {
  threshold: 0.4
});

typingElements.forEach(element => {
  typingObserver.observe(element);
});
