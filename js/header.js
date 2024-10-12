// Select the header element
const header = document.getElementById("header");

// Add an event listener to track scroll events
window.addEventListener("scroll", () => {
  // Check if the page has been scrolled more than 50px
  if (window.scrollY > 50) {
    // Add the 'sticky' class to change background color and link color
    header.classList.add("sticky");

    // Hide the nav menu if it is active
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  } else {
    // Remove the 'sticky' class when scrolled back to the top
    header.classList.remove("sticky");
  }
});

// Select the menu icon and nav menu
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

// Add an event listener to toggle the navigation menu
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Show or hide the menu
});
