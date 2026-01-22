const menuToggle = document.getElementById('menu-toggle');
const headerNav = document.querySelector('.header-nav');
const closeBtn = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
    headerNav.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    headerNav.classList.remove('open');
});