const gallery = document.getElementById("gallery");
// const footer = document.getElementById("footer")
const mq = window.matchMedia('(min-width: 900px)');
var linkState = false;

function handleMediaQueryChange(e) {
  if (e.matches) {
    // The viewport is at least 900px wide
    window.onmousemove = e => {

        const mouseX = e.clientX, mouseY = e.clientY;
        const xDecimal = mouseX / window.innerWidth, yDecimal = mouseY / window.innerHeight;
        const maxX = gallery.offsetWidth - window.innerWidth, maxY = gallery.offsetHeight - window.innerHeight;
        const panX = maxX * xDecimal * -1, panY = maxY * yDecimal * -1;
        
            gallery.animate({transform: `translate(${panX}px, ${panY}px)`
      }, {
          duration: 4000,
          fill: "forwards",
          easing: "ease"
        })
    }
  } else {
    // The viewport is less than 900px wide
  }
}

// Add an event listener to detect changes in the media query
mq.addListener(handleMediaQueryChange);

// Call the function once to apply the initial style
handleMediaQueryChange(mq);

function footerShow(){

}


if (window.innerWidth >900){
  document.getElementById("footerShow").addEventListener("click", function(event) {
    event.preventDefault(); // prevent default link behavior
    if (linkState === false) {
      var footerShow = document.getElementById("footer").style.opacity = "100%";
      linkState = true;
    } else {
      // execute function 2
      var footerShow = document.getElementById("footer").style.opacity = "0%";
      
      linkState = false;
    }
  });
}

const mediaQuery3 = window.matchMedia('(min-width: 900px)');
const mediaQuery4 = window.matchMedia('(max-width: 900px)');
  function handleMediaQuery1(event) {
    if (event.matches) {
      mobileNavShow();
    var footerShow = document.getElementById("footer").style.opacity = "0%";
  };
};

function handleMediaQuery2(event) {
  if (event.matches) {
    mobileNavHide();
    var footerShow = document.getElementById("footer").style.opacity = "100%";
  };
};

mediaQuery3.addEventListener('change', handleMediaQuery1);
mediaQuery4.addEventListener('change', handleMediaQuery2);
