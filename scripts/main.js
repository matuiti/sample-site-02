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
            new ScrollObserver('.appear', this.#inviewAnimation),
            new ScrollObserver('.textAnimation', this.#textAnimation)
        )
    }

    #inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('inview')
        } else {
            el.classList.remove('inview')
        }
    }
    #textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el)
            ta.animate()//アニメーション開始
        }
    }
}
const main = new Main