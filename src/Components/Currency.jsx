import { Link } from 'react-router-dom'

const Currency = () => {
  return (
    <>
      <div className='bg-white rounded-xl pb-4 mb-12 shadow-2xl'>
        <div className='text-center   text-3xl pt-9'>
          <p> Start Swap </p>
        </div>
        <div className='text-center text-3xl'>
          <p> Cryptocurrencies </p>
        </div>
        <div className='text-center mt-4 text-gray-400 font-normal'>
          <p> Just make the first exchange to see </p>
        </div>
        <div className='text-center text-gray-400 font-normal'>
          <p>how easy and profitable it is.</p>
        </div>
        <div className='mx-11 bg-[#0f75fc] text-center rounded-md mt-5'>
          <Link to={'/exchange'} className='bg-[#0F75FC] hover:bg-[#0F75FC]/60 cursor-pointer rounded-xl h-12 mt-4 w-full  flex justify-center'>
            <button className='p-1 text-center flex justify-center items-center  text-white text-[14px] font-[500] font-sans'>Create an Exchange</button>
          </Link>
        </div>
      </div>

    </>
  )
}

export default Currency
