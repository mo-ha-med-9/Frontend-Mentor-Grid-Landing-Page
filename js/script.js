const menuIcon = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuIcon.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    menuIcon.classList.toggle('active');
});