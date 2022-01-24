let date = new Date();

let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[date.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let todayDate = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();

let timeElement = document.querySelector("#time");
timeElement.innerHTML = `${hours}:${minutes}`;

let dateElement = document.querySelector("#date");
dateElement.innerHTML = `${day},&nbsp; ${todayDate} ${month},&nbsp; ${year}`;
