import React from 'react';
import { useTranslation } from 'react-i18next';

const SwapButton = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    const event = new CustomEvent('swapNowClicked');
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
      style={{
        boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
      }}
    >
      { t("Swap Now") }
    </button>
  );
};

export default SwapButton;
