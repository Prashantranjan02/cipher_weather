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

function getCity(event) {
  event.preventDefault();
  let changeCity = document.querySelector("#place");
  displayCity(changeCity.value);
}

function displayCity(city) {
  let apiKey = "2fa9ddec71ce08d23a59a79b1d873ee1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getTemp);
}

let city = document.querySelector("#form");
city.addEventListener("submit", getCity);

function getTemp(response) {
  console.log(response.data);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${Math.round(response.data.main.temp)}&degC`;
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#country").innerHTML = response.data.sys.country;
  document.querySelector("#high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#low").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function showCurrentLocation(position) {
  let apiKey = "2fa9ddec71ce08d23a59a79b1d873ee1";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemp);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);
