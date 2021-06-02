
let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');
let bod = document.querySelector('.title-menu');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('isactive');
  menu.classList.toggle('active');

});