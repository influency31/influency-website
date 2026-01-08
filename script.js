// ===================================
// INFLUENCY LANDING PAGE - JAVASCRIPT
// Gen Z Animations & Interactions
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavbar();
    initScrollAnimations();
    initDiscoveryCarousel();
    initCardsDeck();
    initParallax();
    initMobileMenu();
    initSmoothScroll();
    initEmailForm();
    initPhoneInteractions();
    
    console.log('🚀 Influency Landing Page Loaded');
    console.log('💜 Built with love for Gen Z creators');
});

// ===================================
// NAVBAR
// ===================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    if (!navbar) return;
    
    window.addEventListener('scroll', throttle(() => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show on scroll
        if (currentScroll > lastScroll && currentScroll > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    }, 16));
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add stagger effect for grid items
                const parent = entry.target.parentElement;
                if (parent) {
                    const siblings = parent.querySelectorAll('[data-animate]');
                    if (siblings.length > 1) {
                        siblings.forEach((sibling, index) => {
                            sibling.style.transitionDelay = `${index * 0.1}s`;
                        });
                    }
                }
            }
        });
    }, observerOptions);
    
    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
    
    // Also observe specific animated elements
    const animatedElements = [
        '.why-card',
        '.onboard-step',
        '.meta-step',
        '.discovery-step',
        '.filter-feature',
        '.benefit',
        '.campaign-step'
    ];
    
    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.setAttribute('data-animate', '');
            observer.observe(el);
        });
    });
}

// ===================================
// DISCOVERY CAROUSEL
// ===================================
function initDiscoveryCarousel() {
    const track = document.querySelector('.discovery-track');
    const dots = document.querySelectorAll('.carousel-dots span');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (!track) return;
    
    let currentIndex = 0;
    const steps = track.querySelectorAll('.discovery-step');
    const totalSteps = steps.length;
    
    function updateCarousel() {
        const stepWidth = steps[0].offsetWidth + 24; // Include gap
        track.scrollTo({
            left: currentIndex * stepWidth,
            behavior: 'smooth'
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = Math.max(0, currentIndex - 1);
            updateCarousel();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = Math.min(totalSteps - 1, currentIndex + 1);
            updateCarousel();
        });
    }
    
    // Update dots on click
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
    });
    
    // Track scroll position to update dots
    track.addEventListener('scroll', throttle(() => {
        const stepWidth = steps[0].offsetWidth + 24;
        const newIndex = Math.round(track.scrollLeft / stepWidth);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }
    }, 100));
    
    // Auto-scroll every 5 seconds
    let autoScrollInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSteps;
        updateCarousel();
    }, 5000);
    
    // Pause auto-scroll on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });
    
    track.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSteps;
            updateCarousel();
        }, 5000);
    });
}

// ===================================
// CARDS DECK ANIMATION
// ===================================
function initCardsDeck() {
    const deck = document.querySelector('.cards-deck');
    if (!deck) return;
    
    const cards = deck.querySelectorAll('.campaign-card-large');
    
    // Add hover effects
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            cards.forEach((c, i) => {
                if (i !== index) {
                    c.style.opacity = '0.7';
                    c.style.filter = 'blur(2px)';
                }
            });
            card.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', () => {
            cards.forEach(c => {
                c.style.opacity = '1';
                c.style.filter = 'none';
            });
            card.style.zIndex = '';
        });
    });
    
    // Intersection observer for entrance animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(100px) rotate(0deg)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                        card.style.opacity = '1';
                        
                        // Apply original transforms
                        if (card.classList.contains('card-1')) {
                            card.style.transform = 'translateX(-200px) rotate(-8deg)';
                        } else if (card.classList.contains('card-2')) {
                            card.style.transform = 'translateX(0) rotate(0deg)';
                        } else if (card.classList.contains('card-3')) {
                            card.style.transform = 'translateX(200px) rotate(8deg)';
                        }
                    }, index * 150);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(deck);
}

// ===================================
// PARALLAX EFFECTS
// ===================================
function initParallax() {
    const heroShapes = document.querySelectorAll('.hero-shapes .shape');
    const ctaShapes = document.querySelectorAll('.cta-shape');
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        // Hero shapes parallax
        heroShapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.03;
            shape.style.transform = `translate(${scrolled * speed * 0.5}px, ${scrolled * speed}px)`;
        });
        
        // CTA shapes parallax
        ctaShapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.02;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, 16));
    
    // Mouse parallax for hero section
    const hero = document.querySelector('.hero');
    const phoneShowcase = document.querySelector('.hero-phone-showcase');
    
    if (hero && phoneShowcase) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
            const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
            
            const phoneMain = phoneShowcase.querySelector('.phone-main');
            const phoneSecondary = phoneShowcase.querySelector('.phone-secondary');
            
            if (phoneMain) {
                phoneMain.style.transform = `
                    translateY(${y * 20}px) 
                    rotate(${-2 + x * 3}deg)
                `;
            }
            
            if (phoneSecondary) {
                phoneSecondary.style.transform = `
                    translateX(${140 + x * 10}px) 
                    translateY(${40 + y * 30}px) 
                    rotate(${8 + x * 5}deg)
                `;
            }
        });
        
        hero.addEventListener('mouseleave', () => {
            const phoneMain = phoneShowcase.querySelector('.phone-main');
            const phoneSecondary = phoneShowcase.querySelector('.phone-secondary');
            
            if (phoneMain) {
                phoneMain.style.transform = '';
            }
            
            if (phoneSecondary) {
                phoneSecondary.style.transform = '';
            }
        });
    }
}

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('mobile-open');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('mobile-open');
            document.body.classList.remove('menu-open');
        });
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// EMAIL FORM
// ===================================
function initEmailForm() {
    const form = document.querySelector('.email-form');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const input = form.querySelector('input[type="email"]');
        const button = form.querySelector('button');
        
        if (!input || !input.value) return;
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            input.style.borderColor = '#ff4100';
            input.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                input.style.borderColor = '';
                input.style.animation = '';
            }, 500);
            return;
        }
        
        // Show success state
        const originalText = button.textContent;
        button.textContent = 'Added! 🎉';
        button.style.background = '#45b29d';
        input.value = '';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 3000);
    });
}

// ===================================
// PHONE INTERACTIONS
// ===================================
function initPhoneInteractions() {
    // Add subtle hover effects to phone screens
    const phones = document.querySelectorAll('.phone-frame');
    
    phones.forEach(phone => {
        phone.addEventListener('mouseenter', () => {
            phone.style.transform = 'scale(1.02)';
            phone.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.2)';
        });
        
        phone.addEventListener('mouseleave', () => {
            phone.style.transform = '';
            phone.style.boxShadow = '';
        });
    });
    
    // Animate progress bars when visible
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const targetWidth = fill.style.width;
                fill.style.width = '0%';
                
                setTimeout(() => {
                    fill.style.transition = 'width 1s ease-out';
                    fill.style.width = targetWidth;
                }, 100);
                
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => progressObserver.observe(bar));
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ===================================
// INTERSECTION OBSERVER HELPERS
// ===================================
function createScrollTrigger(element, callback, options = {}) {
    const defaults = {
        threshold: 0.2,
        rootMargin: '0px',
        once: true
    };
    
    const config = { ...defaults, ...options };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                if (config.once) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: config.threshold,
        rootMargin: config.rootMargin
    });
    
    if (typeof element === 'string') {
        document.querySelectorAll(element).forEach(el => observer.observe(el));
    } else if (element) {
        observer.observe(element);
    }
    
    return observer;
}

// ===================================
// ADDITIONAL ANIMATIONS
// ===================================

// Add CSS for shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .nav-links.mobile-open {
        display: flex !important;
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 20px;
        gap: 16px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        animation: slideDown 0.3s ease;
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
    
    body.menu-open {
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// ===================================
// TYPING EFFECT (Optional)
// ===================================
function initTypingEffect() {
    const elements = document.querySelectorAll('[data-typing]');
    
    elements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.style.borderRight = '2px solid currentColor';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            el.textContent += text[i];
            i++;
            
            if (i >= text.length) {
                clearInterval(typeInterval);
                el.style.borderRight = 'none';
            }
        }, 50);
    });
}

// ===================================
// COUNTER ANIMATION
// ===================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = formatNumber(Math.floor(current));
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = formatNumber(target);
        }
    };
    
    updateCounter();
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
    }
    return num.toString();
}

// Initialize counters when visible
createScrollTrigger('.stat-value', (el) => {
    const value = el.textContent;
    if (value.includes('$')) {
        // Handle currency
        const num = parseFloat(value.replace(/[$,K]/g, ''));
        animateCounter(el, num, 1500);
        el.textContent = '$0';
    } else if (!isNaN(parseInt(value))) {
        animateCounter(el, parseInt(value), 1500);
        el.textContent = '0';
    }
}, { threshold: 0.5 });

// ===================================
// HANDLE RESIZE
// ===================================
window.addEventListener('resize', debounce(() => {
    // Recalculate any layout-dependent values
    const cards = document.querySelectorAll('.campaign-card-large');
    if (window.innerWidth < 1024) {
        cards.forEach(card => {
            card.style.transform = 'none';
        });
    }
}, 250));

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Use passive event listeners where possible
document.addEventListener('touchstart', () => {}, { passive: true });
document.addEventListener('touchmove', () => {}, { passive: true });

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
