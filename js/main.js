// main.js - 主要脚本

document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 平滑滚动导航
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 减去导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });

    // 移动端菜单切换
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // 语言切换功能
    const languageSelector = document.querySelector('.language-selector select');
    
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            // 实际项目中，这里可以添加语言切换的逻辑
            const selectedLanguage = this.value;
            console.log('Language changed to:', selectedLanguage);
        });
    }
});
