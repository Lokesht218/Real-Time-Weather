const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || "d159555858569fd4d229f3e7775d76ca";

export const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  console.log("Fetching:", url); // 👈 see the full URL in console

  const response = await fetch(url);
  const data = await response.json();

  console.log("API response:", data); // 👈 inspect the response

  if (!response.ok || data.cod !== 200) {
    // If the API returns an error message, throw it
    throw new Error(data.message || "City not found");
  }

  return data;
};