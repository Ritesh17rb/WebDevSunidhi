// src/components/pages/DynamicGradient.jsx
import React, { useEffect, useState } from 'react';
import './DynamicGradient.css';

function DynamicGradient() {
  const [gradientIndex, setGradientIndex] = useState(0);

  const gradients = [
    'linear-gradient(-45deg, #ff9a9e, #fad0c4, #fad0c4)',
    'linear-gradient(-45deg, #a18cd1, #fbc2eb)',
    'linear-gradient(-45deg, #ffecd2, #fcb69f)',
    'linear-gradient(-45deg, #a1c4fd, #c2e9fb)',
    'linear-gradient(-45deg, #d4fc79, #96e6a1)',
    'linear-gradient(-45deg, #84fab0, #8fd3f4)',
    'linear-gradient(-45deg, #fccb90, #d57eeb)',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [gradients.length]);

  return (
    <div
      className="gradient-container"
      style={{ backgroundImage: gradients[gradientIndex] }}
    >
      <h1 className="gradient-title">🌈 First Website</h1>
    </div>
  );
}

export default DynamicGradient;
