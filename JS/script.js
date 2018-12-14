function changePara() {
  let x = document.getElementsByTagName('P');
  for (var i = 0; i < x.length; i++) {
    x[i].style.fontFamily = "lato";
  }
}

function changeBack() {
  let x = document.getElementsByTagName('P');
  for (var i = 0; i < x.length; i++) {
    x[i].style.fontFamily ="open Sans"
  }
}
