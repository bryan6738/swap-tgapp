import React, { useState, useEffect } from 'react';

const RotatingBox = () => {
  const infoItems = [
    "Swap effortlessly, no sign-up required!",
    "Lightning-fast transactions every time",
    "Simple interface, seamless experience",
    "Instant swaps with zero complications",
    "Great support team, always ready to help",
    "Easy to use, perfect for beginners",
    "Secure trading with just a few clicks",
    "No limits, no sign-ups, just pure trading",
    "Fast and hassle-free, as it should be",
    "Support that truly cares about your experience"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % infoItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#7ECEE8' }} className="text-white p-4 rounded-2xl shadow-md flex items-center justify-center h-16">
      <p className="text-lg font-montserrat text-center">
        &quot;{infoItems[currentIndex]}&quot;
      </p>
    </div>
  );
};

export default RotatingBox;
