import MenuMobile from "./modules/menu-mobile.js";
import SlideNav from "./modules/slide.js";
import Typewriter from "./modules/typewriter.js";
import InfiniteCarousel from "./modules/infinite-carousel.js";
import SmoothScroll from "./modules/smoothScroll.js";
import AnimaScroll from "./modules/animaScroll.js";

const menuMobile = new MenuMobile(".mobile-btn", ".dropdown-list");
menuMobile.init();

const slideHome = new SlideNav(".slide-home", ".home-wrapper");
slideHome.init();

const slideWorks = new InfiniteCarousel(
  ".prev-btn",
  ".next-btn",
  ".slide-work li"
);
slideWorks.init();

const slideStacks = new SlideNav(".slide-stack", ".wrapper-stack");
slideStacks.init();

const links = new SmoothScroll('a[href^="#"]');
links.init();

const animaScroll = new AnimaScroll('[data-anima="scroll"]');
animaScroll.init();

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

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 500) {
    navbar.style.position = "fixed";
    navbar.style.top = 0;
    navbar.style.zIndex = 9999;
  } else {
    navbar.style.position = "relative";
  }
});
