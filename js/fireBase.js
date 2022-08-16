const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
let day = days[d.getDay()];
var curDay = d.getDay();

// Ngày hiện tại
var curDate = d.getDate();

// Tháng hiện tại
var curMonth = d.getMonth() + 1;

// Năm hiện tại
var curYear = d.getFullYear();

// Gán vào thẻ HTML
document.getElementById('currentTime').innerHTML = "TODAY IS " + day + " - " + curDate + "/" + curMonth + "/" + curYear;





