export default class SmoothScroll {
  constructor(internLinks) {
    this.internLinks = document.querySelectorAll(internLinks);
  }

  createEvents() {
    this.internLinks.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        this.scrollSection(element);
      });
    });
  }
  scrollSection(element) {
    document.querySelector(element.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  init() {
    this.createEvents();
  }
}
