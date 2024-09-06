class MobileMenu {
  constructor() {
    this.DOM = {}
    this.DOM.btn = document.querySelector('.mobile-menu__btn')
    this.DOM.link = document.querySelector('.mobile-menu__link')
    this.DOM.container = document.querySelector('#global-container')
    this.eventType = this.#getEventType();
    this.#addEvent();
  }
  #getEventType() {
    const isTouchCapable = "ontouchstart" in window;

    return isTouchCapable ? "touchstart" : "click";
  }
  #toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }

  #addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this.#toggle.bind(this));
    this.DOM.link.addEventListener(this.eventType, this.#toggle.bind(this));
  }
}