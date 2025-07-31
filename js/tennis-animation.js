// tennis-animation.js
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否存在动画Canvas
  const canvas = document.getElementById('aboutAnimationCanvas');
  if (!canvas) return; // 如果没有找到Canvas元素，则退出
  
  const ctx = canvas.getContext('2d');
  
  // 设置canvas大小
  const size = 400;
  canvas.width = size;
  canvas.height = size;
  
  // 颜色
  const purpleColor = '#8b5cf6';
  const purpleLightColor = '#a78bfa';
  const tennisYellowColor = '#d4ff00';
  const backgroundColor = '#373045';
  
  // 动画状态变量
  let animationFrame = 0;
  const totalFrames = 400;
  let particles = [];
  let grid = [];

  // 初始化网格
  function initializeGrid() {
    grid = [];
    const gridSize = 8;
    
    const usableSize = size * 0.8;
    const cellSize = usableSize / (gridSize - 1);
    
    const startX = (size - usableSize) / 2;
    const startY = (size - usableSize) / 2;
    
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const pointX = startX + x * cellSize;
        const pointY = startY + y * cellSize;
        
        grid.push({
          x: pointX,
          y: pointY,
          size: 3,
          z: 0,
          targetZ: 0,
          originalX: pointX,
          originalY: pointY
        });
      }
    }
  }
  
  // 初始化粒子
  function initializeParticles() {
    particles = [];
    const particleCount = 250;
    const radius = size / 5;
    const center = size / 2;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * radius;
      const x = center + Math.cos(angle) * distance;
      const y = center + Math.sin(angle) * distance;
      
      particles.push({
        x: x,
        y: y,
        size: Math.random() * 4 + 2.5,
        speedX: 0,
        speedY: 0,
        targetX: x,
        targetY: y,
        originalX: x,
        originalY: y,
        color: Math.random() > 0.5 ? tennisYellowColor : purpleLightColor
      });
    }
  }
  
  // 更新动画
  function updateAnimation() {
    const phase = Math.floor(animationFrame / (totalFrames / 4)) % 4;
    
    if (phase === 0) {
      updateGridTo3D();
    } else if (phase === 1) {
      updateGridToTennisBall();
    } else if (phase === 2) {
      updateTennisBallDisperse();
    } else {
      updateParticlesToGrid();
    }
  }
  
  function updateGridTo3D() {
    const progress = (animationFrame % (totalFrames / 4)) / (totalFrames / 4);
    const gridSize = 8;
    const cellSize = size / gridSize;
    
    grid.forEach((point, i) => {
      const x = Math.floor(i / gridSize);
      const y = i % gridSize;
      const maxZ = cellSize / 2;
      
      if (x < 4 && y < 4) {
        point.targetZ = 0;
      } else if (x >= 4 && y < 4) {
        point.targetZ = maxZ * progress;
      } else if (x < 4 && y >= 4) {
        point.targetZ = maxZ * progress;
      } else {
        point.targetZ = maxZ * 2 * progress;
      }
      
      point.z = point.z + (point.targetZ - point.z) * 0.1;
    });
  }
  
  function updateGridToTennisBall() {
    const progress = (animationFrame % (totalFrames / 4)) / (totalFrames / 4);
    const center = size / 2;
    const radius = size / 5;
    
    if (progress < 0.1 && particles.length === 0) {
      initializeParticles();
    }
    
    grid.forEach((point, i) => {
      const angle = (i / grid.length) * Math.PI * 2;
      const targetX = center + Math.cos(angle) * radius * progress;
      const targetY = center + Math.sin(angle) * radius * progress;
      
      point.x = point.originalX + (targetX - point.originalX) * progress;
      point.y = point.originalY + (targetY - point.originalY) * progress;
      
      point.size = 3 * (1 - progress);
    });
    
    particles.forEach(particle => {
      particle.size = Math.random() * 4 + 2.5 * progress;
    });
  }
  
  function updateTennisBallDisperse() {
    const progress = (animationFrame % (totalFrames / 4)) / (totalFrames / 4);
    const center = size / 2;
    
    particles.forEach(particle => {
      if (!particle.targetX || progress < 0.1) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * size * 0.3 + size * 0.05;
        particle.targetX = center + Math.cos(angle) * distance;
        particle.targetY = center + Math.sin(angle) * distance;
        
        particle.speedX = (particle.targetX - particle.x) * 0.01;
        particle.speedY = (particle.targetY - particle.y) * 0.01;
      }
      
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      const dx = particle.targetX - particle.x;
      const dy = particle.targetY - particle.y;
      const distance = Math.sqrt(dx*dx + dy*dy);
      
      if (distance < 5) {
        particle.speedX *= 0.9;
        particle.speedY *= 0.9;
      }
    });
    
    grid.forEach(point => {
      point.size = 0;
    });
  }
  
  function updateParticlesToGrid() {
    const progress = (animationFrame % (totalFrames / 4)) / (totalFrames / 4);
    
    if (progress < 0.1) {
      grid.forEach(point => {
        point.x = point.originalX;
        point.y = point.originalY;
        point.z = 0;
        point.targetZ = 0;
      });
      
      particles.forEach(particle => {
        particle.targetX = particle.originalX;
        particle.targetY = particle.originalY;
        
        particle.speedX = (particle.targetX - particle.x) * 0.03;
        particle.speedY = (particle.targetY - particle.y) * 0.03;
      });
    }
    
    particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      const dx = particle.targetX - particle.x;
      const dy = particle.targetY - particle.y;
      const distance = Math.sqrt(dx*dx + dy*dy);
      
      if (distance < 10) {
        particle.speedX *= 0.9;
        particle.speedY *= 0.9;
      }
      
      particle.size = Math.max(0, (Math.random() * 4 + 2) * (1 - progress));
    });
    
    grid.forEach(point => {
      point.size = 2 * progress;
    });
    
    if (progress > 0.95) {
      particles = [];
    }
  }
  
  // 绘制函数
  function drawGrid() {
    grid.forEach(point => {
      if (point.size <= 0) return;
      
      ctx.fillStyle = purpleColor;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  
  function drawParticles() {
    particles.forEach(particle => {
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  
  // 主动画循环
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    updateAnimation();
    
    drawGrid();
    drawParticles();
    
    animationFrame = (animationFrame + 1) % totalFrames;
    
    requestAnimationFrame(animate);
  }
  
  // 初始化并开始动画
  initializeGrid();
  animate();
});