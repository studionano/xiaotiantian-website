// animations.js - 动画脚本

document.addEventListener('DOMContentLoaded', function() {
    // 黄色曲线动画
    const waveCanvas = document.getElementById('waveCanvas');
    
    if (waveCanvas) {
        const ctx = waveCanvas.getContext('2d');
        
        // 调整canvas大小以匹配容器
        function resizeCanvas() {
            const container = waveCanvas.parentElement;
            waveCanvas.width = container.offsetWidth;
            waveCanvas.height = container.offsetHeight;
        }
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // 波浪动画参数
        const wave = {
            y: waveCanvas.height / 2,
            amplitude: 20,
            length: waveCanvas.width * 1.5,
            frequency: 0.003,
            dots: []
        };
        
        // 初始化波浪点
        for (let i = 0; i <= waveCanvas.width; i++) {
            wave.dots.push({
                x: i,
                y: 0,
                vy: 0
            });
        }
        
        // 波浪小球位置
        const ball = {
            x: waveCanvas.width * 0.6,
            y: wave.y,
            radius: 8
        };
        
        // 绘制波浪和小球
        function drawWave() {
            ctx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);
            
            // 绘制波浪线
            ctx.beginPath();
            ctx.moveTo(0, wave.dots[0].y);
            
            for (let i = 0; i < wave.dots.length; i++) {
                const dot = wave.dots[i];
                dot.y = wave.y + Math.sin(i * wave.frequency + Date.now() * 0.001) * wave.amplitude;
                
                if (i > 0) {
                    const prevDot = wave.dots[i - 1];
                    ctx.lineTo(dot.x, dot.y);
                }
            }
            
            ctx.strokeStyle = '#F5D547'; // 黄色
            ctx.lineWidth = 4;
            ctx.stroke();
            
            // 更新小球位置
            ball.y = wave.dots[Math.floor(ball.x)].y;
            
            // 绘制小球
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#F5D547';
            ctx.fill();
            
            // 绘制小白点
            ctx.beginPath();
            ctx.arc(waveCanvas.width * 0.2, wave.dots[Math.floor(waveCanvas.width * 0.2)].y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
            
            requestAnimationFrame(drawWave);
        }
        
        drawWave();
    }
    
    // 页面元素滚动动画
    const animateElements = document.querySelectorAll('.feature-item, .service-item, .section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});
