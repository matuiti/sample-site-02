class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els)
        this.cb = cb
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        }
        this.options = Object.assign(defaultOptions, options)
        this.once = this.options.once
        this.observedEls = new Set()  // 一意の値のコレクションで反復可能（一度アニメーションした値が入る）
        this.#init()
    }
    #init() {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!this.observedEls.has(entry.target)) {  // 交差した対象のアニメーションが初回ならtrue
                        this.cb(entry.target, true)
                        if (this.once) {
                            this.observedEls.add(entry.target)
                        }
                    }
                } else {
                    if (!this.once) {
                        this.cb(entry.target, false)
                    }
                }
            })
        }

        this.io = new IntersectionObserver(callback.bind(this), this.options)
        this.io.POLL_INTERVAL = 100
        this.els.forEach(el => this.io.observe(el))
    }
}
