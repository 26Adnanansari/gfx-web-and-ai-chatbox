
// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Logo Slider Functionality
const logoContainer = document.querySelector('.logo-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    logoContainer.scrollBy({ left: -150, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
    logoContainer.scrollBy({ left: 150, behavior: 'smooth' });
});