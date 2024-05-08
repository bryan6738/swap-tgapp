import React from 'react'
import lock from '../assets/lock.png'
const Safety = () => {
  return (
    <>
          <div className='mx-1 mt-5 bg-[#062763]  border rounded-lg ' >
       {/* making ther img and privacy flex */}
       <div className='flex justify-between mx-2 ' >
        <div  className='ml-[2%] mt-[5%] '  > <p className='text-[#337bb6] text-sm  font-bold ' > Safety </p> </div>
        <div className='pt-2' >  <img src={lock} alt="" width={120}  className='-mb-9' /> </div>
       </div>
{/* end flex  */}
<div>
<div className='mx-1'  >
    <p className='ml-[2%] text-white text-xl font-bold ' > Non-custodial   </p>
</div>
<div className='mx-1'  >
    <p className='ml-[2%] text-[#337bb6]   my-3 w-40%  leading-tight  text-[14px] font-[400] ' >Crypto is sent directly to your wallet, we don’t store it on our service.   </p>
</div>
</div>
      </div>
    </>
  )
}

export default Safety
