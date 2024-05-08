import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleSidebar}
        className="fixed right-0 top-0 px-4 py-2 text-white focus:outline-none md:hidden"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16v12H4zM4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      </button>

      <div
        className={`fixed z-50 right-0 top-0 w-1/2 h-full overflow-y-auto bg-gray-800 bg-opacity-75 transition duration-200 ease-in-out transform translate-x-full md:translate-x-0 ${
          isOpen ? 'opacity-100 translate-x-20' : 'opacity-0'
        }`}
      >
        <div className="flex items-center justify-end px-4 py-6 text-white">
          <button type="button" onClick={toggleSidebar} className="focus:outline-none">
            <AiOutlineCloseCircle size={32} />
          </button>
        </div>
        {/* Add your sidebar content here */}
        <ul className="space-y-2 px-4">
          <li>
            <a href="#" className="text-xl block hover:text-gray-200">
              Link 1
            </a>
          </li>
          {/* Add more sidebar links here */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;