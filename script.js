function scrollGallery(direction) {
  const galleryContainer = document.querySelector(".gallery-container");
  const scrollAmount = galleryContainer.clientWidth / 3; // Adjust the scroll amount as needed
  galleryContainer.scrollBy({
    left: scrollAmount * direction,
    behavior: "smooth",
  });
}
