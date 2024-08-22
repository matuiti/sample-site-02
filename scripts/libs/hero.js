class Hero {
    constructor() {
        this.#init();
    }
    #init() {
        this.#getScreenSize();
        this.#setProperty();
        window.addEventListener('resize', this.#resize.bind(this));
    }
    #getScreenSize() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }
    #setProperty() {
        document.documentElement.style.setProperty('--screen-width', `${this.screenWidth}px`);
        document.documentElement.style.setProperty('--screen-height', `${this.screenHeight}px`);
    }
    #resize() {
        this.#getScreenSize();
        this.#setProperty();
    }
}

