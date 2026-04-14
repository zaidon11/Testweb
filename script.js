

window.addEventListener('load', () => {
    // محاكاة وقت التحميل
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        const mainUI = document.getElementById('main-ui');

        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        
        mainUI.classList.add('show-ui');
    }, 2500); // 2.5 ثانية
});

// إضافة جزيئات ملونة بدلاً من المربعات السوداء
const container = document.getElementById('particles-container');
for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.style.position = 'fixed';
    p.style.width = '2px';
    p.style.height = '2px';
    p.style.background = Math.random() > 0.5 ? '#6366f1' : '#a855f7';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = Math.random() * 100 + 'vh';
    p.style.opacity = '0.3';
    p.style.zIndex = '-1';
    container.appendChild(p);
}
