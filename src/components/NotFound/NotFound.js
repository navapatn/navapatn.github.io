import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="home-link">Go Home</a>
    </div>
  );
};

export default NotFound;