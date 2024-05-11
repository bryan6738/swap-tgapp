import coins from '../assets/hs.webp'

const Card1 = () => {
  return (
    <>
      <div className='pt-2' >  </div>
      <div className='mx-1 bg-[#082F77]   rounded-xl drop-shadow-md p-1 '>
        <div className='m-2' >
          <div className='text-center  text-white text-lg font-bold mt-3' > <p> New Loyality Program is here ! </p></div>
          <div className='text-center  text-white my-7 text-xs ' ><p>Receive BTC cashback for every change </p></div>
          <div className='m-5 px-11'>  <img src={coins} alt="" className='mx-auto' /> </div>
        </div>
      </div>
    </>
  )
}

export default Card1
