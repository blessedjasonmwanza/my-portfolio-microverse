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

function initPopupCloser() {
  const popupCloser = document.querySelector('.close-popup');
  if (popupCloser) {
    popupCloser.addEventListener('click', (e) => {
      document.querySelector('body').classList.remove('hidden-scrollbar');
      if (window.innerWidth <= 992) {
        e.target.parentElement.remove();
      } else {
        document.querySelector('.desktop-project-popup-wrapper').remove();
      }
      document.querySelector('body').style.overflow = 'auto';
    });
  }
}
function showPopup(recentWorksPopupData) {
  const popupWrapper = document.querySelector('#popup-wrapper');
  if (window.innerWidth <= 992) {
    let popup = `<section class="mobile-project-popup project-popup d-flex flex-cols">
        <img src="images/close-menu.png" class="close-popup" alt="close project preview"title="Close project preview" >
        <img src="${recentWorksPopupData.coverImgMobile}" class="popup-img" alt="Project placeholder">
        <h3 class="section-title-heading">
          ${recentWorksPopupData.title}
        </h3>
        <ul class="project-languages d-flex flex-center">
        `;
    recentWorksPopupData.languagesMobile.forEach((language) => {
      popup += `<li>${language}</li>`;
    });
    popup += `</ul>
        <p class="description">
          ${recentWorksPopupData.description}
        </p>
        <div class="action-btns d-flex">
          <a href="${recentWorksPopupData.liveUrl}" class="action-btn">
            
            See Live
            <img src="images/see-source.png" alt="view live platform">
          </a>
          <a href="${recentWorksPopupData.sourceUrl}" class="action-btn">
            See Source
            <img src="images/Icon-GitHub.png" alt="See source on github">
          </a>
        </div>
      </section>
    `;
    popupWrapper.innerHTML = popup;
  } else {
    let popup = `
      <div class="desktop-project-popup-wrapper">
          <section class="d-flex flex-cols popup-content">
            <span class="close-popup-wrapper close-popup">
              <img src="images/close-desktop-popup.png" alt="close project preview"title="Close project preview">
            </span>
              <img src="${recentWorksPopupData.coverImgDesktop}" class="project-img-desktop" alt="Project placeholder">
              <div class="d-flex title-section">
                <h3 class="section-title-heading">
                  ${recentWorksPopupData.title}
                </h3>
                <div class="action-btns">
                  <a href="${recentWorksPopupData.liveUrl}" class="action-btn">
                    See Live &nbsp;&nbsp;
                    <img src="images/see-source.png" alt="view live platform">
                  </a>
                  ${
                    recentWorksPopupData.sourceUrl == '#' ? 
                    '' : `<a href="${recentWorksPopupData.sourceUrl}" class="action-btn">
                    See Source&nbsp;&nbsp;
                    <img src="images/Icon-GitHub.png" alt="See source on github">
                  </a>`
                  }
                </div>
              </div>

              <ul class="project-languages d-flex">
              `;
    recentWorksPopupData.languagesDesktop.forEach((language) => {
      popup += `<li>${language}</li>`;
    });
    popup += `</ul>
              <p class="description">
              </ul>
              <p class="description">
                ${recentWorksPopupData.description}
              </p>
          </section>
        </div>
    `;
    popupWrapper.innerHTML = popup;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const navTrigger = document.querySelector('.mobile-nav-trigger');
  const nav = document.querySelector('.desktop-nav-menu');
  const closeNavBtn = document.querySelector('.close-nav');
  const contactMeForm = document.querySelector('#contact-me-form');
  const recentWorksData = [
    {
      coverImg: 'images/bravelender.png',
      title: 'BraveLender Software',
      languages: ['PHP', 'SQL', 'JavaScript', 'Jquery', 'HTML', 'CSS', 'FontAwesome'],
      coverImgMobile: 'images/bravelender.png',
      coverImgDesktop: 'images/bravelender.png',
      languagesMobile: ['PHP', 'SQL', 'JavaScript', 'Jquery', 'HTML', 'CSS', 'FontAwesome'],
      languagesDesktop: ['PHP', 'SQL', 'JavaScript', 'Jquery', 'HTML', 'CSS', 'FontAwesome'],
      description: 'BraveLender Software is an advanced Cloud based Loan Accounting and Management CRM system helping financial servicing businesses automate their workflow through remote work, while extending their clientele base through a peer-to-peer network',
      liveUrl: 'https://bravelender.com',
      sourceUrl: '#',
    },
    {
      coverImg: 'images/afrilending.png',
      title: 'AfriLending Platform',
      languages: ['ReactJS', 'PHP', 'SQL', 'JavaScript', 'HTML', 'CSS', 'FontAwesome'],
      coverImgMobile: 'images/afrilending.png',
      coverImgDesktop: 'images/afrilending.png',
      languagesMobile: ['ReactJS', 'PHP', 'SQL', 'JavaScript', 'HTML', 'CSS', 'FontAwesome'],
      languagesDesktop: ['ReactJS', 'PHP', 'SQL', 'JavaScript', 'HTML', 'CSS', 'FontAwesome'],
      description: 'AfriLending is an Uber and Lyft for Cash. A Peer-to-Peer Platform that allows people to borrow money from hundreds of nearby lenders and directly transferred into their mobile money accounts.',
      liveUrl: 'https://afrilending.com',
      sourceUrl: '#',
    },
    {
      coverImg: 'https://github.com/blessedjasonmwanza/accurate-stock-prices/raw/develop/screenshot.png',
      title: 'Accurate Stock Prices',
      languages: ['ReactJS', 'Redux', 'HTML', 'CSS', 'Heroku', 'Linters'],
      coverImgMobile: 'https://github.com/blessedjasonmwanza/accurate-stock-prices/raw/develop/screenshot.png',
      coverImgDesktop: 'https://github.com/blessedjasonmwanza/accurate-stock-prices/raw/develop/screenshot.png',
      languagesMobile: ['ReactJS', 'Redux', 'HTML', 'CSS', 'Heroku', 'Linters'],
      languagesDesktop: ['ReactJS', 'Redux', 'HTML', 'CSS', 'Heroku', 'Linters'],
      description: 'View the most accurate financial data out there. This application provides financial statements in real time, every statements is audited, standardized, and up to date. Covering NYSE, NASDAQ, AMEX, EURONEXT, TSX, INDEXES, ETFs, MUTUAL FUNDS, FOREX and CRYPTO. View real time stock price, covering the fundamental data part of the stocks via providing income statement, balance sheet statement and cashflow statement quarterly and annually.',
      liveUrl: 'https://accurate-stock-prices.herokuapp.com/',
      sourceUrl: 'https://github.com/blessedjasonmwanza/accurate-stock-prices',
    },
    {
      coverImg: 'https://github.com/blessedjasonmwanza/todo-list/raw/main/To-do-list.png',
      title: 'To-Do List App',
      languages: ['Vanilla JavaScript', 'Babel', 'WebPacks', 'APIs', 'HTML', 'CSS'],
      coverImgMobile: 'https://github.com/blessedjasonmwanza/todo-list/raw/main/To-do-list.png',
      coverImgDesktop: 'https://github.com/blessedjasonmwanza/todo-list/raw/main/To-do-list.png',
      languagesMobile: ['ReactJS', 'JavaScript', 'Babel', 'WebPacks', 'APIs', 'HTML', 'CSS'],
      languagesDesktop: ['ReactJS', 'JavaScript', 'Babel', 'WebPacks', 'APIs', 'HTML', 'CSS'],
      description: 'Minimalistic Todo List Wep Application built with Pure JavaScript, HTML, CSS, Babel, and NPM Wepacks to help users easily keep track and manage their todo list activities.',
      liveUrl: 'https://blessedjasonmwanza.github.io/todo-list/',
      sourceUrl: 'https://github.com/blessedjasonmwanza/todo-list',
    },
    {
      coverImg: 'https://github.com/blessedjasonmwanza/spacex-booking/raw/develop/screenshot.png',
      title: 'Space Travelers\' Booking Hub',
      languages: ['ReactJS', 'JavaScript', 'WebPack', 'Babel', 'HTML', 'CSS', 'Heroku', 'Linters'],
      coverImgMobile: 'https://github.com/blessedjasonmwanza/spacex-booking/raw/develop/screenshot.png',
      coverImgDesktop: 'https://github.com/blessedjasonmwanza/spacex-booking/raw/develop/screenshot.png',
      languagesMobile: ['ReactJS', 'JavaScript', 'WebPack', 'Babel', 'HTML', 'CSS', 'Heroku', 'Linters'],
      languagesDesktop: ['ReactJS', 'JavaScript', 'WebPack', 'Babel', 'HTML', 'CSS', 'Heroku', 'Linters'],
      description: 'Working with the real live data from the SpaceX API. The application allows users to book rockets and join selected space missions. This web application is for a company that provides commercial and scientific space travel services.',
      liveUrl: 'https://spacex-booking.herokuapp.com/',
      sourceUrl: 'https://github.com/blessedjasonmwanza/spacex-booking',
    },
    {
      coverImg: 'images/leaderboard.png',
      title: 'Leaderboard Scores tracker',
      languages: ['JavaScript', 'APIs', 'WebPack', 'Babel', 'HTML', 'CSS'],
      coverImgMobile: 'images/leaderboard.png',
      coverImgDesktop: 'images/leaderboard.png',
      languagesMobile: ['JavaScript', 'APIs', 'WebPack', 'Babel', 'HTML', 'CSS'],
      languagesDesktop: ['JavaScript', 'APIs', 'WebPack', 'Babel', 'HTML', 'CSS'],
      description: 'Using external Leaderboard API, webpack, Gitflow, and ES6 features, notably modules to develop the leaderboard website that displays scores submitted by different players. It also allows you to submit your score.',
      liveUrl: 'https://blessedjasonmwanza.github.io/leaderboard/',
      sourceUrl: 'https://github.com/blessedjasonmwanza/leaderboard',
    },
  ];

  recentWorksData.forEach((project) => {
    let workCard = `
    <section class="card d-flex flex-cols project">
      <img src="${project.coverImg}" class="project-img"  alt="${project.title.replace('<br>', '')}">
      <div class="d-flex description-info">
        <h3 class="project-details center-text self-center">
        ${project.title}
        </h3>
        <ul class="project-languages d-flex flex-center">
          `;
    project.languages.forEach((language) => {
      workCard += `<li>${language}</li>`;
    });
    workCard += `
        </ul>
        <a href="#" class="action-btn self-center view-project">See project</a>
      </div>
    </section>
  `;
    document.querySelector('.projects').innerHTML += workCard;
  });
  const seeProjectTriggers = document.querySelectorAll('.view-project');
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

  seeProjectTriggers.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('body').classList.add('hidden-scrollbar');
      showPopup(recentWorksData[index]);
      initPopupCloser();
    });
  });
  const form = contactMeForm.elements;
  const formData = {
    name: form.full_name.value,
    email: form.email.value,
    body: form.message.value,
  };
  let savedFormData = localStorage.getItem('formData');
  if (savedFormData) {
    savedFormData = JSON.parse(savedFormData);
    form.full_name.value = savedFormData.name;
    form.email.value = savedFormData.email;
    form.message.value = savedFormData.body;
  }
  Array.from(form).forEach((element) => {
    element.addEventListener('change', () => {
      formData.name = form.full_name.value;
      formData.email = form.email.value;
      formData.body = form.message.value;
      localStorage.setItem('formData', JSON.stringify(formData));
    });
  });

  contactMeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const visitorEmail = contactMeForm.elements.email.value;
    const errorMsgArea = document.querySelector('.error-msg');
    if (visitorEmail === visitorEmail.toLowerCase()) {
      errorMsgArea.style.display = 'block';
      errorMsgArea.style.color = 'green';
      errorMsgArea.innerHTML = 'Form is valid and data has been saved.';
    } else {
      errorMsgArea.style.display = 'block';
      errorMsgArea.innerHTML = 'Invalid email. Your email must be in lowercase.';
      errorMsgArea.style.color = 'rgb(255, 69, 0)';
    }
  });
});