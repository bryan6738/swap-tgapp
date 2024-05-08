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








  <div className='p-8 border-b-[0.1px] border-white/60 '>
<div className='flex w-full justify-between items-center h-full'>
<div className='flex'>
    <div ><img src={logo2} alt="" /></div>
</div>
<div       onClick={toggleSidebar} className='cursor-pointer'><FaBars color='black' size={25} /></div>
</div>
  </div>
</div>

<div className='ml-9' > <p className='text-lg font-semibold ' > operation details </p> </div>
<div className='my-5' >  <p className='ml-6 font-[600] ' >You get:</p> </div>
<div className='' >  <p className='ml-11 font-bold text-lg  ' >2.04343232ETH</p> </div>
<Faqs3 />
{/* footer */}
<Footer/>
 </>
  )
}

export default Screen3