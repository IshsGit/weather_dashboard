import React from 'react';

function WeatherDetails({ weatherData }) {
  const { main, wind } = weatherData;

  return (
    <div>
      <h3>Additional Details</h3>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} hPa</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDetails;
