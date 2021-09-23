const cityElement = document.querySelector(".city");
const iconElement = document.querySelector(".icon");
const tempElement = document.querySelector(".temp");
const tempSpan = document.querySelector(".tempspan");
const descElement = document.querySelector(".description");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherElement = document.querySelector(".weather");
const searchBtnElement = document.querySelector(".search button");
const searchBarElement = document.querySelector(".search-bar");
let weather = {
  apiKey: "98089c814ceb7377bc0bbd0ba68651ec",
  unitSystem: "metric",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${this.unitSystem}&appid=${this.apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found at your location.");
          throw new Error("No weather found at your location.");
        }
        return response.json();
      })
      .then((data) => displayWeather(data));
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

function displayWeather(data) {
  const name = data.name;
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const speed = data.wind.speed;
  cityElement.innerHTML = `Weather in ${name}`;
  iconElement.src =
    `https://openweathermap.org/img/wn/${icon}.png`;
  descElement.innerHTML = `${description}`;
  if (weather.unitSystem == "metric") {
    tempElement.innerHTML = `${Math.floor(temp)} <span class="tempspan">°C</span>`;
  }
  else if (weather.unitSystem == "imperial") {
    tempElement.innerHTML = `${Math.floor(temp)} <span class="tempspan">°F</span>`;
  }

  humidityElement.innerHTML =
    `Humidity: ${humidity}%`;
  if (weather.unitSystem == "metric") {
    windElement.innerHTML = `Wind speed: ${speed} <span>km/h</span>`;
  }
  else if (weather.unitSystem == "imperial") {
    windElement.innerHTML = `Wind speed: ${speed} <span>mph</span>`;
  }

  weatherElement.classList.remove("loading");
  document.body.style.backgroundImage =
    `url('https://source.unsplash.com/1600x900/?${description} weather')`;
  // document.body.style.backgroundImage = url(`../img/${description}.jpg`);
}

searchBtnElement.addEventListener("click", function () {
  weather.search();
});

searchBarElement.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();

  }
});


//Checking Current Location Of The User

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  alert("Browser doesn't Support Geolocation");
}



// SET USER'S POSITION
function setPosition(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
    .then((response) => {
      locationJson = response.json();
      return locationJson;
    })
    .then((locationJson) => detLocation(locationJson));
}

//Determine USER'S LOCATION
function detLocation(locationJson) {
  locationcity = locationJson.locality;
  initialWeatherCall(locationcity);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error) {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}
function initialWeatherCall(locationCity) {
  weather.fetchWeather(locationCity);
}

tempElement.addEventListener("click", function () {
  if (weather.unitSystem === undefined) return;

  if (weather.unitSystem == "metric") {
    weather.unitSystem = "imperial";
    weather.fetchWeather(document.querySelector(".search-bar").value);
  }
  else if (weather.unitSystem == "imperial") {
    weather.unitSystem = "metric"
    weather.fetchWeather(document.querySelector(".search-bar").value);
  }
});




  // // SELECT ELEMENTS
// const iconElement = document.querySelector(".icon");
// const tempElement = document.querySelector(".temp");
// const descElement = document.querySelector(".description");
// const city = document.querySelector(".city");
// const humidity = document.querySelector(".humidity");
// const wind = document.querySelector(".wind");
// const weather = document.querySelector(".weather");
// const searchBtn = document.querySelector(".search button");
// const searchBar = document.querySelector(".search-bar");
// // TEMP IN KELVIN
// const KELVIN = 273;
// // API KEY
// const key = "98089c814ceb7377bc0bbd0ba68651ec";

// weather.fetchWeather("Mumbai");
