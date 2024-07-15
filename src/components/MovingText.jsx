import React, { useEffect } from 'react';
import './MovingText.css'; // Import your CSS file

const MovingText = () => {
  useEffect(() => {
    const textContainer = document.querySelector('.moving-text-container');
    const textElement = document.querySelector('.moving-text');

    const animationDuration = 20000; // Animation duration in milliseconds (20 seconds)

    const restartAnimation = () => {
      setTimeout(() => {
        textElement.style.animation = 'none';
        void textElement.offsetWidth; // Trigger reflow to restart animation
        textElement.style.animation = `slide ${animationDuration / 1000}s linear infinite`;
      }, animationDuration);
    };

    textElement.addEventListener('animationiteration', restartAnimation);

    return () => {
      textElement.removeEventListener('animationiteration', restartAnimation);
    };
  }, []);

  return (
    <div className="moving-text-container">
      <span className="moving-text">Thank you for visiting our website!feel free to contact us !Happy coding!</span>
    </div>
  );
};

export default MovingText;
