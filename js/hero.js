let currentIndex = 0; // Current slide index
const slides = document.querySelectorAll(".slide"); // Get all slides

function showSlide(index) {
  const totalSlides = slides.length;
  currentIndex = (index + totalSlides) % totalSlides; // Cycle index
  const offset = -currentIndex * 100; // Calculate offset in percentage
  document.querySelector(
    ".hero-slider"
  ).style.transform = `translateX(${offset}%)`; // Move slides
}

function nextSlide() {
  showSlide(currentIndex + 1); // Move to the next slide
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000); // Adjust timing as needed
showSlide(currentIndex); // Show the first slide initially
