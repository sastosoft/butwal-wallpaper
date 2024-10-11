document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to Our Wallpaper Collection";
  const typewriterElement = document.getElementById("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      typewriterElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust typing speed here (100ms)
    } else {
      setTimeout(() => {
        typewriterElement.innerHTML = ""; // Clear text
        index = 0; // Reset index
        type(); // Restart typing
      }, 2000); // Pause before restarting (2 seconds)
    }
  }

  type();
});
