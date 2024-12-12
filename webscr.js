const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');

    // Animate the hamburger icon
    menuButton.children[0].classList.toggle('rotate-45');
    menuButton.children[1].classList.toggle('opacity-0');
    menuButton.children[2].classList.toggle('-rotate-45');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('translate-x-full');
        menuButton.children[0].classList.remove('rotate-45');
        menuButton.children[1].classList.remove('opacity-0');
        menuButton.children[2].classList.remove('-rotate-45');
    }
});