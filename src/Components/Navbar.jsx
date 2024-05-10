
import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import logo from '../assets/Navbar/logo.svg'
import { FaBars } from "react-icons/fa";
import BlurOverlay from './BlurOverlay';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <BlurOverlay isOpen={isOpen} /> */}
      <div
        className={`fixed z-50 left-0 top-0 w-1/2 h-full overflow-y-auto bg-gray-800 bg-opacity-75 transition duration-200 ease-in-out transform translate-x-full md:translate-x-0 ${isOpen ? 'opacity-100 -translate-x-0' : 'opacity-0'
          }`}
      >
        <div className="flex items-center justify-end px-4 py-6 text-white">
          <button type="button" onClick={toggleSidebar} className="focus:outline-none">
            <AiOutlineCloseCircle size={32} />
          </button>
        </div>
        {/* Add your sidebar content here */}
        <ul className="space-y-7 px-4">
          <li>
            <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
              How it Word
            </a>
          </li>
          <li>
            <div className='flex justify-between ' >
              <div>   <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                Coustomer Benefits
              </a></div> <div className='text-white mt-1 ' ><MdOutlineKeyboardArrowRight size={20} /></div>
            </div>
          </li>
          <li>
            <div className='flex justify-between ' >
              <div>   <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                Analytics
              </a></div> <div className='text-white mt-1 ' ><MdOutlineKeyboardArrowRight size={20} /></div>
            </div>
          </li>
          <li>
            <div className='flex justify-between ' >
              <div>   <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                Currencies
              </a></div> <div className='text-white mt-1 ' ><MdOutlineKeyboardArrowRight size={20} /></div>
            </div>
          </li>
          <hr className='opacity-10' />
          <li>
            <div className='flex justify-between ' >
              <div>   <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                Business
              </a></div> <div className='text-white mt-1 ' ><MdOutlineKeyboardArrowRight size={20} /></div>
            </div>
          </li>
          <li>
            <div className='flex justify-between ' >
              <div>   <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                Exchange History
              </a></div> <div className='text-white mt-1 ' ><MdOutlineKeyboardArrowRight size={20} /></div>
            </div>
          </li>
          {/* Add more sidebar links here */}
        </ul>
        {/* buton */}
        <div className='mt-28' >
          <div className='bg-blue-700  mx-3 h-[56px] flex justify-center  rounded-md ' >  <p className='text-white font-semibold mt-4 ' > Get an account </p>  </div>
          <div className='bg-[#112141]  mx-3 h-[56px] flex justify-center  rounded-md mt-5 ' >  <p className='text-white font-semibold mt-4 ' > Log in </p>  </div>
        </div>
      </div>
      <div className='p-8 border-b-[0.1px] border-white/60 bg-regal-blue'>
        <div className='flex w-full justify-between items-center h-full'>
          <div className='flex'>
            <div ><img src={logo} alt="" /></div>
          </div>
          <div onClick={toggleSidebar} className='cursor-pointer'><FaBars color='white' size={25} /></div>
        </div>
      </div>
    </>
  )
}
export default Navbar