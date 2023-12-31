export default class InfiniteCarousel {
  constructor(prevBtn, nextBtn, slides) {
    this.prevBtn = document.querySelector(prevBtn);
    this.nextBtn = document.querySelector(nextBtn);
    this.slides = Array.from(document.querySelectorAll(slides));

    this.currentItem = 0;
    this.maxItems = this.slides.length;
    this.screenWidth = window.innerWidth;

    this.moveSlideLeft = this.moveSlideLeft.bind(this);
    this.moveSlideRight = this.moveSlideRight.bind(this);
  }

  callNextSlide() {
    this.slides.forEach((item) => {
      item.classList.remove("selected");
    });
    this.slides[this.currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  createEvents() {
    this.prevBtn.addEventListener("click", this.moveSlideLeft);
    this.nextBtn.addEventListener("click", this.moveSlideRight);
  }

  moveSlideLeft() {
    this.currentItem--;
    if (this.currentItem < 0) {
      this.currentItem = this.maxItems - 1;
    }
    this.callNextSlide();
  }
  moveSlideRight() {
    this.currentItem++;
    if (this.currentItem >= this.maxItems) {
      this.currentItem = 0;
    }
    this.callNextSlide();
  }

  init() {
    this.createEvents();
    return this;
  }
}
