import React from 'react'
import fiat from '../assets/fiat_card.svg'
import { TiTick } from "react-icons/ti";
const Buy_Crypto = () => {
  return (
    <>
      <div  className=' mt-14 pb-5 bg-[#062763]  border rounded-2xl ' >
        <div className='flex justify-center align-middle -mt-7 ' > <img src={fiat} alt="" width={200}  /> </div>


        <div className='text-center mt-7 ' > <p className='text-white text-2xl ' > Buy crypto with fiat </p> </div>
        {/* MAin div for the Points */}
        <div className='ml-3 mt-5 ' >
         
        <div className='flex'  ><div  className='bg-[#104ade] rounded-xl  ' ><TiTick color='white' size={22}  /></div> <div className='ml-2 font-bold  ' > <p className='text-white text-sm  ' >Simple </p> </div> </div>
         <div className='ml-8   ' ><p className='text-white text-[14px] font-[500] ' >Buy 30+ coins using your debit/credit card</p></div>


         <div className='flex mt-4 '  ><div  className='bg-[#104ade] rounded-xl  ' ><TiTick color='white' size={22}  /></div> <div className='ml-2 font-bold  ' > <p className='text-white text-sm ' >Profitable </p> </div> </div>
         <div className='ml-8   ' ><p className='text-white text-[14px] font-[500]  ' >Benefit from the market-leading rate</p></div>   

         <div className='flex mt-4 '  ><div  className='bg-[#104ade] rounded-xl  ' ><TiTick color='white' size={22}  /></div> <div className='ml-2 font-bold  ' > <p className='text-white text-sm ' >Safe </p> </div> </div>
         <div className='ml-8   ' ><p className='text-white text-[14px] font-[500] ' >Receive crypto directly on your wallet</p></div> 
        </div>
{/* button */}

<div className='mx-3 bg-[#0f75fc] text-center rounded-md mt-5 ' > <button className='text-white h-[56px] text-lg font-[500] text-[15px] ' > Create fiat exchange </button> </div>

      </div>
    </>
  )
}

export default Buy_Crypto
