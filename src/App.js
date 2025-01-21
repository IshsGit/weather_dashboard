import React, { useState } from 'react';
import Header from './components/Header';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherDetails from './components/WeatherDetails';
import RecentSearches from './components/RecentSearches';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleRecentSearch = (city) => {
    setWeatherData(null);
    setTimeout(() => {
      const weatherSearchComponent = document.querySelector('form');
      weatherSearchComponent.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 100);
  };

  return (
    <ErrorBoundary>
      <Header />
      <div className="container">
        <WeatherSearch
          setWeatherData={setWeatherData}
          setRecentSearches={setRecentSearches}
          recentSearches={recentSearches}
        />
        {weatherData && (
          <>
            <WeatherDisplay weatherData={weatherData} />
            <WeatherDetails weatherData={weatherData} />
          </>
        )}
        <RecentSearches searches={recentSearches} onSelect={handleRecentSearch} />
      </div>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
