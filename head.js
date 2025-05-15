

const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) slide.classList.add('active');
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 5000); // Change every 5 seconds
