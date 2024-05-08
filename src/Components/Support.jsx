import React from 'react'
import hf from '../assets/hf.png'

const Support = () => {
  return (
    <>
       <div className='mx-1 mt-5 bg-[#062763]  border rounded-lg ' >
       {/* making ther img and privacy flex */}
       <div className='flex justify-between mx-2 ' >
        <div  className='ml-[2%] mt-[5%] '  > <p className='text-[#337bb6] text-sm font-semibold ' > 24/7 support </p> </div>
        <div className='pt-2' > <img src={hf} alt="" width={120}  className='-mb-9' /> </div>
       </div>
{/* end flex  */}
<div>
<div className='mx-1'  >
    <p className='ml-[2%] text-white text-xl font-bold  w-[55%] ' > You wont be left alone   </p>
</div>

<div className='mx-1'  >
    <p className='ml-[2%] text-[#337bb6] text-[14px] font-[400] my-3 w-40%  leading-tight ' >Our support team is easy to reach and ready to answer your questions.   </p>
</div>
</div>
      </div>
    </>
  )
}

export default Support
