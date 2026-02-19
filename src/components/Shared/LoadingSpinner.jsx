import React from 'react';

const LoadingSpinner = ({ fullScreen = false }) => {
  const spinner = (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <div style={{
        width: '2.5rem',
        height: '2.5rem',
        border: '3px solid #e5e7eb',
        borderTopColor: '#4f46e5',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  if (fullScreen) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;