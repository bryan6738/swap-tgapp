import React from 'react'
import { IoMdPlayCircle } from "react-icons/io";
import icon2 from '../assets/patnahi.svg'
import icon1 from '../assets/icon1.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
const How_it_works = () => {
  return (
    <>
     <div className='bg-[#F7F8FA] pb-11 ' >
     <div className='flex justify-center font-[400] text-sm pt-9 text-blue-700 ' > <p> Watch a tutorial  </p> <p className='mt-1' ><IoMdPlayCircle /></p> </div>
     <div className='text-center text-[24px] font-[400] ' > <p> How It Works </p> </div>
     <div className='flex' >
        <div className='bg-[#3993FF] w-14 h-12  flex justify-center rounded-xl p-2 m-3 ' > <img src={icon1} alt="" sizes={10} /> </div>
        <div> <p className='text-[14px] font-[700]  ' > Currency pairChoose a currency pair <br /><span className='text-[14px] font-[500] leading-tight ' >Select currencies you want to swap and click the Exchange button.</span> </p>   </div>
         </div>
         <div className='flex mt-3 ' >
         <div className='bg-[#3993FF] w-14 h-12  flex justify-center rounded-xl p-2 m-3 ' > <img src={icon2} alt="" sizes={10} /> </div>
        <div> <p className='text-[14px] font-[700] ' >Currency pairEnter the recipients address <br /><span className='text-[14px] font-[500] leading-tight ' >The currency you want to receive will be sent to this address after the exchange.</span> </p>   </div>
         </div>
         <div className='flex mt-3 ' >
         <div className='bg-[#3993FF] w-14 h-12  flex justify-center rounded-xl p-2 m-3 ' > <img src={icon3} alt="" sizes={10} /> </div>
        <div> <p className='text-[14px] font-[700] ' >Currency pairSend and receive coins <br /><span className='text-[14px] font-[500] leading-tight ' >To continue, send the indicated amount of coins to the deposit address</span> </p>   </div>
         </div>
         <div className='flex mt-3 ' >
         <div className='bg-[#3993FF] w-14 h-12  flex justify-center rounded-xl p-2 m-3 ' > <img src={icon4} alt="" sizes={10} /> </div>
        <div> <p className='text-[14px] font-[700] ' > Thats all! <br /><span className='text-[14px] font-[500] leading-tight ' >The exchange status “Finished” means that the swap process is over</span> </p>   </div>
         </div>
        </div>
    </>
  )
}
export default How_it_works