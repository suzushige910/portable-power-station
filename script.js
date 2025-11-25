// ========================================
// スムーススクロール
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// FAQ アコーディオン
// ========================================
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // 他のFAQを閉じる
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // クリックされたFAQを開く/閉じる
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ========================================
// ヘッダー スクロール時の背景変更
// ========================================
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop;
});

// ========================================
// モバイルメニュー（基本実装）
// ========================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        mobileMenuBtn.classList.toggle('active');
    });
}

// ========================================
// Intersection Observer でフェードイン効果
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// アニメーション対象要素
const animatedElements = document.querySelectorAll(
    '.problem-card, .product-card, .feature-card, .usecase-card, .trust-card'
);

animatedElements.forEach(el => {
    observer.observe(el);
});

// ========================================
// ページ読み込み時のトップへスクロール
// ========================================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ========================================
// フォーム送信処理（将来的な拡張用）
// ========================================
const contactForms = document.querySelectorAll('form');

contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // ここにフォーム送信ロジックを追加
        console.log('フォームが送信されました');

        // 例: フォームデータを取得
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        console.log('送信データ:', data);

        // 成功メッセージを表示（例）
        alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
        form.reset();
    });
});