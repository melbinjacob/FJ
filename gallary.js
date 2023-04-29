const gallery = document.getElementById("gallery");



const mq = window.matchMedia('(min-width: 900px)');

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
    console.log(">900")
    
  } else {
    // The viewport is less than 900px wide
    console.log("<900")
  }
}

// Add an event listener to detect changes in the media query
mq.addListener(handleMediaQueryChange);

// Call the function once to apply the initial style
handleMediaQueryChange(mq);