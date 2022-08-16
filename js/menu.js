// CONTROL MENU 
function openMenu() {
  document.getElementById('menu1').style.display = 'block';
  document.getElementById('open').style.display = 'none';
  document.getElementById('close').style.display = 'block';
  document.querySelector('.bar').style = `margin-top:245px`;
}

function closeMenu() {
  document.getElementById('menu1').style.display = 'none';
  document.getElementById('open').style.display = 'block ';
  document.getElementById('close').style.display = 'none';
  document.querySelector('.bar').style = `margin-top:0px`;

}


// SLIDE-SHOW 
let theImg = document.getElementsByTagName('img').length;
let index = 0;
function right() {
  if (index < theImg - 1) { //0 1 2
    console.log(index);

    index++;
  } else {
    index = 0;
  }
  document.querySelector('.slides').style = `transform: translateX(-${index * 1000}px)`;
}
function left() {

  if (index === 0) {//0 1 2
    index = (theImg - 1);
  } else {
    index--;
  }
  document.querySelector('.slides').style = `transform: translateX(-${index * 1000}px)`;

}


next.onclick = function () {
  console.log("right")
  right();
  // imgg.style.transform = 'translateX(400px)';
}
prev.onclick = function () {
  console.log("right")
  left();
  // imgg.style.transform = 'translateX(400px)';
}
const timeOut = setInterval(right,3000);