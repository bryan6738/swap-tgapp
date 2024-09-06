import { IoCopyOutline } from "react-icons/io5";
import { useState } from 'react';

const Exchange_id = ({ props }) => {
  const exchangeId = props;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exchangeId)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 600);
      })
      .catch((error) => console.error('Error copying to clipboard:', error));
  };

  return (
    <>
      <div className='mb-5 mt-11'>
        <div className='border border-gray-300 mx-3 text-center rounded-2xl py-2 flex justify-between items-center'>
          <div className='mx-4'>
            <p className='text-[11px] font-medium text-black'>Exchange ID: {exchangeId}</p>
          </div>
          <div className='mx-4 relative'>
            <button
              onClick={copyToClipboard}
              className='bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200'
              title='Copy to clipboard'
            >
              <IoCopyOutline />
            </button>
            {copied && (
              <div className="absolute text-sm -mt-12 right-0 bg-green-500 text-white text-center py-2 px-4 rounded-md shadow-md opacity-100 transition-opacity duration-500 ease-in-out">
                Copied to clipboard
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Exchange_id
