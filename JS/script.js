function onWindowload() {
  let x = document.getElementById('header-image').style.height;
  document.getElementById('header').style.height = x;
}

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

function pretty() {
  let x = document.getElementById('center-company-name').style.fontFamily = "Charm";
}

function unpretty() {
  let x = document.getElementById('center-company-name').style.fontFamily = "open Sans";
}

function move() {
  let x = document.getElementById('mover');
  if (x.style.cssFloat === "left") {
    x.style.cssFloat = "right";
  } else {
    x.style.cssFloat = "left";
  }
}

function pleaseWork() {
  let x = document.getElementsByClassName("changer");
  for (var value of x) {
    fadeOut(value);
  }
  var fuckle = setInterval(changer(x),0);
  for (var value of x) {
    fadeIn(value);
  }
}
//**************************************************************
//https://stackoverflow.com/questions/5187968/how-should-i-call-3-functions-in-order-to-execute-them-one-after-the-other *****
//**************************************************************
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
  }, 100);
}

function fadeOut(img) {
  var dec = 1;
  var inter = setInterval(function() {
    if (dec <= 0.1) {
      clearInterval(inter);
    }
    img.style.opacity = dec;
    dec -= 0.1;
  }, 100);
}
