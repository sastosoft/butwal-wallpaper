let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const sticky = header.offsetTop;

  let scrollTop = window.scrollY || document.documentElement.scrollTop; // Get the current scroll position

  if (scrollTop > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
