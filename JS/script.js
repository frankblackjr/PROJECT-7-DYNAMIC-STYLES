function onWindowload() {
  let x = document.getElementById('header-image').style.height;
  document.getElementById('header').style.height = x;
}

function changePara() {
  let x = document.getElementsByTagName('P');
  for (var i = 0; i < x.length; i++) {
    x[i].style.fontFamily = "lato";
  }
}

function changeBack() {
  let x = document.getElementsByTagName('P');
  for (var i = 0; i < x.length; i++) {
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
  if (x.style.cssFloat = "left") {
    x.style.cssFloat = "right";
  }

  else if (x.style.cssFloat = "right")  {
    x.style.cssFloat = "left";
  }

  else {
    alert("error");
  }

}
