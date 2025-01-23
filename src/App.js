import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherDetails from './components/WeatherDetails';
import RecentSearches from './components/RecentSearches';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';
import './styles.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
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
              <RecentSearches searches={recentSearches} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
