const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.nav-items');

menuIcon.onclick = function() {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('open');
};
