(()=>{"use strict";class t{constructor(t,e){this.slide=document.querySelector(t),this.wrapper=document.querySelector(e),this.dist={finalPosition:0,startX:0,movement:0,movePosition:0},this.activeClass="ativo",this.changeEvent=new Event("changeEvent"),this.mousedown,this.mouseup}transitionSlide(t){this.slide.style.transition=t?"transform .4s":""}moveSlide(t){this.dist.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0, 0`}updatePosition(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}removeAnchorClick(){const t=event.target.closest("a");function e(t){t.preventDefault()}t&&(t.addEventListener("click",e),setTimeout((()=>{t.removeEventListener("click",e)}),180))}onStart(t){let e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove",this.mousedown=t.timeStamp):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transitionSlide(!1)}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";"mouseup"===t.type&&(this.mouseup=t.timeStamp),this.mouseup-this.mousedown>150&&this.removeAnchorClick(),this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transitionSlide(!0),this.changeSlideOnEnd()}addSlideEvents(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}activePrevSlide(){if(void 0!==this.index.prev)this.changeSlide(this.index.prev);else{const t=this.slideArray.length-1;this.changeSlide(t)}}activeNextSlide(){void 0!==this.index.next?this.changeSlide(this.index.next):this.changeSlide(0)}changeSlideOnEnd(){if(this.dist.movement>120&&void 0!==this.index.next)return this.activeNextSlide();if(this.dist.movement>120&&void 0===this.index.next)return this.changeSlide(0);if(this.dist.movement<-120&&void 0!==this.index.prev)return this.activePrevSlide();if(this.dist.movement<-120&&void 0===this.index.prev){const t=this.slideArray.length-1;this.changeSlide(t)}else this.changeSlide(this.index.active)}carouselSlide(){setInterval((()=>{this.activeNextSlide()}),3600)}slidesConfig(){this.slideArray=[...this.slide.children].map((t=>({position:this.slidePosition(t),element:t})))}slideIndexNav(t){const e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}slidePosition(t){const e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}changeSlide(t){const e=this.slideArray[t];this.moveSlide(e.position),this.slideIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}changeActiveClass(){this.slideArray.forEach((t=>{t.element.classList.remove(this.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}addResizeEvent(t){let e=this.slideArray[t].element.offsetWidth;window.addEventListener("resize",(()=>{this.distX=-e*this.index.active,this.moveSlide(this.distX)}))}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this)}init(){return this.moveSlide(0),this.bindEvents(),this.transitionSlide(!0),this.addSlideEvents(),this.slidesConfig(),this.changeSlide(0),this.addResizeEvent(0),this.carouselSlide(),this}}class e extends t{constructor(t,e){super(t,e),this.bindControlEvents()}addArrow(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),t&&e&&this.addArrowEvent()}addArrowEvent(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}createControl(){const t=document.createElement("ul");return t.dataset.control="page-slide",this.slideArray.forEach(((e,i)=>{t.innerHTML+=`<li><a href="#slide${i+1}">${i+1}</a></li>`})),this.wrapper.appendChild(t),t}eventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}addControl(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=[...this.control.children],this.activeControlItem(),this.controlArray.forEach(this.eventControl)}activeControlItem(){this.controlArray.forEach((t=>t.classList.remove(this.activeClass))),this.controlArray[this.index.active].classList.add(this.activeClass)}bindControlEvents(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}class i{constructor(t){this.text=document.querySelector(t)}phraseWriter(t){const e=t.innerHTML.split("");t.innerHTML="",e.forEach(((e,i)=>{setTimeout((()=>{t.innerHTML+=e}),75*i)}))}init(){this.phraseWriter(this.text)}}new class{constructor(t,e,i){this.menuButton=document.querySelector(t),this.menuList=document.querySelectorAll(e),this.html=document.querySelector("html"),this.isOpen=!1,this.events=void 0===i?["touchstart","click"]:i,this.openMenu=this.openMenu.bind(this),this.linkPreventRemove=this.linkPreventRemove.bind(this)}linkPreventRemove(t){t.preventDefault()}openMenu(t){"touchstart"===t.type&&t.preventDefault(),this.isOpen||(this.menuList.forEach((t=>{t.classList.remove("hidden")})),this.menuButton.classList.add("active"),function(t,e,i){const s=document.querySelector("html");function n(o){!t.some((t=>t.contains(o.target)))&&(i(),e.forEach((t=>{s.removeEventListener(t,n)})))}e.forEach((t=>{setTimeout((()=>{s.addEventListener(t,n)}),0)}))}(Array.from(this.menuList),this.events,(()=>{this.menuList.forEach((t=>{t.classList.add("hidden")})),this.menuButton.classList.remove("active"),this.isOpen=!1})),this.isOpen=!0)}addMenuMobileEvents(){this.events.forEach((t=>{this.menuButton.addEventListener(t,this.openMenu)}))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}(".mobile-btn",".dropdown-list").init(),new e(".slide-home",".home-wrapper").init(),new class{constructor(t,e,i){this.prevBtn=document.querySelector(t),this.nextBtn=document.querySelector(e),this.slides=Array.from(document.querySelectorAll(i)),this.currentItem=0,this.maxItems=this.slides.length,this.screenWidth=window.innerWidth,this.moveSlideLeft=this.moveSlideLeft.bind(this),this.moveSlideRight=this.moveSlideRight.bind(this)}callNextSlide(){this.slides.forEach((t=>{t.classList.remove("selected")})),this.slides[this.currentItem].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})}createEvents(){this.prevBtn.addEventListener("click",this.moveSlideLeft),this.nextBtn.addEventListener("click",this.moveSlideRight)}moveSlideLeft(){this.currentItem--,this.currentItem<0&&(this.currentItem=this.maxItems-1),this.callNextSlide()}moveSlideRight(){this.currentItem++,this.currentItem>=this.maxItems&&(this.currentItem=0),this.callNextSlide()}init(){this.createEvents()}}(".prev-btn",".next-btn",".slide-work li").init(),new e(".slide-stack",".wrapper-stack").init();const s=document.querySelectorAll(".titles h1");let n=0;function o(){n>=s.length&&(n=0),s.forEach((t=>{t.classList.add("hidden"),t.classList.remove("phrase")})),s[n].classList.remove("hidden"),s[n].classList.add("phrase"),n++,new i(".phrase").init()}o(),setInterval(o,3600);const r=document.getElementById("parallax-bg");window.addEventListener("scroll",(()=>{let t=window.scrollY;r.style.bottom=.5*t+"px"}))})();