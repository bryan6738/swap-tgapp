import { PiQuestionMarkFill } from "react-icons/pi";
const Exchange_id = ({ props }) => {
  const exchangeId = props
  return (
    <>
      <div className='mb-5 mt-11 ' >
        <div className='border border-gray-300 mx-3 text-center rounded-2xl py-2 flex justify-between'>
          <div className='mx-4' >
            <p className='text-[11px] font-medium text-black'> Exchange ID: {exchangeId} </p>
          </div>
          <div className='flex mx-4 font-medium ' >
            <div className='text-gray-400' >
              <PiQuestionMarkFill />
            </div>
            <div>
              <p className='text-[11px] text-black ' >Need help?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Exchange_id












