import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card1 from '../Components/Card1'
import Card2 from '../Components/Card2'
import FiatCard from '../Components/FiatCard'
import Trustpilot from '../Components/Trustpilot'
import Currency from '../Components/Currency'
import How_it_works from '../Components/How_it_works'
import screen_lock from '../assets/screen_lock.png'
import coin from '../assets/coins.png'
import lock from '../assets/lock.png'
import hf from '../assets/hf.png'
import MainForm from '../Components/MainForm'

const cards = [
  {
    id: 0,
    title: 'Privacy',
    img: screen_lock,
    text1: 'Sign-up is not required',
    text2: 'SimpleSwap provides cryptocurrency exchange without registration.'
  },
  {
    id: 1,
    title: 'Wide choice',
    img: coin,
    text1: '1000 cryptocurrencies',
    text2: 'Hundreds of crypto and fiat currencies are available for exchange.'
  },
  {
    id: 2,
    title: 'Safety',
    img: lock,
    text1: 'Non-custodial',
    text2: 'Crypto is sent directly to your wallet, we don’t store it on our service.'
  },
  {
    id: 3,
    title: '24/7 support',
    img: hf,
    text1: 'You wont be left alone',
    text2: 'Our support team is easy to reach and ready to answer your questions.'
  },
]

const roundedTrClass = ' bg-[#E0E9F1] hover:bg-blue-100';
const roundedBlClass = 'rounded-bl-[45px]';
const roundedBrClass = 'rounded-br-[45px]';

const Home = ({props}) => {
  const { exchangeInfo, setExchangeInfo } = props;
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className='h-[550px]'>
        <Navbar />
        <div>
          <div className='flex text-white flex-col justify-center p-4 items-center'>
            <h1 className='text-white leading-relaxed text-[40px]'>Crypto Exchange</h1>
            <p className='text-md font-normal  leading-tight text-center '>Free from sign-up, limits, complications</p>
          </div>
          <div className='p-1'>
            <div className='bg-white rounded-3xl drop-shadow-xl '>
              <div className='w-full flex cursor-pointer'>
                <div className={`w-1/2 ${!isActive ? `${roundedTrClass} ${roundedBrClass}` : ''} 
            text-[14px] font-semibold rounded-tl-3xl p-3 text-black/50 flex justify-center items-center`}
                  onClick={handleClick}
                >
                  <h1>Crypto Exchange</h1>
                </div>
                <div className={`w-1/2  p-3 rounded-tr-3xl text-[14px]  text-black/50 font-semibold  flex justify-center items-center  
            ${isActive ? `${roundedTrClass} ${roundedBlClass}` : ''}`}
                  onClick={handleClick}>
                  <span className="cursor-pointer">Buy/Sell Crypto</span>
                </div>
              </div>

              <div className='p-4 flex flex-col'>
                <MainForm {...{ exchangeInfo, setExchangeInfo }}/>
                <Link to={'/swap-tgapp/exchange'}
                  className='bg-[#0F75FC] hover:bg-[#0F75FC]/60 cursor-pointer rounded-xl h-12 mt-4 w-full  flex justify-center'>
                  <button className='p-1 text-center flex justify-center items-center  text-white text-[18px] font-[500] font-sans'>Exchange</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=''>
          <div className='mx-3' >
            <Card1 />
            {
              cards.map((props, index) => (
                <Card2 key={index} {...props} />))
            }
            <FiatCard />
            <Trustpilot />
          </div>
          <Currency />
          <How_it_works />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Home













