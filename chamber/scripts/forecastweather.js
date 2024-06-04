const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=49.749812&lon=6.637021&appid=979a78909c0d6b4bbfebb4dc1ef4dbd2&units=imperial";

async function getForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(data) {
  // Clear existing forecast list
  forecastList.innerHTML = "";


  const forecastContainer = document.createElement('div');
  forecastContainer.classList.add('forecast-container');

  // Display forecast for the next 3 days (8 forecasts per day)
  for (let i = 0; i < 3; i++) {
    const forecast = data.list[i * 8]; // Get the forecast for the start of each day
    const date = new Date(forecast.dt * 1000); // Convert timestamp to Date object
    const temp = forecast.main.temp;
    const icon = forecast.weather[0].icon;
    const desc = forecast.weather[0].description;

    // Create forecast item element
    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');
    forecastItem.innerHTML = `
      <div class="forecast-date">${date.toDateString()}</div>
      <img src="https://openweathermap.org/img/w/${icon}.png" alt="${desc}" class="forecast-icon">
      <div class="forecast-temp">${temp}&deg;F</div>
    `;

    // Append forecast item to forecast container
    forecastContainer.appendChild(forecastItem);
  }

  // Append forecast container to forecast list
  forecastList.appendChild(forecastContainer);
}


getForecast();