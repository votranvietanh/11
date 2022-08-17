
// DEVICE CONTROL 
document.getElementById('btn_on').addEventListener('click', ()=>{
  document.getElementById("led1").src="./img/led_on.png";
  firebase.database().ref().update({"data": "1"});
})

document.getElementById('btn_off').addEventListener('click', ()=>{
  document.getElementById("led1").src ="./img/led_off.png";
  firebase.database().ref().update({"data": "0"});
})
//


document.getElementById('btn_on2').addEventListener('click', ()=>{
  document.getElementById("led2").src="./img/led_on.png";
  firebase.database().ref().update({"data2": "1"});
})

document.getElementById('btn_off2').addEventListener('click', ()=>{
  document.getElementById("led2").src ="./img/led_off.png";
  firebase.database().ref().update({"data2": "0"});
})

document.getElementById('btn_on3').addEventListener('click', ()=>{
  document.getElementById("led3").src="./img/led_on.png";
  firebase.database().ref().update({"data3": "1"});
})


document.getElementById('btn_off3').addEventListener('click', ()=>{
  document.getElementById("led3").src ="./img/led_off.png";
  firebase.database().ref().update({"data3": "0"});
})
//


document.getElementById('btn_on4').addEventListener('click', ()=>{
  document.getElementById("led4").src="./img/led_on.png";
  firebase.database().ref().update({"data4": "1"});
})

document.getElementById('btn_off4').addEventListener('click', ()=>{
  document.getElementById("led4").src ="./img/led_off.png";
  firebase.database().ref().update({"data4": "0"});
})

