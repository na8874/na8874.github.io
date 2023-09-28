// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav ul');

mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        e.preventDefault();
        alert('Name and email are required fields.');
    }
});

// Project modal
const projectCards = document.querySelectorAll('.project');
const projectModal = document.querySelector('.project-modal');
const closeModalBtn = document.querySelector('.close-modal-btn');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        projectModal.classList.add('show');
    });
});

closeModalBtn.addEventListener('click', () => {
    projectModal.classList.remove('show');
});
