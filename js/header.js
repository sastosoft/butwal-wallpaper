// Select the header element
const header = document.getElementById("header");

// Function to handle scroll and touch events
const handleScroll = () => {
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
};

// Add event listeners for scroll and touchmove
window.addEventListener("scroll", handleScroll);
window.addEventListener("touchmove", handleScroll);

// Select the menu icon and nav menu
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

// Add an event listener to toggle the navigation menu
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Show or hide the menu
});
