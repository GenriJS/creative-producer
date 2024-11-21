const langSwitchDesktop = document.querySelector('.language__switch-desktop');
const langSwitchMobile = document.querySelector('.language__switch-mobile');

langSwitchDesktop.addEventListener('click', function() {
  this.classList.toggle('active');
  langSwitchMobile.classList.toggle('active');
});

langSwitchMobile.addEventListener('click', function() {
  this.classList.toggle('active');
  langSwitchDesktop.classList.toggle('active');
});