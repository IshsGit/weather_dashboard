import React from 'react';

function LoadingSpinner() {
  return (
    <div style={spinnerStyle}>
      <div className="spinner"></div>
    </div>
  );
}

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
};

export default LoadingSpinner;
