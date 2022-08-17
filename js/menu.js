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
var lastScrollTop = 20;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
     
     document.querySelector('.container-fluid').style  = `
       visibility: hidden;
       opacity: 0;
       transition:  opacity 0.5s linear;
      
      `;
      // downscroll code
    } else {
      // upscroll code
      document.querySelector('.container-fluid').style = `
        visibility: visible;
        opacity: 1;
        transition: opacity 0.5s linear;
      `;
    }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);



// SLIDE-SHOW 
let theImg = document.getElementsByTagName('img').length;
let index = 0;
function right() {
  if (index < theImg - 1) { //0 1 2
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


