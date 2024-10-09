class Main {
    #observers = []

    constructor() {
        this.header = document.querySelector('.header');
        this.topButton = document.querySelector('.top-button');
        this.#init();
    }
    #init() {
        new MobileMenu();
        Pace.on('done', this.#scrollInit.bind(this));
        window.onload = () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
        };
    }
    #scrollInit() {
        this.#observers.push(
            new ScrollObserver('.hero__slider', this.#toggleSlideAnimation.bind(this)),
            new ScrollObserver('.appear', this.#inviewAnimation),
            new ScrollObserver('.appear-slow', this.#inviewAnimation),
            new ScrollObserver('.textAnimation', this.#textAnimation),
            new ScrollObserver('.hero', this.#appearPageTopBtn.bind(this))
        );
    }

    #toggleSlideAnimation(el, inview) {
        if (inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    #inviewAnimation(el, inview) {
        if (inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }
    #textAnimation(el, inview) {
        if (inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }
    #appearPageTopBtn(el, inview) {
        if (inview) {
            this.topButton.classList.remove('active');
        } else {
            this.topButton.classList.add('active');
        }
    }
}

const main = new Main();
