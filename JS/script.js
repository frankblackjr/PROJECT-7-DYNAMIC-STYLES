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
    alert("Right");
  } else {
    x.style.cssFloat = "left";
    alert("left");
  }
}
/*
function changer() {
  let x = document.getElementsByClassName("changer");
  for (let i = 0; i < x.length; i++) {
    let temp = x[i].src;
    if (i == 0) {
      x[i].src = `./images/${i+x.length}.jpg`
    }
    else {
      x[i].src = `./images/${i}.jpg`
    }
  }
}
*/
function changer() {
let x = document.getElementsByClassName("changer");
for (let i = 0; i < x.length; i++) {
  let temp = x[i].src;
  if (i < 3) {
    x[i].src = x[i+1].src;
  }
  else {
    x[i].src = x[0].src;
  }
}
}
