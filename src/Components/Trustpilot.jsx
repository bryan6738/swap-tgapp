import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import star from '../assets/star.svg'
import trust from '../assets/Trust.svg'
const Trustpilot = () => {
  return (
    <>
     <div className='bg-[#062763] pb-11 ' >
        <div className='text-center pt-11 ' >  <p className=' text-white text-[24px] font-weight[400]   ' >Excellent rating based</p> </div>
        <div className='text-center' >  <p className='text-[24px] font-weight[400] text-white  ' >on our customer</p> </div>
        <div className='text-center' ><p className='text-[24px] font-weight[400] text-white  ' > reviews </p></div>
      
      <div className='justify-center flex my-6 ' > <a href="" className='text-blue-700 hover:text-blue-900 text-sm ' >  Read more on Trustpilot  </a> <p className='text-blue-800 ml-2 mt-[4px] ' ><FaLongArrowAltRight /></p>   </div>
{/* square */}
 <div className='mx-5 bg-white rounded-2xl ' >
    <div className='text-center  ' > <p className='text-lg font-semibold pt-9 ' > Excellent </p> </div>
   {/* felx star */}
    <div className='mx-20 my-3 flex justify-between ' >
         <div> <img src={star} alt="" /> </div>  
         <div> <img src={star} alt="" /> </div>
         <div> <img src={star} alt="" /> </div>
         <div> <img src={star} alt="" /> </div>
         <div> <img src={star} alt="" /> </div>
         
         
         </div>
         {/* flex end */}
   <div className='text-center mb-2 ' > <p> Based on <span className='text-blue-600 font-semibold underline ' >1500+reviews</span>  </p> </div>
   
  <div className='flex justify-center pb-9 ' > <img src={trust} alt="" /> </div>

    </div> 
 
        </div> 
    </>
  )
}

export default Trustpilot
