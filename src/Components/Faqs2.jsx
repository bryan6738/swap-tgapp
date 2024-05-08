import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const summaryStyle = {
    outline: 'none',
    cursor: 'pointer',
    margin: 0,
    
  };

const Faqs2 = () => {
  return (
    
    <section class=" bg-white text-black  ">
      <div className='shadow-2xl' >
     <div className='mx-11' >   <p className='font-[600] text-[16px]' >Enter the wallet address</p>
       <div className='mt-1' > <input type="text" placeholder='THE recepients Ethereum address' className='w-[100%] h-12 p-3 '   />  </div></div>
        <div className='bg-[#0F75FC]/60 cursor-pointer rounded-xl h-12 mt-4 mx-10 my-5 flex justify-center'>
    <button  className='p-1 text-center flex justify-center items-center  text-white text-[12px] font-[500] font-sans '>Exchange</button>
</div>
        <div className='mb-5' > <p className='text-center' > By clicking Create an exchange, I agree to the <a href="" className='text-blue-700 underline ' >Privacy Policy</a> and <a href="" className='text-blue-700 underline ' >Terms of Service</a>. </p> </div>
        {/* Additional Details */}
        <details  className='mx-8' >
        <summary style={summaryStyle} class="py-2 outline-none  flex   cursor-pointer  "><h1 className='ml-[25%] text-black font-[400] text-[16px]'>Additional Details </h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4">
       <p className='font-[600] text-[16px]' >Enter the refund address</p>
       <p className='leading-tight text-[14px] text-gray-600 ' >We recommend adding your wallet address for a refund. </p>
       <div className='mt-1' > <input type="text" placeholder='THE BTC REFUND ADDRESS' className='w-[100%] h-12 p-3 '   />  </div>
        
       <p className='font-[600] text-[16px] mt-8 ' >Add Email</p>
       <p className='leading-tight text-[14px] text-gray-600 ' >If you want to get notifications about this exchange. </p>
       <div className='mt-1' > <input type="text" placeholder='THE EMAIL ADDRESS' className='w-[100%] h-12 p-3 '   />  </div>
        
        </div>
      </details>
      </div>
        <div className='text-[14px] font-[600] ml-5 my-5 ' >  <p> Have Any Question </p> </div>
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <div class="flex flex-col divide-y  divide-gray-700">
      <details className='mx-4' >
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[90%] text-black font-[400] text-[15px] '>What is the recipient's address and where do I get it?</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
        <div class=" pb-4 pt-11 ">
        You can find the cryptocurrency address in the crypto wallet that you use to keep your coins and tokens. It contains letters and numbers and looks like an alphanumeric string. Cryptocurrencies are based on different blockchains and have their own unique address formats. It’s necessary to provide us with the crypto wallet address, and we’ll send your coins there.
        </div>
      </details>
      <details  className='mx-4' >
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[90%] text-black font-[400] text-[15px] '>Why is my recipient address shown as invalid?</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
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
        <summary style={summaryStyle} class="py-2 outline-none  flex justify-between cursor-pointer  "><h1 className='w-[90%] text-black font-[400] text-[15px]'>How do I get cashback for the exchange on SimpleSwap?</h1><span className=''><IoIosArrowDown size={25}/></span></summary>
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

export default Faqs2