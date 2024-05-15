import React, { useEffect, useState, useRef } from 'react';
import load from '../assets/home/Exchanger/loadarrow.svg'
import { IoIosArrowDown } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";
import axios from 'axios';

const popularCoins = ['btc', 'eth', 'usdt', 'bnb', 'sol', 'usdc', 'xrp', 'ton', 'doge', 'ada',
  'shib', 'avax', 'trx', 'dot', 'bch', 'near', 'link', 'matic', 'ltc', 'icp']

const MainForm = (props) => {
  const { exchangeInfo, setExchangeInfo } = props;
  const [isFocused, setIsForcused] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [fromCoin, setFromCoin] = useState(exchangeInfo.fromCoin);
  const [toCoin, setToCoin] = useState(exchangeInfo.toCoin);
  const [fromCoinAmount, setFromCoinAmount] = useState(exchangeInfo.fromCoinAmount);
  const [toCoinAmount, setToCoinAmount] = useState(exchangeInfo.toCoinAmount);
  const [tempCoinList, setTempCoinList] = useState([]);
  const [searchValue1, setSearchValue1] = useState('');
  const [searchValue2, setSearchValue2] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const api_key = '707e91ed-2523-4447-9996-09713cc0f1f1';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.simpleswap.io/get_all_currencies?api_key=${api_key}`);
        const popularCoinList = popularCoins.map((item) => response.data.find((coin) => coin.symbol == item));
        const allCoinList = response.data.filter((item) => !popularCoins.includes(item.symbol));
        const coinList = [...popularCoinList, ...allCoinList];
        const tempList = coinList.map(item => ({ coin: item, visible: true }));
        setTempCoinList(tempList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const info = {
      fromCoin: fromCoin,
      toCoin: toCoin,
      fromCoinAmount: fromCoinAmount,
      toCoinAmount: toCoinAmount
    };
    setExchangeInfo(info);
  }, [fromCoin, toCoin, fromCoinAmount, toCoinAmount]);


  const getEstimateAmount = async (fromAmount) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://api.simpleswap.io/get_estimated?api_key=${api_key}&fixed=false&currency_from=${fromCoin.symbol}&currency_to=${toCoin.symbol}&amount=${parseFloat(fromAmount)}`);
      setToCoinAmount(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setFromCoinAmount(e.target.value);
    getEstimateAmount(e.target.value);
  };

  const handleReversal = () => {
    let tempCoin = fromCoin;
    setFromCoin(toCoin);
    setToCoin(tempCoin);
    getEstimateAmount(fromCoinAmount);
  }

  const handleSearch1 = (e) => {
    let tempCoins = tempCoinList.map((item) => ({
      ...item,
      visible: item.coin.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.coin.symbol.toLowerCase().includes(e.target.value.toLowerCase())
    }));
    setTempCoinList(tempCoins);
    setSearchValue1(e.target.value);
  }

  const handleSearch2 = (e) => {
    let tempCoins = tempCoinList.map((item) => ({
      ...item,
      visible: item.coin.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.coin.symbol.toLowerCase().includes(e.target.value.toLowerCase())
    }));
    setTempCoinList(tempCoins);
    setSearchValue2(e.target.value);
  }

  const initCoinList = () => {
    const tempList = tempCoinList.map(item => ({ ...item, visible: true }));
    setTempCoinList(tempList);
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
            <div className='text-sm w-1/3 leading-tight'>{fromCoin.symbol.toUpperCase().slice(0, 4)}</div>
            <div className='w-1/3 flex justify-end'><IoIosArrowDown size={15} /></div>
          </button>
          <div id="dropdown-menu" className={`${showDropdown1 ? '' : 'hidden'} absolute right-0 left-0 mx-4 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}>
            <form>
              <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-input"
                  value={searchValue1}
                  onChange={handleSearch1}
                  className="block w-full p-4 ps-10 text-[18px] text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                <button type="button"
                  onClick={() => {
                    setShowDropdown1(!showDropdown1);
                    setSearchValue1('');
                    initCoinList();
                  }}
                  className="absolute end-2.5 bottom-2.5 bg-white-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </form>
            <div className='max-h-48 overflow-y-auto'>
              {tempCoinList.map((item, key) => (
                <div
                  key={key}
                  onClick={() => {
                    setFromCoin(item.coin);
                    setShowDropdown1(!showDropdown1);
                    setFromCoinAmount(0);
                    setToCoinAmount(0);
                    setSearchValue1('');
                    initCoinList();
                  }}
                  className={`flex block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md ${item.visible ? '' : 'hidden'}`}>
                  <div className='w-1/5'><img className='w-6 h-6' src={item.coin.image} alt="" /></div>
                  <div className='text-sm font-bold text-black/80 w-1/3 leading-tight'>{item.coin.symbol.toUpperCase()}</div>
                  <div className='text-sm text-gray-400 leading-tight'>{item.coin.name}</div>
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
              {isLoading ? <div role="status">
                <svg aria-hidden="true" className="w-4 h-4 text-white animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
              </div> : <input value={toCoinAmount}
                className='focus:outline-none bg-gray-200 hover:bg-gray-200 text-black/60  w-full text-[18px] font-bold'
                type="text" readOnly />}
            </div>
          </div>
          <button
            onClick={() => setShowDropdown2(!showDropdown2)}
            className='w-[30%] hover:bg-gray-300 bg-gray-300 cursor-pointer flex rounded-r-xl justify-between  items-center p-2 gap-x-1'>
            <div className='w-1/3'><img className='w-12' src={toCoin.image} alt="" /></div>
            <div className='text-sm w-1/3 leading-tight'>{toCoin.symbol.toUpperCase().slice(0, 4)}</div>
            <div className='w-1/3 flex justify-end'><IoIosArrowDown size={15} /></div>
          </button>
          <div id="dropdown-menu" className={`${showDropdown2 ? '' : 'hidden'} absolute right-0 left-0 mx-4 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}>
            <form>
              <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchValue2}
                  id="search-input"
                  onChange={handleSearch2}
                  className="block w-full p-4 ps-10 text-[18px] text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" autoComplete="off" />
                <button type="button"
                  onClick={() => {
                    setShowDropdown2(!showDropdown2);
                    setSearchValue2('');
                    initCoinList();
                  }}
                  className="absolute end-2.5 bottom-2.5 bg-white-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </form>
            <div className='max-h-48 overflow-y-auto'>
              {tempCoinList.map((item, key) => (
                <div key={key}
                  onClick={(e) => {
                    setToCoin(item.coin);
                    setShowDropdown2(!showDropdown2);
                    getEstimateAmount();
                    setSearchValue2('');
                    initCoinList();
                  }}
                  className={`flex block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md ${item.visible ? '' : 'hidden'}`}>
                  <div className='w-1/5'><img className='w-6 h-6' src={item.coin.image} alt="" /></div>
                  <div className='text-sm font-bold text-black/80 w-1/3 leading-tight'>{item.coin.symbol.toUpperCase()}</div>
                  <div className='text-sm text-gray-400 leading-tight'>{item.coin.name}</div>
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