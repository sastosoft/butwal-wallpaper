window.onscroll = function () {
  const header = document.querySelector(".header");
  const sticky = header.offsetTop;

  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
