import React, { useState } from "react";
import axios from "axios";

const WeatherInfo = () => {
  const [city, setCity] = useState(""); 
  const [weather, setWeather] = useState(null); 
  const [error, setError] = useState(null); 

  const fetchWeather = async () => {
    if (!city) return; 
    
    const apiKey = "fc2bada216b44709cbf2141fb3f20abc"; 
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data); 
      setError(null); 
    } catch (error) {
      setError("Error fetching weather data. Please try again."); 
      setWeather(null); 
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Check Weather</h3>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update the city state on input change
        />
        <button className="btn btn-info" onClick={fetchWeather}>
          Get Weather
        </button>
      </div>
      {error && <p className="text-danger mt-3">{error}</p>}

      {/* Display weather information if available */}
      {weather && !error && (
        <div className="mt-4">
          <h4>{weather.name}, {weather.sys.country}</h4>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
