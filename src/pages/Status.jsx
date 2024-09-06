import Footer from "../Components/Footer";
import Faqs3 from "../Components/Faqs3";
import Deposit from "../Components/Deposit";
import Exchange_id from "../Components/Exchange_id";
import { IoCopyOutline } from "react-icons/io5";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './LoadingSpinner.css';
import transitionFade from '../assets/transitionfade.svg';

const api_key = '707e91ed-2523-4447-9996-09713cc0f1f1';

const Status = () => {
  const [status, setStatus] = useState();
  let { id } = useParams();
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.simpleswap.io/get_exchange?api_key=${api_key}&id=${id}`);
        setStatus(response.data);
        setIsLoading(false);
        if (response.data.status !== 'finished' && response.data.status !== 'confirmed') {
          setTimeout(fetchData, 5000);
        }
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching data:', error);
      }
    };
    const timer = setTimeout(fetchData, 5000);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div className='min-h-screen flex flex-col relative' style={{ background: 'linear-gradient(to bottom, #E8E8E8, #C4EBF4, #7ECEE8)' }}>
      <Navbar backgroundColor="rgba(232, 232, 232, 0.5)" />
      <div className="flex-grow container mx-auto px-4 py-4">
        {status && (
          <div>
            <Exchange_id props={status.id} />
            <Deposit props={status} />
            {/* Add margin to create space between sections */}
            <div className="my-6 p-5 bg-white rounded-xl shadow-lg">
              <div className="flex flex-col bg-white">
                <div>
                  <h1 className="font-semibold bg-white p-2">
                    Swap details
                  </h1>
                </div>
                <div className="p-3">
                  <p className="text-xs font-[500] text-black/60 pb-4">You get:</p>
                  <div className="flex">
                    <h2 className="font-semibold text-lg flex items-center">
                      <img className='w-6 h-6' src={status.currencies[status.currency_to].image} alt="" />
                      <p className="text-ls font-[500] text-black/60 pl-2">{` ≈ ${status.amount_to}`}</p>
                    </h2>
                  </div>
                  <div className="py-2">
                    <p className="text-xs font-[500] text-black/60">
                      Recipient address:
                    </p>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-lg p-2 max-w-full">
                    <div className="flex-grow mr-2 min-w-0">
                      <p className="text-xs font-sans truncate">
                        {status.address_to}
                      </p>
                    </div>
                    <button className='bg-blue-400 text-white p-2 rounded-lg flex-shrink-0' onClick={copyToClipboard}>
                      <IoCopyOutline />
                    </button>
                  </div>
                  {copied && (
                    <div className="mt-2 text-sm bg-green-500 text-white text-center py-2 px-4 rounded-md shadow-md opacity-100 transition-opacity duration-500 ease-in-out">
                      Copied address to clipboard
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <Faqs3 />
      </div>
      <Footer />
      <div className={`fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75 ${isLoading ? '' : 'hidden'}`}>
        <div className="custom-spinner"></div>
      </div>
      <img src={transitionFade} alt="Transition Fade" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full" />
    </div>
  );
}

export default Status;
