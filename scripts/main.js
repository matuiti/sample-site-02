class Main {
    #observers = []
    constructor() {
        this.header = document.querySelector('.header')
        this.#init()
    }
    #init() {
        new MobileMenu
        this.#scrollInit()
    }
    #scrollInit() {
        this.#observers.push(
            new ScrollObserver('.appear', this.#inviewAnimation)
        )
    }

    #inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('inview')
        } else {
            el.classList.remove('inview')
        }
    }
}
const main = new Main