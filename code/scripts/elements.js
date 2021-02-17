export const getWeatherToday = (data) => {
  let html = "";

  html += `
    <h1>${data.temp} &deg;C - ${data.type}</h1>
    <h2>${data.city}</h2>
    <div class="header-info sun-times__wrapper">
        <h3>Sunrise</h3>
        <h3>${data.sunrise}</h3>
        <h3>Sunset</h3>
        <h3>${data.sunset}</h3>
    </div>
    `;

  return html;
};

export const getForecastElement = (data) => {
  let html = "";

  html += `
    <div class="forecast__daily">
        <p class="forecast__daily--items">${data.day}</p>
        <img src="./assets/${data.type.main}-${data.type.icon}.svg" alt="${data.type.description}" class="forecast__daily--items forecast__daily--image"></img>
        <p class="forecast__daily--items">${data.minTemp} &deg; / ${data.maxTemp} &deg; C</p>
    </div>
    `;

  return html;
};
