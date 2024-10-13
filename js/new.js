document.addEventListener("DOMContentLoaded", () => {
  const text = "Wall Foams"; // Text to type
  const h2 = document.getElementById("typewriter-new"); // Get the h2 element
  let index = 0; // Start index
  const typingSpeed = 150; // Typing speed
  const pauseDuration = 1000; // Pause before restarting

  function type() {
    if (index < text.length) {
      h2.innerHTML += text.charAt(index); // Add the next character
      index++;
      setTimeout(type, typingSpeed); // Continue typing
    } else {
      // When typing completes, reset after a pause
      setTimeout(() => {
        h2.innerHTML = ""; // Clear the text
        index = 0; // Reset index
        type(); // Start again
      }, pauseDuration);
    }
  }

  type(); // Start the typewriter effect
});

// Scroll

document.addEventListener("DOMContentLoaded", function () {
  const wallpaperItems = document.querySelectorAll(".wallpaper");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    wallpaperItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;

      // Check if the item is in view
      if (itemTop < windowHeight - 100) {
        item.classList.add("reveal"); // Add the reveal class
      } else {
        item.classList.remove("reveal"); // Remove it if not in view
      }
    });
  }

  // Initial check
  revealOnScroll();

  // Add scroll event listener
  window.addEventListener("scroll", revealOnScroll);
});
