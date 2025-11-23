document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header__hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const icon = hamburger.querySelector('i');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Switch icon between bars and times (X)
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu__list a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Smooth scroll (optional enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});