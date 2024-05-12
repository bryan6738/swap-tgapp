import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import MainForm from './MainForm';

const Exchanger = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  
  const roundedTrClass = ' bg-[#E0E9F1] hover:bg-blue-100';
  const roundedBlClass = 'rounded-bl-[45px]';
  const roundedBrClass = 'rounded-br-[45px]';

  return (
    <div className='p-1'>
      <div className='bg-white rounded-3xl drop-shadow-xl '>
        <div className='w-full flex cursor-pointer'>
          <div className={`w-1/2 ${!isActive ? `${roundedTrClass} ${roundedBrClass}` : ''} 
            text-[14px] font-semibold rounded-tl-3xl p-3 text-black/50 flex justify-center items-center`}
            onClick={handleClick}
          >
            <h1>Crypto Exchange</h1>
          </div>
          <div className={`w-1/2  p-3 rounded-tr-3xl text-[14px]  text-black/50 font-semibold  flex justify-center items-center  
            ${isActive ? `${roundedTrClass} ${roundedBlClass}` : ''}`}
            onClick={handleClick}>
            <span className="cursor-pointer">Buy/Sell Crypto</span>
          </div>
        </div>

        <div className='p-4 flex flex-col'>
          <MainForm />
          <Link to={'/swap-tgapp/exchange'}
            className='bg-[#0F75FC] hover:bg-[#0F75FC]/60 cursor-pointer rounded-xl h-12 mt-4 w-full  flex justify-center'>
            <button className='p-1 text-center flex justify-center items-center  text-white text-[18px] font-[500] font-sans '>Exchange</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Exchanger