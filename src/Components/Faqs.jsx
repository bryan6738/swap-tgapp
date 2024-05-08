import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const summaryStyle = {
    outline: 'none',
    cursor: 'pointer',
    margin: 0,
    listStyleType: 'none', // This line removes the default bullet point
  };

const Faqs = () => {
  return (
    <section class="bg-[#010E27] text-gray-100  ">
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <div class="flex flex-col divide-y  divide-gray-700">
      <details>
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[90%] text-white/60'>Company & Team</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4">
        <ul className='text-sm  cursor-pointer'>
            <li>About</li>
            <li>FAQ</li>
            <li>How it Works</li>
            <li>Contacts</li>
            <li>Blog</li>
            <li>Mobile Apps</li>
            <li>Reviews</li>
        </ul>
        </div>
      </details>
      <details>
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[90%] text-white/60'>Exchange Pairs</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4">
        <ul className='text-sm  cursor-pointer'>
        <li>ETH to BTC</li>
<li>BTC to ETH</li>
<li>BTC to XMR</li>
<li>BTC to TRX</li>
<li>ETH to SOL</li>
<li>ETH to BNB</li>
<li>BTC to BNB</li>
<li>BTC to USDT</li>
<li>SOL to NEAR</li>
<li>Buy and Sell Crypto</li>

        </ul>
        </div>
      </details>
      <details>
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[90%] text-white/60'>Supported Coins</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4">
        <ul className='text-sm  cursor-pointer'>
        <li>Bitcoin</li>
<li>Ethereum</li>
<li>Tezos</li>
<li>Monero</li>
<li>Cardano</li>
<li>Solana</li>
<li>Binance Coin</li>
<li>TRON</li>
<li>Litecoin</li>
<li>THETA</li>
<li>All Coins</li>


        </ul>
        </div>
      </details>
      <details>
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[90%] text-white/60'>Partnership</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4">
        <ul className='text-sm  cursor-pointer'>
        <li>Affiliate Program</li>
<li>Development API</li>
<li>Tether (USDT) Swap</li>
<li>Ambassador</li>



        </ul>
        </div>
      </details>
      <details>
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[90%] text-white/60'>Legal Documents</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4">
        <ul className='text-sm  cursor-pointer'>
        <li>Terms of Service</li>
<li>Privacy Policy</li>
<li>AML/KYC</li>
<li>Affiliate Terms</li>




        </ul>
        </div>
      </details>
      <details>
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[90%] text-white/60'>SimpleSwap Loyalty</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4">
        <ul className='text-sm  cursor-pointer'>
        <li>SimpleSwap Loyalty</li>
<li>Loyalty Program</li>
<li>Invite Friends</li>




        </ul>
        </div>
      </details>
    
    </div>
  </div>
</section>

  )
}

export default Faqs