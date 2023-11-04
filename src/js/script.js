import MenuMobile from "./modules/menu-mobile.js";

const menuMobile = new MenuMobile(".mobile-btn", ".dropdown-list");
menuMobile.init();

const parallax = document.getElementById("parallax-bg");
console.log(parallax);

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  parallax.style.bottom = value * 0.3 + "px";
});
