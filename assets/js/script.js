const menuBurger = document.querySelector('.burger-icon');
const navLinks = document.querySelector('.nav-links');

menuBurger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        menuBurger.setAttribute('name', 'close-outline')
    } else {
        menuBurger.setAttribute('name', 'fast-food-outline')
    }
});