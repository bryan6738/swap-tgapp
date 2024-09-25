import React from 'react';

const Card2 = (props) => {
  const { id, title, img, text1, text2 } = props;
  return (
    <div className='mx-1 mt-4 bg-[#7ECEE8] p-4 rounded-2xl' style={{ height: 'auto' }}>
      <div className='flex'>
        <div className='w-1/3 flex items-center justify-start'>
          <img src={img} alt={title} className='w-36 h-36' />
        </div>
        <div className='w-2/3 flex flex-col'>
          <h3 className='text-[#082F77] text-2xl font-extrabold mb-7 montserrat-font' style={{ paddingLeft: '13px', letterSpacing: '0.05em' }}>{title}</h3>
          <div  style={{ paddingLeft: '13px'}}>
            <p className='text-white text-xl font-bold mb-2'>{text1}</p>
            <p className='text-[#082F77] text-sm'>{text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
