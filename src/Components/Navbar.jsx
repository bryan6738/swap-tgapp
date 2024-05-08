import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import logo from '../assets/Navbar/logo.svg'
import { FaBars } from "react-icons/fa";
import BlurOverlay from './BlurOverlay';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
  <>
{/* <BlurOverlay isOpen={isOpen} /> */}


      <div
        className={`fixed z-50 right-0 top-0 w-1/2 h-full overflow-y-auto bg-gray-800 bg-opacity-75 transition duration-200 ease-in-out transform translate-x-full md:translate-x-0 ${
          isOpen ? 'opacity-100 -translate-x-0' : 'opacity-0'
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








  <div className='p-8 border-b-[0.1px] border-white/60 bg-regal-blue'>
<div className='flex w-full justify-between items-center h-full'>
<div className='flex'>
    <div ><img src={logo} alt="" /></div>
</div>
<div       onClick={toggleSidebar} className='cursor-pointer'><FaBars color='white' size={25} /></div>
</div>
  </div>
  </>
  )
}

export default Navbar