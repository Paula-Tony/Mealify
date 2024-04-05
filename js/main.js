let navLinks = document.querySelectorAll('.header__nav li a');
let menuIcon = document.querySelector('.header__menu-icon');
let menu = document.querySelector('.header__nav ul');
let menuCloseIcon = document.getElementById('close-icon');

navLinks.forEach((link) => link.addEventListener('click', function() {
  navLinks.forEach((link) => link.classList.remove('active'))
  this.classList.add('active')
}))

menuIcon.addEventListener('click', function() {
  let overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);
  menu.classList.add('open')
})

menuCloseIcon.addEventListener('click', function() {
  document.querySelector('.overlay').remove()
  menu.classList.remove('open')
})

