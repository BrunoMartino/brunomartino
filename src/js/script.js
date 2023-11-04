import MenuMobile from "./modules/menu-mobile.js";
import SlideNav from "./modules/slide.js";
import Typewriter from "./modules/typewriter.js";

const menuMobile = new MenuMobile(".mobile-btn", ".dropdown-list");
menuMobile.init();

const slideHome = new SlideNav(".slide", ".slide-wrapper");
slideHome.init();

const titles = document.querySelectorAll(".titles h1");
let currentIndex = 0;

function toggleClasses() {
  if (currentIndex >= titles.length) {
    currentIndex = 0;
  }
  titles.forEach((title) => {
    title.classList.add("hidden");
    title.classList.remove("phrase");
  });
  titles[currentIndex].classList.remove("hidden");
  titles[currentIndex].classList.add("phrase");

  currentIndex++;

  let textwriter = new Typewriter(".phrase");
  textwriter.init();
}
toggleClasses();
setInterval(toggleClasses, 3600);

const parallax = document.getElementById("parallax-bg");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  parallax.style.bottom = value * 0.5 + "px";
});
