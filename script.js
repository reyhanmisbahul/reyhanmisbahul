document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Portfolio tab functionality
    const portfolioTabs = document.querySelectorAll('#portfolio button');
    portfolioTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            portfolioTabs.forEach(t => t.classList.remove('active-portfolio-tab'));
            
            // Add active class to clicked tab
            this.classList.add('active-portfolio-tab');
            
            // Here you would typically switch the content being displayed
            // For now we'll just log which tab was clicked
            console.log('Switched to tab:', this.textContent.trim());
        });
    });

    // Form submission
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Initialize feather icons
    feather.replace();
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});