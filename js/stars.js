const elements = Array.from(document.getElementsByClassName("star"));

function randomNumber() {
  return Math.floor(Math.random() * elements.length);
}

var viewportWidth = (function () {
  var width = window.innerWidth || document.documentElement.clientWidth;
  // Add event listener for viewport width change
  window.addEventListener('resize', function () {
    width = window.innerWidth || document.documentElement.clientWidth;
  });
  return width;
})();

function applyFunction() {
  const randomIndex = randomNumber();
  if (elements[randomIndex]) {
    elements[randomIndex].style.opacity = "40%";
    if(viewportWidth > 430){
      elements[randomIndex].style.width = "15px";
    }else{
      elements[randomIndex].style.width = "8px";
    }
  }
}

function rmFunction() {
  const randomIndex = randomNumber();
  if (elements[randomIndex]) {
    elements[randomIndex].style.opacity = "20%";
    if(viewportWidth > 430){
      elements[randomIndex].style.width = "10px";
    }else{
      elements[randomIndex].style.width = "5px";
    }
  }
}


setInterval(applyFunction, 10);

setInterval(rmFunction, 60);

