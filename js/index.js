function toggleOnMobile(elem) {
  if (window.innerWidth <= 992) {
    const elemVisible = (elem.style.display.length > 0 && elem.style.display !== 'none');
    if (elemVisible) {
      elem.style.display = 'none';
    } else {
      elem.style.display = 'flex';
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const navTrigger = document.querySelector('.mobile-nav-trigger');
  const nav = document.querySelector('.desktop-nav-menu');
  const closeNavBtn = document.querySelector('.close-nav');

  navTrigger.addEventListener('click', () => {
    toggleOnMobile(nav);
  });

  closeNavBtn.addEventListener('click', () => {
    toggleOnMobile(nav);
  });

  nav.querySelectorAll('a').forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      toggleOnMobile(nav);
    });
  });
});
