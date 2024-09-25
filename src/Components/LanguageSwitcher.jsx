import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className='w-16'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex text-gray-700 items-center"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <div className='flex mt-0.5 justify-center content-center'>
            <FaGlobe className="mr-1" size={44} fill='#ffffff'/>
          </div>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#ffffff"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => changeLanguage('en')}
              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              style={{fontWeight: 600, fontFamily: "monospace"}}
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('ru')}
              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              style={{fontWeight: 600}}
              role="menuitem"
            >
              Русский
            </button>
            <button
              onClick={() => changeLanguage('ch')}
              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              style={{textAlignLast: 'justify', fontWeight: 600}}
              role="menuitem"
            >
              中文
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
