import React from 'react';

function NotFound() {
  return (
    <div style={notFoundStyle}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

const notFoundStyle = {
  textAlign: 'center',
  marginTop: '50px',
  fontSize: '1.5rem',
  color: '#555',
};

export default NotFound;
