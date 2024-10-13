const text = "Namaste, Welcome to Butwal Wallpaper"; // Text to type
const h1 = document.getElementById("typewriter");
let index = 0; // Start index
const typingSpeed = 150; // Typing speed

function type() {
  if (index < text.length) {
    h1.innerHTML += text.charAt(index); // Add the next character
    index++;
    setTimeout(type, typingSpeed); // Continue typing
  } else {
    // When the text is fully typed, reset the index and clear the text
    setTimeout(() => {
      h1.innerHTML = ""; // Clear the text
      index = 0; // Reset index to start typing again
      type(); // Start typing again
    }, 1000); // Pause before starting again
  }
}

document.addEventListener("DOMContentLoaded", type);
