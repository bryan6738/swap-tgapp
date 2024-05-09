import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import logo2 from '../assets/logo2.svg'
import { FaBars } from "react-icons/fa";
import Footer from '../Components/Footer';
// import logo from '../assets/home/Exchanger/btc.svg'
// import etc from '../assets/home/Exchanger/eth.svg'
// import load from '../assets/home/Exchanger/loadarrow.svg'
// import {Link} from 'react-router-dom'
// import usd from '../assets/home/Exchanger/usd.svg'
// import { IoIosArrowDown } from "react-icons/io";
// import { FaUnlockAlt } from "react-icons/fa";
import Faqs3 from '../Components/Faqs3';
import Cards2 from '../Components/Cards2';
import Deposit from '../Components/Deposit';
import Exchange_id from '../Components/Exchange_id';
import { FaEthereum } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiShare1 } from "react-icons/ci";
const Screen3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
 <>
 {/* Navbar */}
 <div>
<div
        className={`fixed z-50 right-60  top-0 w-[65%] h-full overflow-y-auto bg-[#010C22] bg-opacity-97 transition duration-200 ease-in-out transform translate-x-full md:translate-x-0 ${
          isOpen ? 'opacity-100  -translate-x-0' : 'opacity-0'
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
<hr  className='opacity-10' />
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
  <div className='p-4 border-b-[0.1px] border-white/60 '>
<div className='flex w-full justify-between items-center h-full'>
<div className='flex'>
    <div ><img src={logo2} alt="" /></div>
</div>
<div       onClick={toggleSidebar} className='cursor-pointer'><FaBars color='black' size={25} /></div>
</div>
  </div>
</div>
<div className='' >
<Exchange_id />
<Deposit />
<div className='mx-3' ><Cards2 /></div>
<div className='p-5   bg-white'>
<div className='flex drop-shadow-lg  rounded-xl flex-col  bg-white '>
  <div><h1 className='font-semibold bg-white drop-shadow-2xl  rounded-t-xl  p-2'>Operation details</h1></div>
  <div className='p-3'>
    <p className='text-xs font-[500] text-black/60'>You get:</p>
    <div className='flex items-center'>
      <h2 className='font-semibold text-lg flex '>
      <FaEthereum size={25} /> ≈2.03454361 ETH</h2>
    </div>
    <div className='py-2'><p className='text-xs font-[500] text-black/60'>Recipient address:</p></div>
    <div className='flex justify-between bg-gray-100 rounded-lg px-3 '> 
    <div><p className='text-xs  rounded-xl py-4 font-sans  '>p0xcA0B09c358B046E0bE015fdscc43xf  </p></div>

    <div className='mt-4' ><CiShare1 /></div>
     </div>
  </div>
</div>
</div>
<Faqs3 />
</div>
{/* footer */}
<Footer/>
 </>
  )
}
export default Screen3