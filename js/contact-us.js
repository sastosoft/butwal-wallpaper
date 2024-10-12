document.addEventListener("DOMContentLoaded", () => {
  const text = "Contact Us"; // Text to type
  const h2 = document.getElementById("typewriter-contact"); // Get the h2 element
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
