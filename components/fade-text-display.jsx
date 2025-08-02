import React, { useState, useEffect } from 'react';

const FadeTextDisplay = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(nextIndex);
        setCurrentText(texts[nextIndex]);
        setIsVisible(true); 
      }, 1000);

    },2000);

    return () => clearInterval(interval);
  },[currentIndex, texts]);

  return (
    <span
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-200 bg-clip-text text-transparent"
      style={{
        opacity: isVisible ? 1 : 0 ,
        transition: "opacity 1s ease-in-out",
      }}
    >
      {currentText}
    </span>
  );
};

export default FadeTextDisplay;