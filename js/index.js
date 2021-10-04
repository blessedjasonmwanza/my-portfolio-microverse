document.addEventListener('DOMContentLoaded', function(e){
    let navTrigger = document.querySelector('.mobile-nav-trigger');
    let nav = document.querySelector('.desktop-nav-menu');
    let closeNavBtn = document.querySelector('.close-nav');
  
    navTrigger.addEventListener('click', function(e){
      toggleOnMobile(nav);
    });
    closeNavBtn.addEventListener('click', function(e){
      toggleOnMobile(nav);
    });
    nav.querySelectorAll('a').forEach(menuItem => {
      menuItem.addEventListener('click', function(e){
        toggleOnMobile(nav);
      });
    });
  });
  
  function toggleOnMobile(elem){
    if(window.innerWidth <= 992){
      let elemVisible = (elem.style.display.length > 0 && elem.style.display !== "none") ? true : false;
      if(elemVisible){
        elem.style.display = "none";
      }else{
        elem.style.display = "flex";
      }
    }
  }
  