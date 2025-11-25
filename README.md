# Dabbsson ポータブル電源 ランディングページ

**災害備え × アウトドア**をターゲットにしたDabbssonポータブル電源のランディングページです。

![LP Preview](https://via.placeholder.com/1200x630/667eea/ffffff?text=Dabbsson+LP)

---

## 📋 目次

- [概要](#概要)
- [機能](#機能)
- [技術スタック](#技術スタック)
- [セットアップ](#セットアップ)
- [カスタマイズ](#カスタマイズ)
- [デプロイ](#デプロイ)
- [パフォーマンス最適化](#パフォーマンス最適化)
- [トラブルシューティング](#トラブルシューティング)
- [ライセンス](#ライセンス)

---

## 🎯 概要

このLPは以下のターゲット層に向けて設計されています:

- **災害に備えたい人**: 停電時の非常用電源として
- **アウトドア好きな人**: キャンプ・車中泊・ソロキャンプ等で使用

### 主要製品

- **Dabbsson 1000L**: 1008Wh, 1200W, 家庭用電化製品対応
- **Dabbsson 600L**: 768Wh, 600W, 軽量コンパクト

---

## ✨ 機能

### UI/UX
- ✅ フルレスポンシブ対応（モバイル・タブレット・デスクトップ）
- ✅ スムーススクロール
- ✅ FAQアコーディオン
- ✅ スクロールアニメーション（フェードイン効果）
- ✅ スティッキーヘッダー
- ✅ モバイルメニュー

### コンテンツ
- ✅ 魅力的なヒーローセクション
- ✅ 問題提起 → 解決策の流れ
- ✅ 製品比較カード
- ✅ 特徴・利点の明確化
- ✅ 使用シーン別の紹介
- ✅ 安全性・信頼性の強調
- ✅ FAQセクション
- ✅ 複数のCTA配置

---

## 🛠 技術スタック

- **HTML5**: セマンティックマークアップ
- **CSS3**:
  - CSS Variables（カスタムプロパティ）
  - Flexbox & CSS Grid
  - レスポンシブデザイン
  - アニメーション
- **JavaScript (Vanilla)**:
  - DOM操作
  - Intersection Observer API
  - イベントハンドリング
- **フォント**: Google Fonts (Noto Sans JP)

---

## 🚀 セットアップ

### 必要要件

- モダンブラウザ（Chrome, Firefox, Safari, Edge最新版）
- ローカルサーバー（推奨）

### インストール手順

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/yourusername/dabbsson-lp.git
   cd dabbsson-lp
   ```

2. **ローカルサーバーの起動**

   **方法1: VS Code Live Server拡張機能**
   - VS Codeで `index.html` を開く
   - 右クリック → "Open with Live Server"

   **方法2: Pythonの簡易サーバー**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **方法3: Node.jsのhttp-server**
   ```bash
   npx http-server -p 8000
   ```

3. **ブラウザでアクセス**
   ```
   http://localhost:8000
   ```

---

## 🎨 カスタマイズ

### 1. カラーテーマの変更

[styles.css](styles.css) の `:root` セクションを編集:

```css
:root {
    --primary-color: #FF6B35;   /* プライマリカラー */
    --secondary-color: #004E89; /* セカンダリカラー */
    --accent-color: #F7931E;    /* アクセントカラー */
    /* ... */
}
```

### 2. フォントの変更

[index.html](index.html) の `<head>` セクション:

```html
<!-- 現在: Noto Sans JP -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">

<!-- 例: Robotoに変更 -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
```

[styles.css](styles.css):

```css
:root {
    --font-main: 'Roboto', sans-serif;
}
```

### 3. 画像の追加

#### 製品画像の追加

[index.html](index.html) の画像プレースホルダーを置き換え:

```html
<!-- Before -->
<div class="image-placeholder">1000L</div>

<!-- After -->
<img src="images/dabbsson-1000l.jpg" alt="Dabbsson 1000L ポータブル電源" loading="lazy">
```

#### 推奨画像サイズ
- ヒーローセクション背景: 1920×1080px
- 製品画像: 800×800px
- 使用シーン画像: 600×400px

#### 画像最適化
```bash
# ImageMagickを使用した例
convert input.jpg -quality 85 -resize 800x800 output.jpg

# WebP形式に変換
cwebp -q 85 input.jpg -o output.webp
```

### 4. CTAボタンのリンク先変更

[index.html](index.html) のCTAボタンを編集:

```html
<!-- 購入ボタン -->
<a href="https://jp.dabbsson.com/products/1000l" class="btn btn-primary">今すぐ購入</a>

<!-- お問い合わせボタン -->
<a href="mailto:support.jp@dabbsson.com" class="btn btn-secondary">お問い合わせ</a>
```

### 5. テキストコンテンツの編集

[index.html](index.html) を直接編集するか、CMSと連携してください。

---

## 📱 レスポンシブブレークポイント

```css
/* スマートフォン */
@media (max-width: 576px) { }

/* タブレット */
@media (max-width: 768px) { }

/* 小型デスクトップ */
@media (max-width: 992px) { }

/* 大型デスクトップ */
@media (max-width: 1200px) { }
```

---

## 🌐 デプロイ

### 静的サイトホスティング

#### 1. Netlify

```bash
# Netlify CLIをインストール
npm install -g netlify-cli

# デプロイ
netlify deploy --prod
```

または、Netlify UIからドラッグ&ドロップ:
1. https://app.netlify.com にアクセス
2. "Sites" → "Add new site" → "Deploy manually"
3. フォルダをドラッグ&ドロップ

#### 2. Vercel

```bash
# Vercel CLIをインストール
npm install -g vercel

# デプロイ
vercel --prod
```

#### 3. GitHub Pages

```bash
# リポジトリをGitHubにプッシュ
git add .
git commit -m "Initial commit"
git push origin main

# GitHub Settings → Pages → Source: main branch
```

#### 4. AWS S3 + CloudFront

```bash
# AWS CLIを使用
aws s3 sync . s3://your-bucket-name --exclude ".git/*"
```

---

## ⚡ パフォーマンス最適化

### 1. CSS/JSの圧縮

```bash
# CSSの圧縮
npx csso styles.css --output styles.min.css

# JavaScriptの圧縮
npx terser script.js --output script.min.js
```

[index.html](index.html) のリンクを更新:

```html
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js"></script>
```

### 2. 画像の遅延読み込み

```html
<img src="images/product.jpg" alt="製品画像" loading="lazy">
```

### 3. フォントの最適化

```html
<!-- preconnectで高速化 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- font-display: swapで初回表示を高速化 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
```

### 4. キャッシュの設定

**Netlify**: `netlify.toml` を作成

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

**Apache**: `.htaccess` を作成

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

### 5. パフォーマンステスト

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🔍 SEO対策

### メタタグの最適化

[index.html](index.html) の `<head>` に追加:

```html
<!-- 基本メタタグ -->
<meta name="description" content="災害時の備えにも、アウトドアにも最適なDabbssonポータブル電源。半固体バッテリー搭載、4000回充放電サイクル、EPS機能付き。">
<meta name="keywords" content="ポータブル電源,Dabbsson,災害備え,アウトドア,キャンプ,車中泊,停電対策">
<meta name="author" content="Dabbsson Japan">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Dabbsson ポータブル電源 | 災害備え・アウトドアに最適">
<meta property="og:description" content="半固体バッテリー × 高出力 × 軽量設計で、もしもの時もいつもの旅も安心。">
<meta property="og:image" content="https://yourdomain.com/images/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Dabbsson ポータブル電源 | 災害備え・アウトドアに最適">
<meta name="twitter:description" content="半固体バッテリー × 高出力 × 軽量設計で、もしもの時もいつもの旅も安心。">
<meta name="twitter:image" content="https://yourdomain.com/images/twitter-card.jpg">

<!-- Canonical URL -->
<link rel="canonical" href="https://yourdomain.com">
```

### 構造化データ (JSON-LD)

[index.html](index.html) の `</body>` 前に追加:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Dabbsson 1000L ポータブル電源",
  "image": "https://yourdomain.com/images/dabbsson-1000l.jpg",
  "description": "1008Wh大容量、1200W高出力のポータブル電源。災害備えとアウトドアに最適。",
  "brand": {
    "@type": "Brand",
    "name": "Dabbsson"
  },
  "offers": {
    "@type": "Offer",
    "price": "62500",
    "priceCurrency": "JPY",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
</script>
```

---

## 📊 アクセス解析の設定

### Google Analytics 4

[index.html](index.html) の `<head>` に追加:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### イベントトラッキング

[script.js](script.js) に追加:

```javascript
// CTAボタンのクリックを追跡
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        gtag('event', 'click', {
            'event_category': 'CTA',
            'event_label': btn.textContent
        });
    });
});

// FAQの開閉を追跡
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        gtag('event', 'faq_open', {
            'event_category': 'Engagement',
            'event_label': question.querySelector('h3').textContent
        });
    });
});
```

---

## 🐛 トラブルシューティング

### 問題1: スムーススクロールが動作しない

**原因**: ブラウザの互換性問題

**解決策**: ポリフィルを追加

```html
<script src="https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
```

### 問題2: FAQアコーディオンが開かない

**原因**: JavaScriptの読み込みエラー

**解決策**: ブラウザの開発者ツールでエラーを確認

```bash
# ブラウザでF12を押してコンソールを開く
```

### 問題3: モバイルでレイアウトが崩れる

**原因**: viewportメタタグの不足

**解決策**: [index.html](index.html) に追加

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 問題4: 画像が表示されない

**原因**: パスの誤り

**解決策**: 相対パスを確認

```html
<!-- NG -->
<img src="/images/product.jpg">

<!-- OK -->
<img src="images/product.jpg">
```

---

## 📂 ディレクトリ構造

```
portable-power-station/
│
├── index.html          # メインHTMLファイル
├── styles.css          # スタイルシート
├── script.js           # JavaScriptファイル
├── README.md           # このファイル
├── PROMPT.md           # ワンショット生成プロンプト
│
├── images/             # 画像フォルダ（要作成）
│   ├── dabbsson-1000l.jpg
│   ├── dabbsson-600l.jpg
│   ├── hero-background.jpg
│   ├── usecase-disaster.jpg
│   ├── usecase-camping.jpg
│   ├── usecase-solar.jpg
│   └── usecase-mobile.jpg
│
└── .gitignore          # Git除外設定（オプション）
```

---

## 🔄 今後の改善案

### 短期的な改善
- [ ] 実際の製品画像を追加
- [ ] お客様の声（レビュー）セクションを追加
- [ ] 動画埋め込み（製品紹介・使い方）
- [ ] チャットボット統合

### 中期的な改善
- [ ] A/Bテストの実装
- [ ] ヒートマップ分析
- [ ] 多言語対応（英語版）
- [ ] ブログセクション追加

### 長期的な改善
- [ ] React/Vue.jsへの移行
- [ ] CMSとの統合（WordPress/Contentful）
- [ ] PWA対応
- [ ] ダークモード対応

---

## 🤝 貢献

バグ報告や機能リクエストは [Issues](https://github.com/yourusername/dabbsson-lp/issues) でお願いします。

プルリクエストも歓迎します:

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

---

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

---

## 📞 お問い合わせ

- **公式サイト**: [https://jp.dabbsson.com](https://jp.dabbsson.com)
- **メール**: support.jp@dabbsson.com
- **Twitter**: [@DabbssonJP](https://twitter.com/DabbssonJP)

---

## 🙏 謝辞

- [Dabbsson](https://jp.dabbsson.com) - 製品情報提供
- [Google Fonts](https://fonts.google.com/) - Noto Sans JPフォント
- [Feather Icons](https://feathericons.com/) - アイコンデザインのインスピレーション

---

**最終更新**: 2025年11月25日
**バージョン**: 1.0.0
**メンテナ**: Claude (Anthropic)

---

## 📚 参考リンク

- [Dabbsson 1000L 製品ページ](https://jp.dabbsson.com/products/1000l)
- [Dabbsson 600L 製品ページ](https://jp.dabbsson.com/products/600l)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [Can I Use](https://caniuse.com/)

---

**このLPであなたのビジネスを加速させましょう! 🚀**