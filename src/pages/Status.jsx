import Footer from "../Components/Footer";
import Faqs3 from "../Components/Faqs3";
import Cards2 from "../Components/Cards2";
import Deposit from "../Components/Deposit";
import Exchange_id from "../Components/Exchange_id";
import { IoCopyOutline } from "react-icons/io5";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './LoadingSpinner.css';

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
  }, []);

  return (
    <>
      <Navbar />
      <div className="">
        {status && <div>
          <Exchange_id props={status.id} />
          <Deposit props={status} />
          <div className="mx-3">
            <Cards2 />
          </div>
          <div className="p-5 bg-white">
            <div className="flex drop-shadow-lg  rounded-xl flex-col  bg-white ">
              <div>
                <h1 className="font-semibold bg-white drop-shadow-2xl  rounded-t-xl  p-2">
                  Operation details
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
                <div className="flex p-2 justify-between bg-gray-100 rounded-lg px-3 ">
                  <div>
                    <p className="text-xs  rounded-xl py-2 font-sans  ">
                      {status.address_to}
                    </p>
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
            </div>
          </div>
        </div>}
        <Faqs3 />
      </div>
      <Footer />
      <div className={`fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75 ${isLoading ? '' : 'hidden'}`}>
        <div className="custom-spinner"></div>
      </div>
    </>
  );
}
export default Status;
