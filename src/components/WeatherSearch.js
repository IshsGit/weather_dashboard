import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

function WeatherSearch({ setWeatherData, setRecentSearches, recentSearches }) {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const fetchWeather = async (searchCity) => {
    const apiKey = 'YOUR_API_KEY';
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error('City not found.');
      const data = await response.json();
      setWeatherData(data);
      setError('');
      setRecentSearches([searchCity, ...recentSearches.slice(0, 4)]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) fetchWeather(city);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ErrorMessage message={error} />
    </div>
  );
}

export default WeatherSearch;
