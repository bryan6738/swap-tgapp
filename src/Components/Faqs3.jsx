import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const summaryStyle = {
    outline: 'none',
    cursor: 'pointer',
    margin: 0,
    
  };

const Faqs3 = () => {
  return (
    
    <section class=" bg-white text-black  ">
      
        <div className='text-[14px] font-[600] ml-5 my-5 ' >  <p> Have Any Question </p> </div>
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <div class="flex flex-col divide-y  divide-gray-700">
      <details className='mx-4' >
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[90%] text-black font-[400] text-[15px] '>I sent  a deposit, whats next?</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4 pt-11 ">
        You can find the cryptocurrency address in the crypto wallet that you use to keep your coins and tokens. It contains letters and numbers and looks like an alphanumeric string. Cryptocurrencies are based on different blockchains and have their own unique address formats. It’s necessary to provide us with the crypto wallet address, and we’ll send your coins there.
        </div>
      </details>
      <details  className='mx-4' >
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[100%] text-black font-[400] text-[15px] leading-tight '>How long does it takes to exchange the coins?</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4">
        <p className='mb-3' >There may be various reasons, including:  </p> 
        <ul className='text-sm ml-[15%] cursor-pointer'>
        
<li><span className='font-bold text-black/80 ' >The spelling of the address.</span> Make sure that the address contains all the necessary auxiliary characters, suffixes, and prefixes (dots, dashes).</li>
<li><span className='font-bold text-black/80 ' >Extra spaces.</span> Make sure all address characters have been copied. Сheck there are no spaces at the beginning and end of the address.</li>
<li><span className='font-bold text-black/80 ' >Incorrect blockchain.</span> Make sure that the network of the selected coin matches the network your address belongs to.</li>


<li><span className='font-bold text-black/80 ' >Some other issues.</span> Feel free to contact our support team which is available 24/7 via email <a href="" className='text-blue-700' > (support@simpleswap.io) </a> or live chat.</li>
 </ul>
        </div>
      </details>
      <details  className='mx-4' >
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[85%] text-black font-[400] text-[15px]'>What happens if I close the exchange pages ?</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4">
       <p>Log in to your account, swap crypto, and receive cashback for every exchange. If you still don’t have a customer account on SimpleSwap, you are welcome to <a href="" className='text-blue-700 underline ' >sign up!</a></p>
       <br /> 
       <p> Don’t forget to log in to your account every time before creating the exchange as this is the only way to get crypto cashback. Please, read about different types of cashback subscriptions and find the terms and conditions of our Loyalty Program <a href="" className='text-blue-700 underline ' >here.</a> </p>
        </div>
      </details>



    
    </div>
  </div>
</section>

  )
}

export default Faqs3