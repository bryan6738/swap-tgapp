import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const RotatingBox = () => {
  const { t } = useTranslation();

  const infoItems = [
    t("Swap effortlessly, no sign-up required!"),
    t("Lightning-fast transactions every time"),
    t("Simple interface, seamless experience"),
    t("Instant swaps with zero complications"),
    t("Great support team, always ready to help"),
    t("Easy to use, perfect for beginners"),
    t("Secure trading with just a few clicks"),
    t("No limits, no sign-ups, just pure trading"),
    t("Fast and hassle-free, as it should be"),
    t("Support that truly cares about your experience")
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
