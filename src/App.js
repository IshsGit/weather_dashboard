import React, { useState } from 'react';
import Header from './components/Header';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';
import './styles.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div>
      <Header />
      <div className="container">
        <WeatherSearch setWeatherData={setWeatherData} />
        {weatherData && <WeatherDisplay weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default App;
