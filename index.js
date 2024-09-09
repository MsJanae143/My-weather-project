function search(event) {
  event.preventDefault();
  let searchOptionsTool = document.querySelector("#search-options");
  let citySearch = document.querySelector("#search-city");

  let city = searchOptionsTool.value;
  let apiKey = "e5d2tce3b535cb49a35594o5660b0fa2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  citySearch.innerHTML = city;
  axios.get(apiUrl).then(currentTemperature);
}

function currentTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#weather-now");
  temperatureElement.innerHTML = temperature;
}

let searchOption = document.querySelector("#search-option");
searchOption.addEventListener("submit", search);

let dateNow = document.querySelector("#current-date");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
let day = currentTime.getDay();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let formattedDay = weekdays[day];
dateNow.innerHTML = `${formattedDay}, ${hours}:${minutes}`;
