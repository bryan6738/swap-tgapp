import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import logo2 from '../assets/logo2.svg'
import { FaBars } from "react-icons/fa";
import Footer from '../Components/Footer';
import logo from '../assets/home/Exchanger/btc.svg'
import etc from '../assets/home/Exchanger/eth.svg'
import load from '../assets/home/Exchanger/loadarrow.svg'
import { Link } from 'react-router-dom'
import usd from '../assets/home/Exchanger/usd.svg'
import { IoIosArrowDown } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";
import Faqs2 from '../Components/Faqs2';
import Options from '../Components/Options';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Screen2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [isActive, setIsActive] = useState(true);
  const [value, setValue] = useState(0.1);
  const [value2, setValue2] = useState('≈2.04459305');
  const [currency, setCurrency] = useState('BTC');
  const [currency2, setCurrency2] = useState('ETH');
  const [src1, setSrc1] = useState(logo);
  const [src2, setSrc2] = useState(etc);
  const roundedTrClass = ' bg-[#E0E9F1] hover:bg-blue-100';
  const roundedBlClass = 'rounded-bl-[45px]';
  const roundedBrClass = 'rounded-br-[45px]';
  const handleClick = () => {
    setIsActive(!isActive);
    if (value === 0.1) {
      setValue(200)
      setValue2('≈0.003')
      setCurrency('USD')
      setCurrency2('BTC')
      setSrc1(usd)
      setSrc2(logo)
    } else {
      setValue(0.1)
      setValue2('≈2.04459305')
      setCurrency('BTC')
      setCurrency2('ETH')
      setSrc1(logo)
      setSrc2(etc)
    }
  };
  return (
    <>
      <>
        <div>
          <div
            className={`fixed z-50 left-0 top-0 w-1/2 h-full overflow-y-auto 
              bg-[#010C22] bg-opacity-97 transition duration-200 ease-in-out transform translate-x-full md:translate-x-0 
              ${isOpen ? 'opacity-100 -translate-x-0' : 'opacity-0'}`}>
            <div className="flex items-center justify-end px-4 py-6 text-white">
              <button type="button" onClick={toggleSidebar} className="focus:outline-none">
                <AiOutlineCloseCircle size={32} />
              </button>
            </div>
            <ul className="space-y-7 px-4">
              <li>
                <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                  How it Word
                </a>
              </li>
              <li>
                <div className='flex justify-between ' >
                  <div>
                    <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                      Coustomer Benefits
                    </a>
                  </div>
                  <div className='text-white mt-1 ' >
                    <MdOutlineKeyboardArrowRight size={20} />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between ' >
                  <div>
                    <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                      Analytics
                    </a>
                  </div>
                  <div className='text-white mt-1 ' >
                    <MdOutlineKeyboardArrowRight size={20} />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between ' >
                  <div>   <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                    Currencies
                  </a></div> <div className='text-white mt-1'>
                    <MdOutlineKeyboardArrowRight size={20} /></div>
                </div>
              </li>
              <hr className='opacity-10' />
              <li>
                <div className='flex justify-between ' >
                  <div>
                    <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                      Business
                    </a>
                  </div>
                  <div className='text-white mt-1 ' >
                    <MdOutlineKeyboardArrowRight size={20} />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between ' >
                  <div>
                    <a href="#" className="text-md text-[#FCFCFC] block font-semibold hover:text-gray-200">
                      Exchange History
                    </a>
                  </div>
                  <div className='text-white mt-1 ' >
                    <MdOutlineKeyboardArrowRight size={20} />
                  </div>
                </div>
              </li>
            </ul>
            <div className='mt-28' >
              <div className='bg-blue-700  mx-3 h-[56px] flex justify-center  rounded-md ' >
                <p className='text-white font-semibold mt-4 ' > Get an account </p>
              </div>
              <div className='bg-[#112141]  mx-3 h-[56px] flex justify-center  rounded-md mt-5 ' >
                <p className='text-white font-semibold mt-4 ' > Log in </p>
              </div>
            </div>
          </div>
          <div className='p-4 border-b-[0.1px] border-white/60 '>
            <div className='flex w-full justify-between items-center h-full'>
              <div className='flex'>
                <div ><img src={logo2} alt="" /></div>
              </div>
              <div onClick={toggleSidebar} className='cursor-pointer'>
                <FaBars color='black' size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#F8F8F8]' >

          <Options />

          <div className='bg-white mx-3 rounded-xl' >
            <div className='flex justify-center items-center'>
              <h1 className='text-black font-semibold text-xl'>Add Exchnage Details</h1>
            </div>
            <div className='p-4 flex flex-col '>
              <div className='flex flex-col h-[33.33%]'>
                <div className='flex'>
                  <div className='w-[80%] mr-[1px] bg-gray-200 flex flex-col justify-center  p-1 font-sans  rounded-l-xl  hover:bg-gray-200'>
                    <h2 className='text-[10px] -mb-1 font-bold text-black/60'>You Send</h2>
                    <div className='cursor-pointer'>
                      <input value={12} className='focus:outline-none bg-gray-200 hover:bg-gray-200 text-black/60  w-full text-[15px] font-bold' type="text" />
                    </div>
                  </div>
                  <div className='w-[20%] hover:bg-gray-300 bg-gray-300 cursor-pointer flex justify-between  items-center p-1 gap-x-2'>
                    <div className='w-1/3'><img className='w-12' src={src1} alt="" /></div>
                    <div className='text-sm w-1/3 leading-tight'>{ }</div>
                    <div className='w-1/3'><IoIosArrowDown size={15} /></div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col  my-1 '>
                <div className='flex'>
                  <div className=' w-[30px] h-[30px] my-auto bg-gray-200 items-center flex flex-col justify-center   font-sans rounded-full    hover:bg-gray-200'>
                    <FaUnlockAlt color='gray' size={15} />
                  </div>
                  <div className=' hover:bg-gray-300  cursor-pointer flex justify-between gap-x-2 items-center p-4'>
                    <h1 className='text-[11px] font-semibold text-black/60'>Floating Rate</h1>
                  </div>
                  <div className='w-[30px] my-auto h-[30px] bg-gray-200 rounded-full flex justify-center items-center ml-auto'>
                    <img className='w-[12px] h-[12px]' src={load} alt="" />
                  </div>
                </div>
              </div>
              <div className='flex flex-col  '>
                <div className='flex'>
                  <div className='w-[80%]   flex flex-col justify-center p-1 font-sans  rounded-l-xl bg-gray-200 hover:bg-gray-200'>
                    <h2 className='text-[10px] ml-2 -mb-1  font-bold text-black/60'>You Get</h2>
                    <div className='cursor-pointer bg-[#ECF1F7] '><input value={value2} placeholder='0.1' className='focus:outline-none bg-gray-200 hover:bg-gray-200 text-black/60  w-full text-[15px] font-bold' type="text" />
                    </div>
                  </div>
                  <div className='w-[20%] hover:bg-gray-300  bg-gray-300 cursor-pointer flex justify-between gap-x-2 items-center p-1'>
                    <div className='w-1/3'><img className='' src={src2} alt="" /></div>
                    <div className='w-1/3 text-sm leading-tight'>{currency2}</div>
                    <div className='w-1/3'>
                      <IoIosArrowDown size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Faqs2 />
        </div>
        <Footer />
      </>
    </>
  )
}
export default Screen2


















