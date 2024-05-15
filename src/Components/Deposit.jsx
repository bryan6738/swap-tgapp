import React, { useState } from 'react';
import { IoCopyOutline } from "react-icons/io5";
import s41 from '../assets/s41.svg'
import s42 from '../assets/s42.svg'
import a43 from '../assets/a43.svg'
import s44 from '../assets/s44.svg'
import { MdInfoOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Deposit = ({ props }) => {
  const status = props;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(status.address_from)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 600);
      })
      .catch((error) => console.error('Error copying to clipboard:', error));
  };

  const spinner = <div role="status">
    <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
  </div>;

  const swapStatus = (temp) => {
    if (temp == "waiting") {
      return 'Awaiting your deposit';
    } else if (temp == 'confirming') {
      return 'Confirming your deposit';
    } else if (temp == 'exchanging') {
      return 'Exchanging your deposit';
    } else if (temp == 'sending') {
      return 'Sending to your wallet';
    } else {
      return 'Finished exchanging'
    }
  }

  return (
    <>
      <div className='bg-[#141A2E] mx-4 rounded-t-2xl pb-5 ' >
        <div className='text-center pt-5 ' >
          <p className='text-white font-[700] ' >{swapStatus(status.status)}</p> </div>
        <div className='flex justify-center mt-3 gap-x-2 items-center' >
          <div className='text-yellow-500 mt-1 text-lg ' >
            <div className=''>
              <img className='w-6 h-6' src={status.currencies[status.currency_from].image} alt="" />
            </div>
          </div>
          <div>
            <p className='text-[16px] font-[600] text-white text-lg mt-1 ' >{`${status.amount_from} ${status.currency_from.toUpperCase()}`}</p>
          </div>
        </div>
        <div className='text-center mt-3 ' >
          <p className='text-white text-sm ' >Deposite address: </p>
        </div>
        <div className='bg-[#0F75FC] mx-5 py-2 mb-3 rounded-md justify-around mt-5 flex items-center'>
          <div>
            <p className='text-white px-1 text-xs'>{status.address_from}</p>
          </div>
          <button className='bg-blue-400 relative text-white p-2 rounded-lg' onClick={copyToClipboard}>
            <IoCopyOutline />
          </button>
          {copied && (
            <div className="absolute text-sm -mt-12 right-0 bg-green-500 text-white text-center py-2 px-4 rounded-md shadow-md opacity-100 transition-opacity duration-500 ease-in-out">
              Copied address to clipboard
            </div>
          )}
        </div>
      </div>
      <div className='bg-white mx-4 pb-11 ' >
        <div className='flex justify-between mx-3 my-3 pt-4 ' >
          <div className='flex gap-x-2 ' >
            <div className='bg-black h-fit p-1 mt-1 rounded-full  '>
              <img src={s44} alt="" />
            </div>
            <div className='text-xs  mt-1' > Status: <br />{swapStatus(status.status)}</div>
          </div>
          <div className='flex gap-x-1 ' >

            <div className={`${status.status == 'waiting' ? 'bg-gray-300' : 'bg-blue-400'} h-fit p-2 rounded-full font-bold`} >
              {status.status == 'confirming' ? spinner : (<img src={a43} alt="" />)}
            </div>

            <div className={`${(status.status == 'waiting' || status.status == 'confirming') ? 'bg-gray-300' : 'bg-blue-400'} 
              h-fit p-2 rounded-full font-bold`} >
              {status.status == 'exchanging' ? spinner : (<img src={s41} alt="" />)}
            </div>
            <div className={`${(status.status == 'sending' || status.status == 'finished') ? 'bg-blue-400' : 'bg-gray-300'} 
              h-fit p-2 rounded-full font-bold`} >
              {status.status == 'sending' ? spinner : (<img src={s42} alt="" />)}
            </div>
          </div>
        </div>
        <div className='bg-[#F2F7FE] flex gap-x-2 px-3 py-3 rounded-r-xl  border-l-4 border-gray-600 ' >
          <div className='text-gray-400 mt-1  ' >
            <MdInfoOutline size={20} />
          </div>
          <div>
            <p className='text-[#859AB5] text-xs font-medium leading-tight ' >
              If you sent the coins and the status did not change immediately, do not worry. Our system needs a few minutes to detect the transaction.
            </p>
          </div>
          <div className='text-gray-600 mt-1 ' >
            <IoClose size={20} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Deposit



















