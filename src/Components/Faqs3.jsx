import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const summaryStyle = {
  outline: 'none',
  cursor: 'pointer',
  margin: 0,
};

const Faqs3 = () => {
  return (
    <section className="bg-white text-black rounded-xl shadow-md overflow-hidden">
      <div className='text-[18px] font-[600] ml-7 my-2 pt-3'>
        <p>Have A Question?</p>
      </div>
      <div className="container flex flex-col justify-center px-4 mx-auto md:p-8">
        <div className="flex flex-col divide-y divide-gray-700">
          <details className='mx-4'>
            <summary style={summaryStyle} className="py-2 outline-none flex justify-between cursor-pointer">
              <h1 className='w-[90%] text-black font-[400] text-[15px]'>I sent a deposit, what's next?</h1>
              <span><IoIosArrowDown size={25} /></span>
            </summary>
            <div className="pb-4 pt-3">
              Sit back and relax! Our service is now working on exchanging your tokens and sending them to you. 
              There's nothing more you need to do at this point, just let our system handle everything.

              However, we kindly ask that you take a moment to copy your Exchange ID. This ID is important and 
              will help us quickly locate your exchange if there's ever a need to search for it.

              Thank you for trusting us with your transaction!
            </div>
          </details>
          <details className='mx-4'>
            <summary style={summaryStyle} className="py-2 outline-none flex justify-between cursor-pointer">
              <h1 className='w-[100%] text-black font-[400] text-[15px] leading-tight'>
                How long does it take to exchange the coins?
              </h1>
              <span><IoIosArrowDown size={25} /></span>
            </summary>
            <div className="pb-4">
              <p className='mb-3'>
                The time it takes to complete your exchange depends largely on the token and blockchains involved. 
                Some blockchains are faster than others, which can affect the overall swap time.
                <br /><br />
                To help you stay informed, we've built an Exchange Tracker. After sending your tokens, you can 
                use this tool to follow the swap process in real-time and stay up to date with the progress. 
                This way, you'll always know what's happening with your exchange!
              </p>
            </div>
          </details>
          <details className='mx-4'>
            <summary style={summaryStyle} className="py-2 outline-none flex justify-between cursor-pointer">
              <h1 className='w-[85%] text-black font-[400] text-[15px]'>What happens if I close the exchange page?</h1>
              <span><IoIosArrowDown size={25} /></span>
            </summary>
            <div className="pb-4">
              <p>
                Make sure to copy the exchange ID in case we need to look up your exchange. 
                If you need assistance, reach out to our support team at support@teleswap.io
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default Faqs3;
