let menu = document.querySelector('#manu-icon');
let navbar = document.querySelector('.navItems');

menu.onclick = () => {
    menu.classList.toggle('fa-solid fa-xmark');
    navbar.classList.toggle('open');
}
