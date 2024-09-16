class Main {
    #observers = []
    constructor() {
        this.header = document.querySelector('.header')
        this.#init()
    }
    #init() {
        // new Hero
        new MobileMenu
        this.#scrollInit()
    }
    #scrollInit() {
        this.#observers.push(
            new ScrollObserver('.appear', this.#inviewAnimation)
        )
        console.log(this.#observers);
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