//HTMLを整える下準備クラス
class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el); // DOMを取得
        this.chars = []; // 各テキストノードの文字を格納する配列
        this.#splitText(this.DOM.el); // テキストノードの文字を分割し、spanで囲む
    }

    #splitText(el) {
        // ノードを走査する関数
        const traverseNodes = (node) => {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
                // テキストノードの場合
                const text = node.nodeValue.trim();
                const fragment = document.createDocumentFragment(); // フラグメントに分割後のノードを一時的に格納
                text.split("").forEach(char => {
                    const span = document.createElement('span');
                    span.classList.add('char');
                    span.innerHTML = char === " " ? "&nbsp;" : char; // 空白は &nbsp; に変換
                    fragment.appendChild(span);
                });
                node.parentNode.replaceChild(fragment, node); // 元のテキストノードを置き換える
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // 子ノードがある場合は再帰的に処理
                Array.from(node.childNodes).forEach(child => traverseNodes(child));
            }
        };
        traverseNodes(el); // DOMを走査開始
    }
}


//実際にアニメーションを付与するクラス
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el); // htmlを成形
        this.DOM.chars = this.DOM.el.querySelectorAll('.char'); // 整形後の子要素を全て取得
    }

    animate() {
        // 親要素に inview クラスを追加
        this.DOM.el.classList.add('inview');

        // CSSで最適化をサポートする
        this.DOM.chars.forEach((c) => {
            gsap.set(c, {
                display: 'inline-block',
                willChange: 'transform, opacity', // 変更が予測されるプロパティ
            });
        });

        // アニメーションの適用
        this.DOM.chars.forEach((c, i) => {
            gsap.to(c, 0.9, {
                ease: Back.easeOut,
                delay: i * 0.08, // 各文字に遅延を与える
                opacity: 1,
                transform: 'translateY(0px)', // transformで移動
                onComplete: () => {
                    c.style.willChange = 'auto'; // アニメーション完了後に解除
                }
            });
        });
    }
}

