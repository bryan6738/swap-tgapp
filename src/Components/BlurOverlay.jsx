import React from 'react';

const BlurOverlay = ({ isOpen }) => (
  <div
    className={`fixed inset-0  bg-gray-800 bg-opacity-50 transition duration-200 ease-in-out transform ${
      isOpen ? 'opacity-100' : 'opacity-0'
    }`}
  />
);

export default BlurOverlay;