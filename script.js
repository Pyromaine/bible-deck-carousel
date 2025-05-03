const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  index = (i + items.length) % items.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => {
  showSlide(index - 1);
});

next.addEventListener('click', () => {
  showSlide(index + 1);
});

// Optional: Auto-play
setInterval(() => {
  showSlide(index + 1);
}, 5000);

