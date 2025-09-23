## KUMANOPAN - Sample Site

静的サイト制作のスキルデモ用に作成した、架空のベーカリー「KUMANOPAN」のワンページサイトです。デザイン再現・アニメーション・アクセシビリティ・パフォーマンス最適化・軽量なインタラクション実装までを、プレーンな HTML/CSS(SCSS)/JavaScript でまとめています。

### デモ/スクリーンショット

- ローカルでそのまま `index.html` を開いて確認できます。
- 画像やフォントは同梱、ネットワークはライブラリ読み込みのみ（`scripts/vendors`）。

### 主要機能

- ヒーロースライダーとテキストの逐次アニメーション
  - `IntersectionObserver` ベースの `ScrollObserver` により入れ替わり制御
  - 文字分割 + GSAP によるふわっと出るモーション（`TweenTextAnimation`）
- スクロールに応じた段階的アピア（フェード/リフト）
- モバイルメニュー（タッチ/クリック両対応）
- 営業日カレンダー（純 JS で月送り・当日ハイライト）
- ページトップボタンの表示/非表示制御
- 画像の `loading="lazy"` と `srcset`、`<picture>` でレスポンシブ最適化

### 実装ハイライト（採用担当者向け）

- アニメーション基盤
  - `scripts/libs/scroll.js`: `IntersectionObserver` ラッパで一度のみ/複数回の発火を制御
  - `scripts/libs/text-animation.js`: テキストノードを走査し安全に分割 → GSAP で最適化設定（will-change 管理）
  - `scripts/main.js`: 観測対象の束ねとヘッダー/トップボタンの状態管理
- モバイルメニュー
  - `scripts/libs/mobile-menu.js`: タッチ端末を検出し `touchstart`/`click` の二重発火を抑制。開閉は `#global-container` のクラス切替のみでシンプル化
- カレンダー
  - `scripts/libs/calendar.js`: 依存なしで月送り・本日強調。月曜始まりに調整
- パフォーマンス
  - 重要画像の `preload`、`lazy`、スマホ/PC 切替の `<source media>`
  - ページ初期ローディングに `pace.js` を使用し UX を担保
- アクセシビリティ/SEO
  - `alt`/`aria-*`/`title` を各所に付与、ランドマークナビゲーション
  - `meta`/OG/Twitter Card、`application/ld+json` で `@type: Bakery` の構造化データ

### 技術スタック

- HTML5（セマンティクス/OGP/構造化データ）
- SCSS（`styles/style.scss` → `style.css`、コンポーネント分割）
- Vanilla JavaScript（ES2022 クラス、プライベートメソッド）
- GSAP（`scripts/vendors/gsap.min.js`）
- Pace.js（ローディング UI）

### ディレクトリ構成（抜粋）

```
./
├─ index.html
├─ styles/
│  ├─ style.scss, style.css, loader.css
│  └─ parts/, pages/, globals/
├─ scripts/
│  ├─ main.js
│  ├─ libs/
│  │  ├─ scroll.js
│  │  ├─ text-animation.js
│  │  ├─ mobile-menu.js
│  │  └─ calendar.js
│  └─ vendors/
│     ├─ gsap.min.js
│     └─ pace.js
├─ images/
└─ fonts/
```

### ローカルでの確認方法

- そのままブラウザで `index.html` を開く
  - Windows: `index.html` をダブルクリック
- もしくは簡易サーバを利用（相対パス/キャッシュ検証に便利）
  - Node.js がある場合: `npx serve .`（または VS Code の Live Server）

### 開発メモ

- SCSS はコンパイル済みの `style.css` を同梱。必要に応じて任意の SASS ツールで再ビルドしてください
- ベンダーライブラリはすべて同梱（CDN 依存なし）

### 評価ポイントの目安

- マークアップ: セマンティクス/アクセシビリティ属性/読み上げ考慮
- モーション: スクロール検知・逐次アニメ・UX を阻害しない軽量実装
- パフォーマンス: 画像最適化、`preload`/`lazy`、無駄な reflow/rerender 抑制
- 保守性: 機能別に小さなクラスへ分割し依存最小化

### ライセンス

このリポジトリは個人ポートフォリオ用途のサンプルです。商用利用や再配布を行う場合は、画像・フォントのライセンスにご注意ください。
