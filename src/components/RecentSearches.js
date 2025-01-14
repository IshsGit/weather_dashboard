import React from 'react';

function RecentSearches({ searches, onSelect }) {
  return (
    <div>
      <h3>Recent Searches</h3>
      <ul>
        {searches.map((city, index) => (
          <li key={index} onClick={() => onSelect(city)} style={{ cursor: 'pointer' }}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentSearches;
