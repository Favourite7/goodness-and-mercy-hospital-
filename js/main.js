/* ============================================
   GOODNESS AND MERCY HOSPITAL - JAVASCRIPT
   Mobile Menu, Form Handling, Smooth Scroll
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MOBILE MENU TOGGLE ==========
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            if (nav.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '✕';
                mobileMenuBtn.style.fontSize = '24px';
            } else {
                mobileMenuBtn.innerHTML = '☰';
                mobileMenuBtn.style.fontSize = '28px';
            }
        });
        
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
                mobileMenuBtn.style.fontSize = '28px';
            });
        });
        
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
                mobileMenuBtn.style.fontSize = '28px';
            }
        });
    }
    
    // ========== APPOINTMENT FORM HANDLING ==========
    const appointmentForm = document.getElementById('appointmentForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (appointmentForm && formSuccess) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const requiredFields = appointmentForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                    setTimeout(() => {
                        field.style.borderColor = '';
                    }, 3000);
                }
            });
            
            if (isValid) {
                appointmentForm.style.display = 'none';
                formSuccess.style.display = 'block';
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
        
        const allInputs = appointmentForm.querySelectorAll('input, select, textarea');
        allInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '';
            });
        });
    }
    
    // ========== CONTACT FORM HANDLING ==========
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');
    
    if (contactForm && contactSuccess) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                    setTimeout(() => {
                        field.style.borderColor = '';
                    }, 3000);
                }
            });
            
            if (isValid) {
                contactForm.style.display = 'none';
                contactSuccess.style.display = 'block';
                contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
        
        const contactInputs = contactForm.querySelectorAll('input, select, textarea');
        contactInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '';
            });
        });
    }
    
    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========== HEADER SCROLL EFFECT ==========
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                header.style.boxShadow = '0 4px 30px rgba(26, 82, 118, 0.3)';
            } else {
                header.style.boxShadow = '0 4px 25px rgba(26, 82, 118, 0.25)';
            }
        });
    }
    
    // ========== SCROLL ANIMATIONS ==========
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .feature, .doctor-card, .gallery-item, .timeline-item, .award-card, .impact-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    const animatedElements = document.querySelectorAll('.service-card, .feature, .doctor-card, .gallery-item, .timeline-item, .award-card, .impact-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // ========== SET MINIMUM DATE ==========
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }
    
    console.log('Goodness and Mercy Hospital website loaded successfully!');
});
