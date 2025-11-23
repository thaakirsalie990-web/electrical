document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header__hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const icon = hamburger.querySelector('i');

    // 1. Toggle Main Mobile Menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Toggle Mobile Submenu (Services Dropdown)
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent link default if wrapper is a link
            
            // Toggle the arrow rotation
            toggle.classList.toggle('active');
            
            const sublist = toggle.closest('.mobile-menu__item--has-submenu').querySelector('.mobile-menu__sublist');
            if (sublist) {
                sublist.classList.toggle('open');
            }
        });
    });

    // 3. Close menu when clicking a normal link (optional)
    const mobileLinks = document.querySelectorAll('.mobile-menu__list a:not([href="#"])');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});