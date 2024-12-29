document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes
                entry.target.classList.add('animate');
                
                // Handle options grid
                if (entry.target.classList.contains('options-grid')) {
                    const options = entry.target.querySelectorAll('.option');
                    options.forEach(option => {
                        option.style.animation = 'none';
                        option.offsetHeight; // Trigger reflow
                        option.style.animation = null;
                    });
                }
                
                // Handle resource cards
                if (entry.target.classList.contains('resource-cards')) {
                    const cards = entry.target.querySelectorAll('.card');
                    cards.forEach(card => {
                        card.style.animation = 'none';
                        card.offsetHeight; // Trigger reflow
                        card.style.animation = null;
                    });
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all necessary elements
    const elementsToObserve = document.querySelectorAll(
        '.options-grid, .resource-cards, .faq-header, .animate-paragraph, .scroll-fade-up, .text-reveal'
    );
    elementsToObserve.forEach(el => observer.observe(el));

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add FAQ content observer
    const faqObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-50px 0px'
    });

    // Observe FAQ content elements
    document.querySelectorAll('.faq-content').forEach(content => {
        faqObserver.observe(content);
    });

    // FAQ Toggle Function
    window.toggleFAQ = function(button) {
        const content = button.nextElementSibling;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        // Toggle button state
        button.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle content visibility
        if (!isExpanded) {
            content.classList.add('animate');
        } else {
            content.classList.remove('animate');
        }
        
        // Update other FAQs
        const allFAQs = document.querySelectorAll('.faq-item');
        allFAQs.forEach(faq => {
            if (faq.contains(button)) return; // Skip current FAQ
            
            const otherButton = faq.querySelector('.faq-header');
            const otherContent = faq.querySelector('.faq-content');
            
            otherButton.setAttribute('aria-expanded', 'false');
            otherContent.classList.remove('animate');
        });
    };
}); 