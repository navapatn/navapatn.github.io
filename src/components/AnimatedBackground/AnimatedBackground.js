import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {[...Array(15)].map((_, index) => (
        <div key={index} className="bubble"></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;