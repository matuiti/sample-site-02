class Hero {
    constructor() {
        this.DOM = {};
        this.#init();
    }
    #init() {
        this.#getScreenSize();
        this.#setProperty();
        window.addEventListener('resize', this.#resize.bind(this));
    }
    #getScreenSize() {
        this.DOM.screenWidth = window.innerWidth;
        this.DOM.screenHeight = window.innerHeight;
    }
    #setProperty() {
        document.documentElement.style.setProperty('--screen-width', `${this.DOM.screenWidth}px`);
        document.documentElement.style.setProperty('--screen-height', `${this.DOM.screenHeight}px`);
    }
    #resize() {
        this.#getScreenSize();
        this.#setProperty();
    }
}

