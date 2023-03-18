var ButtonEl = document.getElementsByClassName("button");
var SlideEl = document.getElementById("slide");

ButtonEl[0].onclick = function () {
  SlideEl.style.transform = "translateX(0px)";
  for (i = 0; i < 4; i++) {
    ButtonEl[i].classList.remove("Active");
  }
  this.classList.add("Active");
};
ButtonEl[1].onclick = function () {
  SlideEl.style.transform = "translateX(-800px)";
  for (i = 0; i < 4; i++) {
    ButtonEl[i].classList.remove("Active");
  }
  this.classList.add("Active");
};
ButtonEl[2].onclick = function () {
  SlideEl.style.transform = "translateX(-1600px)";
  for (i = 0; i < 4; i++) {
    ButtonEl[i].classList.remove("Active");
  }
  this.classList.add("Active");
};
ButtonEl[3].onclick = function () {
  SlideEl.style.transform = "translateX(-2400px)";
  for (i = 0; i < 4; i++) {
    ButtonEl[i].classList.remove("Active");
  }
  this.classList.add("Active");
};

var loader = document.querySelector("#preloader");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disappear");
}
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-bar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// let sr = ScrollReveal({
//   distance: "25px",
//   duration: 2500,
//   reset: true,
// });

// sr.reveal(".home-text", { delay: 190, origin: "bottom" });
// sr.reveal(".home-b", { delay: 190, origin: "top" });
// sr.reveal(".about, .portfolio, .contact, .hero, .services", {
//   delay: 500,
//   origin: "bottom",
// });
import ScrollReveal from "scrollreveal";
ScrollReveal().reveal(".header-area");

function myfunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
