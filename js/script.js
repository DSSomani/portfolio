// ===== CONTRA PORTFOLIO - GAME CONTROLS =====

// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.nav-items');

menuIcon.onclick = function() {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('open');
  // Play menu sound effect (visual feedback)
  createParticles(menuIcon);
};

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('open');
  });
});

// Add retro click effect to all buttons
document.querySelectorAll('.btn, .nav-link, .social-link').forEach(button => {
  button.addEventListener('click', function(e) {
    createParticles(this);
  });
});

// Create particle explosion effect on click
function createParticles(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = centerX + 'px';
    particle.style.top = centerY + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#00ff00';
    particle.style.boxShadow = '0 0 10px #00ff00';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '10000';
    
    document.body.appendChild(particle);
    
    const angle = (i / 8) * Math.PI * 2;
    const velocity = 50;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    let x = 0, y = 0, opacity = 1;
    const animate = () => {
      x += vx * 0.05;
      y += vy * 0.05;
      opacity -= 0.02;
      
      particle.style.transform = `translate(${x}px, ${y}px)`;
      particle.style.opacity = opacity;
      
      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    };
    animate();
  }
}

// Navbar scroll effect with game-style hide/show
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// Intersection Observer for game-style reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Animate skill progress bars with retro counting effect
      if (entry.target.classList.contains('skill-card')) {
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          const progress = bar.getAttribute('data-progress');
          bar.style.setProperty('--progress', progress + '%');
          
          // Animate with pixelated step effect
          let currentProgress = 0;
          const step = 2;
          const animate = () => {
            if (currentProgress < progress) {
              currentProgress = Math.min(currentProgress + step, progress);
              bar.style.width = currentProgress + '%';
              setTimeout(animate, 20);
            }
          };
          setTimeout(animate, 100);
        });
      }
      
      // Add power-up sound effect simulation with visual feedback
      if (entry.target.classList.contains('glass-card')) {
        entry.target.style.animation = 'powerup-spawn 0.5s ease-out';
      }
    }
  });
}, observerOptions);

// Observe all sections and skill cards for game-style reveals
document.querySelectorAll('section, .skill-card, .glass-card').forEach(el => {
  observer.observe(el);
});

// Smooth scroll for anchor links with game transition
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Add screen transition effect
      document.body.style.transition = 'opacity 0.1s';
      document.body.style.opacity = '0.9';
      
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        document.body.style.opacity = '1';
      }, 100);
    }
  });
});

// Add active state to nav links on scroll with game HUD highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
      link.style.animation = 'pulse-glow 0.5s ease-out';
    }
  });
});

// Parallax effect for hero section backgrounds
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.gradient-circle');
  
  parallaxElements.forEach((el, index) => {
    const speed = 0.3 + (index * 0.15);
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Add power-up animation on page load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Create welcome message with retro text effect
  const welcomeMsg = document.createElement('div');
  welcomeMsg.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Press Start 2P', cursive;
    font-size: 2rem;
    color: #00ff00;
    text-shadow: 0 0 20px #00ff00, 3px 3px 0 rgba(0,0,0,0.8);
    z-index: 10001;
    pointer-events: none;
    text-align: center;
    padding: 2rem;
  `;
  welcomeMsg.innerHTML = 'READY<br>PLAYER<br>ONE';
  document.body.appendChild(welcomeMsg);
  
  // Animate and remove welcome message
  let opacity = 1;
  const fadeOut = setInterval(() => {
    opacity -= 0.02;
    welcomeMsg.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(fadeOut);
      welcomeMsg.remove();
    }
  }, 30);
});

// Add konami code easter egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let cheatModeActive = false;

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    if (cheatModeActive) {
      deactivateCheatMode();
    } else {
      activateCheatMode();
    }
  }
});

function activateCheatMode() {
  cheatModeActive = true;
  // Add special effect to entire page
  document.body.style.animation = 'rainbow-bg 2s linear infinite';
  
  // Show achievement message
  const achievement = document.createElement('div');
  achievement.style.cssText = `
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Press Start 2P', cursive;
    font-size: 1rem;
    color: #ffff00;
    background: rgba(13, 20, 16, 0.95);
    border: 4px solid #ffff00;
    padding: 1rem 2rem;
    text-shadow: 2px 2px 0 rgba(0,0,0,0.8);
    box-shadow: 0 0 20px #ffff00;
    z-index: 10001;
    text-align: center;
  `;
  achievement.innerHTML = '🏆 ACHIEVEMENT UNLOCKED!<br>30 LIVES ACTIVATED!<br><small style="font-size:0.7rem;margin-top:0.5rem;display:block;">Press code again to disable</small>';
  document.body.appendChild(achievement);
  
  setTimeout(() => {
    achievement.style.transition = 'opacity 1s';
    achievement.style.opacity = '0';
    setTimeout(() => achievement.remove(), 1000);
  }, 4000);
}

function deactivateCheatMode() {
  cheatModeActive = false;
  // Remove rainbow effect
  document.body.style.animation = '';
  
  // Show deactivation message
  const message = document.createElement('div');
  message.style.cssText = `
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Press Start 2P', cursive;
    font-size: 0.9rem;
    color: #ff6b35;
    background: rgba(13, 20, 16, 0.95);
    border: 4px solid #ff6b35;
    padding: 1rem 2rem;
    text-shadow: 2px 2px 0 rgba(0,0,0,0.8);
    box-shadow: 0 0 20px #ff6b35;
    z-index: 10001;
    text-align: center;
  `;
  message.innerHTML = 'CHEAT MODE<br>DEACTIVATED';
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.style.transition = 'opacity 1s';
    message.style.opacity = '0';
    setTimeout(() => message.remove(), 1000);
  }, 2000);
}

// Add CSS animation for rainbow effect
const style = document.createElement('style');
style.textContent = `
  @keyframes powerup-spawn {
    0% { transform: scale(0.8) translateY(20px); opacity: 0; }
    50% { transform: scale(1.05) translateY(-5px); }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.8); }
    50% { box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.8), 0 0 20px #00ff00; }
  }
  
  @keyframes rainbow-bg {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(style);