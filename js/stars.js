const elements = Array.from(document.getElementsByClassName("star"));

console.log(elements)

function randomNumber() {
  return Math.floor(Math.random() * elements.length);
}

console.log(randomNumber())


function applyFunction() {
  const randomIndex = randomNumber();
  if (elements[randomIndex]) {
    elements[randomIndex].style.opacity = "40%";
    elements[randomIndex].style.width = "15px";
  }
}

function rmFunction() {
  const randomIndex = randomNumber();
  if (elements[randomIndex]) {
    elements[randomIndex].style.opacity = "20%";
    elements[randomIndex].style.width = "10px";
  }
}


setInterval(applyFunction, 10);

setInterval(rmFunction, 60);