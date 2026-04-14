// الانتظار حتى يتم تحميل الصفحة بالكامل
window.addEventListener('load', () => {
    
    const loader = document.getElementById('loader-wrapper');
    const mainUI = document.getElementById('main-ui');

    // إخفاء شاشة التحميل بعد 2.5 ثانية
    setTimeout(() => {
        if(loader) {
            loader.classList.add('fade-out');
        }
        
        // إظهار الواجهة الرئيسية
        if(mainUI) {
            mainUI.classList.add('show-ui');
        }
    }, 2500); 

});

// إضافة تأثير جزيئات بسيط في الخلفية (إضافي لجمالية الموقع)
console.log("نظام إدارة مركز الراشد جاهز");
