function scrollGallery(direction) {
  const galleryContainer = document.querySelector(".gallery-container");
  const scrollAmount = galleryContainer.clientWidth / 3; // Adjust the scroll amount as needed
  galleryContainer.scrollBy({
    left: scrollAmount * direction,
    behavior: "smooth",
  });
}

// JavaScript for typewriter effect
const text = "Welcome to Butwal Wallpaper";
const typingSpeed = 100; // Speed of typing in milliseconds
const galleryHeading = document.getElementById("gallery-heading");

function startTypingEffect() {
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      galleryHeading.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Reset the heading after typing is complete
      setTimeout(() => {
        galleryHeading.innerHTML = ""; // Clear the text
        index = 0; // Reset index
        typeWriter(); // Restart typing
      }, 1000); // Delay before restarting
    }
  }

  typeWriter(); // Start the typing effect
}

// Start the typewriter effect when the page loads
window.onload = startTypingEffect;
