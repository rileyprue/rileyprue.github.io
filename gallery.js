const images = [...document.querySelectorAll('.photo-grid img')];
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');

let current = 0;

function showImage(index) {
  current = index;
  lightboxImage.src = images[index].src;
  lightbox.classList.add('active');
}

images.forEach((img, index) => {
  img.addEventListener('click', () => showImage(index));
});

document.querySelector('.lightbox-close').addEventListener('click', () => {
  lightbox.classList.remove('active');
});

document.querySelector('.lightbox-prev').addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  lightboxImage.src = images[current].src;
});

document.querySelector('.lightbox-next').addEventListener('click', () => {
  current = (current + 1) % images.length;
  lightboxImage.src = images[current].src;
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') lightbox.classList.remove('active');
  if (e.key === 'ArrowLeft') document.querySelector('.lightbox-prev').click();
  if (e.key === 'ArrowRight') document.querySelector('.lightbox-next').click();
});
