const recentWorksPopupData =[{
  coverImgMobile: 'images/project-popup.png',
  coverImgDesktop: 'images/project-img-desktop.png',
  title: 'Keeping track of hundreds of components',
  languagesMobile: ['Ruby on rails', 'css', 'JavaScript'],
  languagesDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveUrl: 'https://blessedjasonmwanza.github.io/my-portfolio-microverse/',
  sourceUrl: 'https://github.com/blessedjasonmwanza/my-portfolio-microverse',
},

{
  coverImgMobile: 'images/project-popup.png',
  coverImgDesktop: 'images/project-img-desktop.png',
  title: 'Keeping track of hundreds of components',
  languagesMobile: ['Ruby on rails', 'css', 'JavaScript'],
  languagesDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveUrl: 'https://blessedjasonmwanza.github.io/my-portfolio-microverse/',
  sourceUrl: 'https://github.com/blessedjasonmwanza/my-portfolio-microverse',
},
{
  coverImgMobile: 'images/project-popup.png',
  coverImgDesktop: 'images/project-img-desktop.png',
  title: 'Keeping track of hundreds of components',
  languagesMobile: ['Ruby on rails', 'css', 'JavaScript'],
  languagesDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveUrl: 'https://blessedjasonmwanza.github.io/my-portfolio-microverse/',
  sourceUrl: 'https://github.com/blessedjasonmwanza/my-portfolio-microverse',
},
{
  coverImgMobile: 'images/project-popup.png',
  coverImgDesktop: 'images/project-img-desktop.png',
  title: 'Keeping track of hundreds of components',
  languagesMobile: ['Ruby on rails', 'css', 'JavaScript'],
  languagesDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveUrl: 'https://blessedjasonmwanza.github.io/my-portfolio-microverse/',
  sourceUrl: 'https://github.com/blessedjasonmwanza/my-portfolio-microverse',
},
{
  coverImgMobile: 'images/project-popup.png',
  coverImgDesktop: 'images/project-img-desktop.png',
  title: 'Keeping track of hundreds of components',
  languagesMobile: ['Ruby on rails', 'css', 'JavaScript'],
  languagesDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveUrl: 'https://blessedjasonmwanza.github.io/my-portfolio-microverse/',
  sourceUrl: 'https://github.com/blessedjasonmwanza/my-portfolio-microverse',
},
{
  coverImgMobile: 'images/project-popup.png',
  coverImgDesktop: 'images/project-img-desktop.png',
  title: 'Keeping track of hundreds of components',
  languagesMobile: ['Ruby on rails', 'css', 'JavaScript'],
  languagesDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  liveUrl: 'https://blessedjasonmwanza.github.io/my-portfolio-microverse/',
  sourceUrl: 'https://github.com/blessedjasonmwanza/my-portfolio-microverse',
}];

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
function showPopup() {
  const popupWrapper = document.querySelector('#popup-wrapper');
  if (window.innerWidth <= 992) {
    popupWrapper.innerHTML = `<section class="mobile-project-popup project-popup d-flex flex-cols">
        <img src="images/close-menu.png" class="close-popup" alt="close project preview"title="Close project preview" >
        <img src="${recentWorksPopupData.coverImgMobile}" class="popup-img" alt="Project placeholder">
        <h3 class="section-title-heading">
          ${recentWorksPopupData.title}
        </h3>
        <ul class="project-languages d-flex flex-center">
          <li>Ruby on rails</li>
          <li>css</li>
          <li>JavaScript</li>
        </ul>
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
  } else {
    popupWrapper.innerHTML = `
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
                  <a href="${recentWorksPopupData.sourceUrl}" class="action-btn">
                    See Source&nbsp;&nbsp;
                    <img src="images/Icon-GitHub.png" alt="See source on github">
                  </a>
                </div>
              </div>

              <ul class="project-languages d-flex">
                <li>Codekit</li>
                <li>GitHub</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Terminal</li>
                <li>Codepen</li>
              </ul>
              <p class="description">
                ${recentWorksPopupData.description}
              </p>
          </section>
        </div>
    `;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const navTrigger = document.querySelector('.mobile-nav-trigger');
  const nav = document.querySelector('.desktop-nav-menu');
  const closeNavBtn = document.querySelector('.close-nav');

  const recentWorksData = {
    // total: 6,
    data: {
      coverImg: 'images/Img-plaholder.png',
      title: 'Multi-Post Stories <br> Gain+Glory',
      languages: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    },
  };

  for (let totalWorks = 0; totalWorks<=recentWorksPopupData.length; totalWorks += 1) {
    console.log(recentWorksData[totalWorks])
    let workCard = `
      <section class="card d-flex flex-cols project">
        <img src="${recentWorksData.data.coverImg}" class="project-img"  alt="${recentWorksData.data.title.replace('<br>', '')}">
        <div class="d-flex description-info">
          <h3 class="project-details center-text self-center">
          ${recentWorksData.data.title}
          </h3>
          <ul class="project-languages d-flex flex-center">
            `;
    recentWorksData.data.languages.forEach((language) => {
      workCard += `<li>${language}</li>`;
    });
    workCard += `
          </ul>
          <a href="#" class="action-btn self-center view-project">See project</a>
        </div>
      </section>
    `;
    document.querySelector('.projects').innerHTML += workCard;
  }
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

  seeProjectTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('body').classList.add('hidden-scrollbar');
      showPopup();
      initPopupCloser();
    });
  });
});