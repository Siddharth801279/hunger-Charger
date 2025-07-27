// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const modal = document.getElementById('reservation-modal');
const modalClose = document.getElementById('modal-close');
const reserveButtons = document.querySelectorAll('#reserve-btn, #hero-reserve-btn, #contact-reserve-btn');
const cancelBtn = document.getElementById('cancel-btn');
const reservationForm = document.getElementById('reservation-form');
const newsletterForm = document.getElementById('newsletter-form');
const menuGrid = document.getElementById('menu-grid');
const testimonialCard = document.getElementById('testimonial-card');
const testimonialIndicators = document.getElementById('testimonial-indicators');

// Menu Data
const menuItems = [
    {
        name: "Grilled Salmon Supreme",
        description: "Fresh Atlantic salmon with herb crust, served with seasonal vegetables and lemon butter sauce",
        price: "$28",
        image: "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        rating: 5,
        category: "Seafood"
    },
    {
        name: "Wagyu Beef Tenderloin",
        description: "Premium wagyu beef cooked to perfection with truffle mashed potatoes and red wine reduction",
        price: "$45",
        image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        rating: 5,
        category: "Premium"
    },
    {
        name: "Lobster Thermidor",
        description: "Fresh lobster in creamy cognac sauce, gratinated with parmesan and served with garlic bread",
        price: "$38",
        image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        rating: 5,
        category: "Seafood"
    },
    {
        name: "Mediterranean Pasta",
        description: "Handmade pasta with sun-dried tomatoes, olives, feta cheese and fresh basil",
        price: "$22",
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        rating: 4,
        category: "Vegetarian"
    },
    {
        name: "Duck Confit",
        description: "Traditional French duck leg confit with roasted root vegetables and cherry gastrique",
        price: "$32",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        rating: 5,
        category: "French"
    },
    {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center, served with vanilla ice cream and berry compote",
        price: "$12",
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        rating: 5,
        category: "Dessert"
    }
];

// Testimonials Data
const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Food Critic",
        content: "HUNGER CHARGER delivers an extraordinary culinary experience. Every dish is a masterpiece of flavor and presentation.",
        rating: 5,
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
        name: "Michael Chen",
        role: "Local Food Blogger",
        content: "The atmosphere is sophisticated yet welcoming, and the service is impeccable. A true gem in the city's dining scene.",
        rating: 5,
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
        name: "Emma Rodriguez",
        role: "Regular Customer",
        content: "I've been coming here for special occasions for years. The quality never disappoints and the staff treats you like family.",
        rating: 5,
        image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
];

let currentTestimonial = 0;

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
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

// Modal Functions
function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    reservationForm.reset();
}

// Event Listeners for Modal
reserveButtons.forEach(btn => {
    btn.addEventListener('click', openModal);
});

modalClose.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Reservation Form Submission
reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(reservationForm);
    const reservationData = Object.fromEntries(formData);
    
    // Simulate form submission
    alert(`Reservation request submitted successfully!\n\nDetails:\nName: ${reservationData.name}\nDate: ${reservationData.date}\nTime: ${reservationData.time}\nGuests: ${reservationData.guests}\n\nWe'll contact you shortly to confirm your reservation.`);
    
    closeModal();
});

// Newsletter Form Submission
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    
    e.target.reset();
});

// Generate Menu Items
function generateMenuItems() {
    menuGrid.innerHTML = '';
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        const stars = Array.from({length: 5}, (_, i) => 
            `<svg class="star ${i < item.rating ? '' : 'empty'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
            </svg>`
        ).join('');
        
        menuItem.innerHTML = `
            <div class="menu-image-container">
                <img src="${item.image}" alt="${item.name}" class="menu-image">
                <div class="menu-category">${item.category}</div>
            </div>
            <div class="menu-content">
                <div class="menu-header">
                    <h3 class="menu-name">${item.name}</h3>
                    <span class="menu-price">${item.price}</span>
                </div>
                <div class="menu-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">(${item.rating}.0)</span>
                </div>
                <p class="menu-description">${item.description}</p>
                <button class="menu-button">Add to Order</button>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
}

// Generate Testimonials
function generateTestimonial(index) {
    const testimonial = testimonials[index];
    
    const stars = Array.from({length: testimonial.rating}, () => 
        `<svg class="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
        </svg>`
    ).join('');
    
    testimonialCard.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-avatar">
        <div class="testimonial-rating">${stars}</div>
        <p class="testimonial-content">${testimonial.content}</p>
        <div class="testimonial-author">${testimonial.name}</div>
        <div class="testimonial-role">${testimonial.role}</div>
    `;
}

function generateTestimonialIndicators() {
    testimonialIndicators.innerHTML = '';
    
    testimonials.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `indicator ${index === currentTestimonial ? 'active' : ''}`;
        indicator.setAttribute('aria-label', `View testimonial ${index + 1}`);
        indicator.addEventListener('click', () => {
            currentTestimonial = index;
            updateTestimonial();
        });
        testimonialIndicators.appendChild(indicator);
    });
}

function updateTestimonial() {
    generateTestimonial(currentTestimonial);
    
    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentTestimonial);
    });
}

// Auto-rotate testimonials
function startTestimonialRotation() {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }, 5000);
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
function observeElements() {
    const elementsToObserve = document.querySelectorAll('.feature-card, .menu-item, .special-card, .info-card');
    
    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Form Validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#dc2626';
            isValid = false;
        } else {
            field.style.borderColor = '#e5e7eb';
        }
    });
    
    return isValid;
}

// Add form validation to reservation form
reservationForm.addEventListener('input', (e) => {
    if (e.target.hasAttribute('required')) {
        if (e.target.value.trim()) {
            e.target.style.borderColor = '#10b981';
        } else {
            e.target.style.borderColor = '#dc2626';
        }
    }
});

// Lazy Loading for Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Keyboard Navigation for Modal
modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateMenuItems();
    generateTestimonial(currentTestimonial);
    generateTestimonialIndicators();
    startTestimonialRotation();
    observeElements();
    lazyLoadImages();
    
    // Add loading animation to images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10));

// Add click handlers for menu items
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-button')) {
        const menuItem = e.target.closest('.menu-item');
        const itemName = menuItem.querySelector('.menu-name').textContent;
        alert(`${itemName} added to your order! (This is a demo - no actual ordering system is connected)`);
    }
});

// Add accessibility improvements
document.addEventListener('keydown', (e) => {
    // Skip to main content with keyboard shortcut
    if (e.altKey && e.key === 'm') {
        document.getElementById('home').focus();
        document.getElementById('home').scrollIntoView();
    }
});

// Add focus management for better accessibility
function manageFocus() {
    const focusableElements = document.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '3px solid #fca5a5';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
}

// Initialize focus management
manageFocus();

// Add error handling for failed image loads
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.style.display = 'none';
        console.warn(`Failed to load image: ${img.src}`);
    });
});

// Add service worker registration for better performance (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}