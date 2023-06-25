const sideNav = document.getElementById('side-nav');
const nav = document.getElementById('nav');
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
function toggleSideNav() {
  sideNav.classList.toggle('active');
  if(sideNav.classList.contains('active')) {
    nav.classList.remove('visible');
  }
    else {
      nav.classList.add('visible');
}
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(item => item.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
        item.classList.add('active');
        document.getElementById(item.getAttribute('accesskey')).classList.add('active');
    })
})