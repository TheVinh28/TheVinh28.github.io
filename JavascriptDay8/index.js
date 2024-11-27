const apiKey = "09a71427c59d38d6a34f89b47d75975c";
const city = "Hanoi";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

async function getWeatherData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    await renderWeather(data);
  } catch (error) {
    console.error("Lỗi không hiển thị", error);
  }
}
getWeatherData(apiUrl);

function renderWeather(data) {
  const weatherContainer = document.getElementById("weatherContainer");
  weatherContainer.innerHTML = "";

  data.list.forEach((forecast) => {
    const dateTime = new Date(forecast.dt * 1000);
    const temperature = forecast.main.temp.toFixed(1);
    const weatherDescription = forecast.weather[0].description;
    const icon = forecast.weather[0].icon;

    const weatherCard = document.createElement("div");
    weatherCard.className = "weather-card";
    weatherCard.innerHTML = `
            <h3>${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}</h3>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="weather-icon" alt="${weatherDescription}" />
            <p>${temperature}°C</p>
            <p>${weatherDescription}</p>
        `;

    weatherContainer.appendChild(weatherCard);
  });
}
