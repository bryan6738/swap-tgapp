import React from 'react'
import { TiTick } from "react-icons/ti";
const Options = () => {
  return (
    <>
      <div className='flex bg-[#F8F8F8] justify-between mx-8 py-4 ' >
        <div className='flex gap-x-1 ' >
          <div className='bg-[#3FBB7D] rounded-xl  ' ><TiTick color='white' size={22} /></div>
          <div>  <p className='text-[#3FBB7D] font-medium text-xs mt-1 ' > Choose currencies </p> </div>
        </div>
        <div className='flex gap-x-1 ' >
          <div> <div className='bg-[#252C44] rounded-xl  ' > <p className='text-white px-2 ' >2</p></div> </div>
          <div> <p className='font-medium text-xs mt-1' >Enter the address</p> </div>
        </div>
      </div>
    </>
  )
}
export default Options




















