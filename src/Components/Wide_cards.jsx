import React from 'react'
import coin from '../assets/coins.png'
const Wide_cards = () => {
  return (
    <>
       <div className='mx-1 mt-5 bg-[#062763]  border rounded-lg ' >
       {/* making ther img and privacy flex */}
       <div className='flex justify-between mx-2 ' >
        <div  className='ml-[2%] mt-[5%] '  > <p className='text-[#337bb6] text-sm font-semibold   ' > Wide choice </p> </div>
        <div className='pt-2' > <img src={coin} alt="" width={120}  className='-mb-9' /> </div>
       </div>
{/* end flex  */}
<div>
<div className='mx-1'  >
    <p className='ml-[2%] text-white text-xl font-bold w-[55%] ' > 1000  cryptocurrencies  </p>
</div>

<div className='mx-1'  >
    <p className='ml-[2%] text-[#337bb6]  text-[14px] font-[400]  my-3 w-40%  leading-tight ' >Hundreds of crypto and fiat currencies are available for exchange.   </p>
</div>
</div>
      </div>
    </>
  )
}

export default Wide_cards
