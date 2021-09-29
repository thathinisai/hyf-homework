const userCity = document.getElementById("userCity");
const userButton = document.getElementById("userButton");
const weatherIcon = document.getElementById("weather_icon");
let weatherUrl;

//Check for input city
userButton.addEventListener("click", getCurrentWeatherByCityName);
function getCurrentWeatherByCityName() {
  const cityName = userCity.value;
  const appkey = "3cde58a1dd84fa31e343be2e7ebcfb24";
  if (!cityName) {
    alert("Please enter city");
  } else {
    weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appkey}`;
    getWeather();
  }
}
//getting data and display in browser
function getWeather() {
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      h3.textContent = "";
      if (data.cod === "404") {
        h3.textContent = `Entered '${userCity.value}' ${data.message}`;
      } else {
        city.textContent = data.name;
        const actualTemp = data.main.temp - 273;
        const maxtemp = data.main.temp_max - 273;
        const mintemp = data.main.temp_min - 273;
        temperature.textContent = `Temperature: ${actualTemp.toFixed(0)}°C`;
        maxtemparature.textContent = `Max Temperature: ${maxtemp.toFixed(0)}°C`;
        mintemparature.textContent = `Min Temperature: ${mintemp.toFixed(0)}°C`;
        howcloudy.textContent = `${data.weather[0].description}`;
        wind.textContent = `Wind speed:${data.wind.speed}m/s`;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherIcon.style.height = "70px";
        sunrise.textContent = `Sun Rise : ${new Date(
          data.sys.sunrise * 1000
        ).toLocaleTimeString()}`;
        sunset.textContent = `Sun Set : ${new Date(
          data.sys.sunset * 1000
        ).toLocaleTimeString()}`;
      }
    });
}
