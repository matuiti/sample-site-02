class MobileMenu {
  constructor() {
    this.DOM = {}
    this.DOM.btn = document.querySelector('.mobile-menu__btn')
    this.DOM.links = document.querySelectorAll('.mobile-menu__link')
    this.DOM.container = document.querySelector('#global-container')
    this.eventType = this.#getEventType();
    this.isTouchCapable = 'ontouchstart' in window;
    this.#addEvent();
  }

  #getEventType() {
    return this.isTouchCapable ? "touchstart" : "click";
  }

  #toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }

  #handleLinkClick(e) {
    // タッチイベントが発生した場合、クリックイベントを無視
    if (this.isTouchCapable && e.type === 'click') return;
    // メニューを閉じる
    this.#toggle();
    // リンク先に遷移させる
    const href = e.currentTarget.getAttribute('href');
    window.location.href = href;
  }

  #addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this.#toggle.bind(this));

    this.DOM.links.forEach(link => {
      // touchstart と click の両方のイベントを設定
      link.addEventListener('touchstart', this.#handleLinkClick.bind(this));
      link.addEventListener('click', this.#handleLinkClick.bind(this));
    });
  }
}
