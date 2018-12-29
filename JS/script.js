function onWindowload() {
  let x = document.getElementById('header-image').style.height;
  document.getElementById('header').style.height = x;
}

//Console Log function
function logger(words) {
  console.log(words);
}
//paragraph font changing functions
function changePara() {
  let x = document.getElementsByTagName('P');
  for (let i = 0; i < x.length; i++) {
    x[i].style.fontFamily = "lato";
  }
}

function changeBack() {
  let x = document.getElementsByTagName('P');
  for (let i = 0; i < x.length; i++) {
    x[i].style.fontFamily = "open Sans"
  }
}
//Company name font change functions
function pretty() {
  let x = document.getElementById('center-company-name').style.fontFamily = "Charm";
}

function unpretty() {
  let x = document.getElementById('center-company-name').style.fontFamily = "open Sans";
}
//change float position function
function move() {
  let x = document.getElementById('mover');
  if (x.style.cssFloat === "left") {
    x.style.cssFloat = "right";
  } else {
    x.style.cssFloat = "left";
  }
  logger("balls");
}
//Image fade in and out/ change image location functions
function pleaseWork() {
  let x = document.getElementsByClassName("changer");
  for (var value of x) {
    fadeOut(value);
  }
  var pleaseWork = setInterval(changer(x), 0);
  for (var value of x) {
    fadeIn(value);
  }
}

function changer(x) {
  let temp = x[0].src;
  for (let i = 0; i < x.length; i++) {
    if (i < 3) {
      x[i].src = x[i + 1].src;
    } else {
      x[i].src = temp;
    }
  }
}

function fadeIn(img) {
  let dec = 0.1;
  var inter = setInterval(function() {
    if (dec >= 1) {
      clearInterval(inter);
    }
    img.style.opacity = dec;
    dec += 0.1;
  }, 150);
}

function fadeOut(img) {
  var dec = 1;
  var inter = setInterval(function() {
    if (dec <= 0.1) {
      clearInterval(inter);
    }
    img.style.opacity = dec;
    dec -= 0.1;
  }, 0);
}

//Change image ever 5 seconds
var timer = setInterval(pleaseWork, 10000);
