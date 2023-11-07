/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/infinite-carousel.js":
/*!*********************************************!*\
  !*** ./src/js/modules/infinite-carousel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InfiniteCarousel)\n/* harmony export */ });\nclass InfiniteCarousel {\r\n  constructor(prevBtn, nextBtn, slides) {\r\n    this.prevBtn = document.querySelector(prevBtn);\r\n    this.nextBtn = document.querySelector(nextBtn);\r\n    this.slides = Array.from(document.querySelectorAll(slides));\r\n\r\n    this.currentItem = 0;\r\n    this.maxItems = this.slides.length;\r\n    this.screenWidth = window.innerWidth;\r\n\r\n    this.moveSlideLeft = this.moveSlideLeft.bind(this);\r\n    this.moveSlideRight = this.moveSlideRight.bind(this);\r\n  }\r\n\r\n  callNextSlide() {\r\n    this.slides.forEach((item) => {\r\n      item.classList.remove(\"selected\");\r\n    });\r\n    this.slides[this.currentItem].scrollIntoView({\r\n      behavior: \"smooth\",\r\n      inline: \"start\",\r\n      block: \"nearest\",\r\n    });\r\n  }\r\n\r\n  createEvents() {\r\n    this.prevBtn.addEventListener(\"click\", this.moveSlideLeft);\r\n    this.nextBtn.addEventListener(\"click\", this.moveSlideRight);\r\n  }\r\n\r\n  moveSlideLeft() {\r\n    this.currentItem--;\r\n    if (this.currentItem < 0) {\r\n      this.currentItem = this.maxItems - 1;\r\n    }\r\n    this.callNextSlide();\r\n  }\r\n  moveSlideRight() {\r\n    this.currentItem++;\r\n    if (this.currentItem >= this.maxItems) {\r\n      this.currentItem = 0;\r\n    }\r\n    this.callNextSlide();\r\n  }\r\n\r\n  init() {\r\n    this.createEvents();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://portfolio_template/./src/js/modules/infinite-carousel.js?");

/***/ }),

/***/ "./src/js/modules/menu-mobile.js":
/*!***************************************!*\
  !*** ./src/js/modules/menu-mobile.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./src/js/modules/outsideclick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(menuButton, menuList, events) {\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelectorAll(menuList);\r\n    this.html = document.querySelector(\"html\");\r\n    this.isOpen = false;\r\n\r\n    if (events === undefined) {\r\n      this.events = [\"touchstart\", \"click\"];\r\n    } else {\r\n      this.events = events;\r\n    }\r\n    this.openMenu = this.openMenu.bind(this);\r\n    this.linkPreventRemove = this.linkPreventRemove.bind(this);\r\n  }\r\n\r\n  linkPreventRemove(event) {\r\n    event.preventDefault();\r\n  }\r\n\r\n  openMenu(event) {\r\n    if (event.type === \"touchstart\") event.preventDefault();\r\n    if (!this.isOpen) {\r\n      this.menuList.forEach((element) => {\r\n        element.classList.remove(\"hidden\");\r\n      });\r\n      this.menuButton.classList.add(\"active\");\r\n\r\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array.from(this.menuList), this.events, () => {\r\n        this.menuList.forEach((element) => {\r\n          element.classList.add(\"hidden\");\r\n        });\r\n        this.menuButton.classList.remove(\"active\");\r\n        this.isOpen = false;\r\n      });\r\n      this.isOpen = true;\r\n    }\r\n  }\r\n  addMenuMobileEvents() {\r\n    this.events.forEach((event) => {\r\n      this.menuButton.addEventListener(event, this.openMenu);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://portfolio_template/./src/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./src/js/modules/outsideclick.js":
/*!****************************************!*\
  !*** ./src/js/modules/outsideclick.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(elements, events, callback) {\r\n  const html = document.querySelector(\"html\");\r\n\r\n  function handleOutsideClick(event) {\r\n    const isOutside = !elements.some((element) =>\r\n      element.contains(event.target)\r\n    );\r\n\r\n    if (isOutside) {\r\n      callback();\r\n      events.forEach((event) => {\r\n        html.removeEventListener(event, handleOutsideClick);\r\n      });\r\n    }\r\n  }\r\n\r\n  events.forEach((event) => {\r\n    setTimeout(() => {\r\n      html.addEventListener(event, handleOutsideClick);\r\n    }, 0);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://portfolio_template/./src/js/modules/outsideclick.js?");

/***/ }),

/***/ "./src/js/modules/slide.js":
/*!*********************************!*\
  !*** ./src/js/modules/slide.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slide: () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\nclass Slide {\r\n  constructor(slide, wrapper) {\r\n    this.slide = document.querySelector(slide);\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.dist = { finalPosition: 0, startX: 0, movement: 0, movePosition: 0 };\r\n    this.activeClass = \"ativo\";\r\n    this.changeEvent = new Event(\"changeEvent\");\r\n    this.mousedown;\r\n    this.mouseup;\r\n  }\r\n\r\n  // slide transition and dists\r\n  transitionSlide(active) {\r\n    this.slide.style.transition = active ? \"transform .4s\" : \"\";\r\n  }\r\n\r\n  moveSlide(distX) {\r\n    this.dist.movePosition = distX;\r\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0`;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\r\n    return this.dist.finalPosition - this.dist.movement;\r\n  }\r\n\r\n  // slide movement and click\r\n\r\n  removeAnchorClick() {\r\n    const targetElement = event.target;\r\n    const isAnchor = targetElement.closest(\"a\");\r\n    function preventedDefault(event) {\r\n      event.preventDefault();\r\n    }\r\n    if (isAnchor) {\r\n      isAnchor.addEventListener(\"click\", preventedDefault);\r\n      setTimeout(() => {\r\n        isAnchor.removeEventListener(\"click\", preventedDefault);\r\n      }, 180);\r\n    }\r\n  }\r\n\r\n  onStart(event) {\r\n    let movetype;\r\n    if (event.type === \"mousedown\") {\r\n      event.preventDefault();\r\n      this.dist.startX = event.clientX;\r\n      movetype = \"mousemove\";\r\n      this.mousedown = event.timeStamp;\r\n    } else {\r\n      this.dist.startX = event.changedTouches[0].clientX;\r\n      movetype = \"touchmove\";\r\n    }\r\n    this.wrapper.addEventListener(movetype, this.onMove);\r\n    this.transitionSlide(false);\r\n  }\r\n\r\n  onMove(event) {\r\n    const pointerPosition =\r\n      event.type === \"mousemove\"\r\n        ? event.clientX\r\n        : event.changedTouches[0].clientX;\r\n    const finalPosition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalPosition);\r\n  }\r\n\r\n  onEnd(event) {\r\n    const movetype = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\r\n    if (event.type === \"mouseup\") {\r\n      this.mouseup = event.timeStamp;\r\n    }\r\n    if (this.mouseup - this.mousedown > 150) {\r\n      this.removeAnchorClick();\r\n    }\r\n    this.wrapper.removeEventListener(movetype, this.onMove);\r\n    this.dist.finalPosition = this.dist.movePosition;\r\n    this.transitionSlide(true);\r\n    this.changeSlideOnEnd();\r\n  }\r\n\r\n  addSlideEvents() {\r\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\r\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\r\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\r\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\r\n  }\r\n\r\n  // init slides navigation\r\n\r\n  activePrevSlide() {\r\n    if (this.index.prev !== undefined) {\r\n      this.changeSlide(this.index.prev);\r\n    } else {\r\n      const last = this.slideArray.length - 1;\r\n      this.changeSlide(last);\r\n    }\r\n  }\r\n  activeNextSlide() {\r\n    if (this.index.next !== undefined) {\r\n      this.changeSlide(this.index.next);\r\n    } else {\r\n      this.changeSlide(0);\r\n    }\r\n  }\r\n  changeSlideOnEnd() {\r\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\r\n      return this.activeNextSlide();\r\n    } else if (this.dist.movement > 120 && this.index.next === undefined) {\r\n      return this.changeSlide(0);\r\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\r\n      return this.activePrevSlide();\r\n    } else if (this.dist.movement < -120 && this.index.prev === undefined) {\r\n      const last = this.slideArray.length - 1;\r\n      this.changeSlide(last);\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  // carousel function\r\n\r\n  carouselSlide() {\r\n    setInterval(() => {\r\n      this.activeNextSlide();\r\n    }, 5000);\r\n  }\r\n  // slides config\r\n\r\n  slidesConfig() {\r\n    this.slideArray = [...this.slide.children].map((element) => {\r\n      const position = this.slidePosition(element);\r\n      return { position, element };\r\n    });\r\n  }\r\n  slideIndexNav(index) {\r\n    const last = this.slideArray.length - 1;\r\n    this.index = {\r\n      prev: index ? index - 1 : undefined,\r\n      active: index,\r\n      next: index === last ? undefined : index + 1,\r\n    };\r\n  }\r\n  slidePosition(slide) {\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\r\n    return -(slide.offsetLeft - margin);\r\n  }\r\n\r\n  changeSlide(index) {\r\n    const activeSlide = this.slideArray[index];\r\n    this.moveSlide(activeSlide.position);\r\n    this.slideIndexNav(index);\r\n    this.dist.finalPosition = activeSlide.position;\r\n    this.changeActiveClass();\r\n    this.wrapper.dispatchEvent(this.changeEvent);\r\n  }\r\n  changeActiveClass() {\r\n    this.slideArray.forEach((item) => {\r\n      item.element.classList.remove(this.activeClass);\r\n    });\r\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\r\n  }\r\n\r\n  addResizeEvent(index) {\r\n    let size = this.slideArray[index].element.offsetWidth;\r\n    window.addEventListener(\"resize\", () => {\r\n      this.distX = -size * this.index.active;\r\n      this.moveSlide(this.distX);\r\n    });\r\n  }\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n  }\r\n  // init class slide on script file\r\n\r\n  init() {\r\n    this.bindEvents();\r\n    this.transitionSlide(true);\r\n    this.addSlideEvents();\r\n    this.slidesConfig();\r\n    this.changeSlide(0);\r\n    this.addResizeEvent(0);\r\n    this.carouselSlide();\r\n    return this;\r\n  }\r\n}\r\n\r\nclass SlideNav extends Slide {\r\n  constructor(slide, wrapper) {\r\n    super(slide, wrapper);\r\n    this.bindControlEvents();\r\n  }\r\n\r\n  addArrow(prev, next) {\r\n    this.prevElement = document.querySelector(prev);\r\n    this.nextElement = document.querySelector(next);\r\n    if (prev && next) this.addArrowEvent();\r\n  }\r\n\r\n  addArrowEvent() {\r\n    this.prevElement.addEventListener(\"click\", this.activePrevSlide);\r\n    this.nextElement.addEventListener(\"click\", this.activeNextSlide);\r\n  }\r\n\r\n  createControl() {\r\n    const control = document.createElement(\"ul\");\r\n    control.dataset.control = \"page-slide\";\r\n    this.slideArray.forEach((item, index) => {\r\n      control.innerHTML += `<li><a href=\"#slide${index + 1}\">${\r\n        index + 1\r\n      }</a></li>`;\r\n    });\r\n    this.wrapper.appendChild(control);\r\n    return control;\r\n  }\r\n\r\n  eventControl(item, index) {\r\n    item.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      this.changeSlide(index);\r\n    });\r\n    this.wrapper.addEventListener(\"changeEvent\", this.activeControlItem);\r\n  }\r\n\r\n  addControl(customControl) {\r\n    this.control =\r\n      document.querySelector(customControl) || this.createControl();\r\n    this.controlArray = [...this.control.children];\r\n    this.activeControlItem();\r\n    this.controlArray.forEach(this.eventControl);\r\n  }\r\n\r\n  activeControlItem() {\r\n    this.controlArray.forEach((item) =>\r\n      item.classList.remove(this.activeClass)\r\n    );\r\n    this.controlArray[this.index.active].classList.add(this.activeClass);\r\n  }\r\n\r\n  bindControlEvents() {\r\n    this.eventControl = this.eventControl.bind(this);\r\n    this.activeControlItem = this.activeControlItem.bind(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://portfolio_template/./src/js/modules/slide.js?");

/***/ }),

/***/ "./src/js/modules/typewriter.js":
/*!**************************************!*\
  !*** ./src/js/modules/typewriter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Typewriter)\n/* harmony export */ });\nclass Typewriter {\r\n  constructor(text) {\r\n    this.text = document.querySelector(text);\r\n  }\r\n\r\n  phraseWriter(element) {\r\n    const textArray = element.innerHTML.split(\"\");\r\n    element.innerHTML = \"\";\r\n    textArray.forEach((letter, i) => {\r\n      setTimeout(() => {\r\n        element.innerHTML += letter;\r\n      }, 75 * i);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.phraseWriter(this.text);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://portfolio_template/./src/js/modules/typewriter.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./src/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slide.js */ \"./src/js/modules/slide.js\");\n/* harmony import */ var _modules_typewriter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/typewriter.js */ \"./src/js/modules/typewriter.js\");\n/* harmony import */ var _modules_infinite_carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/infinite-carousel.js */ \"./src/js/modules/infinite-carousel.js\");\n\r\n\r\n\r\n\r\n\r\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".mobile-btn\", \".dropdown-list\");\r\nmenuMobile.init();\r\n\r\nconst slideHome = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".slide-home\", \".home-wrapper\");\r\nslideHome.init();\r\n\r\nconst slideWorks = new _modules_infinite_carousel_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n  \".prev-btn\",\r\n  \".next-btn\",\r\n  \".slide-work li\",\r\n  \".work-wrapper\"\r\n);\r\nslideWorks.init();\r\n\r\nconst slideStacks = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".slide-stack\", \".wrapper-stack\");\r\nslideStacks.init();\r\nslideStacks.changeSlide(2);\r\n\r\nconst titles = document.querySelectorAll(\".titles h1\");\r\nlet currentIndex = 0;\r\n\r\nfunction toggleClasses() {\r\n  if (currentIndex >= titles.length) {\r\n    currentIndex = 0;\r\n  }\r\n  titles.forEach((title) => {\r\n    title.classList.add(\"hidden\");\r\n    title.classList.remove(\"phrase\");\r\n  });\r\n  titles[currentIndex].classList.remove(\"hidden\");\r\n  titles[currentIndex].classList.add(\"phrase\");\r\n\r\n  currentIndex++;\r\n\r\n  let textwriter = new _modules_typewriter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".phrase\");\r\n  textwriter.init();\r\n}\r\ntoggleClasses();\r\nsetInterval(toggleClasses, 3600);\r\n\r\nconst parallax = document.getElementById(\"parallax-bg\");\r\nwindow.addEventListener(\"scroll\", () => {\r\n  let value = window.scrollY;\r\n  parallax.style.bottom = value * 0.5 + \"px\";\r\n});\r\n\n\n//# sourceURL=webpack://portfolio_template/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;