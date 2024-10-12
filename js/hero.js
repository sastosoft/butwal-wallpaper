// Select the gallery and images
const gallery = document.querySelector(".hero-gallery");
const images = document.querySelectorAll(".hero-gallery img");
let currentIndex = 0;

// Function to change the image
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Update index
  const offset = -currentIndex * 100; // Calculate offset
  gallery.style.transform = `translateX(${offset}%)`; // Apply offset
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
