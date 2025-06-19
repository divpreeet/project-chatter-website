document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 40,
                behavior: 'smooth'
            });
        }
    });
});

const featureCards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

featureCards.forEach(card => {
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', () => {
    featureCards.forEach(card => {
        card.classList.add('animated');
    });
    
    const eyes = document.querySelectorAll('.eye');
    
    document.addEventListener('mousemove', (e) => {
        eyes.forEach(eye => {
            const eyeRect = eye.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;
            
            const maxMovement = 5;
            
            const deltaX = e.clientX - eyeCenterX;
            const deltaY = e.clientY - eyeCenterY;
            
            const moveX = Math.max(-maxMovement, Math.min(maxMovement, deltaX / 20));
            const moveY = Math.max(-maxMovement, Math.min(maxMovement, deltaY / 20));
            
            eye.style.setProperty('--pupil-x', `${moveX}px`);
            eye.style.setProperty('--pupil-y', `${moveY}px`);
        });
    });
    
    setTimeout(() => {
        document.querySelector('.hero').classList.add('loaded');
    }, 300);
});