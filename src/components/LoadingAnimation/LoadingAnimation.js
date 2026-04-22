import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
    return (
        <div className="loading-animation">
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
};

export default LoadingAnimation;