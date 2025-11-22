var menu = document.getElementById('manu-icon');
let navbar = document.querySelector('.navItems');


menu.onclick = function() {
  menu.classList.toggle('fa-xmark');
  
  navbar.classList.toggle('open');
};
