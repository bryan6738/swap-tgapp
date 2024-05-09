import React from 'react'
import { FaBitcoin } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import s41 from '../assets/s41.svg'
import s42 from '../assets/s42.svg'
import a43 from '../assets/a43.svg'
import s44 from '../assets/s44.svg'
import { MdInfoOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";
const Deposit = () => {
  return (
    <>
    <div className='bg-[#141A2E] mx-4 rounded-t-2xl pb-5 ' >
      <div className='text-center pt-5 ' > <p className='text-white font-[700] ' >  Awaiting your  deposit  </p> </div>
      <div className='flex justify-center mt-3 gap-x-2 ' >
        <div className='text-yellow-500 mt-1 text-lg ' ><FaBitcoin size={28} /></div>
        <div> <p className='text-[16px] font-[600] text-white text-lg mt-1 ' >   0.1 BTC</p></div>
      </div>
      <div className='text-center mt-3 ' >  <p className='text-white text-sm ' >Deposite address: </p>  </div>
      <div className='bg-[#0F75FC] mx-5 py-1  mb-3 rounded-md justify-around  mt-5 flex ' >
        <div className='text-white mt-1 '><CiShare1 /></div>
      <div><p className='text-white px-1 text-xs ' >bc1qauk7s47jr0ua   9vp92e5zftgg0ndvd <br />45qj  d2dyq</p></div>
      <div className='text-white  mr-1 mt-1  ' ><IoCopyOutline /></div>
       </div>
    </div>
    <div className='bg-white mx-5 pb-11 ' >
    <div className='flex justify-between mx-3 my-3  ' >
      <div className='flex gap-x-2 ' >
   <div  className='bg-black h-fit p-1 mt-1 rounded-full  '><img src={s44} alt=""  />
   </div> <div className='text-xs  mt-1' > Status: <br /> sending deposit </div>
   </div>
   <div className='flex gap-x-1 ' >
   <div className='bg-gray-300 h-fit p-2 rounded-full ' > <img src={s42} alt="" /> </div>
   <div className='bg-gray-300 h-fit p-2 rounded-full ' > <img src={s41} alt="" /> </div>
   <div className='bg-gray-300 h-fit p-2 rounded-full ' > <img src={a43} alt="" /> </div>
   </div>
    </div>
 <div className='bg-[#F2F7FE] flex gap-x-2 px-3 py-3 rounded-r-xl  border-l-4 border-gray-600 ' >
  <div className='text-gray-400 mt-1  ' > <MdInfoOutline size={20} /> </div>
  <div><p className='text-[#859AB5] text-xs font-medium leading-tight ' > If you sent the coins and the status did not change immediately, do not worry. Our system needs a few minutes to detect the transaction. </p></div>
  <div className='text-gray-600 mt-1 ' ><IoClose size={20} /></div>
 </div>
    </div>
    </>
  )
}
export default Deposit



















