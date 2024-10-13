document.addEventListener("DOMContentLoaded", () => {
  const text = "Our Services"; // Text to type
  const h2 = document.getElementById("typewriter-services"); // Get the h2 element
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

// Scroll reveal

document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".service-item");

  const checkVisibility = () => {
    const windowHeight = window.innerHeight;

    serviceItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;

      // Check if the item is within the viewport
      if (itemTop < windowHeight - 50) {
        // Trigger slightly before it enters
        item.classList.add("visible"); // Add class when item is in view
      }
    });
  };

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Run on initial load
});

// Bakcground images

document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".service-item");

  // Set the background image for each service item
  serviceItems.forEach((item) => {
    const bgImage = item.getAttribute("data-bg");
    if (bgImage) {
      item.style.backgroundImage = bgImage; // Apply the background image
    }
  });

  // Function to add the 'visible' class when items are in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  serviceItems.forEach((item) => {
    observer.observe(item);
  });
});
