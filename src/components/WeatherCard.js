import React from "react";

function WeatherCard({ weather }) {
  const { name, main, weather: details, wind } = weather;
  const icon = details[0]?.icon || "01d";
  const description = details[0]?.description || "Clear";

  return (
    <div className="weather-card visible">
      <div className="city-name">{name}</div>
      <div className="weather-main">
        <div className="weather-icon">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt={description}
          />
        </div>
        <div className="weather-temp">
          <div className="temp">{Math.round(main.temp)}°</div>
          <div className="feels-like">Feels like {Math.round(main.feels_like)}°</div>
        </div>
      </div>
      <div className="weather-desc">{description}</div>
      <div className="weather-details">
        <div className="detail-item">
          <span className="label">Humidity</span>
          <span className="value">{main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Wind</span>
          <span className="value">{Math.round(wind.speed * 3.6)} km/h</span>
        </div>
        <div className="detail-item">
          <span className="label">Pressure</span>
          <span className="value">{main.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="label">Feels Like</span>
          <span className="value">{Math.round(main.feels_like)}°</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;