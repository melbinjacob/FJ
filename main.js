const mobileNav = document.getElementById("mobilenav");
const headerLogo = document.getElementById("headerlogo");
const container = document.getElementById("nav-containerid");
const closeIcon = document.getElementById("closex");
const hamBurger = document.getElementById("hicon");

function mobileNavShow(){
  container.style.transform = ("translateX(0%)");
  headerLogo.style.height = "0px";
  headerLogo.style.opacity = "0%";
  headerLogo.style.marginBottom = "20px"
  hamBurger.style.height = "0px";
  hamBurger.style.opacity = "0%";
  closeIcon.style.height = "45px";
  closeIcon.style.opacity = "100%";
};

function mobileNavHide(){
  container.style.transform = ("translateX(-100%)");
  headerLogo.style.height = "40px";
  headerLogo.style.opacity = "100%";
  headerLogo.style.marginBottom = "0px"
  hamBurger.style.height = "45px";
  hamBurger.style.opacity = "100%";
  closeIcon.style.height = "0px";
  closeIcon.style.opacity = "0%";
};

const mediaQuery1 = window.matchMedia('(min-width: 767px)');
const mediaQuery2 = window.matchMedia('(max-width: 767px)');
  function handleMediaQuery1(event) {
    if (event.matches) {
      mobileNavShow();
  };
};

function handleMediaQuery2(event) {
  if (event.matches) {
    mobileNavHide();
  };
};

mediaQuery1.addEventListener('change', handleMediaQuery1);
mediaQuery2.addEventListener('change', handleMediaQuery2);
function closeForFooter(){
  if (window.innerWidth < 767){
    container.style.transform = ("translateX(-100%)");
    headerLogo.style.height = "40px";
    headerLogo.style.opacity = "100%";
    headerLogo.style.marginBottom = "0px"
    hamBurger.style.height = "45px";
    hamBurger.style.opacity = "100%";
    closeIcon.style.height = "0px";
    closeIcon.style.opacity = "0%";
  };
};