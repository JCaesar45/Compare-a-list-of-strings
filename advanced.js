// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate hero subtitle on load
const heroSubtitle = document.querySelector('.hero-subtitle');
heroSubtitle.animate([
  { opacity: 0, transform: 'translateY(20px)' },
  { opacity: 1, transform: 'translateY(0)' }
], {
  duration: 1500,
  fill: 'forwards'
});

// Button hover effect with ripple
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', e => {
    const circle = document.createElement('span');
    circle.className = 'ripple';
    btn.appendChild(circle);
    const rect = btn.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + 'px';
    circle.style.top = e.clientY - rect.top + 'px';
    circle.animate([
      { transform: 'scale(0)', opacity: 0.5 },
      { transform: 'scale(4)', opacity: 0 }
    ], {
      duration: 600,
      easing: 'ease-out'
    }).onfinish = () => circle.remove();
  });
});

// Contact form submit handler
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out! We will contact you soon.');
  contactForm.reset();
});

// Dynamic background animation for hero section
const hero = document.querySelector('.hero');

setInterval(() => {
  const hue = Math.floor(Math.random() * 360);
  hero.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 60%), hsl(${(hue + 60) % 360}, 70%, 50%))`;
}, 5000);
