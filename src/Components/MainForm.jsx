import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/home/Exchanger/btc.svg'
import etc from '../assets/home/Exchanger/eth.svg'
import load from '../assets/home/Exchanger/loadarrow.svg'
import { IoIosArrowDown } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";
import axios from 'axios';

const MainForm = () => {
  const [isFocused, setIsForcused] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [fromCoin, setFromCoin] = useState({ image: logo, symbol: 'BTC' });
  const [toCoin, setToCoin] = useState({ image: etc, symbol: 'ETH' });
  const [fromCoinAmount, setFromCoinAmount] = useState(0);
  const [toCoinAmount, setToCoinAmount] = useState(0);
  const [coinList, setCoinList] = useState([]);
  const [tempCoinList, setTempCoinList] = useState([]);

  const api_key = '707e91ed-2523-4447-9996-09713cc0f1f1';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.simpleswap.io/get_all_currencies?api_key=${api_key}`);
        setCoinList(response.data);
        setTempCoinList(response.data)
        let btc = response.data.find((item) => item.symbol == 'btc');
        let eth = response.data.find((item) => item.symbol == 'eth');
        setFromCoin(btc);
        setToCoin(eth);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const getEstimateAmount = async () => {
    try {
      const response = await axios.get(`https://api.simpleswap.io/get_estimated?api_key=${api_key}&fixed=false&currency_from=${fromCoin.symbol}&currency_to=${toCoin.symbol}&amount=${parseFloat(fromCoinAmount)}`);
      setToCoinAmount(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setFromCoinAmount(e.target.value);
    getEstimateAmount();
  };

  const handleReversal = () => {
    let tempCoin = fromCoin;
    setFromCoin(toCoin);
    setToCoin(tempCoin);
    getEstimateAmount();
  }

  const handleSearch = (e) => {
    let tempCoins = coinList.filter((coin) =>
      coin.name.toLowerCase().includes(e.target.value.toLowerCase()) || coin.symbol.toLowerCase().includes(e.target.value.toLowerCase()));
    setTempCoinList(tempCoins);
  }

  return (
    <>
      <div className='flex flex-col h-[33.33%]'>
        <div className='flex'>
          <div className={`border border-solid border-2 border-gray-200 w-[80%] mr-[1px] ${isFocused ? 'bg-white-200' : 'bg-gray-200'} flex flex-col rounded-l-xl p-2 font-sans`}>
            <h2 className='text-[10px] -mb-1 font-bold text-black/40'>You Send</h2>
            <div className='cursor-pointer'>
              <input value={fromCoinAmount}
                onChange={handleChange}
                onFocus={() => setIsForcused(true)}
                onBlur={() => setIsForcused(false)}
                className={`${isFocused ? 'bg-white-200' : 'bg-gray-200'} focus:outline-none text-black/60  w-full text-[18px] font-bold`}
                type="text" />
            </div>
          </div>
          <button
            onClick={() => setShowDropdown1(!showDropdown1)}
            className='w-[30%] hover:bg-gray-300 bg-gray-300 cursor-pointer flex rounded-r-xl justify-between  items-center p-2 gap-x-1'>
            <div className='w-1/3'><img className='w-12' src={fromCoin.image} alt="" /></div>
            <div className='text-sm w-1/3 leading-tight'>{fromCoin.symbol.toUpperCase()}</div>
            <div className='w-1/3'><IoIosArrowDown size={15} /></div>
          </button>
          <div id="dropdown-menu" class={`${showDropdown1 ? '' : 'hidden'} absolute right-0 left-0 mx-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}>
            <form>
              <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-input"
                  onChange={handleSearch}
                  onBlur={() => setShowDropdown1(!showDropdown1)}
                  class="block w-full p-4 ps-10 text-[18px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                <button type="button"
                  onClick={() => setShowDropdown1(!showDropdown1)}
                  class="absolute end-2.5 bottom-2.5 bg-white-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </form>
            <div className='max-h-48 overflow-y-auto'>
              {tempCoinList.map((coin, key) => (
                <div
                  key={key}
                  onClick={() => {
                    setFromCoin(coin);
                    setShowDropdown1(!showDropdown1);
                    getEstimateAmount();
                    setTempCoinList(coinList);
                  }}
                  className="flex block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">
                  <div className='w-1/5'><img className='w-6 h-6' src={coin.image} alt="" /></div>
                  <div className='text-sm font-bold text-black/80 w-1/3 leading-tight'>{coin.symbol.toUpperCase()}</div>
                  <div className='text-sm text-gray-400 leading-tight'>{coin.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col  my-1 '>
        <div className='flex'>
          <div className='w-[30px] h-[30px] my-auto bg-gray-200 items-center flex flex-col justify-center font-sans rounded-full hover:bg-gray-200'>
            <FaUnlockAlt color='gray' size={15} />
          </div>
          <div className='cursor-pointer flex justify-between gap-x-2 items-center p-4'>
            <h1 className='text-[12px] font-semibold text-black/60'>Floating Rate</h1>
          </div>
          <div onClick={handleReversal} className='hover:bg-blue-600 w-[30px] my-auto h-[30px] bg-gray-200 rounded-full flex justify-center items-center ml-auto'>
            <img className='w-[25px] h-[25px]' src={load} alt="" />
          </div>
        </div>
      </div>

      <div className='flex flex-col  '>
        <div className='flex'>
          <div className='w-[80%] flex flex-col p-2 font-sans  rounded-l-xl bg-gray-200 hover:bg-gray-200'>
            <h2 className='text-[10px] ml-2 -mb-1  font-bold text-black/40'>You Get</h2>
            <div className='cursor-pointer'>
              <input value={toCoinAmount} placeholder='0.1'
                className='focus:outline-none bg-gray-200 hover:bg-gray-200 text-black/60  w-full text-[18px] font-bold'
                type="text" />
            </div>
          </div>
          <button
            onClick={() => setShowDropdown2(!showDropdown2)}
            className='w-[30%] hover:bg-gray-300 bg-gray-300 cursor-pointer flex rounded-r-xl justify-between  items-center p-2 gap-x-1'>
            <div className='w-1/3'><img className='w-12' src={toCoin.image} alt="" /></div>
            <div className='text-sm w-1/3 leading-tight'>{toCoin.symbol.toUpperCase()}</div>
            <div className='w-1/3'><IoIosArrowDown size={15} /></div>
          </button>
          <div id="dropdown-menu" class={`${showDropdown2 ? '' : 'hidden'} absolute right-0 left-0 mx-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}>
            <form>
              <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-input"
                  onChange={handleSearch}
                  onBlur={() => setShowDropdown2(!showDropdown2)}
                  class="block w-full p-4 ps-10 text-[18px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" autocomplete="off" />
                <button type="button"
                  onClick={() => setShowDropdown2(!showDropdown2)}
                  class="absolute end-2.5 bottom-2.5 bg-white-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </form>
            <div className='max-h-48 overflow-y-auto'>
              {tempCoinList.map((coin, key) => (
                <div key={key}
                  onClick={() => {
                    setToCoin(coin);
                    setShowDropdown2(!showDropdown2);
                    getEstimateAmount();
                    setTempCoinList(coinList);
                  }}
                  className="flex block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">
                  <div className='w-1/5'><img className='w-6 h-6' src={coin.image} alt="" /></div>
                  <div className='text-sm font-bold text-black/80 w-1/3 leading-tight'>{coin.symbol.toUpperCase()}</div>
                  <div className='text-sm text-gray-400 leading-tight'>{coin.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainForm