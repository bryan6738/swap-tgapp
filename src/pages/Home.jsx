import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import Card2 from '../Components/Card2'
import Footer from '../Components/Footer'
import privacy_icon from '../assets/Home Infographics/PrivacyLogo.svg'
import variety_icon from '../assets/Home Infographics/VarietyLogo.svg'
import safety_icon from '../assets/Home Infographics/SafetyLogo.svg'
import support_icon from '../assets/Home Infographics/SupportLogo.svg'
import MainForm from '../Components/MainForm'
import transitionFade from '../assets/transitionfade.svg'
import CardShadow from '../assets/CardShadow.svg'

const cards = [
  {
    id: 0,
    title: 'Privacy',
    img: privacy_icon,
    text1: 'Sign-up is not required',
    text2: 'TeleSwap provides cryptocurrency exchange without User registration'
  },
  {
    id: 1,
    title: 'Wide choice',
    img: variety_icon,
    text1: '750+ cryptocurrencies',
    text2: 'Enjoy exchanging an incredible variety of Cryptocurrencies.'
  },
  {
    id: 2,
    title: 'Safety',
    img: safety_icon,
    text1: 'Non-custodial',
    text2: 'Crypto is sent directly to your wallet, we do not store it on our service.'
  },
  {
    id: 3,
    title: '24/7 support',
    img: support_icon,
    text1: 'We are always here',
    text2: 'Our Support team is easily reached, We are here to answer your questions.'
  },
]

const Home = ({ props }) => {
  const { exchangeInfo, setExchangeInfo } = props;

  return (
    <>
      <div className='min-h-screen flex flex-col relative' style={{ background: 'linear-gradient(to bottom, #E8E8E8, #C4EBF4, #7ECEE8)' }}>
        <Navbar />
        <div className='flex-grow container mx-auto px-4 py-8'>
          <div className='text-center mb-8'>
            <h1 className='text-4xl font- mb-2'>Crypto Exchange</h1>
            <p className='text-xl'>forget sign ups, just swap</p>
          </div>
          <div className='flex justify-center'>
            <MainForm {...{ exchangeInfo, setExchangeInfo }} />
          </div>
        </div>
        <img src={transitionFade} alt="Transition Fade" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full" style={{ zIndex: -10 }}/>
      </div>
      <div style={{ backgroundColor: 'white', width: '100%', padding: '2rem 0' }}>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl text-center mb-6'>Telegram's Premier<br /> Cross Chain Exchange</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {cards.map((card, index) => (
              <div key={index} className="relative">
                {(card.id === 0 || card.id === 3) && (
                  <img src={CardShadow} alt="Card Shadow" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400%] h-[400%]"/>
                )}
                <div className="relative z-10">
                  <Card2 {...card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
