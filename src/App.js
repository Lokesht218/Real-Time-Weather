import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./utils/weatherApi";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchWeather = useCallback(async (searchCity) => {
    if (!searchCity) return;
    try {
      const data = await getWeather(searchCity);
      setWeather(data);
      setCity(searchCity);
      setError("");
      setLastUpdated(new Date().toLocaleTimeString());
    } catch {
      setWeather(null);
      setError("City not found");
      setLastUpdated(null);
    }
  }, []);

  useEffect(() => {
    if (!city) return;
    const interval = setInterval(() => fetchWeather(city), 600000);
    return () => clearInterval(interval);
  }, [city, fetchWeather]);

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">
        <span className="weather-emoji">🌤️</span>
        <b>Real-Time Weather</b>
      </h1>
        {lastUpdated && <span className="last-updated">Updated {lastUpdated}</span>}
      </div>
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="error-message visible">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;