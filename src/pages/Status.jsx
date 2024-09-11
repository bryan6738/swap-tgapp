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
import { sendMessage } from '../Components/SendMessage';

const api_key = '707e91ed-2523-4447-9996-09713cc0f1f1';
let previousStatus = null;

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

  const ExchangeLogger = async (currentStatus) => {
    window.Telegram.WebApp.ready();
    try {
        const res_burate = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        let res_inputUSD;
        let res_outputUSD;
        try {
          res_inputUSD = await axios.get(`https://api.simpleswap.io/get_estimated?api_key=${api_key}&fixed=false&currency_from=${currentStatus.currency_from}&currency_to=usdttrc20&amount=${parseFloat(currentStatus.amount_from)}`);
          res_outputUSD = await axios.get(`https://api.simpleswap.io/get_estimated?api_key=${api_key}&fixed=false&currency_from=${currentStatus.currency_to}&currency_to=usdttrc20&amount=${parseFloat(currentStatus.amount_to)}`);
        } catch (error) {
          console.log('Error: ', error);
        }
        const response = await axios.post('https://99d1b5e3-6b3e-464e-916b-1f672e07b217-00-2ff1vas26uujj.sisko.replit.dev/log-exchange', {
          ExchangeID: currentStatus.id,
          UserID: window.Telegram.WebApp.initDataUnsafe?.user?.id,
          AmountSent: currentStatus.amount_from,
          AmountReceived: currentStatus.amount_to,
          TokenSent: currentStatus.currency_from,
          TokenReceived: currentStatus.currency_to,
          InputTokenUSDTValue: currentStatus.currency_from.includes('usdt') ? currentStatus.amount_from : (res_inputUSD.data || 0),
          OutputTokenUSDTValue: currentStatus.currency_from.includes('usdt') ? currentStatus.amount_to : (res_outputUSD.data || 0),
          BTC_USDRate: res_burate.data.bitcoin.usd,
          ExchangeTimestamp: currentStatus.timestamp,
          ExchangeFinished: currentStatus.status === "finished" || currentStatus.status === "confirmed",
          AddressSent: currentStatus.address_from,
          AddressReceived: currentStatus.address_to,
          UserAgent: navigator.userAgent,
          SiteLanguage: navigator.language || navigator.userLanguage,
          AcceptLanguage: navigator.languages ? navigator.languages.join(', ') : siteLanguage,
          DeviceTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          DeviceOperatingSystem: getDeviceOperatingSystem()
        })

        if (response.ok) {
            console.log('Exchange data logged successfully');
        } else {
            console.error(`Failed to log exchange data. Status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error: , ${error}`);
    }
  };

  const getDeviceOperatingSystem = () => {
    const userAgent = window.navigator.userAgent;
    let os = "Unknown OS";

    if (userAgent.indexOf("Win") !== -1) os = "Windows";
    else if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
    else if (userAgent.indexOf("X11") !== -1) os = "UNIX";
    else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
    else if (/Android/.test(userAgent)) os = "Android";
    else if (/iPhone|iPad|iPod/.test(userAgent)) os = "iOS";

    return os;
}

  const handleStatusUpdate = (currentStatus) => {
    if (previousStatus !== currentStatus.status) {
      if (currentStatus.status === "waiting") {
        ExchangeLogger(currentStatus);
      } else if (currentStatus.status === "confirming") {
        sendMessage("Tokens Received!");
        sendMessage("Waiting on tokens to be deposited!");
      } else if (currentStatus.status === "exchanging") {
        sendMessage("Swapping tokens Now!");
      } else if (currentStatus.status === "sending") {
        sendMessage("Sending Your tokens now!");
      } else if (currentStatus.status === "finished") {
        sendMessage("Successfully Finished Exchange!");
        sendMessage("Waiting on tokens to be deposited!");
      }
      previousStatus = currentStatus.status;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.simpleswap.io/get_exchange?api_key=${api_key}&id=${id}`);
        setStatus(response.data);
        setIsLoading(false);
        handleStatusUpdate(response.data);
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
                        {status.address_to }
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
