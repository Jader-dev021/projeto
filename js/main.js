const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar__menu');

if (menuToggle && navbarMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

        menuToggle.setAttribute('aria-expanded', String(!isOpen));

        navbarMenu.classList.toggle('open');
    });
}