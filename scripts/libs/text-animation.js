//HTMLを整える下準備クラス
class TextAnimation {
    constructor(el) {
        this.DOM = {}//DOM用のオブジェクトを初期化
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el)//DOMを代入
        this.DOM.chars = this.DOM.el.innerHTML.trim().split("")//前後の空白を削除、1文字に分割して配列として代入
        this.DOM.el.innerHTML = this.#splitText()//htmlを成形し、連結したもので書き換える
    }
    #splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;')//空白を半角スペースに置換
            return `${acc}<span class="char">${curr}</span>`//配列の文字を加工⇒連結するループ文
        }, "")//ループ1回目のaccに""を代入、2回目からは戻り値が入る
    }
}

//実際にアニメーションを付与するクラス
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el)//htmlを成形
        this.DOM.chars = this.DOM.el.querySelectorAll('.char')//整形後の子要素を全て取得
    }
    animate() {
        this.DOM.el.classList.add('inview')//親要素に設定
        this.DOM.chars.forEach((c, i) => { //子要素に設定
            gsap.to(c, .6, {
                ease: Back.easeOut,
                delay: i * 0.05,
                startAt: { y: '-50%', opacity: 0},
                y: '0%', opacity: 1
            });
        });
    }

}