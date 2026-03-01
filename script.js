"use strict";
const weatherBlock = document.getElementById("weather");
const errorBlock = document.getElementById("error");
let city = "Kharkiv";
let openweathermapURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${openweathermapAPI}`;

console.log(openweathermapURL);

async function loadWeather() {
  weatherBlock.innerHTML = `<div class="weather_load"><img src="./images/w.png" alt="" class="loader"></div>`;
  const response = await fetch(openweathermapURL, { method: "GET" });
  const responseResult = await response.json();
  if (response.ok) {
    getWeather(responseResult);
  } else {
    errorBlock.innerHTML = responseResult.message;
  }
}

function getWeather(data) {
  console.log(data);
  const city = data.name;
  const temp = data.main.temp;
  const icon = data.weather[0].icon
  const template = `<div id="city">
        <h2>${city}</h2>
    </div>
    <div id="temp">${temp}</div>
    <div id="icon"><img src="https://api.openweathermap.org/img/w/${icon}.png" alt=""></div>`;
  weatherBlock.innerHTML = template;
}

loadWeather();
