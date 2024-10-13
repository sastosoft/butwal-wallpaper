document.addEventListener("DOMContentLoaded", () => {
  const text = "Kitchen"; // Text to type
  const h2 = document.getElementById("typewriter-kitchen"); // Get the h2 element
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

// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all category elements
  const categories = document.querySelectorAll(".category");

  // Function to check visibility of each category
  function checkVisibility() {
    // Get the height of the window
    const windowHeight = window.innerHeight;

    // Loop through each category
    categories.forEach((category) => {
      // Get the position of the category relative to the viewport
      const rect = category.getBoundingClientRect();

      // Check if the category is within the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // If in view, add the 'visible' class to trigger CSS animations
        category.classList.add("visible");
      }
    });
  }

  // Attach the checkVisibility function to the scroll event
  window.addEventListener("scroll", checkVisibility);

  // Check visibility on page load
  checkVisibility();
});

// scroll reveal
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    categories.forEach((category) => {
      const categoryTop = category.getBoundingClientRect().top;

      // If the category is in view
      if (categoryTop < windowHeight * 0.8 && categoryTop > 0) {
        category.classList.add("reveal"); // Add the reveal class
      } else {
        category.classList.remove("reveal"); // Remove the reveal class when not in view
      }
    });
  };

  // Run the function on scroll
  window.addEventListener("scroll", revealOnScroll);

  // Run the function on initial load
  revealOnScroll();
});
