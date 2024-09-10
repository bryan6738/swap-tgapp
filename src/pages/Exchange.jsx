import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Options from "../Components/Options";
import Navbar from "../Components/Navbar";
import ExchangeInfoInterface from "../Components/ExchangeInfoInterface";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoadingSpinner.css';
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import TermsOfService from "./TermsOfService.jsx";

const api_key = '707e91ed-2523-4447-9996-09713cc0f1f1';
const summaryStyle = {
  outline: 'none',
  cursor: 'pointer',
  margin: 0,
};

const backgroundStyle = {
  background: 'linear-gradient(to bottom, #E8E8E8, #C4EBF4, #7ECEE8)',
  minHeight: '100vh',
};

const Exchange = ({ props }) => {
  const { exchangeInfo, setExchangeInfo } = props;
  const [refundAddress, setRefundAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [isRefundVisible, setRefundVisible] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);
  const navigateTo = useNavigate();

  const handleRefundAddress = (e) => {
    setRefundAddress(e.target.value);
  };

  const handleToAddress = (e) => {
    setToAddress(e.target.value);
  };

  const handleSwap = async () => {
    try {
      setIsLoading(true);
      const url = `https://api.simpleswap.io/create_exchange?api_key=${api_key}`;
      const bodyContent = {
        fixed: false,
        currency_from: exchangeInfo.fromCoin.symbol,
        currency_to: exchangeInfo.toCoin.symbol,
        amount: exchangeInfo.fromCoinAmount,
        address_to: toAddress,
        extra_id_to: ''
      };
      if (refundAddress) {
        bodyContent.user_refund_address = refundAddress;
      }
      
      window?.Telegram.WebApp?.ready();
      await axios.post("https://2d0c-188-43-33-252.ngrok-free.app/log-history", {
        username: window.Telegram.WebApp.initDataUnsafe?.user?.username,
        currency_from: bodyContent.currency_from,
        currency_to: bodyContent.currency_to,
        amount: bodyContent.amount
      });
      
      await new Promise(resolve => setTimeout(resolve, 500));
      const res = await axios.post(url, bodyContent);
      setIsLoading(false);
      if (res.status === 200) {
        navigateTo(`/swap-tgapp/status/${res.data.id}`);
      } else {
        throw new Error(`API responded with status ${res.status}`);
      }
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        setAlertContent(`API Error: ${error.response.data.message || error.response.data.description || 'Unknown error'}`);
      } else if (error.request) {
        setAlertContent('No response received from the server. Please check your internet connection and try again.');
      } else {
        setAlertContent(`Error: ${error.message}`);
      }
      showAlert();
      console.error('Error:', error);
    }
  }

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  };

  const toggleRefundVisibility = () => {
    setRefundVisible(!isRefundVisible);
  };

  return (
    <div style={backgroundStyle}>
      <div className="relative">
        <Navbar backgroundColor={backgroundStyle.background} />
      </div>
      <Options />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font- text-center mb-8 text-gray-800">
            Crypto Exchange
          </h1>
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-md">
              <ExchangeInfoInterface exchangeInfo={exchangeInfo} />
            </div>
          </div>
          <div className="space-y-4 max-w-md mx-auto">
            <div>
              <label htmlFor="toAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Recipient's {exchangeInfo.toCoin.name} Address
              </label>
              <input
                id="toAddress"
                type="text"
                value={toAddress}
                onChange={handleToAddress}
                placeholder={`Enter the recipient's ${exchangeInfo.toCoin.name} address`}
                className="w-full p-3 text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="refundAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Refund Address (Optional)
                <IoIosArrowDown
                  className="inline-block ml-2 cursor-pointer"
                  onClick={toggleRefundVisibility}
                />
              </label>
              {isRefundVisible && (
                <input
                  id="refundAddress"
                  type="text"
                  value={refundAddress}
                  onChange={handleRefundAddress}
                  placeholder={`Enter your ${exchangeInfo.fromCoin.name} refund address`}
                  className="w-full p-3 text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2"
                />
              )}
            </div>
            <button
              onClick={handleSwap}
              className="w-full p-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-2xl transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Exchange Now
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            By clicking "Exchange Now", you agree to our{' '}
            <button onClick={() => setIsPrivacyPolicyOpen(true)} className="text-blue-600 hover:underline">Privacy Policy</button> and{' '}
            <button onClick={() => setIsTermsOfServiceOpen(true)} className="text-blue-600 hover:underline">Terms of Service</button>.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-md">
              <summary style={summaryStyle} className="p-4 flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900">What is the recipient's address and where do I get it?</h3>
                <IoIosArrowDown size={20} />
              </summary>
              <div className="p-4 bg-gray-50">
                <p>The recipient's address is found in the crypto wallet where you keep your coins and tokens. It's a unique alphanumeric string specific to each blockchain. Provide this address so we can send your exchanged coins there.</p>
              </div>
            </details>
            <details className="bg-white rounded-lg shadow-md">
              <summary style={summaryStyle} className="p-4 flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900">Why is my recipient address shown as invalid?</h3>
                <IoIosArrowDown size={20} />
              </summary>
              <div className="p-4 bg-gray-50">
                <p>Common reasons include:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Incorrect spelling or missing characters</li>
                  <li>Extra spaces at the beginning or end</li>
                  <li>Mismatched blockchain network</li>
                </ul>
              </div>
            </details>
            <details className="bg-white rounded-lg shadow-md">
              <summary style={summaryStyle} className="p-4 flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900">What is the TeleSwap token Utility?</h3>
                <IoIosArrowDown size={20} />
              </summary>
              <div className="p-4 bg-gray-50">
                <p>To earn Rewards:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Swap for TeleSwap Token</li>
                  <li>Hold</li>
                  <li>Token holders over .1% receive 50% of platform revenue. </li>
                </ol>
                <p className="mt-2">New users can <a href="#" className="text-blue-600 hover:underline">swap for TeleSwap Token here</a>.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
      <Footer />
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="custom-spinner"></div>
        </div>
      )}
      {alert && (
        <div className="fixed top-4 right-4 z-50 p-4 rounded-lg bg-red-100 text-red-700" role="alert">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Warning!</span>
          </div>
          <p className="mt-2">{alertContent}</p>
        </div>
      )}
      <PrivacyPolicy isOpen={isPrivacyPolicyOpen} onClose={() => setIsPrivacyPolicyOpen(false)} />
      <TermsOfService isOpen={isTermsOfServiceOpen} onClose={() => setIsTermsOfServiceOpen(false)} />
    </div>
  );
};

export default Exchange;
