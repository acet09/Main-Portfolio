'use strict';

// headerbar sizeChange
const headerbar = document.querySelector('#headerbar');
const headerbarHeight = headerbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerbarHeight) {
    headerbar.classList.add('headerbar--fade');
  } else {    
    headerbar.classList.remove('headerbar--fade');
  }
});

// Home opacity
const home = document.querySelector('.home__box');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});


// navbar scrolling
const navScrollBtn = document.querySelectorAll('.gnb__list__item');
const sectionCover = document.querySelectorAll('.section__cover');

function winHeight() {
  let valueHeight = 0;
  if (window.innerWidth > 768) {
    valueHeight = 125
  } else {
    valueHeight = 87
  }
  for (let i = 0; i < navScrollBtn.length; i++) {
    navScrollBtn[i].addEventListener('click', () => {
      const coverHeight = sectionCover[i].offsetTop - valueHeight;
      window.scroll({
        top: coverHeight,
        behavior: "smooth",
      });
    });
  }
}  
winHeight();

function winResposive() {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      for (let i = 0; i < navScrollBtn.length; i++) {
        navScrollBtn[i].addEventListener('click', () => {
          const coverHeight = sectionCover[i].offsetTop - 125;
          window.scroll({
            top: coverHeight,
            behavior: "smooth",
          });
        });
      }
    } else {
      for (let i = 0; i < navScrollBtn.length; i++) {
        navScrollBtn[i].addEventListener('click', () => {
          const coverHeight = sectionCover[i].offsetTop - 87;
          window.scroll({
            top: coverHeight,
            behavior: "smooth",
          });
        });
      }
    }
  });
}
winResposive();


//gnb slide
const elem = document.getElementById("gnb");
function slide() {
  elem.classList.toggle('open');
}

// header #contact shotcut
const contactshot = document.querySelector('.contactshot');
contactshot.addEventListener('click', () => {
  scrollIntoViews('#contact');
});

// arrow__up Topbutton
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});
arrowUp.addEventListener('click', () => {
  scrollIntoViews('#home');
});

// work__bowl
const workBtn = document.querySelector('.work__button');
const bowlbox = document.querySelector('.bowl');
const bowlcon = document.querySelectorAll('.bowl__item');
workBtn.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter;
  if (filter == null) {
    return;
  }
  // btn active,select
  const activeBtn = document.querySelector('.work__btns.active');
  activeBtn.classList.remove('active');
  e.target.classList.add('active');
  // bowl__item animation
  bowlbox.classList.add('ani-out');
  setTimeout(() => {
    bowlcon.forEach((bowl__item) => {
      if (filter === 'all' || filter === bowl__item.dataset.type) {
        bowl__item.classList.remove('show');
      } else {
        bowl__item.classList.add('show');
      }
    });
    bowlbox.classList.remove('ani-out');
  }, 400);
});

// work__name
const workName = document.querySelectorAll('.work__btns');
workName.forEach((workNum) => {
  workNum.addEventListener('click', (e) => {
    const Num = e.target.dataset.filter;
    if (Num == null) {
      return;
    }
    const workNum = document.querySelectorAll('.work__name');
    workNum.forEach((work__name) => {
      if (Num === work__name.dataset.type) {
        work__name.classList.add('select');
      } else {
        work__name.classList.remove('select');
      }
    });
    
  });
});

// work__popup toggle
const toggleBtn = document.querySelectorAll('.toggle--btn');
const toggleClose = document.querySelector('.fa-xmark');
const toggleBg = document.querySelector('.toggle--bg');

toggleBtn.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault()
    const triggerData = trigger.dataset.trigger
    const triggerSelect = document.querySelector(`[data-name="${triggerData}"]`);
    const triggerBody = document.querySelector('.work__popup');
    const windowscrollLock = document.getElementById('body');
    
    triggerSelect.classList.add('is--visible');
    triggerBody.classList.add('is--visible');
    toggleBg.classList.add('is-blacked-out');
    windowscrollLock.style.overflow = 'hidden'

    // close button
    triggerSelect.querySelector('.fa-xmark').addEventListener('click', () => {
      popupvisible();
    });

    // background
    toggleBg.addEventListener('click', () => {
      popupvisible();
    });

    // esc popup close
    window.addEventListener('keydown', function (e) {
      if (e.key === "Escape") {
        popupvisible();
      }
    });

    // popup close move utility function
    function popupvisible(){
      triggerSelect.classList.remove('is--visible');
      toggleBg.classList.remove('is-blacked-out');
      triggerBody.classList.remove('is--visible');
      windowscrollLock.style.overflow = 'auto'
    }
  });
});

//selector scrollIntoView utility function
function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ 
    behavior: "smooth",
  });
}




