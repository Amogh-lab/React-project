import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(false);

  const apiKey = '91072731db9a387f80223a00c2aa8ae4';

  const fetchWeatherInfo = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (data.cod !== 200) {
        setError(true);
      } else {
        setWeatherData(data);
        setError(false);
        await fetchForecastInfo(city);
      }
    } catch (err) {
      setError(true);
    }
  };

  const fetchForecastInfo = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      const forecasts = data.list.filter((forecast) => forecast.dt_txt.includes('12:00:00'));
      setForecastData(forecasts);
    } catch (err) {
      setError(true);
    }
  };

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchWeatherInfo(city);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && city.trim() !== '') {
      fetchWeatherInfo(city);
    }
  };

  const getDateAndTime = () => {
    const date = new Date();
    const options = {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    };
    return date.toLocaleDateString('en-GB', options);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      month: 'short',
      day: '2-digit',
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="main">
            <Navbar />
            <HeroSection />
      <div className="input-section">
        <input
          type="text"
          placeholder="Search City."
          className="cityInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button id="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {error ? (
        <section className="not-found-container">
          <h1 className="errorText">Page not found</h1>
          <h4 className="errorPara">Something went wrong, please try again later.</h4>
        </section>
      ) : (
        weatherData && (
          <div className="totalInfo">
            <section className="weather-section">
              <div className="locationNameContainer">
                <h4 className="location-name">{weatherData.name}</h4>
              </div>
              <h5 className="dateAndTime">{getDateAndTime()}</h5>
            </section>

            <table>
              <thead>
                <tr>
                  <th>Temperature</th>
                  <th>Weather</th>
                  <th>Humidity</th>
                  <th>Wind Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Math.round(weatherData.main.temp)} °C</td>
                  <td>{weatherData.weather[0].main}</td>
                  <td>{weatherData.main.humidity}%</td>
                  <td>{weatherData.wind.speed} m/s</td>
                </tr>
              </tbody>
            </table>

            <h3>Forecast</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Temperature</th>
                </tr>
              </thead>
              <tbody>
                {forecastData.map((forecast) => (
                  <tr key={forecast.dt}>
                    <td>{formatDate(forecast.dt_txt)}</td>
                    <td>{Math.round(forecast.main.temp)} °C</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
}

export default App;
