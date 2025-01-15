import React from 'react';

function WeatherDetails({ weatherData }) {
  const { main, wind, sys } = weatherData;

  return (
    <div style={detailsStyle}>
      <p>Pressure: {main.pressure} hPa</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  );
}

const detailsStyle = {
  textAlign: 'center',
  marginTop: '20px',
  fontSize: '1.1rem',
};

export default WeatherDetails;
