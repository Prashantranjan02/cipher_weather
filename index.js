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

function getInF(event) {
  event.preventDefault();
  let tempinC = 26;
  let tempinF = (tempinC * 9) / 5 + 32;
  console.log("tempinF");
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${tempinF}&degF`;
}

let viewinF = document.querySelector("#f");
viewinF.addEventListener("click", getInF);

function getInC(event) {
  event.preventDefault();
  let tempinF = 78.8;
  let tempinC = ((tempinF - 32) * 5) / 9;
  console.log("tempinC");
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${tempinC}&degC`;
}

let viewinC = document.querySelector("#c");
viewinC.addEventListener("click", getInC);
