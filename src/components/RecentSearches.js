import React from 'react';

function RecentSearches({ searches, onSelect }) {
  return (
    <div style={searchListStyle}>
      <h3>Recent Searches:</h3>
      {searches.length === 0 ? (
        <p>No recent searches</p>
      ) : (
        <ul>
          {searches.map((city, index) => (
            <li key={index} onClick={() => onSelect(city)} style={cityStyle}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const searchListStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

const cityStyle = {
  cursor: 'pointer',
  padding: '5px',
  fontSize: '1rem',
  listStyleType: 'none',
};

export default RecentSearches;
