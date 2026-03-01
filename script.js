"use strict";
const weatherBlock = document.getElementById("weather");
let city = "Kharkiv"
let openweathermapURL =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${openweathermapAPI}`;

console.log(openweathermapURL);
