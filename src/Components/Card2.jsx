import React from 'react'

const Card2 = (props) => {
  const {id, title, img, text1, text2} = props
  return (
    <>
      <div className='mx-1 mt-14 bg-[#082F77]  p-1 rounded-lg'>
        <div className='flex justify-between mx-2'>
          <div className='ml-[2%] mt-[5%]'> <p className='text-[#337bb6] text-sm font-bold'>{title}</p></div>
          <div className='pt-2'><img src={img} alt="" width={120} className='-mb-9' /></div>
        </div>
        <div>
          <div className='mx-1'  >
            <p className='ml-[2%] text-white text-xl font-bold w-[55%]'>{text1}</p>
          </div>
          <div className='mx-1'  >
            <p className='ml-[2%] text-[#337bb6]  text-[14px] font-[400]  my-3 w-40% leading-tight'>{text2}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card2
