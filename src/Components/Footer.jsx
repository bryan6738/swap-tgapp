import React from 'react'
import Faqs from './Faqs'
import apple from '../assets/apple.svg'
import play from '../assets/play.svg'
import apk from '../assets/apk.svg'
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiTradingview } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <div className='bg-[#010E27] relative'>
        <div className='py-6 px-2'>
          <div ><p className='text-xs text-white/60'>See our 1,893 reviews on </p></div>
          <div><p className='text-xs text-white/60'>Buy & sell crypto:
          </p></div>
        </div>
        <hr className='border-b border-[0.25px] border-gray-100/20' />
        <div className='flex flex-col gap-y-2 p-6'>
          <div className='w-[90%] cursor-pointer text-white mx-auto rounded-lg bg-[#142444] flex justify-center items-center'><button className='p-2 text-base '> <img src={apple} alt="" /></button></div>
          <div className='w-[90%] cursor-pointer text-white mx-auto rounded-lg bg-[#142444] flex justify-center items-center'><button className='p-2 text-base '><img src={play} alt="" /></button></div>
          <div className='w-[90%] cursor-pointer text-white mx-auto rounded-lg bg-[#142444] flex justify-center items-center'><button className='p-2 text-base '><img src={apk} alt="" /></button></div>

        </div>

        <Faqs />

        <div className='py-3  px-2 bg-[#0B172F]'>
          <div><p className='text-md text-white/50 mb-5 '>© 2018-2024 SimpleSwap</p></div>
          <div className='flex justify-around'>
            <div className='text-white' ><FaYoutube size={22} /></div>
            <div className='text-white' ><FaSquareXTwitter size={22} /></div>
            <div className='text-white' ><BsDiscord size={22} /></div>
            <div className='text-white' ><FaTelegramPlane size={22} /></div>

            <div className='text-white' ><SiTradingview size={22} /></div>
            <div className='text-white' >More</div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Footer