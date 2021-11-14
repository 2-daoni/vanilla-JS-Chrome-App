const API_KEY = "da48aa21695ac355608b54ca7435ecbc";


function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const cityInfo = document.querySelector("#weather .city");
      const weatherInfo = document.querySelector("#weather .weather");
      const tempInfo = document.querySelector("#weather .temp");
      const roundTemp = Math.round(data.main.temp);
      
      cityInfo.innerText = data.name;
      weatherInfo.innerText = data.weather[0].main;
      tempInfo.innerText = roundTemp +"°C";
    });
  
}

function onGeoError() {
  alert("당신이 어디있는지 찾을 수 없네요,,");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError)

