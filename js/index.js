// Modern Portfolio JavaScript
// ======================================

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });
}

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (document.body.classList.contains('nav-open') && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
        document.body.classList.remove('nav-open');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.project-card, .hobby-card, .skill-category, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 80) {
        navbar.style.background = 'rgba(10, 16, 32, 0.7)';
        navbar.style.boxShadow = '0 16px 40px rgba(8, 15, 40, 0.35)';
    } else {
        navbar.style.background = 'rgba(10, 16, 32, 0.45)';
        navbar.style.boxShadow = 'none';
    }
});

console.log('🚀 Portfolio loaded successfully!');