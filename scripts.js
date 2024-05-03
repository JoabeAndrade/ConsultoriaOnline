const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

var lastScrollTop = 0;

var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  var header = document.getElementById('header');

  if (currentScroll > lastScrollTop) {
    // Role para baixo
    header.classList.remove('show-header');
    header.classList.add('hide-header');
  } else {
    // Role para cima
    header.classList.remove('hide-header');
    header.classList.add('show-header');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});