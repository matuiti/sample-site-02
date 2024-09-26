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
            new ScrollObserver('.textAnimation', this.#textAnimation),
            new ScrollObserver('.orderAnimation', this.#orderAnimation)
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
    #orderAnimation(el, inview) {
        if(inview) {
            new OrderAnimation('.about__box--01', '.about__text--01::after', '.text');
            new OrderAnimation('.about__box--02', '.text','.about__text--02::after');
        }
    }
}
const main = new Main