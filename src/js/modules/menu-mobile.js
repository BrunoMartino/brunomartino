import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelectorAll(menuList);
    this.html = document.querySelector("html");
    this.isOpen = false;

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.openMenu = this.openMenu.bind(this);
    this.linkPreventRemove = this.linkPreventRemove.bind(this);
  }

  linkPreventRemove(event) {
    event.preventDefault();
  }

  openMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    if (!this.isOpen) {
      this.menuList.forEach((element) => {
        element.classList.remove("hidden");
      });
      this.menuButton.classList.add("active");

      outsideClick(Array.from(this.menuList), this.events, () => {
        this.menuList.forEach((element) => {
          element.classList.add("hidden");
        });
        this.menuButton.classList.remove("active");
        this.isOpen = false;
      });
      this.isOpen = true;
    }
  }
  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
