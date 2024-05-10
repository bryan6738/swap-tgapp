import React from 'react'
import Navbar from '../Components/Navbar'
import Exchanger from '../Components/Exchanger'
import Faqs from '../Components/Faqs'
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

const Home = () => {
  return (
    <>
      <div className='bg-regal-blue h-[550px]'>
        <Navbar />
        <div>
          <div className='flex  text-white flex-col justify-center p-4 items-center'>
            <h1 className='text-white leading-relaxed text-[40px]'>Crypto Exchange</h1>
            <p className='text-md font-normal  leading-tight text-center '>Free from sign-up, limits, complications</p>
          </div>
          <Exchanger />
        </div>
      </div>
      <div>
        <div className='bg-[#062769]'>
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













